/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Integration Configuration API
 * APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';
import type { UDFMappingType } from './UDFMappingType';
import {
    UDFMappingTypeFromJSON,
    UDFMappingTypeFromJSONTyped,
    UDFMappingTypeToJSON,
} from './UDFMappingType';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * Self-contained Request object that is used when Updating UDFMapping.
 * @export
 * @interface ChangeUDFMapping
 */
export interface ChangeUDFMapping {
    /**
     * 
     * @type {Links}
     * @memberof ChangeUDFMapping
     */
    links?: Links;
    /**
     * 
     * @type {UDFMappingType}
     * @memberof ChangeUDFMapping
     */
    uDFMapping?: UDFMappingType;
    /**
     * 
     * @type {WarningsType}
     * @memberof ChangeUDFMapping
     */
    warnings?: WarningsType;
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
        
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'uDFMapping': !exists(json, 'uDFMapping') ? undefined : UDFMappingTypeFromJSON(json['uDFMapping']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
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
        
        'links': LinksToJSON(value.links),
        'uDFMapping': UDFMappingTypeToJSON(value.uDFMapping),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
