/**
 * OPERA Cloud Leisure Management API
 * APIs to cater for external Leisure Management functionality integrated with OPERA Cloud.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Activity Status Code detail information.
 * @export
 * @interface ActivityStatusCodeType
 */
export interface ActivityStatusCodeType {
    /**
     * Used in Application for the activity status code.
     * @type {string}
     * @memberof ActivityStatusCodeType
     */
    application?: string;
    /**
     * Code for the activity status code. Cannot be null.
     * @type {string}
     * @memberof ActivityStatusCodeType
     */
    code?: string;
    /**
     * Description for the Activity Status Code. Cannot be null.
     * @type {string}
     * @memberof ActivityStatusCodeType
     */
    description?: string;
    /**
     * Property to which the activity status code belongs to. Cannot be null.
     * @type {string}
     * @memberof ActivityStatusCodeType
     */
    hotelId?: string;
    /**
     * Language identification.
     * @type {string}
     * @memberof ActivityStatusCodeType
     */
    language?: string;
    /**
     * Priority for the activity status code.
     * @type {number}
     * @memberof ActivityStatusCodeType
     */
    priority?: number;
}
/**
 * Check if a given object implements the ActivityStatusCodeType interface.
 */
export declare function instanceOfActivityStatusCodeType(value: object): boolean;
export declare function ActivityStatusCodeTypeFromJSON(json: any): ActivityStatusCodeType;
export declare function ActivityStatusCodeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActivityStatusCodeType;
export declare function ActivityStatusCodeTypeToJSON(value?: ActivityStatusCodeType | null): any;
