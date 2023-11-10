"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommissionPayoutToTypeToJSON = exports.CommissionPayoutToTypeFromJSONTyped = exports.CommissionPayoutToTypeFromJSON = exports.CommissionPayoutToType = void 0;
/**
 *
 * @export
 */
exports.CommissionPayoutToType = {
    TravelAgent: 'TravelAgent',
    Source: 'Source',
    TravelAgentSource: 'TravelAgentSource',
    None: 'None'
};
function CommissionPayoutToTypeFromJSON(json) {
    return CommissionPayoutToTypeFromJSONTyped(json, false);
}
exports.CommissionPayoutToTypeFromJSON = CommissionPayoutToTypeFromJSON;
function CommissionPayoutToTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.CommissionPayoutToTypeFromJSONTyped = CommissionPayoutToTypeFromJSONTyped;
function CommissionPayoutToTypeToJSON(value) {
    return value;
}
exports.CommissionPayoutToTypeToJSON = CommissionPayoutToTypeToJSON;
