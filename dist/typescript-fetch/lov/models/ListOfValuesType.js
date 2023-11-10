"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud List of Values Management API
 * APIs to cater for List of Value functionality in OPERA Cloud. A List of Values in the OPERA Application can be configured by a property.  Then by using these APIs you can retrieve all configured codes.  As an example, Titles is a configurable ListOfValues.  A hotel can specify what titles they wish to use, and thus fetching the LOV for title, you can view the codes that are configured for a property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListOfValuesTypeToJSON = exports.ListOfValuesTypeFromJSONTyped = exports.ListOfValuesTypeFromJSON = exports.instanceOfListOfValuesType = void 0;
const runtime_1 = require("../runtime");
const ItemType_1 = require("./ItemType");
/**
 * Check if a given object implements the ListOfValuesType interface.
 */
function instanceOfListOfValuesType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfListOfValuesType = instanceOfListOfValuesType;
function ListOfValuesTypeFromJSON(json) {
    return ListOfValuesTypeFromJSONTyped(json, false);
}
exports.ListOfValuesTypeFromJSON = ListOfValuesTypeFromJSON;
function ListOfValuesTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'itemCount': !(0, runtime_1.exists)(json, 'itemCount') ? undefined : json['itemCount'],
        'items': !(0, runtime_1.exists)(json, 'items') ? undefined : (json['items'].map(ItemType_1.ItemTypeFromJSON)),
        'lovName': !(0, runtime_1.exists)(json, 'lovName') ? undefined : json['lovName'],
    };
}
exports.ListOfValuesTypeFromJSONTyped = ListOfValuesTypeFromJSONTyped;
function ListOfValuesTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'description': value.description,
        'itemCount': value.itemCount,
        'items': value.items === undefined ? undefined : (value.items.map(ItemType_1.ItemTypeToJSON)),
        'lovName': value.lovName,
    };
}
exports.ListOfValuesTypeToJSON = ListOfValuesTypeToJSON;
