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
exports.ItemPoolTypeToJSON = exports.ItemPoolTypeFromJSONTyped = exports.ItemPoolTypeFromJSON = exports.instanceOfItemPoolType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the ItemPoolType interface.
 */
function instanceOfItemPoolType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfItemPoolType = instanceOfItemPoolType;
function ItemPoolTypeFromJSON(json) {
    return ItemPoolTypeFromJSONTyped(json, false);
}
exports.ItemPoolTypeFromJSON = ItemPoolTypeFromJSON;
function ItemPoolTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'displaySequence': !(0, runtime_1.exists)(json, 'displaySequence') ? undefined : json['displaySequence'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'itemClass': !(0, runtime_1.exists)(json, 'itemClass') ? undefined : json['itemClass'],
        'itemIds': !(0, runtime_1.exists)(json, 'itemIds') ? undefined : json['itemIds'],
    };
}
exports.ItemPoolTypeFromJSONTyped = ItemPoolTypeFromJSONTyped;
function ItemPoolTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'code': value.code,
        'description': value.description,
        'displaySequence': value.displaySequence,
        'hotelId': value.hotelId,
        'itemClass': value.itemClass,
        'itemIds': value.itemIds,
    };
}
exports.ItemPoolTypeToJSON = ItemPoolTypeToJSON;
