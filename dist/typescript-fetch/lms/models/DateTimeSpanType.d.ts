/**
 * OPERA Cloud Leisure Management API
 * APIs to cater for external Leisure Management functionality integrated with OPERA Cloud.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Allows for a choice in description of the amount of time spanned by this type. EndDate specifies a specific date, while Duration provides a measure of time to add to the StartDate to yield end date.
 * @export
 * @interface DateTimeSpanType
 */
export interface DateTimeSpanType {
    /**
     *
     * @type {string}
     * @memberof DateTimeSpanType
     */
    endDateTime?: string;
    /**
     *
     * @type {string}
     * @memberof DateTimeSpanType
     */
    startDateTime?: string;
}
/**
 * Check if a given object implements the DateTimeSpanType interface.
 */
export declare function instanceOfDateTimeSpanType(value: object): boolean;
export declare function DateTimeSpanTypeFromJSON(json: any): DateTimeSpanType;
export declare function DateTimeSpanTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DateTimeSpanType;
export declare function DateTimeSpanTypeToJSON(value?: DateTimeSpanType | null): any;
