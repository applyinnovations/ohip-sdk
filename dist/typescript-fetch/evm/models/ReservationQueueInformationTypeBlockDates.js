"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationQueueInformationTypeBlockDatesToJSON = exports.ReservationQueueInformationTypeBlockDatesFromJSONTyped = exports.ReservationQueueInformationTypeBlockDatesFromJSON = exports.instanceOfReservationQueueInformationTypeBlockDates = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the ReservationQueueInformationTypeBlockDates interface.
 */
function instanceOfReservationQueueInformationTypeBlockDates(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfReservationQueueInformationTypeBlockDates = instanceOfReservationQueueInformationTypeBlockDates;
function ReservationQueueInformationTypeBlockDatesFromJSON(json) {
    return ReservationQueueInformationTypeBlockDatesFromJSONTyped(json, false);
}
exports.ReservationQueueInformationTypeBlockDatesFromJSON = ReservationQueueInformationTypeBlockDatesFromJSON;
function ReservationQueueInformationTypeBlockDatesFromJSONTyped(json, ignoreDiscriminator) {
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
exports.ReservationQueueInformationTypeBlockDatesFromJSONTyped = ReservationQueueInformationTypeBlockDatesFromJSONTyped;
function ReservationQueueInformationTypeBlockDatesToJSON(value) {
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
exports.ReservationQueueInformationTypeBlockDatesToJSON = ReservationQueueInformationTypeBlockDatesToJSON;