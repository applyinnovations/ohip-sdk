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
exports.Api = exports.HttpClient = exports.ContentType = exports.ExchangeProfileTypeType = exports.MatchAttributeTypeType = exports.ExchangeInterfaceStatusCommandType = exports.ExchangeInterfaceStatusType = exports.InterfaceStatusProcessRoleType = exports.InterfaceStatusProcessTypeType = exports.OXIMessageStatusType = exports.ExchangeStatReportCodeType = exports.ExchangeStatCodeType = exports.StatUnitCategoryType = exports.ApplicationSettingLevelType = exports.ApplicationSettingConversionType = exports.ApplicationSettingTypeType = exports.AccumulatedBusinessEventStatusType = exports.InterfaceSystemType = exports.IntegrationSystemType = exports.SystemType = exports.CommunicationType = exports.DaysOfWeekType = exports.AutomaticTransmissionScheduleFrequencyTypeType = exports.AutomaticTransmissionScheduleModuleTypeType = void 0;
/** Data modules that are currently supported */
var AutomaticTransmissionScheduleModuleTypeType;
(function (AutomaticTransmissionScheduleModuleTypeType) {
    AutomaticTransmissionScheduleModuleTypeType["ARExport"] = "ARExport";
    AutomaticTransmissionScheduleModuleTypeType["Block"] = "Block";
    AutomaticTransmissionScheduleModuleTypeType["Inventory"] = "Inventory";
    AutomaticTransmissionScheduleModuleTypeType["ProfileRequest"] = "ProfileRequest";
    AutomaticTransmissionScheduleModuleTypeType["ProfileDailyStats"] = "ProfileDailyStats";
})(AutomaticTransmissionScheduleModuleTypeType = exports.AutomaticTransmissionScheduleModuleTypeType || (exports.AutomaticTransmissionScheduleModuleTypeType = {}));
/** Frequency for transmission such as Daily, Weekly, Monthly, Yearly and Interval settings */
var AutomaticTransmissionScheduleFrequencyTypeType;
(function (AutomaticTransmissionScheduleFrequencyTypeType) {
    AutomaticTransmissionScheduleFrequencyTypeType["Daily"] = "Daily";
    AutomaticTransmissionScheduleFrequencyTypeType["Weekly"] = "Weekly";
    AutomaticTransmissionScheduleFrequencyTypeType["Monthly"] = "Monthly";
    AutomaticTransmissionScheduleFrequencyTypeType["Yearly"] = "Yearly";
    AutomaticTransmissionScheduleFrequencyTypeType["Interval"] = "Interval";
})(AutomaticTransmissionScheduleFrequencyTypeType = exports.AutomaticTransmissionScheduleFrequencyTypeType || (exports.AutomaticTransmissionScheduleFrequencyTypeType = {}));
/** Allowed values for the days of week type. */
var DaysOfWeekType;
(function (DaysOfWeekType) {
    DaysOfWeekType["Monday"] = "Monday";
    DaysOfWeekType["Tuesday"] = "Tuesday";
    DaysOfWeekType["Wednesday"] = "Wednesday";
    DaysOfWeekType["Thursday"] = "Thursday";
    DaysOfWeekType["Friday"] = "Friday";
    DaysOfWeekType["Saturday"] = "Saturday";
    DaysOfWeekType["Sunday"] = "Sunday";
})(DaysOfWeekType = exports.DaysOfWeekType || (exports.DaysOfWeekType = {}));
/** Define values for Communication Types. e.g. NO_COMMUNICATION for None, HTTP for HTTP/S. */
var CommunicationType;
(function (CommunicationType) {
    CommunicationType["None"] = "None";
    CommunicationType["Http"] = "Http";
})(CommunicationType = exports.CommunicationType || (exports.CommunicationType = {}));
/** Defines values for System Type */
var SystemType;
(function (SystemType) {
    SystemType["Dev"] = "Dev";
    SystemType["Uat"] = "Uat";
    SystemType["Stage"] = "Stage";
    SystemType["Prod"] = "Prod";
})(SystemType = exports.SystemType || (exports.SystemType = {}));
/** Represents both OXI and OXI HUB are installed. */
var IntegrationSystemType;
(function (IntegrationSystemType) {
    IntegrationSystemType["Central"] = "Central";
    IntegrationSystemType["Property"] = "Property";
    IntegrationSystemType["Both"] = "Both";
})(IntegrationSystemType = exports.IntegrationSystemType || (exports.IntegrationSystemType = {}));
/** Defines values for System Type of the interface */
var InterfaceSystemType;
(function (InterfaceSystemType) {
    InterfaceSystemType["Oxi"] = "Oxi";
    InterfaceSystemType["OxiHub"] = "OxiHub";
    InterfaceSystemType["OgSpa"] = "OgSpa";
    InterfaceSystemType["OgGaming"] = "OgGaming";
    InterfaceSystemType["Bexml"] = "Bexml";
    InterfaceSystemType["Import"] = "Import";
    InterfaceSystemType["WebServices"] = "WebServices";
})(InterfaceSystemType = exports.InterfaceSystemType || (exports.InterfaceSystemType = {}));
/** State of Accumulated Business Event */
var AccumulatedBusinessEventStatusType;
(function (AccumulatedBusinessEventStatusType) {
    AccumulatedBusinessEventStatusType["New"] = "New";
    AccumulatedBusinessEventStatusType["Ready"] = "Ready";
})(AccumulatedBusinessEventStatusType = exports.AccumulatedBusinessEventStatusType || (exports.AccumulatedBusinessEventStatusType = {}));
var ApplicationSettingTypeType;
(function (ApplicationSettingTypeType) {
    ApplicationSettingTypeType["Function"] = "Function";
    ApplicationSettingTypeType["Parameter"] = "Parameter";
    ApplicationSettingTypeType["Setting"] = "Setting";
})(ApplicationSettingTypeType = exports.ApplicationSettingTypeType || (exports.ApplicationSettingTypeType = {}));
var ApplicationSettingConversionType;
(function (ApplicationSettingConversionType) {
    ApplicationSettingConversionType["Default"] = "Default";
    ApplicationSettingConversionType["Parameter"] = "Parameter";
})(ApplicationSettingConversionType = exports.ApplicationSettingConversionType || (exports.ApplicationSettingConversionType = {}));
var ApplicationSettingLevelType;
(function (ApplicationSettingLevelType) {
    ApplicationSettingLevelType["Global"] = "Global";
    ApplicationSettingLevelType["Hotel"] = "Hotel";
    ApplicationSettingLevelType["Cro"] = "Cro";
})(ApplicationSettingLevelType = exports.ApplicationSettingLevelType || (exports.ApplicationSettingLevelType = {}));
/** Supported statistical units. */
var StatUnitCategoryType;
(function (StatUnitCategoryType) {
    StatUnitCategoryType["Numeric"] = "Numeric";
    StatUnitCategoryType["Amount"] = "Amount";
})(StatUnitCategoryType = exports.StatUnitCategoryType || (exports.StatUnitCategoryType = {}));
/** Supported Exchange Interface statistical codes. */
var ExchangeStatCodeType;
(function (ExchangeStatCodeType) {
    ExchangeStatCodeType["Success"] = "Success";
    ExchangeStatCodeType["Failed"] = "Failed";
    ExchangeStatCodeType["Warning"] = "Warning";
    ExchangeStatCodeType["Total"] = "Total";
})(ExchangeStatCodeType = exports.ExchangeStatCodeType || (exports.ExchangeStatCodeType = {}));
/** Supported Exchange Interface report codes. */
var ExchangeStatReportCodeType;
(function (ExchangeStatReportCodeType) {
    ExchangeStatReportCodeType["UploadedMessages"] = "UploadedMessages";
    ExchangeStatReportCodeType["DownloadedMessages"] = "DownloadedMessages";
})(ExchangeStatReportCodeType = exports.ExchangeStatReportCodeType || (exports.ExchangeStatReportCodeType = {}));
/** Supported Message Status. */
var OXIMessageStatusType;
(function (OXIMessageStatusType) {
    OXIMessageStatusType["Processed"] = "Processed";
    OXIMessageStatusType["Failed"] = "Failed";
    OXIMessageStatusType["Ready"] = "Ready";
    OXIMessageStatusType["Expired"] = "Expired";
})(OXIMessageStatusType = exports.OXIMessageStatusType || (exports.OXIMessageStatusType = {}));
/** Processor use Database Job. */
var InterfaceStatusProcessTypeType;
(function (InterfaceStatusProcessTypeType) {
    InterfaceStatusProcessTypeType["NtService"] = "NtService";
    InterfaceStatusProcessTypeType["DbmsJob"] = "DbmsJob";
})(InterfaceStatusProcessTypeType = exports.InterfaceStatusProcessTypeType || (exports.InterfaceStatusProcessTypeType = {}));
/** FileExport process. */
var InterfaceStatusProcessRoleType;
(function (InterfaceStatusProcessRoleType) {
    InterfaceStatusProcessRoleType["Upload"] = "Upload";
    InterfaceStatusProcessRoleType["Download"] = "Download";
    InterfaceStatusProcessRoleType["Lookup"] = "Lookup";
    InterfaceStatusProcessRoleType["Communication"] = "Communication";
    InterfaceStatusProcessRoleType["Resync"] = "Resync";
    InterfaceStatusProcessRoleType["FileExport"] = "FileExport";
})(InterfaceStatusProcessRoleType = exports.InterfaceStatusProcessRoleType || (exports.InterfaceStatusProcessRoleType = {}));
/** Indicates that Interface process is disconnected. */
var ExchangeInterfaceStatusType;
(function (ExchangeInterfaceStatusType) {
    ExchangeInterfaceStatusType["Running"] = "Running";
    ExchangeInterfaceStatusType["Stopped"] = "Stopped";
    ExchangeInterfaceStatusType["Exited"] = "Exited";
    ExchangeInterfaceStatusType["Disconnected"] = "Disconnected";
})(ExchangeInterfaceStatusType = exports.ExchangeInterfaceStatusType || (exports.ExchangeInterfaceStatusType = {}));
/** Command to restart Interface process. */
var ExchangeInterfaceStatusCommandType;
(function (ExchangeInterfaceStatusCommandType) {
    ExchangeInterfaceStatusCommandType["Start"] = "Start";
    ExchangeInterfaceStatusCommandType["Stop"] = "Stop";
    ExchangeInterfaceStatusCommandType["Exit"] = "Exit";
    ExchangeInterfaceStatusCommandType["Diagnostic"] = "Diagnostic";
    ExchangeInterfaceStatusCommandType["Restart"] = "Restart";
})(ExchangeInterfaceStatusCommandType = exports.ExchangeInterfaceStatusCommandType || (exports.ExchangeInterfaceStatusCommandType = {}));
/** Profiles to match with Alternate Last Name. Alternate Last Name is not for OXI. */
var MatchAttributeTypeType;
(function (MatchAttributeTypeType) {
    MatchAttributeTypeType["AddressLine1"] = "AddressLine1";
    MatchAttributeTypeType["ARNumber"] = "ARNumber";
    MatchAttributeTypeType["Birthday"] = "Birthday";
    MatchAttributeTypeType["City"] = "City";
    MatchAttributeTypeType["ClientID"] = "ClientID";
    MatchAttributeTypeType["CorpNumber"] = "CorpNumber";
    MatchAttributeTypeType["Country"] = "Country";
    MatchAttributeTypeType["CreditCard"] = "CreditCard";
    MatchAttributeTypeType["Email"] = "Email";
    MatchAttributeTypeType["Fax"] = "Fax";
    MatchAttributeTypeType["FirstName"] = "FirstName";
    MatchAttributeTypeType["IATANumber"] = "IATANumber";
    MatchAttributeTypeType["MembershipNumber"] = "MembershipNumber";
    MatchAttributeTypeType["LastName"] = "LastName";
    MatchAttributeTypeType["PassportNumber"] = "PassportNumber";
    MatchAttributeTypeType["PhoneNumber"] = "PhoneNumber";
    MatchAttributeTypeType["PostalCode"] = "PostalCode";
    MatchAttributeTypeType["State"] = "State";
    MatchAttributeTypeType["SubscriptionID"] = "SubscriptionID";
    MatchAttributeTypeType["AlternateFirstName"] = "AlternateFirstName";
    MatchAttributeTypeType["AlternateLastName"] = "AlternateLastName";
})(MatchAttributeTypeType = exports.MatchAttributeTypeType || (exports.MatchAttributeTypeType = {}));
/** Represents Group profile type. */
var ExchangeProfileTypeType;
(function (ExchangeProfileTypeType) {
    ExchangeProfileTypeType["Guest"] = "Guest";
    ExchangeProfileTypeType["Company"] = "Company";
    ExchangeProfileTypeType["TravelAgent"] = "TravelAgent";
    ExchangeProfileTypeType["Source"] = "Source";
    ExchangeProfileTypeType["Group"] = "Group";
})(ExchangeProfileTypeType = exports.ExchangeProfileTypeType || (exports.ExchangeProfileTypeType = {}));
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
        this.instance = axios_1.default.create(Object.assign(Object.assign({}, axiosConfig), { baseURL: new URL('/oxi/v1', axiosConfig.baseURL).toString() }));
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
 * @title OPERA Cloud Xchange Interface OXI API
 * @version 23.0.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /oxi/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs to create and manage OPERA Xchange Interface (OXI) configurations for OPERA Cloud Exchange module functionality.<br /><br /> Compatible with OPERA Cloud release 23.0.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
