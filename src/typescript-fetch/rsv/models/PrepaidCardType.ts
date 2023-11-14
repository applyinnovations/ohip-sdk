/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Holds fixed charge information.
 * @export
 * @interface PrepaidCardType
 */
export interface PrepaidCardType {
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof PrepaidCardType
     */
    amount?: CurrencyAmountType;
    /**
     * Prepaid card / account number.
     * @type {string}
     * @memberof PrepaidCardType
     */
    cardNo?: string;
    /**
     * Masked Prepaid card / account number.
     * @type {string}
     * @memberof PrepaidCardType
     */
    cardNumberMasked?: string;
    /**
     * Time stamp of the creation.
     * @type {string}
     * @memberof PrepaidCardType
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @type {string}
     * @memberof PrepaidCardType
     */
    creatorId?: string;
    /**
     * Given name, first name or names.
     * @type {string}
     * @memberof PrepaidCardType
     */
    firstName?: string;
    /**
     * Indicates a gift card type.
     * @type {boolean}
     * @memberof PrepaidCardType
     */
    giftCard?: boolean;
    /**
     * Hotel context for the Reservations.
     * @type {string}
     * @memberof PrepaidCardType
     */
    hotelId?: string;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof PrepaidCardType
     */
    interfaceId?: UniqueIDType;
    /**
     * Identifies the last software system or person to modify a record.
     * @type {string}
     * @memberof PrepaidCardType
     */
    lastModifierId?: string;
    /**
     * Time stamp of last modification.
     * @type {string}
     * @memberof PrepaidCardType
     */
    lastModifyDateTime?: string;
    /**
     * Family name, last name or Company Name.
     * @type {string}
     * @memberof PrepaidCardType
     */
    name?: string;
    /**
     * 
     * @type {ProfileId}
     * @memberof PrepaidCardType
     */
    profileId?: ProfileId;
    /**
     * Date an item will be purged from a database (e.g., from a live database to an archive).
     * @type {Date}
     * @memberof PrepaidCardType
     */
    purgeDate?: Date;
    /**
     * 
     * @type {ReservationId}
     * @memberof PrepaidCardType
     */
    reservationId?: ReservationId;
}

/**
 * Check if a given object implements the PrepaidCardType interface.
 */
export function instanceOfPrepaidCardType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PrepaidCardTypeFromJSON(json: any): PrepaidCardType {
    return PrepaidCardTypeFromJSONTyped(json, false);
}

export function PrepaidCardTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrepaidCardType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': !exists(json, 'amount') ? undefined : CurrencyAmountTypeFromJSON(json['amount']),
        'cardNo': !exists(json, 'cardNo') ? undefined : json['cardNo'],
        'cardNumberMasked': !exists(json, 'cardNumberMasked') ? undefined : json['cardNumberMasked'],
        'createDateTime': !exists(json, 'createDateTime') ? undefined : json['createDateTime'],
        'creatorId': !exists(json, 'creatorId') ? undefined : json['creatorId'],
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'giftCard': !exists(json, 'giftCard') ? undefined : json['giftCard'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'interfaceId': !exists(json, 'interfaceId') ? undefined : UniqueIDTypeFromJSON(json['interfaceId']),
        'lastModifierId': !exists(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'lastModifyDateTime': !exists(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'profileId': !exists(json, 'profileId') ? undefined : ProfileIdFromJSON(json['profileId']),
        'purgeDate': !exists(json, 'purgeDate') ? undefined : (new Date(json['purgeDate'])),
        'reservationId': !exists(json, 'reservationId') ? undefined : ReservationIdFromJSON(json['reservationId']),
    };
}

export function PrepaidCardTypeToJSON(value?: PrepaidCardType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': CurrencyAmountTypeToJSON(value.amount),
        'cardNo': value.cardNo,
        'cardNumberMasked': value.cardNumberMasked,
        'createDateTime': value.createDateTime,
        'creatorId': value.creatorId,
        'firstName': value.firstName,
        'giftCard': value.giftCard,
        'hotelId': value.hotelId,
        'interfaceId': UniqueIDTypeToJSON(value.interfaceId),
        'lastModifierId': value.lastModifierId,
        'lastModifyDateTime': value.lastModifyDateTime,
        'name': value.name,
        'profileId': ProfileIdToJSON(value.profileId),
        'purgeDate': value.purgeDate === undefined ? undefined : (value.purgeDate.toISOString().substring(0,10)),
        'reservationId': ReservationIdToJSON(value.reservationId),
    };
}
