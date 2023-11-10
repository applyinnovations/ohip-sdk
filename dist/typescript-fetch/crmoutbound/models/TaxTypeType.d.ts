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
 * Provides information about the Tax Type.
 * @export
 * @interface TaxTypeType
 */
export interface TaxTypeType {
    /**
     * Code of the Hotel.
     * @type {string}
     * @memberof TaxTypeType
     */
    hotelId?: string;
    /**
     * Code of the Tax Type.
     * @type {string}
     * @memberof TaxTypeType
     */
    code?: string;
    /**
     * Description of the Tax Type.
     * @type {string}
     * @memberof TaxTypeType
     */
    description?: string;
    /**
     * A boolean flag for Collecting Agent Tax
     * @type {boolean}
     * @memberof TaxTypeType
     */
    collectingAgentTax?: boolean;
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
    reportTaxPerc?: number;
    /**
     * Minimun Length of Stay.
     * @type {number}
     * @memberof TaxTypeType
     */
    minimumLengthOfStay?: number;
}
/**
 * Check if a given object implements the TaxTypeType interface.
 */
export declare function instanceOfTaxTypeType(value: object): boolean;
export declare function TaxTypeTypeFromJSON(json: any): TaxTypeType;
export declare function TaxTypeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaxTypeType;
export declare function TaxTypeTypeToJSON(value?: TaxTypeType | null): any;
