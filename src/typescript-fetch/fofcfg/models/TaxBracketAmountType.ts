/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
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
 * Details used for storing information about a tax bracket amount.
 * @export
 * @interface TaxBracketAmountType
 */
export interface TaxBracketAmountType {
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof TaxBracketAmountType
     */
    endAmount?: CurrencyAmountType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof TaxBracketAmountType
     */
    startAmount?: CurrencyAmountType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof TaxBracketAmountType
     */
    taxAmount?: CurrencyAmountType;
}

/**
 * Check if a given object implements the TaxBracketAmountType interface.
 */
export function instanceOfTaxBracketAmountType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TaxBracketAmountTypeFromJSON(json: any): TaxBracketAmountType {
    return TaxBracketAmountTypeFromJSONTyped(json, false);
}

export function TaxBracketAmountTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaxBracketAmountType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'endAmount': !exists(json, 'endAmount') ? undefined : CurrencyAmountTypeFromJSON(json['endAmount']),
        'startAmount': !exists(json, 'startAmount') ? undefined : CurrencyAmountTypeFromJSON(json['startAmount']),
        'taxAmount': !exists(json, 'taxAmount') ? undefined : CurrencyAmountTypeFromJSON(json['taxAmount']),
    };
}

export function TaxBracketAmountTypeToJSON(value?: TaxBracketAmountType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'endAmount': CurrencyAmountTypeToJSON(value.endAmount),
        'startAmount': CurrencyAmountTypeToJSON(value.startAmount),
        'taxAmount': CurrencyAmountTypeToJSON(value.taxAmount),
    };
}

