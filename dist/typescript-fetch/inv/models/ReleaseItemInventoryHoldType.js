"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Inventory API
 * APIs to cater for Inventory functionality in OPERA Cloud. This includes sell limits for date ranges, viewing and updating the property&apos;s inventory, as well as item inventory (such as rollaways, microwaves etc.).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReleaseItemInventoryHoldTypeToJSON = exports.ReleaseItemInventoryHoldTypeFromJSONTyped = exports.ReleaseItemInventoryHoldTypeFromJSON = exports.instanceOfReleaseItemInventoryHoldType = void 0;
const runtime_1 = require("../runtime");
const HeldByType_1 = require("./HeldByType");
const TimeSpanType_1 = require("./TimeSpanType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the ReleaseItemInventoryHoldType interface.
 */
function instanceOfReleaseItemInventoryHoldType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfReleaseItemInventoryHoldType = instanceOfReleaseItemInventoryHoldType;
function ReleaseItemInventoryHoldTypeFromJSON(json) {
    return ReleaseItemInventoryHoldTypeFromJSONTyped(json, false);
}
exports.ReleaseItemInventoryHoldTypeFromJSON = ReleaseItemInventoryHoldTypeFromJSON;
function ReleaseItemInventoryHoldTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'heldBy': !(0, runtime_1.exists)(json, 'heldBy') ? undefined : (0, HeldByType_1.HeldByTypeFromJSON)(json['heldBy']),
        'heldById': !(0, runtime_1.exists)(json, 'heldById') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['heldById']),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'itemCode': !(0, runtime_1.exists)(json, 'itemCode') ? undefined : json['itemCode'],
        'itemHoldId': !(0, runtime_1.exists)(json, 'itemHoldId') ? undefined : json['itemHoldId'],
        'itemId': !(0, runtime_1.exists)(json, 'itemId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['itemId']),
        'reserveDates': !(0, runtime_1.exists)(json, 'reserveDates') ? undefined : (0, TimeSpanType_1.TimeSpanTypeFromJSON)(json['reserveDates']),
    };
}
exports.ReleaseItemInventoryHoldTypeFromJSONTyped = ReleaseItemInventoryHoldTypeFromJSONTyped;
function ReleaseItemInventoryHoldTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'heldBy': (0, HeldByType_1.HeldByTypeToJSON)(value.heldBy),
        'heldById': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.heldById),
        'hotelId': value.hotelId,
        'itemCode': value.itemCode,
        'itemHoldId': value.itemHoldId,
        'itemId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.itemId),
        'reserveDates': (0, TimeSpanType_1.TimeSpanTypeToJSON)(value.reserveDates),
    };
}
exports.ReleaseItemInventoryHoldTypeToJSON = ReleaseItemInventoryHoldTypeToJSON;
