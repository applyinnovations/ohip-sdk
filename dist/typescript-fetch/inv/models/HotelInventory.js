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
exports.HotelInventoryToJSON = exports.HotelInventoryFromJSONTyped = exports.HotelInventoryFromJSON = exports.instanceOfHotelInventory = void 0;
const runtime_1 = require("../runtime");
const HotelInventoryType_1 = require("./HotelInventoryType");
const Links_1 = require("./Links");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the HotelInventory interface.
 */
function instanceOfHotelInventory(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfHotelInventory = instanceOfHotelInventory;
function HotelInventoryFromJSON(json) {
    return HotelInventoryFromJSONTyped(json, false);
}
exports.HotelInventoryFromJSON = HotelInventoryFromJSON;
function HotelInventoryFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'hotelInventories': !(0, runtime_1.exists)(json, 'hotelInventories') ? undefined : (json['hotelInventories'].map(HotelInventoryType_1.HotelInventoryTypeFromJSON)),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.HotelInventoryFromJSONTyped = HotelInventoryFromJSONTyped;
function HotelInventoryToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'hotelInventories': value.hotelInventories === undefined ? undefined : (value.hotelInventories.map(HotelInventoryType_1.HotelInventoryTypeToJSON)),
        'links': (0, Links_1.LinksToJSON)(value.links),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.HotelInventoryToJSON = HotelInventoryToJSON;
