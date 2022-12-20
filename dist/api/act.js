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
exports.Api = exports.HttpClient = exports.ContentType = exports.ActivityStatReportCodeType = exports.ActivityStatCategoryCodeType = exports.ActivityStatCodeType = exports.StatUnitCategoryType = exports.LinkedProfileTypeType = exports.PMSResStatusType = exports.ResProfileTypeType = exports.GuestHousekeepingServiceRequestType = exports.ProfileStatusType = exports.ProfileTypeType = exports.ProfileDeliveryModuleType = exports.ActivityConfigClassType = void 0;
/** A collection of supported list of activity classes. */
var ActivityConfigClassType;
(function (ActivityConfigClassType) {
    ActivityConfigClassType["Appointment"] = "Appointment";
    ActivityConfigClassType["Todo"] = "Todo";
})(ActivityConfigClassType = exports.ActivityConfigClassType || (exports.ActivityConfigClassType = {}));
/** Module where this delivery type will be used. Example : EFolio Export, EInvoice , Fiscal, etc.. */
var ProfileDeliveryModuleType;
(function (ProfileDeliveryModuleType) {
    ProfileDeliveryModuleType["EfolioExport"] = "EfolioExport";
})(ProfileDeliveryModuleType = exports.ProfileDeliveryModuleType || (exports.ProfileDeliveryModuleType = {}));
/** The types of Profile handled by the web service. */
var ProfileTypeType;
(function (ProfileTypeType) {
    ProfileTypeType["Guest"] = "Guest";
    ProfileTypeType["Agent"] = "Agent";
    ProfileTypeType["Company"] = "Company";
    ProfileTypeType["Group"] = "Group";
    ProfileTypeType["Source"] = "Source";
    ProfileTypeType["Employee"] = "Employee";
    ProfileTypeType["Hotel"] = "Hotel";
    ProfileTypeType["Vendor"] = "Vendor";
    ProfileTypeType["Contact"] = "Contact";
    ProfileTypeType["Purge"] = "Purge";
    ProfileTypeType["BusinessHeader"] = "BusinessHeader";
    ProfileTypeType["BillingAccount"] = "BillingAccount";
    ProfileTypeType["Activity"] = "Activity";
    ProfileTypeType["Potential"] = "Potential";
    ProfileTypeType["Account"] = "Account";
})(ProfileTypeType = exports.ProfileTypeType || (exports.ProfileTypeType = {}));
var ProfileStatusType;
(function (ProfileStatusType) {
    ProfileStatusType["Active"] = "Active";
    ProfileStatusType["Inactive"] = "Inactive";
})(ProfileStatusType = exports.ProfileStatusType || (exports.ProfileStatusType = {}));
/** Possible values for the Guest Service Status. */
var GuestHousekeepingServiceRequestType;
(function (GuestHousekeepingServiceRequestType) {
    GuestHousekeepingServiceRequestType["DoNotDisturb"] = "DoNotDisturb";
    GuestHousekeepingServiceRequestType["MakeUpRoom"] = "MakeUpRoom";
    GuestHousekeepingServiceRequestType["NoStatusSelected"] = "NoStatusSelected";
})(GuestHousekeepingServiceRequestType = exports.GuestHousekeepingServiceRequestType || (exports.GuestHousekeepingServiceRequestType = {}));
var ResProfileTypeType;
(function (ResProfileTypeType) {
    ResProfileTypeType["Guest"] = "Guest";
    ResProfileTypeType["Company"] = "Company";
    ResProfileTypeType["Group"] = "Group";
    ResProfileTypeType["TravelAgent"] = "TravelAgent";
    ResProfileTypeType["Source"] = "Source";
    ResProfileTypeType["ReservationContact"] = "ReservationContact";
    ResProfileTypeType["BillingContact"] = "BillingContact";
    ResProfileTypeType["Addressee"] = "Addressee";
})(ResProfileTypeType = exports.ResProfileTypeType || (exports.ResProfileTypeType = {}));
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
/** Simple type for profile types linked to activity. */
var LinkedProfileTypeType;
(function (LinkedProfileTypeType) {
    LinkedProfileTypeType["Company"] = "Company";
    LinkedProfileTypeType["Agent"] = "Agent";
    LinkedProfileTypeType["Source"] = "Source";
    LinkedProfileTypeType["CompanyContact"] = "CompanyContact";
    LinkedProfileTypeType["AgentContact"] = "AgentContact";
    LinkedProfileTypeType["SourceContact"] = "SourceContact";
})(LinkedProfileTypeType = exports.LinkedProfileTypeType || (exports.LinkedProfileTypeType = {}));
/** Supported statistical units. */
var StatUnitCategoryType;
(function (StatUnitCategoryType) {
    StatUnitCategoryType["Numeric"] = "Numeric";
    StatUnitCategoryType["Amount"] = "Amount";
})(StatUnitCategoryType = exports.StatUnitCategoryType || (exports.StatUnitCategoryType = {}));
/** Supported activity statistical codes. */
var ActivityStatCodeType;
(function (ActivityStatCodeType) {
    ActivityStatCodeType["CompletedToDo"] = "CompletedToDo";
    ActivityStatCodeType["IncompleteToDo"] = "IncompleteToDo";
    ActivityStatCodeType["CompletedAppointments"] = "CompletedAppointments";
    ActivityStatCodeType["IncompleteAppointments"] = "IncompleteAppointments";
})(ActivityStatCodeType = exports.ActivityStatCodeType || (exports.ActivityStatCodeType = {}));
/** Supported activity statistical category codes. */
var ActivityStatCategoryCodeType;
(function (ActivityStatCategoryCodeType) {
    ActivityStatCategoryCodeType["HotelCode"] = "HotelCode";
})(ActivityStatCategoryCodeType = exports.ActivityStatCategoryCodeType || (exports.ActivityStatCategoryCodeType = {}));
/** Supported Activity report codes. */
var ActivityStatReportCodeType;
(function (ActivityStatReportCodeType) {
    ActivityStatReportCodeType["Activities"] = "Activities";
})(ActivityStatReportCodeType = exports.ActivityStatReportCodeType || (exports.ActivityStatReportCodeType = {}));
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
        this.instance = axios_1.default.create(Object.assign(Object.assign({}, axiosConfig), { baseURL: new URL('/act/v1', axiosConfig.baseURL).toString() }));
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
 * @title OPERA Cloud Activity API
 * @version 22.3.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /act/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs to cater for Sales Activity functionality in OPERA Cloud. <br /><br /> Activities provide you with an account management tool for managing daily tasks such as appointments, sales calls, contact follow-up, and so on.<br /><br /> Compatible with OPERA Cloud release 22.3.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
