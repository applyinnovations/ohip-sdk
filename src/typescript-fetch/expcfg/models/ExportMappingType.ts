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
import type { ExportMappingConfigType } from './ExportMappingConfigType';
import {
    ExportMappingConfigTypeFromJSON,
    ExportMappingConfigTypeFromJSONTyped,
    ExportMappingConfigTypeToJSON,
} from './ExportMappingConfigType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Details of one export.
 * @export
 * @interface ExportMappingType
 */
export interface ExportMappingType {
    /**
     * 
     * @type {ExportMappingConfigType}
     * @memberof ExportMappingType
     */
    configType?: ExportMappingConfigType;
    /**
     * Description of the export mapping type.
     * @type {string}
     * @memberof ExportMappingType
     */
    description?: string;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof ExportMappingType
     */
    exportMappingId?: UniqueIDType;
    /**
     * Specify whether the mapping type has default value.
     * @type {boolean}
     * @memberof ExportMappingType
     */
    hasDefaultValue?: boolean;
    /**
     * Code for the export mapping type.
     * @type {string}
     * @memberof ExportMappingType
     */
    mappingType?: string;
}

/**
 * Check if a given object implements the ExportMappingType interface.
 */
export function instanceOfExportMappingType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ExportMappingTypeFromJSON(json: any): ExportMappingType {
    return ExportMappingTypeFromJSONTyped(json, false);
}

export function ExportMappingTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportMappingType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'configType': !exists(json, 'configType') ? undefined : ExportMappingConfigTypeFromJSON(json['configType']),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'exportMappingId': !exists(json, 'exportMappingId') ? undefined : UniqueIDTypeFromJSON(json['exportMappingId']),
        'hasDefaultValue': !exists(json, 'hasDefaultValue') ? undefined : json['hasDefaultValue'],
        'mappingType': !exists(json, 'mappingType') ? undefined : json['mappingType'],
    };
}

export function ExportMappingTypeToJSON(value?: ExportMappingType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'configType': ExportMappingConfigTypeToJSON(value.configType),
        'description': value.description,
        'exportMappingId': UniqueIDTypeToJSON(value.exportMappingId),
        'hasDefaultValue': value.hasDefaultValue,
        'mappingType': value.mappingType,
    };
}
