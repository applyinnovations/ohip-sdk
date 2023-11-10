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
exports.TaxTypeTypeToJSON = exports.TaxTypeTypeFromJSONTyped = exports.TaxTypeTypeFromJSON = exports.instanceOfTaxTypeType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the TaxTypeType interface.
 */
function instanceOfTaxTypeType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTaxTypeType = instanceOfTaxTypeType;
function TaxTypeTypeFromJSON(json) {
    return TaxTypeTypeFromJSONTyped(json, false);
}
exports.TaxTypeTypeFromJSON = TaxTypeTypeFromJSON;
function TaxTypeTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'collectingAgentTax': !(0, runtime_1.exists)(json, 'collectingAgentTax') ? undefined : json['collectingAgentTax'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'minimumLengthOfStay': !(0, runtime_1.exists)(json, 'minimumLengthOfStay') ? undefined : json['minimumLengthOfStay'],
        'printAutoAdjust': !(0, runtime_1.exists)(json, 'printAutoAdjust') ? undefined : json['printAutoAdjust'],
        'reportExemptDays': !(0, runtime_1.exists)(json, 'reportExemptDays') ? undefined : json['reportExemptDays'],
        'reportTaxPercentage': !(0, runtime_1.exists)(json, 'reportTaxPercentage') ? undefined : json['reportTaxPercentage'],
    };
}
exports.TaxTypeTypeFromJSONTyped = TaxTypeTypeFromJSONTyped;
function TaxTypeTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'code': value.code,
        'collectingAgentTax': value.collectingAgentTax,
        'description': value.description,
        'hotelId': value.hotelId,
        'minimumLengthOfStay': value.minimumLengthOfStay,
        'printAutoAdjust': value.printAutoAdjust,
        'reportExemptDays': value.reportExemptDays,
        'reportTaxPercentage': value.reportTaxPercentage,
    };
}
exports.TaxTypeTypeToJSON = TaxTypeTypeToJSON;
