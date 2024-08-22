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
exports.EventMenuTypeToJSON = exports.EventMenuTypeFromJSONTyped = exports.EventMenuTypeFromJSON = exports.instanceOfEventMenuType = void 0;
const runtime_1 = require("../runtime");
const EventMenuBasicInfoType_1 = require("./EventMenuBasicInfoType");
const EventMenuItemType_1 = require("./EventMenuItemType");
const EventMenuRevenueType_1 = require("./EventMenuRevenueType");
/**
 * Check if a given object implements the EventMenuType interface.
 */
function instanceOfEventMenuType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfEventMenuType = instanceOfEventMenuType;
function EventMenuTypeFromJSON(json) {
    return EventMenuTypeFromJSONTyped(json, false);
}
exports.EventMenuTypeFromJSON = EventMenuTypeFromJSON;
function EventMenuTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'basicInfo': !(0, runtime_1.exists)(json, 'basicInfo') ? undefined : (0, EventMenuBasicInfoType_1.EventMenuBasicInfoTypeFromJSON)(json['basicInfo']),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'menuItems': !(0, runtime_1.exists)(json, 'menuItems') ? undefined : (json['menuItems'].map(EventMenuItemType_1.EventMenuItemTypeFromJSON)),
        'revenues': !(0, runtime_1.exists)(json, 'revenues') ? undefined : (json['revenues'].map(EventMenuRevenueType_1.EventMenuRevenueTypeFromJSON)),
    };
}
exports.EventMenuTypeFromJSONTyped = EventMenuTypeFromJSONTyped;
function EventMenuTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'basicInfo': (0, EventMenuBasicInfoType_1.EventMenuBasicInfoTypeToJSON)(value.basicInfo),
        'hotelId': value.hotelId,
        'menuItems': value.menuItems === undefined ? undefined : (value.menuItems.map(EventMenuItemType_1.EventMenuItemTypeToJSON)),
        'revenues': value.revenues === undefined ? undefined : (value.revenues.map(EventMenuRevenueType_1.EventMenuRevenueTypeToJSON)),
    };
}
exports.EventMenuTypeToJSON = EventMenuTypeToJSON;
