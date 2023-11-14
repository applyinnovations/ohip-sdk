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
import type { ExportMappingLinkedCodeType } from './ExportMappingLinkedCodeType';
import type { ExportMappingMasterInfoType } from './ExportMappingMasterInfoType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Response to fetch codes linked to export mapping codes.
 * @export
 * @interface ExportMappingLinkedCodes
 */
export interface ExportMappingLinkedCodes {
    /**
     * The linked codes for the given hotel.
     * @type {Array<ExportMappingLinkedCodeType>}
     * @memberof ExportMappingLinkedCodes
     */
    linkedCodes?: Array<ExportMappingLinkedCodeType>;
    /**
     *
     * @type {Links}
     * @memberof ExportMappingLinkedCodes
     */
    links?: Links;
    /**
     *
     * @type {ExportMappingMasterInfoType}
     * @memberof ExportMappingLinkedCodes
     */
    masterInfo?: ExportMappingMasterInfoType;
    /**
     *
     * @type {WarningsType}
     * @memberof ExportMappingLinkedCodes
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the ExportMappingLinkedCodes interface.
 */
export declare function instanceOfExportMappingLinkedCodes(value: object): boolean;
export declare function ExportMappingLinkedCodesFromJSON(json: any): ExportMappingLinkedCodes;
export declare function ExportMappingLinkedCodesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportMappingLinkedCodes;
export declare function ExportMappingLinkedCodesToJSON(value?: ExportMappingLinkedCodes | null): any;