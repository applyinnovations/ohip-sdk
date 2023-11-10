"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ARAccountTypeToJSON = exports.ARAccountTypeFromJSONTyped = exports.ARAccountTypeFromJSON = exports.instanceOfARAccountType = void 0;
const runtime_1 = require("../runtime");
const ARAccountStatusType_1 = require("./ARAccountStatusType");
const ARAccountTypeLastReminderInfo_1 = require("./ARAccountTypeLastReminderInfo");
const ARAccountTypeLastStatementInfo_1 = require("./ARAccountTypeLastStatementInfo");
const ARAgingInfoType_1 = require("./ARAgingInfoType");
const ARBalanceType_1 = require("./ARBalanceType");
const ARInvoicesType_1 = require("./ARInvoicesType");
const ARPaymentsType_1 = require("./ARPaymentsType");
const ARYearViewInfoType_1 = require("./ARYearViewInfoType");
const AddressInfoType_1 = require("./AddressInfoType");
const CommentInfoType_1 = require("./CommentInfoType");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
const EmailInfoType_1 = require("./EmailInfoType");
const FixedChargesType_1 = require("./FixedChargesType");
const IndicatorsType_1 = require("./IndicatorsType");
const ProfileId_1 = require("./ProfileId");
const SearchMatchesType_1 = require("./SearchMatchesType");
const TelephoneInfoType_1 = require("./TelephoneInfoType");
const TraceType_1 = require("./TraceType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the ARAccountType interface.
 */
function instanceOfARAccountType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfARAccountType = instanceOfARAccountType;
function ARAccountTypeFromJSON(json) {
    return ARAccountTypeFromJSONTyped(json, false);
}
exports.ARAccountTypeFromJSON = ARAccountTypeFromJSON;
function ARAccountTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accountId': !(0, runtime_1.exists)(json, 'accountId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['accountId']),
        'accountIndicators': !(0, runtime_1.exists)(json, 'accountIndicators') ? undefined : (0, IndicatorsType_1.IndicatorsTypeFromJSON)(json['accountIndicators']),
        'accountName': !(0, runtime_1.exists)(json, 'accountName') ? undefined : json['accountName'],
        'accountNo': !(0, runtime_1.exists)(json, 'accountNo') ? undefined : json['accountNo'],
        'accountTypeDescription': !(0, runtime_1.exists)(json, 'accountTypeDescription') ? undefined : json['accountTypeDescription'],
        'address': !(0, runtime_1.exists)(json, 'address') ? undefined : (0, AddressInfoType_1.AddressInfoTypeFromJSON)(json['address']),
        'agingInfo': !(0, runtime_1.exists)(json, 'agingInfo') ? undefined : (0, ARAgingInfoType_1.ARAgingInfoTypeFromJSON)(json['agingInfo']),
        'balance': !(0, runtime_1.exists)(json, 'balance') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['balance']),
        'batchStatement': !(0, runtime_1.exists)(json, 'batchStatement') ? undefined : json['batchStatement'],
        'contactName': !(0, runtime_1.exists)(json, 'contactName') ? undefined : json['contactName'],
        'creditLimit': !(0, runtime_1.exists)(json, 'creditLimit') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['creditLimit']),
        'email': !(0, runtime_1.exists)(json, 'email') ? undefined : (0, EmailInfoType_1.EmailInfoTypeFromJSON)(json['email']),
        'emailStatementsReminders': !(0, runtime_1.exists)(json, 'emailStatementsReminders') ? undefined : json['emailStatementsReminders'],
        'fixedCharges': !(0, runtime_1.exists)(json, 'fixedCharges') ? undefined : (0, FixedChargesType_1.FixedChargesTypeFromJSON)(json['fixedCharges']),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'invoices': !(0, runtime_1.exists)(json, 'invoices') ? undefined : (0, ARInvoicesType_1.ARInvoicesTypeFromJSON)(json['invoices']),
        'lastReminderInfo': !(0, runtime_1.exists)(json, 'lastReminderInfo') ? undefined : (0, ARAccountTypeLastReminderInfo_1.ARAccountTypeLastReminderInfoFromJSON)(json['lastReminderInfo']),
        'lastStatementInfo': !(0, runtime_1.exists)(json, 'lastStatementInfo') ? undefined : (0, ARAccountTypeLastStatementInfo_1.ARAccountTypeLastStatementInfoFromJSON)(json['lastStatementInfo']),
        'monthEndCalcYN': !(0, runtime_1.exists)(json, 'monthEndCalcYN') ? undefined : json['monthEndCalcYN'],
        'notes': !(0, runtime_1.exists)(json, 'notes') ? undefined : (json['notes'].map(CommentInfoType_1.CommentInfoTypeFromJSON)),
        'paymentDueDays': !(0, runtime_1.exists)(json, 'paymentDueDays') ? undefined : json['paymentDueDays'],
        'payments': !(0, runtime_1.exists)(json, 'payments') ? undefined : (0, ARPaymentsType_1.ARPaymentsTypeFromJSON)(json['payments']),
        'permanent': !(0, runtime_1.exists)(json, 'permanent') ? undefined : json['permanent'],
        'primary': !(0, runtime_1.exists)(json, 'primary') ? undefined : json['primary'],
        'printFoliosWithStatement': !(0, runtime_1.exists)(json, 'printFoliosWithStatement') ? undefined : json['printFoliosWithStatement'],
        'profileId': !(0, runtime_1.exists)(json, 'profileId') ? undefined : (0, ProfileId_1.ProfileIdFromJSON)(json['profileId']),
        'searchMatches': !(0, runtime_1.exists)(json, 'searchMatches') ? undefined : (0, SearchMatchesType_1.SearchMatchesTypeFromJSON)(json['searchMatches']),
        'status': !(0, runtime_1.exists)(json, 'status') ? undefined : (0, ARAccountStatusType_1.ARAccountStatusTypeFromJSON)(json['status']),
        'summary': !(0, runtime_1.exists)(json, 'summary') ? undefined : (0, ARBalanceType_1.ARBalanceTypeFromJSON)(json['summary']),
        'telephones': !(0, runtime_1.exists)(json, 'telephones') ? undefined : (json['telephones'].map(TelephoneInfoType_1.TelephoneInfoTypeFromJSON)),
        'traces': !(0, runtime_1.exists)(json, 'traces') ? undefined : (json['traces'].map(TraceType_1.TraceTypeFromJSON)),
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
        'yearViewInfo': !(0, runtime_1.exists)(json, 'yearViewInfo') ? undefined : (0, ARYearViewInfoType_1.ARYearViewInfoTypeFromJSON)(json['yearViewInfo']),
    };
}
exports.ARAccountTypeFromJSONTyped = ARAccountTypeFromJSONTyped;
function ARAccountTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'accountId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.accountId),
        'accountIndicators': (0, IndicatorsType_1.IndicatorsTypeToJSON)(value.accountIndicators),
        'accountName': value.accountName,
        'accountNo': value.accountNo,
        'accountTypeDescription': value.accountTypeDescription,
        'address': (0, AddressInfoType_1.AddressInfoTypeToJSON)(value.address),
        'agingInfo': (0, ARAgingInfoType_1.ARAgingInfoTypeToJSON)(value.agingInfo),
        'balance': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.balance),
        'batchStatement': value.batchStatement,
        'contactName': value.contactName,
        'creditLimit': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.creditLimit),
        'email': (0, EmailInfoType_1.EmailInfoTypeToJSON)(value.email),
        'emailStatementsReminders': value.emailStatementsReminders,
        'fixedCharges': (0, FixedChargesType_1.FixedChargesTypeToJSON)(value.fixedCharges),
        'hotelId': value.hotelId,
        'invoices': (0, ARInvoicesType_1.ARInvoicesTypeToJSON)(value.invoices),
        'lastReminderInfo': (0, ARAccountTypeLastReminderInfo_1.ARAccountTypeLastReminderInfoToJSON)(value.lastReminderInfo),
        'lastStatementInfo': (0, ARAccountTypeLastStatementInfo_1.ARAccountTypeLastStatementInfoToJSON)(value.lastStatementInfo),
        'monthEndCalcYN': value.monthEndCalcYN,
        'notes': value.notes === undefined ? undefined : (value.notes.map(CommentInfoType_1.CommentInfoTypeToJSON)),
        'paymentDueDays': value.paymentDueDays,
        'payments': (0, ARPaymentsType_1.ARPaymentsTypeToJSON)(value.payments),
        'permanent': value.permanent,
        'primary': value.primary,
        'printFoliosWithStatement': value.printFoliosWithStatement,
        'profileId': (0, ProfileId_1.ProfileIdToJSON)(value.profileId),
        'searchMatches': (0, SearchMatchesType_1.SearchMatchesTypeToJSON)(value.searchMatches),
        'status': (0, ARAccountStatusType_1.ARAccountStatusTypeToJSON)(value.status),
        'summary': (0, ARBalanceType_1.ARBalanceTypeToJSON)(value.summary),
        'telephones': value.telephones === undefined ? undefined : (value.telephones.map(TelephoneInfoType_1.TelephoneInfoTypeToJSON)),
        'traces': value.traces === undefined ? undefined : (value.traces.map(TraceType_1.TraceTypeToJSON)),
        'type': value.type,
        'yearViewInfo': (0, ARYearViewInfoType_1.ARYearViewInfoTypeToJSON)(value.yearViewInfo),
    };
}
exports.ARAccountTypeToJSON = ARAccountTypeToJSON;
