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
exports.SentConfirmationStatus = exports.ConfDeliveryMethod = exports.WelcomeOfferOptionsType = exports.AlertAreaType = exports.LinkedReservationType = exports.OffsetUnitType = exports.PolicyBasisTypeType = exports.DepositCancelRevenueType = exports.CompRoutingStatusType = exports.ProductSourceType = exports.PackageCalculationRuleType = exports.PostingRhythmType = exports.AwardStatusType = exports.RewardCertificateType = exports.ReservationCertificateType = exports.AwardKindType = exports.ServiceRequestStatusType = exports.ActionStatusType = exports.TrackItGroup = exports.PrimaryShareTypeType = exports.ECertificateIssueSourceType = exports.ECertificateStatusType = exports.ECertificateConsumeSourceType = exports.ECertificateScopeType = exports.CommissionPaymentMethods = exports.ProfileTypeType = exports.ProfileStatusType = exports.CardReIssueType = exports.DowngradeType = exports.TierAdministrationType = exports.MembershipEarningPreferenceType = exports.ProfileDeliveryModuleType = exports.ImageStyleType = exports.PersonNameTypeType = exports.ShareDistributionInstructionType = exports.AmountDeterminationType = exports.MasterType = exports.CommissionPayoutToType = exports.ResAccessRestrictionType = exports.PMSResStatusType = exports.CommunicationStatusType = exports.ReservationAllowedActionType = exports.HousekeepingRoomStatusType = exports.CardNumberTypeType = exports.CardProcessingType = exports.CardTypeType = exports.ResProfileTypeType = exports.NameTypeType = exports.AnonymizationStatusType = exports.GuestHousekeepingServiceRequestType = void 0;
exports.Api = exports.HttpClient = exports.ContentType = exports.TurndownStatusType = exports.HotelInterfaceStatusType = exports.HotelInterfaceTypeType = exports.MarketingPolicyType = exports.FacilitySchedulerOptionType = exports.ChannelResvStatusType = exports.ValidationActionType = exports.UpsellRateInstructionType = exports.ReservationValidationInstructionType = exports.RateChangeType = exports.ChannelResvActionType = exports.ShareTypeType = exports.ReservationInstructionType = exports.ExclusionReasonType = exports.NameValueModuleType = exports.NameValueDataTypeType = exports.ECertificateClassficationType = exports.RequestActionType = exports.TransactionDiversionRuleTypeType = exports.ScopeType = exports.EntityType = exports.TransactionDiversionRuleLevelType = exports.MessageStatusType = exports.TypeOfMessageType = exports.FixedChargeFrequencyType = void 0;
/** Possible values for the Guest Service Status. */
var GuestHousekeepingServiceRequestType;
(function (GuestHousekeepingServiceRequestType) {
    GuestHousekeepingServiceRequestType["DoNotDisturb"] = "DoNotDisturb";
    GuestHousekeepingServiceRequestType["MakeUpRoom"] = "MakeUpRoom";
    GuestHousekeepingServiceRequestType["NoStatusSelected"] = "NoStatusSelected";
})(GuestHousekeepingServiceRequestType = exports.GuestHousekeepingServiceRequestType || (exports.GuestHousekeepingServiceRequestType = {}));
/** Guest has been anonymized. */
var AnonymizationStatusType;
(function (AnonymizationStatusType) {
    AnonymizationStatusType["Requested"] = "Requested";
    AnonymizationStatusType["Anonymized"] = "Anonymized";
})(AnonymizationStatusType = exports.AnonymizationStatusType || (exports.AnonymizationStatusType = {}));
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
var PrimaryShareTypeType;
(function (PrimaryShareTypeType) {
    PrimaryShareTypeType["Primary"] = "Primary";
    PrimaryShareTypeType["NonPrimary"] = "NonPrimary";
})(PrimaryShareTypeType = exports.PrimaryShareTypeType || (exports.PrimaryShareTypeType = {}));
/** Group to which the Track It items belong. */
var TrackItGroup;
(function (TrackItGroup) {
    TrackItGroup["Parcel"] = "Parcel";
    TrackItGroup["Valet"] = "Valet";
    TrackItGroup["Baggage"] = "Baggage";
    TrackItGroup["Lost"] = "Lost";
})(TrackItGroup = exports.TrackItGroup || (exports.TrackItGroup = {}));
/** Action status of the Track It item(Open, Closed). */
var ActionStatusType;
(function (ActionStatusType) {
    ActionStatusType["Open"] = "Open";
    ActionStatusType["Closed"] = "Closed";
})(ActionStatusType = exports.ActionStatusType || (exports.ActionStatusType = {}));
var ServiceRequestStatusType;
(function (ServiceRequestStatusType) {
    ServiceRequestStatusType["Open"] = "Open";
    ServiceRequestStatusType["PendingFollowUp"] = "PendingFollowUp";
    ServiceRequestStatusType["Closed"] = "Closed";
    ServiceRequestStatusType["DoNotDisturb"] = "DoNotDisturb";
    ServiceRequestStatusType["MakeUpRoom"] = "MakeUpRoom";
})(ServiceRequestStatusType = exports.ServiceRequestStatusType || (exports.ServiceRequestStatusType = {}));
/** Indicates that this is electronic certificate. */
var AwardKindType;
(function (AwardKindType) {
    AwardKindType["Paper"] = "Paper";
    AwardKindType["ECertificate"] = "ECertificate";
})(AwardKindType = exports.AwardKindType || (exports.AwardKindType = {}));
/** Certificate is incentive. */
var ReservationCertificateType;
(function (ReservationCertificateType) {
    ReservationCertificateType["Reward"] = "Reward";
    ReservationCertificateType["Incentive"] = "Incentive";
})(ReservationCertificateType = exports.ReservationCertificateType || (exports.ReservationCertificateType = {}));
/** Point Saver reward. */
var RewardCertificateType;
(function (RewardCertificateType) {
    RewardCertificateType["Regular"] = "Regular";
    RewardCertificateType["StayAnytime"] = "StayAnytime";
    RewardCertificateType["PointSaver"] = "PointSaver";
})(RewardCertificateType = exports.RewardCertificateType || (exports.RewardCertificateType = {}));
/** Indicates that certificate is in use. */
var AwardStatusType;
(function (AwardStatusType) {
    AwardStatusType["Available"] = "Available";
    AwardStatusType["NotAvailable"] = "NotAvailable";
    AwardStatusType["InUse"] = "InUse";
})(AwardStatusType = exports.AwardStatusType || (exports.AwardStatusType = {}));
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
/** Status which indicates that the Request of Comp Routing was declined */
var CompRoutingStatusType;
(function (CompRoutingStatusType) {
    CompRoutingStatusType["Request"] = "Request";
    CompRoutingStatusType["Comp"] = "Comp";
    CompRoutingStatusType["Declined"] = "Declined";
})(CompRoutingStatusType = exports.CompRoutingStatusType || (exports.CompRoutingStatusType = {}));
/** The type to indicate what revenue is to be used for calculating deposit/cancellation amounts. */
var DepositCancelRevenueType;
(function (DepositCancelRevenueType) {
    DepositCancelRevenueType["Rooms"] = "Rooms";
    DepositCancelRevenueType["Catering"] = "Catering";
    DepositCancelRevenueType["All"] = "All";
})(DepositCancelRevenueType = exports.DepositCancelRevenueType || (exports.DepositCancelRevenueType = {}));
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
/** Enumeration of the different Linked Reservation Types. */
var LinkedReservationType;
(function (LinkedReservationType) {
    LinkedReservationType["Linked"] = "Linked";
    LinkedReservationType["Shared"] = "Shared";
    LinkedReservationType["Default"] = "Default";
})(LinkedReservationType = exports.LinkedReservationType || (exports.LinkedReservationType = {}));
var AlertAreaType;
(function (AlertAreaType) {
    AlertAreaType["CheckIn"] = "CheckIn";
    AlertAreaType["CheckOut"] = "CheckOut";
    AlertAreaType["Reservation"] = "Reservation";
    AlertAreaType["Billing"] = "Billing";
    AlertAreaType["InHouse"] = "InHouse";
})(AlertAreaType = exports.AlertAreaType || (exports.AlertAreaType = {}));
/** None of the Welcome Offer option is selected. */
var WelcomeOfferOptionsType;
(function (WelcomeOfferOptionsType) {
    WelcomeOfferOptionsType["BonusPoints"] = "BonusPoints";
    WelcomeOfferOptionsType["Ecoupons"] = "Ecoupons";
    WelcomeOfferOptionsType["Items"] = "Items";
    WelcomeOfferOptionsType["PostIt"] = "PostIt";
    WelcomeOfferOptionsType["NotSelected"] = "NotSelected";
})(WelcomeOfferOptionsType = exports.WelcomeOfferOptionsType || (exports.WelcomeOfferOptionsType = {}));
var ConfDeliveryMethod;
(function (ConfDeliveryMethod) {
    ConfDeliveryMethod["Print"] = "Print";
    ConfDeliveryMethod["Email"] = "Email";
    ConfDeliveryMethod["Fax"] = "Fax";
    ConfDeliveryMethod["Text"] = "Text";
    ConfDeliveryMethod["NotConfigured"] = "NotConfigured";
})(ConfDeliveryMethod = exports.ConfDeliveryMethod || (exports.ConfDeliveryMethod = {}));
var SentConfirmationStatus;
(function (SentConfirmationStatus) {
    SentConfirmationStatus["Pending"] = "Pending";
    SentConfirmationStatus["Succeeded"] = "Succeeded";
    SentConfirmationStatus["Failed"] = "Failed";
})(SentConfirmationStatus = exports.SentConfirmationStatus || (exports.SentConfirmationStatus = {}));
/** Yearly. */
var FixedChargeFrequencyType;
(function (FixedChargeFrequencyType) {
    FixedChargeFrequencyType["O"] = "O";
    FixedChargeFrequencyType["D"] = "D";
    FixedChargeFrequencyType["W"] = "W";
    FixedChargeFrequencyType["M"] = "M";
    FixedChargeFrequencyType["Q"] = "Q";
    FixedChargeFrequencyType["Y"] = "Y";
})(FixedChargeFrequencyType = exports.FixedChargeFrequencyType || (exports.FixedChargeFrequencyType = {}));
/** The type of Message for Guest Messages. */
var TypeOfMessageType;
(function (TypeOfMessageType) {
    TypeOfMessageType["Tm"] = "Tm";
    TypeOfMessageType["Vm"] = "Vm";
})(TypeOfMessageType = exports.TypeOfMessageType || (exports.TypeOfMessageType = {}));
/** Status of the Message. */
var MessageStatusType;
(function (MessageStatusType) {
    MessageStatusType["Mr"] = "Mr";
    MessageStatusType["Nr"] = "Nr";
})(MessageStatusType = exports.MessageStatusType || (exports.MessageStatusType = {}));
/** Reservation level. */
var TransactionDiversionRuleLevelType;
(function (TransactionDiversionRuleLevelType) {
    TransactionDiversionRuleLevelType["Property"] = "Property";
    TransactionDiversionRuleLevelType["Reservation"] = "Reservation";
})(TransactionDiversionRuleLevelType = exports.TransactionDiversionRuleLevelType || (exports.TransactionDiversionRuleLevelType = {}));
/** Indicates the rule is based on Minutes associated with the charge. */
var EntityType;
(function (EntityType) {
    EntityType["ThresholdCount"] = "ThresholdCount";
    EntityType["ThresholdQuantity"] = "ThresholdQuantity";
    EntityType["ThresholdMinutes"] = "ThresholdMinutes";
})(EntityType = exports.EntityType || (exports.EntityType = {}));
/** Minimum required and complimentary values are applicable Per Stay. */
var ScopeType;
(function (ScopeType) {
    ScopeType["PerDay"] = "PerDay";
    ScopeType["PerStay"] = "PerStay";
})(ScopeType = exports.ScopeType || (exports.ScopeType = {}));
/** The rule type on which the Transaction Diversion Rule is based. If a reservation has any of the following code, Transaction Diversion rule gets active for that reservation */
var TransactionDiversionRuleTypeType;
(function (TransactionDiversionRuleTypeType) {
    TransactionDiversionRuleTypeType["Vip"] = "Vip";
    TransactionDiversionRuleTypeType["Membership"] = "Membership";
})(TransactionDiversionRuleTypeType = exports.TransactionDiversionRuleTypeType || (exports.TransactionDiversionRuleTypeType = {}));
var RequestActionType;
(function (RequestActionType) {
    RequestActionType["Create"] = "Create";
    RequestActionType["Remove"] = "Remove";
    RequestActionType["Query"] = "Query";
})(RequestActionType = exports.RequestActionType || (exports.RequestActionType = {}));
/** Enumeration of the different type of Ecertificate. */
var ECertificateClassficationType;
(function (ECertificateClassficationType) {
    ECertificateClassficationType["Promotion"] = "Promotion";
    ECertificateClassficationType["Award"] = "Award";
    ECertificateClassficationType["Benefit"] = "Benefit";
    ECertificateClassficationType["Other"] = "Other";
})(ECertificateClassficationType = exports.ECertificateClassficationType || (exports.ECertificateClassficationType = {}));
var NameValueDataTypeType;
(function (NameValueDataTypeType) {
    NameValueDataTypeType["String"] = "String";
    NameValueDataTypeType["Number"] = "Number";
    NameValueDataTypeType["Date"] = "Date";
    NameValueDataTypeType["Datetime"] = "Datetime";
    NameValueDataTypeType["Time"] = "Time";
    NameValueDataTypeType["Integer"] = "Integer";
})(NameValueDataTypeType = exports.NameValueDataTypeType || (exports.NameValueDataTypeType = {}));
var NameValueModuleType;
(function (NameValueModuleType) {
    NameValueModuleType["Reservation"] = "Reservation";
    NameValueModuleType["Folio"] = "Folio";
    NameValueModuleType["Profile"] = "Profile";
    NameValueModuleType["Fintrix"] = "Fintrix";
})(NameValueModuleType = exports.NameValueModuleType || (exports.NameValueModuleType = {}));
/** Custom Charge has already been Processed for this date within the reservation stay. */
var ExclusionReasonType;
(function (ExclusionReasonType) {
    ExclusionReasonType["NotConfigured"] = "NotConfigured";
    ExclusionReasonType["CustomChargeProcessed"] = "CustomChargeProcessed";
})(ExclusionReasonType = exports.ExclusionReasonType || (exports.ExclusionReasonType = {}));
/** Instruction to fetch whether the room was assigned/upgraded by AI. This will also include Reservation instruction. */
var ReservationInstructionType;
(function (ReservationInstructionType) {
    ReservationInstructionType["Reservation"] = "Reservation";
    ReservationInstructionType["Comments"] = "Comments";
    ReservationInstructionType["GuestComments"] = "GuestComments";
    ReservationInstructionType["Packages"] = "Packages";
    ReservationInstructionType["InventoryItems"] = "InventoryItems";
    ReservationInstructionType["ReservationPaymentMethods"] = "ReservationPaymentMethods";
    ReservationInstructionType["RoutingInstructions"] = "RoutingInstructions";
    ReservationInstructionType["Preferences"] = "Preferences";
    ReservationInstructionType["Memberships"] = "Memberships";
    ReservationInstructionType["Alerts"] = "Alerts";
    ReservationInstructionType["Traces"] = "Traces";
    ReservationInstructionType["ConfirmationLetters"] = "ConfirmationLetters";
    ReservationInstructionType["CallHistory"] = "CallHistory";
    ReservationInstructionType["FixedCharges"] = "FixedCharges";
    ReservationInstructionType["GuestMessages"] = "GuestMessages";
    ReservationInstructionType["ReservationPolicies"] = "ReservationPolicies";
    ReservationInstructionType["Indicators"] = "Indicators";
    ReservationInstructionType["LinkedReservations"] = "LinkedReservations";
    ReservationInstructionType["RevenuesAndBalances"] = "RevenuesAndBalances";
    ReservationInstructionType["GuestLastStay"] = "GuestLastStay";
    ReservationInstructionType["ECoupons"] = "ECoupons";
    ReservationInstructionType["TrackItItems"] = "TrackItItems";
    ReservationInstructionType["TotalCostOfStay"] = "TotalCostOfStay";
    ReservationInstructionType["ReservationAwards"] = "ReservationAwards";
    ReservationInstructionType["WebRegistrationCards"] = "WebRegistrationCards";
    ReservationInstructionType["ServiceRequests"] = "ServiceRequests";
    ReservationInstructionType["ReservationActivities"] = "ReservationActivities";
    ReservationInstructionType["ScheduledActivities"] = "ScheduledActivities";
    ReservationInstructionType["PrepaidCards"] = "PrepaidCards";
    ReservationInstructionType["Shares"] = "Shares";
    ReservationInstructionType["Attachments"] = "Attachments";
    ReservationInstructionType["Locators"] = "Locators";
    ReservationInstructionType["ProfileAwards"] = "ProfileAwards";
    ReservationInstructionType["TransactionDiversions"] = "TransactionDiversions";
    ReservationInstructionType["Tickets"] = "Tickets";
    ReservationInstructionType["GuestMemberships"] = "GuestMemberships";
    ReservationInstructionType["ECertificates"] = "ECertificates";
    ReservationInstructionType["UpsellInfo"] = "UpsellInfo";
    ReservationInstructionType["RoomAssignedByAI"] = "RoomAssignedByAI";
    ReservationInstructionType["CustomNameValue"] = "CustomNameValue";
    ReservationInstructionType["CustomChargeExemptions"] = "CustomChargeExemptions";
})(ReservationInstructionType = exports.ReservationInstructionType || (exports.ReservationInstructionType = {}));
/** Indicates that only profile information will be retrieved from the reservation request object and the rest will be provided from the master reservation. */
var ShareTypeType;
(function (ShareTypeType) {
    ShareTypeType["Reservation"] = "Reservation";
    ShareTypeType["Profile"] = "Profile";
})(ShareTypeType = exports.ShareTypeType || (exports.ShareTypeType = {}));
/** Cancel a reservation in OPERA through a channel. The cancellation of the reservation is committed in OPERA at once. There is no session reservation involved. */
var ChannelResvActionType;
(function (ChannelResvActionType) {
    ChannelResvActionType["Book"] = "Book";
    ChannelResvActionType["Hold"] = "Hold";
    ChannelResvActionType["Initiate"] = "Initiate";
    ChannelResvActionType["Ignore"] = "Ignore";
    ChannelResvActionType["Modify"] = "Modify";
    ChannelResvActionType["Commit"] = "Commit";
    ChannelResvActionType["CommitOverrideEdits"] = "CommitOverrideEdits";
    ChannelResvActionType["Create"] = "Create";
    ChannelResvActionType["Change"] = "Change";
    ChannelResvActionType["Cancel"] = "Cancel";
})(ChannelResvActionType = exports.ChannelResvActionType || (exports.ChannelResvActionType = {}));
/** Simple type for rate change type. */
var RateChangeType;
(function (RateChangeType) {
    RateChangeType["Verify"] = "Verify";
    RateChangeType["OldRate"] = "OldRate";
    RateChangeType["NewRate"] = "NewRate";
})(RateChangeType = exports.RateChangeType || (exports.RateChangeType = {}));
/** Instruction to validate changes in reservation and returns validated inventory item. */
var ReservationValidationInstructionType;
(function (ReservationValidationInstructionType) {
    ReservationValidationInstructionType["StayHeader"] = "StayHeader";
    ReservationValidationInstructionType["StayDates"] = "StayDates";
    ReservationValidationInstructionType["OverlappingStay"] = "OverlappingStay";
    ReservationValidationInstructionType["Packages"] = "Packages";
    ReservationValidationInstructionType["RefreshPackages"] = "RefreshPackages";
    ReservationValidationInstructionType["Preferences"] = "Preferences";
    ReservationValidationInstructionType["AccessRestrictions"] = "AccessRestrictions";
    ReservationValidationInstructionType["Ecertificates"] = "Ecertificates";
    ReservationValidationInstructionType["Promotions"] = "Promotions";
    ReservationValidationInstructionType["TrackItItems"] = "TrackItItems";
    ReservationValidationInstructionType["TotalCostOfStay"] = "TotalCostOfStay";
    ReservationValidationInstructionType["ReservationAwards"] = "ReservationAwards";
    ReservationValidationInstructionType["WebRegistrationCards"] = "WebRegistrationCards";
    ReservationValidationInstructionType["ServiceRequests"] = "ServiceRequests";
    ReservationValidationInstructionType["ReservationActivities"] = "ReservationActivities";
    ReservationValidationInstructionType["ScheduledActivities"] = "ScheduledActivities";
    ReservationValidationInstructionType["PrepaidCards"] = "PrepaidCards";
    ReservationValidationInstructionType["Shares"] = "Shares";
    ReservationValidationInstructionType["Attachments"] = "Attachments";
    ReservationValidationInstructionType["Locators"] = "Locators";
    ReservationValidationInstructionType["ProfileAwards"] = "ProfileAwards";
    ReservationValidationInstructionType["RefreshRates"] = "RefreshRates";
    ReservationValidationInstructionType["ReservationGuarantee"] = "ReservationGuarantee";
    ReservationValidationInstructionType["UpsellsAvailable"] = "UpsellsAvailable";
    ReservationValidationInstructionType["InventoryItems"] = "InventoryItems";
})(ReservationValidationInstructionType = exports.ReservationValidationInstructionType || (exports.ReservationValidationInstructionType = {}));
/** Instruction to remove the upsell and recalculate the rate based on the upsell target room type. */
var UpsellRateInstructionType;
(function (UpsellRateInstructionType) {
    UpsellRateInstructionType["HonorUpsellRateForAdditionalNights"] = "HonorUpsellRateForAdditionalNights";
    UpsellRateInstructionType["OriginalRoomType"] = "OriginalRoomType";
    UpsellRateInstructionType["TargetRoomType"] = "TargetRoomType";
})(UpsellRateInstructionType = exports.UpsellRateInstructionType || (exports.UpsellRateInstructionType = {}));
/** Validation Actions returned after validations are done. STOP-PROCESSING implies that the user cannot continue with the operation as some validation failed. USER-RESPONSE-REQUIRED implies that some validations can be overridden and the User can continue if they wish to override. */
var ValidationActionType;
(function (ValidationActionType) {
    ValidationActionType["StopProcessing"] = "StopProcessing";
    ValidationActionType["UserResponseRequired"] = "UserResponseRequired";
})(ValidationActionType = exports.ValidationActionType || (exports.ValidationActionType = {}));
/** Depicts that the operation was failed. */
var ChannelResvStatusType;
(function (ChannelResvStatusType) {
    ChannelResvStatusType["Pending"] = "Pending";
    ChannelResvStatusType["Cancelled"] = "Cancelled";
    ChannelResvStatusType["Modified"] = "Modified";
    ChannelResvStatusType["Committed"] = "Committed";
    ChannelResvStatusType["Ignored"] = "Ignored";
    ChannelResvStatusType["Unsuccessful"] = "Unsuccessful";
})(ChannelResvStatusType = exports.ChannelResvStatusType || (exports.ChannelResvStatusType = {}));
/** Facility Scheduler Option value. */
var FacilitySchedulerOptionType;
(function (FacilitySchedulerOptionType) {
    FacilitySchedulerOptionType["Default"] = "Default";
    FacilitySchedulerOptionType["Update"] = "Update";
    FacilitySchedulerOptionType["Noupdate"] = "Noupdate";
})(FacilitySchedulerOptionType = exports.FacilitySchedulerOptionType || (exports.FacilitySchedulerOptionType = {}));
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
        this.instance = axios_1.default.create(Object.assign(Object.assign({}, axiosConfig), { baseURL: new URL('/rsv/v1', axiosConfig.baseURL).toString() }));
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
 * @title OPERA Cloud Reservation API
 * @version 21.5.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /rsv/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 21.5.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
