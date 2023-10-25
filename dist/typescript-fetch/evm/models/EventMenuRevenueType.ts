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
import type { CurrencyAmountType } from './CurrencyAmountType';
import {
    CurrencyAmountTypeFromJSON,
    CurrencyAmountTypeFromJSONTyped,
    CurrencyAmountTypeToJSON,
} from './CurrencyAmountType';
import type { MenuTypeType } from './MenuTypeType';
import {
    MenuTypeTypeFromJSON,
    MenuTypeTypeFromJSONTyped,
    MenuTypeTypeToJSON,
} from './MenuTypeType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Pertain Revenue Detail Information of the Menu.
 * @export
 * @interface EventMenuRevenueType
 */
export interface EventMenuRevenueType {
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof EventMenuRevenueType
     */
    cost?: CurrencyAmountType;
    /**
     * This type holds cost of the Menu.
     * @type {number}
     * @memberof EventMenuRevenueType
     */
    costMargin?: number;
    /**
     * Indicates that this resource item is a custom item added for this event.
     * @type {boolean}
     * @memberof EventMenuRevenueType
     */
    custom?: boolean;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof EventMenuRevenueType
     */
    internalQuote?: CurrencyAmountType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof EventMenuRevenueType
     */
    price?: CurrencyAmountType;
    /**
     * This type holds price margin for the given Menu.
     * @type {number}
     * @memberof EventMenuRevenueType
     */
    priceMargin?: number;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof EventMenuRevenueType
     */
    resourceId?: UniqueIDType;
    /**
     * This supports all Revenue Types
     * @type {string}
     * @memberof EventMenuRevenueType
     */
    revenueType?: string;
    /**
     * 
     * @type {MenuTypeType}
     * @memberof EventMenuRevenueType
     */
    type?: MenuTypeType;
}

/**
 * Check if a given object implements the EventMenuRevenueType interface.
 */
export function instanceOfEventMenuRevenueType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EventMenuRevenueTypeFromJSON(json: any): EventMenuRevenueType {
    return EventMenuRevenueTypeFromJSONTyped(json, false);
}

export function EventMenuRevenueTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventMenuRevenueType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cost': !exists(json, 'cost') ? undefined : CurrencyAmountTypeFromJSON(json['cost']),
        'costMargin': !exists(json, 'costMargin') ? undefined : json['costMargin'],
        'custom': !exists(json, 'custom') ? undefined : json['custom'],
        'internalQuote': !exists(json, 'internalQuote') ? undefined : CurrencyAmountTypeFromJSON(json['internalQuote']),
        'price': !exists(json, 'price') ? undefined : CurrencyAmountTypeFromJSON(json['price']),
        'priceMargin': !exists(json, 'priceMargin') ? undefined : json['priceMargin'],
        'resourceId': !exists(json, 'resourceId') ? undefined : UniqueIDTypeFromJSON(json['resourceId']),
        'revenueType': !exists(json, 'revenueType') ? undefined : json['revenueType'],
        'type': !exists(json, 'type') ? undefined : MenuTypeTypeFromJSON(json['type']),
    };
}

export function EventMenuRevenueTypeToJSON(value?: EventMenuRevenueType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cost': CurrencyAmountTypeToJSON(value.cost),
        'costMargin': value.costMargin,
        'custom': value.custom,
        'internalQuote': CurrencyAmountTypeToJSON(value.internalQuote),
        'price': CurrencyAmountTypeToJSON(value.price),
        'priceMargin': value.priceMargin,
        'resourceId': UniqueIDTypeToJSON(value.resourceId),
        'revenueType': value.revenueType,
        'type': MenuTypeTypeToJSON(value.type),
    };
}

