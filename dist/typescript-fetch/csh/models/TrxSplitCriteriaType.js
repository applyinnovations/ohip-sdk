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
exports.TrxSplitCriteriaTypeToJSON = exports.TrxSplitCriteriaTypeFromJSONTyped = exports.TrxSplitCriteriaTypeFromJSON = exports.instanceOfTrxSplitCriteriaType = void 0;
const runtime_1 = require("../runtime");
const TrxSplitAndTransferCriteriaTypeSplitDetails_1 = require("./TrxSplitAndTransferCriteriaTypeSplitDetails");
/**
 * Check if a given object implements the TrxSplitCriteriaType interface.
 */
function instanceOfTrxSplitCriteriaType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTrxSplitCriteriaType = instanceOfTrxSplitCriteriaType;
function TrxSplitCriteriaTypeFromJSON(json) {
    return TrxSplitCriteriaTypeFromJSONTyped(json, false);
}
exports.TrxSplitCriteriaTypeFromJSON = TrxSplitCriteriaTypeFromJSON;
function TrxSplitCriteriaTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cashierId': !(0, runtime_1.exists)(json, 'cashierId') ? undefined : json['cashierId'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'splitDetails': !(0, runtime_1.exists)(json, 'splitDetails') ? undefined : (0, TrxSplitAndTransferCriteriaTypeSplitDetails_1.TrxSplitAndTransferCriteriaTypeSplitDetailsFromJSON)(json['splitDetails']),
        'transactionList': !(0, runtime_1.exists)(json, 'transactionList') ? undefined : json['transactionList'],
    };
}
exports.TrxSplitCriteriaTypeFromJSONTyped = TrxSplitCriteriaTypeFromJSONTyped;
function TrxSplitCriteriaTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cashierId': value.cashierId,
        'hotelId': value.hotelId,
        'splitDetails': (0, TrxSplitAndTransferCriteriaTypeSplitDetails_1.TrxSplitAndTransferCriteriaTypeSplitDetailsToJSON)(value.splitDetails),
        'transactionList': value.transactionList,
    };
}
exports.TrxSplitCriteriaTypeToJSON = TrxSplitCriteriaTypeToJSON;