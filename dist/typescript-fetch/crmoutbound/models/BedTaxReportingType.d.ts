/**
 * OPERA Cloud Customer Relationship Management Outbound API
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 20.99.99.99
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * This stores the information for Bed Tax Reporting. Mainly used in Maldives.
 * @export
 * @interface BedTaxReportingType
 */
export interface BedTaxReportingType {
    /**
     * Tax Registration Number for Maldives Bed Tax Reporting.
     * @type {number}
     * @memberof BedTaxReportingType
     */
    taxRegistrationNo?: number;
    /**
     * Visa number used for Maldives Bed Tax Reporting
     * @type {string}
     * @memberof BedTaxReportingType
     */
    visaNumber?: string;
    /**
     * Visa Issue Date used for Maldives Bed Tax Reporting.
     * @type {string}
     * @memberof BedTaxReportingType
     */
    visaIssueDate?: string;
    /**
     * Visa Expiration Date used for Maldives Bed Tax Reporting
     * @type {string}
     * @memberof BedTaxReportingType
     */
    visaExpiryDate?: string;
    /**
     * Number of days for which the Maldives tax is applicable.
     * @type {number}
     * @memberof BedTaxReportingType
     */
    taxableDays?: number;
}
/**
 * Check if a given object implements the BedTaxReportingType interface.
 */
export declare function instanceOfBedTaxReportingType(value: object): boolean;
export declare function BedTaxReportingTypeFromJSON(json: any): BedTaxReportingType;
export declare function BedTaxReportingTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BedTaxReportingType;
export declare function BedTaxReportingTypeToJSON(value?: BedTaxReportingType | null): any;
