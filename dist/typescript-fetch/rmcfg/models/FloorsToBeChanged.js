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
exports.FloorsToBeChangedToJSON = exports.FloorsToBeChangedFromJSONTyped = exports.FloorsToBeChangedFromJSON = exports.instanceOfFloorsToBeChanged = void 0;
const runtime_1 = require("../runtime");
const HotelFloorType_1 = require("./HotelFloorType");
const InstanceLink_1 = require("./InstanceLink");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the FloorsToBeChanged interface.
 */
function instanceOfFloorsToBeChanged(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfFloorsToBeChanged = instanceOfFloorsToBeChanged;
function FloorsToBeChangedFromJSON(json) {
    return FloorsToBeChangedFromJSONTyped(json, false);
}
exports.FloorsToBeChangedFromJSON = FloorsToBeChangedFromJSON;
function FloorsToBeChangedFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'hotelFloors': !(0, runtime_1.exists)(json, 'hotelFloors') ? undefined : (json['hotelFloors'].map(HotelFloorType_1.HotelFloorTypeFromJSON)),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.FloorsToBeChangedFromJSONTyped = FloorsToBeChangedFromJSONTyped;
function FloorsToBeChangedToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'hotelFloors': value.hotelFloors === undefined ? undefined : (value.hotelFloors.map(HotelFloorType_1.HotelFloorTypeToJSON)),
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.FloorsToBeChangedToJSON = FloorsToBeChangedToJSON;
