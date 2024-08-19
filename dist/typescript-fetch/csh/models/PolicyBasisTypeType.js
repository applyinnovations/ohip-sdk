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
exports.PolicyBasisTypeTypeToJSON = exports.PolicyBasisTypeTypeFromJSONTyped = exports.PolicyBasisTypeTypeFromJSON = exports.PolicyBasisTypeType = void 0;
/**
 * Full Amount.
 * @export
 */
exports.PolicyBasisTypeType = {
    FlatAmount: 'FlatAmount',
    Percentage: 'Percentage',
    Nights: 'Nights',
    NightPercentage: 'NightPercentage',
    FullAmount: 'FullAmount'
};
function PolicyBasisTypeTypeFromJSON(json) {
    return PolicyBasisTypeTypeFromJSONTyped(json, false);
}
exports.PolicyBasisTypeTypeFromJSON = PolicyBasisTypeTypeFromJSON;
function PolicyBasisTypeTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.PolicyBasisTypeTypeFromJSONTyped = PolicyBasisTypeTypeFromJSONTyped;
function PolicyBasisTypeTypeToJSON(value) {
    return value;
}
exports.PolicyBasisTypeTypeToJSON = PolicyBasisTypeTypeToJSON;
