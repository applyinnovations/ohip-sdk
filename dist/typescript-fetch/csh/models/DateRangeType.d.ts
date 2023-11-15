/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Date Range with Start and End dates.
 * @export
 * @interface DateRangeType
 */
export interface DateRangeType {
    /**
     * The ending value of the date range.
     * @type {string}
     * @memberof DateRangeType
     */
    end?: string;
    /**
     * The starting value of the date range.
     * @type {string}
     * @memberof DateRangeType
     */
    start?: string;
}
/**
 * Check if a given object implements the DateRangeType interface.
 */
export declare function instanceOfDateRangeType(value: object): boolean;
export declare function DateRangeTypeFromJSON(json: any): DateRangeType;
export declare function DateRangeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DateRangeType;
export declare function DateRangeTypeToJSON(value?: DateRangeType | null): any;
