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
exports.ReservationDepositTypeToJSON = exports.ReservationDepositTypeFromJSONTyped = exports.ReservationDepositTypeFromJSON = exports.instanceOfReservationDepositType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the ReservationDepositType interface.
 */
function instanceOfReservationDepositType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfReservationDepositType = instanceOfReservationDepositType;
function ReservationDepositTypeFromJSON(json) {
    return ReservationDepositTypeFromJSONTyped(json, false);
}
exports.ReservationDepositTypeFromJSON = ReservationDepositTypeFromJSON;
function ReservationDepositTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amountOwed': !(0, runtime_1.exists)(json, 'amountOwed') ? undefined : json['amountOwed'],
        'amountPaid': !(0, runtime_1.exists)(json, 'amountPaid') ? undefined : json['amountPaid'],
        'amountRequired': !(0, runtime_1.exists)(json, 'amountRequired') ? undefined : json['amountRequired'],
        'dueDate': !(0, runtime_1.exists)(json, 'dueDate') ? undefined : json['dueDate'],
        'hasOutstanding': !(0, runtime_1.exists)(json, 'hasOutstanding') ? undefined : json['hasOutstanding'],
        'hasPaid': !(0, runtime_1.exists)(json, 'hasPaid') ? undefined : json['hasPaid'],
        'postingDate': !(0, runtime_1.exists)(json, 'postingDate') ? undefined : json['postingDate'],
    };
}
exports.ReservationDepositTypeFromJSONTyped = ReservationDepositTypeFromJSONTyped;
function ReservationDepositTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'amountOwed': value.amountOwed,
        'amountPaid': value.amountPaid,
        'amountRequired': value.amountRequired,
        'dueDate': value.dueDate,
        'hasOutstanding': value.hasOutstanding,
        'hasPaid': value.hasPaid,
        'postingDate': value.postingDate,
    };
}
exports.ReservationDepositTypeToJSON = ReservationDepositTypeToJSON;