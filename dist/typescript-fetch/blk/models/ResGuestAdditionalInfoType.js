"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResGuestAdditionalInfoTypeToJSON = exports.ResGuestAdditionalInfoTypeFromJSONTyped = exports.ResGuestAdditionalInfoTypeFromJSON = exports.instanceOfResGuestAdditionalInfoType = void 0;
const runtime_1 = require("../runtime");
const GuestLastStayInfoType_1 = require("./GuestLastStayInfoType");
/**
 * Check if a given object implements the ResGuestAdditionalInfoType interface.
 */
function instanceOfResGuestAdditionalInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfResGuestAdditionalInfoType = instanceOfResGuestAdditionalInfoType;
function ResGuestAdditionalInfoTypeFromJSON(json) {
    return ResGuestAdditionalInfoTypeFromJSONTyped(json, false);
}
exports.ResGuestAdditionalInfoTypeFromJSON = ResGuestAdditionalInfoTypeFromJSON;
function ResGuestAdditionalInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'dateOfEntry': !(0, runtime_1.exists)(json, 'dateOfEntry') ? undefined : json['dateOfEntry'],
        'guestClassification': !(0, runtime_1.exists)(json, 'guestClassification') ? undefined : json['guestClassification'],
        'guestStatus': !(0, runtime_1.exists)(json, 'guestStatus') ? undefined : json['guestStatus'],
        'lastStay': !(0, runtime_1.exists)(json, 'lastStay') ? undefined : (0, GuestLastStayInfoType_1.GuestLastStayInfoTypeFromJSON)(json['lastStay']),
        'nextDestination': !(0, runtime_1.exists)(json, 'nextDestination') ? undefined : json['nextDestination'],
        'portOfEntry': !(0, runtime_1.exists)(json, 'portOfEntry') ? undefined : json['portOfEntry'],
        'preferredRoomType': !(0, runtime_1.exists)(json, 'preferredRoomType') ? undefined : json['preferredRoomType'],
        'purposeOfStay': !(0, runtime_1.exists)(json, 'purposeOfStay') ? undefined : json['purposeOfStay'],
    };
}
exports.ResGuestAdditionalInfoTypeFromJSONTyped = ResGuestAdditionalInfoTypeFromJSONTyped;
function ResGuestAdditionalInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'dateOfEntry': value.dateOfEntry,
        'guestClassification': value.guestClassification,
        'guestStatus': value.guestStatus,
        'lastStay': (0, GuestLastStayInfoType_1.GuestLastStayInfoTypeToJSON)(value.lastStay),
        'nextDestination': value.nextDestination,
        'portOfEntry': value.portOfEntry,
        'preferredRoomType': value.preferredRoomType,
        'purposeOfStay': value.purposeOfStay,
    };
}
exports.ResGuestAdditionalInfoTypeToJSON = ResGuestAdditionalInfoTypeToJSON;
