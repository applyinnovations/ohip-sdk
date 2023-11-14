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
import type { HousekeepingSectionGroupsType } from './HousekeepingSectionGroupsType';
import {
    HousekeepingSectionGroupsTypeFromJSON,
    HousekeepingSectionGroupsTypeFromJSONTyped,
    HousekeepingSectionGroupsTypeToJSON,
} from './HousekeepingSectionGroupsType';
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
 * Request object for modifying housekeeping section groups in resort.
 * @export
 * @interface HousekeepingSectionGroupsToBeChanged
 */
export interface HousekeepingSectionGroupsToBeChanged {
    /**
     * 
     * @type {HousekeepingSectionGroupsType}
     * @memberof HousekeepingSectionGroupsToBeChanged
     */
    housekeepingSectionGroups?: HousekeepingSectionGroupsType;
    /**
     * 
     * @type {Links}
     * @memberof HousekeepingSectionGroupsToBeChanged
     */
    links?: Links;
    /**
     * 
     * @type {WarningsType}
     * @memberof HousekeepingSectionGroupsToBeChanged
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the HousekeepingSectionGroupsToBeChanged interface.
 */
export function instanceOfHousekeepingSectionGroupsToBeChanged(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HousekeepingSectionGroupsToBeChangedFromJSON(json: any): HousekeepingSectionGroupsToBeChanged {
    return HousekeepingSectionGroupsToBeChangedFromJSONTyped(json, false);
}

export function HousekeepingSectionGroupsToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): HousekeepingSectionGroupsToBeChanged {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'housekeepingSectionGroups': !exists(json, 'housekeepingSectionGroups') ? undefined : HousekeepingSectionGroupsTypeFromJSON(json['housekeepingSectionGroups']),
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function HousekeepingSectionGroupsToBeChangedToJSON(value?: HousekeepingSectionGroupsToBeChanged | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'housekeepingSectionGroups': HousekeepingSectionGroupsTypeToJSON(value.housekeepingSectionGroups),
        'links': LinksToJSON(value.links),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
