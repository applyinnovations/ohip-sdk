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
exports.Api = exports.HttpClient = exports.ContentType = exports.CommonMasterColorType = exports.ProfileLinkInheritRates = exports.ProfileNameValidationTypeType = exports.MembershipTypeInstructionType = exports.UserDefinedEnrollmentFieldNameType = exports.UpgradeDowngradeForCalendarPeriodType = exports.PointsCalculationDateType = exports.MultipleRoomsType = exports.CalendarGracePeriodType = exports.AwardPointsValidityDurationType = exports.NumberOfYearsType = exports.CalendarPeriodType = exports.MembershipAwardGenerationMethodType = exports.AttachMembershipToReservationRuleType = exports.MembershipActionType = exports.CardNumberGenerationModeType = exports.MembershipCardValidationRuleTypeType = exports.PointsRoundingFlagType = exports.RuleAppliesOnType = exports.MembershipTypeRuleType = exports.MembershipTypeRuleTransactionCodeType = exports.RulePointsTypeType = exports.MembershipTypeRuleBasedOnType = exports.ColorType = exports.MembershipAwardCancelPolicyType = exports.MembershipAwardCancelPenaltyType = exports.MembershipAwardBasedOnType = exports.IdentificationRoleType = exports.CommunicationRoleType = exports.MasterType = exports.MasterInfoCodeDetailType = void 0;
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
/** Phone Number Communication Role. */
var CommunicationRoleType;
(function (CommunicationRoleType) {
    CommunicationRoleType["Email"] = "Email";
    CommunicationRoleType["Fax"] = "Fax";
    CommunicationRoleType["EmailForRequest"] = "EmailForRequest";
    CommunicationRoleType["Webpage"] = "Webpage";
    CommunicationRoleType["Phone"] = "Phone";
})(CommunicationRoleType = exports.CommunicationRoleType || (exports.CommunicationRoleType = {}));
/** Simple type for storing identification roles. */
var IdentificationRoleType;
(function (IdentificationRoleType) {
    IdentificationRoleType["Passport"] = "Passport";
    IdentificationRoleType["DriverLicense"] = "DriverLicense";
    IdentificationRoleType["Visa"] = "Visa";
    IdentificationRoleType["Id"] = "Id";
    IdentificationRoleType["Unknown"] = "Unknown";
})(IdentificationRoleType = exports.IdentificationRoleType || (exports.IdentificationRoleType = {}));
/** This award allows a guest to apply available membership points towards the balance of his or her bill. */
var MembershipAwardBasedOnType;
(function (MembershipAwardBasedOnType) {
    MembershipAwardBasedOnType["Rate"] = "Rate";
    MembershipAwardBasedOnType["Product"] = "Product";
    MembershipAwardBasedOnType["Upgrade"] = "Upgrade";
    MembershipAwardBasedOnType["Other"] = "Other";
    MembershipAwardBasedOnType["Ft"] = "Ft";
})(MembershipAwardBasedOnType = exports.MembershipAwardBasedOnType || (exports.MembershipAwardBasedOnType = {}));
/** Penalty charge is in percentage. */
var MembershipAwardCancelPenaltyType;
(function (MembershipAwardCancelPenaltyType) {
    MembershipAwardCancelPenaltyType["Points"] = "Points";
    MembershipAwardCancelPenaltyType["Percent"] = "Percent";
})(MembershipAwardCancelPenaltyType = exports.MembershipAwardCancelPenaltyType || (exports.MembershipAwardCancelPenaltyType = {}));
/** Cancel policy is applicable only on Nights. */
var MembershipAwardCancelPolicyType;
(function (MembershipAwardCancelPolicyType) {
    MembershipAwardCancelPolicyType["All"] = "All";
    MembershipAwardCancelPolicyType["Nights"] = "Nights";
})(MembershipAwardCancelPolicyType = exports.MembershipAwardCancelPolicyType || (exports.MembershipAwardCancelPolicyType = {}));
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
/** Indicates Membership upgrades/downgrades to the next tier level uses RFM (Recency, Frequency, Monetary Value) score. */
var MembershipTypeRuleBasedOnType;
(function (MembershipTypeRuleBasedOnType) {
    MembershipTypeRuleBasedOnType["Revenue"] = "Revenue";
    MembershipTypeRuleBasedOnType["Stay"] = "Stay";
    MembershipTypeRuleBasedOnType["Nights"] = "Nights";
    MembershipTypeRuleBasedOnType["Enrollment"] = "Enrollment";
    MembershipTypeRuleBasedOnType["TierUpgrade"] = "TierUpgrade";
    MembershipTypeRuleBasedOnType["Renewal"] = "Renewal";
    MembershipTypeRuleBasedOnType["Rfm"] = "Rfm";
})(MembershipTypeRuleBasedOnType = exports.MembershipTypeRuleBasedOnType || (exports.MembershipTypeRuleBasedOnType = {}));
/** Possible membership points types. */
var RulePointsTypeType;
(function (RulePointsTypeType) {
    RulePointsTypeType["Base"] = "Base";
    RulePointsTypeType["Bonus"] = "Bonus";
})(RulePointsTypeType = exports.RulePointsTypeType || (exports.RulePointsTypeType = {}));
/** Determines the Transaction Code for Membership program rule. */
var MembershipTypeRuleTransactionCodeType;
(function (MembershipTypeRuleTransactionCodeType) {
    MembershipTypeRuleTransactionCodeType["Resident"] = "Resident";
    MembershipTypeRuleTransactionCodeType["NonResident"] = "NonResident";
})(MembershipTypeRuleTransactionCodeType = exports.MembershipTypeRuleTransactionCodeType || (exports.MembershipTypeRuleTransactionCodeType = {}));
/** Membership Type/Program rule types. */
var MembershipTypeRuleType;
(function (MembershipTypeRuleType) {
    MembershipTypeRuleType["All"] = "All";
    MembershipTypeRuleType["Points"] = "Points";
    MembershipTypeRuleType["Tier"] = "Tier";
})(MembershipTypeRuleType = exports.MembershipTypeRuleType || (exports.MembershipTypeRuleType = {}));
/** Applies on restricted dates. */
var RuleAppliesOnType;
(function (RuleAppliesOnType) {
    RuleAppliesOnType["Arrival"] = "Arrival";
    RuleAppliesOnType["Departure"] = "Departure";
    RuleAppliesOnType["Any"] = "Any";
    RuleAppliesOnType["Restricted"] = "Restricted";
})(RuleAppliesOnType = exports.RuleAppliesOnType || (exports.RuleAppliesOnType = {}));
/** This flag tells if the total amount computed will be rounded, rounded up or rounded down. */
var PointsRoundingFlagType;
(function (PointsRoundingFlagType) {
    PointsRoundingFlagType["Round"] = "Round";
    PointsRoundingFlagType["Ceil"] = "Ceil";
    PointsRoundingFlagType["Floor"] = "Floor";
})(PointsRoundingFlagType = exports.PointsRoundingFlagType || (exports.PointsRoundingFlagType = {}));
/** Defines rules to be used for card validation. */
var MembershipCardValidationRuleTypeType;
(function (MembershipCardValidationRuleTypeType) {
    MembershipCardValidationRuleTypeType["Mod7"] = "Mod7";
    MembershipCardValidationRuleTypeType["Mod10"] = "Mod10";
    MembershipCardValidationRuleTypeType["Udef"] = "Udef";
    MembershipCardValidationRuleTypeType["Novalid"] = "Novalid";
    MembershipCardValidationRuleTypeType["Internal"] = "Internal";
    MembershipCardValidationRuleTypeType["External"] = "External";
})(MembershipCardValidationRuleTypeType = exports.MembershipCardValidationRuleTypeType || (exports.MembershipCardValidationRuleTypeType = {}));
/** Card Number is generated using Enrollment Code. */
var CardNumberGenerationModeType;
(function (CardNumberGenerationModeType) {
    CardNumberGenerationModeType["DefaultSequence"] = "DefaultSequence";
    CardNumberGenerationModeType["EnrollmentCode"] = "EnrollmentCode";
})(CardNumberGenerationModeType = exports.CardNumberGenerationModeType || (exports.CardNumberGenerationModeType = {}));
/** Type of action that the user wants to attach membership information to the reservation . */
var MembershipActionType;
(function (MembershipActionType) {
    MembershipActionType["AutoPopulate"] = "AutoPopulate";
    MembershipActionType["PromptToPopulate"] = "PromptToPopulate";
    MembershipActionType["AlwaysPrompt"] = "AlwaysPrompt";
    MembershipActionType["NoAction"] = "NoAction";
})(MembershipActionType = exports.MembershipActionType || (exports.MembershipActionType = {}));
/** Indicates when the membership information should get attach to the reservation. */
var AttachMembershipToReservationRuleType;
(function (AttachMembershipToReservationRuleType) {
    AttachMembershipToReservationRuleType["NewReservation"] = "NewReservation";
    AttachMembershipToReservationRuleType["UpdateReservation"] = "UpdateReservation";
    AttachMembershipToReservationRuleType["Checkin"] = "Checkin";
    AttachMembershipToReservationRuleType["Checkout"] = "Checkout";
})(AttachMembershipToReservationRuleType = exports.AttachMembershipToReservationRuleType || (exports.AttachMembershipToReservationRuleType = {}));
/** Type of action that generates membership award points. */
var MembershipAwardGenerationMethodType;
(function (MembershipAwardGenerationMethodType) {
    MembershipAwardGenerationMethodType["Batch"] = "Batch";
    MembershipAwardGenerationMethodType["Manual"] = "Manual";
    MembershipAwardGenerationMethodType["System"] = "System";
})(MembershipAwardGenerationMethodType = exports.MembershipAwardGenerationMethodType || (exports.MembershipAwardGenerationMethodType = {}));
/** 12 month period based on starting month. */
var CalendarPeriodType;
(function (CalendarPeriodType) {
    CalendarPeriodType["Calendar"] = "Calendar";
    CalendarPeriodType["Rolling"] = "Rolling";
})(CalendarPeriodType = exports.CalendarPeriodType || (exports.CalendarPeriodType = {}));
/** Five Year period */
var NumberOfYearsType;
(function (NumberOfYearsType) {
    NumberOfYearsType["One"] = "One";
    NumberOfYearsType["Two"] = "Two";
    NumberOfYearsType["Three"] = "Three";
    NumberOfYearsType["Four"] = "Four";
    NumberOfYearsType["Five"] = "Five";
})(NumberOfYearsType = exports.NumberOfYearsType || (exports.NumberOfYearsType = {}));
/** Five Year period */
var AwardPointsValidityDurationType;
(function (AwardPointsValidityDurationType) {
    AwardPointsValidityDurationType["DoNotExpire"] = "DoNotExpire";
    AwardPointsValidityDurationType["SameYear"] = "SameYear";
    AwardPointsValidityDurationType["OneYear"] = "OneYear";
    AwardPointsValidityDurationType["TwoYears"] = "TwoYears";
    AwardPointsValidityDurationType["ThreeYears"] = "ThreeYears";
    AwardPointsValidityDurationType["FourYears"] = "FourYears";
    AwardPointsValidityDurationType["FiveYears"] = "FiveYears";
})(AwardPointsValidityDurationType = exports.AwardPointsValidityDurationType || (exports.AwardPointsValidityDurationType = {}));
/** Five Year period */
var CalendarGracePeriodType;
(function (CalendarGracePeriodType) {
    CalendarGracePeriodType["NoGracePeriod"] = "NoGracePeriod";
    CalendarGracePeriodType["OneYear"] = "OneYear";
    CalendarGracePeriodType["TwoYears"] = "TwoYears";
    CalendarGracePeriodType["ThreeYears"] = "ThreeYears";
    CalendarGracePeriodType["FourYears"] = "FourYears";
    CalendarGracePeriodType["FiveYears"] = "FiveYears";
})(CalendarGracePeriodType = exports.CalendarGracePeriodType || (exports.CalendarGracePeriodType = {}));
/** Exception rule for 10 Rooms. */
var MultipleRoomsType;
(function (MultipleRoomsType) {
    MultipleRoomsType["Two"] = "Two";
    MultipleRoomsType["Three"] = "Three";
    MultipleRoomsType["Four"] = "Four";
    MultipleRoomsType["Five"] = "Five";
    MultipleRoomsType["Six"] = "Six";
    MultipleRoomsType["Seven"] = "Seven";
    MultipleRoomsType["Eight"] = "Eight";
    MultipleRoomsType["Nine"] = "Nine";
    MultipleRoomsType["Ten"] = "Ten";
})(MultipleRoomsType = exports.MultipleRoomsType || (exports.MultipleRoomsType = {}));
/** Tier Management based on date of transaction */
var PointsCalculationDateType;
(function (PointsCalculationDateType) {
    PointsCalculationDateType["ArrivalDate"] = "ArrivalDate";
    PointsCalculationDateType["DepartureDate"] = "DepartureDate";
    PointsCalculationDateType["PostingDate"] = "PostingDate";
    PointsCalculationDateType["TransactionDate"] = "TransactionDate";
})(PointsCalculationDateType = exports.PointsCalculationDateType || (exports.PointsCalculationDateType = {}));
/** Calculate points from five Years */
var UpgradeDowngradeForCalendarPeriodType;
(function (UpgradeDowngradeForCalendarPeriodType) {
    UpgradeDowngradeForCalendarPeriodType["ThisYear"] = "ThisYear";
    UpgradeDowngradeForCalendarPeriodType["LastYear"] = "LastYear";
    UpgradeDowngradeForCalendarPeriodType["TwoYears"] = "TwoYears";
    UpgradeDowngradeForCalendarPeriodType["ThreeYears"] = "ThreeYears";
    UpgradeDowngradeForCalendarPeriodType["FourYears"] = "FourYears";
    UpgradeDowngradeForCalendarPeriodType["FiveYears"] = "FiveYears";
})(UpgradeDowngradeForCalendarPeriodType = exports.UpgradeDowngradeForCalendarPeriodType || (exports.UpgradeDowngradeForCalendarPeriodType = {}));
/** Date of birth field of Membership Type. */
var UserDefinedEnrollmentFieldNameType;
(function (UserDefinedEnrollmentFieldNameType) {
    UserDefinedEnrollmentFieldNameType["Communication"] = "Communication";
    UserDefinedEnrollmentFieldNameType["LastName"] = "LastName";
    UserDefinedEnrollmentFieldNameType["FirstName"] = "FirstName";
    UserDefinedEnrollmentFieldNameType["Address"] = "Address";
    UserDefinedEnrollmentFieldNameType["Fee"] = "Fee";
    UserDefinedEnrollmentFieldNameType["BirthDate"] = "BirthDate";
})(UserDefinedEnrollmentFieldNameType = exports.UserDefinedEnrollmentFieldNameType || (exports.UserDefinedEnrollmentFieldNameType = {}));
/** Membership levels. */
var MembershipTypeInstructionType;
(function (MembershipTypeInstructionType) {
    MembershipTypeInstructionType["PrimaryDetails"] = "PrimaryDetails";
    MembershipTypeInstructionType["CardNumberDetails"] = "CardNumberDetails";
    MembershipTypeInstructionType["PointsDetails"] = "PointsDetails";
    MembershipTypeInstructionType["ExceptionCriteriaDetails"] = "ExceptionCriteriaDetails";
    MembershipTypeInstructionType["AdditionalDetails"] = "AdditionalDetails";
    MembershipTypeInstructionType["EnrollmentDetails"] = "EnrollmentDetails";
    MembershipTypeInstructionType["Levels"] = "Levels";
})(MembershipTypeInstructionType = exports.MembershipTypeInstructionType || (exports.MembershipTypeInstructionType = {}));
/** Simple Type for Profile Name Validations Type. e.g. Company,Travel Agent,Source. */
var ProfileNameValidationTypeType;
(function (ProfileNameValidationTypeType) {
    ProfileNameValidationTypeType["Company"] = "Company";
    ProfileNameValidationTypeType["TravelAgent"] = "TravelAgent";
    ProfileNameValidationTypeType["Source"] = "Source";
})(ProfileNameValidationTypeType = exports.ProfileNameValidationTypeType || (exports.ProfileNameValidationTypeType = {}));
/** Simple type for inherit rates */
var ProfileLinkInheritRates;
(function (ProfileLinkInheritRates) {
    ProfileLinkInheritRates["From"] = "From";
    ProfileLinkInheritRates["To"] = "To";
})(ProfileLinkInheritRates = exports.ProfileLinkInheritRates || (exports.ProfileLinkInheritRates = {}));
/** Simple type enumeration for Common Master Colors. */
var CommonMasterColorType;
(function (CommonMasterColorType) {
    CommonMasterColorType["None"] = "None";
    CommonMasterColorType["Blue"] = "Blue";
    CommonMasterColorType["Red"] = "Red";
    CommonMasterColorType["Cyan"] = "Cyan";
    CommonMasterColorType["Green"] = "Green";
    CommonMasterColorType["Black"] = "Black";
    CommonMasterColorType["White"] = "White";
    CommonMasterColorType["Yellow"] = "Yellow";
    CommonMasterColorType["Gray"] = "Gray";
})(CommonMasterColorType = exports.CommonMasterColorType || (exports.CommonMasterColorType = {}));
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
        this.instance = axios_1.default.create(Object.assign(Object.assign({}, axiosConfig), { baseURL: new URL('/crm/config/v1', axiosConfig.baseURL).toString() }));
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
 * @title OPERA Cloud CRM Configuration API
 * @version 21.5.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /crm/config/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 21.5.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
