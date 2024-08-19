"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashierClosureAmountTypeToJSON = exports.CashierClosureAmountTypeFromJSONTyped = exports.CashierClosureAmountTypeFromJSON = exports.instanceOfCashierClosureAmountType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the CashierClosureAmountType interface.
 */
function instanceOfCashierClosureAmountType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCashierClosureAmountType = instanceOfCashierClosureAmountType;
function CashierClosureAmountTypeFromJSON(json) {
    return CashierClosureAmountTypeFromJSONTyped(json, false);
}
exports.CashierClosureAmountTypeFromJSON = CashierClosureAmountTypeFromJSON;
function CashierClosureAmountTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'actualShiftBalance': !(0, runtime_1.exists)(json, 'actualShiftBalance') ? undefined : json['actualShiftBalance'],
        'expectedShiftBalance': !(0, runtime_1.exists)(json, 'expectedShiftBalance') ? undefined : json['expectedShiftBalance'],
        'openingBalance': !(0, runtime_1.exists)(json, 'openingBalance') ? undefined : json['openingBalance'],
        'paidOut': !(0, runtime_1.exists)(json, 'paidOut') ? undefined : json['paidOut'],
        'received': !(0, runtime_1.exists)(json, 'received') ? undefined : json['received'],
    };
}
exports.CashierClosureAmountTypeFromJSONTyped = CashierClosureAmountTypeFromJSONTyped;
function CashierClosureAmountTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'actualShiftBalance': value.actualShiftBalance,
        'expectedShiftBalance': value.expectedShiftBalance,
        'openingBalance': value.openingBalance,
        'paidOut': value.paidOut,
        'received': value.received,
    };
}
exports.CashierClosureAmountTypeToJSON = CashierClosureAmountTypeToJSON;
