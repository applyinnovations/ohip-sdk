"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
const AwardId_1 = require("./AwardId");
const ECertificateConsumptionType_1 = require("./ECertificateConsumptionType");
const ECertificateGenerationType_1 = require("./ECertificateGenerationType");
const ECertificateInfoType_1 = require("./ECertificateInfoType");
const ECertificateIssueSourceType_1 = require("./ECertificateIssueSourceType");
const ECertificateIssueType_1 = require("./ECertificateIssueType");
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
        'awardId': !(0, runtime_1.exists)(json, 'awardId') ? undefined : (0, AwardId_1.AwardIdFromJSON)(json['awardId']),
        'awardPoints': !(0, runtime_1.exists)(json, 'awardPoints') ? undefined : json['awardPoints'],
        'cancelRequestDate': !(0, runtime_1.exists)(json, 'cancelRequestDate') ? undefined : json['cancelRequestDate'],
        'certificateId': !(0, runtime_1.exists)(json, 'certificateId') ? undefined : json['certificateId'],
        'certificateNo': !(0, runtime_1.exists)(json, 'certificateNo') ? undefined : json['certificateNo'],
        'consumptionDetail': !(0, runtime_1.exists)(json, 'consumptionDetail') ? undefined : (0, ECertificateConsumptionType_1.ECertificateConsumptionTypeFromJSON)(json['consumptionDetail']),
        'databaseId': !(0, runtime_1.exists)(json, 'databaseId') ? undefined : json['databaseId'],
        'eCertificateInfo': !(0, runtime_1.exists)(json, 'eCertificateInfo') ? undefined : (0, ECertificateInfoType_1.ECertificateInfoTypeFromJSON)(json['eCertificateInfo']),
        'expiryDate': !(0, runtime_1.exists)(json, 'expiryDate') ? undefined : json['expiryDate'],
        'extensionCount': !(0, runtime_1.exists)(json, 'extensionCount') ? undefined : json['extensionCount'],
        'generationDetail': !(0, runtime_1.exists)(json, 'generationDetail') ? undefined : (0, ECertificateGenerationType_1.ECertificateGenerationTypeFromJSON)(json['generationDetail']),
        'inLieuSequence': !(0, runtime_1.exists)(json, 'inLieuSequence') ? undefined : json['inLieuSequence'],
        'inactiveDate': !(0, runtime_1.exists)(json, 'inactiveDate') ? undefined : json['inactiveDate'],
        'issueDate': !(0, runtime_1.exists)(json, 'issueDate') ? undefined : json['issueDate'],
        'issueType': !(0, runtime_1.exists)(json, 'issueType') ? undefined : (0, ECertificateIssueType_1.ECertificateIssueTypeFromJSON)(json['issueType']),
        'newExpiryDate': !(0, runtime_1.exists)(json, 'newExpiryDate') ? undefined : json['newExpiryDate'],
        'originalCertificateNo': !(0, runtime_1.exists)(json, 'originalCertificateNo') ? undefined : json['originalCertificateNo'],
        'originalVoucherNo': !(0, runtime_1.exists)(json, 'originalVoucherNo') ? undefined : json['originalVoucherNo'],
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
        'awardId': (0, AwardId_1.AwardIdToJSON)(value.awardId),
        'awardPoints': value.awardPoints,
        'cancelRequestDate': value.cancelRequestDate,
        'certificateId': value.certificateId,
        'certificateNo': value.certificateNo,
        'consumptionDetail': (0, ECertificateConsumptionType_1.ECertificateConsumptionTypeToJSON)(value.consumptionDetail),
        'databaseId': value.databaseId,
        'eCertificateInfo': (0, ECertificateInfoType_1.ECertificateInfoTypeToJSON)(value.eCertificateInfo),
        'expiryDate': value.expiryDate,
        'extensionCount': value.extensionCount,
        'generationDetail': (0, ECertificateGenerationType_1.ECertificateGenerationTypeToJSON)(value.generationDetail),
        'inLieuSequence': value.inLieuSequence,
        'inactiveDate': value.inactiveDate,
        'issueDate': value.issueDate,
        'issueType': (0, ECertificateIssueType_1.ECertificateIssueTypeToJSON)(value.issueType),
        'newExpiryDate': value.newExpiryDate,
        'originalCertificateNo': value.originalCertificateNo,
        'originalVoucherNo': value.originalVoucherNo,
        'printed': value.printed,
        'profileId': (0, ProfileId_1.ProfileIdToJSON)(value.profileId),
        'source': (0, ECertificateIssueSourceType_1.ECertificateIssueSourceTypeToJSON)(value.source),
        'status': (0, ECertificateStatusType_1.ECertificateStatusTypeToJSON)(value.status),
        'voucherNo': value.voucherNo,
    };
}
exports.ECertificateTypeToJSON = ECertificateTypeToJSON;
