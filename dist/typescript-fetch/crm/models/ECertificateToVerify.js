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
exports.ECertificateToVerifyToJSON = exports.ECertificateToVerifyFromJSONTyped = exports.ECertificateToVerifyFromJSON = exports.instanceOfECertificateToVerify = void 0;
const runtime_1 = require("../runtime");
const Links_1 = require("./Links");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the ECertificateToVerify interface.
 */
function instanceOfECertificateToVerify(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfECertificateToVerify = instanceOfECertificateToVerify;
function ECertificateToVerifyFromJSON(json) {
    return ECertificateToVerifyFromJSONTyped(json, false);
}
exports.ECertificateToVerifyFromJSON = ECertificateToVerifyFromJSON;
function ECertificateToVerifyFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'allowReservation': !(0, runtime_1.exists)(json, 'allowReservation') ? undefined : json['allowReservation'],
        'certificateId': !(0, runtime_1.exists)(json, 'certificateId') ? undefined : json['certificateId'],
        'certificateNo': !(0, runtime_1.exists)(json, 'certificateNo') ? undefined : json['certificateNo'],
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.ECertificateToVerifyFromJSONTyped = ECertificateToVerifyFromJSONTyped;
function ECertificateToVerifyToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'allowReservation': value.allowReservation,
        'certificateId': value.certificateId,
        'certificateNo': value.certificateNo,
        'links': (0, Links_1.LinksToJSON)(value.links),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.ECertificateToVerifyToJSON = ECertificateToVerifyToJSON;
