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
/**
 * Provides information about the Tax Type.
 * @export
 * @interface TaxTypeType
 */
export interface TaxTypeType {
    /**
     * Code of the Tax Type.
     * @type {string}
     * @memberof TaxTypeType
     */
    code?: string;
    /**
     * A boolean flag for Collecting Agent Tax
     * @type {boolean}
     * @memberof TaxTypeType
     */
    collectingAgentTax?: boolean;
    /**
     * Description of the Tax Type.
     * @type {string}
     * @memberof TaxTypeType
     */
    description?: string;
    /**
     * Code of the Hotel.
     * @type {string}
     * @memberof TaxTypeType
     */
    hotelId?: string;
    /**
     * Minimun Length of Stay.
     * @type {number}
     * @memberof TaxTypeType
     */
    minimumLengthOfStay?: number;
    /**
     * Print auto adjust information for this tax type on the tax exempt report.
     * @type {boolean}
     * @memberof TaxTypeType
     */
    printAutoAdjust?: boolean;
    /**
     * Number of days after which the guest will be tax exempt. Only used for tax exempt report.
     * @type {number}
     * @memberof TaxTypeType
     */
    reportExemptDays?: number;
    /**
     * Tax percentage. Only used for tax exempt report.
     * @type {number}
     * @memberof TaxTypeType
     */
    reportTaxPercentage?: number;
}
/**
 * Check if a given object implements the TaxTypeType interface.
 */
export declare function instanceOfTaxTypeType(value: object): boolean;
export declare function TaxTypeTypeFromJSON(json: any): TaxTypeType;
export declare function TaxTypeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaxTypeType;
export declare function TaxTypeTypeToJSON(value?: TaxTypeType | null): any;
