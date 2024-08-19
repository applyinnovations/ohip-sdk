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
exports.ECertificateTypeToJSON = exports.ECertificateTypeFromJSONTyped = exports.ECertificateTypeFromJSON = exports.instanceOfECertificateType = void 0;
const runtime_1 = require("../runtime");
const ECertificateConsumptionType_1 = require("./ECertificateConsumptionType");
const ECertificateInfoType_1 = require("./ECertificateInfoType");
const ECertificateIssueSourceType_1 = require("./ECertificateIssueSourceType");
const ECertificateStatusType_1 = require("./ECertificateStatusType");
const ProfileId_1 = require("./ProfileId");
/**
 * Check if a given object implements the ECertificateType interface.
 */
function instanceOfECertificateType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfECertificateType = instanceOfECertificateType;
function ECertificateTypeFromJSON(json) {
    return ECertificateTypeFromJSONTyped(json, false);
}
exports.ECertificateTypeFromJSON = ECertificateTypeFromJSON;
function ECertificateTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'certificateNo': !(0, runtime_1.exists)(json, 'certificateNo') ? undefined : json['certificateNo'],
        'consumptionDetail': !(0, runtime_1.exists)(json, 'consumptionDetail') ? undefined : (0, ECertificateConsumptionType_1.ECertificateConsumptionTypeFromJSON)(json['consumptionDetail']),
        'eCertificateInfo': !(0, runtime_1.exists)(json, 'eCertificateInfo') ? undefined : (0, ECertificateInfoType_1.ECertificateInfoTypeFromJSON)(json['eCertificateInfo']),
        'expiryDate': !(0, runtime_1.exists)(json, 'expiryDate') ? undefined : json['expiryDate'],
        'issueDate': !(0, runtime_1.exists)(json, 'issueDate') ? undefined : json['issueDate'],
        'printed': !(0, runtime_1.exists)(json, 'printed') ? undefined : json['printed'],
        'profileId': !(0, runtime_1.exists)(json, 'profileId') ? undefined : (0, ProfileId_1.ProfileIdFromJSON)(json['profileId']),
        'source': !(0, runtime_1.exists)(json, 'source') ? undefined : (0, ECertificateIssueSourceType_1.ECertificateIssueSourceTypeFromJSON)(json['source']),
        'status': !(0, runtime_1.exists)(json, 'status') ? undefined : (0, ECertificateStatusType_1.ECertificateStatusTypeFromJSON)(json['status']),
        'voucherNo': !(0, runtime_1.exists)(json, 'voucherNo') ? undefined : json['voucherNo'],
    };
}
exports.ECertificateTypeFromJSONTyped = ECertificateTypeFromJSONTyped;
function ECertificateTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'certificateNo': value.certificateNo,
        'consumptionDetail': (0, ECertificateConsumptionType_1.ECertificateConsumptionTypeToJSON)(value.consumptionDetail),
        'eCertificateInfo': (0, ECertificateInfoType_1.ECertificateInfoTypeToJSON)(value.eCertificateInfo),
        'expiryDate': value.expiryDate,
        'issueDate': value.issueDate,
        'printed': value.printed,
        'profileId': (0, ProfileId_1.ProfileIdToJSON)(value.profileId),
        'source': (0, ECertificateIssueSourceType_1.ECertificateIssueSourceTypeToJSON)(value.source),
        'status': (0, ECertificateStatusType_1.ECertificateStatusTypeToJSON)(value.status),
        'voucherNo': value.voucherNo,
    };
}
exports.ECertificateTypeToJSON = ECertificateTypeToJSON;
