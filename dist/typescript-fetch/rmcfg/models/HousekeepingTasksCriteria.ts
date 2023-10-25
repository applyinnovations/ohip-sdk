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
import type { HousekeepingTaskConfigType } from './HousekeepingTaskConfigType';
import {
    HousekeepingTaskConfigTypeFromJSON,
    HousekeepingTaskConfigTypeFromJSONTyped,
    HousekeepingTaskConfigTypeToJSON,
} from './HousekeepingTaskConfigType';
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
 * Add housekeeping tasks configurations for resort.
 * @export
 * @interface HousekeepingTasksCriteria
 */
export interface HousekeepingTasksCriteria {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof HousekeepingTasksCriteria
     */
    links?: Array<InstanceLink>;
    /**
     * List of the housekeeping tasks to be configured
     * @type {Array<HousekeepingTaskConfigType>}
     * @memberof HousekeepingTasksCriteria
     */
    tasks?: Array<HousekeepingTaskConfigType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof HousekeepingTasksCriteria
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the HousekeepingTasksCriteria interface.
 */
export function instanceOfHousekeepingTasksCriteria(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HousekeepingTasksCriteriaFromJSON(json: any): HousekeepingTasksCriteria {
    return HousekeepingTasksCriteriaFromJSONTyped(json, false);
}

export function HousekeepingTasksCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): HousekeepingTasksCriteria {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'tasks': !exists(json, 'tasks') ? undefined : ((json['tasks'] as Array<any>).map(HousekeepingTaskConfigTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function HousekeepingTasksCriteriaToJSON(value?: HousekeepingTasksCriteria | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'tasks': value.tasks === undefined ? undefined : ((value.tasks as Array<any>).map(HousekeepingTaskConfigTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

