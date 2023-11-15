"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBlockRestrictionTypeToJSON = exports.CreateBlockRestrictionTypeFromJSONTyped = exports.CreateBlockRestrictionTypeFromJSON = exports.instanceOfCreateBlockRestrictionType = void 0;
const runtime_1 = require("../runtime");
const BlockId_1 = require("./BlockId");
const RestrictionStatusType_1 = require("./RestrictionStatusType");
/**
 * Check if a given object implements the CreateBlockRestrictionType interface.
 */
function instanceOfCreateBlockRestrictionType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCreateBlockRestrictionType = instanceOfCreateBlockRestrictionType;
function CreateBlockRestrictionTypeFromJSON(json) {
    return CreateBlockRestrictionTypeFromJSONTyped(json, false);
}
exports.CreateBlockRestrictionTypeFromJSON = CreateBlockRestrictionTypeFromJSON;
function CreateBlockRestrictionTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'blockId': !(0, runtime_1.exists)(json, 'blockId') ? undefined : (0, BlockId_1.BlockIdFromJSON)(json['blockId']),
        'end': !(0, runtime_1.exists)(json, 'end') ? undefined : json['end'],
        'friday': !(0, runtime_1.exists)(json, 'friday') ? undefined : json['friday'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'monday': !(0, runtime_1.exists)(json, 'monday') ? undefined : json['monday'],
        'restrictionStatus': !(0, runtime_1.exists)(json, 'restrictionStatus') ? undefined : (0, RestrictionStatusType_1.RestrictionStatusTypeFromJSON)(json['restrictionStatus']),
        'roomTypes': !(0, runtime_1.exists)(json, 'roomTypes') ? undefined : json['roomTypes'],
        'saturday': !(0, runtime_1.exists)(json, 'saturday') ? undefined : json['saturday'],
        'start': !(0, runtime_1.exists)(json, 'start') ? undefined : json['start'],
        'sunday': !(0, runtime_1.exists)(json, 'sunday') ? undefined : json['sunday'],
        'thursday': !(0, runtime_1.exists)(json, 'thursday') ? undefined : json['thursday'],
        'tuesday': !(0, runtime_1.exists)(json, 'tuesday') ? undefined : json['tuesday'],
        'wednesday': !(0, runtime_1.exists)(json, 'wednesday') ? undefined : json['wednesday'],
    };
}
exports.CreateBlockRestrictionTypeFromJSONTyped = CreateBlockRestrictionTypeFromJSONTyped;
function CreateBlockRestrictionTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'blockId': (0, BlockId_1.BlockIdToJSON)(value.blockId),
        'end': value.end,
        'friday': value.friday,
        'hotelId': value.hotelId,
        'monday': value.monday,
        'restrictionStatus': (0, RestrictionStatusType_1.RestrictionStatusTypeToJSON)(value.restrictionStatus),
        'roomTypes': value.roomTypes,
        'saturday': value.saturday,
        'start': value.start,
        'sunday': value.sunday,
        'thursday': value.thursday,
        'tuesday': value.tuesday,
        'wednesday': value.wednesday,
    };
}
exports.CreateBlockRestrictionTypeToJSON = CreateBlockRestrictionTypeToJSON;
