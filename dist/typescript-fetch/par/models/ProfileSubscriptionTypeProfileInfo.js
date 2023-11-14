"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileSubscriptionTypeProfileInfoToJSON = exports.ProfileSubscriptionTypeProfileInfoFromJSONTyped = exports.ProfileSubscriptionTypeProfileInfoFromJSON = exports.instanceOfProfileSubscriptionTypeProfileInfo = void 0;
const runtime_1 = require("../runtime");
const PersonNameTypeType_1 = require("./PersonNameTypeType");
const ProfileTypeType_1 = require("./ProfileTypeType");
/**
 * Check if a given object implements the ProfileSubscriptionTypeProfileInfo interface.
 */
function instanceOfProfileSubscriptionTypeProfileInfo(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfProfileSubscriptionTypeProfileInfo = instanceOfProfileSubscriptionTypeProfileInfo;
function ProfileSubscriptionTypeProfileInfoFromJSON(json) {
    return ProfileSubscriptionTypeProfileInfoFromJSONTyped(json, false);
}
exports.ProfileSubscriptionTypeProfileInfoFromJSON = ProfileSubscriptionTypeProfileInfoFromJSON;
function ProfileSubscriptionTypeProfileInfoFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'fullName': !(0, runtime_1.exists)(json, 'fullName') ? undefined : json['fullName'],
        'givenName': !(0, runtime_1.exists)(json, 'givenName') ? undefined : json['givenName'],
        'middleName': !(0, runtime_1.exists)(json, 'middleName') ? undefined : json['middleName'],
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'namePrefix': !(0, runtime_1.exists)(json, 'namePrefix') ? undefined : json['namePrefix'],
        'nameSuffix': !(0, runtime_1.exists)(json, 'nameSuffix') ? undefined : json['nameSuffix'],
        'nameTitle': !(0, runtime_1.exists)(json, 'nameTitle') ? undefined : json['nameTitle'],
        'nameType': !(0, runtime_1.exists)(json, 'nameType') ? undefined : (0, PersonNameTypeType_1.PersonNameTypeTypeFromJSON)(json['nameType']),
        'profileType': !(0, runtime_1.exists)(json, 'profileType') ? undefined : (0, ProfileTypeType_1.ProfileTypeTypeFromJSON)(json['profileType']),
    };
}
exports.ProfileSubscriptionTypeProfileInfoFromJSONTyped = ProfileSubscriptionTypeProfileInfoFromJSONTyped;
function ProfileSubscriptionTypeProfileInfoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'fullName': value.fullName,
        'givenName': value.givenName,
        'middleName': value.middleName,
        'name': value.name,
        'namePrefix': value.namePrefix,
        'nameSuffix': value.nameSuffix,
        'nameTitle': value.nameTitle,
        'nameType': (0, PersonNameTypeType_1.PersonNameTypeTypeToJSON)(value.nameType),
        'profileType': (0, ProfileTypeType_1.ProfileTypeTypeToJSON)(value.profileType),
    };
}
exports.ProfileSubscriptionTypeProfileInfoToJSON = ProfileSubscriptionTypeProfileInfoToJSON;