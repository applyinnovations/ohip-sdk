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
exports.Api = exports.HttpClient = exports.ContentType = exports.RatePlanYieldableType = exports.RatePlanApprovalStatusType = exports.RateCodeLockStatusType = exports.BaseType = void 0;
/** Simple type for base type, flat or differential. */
var BaseType;
(function (BaseType) {
    BaseType["Flat"] = "Flat";
    BaseType["Differential"] = "Differential";
})(BaseType = exports.BaseType || (exports.BaseType = {}));
/** Indicates that the rate code is locked by the central system and cannot be edited at the property level. */
var RateCodeLockStatusType;
(function (RateCodeLockStatusType) {
    RateCodeLockStatusType["Unlocked"] = "Unlocked";
    RateCodeLockStatusType["External"] = "External";
    RateCodeLockStatusType["Property"] = "Property";
    RateCodeLockStatusType["Central"] = "Central";
})(RateCodeLockStatusType = exports.RateCodeLockStatusType || (exports.RateCodeLockStatusType = {}));
/** Indicates that the Rate Plan is approved for selling. */
var RatePlanApprovalStatusType;
(function (RatePlanApprovalStatusType) {
    RatePlanApprovalStatusType["NewUnapproved"] = "NewUnapproved";
    RatePlanApprovalStatusType["ChangedUnapproved"] = "ChangedUnapproved";
    RatePlanApprovalStatusType["Rejected"] = "Rejected";
    RatePlanApprovalStatusType["Approved"] = "Approved";
})(RatePlanApprovalStatusType = exports.RatePlanApprovalStatusType || (exports.RatePlanApprovalStatusType = {}));
/** Simple type for valid values for Yieldable element for the Rate plan code. */
var RatePlanYieldableType;
(function (RatePlanYieldableType) {
    RatePlanYieldableType["Yieldable"] = "Yieldable";
    RatePlanYieldableType["NonYieldable"] = "NonYieldable";
    RatePlanYieldableType["StayPattern"] = "StayPattern";
})(RatePlanYieldableType = exports.RatePlanYieldableType || (exports.RatePlanYieldableType = {}));
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
        this.securityData = null;
        this.setSecurityData = (data) => {
            this.securityData = data;
        };
        this.request = async (_a) => {
            var { secure, path, type, query, format, body } = _a, params = __rest(_a, ["secure", "path", "type", "query", "format", "body"]);
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
        this.instance = axios_1.default.create(Object.assign(Object.assign({}, axiosConfig), { baseURL: new URL('/rtp/async/v1', axiosConfig.baseURL).toString() }));
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
 * @title Opera Cloud Rate Plan Asynchronous Service API
 * @version 22.3.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /rtp/async/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs catering to the Rate Plan asynchronous related functionality in a hotel.  This includes adding/updating daily rates&apos; pricing schedules and best available rates by day or length of stay. <p>This API follows an async pattern where</p><ul><li>You make an initial request, which returns a Location header</li><li>You poll HEAD on the Location header returned to obtain the status of the process</li><li>Once the process completes HEAD will return in the Location header the URL that must be called to obtain the results of the process</li><li>You call the URL to obtain the results of the process</li></ul><br /><br /> Compatible with OPERA Cloud release 22.3.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
class Api extends HttpClient {
    constructor() {
        super(...arguments);
        this.externalSystems = {
            /**
             * @description Use this API to start the process to add and update daily rate plans&apos; pricing schedule. Returns a header parameter Location that can be used in the getDailyRatePlanSchedulesProcessStatus operation. <p><strong>OperationId:</strong>startSetDailyRatePlanSchedulesProcess</p>
             *
             * @tags RatePlanAsync
             * @name StartSetDailyRatePlanSchedulesProcess
             * @summary API to initiate rate plans&apos; price update process
             * @request POST:/externalSystems/{extSystemCode}/hotels/{hotelId}/ratePlans/dailySchedules
             */
            startSetDailyRatePlanSchedulesProcess: (hotelId, extSystemCode, dailyRatePlanSchedules, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/externalSystems/${extSystemCode}/hotels/${hotelId}/ratePlans/dailySchedules`, method: 'POST', body: dailyRatePlanSchedules, type: ContentType.Json }, newParams));
            },
            /**
             * @description Use this API to check whether the rate plan pricing schedule process is completed. You can get value of summaryId from the Location header returned by the startSetDailyRatePlanSchedulesProcess operation.<p><strong>OperationId:</strong>getDailyRatePlanSchedulesProcessStatus</p>
             *
             * @tags RatePlanAsync
             * @name GetDailyRatePlanSchedulesProcessStatus
             * @summary Check status of setting daily rate plan schedule process
             * @request HEAD:/externalSystems/{extSystemCode}/hotels/{hotelId}/ratePlans/dailySchedules/{requestId}
             */
            getDailyRatePlanSchedulesProcessStatus: (requestId, extSystemCode, hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/externalSystems/${extSystemCode}/hotels/${hotelId}/ratePlans/dailySchedules/${requestId}`, method: 'HEAD', type: ContentType.Json }, newParams));
            },
            /**
             * @description Use this API to get the result of the daily rate plans schedule process, which will include details of any data that has failed to process. You can get the value of the summaryId from the Location header returned by the getDailyRatePlanSchedulesProcessStatus operation after the process is completed. <p><strong>OperationId:</strong>getDailyRatePlanSchedules</p>
             *
             * @tags RatePlanAsync
             * @name GetDailyRatePlanSchedules
             * @summary Get results of a daily rate plan schedule process
             * @request GET:/externalSystems/{extSystemCode}/hotels/{hotelId}/ratePlans/dailySchedules/{requestId}
             */
            getDailyRatePlanSchedules: (requestId, hotelId, extSystemCode, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/externalSystems/${extSystemCode}/hotels/${hotelId}/ratePlans/dailySchedules/${requestId}`, method: 'GET', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to start the process of adding and updating best available rate plans by day or by length of stay. Returns a header parameter Location that can be used in the getBestAvailableRatePlansProcessStatus operation. <p><strong>OperationId:</strong>startSetBestAvailableRatePlansProcess</p>
             *
             * @tags RatePlanAsync
             * @name StartSetBestAvailableRatePlansProcess
             * @summary API to initiate setting best available rate plans process.
             * @request POST:/externalSystems/{extSystemCode}/hotels/{hotelId}/ratePlans/bestAvailableLOS
             */
            startSetBestAvailableRatePlansProcess: (hotelId, extSystemCode, bestAvailableRatePlans, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/externalSystems/${extSystemCode}/hotels/${hotelId}/ratePlans/bestAvailableLOS`, method: 'POST', body: bestAvailableRatePlans, type: ContentType.Json }, newParams));
            },
            /**
             * @description Use this API to check whether the setting of best available rate plans process is completed. You can get value of summaryId from the Location header returned by the startSetBestAvailableRatePlansProcess operation.<p><strong>OperationId:</strong>getBestAvailableRatePlansProcessStatus</p>
             *
             * @tags RatePlanAsync
             * @name GetBestAvailableRatePlansProcessStatus
             * @summary Check status of setting best available rate plans process
             * @request HEAD:/externalSystems/{extSystemCode}/hotels/{hotelId}/ratePlans/bestAvailableLOS/{requestId}
             */
            getBestAvailableRatePlansProcessStatus: (requestId, extSystemCode, hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/externalSystems/${extSystemCode}/hotels/${hotelId}/ratePlans/bestAvailableLOS/${requestId}`, method: 'HEAD', type: ContentType.Json }, newParams));
            },
            /**
             * @description Use this API to get the result of the process to set best available rate plans, which will include details of any data that has been failed to process. You can get the value of the summaryId from the Location header returned by the getBestAvailableRatePlansProcessStatus operation after the process is completed. <p><strong>OperationId:</strong>getBestAvailableRatePlans</p>
             *
             * @tags RatePlanAsync
             * @name GetBestAvailableRatePlans
             * @summary Get results of a daily rate plan schedule process
             * @request GET:/externalSystems/{extSystemCode}/hotels/{hotelId}/ratePlans/bestAvailableLOS/{requestId}
             */
            getBestAvailableRatePlans: (requestId, hotelId, extSystemCode, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/externalSystems/${extSystemCode}/hotels/${hotelId}/ratePlans/bestAvailableLOS/${requestId}`, method: 'GET', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>startHurdleRatesProcess</p>
             *
             * @tags RatePlanAsync
             * @name StartHurdleRatesProcess
             * @summary Operation to configure hurdle rates.
             * @request POST:/externalSystems/{extSystemCode}/hotels/{hotelId}/rates/hurdles
             */
            startHurdleRatesProcess: (hotelId, extSystemCode, hurdleRates, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/externalSystems/${extSystemCode}/hotels/${hotelId}/rates/hurdles`, method: 'POST', body: hurdleRates, type: ContentType.Json }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getHurdleRatesProcessStatus</p>
             *
             * @tags RatePlanAsync
             * @name GetHurdleRatesProcessStatus
             * @summary This API returns the status of asynchronous process scheduled for given id.
             * @request HEAD:/externalSystems/{extSystemCode}/hotels/{hotelId}/rates/hurdles/{requestId}
             */
            getHurdleRatesProcessStatus: (requestId, extSystemCode, hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/externalSystems/${extSystemCode}/hotels/${hotelId}/rates/hurdles/${requestId}`, method: 'HEAD', type: ContentType.Json }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getHurdleRates</p>
             *
             * @tags RatePlanAsync
             * @name GetHurdleRates
             * @summary This API facilitates fetching of status for configured hurdle rates.
             * @request GET:/externalSystems/{extSystemCode}/hotels/{hotelId}/rates/hurdles/{requestId}
             */
            getHurdleRates: (hotelId, extSystemCode, requestId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/externalSystems/${extSystemCode}/hotels/${hotelId}/rates/hurdles/${requestId}`, method: 'GET', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>startSetRatePlansHeadersProcess</p>
             *
             * @tags RatePlanAsync
             * @name StartSetRatePlansHeadersProcess
             * @summary Operation to start the update of rate header flags. Recommendation is not to exceed 250 rate codes in one request.
             * @request POST:/externalSystems/{extSystemCode}/hotels/{hotelId}/ratePlans/headers
             */
            startSetRatePlansHeadersProcess: (hotelId, extSystemCode, ratePlan, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/externalSystems/${extSystemCode}/hotels/${hotelId}/ratePlans/headers`, method: 'POST', body: ratePlan, type: ContentType.Json }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRatePlansHeadersProcessStatus</p>
             *
             * @tags RatePlanAsync
             * @name GetRatePlansHeadersProcessStatus
             * @summary This API returns the status of asynchronous process scheduled for given id.
             * @request HEAD:/externalSystems/{extSystemCode}/hotels/{hotelId}/ratePlans/headers/{requestId}
             */
            getRatePlansHeadersProcessStatus: (requestId, extSystemCode, hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/externalSystems/${extSystemCode}/hotels/${hotelId}/ratePlans/headers/${requestId}`, method: 'HEAD', type: ContentType.Json }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRatePlansHeaders</p>
             *
             * @tags RatePlanAsync
             * @name GetRatePlansHeaders
             * @summary This API facilitates fetching of status for configured rate plans.
             * @request GET:/externalSystems/{extSystemCode}/hotels/{hotelId}/ratePlans/headers/{requestId}
             */
            getRatePlansHeaders: (hotelId, extSystemCode, requestId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/externalSystems/${extSystemCode}/hotels/${hotelId}/ratePlans/headers/${requestId}`, method: 'GET', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
    }
}
exports.Api = Api;
