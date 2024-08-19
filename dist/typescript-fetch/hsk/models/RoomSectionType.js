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
exports.RoomSectionTypeToJSON = exports.RoomSectionTypeFromJSONTyped = exports.RoomSectionTypeFromJSON = exports.instanceOfRoomSectionType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the RoomSectionType interface.
 */
function instanceOfRoomSectionType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRoomSectionType = instanceOfRoomSectionType;
function RoomSectionTypeFromJSON(json) {
    return RoomSectionTypeFromJSONTyped(json, false);
}
exports.RoomSectionTypeFromJSON = RoomSectionTypeFromJSON;
function RoomSectionTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'daySectionCode': !(0, runtime_1.exists)(json, 'daySectionCode') ? undefined : json['daySectionCode'],
        'eveningSectionCode': !(0, runtime_1.exists)(json, 'eveningSectionCode') ? undefined : json['eveningSectionCode'],
    };
}
exports.RoomSectionTypeFromJSONTyped = RoomSectionTypeFromJSONTyped;
function RoomSectionTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'daySectionCode': value.daySectionCode,
        'eveningSectionCode': value.eveningSectionCode,
    };
}
exports.RoomSectionTypeToJSON = RoomSectionTypeToJSON;