class Api extends HttpClient {
    constructor() {
        super(...arguments);
        this.calls = {
            /**
             * @description Use this API to request a new call or make updates to an existing call.<p><strong>OperationId:</strong>postCall</p>
             *
             * @tags Reservation
             * @name PostCall
             * @summary Register calls
             * @request POST:/calls
             */
            postCall: (hotelId, registerCall, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/calls`, method: 'POST', body: registerCall, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.externalSystems = {
            /**
             * @description This API will allow a user to retrieve a list of reservations based on the search criteria specified in the request body. For example you can search for reservations using query parameters like first name, last name, arrival/departure date, external confirmation number. <p><strong>OperationId:</strong>getExternalSystemReservations</p>
             *
             * @tags Reservation
             * @name GetExternalSystemReservations
             * @summary Get Reservations for a hotel
             * @request GET:/externalSystems/{extSystemCode}/reservations
             */
            getExternalSystemReservations: (hotelId, extSystemCode, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/externalSystems/${extSystemCode}/reservations`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.hotels = {
            /**
             * @description Use this to create a new reservation for a block, you must know the block Code to create this reservation.  In order to post a successful block reservation, please ensure you use the ListOfValues API's to know the hotel's codes; such as Address Type, Country Code,  Titles, preferenceCodes etc. <p><strong>OperationId:</strong>postReservationByBlock</p>
             *
             * @tags Reservation
             * @name PostReservationByBlock
             * @summary Create Reservation for a Block
             * @request POST:/hotels/{hotelId}/blocks/{blockId}/reservations
             */
            postReservationByBlock: (blockId, hotelId, createReservation, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/blocks/${blockId}/reservations`, method: 'POST', body: createReservation, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Combine share reservation for a given reservation id <p><strong>OperationId:</strong>postCombineShareReservationsByExtId</p>
             *
             * @tags Reservation
             * @name PostCombineShareReservationsByExtId
             * @summary Combine Share Reservations
             * @request POST:/hotels/{hotelId}/externalSystems/{externalSystemCode}/reservations/{reservationExternalId}/shares
             */
            postCombineShareReservationsByExtId: (reservationExternalId, externalSystemCode, hotelId, combineShareReservations, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/externalSystems/${externalSystemCode}/reservations/${reservationExternalId}/shares`, method: 'POST', body: combineShareReservations, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to search reservations in a hotel, filtering by whether they are Day Use, Due In, Checked In, Due Out, Checked Out, Cancelled, No Show and Complimentary or any other of the large selection of search criteria. It also serves as an entry way for changing existing reservation information, canceling reservations, checking in guests, canceling check ins, etc. You can use further query parameters to narrow your results. This API is not designed to support sync between two systems or initial upload of data.<p><strong>OperationId:</strong>getHotelReservations</p>
             *
             * @tags Reservation
             * @name GetHotelReservations
             * @summary Get and search for reservations in a hotel
             * @request GET:/hotels/{hotelId}/reservations
             */
            getHotelReservations: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this to create a new reservation for a hA12:F24otel.  Generally, you would search for a hotel's availability and rates before proceeding to use postReservation.  There are many fields in postReservation defined by ListOfValues; ensure you have reviewed ListOfValues APIs in order successfully to use postReservation. <p><strong>OperationId:</strong>postReservation</p>
             *
             * @tags Reservation
             * @name PostReservation
             * @summary Create Reservation
             * @request POST:/hotels/{hotelId}/reservations
             */
            postReservation: (hotelId, createReservation, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations`, method: 'POST', body: createReservation, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to get the activity log data of reservations being created and managed.<p><strong>OperationId:</strong>getReservationActivityLog</p>
             *
             * @tags Reservation
             * @name GetReservationActivityLog
             * @summary Fetch reservation activity log
             * @request GET:/hotels/{hotelId}/reservations/activityLog
             */
            getReservationActivityLog: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/activityLog`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This will allow you to link 1 or more reservations to an existing reservation.  <p><strong>OperationId:</strong>postReservationLinks</p>
             *
             * @tags Reservation
             * @name PostReservationLinks
             * @summary Link Reservations
             * @request POST:/hotels/{hotelId}/reservations/linkedReservations/{reservationId}
             */
            postReservationLinks: (reservationId, hotelId, linkReservationsCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/linkedReservations/${reservationId}`, method: 'POST', body: linkReservationsCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to unlink a reservation from its currently associated reservation. <p><strong>OperationId:</strong>deleteReservationLinks</p>
             *
             * @tags Reservation
             * @name DeleteReservationLinks
             * @summary Remove Reservation Links
             * @request DELETE:/hotels/{hotelId}/reservations/linkedReservations/{reservationId}
             */
            deleteReservationLinks: (reservationId, hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/linkedReservations/${reservationId}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to retrieve rate plan information including a breakdown of packages and taxes.<p><strong>OperationId:</strong>getRateInfo</p>
             *
             * @tags Reservation
             * @name GetRateInfo
             * @summary Get rate information
             * @request GET:/hotels/{hotelId}/reservations/rateInfo
             */
            getRateInfo: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/rateInfo`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to validate either the guarantee type or stay details of a reservation you are about to create. <p><strong>OperationId:</strong>putValidateReservationChanges</p>
             *
             * @tags Reservation
             * @name PutValidateReservationChanges
             * @summary Validate Reservation Change
             * @request PUT:/hotels/{hotelId}/reservations/validations
             */
            putValidateReservationChanges: (hotelId, validateReservationChanges, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/validations`, method: 'PUT', body: validateReservationChanges, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to retrieve a reservation&apos;s detail such as guest&apos;s stay, arrival and departure dates, transportation, room and rate information, preferences, packages, and more using OPERA&apos;s reservationId.<p><strong>OperationId:</strong>getReservation</p>
             *
             * @tags Reservation
             * @name GetReservation
             * @summary Get reservation by ID
             * @request GET:/hotels/{hotelId}/reservations/{reservationId}
             */
            getReservation: (reservationId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this to update an existing reservation for a hotel, such as adding comments, changing the number of guests.   There are many fields in putReservation defined by ListOfValues; ensure you have reviewed ListOfValues APIs in order successfully to use putReservation. <p><strong>OperationId:</strong>putReservation</p>
             *
             * @tags Reservation
             * @name PutReservation
             * @summary Update Reservation by ID
             * @request PUT:/hotels/{hotelId}/reservations/{reservationId}
             */
            putReservation: (reservationId, hotelId, changeReservation, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}`, method: 'PUT', body: changeReservation, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to reinstate a cancelled reservation. <p><strong>OperationId:</strong>putReinstateReservation</p>
             *
             * @tags Reservation
             * @name PutReinstateReservation
             * @summary Reinstate a Reservation
             * @request PUT:/hotels/{hotelId}/reservations/{reservationId}/cancellations
             */
            putReinstateReservation: (reservationId, hotelId, reinstateReservation, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/cancellations`, method: 'PUT', body: reinstateReservation, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this if a guest would like to cancel their reservation.  You will receive a cancellation number in the response. <p><strong>OperationId:</strong>postCancelReservation</p>
             *
             * @tags Reservation
             * @name PostCancelReservation
             * @summary Cancel Reservation by ID
             * @request POST:/hotels/{hotelId}/reservations/{reservationId}/cancellations
             */
            postCancelReservation: (reservationId, hotelId, cancelReservation, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/cancellations`, method: 'POST', body: cancelReservation, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This will allow you to set a reservation as a pre-registered guest.  The API request requires the guests confirmation number and you can optionally include arrival time.  The behavior of the API will be dependent upon the Pre-registration rules configured for the hotel in OPERA Cloud administration. <p><strong>OperationId:</strong>postPreCheckInReservation</p>
             *
             * @tags Reservation
             * @name PostPreCheckInReservation
             * @summary Pre-Checkin a Reservation
             * @request POST:/hotels/{hotelId}/reservations/{reservationId}/preCheckIn
             */
            postPreCheckInReservation: (reservationId, hotelId, preCheckInReservation, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/preCheckIn`, method: 'POST', body: preCheckInReservation, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This will cancel or rather revert the pre-checkin action for a guest's reservation. The reservation will return to DUEIN status. <p><strong>OperationId:</strong>deletePreCheckInReservation</p>
             *
             * @tags Reservation
             * @name DeletePreCheckInReservation
             * @summary Revert a PreCheckIn Reservation
             * @request DELETE:/hotels/{hotelId}/reservations/{reservationId}/preCheckIn
             */
            deletePreCheckInReservation: (reservationId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/preCheckIn`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Combine share reservation for a given reservation id <p><strong>OperationId:</strong>postCombineShareReservations</p>
             *
             * @tags Reservation
             * @name PostCombineShareReservations
             * @summary Combine Share Reservations
             * @request POST:/hotels/{hotelId}/reservations/{reservationId}/shares
             */
            postCombineShareReservations: (reservationId, hotelId, combineShareReservations, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/shares`, method: 'POST', body: combineShareReservations, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API will allow you to upsell a reservation in OPERA.  You would need to already know the upsell rules that are available for this reservation - you can do this by using the getUpsell API. <p><strong>OperationId:</strong>postUpsellReservation</p>
             *
             * @tags Reservation
             * @name PostUpsellReservation
             * @summary Upsell a Reservation
             * @request POST:/hotels/{hotelId}/reservations/{reservationId}/upsell
             */
            postUpsellReservation: (reservationId, hotelId, upsellReservation, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/upsell`, method: 'POST', body: upsellReservation, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to retrieve the available upsell offers for a specific reservation. If no upsell options are configured for this hotel or available for this reservation, an appropriate error will be returned. <p><strong>OperationId:</strong>getReservationUpsellInfo</p>
             *
             * @tags Reservation
             * @name GetReservationUpsellInfo
             * @summary Get available Upsell offers
             * @request GET:/hotels/{hotelId}/reservations/{reservationId}/upsell
             */
            getReservationUpsellInfo: (reservationId, hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/upsell`, method: 'GET', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.reservations = {
            /**
             * @description This API will allow a user to retrieve a list of reservations based on the search criteria specified in the request body. For example you can search for reservations using query parameters like first name, last name, arrival/departure date, external confirmation number. <p><strong>OperationId:</strong>getReservations</p>
             *
             * @tags Reservation
             * @name GetReservations
             * @summary Get Reservations for a hotel
             * @request GET:/reservations
             */
            getReservations: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/reservations`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This will allow you to link 1 or more reservations to an existing reservation.  <p><strong>OperationId:</strong>postReservationLinksByChain</p>
             *
             * @tags Reservation
             * @name PostReservationLinksByChain
             * @summary Link Reservations By Chain
             * @request POST:/reservations/linkedReservations/{reservationId}
             */
            postReservationLinksByChain: (hotelId, reservationId, linkReservationsCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/reservations/linkedReservations/${reservationId}`, method: 'POST', body: linkReservationsCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to get a statistical breakdown of reservations such as inventory and revenue data.<p><strong>OperationId:</strong>getReservationStatistics</p>
             *
             * @tags RSVStats
             * @name GetReservationStatistics
             * @summary Get reservation statistics
             * @request GET:/reservations/statistics
             */
            getReservationStatistics: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/reservations/statistics`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
    }
}
exports.Api = Api;
