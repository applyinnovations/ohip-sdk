"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileTypeToJSON = exports.ProfileTypeFromJSONTyped = exports.ProfileTypeFromJSON = exports.instanceOfProfileType = void 0;
const runtime_1 = require("../runtime");
const CompanyType_1 = require("./CompanyType");
const CustomerType_1 = require("./CustomerType");
const ImageSetType_1 = require("./ImageSetType");
const ProfileStatusType_1 = require("./ProfileStatusType");
const ProfileTypeAddresses_1 = require("./ProfileTypeAddresses");
const ProfileTypeComments_1 = require("./ProfileTypeComments");
const ProfileTypeEmails_1 = require("./ProfileTypeEmails");
const ProfileTypeRelationships_1 = require("./ProfileTypeRelationships");
const ProfileTypeRelationshipsSummary_1 = require("./ProfileTypeRelationshipsSummary");
const ProfileTypeRoomOwnershipsList_1 = require("./ProfileTypeRoomOwnershipsList");
const ProfileTypeTelephones_1 = require("./ProfileTypeTelephones");
const ProfileTypeType_1 = require("./ProfileTypeType");
const ProfileTypeURLs_1 = require("./ProfileTypeURLs");
const ReservationStayHistoryFutureInfoType_1 = require("./ReservationStayHistoryFutureInfoType");
/**
 * Check if a given object implements the ProfileType interface.
 */
function instanceOfProfileType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfProfileType = instanceOfProfileType;
function ProfileTypeFromJSON(json) {
    return ProfileTypeFromJSONTyped(json, false);
}
exports.ProfileTypeFromJSON = ProfileTypeFromJSON;
function ProfileTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'addresses': !(0, runtime_1.exists)(json, 'addresses') ? undefined : (0, ProfileTypeAddresses_1.ProfileTypeAddressesFromJSON)(json['addresses']),
        'comments': !(0, runtime_1.exists)(json, 'comments') ? undefined : (0, ProfileTypeComments_1.ProfileTypeCommentsFromJSON)(json['comments']),
        'company': !(0, runtime_1.exists)(json, 'company') ? undefined : (0, CompanyType_1.CompanyTypeFromJSON)(json['company']),
        'customer': !(0, runtime_1.exists)(json, 'customer') ? undefined : (0, CustomerType_1.CustomerTypeFromJSON)(json['customer']),
        'emails': !(0, runtime_1.exists)(json, 'emails') ? undefined : (0, ProfileTypeEmails_1.ProfileTypeEmailsFromJSON)(json['emails']),
        'ownerCode': !(0, runtime_1.exists)(json, 'ownerCode') ? undefined : json['ownerCode'],
        'profileImage': !(0, runtime_1.exists)(json, 'profileImage') ? undefined : (0, ImageSetType_1.ImageSetTypeFromJSON)(json['profileImage']),
        'profileType': !(0, runtime_1.exists)(json, 'profileType') ? undefined : (0, ProfileTypeType_1.ProfileTypeTypeFromJSON)(json['profileType']),
        'registeredProperty': !(0, runtime_1.exists)(json, 'registeredProperty') ? undefined : json['registeredProperty'],
        'relationships': !(0, runtime_1.exists)(json, 'relationships') ? undefined : (0, ProfileTypeRelationships_1.ProfileTypeRelationshipsFromJSON)(json['relationships']),
        'relationshipsSummary': !(0, runtime_1.exists)(json, 'relationshipsSummary') ? undefined : (0, ProfileTypeRelationshipsSummary_1.ProfileTypeRelationshipsSummaryFromJSON)(json['relationshipsSummary']),
        'requestForHotel': !(0, runtime_1.exists)(json, 'requestForHotel') ? undefined : json['requestForHotel'],
        'roomOwnershipsList': !(0, runtime_1.exists)(json, 'roomOwnershipsList') ? undefined : (0, ProfileTypeRoomOwnershipsList_1.ProfileTypeRoomOwnershipsListFromJSON)(json['roomOwnershipsList']),
        'showInactiveRoomOwners': !(0, runtime_1.exists)(json, 'showInactiveRoomOwners') ? undefined : json['showInactiveRoomOwners'],
        'statusCode': !(0, runtime_1.exists)(json, 'statusCode') ? undefined : (0, ProfileStatusType_1.ProfileStatusTypeFromJSON)(json['statusCode']),
        'stayReservationInfoList': !(0, runtime_1.exists)(json, 'stayReservationInfoList') ? undefined : (0, ReservationStayHistoryFutureInfoType_1.ReservationStayHistoryFutureInfoTypeFromJSON)(json['stayReservationInfoList']),
        'telephones': !(0, runtime_1.exists)(json, 'telephones') ? undefined : (0, ProfileTypeTelephones_1.ProfileTypeTelephonesFromJSON)(json['telephones']),
        'uRLs': !(0, runtime_1.exists)(json, 'uRLs') ? undefined : (0, ProfileTypeURLs_1.ProfileTypeURLsFromJSON)(json['uRLs']),
    };
}
exports.ProfileTypeFromJSONTyped = ProfileTypeFromJSONTyped;
function ProfileTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'addresses': (0, ProfileTypeAddresses_1.ProfileTypeAddressesToJSON)(value.addresses),
        'comments': (0, ProfileTypeComments_1.ProfileTypeCommentsToJSON)(value.comments),
        'company': (0, CompanyType_1.CompanyTypeToJSON)(value.company),
        'customer': (0, CustomerType_1.CustomerTypeToJSON)(value.customer),
        'emails': (0, ProfileTypeEmails_1.ProfileTypeEmailsToJSON)(value.emails),
        'ownerCode': value.ownerCode,
        'profileImage': (0, ImageSetType_1.ImageSetTypeToJSON)(value.profileImage),
        'profileType': (0, ProfileTypeType_1.ProfileTypeTypeToJSON)(value.profileType),
        'registeredProperty': value.registeredProperty,
        'relationships': (0, ProfileTypeRelationships_1.ProfileTypeRelationshipsToJSON)(value.relationships),
        'relationshipsSummary': (0, ProfileTypeRelationshipsSummary_1.ProfileTypeRelationshipsSummaryToJSON)(value.relationshipsSummary),
        'requestForHotel': value.requestForHotel,
        'roomOwnershipsList': (0, ProfileTypeRoomOwnershipsList_1.ProfileTypeRoomOwnershipsListToJSON)(value.roomOwnershipsList),
        'showInactiveRoomOwners': value.showInactiveRoomOwners,
        'statusCode': (0, ProfileStatusType_1.ProfileStatusTypeToJSON)(value.statusCode),
        'stayReservationInfoList': (0, ReservationStayHistoryFutureInfoType_1.ReservationStayHistoryFutureInfoTypeToJSON)(value.stayReservationInfoList),
        'telephones': (0, ProfileTypeTelephones_1.ProfileTypeTelephonesToJSON)(value.telephones),
        'uRLs': (0, ProfileTypeURLs_1.ProfileTypeURLsToJSON)(value.uRLs),
    };
}
exports.ProfileTypeToJSON = ProfileTypeToJSON;