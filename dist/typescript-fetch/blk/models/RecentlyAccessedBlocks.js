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
exports.RecentlyAccessedBlocksToJSON = exports.RecentlyAccessedBlocksFromJSONTyped = exports.RecentlyAccessedBlocksFromJSON = exports.instanceOfRecentlyAccessedBlocks = void 0;
const runtime_1 = require("../runtime");
const Links_1 = require("./Links");
const RecentlyAccessedBlocksType_1 = require("./RecentlyAccessedBlocksType");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the RecentlyAccessedBlocks interface.
 */
function instanceOfRecentlyAccessedBlocks(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRecentlyAccessedBlocks = instanceOfRecentlyAccessedBlocks;
function RecentlyAccessedBlocksFromJSON(json) {
    return RecentlyAccessedBlocksFromJSONTyped(json, false);
}
exports.RecentlyAccessedBlocksFromJSON = RecentlyAccessedBlocksFromJSON;
function RecentlyAccessedBlocksFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'blocks': !(0, runtime_1.exists)(json, 'blocks') ? undefined : (0, RecentlyAccessedBlocksType_1.RecentlyAccessedBlocksTypeFromJSON)(json['blocks']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.RecentlyAccessedBlocksFromJSONTyped = RecentlyAccessedBlocksFromJSONTyped;
function RecentlyAccessedBlocksToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'blocks': (0, RecentlyAccessedBlocksType_1.RecentlyAccessedBlocksTypeToJSON)(value.blocks),
        'links': (0, Links_1.LinksToJSON)(value.links),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.RecentlyAccessedBlocksToJSON = RecentlyAccessedBlocksToJSON;