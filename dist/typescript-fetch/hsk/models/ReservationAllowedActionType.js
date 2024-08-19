"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Housekeeping Service API
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationAllowedActionTypeToJSON = exports.ReservationAllowedActionTypeFromJSONTyped = exports.ReservationAllowedActionTypeFromJSON = exports.ReservationAllowedActionType = void 0;
/**
 * Flag indicating whether the Enrollment is in progress or not for the Profile associated with this Reservation.
 * @export
 */
exports.ReservationAllowedActionType = {
    Cancel: 'Cancel',
    Move: 'Move',
    PreCharge: 'PreCharge',
    PostCharge: 'PostCharge',
    FacilitySchedule: 'FacilitySchedule',
    Upsell: 'Upsell',
    PreCheckIn: 'PreCheckIn',
    PostToNoShowCancel: 'PostToNoShowCancel',
    NoShow: 'NoShow',
    NameChange: 'NameChange',
    Discount: 'Discount',
    EnrollToPrimaryMembership: 'EnrollToPrimaryMembership',
    EnrollInProgress: 'EnrollInProgress'
};
function ReservationAllowedActionTypeFromJSON(json) {
    return ReservationAllowedActionTypeFromJSONTyped(json, false);
}
exports.ReservationAllowedActionTypeFromJSON = ReservationAllowedActionTypeFromJSON;
function ReservationAllowedActionTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.ReservationAllowedActionTypeFromJSONTyped = ReservationAllowedActionTypeFromJSONTyped;
function ReservationAllowedActionTypeToJSON(value) {
    return value;
}
exports.ReservationAllowedActionTypeToJSON = ReservationAllowedActionTypeToJSON;
