"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemAttributeTypeToJSON = exports.ItemAttributeTypeFromJSONTyped = exports.ItemAttributeTypeFromJSON = exports.instanceOfItemAttributeType = void 0;
const runtime_1 = require("../runtime");
const TranslationTextType200_1 = require("./TranslationTextType200");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the ItemAttributeType interface.
 */
function instanceOfItemAttributeType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfItemAttributeType = instanceOfItemAttributeType;
function ItemAttributeTypeFromJSON(json) {
    return ItemAttributeTypeFromJSONTyped(json, false);
}
exports.ItemAttributeTypeFromJSON = ItemAttributeTypeFromJSON;
function ItemAttributeTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        '_default': !(0, runtime_1.exists)(json, 'default') ? undefined : json['default'],
        'itemAttributeId': !(0, runtime_1.exists)(json, 'itemAttributeId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['itemAttributeId']),
        'setdownTime': !(0, runtime_1.exists)(json, 'setdownTime') ? undefined : json['setdownTime'],
        'setupTime': !(0, runtime_1.exists)(json, 'setupTime') ? undefined : json['setupTime'],
        'translatableName': !(0, runtime_1.exists)(json, 'translatableName') ? undefined : (0, TranslationTextType200_1.TranslationTextType200FromJSON)(json['translatableName']),
    };
}
exports.ItemAttributeTypeFromJSONTyped = ItemAttributeTypeFromJSONTyped;
function ItemAttributeTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'default': value._default,
        'itemAttributeId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.itemAttributeId),
        'setdownTime': value.setdownTime,
        'setupTime': value.setupTime,
        'translatableName': (0, TranslationTextType200_1.TranslationTextType200ToJSON)(value.translatableName),
    };
}
exports.ItemAttributeTypeToJSON = ItemAttributeTypeToJSON;
