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
import type { HousekeepingSectionGroupType } from './HousekeepingSectionGroupType';
import {
    HousekeepingSectionGroupTypeFromJSON,
    HousekeepingSectionGroupTypeFromJSONTyped,
    HousekeepingSectionGroupTypeToJSON,
} from './HousekeepingSectionGroupType';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request object for modifying housekeeping section groups in resort.
 * @export
 * @interface HousekeepingSectionGroupsToBeChanged
 */
export interface HousekeepingSectionGroupsToBeChanged {
    /**
     * List of the housekeeping section groups to be configured or fetched
     * @type {Array<HousekeepingSectionGroupType>}
     * @memberof HousekeepingSectionGroupsToBeChanged
     */
    housekeepingSectionGroups?: Array<HousekeepingSectionGroupType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof HousekeepingSectionGroupsToBeChanged
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof HousekeepingSectionGroupsToBeChanged
     */
    warnings?: Array<WarningType>;
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
        
        'housekeepingSectionGroups': !exists(json, 'housekeepingSectionGroups') ? undefined : ((json['housekeepingSectionGroups'] as Array<any>).map(HousekeepingSectionGroupTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
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
        
        'housekeepingSectionGroups': value.housekeepingSectionGroups === undefined ? undefined : ((value.housekeepingSectionGroups as Array<any>).map(HousekeepingSectionGroupTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

