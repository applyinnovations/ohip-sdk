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
exports.BookingStatusHistoryTypeToJSON = exports.BookingStatusHistoryTypeFromJSONTyped = exports.BookingStatusHistoryTypeFromJSON = exports.instanceOfBookingStatusHistoryType = void 0;
const runtime_1 = require("../runtime");
const CodeDescriptionType_1 = require("./CodeDescriptionType");
/**
 * Check if a given object implements the BookingStatusHistoryType interface.
 */
function instanceOfBookingStatusHistoryType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBookingStatusHistoryType = instanceOfBookingStatusHistoryType;
function BookingStatusHistoryTypeFromJSON(json) {
    return BookingStatusHistoryTypeFromJSONTyped(json, false);
}
exports.BookingStatusHistoryTypeFromJSON = BookingStatusHistoryTypeFromJSON;
function BookingStatusHistoryTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'bookingStatus': !(0, runtime_1.exists)(json, 'bookingStatus') ? undefined : (0, CodeDescriptionType_1.CodeDescriptionTypeFromJSON)(json['bookingStatus']),
        'modifierId': !(0, runtime_1.exists)(json, 'modifierId') ? undefined : json['modifierId'],
        'modifyDateTime': !(0, runtime_1.exists)(json, 'modifyDateTime') ? undefined : json['modifyDateTime'],
        'sequence': !(0, runtime_1.exists)(json, 'sequence') ? undefined : json['sequence'],
    };
}
exports.BookingStatusHistoryTypeFromJSONTyped = BookingStatusHistoryTypeFromJSONTyped;
function BookingStatusHistoryTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'bookingStatus': (0, CodeDescriptionType_1.CodeDescriptionTypeToJSON)(value.bookingStatus),
        'modifierId': value.modifierId,
        'modifyDateTime': value.modifyDateTime,
        'sequence': value.sequence,
    };
}
exports.BookingStatusHistoryTypeToJSON = BookingStatusHistoryTypeToJSON;
