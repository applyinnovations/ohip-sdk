/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Integration Configuration API
 * APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ExpressionFieldType } from './ExpressionFieldType';
import {
    ExpressionFieldTypeFromJSON,
    ExpressionFieldTypeFromJSONTyped,
    ExpressionFieldTypeToJSON,
} from './ExpressionFieldType';
import type { ExpressionOperatorType } from './ExpressionOperatorType';
import {
    ExpressionOperatorTypeFromJSON,
    ExpressionOperatorTypeFromJSONTyped,
    ExpressionOperatorTypeToJSON,
} from './ExpressionOperatorType';
import type { ExpressionParameterType } from './ExpressionParameterType';
import {
    ExpressionParameterTypeFromJSON,
    ExpressionParameterTypeFromJSONTyped,
    ExpressionParameterTypeToJSON,
} from './ExpressionParameterType';
import type { LogicalOperatorType } from './LogicalOperatorType';
import {
    LogicalOperatorTypeFromJSON,
    LogicalOperatorTypeFromJSONTyped,
    LogicalOperatorTypeToJSON,
} from './LogicalOperatorType';

/**
 * 
 * @export
 * @interface ConditionType
 */
export interface ConditionType {
    /**
     * 
     * @type {ExpressionFieldType}
     * @memberof ConditionType
     */
    leftExpression?: ExpressionFieldType;
    /**
     * 
     * @type {LogicalOperatorType}
     * @memberof ConditionType
     */
    logicalOperator?: LogicalOperatorType;
    /**
     * 
     * @type {ExpressionOperatorType}
     * @memberof ConditionType
     */
    operator?: ExpressionOperatorType;
    /**
     * 
     * @type {ExpressionParameterType}
     * @memberof ConditionType
     */
    rightExpression?: ExpressionParameterType;
}

/**
 * Check if a given object implements the ConditionType interface.
 */
export function instanceOfConditionType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConditionTypeFromJSON(json: any): ConditionType {
    return ConditionTypeFromJSONTyped(json, false);
}

export function ConditionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConditionType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'leftExpression': !exists(json, 'leftExpression') ? undefined : ExpressionFieldTypeFromJSON(json['leftExpression']),
        'logicalOperator': !exists(json, 'logicalOperator') ? undefined : LogicalOperatorTypeFromJSON(json['logicalOperator']),
        'operator': !exists(json, 'operator') ? undefined : ExpressionOperatorTypeFromJSON(json['operator']),
        'rightExpression': !exists(json, 'rightExpression') ? undefined : ExpressionParameterTypeFromJSON(json['rightExpression']),
    };
}

export function ConditionTypeToJSON(value?: ConditionType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'leftExpression': ExpressionFieldTypeToJSON(value.leftExpression),
        'logicalOperator': LogicalOperatorTypeToJSON(value.logicalOperator),
        'operator': ExpressionOperatorTypeToJSON(value.operator),
        'rightExpression': ExpressionParameterTypeToJSON(value.rightExpression),
    };
}

