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
    last_working_credential_idx: number;
    constructor({ appKey, credentials, host, }: {
        appKey: string;
        host: string;
        credentials: OhipCredential[];
        access_token?: string;
        expiry?: number;
    });
    setAccessToken(access_token: string): Promise<boolean>;
    renewCredentials({ retryCount, start, }: {
        retryCount: number;
        start?: number;
    }): Promise<void>;
    getAccessToken(): Promise<string | undefined>;
    loadToken(): Promise<void>;
    authenticationMiddleware(context: RequestContext): Promise<RequestContext>;
}
export {};
