"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResGuestInfoTypeToJSON = exports.ResGuestInfoTypeFromJSONTyped = exports.ResGuestInfoTypeFromJSON = exports.instanceOfResGuestInfoType = void 0;
const runtime_1 = require("../runtime");
const AddressSearchType_1 = require("./AddressSearchType");
const AnonymizationType_1 = require("./AnonymizationType");
const CountryNameType_1 = require("./CountryNameType");
const GuestLastStayInfoType_1 = require("./GuestLastStayInfoType");
const MembershipInfoType_1 = require("./MembershipInfoType");
const NameTypeType_1 = require("./NameTypeType");
const ResAccompanyGuestInfoType_1 = require("./ResAccompanyGuestInfoType");
const VIPType_1 = require("./VIPType");
/**
 * Check if a given object implements the ResGuestInfoType interface.
 */
function instanceOfResGuestInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfResGuestInfoType = instanceOfResGuestInfoType;
function ResGuestInfoTypeFromJSON(json) {
    return ResGuestInfoTypeFromJSONTyped(json, false);
}
exports.ResGuestInfoTypeFromJSON = ResGuestInfoTypeFromJSON;
function ResGuestInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accompanyGuests': !(0, runtime_1.exists)(json, 'accompanyGuests') ? undefined : (json['accompanyGuests'].map(ResAccompanyGuestInfoType_1.ResAccompanyGuestInfoTypeFromJSON)),
        'address': !(0, runtime_1.exists)(json, 'address') ? undefined : (0, AddressSearchType_1.AddressSearchTypeFromJSON)(json['address']),
        'alternateGivenName': !(0, runtime_1.exists)(json, 'alternateGivenName') ? undefined : json['alternateGivenName'],
        'alternateSurname': !(0, runtime_1.exists)(json, 'alternateSurname') ? undefined : json['alternateSurname'],
        'anonymization': !(0, runtime_1.exists)(json, 'anonymization') ? undefined : (0, AnonymizationType_1.AnonymizationTypeFromJSON)(json['anonymization']),
        'birthDate': !(0, runtime_1.exists)(json, 'birthDate') ? undefined : json['birthDate'],
        'email': !(0, runtime_1.exists)(json, 'email') ? undefined : json['email'],
        'fullName': !(0, runtime_1.exists)(json, 'fullName') ? undefined : json['fullName'],
        'givenName': !(0, runtime_1.exists)(json, 'givenName') ? undefined : json['givenName'],
        'guestLastStayInformation': !(0, runtime_1.exists)(json, 'guestLastStayInformation') ? undefined : (0, GuestLastStayInfoType_1.GuestLastStayInfoTypeFromJSON)(json['guestLastStayInformation']),
        'guestRestricted': !(0, runtime_1.exists)(json, 'guestRestricted') ? undefined : json['guestRestricted'],
        'guestRestrictedCode': !(0, runtime_1.exists)(json, 'guestRestrictedCode') ? undefined : json['guestRestrictedCode'],
        'guestRestrictedReasonDesc': !(0, runtime_1.exists)(json, 'guestRestrictedReasonDesc') ? undefined : json['guestRestrictedReasonDesc'],
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'language': !(0, runtime_1.exists)(json, 'language') ? undefined : json['language'],
        'membership': !(0, runtime_1.exists)(json, 'membership') ? undefined : (0, MembershipInfoType_1.MembershipInfoTypeFromJSON)(json['membership']),
        'middleName': !(0, runtime_1.exists)(json, 'middleName') ? undefined : json['middleName'],
        'namePrefix': !(0, runtime_1.exists)(json, 'namePrefix') ? undefined : json['namePrefix'],
        'nameTitle': !(0, runtime_1.exists)(json, 'nameTitle') ? undefined : json['nameTitle'],
        'nameType': !(0, runtime_1.exists)(json, 'nameType') ? undefined : (0, NameTypeType_1.NameTypeTypeFromJSON)(json['nameType']),
        'nationality': !(0, runtime_1.exists)(json, 'nationality') ? undefined : (0, CountryNameType_1.CountryNameTypeFromJSON)(json['nationality']),
        'phoneNumber': !(0, runtime_1.exists)(json, 'phoneNumber') ? undefined : json['phoneNumber'],
        'registrationCardNo': !(0, runtime_1.exists)(json, 'registrationCardNo') ? undefined : json['registrationCardNo'],
        'surname': !(0, runtime_1.exists)(json, 'surname') ? undefined : json['surname'],
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
        'vip': !(0, runtime_1.exists)(json, 'vip') ? undefined : (0, VIPType_1.VIPTypeFromJSON)(json['vip']),
    };
}
exports.ResGuestInfoTypeFromJSONTyped = ResGuestInfoTypeFromJSONTyped;
function ResGuestInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'accompanyGuests': value.accompanyGuests === undefined ? undefined : (value.accompanyGuests.map(ResAccompanyGuestInfoType_1.ResAccompanyGuestInfoTypeToJSON)),
        'address': (0, AddressSearchType_1.AddressSearchTypeToJSON)(value.address),
        'alternateGivenName': value.alternateGivenName,
        'alternateSurname': value.alternateSurname,
        'anonymization': (0, AnonymizationType_1.AnonymizationTypeToJSON)(value.anonymization),
        'birthDate': value.birthDate,
        'email': value.email,
        'fullName': value.fullName,
        'givenName': value.givenName,
        'guestLastStayInformation': (0, GuestLastStayInfoType_1.GuestLastStayInfoTypeToJSON)(value.guestLastStayInformation),
        'guestRestricted': value.guestRestricted,
        'guestRestrictedCode': value.guestRestrictedCode,
        'guestRestrictedReasonDesc': value.guestRestrictedReasonDesc,
        'id': value.id,
        'language': value.language,
        'membership': (0, MembershipInfoType_1.MembershipInfoTypeToJSON)(value.membership),
        'middleName': value.middleName,
        'namePrefix': value.namePrefix,
        'nameTitle': value.nameTitle,
        'nameType': (0, NameTypeType_1.NameTypeTypeToJSON)(value.nameType),
        'nationality': (0, CountryNameType_1.CountryNameTypeToJSON)(value.nationality),
        'phoneNumber': value.phoneNumber,
        'registrationCardNo': value.registrationCardNo,
        'surname': value.surname,
        'type': value.type,
        'vip': (0, VIPType_1.VIPTypeToJSON)(value.vip),
    };
}
exports.ResGuestInfoTypeToJSON = ResGuestInfoTypeToJSON;