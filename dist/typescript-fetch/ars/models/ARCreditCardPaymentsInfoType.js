"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Accounts Receivables API
 * APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors\' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ARCreditCardPaymentsInfoTypeToJSON = exports.ARCreditCardPaymentsInfoTypeFromJSONTyped = exports.ARCreditCardPaymentsInfoTypeFromJSON = exports.instanceOfARCreditCardPaymentsInfoType = void 0;
const runtime_1 = require("../runtime");
const ARCreditCardPaymentInfoType_1 = require("./ARCreditCardPaymentInfoType");
/**
 * Check if a given object implements the ARCreditCardPaymentsInfoType interface.
 */
function instanceOfARCreditCardPaymentsInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfARCreditCardPaymentsInfoType = instanceOfARCreditCardPaymentsInfoType;
function ARCreditCardPaymentsInfoTypeFromJSON(json) {
    return ARCreditCardPaymentsInfoTypeFromJSONTyped(json, false);
}
exports.ARCreditCardPaymentsInfoTypeFromJSON = ARCreditCardPaymentsInfoTypeFromJSON;
function ARCreditCardPaymentsInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'aRCreditCardPayments': !(0, runtime_1.exists)(json, 'aRCreditCardPayments') ? undefined : (json['aRCreditCardPayments'].map(ARCreditCardPaymentInfoType_1.ARCreditCardPaymentInfoTypeFromJSON)),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
    };
}
exports.ARCreditCardPaymentsInfoTypeFromJSONTyped = ARCreditCardPaymentsInfoTypeFromJSONTyped;
function ARCreditCardPaymentsInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'aRCreditCardPayments': value.aRCreditCardPayments === undefined ? undefined : (value.aRCreditCardPayments.map(ARCreditCardPaymentInfoType_1.ARCreditCardPaymentInfoTypeToJSON)),
        'hotelId': value.hotelId,
    };
}
exports.ARCreditCardPaymentsInfoTypeToJSON = ARCreditCardPaymentsInfoTypeToJSON;
