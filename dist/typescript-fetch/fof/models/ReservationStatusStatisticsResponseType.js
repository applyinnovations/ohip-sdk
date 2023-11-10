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
exports.ReservationStatusStatisticsResponseTypeToJSON = exports.ReservationStatusStatisticsResponseTypeFromJSONTyped = exports.ReservationStatusStatisticsResponseTypeFromJSON = exports.instanceOfReservationStatusStatisticsResponseType = void 0;
const runtime_1 = require("../runtime");
const ReservationStatusStatisticsType_1 = require("./ReservationStatusStatisticsType");
/**
 * Check if a given object implements the ReservationStatusStatisticsResponseType interface.
 */
function instanceOfReservationStatusStatisticsResponseType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfReservationStatusStatisticsResponseType = instanceOfReservationStatusStatisticsResponseType;
function ReservationStatusStatisticsResponseTypeFromJSON(json) {
    return ReservationStatusStatisticsResponseTypeFromJSONTyped(json, false);
}
exports.ReservationStatusStatisticsResponseTypeFromJSON = ReservationStatusStatisticsResponseTypeFromJSON;
function ReservationStatusStatisticsResponseTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'reservationStatusStatistics': !(0, runtime_1.exists)(json, 'reservationStatusStatistics') ? undefined : (json['reservationStatusStatistics'].map(ReservationStatusStatisticsType_1.ReservationStatusStatisticsTypeFromJSON)),
    };
}
exports.ReservationStatusStatisticsResponseTypeFromJSONTyped = ReservationStatusStatisticsResponseTypeFromJSONTyped;
function ReservationStatusStatisticsResponseTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'reservationStatusStatistics': value.reservationStatusStatistics === undefined ? undefined : (value.reservationStatusStatistics.map(ReservationStatusStatisticsType_1.ReservationStatusStatisticsTypeToJSON)),
    };
}
exports.ReservationStatusStatisticsResponseTypeToJSON = ReservationStatusStatisticsResponseTypeToJSON;
