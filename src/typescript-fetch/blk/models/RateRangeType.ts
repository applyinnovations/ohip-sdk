/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { TotalType } from './TotalType';
import {
    TotalTypeFromJSON,
    TotalTypeFromJSONTyped,
    TotalTypeToJSON,
} from './TotalType';

/**
 * Rate Range details like maximum rate amount and minimum rate amount in each available rate category.
 * @export
 * @interface RateRangeType
 */
export interface RateRangeType {
    /**
     * The base amount charged for the accommodation or service.
     * @type {Array<TotalType>}
     * @memberof RateRangeType
     */
    base?: Array<TotalType>;
    /**
     * Rate Change Indicator.
     * @type {boolean}
     * @memberof RateRangeType
     */
    rateChange?: boolean;
}

/**
 * Check if a given object implements the RateRangeType interface.
 */
export function instanceOfRateRangeType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RateRangeTypeFromJSON(json: any): RateRangeType {
    return RateRangeTypeFromJSONTyped(json, false);
}

export function RateRangeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RateRangeType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'base': !exists(json, 'base') ? undefined : ((json['base'] as Array<any>).map(TotalTypeFromJSON)),
        'rateChange': !exists(json, 'rateChange') ? undefined : json['rateChange'],
    };
}

export function RateRangeTypeToJSON(value?: RateRangeType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'base': value.base === undefined ? undefined : ((value.base as Array<any>).map(TotalTypeToJSON)),
        'rateChange': value.rateChange,
    };
}