class Api extends HttpClient {
    constructor() {
        super(...arguments);
        this.automaticTransmissionSchedules = {
            /**
             * @description API to Create Automatic Transmission Schedules. <p><strong>OperationId:</strong>postAutomaticTransmissionSchedules</p>
             *
             * @tags OperaExchangeInterfaceConfig
             * @name PostAutomaticTransmissionSchedules
             * @summary Create Automatic Transmission Schedules
             * @request POST:/automaticTransmissionSchedules
             */
            postAutomaticTransmissionSchedules: (hotelId, automaticTransmissionSchedulesToBeCreated, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/automaticTransmissionSchedules`, method: 'POST', body: automaticTransmissionSchedulesToBeCreated, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.communicationMethods = {
            /**
             * @description API to Modify Communication Methods. <p><strong>OperationId:</strong>putCommunicationMethods</p>
             *
             * @tags OperaExchangeInterfaceConfig
             * @name PutCommunicationMethods
             * @summary Modify Communication Methods
             * @request PUT:/communicationMethods
             */
            putCommunicationMethods: (hotelId, communicationMethodsToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/communicationMethods`, method: 'PUT', body: communicationMethodsToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.conversionCodeMappingId = {
            /**
             * @description API to Delete  Interface Mapping Conversion Codes by Conversion Code Mapping Id. <p><strong>OperationId:</strong>deleteConversionCodeMappings</p>
             *
             * @tags OperaExchangeInterfaceConfig
             * @name DeleteConversionCodeMappings
             * @summary Remove Conversion Codes Mappings
             * @request DELETE:/conversionCodeMappingID/{id}/conversionCodeMapping
             */
            deleteConversionCodeMappings: (hotelId, id, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/conversionCodeMappingID/${id}/conversionCodeMapping`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.conversionCodesStatus = {
            /**
             * @description API to Modify Interface Mapping UDF Conversion Codes. <p><strong>OperationId:</strong>putConversionCodesStatus</p>
             *
             * @tags OperaExchangeInterfaceConfig
             * @name PutConversionCodesStatus
             * @summary Change Conversion codes Status
             * @request PUT:/conversionCodesStatus
             */
            putConversionCodesStatus: (hotelId, conversionCodesStatusToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/conversionCodesStatus`, method: 'PUT', body: conversionCodesStatusToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.externalInterfaceSetups = {
            /**
             * @description API to Create Interface Setup configuration. <p><strong>OperationId:</strong>postExternalInterfaceSetups</p>
             *
             * @tags OperaExchangeInterfaceConfig
             * @name PostExternalInterfaceSetups
             * @summary Create Interface Setup details
             * @request POST:/externalInterfaceSetups
             */
            postExternalInterfaceSetups: (hotelId, externalInterfaceSetupsToBeCreated, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/externalInterfaceSetups`, method: 'POST', body: externalInterfaceSetupsToBeCreated, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.hotels = {
            /**
             * @description API to Fetch Inbound Messages From External System by Hotel Id, Interface Id. <p><strong>OperationId:</strong>getIntegrationInboundMessages</p>
             *
             * @tags OperaExchangeInterfaceConfig
             * @name GetIntegrationInboundMessages
             * @summary Fetch integration inbound messages
             * @request GET:/hotels/{externalHotelCode}/interfaces/{interfaceId}/integrationSystems/{integrationSystem}/integrationInboundMessages
             */
            getIntegrationInboundMessages: (hotelId, integrationSystem, interfaceId, externalHotelCode, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${externalHotelCode}/interfaces/${interfaceId}/integrationSystems/${integrationSystem}/integrationInboundMessages`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description API to Fetch Automatic Transmission Schedules by Hotel Id. <p><strong>OperationId:</strong>getAutomaticTransmissionSchedules</p>
             *
             * @tags OperaExchangeInterfaceConfig
             * @name GetAutomaticTransmissionSchedules
             * @summary Fetch Automatic Transmission Schedules
             * @request GET:/hotels/{hotelId}/automaticTransmissionSchedules
             */
            getAutomaticTransmissionSchedules: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/automaticTransmissionSchedules`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description API to Modify  Automatic Transmission Schedules by Hotel Id. <p><strong>OperationId:</strong>putAutomaticTransmissionSchedules</p>
             *
             * @tags OperaExchangeInterfaceConfig
             * @name PutAutomaticTransmissionSchedules
             * @summary Change Automatic Transmission Schedules
             * @request PUT:/hotels/{hotelId}/automaticTransmissionSchedules
             */
            putAutomaticTransmissionSchedules: (hotelId, automaticTransmissionSchedulesToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/automaticTransmissionSchedules`, method: 'PUT', body: automaticTransmissionSchedulesToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description API to Fetch Interface Mappings UDF Conversion Codes by Hotel Id and Interface Id. <p><strong>OperationId:</strong>getConversionCodes</p>
             *
             * @tags OperaExchangeInterfaceConfig
             * @name GetConversionCodes
             * @summary Fetch Conversion Codes
             * @request GET:/hotels/{hotelId}/intefaces/{interfaceId}/conversionCodes
             */
            getConversionCodes: (interfaceId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/intefaces/${interfaceId}/conversionCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description API to Fetch  Accumulated Business Event Messages for External Systems by Hotel Id, Interface Id. <p><strong>OperationId:</strong>getAccumulatedBusinessEvents</p>
             *
             * @tags OperaExchangeInterfaceConfig
             * @name GetAccumulatedBusinessEvents
             * @summary Fetch accumulated business events
             * @request GET:/hotels/{hotelId}/interfaces/{interfaceId}/accumulatedBusinessEvents
             */
            getAccumulatedBusinessEvents: (interfaceId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/interfaces/${interfaceId}/accumulatedBusinessEvents`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description API to Modify  Interface Mapping  Conversion Codes by Hotel Id, Interface Id and Conversion Code Id with OPERA value and External value. <p><strong>OperationId:</strong>putConversionCodeMappings</p>
             *
             * @tags OperaExchangeInterfaceConfig
             * @name PutConversionCodeMappings
             * @summary Change Conversion Codes Mappings
             * @request PUT:/hotels/{hotelId}/interfaces/{interfaceId}/conversionCode/{conversionCode}/ID/{id}/operaValue/{operaValue}/externalValue/{externalValue}/conversionCodeMapping
             */
            putConversionCodeMappings: (externalValue, operaValue, id, conversionCode, interfaceId, hotelId, conversionCodeMappingsToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/interfaces/${interfaceId}/conversionCode/${conversionCode}/ID/${id}/operaValue/${operaValue}/externalValue/${externalValue}/conversionCodeMapping`, method: 'PUT', body: conversionCodeMappingsToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description API to Create  Interface Mapping Conversion Codes by Hotel Id, Interface Id and Conversion Code with OPERA value and External value. <p><strong>OperationId:</strong>postConversionCodeMappings</p>
             *
             * @tags OperaExchangeInterfaceConfig
             * @name PostConversionCodeMappings
             * @summary Create Conversion Codes Mappings
             * @request POST:/hotels/{hotelId}/interfaces/{interfaceId}/conversionCode/{conversionCode}/operaValue/{operaValue}/externalValue/{externalValue}/conversionCodeMapping
             */
            postConversionCodeMappings: (externalValue, operaValue, conversionCode, interfaceId, hotelId, conversionCodeMappingsToBeCreated, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/interfaces/${interfaceId}/conversionCode/${conversionCode}/operaValue/${operaValue}/externalValue/${externalValue}/conversionCodeMapping`, method: 'POST', body: conversionCodeMappingsToBeCreated, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description API to Delete Interface Mapping UDF Conversion Codes by Hotel Id, Interface Id and Conversion Code. <p><strong>OperationId:</strong>deleteUDFMappings</p>
             *
             * @tags OperaExchangeInterfaceConfig
             * @name DeleteUdfMappings
             * @summary Remove UDF Mappings
             * @request DELETE:/hotels/{hotelId}/interfaces/{interfaceId}/conversionCode/{conversionCode}/operaValue/{operaValue}/udfMapping
             */
            deleteUdfMappings: (operaValue, conversionCode, interfaceId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/interfaces/${interfaceId}/conversionCode/${conversionCode}/operaValue/${operaValue}/udfMapping`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description API to Fetch Interface Mapping  Conversion Codes by Hotel Id, Interface Id and Conversion Code. <p><strong>OperationId:</strong>getConversionCodeMappings</p>
             *
             * @tags OperaExchangeInterfaceConfig
             * @name GetConversionCodeMappings
             * @summary Fetch Conversion Code Mappings
             * @request GET:/hotels/{hotelId}/interfaces/{interfaceId}/conversions/{conversionCode}/conversionCodeMapping
             */
            getConversionCodeMappings: (conversionCode, interfaceId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/interfaces/${interfaceId}/conversions/${conversionCode}/conversionCodeMapping`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description API to Delete Interface Setup configuration by Hotel Id and Interface Id. <p><strong>OperationId:</strong>deleteExternalInterfaceSetups</p>
             *
             * @tags OperaExchangeInterfaceConfig
             * @name DeleteExternalInterfaceSetups
             * @summary Delete external Interface Setup details
             * @request DELETE:/hotels/{hotelId}/interfaces/{interfaceId}/externalInterfaceSetups
             */
            deleteExternalInterfaceSetups: (interfaceId, hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/interfaces/${interfaceId}/externalInterfaceSetups`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description API to Fetch Outbound Messages To External System by Hotel Id, Interface Id. <p><strong>OperationId:</strong>getIntegrationOutboundMessages</p>
             *
             * @tags OperaExchangeInterfaceConfig
             * @name GetIntegrationOutboundMessages
             * @summary fetch integration outbound messages
             * @request GET:/hotels/{hotelId}/interfaces/{interfaceId}/integrationSystems/{integrationSystem}/integrationOutboundMessages
             */
            getIntegrationOutboundMessages: (integrationSystem, interfaceId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/interfaces/${interfaceId}/integrationSystems/${integrationSystem}/integrationOutboundMessages`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description API to Fetch  Interface Controls  by Hotel Id and Interface Id <p><strong>OperationId:</strong>getInterfaceControls</p>
             *
             * @tags OperaExchangeInterfaceConfig
             * @name GetInterfaceControls
             * @summary Retrieve OXI Parameters and Defaults
             * @request GET:/hotels/{hotelId}/interfaces/{interfaceId}/interfaceControls
             */
            getInterfaceControls: (interfaceId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/interfaces/${interfaceId}/interfaceControls`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description API to Delete  Profile Match Rules by Hotel Id, Interface Id and Profile Type. <p><strong>OperationId:</strong>deleteProfileMatchRules</p>
             *
             * @tags OperaExchangeInterfaceConfig
             * @name DeleteProfileMatchRules
             * @summary Delete profile match rules
             * @request DELETE:/hotels/{hotelId}/interfaces/{interfaceId}/profiles/{profileType}/profileMatchRules
             */
            deleteProfileMatchRules: (profileType, interfaceId, hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/interfaces/${interfaceId}/profiles/${profileType}/profileMatchRules`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description API to Fetch OXI Dashboard Tile Statistics (Upload and Download message counts by Success, Fail and Warning Status codes) by Hotel Id and Interface Id. <p><strong>OperationId:</strong>getMessageStatistics</p>
             *
             * @tags OperaExchangeInterfaceStats
             * @name GetMessageStatistics
             * @summary Retrieves the statistics of Messages for Opera Exchange Interface.
             * @request GET:/hotels/{hotelId}/messageStatistics
             */
            getMessageStatistics: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/messageStatistics`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description API to retrieve message statistics for inbound , outbound and business event queues. <p><strong>OperationId:</strong>getOXIMessageStatistics</p>
             *
             * @tags OperaExchangeInterfaceStats
             * @name GetOxiMessageStatistics
             * @summary Retrieves the statistics of Messages in inbound,outbound and BE queues.
             * @request GET:/hotels/{hotelId}/queues/{queueName}/messageStatistics
             */
            getOxiMessageStatistics: (queueName, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/queues/${queueName}/messageStatistics`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.intefaces = {
            /**
             * @description API to Fetch Communication Methods. <p><strong>OperationId:</strong>getCommunicationMethods</p>
             *
             * @tags OperaExchangeInterfaceConfig
             * @name GetCommunicationMethods
             * @summary Fetch Communication Methods
             * @request GET:/intefaces/{interfaceId}/communicationMethods
             */
            getCommunicationMethods: (hotelId, interfaceId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/intefaces/${interfaceId}/communicationMethods`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.interfaceSetups = {
            /**
             * @description API to Fetch Interface Setup configurations by Interface Ids and Hotel Ids. <p><strong>OperationId:</strong>getExternalInterfaceSetups</p>
             *
             * @tags OperaExchangeInterfaceConfig
             * @name GetExternalInterfaceSetups
             * @summary fetch external Interface Setup details
             * @request GET:/interfaceSetups
             */
            getExternalInterfaceSetups: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/interfaceSetups`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description API to Modify  Interface Setup configuration. <p><strong>OperationId:</strong>putExternalInterfaceSetups</p>
             *
             * @tags OperaExchangeInterfaceConfig
             * @name PutExternalInterfaceSetups
             * @summary Modify external Interface Setup details
             * @request PUT:/interfaceSetups
             */
            putExternalInterfaceSetups: (hotelId, externalInterfaceSetupsToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/interfaceSetups`, method: 'PUT', body: externalInterfaceSetupsToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.interfaces = {
            /**
             * @description API to purge messages from inbound and outbound queues. <p><strong>OperationId:</strong>dequeueOXIMessages</p>
             *
             * @tags OperaExchangeInterfaceStats
             * @name DequeueOxiMessages
             * @summary Purge the messages from OXI inbound and outbound queues.
             * @request DELETE:/interfaces/{interfaceId}/hotels/{hotelId}/queues/{queueName}/dequeueOXIMessages
             */
            dequeueOxiMessages: (queueName, hotelId, interfaceId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/interfaces/${interfaceId}/hotels/${hotelId}/queues/${queueName}/dequeueOXIMessages`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description API to Modify Interface Controls by Interface Id. <p><strong>OperationId:</strong>putInterfaceControls</p>
             *
             * @tags OperaExchangeInterfaceConfig
             * @name PutInterfaceControls
             * @summary Change OXI Parameters and Defaults
             * @request PUT:/interfaces/{interfaceId}/interfaceControls
             */
            putInterfaceControls: (hotelId, interfaceId, interfaceControlsToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/interfaces/${interfaceId}/interfaceControls`, method: 'PUT', body: interfaceControlsToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description API to Fetch legacy OXI Interface Processor Status by Interface Id. <p><strong>OperationId:</strong>getLegacyInterfaceStatus</p>
             *
             * @tags OperaExchangeInterfaceConfig
             * @name GetLegacyInterfaceStatus
             * @summary Fetch legacy interface status
             * @request GET:/interfaces/{interfaceId}/legacyInterfaceStatus
             */
            getLegacyInterfaceStatus: (hotelId, interfaceId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/interfaces/${interfaceId}/legacyInterfaceStatus`, method: 'GET', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description API to Fetch Profile Match Rules by Interface Id and Hotel Id. <p><strong>OperationId:</strong>getProfileMatchRules</p>
             *
             * @tags OperaExchangeInterfaceConfig
             * @name GetProfileMatchRules
             * @summary Fetch profile match rules
             * @request GET:/interfaces/{interfaceId}/profileMatchRules
             */
            getProfileMatchRules: (hotelId, interfaceId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/interfaces/${interfaceId}/profileMatchRules`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.lovCode = {
            /**
             * @description API to Fetch list of values for all OXI interface type External Systems. <p><strong>OperationId:</strong>getOXIListOfValues</p>
             *
             * @tags OperaExchangeInterfaceConfig
             * @name GetOxiListOfValues
             * @summary Fetch list of values details for OXI
             * @request GET:/lovCode/{lovCode}/listOfValuesOXI
             */
            getOxiListOfValues: (hotelId, lovCode, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/lovCode/${lovCode}/listOfValuesOXI`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.messages = {
            /**
             * @description API to Delete  Automatic Transmission Schedules by Scheduled Message Id. <p><strong>OperationId:</strong>deleteAutomaticTransmissionSchedules</p>
             *
             * @tags OperaExchangeInterfaceConfig
             * @name DeleteAutomaticTransmissionSchedules
             * @summary Remove Automatic Transmission Schedules
             * @request DELETE:/messages/{messageId}/automaticTransmissionSchedules
             */
            deleteAutomaticTransmissionSchedules: (hotelId, messageId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/messages/${messageId}/automaticTransmissionSchedules`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description API to Fetch OXI Inbound/Outbound XML Message Content by Message Id. <p><strong>OperationId:</strong>getIntegrationMessageAttachments</p>
             *
             * @tags OperaExchangeContent
             * @name GetIntegrationMessageAttachments
             * @summary Fetch integration message attachments
             * @request GET:/messages/{messageId}/integrationMessageAttachments
             */
            getIntegrationMessageAttachments: (hotelId, messageId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/messages/${messageId}/integrationMessageAttachments`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.profileMatchRules = {
            /**
             * @description API to Create Profile Match Rules. <p><strong>OperationId:</strong>postProfileMatchRules</p>
             *
             * @tags OperaExchangeInterfaceConfig
             * @name PostProfileMatchRules
             * @summary Create profile match rules
             * @request POST:/profileMatchRules
             */
            postProfileMatchRules: (hotelId, profileMatchRulesToBeCreated, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/profileMatchRules`, method: 'POST', body: profileMatchRulesToBeCreated, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description API to Modify Profile Match Rules. <p><strong>OperationId:</strong>putProfileMatchRules</p>
             *
             * @tags OperaExchangeInterfaceConfig
             * @name PutProfileMatchRules
             * @summary Change profile match rules
             * @request PUT:/profileMatchRules
             */
            putProfileMatchRules: (hotelId, profileMatchRulesToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/profileMatchRules`, method: 'PUT', body: profileMatchRulesToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
    }
}
exports.Api = Api;
