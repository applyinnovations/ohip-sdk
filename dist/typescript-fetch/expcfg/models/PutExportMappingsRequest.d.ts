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
import type { ExportMappingType } from './ExportMappingType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 *
 * @export
 * @interface PutExportMappingsRequest
 */
export interface PutExportMappingsRequest {
    /**
     * The details of the export definition being created.
     * @type {Array<ExportMappingType>}
     * @memberof PutExportMappingsRequest
     */
    exportMapping?: Array<ExportMappingType>;
    /**
     * Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
     * @type {string}
     * @memberof PutExportMappingsRequest
     */
    hotelId?: string;
    /**
     *
     * @type {Links}
     * @memberof PutExportMappingsRequest
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof PutExportMappingsRequest
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the PutExportMappingsRequest interface.
 */
export declare function instanceOfPutExportMappingsRequest(value: object): boolean;
export declare function PutExportMappingsRequestFromJSON(json: any): PutExportMappingsRequest;
export declare function PutExportMappingsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PutExportMappingsRequest;
export declare function PutExportMappingsRequestToJSON(value?: PutExportMappingsRequest | null): any;
