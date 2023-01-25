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
exports.Api = exports.HttpClient = exports.ContentType = exports.ImageStyleType = exports.ImageCodeType = void 0;
var ImageCodeType;
(function (ImageCodeType) {
    ImageCodeType["LogoChain"] = "LogoChain";
    ImageCodeType["Logo"] = "Logo";
    ImageCodeType["Profile"] = "Profile";
    ImageCodeType["Nationality"] = "Nationality";
    ImageCodeType["User"] = "User";
    ImageCodeType["ToolbarItemCode"] = "ToolbarItemCode";
    ImageCodeType["Chain"] = "Chain";
    ImageCodeType["MembershipType"] = "MembershipType";
    ImageCodeType["MembershipLevel"] = "MembershipLevel";
    ImageCodeType["Resort"] = "Resort";
    ImageCodeType["RoomTypeChain"] = "RoomTypeChain";
    ImageCodeType["RoomType"] = "RoomType";
    ImageCodeType["RoomNumber"] = "RoomNumber";
    ImageCodeType["OooReasonChain"] = "OooReasonChain";
    ImageCodeType["OooReason"] = "OooReason";
    ImageCodeType["RoomMaintChain"] = "RoomMaintChain";
    ImageCodeType["RoomMaintenance"] = "RoomMaintenance";
    ImageCodeType["RoomMaintIssue"] = "RoomMaintIssue";
    ImageCodeType["FloorPlan"] = "FloorPlan";
    ImageCodeType["SiteLayout"] = "SiteLayout";
    ImageCodeType["Attraction"] = "Attraction";
    ImageCodeType["PropertyMap"] = "PropertyMap";
    ImageCodeType["InvItemChain"] = "InvItemChain";
    ImageCodeType["InvItem"] = "InvItem";
    ImageCodeType["PackageChain"] = "PackageChain";
    ImageCodeType["Package"] = "Package";
    ImageCodeType["Pool"] = "Pool";
    ImageCodeType["RoomConditionChain"] = "RoomConditionChain";
    ImageCodeType["RoomCondition"] = "RoomCondition";
    ImageCodeType["FunctionSpace"] = "FunctionSpace";
    ImageCodeType["FunctionSetupStyle"] = "FunctionSetupStyle";
    ImageCodeType["TrackItTypeChain"] = "TrackItTypeChain";
    ImageCodeType["TrackItType"] = "TrackItType";
    ImageCodeType["Height"] = "Height";
    ImageCodeType["Width"] = "Width";
})(ImageCodeType = exports.ImageCodeType || (exports.ImageCodeType = {}));
/** An enumeration of image styles. */
var ImageStyleType;
(function (ImageStyleType) {
    ImageStyleType["Full"] = "Full";
    ImageStyleType["Thumbnail"] = "Thumbnail";
    ImageStyleType["Icon"] = "Icon";
    ImageStyleType["Square"] = "Square";
    ImageStyleType["Banner"] = "Banner";
    ImageStyleType["Button"] = "Button";
    ImageStyleType["Lowres"] = "Lowres";
    ImageStyleType["Highres"] = "Highres";
})(ImageStyleType = exports.ImageStyleType || (exports.ImageStyleType = {}));
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
        this.instance = axios_1.default.create(Object.assign(Object.assign({}, axiosConfig), { baseURL: new URL('/med/config/v1', axiosConfig.baseURL).toString() }));
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
 * @title OPERA Cloud Content Service
 * @version 22.3.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /med/config/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * Opera Content Service offers capability to manage large content such as images and files.<br /><br /> Compatible with OPERA Cloud release 22.3.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
class Api extends HttpClient {
    constructor() {
        super(...arguments);
        this.customizedLetter = {
            /**
             * @description Use this API to get a customized letter. <p><strong>OperationId:</strong>getCustomizedLetter</p>
             *
             * @tags OperaContent
             * @name GetCustomizedLetter
             * @summary Get customized letter
             * @request GET:/customizedLetter/{letterId}
             */
            getCustomizedLetter: (hotelId, letterId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/customizedLetter/${letterId}`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.emailFile = {
            /**
             * @description Use this API to retrieve email Blob File Stored in File Storage Schema.Its used in  Profiles to fetch Email and Open in an end user's mail client. <p><strong>OperationId:</strong>getEmailFile</p>
             *
             * @tags OperaContent
             * @name GetEmailFile
             * @summary Get Email Blob File
             * @request GET:/emailFile/{emailId}
             */
            getEmailFile: (hotelId, emailId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/emailFile/${emailId}`, method: 'GET', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.fileAttachments = {
            /**
             * @description This APU will fetch file attachments. <p><strong>OperationId:</strong>getFileAttachment</p>
             *
             * @tags OperaContent
             * @name GetFileAttachment
             * @summary Get file attachment
             * @request GET:/fileAttachments
             */
            getFileAttachment: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/fileAttachments`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this APU to upload a file attachment. <p><strong>OperationId:</strong>uploadFileAttachment</p>
             *
             * @tags OperaContent
             * @name UploadFileAttachment
             * @summary Upload a file attachment
             * @request POST:/fileAttachments
             */
            uploadFileAttachment: (hotelId, fileToUpload, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/fileAttachments`, method: 'POST', body: fileToUpload, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.folioReports = {
            /**
             * @description Use this APU to email folio report. <p><strong>OperationId:</strong>emailFolioReport</p>
             *
             * @tags OperaContent
             * @name EmailFolioReport
             * @summary Email folio report
             * @request POST:/folioReports/email
             */
            emailFolioReport: (hotelId, folioReportToEmail, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/folioReports/email`, method: 'POST', body: folioReportToEmail, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.hotels = {
            /**
             * @description You can set a customized letter with this API. <p><strong>OperationId:</strong>setCustomizedLetter</p>
             *
             * @tags OperaContent
             * @name SetCustomizedLetter
             * @summary Set customized letter
             * @request PUT:/hotels/{hotelId}/reservations/{reservationId}/customizedLetter
             */
            setCustomizedLetter: (reservationId, hotelId, customizedLetter, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/customizedLetter`, method: 'PUT', body: customizedLetter, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API will get a folio report for a reservation. <p><strong>OperationId:</strong>getFolioReport</p>
             *
             * @tags OperaContent
             * @name GetFolioReport
             * @summary Get folio report
             * @request GET:/hotels/{hotelId}/reservations/{reservationId}/folioReports
             */
            getFolioReport: (reservationId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/folioReports`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API will get a registration card for a reservation. <p><strong>OperationId:</strong>getRegistrationCard</p>
             *
             * @tags OperaContent
             * @name GetRegistrationCard
             * @summary Get registration card
             * @request GET:/hotels/{hotelId}/reservations/{reservationId}/registrationCard
             */
            getRegistrationCard: (reservationId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/registrationCard`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.images = {
            /**
             * @description You can use this API to upload an image. <p><strong>OperationId:</strong>uploadImage</p>
             *
             * @tags OperaContent
             * @name UploadImage
             * @summary Upload an image
             * @request POST:/images
             */
            uploadImage: (hotelId, imageToUpload, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/images`, method: 'POST', body: imageToUpload, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API will delete an image. <p><strong>OperationId:</strong>removeImage</p>
             *
             * @tags OperaContent
             * @name RemoveImage
             * @summary Delete image
             * @request DELETE:/images
             */
            removeImage: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/images`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to get an image. <p><strong>OperationId:</strong>getImage</p>
             *
             * @tags OperaContent
             * @name GetImage
             * @summary Get image
             * @request GET:/images
             */
            getImage: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/images`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
    }
}
exports.Api = Api;
