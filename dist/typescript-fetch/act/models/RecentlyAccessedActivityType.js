"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Activity API
 * APIs to cater for Sales Activity functionality in OPERA Cloud. <br /><br /> Activities provide you with an account management tool for managing daily tasks such as appointments, sales calls, contact follow-up, and so on.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecentlyAccessedActivityTypeToJSON = exports.RecentlyAccessedActivityTypeFromJSONTyped = exports.RecentlyAccessedActivityTypeFromJSON = exports.instanceOfRecentlyAccessedActivityType = void 0;
const runtime_1 = require("../runtime");
const ActivityId_1 = require("./ActivityId");
const TimeSpanType_1 = require("./TimeSpanType");
/**
 * Check if a given object implements the RecentlyAccessedActivityType interface.
 */
function instanceOfRecentlyAccessedActivityType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRecentlyAccessedActivityType = instanceOfRecentlyAccessedActivityType;
function RecentlyAccessedActivityTypeFromJSON(json) {
    return RecentlyAccessedActivityTypeFromJSONTyped(json, false);
}
exports.RecentlyAccessedActivityTypeFromJSON = RecentlyAccessedActivityTypeFromJSON;
function RecentlyAccessedActivityTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accessDate': !(0, runtime_1.exists)(json, 'accessDate') ? undefined : json['accessDate'],
        'activityIdList': !(0, runtime_1.exists)(json, 'activityIdList') ? undefined : (json['activityIdList'].map(ActivityId_1.ActivityIdFromJSON)),
        'activityOwnerCode': !(0, runtime_1.exists)(json, 'activityOwnerCode') ? undefined : json['activityOwnerCode'],
        'activityTypeDescription': !(0, runtime_1.exists)(json, 'activityTypeDescription') ? undefined : json['activityTypeDescription'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'timeSpan': !(0, runtime_1.exists)(json, 'timeSpan') ? undefined : (0, TimeSpanType_1.TimeSpanTypeFromJSON)(json['timeSpan']),
    };
}
exports.RecentlyAccessedActivityTypeFromJSONTyped = RecentlyAccessedActivityTypeFromJSONTyped;
function RecentlyAccessedActivityTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'accessDate': value.accessDate,
        'activityIdList': value.activityIdList === undefined ? undefined : (value.activityIdList.map(ActivityId_1.ActivityIdToJSON)),
        'activityOwnerCode': value.activityOwnerCode,
        'activityTypeDescription': value.activityTypeDescription,
        'hotelId': value.hotelId,
        'timeSpan': (0, TimeSpanType_1.TimeSpanTypeToJSON)(value.timeSpan),
    };
}
exports.RecentlyAccessedActivityTypeToJSON = RecentlyAccessedActivityTypeToJSON;
