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
import type { GeneratedExportType } from './GeneratedExportType';
/**
 * Contains a collection of available export instance records.
 * @export
 * @interface GeneratedExportListType
 */
export interface GeneratedExportListType {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof GeneratedExportListType
     */
    count?: number;
    /**
     * The list of export instance records.
     * @type {Array<GeneratedExportType>}
     * @memberof GeneratedExportListType
     */
    exportDataHeader?: Array<GeneratedExportType>;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof GeneratedExportListType
     */
    hasMore?: boolean;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof GeneratedExportListType
     */
    totalResults?: number;
}
/**
 * Check if a given object implements the GeneratedExportListType interface.
 */
export declare function instanceOfGeneratedExportListType(value: object): boolean;
export declare function GeneratedExportListTypeFromJSON(json: any): GeneratedExportListType;
export declare function GeneratedExportListTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): GeneratedExportListType;
export declare function GeneratedExportListTypeToJSON(value?: GeneratedExportListType | null): any;
