/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { RateStrategyConditionType } from './RateStrategyConditionType';
import type { ThresholdType } from './ThresholdType';
/**
 * The Rate strategy condition details type.
 * @export
 * @interface StrategyConditionType
 */
export interface StrategyConditionType {
    /**
     * Consider the out of order rooms for the strategy
     * @type {boolean}
     * @memberof StrategyConditionType
     */
    considerOutOfOrderRooms?: boolean;
    /**
     * Consider the sell limit for the strategy
     * @type {boolean}
     * @memberof StrategyConditionType
     */
    considerSellLimits?: boolean;
    /**
     *
     * @type {ThresholdType}
     * @memberof StrategyConditionType
     */
    threshold?: ThresholdType;
    /**
     * Flat or Percentage.
     * @type {string}
     * @memberof StrategyConditionType
     */
    thresholdType?: string;
    /**
     *
     * @type {RateStrategyConditionType}
     * @memberof StrategyConditionType
     */
    type?: RateStrategyConditionType;
}
/**
 * Check if a given object implements the StrategyConditionType interface.
 */
export declare function instanceOfStrategyConditionType(value: object): boolean;
export declare function StrategyConditionTypeFromJSON(json: any): StrategyConditionType;
export declare function StrategyConditionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StrategyConditionType;
export declare function StrategyConditionTypeToJSON(value?: StrategyConditionType | null): any;
