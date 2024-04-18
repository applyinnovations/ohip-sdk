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
exports.RoomAssignmentStatusTypeToJSON = exports.RoomAssignmentStatusTypeFromJSONTyped = exports.RoomAssignmentStatusTypeFromJSON = exports.RoomAssignmentStatusType = void 0;
/**
 *
 * @export
 */
exports.RoomAssignmentStatusType = {
    Assigned: 'Assigned',
    Unassigned: 'Unassigned'
};
function RoomAssignmentStatusTypeFromJSON(json) {
    return RoomAssignmentStatusTypeFromJSONTyped(json, false);
}
exports.RoomAssignmentStatusTypeFromJSON = RoomAssignmentStatusTypeFromJSON;
function RoomAssignmentStatusTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.RoomAssignmentStatusTypeFromJSONTyped = RoomAssignmentStatusTypeFromJSONTyped;
function RoomAssignmentStatusTypeToJSON(value) {
    return value;
}
exports.RoomAssignmentStatusTypeToJSON = RoomAssignmentStatusTypeToJSON;