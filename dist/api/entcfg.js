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
exports.Api = exports.HttpClient = exports.ContentType = exports.UserDefinedFieldGroupDataType = exports.AmenityTypeType = exports.MasterType = exports.MasterInfoCodeDetailType = exports.HotelContactRoleType = exports.UsedInModuleType = exports.PrimaryShareTypeType = exports.OwnerResTypeType = exports.RoomRateAvailReasonType = exports.ECertificateIssueType = exports.ECertificateIssueSourceType = exports.ECertificateStatusType = exports.ECertificateConsumeSourceType = exports.ECertificateScopeType = exports.CommissionPaymentMethods = exports.ProfileSharedLevelType = exports.CommissionPayoutToType = exports.ResAccessRestrictionType = exports.PMSResStatusType = exports.CommunicationStatusType = exports.TurndownStatusType = exports.HotelInterfaceStatusType = exports.HotelInterfaceTypeType = exports.ReservationAllowedActionType = exports.HousekeepingRoomStatusType = exports.CardNumberTypeType = exports.CardProcessingType = exports.CardTypeType = exports.ResProfileTypeType = exports.NameTypeType = exports.GuestHousekeepingServiceRequestType = exports.ProfileTypeType = exports.ProfileStatusType = exports.CardReIssueType = exports.DowngradeType = exports.TierAdministrationType = exports.MembershipEarningPreferenceType = exports.ProfileDeliveryModuleType = exports.ImageStyleType = exports.AnonymizationStatusType = exports.PersonNameTypeType = exports.ShareDistributionInstructionType = exports.AmountDeterminationType = exports.MasterRestrictionStatusesType = exports.RestaurantCategoryType = void 0;
/** Simple type for Hotel Restaurant. */
var RestaurantCategoryType;
(function (RestaurantCategoryType) {
    RestaurantCategoryType["Restaurant"] = "Restaurant";
    RestaurantCategoryType["Retail"] = "Retail";
})(RestaurantCategoryType = exports.RestaurantCategoryType || (exports.RestaurantCategoryType = {}));
var MasterRestrictionStatusesType;
(function (MasterRestrictionStatusesType) {
    MasterRestrictionStatusesType["Closed"] = "Closed";
    MasterRestrictionStatusesType["ClosedForArrival"] = "ClosedForArrival";
    MasterRestrictionStatusesType["ClosedForDeparture"] = "ClosedForDeparture";
    MasterRestrictionStatusesType["MinimumStayThrough"] = "MinimumStayThrough";
    MasterRestrictionStatusesType["MaximumStayThrough"] = "MaximumStayThrough";
    MasterRestrictionStatusesType["MinimumLengthOfStay"] = "MinimumLengthOfStay";
    MasterRestrictionStatusesType["MaximumLengthOfStay"] = "MaximumLengthOfStay";
    MasterRestrictionStatusesType["LOSNotAvailable"] = "LOSNotAvailable";
    MasterRestrictionStatusesType["MinimumAdvanceBooking"] = "MinimumAdvanceBooking";
    MasterRestrictionStatusesType["MaximumAdvanceBooking"] = "MaximumAdvanceBooking";
    MasterRestrictionStatusesType["Open"] = "Open";
    MasterRestrictionStatusesType["OpenForArrival"] = "OpenForArrival";
    MasterRestrictionStatusesType["OpenForDeparture"] = "OpenForDeparture";
    MasterRestrictionStatusesType["Hurdle"] = "Hurdle";
    MasterRestrictionStatusesType["MinimumOccupancy"] = "MinimumOccupancy";
    MasterRestrictionStatusesType["MaximumOccupancy"] = "MaximumOccupancy";
    MasterRestrictionStatusesType["RateStrategy"] = "RateStrategy";
    MasterRestrictionStatusesType["RateDetailsNotSet"] = "RateDetailsNotSet";
    MasterRestrictionStatusesType["InventoryItemNotAvailable"] = "InventoryItemNotAvailable";
    MasterRestrictionStatusesType["RankRestriction"] = "RankRestriction";
    MasterRestrictionStatusesType["MaximumAuth"] = "MaximumAuth";
    MasterRestrictionStatusesType["InventoryNotAvailable"] = "InventoryNotAvailable";
    MasterRestrictionStatusesType["RoomClassNotAvailable"] = "RoomClassNotAvailable";
    MasterRestrictionStatusesType["RoomTypeNotAvailable"] = "RoomTypeNotAvailable";
    MasterRestrictionStatusesType["BlockSellLimit"] = "BlockSellLimit";
    MasterRestrictionStatusesType["OnRequest"] = "OnRequest";
})(MasterRestrictionStatusesType = exports.MasterRestrictionStatusesType || (exports.MasterRestrictionStatusesType = {}));
/** Used to indicate if an amount is inclusive or exclusive of other charges, such as taxes. */
var AmountDeterminationType;
(function (AmountDeterminationType) {
    AmountDeterminationType["Inclusive"] = "Inclusive";
    AmountDeterminationType["Exclusive"] = "Exclusive";
})(AmountDeterminationType = exports.AmountDeterminationType || (exports.AmountDeterminationType = {}));
/** The type of Rate Amount Change to be done on the Sharer reservation. This can be FULL -> Full Rate for each Sharer. SPLIT-> Split the Rate amount between Sharer Reservations. ENTIRE -> This Sharer will get the total amount of the rate code for all the Sharer Reservations. */
var ShareDistributionInstructionType;
(function (ShareDistributionInstructionType) {
    ShareDistributionInstructionType["Full"] = "Full";
    ShareDistributionInstructionType["Entire"] = "Entire";
    ShareDistributionInstructionType["Split"] = "Split";
    ShareDistributionInstructionType["CustomSplit"] = "CustomSplit";
})(ShareDistributionInstructionType = exports.ShareDistributionInstructionType || (exports.ShareDistributionInstructionType = {}));
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
/** Module where this delivery type will be used. Example : EFolio Export, EInvoice , Fiscal, etc.. */
var ProfileDeliveryModuleType;
(function (ProfileDeliveryModuleType) {
    ProfileDeliveryModuleType["EfolioExport"] = "EfolioExport";
})(ProfileDeliveryModuleType = exports.ProfileDeliveryModuleType || (exports.ProfileDeliveryModuleType = {}));
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
var CardProcessingType;
(function (CardProcessingType) {
    CardProcessingType["Eft"] = "Eft";
    CardProcessingType["Manual"] = "Manual";
})(CardProcessingType = exports.CardProcessingType || (exports.CardProcessingType = {}));
/** Simple type for indicating if credit card number is tokenized. */
var CardNumberTypeType;
(function (CardNumberTypeType) {
    CardNumberTypeType["CardNumber"] = "CardNumber";
    CardNumberTypeType["Token"] = "Token";
})(CardNumberTypeType = exports.CardNumberTypeType || (exports.CardNumberTypeType = {}));
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
/** Simple type for turndown status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Required, Not Required and Completed. */
var TurndownStatusType;
(function (TurndownStatusType) {
    TurndownStatusType["Required"] = "Required";
    TurndownStatusType["NotRequired"] = "NotRequired";
    TurndownStatusType["Compeleted"] = "Compeleted";
})(TurndownStatusType = exports.TurndownStatusType || (exports.TurndownStatusType = {}));
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
/** Indicates any Updates/Changes on the reservation as well as Reservation Cancellation are not allowed. */
var ResAccessRestrictionType;
(function (ResAccessRestrictionType) {
    ResAccessRestrictionType["Change"] = "Change";
    ResAccessRestrictionType["Cancel"] = "Cancel";
    ResAccessRestrictionType["ChangeOrCancel"] = "ChangeOrCancel";
})(ResAccessRestrictionType = exports.ResAccessRestrictionType || (exports.ResAccessRestrictionType = {}));
var CommissionPayoutToType;
(function (CommissionPayoutToType) {
    CommissionPayoutToType["TravelAgent"] = "TravelAgent";
    CommissionPayoutToType["Source"] = "Source";
    CommissionPayoutToType["TravelAgentSource"] = "TravelAgentSource";
    CommissionPayoutToType["None"] = "None";
})(CommissionPayoutToType = exports.CommissionPayoutToType || (exports.CommissionPayoutToType = {}));
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
/** Indicates the Room Rate is not available due to unavailability of enough items for the rate code. */
var RoomRateAvailReasonType;
(function (RoomRateAvailReasonType) {
    RoomRateAvailReasonType["Available"] = "Available";
    RoomRateAvailReasonType["Restricted"] = "Restricted";
    RoomRateAvailReasonType["RestrictedDueToInventory"] = "RestrictedDueToInventory";
    RoomRateAvailReasonType["RestrictedDueToOccupancy"] = "RestrictedDueToOccupancy";
    RoomRateAvailReasonType["RestrictedDueToItemInventory"] = "RestrictedDueToItemInventory";
})(RoomRateAvailReasonType = exports.RoomRateAvailReasonType || (exports.RoomRateAvailReasonType = {}));
var OwnerResTypeType;
(function (OwnerResTypeType) {
    OwnerResTypeType["Owner"] = "Owner";
    OwnerResTypeType["AuthorizedUser"] = "AuthorizedUser";
})(OwnerResTypeType = exports.OwnerResTypeType || (exports.OwnerResTypeType = {}));
var PrimaryShareTypeType;
(function (PrimaryShareTypeType) {
    PrimaryShareTypeType["Primary"] = "Primary";
    PrimaryShareTypeType["NonPrimary"] = "NonPrimary";
})(PrimaryShareTypeType = exports.PrimaryShareTypeType || (exports.PrimaryShareTypeType = {}));
/** Simple type for indicating the module for which user wants to create the SellMessage. Valid module types are Look To Book Sales,Reservations,Blocks,Function Diary and Group Rooms Control. */
var UsedInModuleType;
(function (UsedInModuleType) {
    UsedInModuleType["Blocks"] = "Blocks";
    UsedInModuleType["Reservations"] = "Reservations";
    UsedInModuleType["FunctionDiary"] = "FunctionDiary";
    UsedInModuleType["LookToBookSales"] = "LookToBookSales";
    UsedInModuleType["GroupRoomsControl"] = "GroupRoomsControl";
})(UsedInModuleType = exports.UsedInModuleType || (exports.UsedInModuleType = {}));
/** The contact's role in the hotel. Possible values are Lead, General, and Contract. */
var HotelContactRoleType;
(function (HotelContactRoleType) {
    HotelContactRoleType["Lead"] = "Lead";
    HotelContactRoleType["General"] = "General";
    HotelContactRoleType["Contract"] = "Contract";
})(HotelContactRoleType = exports.HotelContactRoleType || (exports.HotelContactRoleType = {}));
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
/** Simple type for storing amenity type. */
var AmenityTypeType;
(function (AmenityTypeType) {
    AmenityTypeType["General"] = "General";
    AmenityTypeType["Meeting"] = "Meeting";
})(AmenityTypeType = exports.AmenityTypeType || (exports.AmenityTypeType = {}));
/** Simple type used for User Defined Field Group Data Type. */
var UserDefinedFieldGroupDataType;
(function (UserDefinedFieldGroupDataType) {
    UserDefinedFieldGroupDataType["Integer"] = "Integer";
    UserDefinedFieldGroupDataType["Char"] = "Char";
})(UserDefinedFieldGroupDataType = exports.UserDefinedFieldGroupDataType || (exports.UserDefinedFieldGroupDataType = {}));
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
        this.instance = axios_1.default.create(Object.assign(Object.assign({}, axiosConfig), { baseURL: new URL('/ent/config/v1', axiosConfig.baseURL).toString() }));
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
 * @title OPERA Cloud Enterprise Configuration API
 * @version 21.5.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /ent/config/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 21.5.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
