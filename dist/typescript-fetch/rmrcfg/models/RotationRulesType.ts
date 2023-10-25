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
import type { RotationRuleSetupType } from './RotationRuleSetupType';
import {
    RotationRuleSetupTypeFromJSON,
    RotationRuleSetupTypeFromJSONTyped,
    RotationRuleSetupTypeToJSON,
} from './RotationRuleSetupType';
import type { RotationRuleType } from './RotationRuleType';
import {
    RotationRuleTypeFromJSON,
    RotationRuleTypeFromJSONTyped,
    RotationRuleTypeToJSON,
} from './RotationRuleType';

/**
 * Collection of Room Rotation Setup Rules elements.
 * @export
 * @interface RotationRulesType
 */
export interface RotationRulesType {
    /**
     * Hotel code for Room Rotation Setup Rules.
     * @type {string}
     * @memberof RotationRulesType
     */
    hotelId?: string;
    /**
     * Description of the Room Rotation Setup Rule.
     * @type {Array<RotationRuleType>}
     * @memberof RotationRulesType
     */
    rule?: Array<RotationRuleType>;
    /**
     * 
     * @type {RotationRuleSetupType}
     * @memberof RotationRulesType
     */
    setupType?: RotationRuleSetupType;
}

/**
 * Check if a given object implements the RotationRulesType interface.
 */
export function instanceOfRotationRulesType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RotationRulesTypeFromJSON(json: any): RotationRulesType {
    return RotationRulesTypeFromJSONTyped(json, false);
}

export function RotationRulesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RotationRulesType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'rule': !exists(json, 'rule') ? undefined : ((json['rule'] as Array<any>).map(RotationRuleTypeFromJSON)),
        'setupType': !exists(json, 'setupType') ? undefined : RotationRuleSetupTypeFromJSON(json['setupType']),
    };
}

export function RotationRulesTypeToJSON(value?: RotationRulesType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hotelId': value.hotelId,
        'rule': value.rule === undefined ? undefined : ((value.rule as Array<any>).map(RotationRuleTypeToJSON)),
        'setupType': RotationRuleSetupTypeToJSON(value.setupType),
    };
}