class Api extends HttpClient {
    constructor() {
        super(...arguments);
        this.activities = {
            /**
             * @description Use this API to retrieve activities for multiple hotels.  Results can be narrowed down by your search criteria in the request message. <p><strong>OperationId:</strong>getActivitiesByMultipleHotelIds</p>
             *
             * @tags Activity
             * @name GetActivitiesByMultipleHotelIds
             * @summary Get activities
             * @request GET:/activities
             */
            getActivitiesByMultipleHotelIds: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/activities`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description If you want to delete an activity, use this API.  You must know the activity ID for the request. <p><strong>OperationId:</strong>deleteMultipleActivities</p>
             *
             * @tags Activity
             * @name DeleteMultipleActivities
             * @summary Delete activities
             * @request DELETE:/activities
             */
            deleteMultipleActivities: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/activities`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to mark multiple Activities as completed in 1 request.  You must know the OPERA Activity ID's for this API. <p><strong>OperationId:</strong>postMultipleActivitiesCompletion</p>
             *
             * @tags Activity
             * @name PostMultipleActivitiesCompletion
             * @summary Complete activities
             * @request POST:/activities/activitiesCompletion
             */
            postMultipleActivitiesCompletion: (hotelId, activitiesToChange, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/activities/activitiesCompletion`, method: 'POST', body: activitiesToChange, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to retrieve emails which have been received from an external system and stored in OPERA. They are stored against accounts, contacts and blocks in OPERA. <p><strong>OperationId:</strong>getEmails</p>
             *
             * @tags Activity
             * @name GetEmails
             * @summary Get Emails
             * @request GET:/activities/emails
             */
            getEmails: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/activities/emails`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to retrieve an Activity, using the OPERA Activity ID in the request. <p><strong>OperationId:</strong>getActivityWithOutHotelId</p>
             *
             * @tags Activity
             * @name GetActivityWithOutHotelId
             * @summary Get activity by ID
             * @request GET:/activities/{activityId}
             */
            getActivityWithOutHotelId: (hotelId, activityId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/activities/${activityId}`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to mark an Activity as deleted.  You must know the OPERA Activity ID for this API. <p><strong>OperationId:</strong>deleteActivitiesWithOutHotelId</p>
             *
             * @tags Activity
             * @name DeleteActivitiesWithOutHotelId
             * @summary Delete activity  by ID
             * @request DELETE:/activities/{activityId}
             */
            deleteActivitiesWithOutHotelId: (hotelId, activityId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/activities/${activityId}`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to delete an attachment which exists on an activity in OPERA Cloud. <p><strong>OperationId:</strong>deleteActivityAttachmentWithoutHotelId</p>
             *
             * @tags Activity
             * @name DeleteActivityAttachmentWithoutHotelId
             * @summary Delete an attachment from an Activity
             * @request DELETE:/activities/{activityId}/attachments/{attachmentId}
             */
            deleteActivityAttachmentWithoutHotelId: (hotelId, attachmentId, activityId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/activities/${activityId}/attachments/${attachmentId}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.hotels = {
            /**
             * @description You can use this API to retrieve multiple Activities for a hotel, you can narrow the results using different search criteria  <p><strong>OperationId:</strong>getActivities</p>
             *
             * @tags Activity
             * @name GetActivities
             * @summary Get activities by hotel
             * @request GET:/hotels/{hotelId}/activities
             */
            getActivities: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/activities`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use postActivities to create a new activity for a hotel.  You would need to know the types of Activities a hotel accepts, such as Appointments, TODO.  Use ListOfValues API's to find the available types at a hotel. <p><strong>OperationId:</strong>postActivities</p>
             *
             * @tags Activity
             * @name PostActivities
             * @summary Create activities in a hotel
             * @request POST:/hotels/{hotelId}/activities
             */
            postActivities: (hotelId, activitiesInformation, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/activities`, method: 'POST', body: activitiesInformation, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to retrieve all statistics of activities. <p><strong>OperationId:</strong>getActivityStatistics</p>
             *
             * @tags Activity
             * @name GetActivityStatistics
             * @summary Get Activity statistics
             * @request GET:/hotels/{hotelId}/activities/statistics
             */
            getActivityStatistics: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/activities/statistics`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to retrieve an Activity for a hotel, using the OPERA Activity ID in the request. <p><strong>OperationId:</strong>getActivity</p>
             *
             * @tags Activity
             * @name GetActivity
             * @summary Get activity in a hotel by ID
             * @request GET:/hotels/{hotelId}/activities/{activityId}
             */
            getActivity: (activityId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/activities/${activityId}`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this to update an existing Activity for a hotel.  You must know the OPERA Activity ID for this API. <p><strong>OperationId:</strong>putActivities</p>
             *
             * @tags Activity
             * @name PutActivities
             * @summary Update activity in a hotel by ID
             * @request PUT:/hotels/{hotelId}/activities/{activityId}
             */
            putActivities: (activityId, hotelId, activitiesToChange, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/activities/${activityId}`, method: 'PUT', body: activitiesToChange, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to mark an Activity as deleted.  You must know the OPERA Activity ID for this API. <p><strong>OperationId:</strong>deleteActivities</p>
             *
             * @tags Activity
             * @name DeleteActivities
             * @summary Delete activity in a hotel by ID
             * @request DELETE:/hotels/{hotelId}/activities/{activityId}
             */
            deleteActivities: (activityId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/activities/${activityId}`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to mark one Activity as completed in 1 request.  You must know the OPERA Activity ID for this API. <p><strong>OperationId:</strong>postSingleActivityCompletion</p>
             *
             * @tags Activity
             * @name PostSingleActivityCompletion
             * @summary Complete activity in a hotel by ID
             * @request POST:/hotels/{hotelId}/activities/{activityId}/activityCompletion
             */
            postSingleActivityCompletion: (activityId, hotelId, activitiesToChange, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/activities/${activityId}/activityCompletion`, method: 'POST', body: activitiesToChange, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API when you want to view the attachments on an existing activity. <p><strong>OperationId:</strong>getActivityAttachments</p>
             *
             * @tags Activity
             * @name GetActivityAttachments
             * @summary Get Activity Attachments
             * @request GET:/hotels/{hotelId}/activities/{activityId}/attachments
             */
            getActivityAttachments: (activityId, hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/activities/${activityId}/attachments`, method: 'GET', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to delete an attachment which exists on an activity in OPERA Cloud. <p><strong>OperationId:</strong>deleteActivityAttachment</p>
             *
             * @tags Activity
             * @name DeleteActivityAttachment
             * @summary Delete an attachment from an Activity
             * @request DELETE:/hotels/{hotelId}/activities/{activityId}/attachments/{attachmentId}
             */
            deleteActivityAttachment: (attachmentId, activityId, hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/activities/${activityId}/attachments/${attachmentId}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to invite one or multiple owners to an activity. <p><strong>OperationId:</strong>postLinkedActivities</p>
             *
             * @tags Activity
             * @name PostLinkedActivities
             * @summary Create linked activities in a hotel by ID
             * @request POST:/hotels/{hotelId}/activities/{activityId}/linkedActivities
             */
            postLinkedActivities: (activityId, hotelId, linkedActivities, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/activities/${activityId}/linkedActivities`, method: 'POST', body: linkedActivities, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to view the changes log for a specified Activity. <p><strong>OperationId:</strong>getActivityLog</p>
             *
             * @tags Activity
             * @name GetActivityLog
             * @summary Get Activity Log
             * @request GET:/hotels/{hotelId}/activityLog
             */
            getActivityLog: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/activityLog`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API allows you to retrieve a list of activities that have recently been accessed.   <p><strong>OperationId:</strong>getRecentlyAccessedActivities</p>
             *
             * @tags Activity
             * @name GetRecentlyAccessedActivities
             * @summary Get recently accessed activities
             * @request GET:/hotels/{hotelId}/recentlyAccessedActivities
             */
            getRecentlyAccessedActivities: (hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/recentlyAccessedActivities`, method: 'GET', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.recentlyAccessedActivities = {
            /**
             * @description This API allows you to retrieve a list of activities that have recently been accessed.   <p><strong>OperationId:</strong>getRecentlyAccessedActivitiesWithOutHotelId</p>
             *
             * @tags Activity
             * @name GetRecentlyAccessedActivitiesWithOutHotelId
             * @summary Get recently accessed activities
             * @request GET:/recentlyAccessedActivities
             */
            getRecentlyAccessedActivitiesWithOutHotelId: (hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/recentlyAccessedActivities`, method: 'GET', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.services = {
            /**
             * @description Use this API to clear the cache for the Activity module <p><strong>OperationId:</strong>deleteActivityServiceCache</p>
             *
             * @tags Activity
             * @name DeleteActivityServiceCache
             * @summary Clear Activity Cache
             * @request DELETE:/services/activity/cache
             */
            deleteActivityServiceCache: (hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/services/activity/cache`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>pingActivityService</p>
             *
             * @tags Activity
             * @name PingActivityService
             * @summary Operation to get health status
             * @request GET:/services/activity/status
             */
            pingActivityService: (hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/services/activity/status`, method: 'GET', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
    }
}
exports.Api = Api;
