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
/**
 * Type to specify a rate promotion. Usually attached to a reservation to indicate a specific promotion is applied to the reservation.
 * @export
 * @interface PromotionType
 */
export interface PromotionType {
    /**
     * Promotion Coupon Code when promotion is setupCode to have a valid coupon code.
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
export declare function instanceOfPromotionType(value: object): boolean;
export declare function PromotionTypeFromJSON(json: any): PromotionType;
export declare function PromotionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotionType;
export declare function PromotionTypeToJSON(value?: PromotionType | null): any;