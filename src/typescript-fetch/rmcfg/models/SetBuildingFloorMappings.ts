/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BuildingFloorMappingsType } from './BuildingFloorMappingsType';
import {
    BuildingFloorMappingsTypeFromJSON,
    BuildingFloorMappingsTypeFromJSONTyped,
    BuildingFloorMappingsTypeToJSON,
} from './BuildingFloorMappingsType';
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * Request object for setting floor mappings to buildings.
 * @export
 * @interface SetBuildingFloorMappings
 */
export interface SetBuildingFloorMappings {
    /**
     * 
     * @type {BuildingFloorMappingsType}
     * @memberof SetBuildingFloorMappings
     */
    buildingFloorMappings?: BuildingFloorMappingsType;
    /**
     * 
     * @type {Links}
     * @memberof SetBuildingFloorMappings
     */
    links?: Links;
    /**
     * 
     * @type {WarningsType}
     * @memberof SetBuildingFloorMappings
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the SetBuildingFloorMappings interface.
 */
export function instanceOfSetBuildingFloorMappings(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SetBuildingFloorMappingsFromJSON(json: any): SetBuildingFloorMappings {
    return SetBuildingFloorMappingsFromJSONTyped(json, false);
}

export function SetBuildingFloorMappingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetBuildingFloorMappings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'buildingFloorMappings': !exists(json, 'buildingFloorMappings') ? undefined : BuildingFloorMappingsTypeFromJSON(json['buildingFloorMappings']),
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function SetBuildingFloorMappingsToJSON(value?: SetBuildingFloorMappings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'buildingFloorMappings': BuildingFloorMappingsTypeToJSON(value.buildingFloorMappings),
        'links': LinksToJSON(value.links),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
