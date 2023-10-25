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
import type { PrepaidCardTrxTypeType } from './PrepaidCardTrxTypeType';
import {
    PrepaidCardTrxTypeTypeFromJSON,
    PrepaidCardTrxTypeTypeFromJSONTyped,
    PrepaidCardTrxTypeTypeToJSON,
} from './PrepaidCardTrxTypeType';
import type { SaleCriteriaType } from './SaleCriteriaType';
import {
    SaleCriteriaTypeFromJSON,
    SaleCriteriaTypeFromJSONTyped,
    SaleCriteriaTypeToJSON,
} from './SaleCriteriaType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

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
export function instanceOfCancelPrepaidCardTransactionCriteria(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CancelPrepaidCardTransactionCriteriaFromJSON(json: any): CancelPrepaidCardTransactionCriteria {
    return CancelPrepaidCardTransactionCriteriaFromJSONTyped(json, false);
}

export function CancelPrepaidCardTransactionCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): CancelPrepaidCardTransactionCriteria {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': !exists(json, 'amount') ? undefined : CurrencyAmountTypeFromJSON(json['amount']),
        'cardNo': !exists(json, 'cardNo') ? undefined : json['cardNo'],
        'cashierId': !exists(json, 'cashierId') ? undefined : json['cashierId'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'interfaceId': !exists(json, 'interfaceId') ? undefined : UniqueIDTypeFromJSON(json['interfaceId']),
        'pin': !exists(json, 'pin') ? undefined : json['pin'],
        'postChargeToRoom': !exists(json, 'postChargeToRoom') ? undefined : json['postChargeToRoom'],
        'profileId': !exists(json, 'profileId') ? undefined : UniqueIDTypeFromJSON(json['profileId']),
        'reservationId': !exists(json, 'reservationId') ? undefined : UniqueIDTypeFromJSON(json['reservationId']),
        'saleCriteria': !exists(json, 'saleCriteria') ? undefined : SaleCriteriaTypeFromJSON(json['saleCriteria']),
        'transactionNo': !exists(json, 'transactionNo') ? undefined : json['transactionNo'],
        'transactionTye': !exists(json, 'transactionTye') ? undefined : PrepaidCardTrxTypeTypeFromJSON(json['transactionTye']),
        'vendorTransactionNo': !exists(json, 'vendorTransactionNo') ? undefined : json['vendorTransactionNo'],
    };
}

export function CancelPrepaidCardTransactionCriteriaToJSON(value?: CancelPrepaidCardTransactionCriteria | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': CurrencyAmountTypeToJSON(value.amount),
        'cardNo': value.cardNo,
        'cashierId': value.cashierId,
        'hotelId': value.hotelId,
        'interfaceId': UniqueIDTypeToJSON(value.interfaceId),
        'pin': value.pin,
        'postChargeToRoom': value.postChargeToRoom,
        'profileId': UniqueIDTypeToJSON(value.profileId),
        'reservationId': UniqueIDTypeToJSON(value.reservationId),
        'saleCriteria': SaleCriteriaTypeToJSON(value.saleCriteria),
        'transactionNo': value.transactionNo,
        'transactionTye': PrepaidCardTrxTypeTypeToJSON(value.transactionTye),
        'vendorTransactionNo': value.vendorTransactionNo,
    };
}

