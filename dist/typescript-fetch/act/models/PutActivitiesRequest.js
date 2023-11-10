"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Activity API
 * APIs to cater for Sales Activity functionality in OPERA Cloud. <br /><br /> Activities provide you with an account management tool for managing daily tasks such as appointments, sales calls, contact follow-up, and so on.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutActivitiesRequestToJSON = exports.PutActivitiesRequestFromJSONTyped = exports.PutActivitiesRequestFromJSON = exports.instanceOfPutActivitiesRequest = void 0;
const runtime_1 = require("../runtime");
const ActivityListType_1 = require("./ActivityListType");
const Links_1 = require("./Links");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the PutActivitiesRequest interface.
 */
function instanceOfPutActivitiesRequest(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPutActivitiesRequest = instanceOfPutActivitiesRequest;
function PutActivitiesRequestFromJSON(json) {
    return PutActivitiesRequestFromJSONTyped(json, false);
}
exports.PutActivitiesRequestFromJSON = PutActivitiesRequestFromJSON;
function PutActivitiesRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'activitiesInformation': !(0, runtime_1.exists)(json, 'activitiesInformation') ? undefined : (0, ActivityListType_1.ActivityListTypeFromJSON)(json['activitiesInformation']),
        'activityDetailsEditFlag': !(0, runtime_1.exists)(json, 'activityDetailsEditFlag') ? undefined : json['activityDetailsEditFlag'],
        'completeMode': !(0, runtime_1.exists)(json, 'completeMode') ? undefined : json['completeMode'],
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'updateLinkedActivities': !(0, runtime_1.exists)(json, 'updateLinkedActivities') ? undefined : json['updateLinkedActivities'],
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.PutActivitiesRequestFromJSONTyped = PutActivitiesRequestFromJSONTyped;
function PutActivitiesRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'activitiesInformation': (0, ActivityListType_1.ActivityListTypeToJSON)(value.activitiesInformation),
        'activityDetailsEditFlag': value.activityDetailsEditFlag,
        'completeMode': value.completeMode,
        'links': (0, Links_1.LinksToJSON)(value.links),
        'updateLinkedActivities': value.updateLinkedActivities,
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.PutActivitiesRequestToJSON = PutActivitiesRequestToJSON;
