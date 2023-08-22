import { BASE_PATH, Configuration, ReservationApi } from './apis/fetch/rsv';
import {
  BASE_PATH as AUTH_BASE_PATH,
  AuthenticationApi,
  Configuration as AuthConfig,
  OAuth2TokenResponse,
} from './apis/fetch/oauth';
import fs from 'fs';
import Axios, { AxiosError, AxiosRequestConfig } from 'axios';

const GENERATED_OUTPUT_DIRECTORY = 'src/apis/fetch';

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

function isAxiosError(error: any): error is AxiosError {
  return !!error.response && !!error.config;
}

const getFileNames = (path): Promise<string[]> =>
  new Promise((res, rej) => {
    fs.readdir(path, function (err, files) {
      if (err) {
        rej(err);
      }
      res(files);
    });
  });
const getAllClients = async () => {
  const clientNames = await getFileNames(GENERATED_OUTPUT_DIRECTORY);
  const clientNameWithAPis = await Promise.all(
    clientNames.map(async (clientName) => {
      const clientAPIs = await getFileNames(
        `${GENERATED_OUTPUT_DIRECTORY}/${clientName}/apis`,
      );

      return {
        clientName,
        clientAPIs,
      };
    }),
  );

  const allClients = clientNameWithAPis?.map(({ clientAPIs, clientName }) => {
    const filteredClientAPIs = clientAPIs.filter(
      (item) =>
        typeof item === 'string' &&
        item !== 'index.ts' &&
        item.split('.').pop() === 'ts',
    );

    const client = filteredClientAPIs.map((clientApiFileName) => {
      const apiName = clientApiFileName.split('.')[0];

      return {
        apiName,
        api: require(`./apis/fetch/${clientName}/apis/${clientApiFileName}`)[
          apiName
        ],
      };
    });

    return {
      name: clientName,
      apis: client,
    };
  });

  return allClients;
};

interface UserCredential {
  username: string;
  password: string;
}

interface ApiOptions {
  hostName: string;
  appKey: string;
  clientId: string;
  clientSecret: string;
  credentials: Array<UserCredential>;
  maxBackOffTimeoutToWait?: number;
  maxBackOffTimeout?: number;
  baseBackOffTimeout?: number;
  hotelId: string;
}

interface ClientDictionary {
  rsv: {
    ReservationApi: {
      getReservations: ReservationApi['getReservations'];
      postReservation: ReservationApi['postReservation'];
    };
  };
}

export class Api {
  private clientDict: ClientDictionary;

  private basicAuthToken: string;
  private token: string;
  private refreshToken: string;
  private tokenExpiration: number;
  private activeCredentialIndex: number;
  private requestingNewAuthToken: Promise<void>;
  private refreshTimeout: NodeJS.Timeout;
  private backoffTimeout = 0;
  private authTries = 0;

  constructor(private options: ApiOptions) {
    this.options = {
      maxBackOffTimeoutToWait: 1000,
      baseBackOffTimeout: 1,
      maxBackOffTimeout: 60 * 60 * 1000,
      ...options,
    };

    this.initializeClient();
    this.basicAuthToken = Buffer.from(
      `${this.options.clientId}:${this.options.clientSecret}`,
    ).toString('base64');
  }

  public getClients() {
    return this.createClients();
  }

  private async initializeClient() {
    this.clientDict = await this.createClients();
  }

  private getAuthApi = () => {
    const authConfig = new AuthConfig({
      apiKey: this.options.appKey,
      basePath: `${this.options.hostName}${AUTH_BASE_PATH}`,
    });
    const authApi = new AuthenticationApi(authConfig);

    return authApi;
  };

  private createClients = async (): Promise<ClientDictionary> => {
    const clients = await getAllClients();
    const configuredClients = clients?.reduce((allClients, currentClient) => {
      return {
        ...allClients,
        [currentClient.name]: currentClient.apis
          ?.map((currentApi) => {
            const ApiRuntimeConfig = require(`./apis/fetch/${currentClient.name}/runtime`);

            const baseConfiguration = new ApiRuntimeConfig.Configuration({
              apiKey: this.options.appKey,
              basePath: `${this.options.hostName}${ApiRuntimeConfig.BASE_PATH}`,
            });

            const apiCLass = new currentApi.api(baseConfiguration);

            return {
              name: currentApi.apiName,
              apis: Object.getOwnPropertyNames(Object.getPrototypeOf(apiCLass))
                ?.filter((item) => item !== 'constructor')
                .map((apiMethodClassName) => {
                  return {
                    name: apiMethodClassName,
                    method: async (params) => {
                      try {
                        await this.handleClientRequest();
                        return apiCLass[apiMethodClassName]({
                          hotelIds: [OHIP_HOTEL_ID],
                          authorization: `Bearer ${this.token}`,
                          xAppKey: this.options.appKey,
                          xHotelid: OHIP_HOTEL_ID,
                          ...params,
                        });
                      } catch (e) {
                        this.handleClientRequestError(e);
                      }
                    },
                  };
                })
                .reduce((accum, curr) => ({
                  ...accum,
                  [curr.name]: curr.method,
                })),
            };
          }, {})
          .reduce((accum, curr) => {
            return {
              ...accum,
              [curr.name]: curr.apis,
            };
          }),
      };
    }, {});
    return configuredClients as ClientDictionary;
  };

  private handleClientRequest = async () => {
    if (!this.token) {
      await this.requestNewAuthToken();
    } else if (this.isAuthTokenExpired()) {
      await this.renewAuthToken();
    }
  };

