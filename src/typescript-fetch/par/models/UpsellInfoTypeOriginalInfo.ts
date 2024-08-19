/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
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
 * Original Values of the reservation prior to upgrade.
 * @export
 * @interface UpsellInfoTypeOriginalInfo
 */
export interface UpsellInfoTypeOriginalInfo {
    /**
     * The number of nights of the reservation before being upgraded.
     * @type {number}
     * @memberof UpsellInfoTypeOriginalInfo
     */
    nights?: number;
    /**
     * The Rate Code of the Reservation before it was upgraded
     * @type {string}
     * @memberof UpsellInfoTypeOriginalInfo
     */
    rateCode?: string;
    /**
     * 
     * @type {CodeDescriptionType}
     * @memberof UpsellInfoTypeOriginalInfo
     */
    roomType?: CodeDescriptionType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof UpsellInfoTypeOriginalInfo
     */
    totalAmount?: CurrencyAmountType;
}

/**
 * Check if a given object implements the UpsellInfoTypeOriginalInfo interface.
 */
export function instanceOfUpsellInfoTypeOriginalInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpsellInfoTypeOriginalInfoFromJSON(json: any): UpsellInfoTypeOriginalInfo {
    return UpsellInfoTypeOriginalInfoFromJSONTyped(json, false);
}

export function UpsellInfoTypeOriginalInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpsellInfoTypeOriginalInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nights': !exists(json, 'nights') ? undefined : json['nights'],
        'rateCode': !exists(json, 'rateCode') ? undefined : json['rateCode'],
        'roomType': !exists(json, 'roomType') ? undefined : CodeDescriptionTypeFromJSON(json['roomType']),
        'totalAmount': !exists(json, 'totalAmount') ? undefined : CurrencyAmountTypeFromJSON(json['totalAmount']),
    };
}

export function UpsellInfoTypeOriginalInfoToJSON(value?: UpsellInfoTypeOriginalInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'nights': value.nights,
        'rateCode': value.rateCode,
        'roomType': CodeDescriptionTypeToJSON(value.roomType),
        'totalAmount': CurrencyAmountTypeToJSON(value.totalAmount),
    };
}

