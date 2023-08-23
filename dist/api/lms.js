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
exports.Api = exports.HttpClient = exports.ContentType = exports.LocationNotificationStatus = exports.PersonNameTypeType = void 0;
/** Person's name in an external system. */
var PersonNameTypeType;
(function (PersonNameTypeType) {
    PersonNameTypeType["Primary"] = "Primary";
    PersonNameTypeType["Alternate"] = "Alternate";
    PersonNameTypeType["Incognito"] = "Incognito";
    PersonNameTypeType["External"] = "External";
    PersonNameTypeType["Phonetic"] = "Phonetic";
})(PersonNameTypeType = exports.PersonNameTypeType || (exports.PersonNameTypeType = {}));
/** (Enumeration) There are 3 possible values: SET, CLEAR and OTHER */
var LocationNotificationStatus;
(function (LocationNotificationStatus) {
    LocationNotificationStatus["Set"] = "Set";
    LocationNotificationStatus["Clear"] = "Clear";
    LocationNotificationStatus["Other"] = "Other";
})(LocationNotificationStatus = exports.LocationNotificationStatus || (exports.LocationNotificationStatus = {}));
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
        this.instance = axios_1.default.create(Object.assign(Object.assign({}, axiosConfig), { baseURL: new URL('/lms/v1', axiosConfig.baseURL).toString() }));
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
 * @title OPERA Cloud Leisure Management API
 * @version 22.3.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /lms/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs to cater for external Leisure Management functionality integrated with OPERA Cloud.<br /><br /> Compatible with OPERA Cloud release 22.3.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
