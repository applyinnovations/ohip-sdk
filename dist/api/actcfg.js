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
exports.Api = exports.HttpClient = exports.ContentType = exports.ActivityOwnerType = exports.LogicalOperatorType = exports.AutoTraceTriggerCategoryType = exports.AutoTraceBlockCategoryType = exports.ActivityConfigClassType = exports.AutoTraceGroupConfigType = void 0;
/** A collection of supported list of Auto Trace Groups. */
var AutoTraceGroupConfigType;
(function (AutoTraceGroupConfigType) {
    AutoTraceGroupConfigType["Accounts"] = "Accounts";
    AutoTraceGroupConfigType["Contacts"] = "Contacts";
    AutoTraceGroupConfigType["Blocks"] = "Blocks";
    AutoTraceGroupConfigType["Activities"] = "Activities";
})(AutoTraceGroupConfigType = exports.AutoTraceGroupConfigType || (exports.AutoTraceGroupConfigType = {}));
/** A collection of supported list of activity classes. */
var ActivityConfigClassType;
(function (ActivityConfigClassType) {
    ActivityConfigClassType["Appointment"] = "Appointment";
    ActivityConfigClassType["Todo"] = "Todo";
})(ActivityConfigClassType = exports.ActivityConfigClassType || (exports.ActivityConfigClassType = {}));
/** Additional Block information used to trigger activities. */
var AutoTraceBlockCategoryType;
(function (AutoTraceBlockCategoryType) {
    AutoTraceBlockCategoryType["Deposits"] = "Deposits";
    AutoTraceBlockCategoryType["Details"] = "Details";
})(AutoTraceBlockCategoryType = exports.AutoTraceBlockCategoryType || (exports.AutoTraceBlockCategoryType = {}));
/** Contains information on when auto trace would be created. */
var AutoTraceTriggerCategoryType;
(function (AutoTraceTriggerCategoryType) {
    AutoTraceTriggerCategoryType["Create"] = "Create";
    AutoTraceTriggerCategoryType["Update"] = "Update";
    AutoTraceTriggerCategoryType["Delete"] = "Delete";
})(AutoTraceTriggerCategoryType = exports.AutoTraceTriggerCategoryType || (exports.AutoTraceTriggerCategoryType = {}));
var LogicalOperatorType;
(function (LogicalOperatorType) {
    LogicalOperatorType["And"] = "And";
    LogicalOperatorType["Or"] = "Or";
})(LogicalOperatorType = exports.LogicalOperatorType || (exports.LogicalOperatorType = {}));
/** Activity owner. */
var ActivityOwnerType;
(function (ActivityOwnerType) {
    ActivityOwnerType["Current"] = "Current";
    ActivityOwnerType["Primary"] = "Primary";
    ActivityOwnerType["Custom"] = "Custom";
    ActivityOwnerType["Block"] = "Block";
    ActivityOwnerType["Room"] = "Room";
    ActivityOwnerType["Catering"] = "Catering";
})(ActivityOwnerType = exports.ActivityOwnerType || (exports.ActivityOwnerType = {}));
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
        this.instance = axios_1.default.create(Object.assign(Object.assign({}, axiosConfig), { baseURL: new URL('/act/config/v1', axiosConfig.baseURL).toString() }));
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
 * @title OPERA Cloud Activity Management API
 * @version 22.3.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /act/config/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs to cater for Activity Configuration functionality in OPERA Cloud. In this module you can retrieve, create, update Activity configuration codes, for example create a new Activity Type.<br /><br /> Compatible with OPERA Cloud release 22.3.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
