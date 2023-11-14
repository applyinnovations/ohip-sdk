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
import type { ExportHeaderSummaryType } from './ExportHeaderSummaryType';
import type { GeneratedExportStatusType } from './GeneratedExportStatusType';
import type { UniqueIDType } from './UniqueIDType';
/**
 * Information of one generated export.
 * @export
 * @interface GeneratedExportType
 */
export interface GeneratedExportType {
    /**
     * A flag that shows whether the checksum functionality is enabled.
     * @type {boolean}
     * @memberof GeneratedExportType
     */
    checksumEnabled?: boolean;
    /**
     * The beginning date for the export.
     * @type {Date}
     * @memberof GeneratedExportType
     */
    dataFromDate?: Date;
    /**
     *
     * @type {ExportHeaderSummaryType}
     * @memberof GeneratedExportType
     */
    dataHeader?: ExportHeaderSummaryType;
    /**
     * The ending date for the export.
     * @type {Date}
     * @memberof GeneratedExportType
     */
    dataToDate?: Date;
    /**
     *
     * @type {UniqueIDType}
     * @memberof GeneratedExportType
     */
    exportDataId?: UniqueIDType;
    /**
     * The date that the export was generated.
     * @type {Date}
     * @memberof GeneratedExportType
     */
    generatedDate?: Date;
    /**
     * The errors generated during the export.
     * @type {string}
     * @memberof GeneratedExportType
     */
    generatedErrors?: string;
    /**
     * The generated file extension.
     * @type {string}
     * @memberof GeneratedExportType
     */
    generatedFileExtension?: string;
    /**
     * The generated file location.
     * @type {string}
     * @memberof GeneratedExportType
     */
    generatedFileLocation?: string;
    /**
     * The generated file name.
     * @type {string}
     * @memberof GeneratedExportType
     */
    generatedFileName?: string;
    /**
     * The generated file path.
     * @type {string}
     * @memberof GeneratedExportType
     */
    generatedFilePath?: string;
    /**
     * A flag to indicate if export file has to be uploaded automatically by IAS to HTTP site
     * @type {boolean}
     * @memberof GeneratedExportType
     */
    hTTPUpload?: boolean;
    /**
     * A flag that shows whether the there is credit card information in the export. Certain restrictions apply when this is detected.
     * @type {boolean}
     * @memberof GeneratedExportType
     */
    hasCreditCardData?: boolean;
    /**
     * A Flag that indicates whether job completed succesfully or not.
     * @type {boolean}
     * @memberof GeneratedExportType
     */
    jobCompleted?: boolean;
    /**
     *
     * @type {GeneratedExportStatusType}
     * @memberof GeneratedExportType
     */
    status?: GeneratedExportStatusType;
    /**
     * The total number of records generated.
     * @type {number}
     * @memberof GeneratedExportType
     */
    totalRecords?: number;
    /**
     * The zip file name based on the formula used in the setup.
     * @type {string}
     * @memberof GeneratedExportType
     */
    zipFileName?: string;
}
/**
 * Check if a given object implements the GeneratedExportType interface.
 */
export declare function instanceOfGeneratedExportType(value: object): boolean;
export declare function GeneratedExportTypeFromJSON(json: any): GeneratedExportType;
export declare function GeneratedExportTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): GeneratedExportType;
export declare function GeneratedExportTypeToJSON(value?: GeneratedExportType | null): any;