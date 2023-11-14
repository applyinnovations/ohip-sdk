/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Rotation Configuration Service API
 * APIs to cater for Room Rotation Configuration functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { RotationRulesType } from './RotationRulesType';
import {
    RotationRulesTypeFromJSON,
    RotationRulesTypeFromJSONTyped,
    RotationRulesTypeToJSON,
} from './RotationRulesType';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * Request object for creating room rotation setup rules.
 * @export
 * @interface RotationRules
 */
export interface RotationRules {
    /**
     * 
     * @type {RotationRulesType}
     * @memberof RotationRules
     */
    rotationRules?: RotationRulesType;
    /**
     * 
     * @type {WarningsType}
     * @memberof RotationRules
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the RotationRules interface.
 */
export function instanceOfRotationRules(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RotationRulesFromJSON(json: any): RotationRules {
    return RotationRulesFromJSONTyped(json, false);
}

export function RotationRulesFromJSONTyped(json: any, ignoreDiscriminator: boolean): RotationRules {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'rotationRules': !exists(json, 'rotationRules') ? undefined : RotationRulesTypeFromJSON(json['rotationRules']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function RotationRulesToJSON(value?: RotationRules | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'rotationRules': RotationRulesTypeToJSON(value.rotationRules),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
