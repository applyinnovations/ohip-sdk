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
exports.TaxBracketAmountTypeToJSON = exports.TaxBracketAmountTypeFromJSONTyped = exports.TaxBracketAmountTypeFromJSON = exports.instanceOfTaxBracketAmountType = void 0;
const runtime_1 = require("../runtime");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
/**
 * Check if a given object implements the TaxBracketAmountType interface.
 */
function instanceOfTaxBracketAmountType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTaxBracketAmountType = instanceOfTaxBracketAmountType;
function TaxBracketAmountTypeFromJSON(json) {
    return TaxBracketAmountTypeFromJSONTyped(json, false);
}
exports.TaxBracketAmountTypeFromJSON = TaxBracketAmountTypeFromJSON;
function TaxBracketAmountTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'endAmount': !(0, runtime_1.exists)(json, 'endAmount') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['endAmount']),
        'startAmount': !(0, runtime_1.exists)(json, 'startAmount') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['startAmount']),
        'taxAmount': !(0, runtime_1.exists)(json, 'taxAmount') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['taxAmount']),
    };
}
exports.TaxBracketAmountTypeFromJSONTyped = TaxBracketAmountTypeFromJSONTyped;
function TaxBracketAmountTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'endAmount': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.endAmount),
        'startAmount': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.startAmount),
        'taxAmount': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.taxAmount),
    };
}
exports.TaxBracketAmountTypeToJSON = TaxBracketAmountTypeToJSON;
