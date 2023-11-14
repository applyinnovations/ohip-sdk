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
exports.StagedProfileTypeToJSON = exports.StagedProfileTypeFromJSONTyped = exports.StagedProfileTypeFromJSON = exports.instanceOfStagedProfileType = void 0;
const runtime_1 = require("../runtime");
const MailingActionsType_1 = require("./MailingActionsType");
const PrivacyInfoType_1 = require("./PrivacyInfoType");
const StagedProfileAddressType_1 = require("./StagedProfileAddressType");
const StagedProfileCommentInfosType_1 = require("./StagedProfileCommentInfosType");
const StagedProfileCompanyType_1 = require("./StagedProfileCompanyType");
const StagedProfileCustomerType_1 = require("./StagedProfileCustomerType");
const StagedProfileEmailType_1 = require("./StagedProfileEmailType");
const StagedProfileIdentificationsType_1 = require("./StagedProfileIdentificationsType");
const StagedProfileKeywordType_1 = require("./StagedProfileKeywordType");
const StagedProfileMembershipType_1 = require("./StagedProfileMembershipType");
const StagedProfileNegotiatedRateType_1 = require("./StagedProfileNegotiatedRateType");
const StagedProfilePhoneType_1 = require("./StagedProfilePhoneType");
const StagedProfilePreferenceType_1 = require("./StagedProfilePreferenceType");
const StagedProfileRoutingInstructionType_1 = require("./StagedProfileRoutingInstructionType");
const StagedProfileURLType_1 = require("./StagedProfileURLType");
const StagedProfileUserDefinedFieldsType_1 = require("./StagedProfileUserDefinedFieldsType");
const UniqueIDListType_1 = require("./UniqueIDListType");
/**
 * Check if a given object implements the StagedProfileType interface.
 */