class Api extends HttpClient {
    constructor() {
        super(...arguments);
        this.activityResults = {
            /**
             * @description Retrieve a list of all configured Activity Result codes and descriptions.  Activity Results appear on the Activities screen in the Results field after the Activity is completed.  And example could be Call Again - an activity is Completed but the result code as part of the completion is to Call Again. <p><strong>OperationId:</strong>getActivityResultsConfig</p>
             *
             * @tags ActivityManagement
             * @name GetActivityResultsConfig
             * @summary Get all Configured Activity Result Codes
             * @request GET:/activityResults
             */
            getActivityResultsConfig: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/activityResults`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Create a new Activity Results Code, for example SUCCESS, END, CALLAGAIN.  These codes are used when you complete an activity.  You need to specify an Activity Result Code as part of that completion process. <p><strong>OperationId:</strong>postActivityResultsConfig</p>
             *
             * @tags ActivityManagement
             * @name PostActivityResultsConfig
             * @summary Create an Activity results code
             * @request POST:/activityResults
             */
            postActivityResultsConfig: (hotelId, activityResultsConfigInfo, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/activityResults`, method: 'POST', body: activityResultsConfigInfo, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Delete an Activity Result Code from OPERA Cloud. <p><strong>OperationId:</strong>deleteActivityResultsConfig</p>
             *
             * @tags ActivityManagement
             * @name DeleteActivityResultsConfig
             * @summary Delete an Activity results code
             * @request DELETE:/activityResults/{activityResultCode}
             */
            deleteActivityResultsConfig: (hotelId, activityResultCode, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/activityResults/${activityResultCode}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Change or update details of an existing Activity Results Code. <p><strong>OperationId:</strong>putActivityResultsConfig</p>
             *
             * @tags ActivityManagement
             * @name PutActivityResultsConfig
             * @summary Change an Activity Result Code
             * @request PUT:/activityResults/{activityResultCode}
             */
            putActivityResultsConfig: (hotelId, activityResultCode, activityResultsConfigInfo, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/activityResults/${activityResultCode}`, method: 'PUT', body: activityResultsConfigInfo, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.autoTraceCodes = {
            /**
             * @description Retrieve a list of all configured Auto Trace Codes for a property. <p><strong>OperationId:</strong>getAutoTraceCodes</p>
             *
             * @tags ActivityManagement
             * @name GetAutoTraceCodes
             * @summary Get Auto Trace codes
             * @request GET:/autoTraceCodes
             */
            getAutoTraceCodes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/autoTraceCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Create an Auto trace code. <p><strong>OperationId:</strong>postAutoTraceCodes</p>
             *
             * @tags ActivityManagement
             * @name PostAutoTraceCodes
             * @summary Create an Auto Trace code
             * @request POST:/autoTraceCodes
             */
            postAutoTraceCodes: (hotelId, autoTraceCodesInfo, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/autoTraceCodes`, method: 'POST', body: autoTraceCodesInfo, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Delete an Auto trace code. <p><strong>OperationId:</strong>deleteAutoTraceCodes</p>
             *
             * @tags ActivityManagement
             * @name DeleteAutoTraceCodes
             * @summary Delete an Auto Trace code
             * @request DELETE:/autoTraceCodes/{autoTraceCode}
             */
            deleteAutoTraceCodes: (hotelId, autoTraceCode, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/autoTraceCodes/${autoTraceCode}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Update an Auto Trace Code. <p><strong>OperationId:</strong>putAutoTraceCodes</p>
             *
             * @tags ActivityManagement
             * @name PutAutoTraceCodes
             * @summary Change an Auto Trace code
             * @request PUT:/autoTraceCodes/{autoTraceCode}
             */
            putAutoTraceCodes: (hotelId, autoTraceCode, autoTraceCodesInfo, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/autoTraceCodes/${autoTraceCode}`, method: 'PUT', body: autoTraceCodesInfo, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.autoTraceDefinitions = {
            /**
             * @description Delete an Auto trace definition code. <p><strong>OperationId:</strong>deleteAutoTraceDefinitions</p>
             *
             * @tags ActivityManagement
             * @name DeleteAutoTraceDefinitions
             * @summary Delete an Auto Trace definitions Code
             * @request DELETE:/autoTraceDefinitions/{autoTraceDefinitionId}
             */
            deleteAutoTraceDefinitions: (hotelId, autoTraceDefinitionId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/autoTraceDefinitions/${autoTraceDefinitionId}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.autoTraceOwnerAssignments = {
            /**
             * @description Delete a Trace owner assignment configured for a property. <p><strong>OperationId:</strong>deleteAutoTraceOwnerAssignments</p>
             *
             * @tags ActivityManagement
             * @name DeleteAutoTraceOwnerAssignments
             * @summary Delete an Auto Trace owner assignment
             * @request DELETE:/autoTraceOwnerAssignments/{autoTraceOwnerAssignmentID}
             */
            deleteAutoTraceOwnerAssignments: (hotelId, autoTraceOwnerAssignmentId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/autoTraceOwnerAssignments/${autoTraceOwnerAssignmentId}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.copyActivityTypes = {
            /**
             * @description With this API you can select  existing Activity Type Codes from the source property and copy them to another (target) property. <p><strong>OperationId:</strong>copyActivityTypesConfig</p>
             *
             * @tags ActivityManagement
             * @name CopyActivityTypesConfig
             * @summary Copy Activity Types configuration codes
             * @request POST:/copyActivityTypes/sourceHotel/{hotelId}
             */
            copyActivityTypesConfig: (hotelId, activityTypesConfigCopy, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/copyActivityTypes/sourceHotel/${hotelId}`, method: 'POST', body: activityTypesConfigCopy, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.copyAutoTraceDefinitions = {
            /**
             * @description Copy an existing auto trace definition code to another property. <p><strong>OperationId:</strong>copyAutoTraceDefinitions</p>
             *
             * @tags ActivityManagement
             * @name CopyAutoTraceDefinitions
             * @summary Copy an Auto Trace definition Code
             * @request POST:/copyAutoTraceDefinitions/sourceHotel/{hotelId}
             */
            copyAutoTraceDefinitions: (hotelId, autoTraceDefinitionCopy, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/copyAutoTraceDefinitions/sourceHotel/${hotelId}`, method: 'POST', body: autoTraceDefinitionCopy, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.hotels = {
            /**
             * @description Retrieve all configured Activity types for a specified hotel. <p><strong>OperationId:</strong>getActivityTypes</p>
             *
             * @tags ActivityManagement
             * @name GetActivityTypes
             * @summary Get all Activity Type Codes
             * @request GET:/hotels/{hotelId}/activityTypes
             */
            getActivityTypes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/activityTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Create a new Activity Type for a specified hotel. Examples could be  MEETING, LUNCH, EXTMEETING. <p><strong>OperationId:</strong>postActivityTypes</p>
             *
             * @tags ActivityManagement
             * @name PostActivityTypes
             * @summary Create a new Activity type in configuration
             * @request POST:/hotels/{hotelId}/activityTypes
             */
            postActivityTypes: (hotelId, activityTypesConfigInfo, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/activityTypes`, method: 'POST', body: activityTypesConfigInfo, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This will delete an Activity Type Code from the properties configuration. <p><strong>OperationId:</strong>deleteActivityTypes</p>
             *
             * @tags ActivityManagement
             * @name DeleteActivityTypes
             * @summary Delete an Activity Type Code
             * @request DELETE:/hotels/{hotelId}/activityTypes/{activityTypeCode}
             */
            deleteActivityTypes: (activityTypeCode, hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/activityTypes/${activityTypeCode}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Change or update details of an existing Activity Type for a property. <p><strong>OperationId:</strong>putActivityTypes</p>
             *
             * @tags ActivityManagement
             * @name PutActivityTypes
             * @summary Update Activity Types
             * @request PUT:/hotels/{hotelId}/activityTypes/{activityTypeCode}
             */
            putActivityTypes: (activityTypeCode, hotelId, activityTypesConfigInfo, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/activityTypes/${activityTypeCode}`, method: 'PUT', body: activityTypesConfigInfo, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Get a list of all Auto trace definitions for a property. <p><strong>OperationId:</strong>getAutoTraceDefinitions</p>
             *
             * @tags ActivityManagement
             * @name GetAutoTraceDefinitions
             * @summary Get a list of Auto Trace definition Codes
             * @request GET:/hotels/{hotelId}/autoTraceDefinitions
             */
            getAutoTraceDefinitions: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/autoTraceDefinitions`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Create a new Auto Trace Definition code for a specified property. <p><strong>OperationId:</strong>postAutoTraceDefinitions</p>
             *
             * @tags ActivityManagement
             * @name PostAutoTraceDefinitions
             * @summary Create an Auto Trace Definition Code
             * @request POST:/hotels/{hotelId}/autoTraceDefinitions
             */
            postAutoTraceDefinitions: (hotelId, autoTraceDefinitionsInfo, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/autoTraceDefinitions`, method: 'POST', body: autoTraceDefinitionsInfo, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Change an Auto Trace Definition code for a specified property. <p><strong>OperationId:</strong>putAutoTraceDefinitions</p>
             *
             * @tags ActivityManagement
             * @name PutAutoTraceDefinitions
             * @summary Change an Auto Trace definition Code
             * @request PUT:/hotels/{hotelId}/autoTraceDefinitions/{autoTraceDefinitionId}
             */
            putAutoTraceDefinitions: (autoTraceDefinitionId, hotelId, autoTraceDefinitionsInfo, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/autoTraceDefinitions/${autoTraceDefinitionId}`, method: 'PUT', body: autoTraceDefinitionsInfo, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API will provide a list of all configured Auto Trace Owner Mappings.   <p><strong>OperationId:</strong>getAutoTraceOwnerAssignments</p>
             *
             * @tags ActivityManagement
             * @name GetAutoTraceOwnerAssignments
             * @summary Get an Auto Trace owner mappings
             * @request GET:/hotels/{hotelId}/autoTraceOwnerAssignments
             */
            getAutoTraceOwnerAssignments: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/autoTraceOwnerAssignments`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can create Auto traces so that activities are created automatically under certain configured conditions. You first need a Trace code configured, and then using this API you can link the Owner code and Trace Code to a Trace Group (account, contact, activity, or block). <p><strong>OperationId:</strong>postAutoTraceOwnerAssignments</p>
             *
             * @tags ActivityManagement
             * @name PostAutoTraceOwnerAssignments
             * @summary Create an Auto Trace owner assignment
             * @request POST:/hotels/{hotelId}/autoTraceOwnerAssignments
             */
            postAutoTraceOwnerAssignments: (hotelId, autoTraceOwnerAssignmentsInfo, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/autoTraceOwnerAssignments`, method: 'POST', body: autoTraceOwnerAssignmentsInfo, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Change a Trace owner assignment configured for a property. <p><strong>OperationId:</strong>putAutoTraceOwnerAssignments</p>
             *
             * @tags ActivityManagement
             * @name PutAutoTraceOwnerAssignments
             * @summary Change Trace owner assignments
             * @request PUT:/hotels/{hotelId}/autoTraceOwnerAssignments/{autoTraceOwnerAssignmentID}
             */
            putAutoTraceOwnerAssignments: (autoTraceOwnerAssignmentId, hotelId, autoTraceOwnerAssignmentsInfo, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/autoTraceOwnerAssignments/${autoTraceOwnerAssignmentId}`, method: 'PUT', body: autoTraceOwnerAssignmentsInfo, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.services = {
            /**
             * @description  <p><strong>OperationId:</strong>deleteActivityManagementServicesCache</p>
             *
             * @tags ActivityManagement
             * @name DeleteActivityManagementServicesCache
             * @summary Operation to clear cache.
             * @request DELETE:/services/activityManagement/cache
             */
            deleteActivityManagementServicesCache: (hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/services/activityManagement/cache`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>pingActivityManagementServices</p>
             *
             * @tags ActivityManagement
             * @name PingActivityManagementServices
             * @summary Operation to ping.
             * @request GET:/services/activityManagement/status
             */
            pingActivityManagementServices: (hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/services/activityManagement/status`, method: 'GET', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
    }
}
exports.Api = Api;
