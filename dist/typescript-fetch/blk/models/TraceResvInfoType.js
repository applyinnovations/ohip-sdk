"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraceResvInfoTypeToJSON = exports.TraceResvInfoTypeFromJSONTyped = exports.TraceResvInfoTypeFromJSON = exports.instanceOfTraceResvInfoType = void 0;
const runtime_1 = require("../runtime");
const ResGuestType_1 = require("./ResGuestType");
const TimeSpanType_1 = require("./TimeSpanType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the TraceResvInfoType interface.
 */
function instanceOfTraceResvInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTraceResvInfoType = instanceOfTraceResvInfoType;
function TraceResvInfoTypeFromJSON(json) {
    return TraceResvInfoTypeFromJSONTyped(json, false);
}
exports.TraceResvInfoTypeFromJSON = TraceResvInfoTypeFromJSON;
function TraceResvInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'reservationGuests': !(0, runtime_1.exists)(json, 'reservationGuests') ? undefined : (json['reservationGuests'].map(ResGuestType_1.ResGuestTypeFromJSON)),
        'reservationIdList': !(0, runtime_1.exists)(json, 'reservationIdList') ? undefined : (json['reservationIdList'].map(UniqueIDType_1.UniqueIDTypeFromJSON)),
        'reservationStatus': !(0, runtime_1.exists)(json, 'reservationStatus') ? undefined : json['reservationStatus'],
        'roomId': !(0, runtime_1.exists)(json, 'roomId') ? undefined : json['roomId'],
        'roomStatus': !(0, runtime_1.exists)(json, 'roomStatus') ? undefined : json['roomStatus'],
        'timeSpan': !(0, runtime_1.exists)(json, 'timeSpan') ? undefined : (0, TimeSpanType_1.TimeSpanTypeFromJSON)(json['timeSpan']),
    };
}
exports.TraceResvInfoTypeFromJSONTyped = TraceResvInfoTypeFromJSONTyped;
function TraceResvInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'hotelId': value.hotelId,
        'reservationGuests': value.reservationGuests === undefined ? undefined : (value.reservationGuests.map(ResGuestType_1.ResGuestTypeToJSON)),
        'reservationIdList': value.reservationIdList === undefined ? undefined : (value.reservationIdList.map(UniqueIDType_1.UniqueIDTypeToJSON)),
        'reservationStatus': value.reservationStatus,
        'roomId': value.roomId,
        'roomStatus': value.roomStatus,
        'timeSpan': (0, TimeSpanType_1.TimeSpanTypeToJSON)(value.timeSpan),
    };
}
exports.TraceResvInfoTypeToJSON = TraceResvInfoTypeToJSON;
