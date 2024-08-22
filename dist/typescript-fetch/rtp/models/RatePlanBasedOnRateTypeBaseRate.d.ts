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
 * Base Rate type
 * @export
 * @interface RatePlanBasedOnRateTypeBaseRate
 */
export interface RatePlanBasedOnRateTypeBaseRate {
    /**
     * Base Amount used for base rate calculation.
     * @type {number}
     * @memberof RatePlanBasedOnRateTypeBaseRate
     */
    baseAmount?: number;
    /**
     * Rate plan code used to base the rate on.
     * @type {string}
     * @memberof RatePlanBasedOnRateTypeBaseRate
     */
    basedOnRatePlan?: string;
    /**
     * Rate Plan code.
     * @type {Array<string>}
     * @memberof RatePlanBasedOnRateTypeBaseRate
     */
    dependentRatePlans?: Array<string>;
    /**
     * Flat or Percentage (FLT/PCT) indicator.
     * @type {string}
     * @memberof RatePlanBasedOnRateTypeBaseRate
     */
    flatOrPercentage?: string;
    /**
     * Rounding style used for the calculated rate amounts. Valid values are U,D,N,C,F which means Up, Down, None, Up-Keep Decimal, Down - Keep Decimal.
     * @type {string}
     * @memberof RatePlanBasedOnRateTypeBaseRate
     */
    rounding?: string;
}
/**
 * Check if a given object implements the RatePlanBasedOnRateTypeBaseRate interface.
 */
export declare function instanceOfRatePlanBasedOnRateTypeBaseRate(value: object): boolean;
export declare function RatePlanBasedOnRateTypeBaseRateFromJSON(json: any): RatePlanBasedOnRateTypeBaseRate;
export declare function RatePlanBasedOnRateTypeBaseRateFromJSONTyped(json: any, ignoreDiscriminator: boolean): RatePlanBasedOnRateTypeBaseRate;
export declare function RatePlanBasedOnRateTypeBaseRateToJSON(value?: RatePlanBasedOnRateTypeBaseRate | null): any;
