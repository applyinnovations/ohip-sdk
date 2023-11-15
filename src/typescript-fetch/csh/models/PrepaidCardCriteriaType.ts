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
import type { PrepaidCardDetailsType } from './PrepaidCardDetailsType';
import {
    PrepaidCardDetailsTypeFromJSON,
    PrepaidCardDetailsTypeFromJSONTyped,
    PrepaidCardDetailsTypeToJSON,
} from './PrepaidCardDetailsType';
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
 * Holds fixed charge information.
 * @export
 * @interface PrepaidCardCriteriaType
 */
export interface PrepaidCardCriteriaType {
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof PrepaidCardCriteriaType
     */
    amount?: CurrencyAmountType;
    /**
     * 
     * @type {PrepaidCardDetailsType}
     * @memberof PrepaidCardCriteriaType
     */
    cardDetails?: PrepaidCardDetailsType;
    /**
     * Prepaid card / account number.
     * @type {string}
     * @memberof PrepaidCardCriteriaType
     */
    cardNo?: string;
    /**
     * Masked Prepaid card / account number.
     * @type {string}
     * @memberof PrepaidCardCriteriaType
     */
    cardNumberMasked?: string;
    /**
     * The Cashier ID of the Cashier who is currently processing the transaction(s).
     * @type {number}
     * @memberof PrepaidCardCriteriaType
     */
    cashierId?: number;
    /**
     * Time stamp of the creation.
     * @type {string}
     * @memberof PrepaidCardCriteriaType
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @type {string}
     * @memberof PrepaidCardCriteriaType
     */
    creatorId?: string;
    /**
     * Given name, first name or names.
     * @type {string}
     * @memberof PrepaidCardCriteriaType
     */
    firstName?: string;
    /**
     * Indicates a gift card type.
     * @type {boolean}
     * @memberof PrepaidCardCriteriaType
     */
    giftCard?: boolean;
    /**
     * Hotel context for the Reservations.
     * @type {string}
     * @memberof PrepaidCardCriteriaType
     */
    hotelId?: string;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof PrepaidCardCriteriaType
     */
    interfaceId?: UniqueIDType;
    /**
     * Identifies the last software system or person to modify a record.
     * @type {string}
     * @memberof PrepaidCardCriteriaType
     */
    lastModifierId?: string;
    /**
     * Time stamp of last modification.
     * @type {string}
     * @memberof PrepaidCardCriteriaType
     */
    lastModifyDateTime?: string;
    /**
     * Family name, last name or Company Name.
     * @type {string}
     * @memberof PrepaidCardCriteriaType
     */
    name?: string;
    /**
     * Prepaid card pin code.
     * @type {string}
     * @memberof PrepaidCardCriteriaType
     */
    pinCode?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PrepaidCardCriteriaType
     */
    postChargeToRoom?: boolean;
    /**
     * 
     * @type {ProfileId}
     * @memberof PrepaidCardCriteriaType
     */
    profileId?: ProfileId;
    /**
     * Date an item will be purged from a database (e.g., from a live database to an archive).
     * @type {string}
     * @memberof PrepaidCardCriteriaType
     */
    purgeDate?: string;
    /**
     * 
     * @type {ReservationId}
     * @memberof PrepaidCardCriteriaType
     */
    reservationId?: ReservationId;
    /**
     * 
     * @type {SaleCriteriaType}
     * @memberof PrepaidCardCriteriaType
     */
    saleCriteria?: SaleCriteriaType;
    /**
     * 
     * @type {number}
     * @memberof PrepaidCardCriteriaType
     */
    vendorInterfaceID?: number;
}

/**
 * Check if a given object implements the PrepaidCardCriteriaType interface.
 */
export function instanceOfPrepaidCardCriteriaType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PrepaidCardCriteriaTypeFromJSON(json: any): PrepaidCardCriteriaType {
    return PrepaidCardCriteriaTypeFromJSONTyped(json, false);
}

export function PrepaidCardCriteriaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrepaidCardCriteriaType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': !exists(json, 'amount') ? undefined : CurrencyAmountTypeFromJSON(json['amount']),
        'cardDetails': !exists(json, 'cardDetails') ? undefined : PrepaidCardDetailsTypeFromJSON(json['cardDetails']),
        'cardNo': !exists(json, 'cardNo') ? undefined : json['cardNo'],
        'cardNumberMasked': !exists(json, 'cardNumberMasked') ? undefined : json['cardNumberMasked'],
        'cashierId': !exists(json, 'cashierId') ? undefined : json['cashierId'],
        'createDateTime': !exists(json, 'createDateTime') ? undefined : json['createDateTime'],
        'creatorId': !exists(json, 'creatorId') ? undefined : json['creatorId'],
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'giftCard': !exists(json, 'giftCard') ? undefined : json['giftCard'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'interfaceId': !exists(json, 'interfaceId') ? undefined : UniqueIDTypeFromJSON(json['interfaceId']),
        'lastModifierId': !exists(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'lastModifyDateTime': !exists(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'pinCode': !exists(json, 'pinCode') ? undefined : json['pinCode'],
        'postChargeToRoom': !exists(json, 'postChargeToRoom') ? undefined : json['postChargeToRoom'],
        'profileId': !exists(json, 'profileId') ? undefined : ProfileIdFromJSON(json['profileId']),
        'purgeDate': !exists(json, 'purgeDate') ? undefined : json['purgeDate'],
        'reservationId': !exists(json, 'reservationId') ? undefined : ReservationIdFromJSON(json['reservationId']),
        'saleCriteria': !exists(json, 'saleCriteria') ? undefined : SaleCriteriaTypeFromJSON(json['saleCriteria']),
        'vendorInterfaceID': !exists(json, 'vendorInterfaceID') ? undefined : json['vendorInterfaceID'],
    };
}

export function PrepaidCardCriteriaTypeToJSON(value?: PrepaidCardCriteriaType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': CurrencyAmountTypeToJSON(value.amount),
        'cardDetails': PrepaidCardDetailsTypeToJSON(value.cardDetails),
        'cardNo': value.cardNo,
        'cardNumberMasked': value.cardNumberMasked,
        'cashierId': value.cashierId,
        'createDateTime': value.createDateTime,
        'creatorId': value.creatorId,
        'firstName': value.firstName,
        'giftCard': value.giftCard,
        'hotelId': value.hotelId,
        'interfaceId': UniqueIDTypeToJSON(value.interfaceId),
        'lastModifierId': value.lastModifierId,
        'lastModifyDateTime': value.lastModifyDateTime,
        'name': value.name,
        'pinCode': value.pinCode,
        'postChargeToRoom': value.postChargeToRoom,
        'profileId': ProfileIdToJSON(value.profileId),
        'purgeDate': value.purgeDate,
        'reservationId': ReservationIdToJSON(value.reservationId),
        'saleCriteria': SaleCriteriaTypeToJSON(value.saleCriteria),
        'vendorInterfaceID': value.vendorInterfaceID,
    };
}

