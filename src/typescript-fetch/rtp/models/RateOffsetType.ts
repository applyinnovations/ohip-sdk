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
 * Rate Offset details for copying a rate schedule to a different tier.
 * @export
 * @interface RateOffsetType
 */
export interface RateOffsetType {
    /**
     * Specifies whether the offset amount is of Flat or Percentage type. Valid values are F/P.
     * @type {string}
     * @memberof RateOffsetType
     */
    flatOrPercentage?: string;
    /**
     * Specifies whether the offset amount is to increase the rate or decrease the rate. Valid values are I/D.
     * @type {string}
     * @memberof RateOffsetType
     */
    increaseOrDecrease?: string;
    /**
     * Offset amount for copying the rate schedule.
     * @type {number}
     * @memberof RateOffsetType
     */
    offset?: number;
}

/**
 * Check if a given object implements the RateOffsetType interface.
 */
export function instanceOfRateOffsetType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RateOffsetTypeFromJSON(json: any): RateOffsetType {
    return RateOffsetTypeFromJSONTyped(json, false);
}

export function RateOffsetTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RateOffsetType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'flatOrPercentage': !exists(json, 'flatOrPercentage') ? undefined : json['flatOrPercentage'],
        'increaseOrDecrease': !exists(json, 'increaseOrDecrease') ? undefined : json['increaseOrDecrease'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
    };
}

export function RateOffsetTypeToJSON(value?: RateOffsetType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'flatOrPercentage': value.flatOrPercentage,
        'increaseOrDecrease': value.increaseOrDecrease,
        'offset': value.offset,
    };
}

