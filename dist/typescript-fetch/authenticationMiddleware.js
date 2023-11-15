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
const delay = (ms) => new Promise((resolve) => {
    setTimeout(resolve, ms);
});
class OhipCredentialsProvider {
    constructor({ appKey, credentials, access_token, expiry, host, }) {
        this.authenticating = false;
        this.credentials = credentials;
        this.appKey = appKey;
        this.ohip = new oauth_1.AuthenticationApi(new oauth_1.Configuration({ host }));
        if (!access_token || !expiry) {
            this.loadCredentials();
        }
        else {
            this.access_token = access_token;
            this.expiry = expiry;
        }
    }
    loadCredentials() {
        return __awaiter(this, void 0, void 0, function* () {
            // do nothing
            // optionally load from persistent storage
        });
    }
    storeCredentials() {
        return __awaiter(this, void 0, void 0, function* () {
            // do nothing
            // optionally store to persistent storage
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
                        this.expiry = Date.now() + res.expiresIn * 1000;
                        this.storeCredentials();
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
    authenticationMiddleware(context) {
        return __awaiter(this, void 0, void 0, function* () {
            // check authentication token expired or expires in less than 30 seconds
            const start = Date.now();
            while (this.authenticating) {
                if (Date.now() - start > MAX_MS)
                    throw Error(`OHIP_AUTH_ERR: timeout reached while waiting for pre-existing authentication flow to complete`);
                yield delay(10);
            }
            if (!this.access_token ||
                !this.expiry ||
                this.expiry - Date.now() < 30 * 1000) {
                yield this.renewCredentials({ retryCount: 0, start });
            }
            return Object.assign(Object.assign({}, context), { init: Object.assign(Object.assign({}, context.init), { headers: Object.assign(Object.assign({}, context.init.headers), { Authorization: `Bearer ${this.access_token}` }) }) });
        });
    }
}
exports.OhipCredentialsProvider = OhipCredentialsProvider;
