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
exports.RoomingListShareReservationTypeToJSON = exports.RoomingListShareReservationTypeFromJSONTyped = exports.RoomingListShareReservationTypeFromJSON = exports.instanceOfRoomingListShareReservationType = void 0;
const runtime_1 = require("../runtime");
const ShareDistributionInstructionType_1 = require("./ShareDistributionInstructionType");
const TimeSpanType_1 = require("./TimeSpanType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the RoomingListShareReservationType interface.
 */
function instanceOfRoomingListShareReservationType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRoomingListShareReservationType = instanceOfRoomingListShareReservationType;
function RoomingListShareReservationTypeFromJSON(json) {
    return RoomingListShareReservationTypeFromJSONTyped(json, false);
}
exports.RoomingListShareReservationTypeFromJSON = RoomingListShareReservationTypeFromJSON;
function RoomingListShareReservationTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'primaryShare': !(0, runtime_1.exists)(json, 'primaryShare') ? undefined : json['primaryShare'],
        'reservationId': !(0, runtime_1.exists)(json, 'reservationId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['reservationId']),
        'timeSpan': !(0, runtime_1.exists)(json, 'timeSpan') ? undefined : (0, TimeSpanType_1.TimeSpanTypeFromJSON)(json['timeSpan']),
        'typeOfRateAmount': !(0, runtime_1.exists)(json, 'typeOfRateAmount') ? undefined : (0, ShareDistributionInstructionType_1.ShareDistributionInstructionTypeFromJSON)(json['typeOfRateAmount']),
    };
}
exports.RoomingListShareReservationTypeFromJSONTyped = RoomingListShareReservationTypeFromJSONTyped;
function RoomingListShareReservationTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'primaryShare': value.primaryShare,
        'reservationId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.reservationId),
        'timeSpan': (0, TimeSpanType_1.TimeSpanTypeToJSON)(value.timeSpan),
        'typeOfRateAmount': (0, ShareDistributionInstructionType_1.ShareDistributionInstructionTypeToJSON)(value.typeOfRateAmount),
    };
}
exports.RoomingListShareReservationTypeToJSON = RoomingListShareReservationTypeToJSON;