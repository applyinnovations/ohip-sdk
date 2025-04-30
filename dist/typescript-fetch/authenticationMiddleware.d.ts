import { AuthenticationApi, RequestContext } from './oauth';
type OhipCredential = {
    username: string;
    password: string;
};
export declare enum GrantTypeEnum {
    password = "password",
    client_credentials = "client_credentials"
}
export declare class OhipCredentialsProvider {
    authenticating: boolean;
    ohip: AuthenticationApi;
    appKey: string;
    credentials: OhipCredential[];
    grantType: GrantTypeEnum;
    clientId?: string;
    clientSecret?: string;
    scope?: string;
    enterpriseId?: string;
    access_token?: string;
    last_working_credential_idx: number;
    constructor({ appKey, credentials, grantType, clientId, clientSecret, enterpriseId, scope, host, }: {
        appKey: string;
        host: string;
        credentials: OhipCredential[];
        grantType: GrantTypeEnum;
        clientId?: string;
        clientSecret?: string;
        enterpriseId?: string;
        scope?: string;
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
