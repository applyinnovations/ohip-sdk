/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { CurrencyAmountType } from './CurrencyAmountType';
import {
    CurrencyAmountTypeFromJSON,
    CurrencyAmountTypeFromJSONTyped,
    CurrencyAmountTypeToJSON,
} from './CurrencyAmountType';
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
 * @interface ActivatePrepaidCardCriteria
 */
export interface ActivatePrepaidCardCriteria {
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof ActivatePrepaidCardCriteria
     */
    amount?: CurrencyAmountType;
    /**
     * Prepaid card number.
     * @type {string}
     * @memberof ActivatePrepaidCardCriteria
     */
    cardNo?: string;
    /**
     * The Cashier ID of the Cashier who is currently processing the transaction(s).
     * @type {number}
     * @memberof ActivatePrepaidCardCriteria
     */
    cashierId?: number;
    /**
     * Hotel code.
     * @type {string}
     * @memberof ActivatePrepaidCardCriteria
     */
    hotelId?: string;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof ActivatePrepaidCardCriteria
     */
    interfaceId?: UniqueIDType;
    /**
     * PIN code associated for the prepaid card.
     * @type {string}
     * @memberof ActivatePrepaidCardCriteria
     */
    pin?: string;
    /**
     * Indicate that charges will be posted to the room.
     * @type {boolean}
     * @memberof ActivatePrepaidCardCriteria
     */
    postChargeToRoom?: boolean;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof ActivatePrepaidCardCriteria
     */
    profileId?: UniqueIDType;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof ActivatePrepaidCardCriteria
     */
    reservationId?: UniqueIDType;
    /**
     * 
     * @type {SaleCriteriaType}
     * @memberof ActivatePrepaidCardCriteria
     */
    saleCriteria?: SaleCriteriaType;
}

/**
 * Check if a given object implements the ActivatePrepaidCardCriteria interface.
 */
export function instanceOfActivatePrepaidCardCriteria(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ActivatePrepaidCardCriteriaFromJSON(json: any): ActivatePrepaidCardCriteria {
    return ActivatePrepaidCardCriteriaFromJSONTyped(json, false);
}

export function ActivatePrepaidCardCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActivatePrepaidCardCriteria {
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
    };
}

export function ActivatePrepaidCardCriteriaToJSON(value?: ActivatePrepaidCardCriteria | null): any {
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
    };
}

