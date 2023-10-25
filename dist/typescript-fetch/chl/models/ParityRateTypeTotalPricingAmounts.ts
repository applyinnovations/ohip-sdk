/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CurrencyAmountType } from './CurrencyAmountType';
import {
    CurrencyAmountTypeFromJSON,
    CurrencyAmountTypeFromJSONTyped,
    CurrencyAmountTypeToJSON,
} from './CurrencyAmountType';

/**
 * 
 * @export
 * @interface ParityRateTypeTotalPricingAmounts
 */
export interface ParityRateTypeTotalPricingAmounts {
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof ParityRateTypeTotalPricingAmounts
     */
    totalRateIncl?: CurrencyAmountType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof ParityRateTypeTotalPricingAmounts
     */
    totalSurcharge?: CurrencyAmountType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof ParityRateTypeTotalPricingAmounts
     */
    totalTax?: CurrencyAmountType;
}

/**
 * Check if a given object implements the ParityRateTypeTotalPricingAmounts interface.
 */
export function instanceOfParityRateTypeTotalPricingAmounts(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ParityRateTypeTotalPricingAmountsFromJSON(json: any): ParityRateTypeTotalPricingAmounts {
    return ParityRateTypeTotalPricingAmountsFromJSONTyped(json, false);
}

export function ParityRateTypeTotalPricingAmountsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ParityRateTypeTotalPricingAmounts {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'totalRateIncl': !exists(json, 'totalRateIncl') ? undefined : CurrencyAmountTypeFromJSON(json['totalRateIncl']),
        'totalSurcharge': !exists(json, 'totalSurcharge') ? undefined : CurrencyAmountTypeFromJSON(json['totalSurcharge']),
        'totalTax': !exists(json, 'totalTax') ? undefined : CurrencyAmountTypeFromJSON(json['totalTax']),
    };
}

export function ParityRateTypeTotalPricingAmountsToJSON(value?: ParityRateTypeTotalPricingAmounts | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'totalRateIncl': CurrencyAmountTypeToJSON(value.totalRateIncl),
        'totalSurcharge': CurrencyAmountTypeToJSON(value.totalSurcharge),
        'totalTax': CurrencyAmountTypeToJSON(value.totalTax),
    };
}

