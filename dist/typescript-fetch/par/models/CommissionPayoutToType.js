"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
