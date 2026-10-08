const assert = require('node:assert/strict');
const test = require('node:test');
const { createServer } = require('node:http');
const { performance } = require('node:perf_hooks');

const {
  GrantTypeEnum,
  OhipCredentialsProvider,
} = require('../../dist/typescript-fetch/authenticationMiddleware.js');

function token(claims) {
  const header = Buffer.from(JSON.stringify({ alg: 'none' })).toString('base64url');
  const payload = Buffer.from(JSON.stringify(claims)).toString('base64url');
  return `${header}.${payload}.signature`;
}

test('password authentication uses the first configured credential', async () => {
  const provider = new OhipCredentialsProvider({
    appKey: 'app-key',
    credentials: [{ username: 'first-user', password: 'first-password' }],
    grantType: GrantTypeEnum.password,
    host: 'https://example.invalid',
  });

  provider.ohip = {
    async getToken(request) {
      assert.equal(request.username, 'first-user');
      assert.equal(request.password, 'first-password');
      return {
        accessToken: token({ exp: Math.floor(Date.now() / 1000) + 3600 }),
        expiresIn: 3600,
      };
    },
  };

  assert.match(await provider.getAccessToken(), /^[^.]+\.[^.]+\.signature$/);
});

test('client credentials authentication supplies enterprise and scope', async () => {
  const provider = new OhipCredentialsProvider({
    appKey: 'app-key',
    clientId: 'client-id',
    clientSecret: 'client-secret',
    enterpriseId: 'enterprise-id',
    grantType: GrantTypeEnum.client_credentials,
    host: 'https://example.invalid',
    scope: 'urn:opc:hgbu:ws:__myscopes__',
  });

  provider.ohip = {
    async getToken(request) {
      assert.equal(request.enterpriseId, 'enterprise-id');
      assert.equal(request.scope, 'urn:opc:hgbu:ws:__myscopes__');
      return {
        accessToken: token({ exp: Math.floor(Date.now() / 1000) + 3600 }),
        expiresIn: 3600,
      };
    },
  };

  assert.ok(await provider.getAccessToken());
});

test('an expired token is not accepted', async () => {
  const provider = new OhipCredentialsProvider({
    appKey: 'app-key',
    credentials: [],
    grantType: GrantTypeEnum.password,
    host: 'https://example.invalid',
  });

  const accepted = await provider.setAccessToken(
    token({ exp: Math.floor(Date.now() / 1000) - 60 }),
  );
  assert.equal(accepted, false);
  assert.equal(provider.access_token, undefined);
});

// These regressions use the generated OAuth client and real Node HTTP/fetch.
// The only substituted fetch refuses off-fixture requests and redirects.
async function wireFixture(t, grantType, respond) {
  const requests = [];
  const handlerErrors = [];
  const fixture = { requests, respond };
  const server = createServer(async (request, response) => {
    try {
      const chunks = [];
      for await (const chunk of request) chunks.push(chunk);
      const entry = {
        method: request.method,
        path: request.url,
        headers: request.headers,
        form: new URLSearchParams(Buffer.concat(chunks).toString('utf8')),
      };
      requests.push(entry);
      await fixture.respond(response, entry);
    } catch (error) {
      handlerErrors.push(error);
      response.destroy();
    }
  });
  await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', resolve);
  });
  const origin = `http://127.0.0.1:${server.address().port}`;
  const nativeFetch = globalThis.fetch;
  t.mock.method(globalThis, 'fetch', (input, init = {}) => {
    const target = new URL(typeof input === 'string' ? input : input.url ?? input);
    assert.equal(target.origin, origin, 'OAuth must remain inside the fixture');
    return nativeFetch(input, {
      ...init,
      redirect: 'error',
      // Harness guard exceeds the known 14s before-source sequence. It is not
      // evidence that the SDK bounds an in-flight token HTTP request.
      signal: init.signal ?? AbortSignal.timeout(20000),
    });
  });
  // Avoid dumping even synthetic response errors; HTTP/auth is never mocked.
  t.mock.method(console, 'error', () => {});
  t.after(async () => {
    server.closeAllConnections();
    await new Promise(resolve => server.close(resolve));
    assert.equal(handlerErrors.length, 0);
  });
  fixture.provider = new OhipCredentialsProvider({
    appKey: 'synthetic-app-key',
    host: origin,
    grantType,
    credentials: [
      { username: 'synthetic-first', password: 'synthetic-password-first' },
      { username: 'synthetic-second', password: 'synthetic-password-second' },
    ],
    clientId: 'synthetic-client',
    clientSecret: 'synthetic-secret',
    enterpriseId: 'SYNTHETIC-ENTERPRISE',
    scope: 'urn:synthetic:scope',
  });
  return fixture;
}

function sendJson(response, status, body) {
  response.writeHead(status, { 'content-type': 'application/json' });
  response.end(JSON.stringify(body));
}

function sendToken(response) {
  sendJson(response, 200, {
    access_token: token({ exp: Math.floor(Date.now() / 1000) + 3600 }),
    expires_in: 3600,
    token_type: 'Bearer',
  });
}

