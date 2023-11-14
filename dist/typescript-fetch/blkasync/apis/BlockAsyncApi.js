"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block Reservation Asynchronous API
 * APIs to cater Block Reservation related asynchronous functionality in OPERA.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
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
exports.BlockAsyncApi = void 0;
const runtime = __importStar(require("../runtime"));
const index_1 = require("../models/index");
/**
 *
 */
class BlockAsyncApi extends runtime.BaseAPI {
    /**
     * This API will fetch Block allocation information for a hotel, and specified date range.  The block allocated inventory, rates and room type statistics are returned as part of the response. <p><strong>OperationId:</strong>getBlockAllocationSummary</p>
     * This API returns a hotel\'s block allocation summary for a scheduled process.
     */
    getBlockAllocationSummaryRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.requestId === null || requestParameters.requestId === undefined) {
                throw new runtime.RequiredError('requestId', 'Required parameter requestParameters.requestId was null or undefined when calling getBlockAllocationSummary.');
            }
            if (requestParameters.hotelId === null || requestParameters.hotelId === undefined) {
                throw new runtime.RequiredError('hotelId', 'Required parameter requestParameters.hotelId was null or undefined when calling getBlockAllocationSummary.');
            }
            if (requestParameters.extSystemCode === null || requestParameters.extSystemCode === undefined) {
                throw new runtime.RequiredError('extSystemCode', 'Required parameter requestParameters.extSystemCode was null or undefined when calling getBlockAllocationSummary.');
            }
            if (requestParameters.authorization === null || requestParameters.authorization === undefined) {
                throw new runtime.RequiredError('authorization', 'Required parameter requestParameters.authorization was null or undefined when calling getBlockAllocationSummary.');
            }
            if (requestParameters.xAppKey === null || requestParameters.xAppKey === undefined) {
                throw new runtime.RequiredError('xAppKey', 'Required parameter requestParameters.xAppKey was null or undefined when calling getBlockAllocationSummary.');
            }
            if (requestParameters.xHotelid === null || requestParameters.xHotelid === undefined) {
                throw new runtime.RequiredError('xHotelid', 'Required parameter requestParameters.xHotelid was null or undefined when calling getBlockAllocationSummary.');
            }
            const queryParameters = {};
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
            if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
                headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
            }
            const response = yield this.request({
                path: `/externalSystems/{extSystemCode}/hotels/{hotelId}/blocks/allocationSummary/{requestId}`.replace(`{${"requestId"}}`, encodeURIComponent(String(requestParameters.requestId))).replace(`{${"hotelId"}}`, encodeURIComponent(String(requestParameters.hotelId))).replace(`{${"extSystemCode"}}`, encodeURIComponent(String(requestParameters.extSystemCode))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.BlockAllocationSummaryFromJSON)(jsonValue));
        });
    }
    /**
     * This API will fetch Block allocation information for a hotel, and specified date range.  The block allocated inventory, rates and room type statistics are returned as part of the response. <p><strong>OperationId:</strong>getBlockAllocationSummary</p>
     * This API returns a hotel\'s block allocation summary for a scheduled process.
     */
    getBlockAllocationSummary(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getBlockAllocationSummaryRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     *  <p><strong>OperationId:</strong>getBlockAllocationSummaryProcessStatus</p>
     * This API returns the status of asynchronous process scheduled for given id.
     */
    getBlockAllocationSummaryProcessStatusRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.requestId === null || requestParameters.requestId === undefined) {
                throw new runtime.RequiredError('requestId', 'Required parameter requestParameters.requestId was null or undefined when calling getBlockAllocationSummaryProcessStatus.');
            }
            if (requestParameters.extSystemCode === null || requestParameters.extSystemCode === undefined) {
                throw new runtime.RequiredError('extSystemCode', 'Required parameter requestParameters.extSystemCode was null or undefined when calling getBlockAllocationSummaryProcessStatus.');
            }
            if (requestParameters.hotelId === null || requestParameters.hotelId === undefined) {
                throw new runtime.RequiredError('hotelId', 'Required parameter requestParameters.hotelId was null or undefined when calling getBlockAllocationSummaryProcessStatus.');
            }
            if (requestParameters.authorization === null || requestParameters.authorization === undefined) {
                throw new runtime.RequiredError('authorization', 'Required parameter requestParameters.authorization was null or undefined when calling getBlockAllocationSummaryProcessStatus.');
            }
            if (requestParameters.xAppKey === null || requestParameters.xAppKey === undefined) {
                throw new runtime.RequiredError('xAppKey', 'Required parameter requestParameters.xAppKey was null or undefined when calling getBlockAllocationSummaryProcessStatus.');
            }
            if (requestParameters.xHotelid === null || requestParameters.xHotelid === undefined) {
                throw new runtime.RequiredError('xHotelid', 'Required parameter requestParameters.xHotelid was null or undefined when calling getBlockAllocationSummaryProcessStatus.');
            }
            const queryParameters = {};
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
            if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
                headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
            }
            const response = yield this.request({
                path: `/externalSystems/{extSystemCode}/hotels/{hotelId}/blocks/allocationSummary/{requestId}`.replace(`{${"requestId"}}`, encodeURIComponent(String(requestParameters.requestId))).replace(`{${"extSystemCode"}}`, encodeURIComponent(String(requestParameters.extSystemCode))).replace(`{${"hotelId"}}`, encodeURIComponent(String(requestParameters.hotelId))),
                method: 'HEAD',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     *  <p><strong>OperationId:</strong>getBlockAllocationSummaryProcessStatus</p>
     * This API returns the status of asynchronous process scheduled for given id.
     */
    getBlockAllocationSummaryProcessStatus(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getBlockAllocationSummaryProcessStatusRaw(requestParameters, initOverrides);
        });
    }
    /**
     * This API will fetch Block allocation information for a hotel, and specified date range.  The block allocated inventory, rates and room type statistics are returned as part of the response. <p><strong>OperationId:</strong>startBlockAllocationSummaryProcess</p>
     * This API facilitates fetching block allocation summary for a Hotel.
     */
    startBlockAllocationSummaryProcessRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.hotelId === null || requestParameters.hotelId === undefined) {
                throw new runtime.RequiredError('hotelId', 'Required parameter requestParameters.hotelId was null or undefined when calling startBlockAllocationSummaryProcess.');
            }
            if (requestParameters.extSystemCode === null || requestParameters.extSystemCode === undefined) {
                throw new runtime.RequiredError('extSystemCode', 'Required parameter requestParameters.extSystemCode was null or undefined when calling startBlockAllocationSummaryProcess.');
            }
            if (requestParameters.authorization === null || requestParameters.authorization === undefined) {
                throw new runtime.RequiredError('authorization', 'Required parameter requestParameters.authorization was null or undefined when calling startBlockAllocationSummaryProcess.');
            }
            if (requestParameters.xAppKey === null || requestParameters.xAppKey === undefined) {
                throw new runtime.RequiredError('xAppKey', 'Required parameter requestParameters.xAppKey was null or undefined when calling startBlockAllocationSummaryProcess.');
            }
            if (requestParameters.xHotelid === null || requestParameters.xHotelid === undefined) {
                throw new runtime.RequiredError('xHotelid', 'Required parameter requestParameters.xHotelid was null or undefined when calling startBlockAllocationSummaryProcess.');
            }
            if (requestParameters.criteria === null || requestParameters.criteria === undefined) {
                throw new runtime.RequiredError('criteria', 'Required parameter requestParameters.criteria was null or undefined when calling startBlockAllocationSummaryProcess.');
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
            if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
                headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
            }
            const response = yield this.request({
                path: `/externalSystems/{extSystemCode}/hotels/{hotelId}/blocks/allocationSummary`.replace(`{${"hotelId"}}`, encodeURIComponent(String(requestParameters.hotelId))).replace(`{${"extSystemCode"}}`, encodeURIComponent(String(requestParameters.extSystemCode))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.CriteriaToJSON)(requestParameters.criteria),
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * This API will fetch Block allocation information for a hotel, and specified date range.  The block allocated inventory, rates and room type statistics are returned as part of the response. <p><strong>OperationId:</strong>startBlockAllocationSummaryProcess</p>
     * This API facilitates fetching block allocation summary for a Hotel.
     */
    startBlockAllocationSummaryProcess(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.startBlockAllocationSummaryProcessRaw(requestParameters, initOverrides);
        });
    }
}
exports.BlockAsyncApi = BlockAsyncApi;