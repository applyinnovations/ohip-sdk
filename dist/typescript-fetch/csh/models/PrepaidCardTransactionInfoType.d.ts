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
import type { CurrencyAmountType } from './CurrencyAmountType';
import type { PrepaidCardTransactionSourceType } from './PrepaidCardTransactionSourceType';
import type { PrepaidCardTrxTypeType } from './PrepaidCardTrxTypeType';
import type { UniqueIDType } from './UniqueIDType';
/**
 * Prepaid Card Transactions
 * @export
 * @interface PrepaidCardTransactionInfoType
 */
export interface PrepaidCardTransactionInfoType {
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof PrepaidCardTransactionInfoType
     */
    amount?: CurrencyAmountType;
    /**
     * Indicate if the transaction is cancellable or not.
     * @type {boolean}
     * @memberof PrepaidCardTransactionInfoType
     */
    cancellable?: boolean;
    /**
     * Prepaid card transaction date.
     * @type {string}
     * @memberof PrepaidCardTransactionInfoType
     */
    date?: string;
    /**
     *
     * @type {UniqueIDType}
     * @memberof PrepaidCardTransactionInfoType
     */
    profileId?: UniqueIDType;
    /**
     *
     * @type {PrepaidCardTransactionSourceType}
     * @memberof PrepaidCardTransactionInfoType
     */
    source?: PrepaidCardTransactionSourceType;
    /**
     * Opera transaction number.
     * @type {number}
     * @memberof PrepaidCardTransactionInfoType
     */
    transactionNo?: number;
    /**
     *
     * @type {PrepaidCardTrxTypeType}
     * @memberof PrepaidCardTransactionInfoType
     */
    type?: PrepaidCardTrxTypeType;
    /**
     * Vendor transaction number.
     * @type {string}
     * @memberof PrepaidCardTransactionInfoType
     */
    vendorTransactionNo?: string;
}
/**
 * Check if a given object implements the PrepaidCardTransactionInfoType interface.
 */
export declare function instanceOfPrepaidCardTransactionInfoType(value: object): boolean;
export declare function PrepaidCardTransactionInfoTypeFromJSON(json: any): PrepaidCardTransactionInfoType;
export declare function PrepaidCardTransactionInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrepaidCardTransactionInfoType;
export declare function PrepaidCardTransactionInfoTypeToJSON(value?: PrepaidCardTransactionInfoType | null): any;
