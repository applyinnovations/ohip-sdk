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
exports.ECertificateToConsumeToJSON = exports.ECertificateToConsumeFromJSONTyped = exports.ECertificateToConsumeFromJSON = exports.instanceOfECertificateToConsume = void 0;
const runtime_1 = require("../runtime");
const ECertificateType_1 = require("./ECertificateType");
const InstanceLink_1 = require("./InstanceLink");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the ECertificateToConsume interface.
 */
function instanceOfECertificateToConsume(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfECertificateToConsume = instanceOfECertificateToConsume;
function ECertificateToConsumeFromJSON(json) {
    return ECertificateToConsumeFromJSONTyped(json, false);
}
exports.ECertificateToConsumeFromJSON = ECertificateToConsumeFromJSON;
function ECertificateToConsumeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'consumeECertificates': !(0, runtime_1.exists)(json, 'consumeECertificates') ? undefined : (json['consumeECertificates'].map(ECertificateType_1.ECertificateTypeFromJSON)),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.ECertificateToConsumeFromJSONTyped = ECertificateToConsumeFromJSONTyped;
function ECertificateToConsumeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'consumeECertificates': value.consumeECertificates === undefined ? undefined : (value.consumeECertificates.map(ECertificateType_1.ECertificateTypeToJSON)),
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.ECertificateToConsumeToJSON = ECertificateToConsumeToJSON;
