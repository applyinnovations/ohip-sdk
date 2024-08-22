/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { TerritoryType } from './TerritoryType';
import {
    TerritoryTypeFromJSON,
    TerritoryTypeFromJSONTyped,
    TerritoryTypeToJSON,
} from './TerritoryType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response object for fetching Territories.
 * @export
 * @interface TerritoriesDetails
 */
export interface TerritoriesDetails {
    /**
     * List of Territories.
     * @type {Array<TerritoryType>}
     * @memberof TerritoriesDetails
     */
    territories?: Array<TerritoryType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof TerritoriesDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof TerritoriesDetails
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the TerritoriesDetails interface.
 */
export function instanceOfTerritoriesDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TerritoriesDetailsFromJSON(json: any): TerritoriesDetails {
    return TerritoriesDetailsFromJSONTyped(json, false);
}

export function TerritoriesDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TerritoriesDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'territories': !exists(json, 'territories') ? undefined : ((json['territories'] as Array<any>).map(TerritoryTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function TerritoriesDetailsToJSON(value?: TerritoriesDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'territories': value.territories === undefined ? undefined : ((value.territories as Array<any>).map(TerritoryTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

