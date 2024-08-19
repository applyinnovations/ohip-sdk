"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
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
        'hotel': !(0, runtime_1.exists)(json, 'hotel') ? undefined : (0, CodeDescriptionType_1.CodeDescriptionTypeFromJSON)(json['hotel']),
        'userId': !(0, runtime_1.exists)(json, 'userId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['userId']),
        'userName': !(0, runtime_1.exists)(json, 'userName') ? undefined : json['userName'],
        'ownerCode': !(0, runtime_1.exists)(json, 'ownerCode') ? undefined : json['ownerCode'],
        'profileId': !(0, runtime_1.exists)(json, 'profileId') ? undefined : (0, ProfileId_1.ProfileIdFromJSON)(json['profileId']),
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : (0, PersonNameType_1.PersonNameTypeFromJSON)(json['name']),
        'department': !(0, runtime_1.exists)(json, 'department') ? undefined : (0, CodeDescriptionType_1.CodeDescriptionTypeFromJSON)(json['department']),
        'email': !(0, runtime_1.exists)(json, 'email') ? undefined : (0, EmailInfoType_1.EmailInfoTypeFromJSON)(json['email']),
        'phone': !(0, runtime_1.exists)(json, 'phone') ? undefined : (0, TelephoneInfoType_1.TelephoneInfoTypeFromJSON)(json['phone']),
        'relationship': !(0, runtime_1.exists)(json, 'relationship') ? undefined : (0, CodeDescriptionType_1.CodeDescriptionTypeFromJSON)(json['relationship']),
        'primary': !(0, runtime_1.exists)(json, 'primary') ? undefined : json['primary'],
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
        'hotel': (0, CodeDescriptionType_1.CodeDescriptionTypeToJSON)(value.hotel),
        'userId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.userId),
        'userName': value.userName,
        'ownerCode': value.ownerCode,
        'profileId': (0, ProfileId_1.ProfileIdToJSON)(value.profileId),
        'name': (0, PersonNameType_1.PersonNameTypeToJSON)(value.name),
        'department': (0, CodeDescriptionType_1.CodeDescriptionTypeToJSON)(value.department),
        'email': (0, EmailInfoType_1.EmailInfoTypeToJSON)(value.email),
        'phone': (0, TelephoneInfoType_1.TelephoneInfoTypeToJSON)(value.phone),
        'relationship': (0, CodeDescriptionType_1.CodeDescriptionTypeToJSON)(value.relationship),
        'primary': value.primary,
    };
}
exports.OwnerTypeToJSON = OwnerTypeToJSON;
