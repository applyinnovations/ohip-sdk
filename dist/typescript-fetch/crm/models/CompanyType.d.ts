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
import type { IATAInfoType } from './IATAInfoType';
/**
 *
 * @export
 * @interface CompanyType
 */
export interface CompanyType {
    /**
     * Alternate Language of the company.
     * @type {string}
     * @memberof CompanyType
     */
    alternateLanguage?: string;
    /**
     * Alternate Name of the Company. Mainly, it's the name of the company written in the Alternate Language.
     * @type {string}
     * @memberof CompanyType
     */
    alternateName?: string;
    /**
     * This element tells if profile is blacklisted or not.
     * @type {boolean}
     * @memberof CompanyType
     */
    blacklist?: boolean;
    /**
     * A jurisdiction(Territory) in which a company is authorized to do business.
     * @type {string}
     * @memberof CompanyType
     */
    businessLocale?: string;
    /**
     * Business Title.
     * @type {string}
     * @memberof CompanyType
     */
    businessTitle?: string;
    /**
     * Commission code of the company.
     * @type {string}
     * @memberof CompanyType
     */
    commissionCode?: string;
    /**
     * Name of the company.
     * @type {string}
     * @memberof CompanyType
     */
    companyName?: string;
    /**
     * Second Name of the company.
     * @type {string}
     * @memberof CompanyType
     */
    companyName2?: string;
    /**
     * Third Name of the company.
     * @type {string}
     * @memberof CompanyType
     */
    companyName3?: string;
    /**
     * The type of corporate ID
     * @type {string}
     * @memberof CompanyType
     */
    corporateIdType?: string;
    /**
     * Credit Rating of the company.
     * @type {string}
     * @memberof CompanyType
     */
    creditRating?: string;
    /**
     * The code specifying a monetary unit. Use ISO 4217, three alpha code.
     * @type {string}
     * @memberof CompanyType
     */
    currencyCode?: string;
    /**
     * The symbol for the currency, e.g, for currencyCode USD the symbol is $.
     * @type {string}
     * @memberof CompanyType
     */
    currencySymbol?: string;
    /**
     * Indicates the number of decimal places for a particular currency. This is equivalent to the ISO 4217 standard "minor unit". Typically used when the amount provided includes the minor unit of currency without a decimal point (e.g., USD 8500 needs DecimalPlaces="2" to represent $85).
     * @type {number}
     * @memberof CompanyType
     */
    decimalPlaces?: number;
    /**
     *
     * @type {IATAInfoType}
     * @memberof CompanyType
     */
    iATAInfo?: IATAInfoType;
    /**
     * Language identification.
     * @type {string}
     * @memberof CompanyType
     */
    language?: string;
    /**
     * Nationality code identification
     * @type {string}
     * @memberof CompanyType
     */
    nationality?: string;
    /**
     * Nationality code description
     * @type {string}
     * @memberof CompanyType
     */
    nationalityDescription?: string;
    /**
     * Description of the VIP status.
     * @type {string}
     * @memberof CompanyType
     */
    vipDescription?: string;
    /**
     * VIP status of the company.
     * @type {string}
     * @memberof CompanyType
     */
    vipStatus?: string;
}
/**
 * Check if a given object implements the CompanyType interface.
 */
export declare function instanceOfCompanyType(value: object): boolean;
export declare function CompanyTypeFromJSON(json: any): CompanyType;
export declare function CompanyTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompanyType;
export declare function CompanyTypeToJSON(value?: CompanyType | null): any;
