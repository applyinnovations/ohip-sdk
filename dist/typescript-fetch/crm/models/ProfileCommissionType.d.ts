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
import type { CommissionPaymentMethods } from './CommissionPaymentMethods';
/**
 * This is the preconfigured routing instruction type.
 * @export
 * @interface ProfileCommissionType
 */
export interface ProfileCommissionType {
    /**
     * Bank account used for the commission for a profile.
     * @type {string}
     * @memberof ProfileCommissionType
     */
    bankAccount?: string;
    /**
     * commission Code for a profile.
     * @type {string}
     * @memberof ProfileCommissionType
     */
    commissionCode?: string;
    /**
     * The code specifying a monetary unit. Use ISO 4217, three alpha code.
     * @type {string}
     * @memberof ProfileCommissionType
     */
    currencyCode?: string;
    /**
     * The symbol for the currency, e.g, for currencyCode USD the symbol is $.
     * @type {string}
     * @memberof ProfileCommissionType
     */
    currencySymbol?: string;
    /**
     * Indicates the number of decimal places for a particular currency. This is equivalent to the ISO 4217 standard "minor unit". Typically used when the amount provided includes the minor unit of currency without a decimal point (e.g., USD 8500 needs DecimalPlaces="2" to represent $85).
     * @type {number}
     * @memberof ProfileCommissionType
     */
    decimalPlaces?: number;
    /**
     * Hotel Code for the commission being used for a profile.
     * @type {string}
     * @memberof ProfileCommissionType
     */
    hotelId?: string;
    /**
     *
     * @type {CommissionPaymentMethods}
     * @memberof ProfileCommissionType
     */
    paymentMethod?: CommissionPaymentMethods;
}
/**
 * Check if a given object implements the ProfileCommissionType interface.
 */
export declare function instanceOfProfileCommissionType(value: object): boolean;
export declare function ProfileCommissionTypeFromJSON(json: any): ProfileCommissionType;
export declare function ProfileCommissionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileCommissionType;
export declare function ProfileCommissionTypeToJSON(value?: ProfileCommissionType | null): any;
