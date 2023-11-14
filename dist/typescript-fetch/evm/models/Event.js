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
exports.EventToJSON = exports.EventFromJSONTyped = exports.EventFromJSON = exports.instanceOfEvent = void 0;
const runtime_1 = require("../runtime");
const EventsInfoType_1 = require("./EventsInfoType");
const Links_1 = require("./Links");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the Event interface.
 */
function instanceOfEvent(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfEvent = instanceOfEvent;
function EventFromJSON(json) {
    return EventFromJSONTyped(json, false);
}
exports.EventFromJSON = EventFromJSON;
function EventFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'eventDetails': !(0, runtime_1.exists)(json, 'eventDetails') ? undefined : (0, EventsInfoType_1.EventsInfoTypeFromJSON)(json['eventDetails']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.EventFromJSONTyped = EventFromJSONTyped;
function EventToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'eventDetails': (0, EventsInfoType_1.EventsInfoTypeToJSON)(value.eventDetails),
        'links': (0, Links_1.LinksToJSON)(value.links),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.EventToJSON = EventToJSON;