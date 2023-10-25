/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { CurrencyAmountType } from './CurrencyAmountType';
import {
    CurrencyAmountTypeFromJSON,
    CurrencyAmountTypeFromJSONTyped,
    CurrencyAmountTypeToJSON,
} from './CurrencyAmountType';
import type { CurrencyExchangeType } from './CurrencyExchangeType';
import {
    CurrencyExchangeTypeFromJSON,
    CurrencyExchangeTypeFromJSONTyped,
    CurrencyExchangeTypeToJSON,
} from './CurrencyExchangeType';
import type { ProfileId } from './ProfileId';
import {
    ProfileIdFromJSON,
    ProfileIdFromJSONTyped,
    ProfileIdToJSON,
} from './ProfileId';
import type { ReservationId } from './ReservationId';
import {
    ReservationIdFromJSON,
    ReservationIdFromJSONTyped,
    ReservationIdToJSON,
} from './ReservationId';

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
     * @type {Date}
     * @memberof PostForeignCurrencyExchangeType
     */
    exchangeDate?: Date;
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
export function instanceOfPostForeignCurrencyExchangeType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PostForeignCurrencyExchangeTypeFromJSON(json: any): PostForeignCurrencyExchangeType {
    return PostForeignCurrencyExchangeTypeFromJSONTyped(json, false);
}

export function PostForeignCurrencyExchangeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostForeignCurrencyExchangeType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cashierId': !exists(json, 'cashierId') ? undefined : json['cashierId'],
        'exchangeDate': !exists(json, 'exchangeDate') ? undefined : (new Date(json['exchangeDate'])),
        'exchangeReference': !exists(json, 'exchangeReference') ? undefined : json['exchangeReference'],
        'exchangeType': !exists(json, 'exchangeType') ? undefined : CurrencyExchangeTypeFromJSON(json['exchangeType']),
        'fromCurrencyAmount': !exists(json, 'fromCurrencyAmount') ? undefined : CurrencyAmountTypeFromJSON(json['fromCurrencyAmount']),
        'guestName': !exists(json, 'guestName') ? undefined : json['guestName'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'passerByName': !exists(json, 'passerByName') ? undefined : json['passerByName'],
        'profileId': !exists(json, 'profileId') ? undefined : ProfileIdFromJSON(json['profileId']),
        'reservationId': !exists(json, 'reservationId') ? undefined : ReservationIdFromJSON(json['reservationId']),
        'room': !exists(json, 'room') ? undefined : json['room'],
        'sell': !exists(json, 'sell') ? undefined : json['sell'],
    };
}

export function PostForeignCurrencyExchangeTypeToJSON(value?: PostForeignCurrencyExchangeType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cashierId': value.cashierId,
        'exchangeDate': value.exchangeDate === undefined ? undefined : (value.exchangeDate.toISOString().substr(0,10)),
        'exchangeReference': value.exchangeReference,
        'exchangeType': CurrencyExchangeTypeToJSON(value.exchangeType),
        'fromCurrencyAmount': CurrencyAmountTypeToJSON(value.fromCurrencyAmount),
        'guestName': value.guestName,
        'hotelId': value.hotelId,
        'passerByName': value.passerByName,
        'profileId': ProfileIdToJSON(value.profileId),
        'reservationId': ReservationIdToJSON(value.reservationId),
        'room': value.room,
        'sell': value.sell,
    };
}

