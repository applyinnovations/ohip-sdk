"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelCalendarDayTypeToJSON = exports.HotelCalendarDayTypeFromJSONTyped = exports.HotelCalendarDayTypeFromJSON = exports.instanceOfHotelCalendarDayType = void 0;
const runtime_1 = require("../runtime");
const HotelCalendarDayTypeType_1 = require("./HotelCalendarDayTypeType");
const HotelCalendarEventsType_1 = require("./HotelCalendarEventsType");
/**
 * Check if a given object implements the HotelCalendarDayType interface.
 */
function instanceOfHotelCalendarDayType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfHotelCalendarDayType = instanceOfHotelCalendarDayType;
function HotelCalendarDayTypeFromJSON(json) {
    return HotelCalendarDayTypeFromJSONTyped(json, false);
}
exports.HotelCalendarDayTypeFromJSON = HotelCalendarDayTypeFromJSON;
function HotelCalendarDayTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'date': !(0, runtime_1.exists)(json, 'date') ? undefined : (new Date(json['date'])),
        'dayType': !(0, runtime_1.exists)(json, 'dayType') ? undefined : (0, HotelCalendarDayTypeType_1.HotelCalendarDayTypeTypeFromJSON)(json['dayType']),
        'events': !(0, runtime_1.exists)(json, 'events') ? undefined : (0, HotelCalendarEventsType_1.HotelCalendarEventsTypeFromJSON)(json['events']),
    };
}
exports.HotelCalendarDayTypeFromJSONTyped = HotelCalendarDayTypeFromJSONTyped;
function HotelCalendarDayTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'date': value.date === undefined ? undefined : (value.date.toISOString().substring(0, 10)),
        'dayType': (0, HotelCalendarDayTypeType_1.HotelCalendarDayTypeTypeToJSON)(value.dayType),
        'events': (0, HotelCalendarEventsType_1.HotelCalendarEventsTypeToJSON)(value.events),
    };
}
exports.HotelCalendarDayTypeToJSON = HotelCalendarDayTypeToJSON;