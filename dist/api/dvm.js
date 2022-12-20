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
exports.Api = exports.HttpClient = exports.ContentType = exports.DefaultValueCodeType = exports.DataValueMappingCodeType = void 0;
/** Enumeration of the different conversion codes needed for data value mapping. */
var DataValueMappingCodeType;
(function (DataValueMappingCodeType) {
    DataValueMappingCodeType["AccountType"] = "AccountType";
    DataValueMappingCodeType["ActionCode"] = "ActionCode";
    DataValueMappingCodeType["ActionType"] = "ActionType";
    DataValueMappingCodeType["ActivityLocation"] = "ActivityLocation";
    DataValueMappingCodeType["ActivityStatus"] = "ActivityStatus";
    DataValueMappingCodeType["ActivityType"] = "ActivityType";
    DataValueMappingCodeType["ActivityTypeSc"] = "ActivityTypeSc";
    DataValueMappingCodeType["AddressTypes"] = "AddressTypes";
    DataValueMappingCodeType["ArrangementCode"] = "ArrangementCode";
    DataValueMappingCodeType["BlockCancellationCodes"] = "BlockCancellationCodes";
    DataValueMappingCodeType["BlockCodes"] = "BlockCodes";
    DataValueMappingCodeType["BlockConversion"] = "BlockConversion";
    DataValueMappingCodeType["BlockRanking"] = "BlockRanking";
    DataValueMappingCodeType["BlockRateOverrideReason"] = "BlockRateOverrideReason";
    DataValueMappingCodeType["BookingStatus"] = "BookingStatus";
    DataValueMappingCodeType["BookingType"] = "BookingType";
    DataValueMappingCodeType["BusiinessSegment"] = "BusiinessSegment";
    DataValueMappingCodeType["CalendarEvent"] = "CalendarEvent";
    DataValueMappingCodeType["CancellationCodes"] = "CancellationCodes";
    DataValueMappingCodeType["CategoryCode"] = "CategoryCode";
    DataValueMappingCodeType["CatItemrate"] = "CatItemrate";
    DataValueMappingCodeType["CatRate"] = "CatRate";
    DataValueMappingCodeType["CatServing"] = "CatServing";
    DataValueMappingCodeType["CatSetup"] = "CatSetup";
    DataValueMappingCodeType["ChannelCodes"] = "ChannelCodes";
    DataValueMappingCodeType["ComboRoom"] = "ComboRoom";
    DataValueMappingCodeType["CommentType"] = "CommentType";
    DataValueMappingCodeType["CompetitionCode"] = "CompetitionCode";
    DataValueMappingCodeType["CountryCode"] = "CountryCode";
    DataValueMappingCodeType["CurrencyCode"] = "CurrencyCode";
    DataValueMappingCodeType["DayType"] = "DayType";
    DataValueMappingCodeType["DepartmentId"] = "DepartmentId";
    DataValueMappingCodeType["DeptNoteCode"] = "DeptNoteCode";
    DataValueMappingCodeType["DiscountReason"] = "DiscountReason";
    DataValueMappingCodeType["DocumentType"] = "DocumentType";
    DataValueMappingCodeType["EventType"] = "EventType";
    DataValueMappingCodeType["FitContractType"] = "FitContractType";
    DataValueMappingCodeType["Frequency"] = "Frequency";
    DataValueMappingCodeType["FunctionSpaceLocation"] = "FunctionSpaceLocation";
    DataValueMappingCodeType["FunctionSpaceRateType"] = "FunctionSpaceRateType";
    DataValueMappingCodeType["GenderMf"] = "GenderMf";
    DataValueMappingCodeType["GtdReq"] = "GtdReq";
    DataValueMappingCodeType["GuestPreferenceCode"] = "GuestPreferenceCode";
    DataValueMappingCodeType["GuestPreferenceType"] = "GuestPreferenceType";
    DataValueMappingCodeType["IndustryCode"] = "IndustryCode";
    DataValueMappingCodeType["InfluenceCode"] = "InfluenceCode";
    DataValueMappingCodeType["LanguageCodes"] = "LanguageCodes";
    DataValueMappingCodeType["MarketingCity"] = "MarketingCity";
    DataValueMappingCodeType["MarketingRegion"] = "MarketingRegion";
    DataValueMappingCodeType["MarketCode"] = "MarketCode";
    DataValueMappingCodeType["MeetingRoomtype"] = "MeetingRoomtype";
    DataValueMappingCodeType["MembershipLevel"] = "MembershipLevel";
    DataValueMappingCodeType["MembershipType"] = "MembershipType";
    DataValueMappingCodeType["MembershipTypeAirline"] = "MembershipTypeAirline";
    DataValueMappingCodeType["Nationality"] = "Nationality";
    DataValueMappingCodeType["OcrmBounceType"] = "OcrmBounceType";
    DataValueMappingCodeType["OcrmEventType"] = "OcrmEventType";
    DataValueMappingCodeType["OtaGuestPreferenceCode"] = "OtaGuestPreferenceCode";
    DataValueMappingCodeType["PaymentMethod"] = "PaymentMethod";
    DataValueMappingCodeType["PhoneType"] = "PhoneType";
    DataValueMappingCodeType["PosFamilyGroup"] = "PosFamilyGroup";
    DataValueMappingCodeType["PosMajorGroup"] = "PosMajorGroup";
    DataValueMappingCodeType["PosMenuDef"] = "PosMenuDef";
    DataValueMappingCodeType["PosRevenueCenter"] = "PosRevenueCenter";
    DataValueMappingCodeType["PriceCode"] = "PriceCode";
    DataValueMappingCodeType["ProductCode"] = "ProductCode";
    DataValueMappingCodeType["ProfilePriority"] = "ProfilePriority";
    DataValueMappingCodeType["ProfileSource"] = "ProfileSource";
    DataValueMappingCodeType["ProfileType"] = "ProfileType";
    DataValueMappingCodeType["RateCategory"] = "RateCategory";
    DataValueMappingCodeType["RateCode"] = "RateCode";
    DataValueMappingCodeType["RateProgram"] = "RateProgram";
    DataValueMappingCodeType["RateToRateBlock"] = "RateToRateBlock";
    DataValueMappingCodeType["RateType"] = "RateType";
    DataValueMappingCodeType["ReasonCode"] = "ReasonCode";
    DataValueMappingCodeType["Relationship"] = "Relationship";
    DataValueMappingCodeType["ReservationStatus"] = "ReservationStatus";
    DataValueMappingCodeType["ReservationType"] = "ReservationType";
    DataValueMappingCodeType["ResvBookingMethod"] = "ResvBookingMethod";
    DataValueMappingCodeType["RevenueGroups"] = "RevenueGroups";
    DataValueMappingCodeType["RevenueType"] = "RevenueType";
    DataValueMappingCodeType["Room"] = "Room";
    DataValueMappingCodeType["RoomsPotential"] = "RoomsPotential";
    DataValueMappingCodeType["RoomCategoryLabel"] = "RoomCategoryLabel";
    DataValueMappingCodeType["RoomClass"] = "RoomClass";
    DataValueMappingCodeType["RoomPool"] = "RoomPool";
    DataValueMappingCodeType["RoomRepairsReasonCode"] = "RoomRepairsReasonCode";
    DataValueMappingCodeType["RoomStatusReasons"] = "RoomStatusReasons";
    DataValueMappingCodeType["RoutingCode"] = "RoutingCode";
    DataValueMappingCodeType["Scope"] = "Scope";
    DataValueMappingCodeType["ScopeCity"] = "ScopeCity";
    DataValueMappingCodeType["ScAccPriority"] = "ScAccPriority";
    DataValueMappingCodeType["ScAccRoomsPot"] = "ScAccRoomsPot";
    DataValueMappingCodeType["ScAccSource"] = "ScAccSource";
    DataValueMappingCodeType["ScDestination"] = "ScDestination";
    DataValueMappingCodeType["ScFunctionSpace"] = "ScFunctionSpace";
    DataValueMappingCodeType["ScFunctionSpaceRateCode"] = "ScFunctionSpaceRateCode";
    DataValueMappingCodeType["ScFunctionSpaceSetup"] = "ScFunctionSpaceSetup";
    DataValueMappingCodeType["ScRevenueTypes"] = "ScRevenueTypes";
    DataValueMappingCodeType["ScSetupCode"] = "ScSetupCode";
    DataValueMappingCodeType["ScTaskCode"] = "ScTaskCode";
    DataValueMappingCodeType["ScTerritory"] = "ScTerritory";
    DataValueMappingCodeType["ServiceRequestType"] = "ServiceRequestType";
    DataValueMappingCodeType["SgiLanguage"] = "SgiLanguage";
    DataValueMappingCodeType["SgiRequestCodes"] = "SgiRequestCodes";
    DataValueMappingCodeType["SgiTitle"] = "SgiTitle";
    DataValueMappingCodeType["SourceCode"] = "SourceCode";
    DataValueMappingCodeType["State"] = "State";
    DataValueMappingCodeType["Title"] = "Title";
    DataValueMappingCodeType["TraceCode"] = "TraceCode";
    DataValueMappingCodeType["TraceDepartment"] = "TraceDepartment";
    DataValueMappingCodeType["TransportTypes"] = "TransportTypes";
    DataValueMappingCodeType["TravelAgentCommissionCodes"] = "TravelAgentCommissionCodes";
    DataValueMappingCodeType["TravelAgentCurrencyCodes"] = "TravelAgentCurrencyCodes";
    DataValueMappingCodeType["Trxgenerates"] = "Trxgenerates";
    DataValueMappingCodeType["TrxCode"] = "TrxCode";
    DataValueMappingCodeType["VipLevel"] = "VipLevel";
    DataValueMappingCodeType["WaitlistCodes"] = "WaitlistCodes";
    DataValueMappingCodeType["WebuserSecurityQuestion"] = "WebuserSecurityQuestion";
})(DataValueMappingCodeType = exports.DataValueMappingCodeType || (exports.DataValueMappingCodeType = {}));
/** Enumeration of the different default codes. */
var DefaultValueCodeType;
(function (DefaultValueCodeType) {
    DefaultValueCodeType["AddressTypes"] = "AddressTypes";
    DefaultValueCodeType["AvailabilityType"] = "AvailabilityType";
    DefaultValueCodeType["BlockCancellationCodes"] = "BlockCancellationCodes";
    DefaultValueCodeType["BlockChannelCode"] = "BlockChannelCode";
    DefaultValueCodeType["BlockMarketCode"] = "BlockMarketCode";
    DefaultValueCodeType["BlockOwner"] = "BlockOwner";
    DefaultValueCodeType["BlockRateCode"] = "BlockRateCode";
    DefaultValueCodeType["BlockReservationType"] = "BlockReservationType";
    DefaultValueCodeType["BlockSourceCode"] = "BlockSourceCode";
    DefaultValueCodeType["BlockStatus"] = "BlockStatus";
    DefaultValueCodeType["BlockType"] = "BlockType";
    DefaultValueCodeType["CancellationCodes"] = "CancellationCodes";
    DefaultValueCodeType["CashierId"] = "CashierId";
    DefaultValueCodeType["CountryCode"] = "CountryCode";
    DefaultValueCodeType["ChannelCodes"] = "ChannelCodes";
    DefaultValueCodeType["ConfLetterId"] = "ConfLetterId";
    DefaultValueCodeType["ConfLetterName"] = "ConfLetterName";
    DefaultValueCodeType["CrsCurrencyCode"] = "CrsCurrencyCode";
    DefaultValueCodeType["CrsCurrencyFmtDisplay"] = "CrsCurrencyFmtDisplay";
    DefaultValueCodeType["CrsCurrencyFormat"] = "CrsCurrencyFormat";
    DefaultValueCodeType["CrsCurrencyMultiplier"] = "CrsCurrencyMultiplier";
    DefaultValueCodeType["CurrencyCode"] = "CurrencyCode";
    DefaultValueCodeType["Custom1"] = "Custom1";
    DefaultValueCodeType["Custom2"] = "Custom2";
    DefaultValueCodeType["DeleteCharInd"] = "DeleteCharInd";
    DefaultValueCodeType["DeleteDateInd"] = "DeleteDateInd";
    DefaultValueCodeType["DeleteNumberInd"] = "DeleteNumberInd";
    DefaultValueCodeType["DepositPaymentMethod"] = "DepositPaymentMethod";
    DefaultValueCodeType["DeptCodes"] = "DeptCodes";
    DefaultValueCodeType["DiscountReason"] = "DiscountReason";
    DefaultValueCodeType["GuestPreferences"] = "GuestPreferences";
    DefaultValueCodeType["HighPrioMemTypes"] = "HighPrioMemTypes";
    DefaultValueCodeType["KeepingCharInd"] = "KeepingCharInd";
    DefaultValueCodeType["KeepingDateInd"] = "KeepingDateInd";
    DefaultValueCodeType["KeepingNumberInd"] = "KeepingNumberInd";
    DefaultValueCodeType["LanguageCodes"] = "LanguageCodes";
    DefaultValueCodeType["MarketCode"] = "MarketCode";
    DefaultValueCodeType["MaxAvailInAdvance"] = "MaxAvailInAdvance";
    DefaultValueCodeType["PaymentMethod"] = "PaymentMethod";
    DefaultValueCodeType["PhoneType"] = "PhoneType";
    DefaultValueCodeType["RateCategory"] = "RateCategory";
    DefaultValueCodeType["RateClass"] = "RateClass";
    DefaultValueCodeType["RateCode"] = "RateCode";
    DefaultValueCodeType["RateDisplaySet"] = "RateDisplaySet";
    DefaultValueCodeType["ReservationType"] = "ReservationType";
    DefaultValueCodeType["RoomCategoryLabel"] = "RoomCategoryLabel";
    DefaultValueCodeType["ScDestination"] = "ScDestination";
    DefaultValueCodeType["SourceCode"] = "SourceCode";
    DefaultValueCodeType["StartDayOfWeek"] = "StartDayOfWeek";
    DefaultValueCodeType["TaCompanyOwner"] = "TaCompanyOwner";
    DefaultValueCodeType["Trace1"] = "Trace1";
    DefaultValueCodeType["Trace2"] = "Trace2";
    DefaultValueCodeType["TraceArrivalDept1"] = "TraceArrivalDept1";
    DefaultValueCodeType["TraceArrivalDept2"] = "TraceArrivalDept2";
    DefaultValueCodeType["TraceOverrideDept1"] = "TraceOverrideDept1";
    DefaultValueCodeType["TraceOverrideDept2"] = "TraceOverrideDept2";
    DefaultValueCodeType["TraceOverrideWarning"] = "TraceOverrideWarning";
    DefaultValueCodeType["TraceWarning"] = "TraceWarning";
    DefaultValueCodeType["TravelAgentCommissionCodes"] = "TravelAgentCommissionCodes";
    DefaultValueCodeType["TravelAgentCurrencyCodes"] = "TravelAgentCurrencyCodes";
    DefaultValueCodeType["TravelAgentCurrencyCodesCentral"] = "TravelAgentCurrencyCodesCentral";
    DefaultValueCodeType["VipLevel"] = "VipLevel";
    DefaultValueCodeType["WaitlistCodes"] = "WaitlistCodes";
    DefaultValueCodeType["ProfileNoteType"] = "ProfileNoteType";
    DefaultValueCodeType["BlockNoteType"] = "BlockNoteType";
})(DefaultValueCodeType = exports.DefaultValueCodeType || (exports.DefaultValueCodeType = {}));
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
        this.instance = axios_1.default.create(Object.assign(Object.assign({}, axiosConfig), { baseURL: new URL('/dvm/v1', axiosConfig.baseURL).toString() }));
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
 * @title OPERA Cloud DataValueMapping Service API
 * @version 22.3.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /dvm/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs which offer external systems to config and use values different than what are configured in opera<br /><br /> Compatible with OPERA Cloud release 22.3.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
