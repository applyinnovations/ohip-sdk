"use strict";
/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = exports.HttpClient = exports.ContentType = exports.StatusColorType = exports.BlockStatusCodeStatusType = void 0;
/** Simple type for block status code's room status type and catering status type. Valid status values are Waitlist,Cancel,Lost,Refused,Actual,Inquiry,NonDeductInv,DeductInv and Referral. */
var BlockStatusCodeStatusType;
(function (BlockStatusCodeStatusType) {
    BlockStatusCodeStatusType["Waitlist"] = "Waitlist";
    BlockStatusCodeStatusType["Cancel"] = "Cancel";
    BlockStatusCodeStatusType["Lost"] = "Lost";
    BlockStatusCodeStatusType["Refused"] = "Refused";
    BlockStatusCodeStatusType["Actual"] = "Actual";
    BlockStatusCodeStatusType["Inquiry"] = "Inquiry";
    BlockStatusCodeStatusType["NonDeductInv"] = "NonDeductInv";
    BlockStatusCodeStatusType["DeductInv"] = "DeductInv";
    BlockStatusCodeStatusType["Referral"] = "Referral";
})(BlockStatusCodeStatusType = exports.BlockStatusCodeStatusType || (exports.BlockStatusCodeStatusType = {}));
/** Status code color configuration type. */
var StatusColorType;
(function (StatusColorType) {
    StatusColorType["White"] = "White";
    StatusColorType["Red"] = "Red";
    StatusColorType["Blue"] = "Blue";
    StatusColorType["Cyan"] = "Cyan";
    StatusColorType["Magenta"] = "Magenta";
    StatusColorType["Green"] = "Green";
    StatusColorType["Brown"] = "Brown";
    StatusColorType["Black"] = "Black";
    StatusColorType["Yellow"] = "Yellow";
    StatusColorType["Gray"] = "Gray";
})(StatusColorType = exports.StatusColorType || (exports.StatusColorType = {}));
const axios_1 = __importDefault(require("axios"));
var ContentType;
(function (ContentType) {
    ContentType["Json"] = "application/json";
    ContentType["FormData"] = "multipart/form-data";
    ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
    ContentType["Text"] = "text/plain";
})(ContentType = exports.ContentType || (exports.ContentType = {}));
class HttpClient {
    constructor(_a = {}) {
        var { securityWorker, secure, format } = _a, axiosConfig = __rest(_a, ["securityWorker", "secure", "format"]);
        this.prerequest = Promise.resolve();
        this.securityData = null;
        this.setSecurityData = (data) => {
            this.securityData = data;
        };
        this.request = async (_a) => {
            var { secure, path, type, query, format, body } = _a, params = __rest(_a, ["secure", "path", "type", "query", "format", "body"]);
            // Wait for the prerequest to resolve before proceeding with the actual request. Useful for waiting for fetching auth tokens
            await this.prerequest;
            const secureParams = ((typeof secure === 'boolean' ? secure : this.secure) &&
                this.securityWorker &&
                (await this.securityWorker(this.securityData))) ||
                {};
            const requestParams = this.mergeRequestParams(params, secureParams);
            const responseFormat = format || this.format || undefined;
            if (type === ContentType.FormData && body && body !== null && typeof body === 'object') {
                body = this.createFormData(body);
            }
            if (type === ContentType.Text && body && body !== null && typeof body !== 'string') {
                body = JSON.stringify(body);
            }
            return this.instance.request(Object.assign(Object.assign({}, requestParams), { headers: Object.assign(Object.assign({}, (requestParams.headers || {})), (type && type !== ContentType.FormData ? { 'Content-Type': type } : {})), params: query, responseType: responseFormat, data: body, url: path }));
        };
        this.instance = axios_1.default.create(Object.assign(Object.assign({}, axiosConfig), { baseURL: new URL('/blk/config/v1', axiosConfig.baseURL).toString() }));
        this.secure = secure;
        this.format = format;
        this.securityWorker = securityWorker;
    }
    mergeRequestParams(params1, params2) {
        const method = params1.method || (params2 && params2.method);
        return Object.assign(Object.assign(Object.assign(Object.assign({}, this.instance.defaults), params1), (params2 || {})), { headers: Object.assign(Object.assign(Object.assign({}, ((method && this.instance.defaults.headers[method.toLowerCase()]) || {})), (params1.headers || {})), ((params2 && params2.headers) || {})) });
    }
    stringifyFormItem(formItem) {
        if (typeof formItem === 'object' && formItem !== null) {
            return JSON.stringify(formItem);
        }
        else {
            return `${formItem}`;
        }
    }
    createFormData(input) {
        return Object.keys(input || {}).reduce((formData, key) => {
            const property = input[key];
            const propertyContent = property instanceof Array ? property : [property];
            for (const formItem of propertyContent) {
                const isFileType = formItem instanceof Blob || formItem instanceof File;
                formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
            }
            return formData;
        }, new FormData());
    }
}
exports.HttpClient = HttpClient;
/**
 * @title OPERA Cloud Block Configuration API
 * @version 22.3.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /blk/config/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs for Block configuration, such as creating, updating, fetching and removing codes related to blocks. <br />< This might include fetching the block cancellation reasons, or creating new block refused reasons.  Wash schedules can be create, or new reservation methods could be added for a property.<br /><br /> Compatible with OPERA Cloud release 22.3.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
class Api extends HttpClient {
    constructor() {
        super(...arguments);
        this.blockCancellationReasons = {
            /**
             * @description Use this API to get Block Cancellation Reasons. <p><strong>OperationId:</strong>getBlockCancellationReasons</p>
             *
             * @tags ChainConfig
             * @name GetBlockCancellationReasons
             * @summary Get Block Cancellation Reasons
             * @request GET:/blockCancellationReasons
             */
            getBlockCancellationReasons: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blockCancellationReasons`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create Block Cancellation Reasons. <p><strong>OperationId:</strong>postBlockCancellationReasons</p>
             *
             * @tags ChainConfig
             * @name PostBlockCancellationReasons
             * @summary Create Block Cancellation Reasons
             * @request POST:/blockCancellationReasons
             */
            postBlockCancellationReasons: (hotelId, blockCancellationReasonsCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blockCancellationReasons`, method: 'POST', body: blockCancellationReasonsCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update Block Cancellation Reason. <p><strong>OperationId:</strong>putBlockCancellationReasons</p>
             *
             * @tags ChainConfig
             * @name PutBlockCancellationReasons
             * @summary Change Block Cancellation Reason
             * @request PUT:/blockCancellationReasons/{blockCancellationReasonsId}
             */
            putBlockCancellationReasons: (hotelId, blockCancellationReasonsId, blockCancellationReasonsToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blockCancellationReasons/${blockCancellationReasonsId}`, method: 'PUT', body: blockCancellationReasonsToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete Block Cancellation Reason. <p><strong>OperationId:</strong>deleteBlockCancellationReasons</p>
             *
             * @tags ChainConfig
             * @name DeleteBlockCancellationReasons
             * @summary Delete Block Cancellation Reason
             * @request DELETE:/blockCancellationReasons/{blockCancellationReasonsId}
             */
            deleteBlockCancellationReasons: (hotelId, blockCancellationReasonsId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blockCancellationReasons/${blockCancellationReasonsId}`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.blockLostBookingCodes = {
            /**
             * @description Use this API to get Block Lost Booking Codes. <p><strong>OperationId:</strong>getBlockLostBookingCodes</p>
             *
             * @tags ChainConfig
             * @name GetBlockLostBookingCodes
             * @summary Get Block Lost Booking Codes
             * @request GET:/blockLostBookingCodes
             */
            getBlockLostBookingCodes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blockLostBookingCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create Block Lost Booking Codes. <p><strong>OperationId:</strong>postBlockLostBookingCodes</p>
             *
             * @tags ChainConfig
             * @name PostBlockLostBookingCodes
             * @summary Create Block Lost Booking Codes
             * @request POST:/blockLostBookingCodes
             */
            postBlockLostBookingCodes: (hotelId, blockLostBookingCodesCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blockLostBookingCodes`, method: 'POST', body: blockLostBookingCodesCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update Block Lost Booking Code. <p><strong>OperationId:</strong>putBlockLostBookingCodes</p>
             *
             * @tags ChainConfig
             * @name PutBlockLostBookingCodes
             * @summary Change Block Lost Booking Code
             * @request PUT:/blockLostBookingCodes/{blockLostBookingCodesId}
             */
            putBlockLostBookingCodes: (hotelId, blockLostBookingCodesId, blockLostBookingCodesToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blockLostBookingCodes/${blockLostBookingCodesId}`, method: 'PUT', body: blockLostBookingCodesToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete Block Lost Booking Code. <p><strong>OperationId:</strong>deleteBlockLostBookingCodes</p>
             *
             * @tags ChainConfig
             * @name DeleteBlockLostBookingCodes
             * @summary Delete Block Lost Booking Code
             * @request DELETE:/blockLostBookingCodes/{blockLostBookingCodesId}
             */
            deleteBlockLostBookingCodes: (hotelId, blockLostBookingCodesId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blockLostBookingCodes/${blockLostBookingCodesId}`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.blockRateOverrideReasons = {
            /**
             * @description Use this API to get Block Rate Override Reasons. <p><strong>OperationId:</strong>getBlockRateOverrideReasons</p>
             *
             * @tags ChainConfig
             * @name GetBlockRateOverrideReasons
             * @summary Get Block Rate Override Reasons
             * @request GET:/blockRateOverrideReasons
             */
            getBlockRateOverrideReasons: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blockRateOverrideReasons`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create Block Rate Override Reasons. <p><strong>OperationId:</strong>postBlockRateOverrideReasons</p>
             *
             * @tags ChainConfig
             * @name PostBlockRateOverrideReasons
             * @summary Create Block Rate Override Reasons
             * @request POST:/blockRateOverrideReasons
             */
            postBlockRateOverrideReasons: (hotelId, blockRateOverrideReasonsCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blockRateOverrideReasons`, method: 'POST', body: blockRateOverrideReasonsCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update Block Rate Override Reason. <p><strong>OperationId:</strong>putBlockRateOverrideReasons</p>
             *
             * @tags ChainConfig
             * @name PutBlockRateOverrideReasons
             * @summary Change Block Rate Override Reason
             * @request PUT:/blockRateOverrideReasons/{blockRateOverrideReasonsId}
             */
            putBlockRateOverrideReasons: (hotelId, blockRateOverrideReasonsId, blockRateOverrideReasonsToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blockRateOverrideReasons/${blockRateOverrideReasonsId}`, method: 'PUT', body: blockRateOverrideReasonsToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete Block Rate Override Reason. <p><strong>OperationId:</strong>deleteBlockRateOverrideReasons</p>
             *
             * @tags ChainConfig
             * @name DeleteBlockRateOverrideReasons
             * @summary Delete Block Rate Override Reason
             * @request DELETE:/blockRateOverrideReasons/{blockRateOverrideReasonsId}
             */
            deleteBlockRateOverrideReasons: (hotelId, blockRateOverrideReasonsId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blockRateOverrideReasons/${blockRateOverrideReasonsId}`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.blockRefusedReasons = {
            /**
             * @description Use this API to get Block Refused Reasons. <p><strong>OperationId:</strong>getBlockRefusedReasons</p>
             *
             * @tags ChainConfig
             * @name GetBlockRefusedReasons
             * @summary Get Block Refused Reasons
             * @request GET:/blockRefusedReasons
             */
            getBlockRefusedReasons: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blockRefusedReasons`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create Block Refused Reasons. <p><strong>OperationId:</strong>postBlockRefusedReasonspostBlo</p>
             *
             * @tags ChainConfig
             * @name PostBlockRefusedReasonspostBlo
             * @summary Create Block Refused Reasons
             * @request POST:/blockRefusedReasons
             */
            postBlockRefusedReasonspostBlo: (hotelId, blockRefusedReasonsCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blockRefusedReasons`, method: 'POST', body: blockRefusedReasonsCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update Block Refused Reason. <p><strong>OperationId:</strong>putBlockRefusedReasons</p>
             *
             * @tags ChainConfig
             * @name PutBlockRefusedReasons
             * @summary Change Block Refused Reason
             * @request PUT:/blockRefusedReasons/{blockRefusedReasonsId}
             */
            putBlockRefusedReasons: (hotelId, blockRefusedReasonsId, blockRefusedReasonsToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blockRefusedReasons/${blockRefusedReasonsId}`, method: 'PUT', body: blockRefusedReasonsToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete Block Refused Reason. <p><strong>OperationId:</strong>deleteBlockRefusedReasons</p>
             *
             * @tags ChainConfig
             * @name DeleteBlockRefusedReasons
             * @summary Delete Block Refused Reason
             * @request DELETE:/blockRefusedReasons/{blockRefusedReasonsId}
             */
            deleteBlockRefusedReasons: (hotelId, blockRefusedReasonsId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blockRefusedReasons/${blockRefusedReasonsId}`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.blockStatusCodes = {
            /**
             * @description This API fetches a list of configured status codes for the chain. It returns status code, description, and status type such as non-deduct, deduct, cancel, waitlist, inquiry, and actual. Status attributes, such as starting status, function diary visibility, allows pickup, and log catering changes are also returned in the response. Please note, that status codes are configured in a strict sequence that must be followed. In order to find available next statuses for the current block status, please use operation getNextBlockStatusCodes. <p><strong>OperationId:</strong>getBlockStatusCodes</p>
             *
             * @tags BlockConfig
             * @name GetBlockStatusCodes
             * @summary Get block status codes
             * @request GET:/blockStatusCodes
             */
            getBlockStatusCodes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blockStatusCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to create a new block status code. <p><strong>OperationId:</strong>postBlockStatusCode</p>
             *
             * @tags BlockConfig
             * @name PostBlockStatusCode
             * @summary Create a block status code
             * @request POST:/blockStatusCodes
             */
            postBlockStatusCode: (hotelId, blockStatusCodeDetails, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blockStatusCodes`, method: 'POST', body: blockStatusCodeDetails, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Retrieve the next block Status Codes for a property. <p><strong>OperationId:</strong>getNextBlockStatusCodes</p>
             *
             * @tags BlockConfig
             * @name GetNextBlockStatusCodes
             * @summary Get next block status codes
             * @request GET:/blockStatusCodes/nextStatusCodes
             */
            getNextBlockStatusCodes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blockStatusCodes/nextStatusCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to delete block status code. <p><strong>OperationId:</strong>deleteBlockStatusCode</p>
             *
             * @tags BlockConfig
             * @name DeleteBlockStatusCode
             * @summary Delete block status code
             * @request DELETE:/blockStatusCodes/{blockStatusCode}
             */
            deleteBlockStatusCode: (hotelId, blockStatusCode, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blockStatusCodes/${blockStatusCode}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to change block status code. <p><strong>OperationId:</strong>putBlockStatusCode</p>
             *
             * @tags BlockConfig
             * @name PutBlockStatusCode
             * @summary Change block status code
             * @request PUT:/blockStatusCodes/{blockStatusCode}
             */
            putBlockStatusCode: (hotelId, blockStatusCode, blockStatusCodeDetails, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blockStatusCodes/${blockStatusCode}`, method: 'PUT', body: blockStatusCodeDetails, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Update the next Block status. <p><strong>OperationId:</strong>putNextBlockStatusCodes</p>
             *
             * @tags BlockConfig
             * @name PutNextBlockStatusCodes
             * @summary Change next block status codes
             * @request PUT:/blockStatusCodes/{srcBlockStatusCode}/nextStatusCodes
             */
            putNextBlockStatusCodes: (hotelId, srcBlockStatusCode, nextBlockStatusCode, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blockStatusCodes/${srcBlockStatusCode}/nextStatusCodes`, method: 'PUT', body: nextBlockStatusCode, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.destinationCodes = {
            /**
             * @description Use this API to get Destination Codes. <p><strong>OperationId:</strong>getDestinationCodes</p>
             *
             * @tags ChainConfig
             * @name GetDestinationCodes
             * @summary Get Destination Codes
             * @request GET:/destinationCodes
             */
            getDestinationCodes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/destinationCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API allows creation on Destination Codes. Destination Codes are used in OPERA Cloud during the block cancellation process, and they usually represent either a competitor hotel / chain, or a geographic destination that a specific block has been lost to.  <p><strong>OperationId:</strong>postDestinationCodes</p>
             *
             * @tags ChainConfig
             * @name PostDestinationCodes
             * @summary Create Destination Codes
             * @request POST:/destinationCodes
             */
            postDestinationCodes: (hotelId, destinationCodesCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/destinationCodes`, method: 'POST', body: destinationCodesCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update Destination Codes. <p><strong>OperationId:</strong>putDestinationCodes</p>
             *
             * @tags ChainConfig
             * @name PutDestinationCodes
             * @summary Change Destination Codes
             * @request PUT:/destinationCodes/{destinationCodesId}
             */
            putDestinationCodes: (hotelId, destinationCodesId, destinationCodesToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/destinationCodes/${destinationCodesId}`, method: 'PUT', body: destinationCodesToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete Destination Codes. <p><strong>OperationId:</strong>deleteDestinationCodes</p>
             *
             * @tags ChainConfig
             * @name DeleteDestinationCodes
             * @summary Delete Destination Codes
             * @request DELETE:/destinationCodes/{destinationCodesId}
             */
            deleteDestinationCodes: (hotelId, destinationCodesId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/destinationCodes/${destinationCodesId}`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.hotels = {
            /**
             * @description You can use this API to get Block Sales Allowance. <p><strong>OperationId:</strong>getBlockSalesAllowance</p>
             *
             * @tags BlockConfig
             * @name GetBlockSalesAllowance
             * @summary Get Block Sales Allowance
             * @request GET:/hotels/{hotelId}/blockSalesAllowance
             */
            getBlockSalesAllowance: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/blockSalesAllowance`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to delete block sales allowance range. <p><strong>OperationId:</strong>deleteBlockSalesAllowanceRange</p>
             *
             * @tags BlockConfig
             * @name DeleteBlockSalesAllowanceRange
             * @summary Delete block sales allowance range
             * @request DELETE:/hotels/{hotelId}/blockSalesAllowanceRange
             */
            deleteBlockSalesAllowanceRange: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/blockSalesAllowanceRange`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to set block sales allowance range. <p><strong>OperationId:</strong>setBlockSalesAllowanceRange</p>
             *
             * @tags BlockConfig
             * @name SetBlockSalesAllowanceRange
             * @summary Set block sales allowance range
             * @request PUT:/hotels/{hotelId}/blockSalesAllowanceRange
             */
            setBlockSalesAllowanceRange: (hotelId, blockSalesAllowanceRange, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/blockSalesAllowanceRange`, method: 'PUT', body: blockSalesAllowanceRange, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to retrieve multiple Sales Managers for a hotel, you can narrow the results using different search criteria. <p><strong>OperationId:</strong>getSalesManagers</p>
             *
             * @tags BlockConfig
             * @name GetSalesManagers
             * @summary Get Sales Managers by Hotel.
             * @request GET:/hotels/{hotelId}/salesManagers
             */
            getSalesManagers: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/salesManagers`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to retrieve individual Sales Manager Goals for a hotel, you can narrow the results using different search criteria. <p><strong>OperationId:</strong>getSalesManagerGoals</p>
             *
             * @tags BlockConfig
             * @name GetSalesManagerGoals
             * @summary Get Sales Manager Goals by Hotel
             * @request GET:/hotels/{hotelId}/salesManagers/{salesManagerId}/salesManagerGoals
             */
            getSalesManagerGoals: (salesManagerId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/salesManagers/${salesManagerId}/salesManagerGoals`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to Create Sales Manager Goals for a Sales Manager ID.You must know the OPERA Sales Manager ID for this API. <p><strong>OperationId:</strong>postSalesManagerGoals</p>
             *
             * @tags BlockConfig
             * @name PostSalesManagerGoals
             * @summary Create Sales Manager Goals
             * @request POST:/hotels/{hotelId}/salesManagers/{salesManagerId}/salesManagerGoals
             */
            postSalesManagerGoals: (salesManagerId, hotelId, createSalesManagerGoals, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/salesManagers/${salesManagerId}/salesManagerGoals`, method: 'POST', body: createSalesManagerGoals, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update Sales Manager Goal.You must know the OPERA Sales Manager ID and Goal ID for this API. <p><strong>OperationId:</strong>putSalesManagerGoals</p>
             *
             * @tags BlockConfig
             * @name PutSalesManagerGoals
             * @summary Update Sales Manager Goal in a hotel by ID
             * @request PUT:/hotels/{hotelId}/salesManagers/{salesManagerId}/salesManagerGoals/{salesGoalId}
             */
            putSalesManagerGoals: (salesGoalId, salesManagerId, hotelId, salesManagerGoalsInfo, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/salesManagers/${salesManagerId}/salesManagerGoals/${salesGoalId}`, method: 'PUT', body: salesManagerGoalsInfo, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Create a block wash schedule. <p><strong>OperationId:</strong>postWashSchedule</p>
             *
             * @tags BlockConfig
             * @name PostWashSchedule
             * @summary Create block wash schedule
             * @request POST:/hotels/{hotelId}/washSchedules
             */
            postWashSchedule: (hotelId, washScheduleCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/washSchedules`, method: 'POST', body: washScheduleCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Delete a block wash schedule. <p><strong>OperationId:</strong>deleteWashSchedule</p>
             *
             * @tags BlockConfig
             * @name DeleteWashSchedule
             * @summary Delete block wash schedule
             * @request DELETE:/hotels/{hotelId}/washSchedules/{washScheduleCode}
             */
            deleteWashSchedule: (washScheduleCode, hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/washSchedules/${washScheduleCode}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Change a block wash schedule. <p><strong>OperationId:</strong>putWashSchedule</p>
             *
             * @tags BlockConfig
             * @name PutWashSchedule
             * @summary Change block wash schedule
             * @request PUT:/hotels/{hotelId}/washSchedules/{washScheduleCode}
             */
            putWashSchedule: (washScheduleCode, hotelId, washScheduleCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/washSchedules/${washScheduleCode}`, method: 'PUT', body: washScheduleCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.reservationMethods = {
            /**
             * @description Use this API to get Reservation Methods. <p><strong>OperationId:</strong>getReservationMethods</p>
             *
             * @tags ChainConfig
             * @name GetReservationMethods
             * @summary Get Reservation Methods
             * @request GET:/reservationMethods
             */
            getReservationMethods: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/reservationMethods`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create Reservation Methods. <p><strong>OperationId:</strong>postReservationMethods</p>
             *
             * @tags ChainConfig
             * @name PostReservationMethods
             * @summary Create Reservation Methods
             * @request POST:/reservationMethods
             */
            postReservationMethods: (hotelId, reservationMethodsCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/reservationMethods`, method: 'POST', body: reservationMethodsCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update Reservation Methods. <p><strong>OperationId:</strong>putReservationMethods</p>
             *
             * @tags ChainConfig
             * @name PutReservationMethods
             * @summary Change Reservation Methods
             * @request PUT:/reservationMethods/{reservationMethodsId}
             */
            putReservationMethods: (hotelId, reservationMethodsId, reservationMethodsToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/reservationMethods/${reservationMethodsId}`, method: 'PUT', body: reservationMethodsToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete Reservation Methods. <p><strong>OperationId:</strong>deleteReservationMethods</p>
             *
             * @tags ChainConfig
             * @name DeleteReservationMethods
             * @summary Delete Reservation Methods
             * @request DELETE:/reservationMethods/{reservationMethodsId}
             */
            deleteReservationMethods: (hotelId, reservationMethodsId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/reservationMethods/${reservationMethodsId}`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.salesManagers = {
            /**
             * @description You can use this API to retrieve multiple Sales Managers, you can narrow the results using different search criteria. <p><strong>OperationId:</strong>getSalesManagersMultipleHotelIds</p>
             *
             * @tags BlockConfig
             * @name GetSalesManagersMultipleHotelIds
             * @summary Get Sales Managers.
             * @request GET:/salesManagers
             */
            getSalesManagersMultipleHotelIds: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/salesManagers`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete Sales Manager Goals. <p><strong>OperationId:</strong>removeSalesManagerGoals</p>
             *
             * @tags BlockConfig
             * @name RemoveSalesManagerGoals
             * @summary Delete Sale Manager Goals
             * @request DELETE:/salesManagers/{salesManagerId}/salesManagerGoals
             */
            removeSalesManagerGoals: (hotelId, salesManagerId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/salesManagers/${salesManagerId}/salesManagerGoals`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to retrieve individual Sales Manager Goals, you can narrow the results using different search criteria. <p><strong>OperationId:</strong>getSalesManagerGoalsMultipleHotelIds</p>
             *
             * @tags BlockConfig
             * @name GetSalesManagerGoalsMultipleHotelIds
             * @summary Get Sales Manager Goals
             * @request GET:/salesManagers/{salesManagerId}/salesManagerGoals
             */
            getSalesManagerGoalsMultipleHotelIds: (hotelId, salesManagerId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/salesManagers/${salesManagerId}/salesManagerGoals`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete Sales Manager Goal. <p><strong>OperationId:</strong>removeSalesManagerGoal</p>
             *
             * @tags BlockConfig
             * @name RemoveSalesManagerGoal
             * @summary Delete Sale Manager Goal
             * @request DELETE:/salesManagers/{salesManagerId}/salesManagerGoals/{salesGoalId}
             */
            removeSalesManagerGoal: (hotelId, salesGoalId, salesManagerId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/salesManagers/${salesManagerId}/salesManagerGoals/${salesGoalId}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.services = {
            /**
             * @description delete Block Configuration Service Cache <p><strong>OperationId:</strong>deleteBlockConfigServiceCache</p>
             *
             * @tags BlockConfig
             * @name DeleteBlockConfigServiceCache
             * @summary  clear cache
             * @request DELETE:/services/block/cache
             */
            deleteBlockConfigServiceCache: (hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/services/block/cache`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Ping Block Configuration Service <p><strong>OperationId:</strong>pingBlockConfigService</p>
             *
             * @tags BlockConfig
             * @name PingBlockConfigService
             * @summary  ping
             * @request GET:/services/block/status
             */
            pingBlockConfigService: (hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/services/block/status`, method: 'GET', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description clearCache <p><strong>OperationId:</strong>deleteChainConfigServicesCache</p>
             *
             * @tags ChainConfig
             * @name DeleteChainConfigServicesCache
             * @summary  clear cache
             * @request DELETE:/services/chainConfig/cache
             */
            deleteChainConfigServicesCache: (hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/services/chainConfig/cache`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description NA <p><strong>OperationId:</strong>pingChainConfigServices</p>
             *
             * @tags ChainConfig
             * @name PingChainConfigServices
             * @summary  ping
             * @request GET:/services/chainConfig/status
             */
            pingChainConfigServices: (hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/services/chainConfig/status`, method: 'GET', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.washSchedules = {
            /**
             * @description Get block wash schedules. <p><strong>OperationId:</strong>getWashSchedule</p>
             *
             * @tags BlockConfig
             * @name GetWashSchedule
             * @summary Get block wash schedule
             * @request GET:/washSchedules
             */
            getWashSchedule: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/washSchedules`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
    }
}
exports.Api = Api;
