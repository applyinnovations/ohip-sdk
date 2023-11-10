/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { EntityType } from './EntityType';
import type { ScopeType } from './ScopeType';
/**
 * Type for the threshold elements.
 * @export
 * @interface ThresholdDetailsType
 */
export interface ThresholdDetailsType {
    /**
     * The number of quantities, counts or minutes for which transaction diversion is allowed .
     * @type {number}
     * @memberof ThresholdDetailsType
     */
    complimentary?: number;
    /**
     *
     * @type {EntityType}
     * @memberof ThresholdDetailsType
     */
    entity?: EntityType;
    /**
     * Configuring this flag to be TRUE will make the thresholds editable.
     * @type {boolean}
     * @memberof ThresholdDetailsType
     */
    isEditable?: boolean;
    /**
     * Minimum required number of quantities, counts or minutes that must be posted.
     * @type {number}
     * @memberof ThresholdDetailsType
     */
    minRequired?: number;
    /**
     *
     * @type {ScopeType}
     * @memberof ThresholdDetailsType
     */
    scope?: ScopeType;
}
/**
 * Check if a given object implements the ThresholdDetailsType interface.
 */
export declare function instanceOfThresholdDetailsType(value: object): boolean;
export declare function ThresholdDetailsTypeFromJSON(json: any): ThresholdDetailsType;
export declare function ThresholdDetailsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ThresholdDetailsType;
export declare function ThresholdDetailsTypeToJSON(value?: ThresholdDetailsType | null): any;
