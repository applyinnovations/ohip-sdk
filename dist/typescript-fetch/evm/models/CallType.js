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
exports.CallTypeToJSON = exports.CallTypeFromJSONTyped = exports.CallTypeFromJSON = exports.instanceOfCallType = void 0;
const runtime_1 = require("../runtime");
const CallTypeReservation_1 = require("./CallTypeReservation");
const CallerType_1 = require("./CallerType");
const DateTimeSpanType_1 = require("./DateTimeSpanType");
/**
 * Check if a given object implements the CallType interface.
 */
function instanceOfCallType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCallType = instanceOfCallType;
function CallTypeFromJSON(json) {
    return CallTypeFromJSONTyped(json, false);
}
exports.CallTypeFromJSON = CallTypeFromJSON;
function CallTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'caller': !(0, runtime_1.exists)(json, 'caller') ? undefined : (0, CallerType_1.CallerTypeFromJSON)(json['caller']),
        'comments': !(0, runtime_1.exists)(json, 'comments') ? undefined : json['comments'],
        'dateTimeSpan': !(0, runtime_1.exists)(json, 'dateTimeSpan') ? undefined : (0, DateTimeSpanType_1.DateTimeSpanTypeFromJSON)(json['dateTimeSpan']),
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'idContext': !(0, runtime_1.exists)(json, 'idContext') ? undefined : json['idContext'],
        'idExtension': !(0, runtime_1.exists)(json, 'idExtension') ? undefined : json['idExtension'],
        'instance': !(0, runtime_1.exists)(json, 'instance') ? undefined : json['instance'],
        'reservation': !(0, runtime_1.exists)(json, 'reservation') ? undefined : (0, CallTypeReservation_1.CallTypeReservationFromJSON)(json['reservation']),
        'turnawayCode': !(0, runtime_1.exists)(json, 'turnawayCode') ? undefined : json['turnawayCode'],
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
        'url': !(0, runtime_1.exists)(json, 'url') ? undefined : json['url'],
    };
}
exports.CallTypeFromJSONTyped = CallTypeFromJSONTyped;
function CallTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'caller': (0, CallerType_1.CallerTypeToJSON)(value.caller),
        'comments': value.comments,
        'dateTimeSpan': (0, DateTimeSpanType_1.DateTimeSpanTypeToJSON)(value.dateTimeSpan),
        'id': value.id,
        'idContext': value.idContext,
        'idExtension': value.idExtension,
        'instance': value.instance,
        'reservation': (0, CallTypeReservation_1.CallTypeReservationToJSON)(value.reservation),
        'turnawayCode': value.turnawayCode,
        'type': value.type,
        'url': value.url,
    };
}
exports.CallTypeToJSON = CallTypeToJSON;
