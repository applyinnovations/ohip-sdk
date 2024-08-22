/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Export Configuration API
 * APIs catering to the managing export master data configuration. The exports feature in OPERA Cloud provides the ability to create and export data files, such as back office data, to third-party interfaces and receiving systems.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Details of linked code.
 * @export
 * @interface ExportMappingLinkedCodeType
 */
export interface ExportMappingLinkedCodeType {
    /**
     * Default value.
     * @type {string}
     * @memberof ExportMappingLinkedCodeType
     */
    defaultMappedValue?: string;
    /**
     * Mapping code attached to linked code.
     * @type {string}
     * @memberof ExportMappingLinkedCodeType
     */
    exportMappingCode?: string;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof ExportMappingLinkedCodeType
     */
    exportMappingId?: UniqueIDType;
    /**
     * Linked code.
     * @type {string}
     * @memberof ExportMappingLinkedCodeType
     */
    linkedCode?: string;
    /**
     * Name of the LOV group to be used.
     * @type {string}
     * @memberof ExportMappingLinkedCodeType
     */
    lovName?: string;
    /**
     * Linked code.
     * @type {string}
     * @memberof ExportMappingLinkedCodeType
     */
    mappedValue?: string;
    /**
     * Description of the export mapping code.
     * @type {string}
     * @memberof ExportMappingLinkedCodeType
     */
    mappingCodeDescription?: string;
    /**
     * Description of the export mapping type.
     * @type {string}
     * @memberof ExportMappingLinkedCodeType
     */
    mappingTypeDescription?: string;
}

/**
 * Check if a given object implements the ExportMappingLinkedCodeType interface.
 */
export function instanceOfExportMappingLinkedCodeType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ExportMappingLinkedCodeTypeFromJSON(json: any): ExportMappingLinkedCodeType {
    return ExportMappingLinkedCodeTypeFromJSONTyped(json, false);
}

export function ExportMappingLinkedCodeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportMappingLinkedCodeType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'defaultMappedValue': !exists(json, 'defaultMappedValue') ? undefined : json['defaultMappedValue'],
        'exportMappingCode': !exists(json, 'exportMappingCode') ? undefined : json['exportMappingCode'],
        'exportMappingId': !exists(json, 'exportMappingId') ? undefined : UniqueIDTypeFromJSON(json['exportMappingId']),
        'linkedCode': !exists(json, 'linkedCode') ? undefined : json['linkedCode'],
        'lovName': !exists(json, 'lovName') ? undefined : json['lovName'],
        'mappedValue': !exists(json, 'mappedValue') ? undefined : json['mappedValue'],
        'mappingCodeDescription': !exists(json, 'mappingCodeDescription') ? undefined : json['mappingCodeDescription'],
        'mappingTypeDescription': !exists(json, 'mappingTypeDescription') ? undefined : json['mappingTypeDescription'],
    };
}

export function ExportMappingLinkedCodeTypeToJSON(value?: ExportMappingLinkedCodeType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'defaultMappedValue': value.defaultMappedValue,
        'exportMappingCode': value.exportMappingCode,
        'exportMappingId': UniqueIDTypeToJSON(value.exportMappingId),
        'linkedCode': value.linkedCode,
        'lovName': value.lovName,
        'mappedValue': value.mappedValue,
        'mappingCodeDescription': value.mappingCodeDescription,
        'mappingTypeDescription': value.mappingTypeDescription,
    };
}

