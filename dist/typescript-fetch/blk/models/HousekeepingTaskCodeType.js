"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HousekeepingTaskCodeTypeToJSON = exports.HousekeepingTaskCodeTypeFromJSONTyped = exports.HousekeepingTaskCodeTypeFromJSON = exports.instanceOfHousekeepingTaskCodeType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the HousekeepingTaskCodeType interface.
 */
function instanceOfHousekeepingTaskCodeType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfHousekeepingTaskCodeType = instanceOfHousekeepingTaskCodeType;
function HousekeepingTaskCodeTypeFromJSON(json) {
    return HousekeepingTaskCodeTypeFromJSONTyped(json, false);
}
exports.HousekeepingTaskCodeTypeFromJSON = HousekeepingTaskCodeTypeFromJSON;
function HousekeepingTaskCodeTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'facilityDepartureTask': !(0, runtime_1.exists)(json, 'facilityDepartureTask') ? undefined : json['facilityDepartureTask'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'instructions': !(0, runtime_1.exists)(json, 'instructions') ? undefined : json['instructions'],
        'linenChange': !(0, runtime_1.exists)(json, 'linenChange') ? undefined : json['linenChange'],
        'sequence': !(0, runtime_1.exists)(json, 'sequence') ? undefined : json['sequence'],
    };
}
exports.HousekeepingTaskCodeTypeFromJSONTyped = HousekeepingTaskCodeTypeFromJSONTyped;
function HousekeepingTaskCodeTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'code': value.code,
        'description': value.description,
        'facilityDepartureTask': value.facilityDepartureTask,
        'hotelId': value.hotelId,
        'instructions': value.instructions,
        'linenChange': value.linenChange,
        'sequence': value.sequence,
    };
}
exports.HousekeepingTaskCodeTypeToJSON = HousekeepingTaskCodeTypeToJSON;
