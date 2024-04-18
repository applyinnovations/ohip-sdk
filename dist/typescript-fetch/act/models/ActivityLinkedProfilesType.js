"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Activity API
 * APIs to cater for Sales Activity functionality in OPERA Cloud. <br /><br /> Activities provide you with an account management tool for managing daily tasks such as appointments, sales calls, contact follow-up, and so on.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityLinkedProfilesTypeToJSON = exports.ActivityLinkedProfilesTypeFromJSONTyped = exports.ActivityLinkedProfilesTypeFromJSON = exports.instanceOfActivityLinkedProfilesType = void 0;
const runtime_1 = require("../runtime");
const LinkedProfileTypeType_1 = require("./LinkedProfileTypeType");
const ProfileType_1 = require("./ProfileType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the ActivityLinkedProfilesType interface.
 */
function instanceOfActivityLinkedProfilesType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfActivityLinkedProfilesType = instanceOfActivityLinkedProfilesType;
function ActivityLinkedProfilesTypeFromJSON(json) {
    return ActivityLinkedProfilesTypeFromJSONTyped(json, false);
}
exports.ActivityLinkedProfilesTypeFromJSON = ActivityLinkedProfilesTypeFromJSON;
function ActivityLinkedProfilesTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'activityLinkedProfileType': !(0, runtime_1.exists)(json, 'activityLinkedProfileType') ? undefined : (0, LinkedProfileTypeType_1.LinkedProfileTypeTypeFromJSON)(json['activityLinkedProfileType']),
        'primary': !(0, runtime_1.exists)(json, 'primary') ? undefined : json['primary'],
        'profile': !(0, runtime_1.exists)(json, 'profile') ? undefined : (0, ProfileType_1.ProfileTypeFromJSON)(json['profile']),
        'profileIdList': !(0, runtime_1.exists)(json, 'profileIdList') ? undefined : (json['profileIdList'].map(UniqueIDType_1.UniqueIDTypeFromJSON)),
    };
}
exports.ActivityLinkedProfilesTypeFromJSONTyped = ActivityLinkedProfilesTypeFromJSONTyped;
function ActivityLinkedProfilesTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'activityLinkedProfileType': (0, LinkedProfileTypeType_1.LinkedProfileTypeTypeToJSON)(value.activityLinkedProfileType),
        'primary': value.primary,
        'profile': (0, ProfileType_1.ProfileTypeToJSON)(value.profile),
        'profileIdList': value.profileIdList === undefined ? undefined : (value.profileIdList.map(UniqueIDType_1.UniqueIDTypeToJSON)),
    };
}
exports.ActivityLinkedProfilesTypeToJSON = ActivityLinkedProfilesTypeToJSON;