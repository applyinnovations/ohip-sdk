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
import type { TransferCompTransactionsCriteria } from './TransferCompTransactionsCriteria';
import type { WarningsType } from './WarningsType';
/**
 * Request type for comp transactions transfer.
 * @export
 * @interface TransferCompTransactions
 */
export interface TransferCompTransactions {
    /**
     *
     * @type {TransferCompTransactionsCriteria}
     * @memberof TransferCompTransactions
     */
    criteria?: TransferCompTransactionsCriteria;
    /**
     *
     * @type {WarningsType}
     * @memberof TransferCompTransactions
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the TransferCompTransactions interface.
 */
export declare function instanceOfTransferCompTransactions(value: object): boolean;
export declare function TransferCompTransactionsFromJSON(json: any): TransferCompTransactions;
export declare function TransferCompTransactionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferCompTransactions;
export declare function TransferCompTransactionsToJSON(value?: TransferCompTransactions | null): any;