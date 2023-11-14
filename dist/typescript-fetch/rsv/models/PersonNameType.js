"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonNameTypeToJSON = exports.PersonNameTypeFromJSONTyped = exports.PersonNameTypeFromJSON = exports.instanceOfPersonNameType = void 0;
const runtime_1 = require("../runtime");
const PersonNameTypeType_1 = require("./PersonNameTypeType");
/**
 * Check if a given object implements the PersonNameType interface.
 */
function instanceOfPersonNameType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPersonNameType = instanceOfPersonNameType;
function PersonNameTypeFromJSON(json) {
    return PersonNameTypeFromJSONTyped(json, false);
}
exports.PersonNameTypeFromJSON = PersonNameTypeFromJSON;
function PersonNameTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'givenName': !(0, runtime_1.exists)(json, 'givenName') ? undefined : json['givenName'],
        'language': !(0, runtime_1.exists)(json, 'language') ? undefined : json['language'],
        'middleName': !(0, runtime_1.exists)(json, 'middleName') ? undefined : json['middleName'],
        'namePrefix': !(0, runtime_1.exists)(json, 'namePrefix') ? undefined : json['namePrefix'],
        'nameTitle': !(0, runtime_1.exists)(json, 'nameTitle') ? undefined : json['nameTitle'],
        'nameType': !(0, runtime_1.exists)(json, 'nameType') ? undefined : (0, PersonNameTypeType_1.PersonNameTypeTypeFromJSON)(json['nameType']),
        'salutation': !(0, runtime_1.exists)(json, 'salutation') ? undefined : json['salutation'],
        'surname': !(0, runtime_1.exists)(json, 'surname') ? undefined : json['surname'],
    };
}
exports.PersonNameTypeFromJSONTyped = PersonNameTypeFromJSONTyped;
function PersonNameTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'givenName': value.givenName,
        'language': value.language,
        'middleName': value.middleName,
        'namePrefix': value.namePrefix,
        'nameTitle': value.nameTitle,
        'nameType': (0, PersonNameTypeType_1.PersonNameTypeTypeToJSON)(value.nameType),
        'salutation': value.salutation,
        'surname': value.surname,
    };
}
exports.PersonNameTypeToJSON = PersonNameTypeToJSON;