  private handleClientRequestError = async (error: unknown) => {
    console.log('this is the error response', JSON.stringify(error, null, 2));
    if (!isAxiosError(error) || ![401, 403].includes(error.response.status))
      return Promise.reject(error);

    await this.requestNewAuthToken();

    if (!this.token) return Promise.reject(error);

    error.config.headers['Authorization'] = `Bearer ${this.token}`;

    return Axios.request(error.config);
  };

  private async requestNewAuthToken() {
    // a request for a new token is already in progress
    // just wait for it to finish instead of trying to request a new one
    if (this.requestingNewAuthToken) {
      await this.requestingNewAuthToken;
      return;
    }

    if (this.shouldBackOff()) {
      const backOffMsRemaining = this.backoffTimeout - new Date().getTime();
      if (backOffMsRemaining > this.options.maxBackOffTimeoutToWait) {
        console.log(
          `Backing off for ${backOffMsRemaining}ms: Max backoff timeout to wait reached...`,
        );
      } else {
        console.log(
          `Backing off for ${backOffMsRemaining}ms: Waiting for new token...`,
        );
        await delay(backOffMsRemaining);
        await this.requestNewAuthToken();
      }

      return;
    }

    this.requestingNewAuthToken = new Promise<void>(async (resolve) => {
      this.authTries++;
      this.incrementActiveCrendentialIndex();
      this.clearTokens();

      try {
        console.log(
          `Requesting new OHIP session token using credentials[${this.activeCredentialIndex}]`,
        );

        const authApi = this.getAuthApi();
        const data = await authApi.getToken({
          xAppKey: this.options.appKey,
          grantType: 'password',
          username:
            this.options.credentials[this.activeCredentialIndex].username,
          password:
            this.options.credentials[this.activeCredentialIndex].password,
        });

        this.setTokenHeaders(data);
        this.authTries = 0;
      } catch (error) {
        console.error('Requesting new OHIP session token failed', error);
        this.setBackoffTimeout();
      }
      resolve();
      this.requestingNewAuthToken = undefined;
    });

    return this.requestingNewAuthToken;
  }

  private isAuthTokenExpired() {
    return Date.now() > this.tokenExpiration;
  }
  private setTokenHeaders(response: OAuth2TokenResponse) {
    // @ts-ignoregit st
    this.refreshToken = response.refresh_token;
    this.token = response.accessToken;
    // response.expires_in is in number of seconds. Multiply it by 90% of 1000ms
    this.tokenExpiration = Date.now() + (response.expiresIn ?? 0) * 900;
  }

  private clearTokens() {
    this.refreshToken = undefined;
    this.token = undefined;
    this.tokenExpiration = undefined;
  }

  private shouldBackOff() {
    if (this.authTries === 0) return false;

    return new Date().getTime() < this.backoffTimeout;
  }

  private setBackoffTimeout() {
    if (this.activeCredentialIndex !== this.options.credentials.length - 1)
      return;

    const delay = Math.min(
      this.options.baseBackOffTimeout *
        Math.pow(
          10,
          Math.floor(this.authTries / this.options.credentials.length),
        ),
      this.options.maxBackOffTimeout,
    );

    if (delay === this.options.maxBackOffTimeout) {
      // if this happens we probably have the wrong password set in the config
      console.error('Max backoff timeout reached. Check OHIP credentials.');
    }

    this.backoffTimeout = new Date().getTime() + delay;
  }

  private async incrementActiveCrendentialIndex() {
    if (
      this.activeCredentialIndex === undefined ||
      this.activeCredentialIndex + 1 >= this.options.credentials.length
    ) {
      this.activeCredentialIndex = 0;
    } else {
      this.activeCredentialIndex += 1;
    }
  }

  private async renewAuthToken() {
    try {
      const authApi = this.getAuthApi();
      const data = await authApi.getToken(
        {
          // @ts-ignore
          grant_type: 'refresh_token',
          refresh_token: this.refreshToken,
          xAppKey: this.options.appKey,
        },
        {
          headers: {
            Authorization: `Basic ${this.basicAuthToken}`,
          },
        },
      );

      this.setTokenHeaders(data);
    } catch (error) {
      console.error('Refreshing OHIP session token failed', error);
      await this.requestNewAuthToken();
    }
  }
}

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const {
  OHIP_HOSTNAME,
  OHIP_APP_KEY,
  OHIP_CLIENT_ID,
  OHIP_CLIENT_SECRET,
  OHIP_USERNAME_1,
  OHIP_PASSWORD_1,
  OHIP_USERNAME_2,
  OHIP_PASSWORD_2,
  OHIP_HOTEL_ID,
} = process.env;

async function main() {
  const api = new Api({
    hostName: OHIP_HOSTNAME,
    hotelId: OHIP_HOTEL_ID,
    appKey: OHIP_APP_KEY,
    clientId: OHIP_CLIENT_ID,
    clientSecret: OHIP_CLIENT_SECRET,
    credentials: [
      {
        username: OHIP_USERNAME_1,
        password: OHIP_PASSWORD_1,
      },
      {
        username: OHIP_USERNAME_2,
        password: OHIP_PASSWORD_2,
      },
    ],
  });

  console.log('initiating clients');
  const clients = await api.getClients();

  console.log('getting reservation');
  const getReservation = async () => {
    try {
      // @ts-ignore
      const resp = await clients.rsv.ReservationApi.getReservations({});
      console.log('respnse', JSON.stringify(resp.reservations));
    } catch (e) {
      console.log('retrying', e);
    }
  };

  await getReservation();
}

main();
