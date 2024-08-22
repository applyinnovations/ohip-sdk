"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Inventory API
 * APIs to cater for Inventory functionality in OPERA Cloud. This includes sell limits for date ranges, viewing and updating the property&apos;s inventory, as well as item inventory (such as rollaways, microwaves etc.).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryCountsTypeToJSON = exports.InventoryCountsTypeFromJSONTyped = exports.InventoryCountsTypeFromJSON = exports.instanceOfInventoryCountsType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the InventoryCountsType interface.
 */
function instanceOfInventoryCountsType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfInventoryCountsType = instanceOfInventoryCountsType;
function InventoryCountsTypeFromJSON(json) {
    return InventoryCountsTypeFromJSONTyped(json, false);
}
exports.InventoryCountsTypeFromJSON = InventoryCountsTypeFromJSON;
function InventoryCountsTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'available': !(0, runtime_1.exists)(json, 'available') ? undefined : json['available'],
        'availableCount': !(0, runtime_1.exists)(json, 'availableCount') ? undefined : json['availableCount'],
        'availableTentativeCount': !(0, runtime_1.exists)(json, 'availableTentativeCount') ? undefined : json['availableTentativeCount'],
        'endDate': !(0, runtime_1.exists)(json, 'endDate') ? undefined : json['endDate'],
        'startDate': !(0, runtime_1.exists)(json, 'startDate') ? undefined : json['startDate'],
    };
}
exports.InventoryCountsTypeFromJSONTyped = InventoryCountsTypeFromJSONTyped;
function InventoryCountsTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'available': value.available,
        'availableCount': value.availableCount,
        'availableTentativeCount': value.availableTentativeCount,
        'endDate': value.endDate,
        'startDate': value.startDate,
    };
}
exports.InventoryCountsTypeToJSON = InventoryCountsTypeToJSON;
