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
exports.Api = exports.HttpClient = exports.ContentType = exports.StatisticsReportType = exports.StayReservationType = exports.MemberAwardProcessType = exports.ClaimApprovalStatusType = exports.ClaimRecordType = exports.ClaimSourceType = exports.ExternalStatusType = exports.StagedAddressCleansStatus = exports.StagedProfileErrorField = exports.ColorType = exports.CompanyProfileTypeType = exports.GuestProfileTypeType = exports.MasterType = exports.MasterInfoCodeDetailType = exports.ProfileAllowedActionType = exports.ProfileSharedLevelType = exports.ECertificateIssueType = exports.ECertificateStatusType = exports.ECertificateScopeType = exports.ECertificateIssueSourceType = exports.ECertificateConsumeSourceType = exports.ImageStyleType = exports.ProfileTypeType = exports.NameTypeType = exports.TurndownStatusType = exports.ResAccessRestrictionType = exports.CommissionPayoutToType = exports.CommunicationStatusType = exports.ReservationAllowedActionType = exports.GuestHousekeepingServiceRequestType = exports.CardTypeType = exports.CardProcessingType = exports.CardNumberTypeType = exports.HotelInterfaceStatusType = exports.HotelInterfaceTypeType = exports.PMSResStatusType = exports.ResProfileTypeType = exports.HousekeepingRoomStatusType = exports.ProfileStatusType = exports.CardReIssueType = exports.MembershipEarningPreferenceType = exports.DowngradeType = exports.TierAdministrationType = exports.PersonNameTypeType = exports.AnonymizationStatusType = void 0;
/** Guest has been anonymized. */
var AnonymizationStatusType;
(function (AnonymizationStatusType) {
    AnonymizationStatusType["Requested"] = "Requested";
    AnonymizationStatusType["Anonymized"] = "Anonymized";
})(AnonymizationStatusType = exports.AnonymizationStatusType || (exports.AnonymizationStatusType = {}));
/** Person's name in an external system. */
var PersonNameTypeType;
(function (PersonNameTypeType) {
    PersonNameTypeType["Primary"] = "Primary";
    PersonNameTypeType["Alternate"] = "Alternate";
    PersonNameTypeType["Incognito"] = "Incognito";
    PersonNameTypeType["External"] = "External";
    PersonNameTypeType["Phonetic"] = "Phonetic";
})(PersonNameTypeType = exports.PersonNameTypeType || (exports.PersonNameTypeType = {}));
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
/** The earning preference of a membership, it depends on the type of property. eg. when the property is a airline it should be Miles, other than Points. */
var MembershipEarningPreferenceType;
(function (MembershipEarningPreferenceType) {
    MembershipEarningPreferenceType["Points"] = "Points";
    MembershipEarningPreferenceType["Miles"] = "Miles";
})(MembershipEarningPreferenceType = exports.MembershipEarningPreferenceType || (exports.MembershipEarningPreferenceType = {}));
/** Request to re issue a new card. */
var CardReIssueType;
(function (CardReIssueType) {
    CardReIssueType["Pending"] = "Pending";
    CardReIssueType["NotApplicable"] = "NotApplicable";
    CardReIssueType["Requested"] = "Requested";
})(CardReIssueType = exports.CardReIssueType || (exports.CardReIssueType = {}));
var ProfileStatusType;
(function (ProfileStatusType) {
    ProfileStatusType["Active"] = "Active";
    ProfileStatusType["Inactive"] = "Inactive";
})(ProfileStatusType = exports.ProfileStatusType || (exports.ProfileStatusType = {}));
/** Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService. */
var HousekeepingRoomStatusType;
(function (HousekeepingRoomStatusType) {
    HousekeepingRoomStatusType["Clean"] = "Clean";
    HousekeepingRoomStatusType["Dirty"] = "Dirty";
    HousekeepingRoomStatusType["Pickup"] = "Pickup";
    HousekeepingRoomStatusType["Inspected"] = "Inspected";
    HousekeepingRoomStatusType["OutOfOrder"] = "OutOfOrder";
    HousekeepingRoomStatusType["OutOfService"] = "OutOfService";
})(HousekeepingRoomStatusType = exports.HousekeepingRoomStatusType || (exports.HousekeepingRoomStatusType = {}));
var ResProfileTypeType;
(function (ResProfileTypeType) {
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
/** Simple type for indicating if credit card number is tokenized. */
var CardNumberTypeType;
(function (CardNumberTypeType) {
    CardNumberTypeType["CardNumber"] = "CardNumber";
    CardNumberTypeType["Token"] = "Token";
})(CardNumberTypeType = exports.CardNumberTypeType || (exports.CardNumberTypeType = {}));
var CardProcessingType;
(function (CardProcessingType) {
    CardProcessingType["Eft"] = "Eft";
    CardProcessingType["Manual"] = "Manual";
})(CardProcessingType = exports.CardProcessingType || (exports.CardProcessingType = {}));
/** This is required for Credit Card Payment Methods. This indicates the type of Credit Card associated with this payment method. */
var CardTypeType;
(function (CardTypeType) {
    CardTypeType["Ab"] = "Ab";
    CardTypeType["Am"] = "Am";
    CardTypeType["Ax"] = "Ax";
    CardTypeType["Cb"] = "Cb";
    CardTypeType["Dc"] = "Dc";
    CardTypeType["Ds"] = "Ds";
    CardTypeType["Dt"] = "Dt";
    CardTypeType["Ec"] = "Ec";
    CardTypeType["Er"] = "Er";
    CardTypeType["Jc"] = "Jc";
    CardTypeType["Jl"] = "Jl";
    CardTypeType["Mc"] = "Mc";
    CardTypeType["Nb"] = "Nb";
    CardTypeType["So"] = "So";
    CardTypeType["St"] = "St";
    CardTypeType["Sw"] = "Sw";
    CardTypeType["Va"] = "Va";
    CardTypeType["Xy"] = "Xy";
    CardTypeType["Zz"] = "Zz";
    CardTypeType["Cp"] = "Cp";
    CardTypeType["Cu"] = "Cu";
})(CardTypeType = exports.CardTypeType || (exports.CardTypeType = {}));
/** Possible values for the Guest Service Status. */
var GuestHousekeepingServiceRequestType;
(function (GuestHousekeepingServiceRequestType) {
    GuestHousekeepingServiceRequestType["DoNotDisturb"] = "DoNotDisturb";
    GuestHousekeepingServiceRequestType["MakeUpRoom"] = "MakeUpRoom";
    GuestHousekeepingServiceRequestType["NoStatusSelected"] = "NoStatusSelected";
})(GuestHousekeepingServiceRequestType = exports.GuestHousekeepingServiceRequestType || (exports.GuestHousekeepingServiceRequestType = {}));
/** Flag indicating whether the Enrollment is in progress or not for the Profile associated with this Reservation. */
var ReservationAllowedActionType;
(function (ReservationAllowedActionType) {
    ReservationAllowedActionType["Cancel"] = "Cancel";
    ReservationAllowedActionType["Move"] = "Move";
    ReservationAllowedActionType["PreCharge"] = "PreCharge";
    ReservationAllowedActionType["PostCharge"] = "PostCharge";
    ReservationAllowedActionType["FacilitySchedule"] = "FacilitySchedule";
    ReservationAllowedActionType["Upsell"] = "Upsell";
    ReservationAllowedActionType["PreCheckIn"] = "PreCheckIn";
    ReservationAllowedActionType["PostToNoShowCancel"] = "PostToNoShowCancel";
    ReservationAllowedActionType["NoShow"] = "NoShow";
    ReservationAllowedActionType["NameChange"] = "NameChange";
    ReservationAllowedActionType["Discount"] = "Discount";
    ReservationAllowedActionType["EnrollToPrimaryMembership"] = "EnrollToPrimaryMembership";
    ReservationAllowedActionType["EnrollInProgress"] = "EnrollInProgress";
})(ReservationAllowedActionType = exports.ReservationAllowedActionType || (exports.ReservationAllowedActionType = {}));
/** Enum to denote the Status of Readiness messages sent to Guest Devices. */
var CommunicationStatusType;
(function (CommunicationStatusType) {
    CommunicationStatusType["Pending"] = "Pending";
    CommunicationStatusType["Completed"] = "Completed";
    CommunicationStatusType["Failed"] = "Failed";
    CommunicationStatusType["Sent"] = "Sent";
    CommunicationStatusType["Received"] = "Received";
    CommunicationStatusType["Cancelled"] = "Cancelled";
    CommunicationStatusType["PendingAvailability"] = "PendingAvailability";
})(CommunicationStatusType = exports.CommunicationStatusType || (exports.CommunicationStatusType = {}));
var CommissionPayoutToType;
(function (CommissionPayoutToType) {
    CommissionPayoutToType["TravelAgent"] = "TravelAgent";
    CommissionPayoutToType["Source"] = "Source";
    CommissionPayoutToType["TravelAgentSource"] = "TravelAgentSource";
    CommissionPayoutToType["None"] = "None";
})(CommissionPayoutToType = exports.CommissionPayoutToType || (exports.CommissionPayoutToType = {}));
/** Indicates any Updates/Changes on the reservation as well as Reservation Cancellation are not allowed. */
var ResAccessRestrictionType;
(function (ResAccessRestrictionType) {
    ResAccessRestrictionType["Change"] = "Change";
    ResAccessRestrictionType["Cancel"] = "Cancel";
    ResAccessRestrictionType["ChangeOrCancel"] = "ChangeOrCancel";
})(ResAccessRestrictionType = exports.ResAccessRestrictionType || (exports.ResAccessRestrictionType = {}));
/** Simple type for turndown status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Required, Not Required and Completed. */
var TurndownStatusType;
(function (TurndownStatusType) {
    TurndownStatusType["Required"] = "Required";
    TurndownStatusType["NotRequired"] = "NotRequired";
    TurndownStatusType["Compeleted"] = "Compeleted";
})(TurndownStatusType = exports.TurndownStatusType || (exports.TurndownStatusType = {}));
var NameTypeType;
(function (NameTypeType) {
    NameTypeType["Guest"] = "Guest";
    NameTypeType["Company"] = "Company";
    NameTypeType["Agent"] = "Agent";
    NameTypeType["Contact"] = "Contact";
    NameTypeType["Source"] = "Source";
    NameTypeType["Group"] = "Group";
    NameTypeType["Employee"] = "Employee";
    NameTypeType["Hotel"] = "Hotel";
    NameTypeType["Purge"] = "Purge";
})(NameTypeType = exports.NameTypeType || (exports.NameTypeType = {}));
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
/** Indicates that OPERA E-Certificate is consumed by hotelPMS. */
var ECertificateConsumeSourceType;
(function (ECertificateConsumeSourceType) {
    ECertificateConsumeSourceType["Central"] = "Central";
    ECertificateConsumeSourceType["Web"] = "Web";
    ECertificateConsumeSourceType["Hotel"] = "Hotel";
})(ECertificateConsumeSourceType = exports.ECertificateConsumeSourceType || (exports.ECertificateConsumeSourceType = {}));
/** Indicates that OPERA E-Certificate is issued by external system. */
var ECertificateIssueSourceType;
(function (ECertificateIssueSourceType) {
    ECertificateIssueSourceType["Opera"] = "Opera";
    ECertificateIssueSourceType["Web"] = "Web";
    ECertificateIssueSourceType["Interface"] = "Interface";
})(ECertificateIssueSourceType = exports.ECertificateIssueSourceType || (exports.ECertificateIssueSourceType = {}));
/** Indicates that OPERA E-Certificate is available for a specific list of hotels. */
var ECertificateScopeType;
(function (ECertificateScopeType) {
    ECertificateScopeType["Global"] = "Global";
    ECertificateScopeType["Hotel"] = "Hotel";
    ECertificateScopeType["MultiHotel"] = "MultiHotel";
})(ECertificateScopeType = exports.ECertificateScopeType || (exports.ECertificateScopeType = {}));
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
/** Indicates that guest purchased OPERA E-Certificate. */
var ECertificateIssueType;
(function (ECertificateIssueType) {
    ECertificateIssueType["Assigned"] = "Assigned";
    ECertificateIssueType["OptedIn"] = "OptedIn";
    ECertificateIssueType["Purchased"] = "Purchased";
})(ECertificateIssueType = exports.ECertificateIssueType || (exports.ECertificateIssueType = {}));
/** Simple types for Shared level. */
var ProfileSharedLevelType;
(function (ProfileSharedLevelType) {
    ProfileSharedLevelType["Global"] = "Global";
    ProfileSharedLevelType["Property"] = "Property";
    ProfileSharedLevelType["Cro"] = "Cro";
})(ProfileSharedLevelType = exports.ProfileSharedLevelType || (exports.ProfileSharedLevelType = {}));
/** Flag indicating whether Profile is Enrolled to Primary Membership Program. */
var ProfileAllowedActionType;
(function (ProfileAllowedActionType) {
    ProfileAllowedActionType["NameChange"] = "NameChange";
    ProfileAllowedActionType["TaxIDChange"] = "TaxIDChange";
    ProfileAllowedActionType["EnrollToPrimaryMembership"] = "EnrollToPrimaryMembership";
})(ProfileAllowedActionType = exports.ProfileAllowedActionType || (exports.ProfileAllowedActionType = {}));
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
    MasterType["Block"] = "Block";
})(MasterType = exports.MasterType || (exports.MasterType = {}));
/** The types of Profile handled by the web service. */
var GuestProfileTypeType;
(function (GuestProfileTypeType) {
    GuestProfileTypeType["Guest"] = "Guest";
    GuestProfileTypeType["Employee"] = "Employee";
    GuestProfileTypeType["Contact"] = "Contact";
})(GuestProfileTypeType = exports.GuestProfileTypeType || (exports.GuestProfileTypeType = {}));
/** The types of Profile handled by the web service. */
var CompanyProfileTypeType;
(function (CompanyProfileTypeType) {
    CompanyProfileTypeType["Agent"] = "Agent";
    CompanyProfileTypeType["Company"] = "Company";
    CompanyProfileTypeType["Group"] = "Group";
    CompanyProfileTypeType["Source"] = "Source";
})(CompanyProfileTypeType = exports.CompanyProfileTypeType || (exports.CompanyProfileTypeType = {}));
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
/** Simple type for stage profile error filed to specify which filed in the stage profile has error. */
var StagedProfileErrorField;
(function (StagedProfileErrorField) {
    StagedProfileErrorField["PrimaryLanguage"] = "PrimaryLanguage";
    StagedProfileErrorField["AlternateLanguag"] = "AlternateLanguag";
    StagedProfileErrorField["Gender"] = "Gender";
    StagedProfileErrorField["ProfileType"] = "ProfileType";
    StagedProfileErrorField["Nationality"] = "Nationality";
    StagedProfileErrorField["Prefix"] = "Prefix";
    StagedProfileErrorField["VIPStatus"] = "VIPStatus";
})(StagedProfileErrorField = exports.StagedProfileErrorField || (exports.StagedProfileErrorField = {}));
/** Simple type for status of staged address cleansing. */
var StagedAddressCleansStatus;
(function (StagedAddressCleansStatus) {
    StagedAddressCleansStatus["NotCleansed"] = "NotCleansed";
    StagedAddressCleansStatus["Cleansed"] = "Cleansed";
    StagedAddressCleansStatus["Failure"] = "Failure";
})(StagedAddressCleansStatus = exports.StagedAddressCleansStatus || (exports.StagedAddressCleansStatus = {}));
/** Success return when there is no error and operation is successful. */
var ExternalStatusType;
(function (ExternalStatusType) {
    ExternalStatusType["NotEnoughCriteria"] = "NotEnoughCriteria";
    ExternalStatusType["IgnoredUnsupportedCriteria"] = "IgnoredUnsupportedCriteria";
    ExternalStatusType["ExternalError"] = "ExternalError";
    ExternalStatusType["CommunicationError"] = "CommunicationError";
    ExternalStatusType["Success"] = "Success";
})(ExternalStatusType = exports.ExternalStatusType || (exports.ExternalStatusType = {}));
/** Source of the membership claim. */
var ClaimSourceType;
(function (ClaimSourceType) {
    ClaimSourceType["Ocis"] = "Ocis";
    ClaimSourceType["Opms"] = "Opms";
    ClaimSourceType["Web"] = "Web";
})(ClaimSourceType = exports.ClaimSourceType || (exports.ClaimSourceType = {}));
/** Record Type associated with a claim. */
var ClaimRecordType;
(function (ClaimRecordType) {
    ClaimRecordType["Stay"] = "Stay";
    ClaimRecordType["Other"] = "Other";
    ClaimRecordType["LimitedAdjustment"] = "LimitedAdjustment";
})(ClaimRecordType = exports.ClaimRecordType || (exports.ClaimRecordType = {}));
/** Claim approve or reject status. */
var ClaimApprovalStatusType;
(function (ClaimApprovalStatusType) {
    ClaimApprovalStatusType["Approved"] = "Approved";
    ClaimApprovalStatusType["Rejected"] = "Rejected";
    ClaimApprovalStatusType["Pending"] = "Pending";
})(ClaimApprovalStatusType = exports.ClaimApprovalStatusType || (exports.ClaimApprovalStatusType = {}));
/** Processing type of the award like Actual , Projected or Inactive. */
var MemberAwardProcessType;
(function (MemberAwardProcessType) {
    MemberAwardProcessType["Actual"] = "Actual";
    MemberAwardProcessType["Projected"] = "Projected";
    MemberAwardProcessType["Inactive"] = "Inactive";
})(MemberAwardProcessType = exports.MemberAwardProcessType || (exports.MemberAwardProcessType = {}));
/** Enumeration for stay types. */
var StayReservationType;
(function (StayReservationType) {
    StayReservationType["Transient"] = "Transient";
    StayReservationType["Block"] = "Block";
})(StayReservationType = exports.StayReservationType || (exports.StayReservationType = {}));
/** Indicate to get revenue of Stay Records. */
var StatisticsReportType;
(function (StatisticsReportType) {
    StatisticsReportType["Reservation"] = "Reservation";
    StatisticsReportType["Revenue"] = "Revenue";
    StatisticsReportType["ProfileStayRecords"] = "ProfileStayRecords";
    StatisticsReportType["DetailStayRecordsRevenue"] = "DetailStayRecordsRevenue";
})(StatisticsReportType = exports.StatisticsReportType || (exports.StatisticsReportType = {}));
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
 * @title OPERA Cloud Customer Relationship Management Outbound API
 * @version 22.3.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /crm/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 22.3.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
