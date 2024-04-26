import { AuthenticationApi, Configuration, RequestContext } from './oauth';

const MAX_MS = 10 * 1000;
const MAX_RETRIES = 7;
const TOKEN_EXPIRY_BUFFER = 300 * 1000;

type OhipCredential = {
  username: string;
  password: string;
};

interface OhipJWT {
  exp: number;
}

const delay = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

export class OhipCredentialsProvider {
  authenticating: boolean;
  ohip: AuthenticationApi;
  appKey: string;
  credentials: OhipCredential[];
  access_token?: string;

  constructor({
    appKey,
    credentials,
    host,
  }: {
    appKey: string;
    host: string;
    credentials: OhipCredential[];
    access_token?: string; // bearer token
    expiry?: number; // epoch seconds
  }) {
    this.authenticating = false;
    this.credentials = credentials;
    this.appKey = appKey;
    this.ohip = new AuthenticationApi(new Configuration({ host }));
  }

  async setAccessToken(access_token: string) {
    if (this.access_token == access_token) {
      return;
    }

    if (isAccessTokenExpired(access_token)) {
      // token is already expired
      return;
    }

    if (
      this.access_token &&
      getJWTExpiryDate(access_token) <
        getJWTExpiryDate(this.access_token) - TOKEN_EXPIRY_BUFFER
    ) {
      return;
    }

    this.access_token = access_token;
  }

  async renewCredentials({
    retryCount,
    start = Date.now(),
  }: {
    retryCount: number;
    start?: number;
  }) {
    this.authenticating = true;
    try {
      // contact ohip for new credentials
      const retryPeriod = retryCount ** 2 * 100; // milliseconds
      if (Date.now() - start > MAX_MS - retryPeriod) {
        throw Error(
          `OHIP_AUTH_ERR: timeout reached while attempting to authenticate`,
        );
      }
      await delay(retryPeriod);
      const credentials =
        this.credentials[retryCount % this.credentials.length];
      try {
        const res = await this.ohip.getToken({
          xAppKey: this.appKey,
          grantType: 'password',
          ...credentials,
        });
        if (res.accessToken && res.expiresIn) {
          this.access_token = res.accessToken;
        } else {
          throw Error(
            `OHIP_AUTH_ERR: access_token and expires_in missing from response`,
          );
        }
      } catch (e) {
        console.error(e);
        // recursively renew
        if (retryCount < MAX_RETRIES) {
          await this.renewCredentials({ retryCount: retryCount + 1 });
        } else throw Error(`OHIP_AUTH_ERR: maximum retry attempts exceeded`);
      }
    } finally {
      this.authenticating = false;
    }
  }

  async getAccessToken() {
    await this.loadToken();

    return this.access_token;
  }

  async loadToken() {
    const start = Date.now();
    while (this.authenticating) {
      if (Date.now() - start > MAX_MS)
        throw Error(
          `OHIP_AUTH_ERR: timeout reached while waiting for pre-existing authentication flow to complete`,
        );
      await delay(10);
    }
    if (isAccessTokenExpired(this.access_token)) {
      await this.renewCredentials({ retryCount: 0, start });
    }
  }

  async authenticationMiddleware(context: RequestContext) {
    await this.loadToken();

    return {
      ...context,
      init: {
        ...context.init,
        headers: {
          ...context.init.headers,
          Authorization: `Bearer ${this.access_token}`,
        },
      },
    };
  }
}

function isAccessTokenExpired(token?: string) {
  if (!token) {
    return true;
  }

  return getJWTExpiryDate(token) < +new Date() - TOKEN_EXPIRY_BUFFER;
}

function getJWTExpiryDate(token: string): number {
  const parts: string[] = token.split('.');

  if (parts.length < 2) {
    return 0;
  }

  const payload: string = base64UrlDecode(parts[1]);

  let claims: OhipJWT;
  try {
    claims = JSON.parse(payload);
  } catch (error) {
    return 0;
  }

  return claims.exp * 1000; // Convert seconds to milliseconds
}

function base64UrlDecode(input: string): string {
  const base64 = input.replace(/-/g, '+').replace(/_/g, '/');
  const buffer = Buffer.from(base64, 'base64');
  return buffer.toString('utf-8');
}
