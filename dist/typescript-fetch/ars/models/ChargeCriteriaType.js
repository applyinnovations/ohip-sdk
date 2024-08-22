"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Accounts Receivables API
 * APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors\' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChargeCriteriaTypeToJSON = exports.ChargeCriteriaTypeFromJSONTyped = exports.ChargeCriteriaTypeFromJSON = exports.instanceOfChargeCriteriaType = void 0;
const runtime_1 = require("../runtime");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the ChargeCriteriaType interface.
 */
function instanceOfChargeCriteriaType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfChargeCriteriaType = instanceOfChargeCriteriaType;
function ChargeCriteriaTypeFromJSON(json) {
    return ChargeCriteriaTypeFromJSONTyped(json, false);
}
exports.ChargeCriteriaTypeFromJSON = ChargeCriteriaTypeFromJSON;
function ChargeCriteriaTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'applyRoutingInstructions': !(0, runtime_1.exists)(json, 'applyRoutingInstructions') ? undefined : json['applyRoutingInstructions'],
        'arrangementCode': !(0, runtime_1.exists)(json, 'arrangementCode') ? undefined : json['arrangementCode'],
        'articleCode': !(0, runtime_1.exists)(json, 'articleCode') ? undefined : json['articleCode'],
        'autoPosting': !(0, runtime_1.exists)(json, 'autoPosting') ? undefined : json['autoPosting'],
        'cashierId': !(0, runtime_1.exists)(json, 'cashierId') ? undefined : json['cashierId'],
        'checkNumber': !(0, runtime_1.exists)(json, 'checkNumber') ? undefined : json['checkNumber'],
        'financialTransactionIdList': !(0, runtime_1.exists)(json, 'financialTransactionIdList') ? undefined : (json['financialTransactionIdList'].map(UniqueIDType_1.UniqueIDTypeFromJSON)),
        'folioWindowNo': !(0, runtime_1.exists)(json, 'folioWindowNo') ? undefined : json['folioWindowNo'],
        'postingQuantity': !(0, runtime_1.exists)(json, 'postingQuantity') ? undefined : json['postingQuantity'],
        'postingReference': !(0, runtime_1.exists)(json, 'postingReference') ? undefined : json['postingReference'],
        'postingRemark': !(0, runtime_1.exists)(json, 'postingRemark') ? undefined : json['postingRemark'],
        'price': !(0, runtime_1.exists)(json, 'price') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['price']),
        'transactionCode': !(0, runtime_1.exists)(json, 'transactionCode') ? undefined : json['transactionCode'],
        'usePackageAllowance': !(0, runtime_1.exists)(json, 'usePackageAllowance') ? undefined : json['usePackageAllowance'],
    };
}
exports.ChargeCriteriaTypeFromJSONTyped = ChargeCriteriaTypeFromJSONTyped;
function ChargeCriteriaTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'applyRoutingInstructions': value.applyRoutingInstructions,
        'arrangementCode': value.arrangementCode,
        'articleCode': value.articleCode,
        'autoPosting': value.autoPosting,
        'cashierId': value.cashierId,
        'checkNumber': value.checkNumber,
        'financialTransactionIdList': value.financialTransactionIdList === undefined ? undefined : (value.financialTransactionIdList.map(UniqueIDType_1.UniqueIDTypeToJSON)),
        'folioWindowNo': value.folioWindowNo,
        'postingQuantity': value.postingQuantity,
        'postingReference': value.postingReference,
        'postingRemark': value.postingRemark,
        'price': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.price),
        'transactionCode': value.transactionCode,
        'usePackageAllowance': value.usePackageAllowance,
    };
}
exports.ChargeCriteriaTypeToJSON = ChargeCriteriaTypeToJSON;
