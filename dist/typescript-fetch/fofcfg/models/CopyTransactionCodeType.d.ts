/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CodeDescriptionType } from './CodeDescriptionType';
/**
 * The type gives details of the source transaction code to be copied. Details also include the new code and description with which the transaction code will be copied under the same hotel code.
 * @export
 * @interface CopyTransactionCodeType
 */
export interface CopyTransactionCodeType {
    /**
     *
     * @type {CodeDescriptionType}
     * @memberof CopyTransactionCodeType
     */
    copyAs?: CodeDescriptionType;
    /**
     * Source transaction code to be copied.
     * @type {string}
     * @memberof CopyTransactionCodeType
     */
    sourceTransactionCode?: string;
}
/**
 * Check if a given object implements the CopyTransactionCodeType interface.
 */
export declare function instanceOfCopyTransactionCodeType(value: object): boolean;
export declare function CopyTransactionCodeTypeFromJSON(json: any): CopyTransactionCodeType;
export declare function CopyTransactionCodeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopyTransactionCodeType;
export declare function CopyTransactionCodeTypeToJSON(value?: CopyTransactionCodeType | null): any;
