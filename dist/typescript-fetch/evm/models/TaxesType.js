"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxesTypeToJSON = exports.TaxesTypeFromJSONTyped = exports.TaxesTypeFromJSON = exports.instanceOfTaxesType = void 0;
const runtime_1 = require("../runtime");
const TaxType_1 = require("./TaxType");
/**
 * Check if a given object implements the TaxesType interface.
 */
function instanceOfTaxesType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTaxesType = instanceOfTaxesType;
function TaxesTypeFromJSON(json) {
    return TaxesTypeFromJSONTyped(json, false);
}
exports.TaxesTypeFromJSON = TaxesTypeFromJSON;
function TaxesTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amount': !(0, runtime_1.exists)(json, 'amount') ? undefined : json['amount'],
        'currencyCode': !(0, runtime_1.exists)(json, 'currencyCode') ? undefined : json['currencyCode'],
        'tax': !(0, runtime_1.exists)(json, 'tax') ? undefined : (json['tax'].map(TaxType_1.TaxTypeFromJSON)),
    };
}
exports.TaxesTypeFromJSONTyped = TaxesTypeFromJSONTyped;
function TaxesTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'amount': value.amount,
        'currencyCode': value.currencyCode,
        'tax': value.tax === undefined ? undefined : (value.tax.map(TaxType_1.TaxTypeToJSON)),
    };
}
exports.TaxesTypeToJSON = TaxesTypeToJSON;
