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
exports.BlockWashInfoTypeToJSON = exports.BlockWashInfoTypeFromJSONTyped = exports.BlockWashInfoTypeFromJSON = exports.instanceOfBlockWashInfoType = void 0;
const runtime_1 = require("../runtime");
const BlockWashInfoTypeBlockInfo_1 = require("./BlockWashInfoTypeBlockInfo");
/**
 * Check if a given object implements the BlockWashInfoType interface.
 */
function instanceOfBlockWashInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBlockWashInfoType = instanceOfBlockWashInfoType;
function BlockWashInfoTypeFromJSON(json) {
    return BlockWashInfoTypeFromJSONTyped(json, false);
}
exports.BlockWashInfoTypeFromJSON = BlockWashInfoTypeFromJSON;
function BlockWashInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'blockInfo': !(0, runtime_1.exists)(json, 'blockInfo') ? undefined : (0, BlockWashInfoTypeBlockInfo_1.BlockWashInfoTypeBlockInfoFromJSON)(json['blockInfo']),
        'roomTypes': !(0, runtime_1.exists)(json, 'roomTypes') ? undefined : json['roomTypes'],
    };
}
exports.BlockWashInfoTypeFromJSONTyped = BlockWashInfoTypeFromJSONTyped;
function BlockWashInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'blockInfo': (0, BlockWashInfoTypeBlockInfo_1.BlockWashInfoTypeBlockInfoToJSON)(value.blockInfo),
        'roomTypes': value.roomTypes,
    };
}
exports.BlockWashInfoTypeToJSON = BlockWashInfoTypeToJSON;