class Api extends HttpClient {
    constructor() {
        super(...arguments);
        this.attractionClasses = {
            /**
             * @description Use this API to get Attraction Classes. <p><strong>OperationId:</strong>getAttractionClasses</p>
             *
             * @tags ChainConfig
             * @name GetAttractionClasses
             * @summary Get Attraction Classes
             * @request GET:/attractionClasses
             */
            getAttractionClasses: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/attractionClasses`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.brandCodes = {
            /**
             * @description Use this API to return brand codes based on search criteria such as codes, wildCard, description. Brand codes are used for different hotel brands within a hotel corporation.<p><strong>OperationId:</strong>getBrandCodes</p>
             *
             * @tags ChainConfig
             * @name GetBrandCodes
             * @summary Get brand codes
             * @request GET:/brandCodes
             */
            getBrandCodes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/brandCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.communicationMethodsEntDetails = {
            /**
             * @description Use this API to get Communication Methods Ent Details. <p><strong>OperationId:</strong>getCommunicationMethodsEntDetails</p>
             *
             * @tags ChainConfig
             * @name GetCommunicationMethodsEntDetails
             * @summary Get Communication Methods Ent Details
             * @request GET:/communicationMethodsEntDetails
             */
            getCommunicationMethodsEntDetails: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/communicationMethodsEntDetails`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.corporateDepartmentCodes = {
            /**
             * @description Use this API to get Corporate Department Codes. <p><strong>OperationId:</strong>getCorporateDepartmentCodes</p>
             *
             * @tags ChainConfig
             * @name GetCorporateDepartmentCodes
             * @summary Get Corporate Department Codes
             * @request GET:/corporateDepartmentCodes
             */
            getCorporateDepartmentCodes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/corporateDepartmentCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.corporateDivisions = {
            /**
             * @description Use this API to get Corporate Divisions. <p><strong>OperationId:</strong>getCorporateDivisions</p>
             *
             * @tags ChainConfig
             * @name GetCorporateDivisions
             * @summary Get Corporate Divisions
             * @request GET:/corporateDivisions
             */
            getCorporateDivisions: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/corporateDivisions`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.corporateOperatingUnits = {
            /**
             * @description Use this API to get Corporate Operating Units. <p><strong>OperationId:</strong>getCorporateOperatingUnits</p>
             *
             * @tags ChainConfig
             * @name GetCorporateOperatingUnits
             * @summary Get Corporate Operating Units
             * @request GET:/corporateOperatingUnits
             */
            getCorporateOperatingUnits: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/corporateOperatingUnits`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.countries = {
            /**
             * @description Use this API to get Country Guest Types. <p><strong>OperationId:</strong>getCountryGuestTypes</p>
             *
             * @tags ChainConfig
             * @name GetCountryGuestTypes
             * @summary Get Country Guest Types
             * @request GET:/countries/guestTypes
             */
            getCountryGuestTypes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/countries/guestTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.countryMainGroups = {
            /**
             * @description Use this API to get Country Main Groups. <p><strong>OperationId:</strong>getCountryMainGroups</p>
             *
             * @tags ChainConfig
             * @name GetCountryMainGroups
             * @summary Get Country Main Groups
             * @request GET:/countryMainGroups
             */
            getCountryMainGroups: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/countryMainGroups`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.defaultNote = {
            /**
             * @description Use this API to get Default Note text. <p><strong>OperationId:</strong>getDefaultNote</p>
             *
             * @tags ChainConfig
             * @name GetDefaultNote
             * @summary Get Default Note text
             * @request GET:/defaultNote
             */
            getDefaultNote: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/defaultNote`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.departments = {
            /**
             * @description Use this API to get Departments. <p><strong>OperationId:</strong>getDepartments</p>
             *
             * @tags HotelConfig
             * @name GetDepartments
             * @summary Get Departments
             * @request GET:/departments
             */
            getDepartments: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/departments`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create Departments. <p><strong>OperationId:</strong>postDepartments</p>
             *
             * @tags HotelConfig
             * @name PostDepartments
             * @summary Create Departments
             * @request POST:/departments
             */
            postDepartments: (hotelId, departmentsCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/departments`, method: 'POST', body: departmentsCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete Departments. <p><strong>OperationId:</strong>removeDepartments</p>
             *
             * @tags HotelConfig
             * @name RemoveDepartments
             * @summary Delete Departments
             * @request DELETE:/departments/{departmentCode}
             */
            removeDepartments: (hotelId, departmentCode, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/departments/${departmentCode}`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update Departments. <p><strong>OperationId:</strong>changeDepartments</p>
             *
             * @tags HotelConfig
             * @name ChangeDepartments
             * @summary Change Departments
             * @request PUT:/departments/{departmentCode}
             */
            changeDepartments: (hotelId, departmentCode, departmentsToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/departments/${departmentCode}`, method: 'PUT', body: departmentsToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.hotelCategories = {
            /**
             * @description . <p><strong>OperationId:</strong>getHotelCategories</p>
             *
             * @tags ChainConfig
             * @name GetHotelCategories
             * @summary Get Hotel Categories
             * @request GET:/hotelCategories
             */
            getHotelCategories: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotelCategories`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.hotels = {
            /**
             * @description Use this API to return hotel configuration information details for a specific property.  Specific areas of configuration can be returned based on the fetchInstructions query parameter such as General, Attraction, Airports, Alternatehotels, Raterange, etc.<p><strong>OperationId:</strong>getHotel</p>
             *
             * @tags HotelConfig
             * @name GetHotel
             * @summary Get hotel property configuration details
             * @request GET:/hotels/{hotelId}
             */
            getHotel: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to get resort airports. <p><strong>OperationId:</strong>getAirports</p>
             *
             * @tags HotelConfig
             * @name GetAirports
             * @summary Get resort airports
             * @request GET:/hotels/{hotelId}/airports
             */
            getAirports: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/airports`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to get amenities. <p><strong>OperationId:</strong>getAmenities</p>
             *
             * @tags HotelConfig
             * @name GetAmenities
             * @summary Get amenities
             * @request GET:/hotels/{hotelId}/amenities
             */
            getAmenities: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/amenities`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create amenities. <p><strong>OperationId:</strong>postAmenities</p>
             *
             * @tags HotelConfig
             * @name PostAmenities
             * @summary Create amenities
             * @request POST:/hotels/{hotelId}/amenities
             */
            postAmenities: (hotelId, amenitiesCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/amenities`, method: 'POST', body: amenitiesCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to get Attractions. <p><strong>OperationId:</strong>getAttractions</p>
             *
             * @tags HotelConfig
             * @name GetAttractions
             * @summary Get Attractions
             * @request GET:/hotels/{hotelId}/attractions
             */
            getAttractions: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/attractions`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API can be used to Use this API to create a new attraction for a property. . <p><strong>OperationId:</strong>postAttractions</p>
             *
             * @tags HotelConfig
             * @name PostAttractions
             * @summary Create Attractions
             * @request POST:/hotels/{hotelId}/attractions
             */
            postAttractions: (hotelId, attractionsCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/attractions`, method: 'POST', body: attractionsCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API is used to Use this API to update an existing attraction. . <p><strong>OperationId:</strong>changeAttractions</p>
             *
             * @tags HotelConfig
             * @name ChangeAttractions
             * @summary Update an Attraction
             * @request PUT:/hotels/{hotelId}/attractions/{attractionCode}
             */
            changeAttractions: (attractionCode, hotelId, attractionsToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/attractions/${attractionCode}`, method: 'PUT', body: attractionsToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  Use this API to remove an existing attraction. <p><strong>OperationId:</strong>removeAttractions</p>
             *
             * @tags HotelConfig
             * @name RemoveAttractions
             * @summary Delete Attractions
             * @request DELETE:/hotels/{hotelId}/attractions/{attractionCode}
             */
            removeAttractions: (attractionCode, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/attractions/${attractionCode}`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create Hotel Contacts. <p><strong>OperationId:</strong>postHotelContacts</p>
             *
             * @tags HotelConfig
             * @name PostHotelContacts
             * @summary Create Hotel Contacts
             * @request POST:/hotels/{hotelId}/contacts
             */
            postHotelContacts: (hotelId, hotelContactsCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/contacts`, method: 'POST', body: hotelContactsCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update Hotel Contact. <p><strong>OperationId:</strong>changeHotelContacts</p>
             *
             * @tags HotelConfig
             * @name ChangeHotelContacts
             * @summary Change Hotel Contact
             * @request PUT:/hotels/{hotelId}/contacts/{contactId}
             */
            changeHotelContacts: (contactId, hotelId, hotelContactsToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/contacts/${contactId}`, method: 'PUT', body: hotelContactsToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete Hotel contact. <p><strong>OperationId:</strong>removeHotelContacts</p>
             *
             * @tags HotelConfig
             * @name RemoveHotelContacts
             * @summary Delete Hotel contact
             * @request DELETE:/hotels/{hotelId}/contacts/{contactId}
             */
            removeHotelContacts: (contactId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/contacts/${contactId}`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to get Credit Card Types. <p><strong>OperationId:</strong>getCreditCardTypes</p>
             *
             * @tags HotelConfig
             * @name GetCreditCardTypes
             * @summary Get Credit Card Types
             * @request GET:/hotels/{hotelId}/creditcardTypes
             */
            getCreditCardTypes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/creditcardTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete Credit Card Types. <p><strong>OperationId:</strong>removeCreditCardTypes</p>
             *
             * @tags HotelConfig
             * @name RemoveCreditCardTypes
             * @summary Delete Credit Card Types
             * @request DELETE:/hotels/{hotelId}/creditcardTypes
             */
            removeCreditCardTypes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/creditcardTypes`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update Credit Card Types. <p><strong>OperationId:</strong>changeCreditCardTypes</p>
             *
             * @tags HotelConfig
             * @name ChangeCreditCardTypes
             * @summary Change Credit Card Types
             * @request PUT:/hotels/{hotelId}/creditcardTypes
             */
            changeCreditCardTypes: (hotelId, creditCardTypesToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/creditcardTypes`, method: 'PUT', body: creditCardTypesToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create Credit Card Types. <p><strong>OperationId:</strong>postCreditCardTypes</p>
             *
             * @tags HotelConfig
             * @name PostCreditCardTypes
             * @summary Create Credit Card Types
             * @request POST:/hotels/{hotelId}/creditcardTypes
             */
            postCreditCardTypes: (hotelId, creditCardTypesCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/creditcardTypes`, method: 'POST', body: creditCardTypesCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to get hotel details. <p><strong>OperationId:</strong>getHotelDetails</p>
             *
             * @tags HotelConfig
             * @name GetHotelDetails
             * @summary Get hotel details
             * @request GET:/hotels/{hotelId}/hotelDetails
             */
            getHotelDetails: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/hotelDetails`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create Note information. <p><strong>OperationId:</strong>postHotelNotes</p>
             *
             * @tags HotelConfig
             * @name PostHotelNotes
             * @summary Create Note information
             * @request POST:/hotels/{hotelId}/notes
             */
            postHotelNotes: (hotelId, hotelNotesCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/notes`, method: 'POST', body: hotelNotesCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Update Note information. <p><strong>OperationId:</strong>changeHotelNotes</p>
             *
             * @tags HotelConfig
             * @name ChangeHotelNotes
             * @summary Update Note information
             * @request PUT:/hotels/{hotelId}/notes/{noteCode}
             */
            changeHotelNotes: (noteCode, hotelId, hotelNotesToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/notes/${noteCode}`, method: 'PUT', body: hotelNotesToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to get transportation. <p><strong>OperationId:</strong>getTransportation</p>
             *
             * @tags HotelConfig
             * @name GetTransportation
             * @summary Get transportation
             * @request GET:/hotels/{hotelId}/transportations
             */
            getTransportation: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/transportations`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create transportation. <p><strong>OperationId:</strong>postTransportation</p>
             *
             * @tags HotelConfig
             * @name PostTransportation
             * @summary Create transportation
             * @request POST:/hotels/{hotelId}/transportations
             */
            postTransportation: (hotelId, transportationCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/transportations`, method: 'POST', body: transportationCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Copy Departments. <p><strong>OperationId:</strong>copyDepartments</p>
             *
             * @tags HotelConfig
             * @name CopyDepartments
             * @summary  copy Departments
             * @request PUT:/hotels/{sourceHotelId}/departments/copy
             */
            copyDepartments: (hotelId, sourceHotelId, copyDepartments, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${sourceHotelId}/departments/copy`, method: 'PUT', body: copyDepartments, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.jobTitles = {
            /**
             * @description Use this API to get template job titles. <p><strong>OperationId:</strong>getTemplateJobTitles</p>
             *
             * @tags HotelConfig
             * @name GetTemplateJobTitles
             * @summary Get template job titles
             * @request GET:/jobTitles
             */
            getTemplateJobTitles: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/jobTitles`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.languages = {
            /**
             * @description Use this API to get Languages. <p><strong>OperationId:</strong>getLanguages</p>
             *
             * @tags HotelConfig
             * @name GetLanguages
             * @summary Get Languages
             * @request GET:/languages
             */
            getLanguages: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/languages`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.notes = {
            /**
             * @description Use this API to delete Note information. <p><strong>OperationId:</strong>removeHotelNotes</p>
             *
             * @tags HotelConfig
             * @name RemoveHotelNotes
             * @summary Delete Note information
             * @request DELETE:/notes/{noteCode}
             */
            removeHotelNotes: (hotelId, noteCode, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/notes/${noteCode}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.propertyDetailsCategories = {
            /**
             * @description Use this API to get Property Detail Categories. <p><strong>OperationId:</strong>getPropertyDetailCategories</p>
             *
             * @tags ChainConfig
             * @name GetPropertyDetailCategories
             * @summary Get Property Detail Categories
             * @request GET:/propertyDetailsCategories
             */
            getPropertyDetailCategories: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/propertyDetailsCategories`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create Property Detail Categories. <p><strong>OperationId:</strong>postPropertyDetailCategories</p>
             *
             * @tags ChainConfig
             * @name PostPropertyDetailCategories
             * @summary Create Property Detail Categories
             * @request POST:/propertyDetailsCategories
             */
            postPropertyDetailCategories: (hotelId, propertyDetailCategoriesCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/propertyDetailsCategories`, method: 'POST', body: propertyDetailCategoriesCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update Property Detail Categories. <p><strong>OperationId:</strong>changePropertyDetailCategories</p>
             *
             * @tags ChainConfig
             * @name ChangePropertyDetailCategories
             * @summary Change Property Detail Categories
             * @request PUT:/propertyDetailsCategories/{categoryCode}
             */
            changePropertyDetailCategories: (hotelId, categoryCode, propertyDetailCategoriesToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/propertyDetailsCategories/${categoryCode}`, method: 'PUT', body: propertyDetailCategoriesToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete Property Detail Categories. <p><strong>OperationId:</strong>removePropertyDetailCategories</p>
             *
             * @tags ChainConfig
             * @name RemovePropertyDetailCategories
             * @summary Delete Property Detail Categories
             * @request DELETE:/propertyDetailsCategories/{categoryCode}
             */
            removePropertyDetailCategories: (hotelId, categoryCode, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/propertyDetailsCategories/${categoryCode}`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.propertyTypes = {
            /**
             * @description Use this API to get Property Types based on search criteria such as codes, wildCard, description.  Property types are used for different hotel types i.e. Resort, Business, CityCenter, Motel, BedAndBreakfast.<p><strong>OperationId:</strong>getPropertyTypes</p>
             *
             * @tags ChainConfig
             * @name GetPropertyTypes
             * @summary Get property types
             * @request GET:/propertyTypes
             */
            getPropertyTypes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/propertyTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create Property Types. <p><strong>OperationId:</strong>postPropertyTypes</p>
             *
             * @tags ChainConfig
             * @name PostPropertyTypes
             * @summary Create Property Types
             * @request POST:/propertyTypes
             */
            postPropertyTypes: (hotelId, propertyTypesCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/propertyTypes`, method: 'POST', body: propertyTypesCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update Property Types. <p><strong>OperationId:</strong>putPropertyTypes</p>
             *
             * @tags ChainConfig
             * @name PutPropertyTypes
             * @summary Change Property Types
             * @request PUT:/propertyTypes/{propertyTypeCode}
             */
            putPropertyTypes: (hotelId, propertyTypeCode, propertyTypesToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/propertyTypes/${propertyTypeCode}`, method: 'PUT', body: propertyTypesToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete Property Types. <p><strong>OperationId:</strong>deletePropertyTypes</p>
             *
             * @tags ChainConfig
             * @name DeletePropertyTypes
             * @summary Delete Property Types
             * @request DELETE:/propertyTypes/{propertyTypeCode}
             */
            deletePropertyTypes: (hotelId, propertyTypeCode, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/propertyTypes/${propertyTypeCode}`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.regionCode = {
            /**
             * @description Use this API to get Regions Code. <p><strong>OperationId:</strong>getRegionsCode</p>
             *
             * @tags ChainConfig
             * @name GetRegionsCode
             * @summary Get Regions Code
             * @request GET:/regionCode
             */
            getRegionsCode: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/regionCode`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create Regions Code. <p><strong>OperationId:</strong>postRegionsCode</p>
             *
             * @tags ChainConfig
             * @name PostRegionsCode
             * @summary Create Regions Code
             * @request POST:/regionCode
             */
            postRegionsCode: (hotelId, regionsCodeCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/regionCode`, method: 'POST', body: regionsCodeCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update Regions Code. <p><strong>OperationId:</strong>changeRegionsCode</p>
             *
             * @tags ChainConfig
             * @name ChangeRegionsCode
             * @summary Change Regions Code
             * @request PUT:/regionCode/{regionCode}
             */
            changeRegionsCode: (hotelId, regionCode, regionsCodeToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/regionCode/${regionCode}`, method: 'PUT', body: regionsCodeToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete Regions Code. <p><strong>OperationId:</strong>removeRegionsCode</p>
             *
             * @tags ChainConfig
             * @name RemoveRegionsCode
             * @summary Delete Regions Code
             * @request DELETE:/regionCode/{regionCode}
             */
            removeRegionsCode: (hotelId, regionCode, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/regionCode/${regionCode}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.roomAmenities = {
            /**
             * @description Use this API to get Room Amenities. <p><strong>OperationId:</strong>getRoomAmenities</p>
             *
             * @tags ChainConfig
             * @name GetRoomAmenities
             * @summary Get Room Amenities
             * @request GET:/roomAmenities
             */
            getRoomAmenities: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/roomAmenities`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.templateCodes = {
            /**
             * @description  Use this API to get Template Codes. <p><strong>OperationId:</strong>getTemplateCodes</p>
             *
             * @tags ChainConfig
             * @name GetTemplateCodes
             * @summary  Get Template Codes
             * @request GET:/templateCodes
             */
            getTemplateCodes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/templateCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.transportations = {
            /**
             * @description Use this API to get transportation templates. <p><strong>OperationId:</strong>getTransportationTemplates</p>
             *
             * @tags HotelConfig
             * @name GetTransportationTemplates
             * @summary Get transportation templates
             * @request GET:/transportations
             */
            getTransportationTemplates: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/transportations`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.userDefinedFieldGroups = {
            /**
             * @description Use this API to get User Defined Field Groups. <p><strong>OperationId:</strong>getUserDefinedFieldGroups</p>
             *
             * @tags ChainConfig
             * @name GetUserDefinedFieldGroups
             * @summary Get User Defined Field Groups
             * @request GET:/userDefinedFieldGroups
             */
            getUserDefinedFieldGroups: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/userDefinedFieldGroups`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.userDefinedFieldValues = {
            /**
             * @description Use this API to return User Defined Field (UDF) Values based on search criteria such as groupCode, valueCode, descriptionWildCard.  The LOV Group and LOV Values functionality allows a property to create a custom group of values to be used in a specified user defined field (UDF). This functionality provides added flexibility in allowing a site to track information or details that are specific to their business and outside of the standard fields offered in OPERA Cloud.<p><strong>OperationId:</strong>getUserDefinedFieldValues</p>
             *
             * @tags ChainConfig
             * @name GetUserDefinedFieldValues
             * @summary Get user defined field (UDF) values
             * @request GET:/userDefinedFieldValues
             */
            getUserDefinedFieldValues: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/userDefinedFieldValues`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
    }
}
exports.Api = Api;
