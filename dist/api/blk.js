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
exports.AllocationType = exports.ProductSourceType = exports.PackageCalculationRuleType = exports.PostingRhythmType = exports.AmountDeterminationType = exports.ResourceDiscountTypeType = exports.ApplyEventAttendeesChangesToEventsType = exports.BlockInventoryControlType = exports.DepositCancelRevenueType = exports.BlockProfileTypeType = exports.ECertificateIssueType = exports.ECertificateIssueSourceType = exports.ECertificateStatusType = exports.ECertificateConsumeSourceType = exports.ECertificateScopeType = exports.CommissionPaymentMethods = exports.CommissionPayoutToType = exports.ResAccessRestrictionType = exports.PMSResStatusType = exports.CommunicationStatusType = exports.TurndownStatusType = exports.HotelInterfaceStatusType = exports.HotelInterfaceTypeType = exports.ReservationAllowedActionType = exports.HousekeepingRoomStatusType = exports.CardNumberTypeType = exports.CardProcessingType = exports.CardTypeType = exports.ResProfileTypeType = exports.NameTypeType = exports.GuestHousekeepingServiceRequestType = exports.ProfileTypeType = exports.ProfileStatusType = exports.CardReIssueType = exports.DowngradeType = exports.TierAdministrationType = exports.MembershipEarningPreferenceType = exports.ProfileDeliveryModuleType = exports.ImageStyleType = exports.AnonymizationStatusType = exports.BlockOwnershipType = exports.PersonNameTypeType = exports.BlockClassificationType = exports.BlockAccessRestrictionType = exports.RateProtectionType = exports.BlockStatusTypeType = exports.BlockCancellationTypeType = exports.StatusColorType = exports.OffsetUnitType = exports.PolicyBasisTypeType = void 0;
exports.HttpClient = exports.ContentType = exports.BlockRangeModeType = exports.ResponseInstructionType = exports.StatisticsType = exports.ChangeBlockResvInstructionType = exports.BlockApplyChangesToType = exports.ExclusionReasonType = exports.NameValueModuleType = exports.NameValueDataTypeType = exports.ECertificateClassficationType = exports.RequestActionType = exports.TransactionDiversionRuleTypeType = exports.ScopeType = exports.EntityType = exports.TransactionDiversionRuleLevelType = exports.MessageStatusType = exports.TypeOfMessageType = exports.FixedChargeFrequencyType = exports.SentConfirmationStatus = exports.ConfDeliveryMethod = exports.WelcomeOfferOptionsType = exports.AlertAreaType = exports.LinkedReservationType = exports.CompRoutingStatusType = exports.PrepaidCardTrxTypeType = exports.ServiceRequestStatusType = exports.ActionStatusType = exports.TrackItGroup = exports.FBAStatusType = exports.AwardStatusType = exports.RewardCertificateType = exports.ReservationCertificateType = exports.AwardKindType = exports.ColorType = exports.PrimaryShareTypeType = exports.OwnerResTypeType = exports.RoomRateAvailReasonType = exports.ShareDistributionInstructionType = exports.HSKStatReportCodeType = exports.HSKStatCategoryCodeType = exports.HSKStatCodeType = exports.StatUnitCategoryType = exports.MasterType = exports.MasterInfoCodeDetailType = exports.BlockDetailInstructionType = exports.RestrictionStatusesType = exports.UsedInModuleType = exports.EventTypeType = exports.StatisticsSummaryType = void 0;
exports.Api = void 0;
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
/** Simple type for cancellation reasons which helps to decide type of cancellation. */
var BlockCancellationTypeType;
(function (BlockCancellationTypeType) {
    BlockCancellationTypeType["Lost"] = "Lost";
    BlockCancellationTypeType["Cancel"] = "Cancel";
    BlockCancellationTypeType["Refused"] = "Refused";
})(BlockCancellationTypeType = exports.BlockCancellationTypeType || (exports.BlockCancellationTypeType = {}));
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
/** Simple type for block access exclusion/restriction types. */
var BlockAccessRestrictionType;
(function (BlockAccessRestrictionType) {
    BlockAccessRestrictionType["Availability"] = "Availability";
    BlockAccessRestrictionType["Create"] = "Create";
    BlockAccessRestrictionType["Modify"] = "Modify";
    BlockAccessRestrictionType["Cancel"] = "Cancel";
})(BlockAccessRestrictionType = exports.BlockAccessRestrictionType || (exports.BlockAccessRestrictionType = {}));
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
    BlockClassificationType["Opportunity"] = "Opportunity";
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
/** The type to indicate what revenue is to be used for calculating deposit/cancellation amounts. */
var DepositCancelRevenueType;
(function (DepositCancelRevenueType) {
    DepositCancelRevenueType["Rooms"] = "Rooms";
    DepositCancelRevenueType["Catering"] = "Catering";
    DepositCancelRevenueType["All"] = "All";
})(DepositCancelRevenueType = exports.DepositCancelRevenueType || (exports.DepositCancelRevenueType = {}));
/** Simple type for block inventory control values. This determines if it is a Non Elastic, Elastic or Sell Limits block. */
var BlockInventoryControlType;
(function (BlockInventoryControlType) {
    BlockInventoryControlType["NonElastic"] = "NonElastic";
    BlockInventoryControlType["Elastic"] = "Elastic";
    BlockInventoryControlType["SellLimit"] = "SellLimit";
})(BlockInventoryControlType = exports.BlockInventoryControlType || (exports.BlockInventoryControlType = {}));
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
/** Simple type for block allocation used in room rate grid. */
var AllocationType;
(function (AllocationType) {
    AllocationType["Initial"] = "Initial";
    AllocationType["Actual"] = "Actual";
    AllocationType["Rates"] = "Rates";
    AllocationType["Pickup"] = "Pickup";
    AllocationType["Contract"] = "Contract";
    AllocationType["Available"] = "Available";
    AllocationType["Pickupperc"] = "Pickupperc";
    AllocationType["Changes"] = "Changes";
    AllocationType["Released"] = "Released";
    AllocationType["Houseavailability"] = "Houseavailability";
    AllocationType["SellLimit"] = "SellLimit";
    AllocationType["AvailableSellLimit"] = "AvailableSellLimit";
    AllocationType["MasterAllocInitial"] = "MasterAllocInitial";
    AllocationType["Allocated"] = "Allocated";
    AllocationType["SubAllocResv"] = "SubAllocResv";
    AllocationType["CutoffDate"] = "CutoffDate";
})(AllocationType = exports.AllocationType || (exports.AllocationType = {}));
/** Type of statistic for which summary information is populated. */
var StatisticsSummaryType;
(function (StatisticsSummaryType) {
    StatisticsSummaryType["Potential"] = "Potential";
    StatisticsSummaryType["Actual"] = "Actual";
    StatisticsSummaryType["Variance"] = "Variance";
})(StatisticsSummaryType = exports.StatisticsSummaryType || (exports.StatisticsSummaryType = {}));
/** Contract type. */
var EventTypeType;
(function (EventTypeType) {
    EventTypeType["Convention"] = "Convention";
    EventTypeType["Contract"] = "Contract";
})(EventTypeType = exports.EventTypeType || (exports.EventTypeType = {}));
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
/** Type for block instructions that can be used in requests for partial operations. */
var BlockDetailInstructionType;
(function (BlockDetailInstructionType) {
    BlockDetailInstructionType["AccessExclusions"] = "AccessExclusions";
    BlockDetailInstructionType["Aliases"] = "Aliases";
    BlockDetailInstructionType["AlternateDates"] = "AlternateDates";
    BlockDetailInstructionType["Attachments"] = "Attachments";
    BlockDetailInstructionType["Block"] = "Block";
    BlockDetailInstructionType["BlockNextStatuses"] = "BlockNextStatuses";
    BlockDetailInstructionType["BlockStatusHistory"] = "BlockStatusHistory";
    BlockDetailInstructionType["CatNextStatuses"] = "CatNextStatuses";
    BlockDetailInstructionType["CatStatusHistory"] = "CatStatusHistory";
    BlockDetailInstructionType["Comments"] = "Comments";
    BlockDetailInstructionType["DateProtect"] = "DateProtect";
    BlockDetailInstructionType["ExternalReferences"] = "ExternalReferences";
    BlockDetailInstructionType["GenericRateGrid"] = "GenericRateGrid";
    BlockDetailInstructionType["Header"] = "Header";
    BlockDetailInstructionType["Indicators"] = "Indicators";
    BlockDetailInstructionType["InventoryItems"] = "InventoryItems";
    BlockDetailInstructionType["Owners"] = "Owners";
    BlockDetailInstructionType["Packages"] = "Packages";
    BlockDetailInstructionType["Policies"] = "Policies";
    BlockDetailInstructionType["PrimaryOwners"] = "PrimaryOwners";
    BlockDetailInstructionType["PrimaryProfiles"] = "PrimaryProfiles";
    BlockDetailInstructionType["PrimaryRates"] = "PrimaryRates";
    BlockDetailInstructionType["Profiles"] = "Profiles";
    BlockDetailInstructionType["RateGrid"] = "RateGrid";
    BlockDetailInstructionType["RateProgram"] = "RateProgram";
    BlockDetailInstructionType["Rates"] = "Rates";
    BlockDetailInstructionType["Restrictions"] = "Restrictions";
    BlockDetailInstructionType["SellMessages"] = "SellMessages";
    BlockDetailInstructionType["Statistics"] = "Statistics";
    BlockDetailInstructionType["SummaryStatistics"] = "SummaryStatistics";
    BlockDetailInstructionType["Traces"] = "Traces";
    BlockDetailInstructionType["WashSchedules"] = "WashSchedules";
})(BlockDetailInstructionType = exports.BlockDetailInstructionType || (exports.BlockDetailInstructionType = {}));
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
/** Supported statistical units. */
var StatUnitCategoryType;
(function (StatUnitCategoryType) {
    StatUnitCategoryType["Numeric"] = "Numeric";
    StatUnitCategoryType["Amount"] = "Amount";
})(StatUnitCategoryType = exports.StatUnitCategoryType || (exports.StatUnitCategoryType = {}));
/** Supported housekeeping statistical codes. */
var HSKStatCodeType;
(function (HSKStatCodeType) {
    HSKStatCodeType["ApprovedCompPostings"] = "ApprovedCompPostings";
    HSKStatCodeType["StagedCompPostings"] = "StagedCompPostings";
    HSKStatCodeType["DeclinedCompPostings"] = "DeclinedCompPostings";
    HSKStatCodeType["CompRoutingInstructionsRequests"] = "CompRoutingInstructionsRequests";
    HSKStatCodeType["TotalPhysicalRooms"] = "TotalPhysicalRooms";
    HSKStatCodeType["TotalRoomsToSell"] = "TotalRoomsToSell";
    HSKStatCodeType["TotalOutOfOrder"] = "TotalOutOfOrder";
    HSKStatCodeType["TotalOutOfService"] = "TotalOutOfService";
    HSKStatCodeType["TotalRevenue"] = "TotalRevenue";
    HSKStatCodeType["PercentRoomsOccupied"] = "PercentRoomsOccupied";
    HSKStatCodeType["StayoverRooms"] = "StayoverRooms";
    HSKStatCodeType["StayoverPersons"] = "StayoverPersons";
    HSKStatCodeType["StayoverVIP"] = "StayoverVIP";
    HSKStatCodeType["DeparturesExpectedRooms"] = "DeparturesExpectedRooms";
    HSKStatCodeType["DeparturesExpectedPersons"] = "DeparturesExpectedPersons";
    HSKStatCodeType["DeparturesExpectedVIP"] = "DeparturesExpectedVIP";
    HSKStatCodeType["DeparturesActualRooms"] = "DeparturesActualRooms";
    HSKStatCodeType["DeparturesActualPersons"] = "DeparturesActualPersons";
    HSKStatCodeType["DeparturesActualVIP"] = "DeparturesActualVIP";
    HSKStatCodeType["DeparturesInLastHour"] = "DeparturesInLastHour";
    HSKStatCodeType["ArrivalsInLastHour"] = "ArrivalsInLastHour";
    HSKStatCodeType["ArrivalsTotal"] = "ArrivalsTotal";
    HSKStatCodeType["ArrivalsExpectedRooms"] = "ArrivalsExpectedRooms";
    HSKStatCodeType["ArrivalsExpectedPersons"] = "ArrivalsExpectedPersons";
    HSKStatCodeType["ArrivalsExpectedVIP"] = "ArrivalsExpectedVIP";
    HSKStatCodeType["ArrivalsExpectedRoomsMadeToday"] = "ArrivalsExpectedRoomsMadeToday";
    HSKStatCodeType["ArrivalsExpectedPersonsMadeToday"] = "ArrivalsExpectedPersonsMadeToday";
    HSKStatCodeType["ArrivalsExpectedVIPMadeToday"] = "ArrivalsExpectedVIPMadeToday";
    HSKStatCodeType["ArrivalsActualRooms"] = "ArrivalsActualRooms";
    HSKStatCodeType["ArrivalsActualPersons"] = "ArrivalsActualPersons";
    HSKStatCodeType["ArrivalsActualVIP"] = "ArrivalsActualVIP";
    HSKStatCodeType["ExtendedStaysRooms"] = "ExtendedStaysRooms";
    HSKStatCodeType["ExtendedStaysPersons"] = "ExtendedStaysPersons";
    HSKStatCodeType["ExtendedStaysVIP"] = "ExtendedStaysVIP";
    HSKStatCodeType["DeparturesTotal"] = "DeparturesTotal";
    HSKStatCodeType["EarlyDeparturesRooms"] = "EarlyDeparturesRooms";
    HSKStatCodeType["EarlyDeparturesPersons"] = "EarlyDeparturesPersons";
    HSKStatCodeType["EarlyDeparturesVIP"] = "EarlyDeparturesVIP";
    HSKStatCodeType["DayUseRooms"] = "DayUseRooms";
    HSKStatCodeType["DayUsePersons"] = "DayUsePersons";
    HSKStatCodeType["DayUseVIP"] = "DayUseVIP";
    HSKStatCodeType["WalkInRooms"] = "WalkInRooms";
    HSKStatCodeType["WalkInPersons"] = "WalkInPersons";
    HSKStatCodeType["WalkInVIP"] = "WalkInVIP";
    HSKStatCodeType["CanceledOnArrivalRooms"] = "CanceledOnArrivalRooms";
    HSKStatCodeType["CanceledOnArrivalPersons"] = "CanceledOnArrivalPersons";
    HSKStatCodeType["CanceledOnArrivalVIP"] = "CanceledOnArrivalVIP";
    HSKStatCodeType["ComplimentaryArrivalRooms"] = "ComplimentaryArrivalRooms";
    HSKStatCodeType["ComplimentaryArrivalPersons"] = "ComplimentaryArrivalPersons";
    HSKStatCodeType["ComplimentaryArrivalVIP"] = "ComplimentaryArrivalVIP";
    HSKStatCodeType["ComplimentaryStayoverRooms"] = "ComplimentaryStayoverRooms";
    HSKStatCodeType["ComplimentaryStayoverPersons"] = "ComplimentaryStayoverPersons";
    HSKStatCodeType["ComplimentaryStayoverVIP"] = "ComplimentaryStayoverVIP";
    HSKStatCodeType["ComplimentaryDepartureRooms"] = "ComplimentaryDepartureRooms";
    HSKStatCodeType["ComplimentaryDeparturePersons"] = "ComplimentaryDeparturePersons";
    HSKStatCodeType["ComplimentaryDepartureVIP"] = "ComplimentaryDepartureVIP";
    HSKStatCodeType["HouseUseArrivalVIP"] = "HouseUseArrivalVIP";
    HSKStatCodeType["HouseUseStayoverRooms"] = "HouseUseStayoverRooms";
    HSKStatCodeType["HouseUseStayoverPersons"] = "HouseUseStayoverPersons";
    HSKStatCodeType["HouseUseStayoverVIP"] = "HouseUseStayoverVIP";
    HSKStatCodeType["HouseUseDepartureRooms"] = "HouseUseDepartureRooms";
    HSKStatCodeType["HouseUseDeparturePersons"] = "HouseUseDeparturePersons";
    HSKStatCodeType["HouseUseDepartureVIP"] = "HouseUseDepartureVIP";
    HSKStatCodeType["MinAvailableTonightRooms"] = "MinAvailableTonightRooms";
    HSKStatCodeType["MaxOccupiedTonightRooms"] = "MaxOccupiedTonightRooms";
    HSKStatCodeType["MaxOccupiedTonightPersons"] = "MaxOccupiedTonightPersons";
    HSKStatCodeType["MaxOccupiedTonightVIP"] = "MaxOccupiedTonightVIP";
    HSKStatCodeType["MaxPercentageOccupiedTonightRooms"] = "MaxPercentageOccupiedTonightRooms";
    HSKStatCodeType["BlocksNotPickedUp"] = "BlocksNotPickedUp";
    HSKStatCodeType["IndividualRooms"] = "IndividualRooms";
    HSKStatCodeType["IndividualPersons"] = "IndividualPersons";
    HSKStatCodeType["IndividualVIP"] = "IndividualVIP";
    HSKStatCodeType["GroupAndBlockRooms"] = "GroupAndBlockRooms";
    HSKStatCodeType["GroupAndBlockPersons"] = "GroupAndBlockPersons";
    HSKStatCodeType["GroupAndBlockVIP"] = "GroupAndBlockVIP";
    HSKStatCodeType["RoomRevenue"] = "RoomRevenue";
    HSKStatCodeType["AverageRoomRevenue"] = "AverageRoomRevenue";
    HSKStatCodeType["InspectedRooms"] = "InspectedRooms";
    HSKStatCodeType["InspectedVacant"] = "InspectedVacant";
    HSKStatCodeType["InspectedAssigned"] = "InspectedAssigned";
    HSKStatCodeType["InspectedOccupied"] = "InspectedOccupied";
    HSKStatCodeType["CleanedRooms"] = "CleanedRooms";
    HSKStatCodeType["CleanVacant"] = "CleanVacant";
    HSKStatCodeType["CleanAssigned"] = "CleanAssigned";
    HSKStatCodeType["CleanOccupied"] = "CleanOccupied";
    HSKStatCodeType["DirtyVacant"] = "DirtyVacant";
    HSKStatCodeType["DirtyAssigned"] = "DirtyAssigned";
    HSKStatCodeType["DirtyOccupied"] = "DirtyOccupied";
    HSKStatCodeType["PickupVacant"] = "PickupVacant";
    HSKStatCodeType["PickupAssigned"] = "PickupAssigned";
    HSKStatCodeType["PickupOccupied"] = "PickupOccupied";
    HSKStatCodeType["OutOfOrderVacant"] = "OutOfOrderVacant";
    HSKStatCodeType["OutOfOrderAssigned"] = "OutOfOrderAssigned";
    HSKStatCodeType["OutOfOrderOccupied"] = "OutOfOrderOccupied";
    HSKStatCodeType["OutOfServiceVacant"] = "OutOfServiceVacant";
    HSKStatCodeType["OutOfServiceAssigned"] = "OutOfServiceAssigned";
    HSKStatCodeType["OutOfServiceOccupied"] = "OutOfServiceOccupied";
    HSKStatCodeType["QueueRooms"] = "QueueRooms";
    HSKStatCodeType["TurndownRequired"] = "TurndownRequired";
    HSKStatCodeType["TurndownNotRequired"] = "TurndownNotRequired";
    HSKStatCodeType["TurndownCompletedRequired"] = "TurndownCompletedRequired";
    HSKStatCodeType["AdultsInHouse"] = "AdultsInHouse";
    HSKStatCodeType["ChildrenInHouse"] = "ChildrenInHouse";
    HSKStatCodeType["AdultsExpectedCheckedOut"] = "AdultsExpectedCheckedOut";
    HSKStatCodeType["ChildrenExpectedCheckedOut"] = "ChildrenExpectedCheckedOut";
    HSKStatCodeType["AdultsDeparted"] = "AdultsDeparted";
    HSKStatCodeType["ChildrenDeparted"] = "ChildrenDeparted";
    HSKStatCodeType["InHouseRooms"] = "InHouseRooms";
    HSKStatCodeType["InHouse"] = "InHouse";
    HSKStatCodeType["MaxOccupancyPercentage"] = "MaxOccupancyPercentage";
    HSKStatCodeType["Stayover"] = "Stayover";
    HSKStatCodeType["TotalRoomsReserved"] = "TotalRoomsReserved";
    HSKStatCodeType["RevPar"] = "RevPar";
    HSKStatCodeType["SkipRooms"] = "SkipRooms";
    HSKStatCodeType["SleepRooms"] = "SleepRooms";
    HSKStatCodeType["HouseUseArrivalRooms"] = "HouseUseArrivalRooms";
    HSKStatCodeType["HouseUseArrivalPersons"] = "HouseUseArrivalPersons";
    HSKStatCodeType["AverageCheckInTime"] = "AverageCheckInTime";
    HSKStatCodeType["CurrentAveWaitTime"] = "CurrentAveWaitTime";
    HSKStatCodeType["CheckedInsTotal"] = "CheckedInsTotal";
    HSKStatCodeType["ExpectedCheckInsTotal"] = "ExpectedCheckInsTotal";
    HSKStatCodeType["CheckedOutsTotal"] = "CheckedOutsTotal";
    HSKStatCodeType["ExpectedCheckOutsTotal"] = "ExpectedCheckOutsTotal";
    HSKStatCodeType["ScheduledCheckOutsTotal"] = "ScheduledCheckOutsTotal";
    HSKStatCodeType["RoomMaintenanceResolvedTotal"] = "RoomMaintenanceResolvedTotal";
    HSKStatCodeType["RoomMaintenanceUnResolvedTotal"] = "RoomMaintenanceUnResolvedTotal";
    HSKStatCodeType["PreRegisteredTotal"] = "PreRegisteredTotal";
    HSKStatCodeType["VIPPreRegisteredTotal"] = "VIPPreRegisteredTotal";
    HSKStatCodeType["OpenFolioTotal"] = "OpenFolioTotal";
    HSKStatCodeType["TurndownTotal"] = "TurndownTotal";
    HSKStatCodeType["VIPTurndownTotal"] = "VIPTurndownTotal";
    HSKStatCodeType["VIPGuestsArriving"] = "VIPGuestsArriving";
    HSKStatCodeType["VIPGuestsDeparting"] = "VIPGuestsDeparting";
    HSKStatCodeType["VIPGuestsTotal"] = "VIPGuestsTotal";
    HSKStatCodeType["IndividualAdvanceCheckedInCurrent"] = "IndividualAdvanceCheckedInCurrent";
    HSKStatCodeType["BlockAdvanceCheckedInCurrent"] = "BlockAdvanceCheckedInCurrent";
    HSKStatCodeType["IndividualAdvanceCheckedInInhouse"] = "IndividualAdvanceCheckedInInhouse";
    HSKStatCodeType["BlockAdvanceCheckedInInhouse"] = "BlockAdvanceCheckedInInhouse";
    HSKStatCodeType["IndividualAdvanceCheckedInTotal"] = "IndividualAdvanceCheckedInTotal";
    HSKStatCodeType["BlockAdvanceCheckedInTotal"] = "BlockAdvanceCheckedInTotal";
    HSKStatCodeType["InHouseBlocksTotal"] = "InHouseBlocksTotal";
    HSKStatCodeType["CancellationsTotal"] = "CancellationsTotal";
    HSKStatCodeType["NewReservationsTotal"] = "NewReservationsTotal";
    HSKStatCodeType["ArrivalResvs"] = "ArrivalResvs";
    HSKStatCodeType["ArrivalVIPResvs"] = "ArrivalVIPResvs";
    HSKStatCodeType["ArrivalMemberResvs"] = "ArrivalMemberResvs";
    HSKStatCodeType["ArrivalUnallocResvs"] = "ArrivalUnallocResvs";
    HSKStatCodeType["ArrivalManualAssgnResvs"] = "ArrivalManualAssgnResvs";
    HSKStatCodeType["ArrivalAIAssgnResvs"] = "ArrivalAIAssgnResvs";
    HSKStatCodeType["ArrivalAIUpgResvs"] = "ArrivalAIUpgResvs";
    HSKStatCodeType["ArrivalAIAssgnVIPResvs"] = "ArrivalAIAssgnVIPResvs";
    HSKStatCodeType["ArrivalAIAssgnMemberResvs"] = "ArrivalAIAssgnMemberResvs";
    HSKStatCodeType["ArrivalAIAssgnOverridden"] = "ArrivalAIAssgnOverridden";
})(HSKStatCodeType = exports.HSKStatCodeType || (exports.HSKStatCodeType = {}));
/** Supported housekeeping statistical category codes. */
var HSKStatCategoryCodeType;
(function (HSKStatCategoryCodeType) {
    HSKStatCategoryCodeType["HotelCode"] = "HotelCode";
})(HSKStatCategoryCodeType = exports.HSKStatCategoryCodeType || (exports.HSKStatCategoryCodeType = {}));
/** Supported Housekeeping report codes. */
var HSKStatReportCodeType;
(function (HSKStatReportCodeType) {
    HSKStatReportCodeType["HouseSummary"] = "HouseSummary";
    HSKStatReportCodeType["HouseSummaryMonthToDate"] = "HouseSummaryMonthToDate";
    HSKStatReportCodeType["HouseSummaryYearToDate"] = "HouseSummaryYearToDate";
    HSKStatReportCodeType["ReservationActivity"] = "ReservationActivity";
    HSKStatReportCodeType["ReservationActivityDaily"] = "ReservationActivityDaily";
    HSKStatReportCodeType["ReservationActivityMonthToDate"] = "ReservationActivityMonthToDate";
    HSKStatReportCodeType["ReservationActivityYearToDate"] = "ReservationActivityYearToDate";
    HSKStatReportCodeType["ComplimentaryOrHouseUse"] = "ComplimentaryOrHouseUse";
    HSKStatReportCodeType["DailyProjection"] = "DailyProjection";
    HSKStatReportCodeType["RoomStatus"] = "RoomStatus";
    HSKStatReportCodeType["LastHourStatus"] = "LastHourStatus";
    HSKStatReportCodeType["Turndown"] = "Turndown";
    HSKStatReportCodeType["InHouse"] = "InHouse";
    HSKStatReportCodeType["CheckIns"] = "CheckIns";
    HSKStatReportCodeType["CheckOuts"] = "CheckOuts";
    HSKStatReportCodeType["AvailableRooms"] = "AvailableRooms";
    HSKStatReportCodeType["RoomMaintenance"] = "RoomMaintenance";
    HSKStatReportCodeType["ReservationStatistics"] = "ReservationStatistics";
    HSKStatReportCodeType["VIPGuests"] = "VIPGuests";
    HSKStatReportCodeType["AdvanceCheckIn"] = "AdvanceCheckIn";
    HSKStatReportCodeType["BlockArrivals"] = "BlockArrivals";
    HSKStatReportCodeType["ReservationsCancellationsToday"] = "ReservationsCancellationsToday";
    HSKStatReportCodeType["AIRoomAssignment"] = "AIRoomAssignment";
    HSKStatReportCodeType["CompRouting"] = "CompRouting";
})(HSKStatReportCodeType = exports.HSKStatReportCodeType || (exports.HSKStatReportCodeType = {}));
/** The type of Rate Amount Change to be done on the Sharer reservation. This can be FULL -> Full Rate for each Sharer. SPLIT-> Split the Rate amount between Sharer Reservations. ENTIRE -> This Sharer will get the total amount of the rate code for all the Sharer Reservations. */
var ShareDistributionInstructionType;
(function (ShareDistributionInstructionType) {
    ShareDistributionInstructionType["Full"] = "Full";
    ShareDistributionInstructionType["Entire"] = "Entire";
    ShareDistributionInstructionType["Split"] = "Split";
    ShareDistributionInstructionType["CustomSplit"] = "CustomSplit";
})(ShareDistributionInstructionType = exports.ShareDistributionInstructionType || (exports.ShareDistributionInstructionType = {}));
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
/** Flexible benefit award has been reimbursed. */
var FBAStatusType;
(function (FBAStatusType) {
    FBAStatusType["Ordered"] = "Ordered";
    FBAStatusType["Attached"] = "Attached";
    FBAStatusType["Posted"] = "Posted";
    FBAStatusType["Settled"] = "Settled";
    FBAStatusType["Reimbursed"] = "Reimbursed";
})(FBAStatusType = exports.FBAStatusType || (exports.FBAStatusType = {}));
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
/** Reload transaction. */
var PrepaidCardTrxTypeType;
(function (PrepaidCardTrxTypeType) {
    PrepaidCardTrxTypeType["Activate"] = "Activate";
    PrepaidCardTrxTypeType["Cancel"] = "Cancel";
    PrepaidCardTrxTypeType["Cashout"] = "Cashout";
    PrepaidCardTrxTypeType["Inquiry"] = "Inquiry";
    PrepaidCardTrxTypeType["Issue"] = "Issue";
    PrepaidCardTrxTypeType["Redeem"] = "Redeem";
    PrepaidCardTrxTypeType["Reload"] = "Reload";
})(PrepaidCardTrxTypeType = exports.PrepaidCardTrxTypeType || (exports.PrepaidCardTrxTypeType = {}));
/** Status which indicates that the Request of Comp Routing was declined */
var CompRoutingStatusType;
(function (CompRoutingStatusType) {
    CompRoutingStatusType["Request"] = "Request";
    CompRoutingStatusType["Comp"] = "Comp";
    CompRoutingStatusType["Declined"] = "Declined";
})(CompRoutingStatusType = exports.CompRoutingStatusType || (exports.CompRoutingStatusType = {}));
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
/** Valid values are All, Same Arrival Date, Checked In, Selected, In House. */
var BlockApplyChangesToType;
(function (BlockApplyChangesToType) {
    BlockApplyChangesToType["All"] = "All";
    BlockApplyChangesToType["SameArrivalDate"] = "SameArrivalDate";
    BlockApplyChangesToType["CheckedIn"] = "CheckedIn";
    BlockApplyChangesToType["Reservations"] = "Reservations";
    BlockApplyChangesToType["StayOn"] = "StayOn";
})(BlockApplyChangesToType = exports.BlockApplyChangesToType || (exports.BlockApplyChangesToType = {}));
/** Sending this instruction would skip applying credit card payment types to other block reservations. */
var ChangeBlockResvInstructionType;
(function (ChangeBlockResvInstructionType) {
    ChangeBlockResvInstructionType["ApplyRateToAllRoomTypes"] = "ApplyRateToAllRoomTypes";
    ChangeBlockResvInstructionType["ExcludeCreditCardPaymentTypes"] = "ExcludeCreditCardPaymentTypes";
})(ChangeBlockResvInstructionType = exports.ChangeBlockResvInstructionType || (exports.ChangeBlockResvInstructionType = {}));
/** Type of statistic for which its statistics information by date and room type will be populated. */
var StatisticsType;
(function (StatisticsType) {
    StatisticsType["Contract"] = "Contract";
    StatisticsType["Initial"] = "Initial";
    StatisticsType["Actual"] = "Actual";
    StatisticsType["Pickup"] = "Pickup";
    StatisticsType["Available"] = "Available";
    StatisticsType["Change"] = "Change";
    StatisticsType["Rates"] = "Rates";
    StatisticsType["Totalavailable"] = "Totalavailable";
    StatisticsType["Tentativereservations"] = "Tentativereservations";
    StatisticsType["Pickuppersons"] = "Pickuppersons";
    StatisticsType["Roomrevenue"] = "Roomrevenue";
    StatisticsType["Totalrevenue"] = "Totalrevenue";
    StatisticsType["Avgroomrate"] = "Avgroomrate";
})(StatisticsType = exports.StatisticsType || (exports.StatisticsType = {}));
/** Response types used in the Apply Final Postings request. Based on the request the folio summary , folio details or no details will be returned in the response. */
var ResponseInstructionType;
(function (ResponseInstructionType) {
    ResponseInstructionType["None"] = "None";
    ResponseInstructionType["Summary"] = "Summary";
    ResponseInstructionType["Details"] = "Details";
})(ResponseInstructionType = exports.ResponseInstructionType || (exports.ResponseInstructionType = {}));
/** Enumerates range operation modes. */
var BlockRangeModeType;
(function (BlockRangeModeType) {
    BlockRangeModeType["Core"] = "Core";
    BlockRangeModeType["ShoulderStart"] = "ShoulderStart";
    BlockRangeModeType["ShoulderEnd"] = "ShoulderEnd";
})(BlockRangeModeType = exports.BlockRangeModeType || (exports.BlockRangeModeType = {}));
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
        this.instance = axios_1.default.create(Object.assign(Object.assign({}, axiosConfig), { baseURL: new URL('/blk/v1', axiosConfig.baseURL).toString() }));
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
 * @title OPERA Cloud Block API
 * @version 22.3.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /blk/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 22.3.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
