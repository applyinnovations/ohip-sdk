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
exports.BlockAllocationWashTypeToJSON = exports.BlockAllocationWashTypeFromJSONTyped = exports.BlockAllocationWashTypeFromJSON = exports.instanceOfBlockAllocationWashType = void 0;
const runtime_1 = require("../runtime");
const BlockAllocationWashTypeOccPercentByDay_1 = require("./BlockAllocationWashTypeOccPercentByDay");
const BlockGridInvType_1 = require("./BlockGridInvType");
const BlockId_1 = require("./BlockId");
/**
 * Check if a given object implements the BlockAllocationWashType interface.
 */
function instanceOfBlockAllocationWashType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBlockAllocationWashType = instanceOfBlockAllocationWashType;
function BlockAllocationWashTypeFromJSON(json) {
    return BlockAllocationWashTypeFromJSONTyped(json, false);
}
exports.BlockAllocationWashTypeFromJSON = BlockAllocationWashTypeFromJSON;
function BlockAllocationWashTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'blockId': !(0, runtime_1.exists)(json, 'blockId') ? undefined : (0, BlockId_1.BlockIdFromJSON)(json['blockId']),
        'blockInventory': !(0, runtime_1.exists)(json, 'blockInventory') ? undefined : (0, BlockGridInvType_1.BlockGridInvTypeFromJSON)(json['blockInventory']),
        'byValue': !(0, runtime_1.exists)(json, 'byValue') ? undefined : json['byValue'],
        'endDate': !(0, runtime_1.exists)(json, 'endDate') ? undefined : json['endDate'],
        'genericRoomType': !(0, runtime_1.exists)(json, 'genericRoomType') ? undefined : json['genericRoomType'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'includedDays': !(0, runtime_1.exists)(json, 'includedDays') ? undefined : json['includedDays'],
        'occPercentByDay': !(0, runtime_1.exists)(json, 'occPercentByDay') ? undefined : (0, BlockAllocationWashTypeOccPercentByDay_1.BlockAllocationWashTypeOccPercentByDayFromJSON)(json['occPercentByDay']),
        'percentByDay': !(0, runtime_1.exists)(json, 'percentByDay') ? undefined : json['percentByDay'],
        'roomTypes': !(0, runtime_1.exists)(json, 'roomTypes') ? undefined : json['roomTypes'],
        'startDate': !(0, runtime_1.exists)(json, 'startDate') ? undefined : json['startDate'],
    };
}
exports.BlockAllocationWashTypeFromJSONTyped = BlockAllocationWashTypeFromJSONTyped;
function BlockAllocationWashTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'blockId': (0, BlockId_1.BlockIdToJSON)(value.blockId),
        'blockInventory': (0, BlockGridInvType_1.BlockGridInvTypeToJSON)(value.blockInventory),
        'byValue': value.byValue,
        'endDate': value.endDate,
        'genericRoomType': value.genericRoomType,
        'hotelId': value.hotelId,
        'includedDays': value.includedDays,
        'occPercentByDay': (0, BlockAllocationWashTypeOccPercentByDay_1.BlockAllocationWashTypeOccPercentByDayToJSON)(value.occPercentByDay),
        'percentByDay': value.percentByDay,
        'roomTypes': value.roomTypes,
        'startDate': value.startDate,
    };
}
exports.BlockAllocationWashTypeToJSON = BlockAllocationWashTypeToJSON;
