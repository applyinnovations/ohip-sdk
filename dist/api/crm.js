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
exports.Api = exports.HttpClient = exports.ContentType = exports.MasterType = exports.MasterInfoCodeDetailType = exports.GuestProfileTypeType = exports.ProfileAllowedActionType = exports.PMSResStatusType = exports.ResProfileTypeType = exports.GuestHousekeepingServiceRequestType = exports.ProfileDeliveryModuleType = exports.CompanyProfileTypeType = exports.ECertificateIssueType = exports.ECertificateIssueSourceType = exports.ECertificateStatusType = exports.ECertificateConsumeSourceType = exports.ECertificateScopeType = exports.CommissionPaymentMethods = exports.ProfileSharedLevelType = exports.ProfileTypeType = exports.ProfileStatusType = exports.AnonymizationStatusType = exports.PersonNameTypeType = exports.CardReIssueType = exports.DowngradeType = exports.TierAdministrationType = exports.MembershipEarningPreferenceType = exports.ImageStyleType = void 0;
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
/** The earning preference of a membership, it depends on the type of property. eg. when the property is a airline it should be Miles, other than Points. */
var MembershipEarningPreferenceType;
(function (MembershipEarningPreferenceType) {
    MembershipEarningPreferenceType["Points"] = "Points";
    MembershipEarningPreferenceType["Miles"] = "Miles";
})(MembershipEarningPreferenceType = exports.MembershipEarningPreferenceType || (exports.MembershipEarningPreferenceType = {}));
/** Do not upgrade membership. The membership may be downgraded. */
var TierAdministrationType;
(function (TierAdministrationType) {
    TierAdministrationType["Disabled"] = "Disabled";
    TierAdministrationType["NoUpgrade"] = "NoUpgrade";
})(TierAdministrationType = exports.TierAdministrationType || (exports.TierAdministrationType = {}));
/** Do not downgrade membership when the next downgrade process runs. When the downgrade process runs, the membership will be automatically set to Grace. */
var DowngradeType;
(function (DowngradeType) {
    DowngradeType["Grace"] = "Grace";
    DowngradeType["Never"] = "Never";
    DowngradeType["Period"] = "Period";
})(DowngradeType = exports.DowngradeType || (exports.DowngradeType = {}));
/** Request to re issue a new card. */
var CardReIssueType;
(function (CardReIssueType) {
    CardReIssueType["Pending"] = "Pending";
    CardReIssueType["NotApplicable"] = "NotApplicable";
    CardReIssueType["Requested"] = "Requested";
})(CardReIssueType = exports.CardReIssueType || (exports.CardReIssueType = {}));
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
var ProfileStatusType;
(function (ProfileStatusType) {
    ProfileStatusType["Active"] = "Active";
    ProfileStatusType["Inactive"] = "Inactive";
})(ProfileStatusType = exports.ProfileStatusType || (exports.ProfileStatusType = {}));
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
/** Simple types for Shared level. */
var ProfileSharedLevelType;
(function (ProfileSharedLevelType) {
    ProfileSharedLevelType["Global"] = "Global";
    ProfileSharedLevelType["Property"] = "Property";
    ProfileSharedLevelType["Cro"] = "Cro";
})(ProfileSharedLevelType = exports.ProfileSharedLevelType || (exports.ProfileSharedLevelType = {}));
/** Check */
var CommissionPaymentMethods;
(function (CommissionPaymentMethods) {
    CommissionPaymentMethods["Cent"] = "Cent";
    CommissionPaymentMethods["Eft"] = "Eft";
    CommissionPaymentMethods["Chk"] = "Chk";
})(CommissionPaymentMethods = exports.CommissionPaymentMethods || (exports.CommissionPaymentMethods = {}));
/** Indicates that OPERA E-Certificate is available for a specific list of hotels. */
var ECertificateScopeType;
(function (ECertificateScopeType) {
    ECertificateScopeType["Global"] = "Global";
    ECertificateScopeType["Hotel"] = "Hotel";
    ECertificateScopeType["MultiHotel"] = "MultiHotel";
})(ECertificateScopeType = exports.ECertificateScopeType || (exports.ECertificateScopeType = {}));
/** Indicates that OPERA E-Certificate is consumed by hotelPMS. */
var ECertificateConsumeSourceType;
(function (ECertificateConsumeSourceType) {
    ECertificateConsumeSourceType["Central"] = "Central";
    ECertificateConsumeSourceType["Web"] = "Web";
    ECertificateConsumeSourceType["Hotel"] = "Hotel";
})(ECertificateConsumeSourceType = exports.ECertificateConsumeSourceType || (exports.ECertificateConsumeSourceType = {}));
/** Indicates that OPERA E-Certificate is reserved. */
var ECertificateStatusType;
(function (ECertificateStatusType) {
    ECertificateStatusType["Cancelled"] = "Cancelled";
    ECertificateStatusType["Consumed"] = "Consumed";
    ECertificateStatusType["Deleted"] = "Deleted";
    ECertificateStatusType["Expired"] = "Expired";
    ECertificateStatusType["Issued"] = "Issued";
    ECertificateStatusType["Reserved"] = "Reserved";
})(ECertificateStatusType = exports.ECertificateStatusType || (exports.ECertificateStatusType = {}));
/** Indicates that OPERA E-Certificate is issued by external system. */
var ECertificateIssueSourceType;
(function (ECertificateIssueSourceType) {
    ECertificateIssueSourceType["Opera"] = "Opera";
    ECertificateIssueSourceType["Web"] = "Web";
    ECertificateIssueSourceType["Interface"] = "Interface";
})(ECertificateIssueSourceType = exports.ECertificateIssueSourceType || (exports.ECertificateIssueSourceType = {}));
/** Indicates that guest purchased OPERA E-Certificate. */
var ECertificateIssueType;
(function (ECertificateIssueType) {
    ECertificateIssueType["Assigned"] = "Assigned";
    ECertificateIssueType["OptedIn"] = "OptedIn";
    ECertificateIssueType["Purchased"] = "Purchased";
})(ECertificateIssueType = exports.ECertificateIssueType || (exports.ECertificateIssueType = {}));
/** The types of Profile handled by the web service. */
var CompanyProfileTypeType;
(function (CompanyProfileTypeType) {
    CompanyProfileTypeType["Agent"] = "Agent";
    CompanyProfileTypeType["Company"] = "Company";
    CompanyProfileTypeType["Group"] = "Group";
    CompanyProfileTypeType["Source"] = "Source";
})(CompanyProfileTypeType = exports.CompanyProfileTypeType || (exports.CompanyProfileTypeType = {}));
/** Module where this delivery type will be used. Example : EFolio Export, EInvoice , Fiscal, etc.. */
var ProfileDeliveryModuleType;
(function (ProfileDeliveryModuleType) {
    ProfileDeliveryModuleType["EfolioExport"] = "EfolioExport";
})(ProfileDeliveryModuleType = exports.ProfileDeliveryModuleType || (exports.ProfileDeliveryModuleType = {}));
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
/** Flag indicating whether Profile is Enrolled to Primary Membership Program. */
var ProfileAllowedActionType;
(function (ProfileAllowedActionType) {
    ProfileAllowedActionType["NameChange"] = "NameChange";
    ProfileAllowedActionType["TaxIDChange"] = "TaxIDChange";
    ProfileAllowedActionType["EnrollToPrimaryMembership"] = "EnrollToPrimaryMembership";
})(ProfileAllowedActionType = exports.ProfileAllowedActionType || (exports.ProfileAllowedActionType = {}));
/** The types of Profile handled by the web service. */
var GuestProfileTypeType;
(function (GuestProfileTypeType) {
    GuestProfileTypeType["Guest"] = "Guest";
    GuestProfileTypeType["Employee"] = "Employee";
    GuestProfileTypeType["Contact"] = "Contact";
})(GuestProfileTypeType = exports.GuestProfileTypeType || (exports.GuestProfileTypeType = {}));
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
        this.instance = axios_1.default.create(Object.assign(Object.assign({}, axiosConfig), { baseURL: new URL('/crm/v1', axiosConfig.baseURL).toString() }));
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
 * @title OPERA Cloud Customer Relationship Management API
 * @version 21.5.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /crm/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 21.5.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
