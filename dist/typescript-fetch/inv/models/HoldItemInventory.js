"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Inventory API
 * APIs to cater for Inventory functionality in OPERA Cloud. This includes sell limits for date ranges, viewing and updating the property&apos;s inventory, as well as item inventory (such as rollaways, microwaves etc.).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HoldItemInventoryToJSON = exports.HoldItemInventoryFromJSONTyped = exports.HoldItemInventoryFromJSON = exports.instanceOfHoldItemInventory = void 0;
const runtime_1 = require("../runtime");
const HoldItemInventoryType_1 = require("./HoldItemInventoryType");
const Links_1 = require("./Links");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the HoldItemInventory interface.
 */
function instanceOfHoldItemInventory(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfHoldItemInventory = instanceOfHoldItemInventory;
function HoldItemInventoryFromJSON(json) {
    return HoldItemInventoryFromJSONTyped(json, false);
}
exports.HoldItemInventoryFromJSON = HoldItemInventoryFromJSON;
function HoldItemInventoryFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'holdItemInfo': !(0, runtime_1.exists)(json, 'holdItemInfo') ? undefined : (0, HoldItemInventoryType_1.HoldItemInventoryTypeFromJSON)(json['holdItemInfo']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.HoldItemInventoryFromJSONTyped = HoldItemInventoryFromJSONTyped;
function HoldItemInventoryToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'holdItemInfo': (0, HoldItemInventoryType_1.HoldItemInventoryTypeToJSON)(value.holdItemInfo),
        'links': (0, Links_1.LinksToJSON)(value.links),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.HoldItemInventoryToJSON = HoldItemInventoryToJSON;
