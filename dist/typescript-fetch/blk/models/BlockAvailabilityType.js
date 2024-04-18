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
exports.BlockAvailabilityTypeToJSON = exports.BlockAvailabilityTypeFromJSONTyped = exports.BlockAvailabilityTypeFromJSON = exports.instanceOfBlockAvailabilityType = void 0;
const runtime_1 = require("../runtime");
const BlockAvailabilityInfoType_1 = require("./BlockAvailabilityInfoType");
const BlockAvailabilityMasterInfoType_1 = require("./BlockAvailabilityMasterInfoType");
const BlockHeaderInfoType_1 = require("./BlockHeaderInfoType");
/**
 * Check if a given object implements the BlockAvailabilityType interface.
 */
function instanceOfBlockAvailabilityType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBlockAvailabilityType = instanceOfBlockAvailabilityType;
function BlockAvailabilityTypeFromJSON(json) {
    return BlockAvailabilityTypeFromJSONTyped(json, false);
}
exports.BlockAvailabilityTypeFromJSON = BlockAvailabilityTypeFromJSON;
function BlockAvailabilityTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'blockAvailability': !(0, runtime_1.exists)(json, 'blockAvailability') ? undefined : (json['blockAvailability'].map(BlockAvailabilityInfoType_1.BlockAvailabilityInfoTypeFromJSON)),
        'blockAvailabilityMasterInfo': !(0, runtime_1.exists)(json, 'blockAvailabilityMasterInfo') ? undefined : (0, BlockAvailabilityMasterInfoType_1.BlockAvailabilityMasterInfoTypeFromJSON)(json['blockAvailabilityMasterInfo']),
        'blockHeaderInfo': !(0, runtime_1.exists)(json, 'blockHeaderInfo') ? undefined : (0, BlockHeaderInfoType_1.BlockHeaderInfoTypeFromJSON)(json['blockHeaderInfo']),
    };
}
exports.BlockAvailabilityTypeFromJSONTyped = BlockAvailabilityTypeFromJSONTyped;
function BlockAvailabilityTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'blockAvailability': value.blockAvailability === undefined ? undefined : (value.blockAvailability.map(BlockAvailabilityInfoType_1.BlockAvailabilityInfoTypeToJSON)),
        'blockAvailabilityMasterInfo': (0, BlockAvailabilityMasterInfoType_1.BlockAvailabilityMasterInfoTypeToJSON)(value.blockAvailabilityMasterInfo),
        'blockHeaderInfo': (0, BlockHeaderInfoType_1.BlockHeaderInfoTypeToJSON)(value.blockHeaderInfo),
    };
}
exports.BlockAvailabilityTypeToJSON = BlockAvailabilityTypeToJSON;