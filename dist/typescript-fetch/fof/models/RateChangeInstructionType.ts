/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { DiscountType } from './DiscountType';
import {
    DiscountTypeFromJSON,
    DiscountTypeFromJSONTyped,
    DiscountTypeToJSON,
} from './DiscountType';
import type { RateChangeType } from './RateChangeType';
import {
    RateChangeTypeFromJSON,
    RateChangeTypeFromJSONTyped,
    RateChangeTypeToJSON,
} from './RateChangeType';

/**
 * Defines override rate type.
 * @export
 * @interface RateChangeInstructionType
 */
export interface RateChangeInstructionType {
    /**
     * 
     * @type {DiscountType}
     * @memberof RateChangeInstructionType
     */
    discount?: DiscountType;
    /**
     * 
     * @type {RateChangeType}
     * @memberof RateChangeInstructionType
     */
    rateChange?: RateChangeType;
}

/**
 * Check if a given object implements the RateChangeInstructionType interface.
 */
export function instanceOfRateChangeInstructionType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RateChangeInstructionTypeFromJSON(json: any): RateChangeInstructionType {
    return RateChangeInstructionTypeFromJSONTyped(json, false);
}

export function RateChangeInstructionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RateChangeInstructionType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'discount': !exists(json, 'discount') ? undefined : DiscountTypeFromJSON(json['discount']),
        'rateChange': !exists(json, 'rateChange') ? undefined : RateChangeTypeFromJSON(json['rateChange']),
    };
}

export function RateChangeInstructionTypeToJSON(value?: RateChangeInstructionType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'discount': DiscountTypeToJSON(value.discount),
        'rateChange': RateChangeTypeToJSON(value.rateChange),
    };
}

