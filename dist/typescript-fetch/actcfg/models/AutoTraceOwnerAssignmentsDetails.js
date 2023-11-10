"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Activity Management API
 * APIs to cater for Activity Configuration functionality in OPERA Cloud. In this module you can retrieve, create, update Activity configuration codes, for example create a new Activity Type.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoTraceOwnerAssignmentsDetailsToJSON = exports.AutoTraceOwnerAssignmentsDetailsFromJSONTyped = exports.AutoTraceOwnerAssignmentsDetailsFromJSON = exports.instanceOfAutoTraceOwnerAssignmentsDetails = void 0;
const runtime_1 = require("../runtime");
const AutoTraceOwnerAssignmentListType_1 = require("./AutoTraceOwnerAssignmentListType");
const Links_1 = require("./Links");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the AutoTraceOwnerAssignmentsDetails interface.
 */
function instanceOfAutoTraceOwnerAssignmentsDetails(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAutoTraceOwnerAssignmentsDetails = instanceOfAutoTraceOwnerAssignmentsDetails;
function AutoTraceOwnerAssignmentsDetailsFromJSON(json) {
    return AutoTraceOwnerAssignmentsDetailsFromJSONTyped(json, false);
}
exports.AutoTraceOwnerAssignmentsDetailsFromJSON = AutoTraceOwnerAssignmentsDetailsFromJSON;
function AutoTraceOwnerAssignmentsDetailsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'autoTraceOwnerAssignments': !(0, runtime_1.exists)(json, 'autoTraceOwnerAssignments') ? undefined : (0, AutoTraceOwnerAssignmentListType_1.AutoTraceOwnerAssignmentListTypeFromJSON)(json['autoTraceOwnerAssignments']),
        'count': !(0, runtime_1.exists)(json, 'count') ? undefined : json['count'],
        'hasMore': !(0, runtime_1.exists)(json, 'hasMore') ? undefined : json['hasMore'],
        'limit': !(0, runtime_1.exists)(json, 'limit') ? undefined : json['limit'],
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'offset': !(0, runtime_1.exists)(json, 'offset') ? undefined : json['offset'],
        'totalPages': !(0, runtime_1.exists)(json, 'totalPages') ? undefined : json['totalPages'],
        'totalResults': !(0, runtime_1.exists)(json, 'totalResults') ? undefined : json['totalResults'],
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.AutoTraceOwnerAssignmentsDetailsFromJSONTyped = AutoTraceOwnerAssignmentsDetailsFromJSONTyped;
function AutoTraceOwnerAssignmentsDetailsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'autoTraceOwnerAssignments': (0, AutoTraceOwnerAssignmentListType_1.AutoTraceOwnerAssignmentListTypeToJSON)(value.autoTraceOwnerAssignments),
        'count': value.count,
        'hasMore': value.hasMore,
        'limit': value.limit,
        'links': (0, Links_1.LinksToJSON)(value.links),
        'offset': value.offset,
        'totalPages': value.totalPages,
        'totalResults': value.totalResults,
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.AutoTraceOwnerAssignmentsDetailsToJSON = AutoTraceOwnerAssignmentsDetailsToJSON;
