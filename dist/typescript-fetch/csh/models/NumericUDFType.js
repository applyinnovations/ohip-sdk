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
exports.NumericUDFTypeToJSON = exports.NumericUDFTypeFromJSONTyped = exports.NumericUDFTypeFromJSON = exports.instanceOfNumericUDFType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the NumericUDFType interface.
 */
function instanceOfNumericUDFType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfNumericUDFType = instanceOfNumericUDFType;
function NumericUDFTypeFromJSON(json) {
    return NumericUDFTypeFromJSONTyped(json, false);
}
exports.NumericUDFTypeFromJSON = NumericUDFTypeFromJSON;
function NumericUDFTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'alternateName': !(0, runtime_1.exists)(json, 'alternateName') ? undefined : json['alternateName'],
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'value': !(0, runtime_1.exists)(json, 'value') ? undefined : json['value'],
    };
}
exports.NumericUDFTypeFromJSONTyped = NumericUDFTypeFromJSONTyped;
function NumericUDFTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'alternateName': value.alternateName,
        'name': value.name,
        'value': value.value,
    };
}
exports.NumericUDFTypeToJSON = NumericUDFTypeToJSON;
