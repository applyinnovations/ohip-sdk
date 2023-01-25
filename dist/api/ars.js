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
exports.Api = exports.HttpClient = exports.ContentType = exports.CashieringTransactionTypeType = exports.PostPaymentActionType = exports.PaymentTax = exports.FiscalFolioInstruction = exports.NameValueDataTypeType = exports.CustomNameValueConfigType = exports.NameValueTypeType = exports.NameValueModuleType = exports.ARApplyType = exports.StatementType = exports.FixedChargeFrequencyType = exports.ARInvoiceCategory = exports.FolioStatusType = exports.ColorType = exports.CommissionPayoutToType = exports.ResAccessRestrictionType = exports.PMSResStatusType = exports.CommunicationStatusType = exports.TurndownStatusType = exports.HotelInterfaceStatusType = exports.HotelInterfaceTypeType = exports.ReservationAllowedActionType = exports.HousekeepingRoomStatusType = exports.CardNumberTypeType = exports.CardProcessingType = exports.CardTypeType = exports.ResProfileTypeType = exports.NameTypeType = exports.AnonymizationStatusType = exports.GuestHousekeepingServiceRequestType = exports.ReminderCycleType = void 0;
/** The different types of Reminder Cycle calculation rules. */
var ReminderCycleType;
(function (ReminderCycleType) {
    ReminderCycleType["Days"] = "Days";
    ReminderCycleType["EndOfMonth"] = "EndOfMonth";
})(ReminderCycleType = exports.ReminderCycleType || (exports.ReminderCycleType = {}));
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
var ARInvoiceCategory;
(function (ARInvoiceCategory) {
    ARInvoiceCategory["Normal"] = "Normal";
    ARInvoiceCategory["Credit"] = "Credit";
    ARInvoiceCategory["OldBalance"] = "OldBalance";
    ARInvoiceCategory["PasserBy"] = "PasserBy";
})(ARInvoiceCategory = exports.ARInvoiceCategory || (exports.ARInvoiceCategory = {}));
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
/** The Types of Statements that can be used on an Account Type. */
var StatementType;
(function (StatementType) {
    StatementType["BalanceForward"] = "BalanceForward";
    StatementType["IndividualOpenItems"] = "IndividualOpenItems";
})(StatementType = exports.StatementType || (exports.StatementType = {}));
/** Apply payment Selectively to the Invoices included. */
var ARApplyType;
(function (ARApplyType) {
    ARApplyType["Default"] = "Default";
    ARApplyType["OldestInvoice"] = "OldestInvoice";
    ARApplyType["ApplyToInvoices"] = "ApplyToInvoices";
    ARApplyType["ApplySelectivelyToInvoices"] = "ApplySelectivelyToInvoices";
})(ARApplyType = exports.ARApplyType || (exports.ARApplyType = {}));
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
/** Action to generate Offline folio when no reponse is received from fiscal service. */
var FiscalFolioInstruction;
(function (FiscalFolioInstruction) {
    FiscalFolioInstruction["Retry"] = "Retry";
    FiscalFolioInstruction["New"] = "New";
    FiscalFolioInstruction["Void"] = "Void";
    FiscalFolioInstruction["Offline"] = "Offline";
})(FiscalFolioInstruction = exports.FiscalFolioInstruction || (exports.FiscalFolioInstruction = {}));
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
/** Prepaid Card Redemption Action. */
var PostPaymentActionType;
(function (PostPaymentActionType) {
    PostPaymentActionType["Billing"] = "Billing";
    PostPaymentActionType["Settlefolio"] = "Settlefolio";
    PostPaymentActionType["Deposit"] = "Deposit";
    PostPaymentActionType["Compredemption"] = "Compredemption";
    PostPaymentActionType["Prepaidcardredemption"] = "Prepaidcardredemption";
})(PostPaymentActionType = exports.PostPaymentActionType || (exports.PostPaymentActionType = {}));
/** Wrapper Transaction Type. */
var CashieringTransactionTypeType;
(function (CashieringTransactionTypeType) {
    CashieringTransactionTypeType["Revenue"] = "Revenue";
    CashieringTransactionTypeType["Payment"] = "Payment";
    CashieringTransactionTypeType["Wrapper"] = "Wrapper";
})(CashieringTransactionTypeType = exports.CashieringTransactionTypeType || (exports.CashieringTransactionTypeType = {}));
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
        this.instance = axios_1.default.create(Object.assign(Object.assign({}, axiosConfig), { baseURL: new URL('/ars/v1', axiosConfig.baseURL).toString() }));
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
 * @title OPERA Cloud Accounts Receivables API
 * @version 22.3.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /ars/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors’ accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 22.3.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
