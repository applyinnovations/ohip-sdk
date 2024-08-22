"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorDefinitionTypeToJSON = exports.ColorDefinitionTypeFromJSONTyped = exports.ColorDefinitionTypeFromJSON = exports.ColorDefinitionType = void 0;
/**
 * Color definition type. This color definition type is used to determine the defintion of color
 * @export
 */
exports.ColorDefinitionType = {
    Reservation: 'RESERVATION',
    MarketCode: 'MARKET_CODE',
    VipLevel: 'VIP_LEVEL',
    MembershipLevel: 'MEMBERSHIP_LEVEL'
};
function ColorDefinitionTypeFromJSON(json) {
    return ColorDefinitionTypeFromJSONTyped(json, false);
}
exports.ColorDefinitionTypeFromJSON = ColorDefinitionTypeFromJSON;
function ColorDefinitionTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.ColorDefinitionTypeFromJSONTyped = ColorDefinitionTypeFromJSONTyped;
function ColorDefinitionTypeToJSON(value) {
    return value;
}
exports.ColorDefinitionTypeToJSON = ColorDefinitionTypeToJSON;
