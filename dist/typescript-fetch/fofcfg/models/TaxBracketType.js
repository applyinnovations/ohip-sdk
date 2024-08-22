"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxBracketTypeToJSON = exports.TaxBracketTypeFromJSONTyped = exports.TaxBracketTypeFromJSON = exports.instanceOfTaxBracketType = void 0;
const runtime_1 = require("../runtime");
const TaxBracketAmountType_1 = require("./TaxBracketAmountType");
const TranslationTextType2000_1 = require("./TranslationTextType2000");
/**
 * Check if a given object implements the TaxBracketType interface.
 */
function instanceOfTaxBracketType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTaxBracketType = instanceOfTaxBracketType;
function TaxBracketTypeFromJSON(json) {
    return TaxBracketTypeFromJSONTyped(json, false);
}
exports.TaxBracketTypeFromJSON = TaxBracketTypeFromJSON;
function TaxBracketTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : (0, TranslationTextType2000_1.TranslationTextType2000FromJSON)(json['description']),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'taxBracketAmounts': !(0, runtime_1.exists)(json, 'taxBracketAmounts') ? undefined : (json['taxBracketAmounts'].map(TaxBracketAmountType_1.TaxBracketAmountTypeFromJSON)),
        'taxPercentage': !(0, runtime_1.exists)(json, 'taxPercentage') ? undefined : json['taxPercentage'],
        'threshold': !(0, runtime_1.exists)(json, 'threshold') ? undefined : json['threshold'],
    };
}
exports.TaxBracketTypeFromJSONTyped = TaxBracketTypeFromJSONTyped;
function TaxBracketTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'description': (0, TranslationTextType2000_1.TranslationTextType2000ToJSON)(value.description),
        'hotelId': value.hotelId,
        'taxBracketAmounts': value.taxBracketAmounts === undefined ? undefined : (value.taxBracketAmounts.map(TaxBracketAmountType_1.TaxBracketAmountTypeToJSON)),
        'taxPercentage': value.taxPercentage,
        'threshold': value.threshold,
    };
}
exports.TaxBracketTypeToJSON = TaxBracketTypeToJSON;
