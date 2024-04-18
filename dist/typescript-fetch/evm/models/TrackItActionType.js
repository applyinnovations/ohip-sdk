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
exports.TrackItActionTypeToJSON = exports.TrackItActionTypeFromJSONTyped = exports.TrackItActionTypeFromJSON = exports.instanceOfTrackItActionType = void 0;
const runtime_1 = require("../runtime");
const ActionStatusType_1 = require("./ActionStatusType");
const CodeDescriptionType_1 = require("./CodeDescriptionType");
/**
 * Check if a given object implements the TrackItActionType interface.
 */
function instanceOfTrackItActionType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTrackItActionType = instanceOfTrackItActionType;
function TrackItActionTypeFromJSON(json) {
    return TrackItActionTypeFromJSONTyped(json, false);
}
exports.TrackItActionTypeFromJSON = TrackItActionTypeFromJSON;
function TrackItActionTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'status': !(0, runtime_1.exists)(json, 'status') ? undefined : (0, ActionStatusType_1.ActionStatusTypeFromJSON)(json['status']),
        'trackItAction': !(0, runtime_1.exists)(json, 'trackItAction') ? undefined : (0, CodeDescriptionType_1.CodeDescriptionTypeFromJSON)(json['trackItAction']),
    };
}
exports.TrackItActionTypeFromJSONTyped = TrackItActionTypeFromJSONTyped;
function TrackItActionTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'status': (0, ActionStatusType_1.ActionStatusTypeToJSON)(value.status),
        'trackItAction': (0, CodeDescriptionType_1.CodeDescriptionTypeToJSON)(value.trackItAction),
    };
}
exports.TrackItActionTypeToJSON = TrackItActionTypeToJSON;