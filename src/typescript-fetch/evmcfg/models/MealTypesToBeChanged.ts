/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
import type { MealTypesType } from './MealTypesType';
import {
    MealTypesTypeFromJSON,
    MealTypesTypeFromJSONTyped,
    MealTypesTypeToJSON,
} from './MealTypesType';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * Request object for changing Meal Types.
 * @export
 * @interface MealTypesToBeChanged
 */
export interface MealTypesToBeChanged {
    /**
     * 
     * @type {Links}
     * @memberof MealTypesToBeChanged
     */
    links?: Links;
    /**
     * 
     * @type {MealTypesType}
     * @memberof MealTypesToBeChanged
     */
    mealTypes?: MealTypesType;
    /**
     * 
     * @type {WarningsType}
     * @memberof MealTypesToBeChanged
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the MealTypesToBeChanged interface.
 */
export function instanceOfMealTypesToBeChanged(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MealTypesToBeChangedFromJSON(json: any): MealTypesToBeChanged {
    return MealTypesToBeChangedFromJSONTyped(json, false);
}

export function MealTypesToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): MealTypesToBeChanged {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'mealTypes': !exists(json, 'mealTypes') ? undefined : MealTypesTypeFromJSON(json['mealTypes']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function MealTypesToBeChangedToJSON(value?: MealTypesToBeChanged | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': LinksToJSON(value.links),
        'mealTypes': MealTypesTypeToJSON(value.mealTypes),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
