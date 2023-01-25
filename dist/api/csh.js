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
exports.PersonNameTypeType = exports.WelcomeOfferOptionsType = exports.CardReIssueType = exports.DowngradeType = exports.TierAdministrationType = exports.MembershipEarningPreferenceType = exports.AlertAreaType = exports.PrepaidCardTrxTypeType = exports.VoidFolioModes = exports.FolioCommandType = exports.DepositMaturityType = exports.DepositType = exports.OffsetUnitType = exports.ReceiptType = exports.PolicyBasisTypeType = exports.DepositCancelRevenueType = exports.VaultHTTPTransactionType = exports.CardAuthorizationTransactionType = exports.CommissionPayoutToType = exports.ResAccessRestrictionType = exports.PMSResStatusType = exports.CommunicationStatusType = exports.TurndownStatusType = exports.HotelInterfaceStatusType = exports.HotelInterfaceTypeType = exports.ReservationAllowedActionType = exports.HousekeepingRoomStatusType = exports.ResProfileTypeType = exports.NameTypeType = exports.AnonymizationStatusType = exports.GuestHousekeepingServiceRequestType = exports.CompRoutingStatusType = exports.CashierReportType = exports.CashieringEventType = exports.NameValueDataTypeType = exports.CustomNameValueConfigType = exports.NameValueTypeType = exports.NameValueModuleType = exports.FiscalFolioInstruction = exports.PostPaymentActionType = exports.PaymentTax = exports.FolioStatusType = exports.CurrencyExchangeType = exports.FBAStatusType = exports.OperaLockRecordType = exports.ColorType = exports.CardNumberTypeType = exports.CardProcessingType = exports.CardTypeType = exports.CashieringTransactionTypeType = void 0;
exports.Api = exports.HttpClient = exports.ContentType = exports.ExclusionReasonType = exports.StatusType = exports.RoutingInstructionStatusType = exports.BucketTypeType = exports.ProformaResponseInstructionType = exports.PrepaidCardTransactionSourceType = exports.FolioTypeValidationType = exports.FixedChargeFrequencyType = exports.ResponseInstructionType = exports.DepositProcessType = void 0;
/** Wrapper Transaction Type. */
var CashieringTransactionTypeType;
(function (CashieringTransactionTypeType) {
    CashieringTransactionTypeType["Revenue"] = "Revenue";
    CashieringTransactionTypeType["Payment"] = "Payment";
    CashieringTransactionTypeType["Wrapper"] = "Wrapper";
})(CashieringTransactionTypeType = exports.CashieringTransactionTypeType || (exports.CashieringTransactionTypeType = {}));
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
var OperaLockRecordType;
(function (OperaLockRecordType) {
    OperaLockRecordType["Reservation"] = "Reservation";
    OperaLockRecordType["Cashier"] = "Cashier";
})(OperaLockRecordType = exports.OperaLockRecordType || (exports.OperaLockRecordType = {}));
/** Flexible benefit award has been reimbursed. */
var FBAStatusType;
(function (FBAStatusType) {
    FBAStatusType["Ordered"] = "Ordered";
    FBAStatusType["Attached"] = "Attached";
    FBAStatusType["Posted"] = "Posted";
    FBAStatusType["Settled"] = "Settled";
    FBAStatusType["Reimbursed"] = "Reimbursed";
})(FBAStatusType = exports.FBAStatusType || (exports.FBAStatusType = {}));
/** E-certificate conversion. */
var CurrencyExchangeType;
(function (CurrencyExchangeType) {
    CurrencyExchangeType["Cash"] = "Cash";
    CurrencyExchangeType["Settlement"] = "Settlement";
    CurrencyExchangeType["Posting"] = "Posting";
    CurrencyExchangeType["Check"] = "Check";
    CurrencyExchangeType["TACommission"] = "TACommission";
    CurrencyExchangeType["Membership"] = "Membership";
    CurrencyExchangeType["Certificate"] = "Certificate";
})(CurrencyExchangeType = exports.CurrencyExchangeType || (exports.CurrencyExchangeType = {}));
/** The Folio Status Example: DEPOSIT folio, VOID folio or the default OK folio status. */
var FolioStatusType;
(function (FolioStatusType) {
    FolioStatusType["Deposit"] = "Deposit";
    FolioStatusType["Void"] = "Void";
    FolioStatusType["Ok"] = "Ok";
    FolioStatusType["Zero"] = "Zero";
    FolioStatusType["Compress"] = "Compress";
    FolioStatusType["Converted"] = "Converted";
    FolioStatusType["Internal"] = "Internal";
})(FolioStatusType = exports.FolioStatusType || (exports.FolioStatusType = {}));
/** The types of Payment Tax transactions. */
var PaymentTax;
(function (PaymentTax) {
    PaymentTax["Deposit"] = "Deposit";
    PaymentTax["FrontOffice"] = "FrontOffice";
    PaymentTax["CreditNote"] = "CreditNote";
    PaymentTax["CityLedger"] = "CityLedger";
    PaymentTax["AccountsReceivables"] = "AccountsReceivables";
    PaymentTax["NonVat"] = "NonVat";
})(PaymentTax = exports.PaymentTax || (exports.PaymentTax = {}));
/** Advance Payment Action. */
var PostPaymentActionType;
(function (PostPaymentActionType) {
    PostPaymentActionType["Billing"] = "Billing";
    PostPaymentActionType["Settlefolio"] = "Settlefolio";
    PostPaymentActionType["Deposit"] = "Deposit";
    PostPaymentActionType["Compredemption"] = "Compredemption";
    PostPaymentActionType["Prepaidcardredemption"] = "Prepaidcardredemption";
    PostPaymentActionType["Advancepayment"] = "Advancepayment";
})(PostPaymentActionType = exports.PostPaymentActionType || (exports.PostPaymentActionType = {}));
/** Action to generate Offline folio when no reponse is received from fiscal service. */
var FiscalFolioInstruction;
(function (FiscalFolioInstruction) {
    FiscalFolioInstruction["Retry"] = "Retry";
    FiscalFolioInstruction["New"] = "New";
    FiscalFolioInstruction["Void"] = "Void";
    FiscalFolioInstruction["Offline"] = "Offline";
})(FiscalFolioInstruction = exports.FiscalFolioInstruction || (exports.FiscalFolioInstruction = {}));
var NameValueModuleType;
(function (NameValueModuleType) {
    NameValueModuleType["Reservation"] = "Reservation";
    NameValueModuleType["Folio"] = "Folio";
    NameValueModuleType["Profile"] = "Profile";
    NameValueModuleType["Fintrix"] = "Fintrix";
})(NameValueModuleType = exports.NameValueModuleType || (exports.NameValueModuleType = {}));
var NameValueTypeType;
(function (NameValueTypeType) {
    NameValueTypeType["ReservationOptions"] = "ReservationOptions";
    NameValueTypeType["AfterSettlement"] = "AfterSettlement";
    NameValueTypeType["BeforeSettlement"] = "BeforeSettlement";
    NameValueTypeType["AfterPayment"] = "AfterPayment";
    NameValueTypeType["ProfileOptions"] = "ProfileOptions";
})(NameValueTypeType = exports.NameValueTypeType || (exports.NameValueTypeType = {}));
/** Italian Lottery Number. */
var CustomNameValueConfigType;
(function (CustomNameValueConfigType) {
    CustomNameValueConfigType["ItalianFattura"] = "ItalianFattura";
    CustomNameValueConfigType["Folio"] = "Folio";
    CustomNameValueConfigType["FinancialTransaction"] = "FinancialTransaction";
    CustomNameValueConfigType["TaiwanInvoice"] = "TaiwanInvoice";
    CustomNameValueConfigType["SaudiCustomerType"] = "SaudiCustomerType";
    CustomNameValueConfigType["ItalianLotteryNumber"] = "ItalianLotteryNumber";
})(CustomNameValueConfigType = exports.CustomNameValueConfigType || (exports.CustomNameValueConfigType = {}));
var NameValueDataTypeType;
(function (NameValueDataTypeType) {
    NameValueDataTypeType["String"] = "String";
    NameValueDataTypeType["Number"] = "Number";
    NameValueDataTypeType["Date"] = "Date";
    NameValueDataTypeType["Datetime"] = "Datetime";
    NameValueDataTypeType["Time"] = "Time";
    NameValueDataTypeType["Integer"] = "Integer";
})(NameValueDataTypeType = exports.NameValueDataTypeType || (exports.NameValueDataTypeType = {}));
/** Event being generated by a Supplemental Folio. */
var CashieringEventType;
(function (CashieringEventType) {
    CashieringEventType["CheckOut"] = "CheckOut";
    CashieringEventType["EarlyDeparture"] = "EarlyDeparture";
    CashieringEventType["AdvanceBill"] = "AdvanceBill";
    CashieringEventType["InterimBill"] = "InterimBill";
    CashieringEventType["PasserBy"] = "PasserBy";
    CashieringEventType["PostIt"] = "PostIt";
    CashieringEventType["CreditBill"] = "CreditBill";
    CashieringEventType["Deposit"] = "Deposit";
    CashieringEventType["DepositRefund"] = "DepositRefund";
    CashieringEventType["AutoFolio"] = "AutoFolio";
    CashieringEventType["PrepaidCard"] = "PrepaidCard";
    CashieringEventType["AutoSettlement"] = "AutoSettlement";
    CashieringEventType["InformationFolio"] = "InformationFolio";
    CashieringEventType["SupplementalFolio"] = "SupplementalFolio";
})(CashieringEventType = exports.CashieringEventType || (exports.CashieringEventType = {}));
/** Shift drop report created when cashier closure is completed. It is an integral part of closure report and is not to be printed or accessed by itself. */
var CashierReportType;
(function (CashierReportType) {
    CashierReportType["Cash"] = "Cash";
    CashierReportType["Check"] = "Check";
    CashierReportType["ForeignCurrency"] = "ForeignCurrency";
    CashierReportType["CreditCard"] = "CreditCard";
    CashierReportType["Miscellaneous"] = "Miscellaneous";
    CashierReportType["ArSettlements"] = "ArSettlements";
    CashierReportType["DepositTransfers"] = "DepositTransfers";
    CashierReportType["Shiftdrop"] = "Shiftdrop";
})(CashierReportType = exports.CashierReportType || (exports.CashierReportType = {}));
/** Status which indicates that the Request of Comp Routing was declined */
var CompRoutingStatusType;
(function (CompRoutingStatusType) {
    CompRoutingStatusType["Request"] = "Request";
    CompRoutingStatusType["Comp"] = "Comp";
    CompRoutingStatusType["Declined"] = "Declined";
})(CompRoutingStatusType = exports.CompRoutingStatusType || (exports.CompRoutingStatusType = {}));
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
    ReservationAllowedActionType["HouseKeeping"] = "HouseKeeping";
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
/** Currently supported transaction type categories used for credit card authorization. */
var CardAuthorizationTransactionType;
(function (CardAuthorizationTransactionType) {
    CardAuthorizationTransactionType["Additional"] = "Additional";
    CardAuthorizationTransactionType["ArPayment"] = "ArPayment";
    CardAuthorizationTransactionType["Batch"] = "Batch";
    CardAuthorizationTransactionType["BatchDeposit"] = "BatchDeposit";
    CardAuthorizationTransactionType["BatchDepositRefund"] = "BatchDepositRefund";
    CardAuthorizationTransactionType["Billing"] = "Billing";
    CardAuthorizationTransactionType["CheckIn"] = "CheckIn";
    CardAuthorizationTransactionType["CheckInManualAuth"] = "CheckInManualAuth";
    CardAuthorizationTransactionType["Deposit"] = "Deposit";
    CardAuthorizationTransactionType["EndOfDay"] = "EndOfDay";
    CardAuthorizationTransactionType["EndOfDayDeposit"] = "EndOfDayDeposit";
    CardAuthorizationTransactionType["Manual"] = "Manual";
    CardAuthorizationTransactionType["Other"] = "Other";
    CardAuthorizationTransactionType["PasserBy"] = "PasserBy";
    CardAuthorizationTransactionType["PostIt"] = "PostIt";
    CardAuthorizationTransactionType["PreCheckIn"] = "PreCheckIn";
    CardAuthorizationTransactionType["Refund"] = "Refund";
    CardAuthorizationTransactionType["Scheduled"] = "Scheduled";
})(CardAuthorizationTransactionType = exports.CardAuthorizationTransactionType || (exports.CardAuthorizationTransactionType = {}));
var VaultHTTPTransactionType;
(function (VaultHTTPTransactionType) {
    VaultHTTPTransactionType["CCUniqueID"] = "CCUniqueID";
    VaultHTTPTransactionType["CCNumber"] = "CCNumber";
    VaultHTTPTransactionType["FolioAuthorization"] = "FolioAuthorization";
})(VaultHTTPTransactionType = exports.VaultHTTPTransactionType || (exports.VaultHTTPTransactionType = {}));
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
/** This contains the receipt type. */
var ReceiptType;
(function (ReceiptType) {
    ReceiptType["Payment"] = "Payment";
    ReceiptType["Deposit"] = "Deposit";
    ReceiptType["Paidout"] = "Paidout";
    ReceiptType["Transaction"] = "Transaction";
    ReceiptType["CheckExchange"] = "CheckExchange";
    ReceiptType["CurrencyExchangeCheck"] = "CurrencyExchangeCheck";
    ReceiptType["CurrencyExchangeCash"] = "CurrencyExchangeCash";
    ReceiptType["DepositRequest"] = "DepositRequest";
    ReceiptType["DepositRefundReceipt"] = "DepositRefundReceipt";
    ReceiptType["Acknowledgement"] = "Acknowledgement";
})(ReceiptType = exports.ReceiptType || (exports.ReceiptType = {}));
/** Indicates deadline offset unit type. */
var OffsetUnitType;
(function (OffsetUnitType) {
    OffsetUnitType["Year"] = "Year";
    OffsetUnitType["Month"] = "Month";
    OffsetUnitType["Day"] = "Day";
    OffsetUnitType["Hour"] = "Hour";
})(OffsetUnitType = exports.OffsetUnitType || (exports.OffsetUnitType = {}));
/** Enumeration Type of Deposit. */
var DepositType;
(function (DepositType) {
    DepositType["Folios"] = "Folios";
    DepositType["Receipts"] = "Receipts";
    DepositType["None"] = "None";
})(DepositType = exports.DepositType || (exports.DepositType = {}));
/** The deposit is transferred when the guest checks in. */
var DepositMaturityType;
(function (DepositMaturityType) {
    DepositMaturityType["CheckIn"] = "CheckIn";
    DepositMaturityType["LastNightStay"] = "LastNightStay";
    DepositMaturityType["LastDayAdvanceDeposit"] = "LastDayAdvanceDeposit";
    DepositMaturityType["None"] = "None";
})(DepositMaturityType = exports.DepositMaturityType || (exports.DepositMaturityType = {}));
var FolioCommandType;
(function (FolioCommandType) {
    FolioCommandType["Invoice"] = "Invoice";
    FolioCommandType["Info"] = "Info";
    FolioCommandType["ResendInvoice"] = "ResendInvoice";
    FolioCommandType["Cancellation"] = "Cancellation";
    FolioCommandType["EodReset"] = "EodReset";
    FolioCommandType["XReport"] = "XReport";
    FolioCommandType["SendFiscalInvoice"] = "SendFiscalInvoice";
    FolioCommandType["ZeroInvoice"] = "ZeroInvoice";
    FolioCommandType["EndOfPeriod"] = "EndOfPeriod";
    FolioCommandType["ZeroInvoiceWithReceipt"] = "ZeroInvoiceWithReceipt";
    FolioCommandType["FiscalUpdate"] = "FiscalUpdate";
    FolioCommandType["CheckOut"] = "CheckOut";
})(FolioCommandType = exports.FolioCommandType || (exports.FolioCommandType = {}));
/** Different modes to perform void folio. */
var VoidFolioModes;
(function (VoidFolioModes) {
    VoidFolioModes["Invoice"] = "Invoice";
    VoidFolioModes["InfoFolio"] = "InfoFolio";
    VoidFolioModes["CreditFolio"] = "CreditFolio";
    VoidFolioModes["DepositFolio"] = "DepositFolio";
    VoidFolioModes["PostIt"] = "PostIt";
    VoidFolioModes["PasserBy"] = "PasserBy";
    VoidFolioModes["VoidFolio"] = "VoidFolio";
    VoidFolioModes["SupplementalFolio"] = "SupplementalFolio";
    VoidFolioModes["SendFiscalFolio"] = "SendFiscalFolio";
    VoidFolioModes["ResendFolio"] = "ResendFolio";
})(VoidFolioModes = exports.VoidFolioModes || (exports.VoidFolioModes = {}));
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
var AlertAreaType;
(function (AlertAreaType) {
    AlertAreaType["CheckIn"] = "CheckIn";
    AlertAreaType["CheckOut"] = "CheckOut";
    AlertAreaType["Reservation"] = "Reservation";
    AlertAreaType["Billing"] = "Billing";
    AlertAreaType["InHouse"] = "InHouse";
})(AlertAreaType = exports.AlertAreaType || (exports.AlertAreaType = {}));
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
/** None of the Welcome Offer option is selected. */
var WelcomeOfferOptionsType;
(function (WelcomeOfferOptionsType) {
    WelcomeOfferOptionsType["BonusPoints"] = "BonusPoints";
    WelcomeOfferOptionsType["Ecoupons"] = "Ecoupons";
    WelcomeOfferOptionsType["Items"] = "Items";
    WelcomeOfferOptionsType["PostIt"] = "PostIt";
    WelcomeOfferOptionsType["NotSelected"] = "NotSelected";
})(WelcomeOfferOptionsType = exports.WelcomeOfferOptionsType || (exports.WelcomeOfferOptionsType = {}));
/** Person's name in an external system. */
var PersonNameTypeType;
(function (PersonNameTypeType) {
    PersonNameTypeType["Primary"] = "Primary";
    PersonNameTypeType["Alternate"] = "Alternate";
    PersonNameTypeType["Incognito"] = "Incognito";
    PersonNameTypeType["External"] = "External";
    PersonNameTypeType["Phonetic"] = "Phonetic";
})(PersonNameTypeType = exports.PersonNameTypeType || (exports.PersonNameTypeType = {}));
/** The Deposit is transferred to an internal account for returned deposits to be handled by the property. Users can select to keep all (not exceeding total), a portion of, or none of the deposit. */
var DepositProcessType;
(function (DepositProcessType) {
    DepositProcessType["Keep"] = "Keep";
    DepositProcessType["Return"] = "Return";
    DepositProcessType["Mature"] = "Mature";
})(DepositProcessType = exports.DepositProcessType || (exports.DepositProcessType = {}));
/** Response types used in the Apply Final Postings request. Based on the request the folio summary , folio details or no details will be returned in the response. */
var ResponseInstructionType;
(function (ResponseInstructionType) {
    ResponseInstructionType["None"] = "None";
    ResponseInstructionType["Summary"] = "Summary";
    ResponseInstructionType["Details"] = "Details";
})(ResponseInstructionType = exports.ResponseInstructionType || (exports.ResponseInstructionType = {}));
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
/** Profile detail is not configured with Tax ID. */
var FolioTypeValidationType;
(function (FolioTypeValidationType) {
    FolioTypeValidationType["TaxID"] = "TaxID";
})(FolioTypeValidationType = exports.FolioTypeValidationType || (exports.FolioTypeValidationType = {}));
/** Vendor transaction source type. */
var PrepaidCardTransactionSourceType;
(function (PrepaidCardTransactionSourceType) {
    PrepaidCardTransactionSourceType["Opera"] = "Opera";
    PrepaidCardTransactionSourceType["Vendor"] = "Vendor";
})(PrepaidCardTransactionSourceType = exports.PrepaidCardTransactionSourceType || (exports.PrepaidCardTransactionSourceType = {}));
/** Response instructions for Proforma Creation. */
var ProformaResponseInstructionType;
(function (ProformaResponseInstructionType) {
    ProformaResponseInstructionType["None"] = "None";
    ProformaResponseInstructionType["FolioSummary"] = "FolioSummary";
})(ProformaResponseInstructionType = exports.ProformaResponseInstructionType || (exports.ProformaResponseInstructionType = {}));
/** Fiscal Bucket Type. */
var BucketTypeType;
(function (BucketTypeType) {
    BucketTypeType["Default"] = "Default";
    BucketTypeType["Fiscal"] = "Fiscal";
})(BucketTypeType = exports.BucketTypeType || (exports.BucketTypeType = {}));
/** Routing instruction set is deleted. */
var RoutingInstructionStatusType;
(function (RoutingInstructionStatusType) {
    RoutingInstructionStatusType["RoutingInstructionNew"] = "RoutingInstructionNew";
    RoutingInstructionStatusType["RoutingInstructionEdited"] = "RoutingInstructionEdited";
    RoutingInstructionStatusType["RoutingInstructionRemoved"] = "RoutingInstructionRemoved";
})(RoutingInstructionStatusType = exports.RoutingInstructionStatusType || (exports.RoutingInstructionStatusType = {}));
/** Status of the batch process. */
var StatusType;
(function (StatusType) {
    StatusType["Success"] = "Success";
    StatusType["Error"] = "Error";
    StatusType["Running"] = "Running";
    StatusType["Stopped"] = "Stopped";
    StatusType["Warning"] = "Warning";
    StatusType["Failed"] = "Failed";
    StatusType["Started"] = "Started";
    StatusType["CompletedWithLogs"] = "CompletedWithLogs";
})(StatusType = exports.StatusType || (exports.StatusType = {}));
/** Custom Charge has already been Processed for this date within the reservation stay. */
var ExclusionReasonType;
(function (ExclusionReasonType) {
    ExclusionReasonType["NotConfigured"] = "NotConfigured";
    ExclusionReasonType["CustomChargeProcessed"] = "CustomChargeProcessed";
})(ExclusionReasonType = exports.ExclusionReasonType || (exports.ExclusionReasonType = {}));
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
        this.instance = axios_1.default.create(Object.assign(Object.assign({}, axiosConfig), { baseURL: new URL('/csh/v1', axiosConfig.baseURL).toString() }));
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
 * @title OPERA Cloud Cashiering API
 * @version 22.3.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /csh/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 22.3.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
