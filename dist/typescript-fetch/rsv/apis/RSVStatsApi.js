"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
exports.GetReservationStatisticsReportCodeEnum = exports.RSVStatsApi = void 0;
const runtime = __importStar(require("../runtime"));
const index_1 = require("../models/index");
/**
 *
 */
class RSVStatsApi extends runtime.BaseAPI {
    /**
     * Get block Reservation statistics by date and room pool <p><strong>OperationId:</strong>getBlockReservationStatisticsByDateAndRoomPool</p>
     * Get block Reservation Statistics
     */
    getBlockReservationStatisticsByDateAndRoomPoolRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.excludeBlocksWithoutQuoteID !== undefined) {
                queryParameters['excludeBlocksWithoutQuoteID'] = requestParameters.excludeBlocksWithoutQuoteID;
            }
            if (requestParameters.startDate !== undefined) {
                queryParameters['startDate'] = requestParameters.startDate;
            }
            if (requestParameters.endDate !== undefined) {
                queryParameters['endDate'] = requestParameters.endDate;
            }
            if (requestParameters.duration !== undefined) {
                queryParameters['duration'] = requestParameters.duration;
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
                path: `/blockReservationStatisticsByDateAndRoomPool`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.BlockReservationStatisticsFromJSON)(jsonValue));
        });
    }
    /**
     * Get block Reservation statistics by date and room pool <p><strong>OperationId:</strong>getBlockReservationStatisticsByDateAndRoomPool</p>
     * Get block Reservation Statistics
     */
    getBlockReservationStatisticsByDateAndRoomPool(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getBlockReservationStatisticsByDateAndRoomPoolRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Use this API to get Reservation pace. <p><strong>OperationId:</strong>getReservationPace</p>
     * Get Reservation pace
     */
    getReservationPaceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.hotelId !== undefined) {
                queryParameters['hotelId'] = requestParameters.hotelId;
            }
            if (requestParameters.stayDate !== undefined) {
                queryParameters['stayDate'] = requestParameters.stayDate;
            }
            if (requestParameters.leadDays !== undefined) {
                queryParameters['leadDays'] = requestParameters.leadDays;
            }
            if (requestParameters.channels !== undefined) {
                queryParameters['channels'] = requestParameters.channels;
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
                path: `/reservations/pace`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.ReservationPaceFromJSON)(jsonValue));
        });
    }
    /**
     * Use this API to get Reservation pace. <p><strong>OperationId:</strong>getReservationPace</p>
     * Get Reservation pace
     */
    getReservationPace(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getReservationPaceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Use this API to get a statistical breakdown of reservations such as inventory and revenue data.<p><strong>OperationId:</strong>getReservationStatistics</p>
     * Get reservation statistics
     */
    getReservationStatisticsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.chainName) {
                queryParameters['chainName'] = requestParameters.chainName;
            }
            if (requestParameters.hotelCityCode) {
                queryParameters['hotelCityCode'] = requestParameters.hotelCityCode;
            }
            if (requestParameters.hotelId) {
                queryParameters['hotelId'] = requestParameters.hotelId;
            }
            if (requestParameters.hotelCodeContext) {
                queryParameters['hotelCodeContext'] = requestParameters.hotelCodeContext;
            }
            if (requestParameters.hotelName) {
                queryParameters['hotelName'] = requestParameters.hotelName;
            }
            if (requestParameters.requestedReportsTypeEndDate) {
                queryParameters['requestedReportsTypeEndDate'] = requestParameters.requestedReportsTypeEndDate;
            }
            if (requestParameters.fiscalDate) {
                queryParameters['fiscalDate'] = requestParameters.fiscalDate;
            }
            if (requestParameters.reportCode) {
                queryParameters['reportCode'] = requestParameters.reportCode;
            }
            if (requestParameters.requestedReportsTypeStartDate) {
                queryParameters['requestedReportsTypeStartDate'] = requestParameters.requestedReportsTypeStartDate;
            }
            if (requestParameters.requestedReportsTypeParameterName) {
                queryParameters['requestedReportsTypeParameterName'] = requestParameters.requestedReportsTypeParameterName;
            }
            if (requestParameters.requestedReportsTypeParameterValue) {
                queryParameters['requestedReportsTypeParameterValue'] = requestParameters.requestedReportsTypeParameterValue;
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
                path: `/reservations/statistics`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.ReservationStatisticsFromJSON)(jsonValue));
        });
    }
    /**
     * Use this API to get a statistical breakdown of reservations such as inventory and revenue data.<p><strong>OperationId:</strong>getReservationStatistics</p>
     * Get reservation statistics
     */
    getReservationStatistics(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getReservationStatisticsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.RSVStatsApi = RSVStatsApi;
/**
 * @export
 */
exports.GetReservationStatisticsReportCodeEnum = {
    ChannelMonitorSummary: 'ChannelMonitorSummary',
    ReservationAndRevenueSummary: 'ReservationAndRevenueSummary'
};