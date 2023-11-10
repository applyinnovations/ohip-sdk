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
exports.TransactionARInfoTypeToJSON = exports.TransactionARInfoTypeFromJSONTyped = exports.TransactionARInfoTypeFromJSON = exports.instanceOfTransactionARInfoType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the TransactionARInfoType interface.
 */
function instanceOfTransactionARInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTransactionARInfoType = instanceOfTransactionARInfoType;
function TransactionARInfoTypeFromJSON(json) {
    return TransactionARInfoTypeFromJSONTyped(json, false);
}
exports.TransactionARInfoTypeFromJSON = TransactionARInfoTypeFromJSON;
function TransactionARInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accountName': !(0, runtime_1.exists)(json, 'accountName') ? undefined : json['accountName'],
        'accountNumber': !(0, runtime_1.exists)(json, 'accountNumber') ? undefined : json['accountNumber'],
        'invoiceNo': !(0, runtime_1.exists)(json, 'invoiceNo') ? undefined : json['invoiceNo'],
    };
}
exports.TransactionARInfoTypeFromJSONTyped = TransactionARInfoTypeFromJSONTyped;
function TransactionARInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'accountName': value.accountName,
        'accountNumber': value.accountNumber,
        'invoiceNo': value.invoiceNo,
    };
}
exports.TransactionARInfoTypeToJSON = TransactionARInfoTypeToJSON;
