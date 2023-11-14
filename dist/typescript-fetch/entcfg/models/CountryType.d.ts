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
/**
 * Base details of the country.
 * @export
 * @interface CountryType
 */
export interface CountryType {
    /**
     * Defines the mode used to invoke address doctor service.
     * @type {string}
     * @memberof CountryType
     */
    addressDoctorMode?: string;
    /**
     * Country code identifying the country.
     * @type {string}
     * @memberof CountryType
     */
    countryCode?: string;
    /**
     * Indicates if the country flag should be displayed.
     * @type {boolean}
     * @memberof CountryType
     */
    displayFlag?: boolean;
    /**
     * Sequence number for displaying the countries.
     * @type {number}
     * @memberof CountryType
     */
    displaySequence?: number;
    /**
     * Guest Address format Codes for confirmation letter.
     * @type {string}
     * @memberof CountryType
     */
    guestAddressFormat?: string;
    /**
     * Hotel code the country belongs to.
     * @type {string}
     * @memberof CountryType
     */
    hotelId?: string;
    /**
     * ISO standard code for country.
     * @type {string}
     * @memberof CountryType
     */
    isoCode?: string;
    /**
     * ISO standard name for country.
     * @type {string}
     * @memberof CountryType
     */
    isoName?: string;
    /**
     * Main Group of Country. Used in statistic reports.
     * @type {string}
     * @memberof CountryType
     */
    mainGroup?: string;
    /**
     * Name for the country.
     * @type {string}
     * @memberof CountryType
     */
    name?: string;
    /**
     * Print Sequence number for report.
     * @type {number}
     * @memberof CountryType
     */
    printSequence?: number;
    /**
     * Regin to which the Country belongs.
     * @type {string}
     * @memberof CountryType
     */
    regionCode?: string;
    /**
     * Statistic code for the country.
     * @type {string}
     * @memberof CountryType
     */
    statisticCode?: string;
}
/**
 * Check if a given object implements the CountryType interface.
 */
export declare function instanceOfCountryType(value: object): boolean;
export declare function CountryTypeFromJSON(json: any): CountryType;
export declare function CountryTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CountryType;
export declare function CountryTypeToJSON(value?: CountryType | null): any;