"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemInfoTypeToJSON = exports.ItemInfoTypeFromJSONTyped = exports.ItemInfoTypeFromJSON = exports.instanceOfItemInfoType = void 0;
const runtime_1 = require("../runtime");
const TimeSpanType_1 = require("./TimeSpanType");
const TimeWindowType_1 = require("./TimeWindowType");
/**
 * Check if a given object implements the ItemInfoType interface.
 */
function instanceOfItemInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfItemInfoType = instanceOfItemInfoType;
function ItemInfoTypeFromJSON(json) {
    return ItemInfoTypeFromJSONTyped(json, false);
}
exports.ItemInfoTypeFromJSON = ItemInfoTypeFromJSON;
function ItemInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'availabilityPeriod': !(0, runtime_1.exists)(json, 'availabilityPeriod') ? undefined : (0, TimeWindowType_1.TimeWindowTypeFromJSON)(json['availabilityPeriod']),
        'blockDates': !(0, runtime_1.exists)(json, 'blockDates') ? undefined : (0, TimeSpanType_1.TimeSpanTypeFromJSON)(json['blockDates']),
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'defaultDuration': !(0, runtime_1.exists)(json, 'defaultDuration') ? undefined : json['defaultDuration'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'fixedCharge': !(0, runtime_1.exists)(json, 'fixedCharge') ? undefined : json['fixedCharge'],
        'itemHoldId': !(0, runtime_1.exists)(json, 'itemHoldId') ? undefined : json['itemHoldId'],
        'itemPool': !(0, runtime_1.exists)(json, 'itemPool') ? undefined : json['itemPool'],
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'outsideStay': !(0, runtime_1.exists)(json, 'outsideStay') ? undefined : json['outsideStay'],
        'quantity': !(0, runtime_1.exists)(json, 'quantity') ? undefined : json['quantity'],
        'requiredForBooking': !(0, runtime_1.exists)(json, 'requiredForBooking') ? undefined : json['requiredForBooking'],
        'sellInEvent': !(0, runtime_1.exists)(json, 'sellInEvent') ? undefined : json['sellInEvent'],
        'sellInReservation': !(0, runtime_1.exists)(json, 'sellInReservation') ? undefined : json['sellInReservation'],
        'sellSeparate': !(0, runtime_1.exists)(json, 'sellSeparate') ? undefined : json['sellSeparate'],
    };
}
exports.ItemInfoTypeFromJSONTyped = ItemInfoTypeFromJSONTyped;
function ItemInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'availabilityPeriod': (0, TimeWindowType_1.TimeWindowTypeToJSON)(value.availabilityPeriod),
        'blockDates': (0, TimeSpanType_1.TimeSpanTypeToJSON)(value.blockDates),
        'code': value.code,
        'defaultDuration': value.defaultDuration,
        'description': value.description,
        'fixedCharge': value.fixedCharge,
        'itemHoldId': value.itemHoldId,
        'itemPool': value.itemPool,
        'name': value.name,
        'outsideStay': value.outsideStay,
        'quantity': value.quantity,
        'requiredForBooking': value.requiredForBooking,
        'sellInEvent': value.sellInEvent,
        'sellInReservation': value.sellInReservation,
        'sellSeparate': value.sellSeparate,
    };
}
exports.ItemInfoTypeToJSON = ItemInfoTypeToJSON;
