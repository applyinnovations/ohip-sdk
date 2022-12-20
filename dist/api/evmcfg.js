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
exports.Api = exports.HttpClient = exports.ContentType = exports.ServingType = exports.MenuTypeType = void 0;
/** Defines values for Menu Type */
var MenuTypeType;
(function (MenuTypeType) {
    MenuTypeType["Food"] = "Food";
    MenuTypeType["Beverage"] = "Beverage";
})(MenuTypeType = exports.MenuTypeType || (exports.MenuTypeType = {}));
/** Serving */
var ServingType;
(function (ServingType) {
    ServingType["Pp"] = "Pp";
    ServingType["Pt"] = "Pt";
})(ServingType = exports.ServingType || (exports.ServingType = {}));
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
        this.instance = axios_1.default.create(Object.assign(Object.assign({}, axiosConfig), { baseURL: new URL('/evm/config/v1', axiosConfig.baseURL).toString() }));
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
 * @title OPERA Cloud Event Configuration API
 * @version 21.5.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /evm/config/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 21.5.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
class Api extends HttpClient {
    constructor() {
        super(...arguments);
        this.cateringEventTypes = {
            /**
             * @description Use this API to get Function Space Event Types. <p><strong>OperationId:</strong>getFunctionSpaceEventTypes</p>
             *
             * @tags ChainConfig
             * @name GetFunctionSpaceEventTypes
             * @summary Get Function Space Event Types
             * @request GET:/cateringEventTypes
             */
            getFunctionSpaceEventTypes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/cateringEventTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.hotels = {
            /**
             * @description Get Menu items for a property. <p><strong>OperationId:</strong>getCateringMenuItems</p>
             *
             * @tags ResourceConfig
             * @name GetCateringMenuItems
             * @summary Get Menu items
             * @request GET:/hotels/{hotelId}/cateringMenuItems
             */
            getCateringMenuItems: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/cateringMenuItems`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Retrieve a list of menus for a property. <p><strong>OperationId:</strong>getCateringMenus</p>
             *
             * @tags ResourceConfig
             * @name GetCateringMenus
             * @summary Get menus
             * @request GET:/hotels/{hotelId}/cateringMenus
             */
            getCateringMenus: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/cateringMenus`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API allows you to Use this API to get Room Type Pool and the associated Room Types. <p><strong>OperationId:</strong>getRoomTypePool</p>
             *
             * @tags HotelConfig
             * @name GetRoomTypePool
             * @summary Fetch Room Type Pool
             * @request GET:/hotels/{hotelId}/roomPools
             */
            getRoomTypePool: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/roomPools`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API allows you to Use this API to create Room Type Pools. <p><strong>OperationId:</strong>postRoomTypePool</p>
             *
             * @tags HotelConfig
             * @name PostRoomTypePool
             * @summary Create Room Type Pools
             * @request POST:/hotels/{hotelId}/roomPools
             */
            postRoomTypePool: (hotelId, roomTypePoolCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/roomPools`, method: 'POST', body: roomTypePoolCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete  Room Type Pool and Mappings. <p><strong>OperationId:</strong>removeRoomTypePool</p>
             *
             * @tags HotelConfig
             * @name RemoveRoomTypePool
             * @summary Delete  Room Type Pool and Mappings
             * @request DELETE:/hotels/{hotelId}/roomPools/{roomPoolCode}
             */
            removeRoomTypePool: (roomPoolCode, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/roomPools/${roomPoolCode}`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update Room Type Pool and Associated Room Types. <p><strong>OperationId:</strong>changeRoomTypePool</p>
             *
             * @tags HotelConfig
             * @name ChangeRoomTypePool
             * @summary Change Room Type Pool
             * @request PUT:/hotels/{hotelId}/roomPools/{roomPoolCode}
             */
            changeRoomTypePool: (roomPoolCode, hotelId, roomTypePoolToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/roomPools/${roomPoolCode}`, method: 'PUT', body: roomTypePoolToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
    }
}
exports.Api = Api;
