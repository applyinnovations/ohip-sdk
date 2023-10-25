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
import type { ExportCodeDataType } from './ExportCodeDataType';
import {
    ExportCodeDataTypeFromJSON,
    ExportCodeDataTypeFromJSONTyped,
    ExportCodeDataTypeToJSON,
} from './ExportCodeDataType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Details of one export.
 * @export
 * @interface ExportMappingCodeType
 */
export interface ExportMappingCodeType {
    /**
     * 
     * @type {ExportCodeDataType}
     * @memberof ExportMappingCodeType
     */
    dataType?: ExportCodeDataType;
    /**
     * Description of the export mapping code.
     * @type {string}
     * @memberof ExportMappingCodeType
     */
    description?: string;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof ExportMappingCodeType
     */
    exportMappingId?: UniqueIDType;
    /**
     * Name of the LOV group to be used.
     * @type {string}
     * @memberof ExportMappingCodeType
     */
    lovName?: string;
    /**
     * Code for the export mapping type.
     * @type {string}
     * @memberof ExportMappingCodeType
     */
    mappingTypeCode?: string;
    /**
     * This flag indicates the configuration item cannot be saved until a mapping for this mapping detail has been entered.
     * @type {boolean}
     * @memberof ExportMappingCodeType
     */
    required?: boolean;
    /**
     * Display sequence.
     * @type {number}
     * @memberof ExportMappingCodeType
     */
    sequenceNumber?: number;
    /**
     * This flag show LOV button when linking this mapping code to the configuration item.
     * @type {boolean}
     * @memberof ExportMappingCodeType
     */
    useLov?: boolean;
}

/**
 * Check if a given object implements the ExportMappingCodeType interface.
 */
export function instanceOfExportMappingCodeType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ExportMappingCodeTypeFromJSON(json: any): ExportMappingCodeType {
    return ExportMappingCodeTypeFromJSONTyped(json, false);
}

export function ExportMappingCodeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportMappingCodeType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dataType': !exists(json, 'dataType') ? undefined : ExportCodeDataTypeFromJSON(json['dataType']),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'exportMappingId': !exists(json, 'exportMappingId') ? undefined : UniqueIDTypeFromJSON(json['exportMappingId']),
        'lovName': !exists(json, 'lovName') ? undefined : json['lovName'],
        'mappingTypeCode': !exists(json, 'mappingTypeCode') ? undefined : json['mappingTypeCode'],
        'required': !exists(json, 'required') ? undefined : json['required'],
        'sequenceNumber': !exists(json, 'sequenceNumber') ? undefined : json['sequenceNumber'],
        'useLov': !exists(json, 'useLov') ? undefined : json['useLov'],
    };
}

export function ExportMappingCodeTypeToJSON(value?: ExportMappingCodeType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dataType': ExportCodeDataTypeToJSON(value.dataType),
        'description': value.description,
        'exportMappingId': UniqueIDTypeToJSON(value.exportMappingId),
        'lovName': value.lovName,
        'mappingTypeCode': value.mappingTypeCode,
        'required': value.required,
        'sequenceNumber': value.sequenceNumber,
        'useLov': value.useLov,
    };
}

