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
exports.ARPaymentTypeToJSON = exports.ARPaymentTypeFromJSONTyped = exports.ARPaymentTypeFromJSON = exports.instanceOfARPaymentType = void 0;
const runtime_1 = require("../runtime");
const CashierInfoType_1 = require("./CashierInfoType");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
const ResPaymentCardType_1 = require("./ResPaymentCardType");
/**
 * Check if a given object implements the ARPaymentType interface.
 */
function instanceOfARPaymentType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfARPaymentType = instanceOfARPaymentType;
function ARPaymentTypeFromJSON(json) {
    return ARPaymentTypeFromJSONTyped(json, false);
}
exports.ARPaymentTypeFromJSON = ARPaymentTypeFromJSON;
function ARPaymentTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'age': !(0, runtime_1.exists)(json, 'age') ? undefined : json['age'],
        'amount': !(0, runtime_1.exists)(json, 'amount') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['amount']),
        'amountUsed': !(0, runtime_1.exists)(json, 'amountUsed') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['amountUsed']),
        'balance': !(0, runtime_1.exists)(json, 'balance') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['balance']),
        'cashierInfo': !(0, runtime_1.exists)(json, 'cashierInfo') ? undefined : (0, CashierInfoType_1.CashierInfoTypeFromJSON)(json['cashierInfo']),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'paymentCard': !(0, runtime_1.exists)(json, 'paymentCard') ? undefined : (0, ResPaymentCardType_1.ResPaymentCardTypeFromJSON)(json['paymentCard']),
        'postingDate': !(0, runtime_1.exists)(json, 'postingDate') ? undefined : (new Date(json['postingDate'])),
        'reference': !(0, runtime_1.exists)(json, 'reference') ? undefined : json['reference'],
        'remark': !(0, runtime_1.exists)(json, 'remark') ? undefined : json['remark'],
        'revenueDate': !(0, runtime_1.exists)(json, 'revenueDate') ? undefined : (new Date(json['revenueDate'])),
        'sequenceNo': !(0, runtime_1.exists)(json, 'sequenceNo') ? undefined : json['sequenceNo'],
        'transactionCode': !(0, runtime_1.exists)(json, 'transactionCode') ? undefined : json['transactionCode'],
        'transactionDate': !(0, runtime_1.exists)(json, 'transactionDate') ? undefined : (new Date(json['transactionDate'])),
        'transactionNo': !(0, runtime_1.exists)(json, 'transactionNo') ? undefined : json['transactionNo'],
        'transferDate': !(0, runtime_1.exists)(json, 'transferDate') ? undefined : (new Date(json['transferDate'])),
        'transferredIn': !(0, runtime_1.exists)(json, 'transferredIn') ? undefined : json['transferredIn'],
        'transferredOut': !(0, runtime_1.exists)(json, 'transferredOut') ? undefined : json['transferredOut'],
    };
}
exports.ARPaymentTypeFromJSONTyped = ARPaymentTypeFromJSONTyped;
function ARPaymentTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'age': value.age,
        'amount': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.amount),
        'amountUsed': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.amountUsed),
        'balance': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.balance),
        'cashierInfo': (0, CashierInfoType_1.CashierInfoTypeToJSON)(value.cashierInfo),
        'hotelId': value.hotelId,
        'paymentCard': (0, ResPaymentCardType_1.ResPaymentCardTypeToJSON)(value.paymentCard),
        'postingDate': value.postingDate === undefined ? undefined : (value.postingDate.toISOString().substr(0, 10)),
        'reference': value.reference,
        'remark': value.remark,
        'revenueDate': value.revenueDate === undefined ? undefined : (value.revenueDate.toISOString().substr(0, 10)),
        'sequenceNo': value.sequenceNo,
        'transactionCode': value.transactionCode,
        'transactionDate': value.transactionDate === undefined ? undefined : (value.transactionDate.toISOString().substr(0, 10)),
        'transactionNo': value.transactionNo,
        'transferDate': value.transferDate === undefined ? undefined : (value.transferDate.toISOString().substr(0, 10)),
        'transferredIn': value.transferredIn,
        'transferredOut': value.transferredOut,
    };
}
exports.ARPaymentTypeToJSON = ARPaymentTypeToJSON;
