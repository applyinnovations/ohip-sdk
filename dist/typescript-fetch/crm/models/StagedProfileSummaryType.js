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
exports.StagedProfileSummaryTypeToJSON = exports.StagedProfileSummaryTypeFromJSONTyped = exports.StagedProfileSummaryTypeFromJSON = exports.instanceOfStagedProfileSummaryType = void 0;
const runtime_1 = require("../runtime");
const CountryNameType_1 = require("./CountryNameType");
const ProfileNameType_1 = require("./ProfileNameType");
const StagedProfileStatus_1 = require("./StagedProfileStatus");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the StagedProfileSummaryType interface.
 */
function instanceOfStagedProfileSummaryType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfStagedProfileSummaryType = instanceOfStagedProfileSummaryType;
function StagedProfileSummaryTypeFromJSON(json) {
    return StagedProfileSummaryTypeFromJSONTyped(json, false);
}
exports.StagedProfileSummaryTypeFromJSON = StagedProfileSummaryTypeFromJSON;
function StagedProfileSummaryTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'country': !(0, runtime_1.exists)(json, 'country') ? undefined : (0, CountryNameType_1.CountryNameTypeFromJSON)(json['country']),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'importDate': !(0, runtime_1.exists)(json, 'importDate') ? undefined : json['importDate'],
        'profileIdList': !(0, runtime_1.exists)(json, 'profileIdList') ? undefined : (json['profileIdList'].map(UniqueIDType_1.UniqueIDTypeFromJSON)),
        'profileName': !(0, runtime_1.exists)(json, 'profileName') ? undefined : (0, ProfileNameType_1.ProfileNameTypeFromJSON)(json['profileName']),
        'profileType': !(0, runtime_1.exists)(json, 'profileType') ? undefined : json['profileType'],
        'region': !(0, runtime_1.exists)(json, 'region') ? undefined : json['region'],
        'stageStatus': !(0, runtime_1.exists)(json, 'stageStatus') ? undefined : (0, StagedProfileStatus_1.StagedProfileStatusFromJSON)(json['stageStatus']),
    };
}
exports.StagedProfileSummaryTypeFromJSONTyped = StagedProfileSummaryTypeFromJSONTyped;
function StagedProfileSummaryTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'country': (0, CountryNameType_1.CountryNameTypeToJSON)(value.country),
        'hotelId': value.hotelId,
        'importDate': value.importDate,
        'profileIdList': value.profileIdList === undefined ? undefined : (value.profileIdList.map(UniqueIDType_1.UniqueIDTypeToJSON)),
        'profileName': (0, ProfileNameType_1.ProfileNameTypeToJSON)(value.profileName),
        'profileType': value.profileType,
        'region': value.region,
        'stageStatus': (0, StagedProfileStatus_1.StagedProfileStatusToJSON)(value.stageStatus),
    };
}
exports.StagedProfileSummaryTypeToJSON = StagedProfileSummaryTypeToJSON;
