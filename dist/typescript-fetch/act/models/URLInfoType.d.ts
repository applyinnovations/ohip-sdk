/**
 * OPERA Cloud Activity API
 * APIs to cater for Sales Activity functionality in OPERA Cloud. <br /><br /> Activities provide you with an account management tool for managing daily tasks such as appointments, sales calls, contact follow-up, and so on.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { URLType } from './URLType';
/**
 * Web site address.
 * @export
 * @interface URLInfoType
 */
export interface URLInfoType {
    /**
     *
     * @type {URLType}
     * @memberof URLInfoType
     */
    url?: URLType;
}
/**
 * Check if a given object implements the URLInfoType interface.
 */
export declare function instanceOfURLInfoType(value: object): boolean;
export declare function URLInfoTypeFromJSON(json: any): URLInfoType;
export declare function URLInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): URLInfoType;
export declare function URLInfoTypeToJSON(value?: URLInfoType | null): any;