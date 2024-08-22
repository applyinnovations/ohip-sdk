/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Integration Configuration API
 * APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
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
import type { UDFMappingType } from './UDFMappingType';
import {
    UDFMappingTypeFromJSON,
    UDFMappingTypeFromJSONTyped,
    UDFMappingTypeToJSON,
} from './UDFMappingType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Self-contained Request object that is used when Updating UDFMapping.
 * @export
 * @interface ChangeUDFMapping
 */
export interface ChangeUDFMapping {
    /**
     * 
     * @type {UDFMappingType}
     * @memberof ChangeUDFMapping
     */
    uDFMapping?: UDFMappingType;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof ChangeUDFMapping
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ChangeUDFMapping
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the ChangeUDFMapping interface.
 */
export function instanceOfChangeUDFMapping(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChangeUDFMappingFromJSON(json: any): ChangeUDFMapping {
    return ChangeUDFMappingFromJSONTyped(json, false);
}

export function ChangeUDFMappingFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangeUDFMapping {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uDFMapping': !exists(json, 'uDFMapping') ? undefined : UDFMappingTypeFromJSON(json['uDFMapping']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function ChangeUDFMappingToJSON(value?: ChangeUDFMapping | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uDFMapping': UDFMappingTypeToJSON(value.uDFMapping),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

