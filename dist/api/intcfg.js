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
exports.Api = exports.HttpClient = exports.ContentType = exports.DMLCommandType = exports.DirectInwardDialType = exports.ClassOfServiceConfigType = exports.MessageWaitingType = exports.DoNotDisturbType = exports.DataLineType = exports.MaskDialNumberType = exports.IfcMenuTypeType = exports.TelephoneChargeType = exports.SVTransactionType = exports.LogicalOperatorType = exports.HotelInterfaceStatusType = exports.HotelInterfaceTypeType = exports.TextDeliveryMethodType = exports.UrlFormatType = exports.EmailDeliveryMethodType = exports.EmailDeliveryFormatType = void 0;
/** Email delivery format */
var EmailDeliveryFormatType;
(function (EmailDeliveryFormatType) {
    EmailDeliveryFormatType["Htmlcss"] = "Htmlcss";
    EmailDeliveryFormatType["Pdf"] = "Pdf";
    EmailDeliveryFormatType["Rtf"] = "Rtf";
    EmailDeliveryFormatType["Tif"] = "Tif";
})(EmailDeliveryFormatType = exports.EmailDeliveryFormatType || (exports.EmailDeliveryFormatType = {}));
/** Email delivery method type */
var EmailDeliveryMethodType;
(function (EmailDeliveryMethodType) {
    EmailDeliveryMethodType["Billing"] = "Billing";
    EmailDeliveryMethodType["Confirmation"] = "Confirmation";
    EmailDeliveryMethodType["General"] = "General";
    EmailDeliveryMethodType["Other"] = "Other";
})(EmailDeliveryMethodType = exports.EmailDeliveryMethodType || (exports.EmailDeliveryMethodType = {}));
/** Url content format */
var UrlFormatType;
(function (UrlFormatType) {
    UrlFormatType["Xml"] = "Xml";
    UrlFormatType["Text"] = "Text";
})(UrlFormatType = exports.UrlFormatType || (exports.UrlFormatType = {}));
/** Text delivery method type */
var TextDeliveryMethodType;
(function (TextDeliveryMethodType) {
    TextDeliveryMethodType["Url"] = "Url";
    TextDeliveryMethodType["Email"] = "Email";
})(TextDeliveryMethodType = exports.TextDeliveryMethodType || (exports.TextDeliveryMethodType = {}));
/** XML Posting Interface */
var HotelInterfaceTypeType;
(function (HotelInterfaceTypeType) {
    HotelInterfaceTypeType["Bms"] = "Bms";
    HotelInterfaceTypeType["Cas"] = "Cas";
    HotelInterfaceTypeType["Ccw"] = "Ccw";
    HotelInterfaceTypeType["Dls"] = "Dls";
    HotelInterfaceTypeType["Eft"] = "Eft";
    HotelInterfaceTypeType["Exp"] = "Exp";
    HotelInterfaceTypeType["Mak"] = "Mak";
    HotelInterfaceTypeType["Mbs"] = "Mbs";
    HotelInterfaceTypeType["Msc"] = "Msc";
    HotelInterfaceTypeType["Pbx"] = "Pbx";
    HotelInterfaceTypeType["Pos"] = "Pos";
    HotelInterfaceTypeType["Svs"] = "Svs";
    HotelInterfaceTypeType["Tik"] = "Tik";
    HotelInterfaceTypeType["Vid"] = "Vid";
    HotelInterfaceTypeType["Vms"] = "Vms";
    HotelInterfaceTypeType["Www"] = "Www";
    HotelInterfaceTypeType["Xml"] = "Xml";
})(HotelInterfaceTypeType = exports.HotelInterfaceTypeType || (exports.HotelInterfaceTypeType = {}));
/** Status of the Hotel Interface either STOPPED or RUNNING. */
var HotelInterfaceStatusType;
(function (HotelInterfaceStatusType) {
    HotelInterfaceStatusType["Stopped"] = "Stopped";
    HotelInterfaceStatusType["Running"] = "Running";
    HotelInterfaceStatusType["Waiting"] = "Waiting";
    HotelInterfaceStatusType["StopInitiated"] = "StopInitiated";
    HotelInterfaceStatusType["StartInitiated"] = "StartInitiated";
    HotelInterfaceStatusType["RebootInitiated"] = "RebootInitiated";
    HotelInterfaceStatusType["Other"] = "Other";
})(HotelInterfaceStatusType = exports.HotelInterfaceStatusType || (exports.HotelInterfaceStatusType = {}));
var LogicalOperatorType;
(function (LogicalOperatorType) {
    LogicalOperatorType["And"] = "And";
    LogicalOperatorType["Or"] = "Or";
})(LogicalOperatorType = exports.LogicalOperatorType || (exports.LogicalOperatorType = {}));
/** Status of the Hotel Interface either STOPPED or RUNNING. */
var SVTransactionType;
(function (SVTransactionType) {
    SVTransactionType["OperaTransaction"] = "OperaTransaction";
    SVTransactionType["VendorTransaction"] = "VendorTransaction";
    SVTransactionType["OperaAndVendorTransaction"] = "OperaAndVendorTransaction";
})(SVTransactionType = exports.SVTransactionType || (exports.SVTransactionType = {}));
/** Auto Choose */
var TelephoneChargeType;
(function (TelephoneChargeType) {
    TelephoneChargeType["Value0"] = "0";
    TelephoneChargeType["Value1"] = "1";
    TelephoneChargeType["Value2"] = "2";
})(TelephoneChargeType = exports.TelephoneChargeType || (exports.TelephoneChargeType = {}));
/** Data Card System */
var IfcMenuTypeType;
(function (IfcMenuTypeType) {
    IfcMenuTypeType["Cas"] = "Cas";
    IfcMenuTypeType["Kss"] = "Kss";
    IfcMenuTypeType["Mbs"] = "Mbs";
    IfcMenuTypeType["Pbx"] = "Pbx";
    IfcMenuTypeType["Pos"] = "Pos";
    IfcMenuTypeType["Vss"] = "Vss";
    IfcMenuTypeType["Dcs"] = "Dcs";
})(IfcMenuTypeType = exports.IfcMenuTypeType || (exports.IfcMenuTypeType = {}));
/** Mask the dialled digits as per the room configuration. */
var MaskDialNumberType;
(function (MaskDialNumberType) {
    MaskDialNumberType["NoMasking"] = "NoMasking";
    MaskDialNumberType["MaskLast2Digits"] = "MaskLast2Digits";
    MaskDialNumberType["MaskLast4Digits"] = "MaskLast4Digits";
    MaskDialNumberType["Mask4DigitsLeaveLast2Intact"] = "Mask4DigitsLeaveLast2Intact";
    MaskDialNumberType["MaskAllExceptFirst2"] = "MaskAllExceptFirst2";
    MaskDialNumberType["MaskAll"] = "MaskAll";
    MaskDialNumberType["MaskingPerRoom"] = "MaskingPerRoom";
})(MaskDialNumberType = exports.MaskDialNumberType || (exports.MaskDialNumberType = {}));
/** Line Out */
var DataLineType;
(function (DataLineType) {
    DataLineType["In"] = "In";
    DataLineType["Out"] = "Out";
})(DataLineType = exports.DataLineType || (exports.DataLineType = {}));
/** Do Not Disturb is set to available and freely switchable. */
var DoNotDisturbType;
(function (DoNotDisturbType) {
    DoNotDisturbType["NotAvailable"] = "NotAvailable";
    DoNotDisturbType["AlwaysOn"] = "AlwaysOn";
    DoNotDisturbType["AlwaysOff"] = "AlwaysOff";
    DoNotDisturbType["FreelySwitchable"] = "FreelySwitchable";
})(DoNotDisturbType = exports.DoNotDisturbType || (exports.DoNotDisturbType = {}));
/** Message Waiting is set to available and freely switchable. */
var MessageWaitingType;
(function (MessageWaitingType) {
    MessageWaitingType["NotAvailable"] = "NotAvailable";
    MessageWaitingType["AlwaysOn"] = "AlwaysOn";
    MessageWaitingType["AlwaysOff"] = "AlwaysOff";
    MessageWaitingType["FreelySwitchable"] = "FreelySwitchable";
})(MessageWaitingType = exports.MessageWaitingType || (exports.MessageWaitingType = {}));
/** Class Of Service is set to available and freely switchable. */
var ClassOfServiceConfigType;
(function (ClassOfServiceConfigType) {
    ClassOfServiceConfigType["NotAvailable"] = "NotAvailable";
    ClassOfServiceConfigType["AlwaysOn"] = "AlwaysOn";
    ClassOfServiceConfigType["AlwaysOff"] = "AlwaysOff";
    ClassOfServiceConfigType["FreelySwitchable"] = "FreelySwitchable";
})(ClassOfServiceConfigType = exports.ClassOfServiceConfigType || (exports.ClassOfServiceConfigType = {}));
/** Direct Inward Dial is set to available and freely switchable. */
var DirectInwardDialType;
(function (DirectInwardDialType) {
    DirectInwardDialType["NotAvailable"] = "NotAvailable";
    DirectInwardDialType["AlwaysOn"] = "AlwaysOn";
    DirectInwardDialType["AlwaysOff"] = "AlwaysOff";
    DirectInwardDialType["FreelySwitchable"] = "FreelySwitchable";
})(DirectInwardDialType = exports.DirectInwardDialType || (exports.DirectInwardDialType = {}));
/** A data manipulation language command for deleting an existing record. */
var DMLCommandType;
(function (DMLCommandType) {
    DMLCommandType["Insert"] = "Insert";
    DMLCommandType["Update"] = "Update";
    DMLCommandType["Delete"] = "Delete";
})(DMLCommandType = exports.DMLCommandType || (exports.DMLCommandType = {}));
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
        this.instance = axios_1.default.create(Object.assign(Object.assign({}, axiosConfig), { baseURL: new URL('/int/config/v1', axiosConfig.baseURL).toString() }));
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
 * @title OPERA Cloud Integration Configuration API
 * @version 22.3.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /int/config/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 22.3.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
