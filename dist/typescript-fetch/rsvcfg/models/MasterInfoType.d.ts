/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CodeInfoType } from './CodeInfoType';
import type { MasterType } from './MasterType';
/**
 *
 * @export
 * @interface MasterInfoType
 */
export interface MasterInfoType {
    /**
     *
     * @type {Array<CodeInfoType>}
     * @memberof MasterInfoType
     */
    codeInfo?: Array<CodeInfoType>;
    /**
     *
     * @type {MasterType}
     * @memberof MasterInfoType
     */
    codeType?: MasterType;
}
/**
 * Check if a given object implements the MasterInfoType interface.
 */
export declare function instanceOfMasterInfoType(value: object): boolean;
export declare function MasterInfoTypeFromJSON(json: any): MasterInfoType;
export declare function MasterInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MasterInfoType;
export declare function MasterInfoTypeToJSON(value?: MasterInfoType | null): any;
