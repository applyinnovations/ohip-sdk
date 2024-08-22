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
exports.CopyInventoryItemTypeToJSON = exports.CopyInventoryItemTypeFromJSONTyped = exports.CopyInventoryItemTypeFromJSON = exports.instanceOfCopyInventoryItemType = void 0;
const runtime_1 = require("../runtime");
const CodeDescriptionType_1 = require("./CodeDescriptionType");
/**
 * Check if a given object implements the CopyInventoryItemType interface.
 */
function instanceOfCopyInventoryItemType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCopyInventoryItemType = instanceOfCopyInventoryItemType;
function CopyInventoryItemTypeFromJSON(json) {
    return CopyInventoryItemTypeFromJSONTyped(json, false);
}
exports.CopyInventoryItemTypeFromJSON = CopyInventoryItemTypeFromJSON;
function CopyInventoryItemTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'copyAs': !(0, runtime_1.exists)(json, 'copyAs') ? undefined : (0, CodeDescriptionType_1.CodeDescriptionTypeFromJSON)(json['copyAs']),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'itemCode': !(0, runtime_1.exists)(json, 'itemCode') ? undefined : json['itemCode'],
    };
}
exports.CopyInventoryItemTypeFromJSONTyped = CopyInventoryItemTypeFromJSONTyped;
function CopyInventoryItemTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'copyAs': (0, CodeDescriptionType_1.CodeDescriptionTypeToJSON)(value.copyAs),
        'hotelId': value.hotelId,
        'itemCode': value.itemCode,
    };
}
exports.CopyInventoryItemTypeToJSON = CopyInventoryItemTypeToJSON;
