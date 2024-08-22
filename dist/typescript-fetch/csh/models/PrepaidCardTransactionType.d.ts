/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CurrencyAmountType } from './CurrencyAmountType';
import type { PrepaidCardTrxTypeType } from './PrepaidCardTrxTypeType';
/**
 * Prepaid Card transaction.
 * @export
 * @interface PrepaidCardTransactionType
 */
export interface PrepaidCardTransactionType {
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof PrepaidCardTransactionType
     */
    amount?: CurrencyAmountType;
    /**
     * Time stamp of the creation.
     * @type {string}
     * @memberof PrepaidCardTransactionType
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @type {string}
     * @memberof PrepaidCardTransactionType
     */
    creatorId?: string;
    /**
     * Identifies the last software system or person to modify a record.
     * @type {string}
     * @memberof PrepaidCardTransactionType
     */
    lastModifierId?: string;
    /**
     * Time stamp of last modification.
     * @type {string}
     * @memberof PrepaidCardTransactionType
     */
    lastModifyDateTime?: string;
    /**
     * Date an item will be purged from a database (e.g., from a live database to an archive).
     * @type {string}
     * @memberof PrepaidCardTransactionType
     */
    purgeDate?: string;
    /**
     * Transaction number of the Prepaid card transaction.
     * @type {string}
     * @memberof PrepaidCardTransactionType
     */
    transactionDate?: string;
    /**
     * Transaction number of the Prepaid card transaction.
     * @type {number}
     * @memberof PrepaidCardTransactionType
     */
    transactionNo?: number;
    /**
     *
     * @type {PrepaidCardTrxTypeType}
     * @memberof PrepaidCardTransactionType
     */
    transactionType?: PrepaidCardTrxTypeType;
}
/**
 * Check if a given object implements the PrepaidCardTransactionType interface.
 */
export declare function instanceOfPrepaidCardTransactionType(value: object): boolean;
export declare function PrepaidCardTransactionTypeFromJSON(json: any): PrepaidCardTransactionType;
export declare function PrepaidCardTransactionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrepaidCardTransactionType;
export declare function PrepaidCardTransactionTypeToJSON(value?: PrepaidCardTransactionType | null): any;
