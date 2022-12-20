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
exports.Api = exports.HttpClient = exports.ContentType = exports.MasterType = exports.MasterInfoCodeDetailType = exports.ColorType = exports.RoutingProfileTypeType = exports.BasedOnRatePlanType = exports.RatePlanYieldableType = exports.PackageChildBuckets = exports.ProductSourceType = exports.PackageCalculationRuleType = exports.PostingRhythmType = exports.AmountDeterminationType = exports.DepositMaturityPreferenceType = exports.ExchangePostingType = exports.RatePlanApprovalStatusType = exports.RateCodeLockStatusType = exports.BaseType = exports.ProfileTypeType = exports.PersonNameTypeType = void 0;
/** Person's name in an external system. */
var PersonNameTypeType;
(function (PersonNameTypeType) {
    PersonNameTypeType["Primary"] = "Primary";
    PersonNameTypeType["Alternate"] = "Alternate";
    PersonNameTypeType["Incognito"] = "Incognito";
    PersonNameTypeType["External"] = "External";
    PersonNameTypeType["Phonetic"] = "Phonetic";
})(PersonNameTypeType = exports.PersonNameTypeType || (exports.PersonNameTypeType = {}));
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
/** Simple type for base type, flat or differential. */
var BaseType;
(function (BaseType) {
    BaseType["Flat"] = "Flat";
    BaseType["Differential"] = "Differential";
})(BaseType = exports.BaseType || (exports.BaseType = {}));
/** Indicates that the rate code is locked by the central system and cannot be edited at the property level. */
var RateCodeLockStatusType;
(function (RateCodeLockStatusType) {
    RateCodeLockStatusType["Unlocked"] = "Unlocked";
    RateCodeLockStatusType["External"] = "External";
    RateCodeLockStatusType["Property"] = "Property";
    RateCodeLockStatusType["Central"] = "Central";
})(RateCodeLockStatusType = exports.RateCodeLockStatusType || (exports.RateCodeLockStatusType = {}));
/** Indicates that the Rate Plan is approved for selling. */
var RatePlanApprovalStatusType;
(function (RatePlanApprovalStatusType) {
    RatePlanApprovalStatusType["NewUnapproved"] = "NewUnapproved";
    RatePlanApprovalStatusType["ChangedUnapproved"] = "ChangedUnapproved";
    RatePlanApprovalStatusType["Rejected"] = "Rejected";
    RatePlanApprovalStatusType["Approved"] = "Approved";
})(RatePlanApprovalStatusType = exports.RatePlanApprovalStatusType || (exports.RatePlanApprovalStatusType = {}));
/** Fixed at Block. */
var ExchangePostingType;
(function (ExchangePostingType) {
    ExchangePostingType["FixedAtCheckIn"] = "FixedAtCheckIn";
    ExchangePostingType["FixedAtReservation"] = "FixedAtReservation";
    ExchangePostingType["CurrentDate"] = "CurrentDate";
    ExchangePostingType["FixedAtBlock"] = "FixedAtBlock";
})(ExchangePostingType = exports.ExchangePostingType || (exports.ExchangePostingType = {}));
/** Fixed values for Deposite Maturity Preference affecting the rate code */
var DepositMaturityPreferenceType;
(function (DepositMaturityPreferenceType) {
    DepositMaturityPreferenceType["CheckIn"] = "CheckIn";
    DepositMaturityPreferenceType["LastStayNight"] = "LastStayNight";
    DepositMaturityPreferenceType["LastDayAdvDeposit"] = "LastDayAdvDeposit";
})(DepositMaturityPreferenceType = exports.DepositMaturityPreferenceType || (exports.DepositMaturityPreferenceType = {}));
/** Used to indicate if an amount is inclusive or exclusive of other charges, such as taxes. */
var AmountDeterminationType;
(function (AmountDeterminationType) {
    AmountDeterminationType["Inclusive"] = "Inclusive";
    AmountDeterminationType["Exclusive"] = "Exclusive";
})(AmountDeterminationType = exports.AmountDeterminationType || (exports.AmountDeterminationType = {}));
/** Simple type for posting Rhythm types. */
var PostingRhythmType;
(function (PostingRhythmType) {
    PostingRhythmType["EveryNight"] = "EveryNight";
    PostingRhythmType["ArrivalNight"] = "ArrivalNight";
    PostingRhythmType["EveryXNightsStartingNightY"] = "EveryXNightsStartingNightY";
    PostingRhythmType["CertainNightsOfTheWeek"] = "CertainNightsOfTheWeek";
    PostingRhythmType["LastNight"] = "LastNight";
    PostingRhythmType["EveryNightExceptArrivalNight"] = "EveryNightExceptArrivalNight";
    PostingRhythmType["EveryNightExceptLast"] = "EveryNightExceptLast";
    PostingRhythmType["EveryNightExceptFirstAndLast"] = "EveryNightExceptFirstAndLast";
    PostingRhythmType["CustomStaySchedule"] = "CustomStaySchedule";
    PostingRhythmType["CustomNightSchedule"] = "CustomNightSchedule";
    PostingRhythmType["FloatingAllowancePerStay"] = "FloatingAllowancePerStay";
    PostingRhythmType["TicketPosting"] = "TicketPosting";
})(PostingRhythmType = exports.PostingRhythmType || (exports.PostingRhythmType = {}));
/** Simple type for package caluculation rules. */
var PackageCalculationRuleType;
(function (PackageCalculationRuleType) {
    PackageCalculationRuleType["FlatRate"] = "FlatRate";
    PackageCalculationRuleType["PerPerson"] = "PerPerson";
    PackageCalculationRuleType["PerAdult"] = "PerAdult";
    PackageCalculationRuleType["PerChild"] = "PerChild";
    PackageCalculationRuleType["PerRoom"] = "PerRoom";
})(PackageCalculationRuleType = exports.PackageCalculationRuleType || (exports.PackageCalculationRuleType = {}));
/** Sources of Products */
var ProductSourceType;
(function (ProductSourceType) {
    ProductSourceType["Reservation"] = "Reservation";
    ProductSourceType["RateHeader"] = "RateHeader";
    ProductSourceType["RateDetail"] = "RateDetail";
})(ProductSourceType = exports.ProductSourceType || (exports.ProductSourceType = {}));
/** Simple type for package child buckets. */
var PackageChildBuckets;
(function (PackageChildBuckets) {
    PackageChildBuckets["Bucket1"] = "Bucket1";
    PackageChildBuckets["Bucket2"] = "Bucket2";
    PackageChildBuckets["Bucket3"] = "Bucket3";
})(PackageChildBuckets = exports.PackageChildBuckets || (exports.PackageChildBuckets = {}));
/** Simple type for valid values for Yieldable element for the Rate plan code. */
var RatePlanYieldableType;
(function (RatePlanYieldableType) {
    RatePlanYieldableType["Yieldable"] = "Yieldable";
    RatePlanYieldableType["NonYieldable"] = "NonYieldable";
    RatePlanYieldableType["StayPattern"] = "StayPattern";
})(RatePlanYieldableType = exports.RatePlanYieldableType || (exports.RatePlanYieldableType = {}));
/** None means that rate is a standard rate. If sent in the changeRatePlan operation will delete any Based on Rate Plan Type. */
var BasedOnRatePlanType;
(function (BasedOnRatePlanType) {
    BasedOnRatePlanType["BaseRate"] = "BaseRate";
    BasedOnRatePlanType["DynamicBaseRate"] = "DynamicBaseRate";
    BasedOnRatePlanType["BARBasedRate"] = "BARBasedRate";
    BasedOnRatePlanType["AdvancedDynamicBaseRate"] = "AdvancedDynamicBaseRate";
    BasedOnRatePlanType["None"] = "None";
})(BasedOnRatePlanType = exports.BasedOnRatePlanType || (exports.BasedOnRatePlanType = {}));
/** Profile Types available for routing instructions. */
var RoutingProfileTypeType;
(function (RoutingProfileTypeType) {
    RoutingProfileTypeType["Agent"] = "Agent";
    RoutingProfileTypeType["Company"] = "Company";
    RoutingProfileTypeType["Contact"] = "Contact";
    RoutingProfileTypeType["Source"] = "Source";
})(RoutingProfileTypeType = exports.RoutingProfileTypeType || (exports.RoutingProfileTypeType = {}));
/** Color configuration type. This color configuration provides a visual category of entities. */
var ColorType;
(function (ColorType) {
    ColorType["Red"] = "Red";
    ColorType["DarkRed"] = "DarkRed";
    ColorType["Green"] = "Green";
    ColorType["DarkGreen"] = "DarkGreen";
    ColorType["LightGreen"] = "LightGreen";
    ColorType["Orange"] = "Orange";
    ColorType["White"] = "White";
    ColorType["Yellow"] = "Yellow";
    ColorType["DarkYellow"] = "DarkYellow";
    ColorType["Purple"] = "Purple";
    ColorType["Brown"] = "Brown";
    ColorType["Gray"] = "Gray";
    ColorType["Aqua"] = "Aqua";
    ColorType["Chocolate"] = "Chocolate";
    ColorType["Blue"] = "Blue";
    ColorType["LightBlue"] = "LightBlue";
    ColorType["DarkBlue"] = "DarkBlue";
    ColorType["Cyan"] = "Cyan";
    ColorType["DarkCyan"] = "DarkCyan";
    ColorType["Magenta"] = "Magenta";
    ColorType["DarkMagenta"] = "DarkMagenta";
    ColorType["Black"] = "Black";
})(ColorType = exports.ColorType || (exports.ColorType = {}));
var MasterInfoCodeDetailType;
(function (MasterInfoCodeDetailType) {
    MasterInfoCodeDetailType["LongDescription"] = "LongDescription";
    MasterInfoCodeDetailType["ShortDescription"] = "ShortDescription";
})(MasterInfoCodeDetailType = exports.MasterInfoCodeDetailType || (exports.MasterInfoCodeDetailType = {}));
var MasterType;
(function (MasterType) {
    MasterType["Country"] = "Country";
    MasterType["State"] = "State";
    MasterType["AddressType"] = "AddressType";
    MasterType["PhoneType"] = "PhoneType";
    MasterType["RateCategory"] = "RateCategory";
    MasterType["CalculationRule"] = "CalculationRule";
    MasterType["PostingRythym"] = "PostingRythym";
    MasterType["BillingInstruction"] = "BillingInstruction";
    MasterType["TransactionCode"] = "TransactionCode";
    MasterType["DisplaySet"] = "DisplaySet";
    MasterType["MailingActions"] = "MailingActions";
    MasterType["DistanceType"] = "DistanceType";
    MasterType["District"] = "District";
    MasterType["Territory"] = "Territory";
    MasterType["FiscalRegion"] = "FiscalRegion";
    MasterType["InventoryItem"] = "InventoryItem";
    MasterType["Package"] = "Package";
    MasterType["RoomFeaturePreference"] = "RoomFeaturePreference";
    MasterType["SpecialPreference"] = "SpecialPreference";
    MasterType["Promotion"] = "Promotion";
    MasterType["Department"] = "Department";
    MasterType["ReservationPreference"] = "ReservationPreference";
    MasterType["FacilityTask"] = "FacilityTask";
    MasterType["RoomType"] = "RoomType";
    MasterType["RateCode"] = "RateCode";
    MasterType["OutOfOrderReason"] = "OutOfOrderReason";
    MasterType["Block"] = "Block";
})(MasterType = exports.MasterType || (exports.MasterType = {}));
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
        this.instance = axios_1.default.create(Object.assign(Object.assign({}, axiosConfig), { baseURL: new URL('/rtp/v1', axiosConfig.baseURL).toString() }));
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
 * @title OPERA Cloud Rate API
 * @version 21.5.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /rtp/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 21.5.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
