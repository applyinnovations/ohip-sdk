"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Rotation Service API
 * APIs to facilitate Room Rotation functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RESTPaginationGroupToJSON = exports.RESTPaginationGroupFromJSONTyped = exports.RESTPaginationGroupFromJSON = exports.instanceOfRESTPaginationGroup = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the RESTPaginationGroup interface.
 */
function instanceOfRESTPaginationGroup(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRESTPaginationGroup = instanceOfRESTPaginationGroup;
function RESTPaginationGroupFromJSON(json) {
    return RESTPaginationGroupFromJSONTyped(json, false);
}
exports.RESTPaginationGroupFromJSON = RESTPaginationGroupFromJSON;
function RESTPaginationGroupFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'count': !(0, runtime_1.exists)(json, 'count') ? undefined : json['count'],
        'hasMore': !(0, runtime_1.exists)(json, 'hasMore') ? undefined : json['hasMore'],
        'limit': !(0, runtime_1.exists)(json, 'limit') ? undefined : json['limit'],
        'offset': !(0, runtime_1.exists)(json, 'offset') ? undefined : json['offset'],
        'totalResults': !(0, runtime_1.exists)(json, 'totalResults') ? undefined : json['totalResults'],
    };
}
exports.RESTPaginationGroupFromJSONTyped = RESTPaginationGroupFromJSONTyped;
function RESTPaginationGroupToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'count': value.count,
        'hasMore': value.hasMore,
        'limit': value.limit,
        'offset': value.offset,
        'totalResults': value.totalResults,
    };
}
exports.RESTPaginationGroupToJSON = RESTPaginationGroupToJSON;