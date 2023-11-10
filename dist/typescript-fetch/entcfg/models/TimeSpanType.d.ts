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
 * Allows for a choice in description of the amount of time spanned by this type. EndDate specifies a specific date, while Duration provides a measure of time to add to the StartDate to yield end date.
 * @export
 * @interface TimeSpanType
 */
export interface TimeSpanType {
    /**
     *
     * @type {string}
     * @memberof TimeSpanType
     */
    duration?: string;
    /**
     *
     * @type {Date}
     * @memberof TimeSpanType
     */
    endDate?: Date;
    /**
     *
     * @type {Date}
     * @memberof TimeSpanType
     */
    startDate?: Date;
}
/**
 * Check if a given object implements the TimeSpanType interface.
 */
export declare function instanceOfTimeSpanType(value: object): boolean;
export declare function TimeSpanTypeFromJSON(json: any): TimeSpanType;
export declare function TimeSpanTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimeSpanType;
export declare function TimeSpanTypeToJSON(value?: TimeSpanType | null): any;
