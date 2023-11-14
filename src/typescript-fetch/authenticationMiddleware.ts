import { AuthenticationApi, Configuration, RequestContext } from './oauth';

const MAX_MS = 10 * 1000;
const MAX_RETRIES = 7;

type OhipCredential = {
  username: string;
  password: string;
};

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
  expiry?: number;

  constructor({
    appKey,
    credentials,
    access_token,
    expiry,
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
    if (!access_token || !expiry) {
      this.loadCredentials();
    } else {
      this.access_token = access_token;
      this.expiry = expiry;
    }
  }

  async loadCredentials() {
    // do nothing
    // optionally load from persistent storage
  }

  async storeCredentials() {
    // do nothing
    // optionally store to persistent storage
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
          this.expiry = Date.now() + res.expiresIn * 1000;
          this.storeCredentials();
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

  async authenticationMiddleware(context: RequestContext) {
    // check authentication token expired or expires in less than 30 seconds
    const start = Date.now();
    while (this.authenticating) {
      if (Date.now() - start > MAX_MS)
        throw Error(
          `OHIP_AUTH_ERR: timeout reached while waiting for pre-existing authentication flow to complete`,
        );
      await delay(10);
    }
    if (
      !this.access_token ||
      !this.expiry ||
      this.expiry - Date.now() < 30 * 1000
    ) {
      await this.renewCredentials({ retryCount: 0, start });
    }
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
