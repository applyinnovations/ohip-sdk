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
exports.Api = exports.HttpClient = exports.ContentType = exports.RoomCodeCategoryType = exports.HeldByType = exports.UsedInModuleType = exports.BlockClassificationType = exports.RateProtectionType = exports.StatusColorType = void 0;
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
/** Simple type for specifying the block protection type. */
var RateProtectionType;
(function (RateProtectionType) {
    RateProtectionType["All"] = "All";
    RateProtectionType["Selected"] = "Selected";
    RateProtectionType["None"] = "None";
})(RateProtectionType = exports.RateProtectionType || (exports.RateProtectionType = {}));
/** Simple type for block instructions to be used in requests for fetching blocks. Valid status values are MASTER_BLOCK, MASTER_TOUR, FIT_MASTER, MASTER_ALLOCATION, MASTER_ITINERARY, LEAD_MASTER, REGULAR_BOOKING, SUB_BLOCK, SUB_TOUR, FIT_CONTRACT, SUB_ALLOCATION, SUB_ITINERARY, LEAD. */
var BlockClassificationType;
(function (BlockClassificationType) {
    BlockClassificationType["MasterBlock"] = "MasterBlock";
    BlockClassificationType["MasterTour"] = "MasterTour";
    BlockClassificationType["MasterAllocation"] = "MasterAllocation";
    BlockClassificationType["MasterItinerary"] = "MasterItinerary";
    BlockClassificationType["LeadMaster"] = "LeadMaster";
    BlockClassificationType["RegularBooking"] = "RegularBooking";
    BlockClassificationType["SubBlock"] = "SubBlock";
    BlockClassificationType["SubTour"] = "SubTour";
    BlockClassificationType["FitContract"] = "FitContract";
    BlockClassificationType["SubAllocation"] = "SubAllocation";
    BlockClassificationType["SubItinerary"] = "SubItinerary";
    BlockClassificationType["Lead"] = "Lead";
    BlockClassificationType["FitMaster"] = "FitMaster";
    BlockClassificationType["Opportunity"] = "Opportunity";
})(BlockClassificationType = exports.BlockClassificationType || (exports.BlockClassificationType = {}));
/** Simple type for indicating the module for which user wants to create the SellMessage. Valid module types are Look To Book Sales,Reservations,Blocks,Function Diary and Group Rooms Control. */
var UsedInModuleType;
(function (UsedInModuleType) {
    UsedInModuleType["Blocks"] = "Blocks";
    UsedInModuleType["Reservations"] = "Reservations";
    UsedInModuleType["FunctionDiary"] = "FunctionDiary";
    UsedInModuleType["LookToBookSales"] = "LookToBookSales";
    UsedInModuleType["GroupRoomsControl"] = "GroupRoomsControl";
})(UsedInModuleType = exports.UsedInModuleType || (exports.UsedInModuleType = {}));
/** Type of the entity that is requesting for the item hold. */
var HeldByType;
(function (HeldByType) {
    HeldByType["Event"] = "Event";
    HeldByType["Reservation"] = "Reservation";
    HeldByType["Allotment"] = "Allotment";
})(HeldByType = exports.HeldByType || (exports.HeldByType = {}));
/** Used for Room code type. eg. Code="RoomType" or "RoomClass" */
var RoomCodeCategoryType;
(function (RoomCodeCategoryType) {
    RoomCodeCategoryType["RoomType"] = "RoomType";
    RoomCodeCategoryType["RoomClass"] = "RoomClass";
})(RoomCodeCategoryType = exports.RoomCodeCategoryType || (exports.RoomCodeCategoryType = {}));
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
        this.instance = axios_1.default.create(Object.assign(Object.assign({}, axiosConfig), { baseURL: new URL('/inv/v1', axiosConfig.baseURL).toString() }));
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
 * @title OPERA Cloud Inventory API
 * @version 22.3.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /inv/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs to cater for Inventory functionality in OPERA Cloud. This includes sell limits for date ranges, viewing and updating the property&apos;s inventory, as well as item inventory (such as rollaways, microwaves etc.).<br /><br /> Compatible with OPERA Cloud release 22.3.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
