"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestMessageTemplatesToJSON = exports.GuestMessageTemplatesFromJSONTyped = exports.GuestMessageTemplatesFromJSON = exports.instanceOfGuestMessageTemplates = void 0;
const runtime_1 = require("../runtime");
const GuestMessageTemplatesType_1 = require("./GuestMessageTemplatesType");
const Links_1 = require("./Links");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the GuestMessageTemplates interface.
 */
function instanceOfGuestMessageTemplates(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfGuestMessageTemplates = instanceOfGuestMessageTemplates;
function GuestMessageTemplatesFromJSON(json) {
    return GuestMessageTemplatesFromJSONTyped(json, false);
}
exports.GuestMessageTemplatesFromJSON = GuestMessageTemplatesFromJSON;
function GuestMessageTemplatesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'guestMessageTemplates': !(0, runtime_1.exists)(json, 'guestMessageTemplates') ? undefined : (0, GuestMessageTemplatesType_1.GuestMessageTemplatesTypeFromJSON)(json['guestMessageTemplates']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.GuestMessageTemplatesFromJSONTyped = GuestMessageTemplatesFromJSONTyped;
function GuestMessageTemplatesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'guestMessageTemplates': (0, GuestMessageTemplatesType_1.GuestMessageTemplatesTypeToJSON)(value.guestMessageTemplates),
        'links': (0, Links_1.LinksToJSON)(value.links),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.GuestMessageTemplatesToJSON = GuestMessageTemplatesToJSON;
