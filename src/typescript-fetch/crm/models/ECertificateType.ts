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

import { exists, mapValues } from '../runtime';
import type { AwardId } from './AwardId';
import {
    AwardIdFromJSON,
    AwardIdFromJSONTyped,
    AwardIdToJSON,
} from './AwardId';
import type { ECertificateConsumptionType } from './ECertificateConsumptionType';
import {
    ECertificateConsumptionTypeFromJSON,
    ECertificateConsumptionTypeFromJSONTyped,
    ECertificateConsumptionTypeToJSON,
} from './ECertificateConsumptionType';
import type { ECertificateGenerationType } from './ECertificateGenerationType';
import {
    ECertificateGenerationTypeFromJSON,
    ECertificateGenerationTypeFromJSONTyped,
    ECertificateGenerationTypeToJSON,
} from './ECertificateGenerationType';
import type { ECertificateInfoType } from './ECertificateInfoType';
import {
    ECertificateInfoTypeFromJSON,
    ECertificateInfoTypeFromJSONTyped,
    ECertificateInfoTypeToJSON,
} from './ECertificateInfoType';
import type { ECertificateIssueSourceType } from './ECertificateIssueSourceType';
import {
    ECertificateIssueSourceTypeFromJSON,
    ECertificateIssueSourceTypeFromJSONTyped,
    ECertificateIssueSourceTypeToJSON,
} from './ECertificateIssueSourceType';
import type { ECertificateIssueType } from './ECertificateIssueType';
import {
    ECertificateIssueTypeFromJSON,
    ECertificateIssueTypeFromJSONTyped,
    ECertificateIssueTypeToJSON,
} from './ECertificateIssueType';
import type { ECertificateStatusType } from './ECertificateStatusType';
import {
    ECertificateStatusTypeFromJSON,
    ECertificateStatusTypeFromJSONTyped,
    ECertificateStatusTypeToJSON,
} from './ECertificateStatusType';
import type { ProfileId } from './ProfileId';
import {
    ProfileIdFromJSON,
    ProfileIdFromJSONTyped,
    ProfileIdToJSON,
} from './ProfileId';

/**
 * E-Certificates details.
 * @export
 * @interface ECertificateType
 */
export interface ECertificateType {
    /**
     * 
     * @type {AwardId}
     * @memberof ECertificateType
     */
    awardId?: AwardId;
    /**
     * Award points if any in case of certificate use membership award.
     * @type {number}
     * @memberof ECertificateType
     */
    awardPoints?: number;
    /**
     * Date on which the cancellation was requested.
     * @type {string}
     * @memberof ECertificateType
     */
    cancelRequestDate?: string;
    /**
     * System generated unique certificate id.
     * @type {number}
     * @memberof ECertificateType
     */
    certificateId?: number;
    /**
     * Printed certificate no. This has to be unique.
     * @type {string}
     * @memberof ECertificateType
     */
    certificateNo?: string;
    /**
     * 
     * @type {ECertificateConsumptionType}
     * @memberof ECertificateType
     */
    consumptionDetail?: ECertificateConsumptionType;
    /**
     * External reference from which the record is created.
     * @type {string}
     * @memberof ECertificateType
     */
    databaseId?: string;
    /**
     * 
     * @type {ECertificateInfoType}
     * @memberof ECertificateType
     */
    eCertificateInfo?: ECertificateInfoType;
    /**
     * Date of expiry.
     * @type {string}
     * @memberof ECertificateType
     */
    expiryDate?: string;
    /**
     * Number of times e-certificate is already extended.
     * @type {number}
     * @memberof ECertificateType
     */
    extensionCount?: number;
    /**
     * 
     * @type {ECertificateGenerationType}
     * @memberof ECertificateType
     */
    generationDetail?: ECertificateGenerationType;
    /**
     * Seq of the in lieu of certificate. 1..n. original certificate will be treated as null = 0.
     * @type {number}
     * @memberof ECertificateType
     */
    inLieuSequence?: number;
    /**
     * Date the record was marked as inactive.
     * @type {string}
     * @memberof ECertificateType
     */
    inactiveDate?: string;
    /**
     * Date when certificate was issued.
     * @type {string}
     * @memberof ECertificateType
     */
    issueDate?: string;
    /**
     * 
     * @type {ECertificateIssueType}
     * @memberof ECertificateType
     */
    issueType?: ECertificateIssueType;
    /**
     * New Date of expiry to extend e-certificate.
     * @type {string}
     * @memberof ECertificateType
     */
    newExpiryDate?: string;
    /**
     * In case of in lieu of certificate this will contain the original certificate no.
     * @type {string}
     * @memberof ECertificateType
     */
    originalCertificateNo?: string;
    /**
     * In case of in lieu of certificate this will contain the original voucher no.
     * @type {string}
     * @memberof ECertificateType
     */
    originalVoucherNo?: string;
    /**
     * Print status of the certificate.
     * @type {boolean}
     * @memberof ECertificateType
     */
    printed?: boolean;
    /**
     * 
     * @type {ProfileId}
     * @memberof ECertificateType
     */
    profileId?: ProfileId;
    /**
     * 
     * @type {ECertificateIssueSourceType}
     * @memberof ECertificateType
     */
    source?: ECertificateIssueSourceType;
    /**
     * 
     * @type {ECertificateStatusType}
     * @memberof ECertificateType
     */
    status?: ECertificateStatusType;
    /**
     * System generated unique voucher number.
     * @type {string}
     * @memberof ECertificateType
     */
    voucherNo?: string;
}

