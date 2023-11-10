"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostHousekeepingAttendantsRequestToJSON = exports.PostHousekeepingAttendantsRequestFromJSONTyped = exports.PostHousekeepingAttendantsRequestFromJSON = exports.instanceOfPostHousekeepingAttendantsRequest = void 0;
const runtime_1 = require("../runtime");
const HousekeepingAttendantsConfigType_1 = require("./HousekeepingAttendantsConfigType");
const Links_1 = require("./Links");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the PostHousekeepingAttendantsRequest interface.
 */
function instanceOfPostHousekeepingAttendantsRequest(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPostHousekeepingAttendantsRequest = instanceOfPostHousekeepingAttendantsRequest;
function PostHousekeepingAttendantsRequestFromJSON(json) {
    return PostHousekeepingAttendantsRequestFromJSONTyped(json, false);
}
exports.PostHousekeepingAttendantsRequestFromJSON = PostHousekeepingAttendantsRequestFromJSON;
function PostHousekeepingAttendantsRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'attendants': !(0, runtime_1.exists)(json, 'attendants') ? undefined : (0, HousekeepingAttendantsConfigType_1.HousekeepingAttendantsConfigTypeFromJSON)(json['attendants']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.PostHousekeepingAttendantsRequestFromJSONTyped = PostHousekeepingAttendantsRequestFromJSONTyped;
function PostHousekeepingAttendantsRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'attendants': (0, HousekeepingAttendantsConfigType_1.HousekeepingAttendantsConfigTypeToJSON)(value.attendants),
        'links': (0, Links_1.LinksToJSON)(value.links),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.PostHousekeepingAttendantsRequestToJSON = PostHousekeepingAttendantsRequestToJSON;
