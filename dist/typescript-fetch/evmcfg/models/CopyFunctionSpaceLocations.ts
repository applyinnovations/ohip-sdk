/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CopyConfigurationCodeType } from './CopyConfigurationCodeType';
import {
    CopyConfigurationCodeTypeFromJSON,
    CopyConfigurationCodeTypeFromJSONTyped,
    CopyConfigurationCodeTypeToJSON,
} from './CopyConfigurationCodeType';
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
 * @interface CopyFunctionSpaceLocations
 */
export interface CopyFunctionSpaceLocations {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof CopyFunctionSpaceLocations
     */
    links?: Array<InstanceLink>;
    /**
     * List of function space location(s) to be copied.
     * @type {Array<CopyConfigurationCodeType>}
     * @memberof CopyFunctionSpaceLocations
     */
    locations?: Array<CopyConfigurationCodeType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof CopyFunctionSpaceLocations
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the CopyFunctionSpaceLocations interface.
 */
export function instanceOfCopyFunctionSpaceLocations(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CopyFunctionSpaceLocationsFromJSON(json: any): CopyFunctionSpaceLocations {
    return CopyFunctionSpaceLocationsFromJSONTyped(json, false);
}

export function CopyFunctionSpaceLocationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopyFunctionSpaceLocations {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'locations': !exists(json, 'locations') ? undefined : ((json['locations'] as Array<any>).map(CopyConfigurationCodeTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function CopyFunctionSpaceLocationsToJSON(value?: CopyFunctionSpaceLocations | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'locations': value.locations === undefined ? undefined : ((value.locations as Array<any>).map(CopyConfigurationCodeTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

