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
exports.ListOfValuesMatchTypeToJSON = exports.ListOfValuesMatchTypeFromJSONTyped = exports.ListOfValuesMatchTypeFromJSON = exports.instanceOfListOfValuesMatchType = void 0;
const runtime_1 = require("../runtime");
const ItemType_1 = require("./ItemType");
/**
 * Check if a given object implements the ListOfValuesMatchType interface.
 */
function instanceOfListOfValuesMatchType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfListOfValuesMatchType = instanceOfListOfValuesMatchType;
function ListOfValuesMatchTypeFromJSON(json) {
    return ListOfValuesMatchTypeFromJSONTyped(json, false);
}
exports.ListOfValuesMatchTypeFromJSON = ListOfValuesMatchTypeFromJSON;
function ListOfValuesMatchTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'closeMatchingItems': !(0, runtime_1.exists)(json, 'closeMatchingItems') ? undefined : (json['closeMatchingItems'].map(ItemType_1.ItemTypeFromJSON)),
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'lovName': !(0, runtime_1.exists)(json, 'lovName') ? undefined : json['lovName'],
        'matchingItems': !(0, runtime_1.exists)(json, 'matchingItems') ? undefined : (json['matchingItems'].map(ItemType_1.ItemTypeFromJSON)),
        'nonMatchingItems': !(0, runtime_1.exists)(json, 'nonMatchingItems') ? undefined : (json['nonMatchingItems'].map(ItemType_1.ItemTypeFromJSON)),
    };
}
exports.ListOfValuesMatchTypeFromJSONTyped = ListOfValuesMatchTypeFromJSONTyped;
function ListOfValuesMatchTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'closeMatchingItems': value.closeMatchingItems === undefined ? undefined : (value.closeMatchingItems.map(ItemType_1.ItemTypeToJSON)),
        'description': value.description,
        'lovName': value.lovName,
        'matchingItems': value.matchingItems === undefined ? undefined : (value.matchingItems.map(ItemType_1.ItemTypeToJSON)),
        'nonMatchingItems': value.nonMatchingItems === undefined ? undefined : (value.nonMatchingItems.map(ItemType_1.ItemTypeToJSON)),
    };
}
exports.ListOfValuesMatchTypeToJSON = ListOfValuesMatchTypeToJSON;