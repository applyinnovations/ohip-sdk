"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StayHistoryListTypeToJSON = exports.StayHistoryListTypeFromJSONTyped = exports.StayHistoryListTypeFromJSON = exports.instanceOfStayHistoryListType = void 0;
const runtime_1 = require("../runtime");
const StayReservationInfoType_1 = require("./StayReservationInfoType");
/**
 * Check if a given object implements the StayHistoryListType interface.
 */
function instanceOfStayHistoryListType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfStayHistoryListType = instanceOfStayHistoryListType;
function StayHistoryListTypeFromJSON(json) {
    return StayHistoryListTypeFromJSONTyped(json, false);
}
exports.StayHistoryListTypeFromJSON = StayHistoryListTypeFromJSON;
function StayHistoryListTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'count': !(0, runtime_1.exists)(json, 'count') ? undefined : json['count'],
        'hasMore': !(0, runtime_1.exists)(json, 'hasMore') ? undefined : json['hasMore'],
        'reservationInfo': !(0, runtime_1.exists)(json, 'reservationInfo') ? undefined : (json['reservationInfo'].map(StayReservationInfoType_1.StayReservationInfoTypeFromJSON)),
        'totalResults': !(0, runtime_1.exists)(json, 'totalResults') ? undefined : json['totalResults'],
    };
}
exports.StayHistoryListTypeFromJSONTyped = StayHistoryListTypeFromJSONTyped;
function StayHistoryListTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'count': value.count,
        'hasMore': value.hasMore,
        'reservationInfo': value.reservationInfo === undefined ? undefined : (value.reservationInfo.map(StayReservationInfoType_1.StayReservationInfoTypeToJSON)),
        'totalResults': value.totalResults,
    };
}
exports.StayHistoryListTypeToJSON = StayHistoryListTypeToJSON;
