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
import type { ExportColumnLengthType } from './ExportColumnLengthType';
import type { UniqueIDType } from './UniqueIDType';
/**
 * Base type that holds information related to xml tag types
 * @export
 * @interface ExportXMLSimpleType
 */
export interface ExportXMLSimpleType {
    /**
     *
     * @type {UniqueIDType}
     * @memberof ExportXMLSimpleType
     */
    exportDataId?: UniqueIDType;
    /**
     *
     * @type {ExportColumnLengthType}
     * @memberof ExportXMLSimpleType
     */
    length?: ExportColumnLengthType;
    /**
     * XML Tag name
     * @type {string}
     * @memberof ExportXMLSimpleType
     */
    name?: string;
    /**
     *
     * @type {UniqueIDType}
     * @memberof ExportXMLSimpleType
     */
    parentDataID?: UniqueIDType;
    /**
     * Determines if the tag need to be present in the data even if there is no value available
     * @type {boolean}
     * @memberof ExportXMLSimpleType
     */
    required?: boolean;
    /**
     * Value for XML tag
     * @type {string}
     * @memberof ExportXMLSimpleType
     */
    value?: string;
}
/**
 * Check if a given object implements the ExportXMLSimpleType interface.
 */
export declare function instanceOfExportXMLSimpleType(value: object): boolean;
export declare function ExportXMLSimpleTypeFromJSON(json: any): ExportXMLSimpleType;
export declare function ExportXMLSimpleTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportXMLSimpleType;
export declare function ExportXMLSimpleTypeToJSON(value?: ExportXMLSimpleType | null): any;