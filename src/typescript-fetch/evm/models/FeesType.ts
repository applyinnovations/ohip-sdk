/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FeeType } from './FeeType';
import {
    FeeTypeFromJSON,
    FeeTypeFromJSONTyped,
    FeeTypeToJSON,
} from './FeeType';

/**
 * A collection of fees or service charges.
 * @export
 * @interface FeesType
 */
export interface FeesType {
    /**
     * A monetary amount.
     * @type {number}
     * @memberof FeesType
     */
    amount?: number;
    /**
     * Provides a currency code to reflect the currency in which an amount may be expressed.
     * @type {string}
     * @memberof FeesType
     */
    currencyCode?: string;
    /**
     * An individual fee or service charge.
     * @type {Array<FeeType>}
     * @memberof FeesType
     */
    fee?: Array<FeeType>;
}

/**
 * Check if a given object implements the FeesType interface.
 */
export function instanceOfFeesType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FeesTypeFromJSON(json: any): FeesType {
    return FeesTypeFromJSONTyped(json, false);
}

export function FeesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FeesType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'currencyCode': !exists(json, 'currencyCode') ? undefined : json['currencyCode'],
        'fee': !exists(json, 'fee') ? undefined : ((json['fee'] as Array<any>).map(FeeTypeFromJSON)),
    };
}

export function FeesTypeToJSON(value?: FeesType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': value.amount,
        'currencyCode': value.currencyCode,
        'fee': value.fee === undefined ? undefined : ((value.fee as Array<any>).map(FeeTypeToJSON)),
    };
}

