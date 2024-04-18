/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CurrencyAmountType } from './CurrencyAmountType';
import type { PrepaidCardTransactionInfoType } from './PrepaidCardTransactionInfoType';
import type { UniqueIDType } from './UniqueIDType';
/**
 * Detailed information about the prepaid card.
 * @export
 * @interface PrepaidCardInfoType
 */
export interface PrepaidCardInfoType {
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof PrepaidCardInfoType
     */
    availableCashoutAmount?: CurrencyAmountType;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof PrepaidCardInfoType
     */
    balance?: CurrencyAmountType;
    /**
     * Prepaid card number.
     * @type {string}
     * @memberof PrepaidCardInfoType
     */
    cardNo?: string;
    /**
     * Masked Prepaid card / account number.
     * @type {string}
     * @memberof PrepaidCardInfoType
     */
    cardNumberMasked?: string;
    /**
     * Expiry Date of the prepaid card.
     * @type {string}
     * @memberof PrepaidCardInfoType
     */
    expiryDate?: string;
    /**
     * Hotel context for the prepaid card.
     * @type {string}
     * @memberof PrepaidCardInfoType
     */
    hotelId?: string;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof PrepaidCardInfoType
     */
    initialCredit?: CurrencyAmountType;
    /**
     * Initial Load Date of the prepaid card.
     * @type {string}
     * @memberof PrepaidCardInfoType
     */
    initialLoadDate?: string;
    /**
     *
     * @type {UniqueIDType}
     * @memberof PrepaidCardInfoType
     */
    interfaceId?: UniqueIDType;
    /**
     * Issue Date of the prepaid card.
     * @type {string}
     * @memberof PrepaidCardInfoType
     */
    issueDate?: string;
    /**
     * Indicate if opera transactions are included on the transactions list.
     * @type {boolean}
     * @memberof PrepaidCardInfoType
     */
    operaTransactionsActive?: boolean;
    /**
     * Prepaid card transaction details.
     * @type {Array<PrepaidCardTransactionInfoType>}
     * @memberof PrepaidCardInfoType
     */
    prepaidCardTransactions?: Array<PrepaidCardTransactionInfoType>;
    /**
     *
     * @type {UniqueIDType}
     * @memberof PrepaidCardInfoType
     */
    reservationId?: UniqueIDType;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof PrepaidCardInfoType
     */
    reservedAmount?: CurrencyAmountType;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof PrepaidCardInfoType
     */
    totalCredit?: CurrencyAmountType;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof PrepaidCardInfoType
     */
    totalDebit?: CurrencyAmountType;
    /**
     * Validity of the prepaid card amount.
     * @type {string}
     * @memberof PrepaidCardInfoType
     */
    validUntil?: string;
    /**
     * Indicate if vendor transactions are included on the transactions list.
     * @type {boolean}
     * @memberof PrepaidCardInfoType
     */
    vendorTransactionsActive?: boolean;
}
/**
 * Check if a given object implements the PrepaidCardInfoType interface.
 */
export declare function instanceOfPrepaidCardInfoType(value: object): boolean;
export declare function PrepaidCardInfoTypeFromJSON(json: any): PrepaidCardInfoType;
export declare function PrepaidCardInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrepaidCardInfoType;
export declare function PrepaidCardInfoTypeToJSON(value?: PrepaidCardInfoType | null): any;