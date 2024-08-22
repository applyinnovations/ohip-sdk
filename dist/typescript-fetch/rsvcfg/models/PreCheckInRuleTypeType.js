"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreCheckInRuleTypeTypeToJSON = exports.PreCheckInRuleTypeTypeFromJSONTyped = exports.PreCheckInRuleTypeTypeFromJSON = exports.PreCheckInRuleTypeType = void 0;
/**
 * The rule type on which the Internet Pre Check-In Rule is based. If a reservation has any of the following code, Pre CheckIn rule gets active for that reservation
 * @export
 */
exports.PreCheckInRuleTypeType = {
    Specials: 'Specials',
    MarketCodes: 'MarketCodes',
    TimeLimit: 'TimeLimit',
    RatePlans: 'RatePlans',
    ReservationTypes: 'ReservationTypes',
    VipCodes: 'VIPCodes',
    Memberships: 'Memberships',
    OriginCodes: 'OriginCodes'
};
function PreCheckInRuleTypeTypeFromJSON(json) {
    return PreCheckInRuleTypeTypeFromJSONTyped(json, false);
}
exports.PreCheckInRuleTypeTypeFromJSON = PreCheckInRuleTypeTypeFromJSON;
function PreCheckInRuleTypeTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.PreCheckInRuleTypeTypeFromJSONTyped = PreCheckInRuleTypeTypeFromJSONTyped;
function PreCheckInRuleTypeTypeToJSON(value) {
    return value;
}
exports.PreCheckInRuleTypeTypeToJSON = PreCheckInRuleTypeTypeToJSON;
