"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Asynchronous API
 * APIs to cater for Reservation Asynchronous functionality in OPERA Cloud. This includes viewing reservation data along with its revenue. <p>This API follows an async pattern where</p><ul><li>You make an initial request, which returns a Location header</li><li>You poll HEAD on the Location header returned to obtain the status of the process</li><li>Once the process completes HEAD will return in the Location header the URL that must be called to obtain the results of the process</li><li>You call the URL to obtain the results of the process</li></ul><br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationsDailySummarySearchTypeToJSON = exports.ReservationsDailySummarySearchTypeFromJSONTyped = exports.ReservationsDailySummarySearchTypeFromJSON = exports.instanceOfReservationsDailySummarySearchType = void 0;
const runtime_1 = require("../runtime");
const LastModifiedDateType_1 = require("./LastModifiedDateType");
const TimeSpanType_1 = require("./TimeSpanType");
/**
 * Check if a given object implements the ReservationsDailySummarySearchType interface.
 */
function instanceOfReservationsDailySummarySearchType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfReservationsDailySummarySearchType = instanceOfReservationsDailySummarySearchType;
function ReservationsDailySummarySearchTypeFromJSON(json) {
    return ReservationsDailySummarySearchTypeFromJSONTyped(json, false);
}
exports.ReservationsDailySummarySearchTypeFromJSON = ReservationsDailySummarySearchTypeFromJSON;
function ReservationsDailySummarySearchTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'lastModifiedDate': !(0, runtime_1.exists)(json, 'lastModifiedDate') ? undefined : (0, LastModifiedDateType_1.LastModifiedDateTypeFromJSON)(json['lastModifiedDate']),
        'timeSpan': !(0, runtime_1.exists)(json, 'timeSpan') ? undefined : (0, TimeSpanType_1.TimeSpanTypeFromJSON)(json['timeSpan']),
    };
}
exports.ReservationsDailySummarySearchTypeFromJSONTyped = ReservationsDailySummarySearchTypeFromJSONTyped;
function ReservationsDailySummarySearchTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'hotelId': value.hotelId,
        'lastModifiedDate': (0, LastModifiedDateType_1.LastModifiedDateTypeToJSON)(value.lastModifiedDate),
        'timeSpan': (0, TimeSpanType_1.TimeSpanTypeToJSON)(value.timeSpan),
    };
}
exports.ReservationsDailySummarySearchTypeToJSON = ReservationsDailySummarySearchTypeToJSON;
