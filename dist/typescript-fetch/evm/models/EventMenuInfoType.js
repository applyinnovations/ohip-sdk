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
exports.EventMenuInfoTypeToJSON = exports.EventMenuInfoTypeFromJSONTyped = exports.EventMenuInfoTypeFromJSON = exports.instanceOfEventMenuInfoType = void 0;
const runtime_1 = require("../runtime");
const EventMenuType_1 = require("./EventMenuType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the EventMenuInfoType interface.
 */
function instanceOfEventMenuInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfEventMenuInfoType = instanceOfEventMenuInfoType;
function EventMenuInfoTypeFromJSON(json) {
    return EventMenuInfoTypeFromJSONTyped(json, false);
}
exports.EventMenuInfoTypeFromJSON = EventMenuInfoTypeFromJSON;
function EventMenuInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'eventMenu': !(0, runtime_1.exists)(json, 'eventMenu') ? undefined : (0, EventMenuType_1.EventMenuTypeFromJSON)(json['eventMenu']),
        'eventMenuId': !(0, runtime_1.exists)(json, 'eventMenuId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['eventMenuId']),
    };
}
exports.EventMenuInfoTypeFromJSONTyped = EventMenuInfoTypeFromJSONTyped;
function EventMenuInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'eventMenu': (0, EventMenuType_1.EventMenuTypeToJSON)(value.eventMenu),
        'eventMenuId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.eventMenuId),
    };
}
exports.EventMenuInfoTypeToJSON = EventMenuInfoTypeToJSON;