/**
 * Check if a given object implements the ECertificateType interface.
 */
export function instanceOfECertificateType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ECertificateTypeFromJSON(json: any): ECertificateType {
    return ECertificateTypeFromJSONTyped(json, false);
}

export function ECertificateTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ECertificateType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'awardId': !exists(json, 'awardId') ? undefined : AwardIdFromJSON(json['awardId']),
        'awardPoints': !exists(json, 'awardPoints') ? undefined : json['awardPoints'],
        'cancelRequestDate': !exists(json, 'cancelRequestDate') ? undefined : json['cancelRequestDate'],
        'certificateId': !exists(json, 'certificateId') ? undefined : json['certificateId'],
        'certificateNo': !exists(json, 'certificateNo') ? undefined : json['certificateNo'],
        'consumptionDetail': !exists(json, 'consumptionDetail') ? undefined : ECertificateConsumptionTypeFromJSON(json['consumptionDetail']),
        'databaseId': !exists(json, 'databaseId') ? undefined : json['databaseId'],
        'eCertificateInfo': !exists(json, 'eCertificateInfo') ? undefined : ECertificateInfoTypeFromJSON(json['eCertificateInfo']),
        'expiryDate': !exists(json, 'expiryDate') ? undefined : json['expiryDate'],
        'extensionCount': !exists(json, 'extensionCount') ? undefined : json['extensionCount'],
        'generationDetail': !exists(json, 'generationDetail') ? undefined : ECertificateGenerationTypeFromJSON(json['generationDetail']),
        'inLieuSequence': !exists(json, 'inLieuSequence') ? undefined : json['inLieuSequence'],
        'inactiveDate': !exists(json, 'inactiveDate') ? undefined : json['inactiveDate'],
        'issueDate': !exists(json, 'issueDate') ? undefined : json['issueDate'],
        'issueType': !exists(json, 'issueType') ? undefined : ECertificateIssueTypeFromJSON(json['issueType']),
        'newExpiryDate': !exists(json, 'newExpiryDate') ? undefined : json['newExpiryDate'],
        'originalCertificateNo': !exists(json, 'originalCertificateNo') ? undefined : json['originalCertificateNo'],
        'originalVoucherNo': !exists(json, 'originalVoucherNo') ? undefined : json['originalVoucherNo'],
        'printed': !exists(json, 'printed') ? undefined : json['printed'],
        'profileId': !exists(json, 'profileId') ? undefined : ProfileIdFromJSON(json['profileId']),
        'source': !exists(json, 'source') ? undefined : ECertificateIssueSourceTypeFromJSON(json['source']),
        'status': !exists(json, 'status') ? undefined : ECertificateStatusTypeFromJSON(json['status']),
        'voucherNo': !exists(json, 'voucherNo') ? undefined : json['voucherNo'],
    };
}

export function ECertificateTypeToJSON(value?: ECertificateType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'awardId': AwardIdToJSON(value.awardId),
        'awardPoints': value.awardPoints,
        'cancelRequestDate': value.cancelRequestDate,
        'certificateId': value.certificateId,
        'certificateNo': value.certificateNo,
        'consumptionDetail': ECertificateConsumptionTypeToJSON(value.consumptionDetail),
        'databaseId': value.databaseId,
        'eCertificateInfo': ECertificateInfoTypeToJSON(value.eCertificateInfo),
        'expiryDate': value.expiryDate,
        'extensionCount': value.extensionCount,
        'generationDetail': ECertificateGenerationTypeToJSON(value.generationDetail),
        'inLieuSequence': value.inLieuSequence,
        'inactiveDate': value.inactiveDate,
        'issueDate': value.issueDate,
        'issueType': ECertificateIssueTypeToJSON(value.issueType),
        'newExpiryDate': value.newExpiryDate,
        'originalCertificateNo': value.originalCertificateNo,
        'originalVoucherNo': value.originalVoucherNo,
        'printed': value.printed,
        'profileId': ProfileIdToJSON(value.profileId),
        'source': ECertificateIssueSourceTypeToJSON(value.source),
        'status': ECertificateStatusTypeToJSON(value.status),
        'voucherNo': value.voucherNo,
    };
}

