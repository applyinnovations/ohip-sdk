/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AmountDeterminationType } from './AmountDeterminationType';
import {
    AmountDeterminationTypeFromJSON,
    AmountDeterminationTypeFromJSONTyped,
    AmountDeterminationTypeToJSON,
} from './AmountDeterminationType';

/**
 * Applicable tax elementSpace. This elementSpace allows for both percentages and flat amounts. If one field is used, the other should be zero since logically, taxes should be calculated in only one of the two ways.
 * @export
 * @interface TaxType
 */
export interface TaxType {
    /**
     * A monetary amount.
     * @type {number}
     * @memberof TaxType
     */
    amount?: number;
    /**
     * Code identifying the fee (e.g.,agency fee, municipality fee).
     * @type {string}
     * @memberof TaxType
     */
    code?: string;
    /**
     * Provides a currency code to reflect the currency in which an amount may be expressed.
     * @type {string}
     * @memberof TaxType
     */
    currencyCode?: string;
    /**
     * 
     * @type {string}
     * @memberof TaxType
     */
    description?: string;
    /**
     * 
     * @type {AmountDeterminationType}
     * @memberof TaxType
     */
    type?: AmountDeterminationType;
}

/**
 * Check if a given object implements the TaxType interface.
 */
export function instanceOfTaxType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TaxTypeFromJSON(json: any): TaxType {
    return TaxTypeFromJSONTyped(json, false);
}

export function TaxTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaxType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'currencyCode': !exists(json, 'currencyCode') ? undefined : json['currencyCode'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'type': !exists(json, 'type') ? undefined : AmountDeterminationTypeFromJSON(json['type']),
    };
}

export function TaxTypeToJSON(value?: TaxType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': value.amount,
        'code': value.code,
        'currencyCode': value.currencyCode,
        'description': value.description,
        'type': AmountDeterminationTypeToJSON(value.type),
    };
}

