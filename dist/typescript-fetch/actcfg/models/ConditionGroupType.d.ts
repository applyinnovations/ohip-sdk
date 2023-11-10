/**
 * OPERA Cloud Activity Management API
 * APIs to cater for Activity Configuration functionality in OPERA Cloud. In this module you can retrieve, create, update Activity configuration codes, for example create a new Activity Type.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ConditionType } from './ConditionType';
import type { LogicalOperatorType } from './LogicalOperatorType';
/**
 *
 * @export
 * @interface ConditionGroupType
 */
export interface ConditionGroupType {
    /**
     *
     * @type {Array<ConditionType>}
     * @memberof ConditionGroupType
     */
    condition?: Array<ConditionType>;
    /**
     *
     * @type {Array<ConditionGroupType>}
     * @memberof ConditionGroupType
     */
    conditionGroup?: Array<ConditionGroupType>;
    /**
     *
     * @type {LogicalOperatorType}
     * @memberof ConditionGroupType
     */
    logicalOperator?: LogicalOperatorType;
}
/**
 * Check if a given object implements the ConditionGroupType interface.
 */
export declare function instanceOfConditionGroupType(value: object): boolean;
export declare function ConditionGroupTypeFromJSON(json: any): ConditionGroupType;
export declare function ConditionGroupTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConditionGroupType;
export declare function ConditionGroupTypeToJSON(value?: ConditionGroupType | null): any;
