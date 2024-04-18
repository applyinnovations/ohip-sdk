/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { AdvancedDiscountCalculationType } from './AdvancedDiscountCalculationType';
/**
 * Information representation of Advacned Discount Rule.
 * @export
 * @interface AdvancedDiscountRuleType
 */
export interface AdvancedDiscountRuleType {
    /**
     *
     * @type {AdvancedDiscountCalculationType}
     * @memberof AdvancedDiscountRuleType
     */
    calculationRule?: AdvancedDiscountCalculationType;
    /**
     * Discount Percentage.
     * @type {number}
     * @memberof AdvancedDiscountRuleType
     */
    discountPercentage?: number;
    /**
     * Maximum Property Occupancy Percentage.
     * @type {number}
     * @memberof AdvancedDiscountRuleType
     */
    maxOccupancyPercentage?: number;
    /**
     * Minimum Property Occupancy Percentage.
     * @type {number}
     * @memberof AdvancedDiscountRuleType
     */
    minOccupancyPercentage?: number;
}
/**
 * Check if a given object implements the AdvancedDiscountRuleType interface.
 */
export declare function instanceOfAdvancedDiscountRuleType(value: object): boolean;
export declare function AdvancedDiscountRuleTypeFromJSON(json: any): AdvancedDiscountRuleType;
export declare function AdvancedDiscountRuleTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AdvancedDiscountRuleType;
export declare function AdvancedDiscountRuleTypeToJSON(value?: AdvancedDiscountRuleType | null): any;