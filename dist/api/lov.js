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
        this.instance = axios_1.default.create(Object.assign(Object.assign({}, axiosConfig), { baseURL: new URL('/lov/v1', axiosConfig.baseURL).toString() }));
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
 * @title OPERA Cloud List of Values Management API
 * @version 21.5.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /lov/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs to cater for List of Value functionality in OPERA Cloud. A List of Values in the OPERA Application can be configured by a property.  Then by using these APIs you can retrieve all configured codes.  As an example, Titles is a configurable ListOfValues.  A hotel can specify what titles they wish to use, and thus fetching the LOV for title, you can view the codes that are configured for a property.<br /><br /> Compatible with OPERA Cloud release 21.5.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
class Api extends HttpClient {
    constructor() {
        super(...arguments);
        this.listOfValues = {
            /**
             * @description  <p><strong>OperationId:</strong>getLOVNames</p>
             *
             * @tags LOV
             * @name GetLovNames
             * @summary Fetch Names
             * @request GET:/listOfValues
             */
            getLovNames: (hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues`, method: 'GET', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getMembershipClassTypesLOV</p>
             *
             * @tags LOV
             * @name GetMembershipClassTypesLov
             * @summary Fetch List Of Values for Membership Class Types
             * @request GET:/listOfValues/airlines/{airlines}/loyalty/{loyalty}/membershipClassTypes
             */
            getMembershipClassTypesLov: (hotelId, loyalty, airlines, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/airlines/${airlines}/loyalty/${loyalty}/membershipClassTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getPrintersLOV</p>
             *
             * @tags LOV
             * @name GetPrintersLov
             * @summary Fetch List Of Values for Printers
             * @request GET:/listOfValues/alertPrinters/{alertPrinters}/printers
             */
            getPrintersLov: (hotelId, alertPrinters, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/alertPrinters/${alertPrinters}/printers`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getBlockBookingStatusesLOV</p>
             *
             * @tags LOV
             * @name GetBlockBookingStatusesLov
             * @summary Fetch List Of Values for Block Booking Statuses
             * @request GET:/listOfValues/blockId/{blockId}/blockBookingStatuses
             */
            getBlockBookingStatusesLov: (hotelId, blockId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/blockId/${blockId}/blockBookingStatuses`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getBlockCurrentStatusesLOV</p>
             *
             * @tags LOV
             * @name GetBlockCurrentStatusesLov
             * @summary Fetch List Of Values for Block Current Statuses
             * @request GET:/listOfValues/blockId/{blockId}/blockCurrentStatuses
             */
            getBlockCurrentStatusesLov: (hotelId, blockId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/blockId/${blockId}/blockCurrentStatuses`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getGdsRoomCategoryTemplatesLOV</p>
             *
             * @tags LOV
             * @name GetGdsRoomCategoryTemplatesLov
             * @summary Fetch List Of Values for Gds Room Category Templates
             * @request GET:/listOfValues/bookingChannels/{bookingChannelCodes}/gdsRoomCategoryTemplates
             */
            getGdsRoomCategoryTemplatesLov: (hotelId, bookingChannelCodes, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/bookingChannels/${bookingChannelCodes}/gdsRoomCategoryTemplates`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getGdsGuaranteeCodesLOV</p>
             *
             * @tags LOV
             * @name GetGdsGuaranteeCodesLov
             * @summary Fetch List Of Values for Gds Guarantee Codes
             * @request GET:/listOfValues/bookingChannels/{bookingChannelCode}/gdsGuaranteeCodes
             */
            getGdsGuaranteeCodesLov: (hotelId, bookingChannelCode, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/bookingChannels/${bookingChannelCode}/gdsGuaranteeCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getGdsRateCategoriesLOV</p>
             *
             * @tags LOV
             * @name GetGdsRateCategoriesLov
             * @summary Fetch List Of Values for Gds Rate Categories
             * @request GET:/listOfValues/bookingChannels/{bookingChannelCode}/gdsRateCategories
             */
            getGdsRateCategoriesLov: (hotelId, bookingChannelCode, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/bookingChannels/${bookingChannelCode}/gdsRateCategories`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getGdsRateLevelsLOV</p>
             *
             * @tags LOV
             * @name GetGdsRateLevelsLov
             * @summary Fetch List Of Values for Gds Rate Levels
             * @request GET:/listOfValues/bookingChannels/{bookingChannelCode}/gdsRateLevels
             */
            getGdsRateLevelsLov: (hotelId, bookingChannelCode, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/bookingChannels/${bookingChannelCode}/gdsRateLevels`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getTemplateBookingChannelRoomTypesLOV</p>
             *
             * @tags LOV
             * @name GetTemplateBookingChannelRoomTypesLov
             * @summary Fetch List Of Values for Template Booking Channel Room Types
             * @request GET:/listOfValues/bookingChannels/{bookingChannelCode}/templateBookingChannelRoomTypes
             */
            getTemplateBookingChannelRoomTypesLov: (hotelId, bookingChannelCode, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/bookingChannels/${bookingChannelCode}/templateBookingChannelRoomTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getBlockNextStatusesLOV</p>
             *
             * @tags LOV
             * @name GetBlockNextStatusesLov
             * @summary Fetch List Of Values for Block Next Statuses
             * @request GET:/listOfValues/bookingStatus/{bookingStatus}/blockNextStatuses
             */
            getBlockNextStatusesLov: (hotelId, bookingStatus, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/bookingStatus/${bookingStatus}/blockNextStatuses`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getGridTypesLOV</p>
             *
             * @tags LOV
             * @name GetGridTypesLov
             * @summary Fetch List Of Values for Grid Types
             * @request GET:/listOfValues/bookingStatus/{bookingStatus}/gridTypes
             */
            getGridTypesLov: (hotelId, bookingStatus, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/bookingStatus/${bookingStatus}/gridTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getTaskSheetLOV</p>
             *
             * @tags LOV
             * @name GetTaskSheetLov
             * @summary Fetch List Of Values for Task Sheet
             * @request GET:/listOfValues/breakOutId/{breakOutId}/taskSheet
             */
            getTaskSheetLov: (hotelId, breakOutId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/breakOutId/${breakOutId}/taskSheet`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getCashierHotelsLOV</p>
             *
             * @tags LOV
             * @name GetCashierHotelsLov
             * @summary Fetch List Of Values for Cashier Hotels
             * @request GET:/listOfValues/cashierId/{cashierId}/cashierHotels
             */
            getCashierHotelsLov: (hotelId, cashierId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/cashierId/${cashierId}/cashierHotels`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getBlockCatNextStatusesLOV</p>
             *
             * @tags LOV
             * @name GetBlockCatNextStatusesLov
             * @summary Fetch List Of Values for Block Cat Next Statuses
             * @request GET:/listOfValues/catStatus/{catStatus}/blockCatNextStatuses
             */
            getBlockCatNextStatusesLov: (hotelId, catStatus, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/catStatus/${catStatus}/blockCatNextStatuses`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getUserDbFunctionsLOV</p>
             *
             * @tags LOV
             * @name GetUserDbFunctionsLov
             * @summary Fetch List Of Values for User Db Functions
             * @request GET:/listOfValues/category/{category}/userDbFunctions
             */
            getUserDbFunctionsLov: (hotelId, category, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/category/${category}/userDbFunctions`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getCateringBudgetTypesLOV</p>
             *
             * @tags LOV
             * @name GetCateringBudgetTypesLov
             * @summary Fetch List Of Values for Catering Budget Types
             * @request GET:/listOfValues/catering/{catering}/active/{active}/cateringBudgetTypes
             */
            getCateringBudgetTypesLov: (hotelId, active, catering, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/catering/${catering}/active/${active}/cateringBudgetTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getHotelsForSnCLOV</p>
             *
             * @tags LOV
             * @name GetHotelsForSnClov
             * @summary Fetch List Of Values for Hotels For Sn C
             * @request GET:/listOfValues/cateringEvents/{cateringEvents}/hotelsForSnC
             */
            getHotelsForSnClov: (hotelId, cateringEvents, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/cateringEvents/${cateringEvents}/hotelsForSnC`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getChainLanguagesLOV</p>
             *
             * @tags LOV
             * @name GetChainLanguagesLov
             * @summary Fetch List Of Values for Chain Languages
             * @request GET:/listOfValues/chainCode/{chainCode}/chainLanguages
             */
            getChainLanguagesLov: (hotelId, chainCode, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/chainCode/${chainCode}/chainLanguages`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getPreferenceSubgroupsLOV</p>
             *
             * @tags LOV
             * @name GetPreferenceSubgroupsLov
             * @summary Fetch List Of Values for Preference Subgroups
             * @request GET:/listOfValues/chainCode/{chainCode}/preferenceGroup/{preferenceGroup}/preferenceSubgroups
             */
            getPreferenceSubgroupsLov: (hotelId, preferenceGroup, chainCode, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/chainCode/${chainCode}/preferenceGroup/${preferenceGroup}/preferenceSubgroups`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getScreenStyleCodesLOV</p>
             *
             * @tags LOV
             * @name GetScreenStyleCodesLov
             * @summary Fetch List Of Values for Screen Style Codes
             * @request GET:/listOfValues/chainCode/{chainCode}/screenCode/{screenCode}/screenStyleCodes
             */
            getScreenStyleCodesLov: (hotelId, screenCode, chainCode, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/chainCode/${chainCode}/screenCode/${screenCode}/screenStyleCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getScreenCodesLOV</p>
             *
             * @tags LOV
             * @name GetScreenCodesLov
             * @summary Fetch List Of Values for Screen Codes
             * @request GET:/listOfValues/chainCode/{chainCode}/screenType/{screenType}/screenArea/{screenArea}/screenCodes
             */
            getScreenCodesLov: (hotelId, screenArea, screenType, chainCode, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/chainCode/${chainCode}/screenType/${screenType}/screenArea/${screenArea}/screenCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getFieldNameLOV</p>
             *
             * @tags LOV
             * @name GetFieldNameLov
             * @summary Fetch List Of Values for Field Name
             * @request GET:/listOfValues/changeSource/{changeSource}/fieldName
             */
            getFieldNameLov: (hotelId, changeSource, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/changeSource/${changeSource}/fieldName`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getBookingChannelRoomTypesLOV</p>
             *
             * @tags LOV
             * @name GetBookingChannelRoomTypesLov
             * @summary Fetch List Of Values for Booking Channel Room Types
             * @request GET:/listOfValues/channel/{channel}/bookingChannelRoomTypes
             */
            getBookingChannelRoomTypesLov: (hotelId, channel, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/channel/${channel}/bookingChannelRoomTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getGdsHotelsLOV</p>
             *
             * @tags LOV
             * @name GetGdsHotelsLov
             * @summary Fetch List Of Values for Gds Hotels
             * @request GET:/listOfValues/channelType/{channelType}/gdsHotels
             */
            getGdsHotelsLov: (hotelId, channelType, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/channelType/${channelType}/gdsHotels`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getCateringCodesLOV</p>
             *
             * @tags LOV
             * @name GetCateringCodesLov
             * @summary Fetch List Of Values for Catering Codes
             * @request GET:/listOfValues/codeType/{codeType}/cateringCodes
             */
            getCateringCodesLov: (hotelId, codeType, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/codeType/${codeType}/cateringCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getPostalCodesLOV</p>
             *
             * @tags LOV
             * @name GetPostalCodesLov
             * @summary Fetch List Of Values for Postal Codes
             * @request GET:/listOfValues/country/{country}/postalCodes
             */
            getPostalCodesLov: (hotelId, country, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/country/${country}/postalCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getToPostalCodesLOV</p>
             *
             * @tags LOV
             * @name GetToPostalCodesLov
             * @summary Fetch List Of Values for To Postal Codes
             * @request GET:/listOfValues/country/{country}/toPostalCodes
             */
            getToPostalCodesLov: (hotelId, country, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/country/${country}/toPostalCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getExchangeTypesLOV</p>
             *
             * @tags LOV
             * @name GetExchangeTypesLov
             * @summary Fetch List Of Values for Exchange Types
             * @request GET:/listOfValues/currencyCode/{currencyCode}/exchangeTypes
             */
            getExchangeTypesLov: (hotelId, currencyCode, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/currencyCode/${currencyCode}/exchangeTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getCurrencyFormatsLOV</p>
             *
             * @tags LOV
             * @name GetCurrencyFormatsLov
             * @summary Fetch List Of Values for Currency Formats
             * @request GET:/listOfValues/decimal/{decimal}/currencyFormats
             */
            getCurrencyFormatsLov: (hotelId, decimal, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/decimal/${decimal}/currencyFormats`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getNoteTypesLOV</p>
             *
             * @tags LOV
             * @name GetNoteTypesLov
             * @summary Fetch List Of Values for Note Types
             * @request GET:/listOfValues/departments/{departmentType}/noteTypes
             */
            getNoteTypesLov: (hotelId, departmentType, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/departments/${departmentType}/noteTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getDeviceCodeMappingValuesLOV</p>
             *
             * @tags LOV
             * @name GetDeviceCodeMappingValuesLov
             * @summary Fetch List Of Values for Device Code Mapping Values
             * @request GET:/listOfValues/deviceType/{deviceType}/deviceCode/{deviceCode}/codeType/{codeType}/externalCode/{externalCode}/deviceCodeMappingValues
             */
            getDeviceCodeMappingValuesLov: (hotelId, externalCode, codeType, deviceCode, deviceType, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/deviceType/${deviceType}/deviceCode/${deviceCode}/codeType/${codeType}/externalCode/${externalCode}/deviceCodeMappingValues`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getECertificateGroupEntityLOV</p>
             *
             * @tags LOV
             * @name GetECertificateGroupEntityLov
             * @summary Fetch List Of Values for ECertificate Group Entity
             * @request GET:/listOfValues/entityName/{entityName}/eCertificateGroupEntity
             */
            getECertificateGroupEntityLov: (hotelId, entityName, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/entityName/${entityName}/eCertificateGroupEntity`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getADSEchoTokenLOV</p>
             *
             * @tags LOV
             * @name GetAdsEchoTokenLov
             * @summary Fetch List Of Values for ADSEcho Token
             * @request GET:/listOfValues/errorType/{errorType}/adsEchoToken
             */
            getAdsEchoTokenLov: (hotelId, errorType, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/errorType/${errorType}/adsEchoToken`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getADSStatusLOV</p>
             *
             * @tags LOV
             * @name GetAdsStatusLov
             * @summary Fetch List Of Values for ADSStatus
             * @request GET:/listOfValues/errorType/{errorType}/adsStatus
             */
            getAdsStatusLov: (hotelId, errorType, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/errorType/${errorType}/adsStatus`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getCateringStatusCodesLOV</p>
             *
             * @tags LOV
             * @name GetCateringStatusCodesLov
             * @summary Fetch List Of Values for Catering Status Codes
             * @request GET:/listOfValues/exclusionList/{exclusionList}/cateringStatusCodes
             */
            getCateringStatusCodesLov: (hotelId, exclusionList, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/exclusionList/${exclusionList}/cateringStatusCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getEventStatusCodesLOV</p>
             *
             * @tags LOV
             * @name GetEventStatusCodesLov
             * @summary Fetch List Of Values for Event Status Codes
             * @request GET:/listOfValues/exclusionList/{exclusionList}/eventStatusCodes
             */
            getEventStatusCodesLov: (hotelId, exclusionList, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/exclusionList/${exclusionList}/eventStatusCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getGdsConvAmenityCodesLOV</p>
             *
             * @tags LOV
             * @name GetGdsConvAmenityCodesLov
             * @summary Fetch List Of Values for Gds Conv Amenity Codes
             * @request GET:/listOfValues/featureType/{featureType}/bookingChannels/{bookingChannelCodes}/gdsConvAmenityCodes
             */
            getGdsConvAmenityCodesLov: (hotelId, bookingChannelCodes, featureType, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/featureType/${featureType}/bookingChannels/${bookingChannelCodes}/gdsConvAmenityCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getTemplateTransactionSubgroupsLOV</p>
             *
             * @tags LOV
             * @name GetTemplateTransactionSubgroupsLov
             * @summary Fetch List Of Values for Template Transaction Subgroups
             * @request GET:/listOfValues/fetchOnlyUniqueValues/{fetchOnlyUniqueValues}/templateTransactionSubgroups
             */
            getTemplateTransactionSubgroupsLov: (hotelId, fetchOnlyUniqueValues, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/fetchOnlyUniqueValues/${fetchOnlyUniqueValues}/templateTransactionSubgroups`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getGlobalAlertFunctionLOV</p>
             *
             * @tags LOV
             * @name GetGlobalAlertFunctionLov
             * @summary Fetch List Of Values for Global Alert Function
             * @request GET:/listOfValues/fieldType/{fieldType}/globalAlertFunction
             */
            getGlobalAlertFunctionLov: (hotelId, fieldType, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/fieldType/${fieldType}/globalAlertFunction`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getUserDbFunctionArgsLOV</p>
             *
             * @tags LOV
             * @name GetUserDbFunctionArgsLov
             * @summary Fetch List Of Values for User Db Function Args
             * @request GET:/listOfValues/functionName/{functionName}/category/{category}/userDbFunctionArgs
             */
            getUserDbFunctionArgsLov: (hotelId, category, functionName, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/functionName/${functionName}/category/${category}/userDbFunctionArgs`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getChannelCardTypeMappingChannelCardTypeLOV</p>
             *
             * @tags LOV
             * @name GetChannelCardTypeMappingChannelCardTypeLov
             * @summary Fetch List Of Values for Channel Card Type Mapping Channel Card Type
             * @request GET:/listOfValues/gdsHost/{gdsHost}/cardType/{cardType}/channelCardTypeMappingChannelCardType
             */
            getChannelCardTypeMappingChannelCardTypeLov: (hotelId, cardType, gdsHost, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/gdsHost/${gdsHost}/cardType/${cardType}/channelCardTypeMappingChannelCardType`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRepGroupReportsLOV</p>
             *
             * @tags LOV
             * @name GetRepGroupReportsLov
             * @summary Fetch List Of Values for Rep Group Reports
             * @request GET:/listOfValues/groupName/{groupName}/repGroupReports
             */
            getRepGroupReportsLov: (hotelId, groupName, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/groupName/${groupName}/repGroupReports`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getFrequencyLOV</p>
             *
             * @tags LOV
             * @name GetFrequencyLov
             * @summary Fetch List Of Values for Frequency
             * @request GET:/listOfValues/guestRequested/{guestRequested}/defaultDepartureTask/{defaultDepartureTask}/frequency
             */
            getFrequencyLov: (hotelId, defaultDepartureTask, guestRequested, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/guestRequested/${guestRequested}/defaultDepartureTask/${defaultDepartureTask}/frequency`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getFrequencyTypeLOV</p>
             *
             * @tags LOV
             * @name GetFrequencyTypeLov
             * @summary Fetch List Of Values for Frequency Type
             * @request GET:/listOfValues/guestRequested/{guestRequested}/defaultDepartureTask/{defaultDepartureTask}/frequencyType
             */
            getFrequencyTypeLov: (hotelId, defaultDepartureTask, guestRequested, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/guestRequested/${guestRequested}/defaultDepartureTask/${defaultDepartureTask}/frequencyType`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getQueueNameLOV</p>
             *
             * @tags LOV
             * @name GetQueueNameLov
             * @summary Fetch List Of Values for Queue Name
             * @request GET:/listOfValues/hotelCodeList/{hotelCodeList}/queueName
             */
            getQueueNameLov: (hotelId, hotelCodeList, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotelCodeList/${hotelCodeList}/queueName`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRepRoomTypeMultiHotelLOV</p>
             *
             * @tags LOV
             * @name GetRepRoomTypeMultiHotelLov
             * @summary Fetch List Of Values for Rep Room Type Multi Hotel
             * @request GET:/listOfValues/hotelCodeList/{hotelCodeList}/repRoomTypeMultiHotel
             */
            getRepRoomTypeMultiHotelLov: (hotelId, hotelCodeList, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotelCodeList/${hotelCodeList}/repRoomTypeMultiHotel`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRoomClassMultiPropertyLOV</p>
             *
             * @tags LOV
             * @name GetRoomClassMultiPropertyLov
             * @summary Fetch List Of Values for Room Class Multi Property
             * @request GET:/listOfValues/hotelCodeList/{hotelCodeList}/roomClassMultiProperty
             */
            getRoomClassMultiPropertyLov: (hotelId, hotelCodeList, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotelCodeList/${hotelCodeList}/roomClassMultiProperty`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRepOwnerCodesLOV</p>
             *
             * @tags LOV
             * @name GetRepOwnerCodesLov
             * @summary Fetch List Of Values for Rep Owner Codes
             * @request GET:/listOfValues/hotelCodesList/{hotelCodesList}/repOwnerCodes
             */
            getRepOwnerCodesLov: (hotelId, hotelCodesList, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotelCodesList/${hotelCodesList}/repOwnerCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getActivitiesLOV</p>
             *
             * @tags LOV
             * @name GetActivitiesLov
             * @summary Fetch List Of Values for Activities
             * @request GET:/listOfValues/hotels/{hotelId}/activities
             */
            getActivitiesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/activities`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getActivityConfigTypesLOV</p>
             *
             * @tags LOV
             * @name GetActivityConfigTypesLov
             * @summary Fetch List Of Values for Activity Config Types
             * @request GET:/listOfValues/hotels/{hotelId}/activityConfigTypes
             */
            getActivityConfigTypesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/activityConfigTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getUserLogActivityTypesLOV</p>
             *
             * @tags LOV
             * @name GetUserLogActivityTypesLov
             * @summary Fetch List Of Values for User Log Activity Types
             * @request GET:/listOfValues/hotels/{hotelId}/activityGroup/{activityGroup}/userLogActivityTypes
             */
            getUserLogActivityTypesLov: (activityGroup, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/activityGroup/${activityGroup}/userLogActivityTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getActivityLocationsLOV</p>
             *
             * @tags LOV
             * @name GetActivityLocationsLov
             * @summary Fetch List Of Values for Activity Locations
             * @request GET:/listOfValues/hotels/{hotelId}/activityLocations
             */
            getActivityLocationsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/activityLocations`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getActivityStatusLOV</p>
             *
             * @tags LOV
             * @name GetActivityStatusLov
             * @summary Fetch List Of Values for Activity Status
             * @request GET:/listOfValues/hotels/{hotelId}/activityStatus
             */
            getActivityStatusLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/activityStatus`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getActivityTypesLOV</p>
             *
             * @tags LOV
             * @name GetActivityTypesLov
             * @summary Fetch List Of Values for Activity Types
             * @request GET:/listOfValues/hotels/{hotelId}/activityTypes
             */
            getActivityTypesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/activityTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getReservationPackagesLOV</p>
             *
             * @tags LOV
             * @name GetReservationPackagesLov
             * @summary Fetch List Of Values for Reservation Packages
             * @request GET:/listOfValues/hotels/{hotelId}/adults/{adults}/children/{children}/arrival/{arrival}/departure/{departure}/reservationPackages
             */
            getReservationPackagesLov: (departure, arrival, children, adults, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/adults/${adults}/children/${children}/arrival/${arrival}/departure/${departure}/reservationPackages`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getReservationPackagesGroupItemsLOV</p>
             *
             * @tags LOV
             * @name GetReservationPackagesGroupItemsLov
             * @summary Fetch List Of Values for Reservation Packages Group Items
             * @request GET:/listOfValues/hotels/{hotelId}/adults/{adults}/children/{children}/arrival/{arrival}/group/{group}/reservationPackagesGroupItems
             */
            getReservationPackagesGroupItemsLov: (group, arrival, children, adults, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/adults/${adults}/children/${children}/arrival/${arrival}/group/${group}/reservationPackagesGroupItems`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getAgentAccountsLOV</p>
             *
             * @tags LOV
             * @name GetAgentAccountsLov
             * @summary Fetch List Of Values for Agent Accounts
             * @request GET:/listOfValues/hotels/{hotelId}/agentAccounts
             */
            getAgentAccountsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/agentAccounts`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getAgentSourceCitiesLOV</p>
             *
             * @tags LOV
             * @name GetAgentSourceCitiesLov
             * @summary Fetch List Of Values for Agent Source Cities
             * @request GET:/listOfValues/hotels/{hotelId}/agentSourceCities
             */
            getAgentSourceCitiesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/agentSourceCities`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getAgentSourceResvCitiesLOV</p>
             *
             * @tags LOV
             * @name GetAgentSourceResvCitiesLov
             * @summary Fetch List Of Values for Agent Source Resv Cities
             * @request GET:/listOfValues/hotels/{hotelId}/agentSourceResvCities
             */
            getAgentSourceResvCitiesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/agentSourceResvCities`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getAlertCodesLOV</p>
             *
             * @tags LOV
             * @name GetAlertCodesLov
             * @summary Fetch List Of Values for Alert Codes
             * @request GET:/listOfValues/hotels/{hotelId}/alertCodes
             */
            getAlertCodesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/alertCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getAlternateHotelCodesLOV</p>
             *
             * @tags LOV
             * @name GetAlternateHotelCodesLov
             * @summary Fetch List Of Values for Alternate Hotel Codes
             * @request GET:/listOfValues/hotels/{hotelId}/alternateHotelCodes
             */
            getAlternateHotelCodesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/alternateHotelCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getAmenitiesLOV</p>
             *
             * @tags LOV
             * @name GetAmenitiesLov
             * @summary Fetch List Of Values for Amenities
             * @request GET:/listOfValues/hotels/{hotelId}/amenities
             */
            getAmenitiesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/amenities`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getARAccountTypesLOV</p>
             *
             * @tags LOV
             * @name GetArAccountTypesLov
             * @summary Fetch List Of Values for ARAccount Types
             * @request GET:/listOfValues/hotels/{hotelId}/arAccountTypes
             */
            getArAccountTypesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/arAccountTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getARCreditCardsLOV</p>
             *
             * @tags LOV
             * @name GetArCreditCardsLov
             * @summary Fetch List Of Values for ARCredit Cards
             * @request GET:/listOfValues/hotels/{hotelId}/arCreditCards
             */
            getArCreditCardsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/arCreditCards`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getArrangementCodeLOV</p>
             *
             * @tags LOV
             * @name GetArrangementCodeLov
             * @summary Fetch List Of Values for Arrangement Code
             * @request GET:/listOfValues/hotels/{hotelId}/arrangementCode
             */
            getArrangementCodeLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/arrangementCode`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getPackageArrangementAssociationLOV</p>
             *
             * @tags LOV
             * @name GetPackageArrangementAssociationLov
             * @summary Fetch List Of Values for Package Arrangement Association
             * @request GET:/listOfValues/hotels/{hotelId}/arrangementCode/{arrangementCode}/packageArrangementAssociation
             */
            getPackageArrangementAssociationLov: (arrangementCode, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/arrangementCode/${arrangementCode}/packageArrangementAssociation`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getBlockRatesLOV</p>
             *
             * @tags LOV
             * @name GetBlockRatesLov
             * @summary Fetch List Of Values for Block Rates
             * @request GET:/listOfValues/hotels/{hotelId}/arrival/{arrival}/departure/{departure}/blockId/{blockId}/blockRates
             */
            getBlockRatesLov: (blockId, departure, arrival, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/arrival/${arrival}/departure/${departure}/blockId/${blockId}/blockRates`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getReservationTicketsCodesLOV</p>
             *
             * @tags LOV
             * @name GetReservationTicketsCodesLov
             * @summary Fetch List Of Values for Reservation Tickets Codes
             * @request GET:/listOfValues/hotels/{hotelId}/arrival/{arrival}/departure/{departure}/reservationTicketsCodes
             */
            getReservationTicketsCodesLov: (departure, arrival, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/arrival/${arrival}/departure/${departure}/reservationTicketsCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getBlockCodesByArrivalDateLOV</p>
             *
             * @tags LOV
             * @name GetBlockCodesByArrivalDateLov
             * @summary Fetch List Of Values for Block Codes By Arrival Date
             * @request GET:/listOfValues/hotels/{hotelId}/arrivalDate/{arrivalDate}/blockCodesByArrivalDate
             */
            getBlockCodesByArrivalDateLov: (arrivalDate, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/arrivalDate/${arrivalDate}/blockCodesByArrivalDate`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getArticleCodesLOV</p>
             *
             * @tags LOV
             * @name GetArticleCodesLov
             * @summary Fetch List Of Values for Article Codes
             * @request GET:/listOfValues/hotels/{hotelId}/articleCodes
             */
            getArticleCodesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/articleCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getAttractionsLOV</p>
             *
             * @tags LOV
             * @name GetAttractionsLov
             * @summary Fetch List Of Values for Attractions
             * @request GET:/listOfValues/hotels/{hotelId}/attractions
             */
            getAttractionsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/attractions`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getAuthorizerLOV</p>
             *
             * @tags LOV
             * @name GetAuthorizerLov
             * @summary Fetch List Of Values for Authorizer
             * @request GET:/listOfValues/hotels/{hotelId}/authorizer
             */
            getAuthorizerLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/authorizer`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getAvailableProfileOwnerRoomsLOV</p>
             *
             * @tags LOV
             * @name GetAvailableProfileOwnerRoomsLov
             * @summary Fetch List Of Values for Available Profile Owner Rooms
             * @request GET:/listOfValues/hotels/{hotelId}/availableProfileOwnerRooms
             */
            getAvailableProfileOwnerRoomsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/availableProfileOwnerRooms`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getAvailableScriptLanguagesLOV</p>
             *
             * @tags LOV
             * @name GetAvailableScriptLanguagesLov
             * @summary Fetch List Of Values for Available Script Languages
             * @request GET:/listOfValues/hotels/{hotelId}/availableScriptLanguages
             */
            getAvailableScriptLanguagesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/availableScriptLanguages`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getAwardCodesLOV</p>
             *
             * @tags LOV
             * @name GetAwardCodesLov
             * @summary Fetch List Of Values for Award Codes
             * @request GET:/listOfValues/hotels/{hotelId}/awardCodes
             */
            getAwardCodesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/awardCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getAwardCodesMultiHotelLOV</p>
             *
             * @tags LOV
             * @name GetAwardCodesMultiHotelLov
             * @summary Fetch List Of Values for Award Codes Multi Hotel
             * @request GET:/listOfValues/hotels/{hotelId}/awardCodesMultiHotel
             */
            getAwardCodesMultiHotelLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/awardCodesMultiHotel`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getAwardMktgCodesLOV</p>
             *
             * @tags LOV
             * @name GetAwardMktgCodesLov
             * @summary Fetch List Of Values for Award Mktg Codes
             * @request GET:/listOfValues/hotels/{hotelId}/awardMktgCodes
             */
            getAwardMktgCodesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/awardMktgCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getBankAccountsLOV</p>
             *
             * @tags LOV
             * @name GetBankAccountsLov
             * @summary Fetch List Of Values for Bank Accounts
             * @request GET:/listOfValues/hotels/{hotelId}/bankAccounts
             */
            getBankAccountsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/bankAccounts`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getBankAccountsForReportsLOV</p>
             *
             * @tags LOV
             * @name GetBankAccountsForReportsLov
             * @summary Fetch List Of Values for Bank Accounts For Reports
             * @request GET:/listOfValues/hotels/{hotelId}/bankAccountsForReports
             */
            getBankAccountsForReportsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/bankAccountsForReports`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getBanquetPrintingMethodLOV</p>
             *
             * @tags LOV
             * @name GetBanquetPrintingMethodLov
             * @summary Fetch List Of Values for Banquet Printing Method
             * @request GET:/listOfValues/hotels/{hotelId}/banquetPrintingMethod
             */
            getBanquetPrintingMethodLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/banquetPrintingMethod`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getEndOfDayReportsLOV</p>
             *
             * @tags LOV
             * @name GetEndOfDayReportsLov
             * @summary Fetch List Of Values for End Of Day Reports
             * @request GET:/listOfValues/hotels/{hotelId}/beforeIncomeAudit/{beforeIncomeAudit}/endOfDayReports
             */
            getEndOfDayReportsLov: (beforeIncomeAudit, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/beforeIncomeAudit/${beforeIncomeAudit}/endOfDayReports`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getBlockCodesLOV</p>
             *
             * @tags LOV
             * @name GetBlockCodesLov
             * @summary Fetch List Of Values for Block Codes
             * @request GET:/listOfValues/hotels/{hotelId}/beginDate/{beginDate}/endDate/{endDate}/blockCodes
             */
            getBlockCodesLov: (endDate, beginDate, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/beginDate/${beginDate}/endDate/${endDate}/blockCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getBlockIdsLOV</p>
             *
             * @tags LOV
             * @name GetBlockIdsLov
             * @summary Fetch List Of Values for Block Ids
             * @request GET:/listOfValues/hotels/{hotelId}/beginDate/{beginDate}/endDate/{endDate}/blockIds
             */
            getBlockIdsLov: (endDate, beginDate, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/beginDate/${beginDate}/endDate/${endDate}/blockIds`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getBlockRateCodesLOV</p>
             *
             * @tags LOV
             * @name GetBlockRateCodesLov
             * @summary Fetch List Of Values for Block Rate Codes
             * @request GET:/listOfValues/hotels/{hotelId}/beginDate/{beginDate}/endDate/{endDate}/negotiatedOnly/{negotiatedOnly}/blockRateCodes
             */
            getBlockRateCodesLov: (negotiatedOnly, endDate, beginDate, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/beginDate/${beginDate}/endDate/${endDate}/negotiatedOnly/${negotiatedOnly}/blockRateCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getResStatReportRateCodeLOV</p>
             *
             * @tags LOV
             * @name GetResStatReportRateCodeLov
             * @summary Fetch List Of Values for Res Stat Report Rate Code
             * @request GET:/listOfValues/hotels/{hotelId}/beginDate/{beginDate}/endDate/{endDate}/resStatReportRateCode
             */
            getResStatReportRateCodeLov: (endDate, beginDate, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/beginDate/${beginDate}/endDate/${endDate}/resStatReportRateCode`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getMembershipPromotionsLOV</p>
             *
             * @tags LOV
             * @name GetMembershipPromotionsLov
             * @summary Fetch List Of Values for Membership Promotions
             * @request GET:/listOfValues/hotels/{hotelId}/beginDate/{beginDate}/membershipId/{membershipId}/membershipPromotions
             */
            getMembershipPromotionsLov: (membershipId, beginDate, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/beginDate/${beginDate}/membershipId/${membershipId}/membershipPromotions`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getBillingInstructionsLOV</p>
             *
             * @tags LOV
             * @name GetBillingInstructionsLov
             * @summary Fetch List Of Values for Billing Instructions
             * @request GET:/listOfValues/hotels/{hotelId}/billingInstructions
             */
            getBillingInstructionsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/billingInstructions`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getBlockCodesFinOperationsLOV</p>
             *
             * @tags LOV
             * @name GetBlockCodesFinOperationsLov
             * @summary Fetch List Of Values for Block Codes Fin Operations
             * @request GET:/listOfValues/hotels/{hotelId}/blockCodesFinOperations
             */
            getBlockCodesFinOperationsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/blockCodesFinOperations`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getBlockEventsLOV</p>
             *
             * @tags LOV
             * @name GetBlockEventsLov
             * @summary Fetch List Of Values for Block Events
             * @request GET:/listOfValues/hotels/{hotelId}/blockEvents
             */
            getBlockEventsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/blockEvents`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getBlockEventIdsLOV</p>
             *
             * @tags LOV
             * @name GetBlockEventIdsLov
             * @summary Fetch List Of Values for Block Event Ids
             * @request GET:/listOfValues/hotels/{hotelId}/blockId/{blockId}/blockEventIds
             */
            getBlockEventIdsLov: (blockId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/blockId/${blockId}/blockEventIds`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getBlockModeLovLOV</p>
             *
             * @tags LOV
             * @name GetBlockModeLovLov
             * @summary Fetch List Of Values for Block Mode Lov
             * @request GET:/listOfValues/hotels/{hotelId}/blockModeLov
             */
            getBlockModeLovLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/blockModeLov`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getBlockPaymentMethodsLOV</p>
             *
             * @tags LOV
             * @name GetBlockPaymentMethodsLov
             * @summary Fetch List Of Values for Block Payment Methods
             * @request GET:/listOfValues/hotels/{hotelId}/blockPaymentMethods
             */
            getBlockPaymentMethodsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/blockPaymentMethods`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getChannelConfigRateCodesLOV</p>
             *
             * @tags LOV
             * @name GetChannelConfigRateCodesLov
             * @summary Fetch List Of Values for Channel Config Rate Codes
             * @request GET:/listOfValues/hotels/{hotelId}/bookingChannels/{bookingChannelCode}/roomType/{roomType}/channelConfigRateCodes
             */
            getChannelConfigRateCodesLov: (roomType, bookingChannelCode, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/bookingChannels/${bookingChannelCode}/roomType/${roomType}/channelConfigRateCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getBlockReservationTypesLOV</p>
             *
             * @tags LOV
             * @name GetBlockReservationTypesLov
             * @summary Fetch List Of Values for Block Reservation Types
             * @request GET:/listOfValues/hotels/{hotelId}/bookingStatus/{bookingStatus}/blockReservationTypes
             */
            getBlockReservationTypesLov: (bookingStatus, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/bookingStatus/${bookingStatus}/blockReservationTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getBookingTypesIndividualsLOV</p>
             *
             * @tags LOV
             * @name GetBookingTypesIndividualsLov
             * @summary Fetch List Of Values for Booking Types Individuals
             * @request GET:/listOfValues/hotels/{hotelId}/bookingTypesIndividuals
             */
            getBookingTypesIndividualsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/bookingTypesIndividuals`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getHKTaskSheetsNoLOV</p>
             *
             * @tags LOV
             * @name GetHkTaskSheetsNoLov
             * @summary Fetch List Of Values for HKTask Sheets No
             * @request GET:/listOfValues/hotels/{hotelId}/breakOutId/{breakOutId}/hkTaskSheetsNo
             */
            getHkTaskSheetsNoLov: (breakOutId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/breakOutId/${breakOutId}/hkTaskSheetsNo`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRevenueBucketTrxCodesLOV</p>
             *
             * @tags LOV
             * @name GetRevenueBucketTrxCodesLov
             * @summary Fetch List Of Values for Revenue Bucket Trx Codes
             * @request GET:/listOfValues/hotels/{hotelId}/bucketType/{bucketType}/revenueBucketTrxCodes
             */
            getRevenueBucketTrxCodesLov: (bucketType, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/bucketType/${bucketType}/revenueBucketTrxCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getBudgetForecastCodesLOV</p>
             *
             * @tags LOV
             * @name GetBudgetForecastCodesLov
             * @summary Fetch List Of Values for Budget Forecast Codes
             * @request GET:/listOfValues/hotels/{hotelId}/budgetForecastCodes
             */
            getBudgetForecastCodesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/budgetForecastCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getBudgetRateCodesLOV</p>
             *
             * @tags LOV
             * @name GetBudgetRateCodesLov
             * @summary Fetch List Of Values for Budget Rate Codes
             * @request GET:/listOfValues/hotels/{hotelId}/budgetRateCodes
             */
            getBudgetRateCodesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/budgetRateCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getHKScheduledAttendantsLOV</p>
             *
             * @tags LOV
             * @name GetHkScheduledAttendantsLov
             * @summary Fetch List Of Values for HKScheduled Attendants
             * @request GET:/listOfValues/hotels/{hotelId}/businessDate/{businessDate}/hkScheduledAttendants
             */
            getHkScheduledAttendantsLov: (businessDate, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/businessDate/${businessDate}/hkScheduledAttendants`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getCampaignActivityTypesLOV</p>
             *
             * @tags LOV
             * @name GetCampaignActivityTypesLov
             * @summary Fetch List Of Values for Campaign Activity Types
             * @request GET:/listOfValues/hotels/{hotelId}/campaignActivityTypes
             */
            getCampaignActivityTypesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/campaignActivityTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getCashRegisterIDLOV</p>
             *
             * @tags LOV
             * @name GetCashRegisterIdlov
             * @summary Fetch List Of Values for Cash Register ID
             * @request GET:/listOfValues/hotels/{hotelId}/cashRegisterId
             */
            getCashRegisterIdlov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/cashRegisterId`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getCatBudgetTypeEventCodesLOV</p>
             *
             * @tags LOV
             * @name GetCatBudgetTypeEventCodesLov
             * @summary Fetch List Of Values for Cat Budget Type Event Codes
             * @request GET:/listOfValues/hotels/{hotelId}/catBudgetType/{catBudgetType}/catBudgetTypeEventCodes
             */
            getCatBudgetTypeEventCodesLov: (catBudgetType, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/catBudgetType/${catBudgetType}/catBudgetTypeEventCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getCatBudgetTypeMarketCodesLOV</p>
             *
             * @tags LOV
             * @name GetCatBudgetTypeMarketCodesLov
             * @summary Fetch List Of Values for Cat Budget Type Market Codes
             * @request GET:/listOfValues/hotels/{hotelId}/catBudgetType/{catBudgetType}/catBudgetTypeMarketCodes
             */
            getCatBudgetTypeMarketCodesLov: (catBudgetType, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/catBudgetType/${catBudgetType}/catBudgetTypeMarketCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getCatBudgetTypeMealCodesLOV</p>
             *
             * @tags LOV
             * @name GetCatBudgetTypeMealCodesLov
             * @summary Fetch List Of Values for Cat Budget Type Meal Codes
             * @request GET:/listOfValues/hotels/{hotelId}/catBudgetType/{catBudgetType}/catBudgetTypeMealCodes
             */
            getCatBudgetTypeMealCodesLov: (catBudgetType, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/catBudgetType/${catBudgetType}/catBudgetTypeMealCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getCatBudgetTypeRevenueCodesLOV</p>
             *
             * @tags LOV
             * @name GetCatBudgetTypeRevenueCodesLov
             * @summary Fetch List Of Values for Cat Budget Type Revenue Codes
             * @request GET:/listOfValues/hotels/{hotelId}/catBudgetType/{catBudgetType}/catBudgetTypeRevenueCodes
             */
            getCatBudgetTypeRevenueCodesLov: (catBudgetType, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/catBudgetType/${catBudgetType}/catBudgetTypeRevenueCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getCateringPackagePriceCodesLOV</p>
             *
             * @tags LOV
             * @name GetCateringPackagePriceCodesLov
             * @summary Fetch List Of Values for Catering Package Price Codes
             * @request GET:/listOfValues/hotels/{hotelId}/cateringPackagePriceCodes
             */
            getCateringPackagePriceCodesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/cateringPackagePriceCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getBookingChannelRatePlansLOV</p>
             *
             * @tags LOV
             * @name GetBookingChannelRatePlansLov
             * @summary Fetch List Of Values for Booking Channel Rate Plans
             * @request GET:/listOfValues/hotels/{hotelId}/channel/{channel}/bookingChannelRatePlans
             */
            getBookingChannelRatePlansLov: (channel, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/channel/${channel}/bookingChannelRatePlans`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getChannelCardTypeMappingCardTypeLOV</p>
             *
             * @tags LOV
             * @name GetChannelCardTypeMappingCardTypeLov
             * @summary Fetch List Of Values for Channel Card Type Mapping Card Type
             * @request GET:/listOfValues/hotels/{hotelId}/channelCardTypeMappingCardType
             */
            getChannelCardTypeMappingCardTypeLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/channelCardTypeMappingCardType`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getChannelCardTypeMappingGdsHostLOV</p>
             *
             * @tags LOV
             * @name GetChannelCardTypeMappingGdsHostLov
             * @summary Fetch List Of Values for Channel Card Type Mapping Gds Host
             * @request GET:/listOfValues/hotels/{hotelId}/channelCardTypeMappingGdsHost
             */
            getChannelCardTypeMappingGdsHostLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/channelCardTypeMappingGdsHost`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getCommissionCodeLOV</p>
             *
             * @tags LOV
             * @name GetCommissionCodeLov
             * @summary Fetch List Of Values for Commission Code
             * @request GET:/listOfValues/hotels/{hotelId}/commissionCode
             */
            getCommissionCodeLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/commissionCode`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getCommissionTxnCodesLOV</p>
             *
             * @tags LOV
             * @name GetCommissionTxnCodesLov
             * @summary Fetch List Of Values for Commission Txn Codes
             * @request GET:/listOfValues/hotels/{hotelId}/commissionTxnCodes
             */
            getCommissionTxnCodesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/commissionTxnCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getCompAuthorizersLOV</p>
             *
             * @tags LOV
             * @name GetCompAuthorizersLov
             * @summary Fetch List Of Values for Comp Authorizers
             * @request GET:/listOfValues/hotels/{hotelId}/compAuthorizers
             */
            getCompAuthorizersLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/compAuthorizers`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getCompTypesLOV</p>
             *
             * @tags LOV
             * @name GetCompTypesLov
             * @summary Fetch List Of Values for Comp Types
             * @request GET:/listOfValues/hotels/{hotelId}/compTypes
             */
            getCompTypesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/compTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getCompaniesLOV</p>
             *
             * @tags LOV
             * @name GetCompaniesLov
             * @summary Fetch List Of Values for Companies
             * @request GET:/listOfValues/hotels/{hotelId}/companies
             */
            getCompaniesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/companies`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getConfLetterReportsLOV</p>
             *
             * @tags LOV
             * @name GetConfLetterReportsLov
             * @summary Fetch List Of Values for Conf Letter Reports
             * @request GET:/listOfValues/hotels/{hotelId}/confLetterReports
             */
            getConfLetterReportsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/confLetterReports`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getExportMappingCodesToLinkLOV</p>
             *
             * @tags LOV
             * @name GetExportMappingCodesToLinkLov
             * @summary Fetch List Of Values for Export Mapping Codes To Link
             * @request GET:/listOfValues/hotels/{hotelId}/configType/{configType}/exportMappingCodesToLink
             */
            getExportMappingCodesToLinkLov: (configType, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/configType/${configType}/exportMappingCodesToLink`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getHotelContactCommMethodLOV</p>
             *
             * @tags LOV
             * @name GetHotelContactCommMethodLov
             * @summary Fetch List Of Values for Hotel Contact Comm Method
             * @request GET:/listOfValues/hotels/{hotelId}/contactType/{contactType}/hotelContactCommMethod
             */
            getHotelContactCommMethodLov: (contactType, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/contactType/${contactType}/hotelContactCommMethod`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getCreditCardTypesLOV</p>
             *
             * @tags LOV
             * @name GetCreditCardTypesLov
             * @summary Fetch List Of Values for Credit Card Types
             * @request GET:/listOfValues/hotels/{hotelId}/creditCardTypes
             */
            getCreditCardTypesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/creditCardTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getStageProfilesLOV</p>
             *
             * @tags LOV
             * @name GetStageProfilesLov
             * @summary Fetch List Of Values for Stage Profiles
             * @request GET:/listOfValues/hotels/{hotelId}/criteria/{criteria}/stageProfiles
             */
            getStageProfilesLov: (criteria, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/criteria/${criteria}/stageProfiles`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getConfigBaseRatePlansLOV</p>
             *
             * @tags LOV
             * @name GetConfigBaseRatePlansLov
             * @summary Fetch List Of Values for Config Base Rate Plans
             * @request GET:/listOfValues/hotels/{hotelId}/currentRateCode/{currentRateCode}/currencyCode/{currencyCode}/daily/{daily}/tiered/{tiered}/configBaseRatePlans
             */
            getConfigBaseRatePlansLov: (tiered, daily, currencyCode, currentRateCode, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/currentRateCode/${currentRateCode}/currencyCode/${currencyCode}/daily/${daily}/tiered/${tiered}/configBaseRatePlans`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getConfigAdvDynamicBaseRatePlansLOV</p>
             *
             * @tags LOV
             * @name GetConfigAdvDynamicBaseRatePlansLov
             * @summary Fetch List Of Values for Config Adv Dynamic Base Rate Plans
             * @request GET:/listOfValues/hotels/{hotelId}/currentRateCode/{currentRateCode}/tiered/{tiered}/daily/{daily}/configAdvDynamicBaseRatePlans
             */
            getConfigAdvDynamicBaseRatePlansLov: (daily, tiered, currentRateCode, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/currentRateCode/${currentRateCode}/tiered/${tiered}/daily/${daily}/configAdvDynamicBaseRatePlans`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getCustomNumberConfigCodesLOV</p>
             *
             * @tags LOV
             * @name GetCustomNumberConfigCodesLov
             * @summary Fetch List Of Values for Custom Number Config Codes
             * @request GET:/listOfValues/hotels/{hotelId}/customNumberConfigCodes
             */
            getCustomNumberConfigCodesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/customNumberConfigCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getCustomRoomTranslationLOV</p>
             *
             * @tags LOV
             * @name GetCustomRoomTranslationLov
             * @summary Fetch List Of Values for Custom Room Translation
             * @request GET:/listOfValues/hotels/{hotelId}/dbfLogo/{dbfLogo}/customRoomTranslation
             */
            getCustomRoomTranslationLov: (dbfLogo, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/dbfLogo/${dbfLogo}/customRoomTranslation`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getQuickTextsLOV</p>
             *
             * @tags LOV
             * @name GetQuickTextsLov
             * @summary Fetch List Of Values for Quick Texts
             * @request GET:/listOfValues/hotels/{hotelId}/departmentId/{departmentId}/quickTexts
             */
            getQuickTextsLov: (departmentId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/departmentId/${departmentId}/quickTexts`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getDeviceLocationsLOV</p>
             *
             * @tags LOV
             * @name GetDeviceLocationsLov
             * @summary Fetch List Of Values for Device Locations
             * @request GET:/listOfValues/hotels/{hotelId}/deviceLocations
             */
            getDeviceLocationsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/deviceLocations`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getDietaryPreferencesLOV</p>
             *
             * @tags LOV
             * @name GetDietaryPreferencesLov
             * @summary Fetch List Of Values for Dietary Preferences
             * @request GET:/listOfValues/hotels/{hotelId}/dietaryPreferences
             */
            getDietaryPreferencesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/dietaryPreferences`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getECouponLOV</p>
             *
             * @tags LOV
             * @name GetECouponLov
             * @summary Fetch List Of Values for ECoupon
             * @request GET:/listOfValues/hotels/{hotelId}/eCoupon
             */
            getECouponLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/eCoupon`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getECouponRateCodesLOV</p>
             *
             * @tags LOV
             * @name GetECouponRateCodesLov
             * @summary Fetch List Of Values for ECoupon Rate Codes
             * @request GET:/listOfValues/hotels/{hotelId}/eCouponRateCodes
             */
            getECouponRateCodesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/eCouponRateCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getEcouponResvRoomLOV</p>
             *
             * @tags LOV
             * @name GetEcouponResvRoomLov
             * @summary Fetch List Of Values for Ecoupon Resv Room
             * @request GET:/listOfValues/hotels/{hotelId}/ecouponResvRoom
             */
            getEcouponResvRoomLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/ecouponResvRoom`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getEventGroupsLOV</p>
             *
             * @tags LOV
             * @name GetEventGroupsLov
             * @summary Fetch List Of Values for Event Groups
             * @request GET:/listOfValues/hotels/{hotelId}/eventGroups
             */
            getEventGroupsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/eventGroups`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getEventLocationsLOV</p>
             *
             * @tags LOV
             * @name GetEventLocationsLov
             * @summary Fetch List Of Values for Event Locations
             * @request GET:/listOfValues/hotels/{hotelId}/eventLocations
             */
            getEventLocationsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/eventLocations`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getCurrencyExchangeRatesLOV</p>
             *
             * @tags LOV
             * @name GetCurrencyExchangeRatesLov
             * @summary Fetch List Of Values for Currency Exchange Rates
             * @request GET:/listOfValues/hotels/{hotelId}/exchangeType/{exchangeType}/currencyExchangeRates
             */
            getCurrencyExchangeRatesLov: (exchangeType, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/exchangeType/${exchangeType}/currencyExchangeRates`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getExportMappingTypeCodesLOV</p>
             *
             * @tags LOV
             * @name GetExportMappingTypeCodesLov
             * @summary Fetch List Of Values for Export Mapping Type Codes
             * @request GET:/listOfValues/hotels/{hotelId}/exportMappingTypeCodes
             */
            getExportMappingTypeCodesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/exportMappingTypeCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getBusinessEventActionTypeLOV</p>
             *
             * @tags LOV
             * @name GetBusinessEventActionTypeLov
             * @summary Fetch List Of Values for Business Event Action Type
             * @request GET:/listOfValues/hotels/{hotelId}/extSystem/{extSystem}/module/{module}/businessEventActionType
             */
            getBusinessEventActionTypeLov: (module, extSystem, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/extSystem/${extSystem}/module/${module}/businessEventActionType`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getExternalReferenceTypesLOV</p>
             *
             * @tags LOV
             * @name GetExternalReferenceTypesLov
             * @summary Fetch List Of Values for External Reference Types
             * @request GET:/listOfValues/hotels/{hotelId}/externalReferenceTypes
             */
            getExternalReferenceTypesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/externalReferenceTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getFacilityCodesLOV</p>
             *
             * @tags LOV
             * @name GetFacilityCodesLov
             * @summary Fetch List Of Values for Facility Codes
             * @request GET:/listOfValues/hotels/{hotelId}/facilityCodes
             */
            getFacilityCodesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/facilityCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getFacilityCodesReservationLOV</p>
             *
             * @tags LOV
             * @name GetFacilityCodesReservationLov
             * @summary Fetch List Of Values for Facility Codes Reservation
             * @request GET:/listOfValues/hotels/{hotelId}/facilityTask/{facilityTask}/facilityCodesReservation
             */
            getFacilityCodesReservationLov: (facilityTask, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/facilityTask/${facilityTask}/facilityCodesReservation`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getFacilityTasksLOV</p>
             *
             * @tags LOV
             * @name GetFacilityTasksLov
             * @summary Fetch List Of Values for Facility Tasks
             * @request GET:/listOfValues/hotels/{hotelId}/facilityTasks
             */
            getFacilityTasksLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/facilityTasks`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getAvailableExportTemplatesLOV</p>
             *
             * @tags LOV
             * @name GetAvailableExportTemplatesLov
             * @summary Fetch List Of Values for Available Export Templates
             * @request GET:/listOfValues/hotels/{hotelId}/fileGroup/{fileGroup}/availableExportTemplates
             */
            getAvailableExportTemplatesLov: (fileGroup, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/fileGroup/${fileGroup}/availableExportTemplates`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getFiscalPaymentMethodsLOV</p>
             *
             * @tags LOV
             * @name GetFiscalPaymentMethodsLov
             * @summary Fetch List Of Values for Fiscal Payment Methods
             * @request GET:/listOfValues/hotels/{hotelId}/fiscalPaymentMethods
             */
            getFiscalPaymentMethodsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/fiscalPaymentMethods`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRepFiscalMonthsLOV</p>
             *
             * @tags LOV
             * @name GetRepFiscalMonthsLov
             * @summary Fetch List Of Values for Rep Fiscal Months
             * @request GET:/listOfValues/hotels/{hotelId}/fiscalYearId/{fiscalYearId}/repFiscalMonths
             */
            getRepFiscalMonthsLov: (fiscalYearId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/fiscalYearId/${fiscalYearId}/repFiscalMonths`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRepFiscalWeeksLOV</p>
             *
             * @tags LOV
             * @name GetRepFiscalWeeksLov
             * @summary Fetch List Of Values for Rep Fiscal Weeks
             * @request GET:/listOfValues/hotels/{hotelId}/fiscalYearId/{fiscalYearId}/repFiscalWeeks
             */
            getRepFiscalWeeksLov: (fiscalYearId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/fiscalYearId/${fiscalYearId}/repFiscalWeeks`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getFixedChargesTransactionCodesLOV</p>
             *
             * @tags LOV
             * @name GetFixedChargesTransactionCodesLov
             * @summary Fetch List Of Values for Fixed Charges Transaction Codes
             * @request GET:/listOfValues/hotels/{hotelId}/fixedChargesTransactionCodes
             */
            getFixedChargesTransactionCodesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/fixedChargesTransactionCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getFloorsLOV</p>
             *
             * @tags LOV
             * @name GetFloorsLov
             * @summary Fetch List Of Values for Floors
             * @request GET:/listOfValues/hotels/{hotelId}/floors
             */
            getFloorsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/floors`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getFolioStylesLOV</p>
             *
             * @tags LOV
             * @name GetFolioStylesLov
             * @summary Fetch List Of Values for Folio Styles
             * @request GET:/listOfValues/hotels/{hotelId}/folioStyles
             */
            getFolioStylesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/folioStyles`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getFolioTypesLOV</p>
             *
             * @tags LOV
             * @name GetFolioTypesLov
             * @summary Fetch List Of Values for Folio Types
             * @request GET:/listOfValues/hotels/{hotelId}/folioTypes
             */
            getFolioTypesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/folioTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getForecastGroupsLOV</p>
             *
             * @tags LOV
             * @name GetForecastGroupsLov
             * @summary Fetch List Of Values for Forecast Groups
             * @request GET:/listOfValues/hotels/{hotelId}/forecastGroups
             */
            getForecastGroupsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/forecastGroups`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getTaskBreakOutLOV</p>
             *
             * @tags LOV
             * @name GetTaskBreakOutLov
             * @summary Fetch List Of Values for Task Break Out
             * @request GET:/listOfValues/hotels/{hotelId}/fromDate/{fromDate}/taskBreakOut
             */
            getTaskBreakOutLov: (fromDate, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/fromDate/${fromDate}/taskBreakOut`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRepRoomsStatLOV</p>
             *
             * @tags LOV
             * @name GetRepRoomsStatLov
             * @summary Fetch List Of Values for Rep Rooms Stat
             * @request GET:/listOfValues/hotels/{hotelId}/fromDate/{fromDate}/toDate/{toDate}/repRoomsStat
             */
            getRepRoomsStatLov: (toDate, fromDate, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/fromDate/${fromDate}/toDate/${toDate}/repRoomsStat`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getUpsellToRoomClassEditLOV</p>
             *
             * @tags LOV
             * @name GetUpsellToRoomClassEditLov
             * @summary Fetch List Of Values for Upsell To Room Class Edit
             * @request GET:/listOfValues/hotels/{hotelId}/fromRoomClass/{fromRoomClass}/upsellToRoomClassEdit
             */
            getUpsellToRoomClassEditLov: (fromRoomClass, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/fromRoomClass/${fromRoomClass}/upsellToRoomClassEdit`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getFromRoomNumberLOV</p>
             *
             * @tags LOV
             * @name GetFromRoomNumberLov
             * @summary Fetch List Of Values for From Room Number
             * @request GET:/listOfValues/hotels/{hotelId}/fromRoomNumber
             */
            getFromRoomNumberLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/fromRoomNumber`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getUpsellToRoomTypeEditLOV</p>
             *
             * @tags LOV
             * @name GetUpsellToRoomTypeEditLov
             * @summary Fetch List Of Values for Upsell To Room Type Edit
             * @request GET:/listOfValues/hotels/{hotelId}/fromRoomTypeLabel/{fromRoomTypeLabel}/upsellToRoomTypeEdit
             */
            getUpsellToRoomTypeEditLov: (fromRoomTypeLabel, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/fromRoomTypeLabel/${fromRoomTypeLabel}/upsellToRoomTypeEdit`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getGemMenuItemsLOV</p>
             *
             * @tags LOV
             * @name GetGemMenuItemsLov
             * @summary Fetch List Of Values for Gem Menu Items
             * @request GET:/listOfValues/hotels/{hotelId}/gemMenuItems
             */
            getGemMenuItemsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/gemMenuItems`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getGenericReportsLOV</p>
             *
             * @tags LOV
             * @name GetGenericReportsLov
             * @summary Fetch List Of Values for Generic Reports
             * @request GET:/listOfValues/hotels/{hotelId}/genericReports
             */
            getGenericReportsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/genericReports`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getGroupArrivalsLOV</p>
             *
             * @tags LOV
             * @name GetGroupArrivalsLov
             * @summary Fetch List Of Values for Group Arrivals
             * @request GET:/listOfValues/hotels/{hotelId}/groupArrivals
             */
            getGroupArrivalsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/groupArrivals`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getGroupsLOV</p>
             *
             * @tags LOV
             * @name GetGroupsLov
             * @summary Fetch List Of Values for Groups
             * @request GET:/listOfValues/hotels/{hotelId}/groups
             */
            getGroupsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/groups`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getGuestMessagesMultiHotelLOV</p>
             *
             * @tags LOV
             * @name GetGuestMessagesMultiHotelLov
             * @summary Fetch List Of Values for Guest Messages Multi Hotel
             * @request GET:/listOfValues/hotels/{hotelId}/guestMessagesMultiHotel
             */
            getGuestMessagesMultiHotelLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/guestMessagesMultiHotel`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getGuestMessagesQuickTextsLOV</p>
             *
             * @tags LOV
             * @name GetGuestMessagesQuickTextsLov
             * @summary Fetch List Of Values for Guest Messages Quick Texts
             * @request GET:/listOfValues/hotels/{hotelId}/guestMessagesQuickTexts
             */
            getGuestMessagesQuickTextsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/guestMessagesQuickTexts`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getHKAttendantsLOV</p>
             *
             * @tags LOV
             * @name GetHkAttendantsLov
             * @summary Fetch List Of Values for HKAttendants
             * @request GET:/listOfValues/hotels/{hotelId}/hkAttendants
             */
            getHkAttendantsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/hkAttendants`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getHKAttendantsMobileLOV</p>
             *
             * @tags LOV
             * @name GetHkAttendantsMobileLov
             * @summary Fetch List Of Values for HKAttendants Mobile
             * @request GET:/listOfValues/hotels/{hotelId}/hkAttendantsMobile
             */
            getHkAttendantsMobileLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/hkAttendantsMobile`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getHkFloorsLOV</p>
             *
             * @tags LOV
             * @name GetHkFloorsLov
             * @summary Fetch List Of Values for Hk Floors
             * @request GET:/listOfValues/hotels/{hotelId}/hkFloors
             */
            getHkFloorsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/hkFloors`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getHkRoomTypesLOV</p>
             *
             * @tags LOV
             * @name GetHkRoomTypesLov
             * @summary Fetch List Of Values for Hk Room Types
             * @request GET:/listOfValues/hotels/{hotelId}/hkRoomTypes
             */
            getHkRoomTypesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/hkRoomTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getHkRoomsLOV</p>
             *
             * @tags LOV
             * @name GetHkRoomsLov
             * @summary Fetch List Of Values for Hk Rooms
             * @request GET:/listOfValues/hotels/{hotelId}/hkRooms
             */
            getHkRoomsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/hkRooms`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getHKTaskBreakOutLOV</p>
             *
             * @tags LOV
             * @name GetHkTaskBreakOutLov
             * @summary Fetch List Of Values for HKTask Break Out
             * @request GET:/listOfValues/hotels/{hotelId}/hkTaskBreakOut
             */
            getHkTaskBreakOutLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/hkTaskBreakOut`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getHKTaskCodesLOV</p>
             *
             * @tags LOV
             * @name GetHkTaskCodesLov
             * @summary Fetch List Of Values for HKTask Codes
             * @request GET:/listOfValues/hotels/{hotelId}/hkTaskCodes
             */
            getHkTaskCodesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/hkTaskCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getHKTaskTemplatesLOV</p>
             *
             * @tags LOV
             * @name GetHkTaskTemplatesLov
             * @summary Fetch List Of Values for HKTask Templates
             * @request GET:/listOfValues/hotels/{hotelId}/hkTaskTemplates
             */
            getHkTaskTemplatesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/hkTaskTemplates`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getHotelEventTypesLOV</p>
             *
             * @tags LOV
             * @name GetHotelEventTypesLov
             * @summary Fetch List Of Values for Hotel Event Types
             * @request GET:/listOfValues/hotels/{hotelId}/hotelEventTypes
             */
            getHotelEventTypesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/hotelEventTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getHotelInterfaceImportRoomsLOV</p>
             *
             * @tags LOV
             * @name GetHotelInterfaceImportRoomsLov
             * @summary Fetch List Of Values for Hotel Interface Import Rooms
             * @request GET:/listOfValues/hotels/{hotelId}/hotelInterfaceImportRooms
             */
            getHotelInterfaceImportRoomsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/hotelInterfaceImportRooms`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getHotelRateTierLOV</p>
             *
             * @tags LOV
             * @name GetHotelRateTierLov
             * @summary Fetch List Of Values for Hotel Rate Tier
             * @request GET:/listOfValues/hotels/{hotelId}/hotelRateTier
             */
            getHotelRateTierLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/hotelRateTier`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getHouseKeepingRoomsLOV</p>
             *
             * @tags LOV
             * @name GetHouseKeepingRoomsLov
             * @summary Fetch List Of Values for House Keeping Rooms
             * @request GET:/listOfValues/hotels/{hotelId}/houseKeepingRooms
             */
            getHouseKeepingRoomsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/houseKeepingRooms`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getHouseKeepingSectionsLOV</p>
             *
             * @tags LOV
             * @name GetHouseKeepingSectionsLov
             * @summary Fetch List Of Values for House Keeping Sections
             * @request GET:/listOfValues/hotels/{hotelId}/houseKeepingSections
             */
            getHouseKeepingSectionsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/houseKeepingSections`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getHousekeepingCreditRulesLOV</p>
             *
             * @tags LOV
             * @name GetHousekeepingCreditRulesLov
             * @summary Fetch List Of Values for Housekeeping Credit Rules
             * @request GET:/listOfValues/hotels/{hotelId}/housekeepingCreditRules
             */
            getHousekeepingCreditRulesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/housekeepingCreditRules`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getIfcRightsViewLOV</p>
             *
             * @tags LOV
             * @name GetIfcRightsViewLov
             * @summary Fetch List Of Values for Ifc Rights View
             * @request GET:/listOfValues/hotels/{hotelId}/ifcId/{ifcId}/category/{category}/ifcRightsView
             */
            getIfcRightsViewLov: (category, ifcId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/ifcId/${ifcId}/category/${category}/ifcRightsView`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getImbalanceVerificationTypesLOV</p>
             *
             * @tags LOV
             * @name GetImbalanceVerificationTypesLov
             * @summary Fetch List Of Values for Imbalance Verification Types
             * @request GET:/listOfValues/hotels/{hotelId}/imbalanceVerificationTypes
             */
            getImbalanceVerificationTypesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/imbalanceVerificationTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getUpsellOccupancyLevelsLOV</p>
             *
             * @tags LOV
             * @name GetUpsellOccupancyLevelsLov
             * @summary Fetch List Of Values for Upsell Occupancy Levels
             * @request GET:/listOfValues/hotels/{hotelId}/includeBlank/{includeBlank}/upsellOccupancyLevels
             */
            getUpsellOccupancyLevelsLov: (includeBlank, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/includeBlank/${includeBlank}/upsellOccupancyLevels`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getSourceGroupsLOV</p>
             *
             * @tags LOV
             * @name GetSourceGroupsLov
             * @summary Fetch List Of Values for Source Groups
             * @request GET:/listOfValues/hotels/{hotelId}/includeInactive/{includeInactive}/sourceGroups
             */
            getSourceGroupsLov: (includeInactive, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/includeInactive/${includeInactive}/sourceGroups`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getInterfaceAutoBalanceLOV</p>
             *
             * @tags LOV
             * @name GetInterfaceAutoBalanceLov
             * @summary Fetch List Of Values for Interface Auto Balance
             * @request GET:/listOfValues/hotels/{hotelId}/interfaceAutoBalance
             */
            getInterfaceAutoBalanceLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/interfaceAutoBalance`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getInterfaceDataRequestMarketCodeLOV</p>
             *
             * @tags LOV
             * @name GetInterfaceDataRequestMarketCodeLov
             * @summary Fetch List Of Values for Interface Data Request Market Code
             * @request GET:/listOfValues/hotels/{hotelId}/interfaceDataRequestMarketCode
             */
            getInterfaceDataRequestMarketCodeLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/interfaceDataRequestMarketCode`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getInterfaceDataRequestMarketGroupLOV</p>
             *
             * @tags LOV
             * @name GetInterfaceDataRequestMarketGroupLov
             * @summary Fetch List Of Values for Interface Data Request Market Group
             * @request GET:/listOfValues/hotels/{hotelId}/interfaceDataRequestMarketGroup
             */
            getInterfaceDataRequestMarketGroupLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/interfaceDataRequestMarketGroup`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getInterfaceDataRequestRoomClassLOV</p>
             *
             * @tags LOV
             * @name GetInterfaceDataRequestRoomClassLov
             * @summary Fetch List Of Values for Interface Data Request Room Class
             * @request GET:/listOfValues/hotels/{hotelId}/interfaceDataRequestRoomClass
             */
            getInterfaceDataRequestRoomClassLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/interfaceDataRequestRoomClass`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getInterfaceDataRequestRoomTypesLOV</p>
             *
             * @tags LOV
             * @name GetInterfaceDataRequestRoomTypesLov
             * @summary Fetch List Of Values for Interface Data Request Room Types
             * @request GET:/listOfValues/hotels/{hotelId}/interfaceDataRequestRoomTypes
             */
            getInterfaceDataRequestRoomTypesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/interfaceDataRequestRoomTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getInterfaceDataRequestSourceCodeLOV</p>
             *
             * @tags LOV
             * @name GetInterfaceDataRequestSourceCodeLov
             * @summary Fetch List Of Values for Interface Data Request Source Code
             * @request GET:/listOfValues/hotels/{hotelId}/interfaceDataRequestSourceCode
             */
            getInterfaceDataRequestSourceCodeLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/interfaceDataRequestSourceCode`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getInterfaceDataRequestSourceGroupLOV</p>
             *
             * @tags LOV
             * @name GetInterfaceDataRequestSourceGroupLov
             * @summary Fetch List Of Values for Interface Data Request Source Group
             * @request GET:/listOfValues/hotels/{hotelId}/interfaceDataRequestSourceGroup
             */
            getInterfaceDataRequestSourceGroupLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/interfaceDataRequestSourceGroup`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getInterfacePseudoRoomLOV</p>
             *
             * @tags LOV
             * @name GetInterfacePseudoRoomLov
             * @summary Fetch List Of Values for Interface Pseudo Room
             * @request GET:/listOfValues/hotels/{hotelId}/interfacePseudoRoom
             */
            getInterfacePseudoRoomLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/interfacePseudoRoom`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getInterfaceResyncFunctionSpaceLOV</p>
             *
             * @tags LOV
             * @name GetInterfaceResyncFunctionSpaceLov
             * @summary Fetch List Of Values for Interface Resync Function Space
             * @request GET:/listOfValues/hotels/{hotelId}/interfaceResyncFunctionSpace
             */
            getInterfaceResyncFunctionSpaceLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/interfaceResyncFunctionSpace`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getInterfaceResyncOwnerContractLOV</p>
             *
             * @tags LOV
             * @name GetInterfaceResyncOwnerContractLov
             * @summary Fetch List Of Values for Interface Resync Owner Contract
             * @request GET:/listOfValues/hotels/{hotelId}/interfaceResyncOwnerContract
             */
            getInterfaceResyncOwnerContractLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/interfaceResyncOwnerContract`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getInterfaceResyncOwnerContractRoomLOV</p>
             *
             * @tags LOV
             * @name GetInterfaceResyncOwnerContractRoomLov
             * @summary Fetch List Of Values for Interface Resync Owner Contract Room
             * @request GET:/listOfValues/hotels/{hotelId}/interfaceResyncOwnerContractRoom
             */
            getInterfaceResyncOwnerContractRoomLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/interfaceResyncOwnerContractRoom`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getInterfaceResyncProductsLOV</p>
             *
             * @tags LOV
             * @name GetInterfaceResyncProductsLov
             * @summary Fetch List Of Values for Interface Resync Products
             * @request GET:/listOfValues/hotels/{hotelId}/interfaceResyncProducts
             */
            getInterfaceResyncProductsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/interfaceResyncProducts`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getInterfaceTrxCodesAllChargesLOV</p>
             *
             * @tags LOV
             * @name GetInterfaceTrxCodesAllChargesLov
             * @summary Fetch List Of Values for Interface Trx Codes All Charges
             * @request GET:/listOfValues/hotels/{hotelId}/interfaceTrxCodesAllCharges
             */
            getInterfaceTrxCodesAllChargesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/interfaceTrxCodesAllCharges`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getInterfaceTrxCodesMinibarLOV</p>
             *
             * @tags LOV
             * @name GetInterfaceTrxCodesMinibarLov
             * @summary Fetch List Of Values for Interface Trx Codes Minibar
             * @request GET:/listOfValues/hotels/{hotelId}/interfaceTrxCodesMinibar
             */
            getInterfaceTrxCodesMinibarLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/interfaceTrxCodesMinibar`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getAllowedHotelInterfaceRightsLOV</p>
             *
             * @tags LOV
             * @name GetAllowedHotelInterfaceRightsLov
             * @summary Fetch List Of Values for Allowed Hotel Interface Rights
             * @request GET:/listOfValues/hotels/{hotelId}/interfaceType/{interfaceType}/interfaceRowId/{interfaceRowId}/allowedHotelInterfaceRights
             */
            getAllowedHotelInterfaceRightsLov: (interfaceRowId, interfaceType, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/interfaceType/${interfaceType}/interfaceRowId/${interfaceRowId}/allowedHotelInterfaceRights`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getInvItemsClassesLOV</p>
             *
             * @tags LOV
             * @name GetInvItemsClassesLov
             * @summary Fetch List Of Values for Inv Items Classes
             * @request GET:/listOfValues/hotels/{hotelId}/invItemsClasses
             */
            getInvItemsClassesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/invItemsClasses`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getInvItemsPoolsLOV</p>
             *
             * @tags LOV
             * @name GetInvItemsPoolsLov
             * @summary Fetch List Of Values for Inv Items Pools
             * @request GET:/listOfValues/hotels/{hotelId}/invItemsPools
             */
            getInvItemsPoolsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/invItemsPools`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getInventoryItemTemplateItemsLOV</p>
             *
             * @tags LOV
             * @name GetInventoryItemTemplateItemsLov
             * @summary Fetch List Of Values for Inventory Item Template Items
             * @request GET:/listOfValues/hotels/{hotelId}/inventoryItemTemplateItems
             */
            getInventoryItemTemplateItemsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/inventoryItemTemplateItems`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getItemClassesLOV</p>
             *
             * @tags LOV
             * @name GetItemClassesLov
             * @summary Fetch List Of Values for Item Classes
             * @request GET:/listOfValues/hotels/{hotelId}/itemClasses
             */
            getItemClassesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/itemClasses`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getItemCodesLOV</p>
             *
             * @tags LOV
             * @name GetItemCodesLov
             * @summary Fetch List Of Values for Item Codes
             * @request GET:/listOfValues/hotels/{hotelId}/itemCodes
             */
            getItemCodesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/itemCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getInventoryItemAttributesLOV</p>
             *
             * @tags LOV
             * @name GetInventoryItemAttributesLov
             * @summary Fetch List Of Values for Inventory Item Attributes
             * @request GET:/listOfValues/hotels/{hotelId}/itemId/{itemId}/inventoryItemAttributes
             */
            getInventoryItemAttributesLov: (itemId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/itemId/${itemId}/inventoryItemAttributes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getInventoryItemRatesLOV</p>
             *
             * @tags LOV
             * @name GetInventoryItemRatesLov
             * @summary Fetch List Of Values for Inventory Item Rates
             * @request GET:/listOfValues/hotels/{hotelId}/itemId/{itemId}/inventoryItemRates
             */
            getInventoryItemRatesLov: (itemId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/itemId/${itemId}/inventoryItemRates`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getItemPriceCodeLOV</p>
             *
             * @tags LOV
             * @name GetItemPriceCodeLov
             * @summary Fetch List Of Values for Item Price Code
             * @request GET:/listOfValues/hotels/{hotelId}/itemId/{itemId}/itemPriceCode
             */
            getItemPriceCodeLov: (itemId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/itemId/${itemId}/itemPriceCode`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getItemVendorLOV</p>
             *
             * @tags LOV
             * @name GetItemVendorLov
             * @summary Fetch List Of Values for Item Vendor
             * @request GET:/listOfValues/hotels/{hotelId}/itemId/{itemId}/itemVendor
             */
            getItemVendorLov: (itemId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/itemId/${itemId}/itemVendor`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getJobTitlesLOV</p>
             *
             * @tags LOV
             * @name GetJobTitlesLov
             * @summary Fetch List Of Values for Job Titles
             * @request GET:/listOfValues/hotels/{hotelId}/jobTitles
             */
            getJobTitlesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/jobTitles`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getKeyOptionsLOV</p>
             *
             * @tags LOV
             * @name GetKeyOptionsLov
             * @summary Fetch List Of Values for Key Options
             * @request GET:/listOfValues/hotels/{hotelId}/keyOptions
             */
            getKeyOptionsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/keyOptions`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getLicensesLOV</p>
             *
             * @tags LOV
             * @name GetLicensesLov
             * @summary Fetch List Of Values for Licenses
             * @request GET:/listOfValues/hotels/{hotelId}/licenses
             */
            getLicensesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/licenses`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getLocatorQuickTextsLOV</p>
             *
             * @tags LOV
             * @name GetLocatorQuickTextsLov
             * @summary Fetch List Of Values for Locator Quick Texts
             * @request GET:/listOfValues/hotels/{hotelId}/locatorQuickTexts
             */
            getLocatorQuickTextsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/locatorQuickTexts`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getHotelInterfaceDataLineTypesLOV</p>
             *
             * @tags LOV
             * @name GetHotelInterfaceDataLineTypesLov
             * @summary Fetch List Of Values for Hotel Interface Data Line Types
             * @request GET:/listOfValues/hotels/{hotelId}/logo/{logo}/hotelInterfaceDataLineTypes
             */
            getHotelInterfaceDataLineTypesLov: (logo, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/logo/${logo}/hotelInterfaceDataLineTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getInterfaceRevenueCodeLOV</p>
             *
             * @tags LOV
             * @name GetInterfaceRevenueCodeLov
             * @summary Fetch List Of Values for Interface Revenue Code
             * @request GET:/listOfValues/hotels/{hotelId}/logo/{logo}/interfaceRevenueCode
             */
            getInterfaceRevenueCodeLov: (logo, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/logo/${logo}/interfaceRevenueCode`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getManagerReportDetailsLOV</p>
             *
             * @tags LOV
             * @name GetManagerReportDetailsLov
             * @summary Fetch List Of Values for Manager Report Details
             * @request GET:/listOfValues/hotels/{hotelId}/managerReportDetails
             */
            getManagerReportDetailsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/managerReportDetails`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getManagersReportsLOV</p>
             *
             * @tags LOV
             * @name GetManagersReportsLov
             * @summary Fetch List Of Values for Managers Reports
             * @request GET:/listOfValues/hotels/{hotelId}/managersReports
             */
            getManagersReportsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/managersReports`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getMarketGroupsLOV</p>
             *
             * @tags LOV
             * @name GetMarketGroupsLov
             * @summary Fetch List Of Values for Market Groups
             * @request GET:/listOfValues/hotels/{hotelId}/marketGroups
             */
            getMarketGroupsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/marketGroups`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getMarketSegmentLOV</p>
             *
             * @tags LOV
             * @name GetMarketSegmentLov
             * @summary Fetch List Of Values for Market Segment
             * @request GET:/listOfValues/hotels/{hotelId}/marketSegment
             */
            getMarketSegmentLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/marketSegment`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getMasterBlockLOV</p>
             *
             * @tags LOV
             * @name GetMasterBlockLov
             * @summary Fetch List Of Values for Master Block
             * @request GET:/listOfValues/hotels/{hotelId}/masterBlock
             */
            getMasterBlockLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/masterBlock`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getMembershipAwardFinTrxLOV</p>
             *
             * @tags LOV
             * @name GetMembershipAwardFinTrxLov
             * @summary Fetch List Of Values for Membership Award Fin Trx
             * @request GET:/listOfValues/hotels/{hotelId}/membershipAwardFinTrx
             */
            getMembershipAwardFinTrxLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/membershipAwardFinTrx`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getMembershipAwardProductsLOV</p>
             *
             * @tags LOV
             * @name GetMembershipAwardProductsLov
             * @summary Fetch List Of Values for Membership Award Products
             * @request GET:/listOfValues/hotels/{hotelId}/membershipAwardProducts
             */
            getMembershipAwardProductsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/membershipAwardProducts`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getMembershipAwardRateCodesLOV</p>
             *
             * @tags LOV
             * @name GetMembershipAwardRateCodesLov
             * @summary Fetch List Of Values for Membership Award Rate Codes
             * @request GET:/listOfValues/hotels/{hotelId}/membershipAwardRateCodes
             */
            getMembershipAwardRateCodesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/membershipAwardRateCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getMembershipAwardUpgradeRoomLOV</p>
             *
             * @tags LOV
             * @name GetMembershipAwardUpgradeRoomLov
             * @summary Fetch List Of Values for Membership Award Upgrade Room
             * @request GET:/listOfValues/hotels/{hotelId}/membershipAwardUpgradeRoom
             */
            getMembershipAwardUpgradeRoomLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/membershipAwardUpgradeRoom`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getMembershipAwardUpgradeRoomGroupLOV</p>
             *
             * @tags LOV
             * @name GetMembershipAwardUpgradeRoomGroupLov
             * @summary Fetch List Of Values for Membership Award Upgrade Room Group
             * @request GET:/listOfValues/hotels/{hotelId}/membershipAwardUpgradeRoomGroup
             */
            getMembershipAwardUpgradeRoomGroupLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/membershipAwardUpgradeRoomGroup`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getMenuClassesLOV</p>
             *
             * @tags LOV
             * @name GetMenuClassesLov
             * @summary Fetch List Of Values for Menu Classes
             * @request GET:/listOfValues/hotels/{hotelId}/menuClasses
             */
            getMenuClassesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/menuClasses`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getMenuItemsLOV</p>
             *
             * @tags LOV
             * @name GetMenuItemsLov
             * @summary Fetch List Of Values for Menu Items
             * @request GET:/listOfValues/hotels/{hotelId}/menuItems
             */
            getMenuItemsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/menuItems`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getBusinessEventActionTypeExtDBLOV</p>
             *
             * @tags LOV
             * @name GetBusinessEventActionTypeExtDblov
             * @summary Fetch List Of Values for Business Event Action Type Ext DB
             * @request GET:/listOfValues/hotels/{hotelId}/module/{module}/extSystem/{extSystem}/databaseId/{databaseId}/businessEventActionTypeExtDB
             */
            getBusinessEventActionTypeExtDblov: (databaseId, extSystem, module, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/module/${module}/extSystem/${extSystem}/databaseId/${databaseId}/businessEventActionTypeExtDB`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getFormatLOV</p>
             *
             * @tags LOV
             * @name GetFormatLov
             * @summary Fetch List Of Values for Format
             * @request GET:/listOfValues/hotels/{hotelId}/moduleName/{moduleName}/method/{method}/format
             */
            getFormatLov: (method, moduleName, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/moduleName/${moduleName}/method/${method}/format`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getTestUpsellRulesRateCodeLOV</p>
             *
             * @tags LOV
             * @name GetTestUpsellRulesRateCodeLov
             * @summary Fetch List Of Values for Test Upsell Rules Rate Code
             * @request GET:/listOfValues/hotels/{hotelId}/nights/{nights}/arrivalDate/{arrivalDate}/roomCategory/{roomCategory}/testUpsellRulesRateCode
             */
            getTestUpsellRulesRateCodeLov: (roomCategory, arrivalDate, nights, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/nights/${nights}/arrivalDate/${arrivalDate}/roomCategory/${roomCategory}/testUpsellRulesRateCode`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getOSAActivityTypesLOV</p>
             *
             * @tags LOV
             * @name GetOsaActivityTypesLov
             * @summary Fetch List Of Values for OSAActivity Types
             * @request GET:/listOfValues/hotels/{hotelId}/osaActivityTypes
             */
            getOsaActivityTypesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/osaActivityTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getOXIInterfaceReferencesLOV</p>
             *
             * @tags LOV
             * @name GetOxiInterfaceReferencesLov
             * @summary Fetch List Of Values for OXIInterface References
             * @request GET:/listOfValues/hotels/{hotelId}/oxiInterfaceReferences
             */
            getOxiInterfaceReferencesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/oxiInterfaceReferences`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getOXIInterfaceResortsLOV</p>
             *
             * @tags LOV
             * @name GetOxiInterfaceResortsLov
             * @summary Fetch List Of Values for OXIInterface Resorts
             * @request GET:/listOfValues/hotels/{hotelId}/oxiInterfaceResorts
             */
            getOxiInterfaceResortsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/oxiInterfaceResorts`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getOXIInterfacesLOV</p>
             *
             * @tags LOV
             * @name GetOxiInterfacesLov
             * @summary Fetch List Of Values for OXIInterfaces
             * @request GET:/listOfValues/hotels/{hotelId}/oxiInterfaces
             */
            getOxiInterfacesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/oxiInterfaces`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getPackForecastGroupCodeLOV</p>
             *
             * @tags LOV
             * @name GetPackForecastGroupCodeLov
             * @summary Fetch List Of Values for Pack Forecast Group Code
             * @request GET:/listOfValues/hotels/{hotelId}/packForecastGroupCode
             */
            getPackForecastGroupCodeLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/packForecastGroupCode`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getPaymentMethodsLOV</p>
             *
             * @tags LOV
             * @name GetPaymentMethodsLov
             * @summary Fetch List Of Values for Payment Methods
             * @request GET:/listOfValues/hotels/{hotelId}/paymentMethods
             */
            getPaymentMethodsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/paymentMethods`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getPaymentTypesLOV</p>
             *
             * @tags LOV
             * @name GetPaymentTypesLov
             * @summary Fetch List Of Values for Payment Types
             * @request GET:/listOfValues/hotels/{hotelId}/paymentTypes
             */
            getPaymentTypesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/paymentTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getPeriodSetupLOV</p>
             *
             * @tags LOV
             * @name GetPeriodSetupLov
             * @summary Fetch List Of Values for Period Setup
             * @request GET:/listOfValues/hotels/{hotelId}/periodSetup
             */
            getPeriodSetupLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/periodSetup`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getPeriodsSetupLOV</p>
             *
             * @tags LOV
             * @name GetPeriodsSetupLov
             * @summary Fetch List Of Values for Periods Setup
             * @request GET:/listOfValues/hotels/{hotelId}/periodsSetup
             */
            getPeriodsSetupLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/periodsSetup`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getDepositCancelRulesLOV</p>
             *
             * @tags LOV
             * @name GetDepositCancelRulesLov
             * @summary Fetch List Of Values for Deposit Cancel Rules
             * @request GET:/listOfValues/hotels/{hotelId}/policyType/{policyType}/depositCancelRules
             */
            getDepositCancelRulesLov: (policyType, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/policyType/${policyType}/depositCancelRules`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getPostingRoomLOV</p>
             *
             * @tags LOV
             * @name GetPostingRoomLov
             * @summary Fetch List Of Values for Posting Room
             * @request GET:/listOfValues/hotels/{hotelId}/postingRoom
             */
            getPostingRoomLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/postingRoom`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getPostingTransactionCodesLOV</p>
             *
             * @tags LOV
             * @name GetPostingTransactionCodesLov
             * @summary Fetch List Of Values for Posting Transaction Codes
             * @request GET:/listOfValues/hotels/{hotelId}/postingTransactionCodes
             */
            getPostingTransactionCodesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/postingTransactionCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getPrepaidCardInterfacesLOV</p>
             *
             * @tags LOV
             * @name GetPrepaidCardInterfacesLov
             * @summary Fetch List Of Values for Prepaid Card Interfaces
             * @request GET:/listOfValues/hotels/{hotelId}/prepaidCardInterfaces
             */
            getPrepaidCardInterfacesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/prepaidCardInterfaces`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getPrioritiesLOV</p>
             *
             * @tags LOV
             * @name GetPrioritiesLov
             * @summary Fetch List Of Values for Priorities
             * @request GET:/listOfValues/hotels/{hotelId}/priorities
             */
            getPrioritiesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/priorities`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getProfileIdentificationsLOV</p>
             *
             * @tags LOV
             * @name GetProfileIdentificationsLov
             * @summary Fetch List Of Values for Profile Identifications
             * @request GET:/listOfValues/hotels/{hotelId}/profiles/{profileId}/profileIdentifications
             */
            getProfileIdentificationsLov: (profileId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/profiles/${profileId}/profileIdentifications`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getPromoRatesLOV</p>
             *
             * @tags LOV
             * @name GetPromoRatesLov
             * @summary Fetch List Of Values for Promo Rates
             * @request GET:/listOfValues/hotels/{hotelId}/promoCode/{promoCode}/promoRates
             */
            getPromoRatesLov: (promoCode, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/promoCode/${promoCode}/promoRates`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getPromoGroupsLOV</p>
             *
             * @tags LOV
             * @name GetPromoGroupsLov
             * @summary Fetch List Of Values for Promo Groups
             * @request GET:/listOfValues/hotels/{hotelId}/promoGroups
             */
            getPromoGroupsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/promoGroups`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getPropertyAmenitiesLOV</p>
             *
             * @tags LOV
             * @name GetPropertyAmenitiesLov
             * @summary Fetch List Of Values for Property Amenities
             * @request GET:/listOfValues/hotels/{hotelId}/propertyAmenities
             */
            getPropertyAmenitiesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/propertyAmenities`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRateCategoriesLOV</p>
             *
             * @tags LOV
             * @name GetRateCategoriesLov
             * @summary Fetch List Of Values for Rate Categories
             * @request GET:/listOfValues/hotels/{hotelId}/rateCategories
             */
            getRateCategoriesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/rateCategories`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRatePlansForYieldAsConfigLOV</p>
             *
             * @tags LOV
             * @name GetRatePlansForYieldAsConfigLov
             * @summary Fetch List Of Values for Rate Plans For Yield As Config
             * @request GET:/listOfValues/hotels/{hotelId}/rateCode/{rateCode}/ratePlansForYieldAsConfig
             */
            getRatePlansForYieldAsConfigLov: (rateCode, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/rateCode/${rateCode}/ratePlansForYieldAsConfig`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRateCodeGlobalDescEditLOV</p>
             *
             * @tags LOV
             * @name GetRateCodeGlobalDescEditLov
             * @summary Fetch List Of Values for Rate Code Global Desc Edit
             * @request GET:/listOfValues/hotels/{hotelId}/rateCodeGlobalDescEdit
             */
            getRateCodeGlobalDescEditLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/rateCodeGlobalDescEdit`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRateCodesByTypeLOV</p>
             *
             * @tags LOV
             * @name GetRateCodesByTypeLov
             * @summary Fetch List Of Values for Rate Codes By Type
             * @request GET:/listOfValues/hotels/{hotelId}/rateCodeType/{rateCodeType}/rateCodesByType
             */
            getRateCodesByTypeLov: (rateCodeType, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/rateCodeType/${rateCodeType}/rateCodesByType`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRatePlanForMassRateLOV</p>
             *
             * @tags LOV
             * @name GetRatePlanForMassRateLov
             * @summary Fetch List Of Values for Rate Plan For Mass Rate
             * @request GET:/listOfValues/hotels/{hotelId}/rateCodeType/{rateCodeType}/ratePlanForMassRate
             */
            getRatePlanForMassRateLov: (rateCodeType, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/rateCodeType/${rateCodeType}/ratePlanForMassRate`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRateCodesValidLOV</p>
             *
             * @tags LOV
             * @name GetRateCodesValidLov
             * @summary Fetch List Of Values for Rate Codes Valid
             * @request GET:/listOfValues/hotels/{hotelId}/rateCodesValid
             */
            getRateCodesValidLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/rateCodesValid`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRateCommissionCodesLOV</p>
             *
             * @tags LOV
             * @name GetRateCommissionCodesLov
             * @summary Fetch List Of Values for Rate Commission Codes
             * @request GET:/listOfValues/hotels/{hotelId}/rateCommissionCodes
             */
            getRateCommissionCodesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/rateCommissionCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRateConfigCurrenciesLOV</p>
             *
             * @tags LOV
             * @name GetRateConfigCurrenciesLov
             * @summary Fetch List Of Values for Rate Config Currencies
             * @request GET:/listOfValues/hotels/{hotelId}/rateConfigCurrencies
             */
            getRateConfigCurrenciesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/rateConfigCurrencies`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRateGroupsLOV</p>
             *
             * @tags LOV
             * @name GetRateGroupsLov
             * @summary Fetch List Of Values for Rate Groups
             * @request GET:/listOfValues/hotels/{hotelId}/rateGroups
             */
            getRateGroupsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/rateGroups`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRoomTypesForMassRateLOV</p>
             *
             * @tags LOV
             * @name GetRoomTypesForMassRateLov
             * @summary Fetch List Of Values for Room Types For Mass Rate
             * @request GET:/listOfValues/hotels/{hotelId}/ratePlanCodes/{ratePlanCodes}/roomTypesForMassRate
             */
            getRoomTypesForMassRateLov: (ratePlanCodes, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/ratePlanCodes/${ratePlanCodes}/roomTypesForMassRate`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRatePlansLOV</p>
             *
             * @tags LOV
             * @name GetRatePlansLov
             * @summary Fetch List Of Values for Rate Plans
             * @request GET:/listOfValues/hotels/{hotelId}/ratePlans
             */
            getRatePlansLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/ratePlans`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getApplicationModulesLOV</p>
             *
             * @tags LOV
             * @name GetApplicationModulesLov
             * @summary Fetch List Of Values for Application Modules
             * @request GET:/listOfValues/hotels/{hotelId}/relModuleName/{relModuleName}/applicationModules
             */
            getApplicationModulesLov: (relModuleName, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/relModuleName/${relModuleName}/applicationModules`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRepBlockCodesParamOffLOV</p>
             *
             * @tags LOV
             * @name GetRepBlockCodesParamOffLov
             * @summary Fetch List Of Values for Rep Block Codes Param Off
             * @request GET:/listOfValues/hotels/{hotelId}/repBlockCodesParamOff
             */
            getRepBlockCodesParamOffLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/repBlockCodesParamOff`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRepBlockCodesParamOnLOV</p>
             *
             * @tags LOV
             * @name GetRepBlockCodesParamOnLov
             * @summary Fetch List Of Values for Rep Block Codes Param On
             * @request GET:/listOfValues/hotels/{hotelId}/repBlockCodesParamOn
             */
            getRepBlockCodesParamOnLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/repBlockCodesParamOn`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRepCashiersLOV</p>
             *
             * @tags LOV
             * @name GetRepCashiersLov
             * @summary Fetch List Of Values for Rep Cashiers
             * @request GET:/listOfValues/hotels/{hotelId}/repCashiers
             */
            getRepCashiersLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/repCashiers`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRepContactListLOV</p>
             *
             * @tags LOV
             * @name GetRepContactListLov
             * @summary Fetch List Of Values for Rep Contact List
             * @request GET:/listOfValues/hotels/{hotelId}/repContactList
             */
            getRepContactListLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/repContactList`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRepCurrenciesLOV</p>
             *
             * @tags LOV
             * @name GetRepCurrenciesLov
             * @summary Fetch List Of Values for Rep Currencies
             * @request GET:/listOfValues/hotels/{hotelId}/repCurrencies
             */
            getRepCurrenciesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/repCurrencies`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRepDepartmentsLOV</p>
             *
             * @tags LOV
             * @name GetRepDepartmentsLov
             * @summary Fetch List Of Values for Rep Departments
             * @request GET:/listOfValues/hotels/{hotelId}/repDepartments
             */
            getRepDepartmentsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/repDepartments`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRepFiscalYearsLOV</p>
             *
             * @tags LOV
             * @name GetRepFiscalYearsLov
             * @summary Fetch List Of Values for Rep Fiscal Years
             * @request GET:/listOfValues/hotels/{hotelId}/repFiscalYears
             */
            getRepFiscalYearsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/repFiscalYears`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRepForeignCurrenciesLOV</p>
             *
             * @tags LOV
             * @name GetRepForeignCurrenciesLov
             * @summary Fetch List Of Values for Rep Foreign Currencies
             * @request GET:/listOfValues/hotels/{hotelId}/repForeignCurrencies
             */
            getRepForeignCurrenciesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/repForeignCurrencies`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRepGroupsLOV</p>
             *
             * @tags LOV
             * @name GetRepGroupsLov
             * @summary Fetch List Of Values for Rep Groups
             * @request GET:/listOfValues/hotels/{hotelId}/repGroups
             */
            getRepGroupsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/repGroups`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRepInventoryItemPoolsLOV</p>
             *
             * @tags LOV
             * @name GetRepInventoryItemPoolsLov
             * @summary Fetch List Of Values for Rep Inventory Item Pools
             * @request GET:/listOfValues/hotels/{hotelId}/repInventoryItemPools
             */
            getRepInventoryItemPoolsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/repInventoryItemPools`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRepMarketCodesLOV</p>
             *
             * @tags LOV
             * @name GetRepMarketCodesLov
             * @summary Fetch List Of Values for Rep Market Codes
             * @request GET:/listOfValues/hotels/{hotelId}/repMarketCodes
             */
            getRepMarketCodesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/repMarketCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRepRoomStatusesLOV</p>
             *
             * @tags LOV
             * @name GetRepRoomStatusesLov
             * @summary Fetch List Of Values for Rep Room Statuses
             * @request GET:/listOfValues/hotels/{hotelId}/repRoomStatuses
             */
            getRepRoomStatusesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/repRoomStatuses`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRepRoomTypesLOV</p>
             *
             * @tags LOV
             * @name GetRepRoomTypesLov
             * @summary Fetch List Of Values for Rep Room Types
             * @request GET:/listOfValues/hotels/{hotelId}/repRoomTypes
             */
            getRepRoomTypesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/repRoomTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRepRoomsLOV</p>
             *
             * @tags LOV
             * @name GetRepRoomsLov
             * @summary Fetch List Of Values for Rep Rooms
             * @request GET:/listOfValues/hotels/{hotelId}/repRooms
             */
            getRepRoomsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/repRooms`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRepServiceRequestCodesLOV</p>
             *
             * @tags LOV
             * @name GetRepServiceRequestCodesLov
             * @summary Fetch List Of Values for Rep Service Request Codes
             * @request GET:/listOfValues/hotels/{hotelId}/repServiceRequestCodes
             */
            getRepServiceRequestCodesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/repServiceRequestCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRepTransactionCodesLOV</p>
             *
             * @tags LOV
             * @name GetRepTransactionCodesLov
             * @summary Fetch List Of Values for Rep Transaction Codes
             * @request GET:/listOfValues/hotels/{hotelId}/repTransactionCodes
             */
            getRepTransactionCodesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/repTransactionCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRepTraveAgtCalendarYearLOV</p>
             *
             * @tags LOV
             * @name GetRepTraveAgtCalendarYearLov
             * @summary Fetch List Of Values for Rep Trave Agt Calendar Year
             * @request GET:/listOfValues/hotels/{hotelId}/repTraveAgtCalendarYear
             */
            getRepTraveAgtCalendarYearLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/repTraveAgtCalendarYear`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getReservationBasedBlocksLOV</p>
             *
             * @tags LOV
             * @name GetReservationBasedBlocksLov
             * @summary Fetch List Of Values for Reservation Based Blocks
             * @request GET:/listOfValues/hotels/{hotelId}/reservationBasedBlocks
             */
            getReservationBasedBlocksLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/reservationBasedBlocks`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getReservationBasedProfilesLOV</p>
             *
             * @tags LOV
             * @name GetReservationBasedProfilesLov
             * @summary Fetch List Of Values for Reservation Based Profiles
             * @request GET:/listOfValues/hotels/{hotelId}/reservationBasedProfiles
             */
            getReservationBasedProfilesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/reservationBasedProfiles`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getReservationPreferencesLOV</p>
             *
             * @tags LOV
             * @name GetReservationPreferencesLov
             * @summary Fetch List Of Values for Reservation Preferences
             * @request GET:/listOfValues/hotels/{hotelId}/reservationPreferences
             */
            getReservationPreferencesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/reservationPreferences`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getReservationStatusesHotelLOV</p>
             *
             * @tags LOV
             * @name GetReservationStatusesHotelLov
             * @summary Fetch List Of Values for Reservation Statuses Hotel
             * @request GET:/listOfValues/hotels/{hotelId}/reservationStatusesHotel
             */
            getReservationStatusesHotelLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/reservationStatusesHotel`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getResortAirportsLOV</p>
             *
             * @tags LOV
             * @name GetResortAirportsLov
             * @summary Fetch List Of Values for Resort Airports
             * @request GET:/listOfValues/hotels/{hotelId}/resortAirports
             */
            getResortAirportsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/resortAirports`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getResortCROsLOV</p>
             *
             * @tags LOV
             * @name GetResortCrOsLov
             * @summary Fetch List Of Values for Resort CROs
             * @request GET:/listOfValues/hotels/{hotelId}/resortCROs
             */
            getResortCrOsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/resortCROs`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getResortGuaranteeCodesLOV</p>
             *
             * @tags LOV
             * @name GetResortGuaranteeCodesLov
             * @summary Fetch List Of Values for Resort Guarantee Codes
             * @request GET:/listOfValues/hotels/{hotelId}/resortGuaranteeCodes
             */
            getResortGuaranteeCodesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/resortGuaranteeCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getResortMarketCodesLOV</p>
             *
             * @tags LOV
             * @name GetResortMarketCodesLov
             * @summary Fetch List Of Values for Resort Market Codes
             * @request GET:/listOfValues/hotels/{hotelId}/resortMarketCodes
             */
            getResortMarketCodesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/resortMarketCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getStagedProfilePreferencesLOV</p>
             *
             * @tags LOV
             * @name GetStagedProfilePreferencesLov
             * @summary Fetch List Of Values for Staged Profile Preferences
             * @request GET:/listOfValues/hotels/{hotelId}/resortNameId/{resortNameId}/stagedProfilePreferences
             */
            getStagedProfilePreferencesLov: (resortNameId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/resortNameId/${resortNameId}/stagedProfilePreferences`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getResortRateClassesLOV</p>
             *
             * @tags LOV
             * @name GetResortRateClassesLov
             * @summary Fetch List Of Values for Resort Rate Classes
             * @request GET:/listOfValues/hotels/{hotelId}/resortRateClasses
             */
            getResortRateClassesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/resortRateClasses`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getResortRestrictionStatusesLOV</p>
             *
             * @tags LOV
             * @name GetResortRestrictionStatusesLov
             * @summary Fetch List Of Values for Resort Restriction Statuses
             * @request GET:/listOfValues/hotels/{hotelId}/resortRestrictionStatuses
             */
            getResortRestrictionStatusesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/resortRestrictionStatuses`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getResortRoomNumbersLOV</p>
             *
             * @tags LOV
             * @name GetResortRoomNumbersLov
             * @summary Fetch List Of Values for Resort Room Numbers
             * @request GET:/listOfValues/hotels/{hotelId}/resortRoomNumbers
             */
            getResortRoomNumbersLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/resortRoomNumbers`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getResortRoomTypesLOV</p>
             *
             * @tags LOV
             * @name GetResortRoomTypesLov
             * @summary Fetch List Of Values for Resort Room Types
             * @request GET:/listOfValues/hotels/{hotelId}/resortRoomTypes
             */
            getResortRoomTypesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/resortRoomTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getResortTransportationLabelsLOV</p>
             *
             * @tags LOV
             * @name GetResortTransportationLabelsLov
             * @summary Fetch List Of Values for Resort Transportation Labels
             * @request GET:/listOfValues/hotels/{hotelId}/resortTransportationLabels
             */
            getResortTransportationLabelsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/resortTransportationLabels`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getResourceItemClassesLOV</p>
             *
             * @tags LOV
             * @name GetResourceItemClassesLov
             * @summary Fetch List Of Values for Resource Item Classes
             * @request GET:/listOfValues/hotels/{hotelId}/resourceItemClasses
             */
            getResourceItemClassesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/resourceItemClasses`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getResvAutoAttachRulesCodesLOV</p>
             *
             * @tags LOV
             * @name GetResvAutoAttachRulesCodesLov
             * @summary Fetch List Of Values for Resv Auto Attach Rules Codes
             * @request GET:/listOfValues/hotels/{hotelId}/resvAutoAttachRulesCodes
             */
            getResvAutoAttachRulesCodesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/resvAutoAttachRulesCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getResvAutoAttachRulesRuleTypeLOV</p>
             *
             * @tags LOV
             * @name GetResvAutoAttachRulesRuleTypeLov
             * @summary Fetch List Of Values for Resv Auto Attach Rules Rule Type
             * @request GET:/listOfValues/hotels/{hotelId}/resvAutoAttachRulesRuleType
             */
            getResvAutoAttachRulesRuleTypeLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/resvAutoAttachRulesRuleType`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getResvBasedProfilesLOV</p>
             *
             * @tags LOV
             * @name GetResvBasedProfilesLov
             * @summary Fetch List Of Values for Resv Based Profiles
             * @request GET:/listOfValues/hotels/{hotelId}/resvBasedProfiles
             */
            getResvBasedProfilesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/resvBasedProfiles`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getReservationTicketsLOV</p>
             *
             * @tags LOV
             * @name GetReservationTicketsLov
             * @summary Fetch List Of Values for Reservation Tickets
             * @request GET:/listOfValues/hotels/{hotelId}/resvNameId/{resvNameId}/reservationTickets
             */
            getReservationTicketsLov: (resvNameId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/resvNameId/${resvNameId}/reservationTickets`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getResvTransactionDiversionCodesLOV</p>
             *
             * @tags LOV
             * @name GetResvTransactionDiversionCodesLov
             * @summary Fetch List Of Values for Resv Transaction Diversion Codes
             * @request GET:/listOfValues/hotels/{hotelId}/resvNameId/{resvNameId}/resvTransactionDiversionCodes
             */
            getResvTransactionDiversionCodesLov: (resvNameId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/resvNameId/${resvNameId}/resvTransactionDiversionCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRevenueTypeMappingSpaceLOV</p>
             *
             * @tags LOV
             * @name GetRevenueTypeMappingSpaceLov
             * @summary Fetch List Of Values for Revenue Type Mapping Space
             * @request GET:/listOfValues/hotels/{hotelId}/revenueTypeMappingSpace
             */
            getRevenueTypeMappingSpaceLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/revenueTypeMappingSpace`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRevenueTypeMappingTrxCodesLOV</p>
             *
             * @tags LOV
             * @name GetRevenueTypeMappingTrxCodesLov
             * @summary Fetch List Of Values for Revenue Type Mapping Trx Codes
             * @request GET:/listOfValues/hotels/{hotelId}/revenueTypeMappingTrxCodes
             */
            getRevenueTypeMappingTrxCodesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/revenueTypeMappingTrxCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getUserRolesLOV</p>
             *
             * @tags LOV
             * @name GetUserRolesLov
             * @summary Fetch List Of Values for User Roles
             * @request GET:/listOfValues/hotels/{hotelId}/roleWithDepartment/{roleWithDepartment}/userRoles
             */
            getUserRolesLov: (roleWithDepartment, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/roleWithDepartment/${roleWithDepartment}/userRoles`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getAssignRoomsLOV</p>
             *
             * @tags LOV
             * @name GetAssignRoomsLov
             * @summary Fetch List Of Values for Assign Rooms
             * @request GET:/listOfValues/hotels/{hotelId}/room/{room}/assignRooms
             */
            getAssignRoomsLov: (room, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/room/${room}/assignRooms`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getEventSetupStylesLOV</p>
             *
             * @tags LOV
             * @name GetEventSetupStylesLov
             * @summary Fetch List Of Values for Event Setup Styles
             * @request GET:/listOfValues/hotels/{hotelId}/room/{room}/eventSetupStyles
             */
            getEventSetupStylesLov: (room, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/room/${room}/eventSetupStyles`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRoomRatesLOV</p>
             *
             * @tags LOV
             * @name GetRoomRatesLov
             * @summary Fetch List Of Values for Room Rates
             * @request GET:/listOfValues/hotels/{hotelId}/room/{room}/roomRates
             */
            getRoomRatesLov: (room, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/room/${room}/roomRates`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRoomClassCategoriesLOV</p>
             *
             * @tags LOV
             * @name GetRoomClassCategoriesLov
             * @summary Fetch List Of Values for Room Class Categories
             * @request GET:/listOfValues/hotels/{hotelId}/roomClassCategories
             */
            getRoomClassCategoriesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/roomClassCategories`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRoomClassesLOV</p>
             *
             * @tags LOV
             * @name GetRoomClassesLov
             * @summary Fetch List Of Values for Room Classes
             * @request GET:/listOfValues/hotels/{hotelId}/roomClasses
             */
            getRoomClassesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/roomClasses`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRoomFeaturesLOV</p>
             *
             * @tags LOV
             * @name GetRoomFeaturesLov
             * @summary Fetch List Of Values for Room Features
             * @request GET:/listOfValues/hotels/{hotelId}/roomFeatures
             */
            getRoomFeaturesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/roomFeatures`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRoomHoldConditionsLOV</p>
             *
             * @tags LOV
             * @name GetRoomHoldConditionsLov
             * @summary Fetch List Of Values for Room Hold Conditions
             * @request GET:/listOfValues/hotels/{hotelId}/roomHoldConditions
             */
            getRoomHoldConditionsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/roomHoldConditions`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRoomMaintenanceLOV</p>
             *
             * @tags LOV
             * @name GetRoomMaintenanceLov
             * @summary Fetch List Of Values for Room Maintenance
             * @request GET:/listOfValues/hotels/{hotelId}/roomMaintenance
             */
            getRoomMaintenanceLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/roomMaintenance`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getConnectingSuitesLOV</p>
             *
             * @tags LOV
             * @name GetConnectingSuitesLov
             * @summary Fetch List Of Values for Connecting Suites
             * @request GET:/listOfValues/hotels/{hotelId}/roomNumber/{roomNumber}/connectingSuites
             */
            getConnectingSuitesLov: (roomNumber, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/roomNumber/${roomNumber}/connectingSuites`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRoomPoolRoomTypesLOV</p>
             *
             * @tags LOV
             * @name GetRoomPoolRoomTypesLov
             * @summary Fetch List Of Values for Room Pool Room Types
             * @request GET:/listOfValues/hotels/{hotelId}/roomPool/{roomPool}/roomPoolRoomTypes
             */
            getRoomPoolRoomTypesLov: (roomPool, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/roomPool/${roomPool}/roomPoolRoomTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRoomPoolsLOV</p>
             *
             * @tags LOV
             * @name GetRoomPoolsLov
             * @summary Fetch List Of Values for Room Pools
             * @request GET:/listOfValues/hotels/{hotelId}/roomPools
             */
            getRoomPoolsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/roomPools`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRoomRevenueTrxCodesLOV</p>
             *
             * @tags LOV
             * @name GetRoomRevenueTrxCodesLov
             * @summary Fetch List Of Values for Room Revenue Trx Codes
             * @request GET:/listOfValues/hotels/{hotelId}/roomRevenueTrxCodes
             */
            getRoomRevenueTrxCodesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/roomRevenueTrxCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRoomRotationGroupsLOV</p>
             *
             * @tags LOV
             * @name GetRoomRotationGroupsLov
             * @summary Fetch List Of Values for Room Rotation Groups
             * @request GET:/listOfValues/hotels/{hotelId}/roomRotationGroups
             */
            getRoomRotationGroupsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/roomRotationGroups`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRoomRotationUnitGradesLOV</p>
             *
             * @tags LOV
             * @name GetRoomRotationUnitGradesLov
             * @summary Fetch List Of Values for Room Rotation Unit Grades
             * @request GET:/listOfValues/hotels/{hotelId}/roomRotationUnitGrades
             */
            getRoomRotationUnitGradesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/roomRotationUnitGrades`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRoomSpecialsLOV</p>
             *
             * @tags LOV
             * @name GetRoomSpecialsLov
             * @summary Fetch List Of Values for Room Specials
             * @request GET:/listOfValues/hotels/{hotelId}/roomSpecials
             */
            getRoomSpecialsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/roomSpecials`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRoomingListHKRoomsLOV</p>
             *
             * @tags LOV
             * @name GetRoomingListHkRoomsLov
             * @summary Fetch List Of Values for Rooming List HKRooms
             * @request GET:/listOfValues/hotels/{hotelId}/roomType/{roomType}/arrival/{arrival}/departure/{departure}/roomingListHKRooms
             */
            getRoomingListHkRoomsLov: (departure, arrival, roomType, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/roomType/${roomType}/arrival/${arrival}/departure/${departure}/roomingListHKRooms`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getAvailableRoomTypeComponentsLOV</p>
             *
             * @tags LOV
             * @name GetAvailableRoomTypeComponentsLov
             * @summary Fetch List Of Values for Available Room Type Components
             * @request GET:/listOfValues/hotels/{hotelId}/roomType/{roomType}/availableRoomTypeComponents
             */
            getAvailableRoomTypeComponentsLov: (roomType, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/roomType/${roomType}/availableRoomTypeComponents`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getAvailableRoomComponentsLOV</p>
             *
             * @tags LOV
             * @name GetAvailableRoomComponentsLov
             * @summary Fetch List Of Values for Available Room Components
             * @request GET:/listOfValues/hotels/{hotelId}/roomType/{roomType}/roomNumber/{roomNumber}/availableRoomComponents
             */
            getAvailableRoomComponentsLov: (roomNumber, roomType, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/roomType/${roomType}/roomNumber/${roomNumber}/availableRoomComponents`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getFacilityTasksRoomTypeLOV</p>
             *
             * @tags LOV
             * @name GetFacilityTasksRoomTypeLov
             * @summary Fetch List Of Values for Facility Tasks Room Type
             * @request GET:/listOfValues/hotels/{hotelId}/roomTypeLabel/{roomTypeLabel}/facilityTasksRoomType
             */
            getFacilityTasksRoomTypeLov: (roomTypeLabel, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/roomTypeLabel/${roomTypeLabel}/facilityTasksRoomType`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRoomTypePoolLOV</p>
             *
             * @tags LOV
             * @name GetRoomTypePoolLov
             * @summary Fetch List Of Values for Room Type Pool
             * @request GET:/listOfValues/hotels/{hotelId}/roomTypePool
             */
            getRoomTypePoolLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/roomTypePool`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRoomTypesLOV</p>
             *
             * @tags LOV
             * @name GetRoomTypesLov
             * @summary Fetch List Of Values for Room Types
             * @request GET:/listOfValues/hotels/{hotelId}/roomTypes
             */
            getRoomTypesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/roomTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRoomsLOV</p>
             *
             * @tags LOV
             * @name GetRoomsLov
             * @summary Fetch List Of Values for Rooms
             * @request GET:/listOfValues/hotels/{hotelId}/rooms
             */
            getRoomsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/rooms`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRoomsKeyGenerationLOV</p>
             *
             * @tags LOV
             * @name GetRoomsKeyGenerationLov
             * @summary Fetch List Of Values for Rooms Key Generation
             * @request GET:/listOfValues/hotels/{hotelId}/roomsKeyGeneration
             */
            getRoomsKeyGenerationLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/roomsKeyGeneration`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRoutingInstructionsLOV</p>
             *
             * @tags LOV
             * @name GetRoutingInstructionsLov
             * @summary Fetch List Of Values for Routing Instructions
             * @request GET:/listOfValues/hotels/{hotelId}/routingInstructions
             */
            getRoutingInstructionsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/routingInstructions`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getSalesManagerGoalPeriodLOV</p>
             *
             * @tags LOV
             * @name GetSalesManagerGoalPeriodLov
             * @summary Fetch List Of Values for Sales Manager Goal Period
             * @request GET:/listOfValues/hotels/{hotelId}/salesManagerGoalPeriod
             */
            getSalesManagerGoalPeriodLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/salesManagerGoalPeriod`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getScheduledReportsExportLOV</p>
             *
             * @tags LOV
             * @name GetScheduledReportsExportLov
             * @summary Fetch List Of Values for Scheduled Reports Export
             * @request GET:/listOfValues/hotels/{hotelId}/scheduledReportsExport
             */
            getScheduledReportsExportLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/scheduledReportsExport`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getSitePlanSectionTypeLinksLOV</p>
             *
             * @tags LOV
             * @name GetSitePlanSectionTypeLinksLov
             * @summary Fetch List Of Values for Site Plan Section Type Links
             * @request GET:/listOfValues/hotels/{hotelId}/sectionType/{sectionType}/sitePlanSectionTypeLinks
             */
            getSitePlanSectionTypeLinksLov: (sectionType, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/sectionType/${sectionType}/sitePlanSectionTypeLinks`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getForeignCurrenciesLOV</p>
             *
             * @tags LOV
             * @name GetForeignCurrenciesLov
             * @summary Fetch List Of Values for Foreign Currencies
             * @request GET:/listOfValues/hotels/{hotelId}/sell/{sell}/exchangeType/{exchangeType}/foreignCurrencies
             */
            getForeignCurrenciesLov: (exchangeType, sell, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/sell/${sell}/exchangeType/${exchangeType}/foreignCurrencies`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getInventoryItemsLOV</p>
             *
             * @tags LOV
             * @name GetInventoryItemsLov
             * @summary Fetch List Of Values for Inventory Items
             * @request GET:/listOfValues/hotels/{hotelId}/sellInReservation/{sellInReservation}/sellInEvent/{sellInEvent}/inventoryItems
             */
            getInventoryItemsLov: (sellInEvent, sellInReservation, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/sellInReservation/${sellInReservation}/sellInEvent/${sellInEvent}/inventoryItems`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getResortInventoryItemsLOV</p>
             *
             * @tags LOV
             * @name GetResortInventoryItemsLov
             * @summary Fetch List Of Values for Resort Inventory Items
             * @request GET:/listOfValues/hotels/{hotelId}/sellInReservation/{sellInReservation}/sellInEvent/{sellInEvent}/resortInventoryItems
             */
            getResortInventoryItemsLov: (sellInEvent, sellInReservation, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/sellInReservation/${sellInReservation}/sellInEvent/${sellInEvent}/resortInventoryItems`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getServiceRequestCodesLOV</p>
             *
             * @tags LOV
             * @name GetServiceRequestCodesLov
             * @summary Fetch List Of Values for Service Request Codes
             * @request GET:/listOfValues/hotels/{hotelId}/serviceRequestCodes
             */
            getServiceRequestCodesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/serviceRequestCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getSetupStylesLOV</p>
             *
             * @tags LOV
             * @name GetSetupStylesLov
             * @summary Fetch List Of Values for Setup Styles
             * @request GET:/listOfValues/hotels/{hotelId}/setupStyles
             */
            getSetupStylesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/setupStyles`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getShiftReportsLOV</p>
             *
             * @tags LOV
             * @name GetShiftReportsLov
             * @summary Fetch List Of Values for Shift Reports
             * @request GET:/listOfValues/hotels/{hotelId}/shiftReports
             */
            getShiftReportsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/shiftReports`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getSitePlansLOV</p>
             *
             * @tags LOV
             * @name GetSitePlansLov
             * @summary Fetch List Of Values for Site Plans
             * @request GET:/listOfValues/hotels/{hotelId}/siteType/{siteType}/sitePlans
             */
            getSitePlansLov: (siteType, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/siteType/${siteType}/sitePlans`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getCateringSetupStylesLOV</p>
             *
             * @tags LOV
             * @name GetCateringSetupStylesLov
             * @summary Fetch List Of Values for Catering Setup Styles
             * @request GET:/listOfValues/hotels/{hotelId}/space/{space}/cateringSetupStyles
             */
            getCateringSetupStylesLov: (space, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/space/${space}/cateringSetupStyles`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getEventRateCodeLOV</p>
             *
             * @tags LOV
             * @name GetEventRateCodeLov
             * @summary Fetch List Of Values for Event Rate Code
             * @request GET:/listOfValues/hotels/{hotelId}/space/{space}/eventRateCode
             */
            getEventRateCodeLov: (space, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/space/${space}/eventRateCode`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getSpacesLOV</p>
             *
             * @tags LOV
             * @name GetSpacesLov
             * @summary Fetch List Of Values for Spaces
             * @request GET:/listOfValues/hotels/{hotelId}/spaces
             */
            getSpacesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/spaces`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getSpecialRequestsLOV</p>
             *
             * @tags LOV
             * @name GetSpecialRequestsLov
             * @summary Fetch List Of Values for Special Requests
             * @request GET:/listOfValues/hotels/{hotelId}/specialRequests
             */
            getSpecialRequestsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/specialRequests`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getSpecialsLOV</p>
             *
             * @tags LOV
             * @name GetSpecialsLov
             * @summary Fetch List Of Values for Specials
             * @request GET:/listOfValues/hotels/{hotelId}/specials
             */
            getSpecialsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/specials`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getStoredValueRedeemTrxLOV</p>
             *
             * @tags LOV
             * @name GetStoredValueRedeemTrxLov
             * @summary Fetch List Of Values for Stored Value Redeem Trx
             * @request GET:/listOfValues/hotels/{hotelId}/storedValueRedeemTrx
             */
            getStoredValueRedeemTrxLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/storedValueRedeemTrx`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getSummaryRefreshLogLOV</p>
             *
             * @tags LOV
             * @name GetSummaryRefreshLogLov
             * @summary Fetch List Of Values for Summary Refresh Log
             * @request GET:/listOfValues/hotels/{hotelId}/summaryRefreshLog
             */
            getSummaryRefreshLogLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/summaryRefreshLog`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getSubBlockLOV</p>
             *
             * @tags LOV
             * @name GetSubBlockLov
             * @summary Fetch List Of Values for Sub Block
             * @request GET:/listOfValues/hotels/{hotelId}/superBlock/{superBlock}/subBlock
             */
            getSubBlockLov: (superBlock, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/superBlock/${superBlock}/subBlock`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getSynchronizeRateCodesLOV</p>
             *
             * @tags LOV
             * @name GetSynchronizeRateCodesLov
             * @summary Fetch List Of Values for Synchronize Rate Codes
             * @request GET:/listOfValues/hotels/{hotelId}/synchronizeRateCodes
             */
            getSynchronizeRateCodesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/synchronizeRateCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getTaskSheetRoomsLOV</p>
             *
             * @tags LOV
             * @name GetTaskSheetRoomsLov
             * @summary Fetch List Of Values for Task Sheet Rooms
             * @request GET:/listOfValues/hotels/{hotelId}/taskCode/{taskCode}/taskSheetNo/{taskSheetNo}/taskSheetRooms
             */
            getTaskSheetRoomsLov: (taskSheetNo, taskCode, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/taskCode/${taskCode}/taskSheetNo/${taskSheetNo}/taskSheetRooms`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getTaxTransactionCodeLOV</p>
             *
             * @tags LOV
             * @name GetTaxTransactionCodeLov
             * @summary Fetch List Of Values for Tax Transaction Code
             * @request GET:/listOfValues/hotels/{hotelId}/taxCode/{taxCode}/taxTransactionCode
             */
            getTaxTransactionCodeLov: (taxCode, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/taxCode/${taxCode}/taxTransactionCode`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getTaxTypesLOV</p>
             *
             * @tags LOV
             * @name GetTaxTypesLov
             * @summary Fetch List Of Values for Tax Types
             * @request GET:/listOfValues/hotels/{hotelId}/taxTypes
             */
            getTaxTypesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/taxTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getTelephoneCategoryLOV</p>
             *
             * @tags LOV
             * @name GetTelephoneCategoryLov
             * @summary Fetch List Of Values for Telephone Category
             * @request GET:/listOfValues/hotels/{hotelId}/telephoneCategory
             */
            getTelephoneCategoryLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/telephoneCategory`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getConfigDynamicBaseRatePlansLOV</p>
             *
             * @tags LOV
             * @name GetConfigDynamicBaseRatePlansLov
             * @summary Fetch List Of Values for Config Dynamic Base Rate Plans
             * @request GET:/listOfValues/hotels/{hotelId}/tiered/{tiered}/currentRateCode/{currentRateCode}/configDynamicBaseRatePlans
             */
            getConfigDynamicBaseRatePlansLov: (currentRateCode, tiered, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/tiered/${tiered}/currentRateCode/${currentRateCode}/configDynamicBaseRatePlans`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getTransactionAdjustmentReasonCodesLOV</p>
             *
             * @tags LOV
             * @name GetTransactionAdjustmentReasonCodesLov
             * @summary Fetch List Of Values for Transaction Adjustment Reason Codes
             * @request GET:/listOfValues/hotels/{hotelId}/transactionAdjustmentReasonCodes
             */
            getTransactionAdjustmentReasonCodesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/transactionAdjustmentReasonCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getTransactionCodesLOV</p>
             *
             * @tags LOV
             * @name GetTransactionCodesLov
             * @summary Fetch List Of Values for Transaction Codes
             * @request GET:/listOfValues/hotels/{hotelId}/transactionCodes
             */
            getTransactionCodesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/transactionCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getTransactionCodesConsumptionLOV</p>
             *
             * @tags LOV
             * @name GetTransactionCodesConsumptionLov
             * @summary Fetch List Of Values for Transaction Codes Consumption
             * @request GET:/listOfValues/hotels/{hotelId}/transactionCodesConsumption
             */
            getTransactionCodesConsumptionLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/transactionCodesConsumption`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getTransactionCodesPaymentLOV</p>
             *
             * @tags LOV
             * @name GetTransactionCodesPaymentLov
             * @summary Fetch List Of Values for Transaction Codes Payment
             * @request GET:/listOfValues/hotels/{hotelId}/transactionCodesPayment
             */
            getTransactionCodesPaymentLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/transactionCodesPayment`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getTransactionDeleteReasonCodesLOV</p>
             *
             * @tags LOV
             * @name GetTransactionDeleteReasonCodesLov
             * @summary Fetch List Of Values for Transaction Delete Reason Codes
             * @request GET:/listOfValues/hotels/{hotelId}/transactionDeleteReasonCodes
             */
            getTransactionDeleteReasonCodesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/transactionDeleteReasonCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getTransactionDiversionRuleRoomsLOV</p>
             *
             * @tags LOV
             * @name GetTransactionDiversionRuleRoomsLov
             * @summary Fetch List Of Values for Transaction Diversion Rule Rooms
             * @request GET:/listOfValues/hotels/{hotelId}/transactionDiversionRuleRooms
             */
            getTransactionDiversionRuleRoomsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/transactionDiversionRuleRooms`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getTransactionGroupsLOV</p>
             *
             * @tags LOV
             * @name GetTransactionGroupsLov
             * @summary Fetch List Of Values for Transaction Groups
             * @request GET:/listOfValues/hotels/{hotelId}/transactionGroups
             */
            getTransactionGroupsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/transactionGroups`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getTransactionSubgroupsLOV</p>
             *
             * @tags LOV
             * @name GetTransactionSubgroupsLov
             * @summary Fetch List Of Values for Transaction Subgroups
             * @request GET:/listOfValues/hotels/{hotelId}/transactionSubgroups
             */
            getTransactionSubgroupsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/transactionSubgroups`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getTransportTypesLOV</p>
             *
             * @tags LOV
             * @name GetTransportTypesLov
             * @summary Fetch List Of Values for Transport Types
             * @request GET:/listOfValues/hotels/{hotelId}/transportTypes
             */
            getTransportTypesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/transportTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getTransportTypesHotelLOV</p>
             *
             * @tags LOV
             * @name GetTransportTypesHotelLov
             * @summary Fetch List Of Values for Transport Types Hotel
             * @request GET:/listOfValues/hotels/{hotelId}/transportTypesHotel
             */
            getTransportTypesHotelLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/transportTypesHotel`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getTravelAgentSourceLOV</p>
             *
             * @tags LOV
             * @name GetTravelAgentSourceLov
             * @summary Fetch List Of Values for Travel Agent Source
             * @request GET:/listOfValues/hotels/{hotelId}/travelAgentSource
             */
            getTravelAgentSourceLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/travelAgentSource`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getTravelAgentSourceResvLOV</p>
             *
             * @tags LOV
             * @name GetTravelAgentSourceResvLov
             * @summary Fetch List Of Values for Travel Agent Source Resv
             * @request GET:/listOfValues/hotels/{hotelId}/travelAgentSourceResv
             */
            getTravelAgentSourceResvLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/travelAgentSourceResv`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getTurnawayCodesLOV</p>
             *
             * @tags LOV
             * @name GetTurnawayCodesLov
             * @summary Fetch List Of Values for Turnaway Codes
             * @request GET:/listOfValues/hotels/{hotelId}/turnawayCodes
             */
            getTurnawayCodesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/turnawayCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getUpsellDefaultTrxCodeLOV</p>
             *
             * @tags LOV
             * @name GetUpsellDefaultTrxCodeLov
             * @summary Fetch List Of Values for Upsell Default Trx Code
             * @request GET:/listOfValues/hotels/{hotelId}/upsellDefaultTrxCode
             */
            getUpsellDefaultTrxCodeLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/upsellDefaultTrxCode`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getUpsellFromRoomClassEditLOV</p>
             *
             * @tags LOV
             * @name GetUpsellFromRoomClassEditLov
             * @summary Fetch List Of Values for Upsell From Room Class Edit
             * @request GET:/listOfValues/hotels/{hotelId}/upsellFromRoomClassEdit
             */
            getUpsellFromRoomClassEditLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/upsellFromRoomClassEdit`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getUpsellFromRoomTypeEditLOV</p>
             *
             * @tags LOV
             * @name GetUpsellFromRoomTypeEditLov
             * @summary Fetch List Of Values for Upsell From Room Type Edit
             * @request GET:/listOfValues/hotels/{hotelId}/upsellFromRoomTypeEdit
             */
            getUpsellFromRoomTypeEditLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/upsellFromRoomTypeEdit`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getUpsellHierarchyLevelsLOV</p>
             *
             * @tags LOV
             * @name GetUpsellHierarchyLevelsLov
             * @summary Fetch List Of Values for Upsell Hierarchy Levels
             * @request GET:/listOfValues/hotels/{hotelId}/upsellHierarchyLevels
             */
            getUpsellHierarchyLevelsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/upsellHierarchyLevels`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getUpsellRateCategoriesEditLOV</p>
             *
             * @tags LOV
             * @name GetUpsellRateCategoriesEditLov
             * @summary Fetch List Of Values for Upsell Rate Categories Edit
             * @request GET:/listOfValues/hotels/{hotelId}/upsellRateCategoriesEdit
             */
            getUpsellRateCategoriesEditLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/upsellRateCategoriesEdit`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getUpsellRateCodesLOV</p>
             *
             * @tags LOV
             * @name GetUpsellRateCodesLov
             * @summary Fetch List Of Values for Upsell Rate Codes
             * @request GET:/listOfValues/hotels/{hotelId}/upsellRateCodes
             */
            getUpsellRateCodesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/upsellRateCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getUpsellRoomClassViewLOV</p>
             *
             * @tags LOV
             * @name GetUpsellRoomClassViewLov
             * @summary Fetch List Of Values for Upsell Room Class View
             * @request GET:/listOfValues/hotels/{hotelId}/upsellRoomClassView
             */
            getUpsellRoomClassViewLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/upsellRoomClassView`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getUpsellRoomTypeViewLOV</p>
             *
             * @tags LOV
             * @name GetUpsellRoomTypeViewLov
             * @summary Fetch List Of Values for Upsell Room Type View
             * @request GET:/listOfValues/hotels/{hotelId}/upsellRoomTypeView
             */
            getUpsellRoomTypeViewLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/upsellRoomTypeView`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getUpsellRuleLOV</p>
             *
             * @tags LOV
             * @name GetUpsellRuleLov
             * @summary Fetch List Of Values for Upsell Rule
             * @request GET:/listOfValues/hotels/{hotelId}/upsellRule
             */
            getUpsellRuleLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/upsellRule`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getUpsellTrxCodesLOV</p>
             *
             * @tags LOV
             * @name GetUpsellTrxCodesLov
             * @summary Fetch List Of Values for Upsell Trx Codes
             * @request GET:/listOfValues/hotels/{hotelId}/upsellTrxCodes
             */
            getUpsellTrxCodesLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/upsellTrxCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getUserLogActivityGroupsLOV</p>
             *
             * @tags LOV
             * @name GetUserLogActivityGroupsLov
             * @summary Fetch List Of Values for User Log Activity Groups
             * @request GET:/listOfValues/hotels/{hotelId}/userLogActivityGroups
             */
            getUserLogActivityGroupsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/userLogActivityGroups`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getYearSetupLOV</p>
             *
             * @tags LOV
             * @name GetYearSetupLov
             * @summary Fetch List Of Values for Year Setup
             * @request GET:/listOfValues/hotels/{hotelId}/yearSetup
             */
            getYearSetupLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/yearSetup`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getYieldMarketsLOV</p>
             *
             * @tags LOV
             * @name GetYieldMarketsLov
             * @summary Fetch List Of Values for Yield Markets
             * @request GET:/listOfValues/hotels/{hotelId}/yieldMarkets
             */
            getYieldMarketsLov: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/hotels/${hotelId}/yieldMarkets`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRoomReservationStatusLOV</p>
             *
             * @tags LOV
             * @name GetRoomReservationStatusLov
             * @summary Fetch List Of Values for Room Reservation Status
             * @request GET:/listOfValues/includeDayUse/{includeDayUse}/roomReservationStatus
             */
            getRoomReservationStatusLov: (hotelId, includeDayUse, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/includeDayUse/${includeDayUse}/roomReservationStatus`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getTemplatePreferencesLOV</p>
             *
             * @tags LOV
             * @name GetTemplatePreferencesLov
             * @summary Fetch List Of Values for Template Preferences
             * @request GET:/listOfValues/includeGlobals/{includeGlobals}/templatePreferences
             */
            getTemplatePreferencesLov: (hotelId, includeGlobals, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/includeGlobals/${includeGlobals}/templatePreferences`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getTemplateMarketCodesLOV</p>
             *
             * @tags LOV
             * @name GetTemplateMarketCodesLov
             * @summary Fetch List Of Values for Template Market Codes
             * @request GET:/listOfValues/includeInactive/{includeInactive}/templateMarketCodes
             */
            getTemplateMarketCodesLov: (hotelId, includeInactive, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/includeInactive/${includeInactive}/templateMarketCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getTemplateMarketGroupsLOV</p>
             *
             * @tags LOV
             * @name GetTemplateMarketGroupsLov
             * @summary Fetch List Of Values for Template Market Groups
             * @request GET:/listOfValues/includeInactive/{includeInactive}/templateMarketGroups
             */
            getTemplateMarketGroupsLov: (hotelId, includeInactive, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/includeInactive/${includeInactive}/templateMarketGroups`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getTemplateRoomClassesLOV</p>
             *
             * @tags LOV
             * @name GetTemplateRoomClassesLov
             * @summary Fetch List Of Values for Template Room Classes
             * @request GET:/listOfValues/includeInactive/{includeInactive}/templateRoomClasses
             */
            getTemplateRoomClassesLov: (hotelId, includeInactive, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/includeInactive/${includeInactive}/templateRoomClasses`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getTemplateSourceCodesLOV</p>
             *
             * @tags LOV
             * @name GetTemplateSourceCodesLov
             * @summary Fetch List Of Values for Template Source Codes
             * @request GET:/listOfValues/includeInactive/{includeInactive}/templateSourceCodes
             */
            getTemplateSourceCodesLov: (hotelId, includeInactive, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/includeInactive/${includeInactive}/templateSourceCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getTemplateSourceGroupsLOV</p>
             *
             * @tags LOV
             * @name GetTemplateSourceGroupsLov
             * @summary Fetch List Of Values for Template Source Groups
             * @request GET:/listOfValues/includeInactive/{includeInactive}/templateSourceGroups
             */
            getTemplateSourceGroupsLov: (hotelId, includeInactive, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/includeInactive/${includeInactive}/templateSourceGroups`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getAllRevenueTypesLOV</p>
             *
             * @tags LOV
             * @name GetAllRevenueTypesLov
             * @summary Fetch List Of Values for All Revenue Types
             * @request GET:/listOfValues/interfaceId/{interfaceId}/allRevenueTypes
             */
            getAllRevenueTypesLov: (hotelId, interfaceId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/interfaceId/${interfaceId}/allRevenueTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getOXIResortsLOV</p>
             *
             * @tags LOV
             * @name GetOxiResortsLov
             * @summary Fetch List Of Values for OXIResorts
             * @request GET:/listOfValues/interfaceId/{interfaceId}/oxiResorts
             */
            getOxiResortsLov: (hotelId, interfaceId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/interfaceId/${interfaceId}/oxiResorts`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getExternalDatabaseAvailableResortsLOV</p>
             *
             * @tags LOV
             * @name GetExternalDatabaseAvailableResortsLov
             * @summary Fetch List Of Values for External Database Available Resorts
             * @request GET:/listOfValues/interfaceType/{interfaceType}/databaseId/{databaseId}/externalDatabaseAvailableResorts
             */
            getExternalDatabaseAvailableResortsLov: (hotelId, databaseId, interfaceType, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/interfaceType/${interfaceType}/databaseId/${databaseId}/externalDatabaseAvailableResorts`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getChannelParametersLOV</p>
             *
             * @tags LOV
             * @name GetChannelParametersLov
             * @summary Fetch List Of Values for Channel Parameters
             * @request GET:/listOfValues/levelCode/{levelCode}/levelType/{levelType}/settingName/{settingName}/channelCode/{channelCode}/channelParameters
             */
            getChannelParametersLov: (hotelId, channelCode, settingName, levelType, levelCode, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/levelCode/${levelCode}/levelType/${levelType}/settingName/${settingName}/channelCode/${channelCode}/channelParameters`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getApplicationSettingsLOV</p>
             *
             * @tags LOV
             * @name GetApplicationSettingsLov
             * @summary Fetch List Of Values for Application Settings
             * @request GET:/listOfValues/levelCode/{levelCode}/settingName/{settingName}/applicationSettings
             */
            getApplicationSettingsLov: (hotelId, settingName, levelCode, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/levelCode/${levelCode}/settingName/${settingName}/applicationSettings`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getTaskSheetDeptLOV</p>
             *
             * @tags LOV
             * @name GetTaskSheetDeptLov
             * @summary Fetch List Of Values for Task Sheet Dept
             * @request GET:/listOfValues/levelCode/{levelCode}/taskSheetDept
             */
            getTaskSheetDeptLov: (hotelId, levelCode, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/levelCode/${levelCode}/taskSheetDept`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getDistributionTemplatesLOV</p>
             *
             * @tags LOV
             * @name GetDistributionTemplatesLov
             * @summary Fetch List Of Values for Distribution Templates
             * @request GET:/listOfValues/locationType/{locationType}/location/{location}/distributionTemplates
             */
            getDistributionTemplatesLov: (hotelId, location, locationType, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/locationType/${locationType}/location/${location}/distributionTemplates`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getMembershipStatementBatchListLOV</p>
             *
             * @tags LOV
             * @name GetMembershipStatementBatchListLov
             * @summary Fetch List Of Values for Membership Statement Batch List
             * @request GET:/listOfValues/membershipId/{membershipId}/membershipStatementBatchList
             */
            getMembershipStatementBatchListLov: (hotelId, membershipId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/membershipId/${membershipId}/membershipStatementBatchList`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getMembershipTotalPointsAvailableLOV</p>
             *
             * @tags LOV
             * @name GetMembershipTotalPointsAvailableLov
             * @summary Fetch List Of Values for Membership Total Points Available
             * @request GET:/listOfValues/membershipId/{membershipId}/membershipTotalPointsAvailable
             */
            getMembershipTotalPointsAvailableLov: (hotelId, membershipId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/membershipId/${membershipId}/membershipTotalPointsAvailable`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getMembershipCardFeeAmountLOV</p>
             *
             * @tags LOV
             * @name GetMembershipCardFeeAmountLov
             * @summary Fetch List Of Values for Membership Card Fee Amount
             * @request GET:/listOfValues/membershipLevel/{membershipLevel}/membershipCardFeeAmount
             */
            getMembershipCardFeeAmountLov: (hotelId, membershipLevel, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/membershipLevel/${membershipLevel}/membershipCardFeeAmount`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getMembershipMaxDowngradeLevelLOV</p>
             *
             * @tags LOV
             * @name GetMembershipMaxDowngradeLevelLov
             * @summary Fetch List Of Values for Membership Max Downgrade Level
             * @request GET:/listOfValues/membershipLevelRank/{membershipLevelRank}/membershipType/{membershipType}/membershipMaxDowngradeLevel
             */
            getMembershipMaxDowngradeLevelLov: (hotelId, membershipType, membershipLevelRank, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/membershipLevelRank/${membershipLevelRank}/membershipType/${membershipType}/membershipMaxDowngradeLevel`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getMembershipBenefitProgramLOV</p>
             *
             * @tags LOV
             * @name GetMembershipBenefitProgramLov
             * @summary Fetch List Of Values for Membership Benefit Program
             * @request GET:/listOfValues/membershipType/{membershipType}/membershipBenefitProgram
             */
            getMembershipBenefitProgramLov: (hotelId, membershipType, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/membershipType/${membershipType}/membershipBenefitProgram`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getMembershipBenefitsLOV</p>
             *
             * @tags LOV
             * @name GetMembershipBenefitsLov
             * @summary Fetch List Of Values for Membership Benefits
             * @request GET:/listOfValues/membershipType/{membershipType}/membershipBenefits
             */
            getMembershipBenefitsLov: (hotelId, membershipType, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/membershipType/${membershipType}/membershipBenefits`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getMembershipPointsRuleCodesLOV</p>
             *
             * @tags LOV
             * @name GetMembershipPointsRuleCodesLov
             * @summary Fetch List Of Values for Membership Points Rule Codes
             * @request GET:/listOfValues/membershipType/{membershipType}/membershipPointsRuleCodes
             */
            getMembershipPointsRuleCodesLov: (hotelId, membershipType, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/membershipType/${membershipType}/membershipPointsRuleCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getUpsellMembershipLevelsOnlyLOV</p>
             *
             * @tags LOV
             * @name GetUpsellMembershipLevelsOnlyLov
             * @summary Fetch List Of Values for Upsell Membership Levels Only
             * @request GET:/listOfValues/membershipType/{membershipType}/upsellMembershipLevelsOnly
             */
            getUpsellMembershipLevelsOnlyLov: (hotelId, membershipType, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/membershipType/${membershipType}/upsellMembershipLevelsOnly`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getMenuLOV</p>
             *
             * @tags LOV
             * @name GetMenuLov
             * @summary Fetch List Of Values for Menu
             * @request GET:/listOfValues/menuClassId/{menuClassId}/menu
             */
            getMenuLov: (hotelId, menuClassId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/menuClassId/${menuClassId}/menu`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getFolioGroupingTransactionCodesLOV</p>
             *
             * @tags LOV
             * @name GetFolioGroupingTransactionCodesLov
             * @summary Fetch List Of Values for Folio Grouping Transaction Codes
             * @request GET:/listOfValues/mode/{mode}/folioGroupingTransactionCodes
             */
            getFolioGroupingTransactionCodesLov: (hotelId, mode, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/mode/${mode}/folioGroupingTransactionCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getActionTypesLOV</p>
             *
             * @tags LOV
             * @name GetActionTypesLov
             * @summary Fetch List Of Values for Action Types
             * @request GET:/listOfValues/module/{module}/actionTypes
             */
            getActionTypesLov: (hotelId, module, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/module/${module}/actionTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getReportsGenericLOV</p>
             *
             * @tags LOV
             * @name GetReportsGenericLov
             * @summary Fetch List Of Values for Reports Generic
             * @request GET:/listOfValues/moduleId/{moduleId}/parameterName/{parameter}/reportsGeneric
             */
            getReportsGenericLov: (hotelId, parameter, moduleId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/moduleId/${moduleId}/parameterName/${parameter}/reportsGeneric`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getConfigReportsLOV</p>
             *
             * @tags LOV
             * @name GetConfigReportsLov
             * @summary Fetch List Of Values for Config Reports
             * @request GET:/listOfValues/moduleName/{moduleName}/configReports
             */
            getConfigReportsLov: (hotelId, moduleName, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/moduleName/${moduleName}/configReports`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getUDFMappingsLOV</p>
             *
             * @tags LOV
             * @name GetUdfMappingsLov
             * @summary Fetch List Of Values for UDFMappings
             * @request GET:/listOfValues/moduleName/{moduleName}/udfMappings
             */
            getUdfMappingsLov: (hotelId, moduleName, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/moduleName/${moduleName}/udfMappings`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getProfileEnrollmentMatchCriteriaLOV</p>
             *
             * @tags LOV
             * @name GetProfileEnrollmentMatchCriteriaLov
             * @summary Fetch List Of Values for Profile Enrollment Match Criteria
             * @request GET:/listOfValues/nameType/{nameType}/profileEnrollmentMatchCriteria
             */
            getProfileEnrollmentMatchCriteriaLov: (hotelId, nameType, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/nameType/${nameType}/profileEnrollmentMatchCriteria`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getProfileEnrollmentRuleDoNotMergeCriteriaLOV</p>
             *
             * @tags LOV
             * @name GetProfileEnrollmentRuleDoNotMergeCriteriaLov
             * @summary Fetch List Of Values for Profile Enrollment Rule Do Not Merge Criteria
             * @request GET:/listOfValues/nameType/{nameType}/profileEnrollmentRuleDoNotMergeCriteria
             */
            getProfileEnrollmentRuleDoNotMergeCriteriaLov: (hotelId, nameType, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/nameType/${nameType}/profileEnrollmentRuleDoNotMergeCriteria`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getProfileEnrollmentRuleFilterCriteriaLOV</p>
             *
             * @tags LOV
             * @name GetProfileEnrollmentRuleFilterCriteriaLov
             * @summary Fetch List Of Values for Profile Enrollment Rule Filter Criteria
             * @request GET:/listOfValues/nameType/{nameType}/profileEnrollmentRuleFilterCriteria
             */
            getProfileEnrollmentRuleFilterCriteriaLov: (hotelId, nameType, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/nameType/${nameType}/profileEnrollmentRuleFilterCriteria`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getCateringEventStatusLOV</p>
             *
             * @tags LOV
             * @name GetCateringEventStatusLov
             * @summary Fetch List Of Values for Catering Event Status
             * @request GET:/listOfValues/newEvent/{newEvent}/waitList/{waitList}/cateringEventStatus
             */
            getCateringEventStatusLov: (hotelId, waitList, newEvent, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/newEvent/${newEvent}/waitList/${waitList}/cateringEventStatus`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getAutoNumberGeneratorLOV</p>
             *
             * @tags LOV
             * @name GetAutoNumberGeneratorLov
             * @summary Fetch List Of Values for Auto Number Generator
             * @request GET:/listOfValues/number/{number}/autoNumberGenerator
             */
            getAutoNumberGeneratorLov: (hotelId, number, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/number/${number}/autoNumberGenerator`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getProfileNameValidationsTypeLOV</p>
             *
             * @tags LOV
             * @name GetProfileNameValidationsTypeLov
             * @summary Fetch List Of Values for Profile Name Validations Type
             * @request GET:/listOfValues/operaParam/{operaParam}/profileNameValidationsType
             */
            getProfileNameValidationsTypeLov: (hotelId, operaParam, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/operaParam/${operaParam}/profileNameValidationsType`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getServiceNameLOV</p>
             *
             * @tags LOV
             * @name GetServiceNameLov
             * @summary Fetch List Of Values for Service Name
             * @request GET:/listOfValues/outboundType/{outboundType}/protocol/{protocol}/outboundServiceNames
             */
            getServiceNameLov: (hotelId, protocol, outboundType, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/outboundType/${outboundType}/protocol/${protocol}/outboundServiceNames`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getParameterActiveUnderChainLOV</p>
             *
             * @tags LOV
             * @name GetParameterActiveUnderChainLov
             * @summary Fetch List Of Values for Parameter Active Under Chain
             * @request GET:/listOfValues/parameterName/{parameter}/chainCode/{chainCode}/parameterActiveUnderChain
             */
            getParameterActiveUnderChainLov: (hotelId, chainCode, parameter, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/parameterName/${parameter}/chainCode/${chainCode}/parameterActiveUnderChain`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRepCalendarYearsLOV</p>
             *
             * @tags LOV
             * @name GetRepCalendarYearsLov
             * @summary Fetch List Of Values for Rep Calendar Years
             * @request GET:/listOfValues/period/{period}/repCalendarYears
             */
            getRepCalendarYearsLov: (hotelId, period, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/period/${period}/repCalendarYears`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getCateringPackageRevenueEventTypeLOV</p>
             *
             * @tags LOV
             * @name GetCateringPackageRevenueEventTypeLov
             * @summary Fetch List Of Values for Catering Package Revenue Event Type
             * @request GET:/listOfValues/pkgId/{pkgId}/cateringPackageRevenueEventType
             */
            getCateringPackageRevenueEventTypeLov: (hotelId, pkgId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/pkgId/${pkgId}/cateringPackageRevenueEventType`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getCateringPackageRevenueConfigEventTypeLOV</p>
             *
             * @tags LOV
             * @name GetCateringPackageRevenueConfigEventTypeLov
             * @summary Fetch List Of Values for Catering Package Revenue Config Event Type
             * @request GET:/listOfValues/pkgLinkId/{pkgLinkId}/cateringPackageRevenueConfigEventType
             */
            getCateringPackageRevenueConfigEventTypeLov: (hotelId, pkgLinkId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/pkgLinkId/${pkgLinkId}/cateringPackageRevenueConfigEventType`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getDepositCancelRulesMultiHotelLOV</p>
             *
             * @tags LOV
             * @name GetDepositCancelRulesMultiHotelLov
             * @summary Fetch List Of Values for Deposit Cancel Rules Multi Hotel
             * @request GET:/listOfValues/policyType/{policyType}/depositCancelRulesMultiHotel
             */
            getDepositCancelRulesMultiHotelLov: (hotelId, policyType, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/policyType/${policyType}/depositCancelRulesMultiHotel`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getTemplatePolicyCodesLOV</p>
             *
             * @tags LOV
             * @name GetTemplatePolicyCodesLov
             * @summary Fetch List Of Values for Template Policy Codes
             * @request GET:/listOfValues/policyType/{policyType}/templatePolicyCodes
             */
            getTemplatePolicyCodesLov: (hotelId, policyType, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/policyType/${policyType}/templatePolicyCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getPreferencesMultiHotelsLOV</p>
             *
             * @tags LOV
             * @name GetPreferencesMultiHotelsLov
             * @summary Fetch List Of Values for Preferences Multi Hotels
             * @request GET:/listOfValues/preferenceGroup/{preferenceGroup}/preferencesMultiHotels
             */
            getPreferencesMultiHotelsLov: (hotelId, preferenceGroup, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/preferenceGroup/${preferenceGroup}/preferencesMultiHotels`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getClaimMembershipDetailsLOV</p>
             *
             * @tags LOV
             * @name GetClaimMembershipDetailsLov
             * @summary Fetch List Of Values for Claim Membership Details
             * @request GET:/listOfValues/profiles/{profileId}/claimMembershipDetails
             */
            getClaimMembershipDetailsLov: (hotelId, profileId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/profiles/${profileId}/claimMembershipDetails`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getHotelsForARProfileLOV</p>
             *
             * @tags LOV
             * @name GetHotelsForArProfileLov
             * @summary Fetch List Of Values for Hotels For ARProfile
             * @request GET:/listOfValues/profiles/{profileId}/hotelsForARProfile
             */
            getHotelsForArProfileLov: (hotelId, profileId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/profiles/${profileId}/hotelsForARProfile`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getMembershipTransferPointsLOV</p>
             *
             * @tags LOV
             * @name GetMembershipTransferPointsLov
             * @summary Fetch List Of Values for Membership Transfer Points
             * @request GET:/listOfValues/profiles/{profileId}/membershipTransferPoints
             */
            getMembershipTransferPointsLov: (hotelId, profileId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/profiles/${profileId}/membershipTransferPoints`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getNegotiatedRateHotelsLOV</p>
             *
             * @tags LOV
             * @name GetNegotiatedRateHotelsLov
             * @summary Fetch List Of Values for Negotiated Rate Hotels
             * @request GET:/listOfValues/profiles/{profileId}/negotiatedRateHotels
             */
            getNegotiatedRateHotelsLov: (hotelId, profileId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/profiles/${profileId}/negotiatedRateHotels`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getProfileCommunicationsLOV</p>
             *
             * @tags LOV
             * @name GetProfileCommunicationsLov
             * @summary Fetch List Of Values for Profile Communications
             * @request GET:/listOfValues/profiles/{profileId}/profileCommunications
             */
            getProfileCommunicationsLov: (hotelId, profileId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/profiles/${profileId}/profileCommunications`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getProfileHotelsLOV</p>
             *
             * @tags LOV
             * @name GetProfileHotelsLov
             * @summary Fetch List Of Values for Profile Hotels
             * @request GET:/listOfValues/profiles/{profileId}/taxTypeCheck/{taxTypeCheck}/profileHotels
             */
            getProfileHotelsLov: (hotelId, taxTypeCheck, profileId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/profiles/${profileId}/taxTypeCheck/${taxTypeCheck}/profileHotels`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRoomHierarchyClassesCopyLOV</p>
             *
             * @tags LOV
             * @name GetRoomHierarchyClassesCopyLov
             * @summary Fetch List Of Values for Room Hierarchy Classes Copy
             * @request GET:/listOfValues/property/{property}/roomHierarchyClassesCopy
             */
            getRoomHierarchyClassesCopyLov: (hotelId, property, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/property/${property}/roomHierarchyClassesCopy`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRoomHierarchyRoomClassesLOV</p>
             *
             * @tags LOV
             * @name GetRoomHierarchyRoomClassesLov
             * @summary Fetch List Of Values for Room Hierarchy Room Classes
             * @request GET:/listOfValues/property/{property}/roomHierarchyRoomClasses
             */
            getRoomHierarchyRoomClassesLov: (hotelId, property, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/property/${property}/roomHierarchyRoomClasses`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRoomHierarchyRoomTypesLOV</p>
             *
             * @tags LOV
             * @name GetRoomHierarchyRoomTypesLov
             * @summary Fetch List Of Values for Room Hierarchy Room Types
             * @request GET:/listOfValues/property/{property}/roomHierarchyRoomTypes
             */
            getRoomHierarchyRoomTypesLov: (hotelId, property, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/property/${property}/roomHierarchyRoomTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRoomHierarchyTypesCopyLOV</p>
             *
             * @tags LOV
             * @name GetRoomHierarchyTypesCopyLov
             * @summary Fetch List Of Values for Room Hierarchy Types Copy
             * @request GET:/listOfValues/property/{property}/roomHierarchyTypesCopy
             */
            getRoomHierarchyTypesCopyLov: (hotelId, property, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/property/${property}/roomHierarchyTypesCopy`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRepRatePlansLOV</p>
             *
             * @tags LOV
             * @name GetRepRatePlansLov
             * @summary Fetch List Of Values for Rep Rate Plans
             * @request GET:/listOfValues/propertyList/{propertyList}/repRatePlans
             */
            getRepRatePlansLov: (hotelId, propertyList, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/propertyList/${propertyList}/repRatePlans`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getCateringPackageCodesLOV</p>
             *
             * @tags LOV
             * @name GetCateringPackageCodesLov
             * @summary Fetch List Of Values for Catering Package Codes
             * @request GET:/listOfValues/radioType/{radioType}/hotels/{hotelId}/cateringPackageCodes
             */
            getCateringPackageCodesLov: (hotelId, radioType, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/radioType/${radioType}/hotels/${hotelId}/cateringPackageCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getNegotiatedRatesHotelsLOV</p>
             *
             * @tags LOV
             * @name GetNegotiatedRatesHotelsLov
             * @summary Fetch List Of Values for Negotiated Rates Hotels
             * @request GET:/listOfValues/rateCode/{rateCode}/profiles/{profileId}/negotiatedRatesHotels
             */
            getNegotiatedRatesHotelsLov: (hotelId, profileId, rateCode, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/rateCode/${rateCode}/profiles/${profileId}/negotiatedRatesHotels`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRolesForLevelLOV</p>
             *
             * @tags LOV
             * @name GetRolesForLevelLov
             * @summary Fetch List Of Values for Roles For Level
             * @request GET:/listOfValues/roleLevel/{roleLevel}/levelCode/{levelCode}/rolesForLevel
             */
            getRolesForLevelLov: (hotelId, levelCode, roleLevel, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/roleLevel/${roleLevel}/levelCode/${levelCode}/rolesForLevel`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getOrganizationsLOV</p>
             *
             * @tags LOV
             * @name GetOrganizationsLov
             * @summary Fetch List Of Values for Organizations
             * @request GET:/listOfValues/roles/{roles}/chainCode/{chainCode}/actionTask/{actionTask}/organizations
             */
            getOrganizationsLov: (hotelId, actionTask, chainCode, roles, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/roles/${roles}/chainCode/${chainCode}/actionTask/${actionTask}/organizations`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getAddressFormatElementsLOV</p>
             *
             * @tags LOV
             * @name GetAddressFormatElementsLov
             * @summary Fetch List Of Values for Address Format Elements
             * @request GET:/listOfValues/salesFormat/{salesFormat}/addressFormatElements
             */
            getAddressFormatElementsLov: (hotelId, salesFormat, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/salesFormat/${salesFormat}/addressFormatElements`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getShiftReportsNoParamLOV</p>
             *
             * @tags LOV
             * @name GetShiftReportsNoParamLov
             * @summary Fetch List Of Values for Shift Reports No Param
             * @request GET:/listOfValues/shiftGroupId/{shiftGroupId}/shiftReportsNoParam
             */
            getShiftReportsNoParamLov: (hotelId, shiftGroupId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/shiftGroupId/${shiftGroupId}/shiftReportsNoParam`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getSitePlanSectionTypesLOV</p>
             *
             * @tags LOV
             * @name GetSitePlanSectionTypesLov
             * @summary Fetch List Of Values for Site Plan Section Types
             * @request GET:/listOfValues/siteType/{siteType}/sitePlanSectionTypes
             */
            getSitePlanSectionTypesLov: (hotelId, siteType, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/siteType/${siteType}/sitePlanSectionTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getGlobalAlertFieldQueryLOV</p>
             *
             * @tags LOV
             * @name GetGlobalAlertFieldQueryLov
             * @summary Fetch List Of Values for Global Alert Field Query
             * @request GET:/listOfValues/sourceId/{sourceId}/globalAlertFieldQuery
             */
            getGlobalAlertFieldQueryLov: (hotelId, sourceId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/sourceId/${sourceId}/globalAlertFieldQuery`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getGlobalAlertOperatorLOV</p>
             *
             * @tags LOV
             * @name GetGlobalAlertOperatorLov
             * @summary Fetch List Of Values for Global Alert Operator
             * @request GET:/listOfValues/sourceIdIn/{sourceIdIn}/fieldType/{fieldType}/fieldName/{fieldName}/tableName/{tableName}/globalAlertOperator
             */
            getGlobalAlertOperatorLov: (hotelId, tableName, fieldName, fieldType, sourceIdIn, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/sourceIdIn/${sourceIdIn}/fieldType/${fieldType}/fieldName/${fieldName}/tableName/${tableName}/globalAlertOperator`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getMailGenericLOV</p>
             *
             * @tags LOV
             * @name GetMailGenericLov
             * @summary Fetch List Of Values for Mail Generic
             * @request GET:/listOfValues/sourceIdIn/{sourceIdIn}/mailGeneric
             */
            getMailGenericLov: (hotelId, sourceIdIn, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/sourceIdIn/${sourceIdIn}/mailGeneric`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getPublisherPropertiesLOV</p>
             *
             * @tags LOV
             * @name GetPublisherPropertiesLov
             * @summary Fetch List Of Values for Publisher Properties
             * @request GET:/listOfValues/subscriber/{subscriber}/publisherProperties
             */
            getPublisherPropertiesLov: (hotelId, subscriber, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/subscriber/${subscriber}/publisherProperties`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getInterfaceTabColumnsLOV</p>
             *
             * @tags LOV
             * @name GetInterfaceTabColumnsLov
             * @summary Fetch List Of Values for Interface Tab Columns
             * @request GET:/listOfValues/tableName/{tableName}/interfaceTabColumns
             */
            getInterfaceTabColumnsLov: (hotelId, tableName, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/tableName/${tableName}/interfaceTabColumns`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getAutoTraceExpressionFieldsLOV</p>
             *
             * @tags LOV
             * @name GetAutoTraceExpressionFieldsLov
             * @summary Fetch List Of Values for Auto Trace Expression Fields
             * @request GET:/listOfValues/tableName/{tableName}/traceGroup/{traceGroup}/autoTraceExpressionFields
             */
            getAutoTraceExpressionFieldsLov: (hotelId, traceGroup, tableName, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/tableName/${tableName}/traceGroup/${traceGroup}/autoTraceExpressionFields`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getTemplateFiscalFolioParametersLOV</p>
             *
             * @tags LOV
             * @name GetTemplateFiscalFolioParametersLov
             * @summary Fetch List Of Values for Template Fiscal Folio Parameters
             * @request GET:/listOfValues/templateCode/{templateCode}/templateFiscalFolioParameters
             */
            getTemplateFiscalFolioParametersLov: (hotelId, templateCode, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/templateCode/${templateCode}/templateFiscalFolioParameters`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getArrangementCodesNumberLOV</p>
             *
             * @tags LOV
             * @name GetArrangementCodesNumberLov
             * @summary Fetch List Of Values for Arrangement Codes Number
             * @request GET:/listOfValues/type/{type}/arrangementCodesNumber
             */
            getArrangementCodesNumberLov: (hotelId, type, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/type/${type}/arrangementCodesNumber`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getEnrollmentMatchCommunicationTypeLOV</p>
             *
             * @tags LOV
             * @name GetEnrollmentMatchCommunicationTypeLov
             * @summary Fetch List Of Values for Enrollment Match Communication Type
             * @request GET:/listOfValues/type/{type}/enrollmentMatchCommunicationType
             */
            getEnrollmentMatchCommunicationTypeLov: (hotelId, type, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/type/${type}/enrollmentMatchCommunicationType`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getFolioGroupingCodesLOV</p>
             *
             * @tags LOV
             * @name GetFolioGroupingCodesLov
             * @summary Fetch List Of Values for Folio Grouping Codes
             * @request GET:/listOfValues/type/{type}/folioGroupingCodes
             */
            getFolioGroupingCodesLov: (hotelId, type, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/type/${type}/folioGroupingCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRevenueBucketsLOV</p>
             *
             * @tags LOV
             * @name GetRevenueBucketsLov
             * @summary Fetch List Of Values for Revenue Buckets
             * @request GET:/listOfValues/type/{type}/revenueBuckets
             */
            getRevenueBucketsLov: (hotelId, type, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/type/${type}/revenueBuckets`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getTrxCodeArrangementLOV</p>
             *
             * @tags LOV
             * @name GetTrxCodeArrangementLov
             * @summary Fetch List Of Values for Trx Code Arrangement
             * @request GET:/listOfValues/type/{type}/trxCodeArrangement
             */
            getTrxCodeArrangementLov: (hotelId, type, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/type/${type}/trxCodeArrangement`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getUdfAttributesLOV</p>
             *
             * @tags LOV
             * @name GetUdfAttributesLov
             * @summary Fetch List Of Values for Udf Attributes
             * @request GET:/listOfValues/udfType/{udfType}/udfCategory/{udfCategory}/udfAttributes
             */
            getUdfAttributesLov: (hotelId, udfCategory, udfType, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/udfType/${udfType}/udfCategory/${udfCategory}/udfAttributes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getCroUsersLOV</p>
             *
             * @tags LOV
             * @name GetCroUsersLov
             * @summary Fetch List Of Values for Cro Users
             * @request GET:/listOfValues/userId/{userId}/croUsers
             */
            getCroUsersLov: (hotelId, userId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/userId/${userId}/croUsers`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>validateListOfValues</p>
             *
             * @tags LOV
             * @name ValidateListOfValues
             * @summary Validate List Of Values
             * @request PUT:/listOfValues/validate
             */
            validateListOfValues: (hotelId, validateListOfValues, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/validate`, method: 'PUT', body: validateListOfValues, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getTraceDateCalcLOV</p>
             *
             * @tags LOV
             * @name GetTraceDateCalcLov
             * @summary Fetch List Of Values for Trace Date Calc
             * @request GET:/listOfValues/view/{view}/traceDateCalc
             */
            getTraceDateCalcLov: (hotelId, view, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/view/${view}/traceDateCalc`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getTraceFieldLOV</p>
             *
             * @tags LOV
             * @name GetTraceFieldLov
             * @summary Fetch List Of Values for Trace Field
             * @request GET:/listOfValues/view/{view}/traceField
             */
            getTraceFieldLov: (hotelId, view, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/view/${view}/traceField`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRepCalendarMonthsLOV</p>
             *
             * @tags LOV
             * @name GetRepCalendarMonthsLov
             * @summary Fetch List Of Values for Rep Calendar Months
             * @request GET:/listOfValues/year/{year}/repCalendarMonths
             */
            getRepCalendarMonthsLov: (hotelId, year, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/year/${year}/repCalendarMonths`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getRepCalendarWeeksLOV</p>
             *
             * @tags LOV
             * @name GetRepCalendarWeeksLov
             * @summary Fetch List Of Values for Rep Calendar Weeks
             * @request GET:/listOfValues/year/{year}/repCalendarWeeks
             */
            getRepCalendarWeeksLov: (hotelId, year, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/year/${year}/repCalendarWeeks`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getStatisticsYearsLOV</p>
             *
             * @tags LOV
             * @name GetStatisticsYearsLov
             * @summary Fetch List Of Values for Statistics Years
             * @request GET:/listOfValues/year/{year}/statisticsYears
             */
            getStatisticsYearsLov: (hotelId, year, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/year/${year}/statisticsYears`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getListOfValues</p>
             *
             * @tags LOV
             * @name GetListOfValues
             * @summary Fetch List Of Values for the given name of the LOV
             * @request GET:/listOfValues/{name}
             */
            getListOfValues: (hotelId, name, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/listOfValues/${name}`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.services = {
            /**
             * @description  <p><strong>OperationId:</strong>pingLOVService</p>
             *
             * @tags LOV
             * @name PingLovService
             * @summary Retrieve List of Values Service Version
             * @request GET:/services/listOfValues/status
             */
            pingLovService: (hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/services/listOfValues/status`, method: 'GET', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
    }
}
exports.Api = Api;
