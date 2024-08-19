/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Allows for a choice in description of the amount of time spanned by this type. EndDate specifies a specific date, while Duration provides a measure of time to add to the StartDate to yield eventEndDate date.
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
