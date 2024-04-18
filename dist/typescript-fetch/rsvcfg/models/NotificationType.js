"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationTypeToJSON = exports.NotificationTypeFromJSONTyped = exports.NotificationTypeFromJSON = exports.instanceOfNotificationType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the NotificationType interface.
 */
function instanceOfNotificationType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfNotificationType = instanceOfNotificationType;
function NotificationTypeFromJSON(json) {
    return NotificationTypeFromJSONTyped(json, false);
}
exports.NotificationTypeFromJSON = NotificationTypeFromJSON;
function NotificationTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'department': !(0, runtime_1.exists)(json, 'department') ? undefined : json['department'],
        'email': !(0, runtime_1.exists)(json, 'email') ? undefined : json['email'],
        'emailAddress': !(0, runtime_1.exists)(json, 'emailAddress') ? undefined : json['emailAddress'],
        'phoneNumber': !(0, runtime_1.exists)(json, 'phoneNumber') ? undefined : json['phoneNumber'],
        'print': !(0, runtime_1.exists)(json, 'print') ? undefined : json['print'],
        'printerName': !(0, runtime_1.exists)(json, 'printerName') ? undefined : json['printerName'],
        'reportName': !(0, runtime_1.exists)(json, 'reportName') ? undefined : json['reportName'],
        'screen': !(0, runtime_1.exists)(json, 'screen') ? undefined : json['screen'],
        'textMessage': !(0, runtime_1.exists)(json, 'textMessage') ? undefined : json['textMessage'],
    };
}
exports.NotificationTypeFromJSONTyped = NotificationTypeFromJSONTyped;
function NotificationTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'department': value.department,
        'email': value.email,
        'emailAddress': value.emailAddress,
        'phoneNumber': value.phoneNumber,
        'print': value.print,
        'printerName': value.printerName,
        'reportName': value.reportName,
        'screen': value.screen,
        'textMessage': value.textMessage,
    };
}
exports.NotificationTypeToJSON = NotificationTypeToJSON;