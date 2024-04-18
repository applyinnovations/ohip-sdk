/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface RatePlanCommissionType
 */
export interface RatePlanCommissionType {
    /**
     * commission amount used by the rate plan.
     * @type {number}
     * @memberof RatePlanCommissionType
     */
    commissionAmount?: number;
    /**
     * commission code used by the rate plan.
     * @type {string}
     * @memberof RatePlanCommissionType
     */
    commissionCode?: string;
    /**
     * commission percentage used by the rate plan.
     * @type {number}
     * @memberof RatePlanCommissionType
     */
    commissionPercentage?: number;
}

/**
 * Check if a given object implements the RatePlanCommissionType interface.
 */
export function instanceOfRatePlanCommissionType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RatePlanCommissionTypeFromJSON(json: any): RatePlanCommissionType {
    return RatePlanCommissionTypeFromJSONTyped(json, false);
}

export function RatePlanCommissionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RatePlanCommissionType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'commissionAmount': !exists(json, 'commissionAmount') ? undefined : json['commissionAmount'],
        'commissionCode': !exists(json, 'commissionCode') ? undefined : json['commissionCode'],
        'commissionPercentage': !exists(json, 'commissionPercentage') ? undefined : json['commissionPercentage'],
    };
}

export function RatePlanCommissionTypeToJSON(value?: RatePlanCommissionType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'commissionAmount': value.commissionAmount,
        'commissionCode': value.commissionCode,
        'commissionPercentage': value.commissionPercentage,
    };
}
