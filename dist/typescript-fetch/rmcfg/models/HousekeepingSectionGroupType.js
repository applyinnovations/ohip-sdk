"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HousekeepingSectionGroupTypeToJSON = exports.HousekeepingSectionGroupTypeFromJSONTyped = exports.HousekeepingSectionGroupTypeFromJSON = exports.instanceOfHousekeepingSectionGroupType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the HousekeepingSectionGroupType interface.
 */
function instanceOfHousekeepingSectionGroupType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfHousekeepingSectionGroupType = instanceOfHousekeepingSectionGroupType;
function HousekeepingSectionGroupTypeFromJSON(json) {
    return HousekeepingSectionGroupTypeFromJSONTyped(json, false);
}
exports.HousekeepingSectionGroupTypeFromJSON = HousekeepingSectionGroupTypeFromJSON;
function HousekeepingSectionGroupTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'roomCredits': !(0, runtime_1.exists)(json, 'roomCredits') ? undefined : json['roomCredits'],
        'rooms': !(0, runtime_1.exists)(json, 'rooms') ? undefined : json['rooms'],
        'sequence': !(0, runtime_1.exists)(json, 'sequence') ? undefined : json['sequence'],
        'targetCredits': !(0, runtime_1.exists)(json, 'targetCredits') ? undefined : json['targetCredits'],
    };
}
exports.HousekeepingSectionGroupTypeFromJSONTyped = HousekeepingSectionGroupTypeFromJSONTyped;
function HousekeepingSectionGroupTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'code': value.code,
        'description': value.description,
        'hotelId': value.hotelId,
        'roomCredits': value.roomCredits,
        'rooms': value.rooms,
        'sequence': value.sequence,
        'targetCredits': value.targetCredits,
    };
}
exports.HousekeepingSectionGroupTypeToJSON = HousekeepingSectionGroupTypeToJSON;
