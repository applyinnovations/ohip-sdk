interface UserCredentail {
    username: string;
    password: string;
}
interface ApiOptions {
    hostName: string;
    appKey: string;
    clientId: string;
    clientSecret: string;
    credentials: Array<UserCredentail>;
}
export declare class Api {
    private options;
    private basicAuthToken;
    private token;
    private refreshToken;
    private tokenExpiration;
    private retryLimit;
    private activeCredentialIndex;
    private refreshTimeout;
    private clientDict;
    constructor(options: ApiOptions);
    get client(): {
        act: import("./api/act").Api<unknown>;
        actcfg: import("./api/actcfg").Api<unknown>;
        ars: import("./api/ars").Api<unknown>;
        blk: import("./api/blk").Api<unknown>;
        blkasync: import("./api/blkasync").Api<unknown>;
        blkcfg: import("./api/blkcfg").Api<unknown>;
        bof: import("./api/bof").Api<unknown>;
        chl: import("./api/chl").Api<unknown>;
        cms: import("./api/cms").Api<unknown>;
        crm: import("./api/crm").Api<unknown>;
        crmcfg: import("./api/crmcfg").Api<unknown>;
        crmoutbound: import("./api/crmoutbound").Api<unknown>;
        csh: import("./api/csh").Api<unknown>;
        cshoutbound: import("./api/cshoutbound").Api<unknown>;
        dvm: import("./api/dvm").Api<unknown>;
        entcfg: import("./api/entcfg").Api<unknown>;
        evm: import("./api/evm").Api<unknown>;
        evmcfg: import("./api/evmcfg").Api<unknown>;
        fof: import("./api/fof").Api<unknown>;
        fofcfg: import("./api/fofcfg").Api<unknown>;
        hsk: import("./api/hsk").Api<unknown>;
        int: import("./api/int").Api<unknown>;
        intcfg: import("./api/intcfg").Api<unknown>;
        inv: import("./api/inv").Api<unknown>;
        invasync: import("./api/invasync").Api<unknown>;
        lms: import("./api/lms").Api<unknown>;
        lov: import("./api/lov").Api<unknown>;
        medcfg: import("./api/medcfg").Api<unknown>;
        oauth: import("./api/oauth").Api<unknown>;
        oxi: import("./api/oxi").Api<unknown>;
        par: import("./api/par").Api<unknown>;
        parasync: import("./api/parasync").Api<unknown>;
        rmcfg: import("./api/rmcfg").Api<unknown>;
        rsv: import("./api/rsv").Api<unknown>;
        rsvasync: import("./api/rsvasync").Api<unknown>;
        rsvcfg: import("./api/rsvcfg").Api<unknown>;
        rtp: import("./api/rtp").Api<unknown>;
        rtpasync: import("./api/rtpasync").Api<unknown>;
        tokenexchange: import("./api/tokenexchange").Api<unknown>;
    };
    close(): void;
    private requestNewAuthToken;
    private renewAuthToken;
    private setTokenHeaders;
    private clearTokens;
    private isAuthTokenExpired;
    private handleClientRequest;
    private handleClientRequestError;
}
export {};
