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
import type { ExportColumnLengthType } from './ExportColumnLengthType';
import {
    ExportColumnLengthTypeFromJSON,
    ExportColumnLengthTypeFromJSONTyped,
    ExportColumnLengthTypeToJSON,
} from './ExportColumnLengthType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Base type that holds information related to xml tag types
 * @export
 * @interface ExportXMLAttributeType
 */
export interface ExportXMLAttributeType {
    /**
     * 
     * @type {UniqueIDType}
     * @memberof ExportXMLAttributeType
     */
    exportDataId?: UniqueIDType;
    /**
     * 
     * @type {ExportColumnLengthType}
     * @memberof ExportXMLAttributeType
     */
    length?: ExportColumnLengthType;
    /**
     * XML Tag name
     * @type {string}
     * @memberof ExportXMLAttributeType
     */
    name?: string;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof ExportXMLAttributeType
     */
    parentDataID?: UniqueIDType;
    /**
     * Determines if the tag need to be present in the data even if there is no value available
     * @type {boolean}
     * @memberof ExportXMLAttributeType
     */
    required?: boolean;
    /**
     * Value for XML tag
     * @type {string}
     * @memberof ExportXMLAttributeType
     */
    value?: string;
}

/**
 * Check if a given object implements the ExportXMLAttributeType interface.
 */
export function instanceOfExportXMLAttributeType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ExportXMLAttributeTypeFromJSON(json: any): ExportXMLAttributeType {
    return ExportXMLAttributeTypeFromJSONTyped(json, false);
}

export function ExportXMLAttributeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportXMLAttributeType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'exportDataId': !exists(json, 'exportDataId') ? undefined : UniqueIDTypeFromJSON(json['exportDataId']),
        'length': !exists(json, 'length') ? undefined : ExportColumnLengthTypeFromJSON(json['length']),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'parentDataID': !exists(json, 'parentDataID') ? undefined : UniqueIDTypeFromJSON(json['parentDataID']),
        'required': !exists(json, 'required') ? undefined : json['required'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function ExportXMLAttributeTypeToJSON(value?: ExportXMLAttributeType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'exportDataId': UniqueIDTypeToJSON(value.exportDataId),
        'length': ExportColumnLengthTypeToJSON(value.length),
        'name': value.name,
        'parentDataID': UniqueIDTypeToJSON(value.parentDataID),
        'required': value.required,
        'value': value.value,
    };
}

