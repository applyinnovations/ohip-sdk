"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationHistoryFutureInfoTypeToJSON = exports.ReservationHistoryFutureInfoTypeFromJSONTyped = exports.ReservationHistoryFutureInfoTypeFromJSON = exports.instanceOfReservationHistoryFutureInfoType = void 0;
const runtime_1 = require("../runtime");
const FutureListType_1 = require("./FutureListType");
const HistoryListType_1 = require("./HistoryListType");
/**
 * Check if a given object implements the ReservationHistoryFutureInfoType interface.
 */
function instanceOfReservationHistoryFutureInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfReservationHistoryFutureInfoType = instanceOfReservationHistoryFutureInfoType;
function ReservationHistoryFutureInfoTypeFromJSON(json) {
    return ReservationHistoryFutureInfoTypeFromJSONTyped(json, false);
}
exports.ReservationHistoryFutureInfoTypeFromJSON = ReservationHistoryFutureInfoTypeFromJSON;
function ReservationHistoryFutureInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'futureList': !(0, runtime_1.exists)(json, 'futureList') ? undefined : (0, FutureListType_1.FutureListTypeFromJSON)(json['futureList']),
        'historyList': !(0, runtime_1.exists)(json, 'historyList') ? undefined : (0, HistoryListType_1.HistoryListTypeFromJSON)(json['historyList']),
    };
}
exports.ReservationHistoryFutureInfoTypeFromJSONTyped = ReservationHistoryFutureInfoTypeFromJSONTyped;
function ReservationHistoryFutureInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'futureList': (0, FutureListType_1.FutureListTypeToJSON)(value.futureList),
        'historyList': (0, HistoryListType_1.HistoryListTypeToJSON)(value.historyList),
    };
}
exports.ReservationHistoryFutureInfoTypeToJSON = ReservationHistoryFutureInfoTypeToJSON;