function assertWire(requests, grantType) {
  for (const entry of requests) {
    assert.equal(entry.method, 'POST');
    assert.equal(entry.path, '/oauth/v1/tokens');
    assert.equal(entry.headers['x-app-key'], 'synthetic-app-key');
    assert.equal(entry.form.get('grant_type'), grantType);
    if (grantType === GrantTypeEnum.client_credentials) {
      assert.equal(entry.headers.authorization,
        `Basic ${Buffer.from('synthetic-client:synthetic-secret').toString('base64')}`);
      assert.equal(entry.headers.enterpriseid, 'SYNTHETIC-ENTERPRISE');
      assert.equal(entry.form.get('scope'), 'urn:synthetic:scope');
      assert.equal(entry.form.has('username'), false);
      assert.equal(entry.form.has('password'), false);
    } else {
      assert.ok(['synthetic-first', 'synthetic-second'].includes(entry.form.get('username')));
      assert.equal(entry.form.get('password'),
        entry.form.get('username') === 'synthetic-first'
          ? 'synthetic-password-first' : 'synthetic-password-second');
    }
  }
}

for (const grantType of [GrantTypeEnum.password, GrantTypeEnum.client_credentials]) {
  test(`${grantType} retries retain the original ten-second budget`, { timeout: 20000 }, async t => {
    const fixture = await wireFixture(t, grantType, response => {
      sendJson(response, 503, { error: 'temporarily_unavailable' });
    });
    const started = performance.now();
    let failure;
    try {
      await fixture.provider.getAccessToken();
    } catch (error) {
      failure = error;
    }
    const elapsed = performance.now() - started;
    assert.ok(fixture.requests.length > 1, 'the real retry path must execute');
    assertWire(fixture.requests, grantType);
    assert.equal(fixture.provider.authenticating, false);
    assert.equal(fixture.provider.access_token, undefined);
    // The declared MAX_MS is10000; allow500ms for loopback/scheduler overhead.
    // No arbitrary attempt count is asserted independently of elapsed time.
    assert.ok(elapsed <= 10500, `completed renewal took ${elapsed.toFixed(0)}ms`);
    assert.match(failure?.message ?? '', /timeout reached while attempting to authenticate/);
    const beforeRecovery = fixture.requests.length;
    fixture.respond = sendToken;
    assert.ok(await fixture.provider.getAccessToken());
    assert.equal(fixture.requests.length, beforeRecovery + 1);
    assert.equal(fixture.provider.authenticating, false);
  });

  test(`${grantType} rejects an exhausted supplied budget before sending`, async t => {
    const fixture = await wireFixture(t, grantType, sendToken);
    await assert.rejects(
      fixture.provider.renewCredentials({ retryCount: 0, start: Date.now() - 10001 }),
      /timeout reached while attempting to authenticate/,
    );
    assert.equal(fixture.requests.length, 0);
    assert.equal(fixture.provider.authenticating, false);
  });

  test(`${grantType} can recover before the original deadline`, async t => {
    let calls = 0;
    const fixture = await wireFixture(t, grantType, response => {
      calls += 1;
      if (calls === 1) sendJson(response, 503, { error: 'temporarily_unavailable' });
      else sendToken(response);
    });
    const accessToken = await fixture.provider.getAccessToken();
    assert.ok(accessToken);
    assert.equal(fixture.requests.length, 2);
    assertWire(fixture.requests, grantType);
    assert.equal(fixture.provider.authenticating, false);
    if (grantType === GrantTypeEnum.password) {
      assert.equal(fixture.requests[0].form.get('username'), 'synthetic-first');
      assert.equal(fixture.requests[1].form.get('username'), 'synthetic-second');
      await fixture.provider.renewCredentials({ retryCount: 0 });
      assert.equal(fixture.requests[2].form.get('username'), 'synthetic-second');
    }
  });
}

test('existing concurrent waiters complete after a transient token failure', async t => {
  let calls = 0;
  const fixture = await wireFixture(t, GrantTypeEnum.client_credentials, response => {
    calls += 1;
    if (calls === 1) sendJson(response, 503, { error: 'temporarily_unavailable' });
    else sendToken(response);
  });
  const tokens = await Promise.all([
    fixture.provider.getAccessToken(),
    fixture.provider.getAccessToken(),
  ]);
  assert.equal(tokens[0], tokens[1]);
  assert.ok(tokens[0]);
  assert.equal(fixture.requests.length, 2);
  assert.equal(fixture.provider.authenticating, false);
});

test('the existing maximum retry guard remains in force', { timeout: 10000 }, async t => {
  const fixture = await wireFixture(t, GrantTypeEnum.client_credentials, response => {
    sendJson(response, 503, { error: 'temporarily_unavailable' });
  });
  await assert.rejects(
    fixture.provider.renewCredentials({ retryCount: 7 }),
    /maximum retry attempts exceeded/,
  );
  assert.equal(fixture.requests.length, 1);
  assert.equal(fixture.provider.authenticating, false);
});
