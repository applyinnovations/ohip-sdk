"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccountTypeToJSON = exports.BankAccountTypeFromJSONTyped = exports.BankAccountTypeFromJSON = exports.instanceOfBankAccountType = void 0;
const runtime_1 = require("../runtime");
const CodeDescriptionType_1 = require("./CodeDescriptionType");
const CommissionPaymentMethodType_1 = require("./CommissionPaymentMethodType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the BankAccountType interface.
 */
function instanceOfBankAccountType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBankAccountType = instanceOfBankAccountType;
function BankAccountTypeFromJSON(json) {
    return BankAccountTypeFromJSONTyped(json, false);
}
exports.BankAccountTypeFromJSON = BankAccountTypeFromJSON;
function BankAccountTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'bankAccountId': !(0, runtime_1.exists)(json, 'bankAccountId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['bankAccountId']),
        'bankAccountNo': !(0, runtime_1.exists)(json, 'bankAccountNo') ? undefined : json['bankAccountNo'],
        'bankCode': !(0, runtime_1.exists)(json, 'bankCode') ? undefined : json['bankCode'],
        'bankName': !(0, runtime_1.exists)(json, 'bankName') ? undefined : json['bankName'],
        'branchCode': !(0, runtime_1.exists)(json, 'branchCode') ? undefined : json['branchCode'],
        'checkFormat': !(0, runtime_1.exists)(json, 'checkFormat') ? undefined : json['checkFormat'],
        'currency': !(0, runtime_1.exists)(json, 'currency') ? undefined : (0, CodeDescriptionType_1.CodeDescriptionTypeFromJSON)(json['currency']),
        'currentCheckNo': !(0, runtime_1.exists)(json, 'currentCheckNo') ? undefined : json['currentCheckNo'],
        '_default': !(0, runtime_1.exists)(json, 'default') ? undefined : json['default'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'hotelName': !(0, runtime_1.exists)(json, 'hotelName') ? undefined : json['hotelName'],
        'linkedToProfile': !(0, runtime_1.exists)(json, 'linkedToProfile') ? undefined : json['linkedToProfile'],
        'paymentMethod': !(0, runtime_1.exists)(json, 'paymentMethod') ? undefined : (0, CommissionPaymentMethodType_1.CommissionPaymentMethodTypeFromJSON)(json['paymentMethod']),
    };
}
exports.BankAccountTypeFromJSONTyped = BankAccountTypeFromJSONTyped;
function BankAccountTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'bankAccountId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.bankAccountId),
        'bankAccountNo': value.bankAccountNo,
        'bankCode': value.bankCode,
        'bankName': value.bankName,
        'branchCode': value.branchCode,
        'checkFormat': value.checkFormat,
        'currency': (0, CodeDescriptionType_1.CodeDescriptionTypeToJSON)(value.currency),
        'currentCheckNo': value.currentCheckNo,
        'default': value._default,
        'hotelId': value.hotelId,
        'hotelName': value.hotelName,
        'linkedToProfile': value.linkedToProfile,
        'paymentMethod': (0, CommissionPaymentMethodType_1.CommissionPaymentMethodTypeToJSON)(value.paymentMethod),
    };
}
exports.BankAccountTypeToJSON = BankAccountTypeToJSON;
