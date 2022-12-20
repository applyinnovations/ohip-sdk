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
        this.instance = axios_1.default.create(Object.assign(Object.assign({}, axiosConfig), { baseURL: new URL('/csh/outbound/v1', axiosConfig.baseURL).toString() }));
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
 * @title OPERA Cloud Cashiering API
 * @version 21.5.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /csh/outbound/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs to cater for Cashiering related external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 21.5.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
class Api extends HttpClient {
    constructor() {
        super(...arguments);
        this.hotels = {
            /**
             * @description You can use this API to get complimentary redemptions for a guest having PTS Membership Type <p><strong>OperationId:</strong>getCompRedemptions</p>
             *
             * @tags Cashiering
             * @name GetCompRedemptions
             * @summary Operation to get complimentary redemptions for a guest having PTS Membership Type
             * @request GET:/hotels/{hotelId}/memberships/{membershipId}/compRedemptions
             */
            getCompRedemptions: (membershipId, hotelId, params = {}) => {
                const newParams = params;
                return this.request(Object.assign({ path: `/hotels/${hotelId}/memberships/${membershipId}/compRedemptions`, method: 'GET', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to authorize complimentary redemptions for a guest having PTS Membership Type <p><strong>OperationId:</strong>authorizeCompRedemptions</p>
             *
             * @tags Cashiering
             * @name AuthorizeCompRedemptions
             * @summary Operation to authorize complimentary redemptions for a guest having PTS Membership Type
             * @request PUT:/hotels/{hotelId}/memberships/{membershipId}/compRedemptionAuthorizations
             */
            authorizeCompRedemptions: (membershipId, hotelId, authorizeCompRedemptions, params = {}) => {
                const newParams = params;
                return this.request(Object.assign({ path: `/hotels/${hotelId}/memberships/${membershipId}/compRedemptionAuthorizations`, method: 'PUT', body: authorizeCompRedemptions, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to post complimentary redemptions for a guest having PTS Membership Type <p><strong>OperationId:</strong>postCompRedemptions</p>
             *
             * @tags Cashiering
             * @name PostCompRedemptions
             * @summary Operation to post complimentary redemptions for a guest having PTS Membership Type
             * @request POST:/hotels/{hotelId}/memberships/{membershipId}/compRedemptionPostings
             */
            postCompRedemptions: (membershipId, hotelId, postCompRedemptions, params = {}) => {
                const newParams = params;
                return this.request(Object.assign({ path: `/hotels/${hotelId}/memberships/${membershipId}/compRedemptionPostings`, method: 'POST', body: postCompRedemptions, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to reverse complimentary redemptions for a guest having PTS Membership Type <p><strong>OperationId:</strong>reverseCompRedemptions</p>
             *
             * @tags Cashiering
             * @name ReverseCompRedemptions
             * @summary Operation to reverse complimentary redemptions for a guest having PTS Membership Type
             * @request POST:/hotels/{hotelId}/memberships/{membershipId}/compRedemptionReversals
             */
            reverseCompRedemptions: (membershipId, hotelId, reverseCompRedemptions, params = {}) => {
                const newParams = params;
                return this.request(Object.assign({ path: `/hotels/${hotelId}/memberships/${membershipId}/compRedemptionReversals`, method: 'POST', body: reverseCompRedemptions, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to submit Comp Transactions. <p><strong>OperationId:</strong>approveCompPostings</p>
             *
             * @tags Cashiering
             * @name ApproveCompPostings
             * @summary Operation to request for comp postings approval.
             * @request PUT:/hotels/{hotelId}/compPostingsApproval
             */
            approveCompPostings: (hotelId, postings, params = {}) => {
                const newParams = params;
                return this.request(Object.assign({ path: `/hotels/${hotelId}/compPostingsApproval`, method: 'PUT', body: postings, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to reverse Comp Transactions. <p><strong>OperationId:</strong>reverseCompPostings</p>
             *
             * @tags Cashiering
             * @name ReverseCompPostings
             * @summary Operation to request for comp postings reversal.
             * @request PUT:/hotels/{hotelId}/compPostingsReversal
             */
            reverseCompPostings: (hotelId, postings, params = {}) => {
                const newParams = params;
                return this.request(Object.assign({ path: `/hotels/${hotelId}/compPostingsReversal`, method: 'PUT', body: postings, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
    }
}
exports.Api = Api;
