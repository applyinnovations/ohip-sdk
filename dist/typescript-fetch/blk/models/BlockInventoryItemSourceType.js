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
exports.BlockInventoryItemSourceTypeToJSON = exports.BlockInventoryItemSourceTypeFromJSONTyped = exports.BlockInventoryItemSourceTypeFromJSON = exports.instanceOfBlockInventoryItemSourceType = void 0;
const runtime_1 = require("../runtime");
const BlockId_1 = require("./BlockId");
/**
 * Check if a given object implements the BlockInventoryItemSourceType interface.
 */
function instanceOfBlockInventoryItemSourceType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBlockInventoryItemSourceType = instanceOfBlockInventoryItemSourceType;
function BlockInventoryItemSourceTypeFromJSON(json) {
    return BlockInventoryItemSourceTypeFromJSONTyped(json, false);
}
exports.BlockInventoryItemSourceTypeFromJSON = BlockInventoryItemSourceTypeFromJSON;
function BlockInventoryItemSourceTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'blockId': !(0, runtime_1.exists)(json, 'blockId') ? undefined : (0, BlockId_1.BlockIdFromJSON)(json['blockId']),
        'packageCode': !(0, runtime_1.exists)(json, 'packageCode') ? undefined : json['packageCode'],
        'ratePlanCode': !(0, runtime_1.exists)(json, 'ratePlanCode') ? undefined : json['ratePlanCode'],
    };
}
exports.BlockInventoryItemSourceTypeFromJSONTyped = BlockInventoryItemSourceTypeFromJSONTyped;
function BlockInventoryItemSourceTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'blockId': (0, BlockId_1.BlockIdToJSON)(value.blockId),
        'packageCode': value.packageCode,
        'ratePlanCode': value.ratePlanCode,
    };
}
exports.BlockInventoryItemSourceTypeToJSON = BlockInventoryItemSourceTypeToJSON;