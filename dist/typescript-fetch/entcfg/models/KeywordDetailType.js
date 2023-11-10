"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeywordDetailTypeToJSON = exports.KeywordDetailTypeFromJSONTyped = exports.KeywordDetailTypeFromJSON = exports.instanceOfKeywordDetailType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the KeywordDetailType interface.
 */
function instanceOfKeywordDetailType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfKeywordDetailType = instanceOfKeywordDetailType;
function KeywordDetailTypeFromJSON(json) {
    return KeywordDetailTypeFromJSONTyped(json, false);
}
exports.KeywordDetailTypeFromJSON = KeywordDetailTypeFromJSON;
function KeywordDetailTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'newKeyword': !(0, runtime_1.exists)(json, 'newKeyword') ? undefined : json['newKeyword'],
    };
}
exports.KeywordDetailTypeFromJSONTyped = KeywordDetailTypeFromJSONTyped;
function KeywordDetailTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'newKeyword': value.newKeyword,
    };
}
exports.KeywordDetailTypeToJSON = KeywordDetailTypeToJSON;
