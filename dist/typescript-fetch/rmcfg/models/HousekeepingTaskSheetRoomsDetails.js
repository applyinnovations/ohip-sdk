"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HousekeepingTaskSheetRoomsDetailsToJSON = exports.HousekeepingTaskSheetRoomsDetailsFromJSONTyped = exports.HousekeepingTaskSheetRoomsDetailsFromJSON = exports.instanceOfHousekeepingTaskSheetRoomsDetails = void 0;
const runtime_1 = require("../runtime");
const HousekeepingTaskSheetRoomType_1 = require("./HousekeepingTaskSheetRoomType");
const InstanceLink_1 = require("./InstanceLink");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the HousekeepingTaskSheetRoomsDetails interface.
 */
function instanceOfHousekeepingTaskSheetRoomsDetails(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfHousekeepingTaskSheetRoomsDetails = instanceOfHousekeepingTaskSheetRoomsDetails;
function HousekeepingTaskSheetRoomsDetailsFromJSON(json) {
    return HousekeepingTaskSheetRoomsDetailsFromJSONTyped(json, false);
}
exports.HousekeepingTaskSheetRoomsDetailsFromJSON = HousekeepingTaskSheetRoomsDetailsFromJSON;
function HousekeepingTaskSheetRoomsDetailsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'housekeepingTaskSheetRooms': !(0, runtime_1.exists)(json, 'housekeepingTaskSheetRooms') ? undefined : (json['housekeepingTaskSheetRooms'].map(HousekeepingTaskSheetRoomType_1.HousekeepingTaskSheetRoomTypeFromJSON)),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.HousekeepingTaskSheetRoomsDetailsFromJSONTyped = HousekeepingTaskSheetRoomsDetailsFromJSONTyped;
function HousekeepingTaskSheetRoomsDetailsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'housekeepingTaskSheetRooms': value.housekeepingTaskSheetRooms === undefined ? undefined : (value.housekeepingTaskSheetRooms.map(HousekeepingTaskSheetRoomType_1.HousekeepingTaskSheetRoomTypeToJSON)),
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.HousekeepingTaskSheetRoomsDetailsToJSON = HousekeepingTaskSheetRoomsDetailsToJSON;
