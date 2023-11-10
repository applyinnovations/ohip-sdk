"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethodTypeToJSON = exports.PaymentMethodTypeFromJSONTyped = exports.PaymentMethodTypeFromJSON = exports.instanceOfPaymentMethodType = void 0;
const runtime_1 = require("../runtime");
const CalculatePointsType_1 = require("./CalculatePointsType");
const CreditLimitType_1 = require("./CreditLimitType");
const PaymentCardType_1 = require("./PaymentCardType");
const PaymentMethodTransactionInfoType_1 = require("./PaymentMethodTransactionInfoType");
const PaymentMethodUsageType_1 = require("./PaymentMethodUsageType");
/**
 * Check if a given object implements the PaymentMethodType interface.
 */
function instanceOfPaymentMethodType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPaymentMethodType = instanceOfPaymentMethodType;
function PaymentMethodTypeFromJSON(json) {
    return PaymentMethodTypeFromJSONTyped(json, false);
}
exports.PaymentMethodTypeFromJSON = PaymentMethodTypeFromJSON;
function PaymentMethodTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'calculatePoints': !(0, runtime_1.exists)(json, 'calculatePoints') ? undefined : (0, CalculatePointsType_1.CalculatePointsTypeFromJSON)(json['calculatePoints']),
        'creditLimit': !(0, runtime_1.exists)(json, 'creditLimit') ? undefined : (0, CreditLimitType_1.CreditLimitTypeFromJSON)(json['creditLimit']),
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'inactive': !(0, runtime_1.exists)(json, 'inactive') ? undefined : json['inactive'],
        'orderSequence': !(0, runtime_1.exists)(json, 'orderSequence') ? undefined : json['orderSequence'],
        'paymentCard': !(0, runtime_1.exists)(json, 'paymentCard') ? undefined : (0, PaymentCardType_1.PaymentCardTypeFromJSON)(json['paymentCard']),
        'paymentMethod': !(0, runtime_1.exists)(json, 'paymentMethod') ? undefined : json['paymentMethod'],
        'paymentMethodTransactionInfo': !(0, runtime_1.exists)(json, 'paymentMethodTransactionInfo') ? undefined : (0, PaymentMethodTransactionInfoType_1.PaymentMethodTransactionInfoTypeFromJSON)(json['paymentMethodTransactionInfo']),
        'paymentMethodUsage': !(0, runtime_1.exists)(json, 'paymentMethodUsage') ? undefined : (0, PaymentMethodUsageType_1.PaymentMethodUsageTypeFromJSON)(json['paymentMethodUsage']),
    };
}
exports.PaymentMethodTypeFromJSONTyped = PaymentMethodTypeFromJSONTyped;
function PaymentMethodTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'calculatePoints': (0, CalculatePointsType_1.CalculatePointsTypeToJSON)(value.calculatePoints),
        'creditLimit': (0, CreditLimitType_1.CreditLimitTypeToJSON)(value.creditLimit),
        'description': value.description,
        'hotelId': value.hotelId,
        'inactive': value.inactive,
        'orderSequence': value.orderSequence,
        'paymentCard': (0, PaymentCardType_1.PaymentCardTypeToJSON)(value.paymentCard),
        'paymentMethod': value.paymentMethod,
        'paymentMethodTransactionInfo': (0, PaymentMethodTransactionInfoType_1.PaymentMethodTransactionInfoTypeToJSON)(value.paymentMethodTransactionInfo),
        'paymentMethodUsage': (0, PaymentMethodUsageType_1.PaymentMethodUsageTypeToJSON)(value.paymentMethodUsage),
    };
}
exports.PaymentMethodTypeToJSON = PaymentMethodTypeToJSON;
