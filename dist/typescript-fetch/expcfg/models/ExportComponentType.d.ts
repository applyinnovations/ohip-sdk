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
 * Details of a specific export component.
 * @export
 * @interface ExportComponentType
 */
export interface ExportComponentType {
    /**
     * Indicates if the export has sensitive data
     * @type {boolean}
     * @memberof ExportComponentType
     */
    containsSensitiveData?: boolean;
    /**
     * The description of the export.
     * @type {string}
     * @memberof ExportComponentType
     */
    description?: string;
    /**
     *
     * @type {UniqueIDType}
     * @memberof ExportComponentType
     */
    exportFileId?: UniqueIDType;
    /**
     * Component export sequence
     * @type {number}
     * @memberof ExportComponentType
     */
    exportSequence?: number;
    /**
     * The file type of the export.
     * @type {string}
     * @memberof ExportComponentType
     */
    fileType?: string;
    /**
     * The name of the parameter form used to collect runtime information.
     * @type {string}
     * @memberof ExportComponentType
     */
    parameterForm?: string;
}
/**
 * Check if a given object implements the ExportComponentType interface.
 */
export declare function instanceOfExportComponentType(value: object): boolean;
export declare function ExportComponentTypeFromJSON(json: any): ExportComponentType;
export declare function ExportComponentTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportComponentType;
export declare function ExportComponentTypeToJSON(value?: ExportComponentType | null): any;
