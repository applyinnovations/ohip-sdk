/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Activity API
 * APIs to cater for Sales Activity functionality in OPERA Cloud. <br /><br /> Activities provide you with an account management tool for managing daily tasks such as appointments, sales calls, contact follow-up, and so on.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Type to specify a rate promotion. Usually attached to a reservation to indicate a specific promotion is applied to the reservation.
 * @export
 * @interface PromotionType
 */
export interface PromotionType {
    /**
     * Promotion Coupon Code when promotion is setup to have a valid coupon code.
     * @type {string}
     * @memberof PromotionType
     */
    couponCode?: string;
    /**
     * Promotion code associated with the rate plan.
     * @type {string}
     * @memberof PromotionType
     */
    promotionCode?: string;
    /**
     * Promotion code Name associated with the rate plan.
     * @type {string}
     * @memberof PromotionType
     */
    promotionName?: string;
}

/**
 * Check if a given object implements the PromotionType interface.
 */
export function instanceOfPromotionType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PromotionTypeFromJSON(json: any): PromotionType {
    return PromotionTypeFromJSONTyped(json, false);
}

export function PromotionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotionType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'couponCode': !exists(json, 'couponCode') ? undefined : json['couponCode'],
        'promotionCode': !exists(json, 'promotionCode') ? undefined : json['promotionCode'],
        'promotionName': !exists(json, 'promotionName') ? undefined : json['promotionName'],
    };
}

export function PromotionTypeToJSON(value?: PromotionType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'couponCode': value.couponCode,
        'promotionCode': value.promotionCode,
        'promotionName': value.promotionName,
    };
}

