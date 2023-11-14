/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { StrategyConditionType } from './StrategyConditionType';
import {
    StrategyConditionTypeFromJSON,
    StrategyConditionTypeFromJSONTyped,
    StrategyConditionTypeToJSON,
} from './StrategyConditionType';
import type { StrategyControlType } from './StrategyControlType';
import {
    StrategyControlTypeFromJSON,
    StrategyControlTypeFromJSONTyped,
    StrategyControlTypeToJSON,
} from './StrategyControlType';
import type { StrategyRestrictionType } from './StrategyRestrictionType';
import {
    StrategyRestrictionTypeFromJSON,
    StrategyRestrictionTypeFromJSONTyped,
    StrategyRestrictionTypeToJSON,
} from './StrategyRestrictionType';

/**
 * The Rate strategy details.
 * @export
 * @interface StrategyDetailType
 */
export interface StrategyDetailType {
    /**
     * 
     * @type {StrategyConditionType}
     * @memberof StrategyDetailType
     */
    condition?: StrategyConditionType;
    /**
     * 
     * @type {StrategyControlType}
     * @memberof StrategyDetailType
     */
    control?: StrategyControlType;
    /**
     * Rate Strategy execution order sequence.
     * @type {number}
     * @memberof StrategyDetailType
     */
    executionOrder?: number;
    /**
     * 
     * @type {StrategyRestrictionType}
     * @memberof StrategyDetailType
     */
    restriction?: StrategyRestrictionType;
}

/**
 * Check if a given object implements the StrategyDetailType interface.
 */
export function instanceOfStrategyDetailType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function StrategyDetailTypeFromJSON(json: any): StrategyDetailType {
    return StrategyDetailTypeFromJSONTyped(json, false);
}

export function StrategyDetailTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StrategyDetailType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'condition': !exists(json, 'condition') ? undefined : StrategyConditionTypeFromJSON(json['condition']),
        'control': !exists(json, 'control') ? undefined : StrategyControlTypeFromJSON(json['control']),
        'executionOrder': !exists(json, 'executionOrder') ? undefined : json['executionOrder'],
        'restriction': !exists(json, 'restriction') ? undefined : StrategyRestrictionTypeFromJSON(json['restriction']),
    };
}

export function StrategyDetailTypeToJSON(value?: StrategyDetailType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'condition': StrategyConditionTypeToJSON(value.condition),
        'control': StrategyControlTypeToJSON(value.control),
        'executionOrder': value.executionOrder,
        'restriction': StrategyRestrictionTypeToJSON(value.restriction),
    };
}
