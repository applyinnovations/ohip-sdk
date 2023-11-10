/**
 * OPERA Cloud Cashiering Outbound API
 * APIs to cater for Cashiering related external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CompTransactionInfoType } from './CompTransactionInfoType';
/**
 * List of comp transactions.
 * @export
 * @interface CompTransactionsInfoType
 */
export interface CompTransactionsInfoType extends Array<CompTransactionInfoType> {
}
/**
 * Check if a given object implements the CompTransactionsInfoType interface.
 */
export declare function instanceOfCompTransactionsInfoType(value: object): boolean;
export declare function CompTransactionsInfoTypeFromJSON(json: any): CompTransactionsInfoType;
export declare function CompTransactionsInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompTransactionsInfoType;
export declare function CompTransactionsInfoTypeToJSON(value?: CompTransactionsInfoType | null): any;
