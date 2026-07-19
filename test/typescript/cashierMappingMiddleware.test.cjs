const assert = require('node:assert/strict');
const test = require('node:test');

const {
  OhipCashierMappingProvider,
} = require('../../dist/typescript-fetch/cashierMappingMiddleware.js');

function token(claims) {
  const header = Buffer.from(JSON.stringify({ alg: 'none' })).toString('base64url');
  const payload = Buffer.from(JSON.stringify(claims)).toString('base64url');
  return `${header}.${payload}.signature`;
}

test('cashier middleware maps the authenticated subject in request bodies', async () => {
  const provider = new OhipCashierMappingProvider({
    cashierMapping: { 'opera-user': '42' },
  });
  const context = {
    init: {
      body: '{"cashierId":-1}',
      headers: { Authorization: `Bearer ${token({ sub: 'opera-user' })}` },
    },
  };

  const updated = await provider.cashierMappingMiddleware(context);
  assert.equal(updated.init.body, '{"cashierId":42}');
});

test('cashier middleware leaves unrelated requests untouched', async () => {
  const provider = new OhipCashierMappingProvider({ cashierMapping: {} });
  const context = { init: { body: '{}', headers: {} } };
  assert.equal(await provider.cashierMappingMiddleware(context), context);
});
