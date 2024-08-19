"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryItemTypeToJSON = exports.InventoryItemTypeFromJSONTyped = exports.InventoryItemTypeFromJSON = exports.instanceOfInventoryItemType = void 0;
const runtime_1 = require("../runtime");
const EventResourceNoteType_1 = require("./EventResourceNoteType");
const InventoryItemTypeSellInfo_1 = require("./InventoryItemTypeSellInfo");
const ItemAttributeType_1 = require("./ItemAttributeType");
const ItemRateType_1 = require("./ItemRateType");
const ItemVendorType_1 = require("./ItemVendorType");
const TranslationTextType200_1 = require("./TranslationTextType200");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the InventoryItemType interface.
 */
function instanceOfInventoryItemType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfInventoryItemType = instanceOfInventoryItemType;
function InventoryItemTypeFromJSON(json) {
    return InventoryItemTypeFromJSONTyped(json, false);
}
exports.InventoryItemTypeFromJSON = InventoryItemTypeFromJSON;
function InventoryItemTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'attributes': !(0, runtime_1.exists)(json, 'attributes') ? undefined : (json['attributes'].map(ItemAttributeType_1.ItemAttributeTypeFromJSON)),
        'departments': !(0, runtime_1.exists)(json, 'departments') ? undefined : json['departments'],
        'displaySequence': !(0, runtime_1.exists)(json, 'displaySequence') ? undefined : json['displaySequence'],
        'eventTypes': !(0, runtime_1.exists)(json, 'eventTypes') ? undefined : json['eventTypes'],
        'externalOrder': !(0, runtime_1.exists)(json, 'externalOrder') ? undefined : json['externalOrder'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'itemClassCode': !(0, runtime_1.exists)(json, 'itemClassCode') ? undefined : json['itemClassCode'],
        'itemClassDescription': !(0, runtime_1.exists)(json, 'itemClassDescription') ? undefined : json['itemClassDescription'],
        'itemClassDisplaySequence': !(0, runtime_1.exists)(json, 'itemClassDisplaySequence') ? undefined : json['itemClassDisplaySequence'],
        'itemClassId': !(0, runtime_1.exists)(json, 'itemClassId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['itemClassId']),
        'itemCode': !(0, runtime_1.exists)(json, 'itemCode') ? undefined : json['itemCode'],
        'itemDescription': !(0, runtime_1.exists)(json, 'itemDescription') ? undefined : json['itemDescription'],
        'itemFromTemplate': !(0, runtime_1.exists)(json, 'itemFromTemplate') ? undefined : json['itemFromTemplate'],
        'itemId': !(0, runtime_1.exists)(json, 'itemId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['itemId']),
        'itemName': !(0, runtime_1.exists)(json, 'itemName') ? undefined : (0, TranslationTextType200_1.TranslationTextType200FromJSON)(json['itemName']),
        'itemPool': !(0, runtime_1.exists)(json, 'itemPool') ? undefined : json['itemPool'],
        'print': !(0, runtime_1.exists)(json, 'print') ? undefined : json['print'],
        'rates': !(0, runtime_1.exists)(json, 'rates') ? undefined : (json['rates'].map(ItemRateType_1.ItemRateTypeFromJSON)),
        'resourceNotes': !(0, runtime_1.exists)(json, 'resourceNotes') ? undefined : (json['resourceNotes'].map(EventResourceNoteType_1.EventResourceNoteTypeFromJSON)),
        'revenueType': !(0, runtime_1.exists)(json, 'revenueType') ? undefined : json['revenueType'],
        'revenueTypeEditable': !(0, runtime_1.exists)(json, 'revenueTypeEditable') ? undefined : json['revenueTypeEditable'],
        'sellInfo': !(0, runtime_1.exists)(json, 'sellInfo') ? undefined : (0, InventoryItemTypeSellInfo_1.InventoryItemTypeSellInfoFromJSON)(json['sellInfo']),
        'setdownTime': !(0, runtime_1.exists)(json, 'setdownTime') ? undefined : json['setdownTime'],
        'setupTime': !(0, runtime_1.exists)(json, 'setupTime') ? undefined : json['setupTime'],
        'traceText': !(0, runtime_1.exists)(json, 'traceText') ? undefined : json['traceText'],
        'usedForEvents': !(0, runtime_1.exists)(json, 'usedForEvents') ? undefined : json['usedForEvents'],
        'usedForReservation': !(0, runtime_1.exists)(json, 'usedForReservation') ? undefined : json['usedForReservation'],
        'vendors': !(0, runtime_1.exists)(json, 'vendors') ? undefined : (json['vendors'].map(ItemVendorType_1.ItemVendorTypeFromJSON)),
    };
}
exports.InventoryItemTypeFromJSONTyped = InventoryItemTypeFromJSONTyped;
function InventoryItemTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'attributes': value.attributes === undefined ? undefined : (value.attributes.map(ItemAttributeType_1.ItemAttributeTypeToJSON)),
        'departments': value.departments,
        'displaySequence': value.displaySequence,
        'eventTypes': value.eventTypes,
        'externalOrder': value.externalOrder,
        'hotelId': value.hotelId,
        'itemClassCode': value.itemClassCode,
        'itemClassDescription': value.itemClassDescription,
        'itemClassDisplaySequence': value.itemClassDisplaySequence,
        'itemClassId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.itemClassId),
        'itemCode': value.itemCode,
        'itemDescription': value.itemDescription,
        'itemFromTemplate': value.itemFromTemplate,
        'itemId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.itemId),
        'itemName': (0, TranslationTextType200_1.TranslationTextType200ToJSON)(value.itemName),
        'itemPool': value.itemPool,
        'print': value.print,
        'rates': value.rates === undefined ? undefined : (value.rates.map(ItemRateType_1.ItemRateTypeToJSON)),
        'resourceNotes': value.resourceNotes === undefined ? undefined : (value.resourceNotes.map(EventResourceNoteType_1.EventResourceNoteTypeToJSON)),
        'revenueType': value.revenueType,
        'revenueTypeEditable': value.revenueTypeEditable,
        'sellInfo': (0, InventoryItemTypeSellInfo_1.InventoryItemTypeSellInfoToJSON)(value.sellInfo),
        'setdownTime': value.setdownTime,
        'setupTime': value.setupTime,
        'traceText': value.traceText,
        'usedForEvents': value.usedForEvents,
        'usedForReservation': value.usedForReservation,
        'vendors': value.vendors === undefined ? undefined : (value.vendors.map(ItemVendorType_1.ItemVendorTypeToJSON)),
    };
}
exports.InventoryItemTypeToJSON = InventoryItemTypeToJSON;
