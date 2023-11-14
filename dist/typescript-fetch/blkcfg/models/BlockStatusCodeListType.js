"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block Configuration API
 * APIs for Block configuration, such as creating, updating, fetching and removing codes related to blocks. <br />< This might include fetching the block cancellation reasons, or creating new block refused reasons.  Wash schedules can be create, or new reservation methods could be added for a property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockStatusCodeListTypeToJSON = exports.BlockStatusCodeListTypeFromJSONTyped = exports.BlockStatusCodeListTypeFromJSON = exports.instanceOfBlockStatusCodeListType = void 0;
/**
 * Check if a given object implements the BlockStatusCodeListType interface.
 */
function instanceOfBlockStatusCodeListType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBlockStatusCodeListType = instanceOfBlockStatusCodeListType;
function BlockStatusCodeListTypeFromJSON(json) {
    return BlockStatusCodeListTypeFromJSONTyped(json, false);
}
exports.BlockStatusCodeListTypeFromJSON = BlockStatusCodeListTypeFromJSON;
function BlockStatusCodeListTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.BlockStatusCodeListTypeFromJSONTyped = BlockStatusCodeListTypeFromJSONTyped;
function BlockStatusCodeListTypeToJSON(value) {
    return value;
}
exports.BlockStatusCodeListTypeToJSON = BlockStatusCodeListTypeToJSON;