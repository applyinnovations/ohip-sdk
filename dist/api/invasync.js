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
exports.Api = exports.HttpClient = exports.ContentType = void 0;
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
        this.instance = axios_1.default.create(Object.assign(Object.assign({}, axiosConfig), { baseURL: new URL('/inv/async/v1', axiosConfig.baseURL).toString() }));
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
 * @title Opera Cloud Inventory Asynchronous API
 * @version 22.4.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /inv/async/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs to cater for Inventory related asynchronous functionality in OPERA Cloud. This includes viewing inventory data along with its revenue and updating inventory&apos;s sell limits for date ranges. <p>This API follows an async pattern where</p><ul><li>You make an initial request, which returns a Location header</li><li>You poll HEAD on the Location header returned to obtain the status of the process</li><li>Once the process completes HEAD will return in the Location header the URL that must be called to obtain the results of the process</li><li>You call the URL to obtain the results of the process</li></ul><br /><br /> Compatible with OPERA Cloud release 22.4.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
class Api extends HttpClient {
    constructor() {
        super(...arguments);
        this.externalSystems = {
            /**
             * @description Use this API to start the process to get a hotel inventory&apos;s revenue statistics for a given date range. Maximum limit of the date range is 94 days with a single request, but the recommendation is to use a date range proportionate to the size of the hotel. Returns a header parameter Location that can be used in the getRevenueInventoryStatisticsProcessStatus operation.  Use event driven APIs (see https://docs.oracle.com/cd/F29336_01/doc.201/f27480/c_business_events.htm#OHIPU-BusinessEvents-F0AC1F1C) to get real time inventory updates.<p><strong>OperationId:</strong>startRevenueInventoryStatisticsProcess</p>
             *
             * @tags InventoryAsync
             * @name StartRevenueInventoryStatisticsProcess
             * @summary Start process to get hotel inventory revenue statistics
             * @request POST:/externalSystems/{extSystemCode}/hotels/{hotelId}/revenueInventoryStatistics
             */
            startRevenueInventoryStatisticsProcess: (extSystemCode, hotelId, criteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/externalSystems/${extSystemCode}/hotels/${hotelId}/revenueInventoryStatistics`, method: 'POST', body: criteria, type: ContentType.Json }, newParams));
            },
            /**
             * @description Use this API to check whether the process to collate inventory revenue statistics is complete. You can get value of summaryId from the Location header returned by the startRevenueInventoryStatisticsProcess operation.<p><strong>OperationId:</strong>getRevenueInventoryStatisticsProcessStatus</p>
             *
             * @tags InventoryAsync
             * @name GetRevenueInventoryStatisticsProcessStatus
             * @summary Check status of Inventory Revenue Statistic process
             * @request HEAD:/externalSystems/{extSystemCode}/hotels/{hotelId}/revenueInventoryStatistics/{requestId}
             */
            getRevenueInventoryStatisticsProcessStatus: (requestId, extSystemCode, hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/externalSystems/${extSystemCode}/hotels/${hotelId}/revenueInventoryStatistics/${requestId}`, method: 'HEAD', type: ContentType.Json }, newParams));
            },
            /**
             * @description This API returns inventory revenue&apos;s statistics for a hotel within dates given in the startRevenueInventoryStatisticsProcess API request. You can get the value of the summaryId from the Location header returned by the getRevenueInventoryStatisticsProcessStatus operation after the process is completed.<p><strong>OperationId:</strong>getRevenueInventoryStatistics</p>
             *
             * @tags InventoryAsync
             * @name GetRevenueInventoryStatistics
             * @summary Get results of a revenue inventory statistics process
             * @request GET:/externalSystems/{extSystemCode}/hotels/{hotelId}/revenueInventoryStatistics/{requestId}
             */
            getRevenueInventoryStatistics: (requestId, extSystemCode, hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/externalSystems/${extSystemCode}/hotels/${hotelId}/revenueInventoryStatistics/${requestId}`, method: 'GET', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to create sell limits in OPERA by date. <p><strong>OperationId:</strong>postSellLimitsProcess</p>
             *
             * @tags InventoryAsync
             * @name PostSellLimitsProcess
             * @summary Create sell limit by date.
             * @request POST:/externalSystems/{extSystemCode}/hotels/{hotelId}/sellLimits
             */
            postSellLimitsProcess: (hotelId, extSystemCode, sellLimitsByDate, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/externalSystems/${extSystemCode}/hotels/${hotelId}/sellLimits`, method: 'POST', body: sellLimitsByDate, type: ContentType.Json }, newParams));
            },
            /**
             * @description Use this API to check whether the sell limit data creation is completed yet. You can get the value of the summaryId with the postSellLimitsProcess API response (under header location). <p><strong>OperationId:</strong>getSellLimitsProcessStatus</p>
             *
             * @tags InventoryAsync
             * @name GetSellLimitsProcessStatus
             * @summary Get the status for sell limits asynchronous process
             * @request HEAD:/externalSystems/{extSystemCode}/hotels/{hotelId}/sellLimits/{requestId}
             */
            getSellLimitsProcessStatus: (requestId, extSystemCode, hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/externalSystems/${extSystemCode}/hotels/${hotelId}/sellLimits/${requestId}`, method: 'HEAD', type: ContentType.Json }, newParams));
            },
            /**
             * @description This API returns the status log if any of sell limit data creation is failed. You can get the value of summaryId with the getSellLimitsProcessStatus API response (under header location). <p><strong>OperationId:</strong>getSellLimits</p>
             *
             * @tags InventoryAsync
             * @name GetSellLimits
             * @summary Get status for sell limits for a property.
             * @request GET:/externalSystems/{extSystemCode}/hotels/{hotelId}/sellLimits/{requestId}
             */
            getSellLimits: (requestId, hotelId, extSystemCode, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/externalSystems/${extSystemCode}/hotels/${hotelId}/sellLimits/${requestId}`, method: 'GET', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
    }
}
exports.Api = Api;
