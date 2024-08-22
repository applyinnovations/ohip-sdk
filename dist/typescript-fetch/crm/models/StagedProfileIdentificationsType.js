"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StagedProfileIdentificationsTypeToJSON = exports.StagedProfileIdentificationsTypeFromJSONTyped = exports.StagedProfileIdentificationsTypeFromJSON = exports.instanceOfStagedProfileIdentificationsType = void 0;
const runtime_1 = require("../runtime");
const IdentificationType_1 = require("./IdentificationType");
/**
 * Check if a given object implements the StagedProfileIdentificationsType interface.
 */
function instanceOfStagedProfileIdentificationsType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfStagedProfileIdentificationsType = instanceOfStagedProfileIdentificationsType;
function StagedProfileIdentificationsTypeFromJSON(json) {
    return StagedProfileIdentificationsTypeFromJSONTyped(json, false);
}
exports.StagedProfileIdentificationsTypeFromJSON = StagedProfileIdentificationsTypeFromJSON;
function StagedProfileIdentificationsTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'documentResort': !(0, runtime_1.exists)(json, 'documentResort') ? undefined : json['documentResort'],
        'errorDescription': !(0, runtime_1.exists)(json, 'errorDescription') ? undefined : json['errorDescription'],
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'identification': !(0, runtime_1.exists)(json, 'identification') ? undefined : (0, IdentificationType_1.IdentificationTypeFromJSON)(json['identification']),
        'inactiveDate': !(0, runtime_1.exists)(json, 'inactiveDate') ? undefined : json['inactiveDate'],
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
    };
}
exports.StagedProfileIdentificationsTypeFromJSONTyped = StagedProfileIdentificationsTypeFromJSONTyped;
function StagedProfileIdentificationsTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'documentResort': value.documentResort,
        'errorDescription': value.errorDescription,
        'id': value.id,
        'identification': (0, IdentificationType_1.IdentificationTypeToJSON)(value.identification),
        'inactiveDate': value.inactiveDate,
        'type': value.type,
    };
}
exports.StagedProfileIdentificationsTypeToJSON = StagedProfileIdentificationsTypeToJSON;
