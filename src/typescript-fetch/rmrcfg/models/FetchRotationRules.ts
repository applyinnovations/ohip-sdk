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
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';
import type { RotationRulesResultType } from './RotationRulesResultType';
import {
    RotationRulesResultTypeFromJSON,
    RotationRulesResultTypeFromJSONTyped,
    RotationRulesResultTypeToJSON,
} from './RotationRulesResultType';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * Response object for retrieving rotation setup rules for a given property
 * @export
 * @interface FetchRotationRules
 */
export interface FetchRotationRules {
    /**
     * 
     * @type {Links}
     * @memberof FetchRotationRules
     */
    links?: Links;
    /**
     * 
     * @type {RotationRulesResultType}
     * @memberof FetchRotationRules
     */
    rotationRulesResult?: RotationRulesResultType;
    /**
     * 
     * @type {WarningsType}
     * @memberof FetchRotationRules
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the FetchRotationRules interface.
 */
export function instanceOfFetchRotationRules(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FetchRotationRulesFromJSON(json: any): FetchRotationRules {
    return FetchRotationRulesFromJSONTyped(json, false);
}

export function FetchRotationRulesFromJSONTyped(json: any, ignoreDiscriminator: boolean): FetchRotationRules {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'rotationRulesResult': !exists(json, 'rotationRulesResult') ? undefined : RotationRulesResultTypeFromJSON(json['rotationRulesResult']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function FetchRotationRulesToJSON(value?: FetchRotationRules | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': LinksToJSON(value.links),
        'rotationRulesResult': RotationRulesResultTypeToJSON(value.rotationRulesResult),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
