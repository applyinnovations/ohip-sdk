/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ProfileDiscountType } from './ProfileDiscountType';
import {
    ProfileDiscountTypeFromJSON,
    ProfileDiscountTypeFromJSONTyped,
    ProfileDiscountTypeToJSON,
} from './ProfileDiscountType';
import type { TimeSpanType } from './TimeSpanType';
import {
    TimeSpanTypeFromJSON,
    TimeSpanTypeFromJSONTyped,
    TimeSpanTypeToJSON,
} from './TimeSpanType';

/**
 * Details of Negotiated rate.
 * @export
 * @interface NegRateAccessType
 */
export interface NegRateAccessType {
    /**
     * Commission code for the negotiated rate.
     * @type {string}
     * @memberof NegRateAccessType
     */
    commissionCode?: string;
    /**
     * List of discounts for the negotiated rate.
     * @type {Array<ProfileDiscountType>}
     * @memberof NegRateAccessType
     */
    discounts?: Array<ProfileDiscountType>;
    /**
     * The ending value of the date range.
     * @type {string}
     * @memberof NegRateAccessType
     */
    end?: string;
    /**
     * Sequence for the negotiated rate.
     * @type {number}
     * @memberof NegRateAccessType
     */
    negotiatedRateOrder?: number;
    /**
     * 
     * @type {TimeSpanType}
     * @memberof NegRateAccessType
     */
    newTimeSpan?: TimeSpanType;
    /**
     * The starting value of the date range.
     * @type {string}
     * @memberof NegRateAccessType
     */
    start?: string;
}

/**
 * Check if a given object implements the NegRateAccessType interface.
 */
export function instanceOfNegRateAccessType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function NegRateAccessTypeFromJSON(json: any): NegRateAccessType {
    return NegRateAccessTypeFromJSONTyped(json, false);
}

export function NegRateAccessTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): NegRateAccessType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'commissionCode': !exists(json, 'commissionCode') ? undefined : json['commissionCode'],
        'discounts': !exists(json, 'discounts') ? undefined : ((json['discounts'] as Array<any>).map(ProfileDiscountTypeFromJSON)),
        'end': !exists(json, 'end') ? undefined : json['end'],
        'negotiatedRateOrder': !exists(json, 'negotiatedRateOrder') ? undefined : json['negotiatedRateOrder'],
        'newTimeSpan': !exists(json, 'newTimeSpan') ? undefined : TimeSpanTypeFromJSON(json['newTimeSpan']),
        'start': !exists(json, 'start') ? undefined : json['start'],
    };
}

export function NegRateAccessTypeToJSON(value?: NegRateAccessType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'commissionCode': value.commissionCode,
        'discounts': value.discounts === undefined ? undefined : ((value.discounts as Array<any>).map(ProfileDiscountTypeToJSON)),
        'end': value.end,
        'negotiatedRateOrder': value.negotiatedRateOrder,
        'newTimeSpan': TimeSpanTypeToJSON(value.newTimeSpan),
        'start': value.start,
    };
}