class Api extends HttpClient {
    constructor() {
        super(...arguments);
        this.companies = {
            /**
             * @description When a profile doesn't already exist for a guest, use this to create a new profile.  The response will provide the newly created profile's OPERA ID. There are many fields in postProfile defined by ListOfValues; ensure you have reviewed ListOfValues APIs in order successfully to use postProfile. <p><strong>OperationId:</strong>postCompanyProfile</p>
             *
             * @tags Profile
             * @name PostCompanyProfile
             * @summary This API facilitates creation of a company/agent/group/source profile in OPERA.
             * @request POST:/companies
             */
            postCompanyProfile: (hotelId, company, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/companies`, method: 'POST', body: company, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this to retrieve a specific Company, Travel Agent, Group or Source profile. You must know the corporate ID of the profile for the request API. <p><strong>OperationId:</strong>getCompanyProfile</p>
             *
             * @tags Profile
             * @name GetCompanyProfile
             * @summary Get company profile by corporate ID
             * @request GET:/companies/{corporateID}
             */
            getCompanyProfile: (hotelId, corporateId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/companies/${corporateId}`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.externalSystems = {
            /**
             * @description When a reservation is booked via an external system, you would use this API to retrieve a reservation using the external ID in the request <p><strong>OperationId:</strong>getProfileByExtId</p>
             *
             * @tags Profile
             * @name GetProfileByExtId
             * @summary Get profile by external ID
             * @request GET:/externalSystems/{extSystemCode}/profiles/{profileExternalId}
             */
            getProfileByExtId: (hotelId, profileExternalId, extSystemCode, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/externalSystems/${extSystemCode}/profiles/${profileExternalId}`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.guests = {
            /**
             * @description When a profile doesn't already exist for a guest, use this to create a new profile.  The response will provide the newly created profile's OPERA ID. There are many fields in postProfile defined by ListOfValues; ensure you have reviewed ListOfValues APIs in order successfully to use postProfile. <p><strong>OperationId:</strong>postGuestProfile</p>
             *
             * @tags Profile
             * @name PostGuestProfile
             * @summary Create a guest, contact or employee profile in OPERA
             * @request POST:/guests
             */
            postGuestProfile: (hotelId, guest, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/guests`, method: 'POST', body: guest, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to retrieve all data stored for a guest Profile, such as their address, phone number, preferences. You must already know the guests Profile ID. If you don’t know the profile ID, first use the API getGuests to find the profile ID. <p><strong>OperationId:</strong>getGuestProfile</p>
             *
             * @tags Profile
             * @name GetGuestProfile
             * @summary Get guest profile by guest ID
             * @request GET:/guests/{guestId}
             */
            getGuestProfile: (hotelId, guestId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/guests/${guestId}`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.profileListOfValues = {
            /**
             * @description Use this API to fetch the available preferences List Of Values for profiles <p><strong>OperationId:</strong>getAvailablePreferences</p>
             *
             * @tags ProfileLOV
             * @name GetAvailablePreferences
             * @summary Get available preferences
             * @request GET:/profileListOfValues/availablePreferences
             */
            getAvailablePreferences: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/profileListOfValues/availablePreferences`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.profiles = {
            /**
             * @description Use this API when you want to search for a profile as part of a booking process or to manage a profile data. The response will include a list of profiles that exist in OPERA, based on your search criteria.  For example, you want to see if a profile for Mr David Smith exists - you can search by various criteria, such as first name, last name, email.  The response will include a list of any profiles that exist for Mr David Smith.  If a profile matches the criteria, and you want to get more details of that profile, proceed to use getProfile with the profileId in the request. Maximum response data limit is 1000 records, so use more query parameters to narrow your results. This API is not designed to support sync between two systems or initial upload of data.<p><strong>OperationId:</strong>getProfiles</p>
             *
             * @tags Profile
             * @name GetProfiles
             * @summary Search for profile(s)
             * @request GET:/profiles
             */
            getProfiles: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/profiles`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description When a profile doesn&apos;t already exist in OPERA, use this to create a new profile. The response will provide the newly created profile&apos;s OPERA ID in the Location header. There are many fields in postProfile defined by ListOfValues; ensure you have reviewed ListOfValues APIs in order successfully to use postProfile.<p><strong>OperationId:</strong>postProfile</p>
             *
             * @tags Profile
             * @name PostProfile
             * @summary Create a profile
             * @request POST:/profiles
             */
            postProfile: (hotelId, profile, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/profiles`, method: 'POST', body: profile, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to retrieve a specific profile&apos;s detail information using OPERA&apos;s profileId. You can retrieve any type of profile including guest, travel agent, company, source, group, or contact. If you do not know OPERA profileID, use getProfiles or getProfileByExtId API first to get OPERA profileId.<p><strong>OperationId:</strong>getProfile</p>
             *
             * @tags Profile
             * @name GetProfile
             * @summary Get profile by ID
             * @request GET:/profiles/{profileId}
             */
            getProfile: (hotelId, profileId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/profiles/${profileId}`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this to update a guests details on their profile.  You will need to know the OPERA Profile ID to use this API, and you will also need to know the List of Values for profile fields, such as AddressType, PhoneType, Title.  <p><strong>OperationId:</strong>putProfile</p>
             *
             * @tags Profile
             * @name PutProfile
             * @summary Update a profile by ID
             * @request PUT:/profiles/{profileId}
             */
            putProfile: (hotelId, profileId, profile, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/profiles/${profileId}`, method: 'PUT', body: profile, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use deleteProfile to inactivate and remove a profile from OPERA. The profile will stay in the Database, until a nightly purge process is run to remove profile details from the OPERA database. <p><strong>OperationId:</strong>deleteProfile</p>
             *
             * @tags Profile
             * @name DeleteProfile
             * @summary Forget or delete a profile by ID
             * @request DELETE:/profiles/{profileId}
             */
            deleteProfile: (hotelId, profileId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/profiles/${profileId}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create a new Email in OPERA.  You would need to know the Profile Id such as Contact or Account. <p><strong>OperationId:</strong>storeEmail</p>
             *
             * @tags Profile
             * @name StoreEmail
             * @summary Create an Email.
             * @request POST:/profiles/{profileId}/emails
             */
            storeEmail: (hotelId, profileId, emailMessageType, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/profiles/${profileId}/emails`, method: 'POST', body: emailMessageType, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getProfileRelationships</p>
             *
             * @tags Profile
             * @name GetProfileRelationships
             * @summary FetchProfileRelationships method provides the ability to retrieve a profile relationships for a profile based on the unique internal profile ID specified.
             * @request GET:/profiles/{profileId}/relationships
             */
            getProfileRelationships: (hotelId, profileId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/profiles/${profileId}/relationships`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getStayHistory</p>
             *
             * @tags Profile
             * @name GetStayHistory
             * @summary FetchStayHistory method provides stay history and future reservations of a profile based on the unique internal ID specified.
             * @request GET:/profiles/{profileId}/stayHistory
             */
            getStayHistory: (hotelId, profileId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/profiles/${profileId}/stayHistory`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>postProfileRelationship</p>
             *
             * @tags Profile
             * @name PostProfileRelationship
             * @summary CreateProfileRelationship method provides the ability to create profile relationship based on the request criteria of SourceProfileID,TargetProfileID and SourceRelationType specified.
             * @request POST:/profiles/{sourceProfileId}/relationships/{targetProfileId}
             */
            postProfileRelationship: (hotelId, targetProfileId, sourceProfileId, profileRelationship, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/profiles/${sourceProfileId}/relationships/${targetProfileId}`, method: 'POST', body: profileRelationship, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>putProfileRelationship</p>
             *
             * @tags Profile
             * @name PutProfileRelationship
             * @summary ChangeProfileRelationship method provides the ability to update(delete and add) profile relationship based on the request criteria of SourceProfileID , TargetProfileID, To Be ChangedProfileID and SourceProfileRelationType specified.
             * @request PUT:/profiles/{sourceProfileId}/relationships/{targetProfileId}
             */
            putProfileRelationship: (hotelId, targetProfileId, sourceProfileId, profileRelationshipToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/profiles/${sourceProfileId}/relationships/${targetProfileId}`, method: 'PUT', body: profileRelationshipToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>removeProfileRelationship</p>
             *
             * @tags Profile
             * @name RemoveProfileRelationship
             * @summary DeleteProfileRelationship method provides the ability to delete profile relationship based on the request criteria of SourceProfileID,TargetProfileID and SourceRelationType specified.
             * @request DELETE:/profiles/{sourceProfileId}/relationships/{targetProfileId}
             */
            removeProfileRelationship: (hotelId, targetProfileId, sourceProfileId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/profiles/${sourceProfileId}/relationships/${targetProfileId}`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description When you need to merge 2 guest profiles into 1 profile, use this API. <p><strong>OperationId:</strong>mergeProfiles</p>
             *
             * @tags Profile
             * @name MergeProfiles
             * @summary Merge two profiles by ID
             * @request POST:/profiles/{survivorProfileId}/merges
             */
            mergeProfiles: (hotelId, survivorProfileId, profileToBeMerged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/profiles/${survivorProfileId}/merges`, method: 'POST', body: profileToBeMerged, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
    }
}
exports.Api = Api;
