"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileAccessTypeToJSON = exports.ProfileAccessTypeFromJSONTyped = exports.ProfileAccessTypeFromJSON = exports.instanceOfProfileAccessType = void 0;
const runtime_1 = require("../runtime");
const ProfileSharedLevelType_1 = require("./ProfileSharedLevelType");
/**
 * Check if a given object implements the ProfileAccessType interface.
 */
function instanceOfProfileAccessType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfProfileAccessType = instanceOfProfileAccessType;
function ProfileAccessTypeFromJSON(json) {
    return ProfileAccessTypeFromJSONTyped(json, false);
}
exports.ProfileAccessTypeFromJSON = ProfileAccessTypeFromJSON;
function ProfileAccessTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'chainCode': !(0, runtime_1.exists)(json, 'chainCode') ? undefined : json['chainCode'],
        'croCode': !(0, runtime_1.exists)(json, 'croCode') ? undefined : json['croCode'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'sharedLevel': !(0, runtime_1.exists)(json, 'sharedLevel') ? undefined : (0, ProfileSharedLevelType_1.ProfileSharedLevelTypeFromJSON)(json['sharedLevel']),
    };
}
exports.ProfileAccessTypeFromJSONTyped = ProfileAccessTypeFromJSONTyped;
function ProfileAccessTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'chainCode': value.chainCode,
        'croCode': value.croCode,
        'hotelId': value.hotelId,
        'sharedLevel': (0, ProfileSharedLevelType_1.ProfileSharedLevelTypeToJSON)(value.sharedLevel),
    };
}
exports.ProfileAccessTypeToJSON = ProfileAccessTypeToJSON;
