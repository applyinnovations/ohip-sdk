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
import type { DistrictsType } from './DistrictsType';
import {
    DistrictsTypeFromJSON,
    DistrictsTypeFromJSONTyped,
    DistrictsTypeToJSON,
} from './DistrictsType';
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
 * Request object for creating Districts.
 * @export
 * @interface DistrictsCriteria
 */
export interface DistrictsCriteria {
    /**
     * 
     * @type {DistrictsType}
     * @memberof DistrictsCriteria
     */
    districts?: DistrictsType;
    /**
     * 
     * @type {Links}
     * @memberof DistrictsCriteria
     */
    links?: Links;
    /**
     * 
     * @type {WarningsType}
     * @memberof DistrictsCriteria
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the DistrictsCriteria interface.
 */
export function instanceOfDistrictsCriteria(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DistrictsCriteriaFromJSON(json: any): DistrictsCriteria {
    return DistrictsCriteriaFromJSONTyped(json, false);
}

export function DistrictsCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): DistrictsCriteria {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'districts': !exists(json, 'districts') ? undefined : DistrictsTypeFromJSON(json['districts']),
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function DistrictsCriteriaToJSON(value?: DistrictsCriteria | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'districts': DistrictsTypeToJSON(value.districts),
        'links': LinksToJSON(value.links),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
