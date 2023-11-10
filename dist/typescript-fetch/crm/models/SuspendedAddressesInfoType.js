"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuspendedAddressesInfoTypeToJSON = exports.SuspendedAddressesInfoTypeFromJSONTyped = exports.SuspendedAddressesInfoTypeFromJSON = exports.instanceOfSuspendedAddressesInfoType = void 0;
const runtime_1 = require("../runtime");
const CountryNameType_1 = require("./CountryNameType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the SuspendedAddressesInfoType interface.
 */
function instanceOfSuspendedAddressesInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfSuspendedAddressesInfoType = instanceOfSuspendedAddressesInfoType;
function SuspendedAddressesInfoTypeFromJSON(json) {
    return SuspendedAddressesInfoTypeFromJSONTyped(json, false);
}
exports.SuspendedAddressesInfoTypeFromJSON = SuspendedAddressesInfoTypeFromJSON;
function SuspendedAddressesInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'addressId': !(0, runtime_1.exists)(json, 'addressId') ? undefined : json['addressId'],
        'clientID': !(0, runtime_1.exists)(json, 'clientID') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['clientID']),
        'country': !(0, runtime_1.exists)(json, 'country') ? undefined : (0, CountryNameType_1.CountryNameTypeFromJSON)(json['country']),
        'firstName': !(0, runtime_1.exists)(json, 'firstName') ? undefined : json['firstName'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'matchCode': !(0, runtime_1.exists)(json, 'matchCode') ? undefined : json['matchCode'],
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'profileId': !(0, runtime_1.exists)(json, 'profileId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['profileId']),
        'profileType': !(0, runtime_1.exists)(json, 'profileType') ? undefined : json['profileType'],
        'validateDate': !(0, runtime_1.exists)(json, 'validateDate') ? undefined : (new Date(json['validateDate'])),
    };
}
exports.SuspendedAddressesInfoTypeFromJSONTyped = SuspendedAddressesInfoTypeFromJSONTyped;
function SuspendedAddressesInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'addressId': value.addressId,
        'clientID': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.clientID),
        'country': (0, CountryNameType_1.CountryNameTypeToJSON)(value.country),
        'firstName': value.firstName,
        'hotelId': value.hotelId,
        'matchCode': value.matchCode,
        'name': value.name,
        'profileId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.profileId),
        'profileType': value.profileType,
        'validateDate': value.validateDate === undefined ? undefined : (value.validateDate.toISOString().substr(0, 10)),
    };
}
exports.SuspendedAddressesInfoTypeToJSON = SuspendedAddressesInfoTypeToJSON;
