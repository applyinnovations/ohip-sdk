/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AdvancedDiscountCalculationType } from './AdvancedDiscountCalculationType';
import {
    AdvancedDiscountCalculationTypeFromJSON,
    AdvancedDiscountCalculationTypeFromJSONTyped,
    AdvancedDiscountCalculationTypeToJSON,
} from './AdvancedDiscountCalculationType';

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
export function instanceOfAdvancedDiscountRuleType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AdvancedDiscountRuleTypeFromJSON(json: any): AdvancedDiscountRuleType {
    return AdvancedDiscountRuleTypeFromJSONTyped(json, false);
}

export function AdvancedDiscountRuleTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AdvancedDiscountRuleType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'calculationRule': !exists(json, 'calculationRule') ? undefined : AdvancedDiscountCalculationTypeFromJSON(json['calculationRule']),
        'discountPercentage': !exists(json, 'discountPercentage') ? undefined : json['discountPercentage'],
        'maxOccupancyPercentage': !exists(json, 'maxOccupancyPercentage') ? undefined : json['maxOccupancyPercentage'],
        'minOccupancyPercentage': !exists(json, 'minOccupancyPercentage') ? undefined : json['minOccupancyPercentage'],
    };
}

export function AdvancedDiscountRuleTypeToJSON(value?: AdvancedDiscountRuleType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'calculationRule': AdvancedDiscountCalculationTypeToJSON(value.calculationRule),
        'discountPercentage': value.discountPercentage,
        'maxOccupancyPercentage': value.maxOccupancyPercentage,
        'minOccupancyPercentage': value.minOccupancyPercentage,
    };
}

