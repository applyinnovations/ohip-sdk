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
exports.TrxSplitAndTransferCriteriaTypeSplitDetailsToJSON = exports.TrxSplitAndTransferCriteriaTypeSplitDetailsFromJSONTyped = exports.TrxSplitAndTransferCriteriaTypeSplitDetailsFromJSON = exports.instanceOfTrxSplitAndTransferCriteriaTypeSplitDetails = void 0;
const runtime_1 = require("../runtime");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
/**
 * Check if a given object implements the TrxSplitAndTransferCriteriaTypeSplitDetails interface.
 */
function instanceOfTrxSplitAndTransferCriteriaTypeSplitDetails(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTrxSplitAndTransferCriteriaTypeSplitDetails = instanceOfTrxSplitAndTransferCriteriaTypeSplitDetails;
function TrxSplitAndTransferCriteriaTypeSplitDetailsFromJSON(json) {
    return TrxSplitAndTransferCriteriaTypeSplitDetailsFromJSONTyped(json, false);
}
exports.TrxSplitAndTransferCriteriaTypeSplitDetailsFromJSON = TrxSplitAndTransferCriteriaTypeSplitDetailsFromJSON;
function TrxSplitAndTransferCriteriaTypeSplitDetailsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amount': !(0, runtime_1.exists)(json, 'amount') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['amount']),
        'percentage': !(0, runtime_1.exists)(json, 'percentage') ? undefined : json['percentage'],
        'quantity': !(0, runtime_1.exists)(json, 'quantity') ? undefined : json['quantity'],
    };
}
exports.TrxSplitAndTransferCriteriaTypeSplitDetailsFromJSONTyped = TrxSplitAndTransferCriteriaTypeSplitDetailsFromJSONTyped;
function TrxSplitAndTransferCriteriaTypeSplitDetailsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'amount': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.amount),
        'percentage': value.percentage,
        'quantity': value.quantity,
    };
}
exports.TrxSplitAndTransferCriteriaTypeSplitDetailsToJSON = TrxSplitAndTransferCriteriaTypeSplitDetailsToJSON;