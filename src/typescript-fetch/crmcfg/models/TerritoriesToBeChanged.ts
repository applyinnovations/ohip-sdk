/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
import type { TerritoriesType } from './TerritoriesType';
import {
    TerritoriesTypeFromJSON,
    TerritoriesTypeFromJSONTyped,
    TerritoriesTypeToJSON,
} from './TerritoriesType';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * Request object for changing Territories.
 * @export
 * @interface TerritoriesToBeChanged
 */
export interface TerritoriesToBeChanged {
    /**
     * 
     * @type {Links}
     * @memberof TerritoriesToBeChanged
     */
    links?: Links;
    /**
     * 
     * @type {TerritoriesType}
     * @memberof TerritoriesToBeChanged
     */
    territories?: TerritoriesType;
    /**
     * 
     * @type {WarningsType}
     * @memberof TerritoriesToBeChanged
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the TerritoriesToBeChanged interface.
 */
export function instanceOfTerritoriesToBeChanged(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TerritoriesToBeChangedFromJSON(json: any): TerritoriesToBeChanged {
    return TerritoriesToBeChangedFromJSONTyped(json, false);
}

export function TerritoriesToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): TerritoriesToBeChanged {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'territories': !exists(json, 'territories') ? undefined : TerritoriesTypeFromJSON(json['territories']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function TerritoriesToBeChangedToJSON(value?: TerritoriesToBeChanged | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': LinksToJSON(value.links),
        'territories': TerritoriesTypeToJSON(value.territories),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
