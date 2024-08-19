/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
/**
 * Best Available Rate (BAR) Based Rate type
 * @export
 * @interface RatePlanBasedOnRateTypeBARBasedRate
 */
export interface RatePlanBasedOnRateTypeBARBasedRate {
    /**
     * Base Amount used for BAR based rate calculation.
     * @type {number}
     * @memberof RatePlanBasedOnRateTypeBARBasedRate
     */
    bARBaseAmount?: number;
    /**
     * While showing availability, do system need to compare the static rates defined for the rate with dynamically computed BAR based rate pricing? If true, availability shows lower of the these two pricing. If false, availabilty shows the dynamically calucated pricing.
     * @type {boolean}
     * @memberof RatePlanBasedOnRateTypeBARBasedRate
     */
    compareWithRateSchedules?: boolean;
    /**
     * While showing availability, in case all the BAR rates are closed whether to calculate the rate amount based on highest BAR instead of defaulting to its own rate schedule. If false, availability shows rates from its own rate schedule.
     * @type {boolean}
     * @memberof RatePlanBasedOnRateTypeBARBasedRate
     */
    defaultToHighestBar?: boolean;
    /**
     * Flat or Percentage (FLT/PCT) indicator.
     * @type {string}
     * @memberof RatePlanBasedOnRateTypeBARBasedRate
     */
    flatOrPercentage?: string;
    /**
     * Rounding style used for the calculated rate amounts. Valid values are U,D,N,C,F which means Up, Down, None, Up-Keep Decimal, Down - Keep Decimal.
     * @type {string}
     * @memberof RatePlanBasedOnRateTypeBARBasedRate
     */
    rounding?: string;
}

/**
 * Check if a given object implements the RatePlanBasedOnRateTypeBARBasedRate interface.
 */
export function instanceOfRatePlanBasedOnRateTypeBARBasedRate(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RatePlanBasedOnRateTypeBARBasedRateFromJSON(json: any): RatePlanBasedOnRateTypeBARBasedRate {
    return RatePlanBasedOnRateTypeBARBasedRateFromJSONTyped(json, false);
}

export function RatePlanBasedOnRateTypeBARBasedRateFromJSONTyped(json: any, ignoreDiscriminator: boolean): RatePlanBasedOnRateTypeBARBasedRate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bARBaseAmount': !exists(json, 'bARBaseAmount') ? undefined : json['bARBaseAmount'],
        'compareWithRateSchedules': !exists(json, 'compareWithRateSchedules') ? undefined : json['compareWithRateSchedules'],
        'defaultToHighestBar': !exists(json, 'defaultToHighestBar') ? undefined : json['defaultToHighestBar'],
        'flatOrPercentage': !exists(json, 'flatOrPercentage') ? undefined : json['flatOrPercentage'],
        'rounding': !exists(json, 'rounding') ? undefined : json['rounding'],
    };
}

export function RatePlanBasedOnRateTypeBARBasedRateToJSON(value?: RatePlanBasedOnRateTypeBARBasedRate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bARBaseAmount': value.bARBaseAmount,
        'compareWithRateSchedules': value.compareWithRateSchedules,
        'defaultToHighestBar': value.defaultToHighestBar,
        'flatOrPercentage': value.flatOrPercentage,
        'rounding': value.rounding,
    };
}

