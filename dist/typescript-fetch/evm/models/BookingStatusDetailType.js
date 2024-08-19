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
exports.BookingStatusDetailTypeToJSON = exports.BookingStatusDetailTypeFromJSONTyped = exports.BookingStatusDetailTypeFromJSON = exports.instanceOfBookingStatusDetailType = void 0;
const runtime_1 = require("../runtime");
const BlockStatusTypeType_1 = require("./BlockStatusTypeType");
const BookingStatusType_1 = require("./BookingStatusType");
/**
 * Check if a given object implements the BookingStatusDetailType interface.
 */
function instanceOfBookingStatusDetailType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBookingStatusDetailType = instanceOfBookingStatusDetailType;
function BookingStatusDetailTypeFromJSON(json) {
    return BookingStatusDetailTypeFromJSONTyped(json, false);
}
exports.BookingStatusDetailTypeFromJSON = BookingStatusDetailTypeFromJSON;
function BookingStatusDetailTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'bookingStatus': !(0, runtime_1.exists)(json, 'bookingStatus') ? undefined : (0, BookingStatusType_1.BookingStatusTypeFromJSON)(json['bookingStatus']),
        'catStatusType': !(0, runtime_1.exists)(json, 'catStatusType') ? undefined : (0, BlockStatusTypeType_1.BlockStatusTypeTypeFromJSON)(json['catStatusType']),
        'cateringDeductInventory': !(0, runtime_1.exists)(json, 'cateringDeductInventory') ? undefined : json['cateringDeductInventory'],
        'deductInventory': !(0, runtime_1.exists)(json, 'deductInventory') ? undefined : json['deductInventory'],
        'returnToInventory': !(0, runtime_1.exists)(json, 'returnToInventory') ? undefined : json['returnToInventory'],
        'statusType': !(0, runtime_1.exists)(json, 'statusType') ? undefined : (0, BlockStatusTypeType_1.BlockStatusTypeTypeFromJSON)(json['statusType']),
    };
}
exports.BookingStatusDetailTypeFromJSONTyped = BookingStatusDetailTypeFromJSONTyped;
function BookingStatusDetailTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'bookingStatus': (0, BookingStatusType_1.BookingStatusTypeToJSON)(value.bookingStatus),
        'catStatusType': (0, BlockStatusTypeType_1.BlockStatusTypeTypeToJSON)(value.catStatusType),
        'cateringDeductInventory': value.cateringDeductInventory,
        'deductInventory': value.deductInventory,
        'returnToInventory': value.returnToInventory,
        'statusType': (0, BlockStatusTypeType_1.BlockStatusTypeTypeToJSON)(value.statusType),
    };
}
exports.BookingStatusDetailTypeToJSON = BookingStatusDetailTypeToJSON;
