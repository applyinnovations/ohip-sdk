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
exports.BlockOwnersTypeToJSON = exports.BlockOwnersTypeFromJSONTyped = exports.BlockOwnersTypeFromJSON = exports.instanceOfBlockOwnersType = void 0;
const runtime_1 = require("../runtime");
const BlockOwnerType_1 = require("./BlockOwnerType");
/**
 * Check if a given object implements the BlockOwnersType interface.
 */
function instanceOfBlockOwnersType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBlockOwnersType = instanceOfBlockOwnersType;
function BlockOwnersTypeFromJSON(json) {
    return BlockOwnersTypeFromJSONTyped(json, false);
}
exports.BlockOwnersTypeFromJSON = BlockOwnersTypeFromJSON;
function BlockOwnersTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'lockBlockOwners': !(0, runtime_1.exists)(json, 'lockBlockOwners') ? undefined : json['lockBlockOwners'],
        'lockCateringOwners': !(0, runtime_1.exists)(json, 'lockCateringOwners') ? undefined : json['lockCateringOwners'],
        'lockRoomsOwners': !(0, runtime_1.exists)(json, 'lockRoomsOwners') ? undefined : json['lockRoomsOwners'],
        'owner': !(0, runtime_1.exists)(json, 'owner') ? undefined : (json['owner'].map(BlockOwnerType_1.BlockOwnerTypeFromJSON)),
    };
}
exports.BlockOwnersTypeFromJSONTyped = BlockOwnersTypeFromJSONTyped;
function BlockOwnersTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'lockBlockOwners': value.lockBlockOwners,
        'lockCateringOwners': value.lockCateringOwners,
        'lockRoomsOwners': value.lockRoomsOwners,
        'owner': value.owner === undefined ? undefined : (value.owner.map(BlockOwnerType_1.BlockOwnerTypeToJSON)),
    };
}
exports.BlockOwnersTypeToJSON = BlockOwnersTypeToJSON;
