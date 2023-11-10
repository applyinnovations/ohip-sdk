"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud API for Customer Management Service
 * This API deals with the different aspect of the CustomerManagement.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarTaskAttachmentsToJSON = exports.CalendarTaskAttachmentsFromJSONTyped = exports.CalendarTaskAttachmentsFromJSON = exports.instanceOfCalendarTaskAttachments = void 0;
const runtime_1 = require("../runtime");
const AttachmentsType_1 = require("./AttachmentsType");
const Links_1 = require("./Links");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the CalendarTaskAttachments interface.
 */
function instanceOfCalendarTaskAttachments(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCalendarTaskAttachments = instanceOfCalendarTaskAttachments;
function CalendarTaskAttachmentsFromJSON(json) {
    return CalendarTaskAttachmentsFromJSONTyped(json, false);
}
exports.CalendarTaskAttachmentsFromJSON = CalendarTaskAttachmentsFromJSON;
function CalendarTaskAttachmentsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'calendarTaskAttachments': !(0, runtime_1.exists)(json, 'calendarTaskAttachments') ? undefined : (0, AttachmentsType_1.AttachmentsTypeFromJSON)(json['calendarTaskAttachments']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.CalendarTaskAttachmentsFromJSONTyped = CalendarTaskAttachmentsFromJSONTyped;
function CalendarTaskAttachmentsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'calendarTaskAttachments': (0, AttachmentsType_1.AttachmentsTypeToJSON)(value.calendarTaskAttachments),
        'links': (0, Links_1.LinksToJSON)(value.links),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.CalendarTaskAttachmentsToJSON = CalendarTaskAttachmentsToJSON;
