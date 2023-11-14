/**
 * OPERA Cloud Customer Relationship Management Outbound API
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 20.99.99.99
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { AddtionalCodeInfoType } from './AddtionalCodeInfoType';
/**
 *
 * @export
 * @interface CodeInfoType
 */
export interface CodeInfoType {
    /**
     *
     * @type {string}
     * @memberof CodeInfoType
     */
    description?: string;
    /**
     *
     * @type {AddtionalCodeInfoType}
     * @memberof CodeInfoType
     */
    addtionalCodeInfo?: AddtionalCodeInfoType;
    /**
     *
     * @type {string}
     * @memberof CodeInfoType
     */
    hotelId?: string;
    /**
     *
     * @type {string}
     * @memberof CodeInfoType
     */
    code?: string;
}
/**
 * Check if a given object implements the CodeInfoType interface.
 */
export declare function instanceOfCodeInfoType(value: object): boolean;
export declare function CodeInfoTypeFromJSON(json: any): CodeInfoType;
export declare function CodeInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CodeInfoType;
export declare function CodeInfoTypeToJSON(value?: CodeInfoType | null): any;