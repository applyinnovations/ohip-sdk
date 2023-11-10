"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TotalTypeToJSON = exports.TotalTypeFromJSONTyped = exports.TotalTypeFromJSON = exports.instanceOfTotalType = void 0;
const runtime_1 = require("../runtime");
const FeesType_1 = require("./FeesType");
const TaxesType_1 = require("./TaxesType");
/**
 * Check if a given object implements the TotalType interface.
 */
function instanceOfTotalType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTotalType = instanceOfTotalType;
function TotalTypeFromJSON(json) {
    return TotalTypeFromJSONTyped(json, false);
}
exports.TotalTypeFromJSON = TotalTypeFromJSON;
function TotalTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amountAfterTax': !(0, runtime_1.exists)(json, 'amountAfterTax') ? undefined : json['amountAfterTax'],
        'amountBeforeTax': !(0, runtime_1.exists)(json, 'amountBeforeTax') ? undefined : json['amountBeforeTax'],
        'baseAmount': !(0, runtime_1.exists)(json, 'baseAmount') ? undefined : json['baseAmount'],
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'currencyCode': !(0, runtime_1.exists)(json, 'currencyCode') ? undefined : json['currencyCode'],
        'currencySymbol': !(0, runtime_1.exists)(json, 'currencySymbol') ? undefined : json['currencySymbol'],
        'decimalPlaces': !(0, runtime_1.exists)(json, 'decimalPlaces') ? undefined : json['decimalPlaces'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'fees': !(0, runtime_1.exists)(json, 'fees') ? undefined : (0, FeesType_1.FeesTypeFromJSON)(json['fees']),
        'rateOverride': !(0, runtime_1.exists)(json, 'rateOverride') ? undefined : json['rateOverride'],
        'taxes': !(0, runtime_1.exists)(json, 'taxes') ? undefined : (0, TaxesType_1.TaxesTypeFromJSON)(json['taxes']),
    };
}
exports.TotalTypeFromJSONTyped = TotalTypeFromJSONTyped;
function TotalTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'amountAfterTax': value.amountAfterTax,
        'amountBeforeTax': value.amountBeforeTax,
        'baseAmount': value.baseAmount,
        'code': value.code,
        'currencyCode': value.currencyCode,
        'currencySymbol': value.currencySymbol,
        'decimalPlaces': value.decimalPlaces,
        'description': value.description,
        'fees': (0, FeesType_1.FeesTypeToJSON)(value.fees),
        'rateOverride': value.rateOverride,
        'taxes': (0, TaxesType_1.TaxesTypeToJSON)(value.taxes),
    };
}
exports.TotalTypeToJSON = TotalTypeToJSON;
