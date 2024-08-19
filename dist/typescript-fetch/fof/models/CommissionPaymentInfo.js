"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommissionPaymentInfoToJSON = exports.CommissionPaymentInfoFromJSONTyped = exports.CommissionPaymentInfoFromJSON = exports.instanceOfCommissionPaymentInfo = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the CommissionPaymentInfo interface.
 */
function instanceOfCommissionPaymentInfo(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCommissionPaymentInfo = instanceOfCommissionPaymentInfo;
function CommissionPaymentInfoFromJSON(json) {
    return CommissionPaymentInfoFromJSONTyped(json, false);
}
exports.CommissionPaymentInfoFromJSON = CommissionPaymentInfoFromJSON;
function CommissionPaymentInfoFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'batchId': !(0, runtime_1.exists)(json, 'batchId') ? undefined : json['batchId'],
        'checkNo': !(0, runtime_1.exists)(json, 'checkNo') ? undefined : json['checkNo'],
        'commissionAmount': !(0, runtime_1.exists)(json, 'commissionAmount') ? undefined : json['commissionAmount'],
        'commissionStatus': !(0, runtime_1.exists)(json, 'commissionStatus') ? undefined : json['commissionStatus'],
        'paymentDate': !(0, runtime_1.exists)(json, 'paymentDate') ? undefined : json['paymentDate'],
        'paymentId': !(0, runtime_1.exists)(json, 'paymentId') ? undefined : json['paymentId'],
        'paymentMethod': !(0, runtime_1.exists)(json, 'paymentMethod') ? undefined : json['paymentMethod'],
        'remarks': !(0, runtime_1.exists)(json, 'remarks') ? undefined : json['remarks'],
    };
}
exports.CommissionPaymentInfoFromJSONTyped = CommissionPaymentInfoFromJSONTyped;
function CommissionPaymentInfoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'batchId': value.batchId,
        'checkNo': value.checkNo,
        'commissionAmount': value.commissionAmount,
        'commissionStatus': value.commissionStatus,
        'paymentDate': value.paymentDate,
        'paymentId': value.paymentId,
        'paymentMethod': value.paymentMethod,
        'remarks': value.remarks,
    };
}
exports.CommissionPaymentInfoToJSON = CommissionPaymentInfoToJSON;