class Api extends HttpClient {
    constructor() {
        super(...arguments);
        this.activityLocations = {
            /**
             * @description Use this API to create a new Activity location for a property. <p><strong>OperationId:</strong>postActivityLocations</p>
             *
             * @tags LeisureManagementConfig
             * @name PostActivityLocations
             * @summary Create an Activity Locations
             * @request POST:/activityLocations
             */
            postActivityLocations: (hotelId, createActivityLocations, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/activityLocations`, method: 'POST', body: createActivityLocations, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to fetch Activity location codes for a property. <p><strong>OperationId:</strong>getActivityLocations</p>
             *
             * @tags LeisureManagementConfig
             * @name GetActivityLocations
             * @summary Look up of Activity Locations
             * @request GET:/activityLocations
             */
            getActivityLocations: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/activityLocations`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update an existing Activity location Code for a property. <p><strong>OperationId:</strong>putActivityLocations</p>
             *
             * @tags LeisureManagementConfig
             * @name PutActivityLocations
             * @summary Change in Activity Locations
             * @request PUT:/activityLocations/{activityLocationsId}
             */
            putActivityLocations: (hotelId, activityLocationsId, changeActivityLocations, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/activityLocations/${activityLocationsId}`, method: 'PUT', body: changeActivityLocations, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete an Activity location for a property. <p><strong>OperationId:</strong>deleteActivityLocations</p>
             *
             * @tags LeisureManagementConfig
             * @name DeleteActivityLocations
             * @summary Remove Activity Locations
             * @request DELETE:/activityLocations/{activityLocationsId}
             */
            deleteActivityLocations: (hotelId, activityLocationsId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/activityLocations/${activityLocationsId}`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to copy an Activity location for a property. <p><strong>OperationId:</strong>copyActivityLocations</p>
             *
             * @tags LeisureManagementConfig
             * @name CopyActivityLocations
             * @summary Copy Activity Locations
             * @request PUT:/activityLocations/{activityLocationsId}/copy
             */
            copyActivityLocations: (hotelId, activityLocationsId, copyActivityLocations, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/activityLocations/${activityLocationsId}/copy`, method: 'PUT', body: copyActivityLocations, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.activityStatusCodes = {
            /**
             * @description Retrieve Activity Status Code that are configured for a property.  Activity Status Codes are typically used when an EAS (External Activities Scheduler system) interface is connected to OPERA.   <p><strong>OperationId:</strong>postActivityStatusCodes</p>
             *
             * @tags LeisureManagementConfig
             * @name PostActivityStatusCodes
             * @summary Create Activity Status Code
             * @request POST:/activityStatusCodes
             */
            postActivityStatusCodes: (hotelId, createActivityStatusCodes, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/activityStatusCodes`, method: 'POST', body: createActivityStatusCodes, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Fetch Activity Status Codes that are configured for a property.  <p><strong>OperationId:</strong>getActivityStatusCodes</p>
             *
             * @tags LeisureManagementConfig
             * @name GetActivityStatusCodes
             * @summary Get Activity Status Codes
             * @request GET:/activityStatusCodes
             */
            getActivityStatusCodes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/activityStatusCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Modify an Activity Status Code that is configured for a property.  <p><strong>OperationId:</strong>putActivityStatusCodes</p>
             *
             * @tags LeisureManagementConfig
             * @name PutActivityStatusCodes
             * @summary Change Activity Status Code
             * @request PUT:/activityStatusCodes/{activityStatusCodesId}
             */
            putActivityStatusCodes: (hotelId, activityStatusCodesId, changeActivityStatusCodes, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/activityStatusCodes/${activityStatusCodesId}`, method: 'PUT', body: changeActivityStatusCodes, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Remove an Activity Status Code that is configured for a property.  <p><strong>OperationId:</strong>deleteActivityStatusCodes</p>
             *
             * @tags LeisureManagementConfig
             * @name DeleteActivityStatusCodes
             * @summary Remove Activity Status Code
             * @request DELETE:/activityStatusCodes/{activityStatusCodesId}
             */
            deleteActivityStatusCodes: (hotelId, activityStatusCodesId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/activityStatusCodes/${activityStatusCodesId}`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.activityTypes = {
            /**
             * @description Retrieve Activity Types that are configured for a property.  Activity Types are typically used when an EAS (External Activities Scheduler system) interface is connected to OPERA.   <p><strong>OperationId:</strong>getActivityTypes</p>
             *
             * @tags LeisureManagementConfig
             * @name GetActivityTypes
             * @summary Fetch Activity Types
             * @request GET:/activityTypes
             */
            getActivityTypes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/activityTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Create a new Activity Type Code for a specific property. <p><strong>OperationId:</strong>postActivityTypes</p>
             *
             * @tags LeisureManagementConfig
             * @name PostActivityTypes
             * @summary Create Activity Types
             * @request POST:/activityTypes
             */
            postActivityTypes: (hotelId, createActivityTypes, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/activityTypes`, method: 'POST', body: createActivityTypes, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Modify an Activity Type Code that is configured for a property. <p><strong>OperationId:</strong>putActivityTypes</p>
             *
             * @tags LeisureManagementConfig
             * @name PutActivityTypes
             * @summary Change Activity Types
             * @request PUT:/activityTypes/{activityTypesId}
             */
            putActivityTypes: (hotelId, activityTypesId, changeActivityTypes, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/activityTypes/${activityTypesId}`, method: 'PUT', body: changeActivityTypes, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Delete an Activity Type Code that is configured for a property. <p><strong>OperationId:</strong>deleteActivityTypes</p>
             *
             * @tags LeisureManagementConfig
             * @name DeleteActivityTypes
             * @summary Remove Activity Types
             * @request DELETE:/activityTypes/{activityTypesId}
             */
            deleteActivityTypes: (hotelId, activityTypesId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/activityTypes/${activityTypesId}`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Copy existing Activity Types from source property to target properties. <p><strong>OperationId:</strong>copyActivityTypes</p>
             *
             * @tags LeisureManagementConfig
             * @name CopyActivityTypes
             * @summary Copy Activity Types
             * @request PUT:/activityTypes/{activityTypesId}/copy
             */
            copyActivityTypes: (hotelId, activityTypesId, copyActivityTypes, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/activityTypes/${activityTypesId}/copy`, method: 'PUT', body: copyActivityTypes, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.hotels = {
            /**
             * @description This API will send a response to Look-up of Activity Bookings. <p><strong>OperationId:</strong>getActivityBookings</p>
             *
             * @tags LeisureManagement
             * @name GetActivityBookings
             * @summary Send a response to Look-up of Activity Bookings
             * @request GET:/hotels/{hotelId}/activityBookings
             */
            getActivityBookings: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/activityBookings`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API will send a response to Creation of Activity Booking. <p><strong>OperationId:</strong>postActivityBooking</p>
             *
             * @tags LeisureManagement
             * @name PostActivityBooking
             * @summary Send a response to Creation of Activity Booking
             * @request POST:/hotels/{hotelId}/reservations/{reservationId}/activityBookings
             */
            postActivityBooking: (reservationId, hotelId, createActivityBooking, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/activityBookings`, method: 'POST', body: createActivityBooking, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API will send a response to a  Change in Activity Booking request from external Activity Scheduler system. <p><strong>OperationId:</strong>putActivityBooking</p>
             *
             * @tags LeisureManagement
             * @name PutActivityBooking
             * @summary Send a response to Change in Activity Booking
             * @request PUT:/hotels/{hotelId}/reservations/{reservationId}/activityBookings
             */
            putActivityBooking: (reservationId, hotelId, changeActivityBooking, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/activityBookings`, method: 'PUT', body: changeActivityBooking, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API will send a response to Cancellation of an Activity Booking. <p><strong>OperationId:</strong>deleteActivityBooking</p>
             *
             * @tags LeisureManagement
             * @name DeleteActivityBooking
             * @summary Send a response to Cancellation of an Activity Booking
             * @request DELETE:/hotels/{hotelId}/reservations/{reservationId}/activityBookings
             */
            deleteActivityBooking: (reservationId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/activityBookings`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API will send a response to a Location Notification. <p><strong>OperationId:</strong>postLocationNotification</p>
             *
             * @tags LeisureManagement
             * @name PostLocationNotification
             * @summary Send a response to Location Notification
             * @request POST:/hotels/{hotelId}/reservations/{reservationId}/locationNotifications
             */
            postLocationNotification: (reservationId, hotelId, locationNotificationToBeCreated, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/locationNotifications`, method: 'POST', body: locationNotificationToBeCreated, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.services = {
            /**
             * @description Operation to clear cache <p><strong>OperationId:</strong>deleteLeisureManagementServiceCache</p>
             *
             * @tags LeisureManagement
             * @name DeleteLeisureManagementServiceCache
             * @summary Clear Cache for the Leisure Management Service
             * @request DELETE:/services/leisureManagement/cache
             */
            deleteLeisureManagementServiceCache: (hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/services/leisureManagement/cache`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Service ping the Leisure Management Service. <p><strong>OperationId:</strong>pingLeisureManagementService</p>
             *
             * @tags LeisureManagement
             * @name PingLeisureManagementService
             * @summary Ping the Leisure Management Service
             * @request GET:/services/leisureManagement/status
             */
            pingLeisureManagementService: (hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/services/leisureManagement/status`, method: 'GET', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Delete Leisure Management Configuration Cache <p><strong>OperationId:</strong>deleteLeisureManagementConfigCache</p>
             *
             * @tags LeisureManagementConfig
             * @name DeleteLeisureManagementConfigCache
             * @summary  clear cache
             * @request DELETE:/services/leisureManagementConfig/cache
             */
            deleteLeisureManagementConfigCache: (hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/services/leisureManagementConfig/cache`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Get Leisure Management Configuration Services Status <p><strong>OperationId:</strong>getLeisureManagementConfigServicesStatus</p>
             *
             * @tags LeisureManagementConfig
             * @name GetLeisureManagementConfigServicesStatus
             * @summary Send a response to a ping
             * @request GET:/services/leisureManagementConfig/status
             */
            getLeisureManagementConfigServicesStatus: (hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/services/leisureManagementConfig/status`, method: 'GET', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
    }
}
exports.Api = Api;
