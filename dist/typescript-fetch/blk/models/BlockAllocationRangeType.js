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
exports.BlockAllocationRangeTypeToJSON = exports.BlockAllocationRangeTypeFromJSONTyped = exports.BlockAllocationRangeTypeFromJSON = exports.instanceOfBlockAllocationRangeType = void 0;
const runtime_1 = require("../runtime");
const AllocationType_1 = require("./AllocationType");
const BlockAllocationRangeTypeOverbookListInner_1 = require("./BlockAllocationRangeTypeOverbookListInner");
const BlockGridInvType_1 = require("./BlockGridInvType");
const BlockGridRatesType_1 = require("./BlockGridRatesType");
const BlockId_1 = require("./BlockId");
const BlockRangeModeType_1 = require("./BlockRangeModeType");
/**
 * Check if a given object implements the BlockAllocationRangeType interface.
 */
function instanceOfBlockAllocationRangeType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBlockAllocationRangeType = instanceOfBlockAllocationRangeType;
function BlockAllocationRangeTypeFromJSON(json) {
    return BlockAllocationRangeTypeFromJSONTyped(json, false);
}
exports.BlockAllocationRangeTypeFromJSON = BlockAllocationRangeTypeFromJSON;
function BlockAllocationRangeTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'allocationType': !(0, runtime_1.exists)(json, 'allocationType') ? undefined : (0, AllocationType_1.AllocationTypeFromJSON)(json['allocationType']),
        'beginDate': !(0, runtime_1.exists)(json, 'beginDate') ? undefined : json['beginDate'],
        'blockId': !(0, runtime_1.exists)(json, 'blockId') ? undefined : (0, BlockId_1.BlockIdFromJSON)(json['blockId']),
        'blockInventory': !(0, runtime_1.exists)(json, 'blockInventory') ? undefined : (0, BlockGridInvType_1.BlockGridInvTypeFromJSON)(json['blockInventory']),
        'blockRates': !(0, runtime_1.exists)(json, 'blockRates') ? undefined : (0, BlockGridRatesType_1.BlockGridRatesTypeFromJSON)(json['blockRates']),
        'cutoffDate': !(0, runtime_1.exists)(json, 'cutoffDate') ? undefined : json['cutoffDate'],
        'cutoffDays': !(0, runtime_1.exists)(json, 'cutoffDays') ? undefined : json['cutoffDays'],
        'endDate': !(0, runtime_1.exists)(json, 'endDate') ? undefined : json['endDate'],
        'genericRoomType': !(0, runtime_1.exists)(json, 'genericRoomType') ? undefined : json['genericRoomType'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'includedDays': !(0, runtime_1.exists)(json, 'includedDays') ? undefined : json['includedDays'],
        'incrementFlag': !(0, runtime_1.exists)(json, 'incrementFlag') ? undefined : json['incrementFlag'],
        'overbookList': !(0, runtime_1.exists)(json, 'overbookList') ? undefined : (json['overbookList'].map(BlockAllocationRangeTypeOverbookListInner_1.BlockAllocationRangeTypeOverbookListInnerFromJSON)),
        'rangeMode': !(0, runtime_1.exists)(json, 'rangeMode') ? undefined : (0, BlockRangeModeType_1.BlockRangeModeTypeFromJSON)(json['rangeMode']),
        'roomTypes': !(0, runtime_1.exists)(json, 'roomTypes') ? undefined : json['roomTypes'],
    };
}
exports.BlockAllocationRangeTypeFromJSONTyped = BlockAllocationRangeTypeFromJSONTyped;
function BlockAllocationRangeTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'allocationType': (0, AllocationType_1.AllocationTypeToJSON)(value.allocationType),
        'beginDate': value.beginDate,
        'blockId': (0, BlockId_1.BlockIdToJSON)(value.blockId),
        'blockInventory': (0, BlockGridInvType_1.BlockGridInvTypeToJSON)(value.blockInventory),
        'blockRates': (0, BlockGridRatesType_1.BlockGridRatesTypeToJSON)(value.blockRates),
        'cutoffDate': value.cutoffDate,
        'cutoffDays': value.cutoffDays,
        'endDate': value.endDate,
        'genericRoomType': value.genericRoomType,
        'hotelId': value.hotelId,
        'includedDays': value.includedDays,
        'incrementFlag': value.incrementFlag,
        'overbookList': value.overbookList === undefined ? undefined : (value.overbookList.map(BlockAllocationRangeTypeOverbookListInner_1.BlockAllocationRangeTypeOverbookListInnerToJSON)),
        'rangeMode': (0, BlockRangeModeType_1.BlockRangeModeTypeToJSON)(value.rangeMode),
        'roomTypes': value.roomTypes,
    };
}
exports.BlockAllocationRangeTypeToJSON = BlockAllocationRangeTypeToJSON;