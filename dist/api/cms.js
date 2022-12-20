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
exports.Api = exports.HttpClient = exports.ContentType = exports.PMSResStatusType = exports.HousekeepingRoomStatusType = exports.NameTypeType = exports.AnonymizationStatusType = exports.PersonNameTypeType = exports.ActionStatusType = exports.TrackItGroup = exports.CalendarTaskClassType = exports.PriorityColorType = void 0;
/** Priority code color configuration type. */
var PriorityColorType;
(function (PriorityColorType) {
    PriorityColorType["Red"] = "Red";
    PriorityColorType["DarkRed"] = "DarkRed";
    PriorityColorType["Blue"] = "Blue";
    PriorityColorType["DarkBlue"] = "DarkBlue";
    PriorityColorType["Cyan"] = "Cyan";
    PriorityColorType["DarkCyan"] = "DarkCyan";
    PriorityColorType["Magenta"] = "Magenta";
    PriorityColorType["DarkMagenta"] = "DarkMagenta";
    PriorityColorType["Green"] = "Green";
    PriorityColorType["DarkGreen"] = "DarkGreen";
    PriorityColorType["Black"] = "Black";
    PriorityColorType["Yellow"] = "Yellow";
    PriorityColorType["DarkYellow"] = "DarkYellow";
})(PriorityColorType = exports.PriorityColorType || (exports.PriorityColorType = {}));
/** Defines classification codes of calendar task. */
var CalendarTaskClassType;
(function (CalendarTaskClassType) {
    CalendarTaskClassType["Correspondence"] = "Correspondence";
    CalendarTaskClassType["Meeting"] = "Meeting";
    CalendarTaskClassType["Todolist"] = "Todolist";
    CalendarTaskClassType["Call"] = "Call";
    CalendarTaskClassType["Appointment"] = "Appointment";
})(CalendarTaskClassType = exports.CalendarTaskClassType || (exports.CalendarTaskClassType = {}));
/** Group to which the Track It items belong. */
var TrackItGroup;
(function (TrackItGroup) {
    TrackItGroup["Parcel"] = "Parcel";
    TrackItGroup["Valet"] = "Valet";
    TrackItGroup["Baggage"] = "Baggage";
    TrackItGroup["Lost"] = "Lost";
})(TrackItGroup = exports.TrackItGroup || (exports.TrackItGroup = {}));
/** Action status of the Track It item(Open, Closed). */
var ActionStatusType;
(function (ActionStatusType) {
    ActionStatusType["Open"] = "Open";
    ActionStatusType["Closed"] = "Closed";
})(ActionStatusType = exports.ActionStatusType || (exports.ActionStatusType = {}));
/** Person's name in an external system. */
var PersonNameTypeType;
(function (PersonNameTypeType) {
    PersonNameTypeType["Primary"] = "Primary";
    PersonNameTypeType["Alternate"] = "Alternate";
    PersonNameTypeType["Incognito"] = "Incognito";
    PersonNameTypeType["External"] = "External";
    PersonNameTypeType["Phonetic"] = "Phonetic";
})(PersonNameTypeType = exports.PersonNameTypeType || (exports.PersonNameTypeType = {}));
/** Guest has been anonymized. */
var AnonymizationStatusType;
(function (AnonymizationStatusType) {
    AnonymizationStatusType["Requested"] = "Requested";
    AnonymizationStatusType["Anonymized"] = "Anonymized";
})(AnonymizationStatusType = exports.AnonymizationStatusType || (exports.AnonymizationStatusType = {}));
var NameTypeType;
(function (NameTypeType) {
    NameTypeType["Guest"] = "Guest";
    NameTypeType["Company"] = "Company";
    NameTypeType["Agent"] = "Agent";
    NameTypeType["Contact"] = "Contact";
    NameTypeType["Source"] = "Source";
    NameTypeType["Group"] = "Group";
    NameTypeType["Employee"] = "Employee";
    NameTypeType["Hotel"] = "Hotel";
    NameTypeType["Purge"] = "Purge";
})(NameTypeType = exports.NameTypeType || (exports.NameTypeType = {}));
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
/** This reservation is in checked in status and the business date is past departure date. This could occur when ORS and PMS are in same environment. */
var PMSResStatusType;
(function (PMSResStatusType) {
    PMSResStatusType["Reserved"] = "Reserved";
    PMSResStatusType["Requested"] = "Requested";
    PMSResStatusType["NoShow"] = "NoShow";
    PMSResStatusType["Cancelled"] = "Cancelled";
    PMSResStatusType["InHouse"] = "InHouse";
    PMSResStatusType["CheckedOut"] = "CheckedOut";
    PMSResStatusType["Waitlisted"] = "Waitlisted";
    PMSResStatusType["DueIn"] = "DueIn";
    PMSResStatusType["DueOut"] = "DueOut";
    PMSResStatusType["Walkin"] = "Walkin";
    PMSResStatusType["PendingCheckout"] = "PendingCheckout";
})(PMSResStatusType = exports.PMSResStatusType || (exports.PMSResStatusType = {}));
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
        this.instance = axios_1.default.create(Object.assign(Object.assign({}, axiosConfig), { baseURL: new URL('/cms/v1', axiosConfig.baseURL).toString() }));
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
 * @title OPERA Cloud API for Customer Management Service
 * @version 22.3.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /cms/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * This API deals with the different aspect of the CustomerManagement.<br /><br /> Compatible with OPERA Cloud release 22.3.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
