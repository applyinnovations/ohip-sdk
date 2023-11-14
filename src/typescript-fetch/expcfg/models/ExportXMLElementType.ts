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
import type { ExportXMLComplexType } from './ExportXMLComplexType';
import {
    ExportXMLComplexTypeFromJSON,
    ExportXMLComplexTypeFromJSONTyped,
    ExportXMLComplexTypeToJSON,
} from './ExportXMLComplexType';
import type { ExportXMLComplexWithSourceType } from './ExportXMLComplexWithSourceType';
import {
    ExportXMLComplexWithSourceTypeFromJSON,
    ExportXMLComplexWithSourceTypeFromJSONTyped,
    ExportXMLComplexWithSourceTypeToJSON,
} from './ExportXMLComplexWithSourceType';
import type { ExportXMLSimpleType } from './ExportXMLSimpleType';
import {
    ExportXMLSimpleTypeFromJSON,
    ExportXMLSimpleTypeFromJSONTyped,
    ExportXMLSimpleTypeToJSON,
} from './ExportXMLSimpleType';

/**
 * Type that holds all attributes associated with this tag together
 * @export
 * @interface ExportXMLElementType
 */
export interface ExportXMLElementType {
    /**
     * 
     * @type {ExportXMLComplexType}
     * @memberof ExportXMLElementType
     */
    complexElement?: ExportXMLComplexType;
    /**
     * 
     * @type {ExportXMLComplexWithSourceType}
     * @memberof ExportXMLElementType
     */
    complexElementWithSource?: ExportXMLComplexWithSourceType;
    /**
     * 
     * @type {ExportXMLSimpleType}
     * @memberof ExportXMLElementType
     */
    simpleElement?: ExportXMLSimpleType;
}

/**
 * Check if a given object implements the ExportXMLElementType interface.
 */
export function instanceOfExportXMLElementType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ExportXMLElementTypeFromJSON(json: any): ExportXMLElementType {
    return ExportXMLElementTypeFromJSONTyped(json, false);
}

export function ExportXMLElementTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportXMLElementType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'complexElement': !exists(json, 'complexElement') ? undefined : ExportXMLComplexTypeFromJSON(json['complexElement']),
        'complexElementWithSource': !exists(json, 'complexElementWithSource') ? undefined : ExportXMLComplexWithSourceTypeFromJSON(json['complexElementWithSource']),
        'simpleElement': !exists(json, 'simpleElement') ? undefined : ExportXMLSimpleTypeFromJSON(json['simpleElement']),
    };
}

export function ExportXMLElementTypeToJSON(value?: ExportXMLElementType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'complexElement': ExportXMLComplexTypeToJSON(value.complexElement),
        'complexElementWithSource': ExportXMLComplexWithSourceTypeToJSON(value.complexElementWithSource),
        'simpleElement': ExportXMLSimpleTypeToJSON(value.simpleElement),
    };
}
