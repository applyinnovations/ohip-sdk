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
exports.BlockInventoryItemTypeToJSON = exports.BlockInventoryItemTypeFromJSONTyped = exports.BlockInventoryItemTypeFromJSON = exports.instanceOfBlockInventoryItemType = void 0;
const runtime_1 = require("../runtime");
const BlockInventoryItemSourceType_1 = require("./BlockInventoryItemSourceType");
const DateRangeType_1 = require("./DateRangeType");
const ItemInfoType_1 = require("./ItemInfoType");
/**
 * Check if a given object implements the BlockInventoryItemType interface.
 */
function instanceOfBlockInventoryItemType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBlockInventoryItemType = instanceOfBlockInventoryItemType;
function BlockInventoryItemTypeFromJSON(json) {
    return BlockInventoryItemTypeFromJSONTyped(json, false);
}
exports.BlockInventoryItemTypeFromJSON = BlockInventoryItemTypeFromJSON;
function BlockInventoryItemTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'blockDates': !(0, runtime_1.exists)(json, 'blockDates') ? undefined : (0, DateRangeType_1.DateRangeTypeFromJSON)(json['blockDates']),
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'idContext': !(0, runtime_1.exists)(json, 'idContext') ? undefined : json['idContext'],
        'idExtension': !(0, runtime_1.exists)(json, 'idExtension') ? undefined : json['idExtension'],
        'instance': !(0, runtime_1.exists)(json, 'instance') ? undefined : json['instance'],
        'item': !(0, runtime_1.exists)(json, 'item') ? undefined : (0, ItemInfoType_1.ItemInfoTypeFromJSON)(json['item']),
        'quantity': !(0, runtime_1.exists)(json, 'quantity') ? undefined : json['quantity'],
        'source': !(0, runtime_1.exists)(json, 'source') ? undefined : (0, BlockInventoryItemSourceType_1.BlockInventoryItemSourceTypeFromJSON)(json['source']),
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
        'url': !(0, runtime_1.exists)(json, 'url') ? undefined : json['url'],
    };
}
exports.BlockInventoryItemTypeFromJSONTyped = BlockInventoryItemTypeFromJSONTyped;
function BlockInventoryItemTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'blockDates': (0, DateRangeType_1.DateRangeTypeToJSON)(value.blockDates),
        'id': value.id,
        'idContext': value.idContext,
        'idExtension': value.idExtension,
        'instance': value.instance,
        'item': (0, ItemInfoType_1.ItemInfoTypeToJSON)(value.item),
        'quantity': value.quantity,
        'source': (0, BlockInventoryItemSourceType_1.BlockInventoryItemSourceTypeToJSON)(value.source),
        'type': value.type,
        'url': value.url,
    };
}
exports.BlockInventoryItemTypeToJSON = BlockInventoryItemTypeToJSON;
