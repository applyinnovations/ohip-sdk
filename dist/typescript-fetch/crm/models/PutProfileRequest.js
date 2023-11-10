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
exports.PutProfileRequestToJSON = exports.PutProfileRequestFromJSONTyped = exports.PutProfileRequestFromJSON = exports.instanceOfPutProfileRequest = void 0;
const runtime_1 = require("../runtime");
const ExternalReferencesType_1 = require("./ExternalReferencesType");
const Links_1 = require("./Links");
const ProfileAllowedActionsType_1 = require("./ProfileAllowedActionsType");
const ProfileIdList_1 = require("./ProfileIdList");
const ProfileType_1 = require("./ProfileType");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the PutProfileRequest interface.
 */
function instanceOfPutProfileRequest(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPutProfileRequest = instanceOfPutProfileRequest;
function PutProfileRequestFromJSON(json) {
    return PutProfileRequestFromJSONTyped(json, false);
}
exports.PutProfileRequestFromJSON = PutProfileRequestFromJSON;
function PutProfileRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'externalReferences': !(0, runtime_1.exists)(json, 'externalReferences') ? undefined : (0, ExternalReferencesType_1.ExternalReferencesTypeFromJSON)(json['externalReferences']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'profileAllowedActions': !(0, runtime_1.exists)(json, 'profileAllowedActions') ? undefined : (0, ProfileAllowedActionsType_1.ProfileAllowedActionsTypeFromJSON)(json['profileAllowedActions']),
        'profileDetails': !(0, runtime_1.exists)(json, 'profileDetails') ? undefined : (0, ProfileType_1.ProfileTypeFromJSON)(json['profileDetails']),
        'profileIdList': !(0, runtime_1.exists)(json, 'profileIdList') ? undefined : (0, ProfileIdList_1.ProfileIdListFromJSON)(json['profileIdList']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.PutProfileRequestFromJSONTyped = PutProfileRequestFromJSONTyped;
function PutProfileRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'externalReferences': (0, ExternalReferencesType_1.ExternalReferencesTypeToJSON)(value.externalReferences),
        'links': (0, Links_1.LinksToJSON)(value.links),
        'profileAllowedActions': (0, ProfileAllowedActionsType_1.ProfileAllowedActionsTypeToJSON)(value.profileAllowedActions),
        'profileDetails': (0, ProfileType_1.ProfileTypeToJSON)(value.profileDetails),
        'profileIdList': (0, ProfileIdList_1.ProfileIdListToJSON)(value.profileIdList),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.PutProfileRequestToJSON = PutProfileRequestToJSON;