class Api extends HttpClient {
    constructor() {
        super(...arguments);
        this.config = {
            /**
             * @description  <p><strong>OperationId:</strong>clearCacheBeProcessor</p>
             *
             * @tags BEProcessor
             * @name ClearCacheBeProcessor
             * @summary Operation to clear cache.
             * @request DELETE:/config/oxi/services/beProcessor/cache
             */
            clearCacheBeProcessor: (hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/config/oxi/services/beProcessor/cache`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>pingBeProcessor</p>
             *
             * @tags BEProcessor
             * @name PingBeProcessor
             * @summary Operation to ping.
             * @request GET:/config/oxi/services/beProcessor/status
             */
            pingBeProcessor: (hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/config/oxi/services/beProcessor/status`, method: 'GET', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.deliveryMethods = {
            /**
             * @description  <p><strong>OperationId:</strong>getDeliveryMethods</p>
             *
             * @tags ExternalSystemsConfig
             * @name GetDeliveryMethods
             * @summary Operation to fetch delivery methods.
             * @request GET:/deliveryMethods
             */
            getDeliveryMethods: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/deliveryMethods`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>putDeliveryMethods</p>
             *
             * @tags ExternalSystemsConfig
             * @name PutDeliveryMethods
             * @summary Operation to change delivery methods.
             * @request PUT:/deliveryMethods
             */
            putDeliveryMethods: (hotelId, changeDeliveryMethods, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/deliveryMethods`, method: 'PUT', body: changeDeliveryMethods, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>deleteDeliveryMethods</p>
             *
             * @tags ExternalSystemsConfig
             * @name DeleteDeliveryMethods
             * @summary Operation to remove delivery methods.
             * @request DELETE:/deliveryMethods
             */
            deleteDeliveryMethods: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/deliveryMethods`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>postDeliveryMethods</p>
             *
             * @tags ExternalSystemsConfig
             * @name PostDeliveryMethods
             * @summary Operation to create delivery methods.
             * @request POST:/deliveryMethods
             */
            postDeliveryMethods: (hotelId, createDeliveryMethods, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/deliveryMethods`, method: 'POST', body: createDeliveryMethods, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.deviceLocations = {
            /**
             * @description Use this API to get the template device locations. <p><strong>OperationId:</strong>getTemplateDeviceLocations</p>
             *
             * @tags ChainConfig
             * @name GetTemplateDeviceLocations
             * @summary Get the template device locations
             * @request GET:/deviceLocations
             */
            getTemplateDeviceLocations: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/deviceLocations`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create the template device locations. <p><strong>OperationId:</strong>postTemplateDeviceLocations</p>
             *
             * @tags ChainConfig
             * @name PostTemplateDeviceLocations
             * @summary Create the template device locations
             * @request POST:/deviceLocations
             */
            postTemplateDeviceLocations: (hotelId, templateDeviceLocationsCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/deviceLocations`, method: 'POST', body: templateDeviceLocationsCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update the template device locations. <p><strong>OperationId:</strong>changeTemplateDeviceLocations</p>
             *
             * @tags ChainConfig
             * @name ChangeTemplateDeviceLocations
             * @summary Change the template device locations
             * @request PUT:/deviceLocations/{deviceLocationId}
             */
            changeTemplateDeviceLocations: (hotelId, deviceLocationId, templateDeviceLocationsToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/deviceLocations/${deviceLocationId}`, method: 'PUT', body: templateDeviceLocationsToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete the template device locations. <p><strong>OperationId:</strong>removeTemplateDeviceLocations</p>
             *
             * @tags ChainConfig
             * @name RemoveTemplateDeviceLocations
             * @summary Delete the template device locations
             * @request DELETE:/deviceLocations/{deviceLocationId}
             */
            removeTemplateDeviceLocations: (hotelId, deviceLocationId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/deviceLocations/${deviceLocationId}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.externalSystems = {
            /**
             * @description  <p><strong>OperationId:</strong>clearCache</p>
             *
             * @tags ExternalSystemsConfig
             * @name ClearCache
             * @summary Operation to clear cache.
             * @request DELETE:/externalSystems/config/cache
             */
            clearCache: (hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/externalSystems/config/cache`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>ping</p>
             *
             * @tags ExternalSystemsConfig
             * @name Ping
             * @summary Operation to ping.
             * @request GET:/externalSystems/config/ping
             */
            ping: (hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/externalSystems/config/ping`, method: 'GET', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>postPublishers</p>
             *
             * @tags ExternalSystemsConfig
             * @name PostPublishers
             * @summary Operation to create publishers.
             * @request POST:/externalSystems/{externalSystemCode}/hotels/{hotelId}/publishers
             */
            postPublishers: (hotelId, externalSystemCode, createPublishers, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/externalSystems/${externalSystemCode}/hotels/${hotelId}/publishers`, method: 'POST', body: createPublishers, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>deletePublisher</p>
             *
             * @tags ExternalSystemsConfig
             * @name DeletePublisher
             * @summary Operation to remove publisher.
             * @request DELETE:/externalSystems/{externalSystemCode}/hotels/{hotelId}/publishers
             */
            deletePublisher: (hotelId, externalSystemCode, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/externalSystems/${externalSystemCode}/hotels/${hotelId}/publishers`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getPublishers</p>
             *
             * @tags ExternalSystemsConfig
             * @name GetPublishers
             * @summary Operation to fetch publishers.
             * @request GET:/externalSystems/{externalSystemCode}/publishers
             */
            getPublishers: (hotelId, externalSystemCode, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/externalSystems/${externalSystemCode}/publishers`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.hotelInterfaceTypes = {
            /**
             * @description  <p><strong>OperationId:</strong>getHotelInterfaces</p>
             *
             * @tags ExternalSystemsConfig
             * @name GetHotelInterfaces
             * @summary Operation to fetch hotel interfaces.
             * @request GET:/hotelInterfaceTypes
             */
            getHotelInterfaces: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotelInterfaceTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.hotels = {
            /**
             * @description  <p><strong>OperationId:</strong>deleteHotelInterface</p>
             *
             * @tags ExternalSystemsConfig
             * @name DeleteHotelInterface
             * @summary Operation to remove hotel interface.
             * @request DELETE:/hotels/{hotelId}/hotelInerface
             */
            deleteHotelInterface: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/hotelInerface`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.interfaceControllerRegistry = {
            /**
             * @description  <p><strong>OperationId:</strong>getHotelInterfaceControllerRegistry</p>
             *
             * @tags ExternalSystemsConfig
             * @name GetHotelInterfaceControllerRegistry
             * @summary Operation to fetch hotel interface controller registry.
             * @request GET:/interfaceControllerRegistry
             */
            getHotelInterfaceControllerRegistry: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/interfaceControllerRegistry`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.interfaceErrors = {
            /**
             * @description  <p><strong>OperationId:</strong>getHotelInterfaceErrors</p>
             *
             * @tags ExternalSystemsConfig
             * @name GetHotelInterfaceErrors
             * @summary Operation to fetch hotel interface errors.
             * @request GET:/interfaceErrors
             */
            getHotelInterfaceErrors: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/interfaceErrors`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.interfaceFailedMessages = {
            /**
             * @description  <p><strong>OperationId:</strong>getHotelInterfaceFailedMessages</p>
             *
             * @tags ExternalSystemsConfig
             * @name GetHotelInterfaceFailedMessages
             * @summary Operation to fetch hotel interface failed messages.
             * @request GET:/interfaceFailedMessages
             */
            getHotelInterfaceFailedMessages: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/interfaceFailedMessages`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.interfaceRights = {
            /**
             * @description  <p><strong>OperationId:</strong>putInterfaceRight</p>
             *
             * @tags ExternalSystemsConfig
             * @name PutInterfaceRight
             * @summary Operation to change interface right.
             * @request PUT:/interfaceRights
             */
            putInterfaceRight: (hotelId, changeInterfaceRight, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/interfaceRights`, method: 'PUT', body: changeInterfaceRight, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>deleteInterfaceRight</p>
             *
             * @tags ExternalSystemsConfig
             * @name DeleteInterfaceRight
             * @summary Operation to remove interface right.
             * @request DELETE:/interfaceRights
             */
            deleteInterfaceRight: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/interfaceRights`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getInterfaceRights</p>
             *
             * @tags ExternalSystemsConfig
             * @name GetInterfaceRights
             * @summary Operation to fetch interface rights.
             * @request GET:/interfaceRights
             */
            getInterfaceRights: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/interfaceRights`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.interfaceSchemas = {
            /**
             * @description  <p><strong>OperationId:</strong>getHotelInterfaceSchemas</p>
             *
             * @tags ExternalSystemsConfig
             * @name GetHotelInterfaceSchemas
             * @summary Operation to fetch hotel interface schemas.
             * @request GET:/interfaceSchemas
             */
            getHotelInterfaceSchemas: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/interfaceSchemas`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.interfaces = {
            /**
             * @description  <p><strong>OperationId:</strong>getExternalDatabaseAvailableProperties</p>
             *
             * @tags ExternalSystemsConfig
             * @name GetExternalDatabaseAvailableProperties
             * @summary Operation to fetch external database available properties.
             * @request GET:/interfaces/{interfaceId}/databases/{databaseId}/availableResorts
             */
            getExternalDatabaseAvailableProperties: (hotelId, databaseId, interfaceId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/interfaces/${interfaceId}/databases/${databaseId}/availableResorts`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.udfMappings = {
            /**
             * @description Operation to send a response to the Look-up of UDFs. <p><strong>OperationId:</strong>getUDFMappings</p>
             *
             * @tags ExternalSystemsConfig
             * @name GetUdfMappings
             * @summary Operation to send a response to the Look up of UDFs.
             * @request GET:/udfMappings
             */
            getUdfMappings: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/udfMappings`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Operation to send a response to the Change in UDF. <p><strong>OperationId:</strong>putUDFMapping</p>
             *
             * @tags ExternalSystemsConfig
             * @name PutUdfMapping
             * @summary Operation to send a response to the Change in UDF.
             * @request PUT:/udfMappings
             */
            putUdfMapping: (hotelId, changeUDFMapping, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/udfMappings`, method: 'PUT', body: changeUDFMapping, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
    }
}
exports.Api = Api;
