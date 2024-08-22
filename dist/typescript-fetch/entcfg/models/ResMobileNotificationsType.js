"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
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
        'roomReady': !(0, runtime_1.exists)(json, 'roomReady') ? undefined : (0, CommunicationStatusType_1.CommunicationStatusTypeFromJSON)(json['roomReady']),
        'keyReady': !(0, runtime_1.exists)(json, 'keyReady') ? undefined : (0, CommunicationStatusType_1.CommunicationStatusTypeFromJSON)(json['keyReady']),
        'checkoutMessageReceived': !(0, runtime_1.exists)(json, 'checkoutMessageReceived') ? undefined : json['checkoutMessageReceived'],
        'requiresAction': !(0, runtime_1.exists)(json, 'requiresAction') ? undefined : json['requiresAction'],
        'errorMessage': !(0, runtime_1.exists)(json, 'errorMessage') ? undefined : json['errorMessage'],
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
        'roomReady': (0, CommunicationStatusType_1.CommunicationStatusTypeToJSON)(value.roomReady),
        'keyReady': (0, CommunicationStatusType_1.CommunicationStatusTypeToJSON)(value.keyReady),
        'checkoutMessageReceived': value.checkoutMessageReceived,
        'requiresAction': value.requiresAction,
        'errorMessage': value.errorMessage,
    };
}
exports.ResMobileNotificationsTypeToJSON = ResMobileNotificationsTypeToJSON;
