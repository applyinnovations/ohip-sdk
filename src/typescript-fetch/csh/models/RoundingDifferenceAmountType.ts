/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Information regarding the rounding difference which can be applied to the payment amount, based on the payment method.
 * @export
 * @interface RoundingDifferenceAmountType
 */
export interface RoundingDifferenceAmountType {
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof RoundingDifferenceAmountType
     */
    amount?: CurrencyAmountType;
    /**
     * Property where the payment is being posted.
     * @type {string}
     * @memberof RoundingDifferenceAmountType
     */
    hotelId?: string;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof RoundingDifferenceAmountType
     */
    roundingDifference?: CurrencyAmountType;
}

/**
 * Check if a given object implements the RoundingDifferenceAmountType interface.
 */
export function instanceOfRoundingDifferenceAmountType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoundingDifferenceAmountTypeFromJSON(json: any): RoundingDifferenceAmountType {
    return RoundingDifferenceAmountTypeFromJSONTyped(json, false);
}

export function RoundingDifferenceAmountTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoundingDifferenceAmountType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': !exists(json, 'amount') ? undefined : CurrencyAmountTypeFromJSON(json['amount']),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'roundingDifference': !exists(json, 'roundingDifference') ? undefined : CurrencyAmountTypeFromJSON(json['roundingDifference']),
    };
}

export function RoundingDifferenceAmountTypeToJSON(value?: RoundingDifferenceAmountType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': CurrencyAmountTypeToJSON(value.amount),
        'hotelId': value.hotelId,
        'roundingDifference': CurrencyAmountTypeToJSON(value.roundingDifference),
    };
}
