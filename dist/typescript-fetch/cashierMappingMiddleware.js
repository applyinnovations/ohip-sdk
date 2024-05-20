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
exports.OhipCashierMappingProvider = void 0;
class OhipCashierMappingProvider {
    constructor({ cashierMapping }) {
        this.usernameToCashierIdMapping = cashierMapping;
    }
    cashierMappingMiddleware(context) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const matchPattern = /"cashierId":-1/g;
            const { headers, body } = context.init;
            const headersString = JSON.stringify(headers);
            const mustReplaceBody = typeof body === 'string' && !!body.match(matchPattern);
            const mustReplaceHeaders = !!(headersString === null || headersString === void 0 ? void 0 : headersString.match(matchPattern));
            if (!mustReplaceHeaders && !mustReplaceBody)
                return context;
            // @ts-ignore
            const token = (_a = headers === null || headers === void 0 ? void 0 : headers.Authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
            const sub = getSubFromOhipAccessToken(token);
            if (!sub)
                throw new Error('invalid access token or sub missing');
            const cashierId = this.usernameToCashierIdMapping[sub];
            if (!cashierId)
                throw new Error('cashier id not found for sub specified in token');
            const intCashierId = parseInt(cashierId, 10);
            const newCashierIdString = `"cashierId":${intCashierId}`;
            return Object.assign(Object.assign({}, context), { init: Object.assign(Object.assign({}, context.init), { body: mustReplaceBody
                        ? body.replace(matchPattern, newCashierIdString)
                        : body, headers: mustReplaceHeaders
                        ? JSON.parse(headersString.replace(matchPattern, newCashierIdString))
                        : headers }) });
        });
    }
}
exports.OhipCashierMappingProvider = OhipCashierMappingProvider;
function getSubFromOhipAccessToken(token) {
    const parts = token.split('.');
    if (parts.length < 2) {
        return null;
    }
    const payload = base64UrlDecode(parts[1]);
    let claims;
    try {
        claims = JSON.parse(payload);
    }
    catch (error) {
        return null;
    }
    return claims.sub;
}
function base64UrlDecode(input) {
    const base64 = input.replace(/-/g, '+').replace(/_/g, '/');
    const buffer = Buffer.from(base64, 'base64');
    return buffer.toString('utf-8');
}
