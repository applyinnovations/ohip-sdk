/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
import type { PayeeInfoType } from './PayeeInfoType';
import {
    PayeeInfoTypeFromJSON,
    PayeeInfoTypeFromJSONTyped,
    PayeeInfoTypeToJSON,
} from './PayeeInfoType';

/**
 * Folio window view which holds the set of folios for a reservation.
 * @export
 * @interface ReservationFolioWindowType
 */
export interface ReservationFolioWindowType {
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof ReservationFolioWindowType
     */
    balance?: CurrencyAmountType;
    /**
     * 
     * @type {number}
     * @memberof ReservationFolioWindowType
     */
    folioWindowNo?: number;
    /**
     * 
     * @type {PayeeInfoType}
     * @memberof ReservationFolioWindowType
     */
    payeeInfo?: PayeeInfoType;
    /**
     * Payment Method Type
     * @type {string}
     * @memberof ReservationFolioWindowType
     */
    paymentMethod?: string;
}

/**
 * Check if a given object implements the ReservationFolioWindowType interface.
 */
export function instanceOfReservationFolioWindowType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReservationFolioWindowTypeFromJSON(json: any): ReservationFolioWindowType {
    return ReservationFolioWindowTypeFromJSONTyped(json, false);
}

export function ReservationFolioWindowTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationFolioWindowType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'balance': !exists(json, 'balance') ? undefined : CurrencyAmountTypeFromJSON(json['balance']),
        'folioWindowNo': !exists(json, 'folioWindowNo') ? undefined : json['folioWindowNo'],
        'payeeInfo': !exists(json, 'payeeInfo') ? undefined : PayeeInfoTypeFromJSON(json['payeeInfo']),
        'paymentMethod': !exists(json, 'paymentMethod') ? undefined : json['paymentMethod'],
    };
}

export function ReservationFolioWindowTypeToJSON(value?: ReservationFolioWindowType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'balance': CurrencyAmountTypeToJSON(value.balance),
        'folioWindowNo': value.folioWindowNo,
        'payeeInfo': PayeeInfoTypeToJSON(value.payeeInfo),
        'paymentMethod': value.paymentMethod,
    };
}