class Api extends HttpClient {
    constructor() {
        super(...arguments);
        this.hotels = {
            /**
             * @description This API allows to fetch Best Available rates for rate code(s). <p><strong>OperationId:</strong>getBestAvailableRates</p>
             *
             * @tags RatePlan
             * @name GetBestAvailableRates
             * @summary Fetch Best Available Rates
             * @request GET:/hotels/{hotelId}/bestavailablerates
             */
            getBestAvailableRates: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/bestavailablerates`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API allows to create Best Available rates for rate code(s). <p><strong>OperationId:</strong>postBestAvailableRates</p>
             *
             * @tags RatePlan
             * @name PostBestAvailableRates
             * @summary Create a Best Available Rates
             * @request POST:/hotels/{hotelId}/bestavailablerates
             */
            postBestAvailableRates: (hotelId, createBestAvailableRates, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/bestavailablerates`, method: 'POST', body: createBestAvailableRates, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API allows to fetch Best Available rates for rate code(s). <p><strong>OperationId:</strong>deleteBestAvailableRates</p>
             *
             * @tags RatePlan
             * @name DeleteBestAvailableRates
             * @summary Delete Best Available Rates
             * @request DELETE:/hotels/{hotelId}/bestavailablerates
             */
            deleteBestAvailableRates: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/bestavailablerates`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API allows you to fetch negotiated rates and profile for a given hotel id. <p><strong>OperationId:</strong>getNegotiatedRates</p>
             *
             * @tags RatePlan
             * @name GetNegotiatedRates
             * @summary Get negotiated rates and profiles
             * @request GET:/hotels/{hotelId}/negotiatedRates
             */
            getNegotiatedRates: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/negotiatedRates`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API allows you to create negotiated rate for a given profile. <p><strong>OperationId:</strong>postNegotiatedRates</p>
             *
             * @tags RatePlan
             * @name PostNegotiatedRates
             * @summary Create negotiated rates
             * @request POST:/hotels/{hotelId}/negotiatedRates
             */
            postNegotiatedRates: (hotelId, negotiatedRates, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/negotiatedRates`, method: 'POST', body: negotiatedRates, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API allows you to update negotiated rate for a given profile. <p><strong>OperationId:</strong>putNegotiatedRates</p>
             *
             * @tags RatePlan
             * @name PutNegotiatedRates
             * @summary Change negotiated rates
             * @request PUT:/hotels/{hotelId}/negotiatedRates/{rateCode}
             */
            putNegotiatedRates: (rateCode, hotelId, negotiatedRates, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/negotiatedRates/${rateCode}`, method: 'PUT', body: negotiatedRates, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API allows you to fetch a Rate Plan and Profile for given hotel id and negotiated rate code. <p><strong>OperationId:</strong>getNegotiatedRatesForGivenHotelAndRate</p>
             *
             * @tags RatePlan
             * @name GetNegotiatedRatesForGivenHotelAndRate
             * @summary Fetch Negotiated Rates
             * @request GET:/hotels/{hotelId}/negotiatedRates/{rateCode}/profiles
             */
            getNegotiatedRatesForGivenHotelAndRate: (rateCode, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/negotiatedRates/${rateCode}/profiles`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API allows you to fetch Rate Plans for a given hotel id. <p><strong>OperationId:</strong>getRatePlan</p>
             *
             * @tags RatePlan
             * @name GetRatePlan
             * @summary Get rate plan
             * @request GET:/hotels/{hotelId}/ratePlans
             */
            getRatePlan: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/ratePlans`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to get a rate plan&apos;s pricing schedules. The information includes the date range and room types for which the price is valid, rate amounts for multiple persons, and associated packages.<p><strong>OperationId:</strong>getRatePlanSchedules</p>
             *
             * @tags RatePlan
             * @name GetRatePlanSchedules
             * @summary Get rate plan schedules
             * @request GET:/hotels/{hotelId}/ratePlans/{ratePlanCode}/schedules
             */
            getRatePlanSchedules: (ratePlanCode, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/ratePlans/${ratePlanCode}/schedules`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete Rate Plan schedules.<p><strong>OperationId:</strong>deleteRatePlanSchedules</p>
             *
             * @tags RatePlan
             * @name DeleteRatePlanSchedules
             * @summary Delete rate plan schedule
             * @request DELETE:/hotels/{hotelId}/ratePlans/{ratePlanCode}/schedules
             */
            deleteRatePlanSchedules: (ratePlanCode, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/ratePlans/${ratePlanCode}/schedules`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.packages = {
            /**
             * @description Use this API you to get configured packages for a hotel.<p><strong>OperationId:</strong>getPackages</p>
             *
             * @tags RatePlan
             * @name GetPackages
             * @summary Get Packages
             * @request GET:/packages
             */
            getPackages: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/packages`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.profiles = {
            /**
             * @description This API allows you to fetch negotiated Rates for a given profile. <p><strong>OperationId:</strong>getNegotiatedRatesForGivenProfile</p>
             *
             * @tags RatePlan
             * @name GetNegotiatedRatesForGivenProfile
             * @summary Get negotiated rate details for given profile
             * @request GET:/profiles/{profileId}/negotiatedRates
             */
            getNegotiatedRatesForGivenProfile: (hotelId, profileId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/profiles/${profileId}/negotiatedRates`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.ratePlans = {
            /**
             * @description Use this API to get configured Rate Plans for a property and filter this by search criteria.<p><strong>OperationId:</strong>getRatePlans</p>
             *
             * @tags RatePlan
             * @name GetRatePlans
             * @summary Get rate plans
             * @request GET:/ratePlans
             */
            getRatePlans: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/ratePlans`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
    }
}
exports.Api = Api;
