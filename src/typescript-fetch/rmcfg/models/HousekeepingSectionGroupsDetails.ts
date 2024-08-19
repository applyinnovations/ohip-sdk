/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
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
 * Response object for fetching housekeeping section Groups.
 * @export
 * @interface HousekeepingSectionGroupsDetails
 */
export interface HousekeepingSectionGroupsDetails {
    /**
     * List of the housekeeping section groups to be configured or fetched
     * @type {Array<HousekeepingSectionGroupType>}
     * @memberof HousekeepingSectionGroupsDetails
     */
    housekeepingSectionGroups?: Array<HousekeepingSectionGroupType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof HousekeepingSectionGroupsDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof HousekeepingSectionGroupsDetails
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the HousekeepingSectionGroupsDetails interface.
 */
export function instanceOfHousekeepingSectionGroupsDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HousekeepingSectionGroupsDetailsFromJSON(json: any): HousekeepingSectionGroupsDetails {
    return HousekeepingSectionGroupsDetailsFromJSONTyped(json, false);
}

export function HousekeepingSectionGroupsDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): HousekeepingSectionGroupsDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'housekeepingSectionGroups': !exists(json, 'housekeepingSectionGroups') ? undefined : ((json['housekeepingSectionGroups'] as Array<any>).map(HousekeepingSectionGroupTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function HousekeepingSectionGroupsDetailsToJSON(value?: HousekeepingSectionGroupsDetails | null): any {
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

