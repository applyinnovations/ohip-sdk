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
 * 
 * @export
 * @interface PutUDFMappingRequest
 */
export interface PutUDFMappingRequest {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof PutUDFMappingRequest
     */
    links?: Array<InstanceLink>;
    /**
     * 
     * @type {UDFMappingType}
     * @memberof PutUDFMappingRequest
     */
    uDFMapping?: UDFMappingType;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof PutUDFMappingRequest
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the PutUDFMappingRequest interface.
 */
export function instanceOfPutUDFMappingRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PutUDFMappingRequestFromJSON(json: any): PutUDFMappingRequest {
    return PutUDFMappingRequestFromJSONTyped(json, false);
}

export function PutUDFMappingRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PutUDFMappingRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'uDFMapping': !exists(json, 'uDFMapping') ? undefined : UDFMappingTypeFromJSON(json['uDFMapping']),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function PutUDFMappingRequestToJSON(value?: PutUDFMappingRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'uDFMapping': UDFMappingTypeToJSON(value.uDFMapping),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

