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
import type { RotationRuleType } from './RotationRuleType';
import {
    RotationRuleTypeFromJSON,
    RotationRuleTypeFromJSONTyped,
    RotationRuleTypeToJSON,
} from './RotationRuleType';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * Request object for saving changes to room type rotation rules.
 * @export
 * @interface RoomRotationRules
 */
export interface RoomRotationRules {
    /**
     * Indicates if Rotation points recalculation job should be re-triggered.
     * @type {boolean}
     * @memberof RoomRotationRules
     */
    forceRecalculate?: boolean;
    /**
     * Defines collection of Room Rotation Setup Rules.
     * @type {Array<RotationRuleType>}
     * @memberof RoomRotationRules
     */
    rotationRules?: Array<RotationRuleType>;
    /**
     * 
     * @type {WarningsType}
     * @memberof RoomRotationRules
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the RoomRotationRules interface.
 */
export function instanceOfRoomRotationRules(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoomRotationRulesFromJSON(json: any): RoomRotationRules {
    return RoomRotationRulesFromJSONTyped(json, false);
}

export function RoomRotationRulesFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomRotationRules {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'forceRecalculate': !exists(json, 'forceRecalculate') ? undefined : json['forceRecalculate'],
        'rotationRules': !exists(json, 'rotationRules') ? undefined : ((json['rotationRules'] as Array<any>).map(RotationRuleTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function RoomRotationRulesToJSON(value?: RoomRotationRules | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'forceRecalculate': value.forceRecalculate,
        'rotationRules': value.rotationRules === undefined ? undefined : ((value.rotationRules as Array<any>).map(RotationRuleTypeToJSON)),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
