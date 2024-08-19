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
exports.HotelReservationsTypeToJSON = exports.HotelReservationsTypeFromJSONTyped = exports.HotelReservationsTypeFromJSON = exports.instanceOfHotelReservationsType = void 0;
const runtime_1 = require("../runtime");
const HotelReservationType_1 = require("./HotelReservationType");
/**
 * Check if a given object implements the HotelReservationsType interface.
 */
function instanceOfHotelReservationsType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfHotelReservationsType = instanceOfHotelReservationsType;
function HotelReservationsTypeFromJSON(json) {
    return HotelReservationsTypeFromJSONTyped(json, false);
}
exports.HotelReservationsTypeFromJSON = HotelReservationsTypeFromJSON;
function HotelReservationsTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'count': !(0, runtime_1.exists)(json, 'count') ? undefined : json['count'],
        'hasMore': !(0, runtime_1.exists)(json, 'hasMore') ? undefined : json['hasMore'],
        'reservation': !(0, runtime_1.exists)(json, 'reservation') ? undefined : (json['reservation'].map(HotelReservationType_1.HotelReservationTypeFromJSON)),
        'totalResults': !(0, runtime_1.exists)(json, 'totalResults') ? undefined : json['totalResults'],
    };
}
exports.HotelReservationsTypeFromJSONTyped = HotelReservationsTypeFromJSONTyped;
function HotelReservationsTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'count': value.count,
        'hasMore': value.hasMore,
        'reservation': value.reservation === undefined ? undefined : (value.reservation.map(HotelReservationType_1.HotelReservationTypeToJSON)),
        'totalResults': value.totalResults,
    };
}
exports.HotelReservationsTypeToJSON = HotelReservationsTypeToJSON;
