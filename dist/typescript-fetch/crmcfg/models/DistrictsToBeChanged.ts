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
import type { DistrictType } from './DistrictType';
import {
    DistrictTypeFromJSON,
    DistrictTypeFromJSONTyped,
    DistrictTypeToJSON,
} from './DistrictType';
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
 * Request object for changing Districts.
 * @export
 * @interface DistrictsToBeChanged
 */
export interface DistrictsToBeChanged {
    /**
     * List of Districts.
     * @type {Array<DistrictType>}
     * @memberof DistrictsToBeChanged
     */
    districts?: Array<DistrictType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof DistrictsToBeChanged
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof DistrictsToBeChanged
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the DistrictsToBeChanged interface.
 */
export function instanceOfDistrictsToBeChanged(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DistrictsToBeChangedFromJSON(json: any): DistrictsToBeChanged {
    return DistrictsToBeChangedFromJSONTyped(json, false);
}

export function DistrictsToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): DistrictsToBeChanged {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'districts': !exists(json, 'districts') ? undefined : ((json['districts'] as Array<any>).map(DistrictTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function DistrictsToBeChangedToJSON(value?: DistrictsToBeChanged | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'districts': value.districts === undefined ? undefined : ((value.districts as Array<any>).map(DistrictTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

