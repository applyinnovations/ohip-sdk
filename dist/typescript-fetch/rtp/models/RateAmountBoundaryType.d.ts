/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Set of rate amounts for one and/or two adults. This set will represent either the minimum or maximum rate boundary.
 * @export
 * @interface RateAmountBoundaryType
 */
export interface RateAmountBoundaryType {
    /**
     * One person rate amount for the rate boundary.
     * @type {number}
     * @memberof RateAmountBoundaryType
     */
    onePersonRate?: number;
    /**
     * Two person rate amount for the rate boundary.
     * @type {number}
     * @memberof RateAmountBoundaryType
     */
    twoPersonRate?: number;
}
/**
 * Check if a given object implements the RateAmountBoundaryType interface.
 */
export declare function instanceOfRateAmountBoundaryType(value: object): boolean;
export declare function RateAmountBoundaryTypeFromJSON(json: any): RateAmountBoundaryType;
export declare function RateAmountBoundaryTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RateAmountBoundaryType;
export declare function RateAmountBoundaryTypeToJSON(value?: RateAmountBoundaryType | null): any;
