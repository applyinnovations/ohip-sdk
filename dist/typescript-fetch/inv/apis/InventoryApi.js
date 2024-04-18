"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Inventory API
 * APIs to cater for Inventory functionality in OPERA Cloud. This includes sell limits for date ranges, viewing and updating the property&apos;s inventory, as well as item inventory (such as rollaways, microwaves etc.).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.InventoryApi = void 0;
const runtime = __importStar(require("../runtime"));
const index_1 = require("../models/index");
/**
 *
 */
class InventoryApi extends runtime.BaseAPI {
    /**
     * You can use this API to create sell limits in OPERA by date. <p><strong>OperationId:</strong>changeSellLimitByDate</p>
     * Set sell limits by date
     */
    changeSellLimitByDateRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.hotelId === null || requestParameters.hotelId === undefined) {
                throw new runtime.RequiredError('hotelId', 'Required parameter requestParameters.hotelId was null or undefined when calling changeSellLimitByDate.');
            }
            if (requestParameters.sellLimit === null || requestParameters.sellLimit === undefined) {
                throw new runtime.RequiredError('sellLimit', 'Required parameter requestParameters.sellLimit was null or undefined when calling changeSellLimitByDate.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json;charset=UTF-8';
            if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
                headerParameters['authorization'] = String(requestParameters.authorization);
            }
            if (requestParameters.xAppKey !== undefined && requestParameters.xAppKey !== null) {
                headerParameters['x-app-key'] = String(requestParameters.xAppKey);
            }
            if (requestParameters.xHotelid !== undefined && requestParameters.xHotelid !== null) {
                headerParameters['x-hotelid'] = String(requestParameters.xHotelid);
            }
            if (requestParameters.xExternalsystem !== undefined && requestParameters.xExternalsystem !== null) {
                headerParameters['x-externalsystem'] = String(requestParameters.xExternalsystem);
            }
            if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
                headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
            }
            const response = yield this.request({
                path: `/hotels/{hotelId}/sellLimits`.replace(`{${"hotelId"}}`, encodeURIComponent(String(requestParameters.hotelId))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.SellLimitToJSON)(requestParameters.sellLimit),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.SellLimitResponseFromJSON)(jsonValue));
        });
    }
    /**
     * You can use this API to create sell limits in OPERA by date. <p><strong>OperationId:</strong>changeSellLimitByDate</p>
     * Set sell limits by date
     */
    changeSellLimitByDate(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.changeSellLimitByDateRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * You can use this API to create sell limits in OPERA by date range. <p><strong>OperationId:</strong>changeSellLimitByDateRange</p>
     * Set sell limits by date range
     */
    changeSellLimitByDateRangeRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.hotelId === null || requestParameters.hotelId === undefined) {
                throw new runtime.RequiredError('hotelId', 'Required parameter requestParameters.hotelId was null or undefined when calling changeSellLimitByDateRange.');
            }
            if (requestParameters.sellLimitByRange === null || requestParameters.sellLimitByRange === undefined) {
                throw new runtime.RequiredError('sellLimitByRange', 'Required parameter requestParameters.sellLimitByRange was null or undefined when calling changeSellLimitByDateRange.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json;charset=UTF-8';
            if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
                headerParameters['authorization'] = String(requestParameters.authorization);
            }
            if (requestParameters.xAppKey !== undefined && requestParameters.xAppKey !== null) {
                headerParameters['x-app-key'] = String(requestParameters.xAppKey);
            }
            if (requestParameters.xHotelid !== undefined && requestParameters.xHotelid !== null) {
                headerParameters['x-hotelid'] = String(requestParameters.xHotelid);
            }
            if (requestParameters.xExternalsystem !== undefined && requestParameters.xExternalsystem !== null) {
                headerParameters['x-externalsystem'] = String(requestParameters.xExternalsystem);
            }
            if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
                headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
            }
            const response = yield this.request({
                path: `/hotels/{hotelId}/sellLimitsByDateRange`.replace(`{${"hotelId"}}`, encodeURIComponent(String(requestParameters.hotelId))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.SellLimitByRangeToJSON)(requestParameters.sellLimitByRange),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.SellLimitByDateResponseFromJSON)(jsonValue));
        });
    }
    /**
     * You can use this API to create sell limits in OPERA by date range. <p><strong>OperationId:</strong>changeSellLimitByDateRange</p>
     * Set sell limits by date range
     */
    changeSellLimitByDateRange(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.changeSellLimitByDateRangeRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Fetch item inventory that is currently being held. <p><strong>OperationId:</strong>getHoldItemsInventory</p>
     * Get items inventory that are held
     */
    getHoldItemsInventoryRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.hotelId === null || requestParameters.hotelId === undefined) {
                throw new runtime.RequiredError('hotelId', 'Required parameter requestParameters.hotelId was null or undefined when calling getHoldItemsInventory.');
            }
            const queryParameters = {};
            if (requestParameters.itemHoldId) {
                queryParameters['itemHoldId'] = requestParameters.itemHoldId;
            }
            const headerParameters = {};
            if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
                headerParameters['authorization'] = String(requestParameters.authorization);
            }
            if (requestParameters.xAppKey !== undefined && requestParameters.xAppKey !== null) {
                headerParameters['x-app-key'] = String(requestParameters.xAppKey);
            }
            if (requestParameters.xHotelid !== undefined && requestParameters.xHotelid !== null) {
                headerParameters['x-hotelid'] = String(requestParameters.xHotelid);
            }
            if (requestParameters.xExternalsystem !== undefined && requestParameters.xExternalsystem !== null) {
                headerParameters['x-externalsystem'] = String(requestParameters.xExternalsystem);
            }
            if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
                headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
            }
            const response = yield this.request({
                path: `/hotels/{hotelId}/itemInventoryHold`.replace(`{${"hotelId"}}`, encodeURIComponent(String(requestParameters.hotelId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.HoldItemsInventoryFromJSON)(jsonValue));
        });
    }
    /**
     * Fetch item inventory that is currently being held. <p><strong>OperationId:</strong>getHoldItemsInventory</p>
     * Get items inventory that are held
     */
    getHoldItemsInventory(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getHoldItemsInventoryRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * You can use this API to retrieve the inventory for a specified hotel. Narrow down your results using the query parameters such as a date range, room type, room class, and/or tentative inventory included. <p><strong>OperationId:</strong>getHotelInventory</p>
     * Get hotel inventory
     */
    getHotelInventoryRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.hotelId === null || requestParameters.hotelId === undefined) {
                throw new runtime.RequiredError('hotelId', 'Required parameter requestParameters.hotelId was null or undefined when calling getHotelInventory.');
            }
            if (requestParameters.dateRangeStart === null || requestParameters.dateRangeStart === undefined) {
                throw new runtime.RequiredError('dateRangeStart', 'Required parameter requestParameters.dateRangeStart was null or undefined when calling getHotelInventory.');
            }
            if (requestParameters.dateRangeEnd === null || requestParameters.dateRangeEnd === undefined) {
                throw new runtime.RequiredError('dateRangeEnd', 'Required parameter requestParameters.dateRangeEnd was null or undefined when calling getHotelInventory.');
            }
            if (requestParameters.roomCountRequested === null || requestParameters.roomCountRequested === undefined) {
                throw new runtime.RequiredError('roomCountRequested', 'Required parameter requestParameters.roomCountRequested was null or undefined when calling getHotelInventory.');
            }
            const queryParameters = {};
            if (requestParameters.dateRangeStart !== undefined) {
                queryParameters['dateRangeStart'] = requestParameters.dateRangeStart;
            }
            if (requestParameters.dateRangeEnd !== undefined) {
                queryParameters['dateRangeEnd'] = requestParameters.dateRangeEnd;
            }
            if (requestParameters.roomCountRequested !== undefined) {
                queryParameters['roomCountRequested'] = requestParameters.roomCountRequested;
            }
            if (requestParameters.includeTentativeInventory !== undefined) {
                queryParameters['includeTentativeInventory'] = requestParameters.includeTentativeInventory;
            }
            if (requestParameters.dailyInventory !== undefined) {
                queryParameters['dailyInventory'] = requestParameters.dailyInventory;
            }
            if (requestParameters.houseLevel !== undefined) {
                queryParameters['houseLevel'] = requestParameters.houseLevel;
            }
            if (requestParameters.roomTypes) {
                queryParameters['roomTypes'] = requestParameters.roomTypes;
            }
            if (requestParameters.roomClasses) {
                queryParameters['roomClasses'] = requestParameters.roomClasses;
            }
            const headerParameters = {};
            if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
                headerParameters['authorization'] = String(requestParameters.authorization);
            }
            if (requestParameters.xAppKey !== undefined && requestParameters.xAppKey !== null) {
                headerParameters['x-app-key'] = String(requestParameters.xAppKey);
            }
            if (requestParameters.xHotelid !== undefined && requestParameters.xHotelid !== null) {
                headerParameters['x-hotelid'] = String(requestParameters.xHotelid);
            }
            if (requestParameters.xExternalsystem !== undefined && requestParameters.xExternalsystem !== null) {
                headerParameters['x-externalsystem'] = String(requestParameters.xExternalsystem);
            }
            if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
                headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
            }
            const response = yield this.request({
                path: `/hotels/{hotelId}/hotelInventory`.replace(`{${"hotelId"}}`, encodeURIComponent(String(requestParameters.hotelId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.HotelInventoryFromJSON)(jsonValue));
        });
    }
    /**
     * You can use this API to retrieve the inventory for a specified hotel. Narrow down your results using the query parameters such as a date range, room type, room class, and/or tentative inventory included. <p><strong>OperationId:</strong>getHotelInventory</p>
     * Get hotel inventory
     */
    getHotelInventory(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getHotelInventoryRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * This will fetch a hotels Item inventory for a specified date range that you can provided in the request. <p><strong>OperationId:</strong>getItemInventory</p>
     * Get item inventory
     */
    getItemInventoryRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.hotelId === null || requestParameters.hotelId === undefined) {
                throw new runtime.RequiredError('hotelId', 'Required parameter requestParameters.hotelId was null or undefined when calling getItemInventory.');
            }
            const queryParameters = {};
            if (requestParameters.startDate !== undefined) {
                queryParameters['startDate'] = requestParameters.startDate;
            }
            if (requestParameters.endDate !== undefined) {
                queryParameters['endDate'] = requestParameters.endDate;
            }
            if (requestParameters.duration !== undefined) {
                queryParameters['duration'] = requestParameters.duration;
            }
            if (requestParameters.endTime !== undefined) {
                queryParameters['endTime'] = requestParameters.endTime;
            }
            if (requestParameters.startTime !== undefined) {
                queryParameters['startTime'] = requestParameters.startTime;
            }
            if (requestParameters.itemClass !== undefined) {
                queryParameters['itemClass'] = requestParameters.itemClass;
            }
            if (requestParameters.itemPool) {
                queryParameters['itemPool'] = requestParameters.itemPool;
            }
            if (requestParameters.itemCode) {
                queryParameters['itemCode'] = requestParameters.itemCode;
            }
            if (requestParameters.defaultDuration !== undefined) {
                queryParameters['defaultDuration'] = requestParameters.defaultDuration;
            }
            if (requestParameters.fixedCharge !== undefined) {
                queryParameters['fixedCharge'] = requestParameters.fixedCharge;
            }
            if (requestParameters.outsideStay !== undefined) {
                queryParameters['outsideStay'] = requestParameters.outsideStay;
            }
            if (requestParameters.requiredForBooking !== undefined) {
                queryParameters['requiredForBooking'] = requestParameters.requiredForBooking;
            }
            if (requestParameters.sellInEvent !== undefined) {
                queryParameters['sellInEvent'] = requestParameters.sellInEvent;
            }
            if (requestParameters.sellInReservation !== undefined) {
                queryParameters['sellInReservation'] = requestParameters.sellInReservation;
            }
            if (requestParameters.sellSeparate !== undefined) {
                queryParameters['sellSeparate'] = requestParameters.sellSeparate;
            }
            if (requestParameters.welcomeOffer !== undefined) {
                queryParameters['welcomeOffer'] = requestParameters.welcomeOffer;
            }
            const headerParameters = {};
            if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
                headerParameters['authorization'] = String(requestParameters.authorization);
            }
            if (requestParameters.xAppKey !== undefined && requestParameters.xAppKey !== null) {
                headerParameters['x-app-key'] = String(requestParameters.xAppKey);
            }
            if (requestParameters.xHotelid !== undefined && requestParameters.xHotelid !== null) {
                headerParameters['x-hotelid'] = String(requestParameters.xHotelid);
            }
            if (requestParameters.xExternalsystem !== undefined && requestParameters.xExternalsystem !== null) {
                headerParameters['x-externalsystem'] = String(requestParameters.xExternalsystem);
            }
            if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
                headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
            }
            const response = yield this.request({
                path: `/hotels/{hotelId}/itemInventory`.replace(`{${"hotelId"}}`, encodeURIComponent(String(requestParameters.hotelId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.ItemInventoryFromJSON)(jsonValue));
        });
    }
    /**
     * This will fetch a hotels Item inventory for a specified date range that you can provided in the request. <p><strong>OperationId:</strong>getItemInventory</p>
     * Get item inventory
     */
    getItemInventory(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getItemInventoryRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Use this API to hold Item Inventory. <p><strong>OperationId:</strong>postHoldItemInventory</p>
     * Hold item inventory
     */
    postHoldItemInventoryRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.hotelId === null || requestParameters.hotelId === undefined) {
                throw new runtime.RequiredError('hotelId', 'Required parameter requestParameters.hotelId was null or undefined when calling postHoldItemInventory.');
            }
            if (requestParameters.holdItemInventory === null || requestParameters.holdItemInventory === undefined) {
                throw new runtime.RequiredError('holdItemInventory', 'Required parameter requestParameters.holdItemInventory was null or undefined when calling postHoldItemInventory.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json;charset=UTF-8';
            if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
                headerParameters['authorization'] = String(requestParameters.authorization);
            }
            if (requestParameters.xAppKey !== undefined && requestParameters.xAppKey !== null) {
                headerParameters['x-app-key'] = String(requestParameters.xAppKey);
            }
            if (requestParameters.xHotelid !== undefined && requestParameters.xHotelid !== null) {
                headerParameters['x-hotelid'] = String(requestParameters.xHotelid);
            }
            if (requestParameters.xExternalsystem !== undefined && requestParameters.xExternalsystem !== null) {
                headerParameters['x-externalsystem'] = String(requestParameters.xExternalsystem);
            }
            if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
                headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
            }
            const response = yield this.request({
                path: `/hotels/{hotelId}/itemInventoryHold`.replace(`{${"hotelId"}}`, encodeURIComponent(String(requestParameters.hotelId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.HoldItemInventoryToJSON)(requestParameters.holdItemInventory),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.StatusFromJSON)(jsonValue));
        });
    }
    /**
     * Use this API to hold Item Inventory. <p><strong>OperationId:</strong>postHoldItemInventory</p>
     * Hold item inventory
     */
    postHoldItemInventory(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.postHoldItemInventoryRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * You can update item inventory that is being held using this API. <p><strong>OperationId:</strong>putHoldItemsInventory</p>
     * update items inventory that are held
     */
    putHoldItemsInventoryRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.hotelId === null || requestParameters.hotelId === undefined) {
                throw new runtime.RequiredError('hotelId', 'Required parameter requestParameters.hotelId was null or undefined when calling putHoldItemsInventory.');
            }
            if (requestParameters.holdItemInventory === null || requestParameters.holdItemInventory === undefined) {
                throw new runtime.RequiredError('holdItemInventory', 'Required parameter requestParameters.holdItemInventory was null or undefined when calling putHoldItemsInventory.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json;charset=UTF-8';
            if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
                headerParameters['authorization'] = String(requestParameters.authorization);
            }
            if (requestParameters.xAppKey !== undefined && requestParameters.xAppKey !== null) {
                headerParameters['x-app-key'] = String(requestParameters.xAppKey);
            }
            if (requestParameters.xHotelid !== undefined && requestParameters.xHotelid !== null) {
                headerParameters['x-hotelid'] = String(requestParameters.xHotelid);
            }
            if (requestParameters.xExternalsystem !== undefined && requestParameters.xExternalsystem !== null) {
                headerParameters['x-externalsystem'] = String(requestParameters.xExternalsystem);
            }
            if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
                headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
            }
            const response = yield this.request({
                path: `/hotels/{hotelId}/itemInventoryHold`.replace(`{${"hotelId"}}`, encodeURIComponent(String(requestParameters.hotelId))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.HoldItemInventoryToJSON)(requestParameters.holdItemInventory),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.HoldItemInventoryFromJSON)(jsonValue));
        });
    }
    /**
     * You can update item inventory that is being held using this API. <p><strong>OperationId:</strong>putHoldItemsInventory</p>
     * update items inventory that are held
     */
    putHoldItemsInventory(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.putHoldItemsInventoryRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * This API will release item inventory that has been held. <p><strong>OperationId:</strong>putItemInventoryHold</p>
     * Release item inventory held
     */
    putItemInventoryHoldRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.releaseItemInventoryHold === null || requestParameters.releaseItemInventoryHold === undefined) {
                throw new runtime.RequiredError('releaseItemInventoryHold', 'Required parameter requestParameters.releaseItemInventoryHold was null or undefined when calling putItemInventoryHold.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json;charset=UTF-8';
            if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
                headerParameters['authorization'] = String(requestParameters.authorization);
            }
            if (requestParameters.xAppKey !== undefined && requestParameters.xAppKey !== null) {
                headerParameters['x-app-key'] = String(requestParameters.xAppKey);
            }
            if (requestParameters.xHotelid !== undefined && requestParameters.xHotelid !== null) {
                headerParameters['x-hotelid'] = String(requestParameters.xHotelid);
            }
            if (requestParameters.xExternalsystem !== undefined && requestParameters.xExternalsystem !== null) {
                headerParameters['x-externalsystem'] = String(requestParameters.xExternalsystem);
            }
            if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
                headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
            }
            const response = yield this.request({
                path: `/releasedItemInventory`,
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.ReleaseItemInventoryHoldToJSON)(requestParameters.releaseItemInventoryHold),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.ReleasedItemInventoryHeldFromJSON)(jsonValue));
        });
    }
    /**
     * This API will release item inventory that has been held. <p><strong>OperationId:</strong>putItemInventoryHold</p>
     * Release item inventory held
     */
    putItemInventoryHold(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.putItemInventoryHoldRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.InventoryApi = InventoryApi;