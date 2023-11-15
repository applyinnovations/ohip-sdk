"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationQueueInformationTypeTimeSpanToJSON = exports.ReservationQueueInformationTypeTimeSpanFromJSONTyped = exports.ReservationQueueInformationTypeTimeSpanFromJSON = exports.instanceOfReservationQueueInformationTypeTimeSpan = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the ReservationQueueInformationTypeTimeSpan interface.
 */
function instanceOfReservationQueueInformationTypeTimeSpan(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfReservationQueueInformationTypeTimeSpan = instanceOfReservationQueueInformationTypeTimeSpan;
function ReservationQueueInformationTypeTimeSpanFromJSON(json) {
    return ReservationQueueInformationTypeTimeSpanFromJSONTyped(json, false);
}
exports.ReservationQueueInformationTypeTimeSpanFromJSON = ReservationQueueInformationTypeTimeSpanFromJSON;
function ReservationQueueInformationTypeTimeSpanFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'duration': !(0, runtime_1.exists)(json, 'duration') ? undefined : json['duration'],
        'durationInSeconds': !(0, runtime_1.exists)(json, 'durationInSeconds') ? undefined : json['durationInSeconds'],
        'endDate': !(0, runtime_1.exists)(json, 'endDate') ? undefined : json['endDate'],
        'startDate': !(0, runtime_1.exists)(json, 'startDate') ? undefined : json['startDate'],
    };
}
exports.ReservationQueueInformationTypeTimeSpanFromJSONTyped = ReservationQueueInformationTypeTimeSpanFromJSONTyped;
function ReservationQueueInformationTypeTimeSpanToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'duration': value.duration,
        'durationInSeconds': value.durationInSeconds,
        'endDate': value.endDate,
        'startDate': value.startDate,
    };
}
exports.ReservationQueueInformationTypeTimeSpanToJSON = ReservationQueueInformationTypeTimeSpanToJSON;
