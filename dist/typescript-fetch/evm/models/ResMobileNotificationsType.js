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
exports.ResMobileNotificationsTypeToJSON = exports.ResMobileNotificationsTypeFromJSONTyped = exports.ResMobileNotificationsTypeFromJSON = exports.instanceOfResMobileNotificationsType = void 0;
const runtime_1 = require("../runtime");
const CommunicationStatusType_1 = require("./CommunicationStatusType");
/**
 * Check if a given object implements the ResMobileNotificationsType interface.
 */
function instanceOfResMobileNotificationsType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfResMobileNotificationsType = instanceOfResMobileNotificationsType;
function ResMobileNotificationsTypeFromJSON(json) {
    return ResMobileNotificationsTypeFromJSONTyped(json, false);
}
exports.ResMobileNotificationsTypeFromJSON = ResMobileNotificationsTypeFromJSON;
function ResMobileNotificationsTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'checkoutMessageReceived': !(0, runtime_1.exists)(json, 'checkoutMessageReceived') ? undefined : json['checkoutMessageReceived'],
        'errorMessage': !(0, runtime_1.exists)(json, 'errorMessage') ? undefined : json['errorMessage'],
        'keyReady': !(0, runtime_1.exists)(json, 'keyReady') ? undefined : (0, CommunicationStatusType_1.CommunicationStatusTypeFromJSON)(json['keyReady']),
        'requiresAction': !(0, runtime_1.exists)(json, 'requiresAction') ? undefined : json['requiresAction'],
        'roomReady': !(0, runtime_1.exists)(json, 'roomReady') ? undefined : (0, CommunicationStatusType_1.CommunicationStatusTypeFromJSON)(json['roomReady']),
    };
}
exports.ResMobileNotificationsTypeFromJSONTyped = ResMobileNotificationsTypeFromJSONTyped;
function ResMobileNotificationsTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'checkoutMessageReceived': value.checkoutMessageReceived,
        'errorMessage': value.errorMessage,
        'keyReady': (0, CommunicationStatusType_1.CommunicationStatusTypeToJSON)(value.keyReady),
        'requiresAction': value.requiresAction,
        'roomReady': (0, CommunicationStatusType_1.CommunicationStatusTypeToJSON)(value.roomReady),
    };
}
exports.ResMobileNotificationsTypeToJSON = ResMobileNotificationsTypeToJSON;
