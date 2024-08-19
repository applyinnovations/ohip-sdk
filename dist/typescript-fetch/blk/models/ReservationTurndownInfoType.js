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
exports.ReservationTurndownInfoTypeToJSON = exports.ReservationTurndownInfoTypeFromJSONTyped = exports.ReservationTurndownInfoTypeFromJSON = exports.instanceOfReservationTurndownInfoType = void 0;
const runtime_1 = require("../runtime");
const TurndownStatusType_1 = require("./TurndownStatusType");
/**
 * Check if a given object implements the ReservationTurndownInfoType interface.
 */
function instanceOfReservationTurndownInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfReservationTurndownInfoType = instanceOfReservationTurndownInfoType;
function ReservationTurndownInfoTypeFromJSON(json) {
    return ReservationTurndownInfoTypeFromJSONTyped(json, false);
}
exports.ReservationTurndownInfoTypeFromJSON = ReservationTurndownInfoTypeFromJSON;
function ReservationTurndownInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'allowed': !(0, runtime_1.exists)(json, 'allowed') ? undefined : json['allowed'],
        'status': !(0, runtime_1.exists)(json, 'status') ? undefined : (0, TurndownStatusType_1.TurndownStatusTypeFromJSON)(json['status']),
    };
}
exports.ReservationTurndownInfoTypeFromJSONTyped = ReservationTurndownInfoTypeFromJSONTyped;
function ReservationTurndownInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'allowed': value.allowed,
        'status': (0, TurndownStatusType_1.TurndownStatusTypeToJSON)(value.status),
    };
}
exports.ReservationTurndownInfoTypeToJSON = ReservationTurndownInfoTypeToJSON;
