"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockRestrictionsTypeToJSON = exports.BlockRestrictionsTypeFromJSONTyped = exports.BlockRestrictionsTypeFromJSON = exports.instanceOfBlockRestrictionsType = void 0;
const runtime_1 = require("../runtime");
const BlockId_1 = require("./BlockId");
const BlockRestrictionType_1 = require("./BlockRestrictionType");
/**
 * Check if a given object implements the BlockRestrictionsType interface.
 */
function instanceOfBlockRestrictionsType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBlockRestrictionsType = instanceOfBlockRestrictionsType;
function BlockRestrictionsTypeFromJSON(json) {
    return BlockRestrictionsTypeFromJSONTyped(json, false);
}
exports.BlockRestrictionsTypeFromJSON = BlockRestrictionsTypeFromJSON;
function BlockRestrictionsTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'blockId': !(0, runtime_1.exists)(json, 'blockId') ? undefined : (0, BlockId_1.BlockIdFromJSON)(json['blockId']),
        'blockRestriction': !(0, runtime_1.exists)(json, 'blockRestriction') ? undefined : (json['blockRestriction'].map(BlockRestrictionType_1.BlockRestrictionTypeFromJSON)),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
    };
}
exports.BlockRestrictionsTypeFromJSONTyped = BlockRestrictionsTypeFromJSONTyped;
function BlockRestrictionsTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'blockId': (0, BlockId_1.BlockIdToJSON)(value.blockId),
        'blockRestriction': value.blockRestriction === undefined ? undefined : (value.blockRestriction.map(BlockRestrictionType_1.BlockRestrictionTypeToJSON)),
        'hotelId': value.hotelId,
    };
}
exports.BlockRestrictionsTypeToJSON = BlockRestrictionsTypeToJSON;
