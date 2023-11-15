/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AmountPointsType } from './AmountPointsType';
import {
    AmountPointsTypeFromJSON,
    AmountPointsTypeFromJSONTyped,
    AmountPointsTypeToJSON,
} from './AmountPointsType';

/**
 * Reservation date and its corresponding upsell rate amount
 * @export
 * @interface UpsellDailyRateType
 */
export interface UpsellDailyRateType {
    /**
     * Reservation date
     * @type {string}
     * @memberof UpsellDailyRateType
     */
    date?: string;
    /**
     * 
     * @type {AmountPointsType}
     * @memberof UpsellDailyRateType
     */
    requiredAmount?: AmountPointsType;
}

/**
 * Check if a given object implements the UpsellDailyRateType interface.
 */
export function instanceOfUpsellDailyRateType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpsellDailyRateTypeFromJSON(json: any): UpsellDailyRateType {
    return UpsellDailyRateTypeFromJSONTyped(json, false);
}

export function UpsellDailyRateTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpsellDailyRateType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'date': !exists(json, 'date') ? undefined : json['date'],
        'requiredAmount': !exists(json, 'requiredAmount') ? undefined : AmountPointsTypeFromJSON(json['requiredAmount']),
    };
}

export function UpsellDailyRateTypeToJSON(value?: UpsellDailyRateType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'date': value.date,
        'requiredAmount': AmountPointsTypeToJSON(value.requiredAmount),
    };
}

