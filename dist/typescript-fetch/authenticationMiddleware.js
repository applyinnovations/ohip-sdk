"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OhipCredentialsProvider = void 0;
const oauth_1 = require("./oauth");
const MAX_MS = 10 * 1000;
const MAX_RETRIES = 7;
const TOKEN_EXPIRY_BUFFER = 300 * 1000;
const delay = (ms) => new Promise((resolve) => {
    setTimeout(resolve, ms);
});
class OhipCredentialsProvider {
    constructor({ appKey, credentials, host, }) {
        this.authenticating = false;
        this.credentials = credentials;
        this.appKey = appKey;
        this.ohip = new oauth_1.AuthenticationApi(new oauth_1.Configuration({ host }));
    }
    setAccessToken(access_token) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.access_token == access_token) {
                return;
            }
            if (isAccessTokenExpired(access_token)) {
                // token is already expired
                return;
            }
            if (this.access_token &&
                getJWTExpiryDate(access_token) < getJWTExpiryDate(this.access_token)) {
                return;
            }
            this.access_token = access_token;
        });
    }
    renewCredentials({ retryCount, start = Date.now(), }) {
        return __awaiter(this, void 0, void 0, function* () {
            this.authenticating = true;
            try {
                // contact ohip for new credentials
                const retryPeriod = Math.pow(retryCount, 2) * 100; // milliseconds
                if (Date.now() - start > MAX_MS - retryPeriod) {
                    throw Error(`OHIP_AUTH_ERR: timeout reached while attempting to authenticate`);
                }
                yield delay(retryPeriod);
                const credentials = this.credentials[retryCount % this.credentials.length];
                try {
                    const res = yield this.ohip.getToken(Object.assign({ xAppKey: this.appKey, grantType: 'password' }, credentials));
                    if (res.accessToken && res.expiresIn) {
                        this.access_token = res.accessToken;
                    }
                    else {
                        throw Error(`OHIP_AUTH_ERR: access_token and expires_in missing from response`);
                    }
                }
                catch (e) {
                    console.error(e);
                    // recursively renew
                    if (retryCount < MAX_RETRIES) {
                        yield this.renewCredentials({ retryCount: retryCount + 1 });
                    }
                    else
                        throw Error(`OHIP_AUTH_ERR: maximum retry attempts exceeded`);
                }
            }
            finally {
                this.authenticating = false;
            }
        });
    }
    getAccessToken() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.loadToken();
            return this.access_token;
        });
    }
    loadToken() {
        return __awaiter(this, void 0, void 0, function* () {
            const start = Date.now();
            while (this.authenticating) {
                if (Date.now() - start > MAX_MS)
                    throw Error(`OHIP_AUTH_ERR: timeout reached while waiting for pre-existing authentication flow to complete`);
                yield delay(10);
            }
            if (isAccessTokenExpired(this.access_token)) {
                yield this.renewCredentials({ retryCount: 0, start });
            }
        });
    }
    authenticationMiddleware(context) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.loadToken();
            return Object.assign(Object.assign({}, context), { init: Object.assign(Object.assign({}, context.init), { headers: Object.assign(Object.assign({}, context.init.headers), { Authorization: `Bearer ${this.access_token}` }) }) });
        });
    }
}
exports.OhipCredentialsProvider = OhipCredentialsProvider;
function isAccessTokenExpired(token) {
    if (!token) {
        return true;
    }
    return getJWTExpiryDate(token) < +new Date() + TOKEN_EXPIRY_BUFFER;
}
function getJWTExpiryDate(token) {
    const parts = token.split('.');
    if (parts.length < 2) {
        return 0;
    }
    const payload = base64UrlDecode(parts[1]);
    let claims;
    try {
        claims = JSON.parse(payload);
    }
    catch (error) {
        return 0;
    }
    return claims.exp * 1000; // Convert seconds to milliseconds
}
function base64UrlDecode(input) {
    const base64 = input.replace(/-/g, '+').replace(/_/g, '/');
    const buffer = Buffer.from(base64, 'base64');
    return buffer.toString('utf-8');
}
