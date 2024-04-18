"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Rotation Service API
 * APIs to facilitate Room Rotation functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
exports.RoomRotationApi = void 0;
const runtime = __importStar(require("../runtime"));
const index_1 = require("../models/index");
/**
 *
 */
class RoomRotationApi extends runtime.BaseAPI {
    /**
     * This API will allow a user to retrieve list of reservations and the number of rotation points associated with a given reservation for requested hotel, departure start date, departure end date, and room numbers. <p><strong>OperationId:</strong>getReservationRotationPoints</p>
     * Get list of reservations and the associated rotations points
     */
    getReservationRotationPointsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.hotelId === null || requestParameters.hotelId === undefined) {
                throw new runtime.RequiredError('hotelId', 'Required parameter requestParameters.hotelId was null or undefined when calling getReservationRotationPoints.');
            }
            if (requestParameters.departureStartDate === null || requestParameters.departureStartDate === undefined) {
                throw new runtime.RequiredError('departureStartDate', 'Required parameter requestParameters.departureStartDate was null or undefined when calling getReservationRotationPoints.');
            }
            if (requestParameters.departureEndDate === null || requestParameters.departureEndDate === undefined) {
                throw new runtime.RequiredError('departureEndDate', 'Required parameter requestParameters.departureEndDate was null or undefined when calling getReservationRotationPoints.');
            }
            if (requestParameters.roomIds === null || requestParameters.roomIds === undefined) {
                throw new runtime.RequiredError('roomIds', 'Required parameter requestParameters.roomIds was null or undefined when calling getReservationRotationPoints.');
            }
            const queryParameters = {};
            if (requestParameters.roomIds) {
                queryParameters['roomIds'] = requestParameters.roomIds;
            }
            if (requestParameters.confirmationNumber !== undefined) {
                queryParameters['confirmationNumber'] = requestParameters.confirmationNumber;
            }
            if (requestParameters.surname !== undefined) {
                queryParameters['surname'] = requestParameters.surname;
            }
            if (requestParameters.givenName !== undefined) {
                queryParameters['givenName'] = requestParameters.givenName;
            }
            if (requestParameters.limit !== undefined) {
                queryParameters['limit'] = requestParameters.limit;
            }
            if (requestParameters.offset !== undefined) {
                queryParameters['offset'] = requestParameters.offset;
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
                path: `/hotels/{hotelId}/departureStartDate/{departureStartDate}/departureEndDate/{departureEndDate}/reservationRotationPoints`.replace(`{${"hotelId"}}`, encodeURIComponent(String(requestParameters.hotelId))).replace(`{${"departureStartDate"}}`, encodeURIComponent(String(requestParameters.departureStartDate))).replace(`{${"departureEndDate"}}`, encodeURIComponent(String(requestParameters.departureEndDate))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.GetReservationRotationPointsFromJSON)(jsonValue));
        });
    }
    /**
     * This API will allow a user to retrieve list of reservations and the number of rotation points associated with a given reservation for requested hotel, departure start date, departure end date, and room numbers. <p><strong>OperationId:</strong>getReservationRotationPoints</p>
     * Get list of reservations and the associated rotations points
     */
    getReservationRotationPoints(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getReservationRotationPointsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * This API will allow a user to retrieve list of rotation points details along with adjustment log for requested hotel, reservation Id and room number. <p><strong>OperationId:</strong>getReservationRotationPointsDetails</p>
     * Get list of rotation points details associated with a reservation with adjustment log.
     */
    getReservationRotationPointsDetailsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.hotelId === null || requestParameters.hotelId === undefined) {
                throw new runtime.RequiredError('hotelId', 'Required parameter requestParameters.hotelId was null or undefined when calling getReservationRotationPointsDetails.');
            }
            if (requestParameters.reservationId === null || requestParameters.reservationId === undefined) {
                throw new runtime.RequiredError('reservationId', 'Required parameter requestParameters.reservationId was null or undefined when calling getReservationRotationPointsDetails.');
            }
            if (requestParameters.roomId === null || requestParameters.roomId === undefined) {
                throw new runtime.RequiredError('roomId', 'Required parameter requestParameters.roomId was null or undefined when calling getReservationRotationPointsDetails.');
            }
            const queryParameters = {};
            if (requestParameters.includeAdjustmentLog !== undefined) {
                queryParameters['includeAdjustmentLog'] = requestParameters.includeAdjustmentLog;
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
                path: `/hotels/{hotelId}/reservations/{reservationId}/rooms/{roomId}/reservationRotationPointsDetails`.replace(`{${"hotelId"}}`, encodeURIComponent(String(requestParameters.hotelId))).replace(`{${"reservationId"}}`, encodeURIComponent(String(requestParameters.reservationId))).replace(`{${"roomId"}}`, encodeURIComponent(String(requestParameters.roomId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.GetReservationRotationPointsDetailsFromJSON)(jsonValue));
        });
    }
    /**
     * This API will allow a user to retrieve list of rotation points details along with adjustment log for requested hotel, reservation Id and room number. <p><strong>OperationId:</strong>getReservationRotationPointsDetails</p>
     * Get list of rotation points details associated with a reservation with adjustment log.
     */
    getReservationRotationPointsDetails(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getReservationRotationPointsDetailsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get Room Ownership details for specific room(s) or owners. Hotel Id(s) and at least one other search criteria is required. <p><strong>OperationId:</strong>getRoomOwners</p>
     * Get Room Owners Details
     */
    getRoomOwnersRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.hotelIds === null || requestParameters.hotelIds === undefined) {
                throw new runtime.RequiredError('hotelIds', 'Required parameter requestParameters.hotelIds was null or undefined when calling getRoomOwners.');
            }
            const queryParameters = {};
            if (requestParameters.hotelIds) {
                queryParameters['hotelIds'] = requestParameters.hotelIds;
            }
            if (requestParameters.surname !== undefined) {
                queryParameters['surname'] = requestParameters.surname;
            }
            if (requestParameters.givenName !== undefined) {
                queryParameters['givenName'] = requestParameters.givenName;
            }
            if (requestParameters.startDateFrom !== undefined) {
                queryParameters['startDateFrom'] = requestParameters.startDateFrom;
            }
            if (requestParameters.startDateTo !== undefined) {
                queryParameters['startDateTo'] = requestParameters.startDateTo;
            }
            if (requestParameters.endDateFrom !== undefined) {
                queryParameters['endDateFrom'] = requestParameters.endDateFrom;
            }
            if (requestParameters.endDateTo !== undefined) {
                queryParameters['endDateTo'] = requestParameters.endDateTo;
            }
            if (requestParameters.roomClasses) {
                queryParameters['roomClasses'] = requestParameters.roomClasses;
            }
            if (requestParameters.roomTypes) {
                queryParameters['roomTypes'] = requestParameters.roomTypes;
            }
            if (requestParameters.roomIds) {
                queryParameters['roomIds'] = requestParameters.roomIds;
            }
            if (requestParameters.contractNumber !== undefined) {
                queryParameters['contractNumber'] = requestParameters.contractNumber;
            }
            if (requestParameters.includeInactive !== undefined) {
                queryParameters['includeInactive'] = requestParameters.includeInactive;
            }
            if (requestParameters.limit !== undefined) {
                queryParameters['limit'] = requestParameters.limit;
            }
            if (requestParameters.offset !== undefined) {
                queryParameters['offset'] = requestParameters.offset;
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
                path: `/roomOwners`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.RoomOwnersListDetailsFromJSON)(jsonValue));
        });
    }
    /**
     * Get Room Ownership details for specific room(s) or owners. Hotel Id(s) and at least one other search criteria is required. <p><strong>OperationId:</strong>getRoomOwners</p>
     * Get Room Owners Details
     */
    getRoomOwners(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getRoomOwnersRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Use this API to fetch profile Rooms with Room Ownership or Owner Referral records associated. <p><strong>OperationId:</strong>getRoomOwnerships</p>
     * Get Profile Room Owners Details
     */
    getRoomOwnershipsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.profileId === null || requestParameters.profileId === undefined) {
                throw new runtime.RequiredError('profileId', 'Required parameter requestParameters.profileId was null or undefined when calling getRoomOwnerships.');
            }
            const queryParameters = {};
            if (requestParameters.hotelIds) {
                queryParameters['hotelIds'] = requestParameters.hotelIds;
            }
            if (requestParameters.startDate !== undefined) {
                queryParameters['startDate'] = requestParameters.startDate;
            }
            if (requestParameters.endDate !== undefined) {
                queryParameters['endDate'] = requestParameters.endDate;
            }
            if (requestParameters.includeReferral !== undefined) {
                queryParameters['includeReferral'] = requestParameters.includeReferral;
            }
            if (requestParameters.includeAvailableRoomsOnly !== undefined) {
                queryParameters['includeAvailableRoomsOnly'] = requestParameters.includeAvailableRoomsOnly;
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
                path: `/profiles/{profileId}/roomOwnerships`.replace(`{${"profileId"}}`, encodeURIComponent(String(requestParameters.profileId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.AssociatedRoomOwnershipListDetailsFromJSON)(jsonValue));
        });
    }
    /**
     * Use this API to fetch profile Rooms with Room Ownership or Owner Referral records associated. <p><strong>OperationId:</strong>getRoomOwnerships</p>
     * Get Profile Room Owners Details
     */
    getRoomOwnerships(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getRoomOwnershipsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Use this API to fetch the individual units\' rotation points.<p><strong>OperationId:</strong>getRoomRotationPoints</p>
     * Get Room Rotation Points
     */
    getRoomRotationPointsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.hotelId === null || requestParameters.hotelId === undefined) {
                throw new runtime.RequiredError('hotelId', 'Required parameter requestParameters.hotelId was null or undefined when calling getRoomRotationPoints.');
            }
            if (requestParameters.roomRotationPointsDate === null || requestParameters.roomRotationPointsDate === undefined) {
                throw new runtime.RequiredError('roomRotationPointsDate', 'Required parameter requestParameters.roomRotationPointsDate was null or undefined when calling getRoomRotationPoints.');
            }
            const queryParameters = {};
            if (requestParameters.roomRotationPointsDate !== undefined) {
                queryParameters['roomRotationPointsDate'] = requestParameters.roomRotationPointsDate;
            }
            if (requestParameters.limit !== undefined) {
                queryParameters['limit'] = requestParameters.limit;
            }
            if (requestParameters.offset !== undefined) {
                queryParameters['offset'] = requestParameters.offset;
            }
            if (requestParameters.roomClasses) {
                queryParameters['roomClasses'] = requestParameters.roomClasses;
            }
            if (requestParameters.roomTypes) {
                queryParameters['roomTypes'] = requestParameters.roomTypes;
            }
            if (requestParameters.roomIds) {
                queryParameters['roomIds'] = requestParameters.roomIds;
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
                path: `/hotels/{hotelId}/roomRotationPoints`.replace(`{${"hotelId"}}`, encodeURIComponent(String(requestParameters.hotelId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.GetRoomRotationPointsFromJSON)(jsonValue));
        });
    }
    /**
     * Use this API to fetch the individual units\' rotation points.<p><strong>OperationId:</strong>getRoomRotationPoints</p>
     * Get Room Rotation Points
     */
    getRoomRotationPoints(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getRoomRotationPointsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * This API will allow a user to modify rotation points for the requested hotel, reservation Id and room number. <p><strong>OperationId:</strong>putReservationRotationPointsDetails</p>
     * Update Rotation Points Details associated with a reservation.
     */
    putReservationRotationPointsDetailsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.hotelId === null || requestParameters.hotelId === undefined) {
                throw new runtime.RequiredError('hotelId', 'Required parameter requestParameters.hotelId was null or undefined when calling putReservationRotationPointsDetails.');
            }
            if (requestParameters.reservationId === null || requestParameters.reservationId === undefined) {
                throw new runtime.RequiredError('reservationId', 'Required parameter requestParameters.reservationId was null or undefined when calling putReservationRotationPointsDetails.');
            }
            if (requestParameters.roomId === null || requestParameters.roomId === undefined) {
                throw new runtime.RequiredError('roomId', 'Required parameter requestParameters.roomId was null or undefined when calling putReservationRotationPointsDetails.');
            }
            if (requestParameters.reservationRotationPoints === null || requestParameters.reservationRotationPoints === undefined) {
                throw new runtime.RequiredError('reservationRotationPoints', 'Required parameter requestParameters.reservationRotationPoints was null or undefined when calling putReservationRotationPointsDetails.');
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
                path: `/hotels/{hotelId}/reservations/{reservationId}/rooms/{roomId}/reservationRotationPointsDetails`.replace(`{${"hotelId"}}`, encodeURIComponent(String(requestParameters.hotelId))).replace(`{${"reservationId"}}`, encodeURIComponent(String(requestParameters.reservationId))).replace(`{${"roomId"}}`, encodeURIComponent(String(requestParameters.roomId))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.PutReservationRotationPointsDetailsToJSON)(requestParameters.reservationRotationPoints),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.StatusFromJSON)(jsonValue));
        });
    }
    /**
     * This API will allow a user to modify rotation points for the requested hotel, reservation Id and room number. <p><strong>OperationId:</strong>putReservationRotationPointsDetails</p>
     * Update Rotation Points Details associated with a reservation.
     */
    putReservationRotationPointsDetails(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.putReservationRotationPointsDetailsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Use this operation to update balance forward and adjusted points of individual rooms. <p><strong>OperationId:</strong>putRoomRotationPoints</p>
     * Update Rotation Points by Room Numbers
     */
    putRoomRotationPointsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.hotelId === null || requestParameters.hotelId === undefined) {
                throw new runtime.RequiredError('hotelId', 'Required parameter requestParameters.hotelId was null or undefined when calling putRoomRotationPoints.');
            }
            if (requestParameters.roomRotationPointsAdjustment === null || requestParameters.roomRotationPointsAdjustment === undefined) {
                throw new runtime.RequiredError('roomRotationPointsAdjustment', 'Required parameter requestParameters.roomRotationPointsAdjustment was null or undefined when calling putRoomRotationPoints.');
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
                path: `/hotels/{hotelId}/roomRotationPoints`.replace(`{${"hotelId"}}`, encodeURIComponent(String(requestParameters.hotelId))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.RoomRotationPointsAdjustmentToJSON)(requestParameters.roomRotationPointsAdjustment),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.StatusFromJSON)(jsonValue));
        });
    }
    /**
     * Use this operation to update balance forward and adjusted points of individual rooms. <p><strong>OperationId:</strong>putRoomRotationPoints</p>
     * Update Rotation Points by Room Numbers
     */
    putRoomRotationPoints(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.putRoomRotationPointsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.RoomRotationApi = RoomRotationApi;