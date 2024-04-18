"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubAllocationsTypeToJSON = exports.SubAllocationsTypeFromJSONTyped = exports.SubAllocationsTypeFromJSON = exports.instanceOfSubAllocationsType = void 0;
const runtime_1 = require("../runtime");
const SubAllocationsTypeSubAllocationInfoInner_1 = require("./SubAllocationsTypeSubAllocationInfoInner");
/**
 * Check if a given object implements the SubAllocationsType interface.
 */
function instanceOfSubAllocationsType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfSubAllocationsType = instanceOfSubAllocationsType;
function SubAllocationsTypeFromJSON(json) {
    return SubAllocationsTypeFromJSONTyped(json, false);
}
exports.SubAllocationsTypeFromJSON = SubAllocationsTypeFromJSON;
function SubAllocationsTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'count': !(0, runtime_1.exists)(json, 'count') ? undefined : json['count'],
        'hasMore': !(0, runtime_1.exists)(json, 'hasMore') ? undefined : json['hasMore'],
        'subAllocationInfo': !(0, runtime_1.exists)(json, 'subAllocationInfo') ? undefined : (json['subAllocationInfo'].map(SubAllocationsTypeSubAllocationInfoInner_1.SubAllocationsTypeSubAllocationInfoInnerFromJSON)),
        'totalResults': !(0, runtime_1.exists)(json, 'totalResults') ? undefined : json['totalResults'],
    };
}
exports.SubAllocationsTypeFromJSONTyped = SubAllocationsTypeFromJSONTyped;
function SubAllocationsTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'count': value.count,
        'hasMore': value.hasMore,
        'subAllocationInfo': value.subAllocationInfo === undefined ? undefined : (value.subAllocationInfo.map(SubAllocationsTypeSubAllocationInfoInner_1.SubAllocationsTypeSubAllocationInfoInnerToJSON)),
        'totalResults': value.totalResults,
    };
}
exports.SubAllocationsTypeToJSON = SubAllocationsTypeToJSON;