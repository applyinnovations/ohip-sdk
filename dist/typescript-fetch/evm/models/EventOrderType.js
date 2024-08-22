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
exports.EventOrderTypeToJSON = exports.EventOrderTypeFromJSONTyped = exports.EventOrderTypeFromJSON = exports.instanceOfEventOrderType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the EventOrderType interface.
 */
function instanceOfEventOrderType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfEventOrderType = instanceOfEventOrderType;
function EventOrderTypeFromJSON(json) {
    return EventOrderTypeFromJSONTyped(json, false);
}
exports.EventOrderTypeFromJSON = EventOrderTypeFromJSON;
function EventOrderTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'distributed': !(0, runtime_1.exists)(json, 'distributed') ? undefined : json['distributed'],
        'distributedDate': !(0, runtime_1.exists)(json, 'distributedDate') ? undefined : json['distributedDate'],
        'distributedDateTime': !(0, runtime_1.exists)(json, 'distributedDateTime') ? undefined : json['distributedDateTime'],
    };
}
exports.EventOrderTypeFromJSONTyped = EventOrderTypeFromJSONTyped;
function EventOrderTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'distributed': value.distributed,
        'distributedDate': value.distributedDate,
        'distributedDateTime': value.distributedDateTime,
    };
}
exports.EventOrderTypeToJSON = EventOrderTypeToJSON;
