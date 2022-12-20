import { AxiosRequestConfig } from 'axios';
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

export class Api {
  private basicAuthToken: string;
  private token: string;
  private refreshToken: string;
  private tokenExpiration: number;

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
      });

    this.initializeSession();
  }

  public get client() {
    return this.clientDict;
  }

  public close() {
    clearTimeout(this.refreshTimeout);
  }

  private initializeSession() {
    const request = this.clientDict.oauth.tokens
      .getToken(
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
      )
      .then(({ data }) => {
        this.setTokenHeaders(data);
      });

    this.updatePrerequest(request);
    this.refreshSessionJustBeforeExpiry();
  }

  private refreshSessionJustBeforeExpiry() {
    if (!this.tokenExpiration) return;

    this.refreshTimeout = setTimeout(() => {
      if (!this.refreshToken) {
        this.initializeSession();
        return;
      }

      const request = this.clientDict.oauth.tokens
        .getToken(
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
        )
        .then(({ data }) => {
          this.setTokenHeaders(data);
        });

      this.updatePrerequest(request);
      this.refreshSessionJustBeforeExpiry();
    }, this.tokenExpiration * 900);
  }

  private setTokenHeaders(response: OAuth2TokenResponse) {
    // @ts-ignore
    this.refreshToken = response.refresh_token;
    this.token = response.access_token;
    this.tokenExpiration = response.expires_in;
  }

  private updatePrerequest(request: Promise<any>) {
    Object.entries(this.clientDict)
      .filter(([id]) => id !== 'oauth')
      .forEach(([_, client]) => {
        // Every request waits for the prerequest to finish before starting the actual request
        // This ensures that auth tokens are already available before the actual request is sent
        client.prerequest = request;
      });
  }

  private handleClientRequest = (config: AxiosRequestConfig) => {
    config.headers['Authorization'] = `Bearer ${this.token}`;

    return config;
  };
}
