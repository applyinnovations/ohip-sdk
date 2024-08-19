"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostingGroupTypeToJSON = exports.PostingGroupTypeFromJSONTyped = exports.PostingGroupTypeFromJSON = exports.instanceOfPostingGroupType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the PostingGroupType interface.
 */
function instanceOfPostingGroupType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPostingGroupType = instanceOfPostingGroupType;
function PostingGroupTypeFromJSON(json) {
    return PostingGroupTypeFromJSONTyped(json, false);
}
exports.PostingGroupTypeFromJSON = PostingGroupTypeFromJSON;
function PostingGroupTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'groupCount': !(0, runtime_1.exists)(json, 'groupCount') ? undefined : json['groupCount'],
        'groupDescription': !(0, runtime_1.exists)(json, 'groupDescription') ? undefined : json['groupDescription'],
        'groupId': !(0, runtime_1.exists)(json, 'groupId') ? undefined : json['groupId'],
        'subGroupId': !(0, runtime_1.exists)(json, 'subGroupId') ? undefined : json['subGroupId'],
    };
}
exports.PostingGroupTypeFromJSONTyped = PostingGroupTypeFromJSONTyped;
function PostingGroupTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'groupCount': value.groupCount,
        'groupDescription': value.groupDescription,
        'groupId': value.groupId,
        'subGroupId': value.subGroupId,
    };
}
exports.PostingGroupTypeToJSON = PostingGroupTypeToJSON;
