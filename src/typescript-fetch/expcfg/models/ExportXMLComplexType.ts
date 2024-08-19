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
import type { ExportXMLAttributeType } from './ExportXMLAttributeType';
import {
    ExportXMLAttributeTypeFromJSON,
    ExportXMLAttributeTypeFromJSONTyped,
    ExportXMLAttributeTypeToJSON,
} from './ExportXMLAttributeType';
import type { ExportXMLElementType } from './ExportXMLElementType';
import {
    ExportXMLElementTypeFromJSON,
    ExportXMLElementTypeFromJSONTyped,
    ExportXMLElementTypeToJSON,
} from './ExportXMLElementType';

/**
 * XML simple type that holds all the information related to complex element tag
 * @export
 * @interface ExportXMLComplexType
 */
export interface ExportXMLComplexType {
    /**
     * XML attribute type that holds all the information related to attribute tag
     * @type {Array<ExportXMLAttributeType>}
     * @memberof ExportXMLComplexType
     */
    attributes?: Array<ExportXMLAttributeType>;
    /**
     * XML element type that holds all the information related to element tag
     * @type {Array<ExportXMLElementType>}
     * @memberof ExportXMLComplexType
     */
    elements?: Array<ExportXMLElementType>;
    /**
     * XML simple tag name
     * @type {string}
     * @memberof ExportXMLComplexType
     */
    name?: string;
}

/**
 * Check if a given object implements the ExportXMLComplexType interface.
 */
export function instanceOfExportXMLComplexType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ExportXMLComplexTypeFromJSON(json: any): ExportXMLComplexType {
    return ExportXMLComplexTypeFromJSONTyped(json, false);
}

export function ExportXMLComplexTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportXMLComplexType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attributes': !exists(json, 'attributes') ? undefined : ((json['attributes'] as Array<any>).map(ExportXMLAttributeTypeFromJSON)),
        'elements': !exists(json, 'elements') ? undefined : ((json['elements'] as Array<any>).map(ExportXMLElementTypeFromJSON)),
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function ExportXMLComplexTypeToJSON(value?: ExportXMLComplexType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attributes': value.attributes === undefined ? undefined : ((value.attributes as Array<any>).map(ExportXMLAttributeTypeToJSON)),
        'elements': value.elements === undefined ? undefined : ((value.elements as Array<any>).map(ExportXMLElementTypeToJSON)),
        'name': value.name,
    };
}

