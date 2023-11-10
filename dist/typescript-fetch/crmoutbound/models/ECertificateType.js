"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management Outbound API
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 20.99.99.99
 * Contact: hospitality_apis_ww_grp@oracle.com
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
        'certificateId': !(0, runtime_1.exists)(json, 'certificateId') ? undefined : json['certificateId'],
        'voucherNo': !(0, runtime_1.exists)(json, 'voucherNo') ? undefined : json['voucherNo'],
        'certificateNo': !(0, runtime_1.exists)(json, 'certificateNo') ? undefined : json['certificateNo'],
        'eCertificateInfo': !(0, runtime_1.exists)(json, 'eCertificateInfo') ? undefined : (0, ECertificateInfoType_1.ECertificateInfoTypeFromJSON)(json['eCertificateInfo']),
        'expiryDate': !(0, runtime_1.exists)(json, 'expiryDate') ? undefined : (new Date(json['expiryDate'])),
        'newExpiryDate': !(0, runtime_1.exists)(json, 'newExpiryDate') ? undefined : (new Date(json['newExpiryDate'])),
        'profileId': !(0, runtime_1.exists)(json, 'profileId') ? undefined : (0, ProfileId_1.ProfileIdFromJSON)(json['profileId']),
        'consumptionDetail': !(0, runtime_1.exists)(json, 'consumptionDetail') ? undefined : (0, ECertificateConsumptionType_1.ECertificateConsumptionTypeFromJSON)(json['consumptionDetail']),
        'status': !(0, runtime_1.exists)(json, 'status') ? undefined : (0, ECertificateStatusType_1.ECertificateStatusTypeFromJSON)(json['status']),
        'printed': !(0, runtime_1.exists)(json, 'printed') ? undefined : json['printed'],
        'inactiveDate': !(0, runtime_1.exists)(json, 'inactiveDate') ? undefined : (new Date(json['inactiveDate'])),
        'awardId': !(0, runtime_1.exists)(json, 'awardId') ? undefined : (0, AwardId_1.AwardIdFromJSON)(json['awardId']),
        'databaseId': !(0, runtime_1.exists)(json, 'databaseId') ? undefined : json['databaseId'],
        'source': !(0, runtime_1.exists)(json, 'source') ? undefined : (0, ECertificateIssueSourceType_1.ECertificateIssueSourceTypeFromJSON)(json['source']),
        'issueType': !(0, runtime_1.exists)(json, 'issueType') ? undefined : (0, ECertificateIssueType_1.ECertificateIssueTypeFromJSON)(json['issueType']),
        'issueDate': !(0, runtime_1.exists)(json, 'issueDate') ? undefined : (new Date(json['issueDate'])),
        'awardPoints': !(0, runtime_1.exists)(json, 'awardPoints') ? undefined : json['awardPoints'],
        'generationDetail': !(0, runtime_1.exists)(json, 'generationDetail') ? undefined : (0, ECertificateGenerationType_1.ECertificateGenerationTypeFromJSON)(json['generationDetail']),
        'originalVoucherNo': !(0, runtime_1.exists)(json, 'originalVoucherNo') ? undefined : json['originalVoucherNo'],
        'originalCertificateNo': !(0, runtime_1.exists)(json, 'originalCertificateNo') ? undefined : json['originalCertificateNo'],
        'inLieuSeq': !(0, runtime_1.exists)(json, 'inLieuSeq') ? undefined : json['inLieuSeq'],
        'cancelRequestDate': !(0, runtime_1.exists)(json, 'cancelRequestDate') ? undefined : (new Date(json['cancelRequestDate'])),
        'extensionCount': !(0, runtime_1.exists)(json, 'extensionCount') ? undefined : json['extensionCount'],
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
        'certificateId': value.certificateId,
        'voucherNo': value.voucherNo,
        'certificateNo': value.certificateNo,
        'eCertificateInfo': (0, ECertificateInfoType_1.ECertificateInfoTypeToJSON)(value.eCertificateInfo),
        'expiryDate': value.expiryDate === undefined ? undefined : (value.expiryDate.toISOString().substr(0, 10)),
        'newExpiryDate': value.newExpiryDate === undefined ? undefined : (value.newExpiryDate.toISOString().substr(0, 10)),
        'profileId': (0, ProfileId_1.ProfileIdToJSON)(value.profileId),
        'consumptionDetail': (0, ECertificateConsumptionType_1.ECertificateConsumptionTypeToJSON)(value.consumptionDetail),
        'status': (0, ECertificateStatusType_1.ECertificateStatusTypeToJSON)(value.status),
        'printed': value.printed,
        'inactiveDate': value.inactiveDate === undefined ? undefined : (value.inactiveDate.toISOString().substr(0, 10)),
        'awardId': (0, AwardId_1.AwardIdToJSON)(value.awardId),
        'databaseId': value.databaseId,
        'source': (0, ECertificateIssueSourceType_1.ECertificateIssueSourceTypeToJSON)(value.source),
        'issueType': (0, ECertificateIssueType_1.ECertificateIssueTypeToJSON)(value.issueType),
        'issueDate': value.issueDate === undefined ? undefined : (value.issueDate.toISOString().substr(0, 10)),
        'awardPoints': value.awardPoints,
        'generationDetail': (0, ECertificateGenerationType_1.ECertificateGenerationTypeToJSON)(value.generationDetail),
        'originalVoucherNo': value.originalVoucherNo,
        'originalCertificateNo': value.originalCertificateNo,
        'inLieuSeq': value.inLieuSeq,
        'cancelRequestDate': value.cancelRequestDate === undefined ? undefined : (value.cancelRequestDate.toISOString().substr(0, 10)),
        'extensionCount': value.extensionCount,
    };
}
exports.ECertificateTypeToJSON = ECertificateTypeToJSON;
