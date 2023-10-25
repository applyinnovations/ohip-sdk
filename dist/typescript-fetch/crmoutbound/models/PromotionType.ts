/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management Outbound API
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 20.99.99.99
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
    /**
     * Promotion Coupon Code when promotion is setup to have a valid coupon code.
     * @type {string}
     * @memberof PromotionType
     */
    couponCode?: string;
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
        
        'promotionCode': !exists(json, 'promotionCode') ? undefined : json['promotionCode'],
        'promotionName': !exists(json, 'promotionName') ? undefined : json['promotionName'],
        'couponCode': !exists(json, 'couponCode') ? undefined : json['couponCode'],
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
        
        'promotionCode': value.promotionCode,
        'promotionName': value.promotionName,
        'couponCode': value.couponCode,
    };
}

