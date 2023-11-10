"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockRestrictionTypeToJSON = exports.BlockRestrictionTypeFromJSONTyped = exports.BlockRestrictionTypeFromJSON = exports.instanceOfBlockRestrictionType = void 0;
const runtime_1 = require("../runtime");
const RestrictionStatusType_1 = require("./RestrictionStatusType");
const TimeSpanDaysOfWeekType_1 = require("./TimeSpanDaysOfWeekType");
const TimeSpanType_1 = require("./TimeSpanType");
/**
 * Check if a given object implements the BlockRestrictionType interface.
 */
function instanceOfBlockRestrictionType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBlockRestrictionType = instanceOfBlockRestrictionType;
function BlockRestrictionTypeFromJSON(json) {
    return BlockRestrictionTypeFromJSONTyped(json, false);
}
exports.BlockRestrictionTypeFromJSON = BlockRestrictionTypeFromJSON;
function BlockRestrictionTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'actualTimeSpan': !(0, runtime_1.exists)(json, 'actualTimeSpan') ? undefined : (0, TimeSpanType_1.TimeSpanTypeFromJSON)(json['actualTimeSpan']),
        'blockRestrictionStatus': !(0, runtime_1.exists)(json, 'blockRestrictionStatus') ? undefined : (0, RestrictionStatusType_1.RestrictionStatusTypeFromJSON)(json['blockRestrictionStatus']),
        'restrictionDate': !(0, runtime_1.exists)(json, 'restrictionDate') ? undefined : (0, TimeSpanDaysOfWeekType_1.TimeSpanDaysOfWeekTypeFromJSON)(json['restrictionDate']),
        'roomType': !(0, runtime_1.exists)(json, 'roomType') ? undefined : json['roomType'],
    };
}
exports.BlockRestrictionTypeFromJSONTyped = BlockRestrictionTypeFromJSONTyped;
function BlockRestrictionTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'actualTimeSpan': (0, TimeSpanType_1.TimeSpanTypeToJSON)(value.actualTimeSpan),
        'blockRestrictionStatus': (0, RestrictionStatusType_1.RestrictionStatusTypeToJSON)(value.blockRestrictionStatus),
        'restrictionDate': (0, TimeSpanDaysOfWeekType_1.TimeSpanDaysOfWeekTypeToJSON)(value.restrictionDate),
        'roomType': value.roomType,
    };
}
exports.BlockRestrictionTypeToJSON = BlockRestrictionTypeToJSON;
