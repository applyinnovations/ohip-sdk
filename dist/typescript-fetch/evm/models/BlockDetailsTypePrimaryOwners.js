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
exports.BlockDetailsTypePrimaryOwnersToJSON = exports.BlockDetailsTypePrimaryOwnersFromJSONTyped = exports.BlockDetailsTypePrimaryOwnersFromJSON = exports.instanceOfBlockDetailsTypePrimaryOwners = void 0;
const runtime_1 = require("../runtime");
const BlockOwnerType_1 = require("./BlockOwnerType");
/**
 * Check if a given object implements the BlockDetailsTypePrimaryOwners interface.
 */
function instanceOfBlockDetailsTypePrimaryOwners(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBlockDetailsTypePrimaryOwners = instanceOfBlockDetailsTypePrimaryOwners;
function BlockDetailsTypePrimaryOwnersFromJSON(json) {
    return BlockDetailsTypePrimaryOwnersFromJSONTyped(json, false);
}
exports.BlockDetailsTypePrimaryOwnersFromJSON = BlockDetailsTypePrimaryOwnersFromJSON;
function BlockDetailsTypePrimaryOwnersFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'blockOwner': !(0, runtime_1.exists)(json, 'blockOwner') ? undefined : (0, BlockOwnerType_1.BlockOwnerTypeFromJSON)(json['blockOwner']),
        'blockOwnerCount': !(0, runtime_1.exists)(json, 'blockOwnerCount') ? undefined : json['blockOwnerCount'],
        'cateringOwner': !(0, runtime_1.exists)(json, 'cateringOwner') ? undefined : (0, BlockOwnerType_1.BlockOwnerTypeFromJSON)(json['cateringOwner']),
        'cateringOwnerCount': !(0, runtime_1.exists)(json, 'cateringOwnerCount') ? undefined : json['cateringOwnerCount'],
        'roomsOwner': !(0, runtime_1.exists)(json, 'roomsOwner') ? undefined : (0, BlockOwnerType_1.BlockOwnerTypeFromJSON)(json['roomsOwner']),
        'roomsOwnerCount': !(0, runtime_1.exists)(json, 'roomsOwnerCount') ? undefined : json['roomsOwnerCount'],
    };
}
exports.BlockDetailsTypePrimaryOwnersFromJSONTyped = BlockDetailsTypePrimaryOwnersFromJSONTyped;
function BlockDetailsTypePrimaryOwnersToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'blockOwner': (0, BlockOwnerType_1.BlockOwnerTypeToJSON)(value.blockOwner),
        'blockOwnerCount': value.blockOwnerCount,
        'cateringOwner': (0, BlockOwnerType_1.BlockOwnerTypeToJSON)(value.cateringOwner),
        'cateringOwnerCount': value.cateringOwnerCount,
        'roomsOwner': (0, BlockOwnerType_1.BlockOwnerTypeToJSON)(value.roomsOwner),
        'roomsOwnerCount': value.roomsOwnerCount,
    };
}
exports.BlockDetailsTypePrimaryOwnersToJSON = BlockDetailsTypePrimaryOwnersToJSON;
