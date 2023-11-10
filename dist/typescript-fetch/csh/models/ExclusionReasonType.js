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
exports.ExclusionReasonTypeToJSON = exports.ExclusionReasonTypeFromJSONTyped = exports.ExclusionReasonTypeFromJSON = exports.ExclusionReasonType = void 0;
/**
 * Custom Charge has already been Processed for this date within the reservation stay.
 * @export
 */
exports.ExclusionReasonType = {
    NotConfigured: 'NotConfigured',
    CustomChargeProcessed: 'CustomChargeProcessed'
};
function ExclusionReasonTypeFromJSON(json) {
    return ExclusionReasonTypeFromJSONTyped(json, false);
}
exports.ExclusionReasonTypeFromJSON = ExclusionReasonTypeFromJSON;
function ExclusionReasonTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.ExclusionReasonTypeFromJSONTyped = ExclusionReasonTypeFromJSONTyped;
function ExclusionReasonTypeToJSON(value) {
    return value;
}
exports.ExclusionReasonTypeToJSON = ExclusionReasonTypeToJSON;
