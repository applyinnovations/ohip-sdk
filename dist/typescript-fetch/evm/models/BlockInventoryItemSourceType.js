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
