"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockAccessExclusionTypeToJSON = exports.BlockAccessExclusionTypeFromJSONTyped = exports.BlockAccessExclusionTypeFromJSON = exports.instanceOfBlockAccessExclusionType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the BlockAccessExclusionType interface.
 */
function instanceOfBlockAccessExclusionType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBlockAccessExclusionType = instanceOfBlockAccessExclusionType;
function BlockAccessExclusionTypeFromJSON(json) {
    return BlockAccessExclusionTypeFromJSONTyped(json, false);
}
exports.BlockAccessExclusionTypeFromJSON = BlockAccessExclusionTypeFromJSON;
function BlockAccessExclusionTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'allowCancelReservation': !(0, runtime_1.exists)(json, 'allowCancelReservation') ? undefined : json['allowCancelReservation'],
        'allowCreateReservation': !(0, runtime_1.exists)(json, 'allowCreateReservation') ? undefined : json['allowCreateReservation'],
        'allowModifyReservation': !(0, runtime_1.exists)(json, 'allowModifyReservation') ? undefined : json['allowModifyReservation'],
        'excludeFromAvailability': !(0, runtime_1.exists)(json, 'excludeFromAvailability') ? undefined : json['excludeFromAvailability'],
        'inactive': !(0, runtime_1.exists)(json, 'inactive') ? undefined : json['inactive'],
        'sourceType': !(0, runtime_1.exists)(json, 'sourceType') ? undefined : json['sourceType'],
        'sourceValue': !(0, runtime_1.exists)(json, 'sourceValue') ? undefined : json['sourceValue'],
    };
}
exports.BlockAccessExclusionTypeFromJSONTyped = BlockAccessExclusionTypeFromJSONTyped;
function BlockAccessExclusionTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'allowCancelReservation': value.allowCancelReservation,
        'allowCreateReservation': value.allowCreateReservation,
        'allowModifyReservation': value.allowModifyReservation,
        'excludeFromAvailability': value.excludeFromAvailability,
        'inactive': value.inactive,
        'sourceType': value.sourceType,
        'sourceValue': value.sourceValue,
    };
}
exports.BlockAccessExclusionTypeToJSON = BlockAccessExclusionTypeToJSON;
