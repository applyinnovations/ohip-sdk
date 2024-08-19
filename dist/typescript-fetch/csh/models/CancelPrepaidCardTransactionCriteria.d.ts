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
import type { SaleCriteriaType } from './SaleCriteriaType';
import type { UniqueIDType } from './UniqueIDType';
/**
 * Prepaid card criteria type used to perform manage operation on the card.
 * @export
 * @interface CancelPrepaidCardTransactionCriteria
 */
export interface CancelPrepaidCardTransactionCriteria {
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof CancelPrepaidCardTransactionCriteria
     */
    amount?: CurrencyAmountType;
    /**
     * Prepaid card number.
     * @type {string}
     * @memberof CancelPrepaidCardTransactionCriteria
     */
    cardNo?: string;
    /**
     * The Cashier ID of the Cashier who is currently processing the transaction(s).
     * @type {number}
     * @memberof CancelPrepaidCardTransactionCriteria
     */
    cashierId?: number;
    /**
     * Hotel code.
     * @type {string}
     * @memberof CancelPrepaidCardTransactionCriteria
     */
    hotelId?: string;
    /**
     *
     * @type {UniqueIDType}
     * @memberof CancelPrepaidCardTransactionCriteria
     */
    interfaceId?: UniqueIDType;
    /**
     * PIN code associated for the prepaid card.
     * @type {string}
     * @memberof CancelPrepaidCardTransactionCriteria
     */
    pin?: string;
    /**
     * Indicate that charges will be posted to the room.
     * @type {boolean}
     * @memberof CancelPrepaidCardTransactionCriteria
     */
    postChargeToRoom?: boolean;
    /**
     *
     * @type {UniqueIDType}
     * @memberof CancelPrepaidCardTransactionCriteria
     */
    profileId?: UniqueIDType;
    /**
     *
     * @type {UniqueIDType}
     * @memberof CancelPrepaidCardTransactionCriteria
     */
    reservationId?: UniqueIDType;
    /**
     *
     * @type {SaleCriteriaType}
     * @memberof CancelPrepaidCardTransactionCriteria
     */
    saleCriteria?: SaleCriteriaType;
    /**
     * The opera transaction number associated with prepaid card transaction.
     * @type {number}
     * @memberof CancelPrepaidCardTransactionCriteria
     */
    transactionNo?: number;
    /**
     *
     * @type {PrepaidCardTrxTypeType}
     * @memberof CancelPrepaidCardTransactionCriteria
     */
    transactionTye?: PrepaidCardTrxTypeType;
    /**
     * Used for Character Strings, length 0 to 100.
     * @type {string}
     * @memberof CancelPrepaidCardTransactionCriteria
     */
    vendorTransactionNo?: string;
}
/**
 * Check if a given object implements the CancelPrepaidCardTransactionCriteria interface.
 */
export declare function instanceOfCancelPrepaidCardTransactionCriteria(value: object): boolean;
export declare function CancelPrepaidCardTransactionCriteriaFromJSON(json: any): CancelPrepaidCardTransactionCriteria;
export declare function CancelPrepaidCardTransactionCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): CancelPrepaidCardTransactionCriteria;
export declare function CancelPrepaidCardTransactionCriteriaToJSON(value?: CancelPrepaidCardTransactionCriteria | null): any;
