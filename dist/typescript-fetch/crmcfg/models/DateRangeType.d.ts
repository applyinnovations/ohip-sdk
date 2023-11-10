/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
     * @type {Date}
     * @memberof DateRangeType
     */
    end?: Date;
    /**
     * The starting value of the date range.
     * @type {Date}
     * @memberof DateRangeType
     */
    start?: Date;
}
/**
 * Check if a given object implements the DateRangeType interface.
 */
export declare function instanceOfDateRangeType(value: object): boolean;
export declare function DateRangeTypeFromJSON(json: any): DateRangeType;
export declare function DateRangeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DateRangeType;
export declare function DateRangeTypeToJSON(value?: DateRangeType | null): any;