class Api extends HttpClient {
    constructor() {
        super(...arguments);
        this.externalSystems = {
            /**
             * @description Use this API when you want to search for profiles in an external system. The response will include a list of profiles that exist in the external system, based on your search criteria.  For example, you want to see if the external system has a profile for Mr David Smith.  The GET API will send a request to external system, and the response will include a list of any profiles that exist for Mr Davis Smith in that system.  If a profile does exist, and the user would like to 'download' that profile into OPERA, you would then proceed to use the downlodExternalProfiles API.
             *
             * @tags ProfileExternal
             * @name GetExternalProfiles
             * @summary Retrieve profiles from external system
             * @request GET:/externalSystems/{extSystemCode}/chains/{chainCode}/externalProfiles
             */
            getExternalProfiles: (extSystemCode, chainCode, query, params = {}) => {
                const newParams = params;
                return this.request(Object.assign({ path: `/externalSystems/${extSystemCode}/chains/${chainCode}/externalProfiles`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description After searching for profiles in an external system using getExternalProfiles, proceed to use this API knowing the external profile ID in the path.  The result will be a new profile created in OPERA. <p><strong>OperationId:</strong>downloadExternalProfile</p>
             *
             * @tags ProfileExternal
             * @name DownloadExternalProfile
             * @summary Download a Profile from external system
             * @request GET:/externalSystems/{extSystemCode}/chains/{chainCode}/externalProfiles/{profileExternalId}
             */
            downloadExternalProfile: (extSystemCode, chainCode, profileExternalId, query, params = {}) => {
                const newParams = params;
                return this.request(Object.assign({ path: `/externalSystems/${extSystemCode}/chains/${chainCode}/externalProfiles/${profileExternalId}`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API when you have a guest profile and you want to enroll that guest profile into a membership program in an external system. <p><strong>OperationId:</strong>postEnrollment</p>
             *
             * @tags ProfileMembership
             * @name PostEnrollment
             * @summary Create an Enrollment
             * @request POST:/externalSystems/{extSystemCode}/chains/{chainCode}/enrollments
             */
            postEnrollment: (extSystemCode, chainCode, enrollment, params = {}) => {
                const newParams = params;
                return this.request(Object.assign({ path: `/externalSystems/${extSystemCode}/chains/${chainCode}/enrollments`, method: 'POST', body: enrollment, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Request for the fetch player statistics WS operation <p><strong>OperationId:</strong>getPlayerStatistics</p>
             *
             * @tags ProfileExternal
             * @name GetPlayerStatistics
             * @summary Retrieve player statistics
             * @request GET:/externalSystems/{extSystemCode}/playerStatistics/{profileId}
             */
            getPlayerStatistics: (profileId, extSystemCode, query, params = {}) => {
                const newParams = params;
                return this.request(Object.assign({ path: `/externalSystems/${extSystemCode}/playerStatistics/${profileId}`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API when you have a guest profile and you want to get the offers available from an external system. <p><strong>OperationId:</strong>getGamingOffers</p>
             *
             * @tags ProfileExternal
             * @name GetGamingOffers
             * @summary Get offers that can be attached for a profile
             * @request GET:/externalSystems/{extSystemCode}/gamingOffers/{membershipNo}
             */
            getGamingOffers: (membershipNo, extSystemCode, query, params = {}) => {
                const newParams = params;
                return this.request(Object.assign({ path: `/externalSystems/${extSystemCode}/gamingOffers/${membershipNo}`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Redeem an award that exists on a profile. <p><strong>OperationId:</strong>redeemAward</p>
             *
             * @tags ProfileMembership
             * @name RedeemAward
             * @summary Redeem an award
             * @request PUT:/externalSystems/{extSystemCode}/profiles/{externalProfileId}/profileAwards
             */
            redeemAward: (extSystemCode, externalProfileId, award, params = {}) => {
                const newParams = params;
                return this.request(Object.assign({ path: `/externalSystems/${extSystemCode}/profiles/${externalProfileId}/profileAwards`, method: 'PUT', body: award, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API will generate a new membership number. <p><strong>OperationId:</strong>postMembershipNumber</p>
             *
             * @tags Profile
             * @name PostMembershipNumber
             * @summary Generate membership number
             * @request POST:/externalSystems/{extSystemCode}/memberships/{membershipType}/membershipIDs
             */
            postMembershipNumber: (extSystemCode, membershipType, membershipNumber, params = {}) => {
                const newParams = params;
                return this.request(Object.assign({ path: `/externalSystems/${extSystemCode}/memberships/${membershipType}/membershipIDs`, method: 'POST', body: membershipNumber, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to retrieve membership details on a profile. <p><strong>OperationId:</strong>getMembershipDetails</p>
             *
             * @tags ProfileMembership
             * @name GetMembershipDetails
             * @summary Get membership information on a profile
             * @request GET:/externalSystems/{extSystemCode}/profiles/{externalProfileId}/memberships
             */
            getMembershipDetails: (extSystemCode, externalProfileId, query, params = {}) => {
                const newParams = params;
                return this.request(Object.assign({ path: `/externalSystems/${extSystemCode}/profiles/${externalProfileId}/memberships`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API when you want to validate membership numbers from external system. <p><strong>OperationId:</strong>validateMembershipNumber</p>
             *
             * @tags ProfileExternal
             * @name ValidateMembershipNumber
             * @summary Validate Membership Number attached to a membership
             * @request GET:/externalSystems/{extSystemCode}/chains/{chainCode}/validateMembershipNumber
             */
            validateMembershipNumber: (chainCode, extSystemCode, query, params = {}) => {
                const newParams = params;
                return this.request(Object.assign({ path: `/externalSystems/${extSystemCode}/chains/${chainCode}/validateMembershipNumber`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.hotels = {
            /**
             * @description This API will validate and check an IATA number. <p><strong>OperationId:</strong>checkIataNumber</p>
             *
             * @tags ProfileExternal
             * @name CheckIataNumber
             * @summary Validate IATA number.
             * @request GET:/hotels/{hotelId}/travelAgents/{iataNumber}
             */
            checkIataNumber: (iataNumber, hotelId, params = {}) => {
                const newParams = params;
                return this.request(Object.assign({ path: `/hotels/${hotelId}/travelAgents/${iataNumber}`, method: 'GET', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.validatedAddresses = {
            /**
             * @description Use this API when you want to validate address from a third party vendor. The response will be a list of addresses with its address ID based on the search criteria. <p><strong>OperationId:</strong>getValidatedAddresses</p>
             *
             * @tags ProfileExternal
             * @name GetValidatedAddresses
             * @summary Retrive valid addresses from a third party vendor.
             * @request GET:/validatedAddresses
             */
            getValidatedAddresses: (query, params = {}) => {
                const newParams = params;
                return this.request(Object.assign({ path: `/validatedAddresses`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API when you want to fetch full address information for a given address Id. <p><strong>OperationId:</strong>getValidatedAddress</p>
             *
             * @tags ProfileExternal
             * @name GetValidatedAddress
             * @summary Get full Address information from third party system for a given external Address ID. The external Address ID is fetched from valdatedAddresses service.
             * @request GET:/validatedAddresses/{externalAddressId}
             */
            getValidatedAddress: (externalAddressId, query, params = {}) => {
                const newParams = params;
                return this.request(Object.assign({ path: `/validatedAddresses/${externalAddressId}`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
    }
}
exports.Api = Api;
