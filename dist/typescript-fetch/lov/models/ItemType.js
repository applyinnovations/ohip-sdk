"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud List of Values Management API
 * APIs to cater for List of Value functionality in OPERA Cloud. A List of Values in the OPERA Application can be configured by a property.  Then by using these APIs you can retrieve all configured codes.  As an example, Titles is a configurable ListOfValues.  A hotel can specify what titles they wish to use, and thus fetching the LOV for title, you can view the codes that are configured for a property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemTypeToJSON = exports.ItemTypeFromJSONTyped = exports.ItemTypeFromJSON = exports.instanceOfItemType = void 0;
const runtime_1 = require("../runtime");
const ParameterType_1 = require("./ParameterType");
/**
 * Check if a given object implements the ItemType interface.
 */
function instanceOfItemType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfItemType = instanceOfItemType;
function ItemTypeFromJSON(json) {
    return ItemTypeFromJSONTyped(json, false);
}
exports.ItemTypeFromJSON = ItemTypeFromJSON;
function ItemTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'active': !(0, runtime_1.exists)(json, 'active') ? undefined : json['active'],
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'flexfields': !(0, runtime_1.exists)(json, 'flexfields') ? undefined : (json['flexfields'].map(ParameterType_1.ParameterTypeFromJSON)),
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'shortDescription': !(0, runtime_1.exists)(json, 'shortDescription') ? undefined : json['shortDescription'],
    };
}
exports.ItemTypeFromJSONTyped = ItemTypeFromJSONTyped;
function ItemTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'active': value.active,
        'code': value.code,
        'description': value.description,
        'flexfields': value.flexfields === undefined ? undefined : (value.flexfields.map(ParameterType_1.ParameterTypeToJSON)),
        'name': value.name,
        'shortDescription': value.shortDescription,
    };
}
exports.ItemTypeToJSON = ItemTypeToJSON;
