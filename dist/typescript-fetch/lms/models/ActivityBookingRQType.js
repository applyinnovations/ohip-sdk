"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Leisure Management API
 * APIs to cater for external Leisure Management functionality integrated with OPERA Cloud.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityBookingRQTypeToJSON = exports.ActivityBookingRQTypeFromJSONTyped = exports.ActivityBookingRQTypeFromJSON = exports.instanceOfActivityBookingRQType = void 0;
const runtime_1 = require("../runtime");
const ActivityList_1 = require("./ActivityList");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the ActivityBookingRQType interface.
 */
function instanceOfActivityBookingRQType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfActivityBookingRQType = instanceOfActivityBookingRQType;
function ActivityBookingRQTypeFromJSON(json) {
    return ActivityBookingRQTypeFromJSONTyped(json, false);
}
exports.ActivityBookingRQTypeFromJSON = ActivityBookingRQTypeFromJSON;
function ActivityBookingRQTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'activities': !(0, runtime_1.exists)(json, 'activities') ? undefined : (0, ActivityList_1.ActivityListFromJSON)(json['activities']),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'profileId': !(0, runtime_1.exists)(json, 'profileId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['profileId']),
        'reservationId': !(0, runtime_1.exists)(json, 'reservationId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['reservationId']),
    };
}
exports.ActivityBookingRQTypeFromJSONTyped = ActivityBookingRQTypeFromJSONTyped;
function ActivityBookingRQTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'activities': (0, ActivityList_1.ActivityListToJSON)(value.activities),
        'hotelId': value.hotelId,
        'profileId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.profileId),
        'reservationId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.reservationId),
    };
}
exports.ActivityBookingRQTypeToJSON = ActivityBookingRQTypeToJSON;