function instanceOfStagedProfileType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfStagedProfileType = instanceOfStagedProfileType;
function StagedProfileTypeFromJSON(json) {
    return StagedProfileTypeFromJSONTyped(json, false);
}
exports.StagedProfileTypeFromJSON = StagedProfileTypeFromJSON;
function StagedProfileTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'addresses': !(0, runtime_1.exists)(json, 'addresses') ? undefined : (json['addresses'].map(StagedProfileAddressType_1.StagedProfileAddressTypeFromJSON)),
        'comments': !(0, runtime_1.exists)(json, 'comments') ? undefined : (0, StagedProfileCommentInfosType_1.StagedProfileCommentInfosTypeFromJSON)(json['comments']),
        'company': !(0, runtime_1.exists)(json, 'company') ? undefined : (0, StagedProfileCompanyType_1.StagedProfileCompanyTypeFromJSON)(json['company']),
        'customer': !(0, runtime_1.exists)(json, 'customer') ? undefined : (0, StagedProfileCustomerType_1.StagedProfileCustomerTypeFromJSON)(json['customer']),
        'emails': !(0, runtime_1.exists)(json, 'emails') ? undefined : (json['emails'].map(StagedProfileEmailType_1.StagedProfileEmailTypeFromJSON)),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'identifications': !(0, runtime_1.exists)(json, 'identifications') ? undefined : (json['identifications'].map(StagedProfileIdentificationsType_1.StagedProfileIdentificationsTypeFromJSON)),
        'importDate': !(0, runtime_1.exists)(json, 'importDate') ? undefined : (new Date(json['importDate'])),
        'keywords': !(0, runtime_1.exists)(json, 'keywords') ? undefined : (json['keywords'].map(StagedProfileKeywordType_1.StagedProfileKeywordTypeFromJSON)),
        'mailingActions': !(0, runtime_1.exists)(json, 'mailingActions') ? undefined : (0, MailingActionsType_1.MailingActionsTypeFromJSON)(json['mailingActions']),
        'memberships': !(0, runtime_1.exists)(json, 'memberships') ? undefined : (json['memberships'].map(StagedProfileMembershipType_1.StagedProfileMembershipTypeFromJSON)),
        'negotiatedRates': !(0, runtime_1.exists)(json, 'negotiatedRates') ? undefined : (json['negotiatedRates'].map(StagedProfileNegotiatedRateType_1.StagedProfileNegotiatedRateTypeFromJSON)),
        'preferences': !(0, runtime_1.exists)(json, 'preferences') ? undefined : (json['preferences'].map(StagedProfilePreferenceType_1.StagedProfilePreferenceTypeFromJSON)),
        'privacyInfo': !(0, runtime_1.exists)(json, 'privacyInfo') ? undefined : (0, PrivacyInfoType_1.PrivacyInfoTypeFromJSON)(json['privacyInfo']),
        'profileIdList': !(0, runtime_1.exists)(json, 'profileIdList') ? undefined : (0, UniqueIDListType_1.UniqueIDListTypeFromJSON)(json['profileIdList']),
        'profileType': !(0, runtime_1.exists)(json, 'profileType') ? undefined : json['profileType'],
        'routingInstructions': !(0, runtime_1.exists)(json, 'routingInstructions') ? undefined : (json['routingInstructions'].map(StagedProfileRoutingInstructionType_1.StagedProfileRoutingInstructionTypeFromJSON)),
        'stageStatus': !(0, runtime_1.exists)(json, 'stageStatus') ? undefined : json['stageStatus'],
        'telephones': !(0, runtime_1.exists)(json, 'telephones') ? undefined : (json['telephones'].map(StagedProfilePhoneType_1.StagedProfilePhoneTypeFromJSON)),
        'uRLs': !(0, runtime_1.exists)(json, 'uRLs') ? undefined : (json['uRLs'].map(StagedProfileURLType_1.StagedProfileURLTypeFromJSON)),
        'userDefinedFields': !(0, runtime_1.exists)(json, 'userDefinedFields') ? undefined : (0, StagedProfileUserDefinedFieldsType_1.StagedProfileUserDefinedFieldsTypeFromJSON)(json['userDefinedFields']),
    };
}
exports.StagedProfileTypeFromJSONTyped = StagedProfileTypeFromJSONTyped;
function StagedProfileTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'addresses': value.addresses === undefined ? undefined : (value.addresses.map(StagedProfileAddressType_1.StagedProfileAddressTypeToJSON)),
        'comments': (0, StagedProfileCommentInfosType_1.StagedProfileCommentInfosTypeToJSON)(value.comments),
        'company': (0, StagedProfileCompanyType_1.StagedProfileCompanyTypeToJSON)(value.company),
        'customer': (0, StagedProfileCustomerType_1.StagedProfileCustomerTypeToJSON)(value.customer),
        'emails': value.emails === undefined ? undefined : (value.emails.map(StagedProfileEmailType_1.StagedProfileEmailTypeToJSON)),
        'hotelId': value.hotelId,
        'identifications': value.identifications === undefined ? undefined : (value.identifications.map(StagedProfileIdentificationsType_1.StagedProfileIdentificationsTypeToJSON)),
        'importDate': value.importDate === undefined ? undefined : (value.importDate.toISOString().substring(0, 10)),
        'keywords': value.keywords === undefined ? undefined : (value.keywords.map(StagedProfileKeywordType_1.StagedProfileKeywordTypeToJSON)),
        'mailingActions': (0, MailingActionsType_1.MailingActionsTypeToJSON)(value.mailingActions),
        'memberships': value.memberships === undefined ? undefined : (value.memberships.map(StagedProfileMembershipType_1.StagedProfileMembershipTypeToJSON)),
        'negotiatedRates': value.negotiatedRates === undefined ? undefined : (value.negotiatedRates.map(StagedProfileNegotiatedRateType_1.StagedProfileNegotiatedRateTypeToJSON)),
        'preferences': value.preferences === undefined ? undefined : (value.preferences.map(StagedProfilePreferenceType_1.StagedProfilePreferenceTypeToJSON)),
        'privacyInfo': (0, PrivacyInfoType_1.PrivacyInfoTypeToJSON)(value.privacyInfo),
        'profileIdList': (0, UniqueIDListType_1.UniqueIDListTypeToJSON)(value.profileIdList),
        'profileType': value.profileType,
        'routingInstructions': value.routingInstructions === undefined ? undefined : (value.routingInstructions.map(StagedProfileRoutingInstructionType_1.StagedProfileRoutingInstructionTypeToJSON)),
        'stageStatus': value.stageStatus,
        'telephones': value.telephones === undefined ? undefined : (value.telephones.map(StagedProfilePhoneType_1.StagedProfilePhoneTypeToJSON)),
        'uRLs': value.uRLs === undefined ? undefined : (value.uRLs.map(StagedProfileURLType_1.StagedProfileURLTypeToJSON)),
        'userDefinedFields': (0, StagedProfileUserDefinedFieldsType_1.StagedProfileUserDefinedFieldsTypeToJSON)(value.userDefinedFields),
    };
}
exports.StagedProfileTypeToJSON = StagedProfileTypeToJSON;