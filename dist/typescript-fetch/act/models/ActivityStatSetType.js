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
exports.ActivityStatSetTypeToJSON = exports.ActivityStatSetTypeFromJSONTyped = exports.ActivityStatSetTypeFromJSON = exports.instanceOfActivityStatSetType = void 0;
const runtime_1 = require("../runtime");
const ActivityStatType_1 = require("./ActivityStatType");
/**
 * Check if a given object implements the ActivityStatSetType interface.
 */
function instanceOfActivityStatSetType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfActivityStatSetType = instanceOfActivityStatSetType;
function ActivityStatSetTypeFromJSON(json) {
    return ActivityStatSetTypeFromJSONTyped(json, false);
}
exports.ActivityStatSetTypeFromJSON = ActivityStatSetTypeFromJSON;
function ActivityStatSetTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'end': !(0, runtime_1.exists)(json, 'end') ? undefined : (new Date(json['end'])),
        'owner': !(0, runtime_1.exists)(json, 'owner') ? undefined : json['owner'],
        'start': !(0, runtime_1.exists)(json, 'start') ? undefined : (new Date(json['start'])),
        'stat': !(0, runtime_1.exists)(json, 'stat') ? undefined : (json['stat'].map(ActivityStatType_1.ActivityStatTypeFromJSON)),
    };
}
exports.ActivityStatSetTypeFromJSONTyped = ActivityStatSetTypeFromJSONTyped;
function ActivityStatSetTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'end': value.end === undefined ? undefined : (value.end.toISOString().substr(0, 10)),
        'owner': value.owner,
        'start': value.start === undefined ? undefined : (value.start.toISOString().substr(0, 10)),
        'stat': value.stat === undefined ? undefined : (value.stat.map(ActivityStatType_1.ActivityStatTypeToJSON)),
    };
}
exports.ActivityStatSetTypeToJSON = ActivityStatSetTypeToJSON;
