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
import type { CurrencyAmountType } from './CurrencyAmountType';
import type { ECertificateInfoTypeHotels } from './ECertificateInfoTypeHotels';
import type { ECertificateUsageCriteriaType } from './ECertificateUsageCriteriaType';
/**
 * E-Certificates details.
 * @export
 * @interface ECertificateInfoType
 */
export interface ECertificateInfoType {
    /**
     * Award type to which the certificate is linked to.
     * @type {string}
     * @memberof ECertificateInfoType
     */
    awardCode?: string;
    /**
     * Summary of Benefits attached to this ECertificate.
     * @type {string}
     * @memberof ECertificateInfoType
     */
    benefitSummary?: string;
    /**
     * User defined certificate code.
     * @type {string}
     * @memberof ECertificateInfoType
     */
    certificateType?: string;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof ECertificateInfoType
     */
    cost?: CurrencyAmountType;
    /**
     * Description about the certificate.
     * @type {string}
     * @memberof ECertificateInfoType
     */
    description?: string;
    /**
     *
     * @type {ECertificateInfoTypeHotels}
     * @memberof ECertificateInfoType
     */
    hotels?: ECertificateInfoTypeHotels;
    /**
     * Label for the certificate.
     * @type {string}
     * @memberof ECertificateInfoType
     */
    label?: string;
    /**
     * Detail description about the certificate.
     * @type {string}
     * @memberof ECertificateInfoType
     */
    longDescription?: string;
    /**
     * Number of times e-certificate can be extended.
     * @type {number}
     * @memberof ECertificateInfoType
     */
    maxExtensionAllowed?: number;
    /**
     * Membership type to which the certificate is linked to.
     * @type {string}
     * @memberof ECertificateInfoType
     */
    membershipType?: string;
    /**
     * Promotion code to which certificate is attached to.
     * @type {string}
     * @memberof ECertificateInfoType
     */
    promotionCode?: string;
    /**
     *
     * @type {ECertificateUsageCriteriaType}
     * @memberof ECertificateInfoType
     */
    usageCriteria?: ECertificateUsageCriteriaType;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof ECertificateInfoType
     */
    value?: CurrencyAmountType;
    /**
     * Voucher benefit code attached to the certificate.
     * @type {string}
     * @memberof ECertificateInfoType
     */
    voucherBenefitCode?: string;
}
/**
 * Check if a given object implements the ECertificateInfoType interface.
 */
export declare function instanceOfECertificateInfoType(value: object): boolean;
export declare function ECertificateInfoTypeFromJSON(json: any): ECertificateInfoType;
export declare function ECertificateInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ECertificateInfoType;
export declare function ECertificateInfoTypeToJSON(value?: ECertificateInfoType | null): any;
