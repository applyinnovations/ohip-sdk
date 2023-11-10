"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostingTimeTypeToJSON = exports.PostingTimeTypeFromJSONTyped = exports.PostingTimeTypeFromJSON = exports.instanceOfPostingTimeType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the PostingTimeType interface.
 */
function instanceOfPostingTimeType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPostingTimeType = instanceOfPostingTimeType;
function PostingTimeTypeFromJSON(json) {
    return PostingTimeTypeFromJSONTyped(json, false);
}
exports.PostingTimeTypeFromJSON = PostingTimeTypeFromJSON;
function PostingTimeTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'time': !(0, runtime_1.exists)(json, 'time') ? undefined : json['time'],
        'timezone': !(0, runtime_1.exists)(json, 'timezone') ? undefined : json['timezone'],
    };
}
exports.PostingTimeTypeFromJSONTyped = PostingTimeTypeFromJSONTyped;
function PostingTimeTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'time': value.time,
        'timezone': value.timezone,
    };
}
exports.PostingTimeTypeToJSON = PostingTimeTypeToJSON;
