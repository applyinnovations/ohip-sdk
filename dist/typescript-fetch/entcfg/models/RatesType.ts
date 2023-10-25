/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { AmountType } from './AmountType';
import {
    AmountTypeFromJSON,
    AmountTypeFromJSONTyped,
    AmountTypeToJSON,
} from './AmountType';
import type { RateRangeType } from './RateRangeType';
import {
    RateRangeTypeFromJSON,
    RateRangeTypeFromJSONTyped,
    RateRangeTypeToJSON,
} from './RateRangeType';

/**
 * Individual rate amount.
 * @export
 * @interface RatesType
 */
export interface RatesType {
    /**
     * The Rate contains a collection of elements that define the amount of the rate, associated fees, additional occupant amounts. Taxes can be broken out or included within the various amounts. A currency can be associated to each amount.
     * @type {Array<AmountType>}
     * @memberof RatesType
     */
    rate?: Array<AmountType>;
    /**
     * Rate Range details like maximum rate amount and minimum rate amount in each available rate category.
     * @type {Array<RateRangeType>}
     * @memberof RatesType
     */
    rateRange?: Array<RateRangeType>;
}

/**
 * Check if a given object implements the RatesType interface.
 */
export function instanceOfRatesType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RatesTypeFromJSON(json: any): RatesType {
    return RatesTypeFromJSONTyped(json, false);
}

export function RatesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RatesType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'rate': !exists(json, 'rate') ? undefined : ((json['rate'] as Array<any>).map(AmountTypeFromJSON)),
        'rateRange': !exists(json, 'rateRange') ? undefined : ((json['rateRange'] as Array<any>).map(RateRangeTypeFromJSON)),
    };
}

export function RatesTypeToJSON(value?: RatesType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'rate': value.rate === undefined ? undefined : ((value.rate as Array<any>).map(AmountTypeToJSON)),
        'rateRange': value.rateRange === undefined ? undefined : ((value.rateRange as Array<any>).map(RateRangeTypeToJSON)),
    };
}

