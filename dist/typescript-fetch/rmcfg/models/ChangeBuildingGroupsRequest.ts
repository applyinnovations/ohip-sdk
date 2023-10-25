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
import type { BuildingGroupType } from './BuildingGroupType';
import {
    BuildingGroupTypeFromJSON,
    BuildingGroupTypeFromJSONTyped,
    BuildingGroupTypeToJSON,
} from './BuildingGroupType';
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
 * 
 * @export
 * @interface ChangeBuildingGroupsRequest
 */
export interface ChangeBuildingGroupsRequest {
    /**
     * Collection of Building Group details.
     * @type {Array<BuildingGroupType>}
     * @memberof ChangeBuildingGroupsRequest
     */
    buildingGroups?: Array<BuildingGroupType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof ChangeBuildingGroupsRequest
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ChangeBuildingGroupsRequest
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the ChangeBuildingGroupsRequest interface.
 */
export function instanceOfChangeBuildingGroupsRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChangeBuildingGroupsRequestFromJSON(json: any): ChangeBuildingGroupsRequest {
    return ChangeBuildingGroupsRequestFromJSONTyped(json, false);
}

export function ChangeBuildingGroupsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangeBuildingGroupsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'buildingGroups': !exists(json, 'buildingGroups') ? undefined : ((json['buildingGroups'] as Array<any>).map(BuildingGroupTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function ChangeBuildingGroupsRequestToJSON(value?: ChangeBuildingGroupsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'buildingGroups': value.buildingGroups === undefined ? undefined : ((value.buildingGroups as Array<any>).map(BuildingGroupTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

