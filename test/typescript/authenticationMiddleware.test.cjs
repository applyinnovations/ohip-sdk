const assert = require('node:assert/strict');
const test = require('node:test');

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
