"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management Outbound API
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 20.99.99.99
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceOfSaleTypeToJSON = exports.SourceOfSaleTypeFromJSONTyped = exports.SourceOfSaleTypeFromJSON = exports.instanceOfSourceOfSaleType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the SourceOfSaleType interface.
 */
function instanceOfSourceOfSaleType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfSourceOfSaleType = instanceOfSourceOfSaleType;
function SourceOfSaleTypeFromJSON(json) {
    return SourceOfSaleTypeFromJSONTyped(json, false);
}
exports.SourceOfSaleTypeFromJSON = SourceOfSaleTypeFromJSON;
function SourceOfSaleTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'sourceType': !(0, runtime_1.exists)(json, 'sourceType') ? undefined : json['sourceType'],
        'sourceCode': !(0, runtime_1.exists)(json, 'sourceCode') ? undefined : json['sourceCode'],
    };
}
exports.SourceOfSaleTypeFromJSONTyped = SourceOfSaleTypeFromJSONTyped;
function SourceOfSaleTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'sourceType': value.sourceType,
        'sourceCode': value.sourceCode,
    };
}
exports.SourceOfSaleTypeToJSON = SourceOfSaleTypeToJSON;
