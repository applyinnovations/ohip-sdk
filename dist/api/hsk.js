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
exports.Api = exports.HttpClient = exports.ContentType = exports.TurndownStatusType = exports.ServicingAttendantStatusType = exports.PersonNameTypeType = exports.RoomDiscrepancyType = exports.RoomConditionAssigmentType = exports.GuestHousekeepingServiceRequestType = exports.FrontOfficeRoomStatusType = exports.HousekeepingRoomStatusType = exports.HousekeepingRoomReservationStatusType = exports.RatePlanRatingType = void 0;
/** Possible Rate plan rating values. */
var RatePlanRatingType;
(function (RatePlanRatingType) {
    RatePlanRatingType["MostImportant"] = "MostImportant";
    RatePlanRatingType["Important"] = "Important";
    RatePlanRatingType["SomewhatImportant"] = "SomewhatImportant";
    RatePlanRatingType["LessImportant"] = "LessImportant";
    RatePlanRatingType["LeastImportant"] = "LeastImportant";
    RatePlanRatingType["NoValueSet"] = "NoValueSet";
})(RatePlanRatingType = exports.RatePlanRatingType || (exports.RatePlanRatingType = {}));
/** Room Reservation status types used in housekeeping. These may be different from the actual reservation statuses as these relate to the current reservation for the room. */
var HousekeepingRoomReservationStatusType;
(function (HousekeepingRoomReservationStatusType) {
    HousekeepingRoomReservationStatusType["Arrival"] = "Arrival";
    HousekeepingRoomReservationStatusType["Arrived"] = "Arrived";
    HousekeepingRoomReservationStatusType["DayUse"] = "DayUse";
    HousekeepingRoomReservationStatusType["DueOut"] = "DueOut";
    HousekeepingRoomReservationStatusType["Departed"] = "Departed";
    HousekeepingRoomReservationStatusType["NotReserved"] = "NotReserved";
    HousekeepingRoomReservationStatusType["StayOver"] = "StayOver";
})(HousekeepingRoomReservationStatusType = exports.HousekeepingRoomReservationStatusType || (exports.HousekeepingRoomReservationStatusType = {}));
/** Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService. */
var HousekeepingRoomStatusType;
(function (HousekeepingRoomStatusType) {
    HousekeepingRoomStatusType["Clean"] = "Clean";
    HousekeepingRoomStatusType["Dirty"] = "Dirty";
    HousekeepingRoomStatusType["Pickup"] = "Pickup";
    HousekeepingRoomStatusType["Inspected"] = "Inspected";
    HousekeepingRoomStatusType["OutOfOrder"] = "OutOfOrder";
    HousekeepingRoomStatusType["OutOfService"] = "OutOfService";
})(HousekeepingRoomStatusType = exports.HousekeepingRoomStatusType || (exports.HousekeepingRoomStatusType = {}));
/** Simple type for front office room status instructions to be used in requests for fetching housekeeping rooms. Valid values are Vacant and Occupied. */
var FrontOfficeRoomStatusType;
(function (FrontOfficeRoomStatusType) {
    FrontOfficeRoomStatusType["Vacant"] = "Vacant";
    FrontOfficeRoomStatusType["Occupied"] = "Occupied";
})(FrontOfficeRoomStatusType = exports.FrontOfficeRoomStatusType || (exports.FrontOfficeRoomStatusType = {}));
/** Possible values for the Guest Service Status. */
var GuestHousekeepingServiceRequestType;
(function (GuestHousekeepingServiceRequestType) {
    GuestHousekeepingServiceRequestType["DoNotDisturb"] = "DoNotDisturb";
    GuestHousekeepingServiceRequestType["MakeUpRoom"] = "MakeUpRoom";
    GuestHousekeepingServiceRequestType["NoStatusSelected"] = "NoStatusSelected";
})(GuestHousekeepingServiceRequestType = exports.GuestHousekeepingServiceRequestType || (exports.GuestHousekeepingServiceRequestType = {}));
/** Simple type for Room Condition assignment type. Valid values are Available and NotAvailable Only. */
var RoomConditionAssigmentType;
(function (RoomConditionAssigmentType) {
    RoomConditionAssigmentType["Available"] = "Available";
    RoomConditionAssigmentType["NotAvailable"] = "NotAvailable";
})(RoomConditionAssigmentType = exports.RoomConditionAssigmentType || (exports.RoomConditionAssigmentType = {}));
/** Simple type for discrepant room status instructions to be used in requests for fetching housekeeping and front office room discrepancy. Valid values are Sleep, Skip, Person Discrepancy, Due Out Only. */
var RoomDiscrepancyType;
(function (RoomDiscrepancyType) {
    RoomDiscrepancyType["Sleep"] = "Sleep";
    RoomDiscrepancyType["Skip"] = "Skip";
    RoomDiscrepancyType["PersonDiscrepancy"] = "PersonDiscrepancy";
})(RoomDiscrepancyType = exports.RoomDiscrepancyType || (exports.RoomDiscrepancyType = {}));
/** Person's name in an external system. */
var PersonNameTypeType;
(function (PersonNameTypeType) {
    PersonNameTypeType["Primary"] = "Primary";
    PersonNameTypeType["Alternate"] = "Alternate";
    PersonNameTypeType["Incognito"] = "Incognito";
    PersonNameTypeType["External"] = "External";
    PersonNameTypeType["Phonetic"] = "Phonetic";
})(PersonNameTypeType = exports.PersonNameTypeType || (exports.PersonNameTypeType = {}));
/** Possible values for the Status of a Servicing Attendant. */
var ServicingAttendantStatusType;
(function (ServicingAttendantStatusType) {
    ServicingAttendantStatusType["Standby"] = "Standby";
    ServicingAttendantStatusType["Break"] = "Break";
    ServicingAttendantStatusType["Working"] = "Working";
    ServicingAttendantStatusType["Completed"] = "Completed";
})(ServicingAttendantStatusType = exports.ServicingAttendantStatusType || (exports.ServicingAttendantStatusType = {}));
/** Simple type for turndown status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Required, Not Required and Completed. */
var TurndownStatusType;
(function (TurndownStatusType) {
    TurndownStatusType["Required"] = "Required";
    TurndownStatusType["NotRequired"] = "NotRequired";
    TurndownStatusType["Compeleted"] = "Compeleted";
})(TurndownStatusType = exports.TurndownStatusType || (exports.TurndownStatusType = {}));
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
        this.instance = axios_1.default.create(Object.assign(Object.assign({}, axiosConfig), { baseURL: new URL('/hsk/v1', axiosConfig.baseURL).toString() }));
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
 * @title OPERA Cloud Housekeeping Service API
 * @version 21.5.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /hsk/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 21.5.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
