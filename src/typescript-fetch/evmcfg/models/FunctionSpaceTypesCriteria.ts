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
import type { FunctionSpaceTypeType } from './FunctionSpaceTypeType';
import {
    FunctionSpaceTypeTypeFromJSON,
    FunctionSpaceTypeTypeFromJSONTyped,
    FunctionSpaceTypeTypeToJSON,
} from './FunctionSpaceTypeType';
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
 * Request object for creating Function Space Types.
 * @export
 * @interface FunctionSpaceTypesCriteria
 */
export interface FunctionSpaceTypesCriteria {
    /**
     * List of Function Space Types.
     * @type {Array<FunctionSpaceTypeType>}
     * @memberof FunctionSpaceTypesCriteria
     */
    functionSpaceTypes?: Array<FunctionSpaceTypeType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof FunctionSpaceTypesCriteria
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof FunctionSpaceTypesCriteria
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the FunctionSpaceTypesCriteria interface.
 */
export function instanceOfFunctionSpaceTypesCriteria(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FunctionSpaceTypesCriteriaFromJSON(json: any): FunctionSpaceTypesCriteria {
    return FunctionSpaceTypesCriteriaFromJSONTyped(json, false);
}

export function FunctionSpaceTypesCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): FunctionSpaceTypesCriteria {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'functionSpaceTypes': !exists(json, 'functionSpaceTypes') ? undefined : ((json['functionSpaceTypes'] as Array<any>).map(FunctionSpaceTypeTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function FunctionSpaceTypesCriteriaToJSON(value?: FunctionSpaceTypesCriteria | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'functionSpaceTypes': value.functionSpaceTypes === undefined ? undefined : ((value.functionSpaceTypes as Array<any>).map(FunctionSpaceTypeTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

