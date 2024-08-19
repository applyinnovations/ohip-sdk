/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
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
import type { RevenueGroupType } from './RevenueGroupType';
import {
    RevenueGroupTypeFromJSON,
    RevenueGroupTypeFromJSONTyped,
    RevenueGroupTypeToJSON,
} from './RevenueGroupType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request object for changing existing Catering Revenue Groups Configurations.
 * @export
 * @interface RevenueGroups
 */
export interface RevenueGroups {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof RevenueGroups
     */
    links?: Array<InstanceLink>;
    /**
     * Details for Catering Revenue Group along with associated Revenue Type codes.
     * @type {Array<RevenueGroupType>}
     * @memberof RevenueGroups
     */
    revenueGroups?: Array<RevenueGroupType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof RevenueGroups
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the RevenueGroups interface.
 */
export function instanceOfRevenueGroups(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RevenueGroupsFromJSON(json: any): RevenueGroups {
    return RevenueGroupsFromJSONTyped(json, false);
}

export function RevenueGroupsFromJSONTyped(json: any, ignoreDiscriminator: boolean): RevenueGroups {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'revenueGroups': !exists(json, 'revenueGroups') ? undefined : ((json['revenueGroups'] as Array<any>).map(RevenueGroupTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function RevenueGroupsToJSON(value?: RevenueGroups | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'revenueGroups': value.revenueGroups === undefined ? undefined : ((value.revenueGroups as Array<any>).map(RevenueGroupTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

