"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeCodeTypeToJSON = exports.MergeCodeTypeFromJSONTyped = exports.MergeCodeTypeFromJSON = exports.instanceOfMergeCodeType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the MergeCodeType interface.
 */
function instanceOfMergeCodeType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfMergeCodeType = instanceOfMergeCodeType;
function MergeCodeTypeFromJSON(json) {
    return MergeCodeTypeFromJSONTyped(json, false);
}
exports.MergeCodeTypeFromJSON = MergeCodeTypeFromJSON;
function MergeCodeTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'tag': !(0, runtime_1.exists)(json, 'tag') ? undefined : json['tag'],
        'value': !(0, runtime_1.exists)(json, 'value') ? undefined : json['value'],
    };
}
exports.MergeCodeTypeFromJSONTyped = MergeCodeTypeFromJSONTyped;
function MergeCodeTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'tag': value.tag,
        'value': value.value,
    };
}
exports.MergeCodeTypeToJSON = MergeCodeTypeToJSON;
