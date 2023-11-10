/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { FolioTypeNameInfoType } from './FolioTypeNameInfoType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Response for the fetch Folio Type Information.
 * @export
 * @interface FolioTypeNameInfo
 */
export interface FolioTypeNameInfo {
    /**
     *
     * @type {FolioTypeNameInfoType}
     * @memberof FolioTypeNameInfo
     */
    details?: FolioTypeNameInfoType;
    /**
     *
     * @type {Links}
     * @memberof FolioTypeNameInfo
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof FolioTypeNameInfo
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the FolioTypeNameInfo interface.
 */
export declare function instanceOfFolioTypeNameInfo(value: object): boolean;
export declare function FolioTypeNameInfoFromJSON(json: any): FolioTypeNameInfo;
export declare function FolioTypeNameInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): FolioTypeNameInfo;
export declare function FolioTypeNameInfoToJSON(value?: FolioTypeNameInfo | null): any;