class Api extends HttpClient {
    constructor() {
        super(...arguments);
        this.cashierReportPostings = {
            /**
             * @description You can use this API to get Cashier Report postings. <p><strong>OperationId:</strong>getCashierReportPostings</p>
             *
             * @tags Cashiering
             * @name GetCashierReportPostings
             * @summary Get Cashier Report Postings
             * @request GET:/cashierReportPostings
             */
            getCashierReportPostings: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/cashierReportPostings`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.cashiers = {
            /**
             * @description You can use this API to change Cashier Closure. <p><strong>OperationId:</strong>putCashier</p>
             *
             * @tags Cashiering
             * @name PutCashier
             * @summary Close Cashier
             * @request PUT:/cashiers/{cashierId}/closure
             */
            putCashier: (hotelId, cashierId, cashierClosure, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/cashiers/${cashierId}/closure`, method: 'PUT', body: cashierClosure, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to Acquire Cashier Locks. <p><strong>OperationId:</strong>getCashierLock</p>
             *
             * @tags Cashiering
             * @name GetCashierLock
             * @summary Acquire Cashier Locks
             * @request GET:/cashiers/{cashierId}/locks
             */
            getCashierLock: (hotelId, cashierId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/cashiers/${cashierId}/locks`, method: 'GET', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to Break Cashier Lock. <p><strong>OperationId:</strong>breakCashierLock</p>
             *
             * @tags Cashiering
             * @name BreakCashierLock
             * @summary Break Cashier Lock
             * @request DELETE:/cashiers/{cashierId}/locks
             */
            breakCashierLock: (hotelId, cashierId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/cashiers/${cashierId}/locks`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to get Cashier Transactions. <p><strong>OperationId:</strong>getCashierTransactions</p>
             *
             * @tags Cashiering
             * @name GetCashierTransactions
             * @summary Get Cashier Transactions
             * @request GET:/cashiers/{cashierId}/transactions
             */
            getCashierTransactions: (hotelId, cashierId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/cashiers/${cashierId}/transactions`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.cashiersLock = {
            /**
             * @description You can use this API to Release Cashier Lock. <p><strong>OperationId:</strong>releaseCashierLock</p>
             *
             * @tags Cashiering
             * @name ReleaseCashierLock
             * @summary Release Cashier Lock
             * @request DELETE:/cashiersLock/{lockId}
             */
            releaseCashierLock: (hotelId, lockId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/cashiersLock/${lockId}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.compAccountingJournal = {
            /**
             * @description You can use this API to get Comp Accounting Journal. <p><strong>OperationId:</strong>getCompAccountingJournal</p>
             *
             * @tags Cashiering
             * @name GetCompAccountingJournal
             * @summary Get Comp Accounting Journal
             * @request GET:/compAccountingJournal
             */
            getCompAccountingJournal: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/compAccountingJournal`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.fbaReimbursements = {
            /**
             * @description You can use this API to create FBA Reimbursement. <p><strong>OperationId:</strong>postFBAReimbursement</p>
             *
             * @tags Cashiering
             * @name PostFbaReimbursement
             * @summary Create FBA Reimbursement
             * @request POST:/fbaReimbursements
             */
            postFbaReimbursement: (hotelId, fbaReimbursementCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/fbaReimbursements`, method: 'POST', body: fbaReimbursementCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.fbaSettlements = {
            /**
             * @description You can use this API to create FBA Settlement. <p><strong>OperationId:</strong>postFBASettlement</p>
             *
             * @tags Cashiering
             * @name PostFbaSettlement
             * @summary Create FBA Settlement
             * @request POST:/fbaSettlements
             */
            postFbaSettlement: (hotelId, fbaReimbursementCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/fbaSettlements`, method: 'POST', body: fbaReimbursementCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.foreignCurrency = {
            /**
             * @description This API will allow you to Calculate Foreign Currency exchange. <p><strong>OperationId:</strong>calculateForeignCurrency</p>
             *
             * @tags Cashiering
             * @name CalculateForeignCurrency
             * @summary Calculate Foreign Currency
             * @request PUT:/foreignCurrency
             */
            calculateForeignCurrency: (hotelId, foreignCurrencyCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/foreignCurrency`, method: 'PUT', body: foreignCurrencyCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.foreignCurrencyExchange = {
            /**
             * @description You can use this API to Create Foreign Currency Exchange. <p><strong>OperationId:</strong>postForeignCurrencyExchange</p>
             *
             * @tags Cashiering
             * @name PostForeignCurrencyExchange
             * @summary Create Foreign Currency Exchange
             * @request POST:/foreignCurrencyExchange
             */
            postForeignCurrencyExchange: (hotelId, foreignCurrencyExchange, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/foreignCurrencyExchange`, method: 'POST', body: foreignCurrencyExchange, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.hotels = {
            /**
             * @description You can use this API to create Batch Advance Folio. <p><strong>OperationId:</strong>postAdvanceFolio</p>
             *
             * @tags Cashiering
             * @name PostAdvanceFolio
             * @summary Create Batch Advance Folio
             * @request POST:/hotels/{hotelId}/advanceFolio/batchJobs
             */
            postAdvanceFolio: (hotelId, batchAdvanceFolio, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/advanceFolio/batchJobs`, method: 'POST', body: batchAdvanceFolio, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to create Articles Sale. <p><strong>OperationId:</strong>postArticlesSale</p>
             *
             * @tags Cashiering
             * @name PostArticlesSale
             * @summary Create Articles Sale
             * @request POST:/hotels/{hotelId}/articlesSale
             */
            postArticlesSale: (hotelId, articlesSaleCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/articlesSale`, method: 'POST', body: articlesSaleCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to get Authorizers Credit Info. <p><strong>OperationId:</strong>getAuthorizersCreditInfo</p>
             *
             * @tags Cashiering
             * @name GetAuthorizersCreditInfo
             * @summary Get Authorizers Credit Info
             * @request GET:/hotels/{hotelId}/authorizers/credits
             */
            getAuthorizersCreditInfo: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/authorizers/credits`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to create Auto Checkout Reservation Batch. <p><strong>OperationId:</strong>postAutoCheckoutReservations</p>
             *
             * @tags Cashiering
             * @name PostAutoCheckoutReservations
             * @summary Create Auto Checkout Reservation Batch
             * @request POST:/hotels/{hotelId}/autoCheckoutReservations/batchJobs
             */
            postAutoCheckoutReservations: (hotelId, batchAutoCheckoutReservation, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/autoCheckoutReservations/batchJobs`, method: 'POST', body: batchAutoCheckoutReservation, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to create Batch Auto Settlement. <p><strong>OperationId:</strong>postBatchAutoSettlement</p>
             *
             * @tags Cashiering
             * @name PostBatchAutoSettlement
             * @summary Create Batch Auto Settlement
             * @request POST:/hotels/{hotelId}/autoSettlements/batchJobs
             */
            postBatchAutoSettlement: (hotelId, batchAutoSettlementCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/autoSettlements/batchJobs`, method: 'POST', body: batchAutoSettlementCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to create batch deposits. <p><strong>OperationId:</strong>postBatchDeposit</p>
             *
             * @tags Cashiering
             * @name PostBatchDeposit
             * @summary Create batch deposits
             * @request POST:/hotels/{hotelId}/batchDeposits
             */
            postBatchDeposit: (hotelId, batchDeposit, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/batchDeposits`, method: 'POST', body: batchDeposit, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to Retrieve bed tax information for a property. <p><strong>OperationId:</strong>getBedTaxInfo</p>
             *
             * @tags Cashiering
             * @name GetBedTaxInfo
             * @summary Get bed tax information
             * @request GET:/hotels/{hotelId}/bedTax
             */
            getBedTaxInfo: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/bedTax`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to create new bed tax information for a property. <p><strong>OperationId:</strong>postBedTaxInfo</p>
             *
             * @tags Cashiering
             * @name PostBedTaxInfo
             * @summary Create bed tax information
             * @request POST:/hotels/{hotelId}/bedTax
             */
            postBedTaxInfo: (hotelId, bedTaxCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/bedTax`, method: 'POST', body: bedTaxCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to Update bed tax information for a property. <p><strong>OperationId:</strong>putBedTaxInfo</p>
             *
             * @tags Cashiering
             * @name PutBedTaxInfo
             * @summary Change bed tax information
             * @request PUT:/hotels/{hotelId}/bedTax/{taxRegistraitionNo}
             */
            putBedTaxInfo: (taxRegistraitionNo, hotelId, bedTaxCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/bedTax/${taxRegistraitionNo}`, method: 'PUT', body: bedTaxCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to delete bed tax information for a property. <p><strong>OperationId:</strong>removeBedTaxInfo</p>
             *
             * @tags Cashiering
             * @name RemoveBedTaxInfo
             * @summary Delete bed tax information
             * @request DELETE:/hotels/{hotelId}/bedTax/{taxRegistraitionNo}
             */
            removeBedTaxInfo: (taxRegistraitionNo, hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/bedTax/${taxRegistraitionNo}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to change Billing Charges. <p><strong>OperationId:</strong>putBillingCharges</p>
             *
             * @tags Cashiering
             * @name PutBillingCharges
             * @summary Change Billing Charges
             * @request PUT:/hotels/{hotelId}/billingCharges
             */
            putBillingCharges: (hotelId, putBillingCharges, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/billingCharges`, method: 'PUT', body: putBillingCharges, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to get Batch CC Settlements Status. <p><strong>OperationId:</strong>getBatchCCSettlementsStatus</p>
             *
             * @tags Cashiering
             * @name GetBatchCcSettlementsStatus
             * @summary Get Batch CC Settlements Status
             * @request GET:/hotels/{hotelId}/bulkCCSettlements/{batchId}/status
             */
            getBatchCcSettlementsStatus: (batchId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/bulkCCSettlements/${batchId}/status`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to get Cashier Closure. <p><strong>OperationId:</strong>getCashierClosure</p>
             *
             * @tags Cashiering
             * @name GetCashierClosure
             * @summary Get Cashier Closure
             * @request GET:/hotels/{hotelId}/cashiers/{cashierId}/closure
             */
            getCashierClosure: (cashierId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/cashiers/${cashierId}/closure`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to get Cashier Closure Reports List. <p><strong>OperationId:</strong>getCashierClosureReportsList</p>
             *
             * @tags Cashiering
             * @name GetCashierClosureReportsList
             * @summary Get Cashier Closure Reports List
             * @request GET:/hotels/{hotelId}/cashiers/{cashierId}/closureReports
             */
            getCashierClosureReportsList: (cashierId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/cashiers/${cashierId}/closureReports`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to change folio tax payments. <p><strong>OperationId:</strong>reverseFolioTaxPayment</p>
             *
             * @tags Cashiering
             * @name ReverseFolioTaxPayment
             * @summary Change folio tax payments
             * @request PUT:/hotels/{hotelId}/cashiers/{cashierId}/folioTaxPayments
             */
            reverseFolioTaxPayment: (cashierId, hotelId, transactionReversal, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/cashiers/${cashierId}/folioTaxPayments`, method: 'PUT', body: transactionReversal, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to Extend cashiers lock. <p><strong>OperationId:</strong>putCashierLock</p>
             *
             * @tags Cashiering
             * @name PutCashierLock
             * @summary Extend Cashier Lock
             * @request PUT:/hotels/{hotelId}/cashierslock/{lockId}
             */
            putCashierLock: (lockId, hotelId, cashierLockCriteriaToExtend, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/cashierslock/${lockId}`, method: 'PUT', body: cashierLockCriteriaToExtend, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to create cc Settlement. <p><strong>OperationId:</strong>postCCSettlement</p>
             *
             * @tags Cashiering
             * @name PostCcSettlement
             * @summary Create CreditCard Settlement
             * @request POST:/hotels/{hotelId}/ccSettlement
             */
            postCcSettlement: (hotelId, ccSettlementCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/ccSettlement`, method: 'POST', body: ccSettlementCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to create Batch CC Settlements. <p><strong>OperationId:</strong>postBatchCCSettlements</p>
             *
             * @tags Cashiering
             * @name PostBatchCcSettlements
             * @summary Create Batch CC Settlements
             * @request POST:/hotels/{hotelId}/ccSettlements/batchJobs
             */
            postBatchCcSettlements: (hotelId, ccBatchSettlementsProcessCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/ccSettlements/batchJobs`, method: 'POST', body: ccBatchSettlementsProcessCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to get check details. <p><strong>OperationId:</strong>getCheckDetails</p>
             *
             * @tags Cashiering
             * @name GetCheckDetails
             * @summary Get check details
             * @request GET:/hotels/{hotelId}/check/{checkNumber}
             */
            getCheckDetails: (checkNumber, hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/check/${checkNumber}`, method: 'GET', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This operation is to add guest check details for posted check transactions. <p><strong>OperationId:</strong>postGuestCheckDetails</p>
             *
             * @tags Cashiering
             * @name PostGuestCheckDetails
             * @summary Post Guest Check Details
             * @request POST:/hotels/{hotelId}/check/{checkNumber}
             */
            postGuestCheckDetails: (checkNumber, hotelId, guestCheckDetails, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/check/${checkNumber}`, method: 'POST', body: guestCheckDetails, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to delete (void) Billing Check Charges. <p><strong>OperationId:</strong>voidBillingCheckCharges</p>
             *
             * @tags Cashiering
             * @name VoidBillingCheckCharges
             * @summary Delete Billing Check Charges
             * @request DELETE:/hotels/{hotelId}/check/{checkNumber}/charges
             */
            voidBillingCheckCharges: (checkNumber, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/check/${checkNumber}/charges`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to get Cashier Closure Information. <p><strong>OperationId:</strong>getCashierClosureInfo</p>
             *
             * @tags Cashiering
             * @name GetCashierClosureInfo
             * @summary Get Cashier Closure Information
             * @request GET:/hotels/{hotelId}/closureList
             */
            getCashierClosureInfo: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/closureList`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to get Comp Routing Instructions. <p><strong>OperationId:</strong>getCompRoutingInstructions</p>
             *
             * @tags Cashiering
             * @name GetCompRoutingInstructions
             * @summary Get Comp Routing Instructions
             * @request GET:/hotels/{hotelId}/compRoutingInstructions
             */
            getCompRoutingInstructions: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/compRoutingInstructions`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to get Comp Trx Authorizers. <p><strong>OperationId:</strong>getCompTrxAuthorizers</p>
             *
             * @tags Cashiering
             * @name GetCompTrxAuthorizers
             * @summary Get Comp Trx Authorizers
             * @request GET:/hotels/{hotelId}/compTrxAuthorizers
             */
            getCompTrxAuthorizers: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/compTrxAuthorizers`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to create Credit Bill. <p><strong>OperationId:</strong>postCreditBill</p>
             *
             * @tags Cashiering
             * @name PostCreditBill
             * @summary Create Credit Bill
             * @request POST:/hotels/{hotelId}/creditBill
             */
            postCreditBill: (hotelId, creditBillCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/creditBill`, method: 'POST', body: creditBillCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to validate credit Bill. <p><strong>OperationId:</strong>validateCreditBill</p>
             *
             * @tags Cashiering
             * @name ValidateCreditBill
             * @summary Validate Credit Bill
             * @request PUT:/hotels/{hotelId}/creditBill/action/validate
             */
            validateCreditBill: (hotelId, creditBillCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/creditBill/action/validate`, method: 'PUT', body: creditBillCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to get Credit Limits Overage Payments. <p><strong>OperationId:</strong>getCreditLimitOveragePayments</p>
             *
             * @tags Cashiering
             * @name GetCreditLimitOveragePayments
             * @summary Get Credit Limits Overage Payments
             * @request GET:/hotels/{hotelId}/creditLimitsOveragePayments
             */
            getCreditLimitOveragePayments: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/creditLimitsOveragePayments`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to create Credit Limit Overage Payments. <p><strong>OperationId:</strong>postCreditLimitOveragePayments</p>
             *
             * @tags Cashiering
             * @name PostCreditLimitOveragePayments
             * @summary Create Credit Limit Overage Payments
             * @request POST:/hotels/{hotelId}/creditLimitsOveragePayments
             */
            postCreditLimitOveragePayments: (hotelId, creditLimitOveragePayments, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/creditLimitsOveragePayments`, method: 'POST', body: creditLimitOveragePayments, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to create vault transaction. <p><strong>OperationId:</strong>registerVaultTransaction</p>
             *
             * @tags Cashiering
             * @name RegisterVaultTransaction
             * @summary Register Vault Transaction
             * @request POST:/hotels/{hotelId}/creditcardTransaction/logs
             */
            registerVaultTransaction: (hotelId, vaultTransaction, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/creditcardTransaction/logs`, method: 'POST', body: vaultTransaction, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to get CC Surcharge Information. <p><strong>OperationId:</strong>getCCSurchargeInfo</p>
             *
             * @tags Cashiering
             * @name GetCcSurchargeInfo
             * @summary Get CC Surcharge Information
             * @request GET:/hotels/{hotelId}/creditcardsurcharge
             */
            getCcSurchargeInfo: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/creditcardsurcharge`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to get Deposit Folio. <p><strong>OperationId:</strong>getDepositFolio</p>
             *
             * @tags Cashiering
             * @name GetDepositFolio
             * @summary Get Deposit Folio
             * @request GET:/hotels/{hotelId}/depositFolio
             */
            getDepositFolio: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/depositFolio`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to get Deposit Folio Transaction Details. <p><strong>OperationId:</strong>getDepositFolioTransactionDetails</p>
             *
             * @tags Cashiering
             * @name GetDepositFolioTransactionDetails
             * @summary Get Deposit Folio Transaction Details
             * @request GET:/hotels/{hotelId}/depositTransactions
             */
            getDepositFolioTransactionDetails: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/depositTransactions`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to validate Deposit Folio. <p><strong>OperationId:</strong>validateDepositFolio</p>
             *
             * @tags Cashiering
             * @name ValidateDepositFolio
             * @summary Validate Deposit Folio
             * @request PUT:/hotels/{hotelId}/depositfolios/action/validate
             */
            validateDepositFolio: (hotelId, depositFolioValidateCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/depositfolios/action/validate`, method: 'PUT', body: depositFolioValidateCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to create Deposit Payment with external reference. <p><strong>OperationId:</strong>postDepositPaymentByExtId</p>
             *
             * @tags Cashiering
             * @name PostDepositPaymentByExtId
             * @summary Create Deposit Payment using external reference.
             * @request POST:/hotels/{hotelId}/externalSystems/{externalSysCode}/reservations/{reservationId}/depositPayments
             */
            postDepositPaymentByExtId: (reservationId, externalSysCode, hotelId, depositPayment, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/externalSystems/${externalSysCode}/reservations/${reservationId}/depositPayments`, method: 'POST', body: depositPayment, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to get Financial postings. <p><strong>OperationId:</strong>getFinancialPostings</p>
             *
             * @tags Cashiering
             * @name GetFinancialPostings
             * @summary Get Financial Postings
             * @request GET:/hotels/{hotelId}/financialPostings
             */
            getFinancialPostings: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/financialPostings`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to create Fiscal Invoice. <p><strong>OperationId:</strong>postFiscalCommandInvoice</p>
             *
             * @tags Cashiering
             * @name PostFiscalCommandInvoice
             * @summary Create Fiscal Invoice
             * @request POST:/hotels/{hotelId}/fiscalCommands
             */
            postFiscalCommandInvoice: (hotelId, fiscalFolioCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/fiscalCommands`, method: 'POST', body: fiscalFolioCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to get the fiscal folio activity details for a folio. <p><strong>OperationId:</strong>getFiscalFolioActivity</p>
             *
             * @tags Cashiering
             * @name GetFiscalFolioActivity
             * @summary Get the Fiscal Folio Activity for a folio
             * @request GET:/hotels/{hotelId}/fiscalFolioResponse
             */
            getFiscalFolioActivity: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/fiscalFolioResponse`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to get the fiscal folio activity response details for a folio. <p><strong>OperationId:</strong>getFiscalFolioActivityDetails</p>
             *
             * @tags Cashiering
             * @name GetFiscalFolioActivityDetails
             * @summary Get the Fiscal Folio Activity Response details for a folio
             * @request GET:/hotels/{hotelId}/fiscalFolioResponse/{folioSeqNo}
             */
            getFiscalFolioActivityDetails: (folioSeqNo, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/fiscalFolioResponse/${folioSeqNo}`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to create Fiscal Information Folio. <p><strong>OperationId:</strong>generateFiscalFolio</p>
             *
             * @tags Cashiering
             * @name GenerateFiscalFolio
             * @summary Create Fiscal Information Folio
             * @request POST:/hotels/{hotelId}/fiscalFolios
             */
            generateFiscalFolio: (hotelId, fiscalInfoFolioCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/fiscalFolios`, method: 'POST', body: fiscalInfoFolioCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to get Fiscal Printing Details. <p><strong>OperationId:</strong>getValidateFiscalPrintingDetails</p>
             *
             * @tags Cashiering
             * @name GetValidateFiscalPrintingDetails
             * @summary Get Fiscal Printing Details
             * @request GET:/hotels/{hotelId}/fiscalPrinting
             */
            getValidateFiscalPrintingDetails: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/fiscalPrinting`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to Convert folio. <p><strong>OperationId:</strong>convertFolio</p>
             *
             * @tags Cashiering
             * @name ConvertFolio
             * @summary Convert Folio
             * @request PUT:/hotels/{hotelId}/folio/{folioId}/convert
             */
            convertFolio: (folioId, hotelId, convertFolioCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/folio/${folioId}/convert`, method: 'PUT', body: convertFolioCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to create Fiscal Invoice.<br><p><strong><mark>This API is deprecated. Please use postFiscalCommandInvoice instead</mark></strong></p> <p><strong>OperationId:</strong>postFiscalInvoice</p>
             *
             * @tags Cashiering
             * @name PostFiscalInvoice
             * @summary Create Fiscal Invoice
             * @request POST:/hotels/{hotelId}/folio/{folioId}/fiscalCommands
             * @deprecated
             */
            postFiscalInvoice: (folioId, hotelId, fiscalFolioCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/folio/${folioId}/fiscalCommands`, method: 'POST', body: fiscalFolioCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to get folio history for a reservation. <p><strong>OperationId:</strong>getFolioHistory</p>
             *
             * @tags Cashiering
             * @name GetFolioHistory
             * @summary Get folio history
             * @request GET:/hotels/{hotelId}/folioHistory
             */
            getFolioHistory: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/folioHistory`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to get folio printers. <p><strong>OperationId:</strong>getFolioPrinters</p>
             *
             * @tags Cashiering
             * @name GetFolioPrinters
             * @summary Get folio printers
             * @request GET:/hotels/{hotelId}/folioPrinters
             */
            getFolioPrinters: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/folioPrinters`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to get Folio Type Name. <p><strong>OperationId:</strong>getFolioTypeName</p>
             *
             * @tags Cashiering
             * @name GetFolioTypeName
             * @summary Get Folio Type Name
             * @request GET:/hotels/{hotelId}/folioTypeNames
             */
            getFolioTypeName: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/folioTypeNames`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to get Folio Types. <p><strong>OperationId:</strong>getFolioTypes</p>
             *
             * @tags Cashiering
             * @name GetFolioTypes
             * @summary Get Folio Types
             * @request GET:/hotels/{hotelId}/folioTypes
             */
            getFolioTypes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/folioTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to process fiscal retry status. <p><strong>OperationId:</strong>processFiscalRetry</p>
             *
             * @tags Cashiering
             * @name ProcessFiscalRetry
             * @summary Process Fiscal retry
             * @request PUT:/hotels/{hotelId}/folios/{folioId}/fiscal
             */
            processFiscalRetry: (folioId, hotelId, processFiscalRetry, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/folios/${folioId}/fiscal`, method: 'PUT', body: processFiscalRetry, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to create passer by sale. <p><strong>OperationId:</strong>postPasserBySale</p>
             *
             * @tags Cashiering
             * @name PostPasserBySale
             * @summary Create passer by sale
             * @request POST:/hotels/{hotelId}/passerBySale
             */
            postPasserBySale: (hotelId, passerBySalesCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/passerBySale`, method: 'POST', body: passerBySalesCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to change Payee Tax Number. <p><strong>OperationId:</strong>putPayeeTaxNumber</p>
             *
             * @tags Cashiering
             * @name PutPayeeTaxNumber
             * @summary Change Payee Tax Number
             * @request PUT:/hotels/{hotelId}/payees/{payeeId}/taxNumber
             */
            putPayeeTaxNumber: (payeeId, hotelId, payeeTaxNumber, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/payees/${payeeId}/taxNumber`, method: 'PUT', body: payeeTaxNumber, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to attach Deposit Policy to Payment. <p><strong>OperationId:</strong>attachDepositPolicyToPayment</p>
             *
             * @tags Cashiering
             * @name AttachDepositPolicyToPayment
             * @summary Attach Deposit Policy to Payment
             * @request PUT:/hotels/{hotelId}/policies/{policyId}/transactions/{transactionId}/deposit
             */
            attachDepositPolicyToPayment: (transactionId, policyId, hotelId, attachPolicyApplyCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/policies/${policyId}/transactions/${transactionId}/deposit`, method: 'PUT', body: attachPolicyApplyCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to get posting Summary. <p><strong>OperationId:</strong>getPostingSummary</p>
             *
             * @tags Cashiering
             * @name GetPostingSummary
             * @summary Get Posting Summary
             * @request GET:/hotels/{hotelId}/postingDates/date/postingSummary
             */
            getPostingSummary: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/postingDates/date/postingSummary`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to create Prepaid Cards. <p><strong>OperationId:</strong>postPrepaidCards</p>
             *
             * @tags Cashiering
             * @name PostPrepaidCards
             * @summary Create Prepaid Cards
             * @request POST:/hotels/{hotelId}/prepaidCards
             */
            postPrepaidCards: (hotelId, prepaidCardCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/prepaidCards`, method: 'POST', body: prepaidCardCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to activate Prepaid Card. <p><strong>OperationId:</strong>activatePrepaidCard</p>
             *
             * @tags Cashiering
             * @name ActivatePrepaidCard
             * @summary Operation to activate prepaid card.
             * @request PUT:/hotels/{hotelId}/prepaidCards/activate
             */
            activatePrepaidCard: (hotelId, activatePrepaidCard, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/prepaidCards/activate`, method: 'PUT', body: activatePrepaidCard, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to cancel PrepaidCard Transaction. <p><strong>OperationId:</strong>cancelPrepaidCardTransaction</p>
             *
             * @tags Cashiering
             * @name CancelPrepaidCardTransaction
             * @summary Operation to cancel prepaid card transaction.
             * @request PUT:/hotels/{hotelId}/prepaidCards/cancel
             */
            cancelPrepaidCardTransaction: (hotelId, cancelPrepaidCardTransaction, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/prepaidCards/cancel`, method: 'PUT', body: cancelPrepaidCardTransaction, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to cashOut Prepaid Card. <p><strong>OperationId:</strong>cashOutPrepaidCard</p>
             *
             * @tags Cashiering
             * @name CashOutPrepaidCard
             * @summary Operation to cash out prepaid card.
             * @request PUT:/hotels/{hotelId}/prepaidCards/cashOut
             */
            cashOutPrepaidCard: (hotelId, cashOutPrepaidCard, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/prepaidCards/cashOut`, method: 'PUT', body: cashOutPrepaidCard, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to reload Prepaid Card. <p><strong>OperationId:</strong>reloadPrepaidCard</p>
             *
             * @tags Cashiering
             * @name ReloadPrepaidCard
             * @summary Operation to reload prepaid card.
             * @request PUT:/hotels/{hotelId}/prepaidCards/reload
             */
            reloadPrepaidCard: (hotelId, reloadPrepaidCard, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/prepaidCards/reload`, method: 'PUT', body: reloadPrepaidCard, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to authorize Credit Card Amount by Profile. <p><strong>OperationId:</strong>authorizeCreditCardAmountByProfile</p>
             *
             * @tags Cashiering
             * @name AuthorizeCreditCardAmountByProfile
             * @summary Authorize Credit Card Amount by Profile
             * @request POST:/hotels/{hotelId}/profiles/{profileId}/paymentMethods/creditCard/authorize
             */
            authorizeCreditCardAmountByProfile: (profileId, hotelId, ccAuthorizationCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/profiles/${profileId}/paymentMethods/creditCard/authorize`, method: 'POST', body: ccAuthorizationCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to get Credit Card Authorization Instructions by Profile. <p><strong>OperationId:</strong>getCCAuthorizationInstructionsByProfile</p>
             *
             * @tags Cashiering
             * @name GetCcAuthorizationInstructionsByProfile
             * @summary Get CC Authorization Instructions by Profile
             * @request GET:/hotels/{hotelId}/profiles/{profileId}/paymentMethods/creditCard/authorizeInstructions
             */
            getCcAuthorizationInstructionsByProfile: (profileId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/profiles/${profileId}/paymentMethods/creditCard/authorizeInstructions`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to get Receipt History. <p><strong>OperationId:</strong>getReceiptHistory</p>
             *
             * @tags Cashiering
             * @name GetReceiptHistory
             * @summary Get Receipt History
             * @request GET:/hotels/{hotelId}/receiptHistory
             */
            getReceiptHistory: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/receiptHistory`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to create rate codes. <p><strong>OperationId:</strong>postRateCode</p>
             *
             * @tags Cashiering
             * @name PostRateCode
             * @summary Create rate codes
             * @request POST:/hotels/{hotelId}/reservation/{reservationId}/rateCode/{rateCode}
             */
            postRateCode: (rateCode, reservationId, hotelId, postRateCodeCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservation/${reservationId}/rateCode/${rateCode}`, method: 'POST', body: postRateCodeCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to change posted rate codes. <p><strong>OperationId:</strong>checkPostRateCode</p>
             *
             * @tags Cashiering
             * @name CheckPostRateCode
             * @summary Change posted rate codes
             * @request PUT:/hotels/{hotelId}/reservation/{reservationId}/rateCode/{rateCode}/action/validate
             */
            checkPostRateCode: (rateCode, reservationId, hotelId, postRateCodeCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservation/${reservationId}/rateCode/${rateCode}/action/validate`, method: 'PUT', body: postRateCodeCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to create Billing Charges in Batch. <p><strong>OperationId:</strong>postBillingChargesInBatch</p>
             *
             * @tags Cashiering
             * @name PostBillingChargesInBatch
             * @summary Create Billing Charges in Batch
             * @request POST:/hotels/{hotelId}/reservations/billingCharges
             */
            postBillingChargesInBatch: (hotelId, billingChargesInBatchCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/billingCharges`, method: 'POST', body: billingChargesInBatchCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to get batch CC Settlements. <p><strong>OperationId:</strong>getBatchCCSettlements</p>
             *
             * @tags Cashiering
             * @name GetBatchCcSettlements
             * @summary Get batch CC Settlements
             * @request GET:/hotels/{hotelId}/reservations/cCSettlements
             */
            getBatchCcSettlements: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/cCSettlements`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to get Additional Taxes. <p><strong>OperationId:</strong>getAdditionalTaxes</p>
             *
             * @tags Cashiering
             * @name GetAdditionalTaxes
             * @summary Get additional Taxes
             * @request GET:/hotels/{hotelId}/reservations/{reservationId}/additionalTaxes
             */
            getAdditionalTaxes: (reservationId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/additionalTaxes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to get advance payment balance. <p><strong>OperationId:</strong>getAdvancePaymentBalance</p>
             *
             * @tags Cashiering
             * @name GetAdvancePaymentBalance
             * @summary Get advance payment balance
             * @request GET:/hotels/{hotelId}/reservations/{reservationId}/advancePaymentBalance
             */
            getAdvancePaymentBalance: (reservationId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/advancePaymentBalance`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to create advance Room Charges. <p><strong>OperationId:</strong>postAdvanceRoomCharges</p>
             *
             * @tags Cashiering
             * @name PostAdvanceRoomCharges
             * @summary Create advance Room Charges
             * @request POST:/hotels/{hotelId}/reservations/{reservationId}/advanceRoomCharges
             */
            postAdvanceRoomCharges: (reservationId, hotelId, advanceRoomCharges, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/advanceRoomCharges`, method: 'POST', body: advanceRoomCharges, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to get Alert Notices.<br><p><strong><mark>This API is deprecated.</mark></strong></p> <p><strong>OperationId:</strong>getAlerts</p>
             *
             * @tags Cashiering
             * @name GetAlerts
             * @summary Get Alert Notices
             * @request GET:/hotels/{hotelId}/reservations/{reservationId}/alerts
             * @deprecated
             */
            getAlerts: (reservationId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/alerts`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to get authorization history. <p><strong>OperationId:</strong>getAuthorizationHistory</p>
             *
             * @tags Cashiering
             * @name GetAuthorizationHistory
             * @summary Get authorization history
             * @request GET:/hotels/{hotelId}/reservations/{reservationId}/authorizationHistory
             */
            getAuthorizationHistory: (reservationId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/authorizationHistory`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to get post Billing Charges. <p><strong>OperationId:</strong>getPostBillingCharges</p>
             *
             * @tags Cashiering
             * @name GetPostBillingCharges
             * @summary Get Billing Charges
             * @request GET:/hotels/{hotelId}/reservations/{reservationId}/charges
             */
            getPostBillingCharges: (reservationId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/charges`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to post a charge to a folio window. <p><strong>OperationId:</strong>postBillingCharges</p>
             *
             * @tags Cashiering
             * @name PostBillingCharges
             * @summary Post Charge to a folio
             * @request POST:/hotels/{hotelId}/reservations/{reservationId}/charges
             */
            postBillingCharges: (reservationId, hotelId, billingCharges, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/charges`, method: 'POST', body: billingCharges, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to validate the posting prior to posting the charge to the folio <p><strong>OperationId:</strong>postBillingCheckCharges</p>
             *
             * @tags Cashiering
             * @name PostBillingCheckCharges
             * @summary Pre-validate the Billing Charge
             * @request POST:/hotels/{hotelId}/reservations/{reservationId}/check/{checkNumber}/charges
             */
            postBillingCheckCharges: (checkNumber, reservationId, hotelId, billingCheckChargesCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/check/${checkNumber}/charges`, method: 'POST', body: billingCheckChargesCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API enables you to check out a guest reservation which is in due out status, with options to update the room's housekeeping status and set a flag to email the guests folio. <p><strong>OperationId:</strong>postCheckOut</p>
             *
             * @tags Cashiering
             * @name PostCheckOut
             * @summary Check out a guest
             * @request POST:/hotels/{hotelId}/reservations/{reservationId}/checkOuts
             */
            postCheckOut: (reservationId, hotelId, reservation, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/checkOuts`, method: 'POST', body: reservation, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to reinstate Checked Out Reservation. <p><strong>OperationId:</strong>reinstateCheckOut</p>
             *
             * @tags Cashiering
             * @name ReinstateCheckOut
             * @summary Reinstate Checked Out Reservation
             * @request PUT:/hotels/{hotelId}/reservations/{reservationId}/checkOuts/reinstate
             */
            reinstateCheckOut: (reservationId, hotelId, reinstateCheckedOutReservation, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/checkOuts/reinstate`, method: 'PUT', body: reinstateCheckedOutReservation, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to auto Settle CompFolios <p><strong>OperationId:</strong>autoSettleCompFolios</p>
             *
             * @tags Cashiering
             * @name AutoSettleCompFolios
             * @summary Operation to auto settle comp folios.
             * @request PUT:/hotels/{hotelId}/reservations/{reservationId}/comp/folios/autoSettlements
             */
            autoSettleCompFolios: (reservationId, hotelId, autoSettleCompFolios, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/comp/folios/autoSettlements`, method: 'PUT', body: autoSettleCompFolios, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to post complimentary bucket redemptions for a guest having PTS Membership Type <p><strong>OperationId:</strong>postCompRedemptions</p>
             *
             * @tags Cashiering
             * @name PostCompRedemptions
             * @summary Operation to post complimentary bucket redemptions for a guest having PTS Membership Type
             * @request POST:/hotels/{hotelId}/reservations/{reservationId}/compRedemptionPostings
             */
            postCompRedemptions: (reservationId, hotelId, postCompRedemptions, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/compRedemptionPostings`, method: 'POST', body: postCompRedemptions, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to reverse complimentary bucket redemptions for a guest having PTS Membership Type <p><strong>OperationId:</strong>reverseCompRedemptions</p>
             *
             * @tags Cashiering
             * @name ReverseCompRedemptions
             * @summary Operation to reverse complimentary bucket redemptions for a guest having PTS Membership Type
             * @request POST:/hotels/{hotelId}/reservations/{reservationId}/compRedemptionReversals
             */
            reverseCompRedemptions: (reservationId, hotelId, reverseCompRedemptions, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/compRedemptionReversals`, method: 'POST', body: reverseCompRedemptions, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Request to submit a job to post the deferred taxes. <p><strong>OperationId:</strong>postDeferredTaxesProcess</p>
             *
             * @tags Cashiering
             * @name PostDeferredTaxesProcess
             * @summary Request to submit a job to post the deferred taxes.
             * @request POST:/hotels/{hotelId}/reservations/{reservationId}/deferredTaxesProcess
             */
            postDeferredTaxesProcess: (reservationId, hotelId, deferredTaxesProcess, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/deferredTaxesProcess`, method: 'POST', body: deferredTaxesProcess, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to Process reservations deposit. <p><strong>OperationId:</strong>processReservationDeposit</p>
             *
             * @tags Cashiering
             * @name ProcessReservationDeposit
             * @summary Process Reservations deposit
             * @request POST:/hotels/{hotelId}/reservations/{reservationId}/deposit
             */
            processReservationDeposit: (reservationId, hotelId, reservationDepositCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/deposit`, method: 'POST', body: reservationDepositCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to create Deposit Folio. <p><strong>OperationId:</strong>postDepositFolio</p>
             *
             * @tags Cashiering
             * @name PostDepositFolio
             * @summary Create Deposit Folio
             * @request POST:/hotels/{hotelId}/reservations/{reservationId}/depositFolios
             */
            postDepositFolio: (reservationId, hotelId, depositFolioCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/depositFolios`, method: 'POST', body: depositFolioCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to get Deposit Maturity Information. <p><strong>OperationId:</strong>getDepositMaturityInfo</p>
             *
             * @tags Cashiering
             * @name GetDepositMaturityInfo
             * @summary Get Deposit Maturity Information
             * @request GET:/hotels/{hotelId}/reservations/{reservationId}/depositMaturity
             */
            getDepositMaturityInfo: (reservationId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/depositMaturity`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to create Deposit Payment. <p><strong>OperationId:</strong>postDepositPayment</p>
             *
             * @tags Cashiering
             * @name PostDepositPayment
             * @summary Create Deposit Payment
             * @request POST:/hotels/{hotelId}/reservations/{reservationId}/depositPayments
             */
            postDepositPayment: (reservationId, hotelId, depositPayment, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/depositPayments`, method: 'POST', body: depositPayment, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to fetch matured deposits. <p><strong>OperationId:</strong>getMaturedDeposits</p>
             *
             * @tags Cashiering
             * @name GetMaturedDeposits
             * @summary Get matured deposits
             * @request GET:/hotels/{hotelId}/reservations/{reservationId}/depositPayments
             */
            getMaturedDeposits: (reservationId, hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/depositPayments`, method: 'GET', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to Transfer Deposit to Guest Folio. <p><strong>OperationId:</strong>transitionDepositToGuestFolio</p>
             *
             * @tags Cashiering
             * @name TransitionDepositToGuestFolio
             * @summary Transition Deposit to Guest Folio
             * @request PUT:/hotels/{hotelId}/reservations/{reservationId}/depositTransition
             */
            transitionDepositToGuestFolio: (reservationId, hotelId, depositToGuestFolio, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/depositTransition`, method: 'PUT', body: depositToGuestFolio, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to change early Departure. <p><strong>OperationId:</strong>putForEarlyDeparture</p>
             *
             * @tags Cashiering
             * @name PutForEarlyDeparture
             * @summary Change early Departure
             * @request PUT:/hotels/{hotelId}/reservations/{reservationId}/earlyDeparture
             */
            putForEarlyDeparture: (reservationId, hotelId, earlyDeparture, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/earlyDeparture`, method: 'PUT', body: earlyDeparture, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to verify early Departure. <p><strong>OperationId:</strong>verifyForEarlyDeparture</p>
             *
             * @tags Cashiering
             * @name VerifyForEarlyDeparture
             * @summary Verify for early Departure
             * @request GET:/hotels/{hotelId}/reservations/{reservationId}/earlyDeparture/verify
             */
            verifyForEarlyDeparture: (reservationId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/earlyDeparture/verify`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API is used to fetch the staged transactions for a given reservation. <p><strong>OperationId:</strong>getfetchStagedTransactions</p>
             *
             * @tags Cashiering
             * @name GetfetchStagedTransactions
             * @summary Get fetchStagedTransactions
             * @request GET:/hotels/{hotelId}/reservations/{reservationId}/fetchStagedTransactions
             */
            getfetchStagedTransactions: (reservationId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/fetchStagedTransactions`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to apply final postings on a reservation. <p><strong>OperationId:</strong>applyFinalPostings</p>
             *
             * @tags Cashiering
             * @name ApplyFinalPostings
             * @summary Apply final Postings
             * @request POST:/hotels/{hotelId}/reservations/{reservationId}/finalCharges
             */
            applyFinalPostings: (reservationId, hotelId, finalPostings, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/finalCharges`, method: 'POST', body: finalPostings, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to get Fiscal Printing Details.<br><p><strong><mark>This API is deprecated. Please use getValidateFiscalPrintingDetails instead</mark></strong></p> <p><strong>OperationId:</strong>getFiscalPrintingDetails</p>
             *
             * @tags Cashiering
             * @name GetFiscalPrintingDetails
             * @summary Get Fiscal Printing Details
             * @request GET:/hotels/{hotelId}/reservations/{reservationId}/fiscalPrinting
             * @deprecated
             */
            getFiscalPrintingDetails: (reservationId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/fiscalPrinting`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to get fixed Charges for a reservation. <p><strong>OperationId:</strong>getFixedCharges</p>
             *
             * @tags Cashiering
             * @name GetFixedCharges
             * @summary Get Fixed Charges
             * @request GET:/hotels/{hotelId}/reservations/{reservationId}/fixedCharges
             */
            getFixedCharges: (reservationId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/fixedCharges`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to update fixed Charges for a reservation. <p><strong>OperationId:</strong>updateFixedCharges</p>
             *
             * @tags Cashiering
             * @name UpdateFixedCharges
             * @summary Updates Fixed Charges
             * @request PUT:/hotels/{hotelId}/reservations/{reservationId}/fixedCharges
             */
            updateFixedCharges: (reservationId, hotelId, fixedCharges, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/fixedCharges`, method: 'PUT', body: fixedCharges, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to remove fixed Charges for a reservation. <p><strong>OperationId:</strong>removeFixedCharges</p>
             *
             * @tags Cashiering
             * @name RemoveFixedCharges
             * @summary Delete Fixed Charges
             * @request DELETE:/hotels/{hotelId}/reservations/{reservationId}/fixedCharges
             */
            removeFixedCharges: (reservationId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/fixedCharges`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to create a fixed Charge for a reservation. <p><strong>OperationId:</strong>postFixedCharges</p>
             *
             * @tags Cashiering
             * @name PostFixedCharges
             * @summary Create Fixed Charges
             * @request POST:/hotels/{hotelId}/reservations/{reservationId}/fixedCharges
             */
            postFixedCharges: (reservationId, hotelId, fixedCharges, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/fixedCharges`, method: 'POST', body: fixedCharges, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to apply flexible benefit postings. <p><strong>OperationId:</strong>applyFlexibleBenefitPostings</p>
             *
             * @tags Cashiering
             * @name ApplyFlexibleBenefitPostings
             * @summary Apply flexible benefit postings
             * @request POST:/hotels/{hotelId}/reservations/{reservationId}/flexibleBenefitPostings
             */
            applyFlexibleBenefitPostings: (reservationId, hotelId, flexibleBenefitPostingsCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/flexibleBenefitPostings`, method: 'POST', body: flexibleBenefitPostingsCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to get folio tax payments information. <p><strong>OperationId:</strong>getFolioTaxPaymentsInfo</p>
             *
             * @tags Cashiering
             * @name GetFolioTaxPaymentsInfo
             * @summary Get folio tax payments information
             * @request GET:/hotels/{hotelId}/reservations/{reservationId}/folioTaxPayments
             */
            getFolioTaxPaymentsInfo: (reservationId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/folioTaxPayments`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API is used to fetch the folios for a given reservation. A guest reservation could have 1 or more folios per reservation. Folios will only exist for a reservation once the guest has checked into the hotel. <p><strong>OperationId:</strong>getFolio</p>
             *
             * @tags Cashiering
             * @name GetFolio
             * @summary Get folios
             * @request GET:/hotels/{hotelId}/reservations/{reservationId}/folios
             */
            getFolio: (reservationId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/folios`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to close the Reservation Folio on a reservation. <p><strong>OperationId:</strong>closeReservationFolio</p>
             *
             * @tags Cashiering
             * @name CloseReservationFolio
             * @summary Close Reservation Folio
             * @request PUT:/hotels/{hotelId}/reservations/{reservationId}/folios
             */
            closeReservationFolio: (reservationId, hotelId, closeFolioCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/folios`, method: 'PUT', body: closeFolioCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to generate folios for a reservation. <p><strong>OperationId:</strong>generateFolio</p>
             *
             * @tags Cashiering
             * @name GenerateFolio
             * @summary Generate Folios
             * @request POST:/hotels/{hotelId}/reservations/{reservationId}/folios
             */
            generateFolio: (reservationId, hotelId, folioCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/folios`, method: 'POST', body: folioCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to unlink reservation package allowance. <p><strong>OperationId:</strong>unlinkReservationPackageAllowance</p>
             *
             * @tags Cashiering
             * @name UnlinkReservationPackageAllowance
             * @summary Unlink reservation package allowance
             * @request DELETE:/hotels/{hotelId}/reservations/{reservationId}/packageAllowance/links
             */
            unlinkReservationPackageAllowance: (reservationId, hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/packageAllowance/links`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to get Reservation Package Options. <p><strong>OperationId:</strong>getReservationPackageOptions</p>
             *
             * @tags Cashiering
             * @name GetReservationPackageOptions
             * @summary Get Reservation Package Options
             * @request GET:/hotels/{hotelId}/reservations/{reservationId}/packageOptions
             */
            getReservationPackageOptions: (reservationId, hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/packageOptions`, method: 'GET', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to authorize Credit Card Amount by Reservation. <p><strong>OperationId:</strong>authorizeCreditCardAmount</p>
             *
             * @tags Cashiering
             * @name AuthorizeCreditCardAmount
             * @summary Authorize Credit Card Amount
             * @request POST:/hotels/{hotelId}/reservations/{reservationId}/paymentMethods/creditCard/authorize
             */
            authorizeCreditCardAmount: (reservationId, hotelId, ccAuthorizationCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/paymentMethods/creditCard/authorize`, method: 'POST', body: ccAuthorizationCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to register Manual Authorization. <p><strong>OperationId:</strong>registerManualAuthorization</p>
             *
             * @tags Cashiering
             * @name RegisterManualAuthorization
             * @summary Register Manual Authorization
             * @request POST:/hotels/{hotelId}/reservations/{reservationId}/paymentMethods/creditCard/authorize/manual
             */
            registerManualAuthorization: (reservationId, hotelId, ccManualAuthorizationCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/paymentMethods/creditCard/authorize/manual`, method: 'POST', body: ccManualAuthorizationCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to get Credit Card Authorization Instructions by Reservation. <p><strong>OperationId:</strong>getCCAuthorizationInstructions</p>
             *
             * @tags Cashiering
             * @name GetCcAuthorizationInstructions
             * @summary Get CC Authorization Instructions
             * @request GET:/hotels/{hotelId}/reservations/{reservationId}/paymentMethods/creditCard/authorizeInstructions
             */
            getCcAuthorizationInstructions: (reservationId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/paymentMethods/creditCard/authorizeInstructions`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to create Billing Payment on the folio of a Reservation. <p><strong>OperationId:</strong>postBillingPayment</p>
             *
             * @tags Cashiering
             * @name PostBillingPayment
             * @summary Create Billing Payment
             * @request POST:/hotels/{hotelId}/reservations/{reservationId}/payments
             */
            postBillingPayment: (reservationId, hotelId, billingPayment, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/payments`, method: 'POST', body: billingPayment, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to get posting activity details. <p><strong>OperationId:</strong>getPostingActivityDetail</p>
             *
             * @tags Cashiering
             * @name GetPostingActivityDetail
             * @summary Get posting activity details
             * @request GET:/hotels/{hotelId}/reservations/{reservationId}/postingActivities
             */
            getPostingActivityDetail: (reservationId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/postingActivities`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to redeem Prepaid Cards <p><strong>OperationId:</strong>redeemPrepaidCards</p>
             *
             * @tags Cashiering
             * @name RedeemPrepaidCards
             * @summary Operation to redeem prepaid cards.
             * @request PUT:/hotels/{hotelId}/reservations/{reservationId}/prepaidCards/redemptions
             */
            redeemPrepaidCards: (reservationId, hotelId, redeemPrepaidCards, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/prepaidCards/redemptions`, method: 'PUT', body: redeemPrepaidCards, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to create proforma for a specific reservation. <p><strong>OperationId:</strong>postProforma</p>
             *
             * @tags Cashiering
             * @name PostProforma
             * @summary Create proforma
             * @request POST:/hotels/{hotelId}/reservations/{reservationId}/proforma
             */
            postProforma: (reservationId, hotelId, reservationFolio, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/proforma`, method: 'POST', body: reservationFolio, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to get a reservations Revenue Bucket Totals. <p><strong>OperationId:</strong>getReservationRevenueBucketTotals</p>
             *
             * @tags Cashiering
             * @name GetReservationRevenueBucketTotals
             * @summary Get Reservations Revenue Bucket Totals
             * @request GET:/hotels/{hotelId}/reservations/{reservationId}/revenueBuckets
             */
            getReservationRevenueBucketTotals: (reservationId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/revenueBuckets`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to Reverse certificate postings. <p><strong>OperationId:</strong>reverseCertificatePostings</p>
             *
             * @tags Cashiering
             * @name ReverseCertificatePostings
             * @summary Reverse certificate postings
             * @request POST:/hotels/{hotelId}/reservations/{reservationId}/reverseCertificate
             */
            reverseCertificatePostings: (reservationId, hotelId, reverseCertificatePostingsCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/reverseCertificate`, method: 'POST', body: reverseCertificatePostingsCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to retrieve routing instructions for a specified reservation. <p><strong>OperationId:</strong>getRoutingInstructions</p>
             *
             * @tags Cashiering
             * @name GetRoutingInstructions
             * @summary Get routing instructions
             * @request GET:/hotels/{hotelId}/reservations/{reservationId}/routingInstructions
             */
            getRoutingInstructions: (reservationId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/routingInstructions`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to delete routing instructions for a specified reservation.<br><p><strong><mark>This API is deprecated. Please use deleteFolioRoutingInstructions or  deleteRoomRoutingInstructions or deleteCompRoutingInstructions or deleteRequestRoutingInstructions instead</mark></strong></p> <p><strong>OperationId:</strong>deleteRoutingInstructions</p>
             *
             * @tags Cashiering
             * @name DeleteRoutingInstructions
             * @summary Delete routing instructions
             * @request DELETE:/hotels/{hotelId}/reservations/{reservationId}/routingInstructions
             * @deprecated
             */
            deleteRoutingInstructions: (reservationId, hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/routingInstructions`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to update routing instructions for a specified reservation. <p><strong>OperationId:</strong>changeRoutingInstructions</p>
             *
             * @tags Cashiering
             * @name ChangeRoutingInstructions
             * @summary Change routing instructions
             * @request PUT:/hotels/{hotelId}/reservations/{reservationId}/routingInstructions/change
             */
            changeRoutingInstructions: (reservationId, hotelId, routingInstructionsToChange, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/routingInstructions/change`, method: 'PUT', body: routingInstructionsToChange, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to delete comp routing instructions for a specified reservation. <p><strong>OperationId:</strong>deleteCompRoutingInstructions</p>
             *
             * @tags Cashiering
             * @name DeleteCompRoutingInstructions
             * @summary Delete comp routing instructions
             * @request DELETE:/hotels/{hotelId}/reservations/{reservationId}/routingInstructions/comp
             */
            deleteCompRoutingInstructions: (reservationId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/routingInstructions/comp`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to add routing instructions to a reservation. <p><strong>OperationId:</strong>putRoutingInstructions</p>
             *
             * @tags Cashiering
             * @name PutRoutingInstructions
             * @summary Create routing instructions
             * @request PUT:/hotels/{hotelId}/reservations/{reservationId}/routingInstructions/create
             */
            putRoutingInstructions: (reservationId, hotelId, routingInstructions, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/routingInstructions/create`, method: 'PUT', body: routingInstructions, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to delete folio routing instructions for a specified reservation. <p><strong>OperationId:</strong>deleteFolioRoutingInstructions</p>
             *
             * @tags Cashiering
             * @name DeleteFolioRoutingInstructions
             * @summary Delete Folio routing instructions
             * @request DELETE:/hotels/{hotelId}/reservations/{reservationId}/routingInstructions/folio
             */
            deleteFolioRoutingInstructions: (reservationId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/routingInstructions/folio`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to delete request routing instructions for a specified reservation. <p><strong>OperationId:</strong>deleteRequestRoutingInstructions</p>
             *
             * @tags Cashiering
             * @name DeleteRequestRoutingInstructions
             * @summary Delete request routing instructions
             * @request DELETE:/hotels/{hotelId}/reservations/{reservationId}/routingInstructions/request
             */
            deleteRequestRoutingInstructions: (reservationId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/routingInstructions/request`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to delete room routing instructions for a specified reservation. <p><strong>OperationId:</strong>deleteRoomRoutingInstructions</p>
             *
             * @tags Cashiering
             * @name DeleteRoomRoutingInstructions
             * @summary Delete Room routing instructions
             * @request DELETE:/hotels/{hotelId}/reservations/{reservationId}/routingInstructions/room
             */
            deleteRoomRoutingInstructions: (reservationId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/routingInstructions/room`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to get eligibility of Deposit Refund. <p><strong>OperationId:</strong>isDepositRefundEligible</p>
             *
             * @tags Cashiering
             * @name IsDepositRefundEligible
             * @summary Get eligibility of Deposit Refund
             * @request GET:/hotels/{hotelId}/reservations/{reservationId}/transactions/{transactionId}
             */
            isDepositRefundEligible: (transactionId, reservationId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/transactions/${transactionId}`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to Split deposit transaction. <p><strong>OperationId:</strong>splitDepositTransaction</p>
             *
             * @tags Cashiering
             * @name SplitDepositTransaction
             * @summary Split deposit transaction
             * @request PUT:/hotels/{hotelId}/reservations/{reservationId}/transactions/{transactionId}
             */
            splitDepositTransaction: (transactionId, reservationId, hotelId, splitDepositTransaction, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/transactions/${transactionId}`, method: 'PUT', body: splitDepositTransaction, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to transfer Folio to Window. <p><strong>OperationId:</strong>transferFolioToWindow</p>
             *
             * @tags Cashiering
             * @name TransferFolioToWindow
             * @summary Transfer Folio to Window.
             * @request PUT:/hotels/{hotelId}/reservations/{reservationId}/transferFolioTransactions
             */
            transferFolioToWindow: (reservationId, hotelId, folioToWindow, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/transferFolioTransactions`, method: 'PUT', body: folioToWindow, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to transfer Transaction to Window. <p><strong>OperationId:</strong>transferTransactionToWindow</p>
             *
             * @tags Cashiering
             * @name TransferTransactionToWindow
             * @summary Transfer Transaction to Window
             * @request PUT:/hotels/{hotelId}/reservations/{reservationId}/transferTransactions
             */
            transferTransactionToWindow: (reservationId, hotelId, transactionToWindow, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/transferTransactions`, method: 'PUT', body: transactionToWindow, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to void a folio. <p><strong>OperationId:</strong>voidFolio</p>
             *
             * @tags Cashiering
             * @name VoidFolio
             * @summary Void folio
             * @request PUT:/hotels/{hotelId}/reservations/{reservationId}/voidfolios/{folioId}
             */
            voidFolio: (folioId, reservationId, hotelId, folioToVoid, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/voidfolios/${folioId}`, method: 'PUT', body: folioToVoid, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to change Reservation Deposit Transfer. <p><strong>OperationId:</strong>putReservationDepositTransfer</p>
             *
             * @tags Cashiering
             * @name PutReservationDepositTransfer
             * @summary Change Reservation Deposit Transfer.
             * @request PUT:/hotels/{hotelId}/reservations/{sourceReservationId}/deposit/transfers
             */
            putReservationDepositTransfer: (sourceReservationId, hotelId, depositTransferCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${sourceReservationId}/deposit/transfers`, method: 'PUT', body: depositTransferCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to Transfer Transaction to Reservation. <p><strong>OperationId:</strong>transferTransactionToReservation</p>
             *
             * @tags Cashiering
             * @name TransferTransactionToReservation
             * @summary Transfer Transaction to Reservation
             * @request PUT:/hotels/{hotelId}/reservations/{toReservationId}/transferTransaction
             */
            transferTransactionToReservation: (toReservationId, hotelId, reservationTransaction, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${toReservationId}/transferTransaction`, method: 'PUT', body: reservationTransaction, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to get Hotel Revenue. <p><strong>OperationId:</strong>getHotelRevenue</p>
             *
             * @tags Cashiering
             * @name GetHotelRevenue
             * @summary Get Hotel Revenue
             * @request GET:/hotels/{hotelId}/revenue
             */
            getHotelRevenue: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/revenue`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to get Billing Instruction Codes. <p><strong>OperationId:</strong>getBillingInstructionCodes</p>
             *
             * @tags Cashiering
             * @name GetBillingInstructionCodes
             * @summary Get Billing (routing) Instruction Codes
             * @request GET:/hotels/{hotelId}/routingInstructionCodes
             */
            getBillingInstructionCodes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/routingInstructionCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to link reservation package allowance. <p><strong>OperationId:</strong>linkReservationPackageAllowance</p>
             *
             * @tags Cashiering
             * @name LinkReservationPackageAllowance
             * @summary Link Reservation package allowance
             * @request POST:/hotels/{hotelId}/sourceReservations/{sourceReservationId}/destinationReservations/{destinationReservationId}/packageAllowance/links
             */
            linkReservationPackageAllowance: (destinationReservationId, sourceReservationId, hotelId, linkReservationPackageAllowance, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/sourceReservations/${sourceReservationId}/destinationReservations/${destinationReservationId}/packageAllowance/links`, method: 'POST', body: linkReservationPackageAllowance, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to get postings For Refresh. <p><strong>OperationId:</strong>getPostingsForRefresh</p>
             *
             * @tags Cashiering
             * @name GetPostingsForRefresh
             * @summary Get Postings For Refresh
             * @request GET:/hotels/{hotelId}/sourceReservations/{sourceReservationId}/targetReservations/{targetReservationId}/roomRouting
             */
            getPostingsForRefresh: (targetReservationId, sourceReservationId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/sourceReservations/${sourceReservationId}/targetReservations/${targetReservationId}/roomRouting`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to change Room Routing Refresh. <p><strong>OperationId:</strong>processRoomRoutingRefresh</p>
             *
             * @tags Cashiering
             * @name ProcessRoomRoutingRefresh
             * @summary Process Room Routing Refresh
             * @request PUT:/hotels/{hotelId}/sourceReservations/{sourceReservationId}/targetReservations/{targetReservationId}/roomRouting
             */
            processRoomRoutingRefresh: (targetReservationId, sourceReservationId, hotelId, roomRoutingRefresh, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/sourceReservations/${sourceReservationId}/targetReservations/${targetReservationId}/roomRouting`, method: 'PUT', body: roomRoutingRefresh, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to get Stored Folio Details. <p><strong>OperationId:</strong>getStoredFolioDetails</p>
             *
             * @tags Cashiering
             * @name GetStoredFolioDetails
             * @summary Get Stored Folio Details
             * @request GET:/hotels/{hotelId}/storedFolios/{folioId}
             */
            getStoredFolioDetails: (folioId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/storedFolios/${folioId}`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to create Stored Folio Details. <p><strong>OperationId:</strong>postStoredFolioDetails</p>
             *
             * @tags Cashiering
             * @name PostStoredFolioDetails
             * @summary Create Stored Folio Details
             * @request POST:/hotels/{hotelId}/storedFolios/{folioId}
             */
            postStoredFolioDetails: (folioId, hotelId, storedFolioDetails, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/storedFolios/${folioId}`, method: 'POST', body: storedFolioDetails, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to post supplemental folio. <p><strong>OperationId:</strong>postSupplementalFolio</p>
             *
             * @tags Cashiering
             * @name PostSupplementalFolio
             * @summary Post supplemental folio
             * @request POST:/hotels/{hotelId}/supplementFolios
             */
            postSupplementalFolio: (hotelId, postSupplementalFolio, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/supplementFolios`, method: 'POST', body: postSupplementalFolio, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to retrieve a list of Transaction Codes configured for a property. <p><strong>OperationId:</strong>getTransactionCodes</p>
             *
             * @tags Cashiering
             * @name GetTransactionCodes
             * @summary Get Transaction Codes
             * @request GET:/hotels/{hotelId}/transactionCodes
             */
            getTransactionCodes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/transactionCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to get Folio Transaction Details. <p><strong>OperationId:</strong>getFolioTransactionDetails</p>
             *
             * @tags Cashiering
             * @name GetFolioTransactionDetails
             * @summary Get Folio Transaction Details
             * @request GET:/hotels/{hotelId}/transactionDetails
             */
            getFolioTransactionDetails: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/transactionDetails`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to get  Guests Transactions. <p><strong>OperationId:</strong>getGuestsTransactions</p>
             *
             * @tags Cashiering
             * @name GetGuestsTransactions
             * @summary Get Guests Transactions
             * @request GET:/hotels/{hotelId}/transactions
             */
            getGuestsTransactions: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/transactions`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to Adjust Transactions. <p><strong>OperationId:</strong>adjustTransactions</p>
             *
             * @tags Cashiering
             * @name AdjustTransactions
             * @summary Adjust Transactions
             * @request PUT:/hotels/{hotelId}/transactions/adjust
             */
            adjustTransactions: (hotelId, transactionsAdjustment, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/transactions/adjust`, method: 'PUT', body: transactionsAdjustment, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to reverse an AR Invoice. <p><strong>OperationId:</strong>reverseARInvoice</p>
             *
             * @tags Cashiering
             * @name ReverseArInvoice
             * @summary Reverse AR Invoice
             * @request DELETE:/hotels/{hotelId}/transactions/arInvoices/reverse
             */
            reverseArInvoice: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/transactions/arInvoices/reverse`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to Split transactions. <p><strong>OperationId:</strong>splitTransaction</p>
             *
             * @tags Cashiering
             * @name SplitTransaction
             * @summary Split transactions
             * @request PUT:/hotels/{hotelId}/transactions/split
             */
            splitTransaction: (hotelId, transactionToSplit, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/transactions/split`, method: 'PUT', body: transactionToSplit, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to split and transfer transactions. <p><strong>OperationId:</strong>splitAndTransferTransaction</p>
             *
             * @tags Cashiering
             * @name SplitAndTransferTransaction
             * @summary Split and transfer transactions
             * @request PUT:/hotels/{hotelId}/transactions/splitAndTransfer
             */
            splitAndTransferTransaction: (hotelId, transactionToSplitAndTransfer, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/transactions/splitAndTransfer`, method: 'PUT', body: transactionToSplitAndTransfer, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to validate Transaction Codes. <p><strong>OperationId:</strong>validateTransactionCodes</p>
             *
             * @tags Cashiering
             * @name ValidateTransactionCodes
             * @summary Validate Transaction Codes
             * @request GET:/hotels/{hotelId}/transactions/{transactionId}
             */
            validateTransactionCodes: (transactionId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/transactions/${transactionId}`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to submit Comp Transactions. <p><strong>OperationId:</strong>postCompTransaction</p>
             *
             * @tags Cashiering
             * @name PostCompTransaction
             * @summary Submit Comp Transaction
             * @request POST:/hotels/{hotelId}/transactions/{transactionId}
             */
            postCompTransaction: (transactionId, hotelId, compTransactionCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/transactions/${transactionId}`, method: 'POST', body: compTransactionCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to change Billing Charges. <p><strong>OperationId:</strong>putBillingCharge</p>
             *
             * @tags Cashiering
             * @name PutBillingCharge
             * @summary Change Billing Charge
             * @request PUT:/hotels/{hotelId}/transactions/{transactionId}/charges
             */
            putBillingCharge: (transactionId, hotelId, billingCharge, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/transactions/${transactionId}/charges`, method: 'PUT', body: billingCharge, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to get Gaming Request Status Information. <p><strong>OperationId:</strong>getGamingRequestStatusInfo</p>
             *
             * @tags Cashiering
             * @name GetGamingRequestStatusInfo
             * @summary Get Gaming Request Status
             * @request GET:/hotels/{hotelId}/transactions/{transactionId}/compRequestStatus
             */
            getGamingRequestStatusInfo: (transactionId, hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/transactions/${transactionId}/compRequestStatus`, method: 'GET', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to delete flexible benefit postings. <p><strong>OperationId:</strong>reverseFlexibleBenefitPosting</p>
             *
             * @tags Cashiering
             * @name ReverseFlexibleBenefitPosting
             * @summary Delete flexible benefit postings
             * @request DELETE:/hotels/{hotelId}/transactions/{transactionId}/flexibleBenefitPostings
             */
            reverseFlexibleBenefitPosting: (transactionId, hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/transactions/${transactionId}/flexibleBenefitPostings`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to change Billing Payment. <p><strong>OperationId:</strong>changeBillingPayment</p>
             *
             * @tags Cashiering
             * @name ChangeBillingPayment
             * @summary Change Billing Payment
             * @request PUT:/hotels/{hotelId}/transactions/{transactionId}/payments
             */
            changeBillingPayment: (transactionId, hotelId, billingPaymentToChange, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/transactions/${transactionId}/payments`, method: 'PUT', body: billingPaymentToChange, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to detach Deposit Policy from Payment. <p><strong>OperationId:</strong>detachDepositPolicyFromPayment</p>
             *
             * @tags Cashiering
             * @name DetachDepositPolicyFromPayment
             * @summary Detach Deposit Policy from Payment
             * @request PUT:/hotels/{hotelId}/transactions/{transactionId}/policies/detach/deposit
             */
            detachDepositPolicyFromPayment: (transactionId, hotelId, detachPolicyApplyCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/transactions/${transactionId}/policies/detach/deposit`, method: 'PUT', body: detachPolicyApplyCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to create reverse payments. <p><strong>OperationId:</strong>postReversePayment</p>
             *
             * @tags Cashiering
             * @name PostReversePayment
             * @summary Create reverse payments
             * @request POST:/hotels/{hotelId}/transactions/{transactionId}/reversePayments
             */
            postReversePayment: (transactionId, hotelId, paymentReversalCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/transactions/${transactionId}/reversePayments`, method: 'POST', body: paymentReversalCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to get Balance Information. <p><strong>OperationId:</strong>getBalanceInfo</p>
             *
             * @tags Cashiering
             * @name GetBalanceInfo
             * @summary Get Balance Information
             * @request GET:/hotels/{hotelId}/transactionsTotal
             */
            getBalanceInfo: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/transactionsTotal`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to transfer comp transactions to window <p><strong>OperationId:</strong>transferCompTransactions</p>
             *
             * @tags Cashiering
             * @name TransferCompTransactions
             * @summary Transfer comp transactions to window
             * @request POST:/hotels/{hotelId}/transferCompTransactions
             */
            transferCompTransactions: (hotelId, transferCompTransactions, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/transferCompTransactions`, method: 'POST', body: transferCompTransactions, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to create Zero Balance Checkout Reservation Batch. <p><strong>OperationId:</strong>postZeroBalanceCheckoutReservations</p>
             *
             * @tags Cashiering
             * @name PostZeroBalanceCheckoutReservations
             * @summary Create Zero Balance Checkout Reservation Batch
             * @request POST:/hotels/{hotelId}/zeroBalanceCheckoutReservations/batchJobs
             */
            postZeroBalanceCheckoutReservations: (hotelId, batchZeroBalanceCheckoutReservation, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/zeroBalanceCheckoutReservations/batchJobs`, method: 'POST', body: batchZeroBalanceCheckoutReservation, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.reservations = {
            /**
             * @description You can use this API to post post Room And Tax For DayUse <p><strong>OperationId:</strong>postRoomAndTaxForDayUse</p>
             *
             * @tags Cashiering
             * @name PostRoomAndTaxForDayUse
             * @summary Operation to post room and tax for day use.
             * @request POST:/reservations/{reservationId}/postRoomAndTaxForDayUse
             */
            postRoomAndTaxForDayUse: (hotelId, reservationId, postRoomAndTaxForDayUse, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/reservations/${reservationId}/postRoomAndTaxForDayUse`, method: 'POST', body: postRoomAndTaxForDayUse, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.roundingDifference = {
            /**
             * @description You can use this API to get Rounding Difference. <p><strong>OperationId:</strong>getRoundingDifference</p>
             *
             * @tags Cashiering
             * @name GetRoundingDifference
             * @summary Get Rounding Difference
             * @request GET:/roundingDifference
             */
            getRoundingDifference: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/roundingDifference`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.services = {
            /**
             * @description You can use this API to clear cache in cashiering services. <p><strong>OperationId:</strong>clearCashieringServiceCache</p>
             *
             * @tags Cashiering
             * @name ClearCashieringServiceCache
             * @summary clearing of cache in cashiering services
             * @request DELETE:/services/cashiering/cache
             */
            clearCashieringServiceCache: (hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/services/cashiering/cache`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to Status check of cashiering services. <p><strong>OperationId:</strong>pingCashieringService</p>
             *
             * @tags Cashiering
             * @name PingCashieringService
             * @summary Status check of cashiering services
             * @request GET:/services/cashiering/status
             */
            pingCashieringService: (hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/services/cashiering/status`, method: 'GET', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
    }
}
exports.Api = Api;
