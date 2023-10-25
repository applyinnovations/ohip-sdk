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
import type { DistanceTypeType } from './DistanceTypeType';
import {
    DistanceTypeTypeFromJSON,
    DistanceTypeTypeFromJSONTyped,
    DistanceTypeTypeToJSON,
} from './DistanceTypeType';
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
 * Request object for changing Distance Types.
 * @export
 * @interface DistanceTypesToBeChanged
 */
export interface DistanceTypesToBeChanged {
    /**
     * List of Distance Types.
     * @type {Array<DistanceTypeType>}
     * @memberof DistanceTypesToBeChanged
     */
    distanceTypes?: Array<DistanceTypeType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof DistanceTypesToBeChanged
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof DistanceTypesToBeChanged
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the DistanceTypesToBeChanged interface.
 */
export function instanceOfDistanceTypesToBeChanged(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DistanceTypesToBeChangedFromJSON(json: any): DistanceTypesToBeChanged {
    return DistanceTypesToBeChangedFromJSONTyped(json, false);
}

export function DistanceTypesToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): DistanceTypesToBeChanged {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'distanceTypes': !exists(json, 'distanceTypes') ? undefined : ((json['distanceTypes'] as Array<any>).map(DistanceTypeTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function DistanceTypesToBeChangedToJSON(value?: DistanceTypesToBeChanged | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'distanceTypes': value.distanceTypes === undefined ? undefined : ((value.distanceTypes as Array<any>).map(DistanceTypeTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

