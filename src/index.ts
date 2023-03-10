import Axios, { AxiosError, AxiosRequestConfig } from 'axios';
import qs from 'qs';

import { createClients, ContentType } from './api';
import { OAuth2TokenResponse } from './api/oauth';

interface ApiOptions {
  hostName: string;
  appKey: string;
  clientId: string;
  clientSecret: string;
  username: string;
  password: string;
}

const REQUEST_RETRY_LIMIT = 1;

function isAxiosError(error: any): error is AxiosError {
  return !!error.response && !!error.config;
}

export class Api {
  private basicAuthToken: string;
  private token: string;
  private refreshToken: string;
  private tokenExpiration: number;
  private retryLimit = 0;

  private refreshTimeout: NodeJS.Timeout;

  private clientDict: ReturnType<typeof createClients>;

  constructor(private options: ApiOptions) {
    // Basic authentication usint Client ID and secret
    this.basicAuthToken = Buffer.from(
      `${this.options.clientId}:${this.options.clientSecret}`,
    ).toString('base64');

    this.clientDict = createClients({
      baseURL: this.options.hostName,
      headers: { 'x-app-key': this.options.appKey },
      paramsSerializer: {
        serialize(params) {
          return qs.stringify(params, { arrayFormat: 'repeat' });
        },
      },
    });

    Object.entries(this.clientDict)
      .filter(([id]) => id !== 'oauth')
      .forEach(([_, client]) => {
        client.instance.interceptors.request.use(this.handleClientRequest);
        client.instance.interceptors.response.use(
          undefined,
          this.handleClientRequestError,
        );
      });
  }

  public get client() {
    return this.clientDict;
  }

  public close() {
    clearTimeout(this.refreshTimeout);
  }

  private async requestNewAuthToken() {
    this.clearTokens();
    try {
      const { data } = await this.clientDict.oauth.tokens.getToken(
        {
          grant_type: 'password',
          username: this.options.username,
          password: this.options.password,
        },
        {
          type: ContentType.UrlEncoded,
          headers: {
            Authorization: `Basic ${this.basicAuthToken}`,
          },
        },
      );
      this.setTokenHeaders(data);
    } catch (error) {
      console.error('Requesting new OHIP session token failed', error);
      this.clearTokens();
      throw error;
    }
  }

  private async renewAuthToken() {
    try {
      const { data } = await this.clientDict.oauth.tokens.getToken(
        {
          // @ts-ignore
          grant_type: 'refresh_token',
          refresh_token: this.refreshToken,
        },
        {
          type: ContentType.UrlEncoded,
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

  private setTokenHeaders(response: OAuth2TokenResponse) {
    // @ts-ignore
    this.refreshToken = response.refresh_token;
    this.token = response.access_token;
    // response.expires_in is in number of seconds. Multiply it by 90% of 1000ms
    this.tokenExpiration = Date.now() + (response.expires_in ?? 0) * 900;
    this.retryLimit = 0;
  }

  private clearTokens() {
    this.refreshToken = undefined;
    this.token = undefined;
    this.tokenExpiration = undefined;
  }

  private isAuthTokenExpired() {
    return Date.now() > this.tokenExpiration;
  }

  private handleClientRequest = async (config: AxiosRequestConfig) => {
    if (!this.token) {
      await this.requestNewAuthToken();
    } else if (this.isAuthTokenExpired()) {
      await this.renewAuthToken();
    }
    config.headers['Authorization'] = `Bearer ${this.token}`;

    return config;
  };

  private handleClientRequestError = async (error: unknown) => {
    if (
      !isAxiosError(error) ||
      ![401, 403].includes(error.response.status) ||
      this.retryLimit >= REQUEST_RETRY_LIMIT
    )
      return Promise.reject(error);

    // Retry get request
    console.warn(
      `OHIP responded with error code ${error.response.status}, renewing access token and resending request.`,
    );
    this.retryLimit += 1;
    await this.requestNewAuthToken();
    error.config.headers['Authorization'] = `Bearer ${this.token}`;
    return Axios.request(error.config);
  };
}