class Api extends HttpClient {
    constructor() {
        super(...arguments);
        this.externalSystems = {
            /**
             * @description This API allows you to get the converted hotel code <p><strong>OperationId:</strong>getOperaHotelCode</p>
             *
             * @tags DataValueMapping
             * @name GetOperaHotelCode
             * @summary Fetch Converted Hotel Code
             * @request GET:/externalSystems/{extSystemCode}/hotels/{externalHotelId}/conversions
             */
            getOperaHotelCode: (hotelId, externalHotelId, extSystemCode, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/externalSystems/${extSystemCode}/hotels/${externalHotelId}/conversions`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API allows you to get the converted values <p><strong>OperationId:</strong>getConvertedValues</p>
             *
             * @tags DataValueMapping
             * @name GetConvertedValues
             * @summary Fetch Converted Values
             * @request GET:/externalSystems/{extSystemCode}/hotels/{operaHotelId}/convertedValues
             */
            getConvertedValues: (hotelId, operaHotelId, extSystemCode, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/externalSystems/${extSystemCode}/hotels/${operaHotelId}/convertedValues`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API allows you to get default values <p><strong>OperationId:</strong>getDefaultValues</p>
             *
             * @tags DataValueMapping
             * @name GetDefaultValues
             * @summary Fetch Default values
             * @request GET:/externalSystems/{extSystemCode}/hotels/{operaHotelId}/defaultValues
             */
            getDefaultValues: (hotelId, operaHotelId, extSystemCode, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/externalSystems/${extSystemCode}/hotels/${operaHotelId}/defaultValues`, method: 'GET', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.services = {
            /**
             * @description This API allows you to delete the DVM cache <p><strong>OperationId:</strong>clearDVMCache</p>
             *
             * @tags DataValueMapping
             * @name ClearDvmCache
             * @summary Clear DVM Cache
             * @request DELETE:/services/datavaluemapping/cache
             */
            clearDvmCache: (hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/services/datavaluemapping/cache`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API allows you to delete the default values cache <p><strong>OperationId:</strong>clearDefaultValueCache</p>
             *
             * @tags DataValueMapping
             * @name ClearDefaultValueCache
             * @summary Clear Default Value Cache
             * @request DELETE:/services/datavaluemapping/defaultValueCache
             */
            clearDefaultValueCache: (hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/services/datavaluemapping/defaultValueCache`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description ping Data Value Mapping Service <p><strong>OperationId:</strong>pingDataValueMappingService</p>
             *
             * @tags DataValueMapping
             * @name PingDataValueMappingService
             * @summary ping Data Value Mapping Service
             * @request GET:/services/datavaluemapping/status
             */
            pingDataValueMappingService: (hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/services/datavaluemapping/status`, method: 'GET', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
    }
}
exports.Api = Api;
