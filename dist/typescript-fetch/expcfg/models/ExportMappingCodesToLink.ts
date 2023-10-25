/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Export Configuration API
 * APIs catering to the managing export master data configuration. The exports feature in OPERA Cloud provides the ability to create and export data files, such as back office data, to third-party interfaces and receiving systems.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ExportMappingCodesToLinkType } from './ExportMappingCodesToLinkType';
import {
    ExportMappingCodesToLinkTypeFromJSON,
    ExportMappingCodesToLinkTypeFromJSONTyped,
    ExportMappingCodesToLinkTypeToJSON,
} from './ExportMappingCodesToLinkType';
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
 * @interface ExportMappingCodesToLink
 */
export interface ExportMappingCodesToLink {
    /**
     * The codes for a given property which are to be linked to the mapping code.
     * @type {Array<ExportMappingCodesToLinkType>}
     * @memberof ExportMappingCodesToLink
     */
    codesToLink?: Array<ExportMappingCodesToLinkType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof ExportMappingCodesToLink
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ExportMappingCodesToLink
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the ExportMappingCodesToLink interface.
 */
export function instanceOfExportMappingCodesToLink(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ExportMappingCodesToLinkFromJSON(json: any): ExportMappingCodesToLink {
    return ExportMappingCodesToLinkFromJSONTyped(json, false);
}

export function ExportMappingCodesToLinkFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportMappingCodesToLink {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'codesToLink': !exists(json, 'codesToLink') ? undefined : ((json['codesToLink'] as Array<any>).map(ExportMappingCodesToLinkTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function ExportMappingCodesToLinkToJSON(value?: ExportMappingCodesToLink | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'codesToLink': value.codesToLink === undefined ? undefined : ((value.codesToLink as Array<any>).map(ExportMappingCodesToLinkTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

