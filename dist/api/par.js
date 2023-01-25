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
exports.Api = exports.HttpClient = exports.ContentType = exports.RestrictionStatusesType = exports.MarketingPolicyType = exports.HotelContactRoleType = exports.UsedInModuleType = exports.RestaurantCategoryType = exports.RateChangeTypeType = exports.MasterRestrictionStatusesType = exports.DepositCancelRevenueType = exports.OffsetUnitType = exports.PolicyBasisTypeType = exports.PrimaryShareTypeType = exports.OwnerResTypeType = exports.RoomRateAvailReasonType = exports.ECertificateIssueType = exports.ECertificateIssueSourceType = exports.ECertificateStatusType = exports.ECertificateConsumeSourceType = exports.ECertificateScopeType = exports.CommissionPaymentMethods = exports.ProfileSharedLevelType = exports.CommissionPayoutToType = exports.ResAccessRestrictionType = exports.PMSResStatusType = exports.CommunicationStatusType = exports.TurndownStatusType = exports.HotelInterfaceStatusType = exports.HotelInterfaceTypeType = exports.ReservationAllowedActionType = exports.HousekeepingRoomStatusType = exports.CardNumberTypeType = exports.CardProcessingType = exports.CardTypeType = exports.ResProfileTypeType = exports.NameTypeType = exports.GuestHousekeepingServiceRequestType = exports.ProfileTypeType = exports.ProfileStatusType = exports.CardReIssueType = exports.DowngradeType = exports.TierAdministrationType = exports.MembershipEarningPreferenceType = exports.ProfileDeliveryModuleType = exports.ImageStyleType = exports.AnonymizationStatusType = exports.PersonNameTypeType = exports.ShareDistributionInstructionType = exports.AmountDeterminationType = void 0;
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
/** Indicates the rate amount returned is first night or highest rate. */
var RateChangeTypeType;
(function (RateChangeTypeType) {
    RateChangeTypeType["FirstNight"] = "FirstNight";
    RateChangeTypeType["Highest"] = "Highest";
    RateChangeTypeType["Lowest"] = "Lowest";
    RateChangeTypeType["MostCommon"] = "MostCommon";
    RateChangeTypeType["Average"] = "Average";
})(RateChangeTypeType = exports.RateChangeTypeType || (exports.RateChangeTypeType = {}));
/** Simple type for Hotel Restaurant. */
var RestaurantCategoryType;
(function (RestaurantCategoryType) {
    RestaurantCategoryType["Restaurant"] = "Restaurant";
    RestaurantCategoryType["Retail"] = "Retail";
})(RestaurantCategoryType = exports.RestaurantCategoryType || (exports.RestaurantCategoryType = {}));
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
        this.instance = axios_1.default.create(Object.assign(Object.assign({}, axiosConfig), { baseURL: new URL('/par/v1', axiosConfig.baseURL).toString() }));
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
 * @title OPERA Cloud Price Availability Rate API
 * @version 21.5.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /par/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 21.5.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
class Api extends HttpClient {
    constructor() {
        super(...arguments);
        this.hotels = {
            /**
             * @description Use this API to get hotel availability for multiple hotels, given dates, Rate Plans, Rate Category, Rate Group, Membership Rates, and number of people. By default five records are returned unless a higher number is specified in the limit query parameter.<p><strong>OperationId:</strong>getHotelAvailability</p>
             *
             * @tags Availability
             * @name GetHotelAvailability
             * @summary Get hotel availability
             * @request GET:/hotels/{hotelId}/availability
             */
            getHotelAvailability: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/availability`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to get the required guarantee types in order to complete a booking. The criteria can include the rate plan code, arrival date, guarantee code and the profile information.<p><strong>OperationId:</strong>getReservationGuarantees</p>
             *
             * @tags Availability
             * @name GetReservationGuarantees
             * @summary Get reservation guarantees
             * @request GET:/hotels/{hotelId}/guarantees
             */
            getReservationGuarantees: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/guarantees`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to get the Restrictions for a hotel in given date range. The search criteria can include filter codes or restriction control types, date range and the hotel information.<p><strong>OperationId:</strong>getRestrictionsByDateRange</p>
             *
             * @tags Availability
             * @name GetRestrictionsByDateRange
             * @summary Get hotel restrictions
             * @request GET:/hotels/{hotelId}/restrictions
             */
            getRestrictionsByDateRange: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/restrictions`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
    }
}
exports.Api = Api;
