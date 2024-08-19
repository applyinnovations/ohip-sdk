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
exports.ReservationCertificateTypeToJSON = exports.ReservationCertificateTypeFromJSONTyped = exports.ReservationCertificateTypeFromJSON = exports.ReservationCertificateType = void 0;
/**
 * Certificate is incentive.
 * @export
 */
exports.ReservationCertificateType = {
    Reward: 'Reward',
    Incentive: 'Incentive'
};
function ReservationCertificateTypeFromJSON(json) {
    return ReservationCertificateTypeFromJSONTyped(json, false);
}
exports.ReservationCertificateTypeFromJSON = ReservationCertificateTypeFromJSON;
function ReservationCertificateTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.ReservationCertificateTypeFromJSONTyped = ReservationCertificateTypeFromJSONTyped;
function ReservationCertificateTypeToJSON(value) {
    return value;
}
exports.ReservationCertificateTypeToJSON = ReservationCertificateTypeToJSON;
