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
import type { BuildingType } from './BuildingType';
import {
    BuildingTypeFromJSON,
    BuildingTypeFromJSONTyped,
    BuildingTypeToJSON,
} from './BuildingType';
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
 * Request object to create Building details of the Hotel.
 * @export
 * @interface BuildingsCriteria
 */
export interface BuildingsCriteria {
    /**
     * Collection of Building details associated with Hotel.
     * @type {Array<BuildingType>}
     * @memberof BuildingsCriteria
     */
    buildings?: Array<BuildingType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof BuildingsCriteria
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof BuildingsCriteria
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the BuildingsCriteria interface.
 */
export function instanceOfBuildingsCriteria(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BuildingsCriteriaFromJSON(json: any): BuildingsCriteria {
    return BuildingsCriteriaFromJSONTyped(json, false);
}

export function BuildingsCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildingsCriteria {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'buildings': !exists(json, 'buildings') ? undefined : ((json['buildings'] as Array<any>).map(BuildingTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function BuildingsCriteriaToJSON(value?: BuildingsCriteria | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'buildings': value.buildings === undefined ? undefined : ((value.buildings as Array<any>).map(BuildingTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

