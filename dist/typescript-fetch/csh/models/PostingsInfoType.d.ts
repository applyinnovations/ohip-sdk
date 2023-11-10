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
import type { DetailPostingsType } from './DetailPostingsType';
import type { TrxCodesInfoType } from './TrxCodesInfoType';
/**
 * This type is useful to hold the transaction details along the transaction code information.
 * @export
 * @interface PostingsInfoType
 */
export interface PostingsInfoType {
    /**
     *
     * @type {DetailPostingsType}
     * @memberof PostingsInfoType
     */
    transactions?: DetailPostingsType;
    /**
     *
     * @type {TrxCodesInfoType}
     * @memberof PostingsInfoType
     */
    trxCodesInfo?: TrxCodesInfoType;
}
/**
 * Check if a given object implements the PostingsInfoType interface.
 */
export declare function instanceOfPostingsInfoType(value: object): boolean;
export declare function PostingsInfoTypeFromJSON(json: any): PostingsInfoType;
export declare function PostingsInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostingsInfoType;
export declare function PostingsInfoTypeToJSON(value?: PostingsInfoType | null): any;
