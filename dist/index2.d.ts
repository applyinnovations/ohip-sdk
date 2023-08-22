import { ReservationApi } from './apis/fetch/rsv';
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded",
    Text = "text/plain"
}
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
export declare class Api {
    private options;
    private clientDict;
    private basicAuthToken;
    private token;
    private refreshToken;
    private tokenExpiration;
    private activeCredentialIndex;
    private requestingNewAuthToken;
    private refreshTimeout;
    private backoffTimeout;
    private authTries;
    constructor(options: ApiOptions);
    getClients(): Promise<ClientDictionary>;
    private initializeClient;
    private getAuthApi;
    private createClients;
    private handleClientRequest;
    private handleClientRequestError;
    private requestNewAuthToken;
    private isAuthTokenExpired;
    private setTokenHeaders;
    private clearTokens;
    private shouldBackOff;
    private setBackoffTimeout;
    private incrementActiveCrendentialIndex;
    private renewAuthToken;
}
export declare const OHIP_HOSTNAME: string, OHIP_APP_KEY: string, OHIP_CLIENT_ID: string, OHIP_CLIENT_SECRET: string, OHIP_USERNAME_1: string, OHIP_PASSWORD_1: string, OHIP_USERNAME_2: string, OHIP_PASSWORD_2: string, OHIP_HOTEL_ID: string;
export {};
