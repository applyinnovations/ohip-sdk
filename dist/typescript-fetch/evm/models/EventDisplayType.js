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
exports.EventDisplayTypeToJSON = exports.EventDisplayTypeFromJSONTyped = exports.EventDisplayTypeFromJSON = exports.instanceOfEventDisplayType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the EventDisplayType interface.
 */
function instanceOfEventDisplayType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfEventDisplayType = instanceOfEventDisplayType;
function EventDisplayTypeFromJSON(json) {
    return EventDisplayTypeFromJSONTyped(json, false);
}
exports.EventDisplayTypeFromJSON = EventDisplayTypeFromJSON;
function EventDisplayTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'alternateMasterYn': !(0, runtime_1.exists)(json, 'alternateMasterYn') ? undefined : json['alternateMasterYn'],
        'bookingName': !(0, runtime_1.exists)(json, 'bookingName') ? undefined : json['bookingName'],
        'cateringOnlyYn': !(0, runtime_1.exists)(json, 'cateringOnlyYn') ? undefined : json['cateringOnlyYn'],
        'dontMoveYn': !(0, runtime_1.exists)(json, 'dontMoveYn') ? undefined : json['dontMoveYn'],
        'exclusiveYn': !(0, runtime_1.exists)(json, 'exclusiveYn') ? undefined : json['exclusiveYn'],
        'loudEventYn': !(0, runtime_1.exists)(json, 'loudEventYn') ? undefined : json['loudEventYn'],
        'masterYn': !(0, runtime_1.exists)(json, 'masterYn') ? undefined : json['masterYn'],
        'sharedYn': !(0, runtime_1.exists)(json, 'sharedYn') ? undefined : json['sharedYn'],
        'waitlistedYn': !(0, runtime_1.exists)(json, 'waitlistedYn') ? undefined : json['waitlistedYn'],
    };
}
exports.EventDisplayTypeFromJSONTyped = EventDisplayTypeFromJSONTyped;
function EventDisplayTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'alternateMasterYn': value.alternateMasterYn,
        'bookingName': value.bookingName,
        'cateringOnlyYn': value.cateringOnlyYn,
        'dontMoveYn': value.dontMoveYn,
        'exclusiveYn': value.exclusiveYn,
        'loudEventYn': value.loudEventYn,
        'masterYn': value.masterYn,
        'sharedYn': value.sharedYn,
        'waitlistedYn': value.waitlistedYn,
    };
}
exports.EventDisplayTypeToJSON = EventDisplayTypeToJSON;
