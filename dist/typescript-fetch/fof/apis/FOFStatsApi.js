"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
exports.GetRoomsByRoomStatusFrontOfficeStatusEnum = exports.GetReservationStatusStatisticsReservationStatusEnum = exports.GetFrontOfficeStatisticsWithDateRangeMetricEnum = exports.GetFrontOfficeStatisticsWithDateRangeStatisticsCodeEnum = exports.GetFrontOfficeStatisticsMetricEnum = exports.GetFrontOfficeStatisticsStatisticsCodeEnum = exports.FOFStatsApi = void 0;
const runtime = __importStar(require("../runtime"));
const index_1 = require("../models/index");
/**
 *
 */
class FOFStatsApi extends runtime.BaseAPI {
    /**
     * Use this API to return front office statistics for a specific hotel based on search criteria such as statisticsCode, hotelId, date, parameterNames, parameterValues, room Classes.<p><strong>OperationId:</strong>getFrontOfficeStatistics</p>
     * Get front office statistics
     */
    getFrontOfficeStatisticsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.statisticsCode === null || requestParameters.statisticsCode === undefined) {
                throw new runtime.RequiredError('statisticsCode', 'Required parameter requestParameters.statisticsCode was null or undefined when calling getFrontOfficeStatistics.');
            }
            if (requestParameters.hotelId === null || requestParameters.hotelId === undefined) {
                throw new runtime.RequiredError('hotelId', 'Required parameter requestParameters.hotelId was null or undefined when calling getFrontOfficeStatistics.');
            }
            const queryParameters = {};
            if (requestParameters.date !== undefined) {
                queryParameters['date'] = requestParameters.date;
            }
            if (requestParameters.metric) {
                queryParameters['metric'] = requestParameters.metric;
            }
            if (requestParameters.parameterNames) {
                queryParameters['parameterNames'] = requestParameters.parameterNames;
            }
            if (requestParameters.parameterValues) {
                queryParameters['parameterValues'] = requestParameters.parameterValues;
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
                path: `/hotels/{hotelId}/frontOfficeStatistics/{statisticsCode}`.replace(`{${"statisticsCode"}}`, encodeURIComponent(String(requestParameters.statisticsCode))).replace(`{${"hotelId"}}`, encodeURIComponent(String(requestParameters.hotelId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.StatisticsFromJSON)(jsonValue));
        });
    }
    /**
     * Use this API to return front office statistics for a specific hotel based on search criteria such as statisticsCode, hotelId, date, parameterNames, parameterValues, room Classes.<p><strong>OperationId:</strong>getFrontOfficeStatistics</p>
     * Get front office statistics
     */
    getFrontOfficeStatistics(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getFrontOfficeStatisticsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * This API is useful to retrieve statistics regarding front office operations <p><strong>OperationId:</strong>getFrontOfficeStatisticsWithDateRange</p>
     * Get front office Statistics
     */
    getFrontOfficeStatisticsWithDateRangeRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.statisticsCode === null || requestParameters.statisticsCode === undefined) {
                throw new runtime.RequiredError('statisticsCode', 'Required parameter requestParameters.statisticsCode was null or undefined when calling getFrontOfficeStatisticsWithDateRange.');
            }
            if (requestParameters.hotelId === null || requestParameters.hotelId === undefined) {
                throw new runtime.RequiredError('hotelId', 'Required parameter requestParameters.hotelId was null or undefined when calling getFrontOfficeStatisticsWithDateRange.');
            }
            const queryParameters = {};
            if (requestParameters.endDate !== undefined) {
                queryParameters['endDate'] = requestParameters.endDate;
            }
            if (requestParameters.date !== undefined) {
                queryParameters['date'] = requestParameters.date;
            }
            if (requestParameters.metric) {
                queryParameters['metric'] = requestParameters.metric;
            }
            if (requestParameters.parameterNames) {
                queryParameters['parameterNames'] = requestParameters.parameterNames;
            }
            if (requestParameters.parameterValues) {
                queryParameters['parameterValues'] = requestParameters.parameterValues;
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
                path: `/hotels/{hotelId}/frontOfficeStatisticsRange/{statisticsCode}`.replace(`{${"statisticsCode"}}`, encodeURIComponent(String(requestParameters.statisticsCode))).replace(`{${"hotelId"}}`, encodeURIComponent(String(requestParameters.hotelId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.StatisticsFromJSON)(jsonValue));
        });
    }
    /**
     * This API is useful to retrieve statistics regarding front office operations <p><strong>OperationId:</strong>getFrontOfficeStatisticsWithDateRange</p>
     * Get front office Statistics
     */
    getFrontOfficeStatisticsWithDateRange(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getFrontOfficeStatisticsWithDateRangeRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Use this API to return reservation queue statistics for a specific property.<p><strong>OperationId:</strong>getReservationQueueStatistics</p>
     * Get hotel reservation queue statistics
     */
    getReservationQueueStatisticsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.hotelId === null || requestParameters.hotelId === undefined) {
                throw new runtime.RequiredError('hotelId', 'Required parameter requestParameters.hotelId was null or undefined when calling getReservationQueueStatistics.');
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
            if (requestParameters.xExternalsystem !== undefined && requestParameters.xExternalsystem !== null) {
                headerParameters['x-externalsystem'] = String(requestParameters.xExternalsystem);
            }
            if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
                headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
            }
            const response = yield this.request({
                path: `/hotels/{hotelId}/queueReservationsStatistics`.replace(`{${"hotelId"}}`, encodeURIComponent(String(requestParameters.hotelId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.ReservationQueueStatisticsFromJSON)(jsonValue));
        });
    }
    /**
     * Use this API to return reservation queue statistics for a specific property.<p><strong>OperationId:</strong>getReservationQueueStatistics</p>
     * Get hotel reservation queue statistics
     */
    getReservationQueueStatistics(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getReservationQueueStatisticsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * This API will fetch reservation statistics for the given status per room type. <p><strong>OperationId:</strong>getReservationStatusStatistics</p>
     * Get Reservation Status Statistics
     */
    getReservationStatusStatisticsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.hotelId === null || requestParameters.hotelId === undefined) {
                throw new runtime.RequiredError('hotelId', 'Required parameter requestParameters.hotelId was null or undefined when calling getReservationStatusStatistics.');
            }
            if (requestParameters.reservationStatus === null || requestParameters.reservationStatus === undefined) {
                throw new runtime.RequiredError('reservationStatus', 'Required parameter requestParameters.reservationStatus was null or undefined when calling getReservationStatusStatistics.');
            }
            const queryParameters = {};
            if (requestParameters.reservationStatus) {
                queryParameters['reservationStatus'] = requestParameters.reservationStatus;
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
                path: `/hotels/{hotelId}/reservationStatusStatistics`.replace(`{${"hotelId"}}`, encodeURIComponent(String(requestParameters.hotelId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.ReservationStatusStatisticsResponseTypeFromJSON)(jsonValue));
        });
    }
    /**
     * This API will fetch reservation statistics for the given status per room type. <p><strong>OperationId:</strong>getReservationStatusStatistics</p>
     * Get Reservation Status Statistics
     */
    getReservationStatusStatistics(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getReservationStatusStatisticsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * For current business date, rooms are grouped by the roomClass and roomType to display their housekeeping roomStatus.
     * Get counts of rooms by housekeeping status and front office status.
     */
    getRoomsByRoomStatusRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.hotelId === null || requestParameters.hotelId === undefined) {
                throw new runtime.RequiredError('hotelId', 'Required parameter requestParameters.hotelId was null or undefined when calling getRoomsByRoomStatus.');
            }
            const queryParameters = {};
            if (requestParameters.frontOfficeStatus !== undefined) {
                queryParameters['frontOfficeStatus'] = requestParameters.frontOfficeStatus;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/hotels/{hotelId}/roomStatusStatistics`.replace(`{${"hotelId"}}`, encodeURIComponent(String(requestParameters.hotelId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.RoomStatusStatisticsListTypeFromJSON)(jsonValue));
        });
    }
    /**
     * For current business date, rooms are grouped by the roomClass and roomType to display their housekeeping roomStatus.
     * Get counts of rooms by housekeeping status and front office status.
     */
    getRoomsByRoomStatus(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getRoomsByRoomStatusRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * This Api will get the housekeeping statistics for your property. <p><strong>OperationId:</strong>getTaskSheetStatistics</p>
     * Get housekeeping statistics
     */
    getTaskSheetStatisticsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.hotelId === null || requestParameters.hotelId === undefined) {
                throw new runtime.RequiredError('hotelId', 'Required parameter requestParameters.hotelId was null or undefined when calling getTaskSheetStatistics.');
            }
            const queryParameters = {};
            if (requestParameters.includeAllAssignedTasks !== undefined) {
                queryParameters['includeAllAssignedTasks'] = requestParameters.includeAllAssignedTasks;
            }
            if (requestParameters.includeTaskSheetsDetails !== undefined) {
                queryParameters['includeTaskSheetsDetails'] = requestParameters.includeTaskSheetsDetails;
            }
            if (requestParameters.taskCode !== undefined) {
                queryParameters['taskCode'] = requestParameters.taskCode;
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
                path: `/hotels/{hotelId}/houseKeepingStatistics`.replace(`{${"hotelId"}}`, encodeURIComponent(String(requestParameters.hotelId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.TaskSheetStatisticsFromJSON)(jsonValue));
        });
    }
    /**
     * This Api will get the housekeeping statistics for your property. <p><strong>OperationId:</strong>getTaskSheetStatistics</p>
     * Get housekeeping statistics
     */
    getTaskSheetStatistics(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getTaskSheetStatisticsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.FOFStatsApi = FOFStatsApi;
/**
 * @export
 */
exports.GetFrontOfficeStatisticsStatisticsCodeEnum = {
    AdvanceCheckIn: 'AdvanceCheckIn',
    AiRoomAssignment: 'AIRoomAssignment',
    AvailableRooms: 'AvailableRooms',
    CheckIns: 'CheckIns',
    CheckOuts: 'CheckOuts',
    ComplimentaryOrHouseUse: 'ComplimentaryOrHouseUse',
    DailyProjection: 'DailyProjection',
    HouseSummary: 'HouseSummary',
    HouseSummaryMonthToDate: 'HouseSummaryMonthToDate',
    HouseSummaryYearToDate: 'HouseSummaryYearToDate',
    InHouse: 'InHouse',
    LastHourStatus: 'LastHourStatus',
    ReservationActivity: 'ReservationActivity',
    ReservationActivityDaily: 'ReservationActivityDaily',
    ReservationActivityMonthToDate: 'ReservationActivityMonthToDate',
    ReservationActivityYearToDate: 'ReservationActivityYearToDate',
    ReservationsCancellationsToday: 'ReservationsCancellationsToday',
    ReservationStatistics: 'ReservationStatistics',
    RoomMaintenance: 'RoomMaintenance',
    RoomStatus: 'RoomStatus',
    Turndown: 'Turndown',
    VipGuests: 'VIPGuests',
    CompRouting: 'CompRouting'
};
/**
 * @export
 */
exports.GetFrontOfficeStatisticsMetricEnum = {
    AdultsDeparted: 'AdultsDeparted',
    AdultsExpectedCheckedOut: 'AdultsExpectedCheckedOut',
    AdultsInHouse: 'AdultsInHouse',
    ArrivalAiAssgnMemberResvs: 'ArrivalAIAssgnMemberResvs',
    ArrivalAiAssgnOverridden: 'ArrivalAIAssgnOverridden',
    ArrivalAiAssgnResvs: 'ArrivalAIAssgnResvs',
    ArrivalAiAssgnVipResvs: 'ArrivalAIAssgnVIPResvs',
    ArrivalAiUpgResvs: 'ArrivalAIUpgResvs',
    ArrivalManualAssgnResvs: 'ArrivalManualAssgnResvs',
    ArrivalMemberResvs: 'ArrivalMemberResvs',
    ArrivalResvs: 'ArrivalResvs',
    ArrivalsActualPersons: 'ArrivalsActualPersons',
    ArrivalsActualRooms: 'ArrivalsActualRooms',
    ArrivalsActualVip: 'ArrivalsActualVIP',
    ArrivalsExpectedPersons: 'ArrivalsExpectedPersons',
    ArrivalsExpectedPersonsMadeToday: 'ArrivalsExpectedPersonsMadeToday',
    ArrivalsExpectedRooms: 'ArrivalsExpectedRooms',
    ArrivalsExpectedRoomsMadeToday: 'ArrivalsExpectedRoomsMadeToday',
    ArrivalsExpectedVip: 'ArrivalsExpectedVIP',
    ArrivalsExpectedVipMadeToday: 'ArrivalsExpectedVIPMadeToday',
    ArrivalsInLastHour: 'ArrivalsInLastHour',
    ArrivalsTotal: 'ArrivalsTotal',
    ArrivalUnallocResvs: 'ArrivalUnallocResvs',
    ArrivalVipResvs: 'ArrivalVIPResvs',
    AverageCheckInTime: 'AverageCheckInTime',
    AverageRoomRevenue: 'AverageRoomRevenue',
    BlockAdvanceCheckedInCurrent: 'BlockAdvanceCheckedInCurrent',
    BlockAdvanceCheckedInInhouse: 'BlockAdvanceCheckedInInhouse',
    BlockAdvanceCheckedInTotal: 'BlockAdvanceCheckedInTotal',
    BlocksNotPickedUp: 'BlocksNotPickedUp',
    CanceledOnArrivalPersons: 'CanceledOnArrivalPersons',
    CanceledOnArrivalRooms: 'CanceledOnArrivalRooms',
    CanceledOnArrivalVip: 'CanceledOnArrivalVIP',
    CancellationsTotal: 'CancellationsTotal',
    CheckedInsTotal: 'CheckedInsTotal',
    CheckedOutsTotal: 'CheckedOutsTotal',
    ChildrenDeparted: 'ChildrenDeparted',
    ChildrenExpectedCheckedOut: 'ChildrenExpectedCheckedOut',
    ChildrenInHouse: 'ChildrenInHouse',
    CleanAssigned: 'CleanAssigned',
    CleanedRooms: 'CleanedRooms',
    CleanOccupied: 'CleanOccupied',
    CleanVacant: 'CleanVacant',
    ComplimentaryArrivalPersons: 'ComplimentaryArrivalPersons',
    ComplimentaryArrivalRooms: 'ComplimentaryArrivalRooms',
    ComplimentaryArrivalVip: 'ComplimentaryArrivalVIP',
    ComplimentaryDeparturePersons: 'ComplimentaryDeparturePersons',
    ComplimentaryDepartureRooms: 'ComplimentaryDepartureRooms',
    ComplimentaryDepartureVip: 'ComplimentaryDepartureVIP',
    ComplimentaryStayoverPersons: 'ComplimentaryStayoverPersons',
    ComplimentaryStayoverRooms: 'ComplimentaryStayoverRooms',
    ComplimentaryStayoverVip: 'ComplimentaryStayoverVIP',
    CurrentAveWaitTime: 'CurrentAveWaitTime',
    DayUsePersons: 'DayUsePersons',
    DayUseRooms: 'DayUseRooms',
    DayUseVip: 'DayUseVIP',
    DeparturesActualPersons: 'DeparturesActualPersons',
    DeparturesActualRooms: 'DeparturesActualRooms',
    DeparturesActualVip: 'DeparturesActualVIP',
    DeparturesExpectedPersons: 'DeparturesExpectedPersons',
    DeparturesExpectedRooms: 'DeparturesExpectedRooms',
    DeparturesExpectedVip: 'DeparturesExpectedVIP',
    DeparturesInLastHour: 'DeparturesInLastHour',
    DeparturesTotal: 'DeparturesTotal',
    DirtyAssigned: 'DirtyAssigned',
    DirtyOccupied: 'DirtyOccupied',
    DirtyVacant: 'DirtyVacant',
    EarlyDeparturesPersons: 'EarlyDeparturesPersons',
    EarlyDeparturesRooms: 'EarlyDeparturesRooms',
    EarlyDeparturesVip: 'EarlyDeparturesVIP',
    ExpectedCheckInsTotal: 'ExpectedCheckInsTotal',
    ExpectedCheckOutsTotal: 'ExpectedCheckOutsTotal',
    ExtendedStaysPersons: 'ExtendedStaysPersons',
    ExtendedStaysRooms: 'ExtendedStaysRooms',
    ExtendedStaysVip: 'ExtendedStaysVIP',
    GroupAndBlockPersons: 'GroupAndBlockPersons',
    GroupAndBlockRooms: 'GroupAndBlockRooms',
    GroupAndBlockVip: 'GroupAndBlockVIP',
    HouseUseArrivalPersons: 'HouseUseArrivalPersons',
    HouseUseArrivalRooms: 'HouseUseArrivalRooms',
    HouseUseArrivalVip: 'HouseUseArrivalVIP',
    HouseUseDeparturePersons: 'HouseUseDeparturePersons',
    HouseUseDepartureRooms: 'HouseUseDepartureRooms',
    HouseUseDepartureVip: 'HouseUseDepartureVIP',
    HouseUseStayoverPersons: 'HouseUseStayoverPersons',
    HouseUseStayoverRooms: 'HouseUseStayoverRooms',
    HouseUseStayoverVip: 'HouseUseStayoverVIP',
    IndividualAdvanceCheckedInCurrent: 'IndividualAdvanceCheckedInCurrent',
    IndividualAdvanceCheckedInInhouse: 'IndividualAdvanceCheckedInInhouse',
    IndividualAdvanceCheckedInTotal: 'IndividualAdvanceCheckedInTotal',
    IndividualPersons: 'IndividualPersons',
    IndividualRooms: 'IndividualRooms',
    IndividualVip: 'IndividualVIP',
    InHouse: 'InHouse',
    InHouseBlocksTotal: 'InHouseBlocksTotal',
    InHouseRooms: 'InHouseRooms',
    InspectedAssigned: 'InspectedAssigned',
    InspectedOccupied: 'InspectedOccupied',
    InspectedRooms: 'InspectedRooms',
    InspectedVacant: 'InspectedVacant',
    MaxOccupancyPercentage: 'MaxOccupancyPercentage',
    MaxOccupiedTonightPersons: 'MaxOccupiedTonightPersons',
    MaxOccupiedTonightRooms: 'MaxOccupiedTonightRooms',
    MaxOccupiedTonightVip: 'MaxOccupiedTonightVIP',
    MaxPercentageOccupiedTonightRooms: 'MaxPercentageOccupiedTonightRooms',
    MinAvailableTonightRooms: 'MinAvailableTonightRooms',
    NewReservationsTotal: 'NewReservationsTotal',
    OpenFolioTotal: 'OpenFolioTotal',
    OutOfOrderAssigned: 'OutOfOrderAssigned',
    OutOfOrderOccupied: 'OutOfOrderOccupied',
    OutOfOrderVacant: 'OutOfOrderVacant',
    OutOfServiceAssigned: 'OutOfServiceAssigned',
    OutOfServiceOccupied: 'OutOfServiceOccupied',
    OutOfServiceVacant: 'OutOfServiceVacant',
    PercentRoomsOccupied: 'PercentRoomsOccupied',
    PickupAssigned: 'PickupAssigned',
    PickupOccupied: 'PickupOccupied',
    PickupVacant: 'PickupVacant',
    PreRegisteredTotal: 'PreRegisteredTotal',
    QueueRooms: 'QueueRooms',
    RevPar: 'RevPar',
    RoomMaintenanceResolvedTotal: 'RoomMaintenanceResolvedTotal',
    RoomMaintenanceUnResolvedTotal: 'RoomMaintenanceUnResolvedTotal',
    RoomRevenue: 'RoomRevenue',
    ScheduledCheckOutsTotal: 'ScheduledCheckOutsTotal',
    SkipRooms: 'SkipRooms',
    SleepRooms: 'SleepRooms',
    Stayover: 'Stayover',
    StayoverPersons: 'StayoverPersons',
    StayoverRooms: 'StayoverRooms',
    StayoverVip: 'StayoverVIP',
    TotalOutOfOrder: 'TotalOutOfOrder',
    TotalOutOfService: 'TotalOutOfService',
    TotalPhysicalRooms: 'TotalPhysicalRooms',
    TotalRevenue: 'TotalRevenue',
    TotalRoomsReserved: 'TotalRoomsReserved',
    TotalRoomsToSell: 'TotalRoomsToSell',
    TurndownCompletedRequired: 'TurndownCompletedRequired',
    TurndownNotRequired: 'TurndownNotRequired',
    TurndownRequired: 'TurndownRequired',
    TurndownTotal: 'TurndownTotal',
    VipGuestsArriving: 'VIPGuestsArriving',
    VipGuestsDeparting: 'VIPGuestsDeparting',
    VipGuestsTotal: 'VIPGuestsTotal',
    VipPreRegisteredTotal: 'VIPPreRegisteredTotal',
    VipTurndownTotal: 'VIPTurndownTotal',
    WalkInPersons: 'WalkInPersons',
    WalkInRooms: 'WalkInRooms',
    ApprovedCompPostings: 'ApprovedCompPostings',
    StagedCompPostings: 'StagedCompPostings',
    DeclinedCompPostings: 'DeclinedCompPostings',
    CompRoutingInstructionsRequests: 'CompRoutingInstructionsRequests',
    WalkInVip: 'WalkInVIP'
};
/**
 * @export
 */
exports.GetFrontOfficeStatisticsWithDateRangeStatisticsCodeEnum = {
    ReservationActivityDaily: 'ReservationActivityDaily'
};
/**
 * @export
 */
exports.GetFrontOfficeStatisticsWithDateRangeMetricEnum = {
    AdultsDeparted: 'AdultsDeparted',
    AdultsExpectedCheckedOut: 'AdultsExpectedCheckedOut',
    AdultsInHouse: 'AdultsInHouse',
    ArrivalAiAssgnMemberResvs: 'ArrivalAIAssgnMemberResvs',
    ArrivalAiAssgnOverridden: 'ArrivalAIAssgnOverridden',
    ArrivalAiAssgnResvs: 'ArrivalAIAssgnResvs',
    ArrivalAiAssgnVipResvs: 'ArrivalAIAssgnVIPResvs',
    ArrivalAiUpgResvs: 'ArrivalAIUpgResvs',
    ArrivalManualAssgnResvs: 'ArrivalManualAssgnResvs',
    ArrivalMemberResvs: 'ArrivalMemberResvs',
    ArrivalResvs: 'ArrivalResvs',
    ArrivalsActualPersons: 'ArrivalsActualPersons',
    ArrivalsActualRooms: 'ArrivalsActualRooms',
    ArrivalsActualVip: 'ArrivalsActualVIP',
    ArrivalsExpectedPersons: 'ArrivalsExpectedPersons',
    ArrivalsExpectedPersonsMadeToday: 'ArrivalsExpectedPersonsMadeToday',
    ArrivalsExpectedRooms: 'ArrivalsExpectedRooms',
    ArrivalsExpectedRoomsMadeToday: 'ArrivalsExpectedRoomsMadeToday',
    ArrivalsExpectedVip: 'ArrivalsExpectedVIP',
    ArrivalsExpectedVipMadeToday: 'ArrivalsExpectedVIPMadeToday',
    ArrivalsInLastHour: 'ArrivalsInLastHour',
    ArrivalsTotal: 'ArrivalsTotal',
    ArrivalUnallocResvs: 'ArrivalUnallocResvs',
    ArrivalVipResvs: 'ArrivalVIPResvs',
    AverageCheckInTime: 'AverageCheckInTime',
    AverageRoomRevenue: 'AverageRoomRevenue',
    BlockAdvanceCheckedInCurrent: 'BlockAdvanceCheckedInCurrent',
    BlockAdvanceCheckedInInhouse: 'BlockAdvanceCheckedInInhouse',
    BlockAdvanceCheckedInTotal: 'BlockAdvanceCheckedInTotal',
    BlocksNotPickedUp: 'BlocksNotPickedUp',
    CanceledOnArrivalPersons: 'CanceledOnArrivalPersons',
    CanceledOnArrivalRooms: 'CanceledOnArrivalRooms',
    CanceledOnArrivalVip: 'CanceledOnArrivalVIP',
    CancellationsTotal: 'CancellationsTotal',
    CheckedInsTotal: 'CheckedInsTotal',
    CheckedOutsTotal: 'CheckedOutsTotal',
    ChildrenDeparted: 'ChildrenDeparted',
    ChildrenExpectedCheckedOut: 'ChildrenExpectedCheckedOut',
    ChildrenInHouse: 'ChildrenInHouse',
    CleanAssigned: 'CleanAssigned',
    CleanedRooms: 'CleanedRooms',
    CleanOccupied: 'CleanOccupied',
    CleanVacant: 'CleanVacant',
    ComplimentaryArrivalPersons: 'ComplimentaryArrivalPersons',
    ComplimentaryArrivalRooms: 'ComplimentaryArrivalRooms',
    ComplimentaryArrivalVip: 'ComplimentaryArrivalVIP',
    ComplimentaryDeparturePersons: 'ComplimentaryDeparturePersons',
    ComplimentaryDepartureRooms: 'ComplimentaryDepartureRooms',
    ComplimentaryDepartureVip: 'ComplimentaryDepartureVIP',
    ComplimentaryStayoverPersons: 'ComplimentaryStayoverPersons',
    ComplimentaryStayoverRooms: 'ComplimentaryStayoverRooms',
    ComplimentaryStayoverVip: 'ComplimentaryStayoverVIP',
    CurrentAveWaitTime: 'CurrentAveWaitTime',
    DayUsePersons: 'DayUsePersons',
    DayUseRooms: 'DayUseRooms',
    DayUseVip: 'DayUseVIP',
    DeparturesActualPersons: 'DeparturesActualPersons',
    DeparturesActualRooms: 'DeparturesActualRooms',
    DeparturesActualVip: 'DeparturesActualVIP',
    DeparturesExpectedPersons: 'DeparturesExpectedPersons',
    DeparturesExpectedRooms: 'DeparturesExpectedRooms',
    DeparturesExpectedVip: 'DeparturesExpectedVIP',
    DeparturesInLastHour: 'DeparturesInLastHour',
    DeparturesTotal: 'DeparturesTotal',
    DirtyAssigned: 'DirtyAssigned',
    DirtyOccupied: 'DirtyOccupied',
    DirtyVacant: 'DirtyVacant',
    EarlyDeparturesPersons: 'EarlyDeparturesPersons',
    EarlyDeparturesRooms: 'EarlyDeparturesRooms',
    EarlyDeparturesVip: 'EarlyDeparturesVIP',
    ExpectedCheckInsTotal: 'ExpectedCheckInsTotal',
    ExpectedCheckOutsTotal: 'ExpectedCheckOutsTotal',
    ExtendedStaysPersons: 'ExtendedStaysPersons',
    ExtendedStaysRooms: 'ExtendedStaysRooms',
    ExtendedStaysVip: 'ExtendedStaysVIP',
    GroupAndBlockPersons: 'GroupAndBlockPersons',
    GroupAndBlockRooms: 'GroupAndBlockRooms',
    GroupAndBlockVip: 'GroupAndBlockVIP',
    HouseUseArrivalPersons: 'HouseUseArrivalPersons',
    HouseUseArrivalRooms: 'HouseUseArrivalRooms',
    HouseUseArrivalVip: 'HouseUseArrivalVIP',
    HouseUseDeparturePersons: 'HouseUseDeparturePersons',
    HouseUseDepartureRooms: 'HouseUseDepartureRooms',
    HouseUseDepartureVip: 'HouseUseDepartureVIP',
    HouseUseStayoverPersons: 'HouseUseStayoverPersons',
    HouseUseStayoverRooms: 'HouseUseStayoverRooms',
    HouseUseStayoverVip: 'HouseUseStayoverVIP',
    IndividualAdvanceCheckedInCurrent: 'IndividualAdvanceCheckedInCurrent',
    IndividualAdvanceCheckedInInhouse: 'IndividualAdvanceCheckedInInhouse',
    IndividualAdvanceCheckedInTotal: 'IndividualAdvanceCheckedInTotal',
    IndividualPersons: 'IndividualPersons',
    IndividualRooms: 'IndividualRooms',
    IndividualVip: 'IndividualVIP',
    InHouse: 'InHouse',
    InHouseBlocksTotal: 'InHouseBlocksTotal',
    InHouseRooms: 'InHouseRooms',
    InspectedAssigned: 'InspectedAssigned',
    InspectedOccupied: 'InspectedOccupied',
    InspectedRooms: 'InspectedRooms',
    InspectedVacant: 'InspectedVacant',
    MaxOccupancyPercentage: 'MaxOccupancyPercentage',
    MaxOccupiedTonightPersons: 'MaxOccupiedTonightPersons',
    MaxOccupiedTonightRooms: 'MaxOccupiedTonightRooms',
    MaxOccupiedTonightVip: 'MaxOccupiedTonightVIP',
    MaxPercentageOccupiedTonightRooms: 'MaxPercentageOccupiedTonightRooms',
    MinAvailableTonightRooms: 'MinAvailableTonightRooms',
    NewReservationsTotal: 'NewReservationsTotal',
    OpenFolioTotal: 'OpenFolioTotal',
    OutOfOrderAssigned: 'OutOfOrderAssigned',
    OutOfOrderOccupied: 'OutOfOrderOccupied',
    OutOfOrderVacant: 'OutOfOrderVacant',
    OutOfServiceAssigned: 'OutOfServiceAssigned',
    OutOfServiceOccupied: 'OutOfServiceOccupied',
    OutOfServiceVacant: 'OutOfServiceVacant',
    PercentRoomsOccupied: 'PercentRoomsOccupied',
    PickupAssigned: 'PickupAssigned',
    PickupOccupied: 'PickupOccupied',
    PickupVacant: 'PickupVacant',
    PreRegisteredTotal: 'PreRegisteredTotal',
    QueueRooms: 'QueueRooms',
    RevPar: 'RevPar',
    RoomMaintenanceResolvedTotal: 'RoomMaintenanceResolvedTotal',
    RoomMaintenanceUnResolvedTotal: 'RoomMaintenanceUnResolvedTotal',
    RoomRevenue: 'RoomRevenue',
    ScheduledCheckOutsTotal: 'ScheduledCheckOutsTotal',
    SkipRooms: 'SkipRooms',
    SleepRooms: 'SleepRooms',
    Stayover: 'Stayover',
    StayoverPersons: 'StayoverPersons',
    StayoverRooms: 'StayoverRooms',
    StayoverVip: 'StayoverVIP',
    TotalOutOfOrder: 'TotalOutOfOrder',
    TotalOutOfService: 'TotalOutOfService',
    TotalPhysicalRooms: 'TotalPhysicalRooms',
    TotalRevenue: 'TotalRevenue',
    TotalRoomsReserved: 'TotalRoomsReserved',
    TotalRoomsToSell: 'TotalRoomsToSell',
    TurndownCompletedRequired: 'TurndownCompletedRequired',
    TurndownNotRequired: 'TurndownNotRequired',
    TurndownRequired: 'TurndownRequired',
    TurndownTotal: 'TurndownTotal',
    VipGuestsArriving: 'VIPGuestsArriving',
    VipGuestsDeparting: 'VIPGuestsDeparting',
    VipGuestsTotal: 'VIPGuestsTotal',
    VipPreRegisteredTotal: 'VIPPreRegisteredTotal',
    VipTurndownTotal: 'VIPTurndownTotal',
    WalkInPersons: 'WalkInPersons',
    WalkInRooms: 'WalkInRooms',
    ApprovedCompPostings: 'ApprovedCompPostings',
    StagedCompPostings: 'StagedCompPostings',
    DeclinedCompPostings: 'DeclinedCompPostings',
    CompRoutingInstructionsRequests: 'CompRoutingInstructionsRequests',
    WalkInVip: 'WalkInVIP'
};
/**
 * @export
 */
exports.GetReservationStatusStatisticsReservationStatusEnum = {
    DueIn: 'DueIn',
    DueOut: 'DueOut',
    CheckedIn: 'CheckedIn',
    CheckedOut: 'CheckedOut'
};
/**
 * @export
 */
exports.GetRoomsByRoomStatusFrontOfficeStatusEnum = {
    Vacant: 'Vacant',
    Occupied: 'Occupied'
};