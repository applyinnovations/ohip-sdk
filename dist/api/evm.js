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
exports.Api = exports.HttpClient = exports.ContentType = exports.RestrictionStatusesType = exports.UsedInModuleType = exports.StatisticsSummaryType = exports.ResourceDiscountTypeType = exports.ApplyEventAttendeesChangesToEventsType = exports.BlockProfileTypeType = exports.PMSResStatusType = exports.ResProfileTypeType = exports.GuestHousekeepingServiceRequestType = exports.ProfileTypeType = exports.ProfileStatusType = exports.ImageStyleType = exports.BlockOwnershipType = exports.PersonNameTypeType = exports.BlockClassificationType = exports.RateProtectionType = exports.BlockStatusTypeType = exports.ResourceType = exports.MasterType = exports.MasterInfoCodeDetailType = exports.CateringStatusTypeType = exports.StatusColorType = exports.CateringEventLinkTypeType = void 0;
/** A collection of supported list of link types for catering events. */
var CateringEventLinkTypeType;
(function (CateringEventLinkTypeType) {
    CateringEventLinkTypeType["SubEvent"] = "SubEvent";
    CateringEventLinkTypeType["Alternate"] = "Alternate";
})(CateringEventLinkTypeType = exports.CateringEventLinkTypeType || (exports.CateringEventLinkTypeType = {}));
/** Status code color configuration type. */
var StatusColorType;
(function (StatusColorType) {
    StatusColorType["White"] = "White";
    StatusColorType["Red"] = "Red";
    StatusColorType["Blue"] = "Blue";
    StatusColorType["Cyan"] = "Cyan";
    StatusColorType["Magenta"] = "Magenta";
    StatusColorType["Green"] = "Green";
    StatusColorType["Brown"] = "Brown";
    StatusColorType["Black"] = "Black";
    StatusColorType["Yellow"] = "Yellow";
    StatusColorType["Gray"] = "Gray";
})(StatusColorType = exports.StatusColorType || (exports.StatusColorType = {}));
/** List of Event Status Types to identify the current status of catering events. */
var CateringStatusTypeType;
(function (CateringStatusTypeType) {
    CateringStatusTypeType["Waitlist"] = "Waitlist";
    CateringStatusTypeType["Regret"] = "Regret";
    CateringStatusTypeType["Inquiry"] = "Inquiry";
    CateringStatusTypeType["Cancel"] = "Cancel";
    CateringStatusTypeType["Actual"] = "Actual";
    CateringStatusTypeType["Referral"] = "Referral";
    CateringStatusTypeType["Lost"] = "Lost";
})(CateringStatusTypeType = exports.CateringStatusTypeType || (exports.CateringStatusTypeType = {}));
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
/** List of resource types. */
var ResourceType;
(function (ResourceType) {
    ResourceType["FunctionSpace"] = "FunctionSpace";
    ResourceType["Menu"] = "Menu";
    ResourceType["Item"] = "Item";
})(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
/** Simple type for specifying the block status type. */
var BlockStatusTypeType;
(function (BlockStatusTypeType) {
    BlockStatusTypeType["Inquiry"] = "Inquiry";
    BlockStatusTypeType["Actual"] = "Actual";
    BlockStatusTypeType["Waitlist"] = "Waitlist";
    BlockStatusTypeType["Cancel"] = "Cancel";
    BlockStatusTypeType["Referral"] = "Referral";
})(BlockStatusTypeType = exports.BlockStatusTypeType || (exports.BlockStatusTypeType = {}));
/** Simple type for specifying the block protection type. */
var RateProtectionType;
(function (RateProtectionType) {
    RateProtectionType["All"] = "All";
    RateProtectionType["Selected"] = "Selected";
    RateProtectionType["None"] = "None";
})(RateProtectionType = exports.RateProtectionType || (exports.RateProtectionType = {}));
/** Simple type for block instructions to be used in requests for fetching blocks. Valid status values are MASTER_BLOCK, MASTER_TOUR, FIT_MASTER, MASTER_ALLOCATION, MASTER_ITINERARY, LEAD_MASTER, REGULAR_BOOKING, SUB_BLOCK, SUB_TOUR, FIT_CONTRACT, SUB_ALLOCATION, SUB_ITINERARY, LEAD. */
var BlockClassificationType;
(function (BlockClassificationType) {
    BlockClassificationType["MasterBlock"] = "MasterBlock";
    BlockClassificationType["MasterTour"] = "MasterTour";
    BlockClassificationType["MasterAllocation"] = "MasterAllocation";
    BlockClassificationType["MasterItinerary"] = "MasterItinerary";
    BlockClassificationType["LeadMaster"] = "LeadMaster";
    BlockClassificationType["RegularBooking"] = "RegularBooking";
    BlockClassificationType["SubBlock"] = "SubBlock";
    BlockClassificationType["SubTour"] = "SubTour";
    BlockClassificationType["FitContract"] = "FitContract";
    BlockClassificationType["SubAllocation"] = "SubAllocation";
    BlockClassificationType["SubItinerary"] = "SubItinerary";
    BlockClassificationType["Lead"] = "Lead";
    BlockClassificationType["FitMaster"] = "FitMaster";
})(BlockClassificationType = exports.BlockClassificationType || (exports.BlockClassificationType = {}));
/** Person's name in an external system. */
var PersonNameTypeType;
(function (PersonNameTypeType) {
    PersonNameTypeType["Primary"] = "Primary";
    PersonNameTypeType["Alternate"] = "Alternate";
    PersonNameTypeType["Incognito"] = "Incognito";
    PersonNameTypeType["External"] = "External";
    PersonNameTypeType["Phonetic"] = "Phonetic";
})(PersonNameTypeType = exports.PersonNameTypeType || (exports.PersonNameTypeType = {}));
/** Specifies the type of the owner associated with the business block(Block/Rooms/Catering). */
var BlockOwnershipType;
(function (BlockOwnershipType) {
    BlockOwnershipType["Block"] = "Block";
    BlockOwnershipType["Rooms"] = "Rooms";
    BlockOwnershipType["Catering"] = "Catering";
})(BlockOwnershipType = exports.BlockOwnershipType || (exports.BlockOwnershipType = {}));
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
/** Simple type for block profile types. */
var BlockProfileTypeType;
(function (BlockProfileTypeType) {
    BlockProfileTypeType["Company"] = "Company";
    BlockProfileTypeType["Group"] = "Group";
    BlockProfileTypeType["Agent"] = "Agent";
    BlockProfileTypeType["Source"] = "Source";
    BlockProfileTypeType["CompanyContact"] = "CompanyContact";
    BlockProfileTypeType["AgentContact"] = "AgentContact";
    BlockProfileTypeType["SourceContact"] = "SourceContact";
})(BlockProfileTypeType = exports.BlockProfileTypeType || (exports.BlockProfileTypeType = {}));
/** Non-Pkg Events on the same date. */
var ApplyEventAttendeesChangesToEventsType;
(function (ApplyEventAttendeesChangesToEventsType) {
    ApplyEventAttendeesChangesToEventsType["All"] = "All";
    ApplyEventAttendeesChangesToEventsType["None"] = "None";
    ApplyEventAttendeesChangesToEventsType["Same"] = "Same";
    ApplyEventAttendeesChangesToEventsType["NonPackage"] = "NonPackage";
    ApplyEventAttendeesChangesToEventsType["MatchingNonPackage"] = "MatchingNonPackage";
    ApplyEventAttendeesChangesToEventsType["Package"] = "Package";
    ApplyEventAttendeesChangesToEventsType["Date"] = "Date";
})(ApplyEventAttendeesChangesToEventsType = exports.ApplyEventAttendeesChangesToEventsType || (exports.ApplyEventAttendeesChangesToEventsType = {}));
/** Indicates the option to select resources that will be discounted with the Resource Discount Percentage. */
var ResourceDiscountTypeType;
(function (ResourceDiscountTypeType) {
    ResourceDiscountTypeType["AllDiscountableResources"] = "AllDiscountableResources";
    ResourceDiscountTypeType["ResourcesWithSameDiscountPercentage"] = "ResourcesWithSameDiscountPercentage";
    ResourceDiscountTypeType["AllDiscountableItems"] = "AllDiscountableItems";
    ResourceDiscountTypeType["ItemsWithSameDiscountPercentage"] = "ItemsWithSameDiscountPercentage";
    ResourceDiscountTypeType["AllDiscountableMenusAndMenuItems"] = "AllDiscountableMenusAndMenuItems";
    ResourceDiscountTypeType["MenusAndMenuItemsWithSameDiscountPercentage"] = "MenusAndMenuItemsWithSameDiscountPercentage";
    ResourceDiscountTypeType["AllDiscountableSpaces"] = "AllDiscountableSpaces";
    ResourceDiscountTypeType["SpacesWithSameDiscountPercentage"] = "SpacesWithSameDiscountPercentage";
    ResourceDiscountTypeType["None"] = "None";
})(ResourceDiscountTypeType = exports.ResourceDiscountTypeType || (exports.ResourceDiscountTypeType = {}));
/** Type of statistic for which summary information is populated. */
var StatisticsSummaryType;
(function (StatisticsSummaryType) {
    StatisticsSummaryType["Potential"] = "Potential";
    StatisticsSummaryType["Actual"] = "Actual";
    StatisticsSummaryType["Variance"] = "Variance";
})(StatisticsSummaryType = exports.StatisticsSummaryType || (exports.StatisticsSummaryType = {}));
/** Simple type for indicating the module for which user wants to create the SellMessage. Valid module types are Look To Book Sales,Reservations,Blocks,Function Diary and Group Rooms Control. */
var UsedInModuleType;
(function (UsedInModuleType) {
    UsedInModuleType["Blocks"] = "Blocks";
    UsedInModuleType["Reservations"] = "Reservations";
    UsedInModuleType["FunctionDiary"] = "FunctionDiary";
    UsedInModuleType["LookToBookSales"] = "LookToBookSales";
    UsedInModuleType["GroupRoomsControl"] = "GroupRoomsControl";
})(UsedInModuleType = exports.UsedInModuleType || (exports.UsedInModuleType = {}));
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
        this.instance = axios_1.default.create(Object.assign(Object.assign({}, axiosConfig), { baseURL: new URL('/evm/v1', axiosConfig.baseURL).toString() }));
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
 * @title OPERA Cloud Sales Event Management API
 * @version 21.5.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /evm/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 21.5.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
class Api extends HttpClient {
    constructor() {
        super(...arguments);
        this.events = {
            /**
             * @description This API fetches catering events for multiple hotels, based on search criteria such as dates, linked block, status, function space, and more. The data returned in the result contains, event type, description, dates and times, attendees, function space, setup style and more. <p><strong>OperationId:</strong>getEventsMultipleHotels</p>
             *
             * @tags EventManagement
             * @name GetEventsMultipleHotels
             * @summary Get Events
             * @request GET:/events
             */
            getEventsMultipleHotels: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/events`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.hotels = {
            /**
             * @description This API fetches catering events for a specific hotel, based on search criteria such as dates, linked block, status, function space, and more. The data returned in the result contains, event type, description, dates and times, attendees, function space, setup style and more. <p><strong>OperationId:</strong>getEventsOneHotel</p>
             *
             * @tags EventManagement
             * @name GetEventsOneHotel
             * @summary Get Events
             * @request GET:/hotels/{hotelId}/events
             */
            getEventsOneHotel: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/events`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API will allow you to retrieve the details of one event by specifying the event ID in the path. Event details such as event type, event description, start date / time and end date time, attendees, function space, setup style, function space rate, and more  will be returned. You can also add fetch instructions to specify what additional event data, such as block information, revenue information, event notes, and master / sub event information you would like returned in the response. If you don&apos;t know the eventID, please use getEvents API to find the event and its respective eventID. <p><strong>OperationId:</strong>getEvent</p>
             *
             * @tags EventManagement
             * @name GetEvent
             * @summary Get an Event
             * @request GET:/hotels/{hotelId}/events/{eventId}
             */
            getEvent: (eventId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/events/${eventId}`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
    }
}
exports.Api = Api;
