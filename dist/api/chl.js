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
exports.Api = exports.HttpClient = exports.ContentType = exports.SellOrderType = exports.RestrictionStatusesType = exports.MarketingPolicyType = exports.DepositCancelRevenueType = exports.OffsetUnitType = exports.PolicyBasisTypeType = exports.ChannelParameterLevelType = exports.ChargeTypeType = exports.ChannelParameterValueType = exports.GlobalDescTypeType = exports.RatePlanApprovalStatusType = exports.RateCodeLockStatusType = exports.BaseType = exports.PersonNameTypeType = exports.LetterTypeType = exports.OrderByAscDescType = exports.AmenityGroupType = exports.ContractPriceFrequencyType = exports.ContractTransactionType = exports.ContractPriceType = exports.ContractFeeTypeType = exports.ChannelAccountTypeType = exports.SystemErrorBookingResponseType = void 0;
/** Simple type for external system booking response. */
var SystemErrorBookingResponseType;
(function (SystemErrorBookingResponseType) {
    SystemErrorBookingResponseType["PendingNeeded"] = "PendingNeeded";
    SystemErrorBookingResponseType["Unconfirmed"] = "Unconfirmed";
    SystemErrorBookingResponseType["Cancelled"] = "Cancelled";
})(SystemErrorBookingResponseType = exports.SystemErrorBookingResponseType || (exports.SystemErrorBookingResponseType = {}));
/** Represents channel account TEMPLATE type. */
var ChannelAccountTypeType;
(function (ChannelAccountTypeType) {
    ChannelAccountTypeType["Property"] = "Property";
    ChannelAccountTypeType["Chain"] = "Chain";
    ChannelAccountTypeType["Dealer"] = "Dealer";
    ChannelAccountTypeType["Subsidiary"] = "Subsidiary";
    ChannelAccountTypeType["Routing"] = "Routing";
    ChannelAccountTypeType["Template"] = "Template";
})(ChannelAccountTypeType = exports.ChannelAccountTypeType || (exports.ChannelAccountTypeType = {}));
/** To specify contract element is for Miscellaneous fee. */
var ContractFeeTypeType;
(function (ContractFeeTypeType) {
    ContractFeeTypeType["Setup"] = "Setup";
    ContractFeeTypeType["Maintenance"] = "Maintenance";
    ContractFeeTypeType["Transaction"] = "Transaction";
    ContractFeeTypeType["Fax"] = "Fax";
    ContractFeeTypeType["MinimumFee"] = "MinimumFee";
    ContractFeeTypeType["Miscellaneous"] = "Miscellaneous";
})(ContractFeeTypeType = exports.ContractFeeTypeType || (exports.ContractFeeTypeType = {}));
/** To specify price will be billed per reservation. This is allowed only if Fee type is Transaction or Fax. */
var ContractPriceType;
(function (ContractPriceType) {
    ContractPriceType["FlatFee"] = "FlatFee";
    ContractPriceType["Property"] = "Property";
    ContractPriceType["Room"] = "Room";
    ContractPriceType["Reservation"] = "Reservation";
})(ContractPriceType = exports.ContractPriceType || (exports.ContractPriceType = {}));
/** To specify range information is considered per number of Rooms. This is allowed only if Fee type is Maintenance. */
var ContractTransactionType;
(function (ContractTransactionType) {
    ContractTransactionType["Properties"] = "Properties";
    ContractTransactionType["Rooms"] = "Rooms";
})(ContractTransactionType = exports.ContractTransactionType || (exports.ContractTransactionType = {}));
/** To specify bills will be generated on Yearly basis. */
var ContractPriceFrequencyType;
(function (ContractPriceFrequencyType) {
    ContractPriceFrequencyType["Monthly"] = "Monthly";
    ContractPriceFrequencyType["Quarterly"] = "Quarterly";
    ContractPriceFrequencyType["HalfYearly"] = "HalfYearly";
    ContractPriceFrequencyType["Yearly"] = "Yearly";
})(ContractPriceFrequencyType = exports.ContractPriceFrequencyType || (exports.ContractPriceFrequencyType = {}));
/** User defined logical group name for the amenities. */
var AmenityGroupType;
(function (AmenityGroupType) {
    AmenityGroupType["PropertyFeatures"] = "PropertyFeatures";
    AmenityGroupType["RoomFeatures"] = "RoomFeatures";
    AmenityGroupType["ProductsFeatures"] = "ProductsFeatures";
    AmenityGroupType["BedCodes"] = "BedCodes";
})(AmenityGroupType = exports.AmenityGroupType || (exports.AmenityGroupType = {}));
var OrderByAscDescType;
(function (OrderByAscDescType) {
    OrderByAscDescType["Asc"] = "Asc";
    OrderByAscDescType["Desc"] = "Desc";
})(OrderByAscDescType = exports.OrderByAscDescType || (exports.OrderByAscDescType = {}));
/** Represents Inquiry Letter Type. */
var LetterTypeType;
(function (LetterTypeType) {
    LetterTypeType["Confirmation"] = "Confirmation";
    LetterTypeType["Cancellation"] = "Cancellation";
    LetterTypeType["BanquetEventOrder"] = "BanquetEventOrder";
    LetterTypeType["Contract"] = "Contract";
    LetterTypeType["Inquiry"] = "Inquiry";
})(LetterTypeType = exports.LetterTypeType || (exports.LetterTypeType = {}));
/** Person's name in an external system. */
var PersonNameTypeType;
(function (PersonNameTypeType) {
    PersonNameTypeType["Primary"] = "Primary";
    PersonNameTypeType["Alternate"] = "Alternate";
    PersonNameTypeType["Incognito"] = "Incognito";
    PersonNameTypeType["External"] = "External";
    PersonNameTypeType["Phonetic"] = "Phonetic";
})(PersonNameTypeType = exports.PersonNameTypeType || (exports.PersonNameTypeType = {}));
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
/** Either Room Type or Rate Plan Code */
var GlobalDescTypeType;
(function (GlobalDescTypeType) {
    GlobalDescTypeType["RoomType"] = "RoomType";
    GlobalDescTypeType["RatePlan"] = "RatePlan";
})(GlobalDescTypeType = exports.GlobalDescTypeType || (exports.GlobalDescTypeType = {}));
/** The value types of parameter, possible types are Boolean, String, Date, and Number. */
var ChannelParameterValueType;
(function (ChannelParameterValueType) {
    ChannelParameterValueType["Boolean"] = "Boolean";
    ChannelParameterValueType["String"] = "String";
    ChannelParameterValueType["Date"] = "Date";
    ChannelParameterValueType["Time"] = "Time";
    ChannelParameterValueType["Number"] = "Number";
    ChannelParameterValueType["SingleSelectLOV"] = "SingleSelectLOV";
    ChannelParameterValueType["MultiSelectLOV"] = "MultiSelectLOV";
})(ChannelParameterValueType = exports.ChannelParameterValueType || (exports.ChannelParameterValueType = {}));
/** Total Pricing Element either Tax or Service Fee */
var ChargeTypeType;
(function (ChargeTypeType) {
    ChargeTypeType["Tax"] = "Tax";
    ChargeTypeType["ServiceFee"] = "ServiceFee";
})(ChargeTypeType = exports.ChargeTypeType || (exports.ChargeTypeType = {}));
var ChannelParameterLevelType;
(function (ChannelParameterLevelType) {
    ChannelParameterLevelType["Global"] = "Global";
    ChannelParameterLevelType["Hotel"] = "Hotel";
})(ChannelParameterLevelType = exports.ChannelParameterLevelType || (exports.ChannelParameterLevelType = {}));
/** Full Amount. */
var PolicyBasisTypeType;
(function (PolicyBasisTypeType) {
    PolicyBasisTypeType["FlatAmount"] = "FlatAmount";
    PolicyBasisTypeType["Percentage"] = "Percentage";
    PolicyBasisTypeType["Nights"] = "Nights";
    PolicyBasisTypeType["NightPercentage"] = "NightPercentage";
    PolicyBasisTypeType["FullAmount"] = "FullAmount";
})(PolicyBasisTypeType = exports.PolicyBasisTypeType || (exports.PolicyBasisTypeType = {}));
/** Indicates deadline offset unit type. */
var OffsetUnitType;
(function (OffsetUnitType) {
    OffsetUnitType["Year"] = "Year";
    OffsetUnitType["Month"] = "Month";
    OffsetUnitType["Day"] = "Day";
    OffsetUnitType["Hour"] = "Hour";
})(OffsetUnitType = exports.OffsetUnitType || (exports.OffsetUnitType = {}));
/** The type to indicate what revenue is to be used for calculating deposit/cancellation amounts. */
var DepositCancelRevenueType;
(function (DepositCancelRevenueType) {
    DepositCancelRevenueType["Rooms"] = "Rooms";
    DepositCancelRevenueType["Catering"] = "Catering";
    DepositCancelRevenueType["All"] = "All";
})(DepositCancelRevenueType = exports.DepositCancelRevenueType || (exports.DepositCancelRevenueType = {}));
/** Indicates the channel policy type like deposit,cancel etc. */
var MarketingPolicyType;
(function (MarketingPolicyType) {
    MarketingPolicyType["Deposit"] = "Deposit";
    MarketingPolicyType["Commission"] = "Commission";
    MarketingPolicyType["Cancel"] = "Cancel";
    MarketingPolicyType["Guarantee"] = "Guarantee";
    MarketingPolicyType["General"] = "General";
    MarketingPolicyType["Penalty"] = "Penalty";
    MarketingPolicyType["Tax"] = "Tax";
    MarketingPolicyType["Promotion"] = "Promotion";
})(MarketingPolicyType = exports.MarketingPolicyType || (exports.MarketingPolicyType = {}));
var RestrictionStatusesType;
(function (RestrictionStatusesType) {
    RestrictionStatusesType["Closed"] = "Closed";
    RestrictionStatusesType["ClosedForArrival"] = "ClosedForArrival";
    RestrictionStatusesType["ClosedForDeparture"] = "ClosedForDeparture";
    RestrictionStatusesType["MinimumStayThrough"] = "MinimumStayThrough";
    RestrictionStatusesType["MaximumStayThrough"] = "MaximumStayThrough";
    RestrictionStatusesType["MinimumLengthOfStay"] = "MinimumLengthOfStay";
    RestrictionStatusesType["MaximumLengthOfStay"] = "MaximumLengthOfStay";
    RestrictionStatusesType["LOSNotAvailable"] = "LOSNotAvailable";
    RestrictionStatusesType["MinimumAdvanceBooking"] = "MinimumAdvanceBooking";
    RestrictionStatusesType["MaximumAdvanceBooking"] = "MaximumAdvanceBooking";
    RestrictionStatusesType["Open"] = "Open";
    RestrictionStatusesType["OpenForArrival"] = "OpenForArrival";
    RestrictionStatusesType["OpenForDeparture"] = "OpenForDeparture";
})(RestrictionStatusesType = exports.RestrictionStatusesType || (exports.RestrictionStatusesType = {}));
/** Channel Sell By which may be RATEROOM, RATE or ROOM. */
var SellOrderType;
(function (SellOrderType) {
    SellOrderType["RateRoom"] = "RateRoom";
    SellOrderType["Rate"] = "Rate";
    SellOrderType["Room"] = "Room";
})(SellOrderType = exports.SellOrderType || (exports.SellOrderType = {}));
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
        this.instance = axios_1.default.create(Object.assign(Object.assign({}, axiosConfig), { baseURL: new URL('/chl/v1', axiosConfig.baseURL).toString() }));
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
 * @title OPERA Cloud Channel Configuration API
 * @version 22.3.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /chl/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 22.3.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
