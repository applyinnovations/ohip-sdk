/**
 * OPERA Cloud Activity API
 * APIs to cater for Sales Activity functionality in OPERA Cloud. <br /><br /> Activities provide you with an account management tool for managing daily tasks such as appointments, sales calls, contact follow-up, and so on.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Lamp indicator Type.
 * @export
 * @interface IndicatorType
 */
export interface IndicatorType {
    /**
     * Indicates number of occurrences of the indicator.
     * @type {number}
     * @memberof IndicatorType
     */
    count?: number;
    /**
     * Name of the indicator.
     * @type {string}
     * @memberof IndicatorType
     */
    indicatorName?: string;
}
/**
 * Check if a given object implements the IndicatorType interface.
 */
export declare function instanceOfIndicatorType(value: object): boolean;
export declare function IndicatorTypeFromJSON(json: any): IndicatorType;
export declare function IndicatorTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): IndicatorType;
export declare function IndicatorTypeToJSON(value?: IndicatorType | null): any;
