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
exports.ReservationQueueStatisticsTypeToJSON = exports.ReservationQueueStatisticsTypeFromJSONTyped = exports.ReservationQueueStatisticsTypeFromJSON = exports.instanceOfReservationQueueStatisticsType = void 0;
const runtime_1 = require("../runtime");
const ReservationQueueRoomTypeStatisticsType_1 = require("./ReservationQueueRoomTypeStatisticsType");
/**
 * Check if a given object implements the ReservationQueueStatisticsType interface.
 */
function instanceOfReservationQueueStatisticsType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfReservationQueueStatisticsType = instanceOfReservationQueueStatisticsType;
function ReservationQueueStatisticsTypeFromJSON(json) {
    return ReservationQueueStatisticsTypeFromJSONTyped(json, false);
}
exports.ReservationQueueStatisticsTypeFromJSON = ReservationQueueStatisticsTypeFromJSON;
function ReservationQueueStatisticsTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'averageQueueTimeCurrentReservations': !(0, runtime_1.exists)(json, 'averageQueueTimeCurrentReservations') ? undefined : json['averageQueueTimeCurrentReservations'],
        'averageQueueTimeToCheckIn': !(0, runtime_1.exists)(json, 'averageQueueTimeToCheckIn') ? undefined : json['averageQueueTimeToCheckIn'],
        'roomType': !(0, runtime_1.exists)(json, 'roomType') ? undefined : (json['roomType'].map(ReservationQueueRoomTypeStatisticsType_1.ReservationQueueRoomTypeStatisticsTypeFromJSON)),
    };
}
exports.ReservationQueueStatisticsTypeFromJSONTyped = ReservationQueueStatisticsTypeFromJSONTyped;
function ReservationQueueStatisticsTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'averageQueueTimeCurrentReservations': value.averageQueueTimeCurrentReservations,
        'averageQueueTimeToCheckIn': value.averageQueueTimeToCheckIn,
        'roomType': value.roomType === undefined ? undefined : (value.roomType.map(ReservationQueueRoomTypeStatisticsType_1.ReservationQueueRoomTypeStatisticsTypeToJSON)),
    };
}
exports.ReservationQueueStatisticsTypeToJSON = ReservationQueueStatisticsTypeToJSON;
