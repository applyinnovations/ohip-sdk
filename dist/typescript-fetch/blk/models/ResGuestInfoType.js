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
exports.ResGuestInfoTypeToJSON = exports.ResGuestInfoTypeFromJSONTyped = exports.ResGuestInfoTypeFromJSON = exports.instanceOfResGuestInfoType = void 0;
const runtime_1 = require("../runtime");
const AddressSearchType_1 = require("./AddressSearchType");
const AnonymizationType_1 = require("./AnonymizationType");
const CountryNameType_1 = require("./CountryNameType");
const GuestLastStayInfoType_1 = require("./GuestLastStayInfoType");
const MembershipInfoType_1 = require("./MembershipInfoType");
const NameTypeType_1 = require("./NameTypeType");
const ResAccompanyGuestInfoType_1 = require("./ResAccompanyGuestInfoType");
const ResGuestExternalInfoType_1 = require("./ResGuestExternalInfoType");
const VIPType_1 = require("./VIPType");
const WarningType_1 = require("./WarningType");
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
        'alternateFullName': !(0, runtime_1.exists)(json, 'alternateFullName') ? undefined : json['alternateFullName'],
        'alternateGivenName': !(0, runtime_1.exists)(json, 'alternateGivenName') ? undefined : json['alternateGivenName'],
        'alternateSurname': !(0, runtime_1.exists)(json, 'alternateSurname') ? undefined : json['alternateSurname'],
        'anonymization': !(0, runtime_1.exists)(json, 'anonymization') ? undefined : (0, AnonymizationType_1.AnonymizationTypeFromJSON)(json['anonymization']),
        'birthDate': !(0, runtime_1.exists)(json, 'birthDate') ? undefined : json['birthDate'],
        'email': !(0, runtime_1.exists)(json, 'email') ? undefined : json['email'],
        'externalInfo': !(0, runtime_1.exists)(json, 'externalInfo') ? undefined : (0, ResGuestExternalInfoType_1.ResGuestExternalInfoTypeFromJSON)(json['externalInfo']),
        'fullName': !(0, runtime_1.exists)(json, 'fullName') ? undefined : json['fullName'],
        'givenName': !(0, runtime_1.exists)(json, 'givenName') ? undefined : json['givenName'],
        'guestLastStayInfo': !(0, runtime_1.exists)(json, 'guestLastStayInfo') ? undefined : (0, GuestLastStayInfoType_1.GuestLastStayInfoTypeFromJSON)(json['guestLastStayInfo']),
        'guestRestricted': !(0, runtime_1.exists)(json, 'guestRestricted') ? undefined : json['guestRestricted'],
        'guestRestrictedCode': !(0, runtime_1.exists)(json, 'guestRestrictedCode') ? undefined : json['guestRestrictedCode'],
        'guestRestrictedReasonDesc': !(0, runtime_1.exists)(json, 'guestRestrictedReasonDesc') ? undefined : json['guestRestrictedReasonDesc'],
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'idContext': !(0, runtime_1.exists)(json, 'idContext') ? undefined : json['idContext'],
        'language': !(0, runtime_1.exists)(json, 'language') ? undefined : json['language'],
        'membership': !(0, runtime_1.exists)(json, 'membership') ? undefined : (0, MembershipInfoType_1.MembershipInfoTypeFromJSON)(json['membership']),
        'middleName': !(0, runtime_1.exists)(json, 'middleName') ? undefined : json['middleName'],
        'namePrefix': !(0, runtime_1.exists)(json, 'namePrefix') ? undefined : json['namePrefix'],
        'nameSuffix': !(0, runtime_1.exists)(json, 'nameSuffix') ? undefined : json['nameSuffix'],
        'nameTitle': !(0, runtime_1.exists)(json, 'nameTitle') ? undefined : json['nameTitle'],
        'nameType': !(0, runtime_1.exists)(json, 'nameType') ? undefined : (0, NameTypeType_1.NameTypeTypeFromJSON)(json['nameType']),
        'nationality': !(0, runtime_1.exists)(json, 'nationality') ? undefined : (0, CountryNameType_1.CountryNameTypeFromJSON)(json['nationality']),
        'phoneNumber': !(0, runtime_1.exists)(json, 'phoneNumber') ? undefined : json['phoneNumber'],
        'registrationCardNo': !(0, runtime_1.exists)(json, 'registrationCardNo') ? undefined : json['registrationCardNo'],
        'surname': !(0, runtime_1.exists)(json, 'surname') ? undefined : json['surname'],
        'surnamePrefix': !(0, runtime_1.exists)(json, 'surnamePrefix') ? undefined : json['surnamePrefix'],
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
        'vip': !(0, runtime_1.exists)(json, 'vip') ? undefined : (0, VIPType_1.VIPTypeFromJSON)(json['vip']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
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
        'alternateFullName': value.alternateFullName,
        'alternateGivenName': value.alternateGivenName,
        'alternateSurname': value.alternateSurname,
        'anonymization': (0, AnonymizationType_1.AnonymizationTypeToJSON)(value.anonymization),
        'birthDate': value.birthDate,
        'email': value.email,
        'externalInfo': (0, ResGuestExternalInfoType_1.ResGuestExternalInfoTypeToJSON)(value.externalInfo),
        'fullName': value.fullName,
        'givenName': value.givenName,
        'guestLastStayInfo': (0, GuestLastStayInfoType_1.GuestLastStayInfoTypeToJSON)(value.guestLastStayInfo),
        'guestRestricted': value.guestRestricted,
        'guestRestrictedCode': value.guestRestrictedCode,
        'guestRestrictedReasonDesc': value.guestRestrictedReasonDesc,
        'id': value.id,
        'idContext': value.idContext,
        'language': value.language,
        'membership': (0, MembershipInfoType_1.MembershipInfoTypeToJSON)(value.membership),
        'middleName': value.middleName,
        'namePrefix': value.namePrefix,
        'nameSuffix': value.nameSuffix,
        'nameTitle': value.nameTitle,
        'nameType': (0, NameTypeType_1.NameTypeTypeToJSON)(value.nameType),
        'nationality': (0, CountryNameType_1.CountryNameTypeToJSON)(value.nationality),
        'phoneNumber': value.phoneNumber,
        'registrationCardNo': value.registrationCardNo,
        'surname': value.surname,
        'surnamePrefix': value.surnamePrefix,
        'type': value.type,
        'vip': (0, VIPType_1.VIPTypeToJSON)(value.vip),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.ResGuestInfoTypeToJSON = ResGuestInfoTypeToJSON;
