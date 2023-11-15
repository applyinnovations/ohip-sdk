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
import type { PersonNameTypeType } from './PersonNameTypeType';
/**
 * This provides name information for a person.
 * @export
 * @interface ProfileSummaryTypeFormerName
 */
export interface ProfileSummaryTypeFormerName {
    /**
     * Indicates the date of birth as indicated in the document, in ISO 8601 prescribed format.
     * @type {string}
     * @memberof ProfileSummaryTypeFormerName
     */
    birthDate?: string;
    /**
     * Indicates the date of birth as masked.
     * @type {string}
     * @memberof ProfileSummaryTypeFormerName
     */
    birthDateMasked?: string;
    /**
     * The code specifying a monetary unit. Use ISO 4217, three alpha code.
     * @type {string}
     * @memberof ProfileSummaryTypeFormerName
     */
    currencyCode?: string;
    /**
     * The symbol for the currency, e.g, for currencyCode USD the symbol is $.
     * @type {string}
     * @memberof ProfileSummaryTypeFormerName
     */
    currencySymbol?: string;
    /**
     * The supplier's ranking of the customer (e.g., VIP, numerical ranking).
     * @type {string}
     * @memberof ProfileSummaryTypeFormerName
     */
    customerValue?: string;
    /**
     * Indicates the number of decimal places for a particular currency. This is equivalent to the ISO 4217 standard "minor unit". Typically used when the amount provided includes the minor unit of currency without a decimal point (e.g., USD 8500 needs DecimalPlaces="2" to represent $85).
     * @type {number}
     * @memberof ProfileSummaryTypeFormerName
     */
    decimalPlaces?: number;
    /**
     * Full display Name.
     * @type {string}
     * @memberof ProfileSummaryTypeFormerName
     */
    fullName?: string;
    /**
     * Identifies the profile gender code selected from Gender types List of values. Gender types LOV provides the values configured at gender configuration.
     * @type {string}
     * @memberof ProfileSummaryTypeFormerName
     */
    gender?: string;
    /**
     * Given name, first name or names.
     * @type {string}
     * @memberof ProfileSummaryTypeFormerName
     */
    givenName?: string;
    /**
     * Language identification.
     * @type {string}
     * @memberof ProfileSummaryTypeFormerName
     */
    language?: string;
    /**
     * The middle name of the person name.
     * @type {string}
     * @memberof ProfileSummaryTypeFormerName
     */
    middleName?: string;
    /**
     * Family name, last name or Company Name.
     * @type {string}
     * @memberof ProfileSummaryTypeFormerName
     */
    name?: string;
    /**
     * Salutation of honorific (e.g. Mr., Mrs., Ms., Miss, Dr.)
     * @type {string}
     * @memberof ProfileSummaryTypeFormerName
     */
    namePrefix?: string;
    /**
     * Hold various name suffixes and letters (e.g. Jr., Sr., III, Ret., Esq.)
     * @type {string}
     * @memberof ProfileSummaryTypeFormerName
     */
    nameSuffix?: string;
    /**
     * Degree or honors (e.g., Ph.D., M.D.)
     * @type {string}
     * @memberof ProfileSummaryTypeFormerName
     */
    nameTitle?: string;
    /**
     *
     * @type {PersonNameTypeType}
     * @memberof ProfileSummaryTypeFormerName
     */
    nameType?: PersonNameTypeType;
}
/**
 * Check if a given object implements the ProfileSummaryTypeFormerName interface.
 */
export declare function instanceOfProfileSummaryTypeFormerName(value: object): boolean;
export declare function ProfileSummaryTypeFormerNameFromJSON(json: any): ProfileSummaryTypeFormerName;
export declare function ProfileSummaryTypeFormerNameFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileSummaryTypeFormerName;
export declare function ProfileSummaryTypeFormerNameToJSON(value?: ProfileSummaryTypeFormerName | null): any;
