"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Rotation Configuration Service API
 * APIs to cater for Room Rotation Configuration functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.OverrideReasonsDetailsToJSON = exports.OverrideReasonsDetailsFromJSONTyped = exports.OverrideReasonsDetailsFromJSON = exports.instanceOfOverrideReasonsDetails = void 0;
const runtime_1 = require("../runtime");
const InstanceLink_1 = require("./InstanceLink");
const RoomRotationOverrideReasonType_1 = require("./RoomRotationOverrideReasonType");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the OverrideReasonsDetails interface.
 */
function instanceOfOverrideReasonsDetails(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfOverrideReasonsDetails = instanceOfOverrideReasonsDetails;
function OverrideReasonsDetailsFromJSON(json) {
    return OverrideReasonsDetailsFromJSONTyped(json, false);
}
exports.OverrideReasonsDetailsFromJSON = OverrideReasonsDetailsFromJSON;
function OverrideReasonsDetailsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'overrideReasons': !(0, runtime_1.exists)(json, 'overrideReasons') ? undefined : (json['overrideReasons'].map(RoomRotationOverrideReasonType_1.RoomRotationOverrideReasonTypeFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.OverrideReasonsDetailsFromJSONTyped = OverrideReasonsDetailsFromJSONTyped;
function OverrideReasonsDetailsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'overrideReasons': value.overrideReasons === undefined ? undefined : (value.overrideReasons.map(RoomRotationOverrideReasonType_1.RoomRotationOverrideReasonTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.OverrideReasonsDetailsToJSON = OverrideReasonsDetailsToJSON;
