"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestMessagesToJSON = exports.GuestMessagesFromJSONTyped = exports.GuestMessagesFromJSON = exports.instanceOfGuestMessages = void 0;
const runtime_1 = require("../runtime");
const InstanceLink_1 = require("./InstanceLink");
const ResvGuestMessageType_1 = require("./ResvGuestMessageType");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the GuestMessages interface.
 */
function instanceOfGuestMessages(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfGuestMessages = instanceOfGuestMessages;
function GuestMessagesFromJSON(json) {
    return GuestMessagesFromJSONTyped(json, false);
}
exports.GuestMessagesFromJSON = GuestMessagesFromJSON;
function GuestMessagesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'guestMessages': !(0, runtime_1.exists)(json, 'guestMessages') ? undefined : (json['guestMessages'].map(ResvGuestMessageType_1.ResvGuestMessageTypeFromJSON)),
        'hasMore': !(0, runtime_1.exists)(json, 'hasMore') ? undefined : json['hasMore'],
        'limit': !(0, runtime_1.exists)(json, 'limit') ? undefined : json['limit'],
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'offset': !(0, runtime_1.exists)(json, 'offset') ? undefined : json['offset'],
        'totalPages': !(0, runtime_1.exists)(json, 'totalPages') ? undefined : json['totalPages'],
        'totalResults': !(0, runtime_1.exists)(json, 'totalResults') ? undefined : json['totalResults'],
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.GuestMessagesFromJSONTyped = GuestMessagesFromJSONTyped;
function GuestMessagesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'guestMessages': value.guestMessages === undefined ? undefined : (value.guestMessages.map(ResvGuestMessageType_1.ResvGuestMessageTypeToJSON)),
        'hasMore': value.hasMore,
        'limit': value.limit,
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'offset': value.offset,
        'totalPages': value.totalPages,
        'totalResults': value.totalResults,
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.GuestMessagesToJSON = GuestMessagesToJSON;
