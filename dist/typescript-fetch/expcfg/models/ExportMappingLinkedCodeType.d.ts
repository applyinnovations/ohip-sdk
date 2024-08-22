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
import type { UniqueIDType } from './UniqueIDType';
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
export declare function instanceOfExportMappingLinkedCodeType(value: object): boolean;
export declare function ExportMappingLinkedCodeTypeFromJSON(json: any): ExportMappingLinkedCodeType;
export declare function ExportMappingLinkedCodeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportMappingLinkedCodeType;
export declare function ExportMappingLinkedCodeTypeToJSON(value?: ExportMappingLinkedCodeType | null): any;
