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
exports.BlockInstructionTypeBlockProfilesToJSON = exports.BlockInstructionTypeBlockProfilesFromJSONTyped = exports.BlockInstructionTypeBlockProfilesFromJSON = exports.instanceOfBlockInstructionTypeBlockProfiles = void 0;
const runtime_1 = require("../runtime");
const BlockProfilesType_1 = require("./BlockProfilesType");
/**
 * Check if a given object implements the BlockInstructionTypeBlockProfiles interface.
 */
function instanceOfBlockInstructionTypeBlockProfiles(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBlockInstructionTypeBlockProfiles = instanceOfBlockInstructionTypeBlockProfiles;
function BlockInstructionTypeBlockProfilesFromJSON(json) {
    return BlockInstructionTypeBlockProfilesFromJSONTyped(json, false);
}
exports.BlockInstructionTypeBlockProfilesFromJSON = BlockInstructionTypeBlockProfilesFromJSON;
function BlockInstructionTypeBlockProfilesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'blockProfile': !(0, runtime_1.exists)(json, 'blockProfile') ? undefined : (json['blockProfile'].map(BlockProfilesType_1.BlockProfilesTypeFromJSON)),
        'fullOverlay': !(0, runtime_1.exists)(json, 'fullOverlay') ? undefined : json['fullOverlay'],
    };
}
exports.BlockInstructionTypeBlockProfilesFromJSONTyped = BlockInstructionTypeBlockProfilesFromJSONTyped;
function BlockInstructionTypeBlockProfilesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'blockProfile': value.blockProfile === undefined ? undefined : (value.blockProfile.map(BlockProfilesType_1.BlockProfilesTypeToJSON)),
        'fullOverlay': value.fullOverlay,
    };
}
exports.BlockInstructionTypeBlockProfilesToJSON = BlockInstructionTypeBlockProfilesToJSON;
