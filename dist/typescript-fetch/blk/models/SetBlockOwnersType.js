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
exports.SetBlockOwnersTypeToJSON = exports.SetBlockOwnersTypeFromJSONTyped = exports.SetBlockOwnersTypeFromJSON = exports.instanceOfSetBlockOwnersType = void 0;
const runtime_1 = require("../runtime");
const BlockOwnersType_1 = require("./BlockOwnersType");
const BlockOwnershipType_1 = require("./BlockOwnershipType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the SetBlockOwnersType interface.
 */
function instanceOfSetBlockOwnersType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfSetBlockOwnersType = instanceOfSetBlockOwnersType;
function SetBlockOwnersTypeFromJSON(json) {
    return SetBlockOwnersTypeFromJSONTyped(json, false);
}
exports.SetBlockOwnersTypeFromJSON = SetBlockOwnersTypeFromJSON;
function SetBlockOwnersTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'blockIdList': !(0, runtime_1.exists)(json, 'blockIdList') ? undefined : (json['blockIdList'].map(UniqueIDType_1.UniqueIDTypeFromJSON)),
        'blockOwners': !(0, runtime_1.exists)(json, 'blockOwners') ? undefined : (0, BlockOwnersType_1.BlockOwnersTypeFromJSON)(json['blockOwners']),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'ownership': !(0, runtime_1.exists)(json, 'ownership') ? undefined : (0, BlockOwnershipType_1.BlockOwnershipTypeFromJSON)(json['ownership']),
    };
}
exports.SetBlockOwnersTypeFromJSONTyped = SetBlockOwnersTypeFromJSONTyped;
function SetBlockOwnersTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'blockIdList': value.blockIdList === undefined ? undefined : (value.blockIdList.map(UniqueIDType_1.UniqueIDTypeToJSON)),
        'blockOwners': (0, BlockOwnersType_1.BlockOwnersTypeToJSON)(value.blockOwners),
        'hotelId': value.hotelId,
        'ownership': (0, BlockOwnershipType_1.BlockOwnershipTypeToJSON)(value.ownership),
    };
}
exports.SetBlockOwnersTypeToJSON = SetBlockOwnersTypeToJSON;