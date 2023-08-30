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
exports.Api = exports.HttpClient = exports.ContentType = exports.HousekeepingCreditsDefinitionType = exports.RatePlanRatingType = exports.RoomTypeYieldableType = exports.FrequencyTypeType = void 0;
/** Simple type for storing frequency type. */
var FrequencyTypeType;
(function (FrequencyTypeType) {
    FrequencyTypeType["Everyday"] = "Everyday";
    FrequencyTypeType["EveryXDays"] = "EveryXDays";
    FrequencyTypeType["CustomSchedule"] = "CustomSchedule";
    FrequencyTypeType["DepartureDayOnly"] = "DepartureDayOnly";
    FrequencyTypeType["ArrivalDayOnly"] = "ArrivalDayOnly";
    FrequencyTypeType["NotRequired"] = "NotRequired";
    FrequencyTypeType["SpecificDays"] = "SpecificDays";
})(FrequencyTypeType = exports.FrequencyTypeType || (exports.FrequencyTypeType = {}));
/** Simple type for Yieldable or Non Yieldable */
var RoomTypeYieldableType;
(function (RoomTypeYieldableType) {
    RoomTypeYieldableType["Yieldable"] = "Yieldable";
    RoomTypeYieldableType["NonYieldable"] = "NonYieldable";
})(RoomTypeYieldableType = exports.RoomTypeYieldableType || (exports.RoomTypeYieldableType = {}));
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
/** Type for the different kinds of Credits which will be used in Rooms Management. */
var HousekeepingCreditsDefinitionType;
(function (HousekeepingCreditsDefinitionType) {
    HousekeepingCreditsDefinitionType["Departure"] = "Departure";
    HousekeepingCreditsDefinitionType["Pickup"] = "Pickup";
    HousekeepingCreditsDefinitionType["Turndown"] = "Turndown";
    HousekeepingCreditsDefinitionType["StayOver"] = "StayOver";
    HousekeepingCreditsDefinitionType["FacilityTask"] = "FacilityTask";
    HousekeepingCreditsDefinitionType["Travelling"] = "Travelling";
    HousekeepingCreditsDefinitionType["Total"] = "Total";
})(HousekeepingCreditsDefinitionType = exports.HousekeepingCreditsDefinitionType || (exports.HousekeepingCreditsDefinitionType = {}));
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
        this.securityData = null;
        this.setSecurityData = (data) => {
            this.securityData = data;
        };
        this.request = async (_a) => {
            var { secure, path, type, query, format, body } = _a, params = __rest(_a, ["secure", "path", "type", "query", "format", "body"]);
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
        this.instance = axios_1.default.create(Object.assign(Object.assign({}, axiosConfig), { baseURL: new URL('/rm/config/v1', axiosConfig.baseURL).toString() }));
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
 * @title OPERA Cloud Room Configuration API
 * @version 21.5.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /rm/config/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 21.5.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
class Api extends HttpClient {
    constructor() {
        super(...arguments);
        this.bedTypes = {
            /**
             * @description Use this API to return bed types based on search criteria such as fetchInactive, codes, wildCard, description.<p><strong>OperationId:</strong>getBedTypes</p>
             *
             * @tags ChainConfig
             * @name GetBedTypes
             * @summary Get bed types
             * @request GET:/bedTypes
             */
            getBedTypes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/bedTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.hotels = {
            /**
             * @description Use this API to get housekeeping room schedules. <p><strong>OperationId:</strong>getHousekeepingRoomSchedules</p>
             *
             * @tags HotelConfig
             * @name GetHousekeepingRoomSchedules
             * @summary Get housekeeping room schedules
             * @request GET:/hotels/{hotelId}/housekeepingRoomSchedules
             */
            getHousekeepingRoomSchedules: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/housekeepingRoomSchedules`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create housekeeping room schedules. <p><strong>OperationId:</strong>postHousekeepingRoomSchedules</p>
             *
             * @tags HotelConfig
             * @name PostHousekeepingRoomSchedules
             * @summary Create housekeeping room schedules
             * @request POST:/hotels/{hotelId}/housekeepingRoomSchedules
             */
            postHousekeepingRoomSchedules: (hotelId, housekeepingRoomSchedulesCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/housekeepingRoomSchedules`, method: 'POST', body: housekeepingRoomSchedulesCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update housekeeping room schedules. <p><strong>OperationId:</strong>changeHousekeepingRoomSchedules</p>
             *
             * @tags HotelConfig
             * @name ChangeHousekeepingRoomSchedules
             * @summary Change housekeeping room schedules
             * @request PUT:/hotels/{hotelId}/housekeepingRoomSchedules/{roomScheduleId}
             */
            changeHousekeepingRoomSchedules: (roomScheduleId, hotelId, housekeepingRoomSchedulesToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/housekeepingRoomSchedules/${roomScheduleId}`, method: 'PUT', body: housekeepingRoomSchedulesToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to get Housekeeping Sections. <p><strong>OperationId:</strong>getHousekeepingSections</p>
             *
             * @tags HotelConfig
             * @name GetHousekeepingSections
             * @summary Get Housekeeping Sections
             * @request GET:/hotels/{hotelId}/housekeepingSections
             */
            getHousekeepingSections: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/housekeepingSections`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create Housekeeping Sections. <p><strong>OperationId:</strong>postHousekeepingSections</p>
             *
             * @tags HotelConfig
             * @name PostHousekeepingSections
             * @summary Create Housekeeping Sections
             * @request POST:/hotels/{hotelId}/housekeepingSections
             */
            postHousekeepingSections: (hotelId, housekeepingSectionsCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/housekeepingSections`, method: 'POST', body: housekeepingSectionsCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete Housekeeping Sections. <p><strong>OperationId:</strong>removeHousekeepingSections</p>
             *
             * @tags HotelConfig
             * @name RemoveHousekeepingSections
             * @summary Delete Housekeeping Sections
             * @request DELETE:/hotels/{hotelId}/housekeepingSections/{code}
             */
            removeHousekeepingSections: (code, hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/housekeepingSections/${code}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update Housekeeping Sections. <p><strong>OperationId:</strong>changeHousekeepingSections</p>
             *
             * @tags HotelConfig
             * @name ChangeHousekeepingSections
             * @summary Change Housekeeping Sections
             * @request PUT:/hotels/{hotelId}/housekeepingSections/{code}
             */
            changeHousekeepingSections: (code, hotelId, housekeepingSectionsToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/housekeepingSections/${code}`, method: 'PUT', body: housekeepingSectionsToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to get Hotel Room Maintenance Reasons. <p><strong>OperationId:</strong>getHotelRoomMaintenanceReasons</p>
             *
             * @tags HotelConfig
             * @name GetHotelRoomMaintenanceReasons
             * @summary Get Hotel Room Maintenance Reasons
             * @request GET:/hotels/{hotelId}/roomMaintenanceReasons
             */
            getHotelRoomMaintenanceReasons: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/roomMaintenanceReasons`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create Hotel Room Maintenance Reasons. <p><strong>OperationId:</strong>postHotelRoomMaintenanceReasons</p>
             *
             * @tags HotelConfig
             * @name PostHotelRoomMaintenanceReasons
             * @summary Create Hotel Room Maintenance Reasons
             * @request POST:/hotels/{hotelId}/roomMaintenanceReasons
             */
            postHotelRoomMaintenanceReasons: (hotelId, hotelRoomMaintenanceReasonsCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/roomMaintenanceReasons`, method: 'POST', body: hotelRoomMaintenanceReasonsCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update Hotel Room Maintenance Reasons. <p><strong>OperationId:</strong>changeHotelRoomMaintenanceReasons</p>
             *
             * @tags HotelConfig
             * @name ChangeHotelRoomMaintenanceReasons
             * @summary Change Hotel Room Maintenance Reasons
             * @request PUT:/hotels/{hotelId}/roomMaintenanceReasons/{reasonCode}
             */
            changeHotelRoomMaintenanceReasons: (reasonCode, hotelId, hotelRoomMaintenanceReasonsToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/roomMaintenanceReasons/${reasonCode}`, method: 'PUT', body: hotelRoomMaintenanceReasonsToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete Hotel Room Maintenance Reasons. <p><strong>OperationId:</strong>removeHotelRoomMaintenanceReasons</p>
             *
             * @tags HotelConfig
             * @name RemoveHotelRoomMaintenanceReasons
             * @summary Delete Hotel Room Maintenance Reasons
             * @request DELETE:/hotels/{hotelId}/roomMaintenanceReasons/{reasonCode}
             */
            removeHotelRoomMaintenanceReasons: (reasonCode, hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/roomMaintenanceReasons/${reasonCode}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete housekeeping room schedules. <p><strong>OperationId:</strong>removeHousekeepingRoomSchedules</p>
             *
             * @tags HotelConfig
             * @name RemoveHousekeepingRoomSchedules
             * @summary Delete housekeeping room schedules
             * @request DELETE:/hotels/{hotelId}/roomTypeCodes/{roomTypeCode}/housekeepingRoomSchedules/{roomScheduleId}
             */
            removeHousekeepingRoomSchedules: (roomScheduleId, roomTypeCode, hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/roomTypeCodes/${roomTypeCode}/housekeepingRoomSchedules/${roomScheduleId}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to return room types for a specific property based on search criteria such as roomClassCodes, roomTypeCodes, physical, pseudo, etc.<p><strong>OperationId:</strong>getRoomTypes</p>
             *
             * @tags HotelConfig
             * @name GetRoomTypes
             * @summary Get hotel room types
             * @request GET:/hotels/{hotelId}/roomTypes
             */
            getRoomTypes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/roomTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create new room types for a property. A list of new room types can be passed as part of the request to Use this API to create multiple rooms in one request. <p><strong>OperationId:</strong>postRoomTypes</p>
             *
             * @tags HotelConfig
             * @name PostRoomTypes
             * @summary Create a new room type
             * @request POST:/hotels/{hotelId}/roomTypes
             */
            postRoomTypes: (hotelId, roomTypesCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/roomTypes`, method: 'POST', body: roomTypesCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update a Room Type from a property. A list of room types that need to be modified can also passed as part of the request. <p><strong>OperationId:</strong>putRoomTypes</p>
             *
             * @tags HotelConfig
             * @name PutRoomTypes
             * @summary Update a Room Type
             * @request PUT:/hotels/{hotelId}/roomTypes/{roomTypeId}
             */
            putRoomTypes: (roomTypeId, hotelId, roomTypesToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/roomTypes/${roomTypeId}`, method: 'PUT', body: roomTypesToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete a Room Type from a property. <p><strong>OperationId:</strong>deleteRoomTypes</p>
             *
             * @tags HotelConfig
             * @name DeleteRoomTypes
             * @summary Delete Room Types
             * @request DELETE:/hotels/{hotelId}/roomTypes/{roomTypeId}
             */
            deleteRoomTypes: (roomTypeId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/roomTypes/${roomTypeId}`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to return rooms for a specific property based on search criteria such as roomClassCodes, roomTypeCodes, room, etc.<p><strong>OperationId:</strong>getRooms</p>
             *
             * @tags HotelConfig
             * @name GetRooms
             * @summary Get hotel rooms
             * @request GET:/hotels/{hotelId}/rooms
             */
            getRooms: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/rooms`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.roomPotentials = {
            /**
             * @description Use this API to get Room Potentials. <p><strong>OperationId:</strong>getRoomPotentials</p>
             *
             * @tags ChainConfig
             * @name GetRoomPotentials
             * @summary Get Room Potentials
             * @request GET:/roomPotentials
             */
            getRoomPotentials: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/roomPotentials`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create Room Potentials. <p><strong>OperationId:</strong>postRoomPotentials</p>
             *
             * @tags ChainConfig
             * @name PostRoomPotentials
             * @summary Create Room Potentials
             * @request POST:/roomPotentials
             */
            postRoomPotentials: (hotelId, roomPotentialsCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/roomPotentials`, method: 'POST', body: roomPotentialsCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update Room Potentials. <p><strong>OperationId:</strong>putRoomPotentials</p>
             *
             * @tags ChainConfig
             * @name PutRoomPotentials
             * @summary Change Room Potentials
             * @request PUT:/roomPotentials/{roomPotentialsId}
             */
            putRoomPotentials: (hotelId, roomPotentialsId, roomPotentialsToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/roomPotentials/${roomPotentialsId}`, method: 'PUT', body: roomPotentialsToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete Room Potentials. <p><strong>OperationId:</strong>deleteRoomPotentials</p>
             *
             * @tags ChainConfig
             * @name DeleteRoomPotentials
             * @summary Delete Room Potentials
             * @request DELETE:/roomPotentials/{roomPotentialsId}
             */
            deleteRoomPotentials: (hotelId, roomPotentialsId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/roomPotentials/${roomPotentialsId}`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.roomTypes = {
            /**
             * @description This API accepts the room type template request search criteria and gets the Room Type templates. <p><strong>OperationId:</strong>getRoomTypeTemplates</p>
             *
             * @tags HotelConfig
             * @name GetRoomTypeTemplates
             * @summary Get Room Type Templates
             * @request GET:/roomTypes
             */
            getRoomTypeTemplates: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/roomTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API is used to Use this API to create new Room Type templates. <p><strong>OperationId:</strong>postRoomTypeTemplates</p>
             *
             * @tags HotelConfig
             * @name PostRoomTypeTemplates
             * @summary Create Room Type Templates
             * @request POST:/roomTypes
             */
            postRoomTypeTemplates: (hotelId, roomTypeTemplatesCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/roomTypes`, method: 'POST', body: roomTypeTemplatesCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API is used to update a Room Type template. Use this API to updates can be made concurrently to multiple templates by passing Collection of Room Type templates with the new values. <p><strong>OperationId:</strong>putRoomTypeTemplates</p>
             *
             * @tags HotelConfig
             * @name PutRoomTypeTemplates
             * @summary Change Room Type Templates
             * @request PUT:/roomTypes/{roomTypeTemplatesId}
             */
            putRoomTypeTemplates: (hotelId, roomTypeTemplatesId, roomTypeTemplatesToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/roomTypes/${roomTypeTemplatesId}`, method: 'PUT', body: roomTypeTemplatesToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete new Room Type templates. <p><strong>OperationId:</strong>deleteRoomTypeTemplates</p>
             *
             * @tags HotelConfig
             * @name DeleteRoomTypeTemplates
             * @summary Delete new Room Type templates
             * @request DELETE:/roomTypes/{roomTypeTemplatesId}
             */
            deleteRoomTypeTemplates: (hotelId, roomTypeTemplatesId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/roomTypes/${roomTypeTemplatesId}`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.templateFloors = {
            /**
             * @description Use this API to get template floors. <p><strong>OperationId:</strong>getTemplateFloors</p>
             *
             * @tags HotelConfig
             * @name GetTemplateFloors
             * @summary Get template floors
             * @request GET:/templateFloors
             */
            getTemplateFloors: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/templateFloors`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create template floors. <p><strong>OperationId:</strong>postTemplateFloors</p>
             *
             * @tags HotelConfig
             * @name PostTemplateFloors
             * @summary Create template floors
             * @request POST:/templateFloors
             */
            postTemplateFloors: (hotelId, templateFloorsCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/templateFloors`, method: 'POST', body: templateFloorsCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update template floors. <p><strong>OperationId:</strong>changeTemplateFloors</p>
             *
             * @tags HotelConfig
             * @name ChangeTemplateFloors
             * @summary Change template floors
             * @request PUT:/templateFloors/{templateFloorsId}
             */
            changeTemplateFloors: (hotelId, templateFloorsId, templateFloorsToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/templateFloors/${templateFloorsId}`, method: 'PUT', body: templateFloorsToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete template floors. <p><strong>OperationId:</strong>removeTemplateFloors</p>
             *
             * @tags HotelConfig
             * @name RemoveTemplateFloors
             * @summary Delete template floors
             * @request DELETE:/templateFloors/{templateFloorsId}
             */
            removeTemplateFloors: (hotelId, templateFloorsId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/templateFloors/${templateFloorsId}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
    }
}
exports.Api = Api;