class Api extends HttpClient {
    constructor() {
        super(...arguments);
        this.accountReminders = {
            /**
             * @description Use this API to get AR account holders' reminder letter that includes detail of payment due, their current account balance, or for other purposes. <p><strong>OperationId:</strong>getReminders</p>
             *
             * @tags AccountsReceivables
             * @name GetReminders
             * @summary Get account receivable's reminder statements
             * @request GET:/accountReminders
             */
            getReminders: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/accountReminders`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to generate a reminder statement which includes payment due,  current account balance, and etc. of account receivable account holder. <p><strong>OperationId:</strong>postReminders</p>
             *
             * @tags AccountsReceivables
             * @name PostReminders
             * @summary Generate reminders
             * @request POST:/accountReminders
             */
            postReminders: (hotelId, reminders, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/accountReminders`, method: 'POST', body: reminders, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.accounts = {
            /**
             * @description Use this API to search for AR Accounts for a given OPERA Profile id. API returns contain a list of AR Accounts and their AR information. <p><strong>OperationId:</strong>getAccounts</p>
             *
             * @tags AccountsReceivables
             * @name GetAccounts
             * @summary Get given profile's account receivable detail
             * @request GET:/accounts
             */
            getAccounts: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/accounts`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to get history of reminder letters prepared for AR account. <p><strong>OperationId:</strong>getRemindersHistory</p>
             *
             * @tags AccountsReceivables
             * @name GetRemindersHistory
             * @summary Get history of reminder letters for a given account receivable
             * @request GET:/accounts/{accountId}/remindersHistory
             */
            getRemindersHistory: (hotelId, accountId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/accounts/${accountId}/remindersHistory`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to prepare statement for an AR account holders. It is typically prepared for billing purposes.<br><p><strong><mark>This API is deprecated. Please use getARStatements instead</mark></strong></p> <p><strong>OperationId:</strong>getStatements</p>
             *
             * @tags AccountsReceivables
             * @name GetStatements
             * @summary Get given profile's account receivable statements
             * @request GET:/accounts/{accountId}/statements
             * @deprecated
             */
            getStatements: (hotelId, accountId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/accounts/${accountId}/statements`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.arTransactions = {
            /**
             * @description Use this API to get list of transaction data for a given account receivable account number and list of hotels <p><strong>OperationId:</strong>getARTransactions</p>
             *
             * @tags AccountsReceivables
             * @name GetArTransactions
             * @summary Get AR transactions.
             * @request GET:/arTransactions
             */
            getArTransactions: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/arTransactions`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.hotels = {
            /**
             * @description Use this API to create a new account receivable type account for given OPERA profile id. Prior creating account, need to use getProfile to find OPERA profile's id.  <p><strong>OperationId:</strong>postAccount</p>
             *
             * @tags AccountsReceivables
             * @name PostAccount
             * @summary Create an account receivable account
             * @request POST:/hotels/{hotelId}/accounts
             */
            postAccount: (hotelId, accountCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/accounts`, method: 'POST', body: accountCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to get list of account receivable invoices which are put on hold. <p><strong>OperationId:</strong>getInvoicesOnHold</p>
             *
             * @tags AccountsReceivables
             * @name GetInvoicesOnHold
             * @summary Get list of hold invoices for account receivable
             * @request GET:/hotels/{hotelId}/accounts/invoicesOnHold
             */
            getInvoicesOnHold: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/accounts/invoicesOnHold`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to search for account receivable type account's  detail for given account id. <p><strong>OperationId:</strong>getAccount</p>
             *
             * @tags AccountsReceivables
             * @name GetAccount
             * @summary Get account
             * @request GET:/hotels/{hotelId}/accounts/{accountId}
             */
            getAccount: (accountId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/accounts/${accountId}`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update existing account using account id and further detail. Use get account to get account detail prior updating. <p><strong>OperationId:</strong>putAccount</p>
             *
             * @tags AccountsReceivables
             * @name PutAccount
             * @summary Update a account receivable account
             * @request PUT:/hotels/{hotelId}/accounts/{accountId}
             */
            putAccount: (accountId, hotelId, account, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/accounts/${accountId}`, method: 'PUT', body: account, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete account detail for given unique account id. Use get accounts to find account id. <p><strong>OperationId:</strong>deleteAccount</p>
             *
             * @tags AccountsReceivables
             * @name DeleteAccount
             * @summary Delete Account
             * @request DELETE:/hotels/{hotelId}/accounts/{accountId}
             */
            deleteAccount: (accountId, hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/accounts/${accountId}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to add credits to account receivable invoices. <p><strong>OperationId:</strong>postCreditToInvoices</p>
             *
             * @tags AccountsReceivables
             * @name PostCreditToInvoices
             * @summary Add credits to AR invoices
             * @request POST:/hotels/{hotelId}/accounts/{accountId}/applyCreditToInvoices
             */
            postCreditToInvoices: (accountId, hotelId, creditToInvoices, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/accounts/${accountId}/applyCreditToInvoices`, method: 'POST', body: creditToInvoices, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to transfer credit card payment transactions to Accounts Receivable. <p><strong>OperationId:</strong>transferARCreditCardPayments</p>
             *
             * @tags AccountsReceivables
             * @name TransferArCreditCardPayments
             * @summary Move credit card payment to account receivable
             * @request POST:/hotels/{hotelId}/accounts/{accountId}/arCreditCard/transfer
             */
            transferArCreditCardPayments: (accountId, hotelId, arCreditCardPaymentsToTransfer, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/accounts/${accountId}/arCreditCard/transfer`, method: 'POST', body: arCreditCardPaymentsToTransfer, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to post charges to account receivable account. <p><strong>OperationId:</strong>postChargesToAR</p>
             *
             * @tags AccountsReceivables
             * @name PostChargesToAr
             * @summary Add charges to account receivable
             * @request POST:/hotels/{hotelId}/accounts/{accountId}/charges
             */
            postChargesToAr: (accountId, hotelId, arChargesPostingCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/accounts/${accountId}/charges`, method: 'POST', body: arChargesPostingCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to add a note for a given account id. Use get accounts to find account id. <p><strong>OperationId:</strong>postAccountComment</p>
             *
             * @tags AccountsReceivables
             * @name PostAccountComment
             * @summary Create Account Comment
             * @request POST:/hotels/{hotelId}/accounts/{accountId}/comments
             */
            postAccountComment: (accountId, hotelId, accountComment, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/accounts/${accountId}/comments`, method: 'POST', body: accountComment, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update existing account note. Use get account to find noteid <p><strong>OperationId:</strong>putAccountComment</p>
             *
             * @tags AccountsReceivables
             * @name PutAccountComment
             * @summary Change Account Comment
             * @request PUT:/hotels/{hotelId}/accounts/{accountId}/comments
             */
            putAccountComment: (accountId, hotelId, accountComment, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/accounts/${accountId}/comments`, method: 'PUT', body: accountComment, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete notes from a given account id. Use get account with an instruction to get note id. <p><strong>OperationId:</strong>deleteAccountComment</p>
             *
             * @tags AccountsReceivables
             * @name DeleteAccountComment
             * @summary Delete Account Comment
             * @request DELETE:/hotels/{hotelId}/accounts/{accountId}/comments
             */
            deleteAccountComment: (accountId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/accounts/${accountId}/comments`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to combine two or more invoices into one invoice <p><strong>OperationId:</strong>compressARInvoices</p>
             *
             * @tags AccountsReceivables
             * @name CompressArInvoices
             * @summary Combines Account receivable invoices
             * @request PUT:/hotels/{hotelId}/accounts/{accountId}/compressInvoices
             */
            compressArInvoices: (accountId, hotelId, arCompressInvoices, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/accounts/${accountId}/compressInvoices`, method: 'PUT', body: arCompressInvoices, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create account receivable to multiple hotels by copying from source hotel. <p><strong>OperationId:</strong>copyARAccount</p>
             *
             * @tags AccountsReceivables
             * @name CopyArAccount
             * @summary Copy account receivable account
             * @request POST:/hotels/{hotelId}/accounts/{accountId}/copyAccount
             */
            copyArAccount: (accountId, hotelId, arAccountCopy, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/accounts/${accountId}/copyAccount`, method: 'POST', body: arAccountCopy, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create fixed charges for a given account id of account receivable. Use get accounts to find an account id. <p><strong>OperationId:</strong>postAccountFixedCharge</p>
             *
             * @tags AccountsReceivables
             * @name PostAccountFixedCharge
             * @summary Create fixed charges
             * @request POST:/hotels/{hotelId}/accounts/{accountId}/fixedCharges
             */
            postAccountFixedCharge: (accountId, hotelId, accountFixedCharge, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/accounts/${accountId}/fixedCharges`, method: 'POST', body: accountFixedCharge, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update existing fixed charges for a given account receivable. <p><strong>OperationId:</strong>putAccountFixedCharge</p>
             *
             * @tags AccountsReceivables
             * @name PutAccountFixedCharge
             * @summary Update fixed charge detail
             * @request PUT:/hotels/{hotelId}/accounts/{accountId}/fixedCharges/{fixedChargeId}
             */
            putAccountFixedCharge: (fixedChargeId, accountId, hotelId, accountFixedCharge, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/accounts/${accountId}/fixedCharges/${fixedChargeId}`, method: 'PUT', body: accountFixedCharge, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete fixed charges for a given account receivable id. Use getaccounts to find an account id. <p><strong>OperationId:</strong>deleteAccountFixedCharge</p>
             *
             * @tags AccountsReceivables
             * @name DeleteAccountFixedCharge
             * @summary Delete fixed charges
             * @request DELETE:/hotels/{hotelId}/accounts/{accountId}/fixedCharges/{fixedChargeId}
             */
            deleteAccountFixedCharge: (fixedChargeId, accountId, hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/accounts/${accountId}/fixedCharges/${fixedChargeId}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to find account receivable folio printers <p><strong>OperationId:</strong>getARFolioPrinters</p>
             *
             * @tags AccountsReceivables
             * @name GetArFolioPrinters
             * @summary Get list of account receivable folio printers
             * @request GET:/hotels/{hotelId}/accounts/{accountId}/folioPrinters
             */
            getArFolioPrinters: (accountId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/accounts/${accountId}/folioPrinters`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create a new invoice for an AR account. <p><strong>OperationId:</strong>postInvoice</p>
             *
             * @tags AccountsReceivables
             * @name PostInvoice
             * @summary Create account receivable invoices
             * @request POST:/hotels/{hotelId}/accounts/{accountId}/invoices
             */
            postInvoice: (accountId, hotelId, arInvoice, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/accounts/${accountId}/invoices`, method: 'POST', body: arInvoice, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to generate statement for a given account receivable id. It includes the account balance as of the current business date, an aging summary that shows how long outstanding balances have been "on the books" for each aging level set up for given property. <p><strong>OperationId:</strong>postStatements</p>
             *
             * @tags AccountsReceivables
             * @name PostStatements
             * @summary Generate a statement for a given account receivable
             * @request POST:/hotels/{hotelId}/accounts/{accountId}/statements
             */
            postStatements: (accountId, hotelId, statementsToBeGenerated, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/accounts/${accountId}/statements`, method: 'POST', body: statementsToBeGenerated, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to add a trace for a given account id. Use getaccounts to find account id. <p><strong>OperationId:</strong>postAccountTrace</p>
             *
             * @tags AccountsReceivables
             * @name PostAccountTrace
             * @summary Add a trace to an account receivable account
             * @request POST:/hotels/{hotelId}/accounts/{accountId}/traces
             */
            postAccountTrace: (accountId, hotelId, accountTrace, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/accounts/${accountId}/traces`, method: 'POST', body: accountTrace, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>putAccountTrace</p>
             *
             * @tags AccountsReceivables
             * @name PutAccountTrace
             * @summary This API facilitates modification of account traces.
             * @request PUT:/hotels/{hotelId}/accounts/{accountId}/traces
             */
            putAccountTrace: (accountId, hotelId, accountTrace, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/accounts/${accountId}/traces`, method: 'PUT', body: accountTrace, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>deleteAccountTrace</p>
             *
             * @tags AccountsReceivables
             * @name DeleteAccountTrace
             * @summary This API facilitates deletion of account traces.
             * @request DELETE:/hotels/{hotelId}/accounts/{accountId}/traces
             */
            deleteAccountTrace: (accountId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/accounts/${accountId}/traces`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to get AR account's invoice and payment details including credit, debit, amount due date, etc. <p><strong>OperationId:</strong>getInvoicePaymentDetail</p>
             *
             * @tags AccountsReceivables
             * @name GetInvoicePaymentDetail
             * @summary Get account receivable invoice and payment details
             * @request GET:/hotels/{hotelId}/accounts/{accountId}/transactions/{transactionId}/invoicePaymentDetails
             */
            getInvoicePaymentDetail: (transactionId, accountId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/accounts/${accountId}/transactions/${transactionId}/invoicePaymentDetails`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to reverse compressing account receivable invoices and break single combined invoice into individual invoices. <p><strong>OperationId:</strong>uncompressARInvoices</p>
             *
             * @tags AccountsReceivables
             * @name UncompressArInvoices
             * @summary Reverse the compressing invoice process
             * @request POST:/hotels/{hotelId}/accounts/{accountId}/uncompressInvoices
             */
            uncompressArInvoices: (accountId, hotelId, invoice, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/accounts/${accountId}/uncompressInvoices`, method: 'POST', body: invoice, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to get account receivable profile's aging summary including account name, summary, credit limit, total outstanding balance, etc. per aging bucket. <p><strong>OperationId:</strong>getARAgingCycles</p>
             *
             * @tags AccountsReceivables
             * @name GetArAgingCycles
             * @summary Get given AR account's aging detail
             * @request GET:/hotels/{hotelId}/agingCycles
             */
            getArAgingCycles: (hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/agingCycles`, method: 'GET', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create a batch process for simultaneously post a one-time charge to multiple account receivable accounts. <p><strong>OperationId:</strong>postBatchCharges</p>
             *
             * @tags AccountsReceivables
             * @name PostBatchCharges
             * @summary Create process to charge on multiple account receivables
             * @request POST:/hotels/{hotelId}/batchCharges
             */
            postBatchCharges: (hotelId, batchChargesToPost, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/batchCharges`, method: 'POST', body: batchChargesToPost, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to transfer direct bills to account receivable account <p><strong>OperationId:</strong>transferDirectBillsToAr</p>
             *
             * @tags AccountsReceivables
             * @name TransferDirectBillsToAr
             * @summary Move direct bills to account receivable
             * @request PUT:/hotels/{hotelId}/directBillsToAR
             */
            transferDirectBillsToAr: (hotelId, transferDirectBillsToAr, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/directBillsToAR`, method: 'PUT', body: transferDirectBillsToAr, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update or transfer invoice detail such as amount, transaction code, etc. <p><strong>OperationId:</strong>putInvoiceDetails</p>
             *
             * @tags AccountsReceivables
             * @name PutInvoiceDetails
             * @summary Update invoice detail.
             * @request PUT:/hotels/{hotelId}/invoices
             */
            putInvoiceDetails: (hotelId, invoice, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/invoices`, method: 'PUT', body: invoice, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update or transfer invoice detail such as amount, transaction code, etc.<br><p><strong><mark>This API is deprecated. Please use putInvoiceDetails instead</mark></strong></p> <p><strong>OperationId:</strong>putInvoice</p>
             *
             * @tags AccountsReceivables
             * @name PutInvoice
             * @summary Update invoice detail.
             * @request PUT:/hotels/{hotelId}/invoices/{invoiceId}
             * @deprecated
             */
            putInvoice: (invoiceId, hotelId, invoice, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/invoices/${invoiceId}`, method: 'PUT', body: invoice, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to get applied payment details for AR invoices.<br><p><strong><mark>This API is deprecated. Please use getAppliedInvoicePayments instead</mark></strong></p> <p><strong>OperationId:</strong>getInvoiceAppliedPayments</p>
             *
             * @tags AccountsReceivables
             * @name GetInvoiceAppliedPayments
             * @summary Get account receivable invoice's payment history
             * @request GET:/hotels/{hotelId}/invoices/{invoiceId}/transactions/{transactionId}/accounts/{accountId}/invoiceAppliedPayments
             * @deprecated
             */
            getInvoiceAppliedPayments: (accountId, transactionId, invoiceId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/invoices/${invoiceId}/transactions/${transactionId}/accounts/${accountId}/invoiceAppliedPayments`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Delete payments from invoice.<br><p><strong><mark>This API is deprecated. Please use removePaymentsFromInvoice instead</mark></strong></p> <p><strong>OperationId:</strong>deletePaymentsFromInvoice</p>
             *
             * @tags AccountsReceivables
             * @name DeletePaymentsFromInvoice
             * @summary Delete payments from invoice
             * @request DELETE:/hotels/{hotelId}/invoices/{invoiceId}/transactions/{transactionId}/paymentsFromInvoice
             * @deprecated
             */
            deletePaymentsFromInvoice: (transactionId, invoiceId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/invoices/${invoiceId}/transactions/${transactionId}/paymentsFromInvoice`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to post charges to account receivable account.<br><p><strong><mark>This API is deprecated. Please use postChargesToAR instead</mark></strong></p> <p><strong>OperationId:</strong>postARCharges</p>
             *
             * @tags AccountsReceivables
             * @name PostArCharges
             * @summary Add charges to account receivable
             * @request POST:/hotels/{hotelId}/profiles/{profileId}/accounts/{accountId}/charges
             * @deprecated
             */
            postArCharges: (accountId, profileId, hotelId, arChargesPostingCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/profiles/${profileId}/accounts/${accountId}/charges`, method: 'POST', body: arChargesPostingCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to make payment to AR accounts for a list of reservations. <p><strong>OperationId:</strong>postARPayments</p>
             *
             * @tags AccountsReceivables
             * @name PostArPayments
             * @summary Add payment to an account receivable account for a list of reservations
             * @request POST:/hotels/{hotelId}/profiles/{profileId}/accounts/{accountId}/payments
             */
            postArPayments: (accountId, profileId, hotelId, arPaymentsToBeCreated, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/profiles/${profileId}/accounts/${accountId}/payments`, method: 'POST', body: arPaymentsToBeCreated, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to find the history of statements prepared for AR accounts. <p><strong>OperationId:</strong>getStatementsHistory</p>
             *
             * @tags AccountsReceivables
             * @name GetStatementsHistory
             * @summary Get given profile's account receivable statements history
             * @request GET:/hotels/{hotelId}/profiles/{profileId}/accounts/{accountId}/statementsHistory
             */
            getStatementsHistory: (accountId, profileId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/profiles/${profileId}/accounts/${accountId}/statementsHistory`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to reverse payment that occurred accidently or via user error. <p><strong>OperationId:</strong>postReversePayment</p>
             *
             * @tags AccountsReceivables
             * @name PostReversePayment
             * @summary Reverse Payment
             * @request POST:/hotels/{hotelId}/profiles/{profileId}/accounts/{accountId}/transactions/{transactionId}/reversePayment
             */
            postReversePayment: (transactionId, accountId, profileId, hotelId, reversePayment, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/profiles/${profileId}/accounts/${accountId}/transactions/${transactionId}/reversePayment`, method: 'POST', body: reversePayment, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to get applied payment details for AR invoices. <p><strong>OperationId:</strong>getAppliedInvoicePayments</p>
             *
             * @tags AccountsReceivables
             * @name GetAppliedInvoicePayments
             * @summary Get account receivable invoice's payment history
             * @request GET:/hotels/{hotelId}/transactions/{transactionId}/accounts/{accountId}/invoiceAppliedPayments
             */
            getAppliedInvoicePayments: (accountId, transactionId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/transactions/${transactionId}/accounts/${accountId}/invoiceAppliedPayments`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to get lists of folios for guests who checked out using a credit card payment transaction code that has an account receivable associated with it. It also lists payments made prior to check out if the payment was made using a credit card transaction code that has a an account receivable associated with it. <p><strong>OperationId:</strong>getARCreditCardPayments</p>
             *
             * @tags AccountsReceivables
             * @name GetArCreditCardPayments
             * @summary Get account receivable folios which are paid using credit cards
             * @request GET:/hotels/{hotelId}/transactions/{transactionId}/creditcard/payments
             */
            getArCreditCardPayments: (transactionId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/transactions/${transactionId}/creditcard/payments`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Delete payments from invoice. <p><strong>OperationId:</strong>removePaymentsFromInvoice</p>
             *
             * @tags AccountsReceivables
             * @name RemovePaymentsFromInvoice
             * @summary Delete payments from invoice
             * @request DELETE:/hotels/{hotelId}/transactions/{transactionId}/paymentsFromInvoice
             */
            removePaymentsFromInvoice: (transactionId, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/transactions/${transactionId}/paymentsFromInvoice`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to remove the invoice from the statement before that invoice can be included in a different statement. <p><strong>OperationId:</strong>unlinkInvoiceFromStatement</p>
             *
             * @tags AccountsReceivables
             * @name UnlinkInvoiceFromStatement
             * @summary Unlink invoices from a statement
             * @request PUT:/hotels/{hotelId}/unlink/invoiceFromStatement
             */
            unlinkInvoiceFromStatement: (hotelId, unlinkInvoiceFromStatement, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/unlink/invoiceFromStatement`, method: 'PUT', body: unlinkInvoiceFromStatement, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.invoicePayments = {
            /**
             * @description Use this API to get payment data for account receivable invoices. <p><strong>OperationId:</strong>getInvoicesPayments</p>
             *
             * @tags AccountsReceivables
             * @name GetInvoicesPayments
             * @summary Get payment detail for account's invoices
             * @request GET:/invoicePayments/accounts/{accountId}
             */
            getInvoicesPayments: (hotelId, accountId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/invoicePayments/accounts/${accountId}`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.invoicePostings = {
            /**
             * @description Use this API to get account receivable postings. <p><strong>OperationId:</strong>getInvoicePostings</p>
             *
             * @tags AccountsReceivables
             * @name GetInvoicePostings
             * @summary Get account receivable invoice postings
             * @request GET:/invoicePostings
             */
            getInvoicePostings: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/invoicePostings`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.invoices = {
            /**
             * @description Use this API to close ("freeze") one or more selected invoices at any point after they have been created. When an invoice has been closed, no new postings to the invoice can be made, transaction reference or supplemental information can be edited, or adjustments to transaction codes can be made. However, payments can be posted to an invoice after it has been closed. <p><strong>OperationId:</strong>putInvoices</p>
             *
             * @tags AccountsReceivables
             * @name PutInvoices
             * @summary Close account receivable invoices
             * @request PUT:/invoices/close
             */
            putInvoices: (hotelId, invoices, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/invoices/close`, method: 'PUT', body: invoices, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.invoicesAccount = {
            /**
             * @description Use this API to update existing AR invoice for a given profile and/or a reservation. <p><strong>OperationId:</strong>putARInvoicesAccount</p>
             *
             * @tags AccountsReceivables
             * @name PutArInvoicesAccount
             * @summary Change Account receivable invoice for an AR account
             * @request PUT:/invoicesAccount
             */
            putArInvoicesAccount: (hotelId, arInvoicesAccount, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/invoicesAccount`, method: 'PUT', body: arInvoicesAccount, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.oldBalances = {
            /**
             * @description Use this API to add old balances from external accounting systems into OPERA Accounts Receivable. <p><strong>OperationId:</strong>postAROldBalances</p>
             *
             * @tags AccountsReceivables
             * @name PostArOldBalances
             * @summary Add old balances from external accounting systems
             * @request POST:/oldBalances
             */
            postArOldBalances: (hotelId, arOldBalances, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/oldBalances`, method: 'POST', body: arOldBalances, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.profiles = {
            /**
             * @description Use this API to get profile's account receivable summary including fixed charges, account balance, statements, reminder history, etc. <p><strong>OperationId:</strong>getProfileAging</p>
             *
             * @tags AccountsReceivables
             * @name GetProfileAging
             * @summary Get given profile's aging detail
             * @request GET:/profiles/{profileId}/aging
             */
            getProfileAging: (hotelId, profileId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/profiles/${profileId}/aging`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to get a month-by-month total of accrued debits, accrued credits, and a net total for the selected account data. <p><strong>OperationId:</strong>getProfileYearView</p>
             *
             * @tags AccountsReceivables
             * @name GetProfileYearView
             * @summary Get given profile's yearly account receivable detail
             * @request GET:/profiles/{profileId}/yearViews
             */
            getProfileYearView: (hotelId, profileId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/profiles/${profileId}/yearViews`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.reopenInvoices = {
            /**
             * @description Use this API to unfreeze or reopen invoice for account receivable. <p><strong>OperationId:</strong>reopenInvoices</p>
             *
             * @tags AccountsReceivables
             * @name ReopenInvoices
             * @summary Reopen account receivable closed invoice
             * @request PUT:/reopenInvoices
             */
            reopenInvoices: (hotelId, invoices, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/reopenInvoices`, method: 'PUT', body: invoices, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.services = {
            /**
             * @description This API facilitates clearing of cache in account receivable services. <p><strong>OperationId:</strong>deleteAccountsReceivableServiceCache</p>
             *
             * @tags AccountsReceivables
             * @name DeleteAccountsReceivableServiceCache
             * @summary Clears service level cache
             * @request DELETE:/services/accountReceivables/cache
             */
            deleteAccountsReceivableServiceCache: (hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/services/accountReceivables/cache`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to check account receivable service status. <p><strong>OperationId:</strong>pingAccountsReceivableService</p>
             *
             * @tags AccountsReceivables
             * @name PingAccountsReceivableService
             * @summary Check account receivable service status
             * @request GET:/services/accountReceivables/status
             */
            pingAccountsReceivableService: (hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/services/accountReceivables/status`, method: 'GET', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.statements = {
            /**
             * @description Use this API to prepare statement for an AR account holders. It is typically prepared for billing purposes. <p><strong>OperationId:</strong>getARStatements</p>
             *
             * @tags AccountsReceivables
             * @name GetArStatements
             * @summary Get given profile's account receivable statements
             * @request GET:/statements
             */
            getArStatements: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/statements`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.transferInvoicesAndPayments = {
            /**
             * @description Use this API to move all or a portion of an invoice or a payment from one AR account to another AR account <p><strong>OperationId:</strong>transferInvoicesAndPayments</p>
             *
             * @tags AccountsReceivables
             * @name TransferInvoicesAndPayments
             * @summary Move an invoice or a payment to another AR account
             * @request PUT:/transferInvoicesAndPayments
             */
            transferInvoicesAndPayments: (hotelId, invoicesAndPaymentsToTransfer, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/transferInvoicesAndPayments`, method: 'PUT', body: invoicesAndPaymentsToTransfer, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.transferPostings = {
            /**
             * @description Use this API to transfer postings from one account receivable invoice to another account receivable invoice. <p><strong>OperationId:</strong>transferPostings</p>
             *
             * @tags AccountsReceivables
             * @name TransferPostings
             * @summary Transfer postings
             * @request PUT:/transferPostings
             */
            transferPostings: (hotelId, transferPostings, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/transferPostings`, method: 'PUT', body: transferPostings, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
    }
}
exports.Api = Api;
