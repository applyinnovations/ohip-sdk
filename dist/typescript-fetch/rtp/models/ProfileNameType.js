"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileNameTypeToJSON = exports.ProfileNameTypeFromJSONTyped = exports.ProfileNameTypeFromJSON = exports.instanceOfProfileNameType = void 0;
const runtime_1 = require("../runtime");
const PersonNameTypeType_1 = require("./PersonNameTypeType");
/**
 * Check if a given object implements the ProfileNameType interface.
 */
function instanceOfProfileNameType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfProfileNameType = instanceOfProfileNameType;
function ProfileNameTypeFromJSON(json) {
    return ProfileNameTypeFromJSONTyped(json, false);
}
exports.ProfileNameTypeFromJSON = ProfileNameTypeFromJSON;
function ProfileNameTypeFromJSONTyped(json, ignoreDiscriminator) {
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
    };
}
exports.ProfileNameTypeFromJSONTyped = ProfileNameTypeFromJSONTyped;
function ProfileNameTypeToJSON(value) {
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
    };
}
exports.ProfileNameTypeToJSON = ProfileNameTypeToJSON;