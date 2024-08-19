"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryListTypeToJSON = exports.HistoryListTypeFromJSONTyped = exports.HistoryListTypeFromJSON = exports.instanceOfHistoryListType = void 0;
const runtime_1 = require("../runtime");
const ReservationInfoType_1 = require("./ReservationInfoType");
/**
 * Check if a given object implements the HistoryListType interface.
 */
function instanceOfHistoryListType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfHistoryListType = instanceOfHistoryListType;
function HistoryListTypeFromJSON(json) {
    return HistoryListTypeFromJSONTyped(json, false);
}
exports.HistoryListTypeFromJSON = HistoryListTypeFromJSON;
function HistoryListTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'reservationInfo': !(0, runtime_1.exists)(json, 'reservationInfo') ? undefined : (json['reservationInfo'].map(ReservationInfoType_1.ReservationInfoTypeFromJSON)),
        'hasMore': !(0, runtime_1.exists)(json, 'hasMore') ? undefined : json['hasMore'],
        'totalResults': !(0, runtime_1.exists)(json, 'totalResults') ? undefined : json['totalResults'],
        'count': !(0, runtime_1.exists)(json, 'count') ? undefined : json['count'],
    };
}
exports.HistoryListTypeFromJSONTyped = HistoryListTypeFromJSONTyped;
function HistoryListTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'reservationInfo': value.reservationInfo === undefined ? undefined : (value.reservationInfo.map(ReservationInfoType_1.ReservationInfoTypeToJSON)),
        'hasMore': value.hasMore,
        'totalResults': value.totalResults,
        'count': value.count,
    };
}
exports.HistoryListTypeToJSON = HistoryListTypeToJSON;
