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
exports.PostingBreakdownTypeToJSON = exports.PostingBreakdownTypeFromJSONTyped = exports.PostingBreakdownTypeFromJSON = exports.instanceOfPostingBreakdownType = void 0;
const runtime_1 = require("../runtime");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
const GeneratePostingType_1 = require("./GeneratePostingType");
/**
 * Check if a given object implements the PostingBreakdownType interface.
 */
function instanceOfPostingBreakdownType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPostingBreakdownType = instanceOfPostingBreakdownType;
function PostingBreakdownTypeFromJSON(json) {
    return PostingBreakdownTypeFromJSONTyped(json, false);
}
exports.PostingBreakdownTypeFromJSON = PostingBreakdownTypeFromJSON;
function PostingBreakdownTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'grossAmount': !(0, runtime_1.exists)(json, 'grossAmount') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['grossAmount']),
        'netAmount': !(0, runtime_1.exists)(json, 'netAmount') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['netAmount']),
        'taxes': !(0, runtime_1.exists)(json, 'taxes') ? undefined : (json['taxes'].map(GeneratePostingType_1.GeneratePostingTypeFromJSON)),
    };
}
exports.PostingBreakdownTypeFromJSONTyped = PostingBreakdownTypeFromJSONTyped;
function PostingBreakdownTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'grossAmount': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.grossAmount),
        'netAmount': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.netAmount),
        'taxes': value.taxes === undefined ? undefined : (value.taxes.map(GeneratePostingType_1.GeneratePostingTypeToJSON)),
    };
}
exports.PostingBreakdownTypeToJSON = PostingBreakdownTypeToJSON;