class Api extends HttpClient {
    constructor() {
        super(...arguments);
        this.accountPriorities = {
            /**
             * @description Use this API to get Account Priorities. <p><strong>OperationId:</strong>getAccountPriorities</p>
             *
             * @tags ChainConfig
             * @name GetAccountPriorities
             * @summary Get Account Priorities
             * @request GET:/accountPriorities
             */
            getAccountPriorities: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/accountPriorities`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create Account Priorities. <p><strong>OperationId:</strong>postAccountPriorities</p>
             *
             * @tags ChainConfig
             * @name PostAccountPriorities
             * @summary Create Account Priorities
             * @request POST:/accountPriorities
             */
            postAccountPriorities: (hotelId, accountPrioritiesCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/accountPriorities`, method: 'POST', body: accountPrioritiesCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update Account Priorities. <p><strong>OperationId:</strong>putAccountPriorities</p>
             *
             * @tags ChainConfig
             * @name PutAccountPriorities
             * @summary Change Account Priorities
             * @request PUT:/accountPriorities/{accountPriorityId}
             */
            putAccountPriorities: (hotelId, accountPriorityId, accountPrioritiesToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/accountPriorities/${accountPriorityId}`, method: 'PUT', body: accountPrioritiesToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to remove Account Priorities. <p><strong>OperationId:</strong>deleteAccountPriorities</p>
             *
             * @tags ChainConfig
             * @name DeleteAccountPriorities
             * @summary Remove Account Priorities
             * @request DELETE:/accountPriorities/{accountPriorityId}
             */
            deleteAccountPriorities: (hotelId, accountPriorityId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/accountPriorities/${accountPriorityId}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.accountTypes = {
            /**
             * @description Use this API to get Account Types. <p><strong>OperationId:</strong>getAccountTypes</p>
             *
             * @tags ChainConfig
             * @name GetAccountTypes
             * @summary Get Account Types
             * @request GET:/accountTypes
             */
            getAccountTypes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/accountTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create Account Types. <p><strong>OperationId:</strong>postAccountTypes</p>
             *
             * @tags ChainConfig
             * @name PostAccountTypes
             * @summary Create Account Types
             * @request POST:/accountTypes
             */
            postAccountTypes: (hotelId, accountTypesCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/accountTypes`, method: 'POST', body: accountTypesCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update Account Types. <p><strong>OperationId:</strong>putAccountTypes</p>
             *
             * @tags ChainConfig
             * @name PutAccountTypes
             * @summary Change Account Types
             * @request PUT:/accountTypes/{accountTypesId}
             */
            putAccountTypes: (hotelId, accountTypesId, accountTypesToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/accountTypes/${accountTypesId}`, method: 'PUT', body: accountTypesToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to remove Account Types. <p><strong>OperationId:</strong>deleteAccountTypes</p>
             *
             * @tags ChainConfig
             * @name DeleteAccountTypes
             * @summary Remove Account Types
             * @request DELETE:/accountTypes/{accountTypesId}
             */
            deleteAccountTypes: (hotelId, accountTypesId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/accountTypes/${accountTypesId}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.addressFormats = {
            /**
             * @description You can use this API to get address formats. <p><strong>OperationId:</strong>getAddressFormats</p>
             *
             * @tags ProfileConfiguration
             * @name GetAddressFormats
             * @summary Get address formats
             * @request GET:/addressFormats
             */
            getAddressFormats: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/addressFormats`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to change address formats. <p><strong>OperationId:</strong>putAddressFormats</p>
             *
             * @tags ProfileConfiguration
             * @name PutAddressFormats
             * @summary Change address formats
             * @request PUT:/addressFormats
             */
            putAddressFormats: (hotelId, addressFormats, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/addressFormats`, method: 'PUT', body: addressFormats, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to delete address formats. <p><strong>OperationId:</strong>deleteAddressFormats</p>
             *
             * @tags ProfileConfiguration
             * @name DeleteAddressFormats
             * @summary Delete address formats
             * @request DELETE:/addressFormats
             */
            deleteAddressFormats: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/addressFormats`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to create address formats. <p><strong>OperationId:</strong>postAddressFormats</p>
             *
             * @tags ProfileConfiguration
             * @name PostAddressFormats
             * @summary Create address formats
             * @request POST:/addressFormats
             */
            postAddressFormats: (hotelId, addressFormats, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/addressFormats`, method: 'POST', body: addressFormats, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.addressTypes = {
            /**
             * @description Use this API to get Address types. <p><strong>OperationId:</strong>getAddressTypes</p>
             *
             * @tags ChainConfig
             * @name GetAddressTypes
             * @summary Get Address types
             * @request GET:/addressTypes
             */
            getAddressTypes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/addressTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create a new Address type. <p><strong>OperationId:</strong>postAddressTypes</p>
             *
             * @tags ChainConfig
             * @name PostAddressTypes
             * @summary Create a new Address type
             * @request POST:/addressTypes
             */
            postAddressTypes: (hotelId, addressTypesCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/addressTypes`, method: 'POST', body: addressTypesCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update an existing Address type. <p><strong>OperationId:</strong>putAddressTypes</p>
             *
             * @tags ChainConfig
             * @name PutAddressTypes
             * @summary Change an existing Address type
             * @request PUT:/addressTypes/{addressTypeId}
             */
            putAddressTypes: (hotelId, addressTypeId, addressTypesToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/addressTypes/${addressTypeId}`, method: 'PUT', body: addressTypesToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete an existing Address type. <p><strong>OperationId:</strong>deleteAddressTypes</p>
             *
             * @tags ChainConfig
             * @name DeleteAddressTypes
             * @summary Delete an existing Address type
             * @request DELETE:/addressTypes/{addressTypeId}
             */
            deleteAddressTypes: (hotelId, addressTypeId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/addressTypes/${addressTypeId}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.alternateLanguages = {
            /**
             * @description Use this API to get Alternate Language Guest Titles. <p><strong>OperationId:</strong>getAlternateLanguageGuestTitles</p>
             *
             * @tags ChainConfig
             * @name GetAlternateLanguageGuestTitles
             * @summary Get Alternate Language Guest Titles
             * @request GET:/alternateLanguages
             */
            getAlternateLanguageGuestTitles: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/alternateLanguages`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create Alternate Language Guest Titles. <p><strong>OperationId:</strong>postAlternateLanguageGuestTitles</p>
             *
             * @tags ChainConfig
             * @name PostAlternateLanguageGuestTitles
             * @summary Create Alternate Language Guest Titles
             * @request POST:/alternateLanguages
             */
            postAlternateLanguageGuestTitles: (hotelId, alternateLanguageGuestTitlesCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/alternateLanguages`, method: 'POST', body: alternateLanguageGuestTitlesCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to modify Alternate Language Guest Titles. <p><strong>OperationId:</strong>changeAlternateLanguageGuestTitles</p>
             *
             * @tags ChainConfig
             * @name ChangeAlternateLanguageGuestTitles
             * @summary Change Alternate Language Guest Titles
             * @request PUT:/alternateLanguages/{guestTitlesCode}
             */
            changeAlternateLanguageGuestTitles: (hotelId, guestTitlesCode, alternateLanguageGuestTitlesToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/alternateLanguages/${guestTitlesCode}`, method: 'PUT', body: alternateLanguageGuestTitlesToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete Alternate Language Guest Titles. <p><strong>OperationId:</strong>removeAlternateLanguageGuestTitles</p>
             *
             * @tags ChainConfig
             * @name RemoveAlternateLanguageGuestTitles
             * @summary Delete Alternate Language Guest Titles
             * @request DELETE:/alternateLanguages/{guestTitlesCode}
             */
            removeAlternateLanguageGuestTitles: (hotelId, guestTitlesCode, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/alternateLanguages/${guestTitlesCode}`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.businessSegments = {
            /**
             * @description Use this API to get Business Segments. <p><strong>OperationId:</strong>getBusinessSegments</p>
             *
             * @tags ChainConfig
             * @name GetBusinessSegments
             * @summary Get Business Segments
             * @request GET:/businessSegments
             */
            getBusinessSegments: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/businessSegments`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create Business Segments. <p><strong>OperationId:</strong>postBusinessSegments</p>
             *
             * @tags ChainConfig
             * @name PostBusinessSegments
             * @summary Create Business Segments
             * @request POST:/businessSegments
             */
            postBusinessSegments: (hotelId, businessSegmentsCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/businessSegments`, method: 'POST', body: businessSegmentsCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update Business Segments. <p><strong>OperationId:</strong>changeBusinessSegments</p>
             *
             * @tags ChainConfig
             * @name ChangeBusinessSegments
             * @summary Change Business Segments
             * @request PUT:/businessSegments/{businessSegmentCode}
             */
            changeBusinessSegments: (hotelId, businessSegmentCode, businessSegmentsToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/businessSegments/${businessSegmentCode}`, method: 'PUT', body: businessSegmentsToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete Business Segments. <p><strong>OperationId:</strong>removeBusinessSegments</p>
             *
             * @tags ChainConfig
             * @name RemoveBusinessSegments
             * @summary Delete Business Segments
             * @request DELETE:/businessSegments/{businessSegmentCode}
             */
            removeBusinessSegments: (hotelId, businessSegmentCode, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/businessSegments/${businessSegmentCode}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.cityPostalCodes = {
            /**
             * @description Use this API to get City Postal Codes. Associate countries (and states or provinces if configured for the country) with cities and with postal codes can be utilized to validate addresses.<p><strong>OperationId:</strong>getCityPostalCodes</p>
             *
             * @tags ChainConfig
             * @name GetCityPostalCodes
             * @summary Get city postal codes
             * @request GET:/cityPostalCodes
             */
            getCityPostalCodes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/cityPostalCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create City Postal Codes. <p><strong>OperationId:</strong>postCityPostalCodes</p>
             *
             * @tags ChainConfig
             * @name PostCityPostalCodes
             * @summary Create CityPostalCodes
             * @request POST:/cityPostalCodes
             */
            postCityPostalCodes: (hotelId, cityPostalCodesCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/cityPostalCodes`, method: 'POST', body: cityPostalCodesCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update City Postal Codes. <p><strong>OperationId:</strong>changeCityPostalCodes</p>
             *
             * @tags ChainConfig
             * @name ChangeCityPostalCodes
             * @summary Change City Postal Codes
             * @request PUT:/cityPostalCodes/{postalCode}
             */
            changeCityPostalCodes: (hotelId, postalCode, cityPostalCodesToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/cityPostalCodes/${postalCode}`, method: 'PUT', body: cityPostalCodesToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete City Postal Codes. <p><strong>OperationId:</strong>removeCityPostalCodes</p>
             *
             * @tags ChainConfig
             * @name RemoveCityPostalCodes
             * @summary Delete City Postal Codes
             * @request DELETE:/cityPostalCodes/{postalCode}
             */
            removeCityPostalCodes: (hotelId, postalCode, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/cityPostalCodes/${postalCode}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.communicationTypes = {
            /**
             * @description Use this API to get communication types. <p><strong>OperationId:</strong>getCommunicationTypes</p>
             *
             * @tags HotelConfig
             * @name GetCommunicationTypes
             * @summary Get communication types
             * @request GET:/communicationTypes
             */
            getCommunicationTypes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/communicationTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create a  communication type. <p><strong>OperationId:</strong>postCommunicationType</p>
             *
             * @tags HotelConfig
             * @name PostCommunicationType
             * @summary Create a  communication type
             * @request POST:/communicationTypes
             */
            postCommunicationType: (hotelId, communicationTypeCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/communicationTypes`, method: 'POST', body: communicationTypeCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete a communication type. <p><strong>OperationId:</strong>removeCommunicationType</p>
             *
             * @tags HotelConfig
             * @name RemoveCommunicationType
             * @summary Delete a communication type
             * @request DELETE:/communicationTypes/{communicationTypeCode}
             */
            removeCommunicationType: (hotelId, communicationTypeCode, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/communicationTypes/${communicationTypeCode}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update a  communication type. <p><strong>OperationId:</strong>changeCommunicationType</p>
             *
             * @tags HotelConfig
             * @name ChangeCommunicationType
             * @summary Change a  communication type
             * @request PUT:/communicationTypes/{communicationTypeCode}
             */
            changeCommunicationType: (hotelId, communicationTypeCode, communicationTypeToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/communicationTypes/${communicationTypeCode}`, method: 'PUT', body: communicationTypeToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.companyTypes = {
            /**
             * @description Use this API to get Company Types. <p><strong>OperationId:</strong>getCompanyTypes</p>
             *
             * @tags ChainConfig
             * @name GetCompanyTypes
             * @summary Get Company Types
             * @request GET:/companyTypes
             */
            getCompanyTypes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/companyTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create Company Types. <p><strong>OperationId:</strong>postCompanyTypes</p>
             *
             * @tags ChainConfig
             * @name PostCompanyTypes
             * @summary Create Company Types
             * @request POST:/companyTypes
             */
            postCompanyTypes: (hotelId, companyTypesCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/companyTypes`, method: 'POST', body: companyTypesCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update Company Types. <p><strong>OperationId:</strong>putCompanyTypes</p>
             *
             * @tags ChainConfig
             * @name PutCompanyTypes
             * @summary Change Company Types
             * @request PUT:/companyTypes/{companyTypesCode}
             */
            putCompanyTypes: (hotelId, companyTypesCode, companyTypesToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/companyTypes/${companyTypesCode}`, method: 'PUT', body: companyTypesToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete Company Types. <p><strong>OperationId:</strong>deleteCompanyTypes</p>
             *
             * @tags ChainConfig
             * @name DeleteCompanyTypes
             * @summary Delete Company Types
             * @request DELETE:/companyTypes/{companyTypesCode}
             */
            deleteCompanyTypes: (hotelId, companyTypesCode, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/companyTypes/${companyTypesCode}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.competitionCodes = {
            /**
             * @description Use this API to get Competition Codes.  Competition codes enable you to identify other hospitality businesses that are competing with you for an account&apos;s business opportunities.<p><strong>OperationId:</strong>getCompetitionCodes</p>
             *
             * @tags ChainConfig
             * @name GetCompetitionCodes
             * @summary Get competition codes
             * @request GET:/competitionCodes
             */
            getCompetitionCodes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/competitionCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create Competition Codes. Competition codes enable you to identify other hospitality businesses that are competing with you for an account&apos;s business opportunities.<p><strong>OperationId:</strong>postCompetitionCodes</p>
             *
             * @tags ChainConfig
             * @name PostCompetitionCodes
             * @summary Create competition codes
             * @request POST:/competitionCodes
             */
            postCompetitionCodes: (hotelId, competitionCodesCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/competitionCodes`, method: 'POST', body: competitionCodesCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update Competition Codes. <p><strong>OperationId:</strong>putCompetitionCodes</p>
             *
             * @tags ChainConfig
             * @name PutCompetitionCodes
             * @summary Change Competition Codes
             * @request PUT:/competitionCodes/{competitionCodesId}
             */
            putCompetitionCodes: (hotelId, competitionCodesId, competitionCodesToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/competitionCodes/${competitionCodesId}`, method: 'PUT', body: competitionCodesToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to remove Competition Codes. <p><strong>OperationId:</strong>deleteCompetitionCodes</p>
             *
             * @tags ChainConfig
             * @name DeleteCompetitionCodes
             * @summary Remove Competition Codes
             * @request DELETE:/competitionCodes/{competitionCodesId}
             */
            deleteCompetitionCodes: (hotelId, competitionCodesId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/competitionCodes/${competitionCodesId}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.creditRatings = {
            /**
             * @description You can use this API to get credit ratings. <p><strong>OperationId:</strong>getCreditRatings</p>
             *
             * @tags ProfileConfiguration
             * @name GetCreditRatings
             * @summary Get credit ratings
             * @request GET:/creditRatings
             */
            getCreditRatings: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/creditRatings`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to change credit ratings. <p><strong>OperationId:</strong>putCreditRatings</p>
             *
             * @tags ProfileConfiguration
             * @name PutCreditRatings
             * @summary Change credit ratings
             * @request PUT:/creditRatings
             */
            putCreditRatings: (hotelId, creditRatings, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/creditRatings`, method: 'PUT', body: creditRatings, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to delete credit ratings. <p><strong>OperationId:</strong>deleteCreditRatings</p>
             *
             * @tags ProfileConfiguration
             * @name DeleteCreditRatings
             * @summary Delete credit ratings
             * @request DELETE:/creditRatings
             */
            deleteCreditRatings: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/creditRatings`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to create credit ratings. <p><strong>OperationId:</strong>postCreditRatings</p>
             *
             * @tags ProfileConfiguration
             * @name PostCreditRatings
             * @summary Create credit ratings
             * @request POST:/creditRatings
             */
            postCreditRatings: (hotelId, creditRatings, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/creditRatings`, method: 'POST', body: creditRatings, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.distanceTypes = {
            /**
             * @description Use this API to get Distance Types. <p><strong>OperationId:</strong>getDistanceTypes</p>
             *
             * @tags ChainConfig
             * @name GetDistanceTypes
             * @summary Get Distance Types
             * @request GET:/distanceTypes
             */
            getDistanceTypes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/distanceTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create Distance Types. <p><strong>OperationId:</strong>postDistanceTypes</p>
             *
             * @tags ChainConfig
             * @name PostDistanceTypes
             * @summary Create Distance Types
             * @request POST:/distanceTypes
             */
            postDistanceTypes: (hotelId, distanceTypesCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/distanceTypes`, method: 'POST', body: distanceTypesCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update Distance Types. <p><strong>OperationId:</strong>putDistanceTypes</p>
             *
             * @tags ChainConfig
             * @name PutDistanceTypes
             * @summary Change Distance Types
             * @request PUT:/distanceTypes/{distanceTypesId}
             */
            putDistanceTypes: (hotelId, distanceTypesId, distanceTypesToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/distanceTypes/${distanceTypesId}`, method: 'PUT', body: distanceTypesToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete Distance Types. <p><strong>OperationId:</strong>deleteDistanceTypes</p>
             *
             * @tags ChainConfig
             * @name DeleteDistanceTypes
             * @summary Delete Distance Types
             * @request DELETE:/distanceTypes/{distanceTypesId}
             */
            deleteDistanceTypes: (hotelId, distanceTypesId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/distanceTypes/${distanceTypesId}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.districts = {
            /**
             * @description Use this API to get Districts. <p><strong>OperationId:</strong>getDistricts</p>
             *
             * @tags ChainConfig
             * @name GetDistricts
             * @summary Get Districts
             * @request GET:/districts
             */
            getDistricts: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/districts`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create Districts. <p><strong>OperationId:</strong>postDistricts</p>
             *
             * @tags ChainConfig
             * @name PostDistricts
             * @summary Create Districts
             * @request POST:/districts
             */
            postDistricts: (hotelId, districtsCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/districts`, method: 'POST', body: districtsCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update Districts. <p><strong>OperationId:</strong>putDistricts</p>
             *
             * @tags ChainConfig
             * @name PutDistricts
             * @summary Change Districts
             * @request PUT:/districts/{districtsId}
             */
            putDistricts: (hotelId, districtsId, districtsToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/districts/${districtsId}`, method: 'PUT', body: districtsToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete Districts. <p><strong>OperationId:</strong>deleteDistricts</p>
             *
             * @tags ChainConfig
             * @name DeleteDistricts
             * @summary Delete Districts
             * @request DELETE:/districts/{districtsId}
             */
            deleteDistricts: (hotelId, districtsId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/districts/${districtsId}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.exclusivePreferences = {
            /**
             * @description You can use this API to get template Exclusive Preferences. <p><strong>OperationId:</strong>getTemplateExclusivePreferences</p>
             *
             * @tags ProfileConfiguration
             * @name GetTemplateExclusivePreferences
             * @summary Get template Exclusive Preferences
             * @request GET:/exclusivePreferences
             */
            getTemplateExclusivePreferences: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/exclusivePreferences`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to change template Exclusive Preferences. <p><strong>OperationId:</strong>putTemplateExclusivePreferences</p>
             *
             * @tags ProfileConfiguration
             * @name PutTemplateExclusivePreferences
             * @summary Change template Exclusive Preferences
             * @request PUT:/exclusivePreferences
             */
            putTemplateExclusivePreferences: (hotelId, templateExclusivePreferences, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/exclusivePreferences`, method: 'PUT', body: templateExclusivePreferences, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to delete template Exclusive Preferences. <p><strong>OperationId:</strong>deleteTemplateExclusivePreferences</p>
             *
             * @tags ProfileConfiguration
             * @name DeleteTemplateExclusivePreferences
             * @summary Delete template Exclusive Preferences
             * @request DELETE:/exclusivePreferences
             */
            deleteTemplateExclusivePreferences: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/exclusivePreferences`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to create template Exclusive Preferences. <p><strong>OperationId:</strong>postTemplateExclusivePreferences</p>
             *
             * @tags ProfileConfiguration
             * @name PostTemplateExclusivePreferences
             * @summary Create template Exclusive Preferences
             * @request POST:/exclusivePreferences
             */
            postTemplateExclusivePreferences: (hotelId, templateExclusivePreferences, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/exclusivePreferences`, method: 'POST', body: templateExclusivePreferences, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to copy Exclusive Preferences. <p><strong>OperationId:</strong>copyExclusivePreferences</p>
             *
             * @tags ProfileConfiguration
             * @name CopyExclusivePreferences
             * @summary Copy Exclusive Preferences
             * @request PUT:/exclusivePreferences/copy
             */
            copyExclusivePreferences: (hotelId, exclusivePreferencesCopy, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/exclusivePreferences/copy`, method: 'PUT', body: exclusivePreferencesCopy, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.fiscalAgentTypes = {
            /**
             * @description Use this API to get Travel Agent Types. <p><strong>OperationId:</strong>getTravelAgentTypes</p>
             *
             * @tags ChainConfig
             * @name GetTravelAgentTypes
             * @summary Get Travel Agent Types
             * @request GET:/fiscalAgentTypes
             */
            getTravelAgentTypes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/fiscalAgentTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create Travel Agent Types. <p><strong>OperationId:</strong>postTravelAgentTypes</p>
             *
             * @tags ChainConfig
             * @name PostTravelAgentTypes
             * @summary Create Travel Agent Types
             * @request POST:/fiscalAgentTypes
             */
            postTravelAgentTypes: (hotelId, travelAgentTypesCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/fiscalAgentTypes`, method: 'POST', body: travelAgentTypesCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update Travel Agent Types. <p><strong>OperationId:</strong>changeTravelAgentTypes</p>
             *
             * @tags ChainConfig
             * @name ChangeTravelAgentTypes
             * @summary Change Travel Agent Types
             * @request PUT:/fiscalAgentTypes/{fiscalAgentTypeCode}
             */
            changeTravelAgentTypes: (hotelId, fiscalAgentTypeCode, travelAgentTypesToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/fiscalAgentTypes/${fiscalAgentTypeCode}`, method: 'PUT', body: travelAgentTypesToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete Travel Agent Types. <p><strong>OperationId:</strong>removeTravelAgentTypes</p>
             *
             * @tags ChainConfig
             * @name RemoveTravelAgentTypes
             * @summary Delete Travel Agent Types
             * @request DELETE:/fiscalAgentTypes/{fiscalAgentTypeCode}
             */
            removeTravelAgentTypes: (hotelId, fiscalAgentTypeCode, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/fiscalAgentTypes/${fiscalAgentTypeCode}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.guestStatuses = {
            /**
             * @description Use this API to get Guest Statuses. <p><strong>OperationId:</strong>getGuestStatuses</p>
             *
             * @tags ChainConfig
             * @name GetGuestStatuses
             * @summary Get Guest Statuses
             * @request GET:/guestStatuses
             */
            getGuestStatuses: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/guestStatuses`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create Guest Statuses. <p><strong>OperationId:</strong>postGuestStatuses</p>
             *
             * @tags ChainConfig
             * @name PostGuestStatuses
             * @summary Create Guest Statuses
             * @request POST:/guestStatuses
             */
            postGuestStatuses: (hotelId, guestStatusesCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/guestStatuses`, method: 'POST', body: guestStatusesCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update Guest Statuses. <p><strong>OperationId:</strong>changeGuestStatuses</p>
             *
             * @tags ChainConfig
             * @name ChangeGuestStatuses
             * @summary Change Guest Statuses
             * @request PUT:/guestStatuses/{guestStatusCode}
             */
            changeGuestStatuses: (hotelId, guestStatusCode, guestStatusesToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/guestStatuses/${guestStatusCode}`, method: 'PUT', body: guestStatusesToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete Guest Statuses. <p><strong>OperationId:</strong>removeGuestStatuses</p>
             *
             * @tags ChainConfig
             * @name RemoveGuestStatuses
             * @summary Delete Guest Statuses
             * @request DELETE:/guestStatuses/{guestStatusCode}
             */
            removeGuestStatuses: (hotelId, guestStatusCode, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/guestStatuses/${guestStatusCode}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.guestTitles = {
            /**
             * @description Use this API to get Guest Titles. <p><strong>OperationId:</strong>getGuestTitles</p>
             *
             * @tags ChainConfig
             * @name GetGuestTitles
             * @summary Get Guest Titles
             * @request GET:/guestTitles
             */
            getGuestTitles: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/guestTitles`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create Guest Titles. <p><strong>OperationId:</strong>postGuestTitles</p>
             *
             * @tags ChainConfig
             * @name PostGuestTitles
             * @summary Create Guest Titles
             * @request POST:/guestTitles
             */
            postGuestTitles: (hotelId, guestTitlesCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/guestTitles`, method: 'POST', body: guestTitlesCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.guestTypes = {
            /**
             * @description Use this API to get Guest Types. <p><strong>OperationId:</strong>getGuestTypes</p>
             *
             * @tags ChainConfig
             * @name GetGuestTypes
             * @summary Get Guest Types
             * @request GET:/guestTypes
             */
            getGuestTypes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/guestTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create Guest Types. <p><strong>OperationId:</strong>postGuestTypes</p>
             *
             * @tags ChainConfig
             * @name PostGuestTypes
             * @summary Create Guest Types
             * @request POST:/guestTypes
             */
            postGuestTypes: (hotelId, guestTypesCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/guestTypes`, method: 'POST', body: guestTypesCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update Guest Types. <p><strong>OperationId:</strong>changeGuestTypes</p>
             *
             * @tags ChainConfig
             * @name ChangeGuestTypes
             * @summary Change Guest Types
             * @request PUT:/guestTypes/{guestTypeCode}
             */
            changeGuestTypes: (hotelId, guestTypeCode, guestTypesToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/guestTypes/${guestTypeCode}`, method: 'PUT', body: guestTypesToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete Guest Types. <p><strong>OperationId:</strong>removeGuestTypes</p>
             *
             * @tags ChainConfig
             * @name RemoveGuestTypes
             * @summary Delete Guest Types
             * @request DELETE:/guestTypes/{guestTypeCode}
             */
            removeGuestTypes: (hotelId, guestTypeCode, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/guestTypes/${guestTypeCode}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.hotels = {
            /**
             * @description Use this API to get Ecertificate Location Types. <p><strong>OperationId:</strong>getEcertificateLocationTypes</p>
             *
             * @tags ChainConfig
             * @name GetEcertificateLocationTypes
             * @summary Get Ecertificate Location Types
             * @request GET:/hotels/{hotelId}/eCertificateLocationTypes
             */
            getEcertificateLocationTypes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/eCertificateLocationTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create Ecertificate Location Types. <p><strong>OperationId:</strong>postEcertificateLocationTypes</p>
             *
             * @tags ChainConfig
             * @name PostEcertificateLocationTypes
             * @summary Create Ecertificate Location Types
             * @request POST:/hotels/{hotelId}/eCertificateLocationTypes
             */
            postEcertificateLocationTypes: (hotelId, ecertificateLocationTypesCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/eCertificateLocationTypes`, method: 'POST', body: ecertificateLocationTypesCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to get Exclusive preferences at hotel Level. <p><strong>OperationId:</strong>getExclusivePreferences</p>
             *
             * @tags ProfileConfiguration
             * @name GetExclusivePreferences
             * @summary Get Exclusive preferences
             * @request GET:/hotels/{hotelId}/exclusivePreferences
             */
            getExclusivePreferences: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/exclusivePreferences`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to change Exclusive Preferences at hotel Level. <p><strong>OperationId:</strong>putExclusivePreferences</p>
             *
             * @tags ProfileConfiguration
             * @name PutExclusivePreferences
             * @summary Change Exclusive Preferences
             * @request PUT:/hotels/{hotelId}/exclusivePreferences
             */
            putExclusivePreferences: (hotelId, exclusivePreferences, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/exclusivePreferences`, method: 'PUT', body: exclusivePreferences, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to delete Exclusive Preferences at hotel Level. <p><strong>OperationId:</strong>deleteExclusivePreferences</p>
             *
             * @tags ProfileConfiguration
             * @name DeleteExclusivePreferences
             * @summary Delete Exclusive Preferences
             * @request DELETE:/hotels/{hotelId}/exclusivePreferences
             */
            deleteExclusivePreferences: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/exclusivePreferences`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to create Exclusive Preferences at hotel Level. <p><strong>OperationId:</strong>postExclusivePreferences</p>
             *
             * @tags ProfileConfiguration
             * @name PostExclusivePreferences
             * @summary Create Exclusive Preferences
             * @request POST:/hotels/{hotelId}/exclusivePreferences
             */
            postExclusivePreferences: (hotelId, exclusivePreferences, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/exclusivePreferences`, method: 'POST', body: exclusivePreferences, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to get all configured guest preferences. Use preference grouping code or preference code to narrow down the results.<p><strong>OperationId:</strong>getPreferences</p>
             *
             * @tags ProfileConfiguration
             * @name GetPreferences
             * @summary Get preferences
             * @request GET:/hotels/{hotelId}/preferences
             */
            getPreferences: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/preferences`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update and change existing preferences. <p><strong>OperationId:</strong>putPreferences</p>
             *
             * @tags ProfileConfiguration
             * @name PutPreferences
             * @summary Change preferences
             * @request PUT:/hotels/{hotelId}/preferences
             */
            putPreferences: (hotelId, hotelPreferences, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/preferences`, method: 'PUT', body: hotelPreferences, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete preferences. <p><strong>OperationId:</strong>deletePreferences</p>
             *
             * @tags ProfileConfiguration
             * @name DeletePreferences
             * @summary Delete preferences
             * @request DELETE:/hotels/{hotelId}/preferences
             */
            deletePreferences: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/preferences`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This will allow you to create new preferences. <p><strong>OperationId:</strong>postPreferences</p>
             *
             * @tags ProfileConfiguration
             * @name PostPreferences
             * @summary Create preferences
             * @request POST:/hotels/{hotelId}/preferences
             */
            postPreferences: (hotelId, hotelPreferences, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/preferences`, method: 'POST', body: hotelPreferences, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.identificationTypes = {
            /**
             * @description Use this API to get Identification Types such as passport, driver license, military ID, and so on.<p><strong>OperationId:</strong>getIdentificationTypes</p>
             *
             * @tags ChainConfig
             * @name GetIdentificationTypes
             * @summary Get identification types
             * @request GET:/identificationTypes
             */
            getIdentificationTypes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/identificationTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create Identification Types. <p><strong>OperationId:</strong>postIdentificationTypes</p>
             *
             * @tags ChainConfig
             * @name PostIdentificationTypes
             * @summary Create Identification Types
             * @request POST:/identificationTypes
             */
            postIdentificationTypes: (hotelId, identificationTypesCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/identificationTypes`, method: 'POST', body: identificationTypesCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update Identification Types. <p><strong>OperationId:</strong>putIdentificationTypes</p>
             *
             * @tags ChainConfig
             * @name PutIdentificationTypes
             * @summary Change Identification Types
             * @request PUT:/identificationTypes/{identificationTypesId}
             */
            putIdentificationTypes: (hotelId, identificationTypesId, identificationTypesToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/identificationTypes/${identificationTypesId}`, method: 'PUT', body: identificationTypesToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete Identification Types. <p><strong>OperationId:</strong>deleteIdentificationTypes</p>
             *
             * @tags ChainConfig
             * @name DeleteIdentificationTypes
             * @summary Delete Identification Types
             * @request DELETE:/identificationTypes/{identificationTypesId}
             */
            deleteIdentificationTypes: (hotelId, identificationTypesId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/identificationTypes/${identificationTypesId}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.immigrationStatuses = {
            /**
             * @description Use this API to get Immigration Statuses. <p><strong>OperationId:</strong>getImmigrationStatuses</p>
             *
             * @tags ChainConfig
             * @name GetImmigrationStatuses
             * @summary Get Immigration Statuses
             * @request GET:/immigrationStatuses
             */
            getImmigrationStatuses: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/immigrationStatuses`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update Immigration Statuses. <p><strong>OperationId:</strong>changeImmigrationStatuses</p>
             *
             * @tags ChainConfig
             * @name ChangeImmigrationStatuses
             * @summary Change Immigration Statuses
             * @request PUT:/immigrationStatuses/{immigrationStatusCode}
             */
            changeImmigrationStatuses: (hotelId, immigrationStatusCode, immigrationStatusesToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/immigrationStatuses/${immigrationStatusCode}`, method: 'PUT', body: immigrationStatusesToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete Immigration Statuses. <p><strong>OperationId:</strong>removeImmigrationStatuses</p>
             *
             * @tags ChainConfig
             * @name RemoveImmigrationStatuses
             * @summary Delete Immigration Statuses
             * @request DELETE:/immigrationStatuses/{immigrationStatusCode}
             */
            removeImmigrationStatuses: (hotelId, immigrationStatusCode, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/immigrationStatuses/${immigrationStatusCode}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.industryCodes = {
            /**
             * @description Use this API to get Industry Codes. <p><strong>OperationId:</strong>getIndustryCodes</p>
             *
             * @tags ChainConfig
             * @name GetIndustryCodes
             * @summary Get Industry Codes
             * @request GET:/industryCodes
             */
            getIndustryCodes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/industryCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create Industry Codes. <p><strong>OperationId:</strong>postIndustryCodes</p>
             *
             * @tags ChainConfig
             * @name PostIndustryCodes
             * @summary Create Industry Codes
             * @request POST:/industryCodes
             */
            postIndustryCodes: (hotelId, industryCodesCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/industryCodes`, method: 'POST', body: industryCodesCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update Industry Codes. <p><strong>OperationId:</strong>putIndustryCodes</p>
             *
             * @tags ChainConfig
             * @name PutIndustryCodes
             * @summary Change Industry Codes
             * @request PUT:/industryCodes/{industryCodesId}
             */
            putIndustryCodes: (hotelId, industryCodesId, industryCodesToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/industryCodes/${industryCodesId}`, method: 'PUT', body: industryCodesToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete Industry Codes. <p><strong>OperationId:</strong>deleteIndustryCodes</p>
             *
             * @tags ChainConfig
             * @name DeleteIndustryCodes
             * @summary Delete Industry Codes
             * @request DELETE:/industryCodes/{industryCodesId}
             */
            deleteIndustryCodes: (hotelId, industryCodesId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/industryCodes/${industryCodesId}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.influenceCodes = {
            /**
             * @description Use this API to get Influence Codes. <p><strong>OperationId:</strong>getInfluenceCodes</p>
             *
             * @tags ChainConfig
             * @name GetInfluenceCodes
             * @summary Get Influence Codes
             * @request GET:/influenceCodes
             */
            getInfluenceCodes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/influenceCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create Influence Codes. <p><strong>OperationId:</strong>postInfluenceCodes</p>
             *
             * @tags ChainConfig
             * @name PostInfluenceCodes
             * @summary Create Influence Codes
             * @request POST:/influenceCodes
             */
            postInfluenceCodes: (hotelId, influenceCodesCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/influenceCodes`, method: 'POST', body: influenceCodesCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update Influence Codes. <p><strong>OperationId:</strong>putInfluenceCodes</p>
             *
             * @tags ChainConfig
             * @name PutInfluenceCodes
             * @summary Change Influence Codes
             * @request PUT:/influenceCodes/{influenceCodesId}
             */
            putInfluenceCodes: (hotelId, influenceCodesId, influenceCodesToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/influenceCodes/${influenceCodesId}`, method: 'PUT', body: influenceCodesToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete Influence Codes. <p><strong>OperationId:</strong>deleteInfluenceCodes</p>
             *
             * @tags ChainConfig
             * @name DeleteInfluenceCodes
             * @summary Delete Influence Codes
             * @request DELETE:/influenceCodes/{influenceCodesId}
             */
            deleteInfluenceCodes: (hotelId, influenceCodesId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/influenceCodes/${influenceCodesId}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.keywordTypes = {
            /**
             * @description Use this API to get Keyword Types. <p><strong>OperationId:</strong>getKeywordTypes</p>
             *
             * @tags ChainConfig
             * @name GetKeywordTypes
             * @summary Get Keyword Types
             * @request GET:/keywordTypes
             */
            getKeywordTypes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/keywordTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create Keyword Types. <p><strong>OperationId:</strong>postKeywordTypes</p>
             *
             * @tags ChainConfig
             * @name PostKeywordTypes
             * @summary Create Keyword Types
             * @request POST:/keywordTypes
             */
            postKeywordTypes: (hotelId, keywordTypesCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/keywordTypes`, method: 'POST', body: keywordTypesCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update Keyword Types. <p><strong>OperationId:</strong>putKeywordTypes</p>
             *
             * @tags ChainConfig
             * @name PutKeywordTypes
             * @summary Change Keyword Types
             * @request PUT:/keywordTypes/{keywordTypesId}
             */
            putKeywordTypes: (hotelId, keywordTypesId, keywordTypesToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/keywordTypes/${keywordTypesId}`, method: 'PUT', body: keywordTypesToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete Keyword Types. <p><strong>OperationId:</strong>deleteKeywordTypes</p>
             *
             * @tags ChainConfig
             * @name DeleteKeywordTypes
             * @summary Delete Keyword Types
             * @request DELETE:/keywordTypes/{keywordTypesId}
             */
            deleteKeywordTypes: (hotelId, keywordTypesId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/keywordTypes/${keywordTypesId}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.mailingActionCodes = {
            /**
             * @description Use this API to get Mailing Action Codes. <p><strong>OperationId:</strong>getMailingActionCodes</p>
             *
             * @tags ChainConfig
             * @name GetMailingActionCodes
             * @summary Get Mailing Action Codes
             * @request GET:/mailingActionCodes
             */
            getMailingActionCodes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/mailingActionCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create Mailing Action Codes. <p><strong>OperationId:</strong>postMailingActionCodes</p>
             *
             * @tags ChainConfig
             * @name PostMailingActionCodes
             * @summary Create Mailing Action Codes
             * @request POST:/mailingActionCodes
             */
            postMailingActionCodes: (hotelId, mailingActionCodesCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/mailingActionCodes`, method: 'POST', body: mailingActionCodesCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update Mailing Action Codes. <p><strong>OperationId:</strong>changeMailingActionCodes</p>
             *
             * @tags ChainConfig
             * @name ChangeMailingActionCodes
             * @summary Change Mailing Action Codes
             * @request PUT:/mailingActionCodes/{mailingActionCode}
             */
            changeMailingActionCodes: (hotelId, mailingActionCode, mailingActionCodesToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/mailingActionCodes/${mailingActionCode}`, method: 'PUT', body: mailingActionCodesToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete Mailing Action Codes. <p><strong>OperationId:</strong>removeMailingActionCodes</p>
             *
             * @tags ChainConfig
             * @name RemoveMailingActionCodes
             * @summary Delete Mailing Action Codes
             * @request DELETE:/mailingActionCodes/{mailingActionCode}
             */
            removeMailingActionCodes: (hotelId, mailingActionCode, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/mailingActionCodes/${mailingActionCode}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.membershipAwards = {
            /**
             * @description You can use this API to get Membership Awards. <p><strong>OperationId:</strong>getMembershipAwards</p>
             *
             * @tags MembershipConfig
             * @name GetMembershipAwards
             * @summary Get Membership Awards
             * @request GET:/membershipAwards
             */
            getMembershipAwards: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/membershipAwards`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to create Membership Awards. <p><strong>OperationId:</strong>postMembershipAwards</p>
             *
             * @tags MembershipConfig
             * @name PostMembershipAwards
             * @summary Create Membership Awards
             * @request POST:/membershipAwards
             */
            postMembershipAwards: (hotelId, membershipAwards, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/membershipAwards`, method: 'POST', body: membershipAwards, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to change Membership Awards. <p><strong>OperationId:</strong>putMembershipAwards</p>
             *
             * @tags MembershipConfig
             * @name PutMembershipAwards
             * @summary Change Membership Awards
             * @request PUT:/membershipAwards/{membershipAwardsId}
             */
            putMembershipAwards: (hotelId, membershipAwardsId, membershipAwards, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/membershipAwards/${membershipAwardsId}`, method: 'PUT', body: membershipAwards, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to delete Membership Awards. <p><strong>OperationId:</strong>deleteMembershipAwards</p>
             *
             * @tags MembershipConfig
             * @name DeleteMembershipAwards
             * @summary Delete Membership Awards
             * @request DELETE:/membershipAwards/{membershipAwardsId}
             */
            deleteMembershipAwards: (hotelId, membershipAwardsId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/membershipAwards/${membershipAwardsId}`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.membershipBenefitPrograms = {
            /**
             * @description This API allows you to fetch Membership Benefit Programs of Membership Type. A Benefit Program is configurable for a Membership Type when OCIS or ORS license is active and Membership Type meets following criteria - primary central setup, not externally controlled and point calculation method is Manual Batch. <p><strong>OperationId:</strong>getMembershipBenefitPrograms</p>
             *
             * @tags MembershipConfig
             * @name GetMembershipBenefitPrograms
             * @summary Retrieve a Membership Benefit Program
             * @request GET:/membershipBenefitPrograms
             */
            getMembershipBenefitPrograms: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/membershipBenefitPrograms`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API is used to create Membership Benefit Programs of a Membership Type. A Benefit Program is configurable for a Membership Type when OCIS or ORS license is active and Membership Type meets following criteria  - primary  central setup,  not externally controlled and point calculation method is Manual Batch. <p><strong>OperationId:</strong>postMembershipBenefitPrograms</p>
             *
             * @tags MembershipConfig
             * @name PostMembershipBenefitPrograms
             * @summary Create Membership Benefit Program
             * @request POST:/membershipBenefitPrograms
             */
            postMembershipBenefitPrograms: (hotelId, membershipBenefitPrograms, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/membershipBenefitPrograms`, method: 'POST', body: membershipBenefitPrograms, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API allows you to modify Membership Benefit Programs of Membership Type. A Benefit Program is configurable for a Membership Type when OCIS or ORS license is active and Membership Type meets following criteria  - primary central setup, not externally controlled and point calculation method is Manual Batch. <p><strong>OperationId:</strong>putMembershipBenefitPrograms</p>
             *
             * @tags MembershipConfig
             * @name PutMembershipBenefitPrograms
             * @summary Change Membership Benefit Program
             * @request PUT:/membershipBenefitPrograms/{membershipBenefitProgramsId}
             */
            putMembershipBenefitPrograms: (hotelId, membershipBenefitProgramsId, membershipBenefitPrograms, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/membershipBenefitPrograms/${membershipBenefitProgramsId}`, method: 'PUT', body: membershipBenefitPrograms, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API will allow you to delete s Membership Benefit Programs of a Membership Type.  <p><strong>OperationId:</strong>deleteMembershipBenefitPrograms</p>
             *
             * @tags MembershipConfig
             * @name DeleteMembershipBenefitPrograms
             * @summary Delete Membership Benedict Program
             * @request DELETE:/membershipBenefitPrograms/{membershipBenefitProgramsId}
             */
            deleteMembershipBenefitPrograms: (hotelId, membershipBenefitProgramsId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/membershipBenefitPrograms/${membershipBenefitProgramsId}`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.membershipClasses = {
            /**
             * @description Retrieve a list of membership classes that are configured. <p><strong>OperationId:</strong>getMembershipClasses</p>
             *
             * @tags MembershipConfig
             * @name GetMembershipClasses
             * @summary Get Membership classes
             * @request GET:/membershipClasses
             */
            getMembershipClasses: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/membershipClasses`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Create a new membership class. <p><strong>OperationId:</strong>postMembershipClasses</p>
             *
             * @tags MembershipConfig
             * @name PostMembershipClasses
             * @summary Create Membership classes
             * @request POST:/membershipClasses
             */
            postMembershipClasses: (hotelId, membershipClasses, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/membershipClasses`, method: 'POST', body: membershipClasses, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Update an existing membership class <p><strong>OperationId:</strong>putMembershipClasses</p>
             *
             * @tags MembershipConfig
             * @name PutMembershipClasses
             * @summary Change Membership classes
             * @request PUT:/membershipClasses/{membershipClassId}
             */
            putMembershipClasses: (hotelId, membershipClassId, membershipClasses, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/membershipClasses/${membershipClassId}`, method: 'PUT', body: membershipClasses, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Delete an existing membership class. <p><strong>OperationId:</strong>deleteMembershipClasses</p>
             *
             * @tags MembershipConfig
             * @name DeleteMembershipClasses
             * @summary Delete Membership classes
             * @request DELETE:/membershipClasses/{membershipClassId}
             */
            deleteMembershipClasses: (hotelId, membershipClassId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/membershipClasses/${membershipClassId}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.membershipEnrollmentCodes = {
            /**
             * @description Use this API to get Membership Enrollment Codes. <p><strong>OperationId:</strong>getMembershipEnrollmentCodes</p>
             *
             * @tags ChainConfig
             * @name GetMembershipEnrollmentCodes
             * @summary Get Membership Enrollment Codes
             * @request GET:/membershipEnrollmentCodes
             */
            getMembershipEnrollmentCodes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/membershipEnrollmentCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create Membership Enrollment Codes. <p><strong>OperationId:</strong>postMembershipEnrollmentCodes</p>
             *
             * @tags ChainConfig
             * @name PostMembershipEnrollmentCodes
             * @summary Create Membership Enrollment Codes
             * @request POST:/membershipEnrollmentCodes
             */
            postMembershipEnrollmentCodes: (hotelId, membershipEnrollmentCodesCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/membershipEnrollmentCodes`, method: 'POST', body: membershipEnrollmentCodesCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update Membership Enrollment Codes. <p><strong>OperationId:</strong>changeMembershipEnrollmentCodes</p>
             *
             * @tags ChainConfig
             * @name ChangeMembershipEnrollmentCodes
             * @summary Change Membership Enrollment Codes
             * @request PUT:/membershipEnrollmentCodes/{enrollmentCode}
             */
            changeMembershipEnrollmentCodes: (hotelId, enrollmentCode, membershipEnrollmentCodesToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/membershipEnrollmentCodes/${enrollmentCode}`, method: 'PUT', body: membershipEnrollmentCodesToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete Membership Enrollment Codes. <p><strong>OperationId:</strong>removeMembershipEnrollmentCodes</p>
             *
             * @tags ChainConfig
             * @name RemoveMembershipEnrollmentCodes
             * @summary Delete Membership Enrollment Codes
             * @request DELETE:/membershipEnrollmentCodes/{enrollmentCode}
             */
            removeMembershipEnrollmentCodes: (hotelId, enrollmentCode, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/membershipEnrollmentCodes/${enrollmentCode}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.membershipEnrollmentGroups = {
            /**
             * @description Retrieve a list of membership Enrollment Groups that are configured. <p><strong>OperationId:</strong>getMembershipEnrollmentGroups</p>
             *
             * @tags MembershipConfig
             * @name GetMembershipEnrollmentGroups
             * @summary Get Membership enrollment groups
             * @request GET:/membershipEnrollmentGroups
             */
            getMembershipEnrollmentGroups: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/membershipEnrollmentGroups`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Create a new membership enrollment group. <p><strong>OperationId:</strong>postMembershipEnrollmentGroups</p>
             *
             * @tags MembershipConfig
             * @name PostMembershipEnrollmentGroups
             * @summary Create Membership enrollment groups
             * @request POST:/membershipEnrollmentGroups
             */
            postMembershipEnrollmentGroups: (hotelId, membershipEnrollmentGroups, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/membershipEnrollmentGroups`, method: 'POST', body: membershipEnrollmentGroups, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Update an existing membership group. <p><strong>OperationId:</strong>putMembershipEnrollmentGroups</p>
             *
             * @tags MembershipConfig
             * @name PutMembershipEnrollmentGroups
             * @summary Change Membership enrollment groups
             * @request PUT:/membershipEnrollmentGroups/{membershipEnrollmentGroupsId}
             */
            putMembershipEnrollmentGroups: (hotelId, membershipEnrollmentGroupsId, membershipEnrollmentGroups, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/membershipEnrollmentGroups/${membershipEnrollmentGroupsId}`, method: 'PUT', body: membershipEnrollmentGroups, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description delete an existing membership group. <p><strong>OperationId:</strong>deleteMembershipEnrollmentGroups</p>
             *
             * @tags MembershipConfig
             * @name DeleteMembershipEnrollmentGroups
             * @summary Remove Membership enrollment groups
             * @request DELETE:/membershipEnrollmentGroups/{membershipEnrollmentGroupsId}
             */
            deleteMembershipEnrollmentGroups: (hotelId, membershipEnrollmentGroupsId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/membershipEnrollmentGroups/${membershipEnrollmentGroupsId}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.membershipFolioTexts = {
            /**
             * @description You can use this API to Set Membership folio texts. <p><strong>OperationId:</strong>postMembershipFolioTexts</p>
             *
             * @tags MembershipConfig
             * @name PostMembershipFolioTexts
             * @summary Set Membership folio texts
             * @request POST:/membershipFolioTexts
             */
            postMembershipFolioTexts: (hotelId, membershipFolioTexts, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/membershipFolioTexts`, method: 'POST', body: membershipFolioTexts, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.membershipLevels = {
            /**
             * @description You can use this API to get Membership levels. <p><strong>OperationId:</strong>getMembershipLevels</p>
             *
             * @tags MembershipConfig
             * @name GetMembershipLevels
             * @summary Get Membership levels
             * @request GET:/membershipLevels
             */
            getMembershipLevels: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/membershipLevels`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to create Membership levels. <p><strong>OperationId:</strong>postMembershipLevels</p>
             *
             * @tags MembershipConfig
             * @name PostMembershipLevels
             * @summary Create Membership levels
             * @request POST:/membershipLevels
             */
            postMembershipLevels: (hotelId, membershipLevels, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/membershipLevels`, method: 'POST', body: membershipLevels, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to change Membership levels. <p><strong>OperationId:</strong>putMembershipLevels</p>
             *
             * @tags MembershipConfig
             * @name PutMembershipLevels
             * @summary Change Membership levels
             * @request PUT:/membershipLevels/{membershipLevelsId}
             */
            putMembershipLevels: (hotelId, membershipLevelsId, membershipLevels, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/membershipLevels/${membershipLevelsId}`, method: 'PUT', body: membershipLevels, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to delete Membership levels. <p><strong>OperationId:</strong>deleteMembershipLevels</p>
             *
             * @tags MembershipConfig
             * @name DeleteMembershipLevels
             * @summary Delete Membership levels
             * @request DELETE:/membershipLevels/{membershipLevelsId}
             */
            deleteMembershipLevels: (hotelId, membershipLevelsId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/membershipLevels/${membershipLevelsId}`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.membershipMarketGroups = {
            /**
             * @description You can use this API to get Membership market groups. <p><strong>OperationId:</strong>getMembershipMarketGroups</p>
             *
             * @tags MembershipConfig
             * @name GetMembershipMarketGroups
             * @summary Get Membership market groups
             * @request GET:/membershipMarketGroups
             */
            getMembershipMarketGroups: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/membershipMarketGroups`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to create Membership market groups. <p><strong>OperationId:</strong>postMembershipMarketGroups</p>
             *
             * @tags MembershipConfig
             * @name PostMembershipMarketGroups
             * @summary Create Membership market groups
             * @request POST:/membershipMarketGroups
             */
            postMembershipMarketGroups: (hotelId, membershipMarketGroups, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/membershipMarketGroups`, method: 'POST', body: membershipMarketGroups, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to change Membership market groups. <p><strong>OperationId:</strong>putMembershipMarketGroups</p>
             *
             * @tags MembershipConfig
             * @name PutMembershipMarketGroups
             * @summary Change Membership market groups
             * @request PUT:/membershipMarketGroups/{membershipMarketGroupId}
             */
            putMembershipMarketGroups: (hotelId, membershipMarketGroupId, membershipMarketGroups, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/membershipMarketGroups/${membershipMarketGroupId}`, method: 'PUT', body: membershipMarketGroups, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to delete Membership market groups. <p><strong>OperationId:</strong>deleteMembershipMarketGroups</p>
             *
             * @tags MembershipConfig
             * @name DeleteMembershipMarketGroups
             * @summary Delete Membership market groups
             * @request DELETE:/membershipMarketGroups/{membershipMarketGroupId}
             */
            deleteMembershipMarketGroups: (hotelId, membershipMarketGroupId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/membershipMarketGroups/${membershipMarketGroupId}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.membershipPropertyGroups = {
            /**
             * @description You can use this API to get Membership property groups. <p><strong>OperationId:</strong>getMembershipPropertyGroups</p>
             *
             * @tags MembershipConfig
             * @name GetMembershipPropertyGroups
             * @summary Get Membership property groups
             * @request GET:/membershipPropertyGroups
             */
            getMembershipPropertyGroups: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/membershipPropertyGroups`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to create Membership property groups. <p><strong>OperationId:</strong>postMembershipPropertyGroups</p>
             *
             * @tags MembershipConfig
             * @name PostMembershipPropertyGroups
             * @summary Create Membership property groups
             * @request POST:/membershipPropertyGroups
             */
            postMembershipPropertyGroups: (hotelId, membershipPropertyGroups, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/membershipPropertyGroups`, method: 'POST', body: membershipPropertyGroups, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to change Membership property groups. <p><strong>OperationId:</strong>putMembershipPropertyGroups</p>
             *
             * @tags MembershipConfig
             * @name PutMembershipPropertyGroups
             * @summary Change Membership property groups
             * @request PUT:/membershipPropertyGroups/{membershipPropertyGroupsId}
             */
            putMembershipPropertyGroups: (hotelId, membershipPropertyGroupsId, membershipPropertyGroups, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/membershipPropertyGroups/${membershipPropertyGroupsId}`, method: 'PUT', body: membershipPropertyGroups, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to delete Membership property groups. <p><strong>OperationId:</strong>deleteMembershipPropertyGroups</p>
             *
             * @tags MembershipConfig
             * @name DeleteMembershipPropertyGroups
             * @summary Delete Membership property groups
             * @request DELETE:/membershipPropertyGroups/{membershipPropertyGroupsId}
             */
            deleteMembershipPropertyGroups: (hotelId, membershipPropertyGroupsId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/membershipPropertyGroups/${membershipPropertyGroupsId}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.membershipRateGroups = {
            /**
             * @description You can use this API to get Membership rate groups. <p><strong>OperationId:</strong>getMembershipRateGroups</p>
             *
             * @tags MembershipConfig
             * @name GetMembershipRateGroups
             * @summary Get Membership rate groups
             * @request GET:/membershipRateGroups
             */
            getMembershipRateGroups: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/membershipRateGroups`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to create Membership rate groups. <p><strong>OperationId:</strong>postMembershipRateGroups</p>
             *
             * @tags MembershipConfig
             * @name PostMembershipRateGroups
             * @summary Create Membership rate groups
             * @request POST:/membershipRateGroups
             */
            postMembershipRateGroups: (hotelId, membershipRateGroups, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/membershipRateGroups`, method: 'POST', body: membershipRateGroups, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to change Membership rate groups. <p><strong>OperationId:</strong>putMembershipRateGroups</p>
             *
             * @tags MembershipConfig
             * @name PutMembershipRateGroups
             * @summary Change Membership rate groups
             * @request PUT:/membershipRateGroups/{membershipRateGroupId}
             */
            putMembershipRateGroups: (hotelId, membershipRateGroupId, membershipRateGroups, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/membershipRateGroups/${membershipRateGroupId}`, method: 'PUT', body: membershipRateGroups, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to delete Membership rate groups. <p><strong>OperationId:</strong>deleteMembershipRateGroups</p>
             *
             * @tags MembershipConfig
             * @name DeleteMembershipRateGroups
             * @summary Delete Membership rate groups
             * @request DELETE:/membershipRateGroups/{membershipRateGroupId}
             */
            deleteMembershipRateGroups: (hotelId, membershipRateGroupId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/membershipRateGroups/${membershipRateGroupId}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.membershipStatusCodes = {
            /**
             * @description Use this API to get Membership Status Codes. <p><strong>OperationId:</strong>getMembershipStatusCodes</p>
             *
             * @tags ChainConfig
             * @name GetMembershipStatusCodes
             * @summary Get Membership Status Codes
             * @request GET:/membershipStatusCodes
             */
            getMembershipStatusCodes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/membershipStatusCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create Membership Status Codes. <p><strong>OperationId:</strong>postMembershipStatusCodes</p>
             *
             * @tags ChainConfig
             * @name PostMembershipStatusCodes
             * @summary Create Membership Status Codes
             * @request POST:/membershipStatusCodes
             */
            postMembershipStatusCodes: (hotelId, membershipStatusCodesCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/membershipStatusCodes`, method: 'POST', body: membershipStatusCodesCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update Membership Status Codes. <p><strong>OperationId:</strong>changeMembershipStatusCodes</p>
             *
             * @tags ChainConfig
             * @name ChangeMembershipStatusCodes
             * @summary Change Membership Status Codes
             * @request PUT:/membershipStatusCodes/{membershipStatusCode}
             */
            changeMembershipStatusCodes: (hotelId, membershipStatusCode, membershipStatusCodesToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/membershipStatusCodes/${membershipStatusCode}`, method: 'PUT', body: membershipStatusCodesToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete Membership Status Codes. <p><strong>OperationId:</strong>removeMembershipStatusCodes</p>
             *
             * @tags ChainConfig
             * @name RemoveMembershipStatusCodes
             * @summary Delete Membership Status Codes
             * @request DELETE:/membershipStatusCodes/{membershipStatusCode}
             */
            removeMembershipStatusCodes: (hotelId, membershipStatusCode, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/membershipStatusCodes/${membershipStatusCode}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.membershipTypeRules = {
            /**
             * @description get Membership type rules based on criteria <p><strong>OperationId:</strong>getMembershipTypeRules</p>
             *
             * @tags MembershipConfig
             * @name GetMembershipTypeRules
             * @summary Get Membership type rules
             * @request GET:/membershipTypeRules
             */
            getMembershipTypeRules: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/membershipTypeRules`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to create Membership type rules. <p><strong>OperationId:</strong>postMembershipTypeRules</p>
             *
             * @tags MembershipConfig
             * @name PostMembershipTypeRules
             * @summary Create Membership type rules
             * @request POST:/membershipTypeRules
             */
            postMembershipTypeRules: (hotelId, membershipTypeRules, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/membershipTypeRules`, method: 'POST', body: membershipTypeRules, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to get Membership type rule details. <p><strong>OperationId:</strong>getMembershipTypeRule</p>
             *
             * @tags MembershipConfig
             * @name GetMembershipTypeRule
             * @summary Get Membership type rule details
             * @request GET:/membershipTypeRules/{membershipTypeRulesId}
             */
            getMembershipTypeRule: (hotelId, membershipTypeRulesId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/membershipTypeRules/${membershipTypeRulesId}`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to change Membership type rules. <p><strong>OperationId:</strong>putMembershipTypeRules</p>
             *
             * @tags MembershipConfig
             * @name PutMembershipTypeRules
             * @summary Change Membership type rules
             * @request PUT:/membershipTypeRules/{membershipTypeRulesId}
             */
            putMembershipTypeRules: (hotelId, membershipTypeRulesId, membershipTypeRules, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/membershipTypeRules/${membershipTypeRulesId}`, method: 'PUT', body: membershipTypeRules, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to delete Membership type rules. <p><strong>OperationId:</strong>deleteMembershipTypeRules</p>
             *
             * @tags MembershipConfig
             * @name DeleteMembershipTypeRules
             * @summary Delete Membership type rules
             * @request DELETE:/membershipTypeRules/{membershipTypeRulesId}
             */
            deleteMembershipTypeRules: (hotelId, membershipTypeRulesId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/membershipTypeRules/${membershipTypeRulesId}`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.membershipTypes = {
            /**
             * @description Membership types enable you to identify, organize, and manage the membership programs on a profile. For example, your property might have a guest loyalty program that awards guests based on the amount of revenue generated or the number of stays per year. You would create a specific membership type for this program. This API will retrieve all configured Membership Types configured.<p><strong>OperationId:</strong>getMembershipTypes</p>
             *
             * @tags MembershipConfig
             * @name GetMembershipTypes
             * @summary Get membership types
             * @request GET:/membershipTypes
             */
            getMembershipTypes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/membershipTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Membership types enable you to identify, organize, and manage the membership programs on a profile. For example, your property might have a guest loyalty program that awards guests based on the amount of revenue generated or the number of stays per year. You would create a specific membership type for this program. <p><strong>OperationId:</strong>postMembershipTypes</p>
             *
             * @tags MembershipConfig
             * @name PostMembershipTypes
             * @summary Create Membership types
             * @request POST:/membershipTypes
             */
            postMembershipTypes: (hotelId, membershipTypes, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/membershipTypes`, method: 'POST', body: membershipTypes, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to get a specific Membership Type and its details. <p><strong>OperationId:</strong>getMembershipType</p>
             *
             * @tags MembershipConfig
             * @name GetMembershipType
             * @summary Get a Membership type
             * @request GET:/membershipTypes/{membershipTypeId}
             */
            getMembershipType: (hotelId, membershipTypeId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/membershipTypes/${membershipTypeId}`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update an existing Membership Type <p><strong>OperationId:</strong>putMembershipType</p>
             *
             * @tags MembershipConfig
             * @name PutMembershipType
             * @summary Change Membership type
             * @request PUT:/membershipTypes/{membershipTypeId}
             */
            putMembershipType: (hotelId, membershipTypeId, membershipTypeChangeInstructions, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/membershipTypes/${membershipTypeId}`, method: 'PUT', body: membershipTypeChangeInstructions, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete an existing Membership Type <p><strong>OperationId:</strong>deleteMembershipTypes</p>
             *
             * @tags MembershipConfig
             * @name DeleteMembershipTypes
             * @summary Delete Membership type
             * @request DELETE:/membershipTypes/{membershipTypeId}
             */
            deleteMembershipTypes: (hotelId, membershipTypeId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/membershipTypes/${membershipTypeId}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.nationalities = {
            /**
             * @description Use this API to get Nationalities codes and description configured in OPERA.<p><strong>OperationId:</strong>getNationalities</p>
             *
             * @tags ChainConfig
             * @name GetNationalities
             * @summary Get nationalities
             * @request GET:/nationalities
             */
            getNationalities: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/nationalities`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create Nationalities. <p><strong>OperationId:</strong>postNationalities</p>
             *
             * @tags ChainConfig
             * @name PostNationalities
             * @summary Create Nationalities
             * @request POST:/nationalities
             */
            postNationalities: (hotelId, nationalitiesCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/nationalities`, method: 'POST', body: nationalitiesCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update Nationalities. <p><strong>OperationId:</strong>putNationalities</p>
             *
             * @tags ChainConfig
             * @name PutNationalities
             * @summary Change Nationalities
             * @request PUT:/nationalities/{nationalitiesId}
             */
            putNationalities: (hotelId, nationalitiesId, nationalitiesToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/nationalities/${nationalitiesId}`, method: 'PUT', body: nationalitiesToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete Nationalities. <p><strong>OperationId:</strong>deleteNationalities</p>
             *
             * @tags ChainConfig
             * @name DeleteNationalities
             * @summary Delete Nationalities
             * @request DELETE:/nationalities/{nationalitiesId}
             */
            deleteNationalities: (hotelId, nationalitiesId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/nationalities/${nationalitiesId}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.ownerTeams = {
            /**
             * @description Use this API to get Owner Teams. <p><strong>OperationId:</strong>getOwnerTeams</p>
             *
             * @tags ChainConfig
             * @name GetOwnerTeams
             * @summary Get Owner Teams
             * @request GET:/ownerTeams
             */
            getOwnerTeams: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/ownerTeams`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create Owner Teams. <p><strong>OperationId:</strong>postOwnerTeams</p>
             *
             * @tags ChainConfig
             * @name PostOwnerTeams
             * @summary Create Owner Teams
             * @request POST:/ownerTeams
             */
            postOwnerTeams: (hotelId, ownerTeamsCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/ownerTeams`, method: 'POST', body: ownerTeamsCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update Owner Teams. <p><strong>OperationId:</strong>changeOwnerTeams</p>
             *
             * @tags ChainConfig
             * @name ChangeOwnerTeams
             * @summary Change Owner Teams
             * @request PUT:/ownerTeams/{ownerTeamCode}
             */
            changeOwnerTeams: (hotelId, ownerTeamCode, ownerTeamsToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/ownerTeams/${ownerTeamCode}`, method: 'PUT', body: ownerTeamsToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete Owner Teams. <p><strong>OperationId:</strong>removeOwnerTeams</p>
             *
             * @tags ChainConfig
             * @name RemoveOwnerTeams
             * @summary Delete Owner Teams
             * @request DELETE:/ownerTeams/{ownerTeamCode}
             */
            removeOwnerTeams: (hotelId, ownerTeamCode, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/ownerTeams/${ownerTeamCode}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.payDays = {
            /**
             * @description Use this API to get Pay Days. <p><strong>OperationId:</strong>getPayDays</p>
             *
             * @tags ChainConfig
             * @name GetPayDays
             * @summary Get Pay Days
             * @request GET:/payDays
             */
            getPayDays: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/payDays`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create Pay Days. <p><strong>OperationId:</strong>postPayDays</p>
             *
             * @tags ChainConfig
             * @name PostPayDays
             * @summary Create Pay Days
             * @request POST:/payDays
             */
            postPayDays: (hotelId, payDaysCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/payDays`, method: 'POST', body: payDaysCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update Pay Days. <p><strong>OperationId:</strong>putPayDays</p>
             *
             * @tags ChainConfig
             * @name PutPayDays
             * @summary Change Pay Days
             * @request PUT:/payDays/{payDaysId}
             */
            putPayDays: (hotelId, payDaysId, payDaysToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/payDays/${payDaysId}`, method: 'PUT', body: payDaysToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete Pay Days. <p><strong>OperationId:</strong>deletePayDays</p>
             *
             * @tags ChainConfig
             * @name DeletePayDays
             * @summary Delete Pay Days
             * @request DELETE:/payDays/{payDaysId}
             */
            deletePayDays: (hotelId, payDaysId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/payDays/${payDaysId}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.preference = {
            /**
             * @description Use this API to delete preferences, this API allows us to delete both the Global and Hotel level preferences. <p><strong>OperationId:</strong>deleteHotelAndGlobalPreferences</p>
             *
             * @tags ProfileConfiguration
             * @name DeleteHotelAndGlobalPreferences
             * @summary Delete preferences
             * @request DELETE:/preference
             */
            deleteHotelAndGlobalPreferences: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/preference`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.preferenceGroups = {
            /**
             * @description The API can be used to retrieve preference groups that match the given criteria in the request. <p><strong>OperationId:</strong>getPreferenceGroups</p>
             *
             * @tags ProfileConfiguration
             * @name GetPreferenceGroups
             * @summary Get Preference Groups
             * @request GET:/preferenceGroups
             */
            getPreferenceGroups: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/preferenceGroups`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API can be used to modify the preference groups. Changes can be made concurrently to multiple groups. <p><strong>OperationId:</strong>putPreferenceGroups</p>
             *
             * @tags ProfileConfiguration
             * @name PutPreferenceGroups
             * @summary Change Preference Groups
             * @request PUT:/preferenceGroups
             */
            putPreferenceGroups: (hotelId, preferenceGroups, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/preferenceGroups`, method: 'PUT', body: preferenceGroups, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This will allow you to delete an existing Preference Group. <p><strong>OperationId:</strong>deletePreferenceGroups</p>
             *
             * @tags ProfileConfiguration
             * @name DeletePreferenceGroups
             * @summary Delete preference groups
             * @request DELETE:/preferenceGroups
             */
            deletePreferenceGroups: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/preferenceGroups`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create a new Preference group. <p><strong>OperationId:</strong>postPreferenceGroups</p>
             *
             * @tags ProfileConfiguration
             * @name PostPreferenceGroups
             * @summary Create new preference groups
             * @request POST:/preferenceGroups
             */
            postPreferenceGroups: (hotelId, preferenceGroups, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/preferenceGroups`, method: 'POST', body: preferenceGroups, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.preferences = {
            /**
             * @description You can use this API to get template Preferences. <p><strong>OperationId:</strong>getTemplatePreferences</p>
             *
             * @tags ProfileConfiguration
             * @name GetTemplatePreferences
             * @summary Get template Preferences
             * @request GET:/preferences
             */
            getTemplatePreferences: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/preferences`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to change template preferences. <p><strong>OperationId:</strong>putTemplatePreferences</p>
             *
             * @tags ProfileConfiguration
             * @name PutTemplatePreferences
             * @summary Change template preferences
             * @request PUT:/preferences
             */
            putTemplatePreferences: (hotelId, templatePreferences, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/preferences`, method: 'PUT', body: templatePreferences, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to delete template preferences. <p><strong>OperationId:</strong>deleteTemplatePreferences</p>
             *
             * @tags ProfileConfiguration
             * @name DeleteTemplatePreferences
             * @summary Delete template preferences
             * @request DELETE:/preferences
             */
            deleteTemplatePreferences: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/preferences`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to create template preferences. <p><strong>OperationId:</strong>postTemplatePreferences</p>
             *
             * @tags ProfileConfiguration
             * @name PostTemplatePreferences
             * @summary Create template preferences
             * @request POST:/preferences
             */
            postTemplatePreferences: (hotelId, templatePreferences, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/preferences`, method: 'POST', body: templatePreferences, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to copy preferences. <p><strong>OperationId:</strong>copyPreferences</p>
             *
             * @tags ProfileConfiguration
             * @name CopyPreferences
             * @summary Copy preferences
             * @request PUT:/preferences/copy
             */
            copyPreferences: (hotelId, preferencesCopy, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/preferences/copy`, method: 'PUT', body: preferencesCopy, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.profileInactiveReasons = {
            /**
             * @description Use this API to get Profile Inactive Reasons. <p><strong>OperationId:</strong>getProfileInactiveReasons</p>
             *
             * @tags ChainConfig
             * @name GetProfileInactiveReasons
             * @summary Get Profile Inactive Reasons
             * @request GET:/profileInactiveReasons
             */
            getProfileInactiveReasons: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/profileInactiveReasons`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create Profile Inactive Reasons. <p><strong>OperationId:</strong>postProfileInactiveReasons</p>
             *
             * @tags ChainConfig
             * @name PostProfileInactiveReasons
             * @summary Create Profile Inactive Reasons
             * @request POST:/profileInactiveReasons
             */
            postProfileInactiveReasons: (hotelId, profileInactiveReasonsCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/profileInactiveReasons`, method: 'POST', body: profileInactiveReasonsCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update Profile Inactive Reasons. <p><strong>OperationId:</strong>putProfileInactiveReasons</p>
             *
             * @tags ChainConfig
             * @name PutProfileInactiveReasons
             * @summary Change Profile Inactive Reasons
             * @request PUT:/profileInactiveReasons/{profileInactiveReasonsId}
             */
            putProfileInactiveReasons: (hotelId, profileInactiveReasonsId, profileInactiveReasonsToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/profileInactiveReasons/${profileInactiveReasonsId}`, method: 'PUT', body: profileInactiveReasonsToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete Profile Inactive Reasons. <p><strong>OperationId:</strong>deleteProfileInactiveReasons</p>
             *
             * @tags ChainConfig
             * @name DeleteProfileInactiveReasons
             * @summary Delete Profile Inactive Reasons
             * @request DELETE:/profileInactiveReasons/{profileInactiveReasonsId}
             */
            deleteProfileInactiveReasons: (hotelId, profileInactiveReasonsId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/profileInactiveReasons/${profileInactiveReasonsId}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.profileNameValidations = {
            /**
             * @description You can use this API to get Profile Name Validations. <p><strong>OperationId:</strong>getProfileNameValidations</p>
             *
             * @tags ProfileConfiguration
             * @name GetProfileNameValidations
             * @summary Get Profile Name Validations
             * @request GET:/profileNameValidations
             */
            getProfileNameValidations: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/profileNameValidations`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to change Profile Name Validations. <p><strong>OperationId:</strong>putProfileNameValidations</p>
             *
             * @tags ProfileConfiguration
             * @name PutProfileNameValidations
             * @summary Change Profile Name Validations
             * @request PUT:/profileNameValidations
             */
            putProfileNameValidations: (hotelId, profileNameValidationsToChange, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/profileNameValidations`, method: 'PUT', body: profileNameValidationsToChange, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to delete Profile Name Validations. <p><strong>OperationId:</strong>deleteProfileNameValidations</p>
             *
             * @tags ProfileConfiguration
             * @name DeleteProfileNameValidations
             * @summary Delete Profile Name Validations
             * @request DELETE:/profileNameValidations
             */
            deleteProfileNameValidations: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/profileNameValidations`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to create Profile Name Validations. <p><strong>OperationId:</strong>postProfileNameValidations</p>
             *
             * @tags ProfileConfiguration
             * @name PostProfileNameValidations
             * @summary Create Profile Name Validations
             * @request POST:/profileNameValidations
             */
            postProfileNameValidations: (hotelId, profileNameValidations, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/profileNameValidations`, method: 'POST', body: profileNameValidations, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.profileRestrictionReasons = {
            /**
             * @description Use this API to get Profile Restriction Reasons. <p><strong>OperationId:</strong>getProfileRestrictionReasons</p>
             *
             * @tags ChainConfig
             * @name GetProfileRestrictionReasons
             * @summary Get Profile Restriction Reasons
             * @request GET:/profileRestrictionReasons
             */
            getProfileRestrictionReasons: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/profileRestrictionReasons`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create Profile Restriction Reasons. <p><strong>OperationId:</strong>postProfileRestrictionReasons</p>
             *
             * @tags ChainConfig
             * @name PostProfileRestrictionReasons
             * @summary Create Profile Restriction Reasons
             * @request POST:/profileRestrictionReasons
             */
            postProfileRestrictionReasons: (hotelId, profileRestrictionReasonsCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/profileRestrictionReasons`, method: 'POST', body: profileRestrictionReasonsCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update Profile Restriction Reasons. <p><strong>OperationId:</strong>putProfileRestrictionReasons</p>
             *
             * @tags ChainConfig
             * @name PutProfileRestrictionReasons
             * @summary Change Profile Restriction Reasons
             * @request PUT:/profileRestrictionReasons/{profileRestrictionReasonsId}
             */
            putProfileRestrictionReasons: (hotelId, profileRestrictionReasonsId, profileRestrictionReasonsToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/profileRestrictionReasons/${profileRestrictionReasonsId}`, method: 'PUT', body: profileRestrictionReasonsToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete Profile Restriction Reasons. <p><strong>OperationId:</strong>deleteProfileRestrictionReasons</p>
             *
             * @tags ChainConfig
             * @name DeleteProfileRestrictionReasons
             * @summary Delete Profile Restriction Reasons
             * @request DELETE:/profileRestrictionReasons/{profileRestrictionReasonsId}
             */
            deleteProfileRestrictionReasons: (hotelId, profileRestrictionReasonsId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/profileRestrictionReasons/${profileRestrictionReasonsId}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.relationships = {
            /**
             * @description You can use this API to get profile relationships. <p><strong>OperationId:</strong>getProfileRelationships</p>
             *
             * @tags ProfileConfiguration
             * @name GetProfileRelationships
             * @summary Get profile relationships
             * @request GET:/relationships
             */
            getProfileRelationships: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/relationships`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to change profile relationships. <p><strong>OperationId:</strong>putProfileRelationships</p>
             *
             * @tags ProfileConfiguration
             * @name PutProfileRelationships
             * @summary Change profile relationships
             * @request PUT:/relationships
             */
            putProfileRelationships: (hotelId, profileLinks, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/relationships`, method: 'PUT', body: profileLinks, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to delete profile relationships. <p><strong>OperationId:</strong>deleteProfileRelationships</p>
             *
             * @tags ProfileConfiguration
             * @name DeleteProfileRelationships
             * @summary Delete profile relationships
             * @request DELETE:/relationships
             */
            deleteProfileRelationships: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/relationships`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to create profile relationships. <p><strong>OperationId:</strong>postProfileRelationships</p>
             *
             * @tags ProfileConfiguration
             * @name PostProfileRelationships
             * @summary Create profile relationships
             * @request POST:/relationships
             */
            postProfileRelationships: (hotelId, profileLinks, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/relationships`, method: 'POST', body: profileLinks, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.services = {
            /**
             * @description Clear Membership Configuration Cache <p><strong>OperationId:</strong>deleteMembershipConfigCache</p>
             *
             * @tags MembershipConfig
             * @name DeleteMembershipConfigCache
             * @summary  clear cache
             * @request DELETE:/services/membershipConfig/cache
             */
            deleteMembershipConfigCache: (hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/services/membershipConfig/cache`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Ping Membership Configuration Service <p><strong>OperationId:</strong>pingMembershipConfigService</p>
             *
             * @tags MembershipConfig
             * @name PingMembershipConfigService
             * @summary  ping
             * @request GET:/services/membershipConfig/status
             */
            pingMembershipConfigService: (hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/services/membershipConfig/status`, method: 'GET', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Clear Profile Configuratoin Cache <p><strong>OperationId:</strong>deleteProfileConfigServiceCache</p>
             *
             * @tags ProfileConfiguration
             * @name DeleteProfileConfigServiceCache
             * @summary  clear cache
             * @request DELETE:/services/profile/cache
             */
            deleteProfileConfigServiceCache: (hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/services/profile/cache`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Ping Profile Configuration Service <p><strong>OperationId:</strong>pingProfileConfigService</p>
             *
             * @tags ProfileConfiguration
             * @name PingProfileConfigService
             * @summary  ping
             * @request GET:/services/profile/status
             */
            pingProfileConfigService: (hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/services/profile/status`, method: 'GET', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.sources = {
            /**
             * @description Use this API to get Sources. <p><strong>OperationId:</strong>getSources</p>
             *
             * @tags ChainConfig
             * @name GetSources
             * @summary Get Sources
             * @request GET:/sources
             */
            getSources: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/sources`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create Sources. <p><strong>OperationId:</strong>postSources</p>
             *
             * @tags ChainConfig
             * @name PostSources
             * @summary Create Sources
             * @request POST:/sources
             */
            postSources: (hotelId, sourcesCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/sources`, method: 'POST', body: sourcesCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update Sources. <p><strong>OperationId:</strong>putSources</p>
             *
             * @tags ChainConfig
             * @name PutSources
             * @summary Change Sources
             * @request PUT:/sources/{sourcesId}
             */
            putSources: (hotelId, sourcesId, sourcesToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/sources/${sourcesId}`, method: 'PUT', body: sourcesToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete Sources. <p><strong>OperationId:</strong>deleteSources</p>
             *
             * @tags ChainConfig
             * @name DeleteSources
             * @summary Delete Sources
             * @request DELETE:/sources/{sourcesId}
             */
            deleteSources: (hotelId, sourcesId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/sources/${sourcesId}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.territories = {
            /**
             * @description Use this API to get Territories. <p><strong>OperationId:</strong>getTerritories</p>
             *
             * @tags ChainConfig
             * @name GetTerritories
             * @summary Get Territories
             * @request GET:/territories
             */
            getTerritories: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/territories`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create Territories. <p><strong>OperationId:</strong>postTerritories</p>
             *
             * @tags ChainConfig
             * @name PostTerritories
             * @summary Create Territories
             * @request POST:/territories
             */
            postTerritories: (hotelId, territoriesCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/territories`, method: 'POST', body: territoriesCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update Territories. <p><strong>OperationId:</strong>putTerritories</p>
             *
             * @tags ChainConfig
             * @name PutTerritories
             * @summary Change Territories
             * @request PUT:/territories/{territoriesId}
             */
            putTerritories: (hotelId, territoriesId, territoriesToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/territories/${territoriesId}`, method: 'PUT', body: territoriesToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete Territories. <p><strong>OperationId:</strong>deleteTerritories</p>
             *
             * @tags ChainConfig
             * @name DeleteTerritories
             * @summary Delete Territories
             * @request DELETE:/territories/{territoriesId}
             */
            deleteTerritories: (hotelId, territoriesId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/territories/${territoriesId}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.titles = {
            /**
             * @description Use this API to get Titles. <p><strong>OperationId:</strong>getTitles</p>
             *
             * @tags ChainConfig
             * @name GetTitles
             * @summary Get Titles
             * @request GET:/titles
             */
            getTitles: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/titles`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create Titles. <p><strong>OperationId:</strong>postTitles</p>
             *
             * @tags ChainConfig
             * @name PostTitles
             * @summary Create Titles
             * @request POST:/titles
             */
            postTitles: (hotelId, titlesCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/titles`, method: 'POST', body: titlesCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update Titles. <p><strong>OperationId:</strong>putTitles</p>
             *
             * @tags ChainConfig
             * @name PutTitles
             * @summary Change Titles
             * @request PUT:/titles/{titlesId}
             */
            putTitles: (hotelId, titlesId, titlesToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/titles/${titlesId}`, method: 'PUT', body: titlesToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete Titles. <p><strong>OperationId:</strong>deleteTitles</p>
             *
             * @tags ChainConfig
             * @name DeleteTitles
             * @summary Delete Titles
             * @request DELETE:/titles/{titlesId}
             */
            deleteTitles: (hotelId, titlesId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/titles/${titlesId}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.vipLevels = {
            /**
             * @description Use this API to get VIP Levels. <p><strong>OperationId:</strong>getVIPLevels</p>
             *
             * @tags ChainConfig
             * @name GetVipLevels
             * @summary Get VIP Levels
             * @request GET:/vipLevels
             */
            getVipLevels: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/vipLevels`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create VIP Levels. <p><strong>OperationId:</strong>postVIPLevels</p>
             *
             * @tags ChainConfig
             * @name PostVipLevels
             * @summary Create VIP Levels
             * @request POST:/vipLevels
             */
            postVipLevels: (hotelId, vIPLevelsCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/vipLevels`, method: 'POST', body: vIPLevelsCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update VIP Levels. <p><strong>OperationId:</strong>putVIPLevels</p>
             *
             * @tags ChainConfig
             * @name PutVipLevels
             * @summary Change VIP Levels
             * @request PUT:/vipLevels/{vipLevelsId}
             */
            putVipLevels: (hotelId, vipLevelsId, vIPLevelsToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/vipLevels/${vipLevelsId}`, method: 'PUT', body: vIPLevelsToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete VIP Levels. <p><strong>OperationId:</strong>deleteVIPLevels</p>
             *
             * @tags ChainConfig
             * @name DeleteVipLevels
             * @summary Delete VIP Levels
             * @request DELETE:/vipLevels/{vipLevelsId}
             */
            deleteVipLevels: (hotelId, vipLevelsId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/vipLevels/${vipLevelsId}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
    }
}
exports.Api = Api;
