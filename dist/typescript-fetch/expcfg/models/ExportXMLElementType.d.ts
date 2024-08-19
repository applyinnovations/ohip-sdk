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
import type { ExportXMLComplexType } from './ExportXMLComplexType';
import type { ExportXMLComplexWithSourceType } from './ExportXMLComplexWithSourceType';
import type { ExportXMLSimpleType } from './ExportXMLSimpleType';
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
export declare function instanceOfExportXMLElementType(value: object): boolean;
export declare function ExportXMLElementTypeFromJSON(json: any): ExportXMLElementType;
export declare function ExportXMLElementTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportXMLElementType;
export declare function ExportXMLElementTypeToJSON(value?: ExportXMLElementType | null): any;
