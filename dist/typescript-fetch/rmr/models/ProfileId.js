"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Rotation Service API
 * APIs to facilitate Room Rotation functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileIdToJSON = exports.ProfileIdFromJSONTyped = exports.ProfileIdFromJSON = exports.instanceOfProfileId = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the ProfileId interface.
 */
function instanceOfProfileId(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfProfileId = instanceOfProfileId;
function ProfileIdFromJSON(json) {
    return ProfileIdFromJSONTyped(json, false);
}
exports.ProfileIdFromJSON = ProfileIdFromJSON;
function ProfileIdFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'idExtension': !(0, runtime_1.exists)(json, 'idExtension') ? undefined : json['idExtension'],
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
    };
}
exports.ProfileIdFromJSONTyped = ProfileIdFromJSONTyped;
function ProfileIdToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'idExtension': value.idExtension,
        'type': value.type,
    };
}
exports.ProfileIdToJSON = ProfileIdToJSON;
