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
import type { CurrencyExchangeType } from './CurrencyExchangeType';
import type { ProfileId } from './ProfileId';
import type { ReservationId } from './ReservationId';
/**
 * Currency conversion calculation type.
 * @export
 * @interface PostForeignCurrencyExchangeType
 */
export interface PostForeignCurrencyExchangeType {
    /**
     * The Cashier ID of the Cashier who is currently processing the transaction(s).
     * @type {number}
     * @memberof PostForeignCurrencyExchangeType
     */
    cashierId?: number;
    /**
     * Date on which exchange rate was obtained.
     * @type {string}
     * @memberof PostForeignCurrencyExchangeType
     */
    exchangeDate?: string;
    /**
     * Exchange references.
     * @type {string}
     * @memberof PostForeignCurrencyExchangeType
     */
    exchangeReference?: string;
    /**
     *
     * @type {CurrencyExchangeType}
     * @memberof PostForeignCurrencyExchangeType
     */
    exchangeType?: CurrencyExchangeType;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof PostForeignCurrencyExchangeType
     */
    fromCurrencyAmount?: CurrencyAmountType;
    /**
     * Name of the guest to whom posting is done.
     * @type {string}
     * @memberof PostForeignCurrencyExchangeType
     */
    guestName?: string;
    /**
     * Property code where the currency is being converted.
     * @type {string}
     * @memberof PostForeignCurrencyExchangeType
     */
    hotelId?: string;
    /**
     * Name of the passer by customer to whom posting is to be done.
     * @type {string}
     * @memberof PostForeignCurrencyExchangeType
     */
    passerByName?: string;
    /**
     *
     * @type {ProfileId}
     * @memberof PostForeignCurrencyExchangeType
     */
    profileId?: ProfileId;
    /**
     *
     * @type {ReservationId}
     * @memberof PostForeignCurrencyExchangeType
     */
    reservationId?: ReservationId;
    /**
     * Room to which posting is to be made.
     * @type {string}
     * @memberof PostForeignCurrencyExchangeType
     */
    room?: string;
    /**
     * Buy or Sell for calculation.
     * @type {boolean}
     * @memberof PostForeignCurrencyExchangeType
     */
    sell?: boolean;
}
/**
 * Check if a given object implements the PostForeignCurrencyExchangeType interface.
 */
export declare function instanceOfPostForeignCurrencyExchangeType(value: object): boolean;
export declare function PostForeignCurrencyExchangeTypeFromJSON(json: any): PostForeignCurrencyExchangeType;
export declare function PostForeignCurrencyExchangeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostForeignCurrencyExchangeType;
export declare function PostForeignCurrencyExchangeTypeToJSON(value?: PostForeignCurrencyExchangeType | null): any;
