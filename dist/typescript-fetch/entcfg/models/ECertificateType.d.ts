/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { AwardId } from './AwardId';
import type { ECertificateConsumptionType } from './ECertificateConsumptionType';
import type { ECertificateGenerationType } from './ECertificateGenerationType';
import type { ECertificateInfoType } from './ECertificateInfoType';
import type { ECertificateIssueSourceType } from './ECertificateIssueSourceType';
import type { ECertificateIssueType } from './ECertificateIssueType';
import type { ECertificateStatusType } from './ECertificateStatusType';
import type { ProfileId } from './ProfileId';
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
export declare function instanceOfECertificateType(value: object): boolean;
export declare function ECertificateTypeFromJSON(json: any): ECertificateType;
export declare function ECertificateTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ECertificateType;
export declare function ECertificateTypeToJSON(value?: ECertificateType | null): any;
