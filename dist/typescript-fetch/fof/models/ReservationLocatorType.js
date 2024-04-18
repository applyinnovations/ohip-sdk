"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationLocatorTypeToJSON = exports.ReservationLocatorTypeFromJSONTyped = exports.ReservationLocatorTypeFromJSON = exports.instanceOfReservationLocatorType = void 0;
const runtime_1 = require("../runtime");
const DateRangeType_1 = require("./DateRangeType");
const DateTimeSpanType_1 = require("./DateTimeSpanType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the ReservationLocatorType interface.
 */
function instanceOfReservationLocatorType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfReservationLocatorType = instanceOfReservationLocatorType;
function ReservationLocatorTypeFromJSON(json) {
    return ReservationLocatorTypeFromJSONTyped(json, false);
}
exports.ReservationLocatorTypeFromJSON = ReservationLocatorTypeFromJSON;
function ReservationLocatorTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'dateSpan': !(0, runtime_1.exists)(json, 'dateSpan') ? undefined : (0, DateRangeType_1.DateRangeTypeFromJSON)(json['dateSpan']),
        'locatorBy': !(0, runtime_1.exists)(json, 'locatorBy') ? undefined : json['locatorBy'],
        'locatorId': !(0, runtime_1.exists)(json, 'locatorId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['locatorId']),
        'locatorOn': !(0, runtime_1.exists)(json, 'locatorOn') ? undefined : json['locatorOn'],
        'locatorText': !(0, runtime_1.exists)(json, 'locatorText') ? undefined : json['locatorText'],
        'timeSpan': !(0, runtime_1.exists)(json, 'timeSpan') ? undefined : (0, DateTimeSpanType_1.DateTimeSpanTypeFromJSON)(json['timeSpan']),
    };
}
exports.ReservationLocatorTypeFromJSONTyped = ReservationLocatorTypeFromJSONTyped;
function ReservationLocatorTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'dateSpan': (0, DateRangeType_1.DateRangeTypeToJSON)(value.dateSpan),
        'locatorBy': value.locatorBy,
        'locatorId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.locatorId),
        'locatorOn': value.locatorOn,
        'locatorText': value.locatorText,
        'timeSpan': (0, DateTimeSpanType_1.DateTimeSpanTypeToJSON)(value.timeSpan),
    };
}
exports.ReservationLocatorTypeToJSON = ReservationLocatorTypeToJSON;