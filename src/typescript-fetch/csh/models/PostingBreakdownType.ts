/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
import type { GeneratePostingType } from './GeneratePostingType';
import {
    GeneratePostingTypeFromJSON,
    GeneratePostingTypeFromJSONTyped,
    GeneratePostingTypeToJSON,
} from './GeneratePostingType';

/**
 * Details of a financial posting's breakdown.
 * @export
 * @interface PostingBreakdownType
 */
export interface PostingBreakdownType {
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof PostingBreakdownType
     */
    grossAmount?: CurrencyAmountType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof PostingBreakdownType
     */
    netAmount?: CurrencyAmountType;
    /**
     * Taxes breakout associated to postings
     * @type {Array<GeneratePostingType>}
     * @memberof PostingBreakdownType
     */
    taxes?: Array<GeneratePostingType>;
}

/**
 * Check if a given object implements the PostingBreakdownType interface.
 */
export function instanceOfPostingBreakdownType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PostingBreakdownTypeFromJSON(json: any): PostingBreakdownType {
    return PostingBreakdownTypeFromJSONTyped(json, false);
}

export function PostingBreakdownTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostingBreakdownType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'grossAmount': !exists(json, 'grossAmount') ? undefined : CurrencyAmountTypeFromJSON(json['grossAmount']),
        'netAmount': !exists(json, 'netAmount') ? undefined : CurrencyAmountTypeFromJSON(json['netAmount']),
        'taxes': !exists(json, 'taxes') ? undefined : ((json['taxes'] as Array<any>).map(GeneratePostingTypeFromJSON)),
    };
}

export function PostingBreakdownTypeToJSON(value?: PostingBreakdownType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'grossAmount': CurrencyAmountTypeToJSON(value.grossAmount),
        'netAmount': CurrencyAmountTypeToJSON(value.netAmount),
        'taxes': value.taxes === undefined ? undefined : ((value.taxes as Array<any>).map(GeneratePostingTypeToJSON)),
    };
}

