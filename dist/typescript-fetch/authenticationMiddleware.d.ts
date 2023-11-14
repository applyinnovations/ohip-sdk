import { AuthenticationApi, RequestContext } from './oauth';
type OhipCredential = {
    username: string;
    password: string;
};
export declare class OhipCredentialsProvider {
    authenticating: boolean;
    ohip: AuthenticationApi;
    appKey: string;
    credentials: OhipCredential[];
    access_token?: string;
    expiry?: number;
    constructor({ appKey, credentials, access_token, expiry, host, }: {
        appKey: string;
        host: string;
        credentials: OhipCredential[];
        access_token?: string;
        expiry?: number;
    });
    loadCredentials(): Promise<void>;
    storeCredentials(): Promise<void>;
    renewCredentials({ retryCount, start, }: {
        retryCount: number;
        start?: number;
    }): Promise<void>;
    authenticationMiddleware(context: RequestContext): Promise<void>;
}
export {};
