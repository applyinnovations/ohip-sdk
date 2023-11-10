/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
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
     * @type {Date}
     * @memberof PrepaidCardTransactionType
     */
    purgeDate?: Date;
    /**
     * Transaction number of the Prepaid card transaction.
     * @type {Date}
     * @memberof PrepaidCardTransactionType
     */
    transactionDate?: Date;
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