class Api extends HttpClient {
    constructor() {
        super(...arguments);
        this.activities = {
            /**
             * @description You can fetch a list of Calendar Tasks for with this API, for one or more properties. <p><strong>OperationId:</strong>getCalendarTasks</p>
             *
             * @tags CustomerManagement
             * @name GetCalendarTasks
             * @summary Get Calendar Tasks
             * @request GET:/activities/tasks
             */
            getCalendarTasks: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/activities/tasks`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Delete an attachment associated with the calendar task <p><strong>OperationId:</strong>deleteCalendarTaskAttachment</p>
             *
             * @tags CustomerManagement
             * @name DeleteCalendarTaskAttachment
             * @summary Delete a Calendar Task attachment
             * @request DELETE:/activities/tasks/attachment
             */
            deleteCalendarTaskAttachment: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/activities/tasks/attachment`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description With this API you can get a Calendar Task. <p><strong>OperationId:</strong>getCalendarTask</p>
             *
             * @tags CustomerManagement
             * @name GetCalendarTask
             * @summary Get a Calendar Task
             * @request GET:/activities/{activityId}/task
             */
            getCalendarTask: (hotelId, activityId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/activities/${activityId}/task`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.hotels = {
            /**
             * @description This API will allow you to create a new Calendar Task. <p><strong>OperationId:</strong>postCalendarTask</p>
             *
             * @tags CustomerManagement
             * @name PostCalendarTask
             * @summary Create Calendar Task
             * @request POST:/hotels/{hotelId}/activities/task
             */
            postCalendarTask: (hotelId, calendarTask, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/activities/task`, method: 'POST', body: calendarTask, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Retrieve the attachments on a Calendar task. <p><strong>OperationId:</strong>getCalendarTaskAttachments</p>
             *
             * @tags CustomerManagement
             * @name GetCalendarTaskAttachments
             * @summary Get calendar task attachments
             * @request GET:/hotels/{hotelId}/activities/tasks/{taskId}/attachments
             */
            getCalendarTaskAttachments: (taskId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/activities/tasks/${taskId}/attachments`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API will allow you to update an existing Calendar Task. <p><strong>OperationId:</strong>putCalendarTask</p>
             *
             * @tags CustomerManagement
             * @name PutCalendarTask
             * @summary Update Calendar Task
             * @request PUT:/hotels/{hotelId}/activities/{activityId}/task
             */
            putCalendarTask: (activityId, hotelId, calendarTask, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/activities/${activityId}/task`, method: 'PUT', body: calendarTask, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API will allow you to delete a Calendar Task. <p><strong>OperationId:</strong>deleteCalendarTask</p>
             *
             * @tags CustomerManagement
             * @name DeleteCalendarTask
             * @summary Delete a Calendar Task
             * @request DELETE:/hotels/{hotelId}/activities/{activityId}/task
             */
            deleteCalendarTask: (activityId, hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/activities/${activityId}/task`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Create a new Track It Item. Track It manages storage and delivery of guest luggage, parcels, vehicles (valet), and lost items.  They can optionally be linked to a reservation if related or an arrival, in-house or departure reservation. <p><strong>OperationId:</strong>postTrackItItems</p>
             *
             * @tags CustomerManagement
             * @name PostTrackItItems
             * @summary Creates track it items
             * @request POST:/hotels/{hotelId}/trackItems
             */
            postTrackItItems: (hotelId, trackItItems, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/trackItems`, method: 'POST', body: trackItItems, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Update the details of a Track It Item for a property. <p><strong>OperationId:</strong>putTrackItItems</p>
             *
             * @tags CustomerManagement
             * @name PutTrackItItems
             * @summary Updates track it items
             * @request PUT:/hotels/{hotelId}/trackItems
             */
            putTrackItItems: (hotelId, trackItItems, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/trackItems`, method: 'PUT', body: trackItItems, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Delete a Track It Item for a property. <p><strong>OperationId:</strong>deleteTrackItItems</p>
             *
             * @tags CustomerManagement
             * @name DeleteTrackItItems
             * @summary Deletes track it items
             * @request DELETE:/hotels/{hotelId}/trackItems
             */
            deleteTrackItItems: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/trackItems`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Retrieve a list of all Track It Items for a property. <p><strong>OperationId:</strong>getTrackItItems</p>
             *
             * @tags CustomerManagement
             * @name GetTrackItItems
             * @summary Fetches track it items
             * @request GET:/hotels/{hotelId}/trackItems
             */
            getTrackItItems: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/trackItems`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.services = {
            /**
             * @description  <p><strong>OperationId:</strong>deleteCustomerManagementServiceCache</p>
             *
             * @tags CustomerManagement
             * @name DeleteCustomerManagementServiceCache
             * @summary Operation to clear the cache for the customer management service
             * @request DELETE:/services/customerManagement/cache
             */
            deleteCustomerManagementServiceCache: (hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/services/customerManagement/cache`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>pingCustomerManagementService</p>
             *
             * @tags CustomerManagement
             * @name PingCustomerManagementService
             * @summary Operation to ping the customer management service
             * @request GET:/services/customerManagement/status
             */
            pingCustomerManagementService: (hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/services/customerManagement/status`, method: 'GET', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
    }
}
exports.Api = Api;
