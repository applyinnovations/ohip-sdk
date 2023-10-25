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
import type { BlockGridRatesType } from './BlockGridRatesType';
import {
    BlockGridRatesTypeFromJSON,
    BlockGridRatesTypeFromJSONTyped,
    BlockGridRatesTypeToJSON,
} from './BlockGridRatesType';
import type { CodeDescriptionType } from './CodeDescriptionType';
import {
    CodeDescriptionTypeFromJSON,
    CodeDescriptionTypeFromJSONTyped,
    CodeDescriptionTypeToJSON,
} from './CodeDescriptionType';

/**
 * Room Pool Rate Program.
 * @export
 * @interface RateProgramRateType
 */
export interface RateProgramRateType {
    /**
     * Rate Program Commissionable Indicator.
     * @type {boolean}
     * @memberof RateProgramRateType
     */
    commissionable?: boolean;
    /**
     * End date of the Room Pool Rate Program.
     * @type {Date}
     * @memberof RateProgramRateType
     */
    endDate?: Date;
    /**
     * Rate Program Mobile Checkout Allowed Indicator.
     * @type {boolean}
     * @memberof RateProgramRateType
     */
    mobileCheckout?: boolean;
    /**
     * Rate Program Primary Rate Code Indicator.
     * @type {boolean}
     * @memberof RateProgramRateType
     */
    primary?: boolean;
    /**
     * 
     * @type {BlockGridRatesType}
     * @memberof RateProgramRateType
     */
    rateAmounts?: BlockGridRatesType;
    /**
     * Rate Program Code.
     * @type {string}
     * @memberof RateProgramRateType
     */
    rateCode?: string;
    /**
     * 
     * @type {CodeDescriptionType}
     * @memberof RateProgramRateType
     */
    rateMarketCode?: CodeDescriptionType;
    /**
     * Room type for which Rate Program Rate Applies.
     * @type {Array<string>}
     * @memberof RateProgramRateType
     */
    roomTypes?: Array<string>;
    /**
     * Sequence Number of the Rate Program.
     * @type {number}
     * @memberof RateProgramRateType
     */
    sequence?: number;
    /**
     * Start date of the Room Pool Rate Program.
     * @type {Date}
     * @memberof RateProgramRateType
     */
    startDate?: Date;
}

/**
 * Check if a given object implements the RateProgramRateType interface.
 */
export function instanceOfRateProgramRateType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RateProgramRateTypeFromJSON(json: any): RateProgramRateType {
    return RateProgramRateTypeFromJSONTyped(json, false);
}

export function RateProgramRateTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RateProgramRateType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'commissionable': !exists(json, 'commissionable') ? undefined : json['commissionable'],
        'endDate': !exists(json, 'endDate') ? undefined : (new Date(json['endDate'])),
        'mobileCheckout': !exists(json, 'mobileCheckout') ? undefined : json['mobileCheckout'],
        'primary': !exists(json, 'primary') ? undefined : json['primary'],
        'rateAmounts': !exists(json, 'rateAmounts') ? undefined : BlockGridRatesTypeFromJSON(json['rateAmounts']),
        'rateCode': !exists(json, 'rateCode') ? undefined : json['rateCode'],
        'rateMarketCode': !exists(json, 'rateMarketCode') ? undefined : CodeDescriptionTypeFromJSON(json['rateMarketCode']),
        'roomTypes': !exists(json, 'roomTypes') ? undefined : json['roomTypes'],
        'sequence': !exists(json, 'sequence') ? undefined : json['sequence'],
        'startDate': !exists(json, 'startDate') ? undefined : (new Date(json['startDate'])),
    };
}

export function RateProgramRateTypeToJSON(value?: RateProgramRateType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'commissionable': value.commissionable,
        'endDate': value.endDate === undefined ? undefined : (value.endDate.toISOString().substr(0,10)),
        'mobileCheckout': value.mobileCheckout,
        'primary': value.primary,
        'rateAmounts': BlockGridRatesTypeToJSON(value.rateAmounts),
        'rateCode': value.rateCode,
        'rateMarketCode': CodeDescriptionTypeToJSON(value.rateMarketCode),
        'roomTypes': value.roomTypes,
        'sequence': value.sequence,
        'startDate': value.startDate === undefined ? undefined : (value.startDate.toISOString().substr(0,10)),
    };
}

