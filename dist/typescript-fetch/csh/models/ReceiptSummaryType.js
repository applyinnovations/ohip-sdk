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
exports.ReceiptSummaryTypeToJSON = exports.ReceiptSummaryTypeFromJSONTyped = exports.ReceiptSummaryTypeFromJSON = exports.instanceOfReceiptSummaryType = void 0;
const runtime_1 = require("../runtime");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
const PayeeInfoType_1 = require("./PayeeInfoType");
const ReceiptType_1 = require("./ReceiptType");
/**
 * Check if a given object implements the ReceiptSummaryType interface.
 */
function instanceOfReceiptSummaryType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfReceiptSummaryType = instanceOfReceiptSummaryType;
function ReceiptSummaryTypeFromJSON(json) {
    return ReceiptSummaryTypeFromJSONTyped(json, false);
}
exports.ReceiptSummaryTypeFromJSON = ReceiptSummaryTypeFromJSON;
function ReceiptSummaryTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'customNumbers': !(0, runtime_1.exists)(json, 'customNumbers') ? undefined : json['customNumbers'],
        'end': !(0, runtime_1.exists)(json, 'end') ? undefined : (new Date(json['end'])),
        'payeeInfo': !(0, runtime_1.exists)(json, 'payeeInfo') ? undefined : (0, PayeeInfoType_1.PayeeInfoTypeFromJSON)(json['payeeInfo']),
        'receiptAmount': !(0, runtime_1.exists)(json, 'receiptAmount') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['receiptAmount']),
        'receiptNo': !(0, runtime_1.exists)(json, 'receiptNo') ? undefined : json['receiptNo'],
        'receiptType': !(0, runtime_1.exists)(json, 'receiptType') ? undefined : (0, ReceiptType_1.ReceiptTypeFromJSON)(json['receiptType']),
        'receiptTypeDescription': !(0, runtime_1.exists)(json, 'receiptTypeDescription') ? undefined : json['receiptTypeDescription'],
        'start': !(0, runtime_1.exists)(json, 'start') ? undefined : (new Date(json['start'])),
        'taxInvoice': !(0, runtime_1.exists)(json, 'taxInvoice') ? undefined : json['taxInvoice'],
        'transactionNo': !(0, runtime_1.exists)(json, 'transactionNo') ? undefined : json['transactionNo'],
    };
}
exports.ReceiptSummaryTypeFromJSONTyped = ReceiptSummaryTypeFromJSONTyped;
function ReceiptSummaryTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'customNumbers': value.customNumbers,
        'end': value.end === undefined ? undefined : (value.end.toISOString().substr(0, 10)),
        'payeeInfo': (0, PayeeInfoType_1.PayeeInfoTypeToJSON)(value.payeeInfo),
        'receiptAmount': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.receiptAmount),
        'receiptNo': value.receiptNo,
        'receiptType': (0, ReceiptType_1.ReceiptTypeToJSON)(value.receiptType),
        'receiptTypeDescription': value.receiptTypeDescription,
        'start': value.start === undefined ? undefined : (value.start.toISOString().substr(0, 10)),
        'taxInvoice': value.taxInvoice,
        'transactionNo': value.transactionNo,
    };
}
exports.ReceiptSummaryTypeToJSON = ReceiptSummaryTypeToJSON;
