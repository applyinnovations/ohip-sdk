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
import type { ExportMappingCodeType } from './ExportMappingCodeType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 *
 * @export
 * @interface FetchExportMappingCodes
 */
export interface FetchExportMappingCodes {
    /**
     * The details of the export mapping code being fetched.
     * @type {Array<ExportMappingCodeType>}
     * @memberof FetchExportMappingCodes
     */
    exportMappingCodes?: Array<ExportMappingCodeType>;
    /**
     *
     * @type {Links}
     * @memberof FetchExportMappingCodes
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof FetchExportMappingCodes
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the FetchExportMappingCodes interface.
 */
export declare function instanceOfFetchExportMappingCodes(value: object): boolean;
export declare function FetchExportMappingCodesFromJSON(json: any): FetchExportMappingCodes;
export declare function FetchExportMappingCodesFromJSONTyped(json: any, ignoreDiscriminator: boolean): FetchExportMappingCodes;
export declare function FetchExportMappingCodesToJSON(value?: FetchExportMappingCodes | null): any;
