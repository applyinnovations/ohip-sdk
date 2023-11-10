/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface CompanyType
 */
export interface CompanyType {
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
