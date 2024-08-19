/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { ConditionType } from './ConditionType';
import {
    ConditionTypeFromJSON,
    ConditionTypeFromJSONTyped,
    ConditionTypeToJSON,
} from './ConditionType';
import type { LogicalOperatorType } from './LogicalOperatorType';
import {
    LogicalOperatorTypeFromJSON,
    LogicalOperatorTypeFromJSONTyped,
    LogicalOperatorTypeToJSON,
} from './LogicalOperatorType';

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
export function instanceOfConditionGroupType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConditionGroupTypeFromJSON(json: any): ConditionGroupType {
    return ConditionGroupTypeFromJSONTyped(json, false);
}

export function ConditionGroupTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConditionGroupType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'condition': !exists(json, 'condition') ? undefined : ((json['condition'] as Array<any>).map(ConditionTypeFromJSON)),
        'conditionGroup': !exists(json, 'conditionGroup') ? undefined : ((json['conditionGroup'] as Array<any>).map(ConditionGroupTypeFromJSON)),
        'logicalOperator': !exists(json, 'logicalOperator') ? undefined : LogicalOperatorTypeFromJSON(json['logicalOperator']),
    };
}

export function ConditionGroupTypeToJSON(value?: ConditionGroupType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'condition': value.condition === undefined ? undefined : ((value.condition as Array<any>).map(ConditionTypeToJSON)),
        'conditionGroup': value.conditionGroup === undefined ? undefined : ((value.conditionGroup as Array<any>).map(ConditionGroupTypeToJSON)),
        'logicalOperator': LogicalOperatorTypeToJSON(value.logicalOperator),
    };
}

