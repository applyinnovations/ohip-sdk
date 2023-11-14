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
exports.AROldBalanceChargeTypeToJSON = exports.AROldBalanceChargeTypeFromJSONTyped = exports.AROldBalanceChargeTypeFromJSON = exports.instanceOfAROldBalanceChargeType = void 0;
const runtime_1 = require("../runtime");
const ARTaxCodesType_1 = require("./ARTaxCodesType");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
/**
 * Check if a given object implements the AROldBalanceChargeType interface.
 */
function instanceOfAROldBalanceChargeType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAROldBalanceChargeType = instanceOfAROldBalanceChargeType;
function AROldBalanceChargeTypeFromJSON(json) {
    return AROldBalanceChargeTypeFromJSONTyped(json, false);
}
exports.AROldBalanceChargeTypeFromJSON = AROldBalanceChargeTypeFromJSON;
function AROldBalanceChargeTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amount': !(0, runtime_1.exists)(json, 'amount') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['amount']),
        'date': !(0, runtime_1.exists)(json, 'date') ? undefined : (new Date(json['date'])),
        'fiscalBillNo': !(0, runtime_1.exists)(json, 'fiscalBillNo') ? undefined : json['fiscalBillNo'],
        'folioNo': !(0, runtime_1.exists)(json, 'folioNo') ? undefined : json['folioNo'],
        'paid': !(0, runtime_1.exists)(json, 'paid') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['paid']),
        'postingReference': !(0, runtime_1.exists)(json, 'postingReference') ? undefined : json['postingReference'],
        'postingRemark': !(0, runtime_1.exists)(json, 'postingRemark') ? undefined : json['postingRemark'],
        'taxCodes': !(0, runtime_1.exists)(json, 'taxCodes') ? undefined : (0, ARTaxCodesType_1.ARTaxCodesTypeFromJSON)(json['taxCodes']),
    };
}
exports.AROldBalanceChargeTypeFromJSONTyped = AROldBalanceChargeTypeFromJSONTyped;
function AROldBalanceChargeTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'amount': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.amount),
        'date': value.date === undefined ? undefined : (value.date.toISOString().substring(0, 10)),
        'fiscalBillNo': value.fiscalBillNo,
        'folioNo': value.folioNo,
        'paid': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.paid),
        'postingReference': value.postingReference,
        'postingRemark': value.postingRemark,
        'taxCodes': (0, ARTaxCodesType_1.ARTaxCodesTypeToJSON)(value.taxCodes),
    };
}
exports.AROldBalanceChargeTypeToJSON = AROldBalanceChargeTypeToJSON;