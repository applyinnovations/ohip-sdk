"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionAdjustmentInfoTypeToJSON = exports.TransactionAdjustmentInfoTypeFromJSONTyped = exports.TransactionAdjustmentInfoTypeFromJSON = exports.instanceOfTransactionAdjustmentInfoType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the TransactionAdjustmentInfoType interface.
 */
function instanceOfTransactionAdjustmentInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTransactionAdjustmentInfoType = instanceOfTransactionAdjustmentInfoType;
function TransactionAdjustmentInfoTypeFromJSON(json) {
    return TransactionAdjustmentInfoTypeFromJSONTyped(json, false);
}
exports.TransactionAdjustmentInfoTypeFromJSON = TransactionAdjustmentInfoTypeFromJSON;
function TransactionAdjustmentInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'departmentCode': !(0, runtime_1.exists)(json, 'departmentCode') ? undefined : json['departmentCode'],
        'reason': !(0, runtime_1.exists)(json, 'reason') ? undefined : json['reason'],
    };
}
exports.TransactionAdjustmentInfoTypeFromJSONTyped = TransactionAdjustmentInfoTypeFromJSONTyped;
function TransactionAdjustmentInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'code': value.code,
        'departmentCode': value.departmentCode,
        'reason': value.reason,
    };
}
exports.TransactionAdjustmentInfoTypeToJSON = TransactionAdjustmentInfoTypeToJSON;
