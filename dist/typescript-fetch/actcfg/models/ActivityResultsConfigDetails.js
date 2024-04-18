"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Activity Management API
 * APIs to cater for Activity Configuration functionality in OPERA Cloud. In this module you can retrieve, create, update Activity configuration codes, for example create a new Activity Type.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityResultsConfigDetailsToJSON = exports.ActivityResultsConfigDetailsFromJSONTyped = exports.ActivityResultsConfigDetailsFromJSON = exports.instanceOfActivityResultsConfigDetails = void 0;
const runtime_1 = require("../runtime");
const ActivityResultsConfigDetailType_1 = require("./ActivityResultsConfigDetailType");
const InstanceLink_1 = require("./InstanceLink");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the ActivityResultsConfigDetails interface.
 */
function instanceOfActivityResultsConfigDetails(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfActivityResultsConfigDetails = instanceOfActivityResultsConfigDetails;
function ActivityResultsConfigDetailsFromJSON(json) {
    return ActivityResultsConfigDetailsFromJSONTyped(json, false);
}
exports.ActivityResultsConfigDetailsFromJSON = ActivityResultsConfigDetailsFromJSON;
function ActivityResultsConfigDetailsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'activityResultsConfiguration': !(0, runtime_1.exists)(json, 'activityResultsConfiguration') ? undefined : (json['activityResultsConfiguration'].map(ActivityResultsConfigDetailType_1.ActivityResultsConfigDetailTypeFromJSON)),
        'count': !(0, runtime_1.exists)(json, 'count') ? undefined : json['count'],
        'hasMore': !(0, runtime_1.exists)(json, 'hasMore') ? undefined : json['hasMore'],
        'limit': !(0, runtime_1.exists)(json, 'limit') ? undefined : json['limit'],
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'offset': !(0, runtime_1.exists)(json, 'offset') ? undefined : json['offset'],
        'totalPages': !(0, runtime_1.exists)(json, 'totalPages') ? undefined : json['totalPages'],
        'totalResults': !(0, runtime_1.exists)(json, 'totalResults') ? undefined : json['totalResults'],
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.ActivityResultsConfigDetailsFromJSONTyped = ActivityResultsConfigDetailsFromJSONTyped;
function ActivityResultsConfigDetailsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'activityResultsConfiguration': value.activityResultsConfiguration === undefined ? undefined : (value.activityResultsConfiguration.map(ActivityResultsConfigDetailType_1.ActivityResultsConfigDetailTypeToJSON)),
        'count': value.count,
        'hasMore': value.hasMore,
        'limit': value.limit,
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'offset': value.offset,
        'totalPages': value.totalPages,
        'totalResults': value.totalResults,
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.ActivityResultsConfigDetailsToJSON = ActivityResultsConfigDetailsToJSON;