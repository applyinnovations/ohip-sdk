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
exports.OwnerTypeToJSON = exports.OwnerTypeFromJSONTyped = exports.OwnerTypeFromJSON = exports.instanceOfOwnerType = void 0;
const runtime_1 = require("../runtime");
const CodeDescriptionType_1 = require("./CodeDescriptionType");
const EmailInfoType_1 = require("./EmailInfoType");
const PersonNameType_1 = require("./PersonNameType");
const ProfileId_1 = require("./ProfileId");
const TelephoneInfoType_1 = require("./TelephoneInfoType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the OwnerType interface.
 */
function instanceOfOwnerType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfOwnerType = instanceOfOwnerType;
function OwnerTypeFromJSON(json) {
    return OwnerTypeFromJSONTyped(json, false);
}
exports.OwnerTypeFromJSON = OwnerTypeFromJSON;
function OwnerTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'department': !(0, runtime_1.exists)(json, 'department') ? undefined : (0, CodeDescriptionType_1.CodeDescriptionTypeFromJSON)(json['department']),
        'email': !(0, runtime_1.exists)(json, 'email') ? undefined : (0, EmailInfoType_1.EmailInfoTypeFromJSON)(json['email']),
        'hotel': !(0, runtime_1.exists)(json, 'hotel') ? undefined : (0, CodeDescriptionType_1.CodeDescriptionTypeFromJSON)(json['hotel']),
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : (0, PersonNameType_1.PersonNameTypeFromJSON)(json['name']),
        'ownerCode': !(0, runtime_1.exists)(json, 'ownerCode') ? undefined : json['ownerCode'],
        'phone': !(0, runtime_1.exists)(json, 'phone') ? undefined : (0, TelephoneInfoType_1.TelephoneInfoTypeFromJSON)(json['phone']),
        'primary': !(0, runtime_1.exists)(json, 'primary') ? undefined : json['primary'],
        'profileId': !(0, runtime_1.exists)(json, 'profileId') ? undefined : (0, ProfileId_1.ProfileIdFromJSON)(json['profileId']),
        'relationship': !(0, runtime_1.exists)(json, 'relationship') ? undefined : (0, CodeDescriptionType_1.CodeDescriptionTypeFromJSON)(json['relationship']),
        'userId': !(0, runtime_1.exists)(json, 'userId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['userId']),
        'userName': !(0, runtime_1.exists)(json, 'userName') ? undefined : json['userName'],
    };
}
exports.OwnerTypeFromJSONTyped = OwnerTypeFromJSONTyped;
function OwnerTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'department': (0, CodeDescriptionType_1.CodeDescriptionTypeToJSON)(value.department),
        'email': (0, EmailInfoType_1.EmailInfoTypeToJSON)(value.email),
        'hotel': (0, CodeDescriptionType_1.CodeDescriptionTypeToJSON)(value.hotel),
        'name': (0, PersonNameType_1.PersonNameTypeToJSON)(value.name),
        'ownerCode': value.ownerCode,
        'phone': (0, TelephoneInfoType_1.TelephoneInfoTypeToJSON)(value.phone),
        'primary': value.primary,
        'profileId': (0, ProfileId_1.ProfileIdToJSON)(value.profileId),
        'relationship': (0, CodeDescriptionType_1.CodeDescriptionTypeToJSON)(value.relationship),
        'userId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.userId),
        'userName': value.userName,
    };
}
exports.OwnerTypeToJSON = OwnerTypeToJSON;
