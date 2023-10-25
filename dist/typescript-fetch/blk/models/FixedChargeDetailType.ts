/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CodeDescriptionType } from './CodeDescriptionType';
import {
    CodeDescriptionTypeFromJSON,
    CodeDescriptionTypeFromJSONTyped,
    CodeDescriptionTypeToJSON,
} from './CodeDescriptionType';
import type { CurrencyAmountType } from './CurrencyAmountType';
import {
    CurrencyAmountTypeFromJSON,
    CurrencyAmountTypeFromJSONTyped,
    CurrencyAmountTypeToJSON,
} from './CurrencyAmountType';

/**
 * Fixed charge amount could be specified by flat fee or be a percentage of the rate amount.
 * @export
 * @interface FixedChargeDetailType
 */
export interface FixedChargeDetailType {
    /**
     * 
     * @type {CodeDescriptionType}
     * @memberof FixedChargeDetailType
     */
    article?: CodeDescriptionType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof FixedChargeDetailType
     */
    chargeAmount?: CurrencyAmountType;
    /**
     * Percentage of the rate amount.
     * @type {number}
     * @memberof FixedChargeDetailType
     */
    percent?: number;
    /**
     * Quantity of the product.
     * @type {number}
     * @memberof FixedChargeDetailType
     */
    quantity?: number;
    /**
     * Holds number of comp or cash room night to allocate.
     * @type {number}
     * @memberof FixedChargeDetailType
     */
    roomNights?: number;
    /**
     * Additional information regarding the fixed charge.
     * @type {string}
     * @memberof FixedChargeDetailType
     */
    supplement?: string;
    /**
     * 
     * @type {CodeDescriptionType}
     * @memberof FixedChargeDetailType
     */
    transaction?: CodeDescriptionType;
}

/**
 * Check if a given object implements the FixedChargeDetailType interface.
 */
export function instanceOfFixedChargeDetailType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FixedChargeDetailTypeFromJSON(json: any): FixedChargeDetailType {
    return FixedChargeDetailTypeFromJSONTyped(json, false);
}

export function FixedChargeDetailTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FixedChargeDetailType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'article': !exists(json, 'article') ? undefined : CodeDescriptionTypeFromJSON(json['article']),
        'chargeAmount': !exists(json, 'chargeAmount') ? undefined : CurrencyAmountTypeFromJSON(json['chargeAmount']),
        'percent': !exists(json, 'percent') ? undefined : json['percent'],
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
        'roomNights': !exists(json, 'roomNights') ? undefined : json['roomNights'],
        'supplement': !exists(json, 'supplement') ? undefined : json['supplement'],
        'transaction': !exists(json, 'transaction') ? undefined : CodeDescriptionTypeFromJSON(json['transaction']),
    };
}

export function FixedChargeDetailTypeToJSON(value?: FixedChargeDetailType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'article': CodeDescriptionTypeToJSON(value.article),
        'chargeAmount': CurrencyAmountTypeToJSON(value.chargeAmount),
        'percent': value.percent,
        'quantity': value.quantity,
        'roomNights': value.roomNights,
        'supplement': value.supplement,
        'transaction': CodeDescriptionTypeToJSON(value.transaction),
    };
}