class Api extends HttpClient {
    constructor() {
        super(...arguments);
        this.hotels = {
            /**
             * @description Use this API to get block statistics on a per-day basis across a specified date range. The result includes a summary section of rooms booked by status by date, details on deduct and non-deduct rooms booked per day, and Sales Allowance and House Availability figures per day. The details section of the results include block details such as name, block, code, start and end date, owner, and more. It also shows a breakdown of blocked picked-up and available rooms per day per block. The result set is used to feed the GRC (Group Rooms Control) page in the OPERA UI. <p><strong>OperationId:</strong>getBlockInventoryStatistics</p>
             *
             * @tags INVStats
             * @name GetBlockInventoryStatistics
             * @summary Get block inventory statistics
             * @request GET:/hotels/{hotelId}/blockInventoryStatistics
             */
            getBlockInventoryStatistics: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/blockInventoryStatistics`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to retrieve the inventory for a specified hotel. Narrow down your results using the query parameters such as a date range, room type, room class, and/or tentative inventory included. <p><strong>OperationId:</strong>getHotelInventory</p>
             *
             * @tags Inventory
             * @name GetHotelInventory
             * @summary Get hotel inventory
             * @request GET:/hotels/{hotelId}/hotelInventory
             */
            getHotelInventory: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/hotelInventory`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to retrieve the inventory data for a specified hotel. Narrow down your results using the query parameters such as a date range, room type, room class, and/or tentative inventory included. Maximum days limit with a single request is 30 days.<p><strong>OperationId:</strong>getInventoryStatistics</p>
             *
             * @tags INVStats
             * @name GetInventoryStatistics
             * @summary Get hotel inventory
             * @request GET:/hotels/{hotelId}/inventoryStatistics
             */
            getInventoryStatistics: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/inventoryStatistics`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This will fetch a hotels Item inventory for a specified date range that you can provided in the request. <p><strong>OperationId:</strong>getItemInventory</p>
             *
             * @tags Inventory
             * @name GetItemInventory
             * @summary Get item inventory
             * @request GET:/hotels/{hotelId}/itemInventory
             */
            getItemInventory: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/itemInventory`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to hold Item Inventory. <p><strong>OperationId:</strong>postHoldItemInventory</p>
             *
             * @tags Inventory
             * @name PostHoldItemInventory
             * @summary Hold item inventory
             * @request POST:/hotels/{hotelId}/itemInventoryHold
             */
            postHoldItemInventory: (hotelId, holdItemInventory, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/itemInventoryHold`, method: 'POST', body: holdItemInventory, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Fetch item inventory that is currently being held. <p><strong>OperationId:</strong>getHoldItemsInventory</p>
             *
             * @tags Inventory
             * @name GetHoldItemsInventory
             * @summary Get items inventory that are held
             * @request GET:/hotels/{hotelId}/itemInventoryHold
             */
            getHoldItemsInventory: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/itemInventoryHold`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can update item inventory that is being held using this API. <p><strong>OperationId:</strong>putHoldItemsInventory</p>
             *
             * @tags Inventory
             * @name PutHoldItemsInventory
             * @summary update items inventory that are held
             * @request PUT:/hotels/{hotelId}/itemInventoryHold
             */
            putHoldItemsInventory: (hotelId, holdItemInventory, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/itemInventoryHold`, method: 'PUT', body: holdItemInventory, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to create sell limits in OPERA by date. <p><strong>OperationId:</strong>changeSellLimitByDate</p>
             *
             * @tags Inventory
             * @name ChangeSellLimitByDate
             * @summary Set sell limits by date
             * @request PUT:/hotels/{hotelId}/sellLimits
             */
            changeSellLimitByDate: (hotelId, sellLimit, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/sellLimits`, method: 'PUT', body: sellLimit, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to create sell limits in OPERA by date range. <p><strong>OperationId:</strong>changeSellLimitByDateRange</p>
             *
             * @tags Inventory
             * @name ChangeSellLimitByDateRange
             * @summary Set sell limits by date range
             * @request PUT:/hotels/{hotelId}/sellLimitsByDateRange
             */
            changeSellLimitByDateRange: (hotelId, sellLimitByRange, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/sellLimitsByDateRange`, method: 'PUT', body: sellLimitByRange, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.releasedItemInventory = {
            /**
             * @description This API will release item inventory that has been held. <p><strong>OperationId:</strong>putItemInventoryHold</p>
             *
             * @tags Inventory
             * @name PutItemInventoryHold
             * @summary Release item inventory held
             * @request PUT:/releasedItemInventory
             */
            putItemInventoryHold: (hotelId, releaseItemInventoryHold, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/releasedItemInventory`, method: 'PUT', body: releaseItemInventoryHold, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.services = {
            /**
             * @description Clearing of cache in inventory statistics service <p><strong>OperationId:</strong>deleteinvStatsService</p>
             *
             * @tags INVStats
             * @name DeleteinvStatsService
             * @summary Clear Cache
             * @request DELETE:/services/invStatsService/cache
             */
            deleteinvStatsService: (hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/services/invStatsService/cache`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Check inventory statistics service <p><strong>OperationId:</strong>pinginvStatsService</p>
             *
             * @tags INVStats
             * @name PinginvStatsService
             * @summary Ping
             * @request GET:/services/invStatsService/status
             */
            pinginvStatsService: (hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/services/invStatsService/status`, method: 'GET', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API facilitates clearing of cache in inventory service <p><strong>OperationId:</strong>deleteInventoryServiceCache</p>
             *
             * @tags Inventory
             * @name DeleteInventoryServiceCache
             * @summary Clear Cache
             * @request DELETE:/services/inventory/cache
             */
            deleteInventoryServiceCache: (hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/services/inventory/cache`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API facilitates status check of inventory service <p><strong>OperationId:</strong>pingInventoryService</p>
             *
             * @tags Inventory
             * @name PingInventoryService
             * @summary Ping
             * @request GET:/services/inventory/status
             */
            pingInventoryService: (hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/services/inventory/status`, method: 'GET', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
    }
}
exports.Api = Api;
