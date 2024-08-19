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
import type { CurrencyAmountType } from './CurrencyAmountType';
import {
    CurrencyAmountTypeFromJSON,
    CurrencyAmountTypeFromJSONTyped,
    CurrencyAmountTypeToJSON,
} from './CurrencyAmountType';

/**
 * 
 * @export
 * @interface EventRevenueType
 */
export interface EventRevenueType {
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof EventRevenueType
     */
    revenue?: CurrencyAmountType;
    /**
     * Type of Revenue
     * @type {string}
     * @memberof EventRevenueType
     */
    revenueType?: string;
}

/**
 * Check if a given object implements the EventRevenueType interface.
 */
export function instanceOfEventRevenueType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EventRevenueTypeFromJSON(json: any): EventRevenueType {
    return EventRevenueTypeFromJSONTyped(json, false);
}

export function EventRevenueTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventRevenueType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'revenue': !exists(json, 'revenue') ? undefined : CurrencyAmountTypeFromJSON(json['revenue']),
        'revenueType': !exists(json, 'revenueType') ? undefined : json['revenueType'],
    };
}

export function EventRevenueTypeToJSON(value?: EventRevenueType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'revenue': CurrencyAmountTypeToJSON(value.revenue),
        'revenueType': value.revenueType,
    };
}