class Api extends HttpClient {
    constructor() {
        super(...arguments);
        this.hotels = {
            /**
             * @description Use this API to return the current housekeeping discrepant rooms for a specific property based on search parameters such as roomDiscrepancyStatus, roomClass, floor, dueOut, etc. These are rooms where the housekeeping status does not match the front office status.<p><strong>OperationId:</strong>getHousekeepingDiscrepancies</p>
             *
             * @tags Housekeeping
             * @name GetHousekeepingDiscrepancies
             * @summary Get hotel housekeeping discrepant rooms
             * @request GET:/hotels/{hotelId}/housekeepingDiscrepancies
             */
            getHousekeepingDiscrepancies: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/housekeepingDiscrepancies`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to return the status of rooms for a specific property based on search criteria such as hotelId, limit, housekeepingRoomStatus, frontOfficeRoomStatus, roomAssignmentStatus, roomType, roomFeatures. The results will give you a list of rooms, and their current housekeeping details.  You could then go ahead and update any of these rooms by using postOutOfOrderRoom for example. <p><strong>OperationId:</strong>getHousekeepingOverview</p>
             *
             * @tags Housekeeping
             * @name GetHousekeepingOverview
             * @summary Get housekeeping rooms overview
             * @request GET:/hotels/{hotelId}/housekeepingOverview
             */
            getHousekeepingOverview: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/housekeepingOverview`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to get a list of rooms for a hotel that are Out of Order.  You can narrow down your results with search criteria such as Room class, Room Type, date range. <p><strong>OperationId:</strong>getOutOfOrderRooms</p>
             *
             * @tags Housekeeping
             * @name GetOutOfOrderRooms
             * @summary Get Out of Order Rooms
             * @request GET:/hotels/{hotelId}/rooms/outOfOrderRooms
             */
            getOutOfOrderRooms: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/rooms/outOfOrderRooms`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API when one or more rooms are no longer Out Of Order, and can now be available for a guest to stay in.  Specify in the request what status the room(s) should be returned to, such as clean, Inspected, dirty or Pickup. <p><strong>OperationId:</strong>completeOutOfOrderRooms</p>
             *
             * @tags Housekeeping
             * @name CompleteOutOfOrderRooms
             * @summary Complete rooms Out Of Order
             * @request PUT:/hotels/{hotelId}/rooms/outOfOrderRooms
             */
            completeOutOfOrderRooms: (hotelId, completeRoomRepair, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/rooms/outOfOrderRooms`, method: 'PUT', body: completeRoomRepair, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API allows you to initially set rooms to 'Out Of Order' housekeeping status and update existing outOfOrderRooms. <p><strong>OperationId:</strong>postOutOfOrderRooms</p>
             *
             * @tags Housekeeping
             * @name PostOutOfOrderRooms
             * @summary Set multiple rooms to Out Of Order
             * @request POST:/hotels/{hotelId}/rooms/outOfOrderRooms
             */
            postOutOfOrderRooms: (hotelId, roomRepairOutOfOrder, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/rooms/outOfOrderRooms`, method: 'POST', body: roomRepairOutOfOrder, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API when one or more rooms are no longer Out Of Service, and can now be available for a guest to stay in.  Specify in the request what status the room(s) should be returned to, such as clean, Inspected, dirty or Pickup. <p><strong>OperationId:</strong>completeOutOfServiceRooms</p>
             *
             * @tags Housekeeping
             * @name CompleteOutOfServiceRooms
             * @summary Complete Rooms Out of Service
             * @request PUT:/hotels/{hotelId}/rooms/outOfServiceRooms
             */
            completeOutOfServiceRooms: (hotelId, completeRoomRepair, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/rooms/outOfServiceRooms`, method: 'PUT', body: completeRoomRepair, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to get a list of rooms for a hotel that are Out of Service.  You can narrow down your results with search criteria such as Room class, Room Type, date range. <p><strong>OperationId:</strong>getOutOfServiceRooms</p>
             *
             * @tags Housekeeping
             * @name GetOutOfServiceRooms
             * @summary Get Out of Service Rooms
             * @request GET:/hotels/{hotelId}/rooms/outOfServiceRooms
             */
            getOutOfServiceRooms: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/rooms/outOfServiceRooms`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API allows you to initially set rooms to 'Out Of Service' housekeeping status and update existing outOfServiceRooms. <p><strong>OperationId:</strong>postOutOfServiceRooms</p>
             *
             * @tags Housekeeping
             * @name PostOutOfServiceRooms
             * @summary Set multiple rooms to Out Of Service
             * @request POST:/hotels/{hotelId}/rooms/outOfServiceRooms
             */
            postOutOfServiceRooms: (hotelId, roomRepairOutOfService, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/rooms/outOfServiceRooms`, method: 'POST', body: roomRepairOutOfService, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update the housekeeping room status for multiple rooms.  Statuses typically include Inspected, Clean, Pickup or Dirty. <p><strong>OperationId:</strong>putRoomRelatedStatus</p>
             *
             * @tags Housekeeping
             * @name PutRoomRelatedStatus
             * @summary Update Housekeeping Room Status
             * @request PUT:/hotels/{hotelId}/rooms/status
             */
            putRoomRelatedStatus: (hotelId, housekeepingRoomStatusCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/rooms/status`, method: 'PUT', body: housekeepingRoomStatusCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
    }
}
exports.Api = Api;