class Api extends HttpClient {
    constructor() {
        super(...arguments);
        this.availability = {
            /**
             * @description Operation to Fetch the Regional Rate Parity. <p><strong>OperationId:</strong>getRegionalRateParity</p>
             *
             * @tags Availability
             * @name GetRegionalRateParity
             * @summary Gets the regional rate parity
             * @request GET:/availability/summary
             */
            getRegionalRateParity: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/availability/summary`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.channels = {
            /**
             * @description Use this API to get list of channels from OPERA. <p><strong>OperationId:</strong>getChannels</p>
             *
             * @tags Channel
             * @name GetChannels
             * @summary Gets list of channels
             * @request GET:/channels
             */
            getChannels: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update channel configuration <p><strong>OperationId:</strong>putChannels</p>
             *
             * @tags Channel
             * @name PutChannels
             * @summary Update channel configuration
             * @request PUT:/channels
             */
            putChannels: (hotelId, channels, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels`, method: 'PUT', body: channels, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to add new channel code in OPERA <p><strong>OperationId:</strong>postChannels</p>
             *
             * @tags Channel
             * @name PostChannels
             * @summary Adds new channel
             * @request POST:/channels
             */
            postChannels: (hotelId, channels, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels`, method: 'POST', body: channels, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API deletes channel account contracts. <p><strong>OperationId:</strong>deleteChannelAccountContracts</p>
             *
             * @tags Channel
             * @name DeleteChannelAccountContracts
             * @summary Deletes channel account contracts.
             * @request DELETE:/channels/account/contracts
             */
            deleteChannelAccountContracts: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/account/contracts`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API creates copy of channel account contracts. <p><strong>OperationId:</strong>copyChannelAccountContracts</p>
             *
             * @tags Channel
             * @name CopyChannelAccountContracts
             * @summary Creates copy of channel account contracts
             * @request PUT:/channels/account/contracts/copy
             */
            copyChannelAccountContracts: (hotelId, channelAccountContractsCopy, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/account/contracts/copy`, method: 'PUT', body: channelAccountContractsCopy, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API retrieves channel accounts. <p><strong>OperationId:</strong>getChannelAccounts</p>
             *
             * @tags Channel
             * @name GetChannelAccounts
             * @summary This API retrieves channel accounts.
             * @request GET:/channels/accounts
             */
            getChannelAccounts: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/accounts`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API adds channel accounts. <p><strong>OperationId:</strong>postChannelAccounts</p>
             *
             * @tags Channel
             * @name PostChannelAccounts
             * @summary Adds channel accounts.
             * @request POST:/channels/accounts
             */
            postChannelAccounts: (hotelId, channelAccounts, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/accounts`, method: 'POST', body: channelAccounts, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update existing channel account for a given OPERA profile id <p><strong>OperationId:</strong>putChannelAccounts</p>
             *
             * @tags Channel
             * @name PutChannelAccounts
             * @summary Updates channel accounts
             * @request PUT:/channels/accounts
             */
            putChannelAccounts: (hotelId, channelAccountsToChange, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/accounts`, method: 'PUT', body: channelAccountsToChange, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to get existing channel account for a given OPERA profile id. <p><strong>OperationId:</strong>getChannelAccount</p>
             *
             * @tags Channel
             * @name GetChannelAccount
             * @summary Gets channel accounts
             * @request GET:/channels/accounts/{accountProfileId}
             */
            getChannelAccount: (hotelId, accountProfileId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/accounts/${accountProfileId}`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update existing cannel account contract for a given OPERA profile id <p><strong>OperationId:</strong>putChannelAccountContracts</p>
             *
             * @tags Channel
             * @name PutChannelAccountContracts
             * @summary Updates channel account contracts for given profile Id.
             * @request PUT:/channels/accounts/{accountProfileId}/contracts
             */
            putChannelAccountContracts: (hotelId, accountProfileId, channelAccountContracts, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/accounts/${accountProfileId}/contracts`, method: 'PUT', body: channelAccountContracts, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API adds channel account contracts for given profile Id. <p><strong>OperationId:</strong>postChannelAccountContracts</p>
             *
             * @tags Channel
             * @name PostChannelAccountContracts
             * @summary Adds channel account contracts for given profile Id.
             * @request POST:/channels/accounts/{accountProfileId}/contracts
             */
            postChannelAccountContracts: (hotelId, accountProfileId, channelAccountContracts, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/accounts/${accountProfileId}/contracts`, method: 'POST', body: channelAccountContracts, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to get existing cannel account contract for a given OPERA profile id. <p><strong>OperationId:</strong>getChannelAccountContractElements</p>
             *
             * @tags Channel
             * @name GetChannelAccountContractElements
             * @summary Gets channel account contracts for given profile Id.
             * @request GET:/channels/accounts/{accountProfileId}/contracts/{contractId}
             */
            getChannelAccountContractElements: (hotelId, contractId, accountProfileId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/accounts/${accountProfileId}/contracts/${contractId}`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to add channel amenities mapping <p><strong>OperationId:</strong>postAmenitiesMapping</p>
             *
             * @tags Channel
             * @name PostAmenitiesMapping
             * @summary Adds channel amenities configuration
             * @request POST:/channels/amenities
             */
            postAmenitiesMapping: (hotelId, amenities, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/amenities`, method: 'POST', body: amenities, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update channel amenities mapping <p><strong>OperationId:</strong>putAmenitiesMapping</p>
             *
             * @tags Channel
             * @name PutAmenitiesMapping
             * @summary Updates channel amenities configuration
             * @request PUT:/channels/amenities
             */
            putAmenitiesMapping: (hotelId, amenities, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/amenities`, method: 'PUT', body: amenities, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete channel amenities mapping <p><strong>OperationId:</strong>deleteAmenitiesMapping</p>
             *
             * @tags Channel
             * @name DeleteAmenitiesMapping
             * @summary Deletes channel amenities configuration
             * @request DELETE:/channels/amenities
             */
            deleteAmenitiesMapping: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/amenities`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to get channel amenities mapping. <p><strong>OperationId:</strong>getAmenitiesMapping</p>
             *
             * @tags Channel
             * @name GetAmenitiesMapping
             * @summary Gets channel amenities configuration
             * @request GET:/channels/amenities/mapping
             */
            getAmenitiesMapping: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/amenities/mapping`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API changes publishes channel availability. <p><strong>OperationId:</strong>publishChannelAvailability</p>
             *
             * @tags Channel
             * @name PublishChannelAvailability
             * @summary Publishes channel availability.
             * @request PUT:/channels/availability/publish
             */
            publishChannelAvailability: (hotelId, channelAvailability, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/availability/publish`, method: 'PUT', body: channelAvailability, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API retrieves channel billing statements. <p><strong>OperationId:</strong>getChannelBillingStatements</p>
             *
             * @tags Channel
             * @name GetChannelBillingStatements
             * @summary Retrieves channel billing statements.
             * @request GET:/channels/billingStatements
             */
            getChannelBillingStatements: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/billingStatements`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API adds channel billing statements. <p><strong>OperationId:</strong>postChannelBillingStatements</p>
             *
             * @tags Channel
             * @name PostChannelBillingStatements
             * @summary Adds channel billing statements.
             * @request POST:/channels/billingStatements
             */
            postChannelBillingStatements: (hotelId, channelBillingStatements, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/billingStatements`, method: 'POST', body: channelBillingStatements, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update channels billing statements for a given OPERA statement id <p><strong>OperationId:</strong>putChannelBillingStatements</p>
             *
             * @tags Channel
             * @name PutChannelBillingStatements
             * @summary Updates channel billing statement details
             * @request PUT:/channels/billingStatements
             */
            putChannelBillingStatements: (hotelId, channelBillingStatements, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/billingStatements`, method: 'PUT', body: channelBillingStatements, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API deletes channel billing statements. <p><strong>OperationId:</strong>deleteChannelBillingStatements</p>
             *
             * @tags Channel
             * @name DeleteChannelBillingStatements
             * @summary Deletes channel billing statements.
             * @request DELETE:/channels/billingStatements
             */
            deleteChannelBillingStatements: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/billingStatements`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API generates channel billing statements. <p><strong>OperationId:</strong>generateChannelBillingStatements</p>
             *
             * @tags Channel
             * @name GenerateChannelBillingStatements
             * @summary This API generates channel billing statements.
             * @request POST:/channels/billingStatements/generate
             */
            generateChannelBillingStatements: (hotelId, channelBillingStatements, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/billingStatements/generate`, method: 'POST', body: channelBillingStatements, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API retrieves channel billing statement for a given statement Id. <p><strong>OperationId:</strong>getChannelBillingStatement</p>
             *
             * @tags Channel
             * @name GetChannelBillingStatement
             * @summary Retrieves channel billing statement for a given statement Id
             * @request GET:/channels/billingStatements/{statementId}
             */
            getChannelBillingStatement: (hotelId, statementId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/billingStatements/${statementId}`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API retrieves channel billing statement details for a given statement Id. <p><strong>OperationId:</strong>getChannelBillingStatementDetails</p>
             *
             * @tags Channel
             * @name GetChannelBillingStatementDetails
             * @summary Retrieves channel billing statement details for a given statement Id
             * @request GET:/channels/billingStatements/{statementId}/details
             */
            getChannelBillingStatementDetails: (hotelId, statementId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/billingStatements/${statementId}/details`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API retrieves billing statement details statistics. <p><strong>OperationId:</strong>getStatementDetailsStatistics</p>
             *
             * @tags Channel
             * @name GetStatementDetailsStatistics
             * @summary Retrieves billing statement details statistics.
             * @request GET:/channels/billingStatements/{statementId}/statistics
             */
            getStatementDetailsStatistics: (hotelId, statementId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/billingStatements/${statementId}/statistics`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to get channel mapping for OPERA credit cards to channel for a given hotel id. <p><strong>OperationId:</strong>getChannelCardTypeMappings</p>
             *
             * @tags Channel
             * @name GetChannelCardTypeMappings
             * @summary Gets channel credit card mapping for a hotel
             * @request GET:/channels/cardType/mappings
             */
            getChannelCardTypeMappings: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/cardType/mappings`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to add channel mapping for OPERA Credit cards <p><strong>OperationId:</strong>postCreditCardsMapping</p>
             *
             * @tags Channel
             * @name PostCreditCardsMapping
             * @summary Adds channel credit card mapping
             * @request POST:/channels/cardTypes
             */
            postCreditCardsMapping: (hotelId, creditCards, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/cardTypes`, method: 'POST', body: creditCards, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update channel credit card code mapping to OPERA credit card code <p><strong>OperationId:</strong>putCreditCardsMapping</p>
             *
             * @tags Channel
             * @name PutCreditCardsMapping
             * @summary Updates channel credit card mapping
             * @request PUT:/channels/cardTypes
             */
            putCreditCardsMapping: (hotelId, creditCards, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/cardTypes`, method: 'PUT', body: creditCards, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete channel credit card code mapping to OPERA credit card code. <p><strong>OperationId:</strong>deleteCreditCardsMapping</p>
             *
             * @tags Channel
             * @name DeleteCreditCardsMapping
             * @summary Deletes channel credit card mapping
             * @request DELETE:/channels/cardTypes
             */
            deleteCreditCardsMapping: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/cardTypes`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to get channel credit card code mapping to OPERA credit card code. <p><strong>OperationId:</strong>getCreditCardsMapping</p>
             *
             * @tags Channel
             * @name GetCreditCardsMapping
             * @summary Gets channel credit card mapping
             * @request GET:/channels/cardTypes/mapping
             */
            getCreditCardsMapping: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/cardTypes/mapping`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to get channel property confirmation letter configuration <p><strong>OperationId:</strong>getChannelHotelLetters</p>
             *
             * @tags Channel
             * @name GetChannelHotelLetters
             * @summary Gets channel property confirmation letter mapping
             * @request GET:/channels/confirmationLetters
             */
            getChannelHotelLetters: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/confirmationLetters`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to add channel property confirmation letter configuration <p><strong>OperationId:</strong>postChannelHotelLetters</p>
             *
             * @tags Channel
             * @name PostChannelHotelLetters
             * @summary Adds channel property confirmation letter mapping
             * @request POST:/channels/confirmationLetters
             */
            postChannelHotelLetters: (hotelId, channelHotelLettersToBeCreated, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/confirmationLetters`, method: 'POST', body: channelHotelLettersToBeCreated, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update channel property confirmation letter configuration <p><strong>OperationId:</strong>putChannelHotelLetters</p>
             *
             * @tags Channel
             * @name PutChannelHotelLetters
             * @summary Updates channel property confirmation letter mapping
             * @request PUT:/channels/confirmationLetters
             */
            putChannelHotelLetters: (hotelId, channelHotelLettersToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/confirmationLetters`, method: 'PUT', body: channelHotelLettersToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete channel property confirmation letter configuration. <p><strong>OperationId:</strong>deleteChannelHotelLetters</p>
             *
             * @tags Channel
             * @name DeleteChannelHotelLetters
             * @summary Deletes channel property confirmation letter mapping
             * @request DELETE:/channels/confirmationLetters
             */
            deleteChannelHotelLetters: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/confirmationLetters`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to add channel currency code mapping to OPERA currency codes. <p><strong>OperationId:</strong>postCurrenciesMapping</p>
             *
             * @tags Channel
             * @name PostCurrenciesMapping
             * @summary Adds channel currency code mapping
             * @request POST:/channels/currencies
             */
            postCurrenciesMapping: (hotelId, currencies, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/currencies`, method: 'POST', body: currencies, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update channel mapping to OPERA currency codes <p><strong>OperationId:</strong>putCurrenciesMapping</p>
             *
             * @tags Channel
             * @name PutCurrenciesMapping
             * @summary Updates channel currency code mapping
             * @request PUT:/channels/currencies
             */
            putCurrenciesMapping: (hotelId, currencies, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/currencies`, method: 'PUT', body: currencies, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete channel mapping to OPERA currency codes. <p><strong>OperationId:</strong>deleteCurrenciesMapping</p>
             *
             * @tags Channel
             * @name DeleteCurrenciesMapping
             * @summary Deletes channel currency code mapping
             * @request DELETE:/channels/currencies
             */
            deleteCurrenciesMapping: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/currencies`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update channel mapping to OPERA currency codes. <p><strong>OperationId:</strong>getCurrenciesMapping</p>
             *
             * @tags Channel
             * @name GetCurrenciesMapping
             * @summary Gets channel currency code mapping
             * @request GET:/channels/currencies/mapping
             */
            getCurrenciesMapping: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/currencies/mapping`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API retrieves distribution templates. <p><strong>OperationId:</strong>getDistributionTemplates</p>
             *
             * @tags Channel
             * @name GetDistributionTemplates
             * @summary Retrieves distribution templates
             * @request GET:/channels/distributionTemplates
             */
            getDistributionTemplates: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/distributionTemplates`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to add a distribution rate template. <p><strong>OperationId:</strong>postDistributionTemplates</p>
             *
             * @tags Channel
             * @name PostDistributionTemplates
             * @summary Adds rate templates configurations
             * @request POST:/channels/distributionTemplates
             */
            postDistributionTemplates: (hotelId, distributionTemplates, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/distributionTemplates`, method: 'POST', body: distributionTemplates, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update existing distribution rate template <p><strong>OperationId:</strong>putDistributionTemplates</p>
             *
             * @tags Channel
             * @name PutDistributionTemplates
             * @summary Updates rate templates configurations
             * @request PUT:/channels/distributionTemplates
             */
            putDistributionTemplates: (hotelId, distributionTemplates, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/distributionTemplates`, method: 'PUT', body: distributionTemplates, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete existing distribution rate template. <p><strong>OperationId:</strong>deleteDistributionTemplates</p>
             *
             * @tags Channel
             * @name DeleteDistributionTemplates
             * @summary Deletes rate templates configurations
             * @request DELETE:/channels/distributionTemplates
             */
            deleteDistributionTemplates: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/distributionTemplates`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete channel error code mapping configurations. <p><strong>OperationId:</strong>deleteChannelErrors</p>
             *
             * @tags Channel
             * @name DeleteChannelErrors
             * @summary Deletes channel error codes
             * @request DELETE:/channels/errorCodes
             */
            deleteChannelErrors: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/errorCodes`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to add channel's guarantee codes mapping to OPERA guarantee codes. <p><strong>OperationId:</strong>postGuaranteesMapping</p>
             *
             * @tags Channel
             * @name PostGuaranteesMapping
             * @summary Adds channel guarantee code mapping
             * @request POST:/channels/guarantees
             */
            postGuaranteesMapping: (hotelId, guarantees, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/guarantees`, method: 'POST', body: guarantees, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update channel's guarantee codes mapping to OPERA guarantee codes <p><strong>OperationId:</strong>putGuaranteesMapping</p>
             *
             * @tags Channel
             * @name PutGuaranteesMapping
             * @summary Updates channel guarantee code mapping
             * @request PUT:/channels/guarantees
             */
            putGuaranteesMapping: (hotelId, guarantees, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/guarantees`, method: 'PUT', body: guarantees, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete channel's guarantee codes mapping to OPERA guarantee codes. <p><strong>OperationId:</strong>deleteGuaranteesMapping</p>
             *
             * @tags Channel
             * @name DeleteGuaranteesMapping
             * @summary Deletes channel guarantee code mapping
             * @request DELETE:/channels/guarantees
             */
            deleteGuaranteesMapping: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/guarantees`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to get channel guarantee code mapping to OPERA guarantee code for a given hotel. <p><strong>OperationId:</strong>getGuaranteesMapping</p>
             *
             * @tags Channel
             * @name GetGuaranteesMapping
             * @summary Gets channel guarantee code mapping for a hotel
             * @request GET:/channels/guarantees/mapping
             */
            getGuaranteesMapping: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/guarantees/mapping`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to add channel mapping to OPERA hotel id including channel hotel code, room sell limit per reservation, city code, end date. <p><strong>OperationId:</strong>postHotelsMapping</p>
             *
             * @tags Channel
             * @name PostHotelsMapping
             * @summary Adds channel hotel mapping
             * @request POST:/channels/hotels
             */
            postHotelsMapping: (hotelId, properties, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/hotels`, method: 'POST', body: properties, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update channel mapping to OPERA hotel id including channel hotel code, room sell limit per reservation, city code, end date <p><strong>OperationId:</strong>putHotelsMapping</p>
             *
             * @tags Channel
             * @name PutHotelsMapping
             * @summary Updates channel hotel mapping
             * @request PUT:/channels/hotels
             */
            putHotelsMapping: (hotelId, properties, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/hotels`, method: 'PUT', body: properties, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete channel mapping to OPERA hotel id including channel hotel code, room sell limit per reservation, city code, end date. <p><strong>OperationId:</strong>deleteHotelsMapping</p>
             *
             * @tags Channel
             * @name DeleteHotelsMapping
             * @summary Deletes channel hotel mapping
             * @request DELETE:/channels/hotels
             */
            deleteHotelsMapping: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/hotels`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to get channel mapping to OPERA hotel id including channel hotel code, room sell limit per reservation, city code, end date. <p><strong>OperationId:</strong>getHotelsMapping</p>
             *
             * @tags Channel
             * @name GetHotelsMapping
             * @summary Gets channel hotel mapping
             * @request GET:/channels/hotels/mapping
             */
            getHotelsMapping: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/hotels/mapping`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to get channel mapping for marketing messages. <p><strong>OperationId:</strong>getChannelMarketingText</p>
             *
             * @tags Channel
             * @name GetChannelMarketingText
             * @summary Gets channel marketing messages
             * @request GET:/channels/marketingText
             */
            getChannelMarketingText: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/marketingText`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to add channel mapping for marketing messages <p><strong>OperationId:</strong>postChannelMarketingText</p>
             *
             * @tags Channel
             * @name PostChannelMarketingText
             * @summary Adds channel marketing messages
             * @request POST:/channels/marketingText
             */
            postChannelMarketingText: (hotelId, channelMarketingText, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/marketingText`, method: 'POST', body: channelMarketingText, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update channel mapping for marketing messages <p><strong>OperationId:</strong>putChannelMarketingText</p>
             *
             * @tags Channel
             * @name PutChannelMarketingText
             * @summary Updates channel marketing messages
             * @request PUT:/channels/marketingText
             */
            putChannelMarketingText: (hotelId, channelMarketingTextToChange, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/marketingText`, method: 'PUT', body: channelMarketingTextToChange, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete channel mapping for marketing messages. <p><strong>OperationId:</strong>deleteChannelMarketingText</p>
             *
             * @tags Channel
             * @name DeleteChannelMarketingText
             * @summary Deletes channel marketing messages
             * @request DELETE:/channels/marketingText
             */
            deleteChannelMarketingText: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/marketingText`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to copy one channel's mapping for marketing messages to another channel and hotel mapping. <p><strong>OperationId:</strong>copyChannelMarketingText</p>
             *
             * @tags Channel
             * @name CopyChannelMarketingText
             * @summary Allows to copy marketing message to another channel and hotel
             * @request POST:/channels/marketingText/copy
             */
            copyChannelMarketingText: (hotelId, channelMarketingTextCopy, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/marketingText/copy`, method: 'POST', body: channelMarketingTextCopy, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to add channel's negotiated rate code mapping with an OPERA profile for a given hotel id <p><strong>OperationId:</strong>postChannelNegotiatedRate</p>
             *
             * @tags Channel
             * @name PostChannelNegotiatedRate
             * @summary Adds channel negotiate rate
             * @request POST:/channels/negotiatedRates
             */
            postChannelNegotiatedRate: (hotelId, channelNegotiatedRates, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/negotiatedRates`, method: 'POST', body: channelNegotiatedRates, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update channel's negotiated rate code mapping including negotiated profile, negotiate rate access code, start date, end date, and sequence. <p><strong>OperationId:</strong>putChannelNegotiatedRate</p>
             *
             * @tags Channel
             * @name PutChannelNegotiatedRate
             * @summary Updates channel negotiate rate
             * @request PUT:/channels/negotiatedRates
             */
            putChannelNegotiatedRate: (hotelId, channelNegotiatedRates, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/negotiatedRates`, method: 'PUT', body: channelNegotiatedRates, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update channel's negotiated rate code mapping including negotiated profile, negotiate rate access code, start date, end date, and sequence. <p><strong>OperationId:</strong>deleteChannelNegotiatedRate</p>
             *
             * @tags Channel
             * @name DeleteChannelNegotiatedRate
             * @summary Deletes channel negotiate rate
             * @request DELETE:/channels/negotiatedRates
             */
            deleteChannelNegotiatedRate: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/negotiatedRates`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update channel's negotiated rate code mapping including negotiated profile, negotiate rate access code, start date, end date, and sequence. <p><strong>OperationId:</strong>getChannelNegotiatedRate</p>
             *
             * @tags Channel
             * @name GetChannelNegotiatedRate
             * @summary Gets channel negotiate rate
             * @request GET:/channels/negotiatedRates
             */
            getChannelNegotiatedRate: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/negotiatedRates`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete channel rate categories for a given channel. <p><strong>OperationId:</strong>deleteChannelRateCategories</p>
             *
             * @tags Channel
             * @name DeleteChannelRateCategories
             * @summary Deletes given channel's rate categories
             * @request DELETE:/channels/rateCategories
             */
            deleteChannelRateCategories: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/rateCategories`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete channel rate level code's description. <p><strong>OperationId:</strong>deleteChannelRateLevels</p>
             *
             * @tags Channel
             * @name DeleteChannelRateLevels
             * @summary Deletes channel rate level
             * @request DELETE:/channels/rateLevels
             */
            deleteChannelRateLevels: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/rateLevels`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to get channel property rate mapping including channel rate code, start date, end date, rate level, channel rate description. <p><strong>OperationId:</strong>getChannelRateMapping</p>
             *
             * @tags Channel
             * @name GetChannelRateMapping
             * @summary Gets channel property rate mapping
             * @request GET:/channels/rates
             */
            getChannelRateMapping: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/rates`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to add channel property rate mapping with OPERA hotel rate <p><strong>OperationId:</strong>postChannelRateMapping</p>
             *
             * @tags Channel
             * @name PostChannelRateMapping
             * @summary Adds channel property rate mapping
             * @request POST:/channels/rates
             */
            postChannelRateMapping: (hotelId, channelRateMapping, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/rates`, method: 'POST', body: channelRateMapping, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update channel property rate mapping including channel rate code, start date, end date, rate level, channel rate description. <p><strong>OperationId:</strong>putChannelRateMapping</p>
             *
             * @tags Channel
             * @name PutChannelRateMapping
             * @summary Updates channel property rate mapping
             * @request PUT:/channels/rates
             */
            putChannelRateMapping: (hotelId, channelRateMapping, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/rates`, method: 'PUT', body: channelRateMapping, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete channel property rate mapping including channel rate code, start date, end date, rate level, channel rate description. <p><strong>OperationId:</strong>deleteChannelRateMapping</p>
             *
             * @tags Channel
             * @name DeleteChannelRateMapping
             * @summary Deletes channel property rate mapping
             * @request DELETE:/channels/rates
             */
            deleteChannelRateMapping: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/rates`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to get global rate description for given hotel id. <p><strong>OperationId:</strong>getChannelRatesGlobalDescriptions</p>
             *
             * @tags Channel
             * @name GetChannelRatesGlobalDescriptions
             * @summary Gets global rate descriptions
             * @request GET:/channels/rates/globalDescriptions
             */
            getChannelRatesGlobalDescriptions: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/rates/globalDescriptions`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to adds global room description for given hotel id and room type code <p><strong>OperationId:</strong>postChannelRatesGlobalDescriptions</p>
             *
             * @tags Channel
             * @name PostChannelRatesGlobalDescriptions
             * @summary Adds global room descriptions
             * @request POST:/channels/rates/globalDescriptions
             */
            postChannelRatesGlobalDescriptions: (hotelId, channelGlobalDescriptions, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/rates/globalDescriptions`, method: 'POST', body: channelGlobalDescriptions, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update global rate description for given hotel id and rate code <p><strong>OperationId:</strong>putChannelRatesGlobalDescriptions</p>
             *
             * @tags Channel
             * @name PutChannelRatesGlobalDescriptions
             * @summary Updates global rate descriptions
             * @request PUT:/channels/rates/globalDescriptions
             */
            putChannelRatesGlobalDescriptions: (hotelId, channelGlobalDescriptions, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/rates/globalDescriptions`, method: 'PUT', body: channelGlobalDescriptions, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete global rate description for given hotel id and rate code. <p><strong>OperationId:</strong>deleteChannelRatesGlobalDescriptions</p>
             *
             * @tags Channel
             * @name DeleteChannelRatesGlobalDescriptions
             * @summary Deletes global rate descriptions
             * @request DELETE:/channels/rates/globalDescriptions
             */
            deleteChannelRatesGlobalDescriptions: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/rates/globalDescriptions`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update sequence for given channel property rate room mapping  <p><strong>OperationId:</strong>putChannelRateRoomSeq</p>
             *
             * @tags Channel
             * @name PutChannelRateRoomSeq
             * @summary Updates channel property rateroom sequence
             * @request PUT:/channels/rates/roomSequence
             */
            putChannelRateRoomSeq: (hotelId, channelRateRoomSequence, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/rates/roomSequence`, method: 'PUT', body: channelRateRoomSequence, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API changes the channel restrictions. <p><strong>OperationId:</strong>publishChannelRestrictions</p>
             *
             * @tags Channel
             * @name PublishChannelRestrictions
             * @summary Publishes channel restrictions
             * @request PUT:/channels/restrictions/publish
             */
            publishChannelRestrictions: (hotelId, channelRestrictions, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/restrictions/publish`, method: 'PUT', body: channelRestrictions, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete channel configuration. <p><strong>OperationId:</strong>deleteChannelRoomTypes</p>
             *
             * @tags Channel
             * @name DeleteChannelRoomTypes
             * @summary Delete channel configuration
             * @request DELETE:/channels/roomTypes
             */
            deleteChannelRoomTypes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/roomTypes`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to add channel room mapping to OPERA hotel's room. <p><strong>OperationId:</strong>postChannelRoomMapping</p>
             *
             * @tags Channel
             * @name PostChannelRoomMapping
             * @summary Adds channel property room mapping
             * @request POST:/channels/rooms
             */
            postChannelRoomMapping: (hotelId, channelRoomMappings, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/rooms`, method: 'POST', body: channelRoomMappings, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update channel room description <p><strong>OperationId:</strong>manageChannelRoomMapping</p>
             *
             * @tags Channel
             * @name ManageChannelRoomMapping
             * @summary Updates channel room configuration
             * @request PUT:/channels/rooms
             */
            manageChannelRoomMapping: (hotelId, channelRoomMappings, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/rooms`, method: 'PUT', body: channelRoomMappings, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update OPERA room's global description for global distribution type channels <p><strong>OperationId:</strong>putRoomDescription</p>
             *
             * @tags Channel
             * @name PutRoomDescription
             * @summary Update global descriptions for a room
             * @request PUT:/channels/rooms/globalDescription
             */
            putRoomDescription: (hotelId, channelGlobalDescription, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/rooms/globalDescription`, method: 'PUT', body: channelGlobalDescription, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to get global room description for given hotel id and room type code. <p><strong>OperationId:</strong>getChannelRoomsGlobalDescriptions</p>
             *
             * @tags Channel
             * @name GetChannelRoomsGlobalDescriptions
             * @summary Gets global room descriptions
             * @request GET:/channels/rooms/globalDescriptions
             */
            getChannelRoomsGlobalDescriptions: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/rooms/globalDescriptions`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to add global rate description for given hotel id and rate code <p><strong>OperationId:</strong>postChannelRoomsGlobalDescriptions</p>
             *
             * @tags Channel
             * @name PostChannelRoomsGlobalDescriptions
             * @summary Adds global rate descriptions
             * @request POST:/channels/rooms/globalDescriptions
             */
            postChannelRoomsGlobalDescriptions: (hotelId, channelGlobalDescriptions, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/rooms/globalDescriptions`, method: 'POST', body: channelGlobalDescriptions, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update global room description for given hotel id and room type code <p><strong>OperationId:</strong>putChannelRoomsGlobalDescriptions</p>
             *
             * @tags Channel
             * @name PutChannelRoomsGlobalDescriptions
             * @summary Updates global room descriptions
             * @request PUT:/channels/rooms/globalDescriptions
             */
            putChannelRoomsGlobalDescriptions: (hotelId, channelGlobalDescriptions, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/rooms/globalDescriptions`, method: 'PUT', body: channelGlobalDescriptions, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete global room description for given hotel id and room type code. <p><strong>OperationId:</strong>deleteChannelRoomsGlobalDescriptions</p>
             *
             * @tags Channel
             * @name DeleteChannelRoomsGlobalDescriptions
             * @summary Deletes global room descriptions
             * @request DELETE:/channels/rooms/globalDescriptions
             */
            deleteChannelRoomsGlobalDescriptions: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/rooms/globalDescriptions`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete sub-channel (carrier) configuration for a given channel code. <p><strong>OperationId:</strong>deleteChannelCarriers</p>
             *
             * @tags Channel
             * @name DeleteChannelCarriers
             * @summary Deletes sub channel configuration
             * @request DELETE:/channels/subChannels
             */
            deleteChannelCarriers: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/subChannels`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API retrieves channel information for the given channel code. <p><strong>OperationId:</strong>getChannel</p>
             *
             * @tags Channel
             * @name GetChannel
             * @summary Gets channel detail
             * @request GET:/channels/{channelCode}
             */
            getChannel: (hotelId, channelCode, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/${channelCode}`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update channel error code mapping configurations <p><strong>OperationId:</strong>putChannelErrors</p>
             *
             * @tags Channel
             * @name PutChannelErrors
             * @summary Updates channel error codes
             * @request PUT:/channels/{channelCode}/errorCodes
             */
            putChannelErrors: (hotelId, channelCode, channelErrors, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/${channelCode}/errorCodes`, method: 'PUT', body: channelErrors, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to add channel error code mapping configurations <p><strong>OperationId:</strong>postChannelErrors</p>
             *
             * @tags Channel
             * @name PostChannelErrors
             * @summary Adds channel error codes
             * @request POST:/channels/{channelCode}/errorCodes
             */
            postChannelErrors: (hotelId, channelCode, channelErrors, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/${channelCode}/errorCodes`, method: 'POST', body: channelErrors, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to get the channel mappings to the OPERA hotel id, including hotel details for channel hotel code, room sell limit per reservation, city code and end date. <p><strong>OperationId:</strong>getChannelHotelCodeMapping</p>
             *
             * @tags Channel
             * @name GetChannelHotelCodeMapping
             * @summary Get channel hotel mappings
             * @request GET:/channels/{channelCode}/hotels
             */
            getChannelHotelCodeMapping: (hotelId, channelCode, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/${channelCode}/hotels`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to active/inactive channel controls. It also allows to update channel control settings. <p><strong>OperationId:</strong>putChannelParameters</p>
             *
             * @tags Channel
             * @name PutChannelParameters
             * @summary Updates channel control settings
             * @request PUT:/channels/{channelCode}/parameters
             */
            putChannelParameters: (hotelId, channelCode, changeChannelParameters, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/${channelCode}/parameters`, method: 'PUT', body: changeChannelParameters, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update channel rate categories for a given channel. <p><strong>OperationId:</strong>putChannelRateCategories</p>
             *
             * @tags Channel
             * @name PutChannelRateCategories
             * @summary Updates given channel's rate categories
             * @request PUT:/channels/{channelCode}/rateCategories
             */
            putChannelRateCategories: (hotelId, channelCode, channelRateCategories, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/${channelCode}/rateCategories`, method: 'PUT', body: channelRateCategories, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to add channel rate categories for a given channel. <p><strong>OperationId:</strong>postChannelRateCategories</p>
             *
             * @tags Channel
             * @name PostChannelRateCategories
             * @summary Adds given channel's rate categories
             * @request POST:/channels/{channelCode}/rateCategories
             */
            postChannelRateCategories: (hotelId, channelCode, channelRateCategories, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/${channelCode}/rateCategories`, method: 'POST', body: channelRateCategories, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update channel rate level code's description <p><strong>OperationId:</strong>putChannelRateLevels</p>
             *
             * @tags Channel
             * @name PutChannelRateLevels
             * @summary Updates channel rate level
             * @request PUT:/channels/{channelCode}/rateLevels
             */
            putChannelRateLevels: (hotelId, channelCode, channelRateLevels, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/${channelCode}/rateLevels`, method: 'PUT', body: channelRateLevels, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to add channel rate level configurations <p><strong>OperationId:</strong>postChannelRateLevels</p>
             *
             * @tags Channel
             * @name PostChannelRateLevels
             * @summary Adds channel rate level
             * @request POST:/channels/{channelCode}/rateLevels
             */
            postChannelRateLevels: (hotelId, channelCode, channelRateLevels, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/${channelCode}/rateLevels`, method: 'POST', body: channelRateLevels, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API changes the channel rate plans for given channel code. <p><strong>OperationId:</strong>publishChannelRatePlans</p>
             *
             * @tags Channel
             * @name PublishChannelRatePlans
             * @summary Publishes channel rate plan codes
             * @request PUT:/channels/{channelCode}/ratePlans
             */
            publishChannelRatePlans: (hotelId, channelCode, channelRatePlans, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/${channelCode}/ratePlans`, method: 'PUT', body: channelRatePlans, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to get sequence for given channel property rate room mapping. <p><strong>OperationId:</strong>getChannelRateRoomSeq</p>
             *
             * @tags Channel
             * @name GetChannelRateRoomSeq
             * @summary Gets channel property rateroom sequence
             * @request GET:/channels/{channelCode}/rateRoomSequences
             */
            getChannelRateRoomSeq: (hotelId, channelCode, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/${channelCode}/rateRoomSequences`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update OPERA rate's global description for global distribution type channels <p><strong>OperationId:</strong>putRateGlobalDescription</p>
             *
             * @tags Channel
             * @name PutRateGlobalDescription
             * @summary Updates global descriptions for a rate
             * @request PUT:/channels/{channelCode}/rates/{channelRateCode}/globalDescription
             */
            putRateGlobalDescription: (hotelId, channelRateCode, channelCode, channelGlobalDescription, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/${channelCode}/rates/${channelRateCode}/globalDescription`, method: 'PUT', body: channelGlobalDescription, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update channel room description <p><strong>OperationId:</strong>putChannelRoomTypes</p>
             *
             * @tags Channel
             * @name PutChannelRoomTypes
             * @summary Updates channel room
             * @request PUT:/channels/{channelCode}/roomTypes
             */
            putChannelRoomTypes: (hotelId, channelCode, channelRoomTypes, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/${channelCode}/roomTypes`, method: 'PUT', body: channelRoomTypes, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to add channel room configuration <p><strong>OperationId:</strong>postChannelRoomTypes</p>
             *
             * @tags Channel
             * @name PostChannelRoomTypes
             * @summary Adds channel room
             * @request POST:/channels/{channelCode}/roomTypes
             */
            postChannelRoomTypes: (hotelId, channelCode, channelRoomTypes, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/${channelCode}/roomTypes`, method: 'POST', body: channelRoomTypes, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update sub-channel (carrier) configuration for a given channel code <p><strong>OperationId:</strong>putChannelCarriers</p>
             *
             * @tags Channel
             * @name PutChannelCarriers
             * @summary Updates sub channel configuration
             * @request PUT:/channels/{channelCode}/subChannels
             */
            putChannelCarriers: (hotelId, channelCode, channelCarriers, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/${channelCode}/subChannels`, method: 'PUT', body: channelCarriers, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to add sub-channel (carrier) configuration for a given channel code <p><strong>OperationId:</strong>postChannelCarriers</p>
             *
             * @tags Channel
             * @name PostChannelCarriers
             * @summary Adds sub channel configuration
             * @request POST:/channels/{channelCode}/subChannels
             */
            postChannelCarriers: (hotelId, channelCode, channelCarriers, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/${channelCode}/subChannels`, method: 'POST', body: channelCarriers, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API adds channel tenants. <p><strong>OperationId:</strong>postChannelOrgMapping</p>
             *
             * @tags Channel
             * @name PostChannelOrgMapping
             * @summary Adds channel tenants.
             * @request POST:/channels/{channelCode}/tenants
             */
            postChannelOrgMapping: (hotelId, channelCode, channelOrgMapping, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/${channelCode}/tenants`, method: 'POST', body: channelOrgMapping, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API changes channel tenants mapping. <p><strong>OperationId:</strong>putChannelOrgMapping</p>
             *
             * @tags Channel
             * @name PutChannelOrgMapping
             * @summary Updates channel tenants mapping.
             * @request PUT:/channels/{channelCode}/tenants/{tenantCode}
             */
            putChannelOrgMapping: (hotelId, tenantCode, channelCode, channelOrgMapping, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/${channelCode}/tenants/${tenantCode}`, method: 'PUT', body: channelOrgMapping, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API retrieves channel tenants mapping. <p><strong>OperationId:</strong>getChannelOrgMapping</p>
             *
             * @tags Channel
             * @name GetChannelOrgMapping
             * @summary Retrieves channel tenants mapping.
             * @request GET:/channels/{channelCode}/tenants/{tenantCode}
             */
            getChannelOrgMapping: (hotelId, tenantCode, channelCode, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/${channelCode}/tenants/${tenantCode}`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API deletes channel tenants mapping. <p><strong>OperationId:</strong>deleteChannelOrgMapping</p>
             *
             * @tags Channel
             * @name DeleteChannelOrgMapping
             * @summary Deletes channel tenants mapping.
             * @request DELETE:/channels/{channelCode}/tenants/{tenantCode}
             */
            deleteChannelOrgMapping: (hotelId, tenantCode, channelCode, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/channels/${channelCode}/tenants/${tenantCode}`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.hotels = {
            /**
             * @description Use this API to add global distribution channels tax and fee configurations. <p><strong>OperationId:</strong>postTotalPricingElements</p>
             *
             * @tags Channel
             * @name PostTotalPricingElements
             * @summary Adds total pricing tax and fee types
             * @request POST:/hotels/totalPricing
             */
            postTotalPricingElements: (hotelId, totalPricingElements, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/totalPricing`, method: 'POST', body: totalPricingElements, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update global distribution channels tax and fee configurations <p><strong>OperationId:</strong>putTotalPricingElements</p>
             *
             * @tags Channel
             * @name PutTotalPricingElements
             * @summary Updates total pricing tax and fee types
             * @request PUT:/hotels/totalPricing
             */
            putTotalPricingElements: (hotelId, totalPricingElements, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/totalPricing`, method: 'PUT', body: totalPricingElements, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete global distribution channels tax and fee configurations. <p><strong>OperationId:</strong>deleteTotalPricingElements</p>
             *
             * @tags Channel
             * @name DeleteTotalPricingElements
             * @summary Deletes total pricing tax and fee types
             * @request DELETE:/hotels/totalPricing
             */
            deleteTotalPricingElements: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/totalPricing`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to copy global distribution system's fee and tax configurations from one hotel to another hotel within same chain/tenant <p><strong>OperationId:</strong>copyTotalPricingElements</p>
             *
             * @tags Channel
             * @name CopyTotalPricingElements
             * @summary Allows to copy total pricing tax and fees to another hotel id
             * @request PUT:/hotels/totalPricing/copy
             */
            copyTotalPricingElements: (hotelId, totalPricingElementsCopy, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/totalPricing/copy`, method: 'PUT', body: totalPricingElementsCopy, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to retrieve channel sell limit detail to get or review daily sell limits for a given hotel-channel combination. <p><strong>OperationId:</strong>getChannelSellLimits</p>
             *
             * @tags Inventory
             * @name GetChannelSellLimits
             * @summary Gets sell limit detail for a given channel hotel combination
             * @request GET:/hotels/{hotelId}/channel/sellLimits
             */
            getChannelSellLimits: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/channel/sellLimits`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update channel property sell limit mapping by given dates. <p><strong>OperationId:</strong>changeChannelSellLimitsByDate</p>
             *
             * @tags Inventory
             * @name ChangeChannelSellLimitsByDate
             * @summary Updates channel sell limits by date
             * @request PUT:/hotels/{hotelId}/channelSellLimits
             */
            changeChannelSellLimitsByDate: (hotelId, channelSellLimitsByDate, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/channelSellLimits`, method: 'PUT', body: channelSellLimitsByDate, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete channel property sell limit mapping. <p><strong>OperationId:</strong>deleteChannelSellLimits</p>
             *
             * @tags Inventory
             * @name DeleteChannelSellLimits
             * @summary Deletes channel sell limits
             * @request DELETE:/hotels/{hotelId}/channelSellLimits/{Id}
             */
            deleteChannelSellLimits: (id, hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/channelSellLimits/${id}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API  to get the list of the channel guarantee code mappings to the OPERA guarantee codes. <p><strong>OperationId:</strong>getChannelGuaranteeCodeMappings</p>
             *
             * @tags Channel
             * @name GetChannelGuaranteeCodeMappings
             * @summary Gets channel guarantee code mappings
             * @request GET:/hotels/{hotelId}/channels/guarantees
             */
            getChannelGuaranteeCodeMappings: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/channels/guarantees`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API changes the channel rate plans for given Hotel Id. <p><strong>OperationId:</strong>publishHotelChannelRatePlans</p>
             *
             * @tags Channel
             * @name PublishHotelChannelRatePlans
             * @summary Publishes channel hotel rate plan codes
             * @request PUT:/hotels/{hotelId}/channels/ratePlans
             */
            publishHotelChannelRatePlans: (hotelId, channelRatePlans, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/channels/ratePlans`, method: 'PUT', body: channelRatePlans, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to link (distribute) channel a rate code to channel room types. <p><strong>OperationId:</strong>postChannelRates</p>
             *
             * @tags Channel
             * @name PostChannelRates
             * @summary Distributes channel rate mappings to channel room types
             * @request POST:/hotels/{hotelId}/channels/rates
             */
            postChannelRates: (hotelId, channelRates, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/channels/rates`, method: 'POST', body: channelRates, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to get global distribution channels tax and fee configurations. <p><strong>OperationId:</strong>getTotalPricingElements</p>
             *
             * @tags Channel
             * @name GetTotalPricingElements
             * @summary Gets total pricing tax and fee types
             * @request GET:/hotels/{hotelId}/channels/totalPricing
             */
            getTotalPricingElements: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/channels/totalPricing`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to add channel mapping for OPERA credit cards to channel for a given hotel id <p><strong>OperationId:</strong>postChannelCardTypeMapping</p>
             *
             * @tags Channel
             * @name PostChannelCardTypeMapping
             * @summary Adds channel credit card mapping for a hotel
             * @request POST:/hotels/{hotelId}/channels/{channelCode}/cardType/{cardTypeCode}
             */
            postChannelCardTypeMapping: (cardTypeCode, channelCode, hotelId, channelCardTypeMappings, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/channels/${channelCode}/cardType/${cardTypeCode}`, method: 'POST', body: channelCardTypeMappings, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update channel mapping for OPERA credit cards to channel for a given hotel id <p><strong>OperationId:</strong>putChannelCardTypeMapping</p>
             *
             * @tags Channel
             * @name PutChannelCardTypeMapping
             * @summary Updates channel credit card mapping for a hotel
             * @request PUT:/hotels/{hotelId}/channels/{channelCode}/cardType/{cardTypeCode}
             */
            putChannelCardTypeMapping: (cardTypeCode, channelCode, hotelId, channelCardTypeMappings, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/channels/${channelCode}/cardType/${cardTypeCode}`, method: 'PUT', body: channelCardTypeMappings, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete channel mapping for OPERA credit cards to channel for a given hotel id. <p><strong>OperationId:</strong>deleteChannelCardTypeMapping</p>
             *
             * @tags Channel
             * @name DeleteChannelCardTypeMapping
             * @summary Deletes channel credit card mapping for a hotel
             * @request DELETE:/hotels/{hotelId}/channels/{channelCode}/cardType/{cardTypeCode}
             */
            deleteChannelCardTypeMapping: (cardTypeCode, channelCode, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/channels/${channelCode}/cardType/${cardTypeCode}`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to add channel guarantee code mapping to OPERA guarantee code for a given hotel <p><strong>OperationId:</strong>postChannelGuaranteeCodeMapping</p>
             *
             * @tags Channel
             * @name PostChannelGuaranteeCodeMapping
             * @summary Adds channel guarantee code mapping for a hotel
             * @request POST:/hotels/{hotelId}/channels/{channelCode}/guarantees/{guaranteeCode}
             */
            postChannelGuaranteeCodeMapping: (guaranteeCode, channelCode, hotelId, channelGuaranteeCodeMappings, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/channels/${channelCode}/guarantees/${guaranteeCode}`, method: 'POST', body: channelGuaranteeCodeMappings, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update channel guarantee code mapping to OPERA guarantee code for a given hotel <p><strong>OperationId:</strong>putChannelGuaranteeCodeMapping</p>
             *
             * @tags Channel
             * @name PutChannelGuaranteeCodeMapping
             * @summary Updates channel guarantee code mapping for a hotel
             * @request PUT:/hotels/{hotelId}/channels/{channelCode}/guarantees/{guaranteeCode}
             */
            putChannelGuaranteeCodeMapping: (guaranteeCode, channelCode, hotelId, channelGuaranteeCodeMappings, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/channels/${channelCode}/guarantees/${guaranteeCode}`, method: 'PUT', body: channelGuaranteeCodeMappings, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete channel guarantee code mapping to OPERA guarantee code for a given property. <p><strong>OperationId:</strong>deleteChannelGuaranteeCodeMapping</p>
             *
             * @tags Channel
             * @name DeleteChannelGuaranteeCodeMapping
             * @summary Deletes channel guarantee code mapping for a hotel
             * @request DELETE:/hotels/{hotelId}/channels/{channelCode}/guarantees/{guaranteeCode}
             */
            deleteChannelGuaranteeCodeMapping: (guaranteeCode, channelCode, hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/channels/${channelCode}/guarantees/${guaranteeCode}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to get list of channel parameters and their settings. <p><strong>OperationId:</strong>getChannelParameters</p>
             *
             * @tags Channel
             * @name GetChannelParameters
             * @summary Retrieves channel parameters.
             * @request GET:/hotels/{hotelId}/channels/{channelCode}/parameters
             */
            getChannelParameters: (channelCode, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/channels/${channelCode}/parameters`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to retrieve channel policies mapping. <p><strong>OperationId:</strong>getChannelPolicies</p>
             *
             * @tags Channel
             * @name GetChannelPolicies
             * @summary Retrieves the channel policies
             * @request GET:/hotels/{hotelId}/channels/{channelCode}/policies
             */
            getChannelPolicies: (channelCode, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/channels/${channelCode}/policies`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to link (distribute) channel a room type to channel rate codes. <p><strong>OperationId:</strong>postChannelRoomTypeRate</p>
             *
             * @tags Channel
             * @name PostChannelRoomTypeRate
             * @summary Distributes channel room rate mappings.
             * @request POST:/hotels/{hotelId}/channels/{channelCode}/rooms/{channelRoomType}/rates
             */
            postChannelRoomTypeRate: (channelRoomType, channelCode, hotelId, channelRates, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/channels/${channelCode}/rooms/${channelRoomType}/rates`, method: 'POST', body: channelRates, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API retrieves channel room mapping by room type. <p><strong>OperationId:</strong>getChannelRoomMappingById</p>
             *
             * @tags Channel
             * @name GetChannelRoomMappingById
             * @summary Gets channel room mapping by room type
             * @request GET:/hotels/{hotelId}/channels/{channelCode}/rooms/{roomTypeCode}
             */
            getChannelRoomMappingById: (roomTypeCode, channelCode, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/channels/${channelCode}/rooms/${roomTypeCode}`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update channel room mapping to OPERA hotel's room mapping including channel room type code, start date, end date, room order. <p><strong>OperationId:</strong>putChannelRoomMapping</p>
             *
             * @tags Channel
             * @name PutChannelRoomMapping
             * @summary Updates channel property room mapping
             * @request PUT:/hotels/{hotelId}/channels/{channelCode}/rooms/{roomTypeCode}
             */
            putChannelRoomMapping: (roomTypeCode, channelCode, hotelId, channelRoomMapping, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/channels/${channelCode}/rooms/${roomTypeCode}`, method: 'PUT', body: channelRoomMapping, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete channel room mapping to OPERA hotel's room mapping including channel room type code, start date, end date, room order. <p><strong>OperationId:</strong>deleteChannelRoomMapping</p>
             *
             * @tags Channel
             * @name DeleteChannelRoomMapping
             * @summary Deletes channel property room mapping
             * @request DELETE:/hotels/{hotelId}/channels/{channelCode}/rooms/{roomTypeCode}
             */
            deleteChannelRoomMapping: (roomTypeCode, channelCode, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/channels/${channelCode}/rooms/${roomTypeCode}`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Operation to fetch the room availability and restrictions for a given property and room type in relation to channels. <p><strong>OperationId:</strong>getChannelInventorySnapshotByRoomType</p>
             *
             * @tags Availability
             * @name GetChannelInventorySnapshotByRoomType
             * @summary Gets hotel room's restrictions and channel availability
             * @request GET:/hotels/{hotelId}/channels/{channelCode}/rooms/{roomTypeCode}/inventorySnapshot
             */
            getChannelInventorySnapshotByRoomType: (roomTypeCode, channelCode, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/channels/${channelCode}/rooms/${roomTypeCode}/inventorySnapshot`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update channel property sell limit mapping by given date range. <p><strong>OperationId:</strong>changeChannelSellLimitsByDateRange</p>
             *
             * @tags Inventory
             * @name ChangeChannelSellLimitsByDateRange
             * @summary Updates channel sell limits by daterange
             * @request PUT:/hotels/{hotelId}/channels/{channelId}/channelSellLimitsByDateRange
             */
            changeChannelSellLimitsByDateRange: (channelId, hotelId, channelSellLimitsByDateRange, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/channels/${channelId}/channelSellLimitsByDateRange`, method: 'PUT', body: channelSellLimitsByDateRange, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to fetch the General Availability Simulator. <p><strong>OperationId:</strong>getGeneralAvailabilitySimulator</p>
             *
             * @tags Availability
             * @name GetGeneralAvailabilitySimulator
             * @summary Gets the General Availability
             * @request GET:/hotels/{hotelId}/generalAvailabilitySimulator
             */
            getGeneralAvailabilitySimulator: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/generalAvailabilitySimulator`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Operation to fetch the room availability and restrictions for a given property in relation to channels. <p><strong>OperationId:</strong>getChannelInventorySnapshot</p>
             *
             * @tags Availability
             * @name GetChannelInventorySnapshot
             * @summary Gets hotel's rooms and restrictions channel availability
             * @request GET:/hotels/{hotelId}/inventorySnapshot
             */
            getChannelInventorySnapshot: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/inventorySnapshot`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Operation to Fetch the Rate Parity. The rate parity search criteria can include room types, rate plans, promotion code, rate access code or chain codes. <p><strong>OperationId:</strong>getRateParity</p>
             *
             * @tags Availability
             * @name GetRateParity
             * @summary Gets channel's rate configuration
             * @request GET:/hotels/{hotelId}/rateParity
             */
            getRateParity: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/rateParity`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to get global rate description for given hotel id and rate code. <p><strong>OperationId:</strong>getChannelRateCodeGlobalDesc</p>
             *
             * @tags Channel
             * @name GetChannelRateCodeGlobalDesc
             * @summary Gets global rate descriptions
             * @request GET:/hotels/{hotelId}/rates/{ratePlanCode}/globalDescription
             */
            getChannelRateCodeGlobalDesc: (ratePlanCode, hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/rates/${ratePlanCode}/globalDescription`, method: 'GET', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to get channel room mapping to OPERA hotel's room mapping including channel room type code, start date, end date, room order. <p><strong>OperationId:</strong>getChannelRoomMapping</p>
             *
             * @tags Channel
             * @name GetChannelRoomMapping
             * @summary Gets channel property room mapping
             * @request GET:/hotels/{hotelId}/rooms/mapping
             */
            getChannelRoomMapping: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/rooms/mapping`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to get global room description for given hotel id and room type code. <p><strong>OperationId:</strong>getChannelRoomTypeGlobalDesc</p>
             *
             * @tags Channel
             * @name GetChannelRoomTypeGlobalDesc
             * @summary Gets global room descriptions
             * @request GET:/hotels/{hotelId}/rooms/{roomType}/globalDescription
             */
            getChannelRoomTypeGlobalDesc: (roomType, hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/rooms/${roomType}/globalDescription`, method: 'GET', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.services = {
            /**
             * @description This API deletes the cache for Channel Service. <p><strong>OperationId:</strong>deleteChannelServiceCache</p>
             *
             * @tags Channel
             * @name DeleteChannelServiceCache
             * @summary Deletes the cache for Channel Service.
             * @request DELETE:/services/channels/cache
             */
            deleteChannelServiceCache: (hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/services/channels/cache`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API retrieves channel service version. <p><strong>OperationId:</strong>pingChannelService</p>
             *
             * @tags Channel
             * @name PingChannelService
             * @summary Retrieves channel service version
             * @request GET:/services/channels/status
             */
            pingChannelService: (hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/services/channels/status`, method: 'GET', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
    }
}
exports.Api = Api;
