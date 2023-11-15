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
import type { CurrencyAmountType } from './CurrencyAmountType';
/**
 * Information related to a membership transaction rate.
 * @export
 * @interface MembershipTransactionRateType
 */
export interface MembershipTransactionRateType {
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof MembershipTransactionRateType
     */
    centralRateAmount?: CurrencyAmountType;
    /**
     * Indicates the Property currency code.
     * @type {string}
     * @memberof MembershipTransactionRateType
     */
    currency?: string;
    /**
     * Indicates start date of the reservation.
     * @type {string}
     * @memberof MembershipTransactionRateType
     */
    fromDate?: string;
    /**
     * Indicates the Market code linked to rate code.
     * @type {string}
     * @memberof MembershipTransactionRateType
     */
    marketCode?: string;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof MembershipTransactionRateType
     */
    pMSRateAmount?: CurrencyAmountType;
    /**
     * Indicates the Rate code used in the reservation.
     * @type {string}
     * @memberof MembershipTransactionRateType
     */
    rateCode?: string;
    /**
     * Indicates end date of the reservation.
     * @type {string}
     * @memberof MembershipTransactionRateType
     */
    toDate?: string;
}
/**
 * Check if a given object implements the MembershipTransactionRateType interface.
 */
export declare function instanceOfMembershipTransactionRateType(value: object): boolean;
export declare function MembershipTransactionRateTypeFromJSON(json: any): MembershipTransactionRateType;
export declare function MembershipTransactionRateTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipTransactionRateType;
export declare function MembershipTransactionRateTypeToJSON(value?: MembershipTransactionRateType | null): any;
