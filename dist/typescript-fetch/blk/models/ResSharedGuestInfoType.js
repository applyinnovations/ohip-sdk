"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResSharedGuestInfoTypeToJSON = exports.ResSharedGuestInfoTypeFromJSONTyped = exports.ResSharedGuestInfoTypeFromJSON = exports.instanceOfResSharedGuestInfoType = void 0;
const runtime_1 = require("../runtime");
const ProfileId_1 = require("./ProfileId");
/**
 * Check if a given object implements the ResSharedGuestInfoType interface.
 */
function instanceOfResSharedGuestInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfResSharedGuestInfoType = instanceOfResSharedGuestInfoType;
function ResSharedGuestInfoTypeFromJSON(json) {
    return ResSharedGuestInfoTypeFromJSONTyped(json, false);
}
exports.ResSharedGuestInfoTypeFromJSON = ResSharedGuestInfoTypeFromJSON;
function ResSharedGuestInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'firstName': !(0, runtime_1.exists)(json, 'firstName') ? undefined : json['firstName'],
        'fullName': !(0, runtime_1.exists)(json, 'fullName') ? undefined : json['fullName'],
        'lastName': !(0, runtime_1.exists)(json, 'lastName') ? undefined : json['lastName'],
        'profileId': !(0, runtime_1.exists)(json, 'profileId') ? undefined : (0, ProfileId_1.ProfileIdFromJSON)(json['profileId']),
    };
}
exports.ResSharedGuestInfoTypeFromJSONTyped = ResSharedGuestInfoTypeFromJSONTyped;
function ResSharedGuestInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'firstName': value.firstName,
        'fullName': value.fullName,
        'lastName': value.lastName,
        'profileId': (0, ProfileId_1.ProfileIdToJSON)(value.profileId),
    };
}
exports.ResSharedGuestInfoTypeToJSON = ResSharedGuestInfoTypeToJSON;