class Api extends HttpClient {
    constructor() {
        super(...arguments);
        this.allocation = {
            /**
             * @description Use this API to create sub allocation. <p><strong>OperationId:</strong>postSubAllocation</p>
             *
             * @tags Block
             * @name PostSubAllocation
             * @summary Create Sub allocation
             * @request POST:/allocation
             */
            postSubAllocation: (hotelId, subAllocation, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/allocation`, method: 'POST', body: subAllocation, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.blockActivityLog = {
            /**
             * @description Use this API to facilitate retrieving the block activity log. <p><strong>OperationId:</strong>getBlockActivityLog</p>
             *
             * @tags Block
             * @name GetBlockActivityLog
             * @summary Get the Block activity log
             * @request GET:/blockActivityLog
             */
            getBlockActivityLog: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blockActivityLog`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.blockWash = {
            /**
             * @description This API removes block allocation to a range of dates for a set of room types. <p><strong>OperationId:</strong>putBlockAllocationWash</p>
             *
             * @tags Block
             * @name PutBlockAllocationWash
             * @summary Update Block Allocation Wash
             * @request PUT:/blockWash
             */
            putBlockAllocationWash: (hotelId, blockAllocationWash, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blockWash`, method: 'PUT', body: blockAllocationWash, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API retrieves block information needed to perform block wash operation. <p><strong>OperationId:</strong>getBlockWashInfo</p>
             *
             * @tags Block
             * @name GetBlockWashInfo
             * @summary Get Block Wash Information
             * @request GET:/blockWash
             */
            getBlockWashInfo: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blockWash`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.blocks = {
            /**
             * @description Use this API to retrieve blocks.  You can use the query parameters to narrow down your results. <p><strong>OperationId:</strong>getBlocks</p>
             *
             * @tags Block
             * @name GetBlocks
             * @summary Get Blocks
             * @request GET:/blocks
             */
            getBlocks: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blocks`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to validate if block rate code has overlapping blocks and also validates and creates block details. <p><strong>OperationId:</strong>postBlockValidate</p>
             *
             * @tags Block
             * @name PostBlockValidate
             * @summary Validate Block
             * @request POST:/blocks/actions/validate
             */
            postBlockValidate: (hotelId, blockValidate, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blocks/actions/validate`, method: 'POST', body: blockValidate, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to retrieve block daily statistics for the given date range and hotel ID. It returns allocated, picked up, and available number of room nights per block, per day, per room type.<p><strong>OperationId:</strong>getBlockDailyStatistics</p>
             *
             * @tags Block
             * @name GetBlockDailyStatistics
             * @summary Get Block Daily Statistics
             * @request GET:/blocks/dailyStatistics
             */
            getBlockDailyStatistics: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blocks/dailyStatistics`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API retrieves block statistics. <p><strong>OperationId:</strong>getBlockStats</p>
             *
             * @tags BlockStats
             * @name GetBlockStats
             * @summary Get Block statistics
             * @request GET:/blocks/statistics
             */
            getBlockStats: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blocks/statistics`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to retrieve next set of statuses and their next statuses for the current status passed in the request. <p><strong>OperationId:</strong>getNextBlockStatus</p>
             *
             * @tags Block
             * @name GetNextBlockStatus
             * @summary Get Next Block Status
             * @request GET:/blocks/status
             */
            getNextBlockStatus: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blocks/status`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API validates the block code for the following if applicable - Unique block code/ Start of inventory week/ Block code template. <p><strong>OperationId:</strong>putValidateBlockCode</p>
             *
             * @tags Block
             * @name PutValidateBlockCode
             * @summary Validate Block Code
             * @request PUT:/blocks/{blockCode}/actions/validate
             */
            putValidateBlockCode: (hotelId, blockCode, blockCodeToValidate, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blocks/${blockCode}/actions/validate`, method: 'PUT', body: blockCodeToValidate, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create alternate dates for a block. <p><strong>OperationId:</strong>postAlternateDates</p>
             *
             * @tags Block
             * @name PostAlternateDates
             * @summary Create alternate dates for a Block
             * @request POST:/blocks/{blockId}/alternateDates
             */
            postAlternateDates: (hotelId, blockId, blockAlternateDates, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blocks/${blockId}/alternateDates`, method: 'POST', body: blockAlternateDates, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to change alternate dates for a block. <p><strong>OperationId:</strong>putAlternateDates</p>
             *
             * @tags Block
             * @name PutAlternateDates
             * @summary Change alternate dates for a Block
             * @request PUT:/blocks/{blockId}/alternateDates
             */
            putAlternateDates: (hotelId, blockId, blockAlternateDates, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blocks/${blockId}/alternateDates`, method: 'PUT', body: blockAlternateDates, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete alternate dates for a block. <p><strong>OperationId:</strong>deleteAlternateDates</p>
             *
             * @tags Block
             * @name DeleteAlternateDates
             * @summary Delete alternate dates for a Block
             * @request DELETE:/blocks/{blockId}/alternateDates
             */
            deleteAlternateDates: (hotelId, blockId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blocks/${blockId}/alternateDates`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to retrieve block attachments. <p><strong>OperationId:</strong>getBlockAttachments</p>
             *
             * @tags Block
             * @name GetBlockAttachments
             * @summary Get Block Attachments
             * @request GET:/blocks/{blockId}/attachments
             */
            getBlockAttachments: (hotelId, blockId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blocks/${blockId}/attachments`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API remove block attachments. <p><strong>OperationId:</strong>deleteBlockAttachment</p>
             *
             * @tags Block
             * @name DeleteBlockAttachment
             * @summary Delete Block Attachment
             * @request DELETE:/blocks/{blockId}/attachments/{attachId}
             */
            deleteBlockAttachment: (hotelId, attachId, blockId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blocks/${blockId}/attachments/${attachId}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Us this API to create/change block access exclusion information. <p><strong>OperationId:</strong>putBlockAccessExclusion</p>
             *
             * @tags Block
             * @name PutBlockAccessExclusion
             * @summary Set Block Exclusion information
             * @request PUT:/blocks/{blockId}/blockAccessExclusion
             */
            putBlockAccessExclusion: (hotelId, blockId, blockAccessExclusion, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blocks/${blockId}/blockAccessExclusion`, method: 'PUT', body: blockAccessExclusion, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API retrieves block exclusion information. <p><strong>OperationId:</strong>getBlockAccessExclusion</p>
             *
             * @tags Block
             * @name GetBlockAccessExclusion
             * @summary Get Block exclusion information
             * @request GET:/blocks/{blockId}/blockAccessExclusion
             */
            getBlockAccessExclusion: (hotelId, blockId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blocks/${blockId}/blockAccessExclusion`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete block access exclusion <p><strong>OperationId:</strong>deleteBlockAccessExclusion</p>
             *
             * @tags Block
             * @name DeleteBlockAccessExclusion
             * @summary Delete Block access exclusion
             * @request DELETE:/blocks/{blockId}/blockAccessExclusion
             */
            deleteBlockAccessExclusion: (hotelId, blockId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blocks/${blockId}/blockAccessExclusion`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API cuts off block allocation effective current date. <p><strong>OperationId:</strong>putBlockCutoff</p>
             *
             * @tags Block
             * @name PutBlockCutoff
             * @summary Block Cut Off
             * @request PUT:/blocks/{blockId}/blockCutOff
             */
            putBlockCutoff: (hotelId, blockId, blockStatus, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blocks/${blockId}/blockCutOff`, method: 'PUT', body: blockStatus, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to retrieve block owners. <p><strong>OperationId:</strong>getBlockOwners</p>
             *
             * @tags Block
             * @name GetBlockOwners
             * @summary Get Block owners
             * @request GET:/blocks/{blockId}/owners
             */
            getBlockOwners: (hotelId, blockId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blocks/${blockId}/owners`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to assign block owners. <p><strong>OperationId:</strong>postBlockOwners</p>
             *
             * @tags Block
             * @name PostBlockOwners
             * @summary Assign a Block owner
             * @request POST:/blocks/{blockId}/owners
             */
            postBlockOwners: (hotelId, blockId, blockOwnersToAssign, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blocks/${blockId}/owners`, method: 'POST', body: blockOwnersToAssign, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete a block owner. <p><strong>OperationId:</strong>deleteBlockOwners</p>
             *
             * @tags Block
             * @name DeleteBlockOwners
             * @summary Delete a Block owner
             * @request DELETE:/blocks/{blockId}/owners
             */
            deleteBlockOwners: (hotelId, blockId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blocks/${blockId}/owners`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to change block owners. <p><strong>OperationId:</strong>putBlockOwners</p>
             *
             * @tags Block
             * @name PutBlockOwners
             * @summary Change Block owners
             * @request PUT:/blocks/{blockId}/owners
             */
            putBlockOwners: (hotelId, blockId, blockOwnersToChange, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blocks/${blockId}/owners`, method: 'PUT', body: blockOwnersToChange, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to refreshes block rates. <p><strong>OperationId:</strong>putBlockRates</p>
             *
             * @tags Block
             * @name PutBlockRates
             * @summary Refreshes Block rates
             * @request PUT:/blocks/{blockId}/rates
             */
            putBlockRates: (hotelId, blockId, blockStatus, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blocks/${blockId}/rates`, method: 'PUT', body: blockStatus, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to make changes to block reservations. <p><strong>OperationId:</strong>putBlockReservations</p>
             *
             * @tags Block
             * @name PutBlockReservations
             * @summary Change Block reservations
             * @request PUT:/blocks/{blockId}/reservations
             */
            putBlockReservations: (hotelId, blockId, blockReservationsToChange, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blocks/${blockId}/reservations`, method: 'PUT', body: blockReservationsToChange, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to  retrieve all reservations created for the block. <p><strong>OperationId:</strong>getBlockReservations</p>
             *
             * @tags Block
             * @name GetBlockReservations
             * @summary Retrieves all reservations created for the Block
             * @request GET:/blocks/{blockId}/reservations
             */
            getBlockReservations: (hotelId, blockId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blocks/${blockId}/reservations`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API retrieves block restrictions. <p><strong>OperationId:</strong>getBlockRestrictions</p>
             *
             * @tags Block
             * @name GetBlockRestrictions
             * @summary Get Block restrictions
             * @request GET:/blocks/{blockId}/restrictions
             */
            getBlockRestrictions: (hotelId, blockId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blocks/${blockId}/restrictions`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create block restrictions. <p><strong>OperationId:</strong>postBlockRestriction</p>
             *
             * @tags Block
             * @name PostBlockRestriction
             * @summary Create Block Restriction
             * @request POST:/blocks/{blockId}/restrictions
             */
            postBlockRestriction: (hotelId, blockId, blockRestriction, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blocks/${blockId}/restrictions`, method: 'POST', body: blockRestriction, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete block restrictions. <p><strong>OperationId:</strong>deleteBlockRestriction</p>
             *
             * @tags Block
             * @name DeleteBlockRestriction
             * @summary Delete Block Restriction
             * @request DELETE:/blocks/{blockId}/restrictions
             */
            deleteBlockRestriction: (hotelId, blockId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blocks/${blockId}/restrictions`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API clears all block restrictions for a given date. <p><strong>OperationId:</strong>putClearAllRestrictions</p>
             *
             * @tags Block
             * @name PutClearAllRestrictions
             * @summary Clear-All Block Restrictions
             * @request PUT:/blocks/{blockId}/restrictions
             */
            putClearAllRestrictions: (hotelId, blockId, allRestrictions, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blocks/${blockId}/restrictions`, method: 'PUT', body: allRestrictions, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API will fetch revenue changes for a specific block recorded in the revenue change log for a specified date range. Please note that the revenue changes are delta changes only and single records do not represent a total summary of the block revenue per date. <p><strong>OperationId:</strong>getBlockRevenueChanges</p>
             *
             * @tags Block
             * @name GetBlockRevenueChanges
             * @summary Fetch Block Revenue Changes
             * @request GET:/blocks/{blockId}/revenueActivityLog
             */
            getBlockRevenueChanges: (hotelId, blockId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blocks/${blockId}/revenueActivityLog`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to set room type order for a block. <p><strong>OperationId:</strong>putRoomTypeOrder</p>
             *
             * @tags Block
             * @name PutRoomTypeOrder
             * @summary Set room type order for a Block
             * @request PUT:/blocks/{blockId}/roomTypeOrder
             */
            putRoomTypeOrder: (hotelId, blockId, roomTypeOrder, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blocks/${blockId}/roomTypeOrder`, method: 'PUT', body: roomTypeOrder, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to retrieve room types for a block based on search criteria <p><strong>OperationId:</strong>getBlockRoomTypes</p>
             *
             * @tags Block
             * @name GetBlockRoomTypes
             * @summary Get Bock Room Types
             * @request GET:/blocks/{blockId}/roomTypes
             */
            getBlockRoomTypes: (hotelId, blockId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blocks/${blockId}/roomTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create a Reservation Rooming List. <p><strong>OperationId:</strong>postRoomingList</p>
             *
             * @tags Block
             * @name PostRoomingList
             * @summary Create Block Rooming List Reservations
             * @request POST:/blocks/{blockId}/roomingList
             */
            postRoomingList: (hotelId, blockId, roomingList, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blocks/${blockId}/roomingList`, method: 'POST', body: roomingList, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API facilitates retrieving room status for the block. <p><strong>OperationId:</strong>getBlockRoomsStatus</p>
             *
             * @tags Block
             * @name GetBlockRoomsStatus
             * @summary Get room status for a Block
             * @request GET:/blocks/{blockId}/roomsStatus
             */
            getBlockRoomsStatus: (hotelId, blockId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blocks/${blockId}/roomsStatus`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to API retrieve detailed block statistics <p><strong>OperationId:</strong>getBlockStatistics</p>
             *
             * @tags Block
             * @name GetBlockStatistics
             * @summary Get Block Statistics
             * @request GET:/blocks/{blockId}/statistics
             */
            getBlockStatistics: (hotelId, blockId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blocks/${blockId}/statistics`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to retrieve block status change log based on the HotelCode and Block ID. <p><strong>OperationId:</strong>getBlockStatusChanges</p>
             *
             * @tags Block
             * @name GetBlockStatusChanges
             * @summary Get Block Status Activity Log
             * @request GET:/blocks/{blockId}/statusActivityLog
             */
            getBlockStatusChanges: (hotelId, blockId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blocks/${blockId}/statusActivityLog`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create a block tour series. <p><strong>OperationId:</strong>postTourSeries</p>
             *
             * @tags Block
             * @name PostTourSeries
             * @summary Create a Block tour series
             * @request POST:/blocks/{blockId}/tourSeries
             */
            postTourSeries: (hotelId, blockId, tourSeries, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blocks/${blockId}/tourSeries`, method: 'POST', body: tourSeries, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to retrieve the information regarding block wash schedule based on the parameter HotelCode and Block ID. <p><strong>OperationId:</strong>getBlockWashSchedules</p>
             *
             * @tags Block
             * @name GetBlockWashSchedules
             * @summary Get Block Wash Schedule
             * @request GET:/blocks/{blockId}/washSchedules
             */
            getBlockWashSchedules: (hotelId, blockId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blocks/${blockId}/washSchedules`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API creates new block wash schedules based on Wash Date, Room Type, Occupancy detail, Sell limit and Wash by percent value. <p><strong>OperationId:</strong>postBlockWashSchedules</p>
             *
             * @tags Block
             * @name PostBlockWashSchedules
             * @summary Create Block Wash Schedules
             * @request POST:/blocks/{blockId}/washSchedules
             */
            postBlockWashSchedules: (hotelId, blockId, blockWashSchedulesInfo, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blocks/${blockId}/washSchedules`, method: 'POST', body: blockWashSchedulesInfo, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API changes block wash schedules Wash Date, Room Type, Occupancy detail, Sell limit and Wash by percent value. <p><strong>OperationId:</strong>putBlockWashSchedules</p>
             *
             * @tags Block
             * @name PutBlockWashSchedules
             * @summary Change Block Wash Schedules
             * @request PUT:/blocks/{blockId}/washSchedules
             */
            putBlockWashSchedules: (hotelId, blockId, blockWashSchedulesInfo, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blocks/${blockId}/washSchedules`, method: 'PUT', body: blockWashSchedulesInfo, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to remove block wash schedules based on the HotelCode, Block ID and Wash Date. <p><strong>OperationId:</strong>deleteBlockWashSchedules</p>
             *
             * @tags Block
             * @name DeleteBlockWashSchedules
             * @summary Remove Block Wash Schedules
             * @request DELETE:/blocks/{blockId}/washSchedules
             */
            deleteBlockWashSchedules: (hotelId, blockId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blocks/${blockId}/washSchedules`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to copy the a block. The block copied (Source block) will serve as a template for the new one. <p><strong>OperationId:</strong>postCopyBlock</p>
             *
             * @tags Block
             * @name PostCopyBlock
             * @summary Copy a Block
             * @request POST:/blocks/{sourceBlockId}/copy
             */
            postCopyBlock: (hotelId, sourceBlockId, blockCopy, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/blocks/${sourceBlockId}/copy`, method: 'POST', body: blockCopy, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.caterings = {
            /**
             * @description Use this API to update catering status. <p><strong>OperationId:</strong>putCateringStatus</p>
             *
             * @tags Block
             * @name PutCateringStatus
             * @summary Change Catering Status
             * @request PUT:/caterings/{eventId}/cateringStatus
             */
            putCateringStatus: (hotelId, eventId, cateringStatusToChange, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/caterings/${eventId}/cateringStatus`, method: 'PUT', body: cateringStatusToChange, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.contractDefaults = {
            /**
             * @description Use this API to set the contract defaults. <p><strong>OperationId:</strong>putContractDefaults</p>
             *
             * @tags Block
             * @name PutContractDefaults
             * @summary Set Contract Defaults
             * @request PUT:/contractDefaults
             */
            putContractDefaults: (hotelId, blockStatus, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/contractDefaults`, method: 'PUT', body: blockStatus, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.defaultBlockCode = {
            /**
             * @description Use this API to retrieve a default block code based on template. <p><strong>OperationId:</strong>getDefaultBlockCode</p>
             *
             * @tags Block
             * @name GetDefaultBlockCode
             * @summary Get default Block Code
             * @request GET:/defaultBlockCode
             */
            getDefaultBlockCode: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/defaultBlockCode`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.hotels = {
            /**
             * @description Use this API to create a new group block in OPERA Cloud. You must first use the ListOfValues APIs to find block attributes, such as Block Status, Room Types, and so on. Knowing this list of values helps ensure a successful postBlock. <p><strong>OperationId:</strong>postBlock</p>
             *
             * @tags Block
             * @name PostBlock
             * @summary Create a Block
             * @request POST:/hotels/{hotelId}/block
             */
            postBlock: (hotelId, block, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/block`, method: 'POST', body: block, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to retrieve a specific block.  You will need to know the blockID in the request; if you don't know it, please go ahead and use getBlocks API first.  The response will include detailed information about the block. <p><strong>OperationId:</strong>getBlock</p>
             *
             * @tags Block
             * @name GetBlock
             * @summary Get a Block By ID
             * @request GET:/hotels/{hotelId}/blocks/{blockId}
             */
            getBlock: (blockId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/blocks/${blockId}`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update an existing group block in OPERA Cloud. This API allows update of block header information, such as description, market segment, source code, rate code, and other details, but does not include updates for room grid or events, which have their own update API calls. <p><strong>OperationId:</strong>putBlock</p>
             *
             * @tags Block
             * @name PutBlock
             * @summary Change a Block
             * @request PUT:/hotels/{hotelId}/blocks/{blockId}
             */
            putBlock: (blockId, hotelId, blockToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/blocks/${blockId}`, method: 'PUT', body: blockToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete block, if any reservations attached to the block, you will be unable to delete.  <p><strong>OperationId:</strong>deleteBlock</p>
             *
             * @tags Block
             * @name DeleteBlock
             * @summary Delete a Block
             * @request DELETE:/hotels/{hotelId}/blocks/{blockId}
             */
            deleteBlock: (blockId, hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/blocks/${blockId}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to add block room type allocations and rates to a specified Block. <p><strong>OperationId:</strong>putBlockAllocation</p>
             *
             * @tags Block
             * @name PutBlockAllocation
             * @summary Set Block Allocation
             * @request PUT:/hotels/{hotelId}/blocks/{blockId}/allocation
             */
            putBlockAllocation: (blockId, hotelId, allocation, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/blocks/${blockId}/allocation`, method: 'PUT', body: allocation, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to set block allocation for a range of dates for a list of room types. <p><strong>OperationId:</strong>putBlockAllocationRange</p>
             *
             * @tags Block
             * @name PutBlockAllocationRange
             * @summary Set Block Allocation Range
             * @request PUT:/hotels/{hotelId}/blocks/{blockId}/allocationRange
             */
            putBlockAllocationRange: (blockId, hotelId, blockAllocationRange, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/blocks/${blockId}/allocationRange`, method: 'PUT', body: blockAllocationRange, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Request for updating block allocation for a range of dates. <p><strong>OperationId:</strong>getBlockRangeInfo</p>
             *
             * @tags Block
             * @name GetBlockRangeInfo
             * @summary Get Block Range Information
             * @request GET:/hotels/{hotelId}/blocks/{blockId}/allocationRange
             */
            getBlockRangeInfo: (blockId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/blocks/${blockId}/allocationRange`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to search for availability on an OPERA block.  You will need to know the block ID.  Once you know what rooms and rates are available you can proceed to post a block reservation. <p><strong>OperationId:</strong>getBlockAvailability</p>
             *
             * @tags Block
             * @name GetBlockAvailability
             * @summary Get Block AvailaBility
             * @request GET:/hotels/{hotelId}/blocks/{blockId}/availability
             */
            getBlockAvailability: (blockId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/blocks/${blockId}/availability`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to complete a cancellation of the block. <p><strong>OperationId:</strong>postCancelBlock</p>
             *
             * @tags Block
             * @name PostCancelBlock
             * @summary Cancel the Block
             * @request POST:/hotels/{hotelId}/blocks/{blockId}/cancellations
             */
            postCancelBlock: (blockId, hotelId, blockToCancel, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/blocks/${blockId}/cancellations`, method: 'POST', body: blockToCancel, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to transition booking status in allotment header to an Open for Pickup Status, which ready to receive reservation bookings. <p><strong>OperationId:</strong>putBlockStatusToOpen</p>
             *
             * @tags Block
             * @name PutBlockStatusToOpen
             * @summary Change Block status to Open
             * @request PUT:/hotels/{hotelId}/blocks/{blockId}/openStatus
             */
            putBlockStatusToOpen: (blockId, hotelId, blockStatus, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/blocks/${blockId}/openStatus`, method: 'PUT', body: blockStatus, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create a new posting Master reservation against a block in OPERA.  The block status in OPERA needs to be 'Open for Pick up' to successfully post a BlockPostingMaster reservation. <p><strong>OperationId:</strong>postBlockPostingMaster</p>
             *
             * @tags Block
             * @name PostBlockPostingMaster
             * @summary Create Block posting master
             * @request POST:/hotels/{hotelId}/blocks/{blockId}/postingMaster
             */
            postBlockPostingMaster: (blockId, hotelId, blockPostingMaster, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/blocks/${blockId}/postingMaster`, method: 'POST', body: blockPostingMaster, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to retrieve PM (Posting Master) reservations for a block. <p><strong>OperationId:</strong>getBlockPMReservations</p>
             *
             * @tags Block
             * @name GetBlockPmReservations
             * @summary Get Posting Master Reservations for a Block
             * @request GET:/hotels/{hotelId}/blocks/{blockId}/postingMaster/reservations
             */
            getBlockPmReservations: (blockId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/blocks/${blockId}/postingMaster/reservations`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to change rate override. <p><strong>OperationId:</strong>changeRateOverride</p>
             *
             * @tags Block
             * @name ChangeRateOverride
             * @summary Change rate override
             * @request PUT:/hotels/{hotelId}/blocks/{blockId}/rate/override
             */
            changeRateOverride: (blockId, hotelId, rateOverride, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/blocks/${blockId}/rate/override`, method: 'PUT', body: rateOverride, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to move or shift the dates of a block in OPERA.  <p><strong>OperationId:</strong>putBlockShift</p>
             *
             * @tags Block
             * @name PutBlockShift
             * @summary Shifts the Block start date
             * @request PUT:/hotels/{hotelId}/blocks/{blockId}/shifts
             */
            putBlockShift: (blockId, hotelId, blockToShift, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/blocks/${blockId}/shifts`, method: 'PUT', body: blockToShift, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this to change the status of a block in Opera.  To know a hotels Block status codes, use the List Of Values API - BlockStatuses.  Also note, you can only change the status in a particular order, for example INQ to DEF, but not DEF to INQ. <p><strong>OperationId:</strong>putBlockStatus</p>
             *
             * @tags Block
             * @name PutBlockStatus
             * @summary Change the Status of a Block
             * @request PUT:/hotels/{hotelId}/blocks/{blockId}/status
             */
            putBlockStatus: (blockId, hotelId, blockStatusToChange, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/blocks/${blockId}/status`, method: 'PUT', body: blockStatusToChange, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this when you want to create a sub block.You will need to know the OPERA Block ID, which you want this sub block to fall under. <p><strong>OperationId:</strong>postSubBlock</p>
             *
             * @tags Block
             * @name PostSubBlock
             * @summary Create a sub-Block
             * @request POST:/hotels/{hotelId}/blocks/{blockId}/subBlocks
             */
            postSubBlock: (blockId, hotelId, subBlock, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/blocks/${blockId}/subBlocks`, method: 'POST', body: subBlock, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to retrieve a specific block.  You will need to know the blockID in the request; if you don't know it, please go ahead and use getBlocks API first.  The response will include detailed information about the block. <p><strong>OperationId:</strong>getBlockByExtId</p>
             *
             * @tags Block
             * @name GetBlockByExtId
             * @summary Get a Block By ID
             * @request GET:/hotels/{hotelId}/externalSystems/{externalSystemCode}/blocks/{blockExternalId}
             */
            getBlockByExtId: (blockExternalId, externalSystemCode, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/externalSystems/${externalSystemCode}/blocks/${blockExternalId}`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to update an existing block.  You must know the block ID for the request message.  Use getBlocks if you dont already know the block ID. <p><strong>OperationId:</strong>putBlockByExtId</p>
             *
             * @tags Block
             * @name PutBlockByExtId
             * @summary Change a Block
             * @request PUT:/hotels/{hotelId}/externalSystems/{externalSystemCode}/blocks/{blockExternalId}
             */
            putBlockByExtId: (blockExternalId, externalSystemCode, hotelId, blockToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/externalSystems/${externalSystemCode}/blocks/${blockExternalId}`, method: 'PUT', body: blockToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to add block room type allocations and rates to a specified Block. <p><strong>OperationId:</strong>putBlockAllocationByExtId</p>
             *
             * @tags Block
             * @name PutBlockAllocationByExtId
             * @summary Set Block Allocation
             * @request PUT:/hotels/{hotelId}/externalSystems/{externalSystemCode}/blocks/{blockExternalId}/allocation/roomTypes/{roomType}
             */
            putBlockAllocationByExtId: (roomType, blockExternalId, externalSystemCode, hotelId, allocation, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/externalSystems/${externalSystemCode}/blocks/${blockExternalId}/allocation/roomTypes/${roomType}`, method: 'PUT', body: allocation, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to set block allocation for a range of dates for a list of room types. <p><strong>OperationId:</strong>putBlockAllocationRangeByExtId</p>
             *
             * @tags Block
             * @name PutBlockAllocationRangeByExtId
             * @summary Set Block Allocation Range
             * @request PUT:/hotels/{hotelId}/externalSystems/{externalSystemCode}/blocks/{blockExternalId}/allocationRange
             */
            putBlockAllocationRangeByExtId: (blockExternalId, externalSystemCode, hotelId, blockAllocationRange, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/externalSystems/${externalSystemCode}/blocks/${blockExternalId}/allocationRange`, method: 'PUT', body: blockAllocationRange, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to retrieve PM (Posting Master) reservations for a block. <p><strong>OperationId:</strong>getBlockPMReservationsByExtId</p>
             *
             * @tags Block
             * @name GetBlockPmReservationsByExtId
             * @summary Get Posting Master Reservations for a Block
             * @request GET:/hotels/{hotelId}/externalSystems/{externalSystemCode}/blocks/{blockExternalId}/postingMaster/reservations
             */
            getBlockPmReservationsByExtId: (blockExternalId, externalSystemCode, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/externalSystems/${externalSystemCode}/blocks/${blockExternalId}/postingMaster/reservations`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this to change the status of a block in Opera.  To know a hotels Block status codes, use the List Of Values API - BlockStatuses.  Also note, you can only change the status in a particular order, for example INQ to DEF, but not DEF to INQ. <p><strong>OperationId:</strong>putBlockStatusByExtId</p>
             *
             * @tags Block
             * @name PutBlockStatusByExtId
             * @summary Change the Status of a Block
             * @request PUT:/hotels/{hotelId}/externalSystems/{externalSystemCode}/blocks/{blockExternalId}/status
             */
            putBlockStatusByExtId: (blockExternalId, externalSystemCode, hotelId, blockStatusToChange, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/externalSystems/${externalSystemCode}/blocks/${blockExternalId}/status`, method: 'PUT', body: blockStatusToChange, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this when you want to create a sub block.You will need to know the OPERA Block ID, which you want this sub block to fall under. <p><strong>OperationId:</strong>postSubBlockByExtId</p>
             *
             * @tags Block
             * @name PostSubBlockByExtId
             * @summary Create a sub-Block
             * @request POST:/hotels/{hotelId}/externalSystems/{externalSystemCode}/blocks/{blockExternalId}/subBlocks
             */
            postSubBlockByExtId: (blockExternalId, externalSystemCode, hotelId, subBlock, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/externalSystems/${externalSystemCode}/blocks/${blockExternalId}/subBlocks`, method: 'POST', body: subBlock, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to get traces for Reservations and Blocks. <p><strong>OperationId:</strong>getTracesByDateRange</p>
             *
             * @tags Block
             * @name GetTracesByDateRange
             * @summary Get Traces By Date Range
             * @request GET:/hotels/{hotelId}/tracesByDateRange
             */
            getTracesByDateRange: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/tracesByDateRange`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.inventory = {
            /**
             * @description Use this API to borrow inventory from the block or house when you encounter an insufficient number of rooms for block a reservation. <p><strong>OperationId:</strong>putInventory</p>
             *
             * @tags Block
             * @name PutInventory
             * @summary Borrow Inventory
             * @request PUT:/inventory
             */
            putInventory: (hotelId, inventoryToBorrow, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/inventory`, method: 'PUT', body: inventoryToBorrow, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.inventoryReleased = {
            /**
             * @description Use this API to return the previously borrowed inventory on the block back to the original source from which it was borrowed. The original source can be a room type or house inventory, as indicated in the request. <p><strong>OperationId:</strong>putReleasedInventory</p>
             *
             * @tags Block
             * @name PutReleasedInventory
             * @summary Return Borrowed Inventory
             * @request PUT:/inventoryReleased
             */
            putReleasedInventory: (hotelId, borrowedInventoryToReturn, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/inventoryReleased`, method: 'PUT', body: borrowedInventoryToReturn, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.inventoryToBorrow = {
            /**
             * @description Use this API to retrieve borrowable inventory for the requested dates when encountering an insufficient number of rooms in a block for a specific room type, or for overall inventory. This operations would usually be used when attempting to pick up a reservation against a block, and the block inventory does not have enough rooms left to support the reservation pick up. <p><strong>OperationId:</strong>getInventoryToBorrow</p>
             *
             * @tags Block
             * @name GetInventoryToBorrow
             * @summary Get inventory to Borrow
             * @request GET:/inventoryToBorrow
             */
            getInventoryToBorrow: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/inventoryToBorrow`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.recentlyAccessedBlocks = {
            /**
             * @description This API retrieves recently accessed blocks. <p><strong>OperationId:</strong>getRecentlyAccessedBlocks</p>
             *
             * @tags Block
             * @name GetRecentlyAccessedBlocks
             * @summary Get recently accessed Blocks
             * @request GET:/recentlyAccessedBlocks
             */
            getRecentlyAccessedBlocks: (hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/recentlyAccessedBlocks`, method: 'GET', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.salesAllowances = {
            /**
             * @description Use this API to retrieve the Sales Allowance of max amount of rooms that can be sold. <p><strong>OperationId:</strong>getSalesAllowances</p>
             *
             * @tags Block
             * @name GetSalesAllowances
             * @summary Get Sales allowances
             * @request GET:/salesAllowances
             */
            getSalesAllowances: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/salesAllowances`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.services = {
            /**
             * @description This API deletes the block service cache. <p><strong>OperationId:</strong>deleteBlockServiceCache</p>
             *
             * @tags Block
             * @name DeleteBlockServiceCache
             * @summary Delete Block service cache
             * @request DELETE:/services/block/cache
             */
            deleteBlockServiceCache: (hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/services/block/cache`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to ping and retrieve block service status. <p><strong>OperationId:</strong>pingBlockService</p>
             *
             * @tags Block
             * @name PingBlockService
             * @summary This API retrieves the Block service version
             * @request GET:/services/block/status
             */
            pingBlockService: (hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/services/block/status`, method: 'GET', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete Block Stat Service cache. <p><strong>OperationId:</strong>deleteBlockStatsServiceCache</p>
             *
             * @tags BlockStats
             * @name DeleteBlockStatsServiceCache
             * @summary Delete Block Stat Service cache
             * @request DELETE:/services/blockStats/cache
             */
            deleteBlockStatsServiceCache: (hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/services/blockStats/cache`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to retrieve block stats service status. <p><strong>OperationId:</strong>pingBlockStatsService</p>
             *
             * @tags BlockStats
             * @name PingBlockStatsService
             * @summary Retrieve/Ping  Block stats service
             * @request GET:/services/blockStats/status
             */
            pingBlockStatsService: (hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/services/blockStats/status`, method: 'GET', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
    }
}
exports.Api = Api;
