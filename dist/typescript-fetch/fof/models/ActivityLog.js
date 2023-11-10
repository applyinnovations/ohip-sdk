"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityLogToJSON = exports.ActivityLogFromJSONTyped = exports.ActivityLogFromJSON = exports.instanceOfActivityLog = void 0;
const runtime_1 = require("../runtime");
const ActivityLogListType_1 = require("./ActivityLogListType");
const Links_1 = require("./Links");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the ActivityLog interface.
 */
function instanceOfActivityLog(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfActivityLog = instanceOfActivityLog;
function ActivityLogFromJSON(json) {
    return ActivityLogFromJSONTyped(json, false);
}
exports.ActivityLogFromJSON = ActivityLogFromJSON;
function ActivityLogFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'activityLogDetails': !(0, runtime_1.exists)(json, 'activityLogDetails') ? undefined : (0, ActivityLogListType_1.ActivityLogListTypeFromJSON)(json['activityLogDetails']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.ActivityLogFromJSONTyped = ActivityLogFromJSONTyped;
function ActivityLogToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'activityLogDetails': (0, ActivityLogListType_1.ActivityLogListTypeToJSON)(value.activityLogDetails),
        'links': (0, Links_1.LinksToJSON)(value.links),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.ActivityLogToJSON = ActivityLogToJSON;
