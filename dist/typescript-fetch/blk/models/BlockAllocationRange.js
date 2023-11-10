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
exports.BlockAllocationRangeToJSON = exports.BlockAllocationRangeFromJSONTyped = exports.BlockAllocationRangeFromJSON = exports.instanceOfBlockAllocationRange = void 0;
const runtime_1 = require("../runtime");
const BlockAllocationRangeType_1 = require("./BlockAllocationRangeType");
const Links_1 = require("./Links");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the BlockAllocationRange interface.
 */
function instanceOfBlockAllocationRange(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBlockAllocationRange = instanceOfBlockAllocationRange;
function BlockAllocationRangeFromJSON(json) {
    return BlockAllocationRangeFromJSONTyped(json, false);
}
exports.BlockAllocationRangeFromJSON = BlockAllocationRangeFromJSON;
function BlockAllocationRangeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'blockAllocationRange': !(0, runtime_1.exists)(json, 'blockAllocationRange') ? undefined : (0, BlockAllocationRangeType_1.BlockAllocationRangeTypeFromJSON)(json['blockAllocationRange']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.BlockAllocationRangeFromJSONTyped = BlockAllocationRangeFromJSONTyped;
function BlockAllocationRangeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'blockAllocationRange': (0, BlockAllocationRangeType_1.BlockAllocationRangeTypeToJSON)(value.blockAllocationRange),
        'links': (0, Links_1.LinksToJSON)(value.links),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.BlockAllocationRangeToJSON = BlockAllocationRangeToJSON;
