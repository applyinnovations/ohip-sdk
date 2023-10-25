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
import type { DepositCancelRevenueType } from './DepositCancelRevenueType';
import {
    DepositCancelRevenueTypeFromJSON,
    DepositCancelRevenueTypeFromJSONTyped,
    DepositCancelRevenueTypeToJSON,
} from './DepositCancelRevenueType';
import type { DepositPolicyType } from './DepositPolicyType';
import {
    DepositPolicyTypeFromJSON,
    DepositPolicyTypeFromJSONTyped,
    DepositPolicyTypeToJSON,
} from './DepositPolicyType';
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
 * A deposit policy attached with the reservation.
 * @export
 * @interface ReservationDepositPolicyCriteriaType
 */
export interface ReservationDepositPolicyCriteriaType {
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof ReservationDepositPolicyCriteriaType
     */
    amountDue?: CurrencyAmountType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof ReservationDepositPolicyCriteriaType
     */
    amountPaid?: CurrencyAmountType;
    /**
     * Comments attached with a deposit.
     * @type {string}
     * @memberof ReservationDepositPolicyCriteriaType
     */
    comments?: string;
    /**
     * Property where the reservation exists.
     * @type {string}
     * @memberof ReservationDepositPolicyCriteriaType
     */
    hotelId?: string;
    /**
     * 
     * @type {DepositPolicyType}
     * @memberof ReservationDepositPolicyCriteriaType
     */
    policy?: DepositPolicyType;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof ReservationDepositPolicyCriteriaType
     */
    policyId?: UniqueIDType;
    /**
     * 
     * @type {ReservationId}
     * @memberof ReservationDepositPolicyCriteriaType
     */
    reservationId?: ReservationId;
    /**
     * 
     * @type {DepositCancelRevenueType}
     * @memberof ReservationDepositPolicyCriteriaType
     */
    revenueType?: DepositCancelRevenueType;
}

/**
 * Check if a given object implements the ReservationDepositPolicyCriteriaType interface.
 */
export function instanceOfReservationDepositPolicyCriteriaType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReservationDepositPolicyCriteriaTypeFromJSON(json: any): ReservationDepositPolicyCriteriaType {
    return ReservationDepositPolicyCriteriaTypeFromJSONTyped(json, false);
}

export function ReservationDepositPolicyCriteriaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationDepositPolicyCriteriaType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amountDue': !exists(json, 'amountDue') ? undefined : CurrencyAmountTypeFromJSON(json['amountDue']),
        'amountPaid': !exists(json, 'amountPaid') ? undefined : CurrencyAmountTypeFromJSON(json['amountPaid']),
        'comments': !exists(json, 'comments') ? undefined : json['comments'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'policy': !exists(json, 'policy') ? undefined : DepositPolicyTypeFromJSON(json['policy']),
        'policyId': !exists(json, 'policyId') ? undefined : UniqueIDTypeFromJSON(json['policyId']),
        'reservationId': !exists(json, 'reservationId') ? undefined : ReservationIdFromJSON(json['reservationId']),
        'revenueType': !exists(json, 'revenueType') ? undefined : DepositCancelRevenueTypeFromJSON(json['revenueType']),
    };
}

export function ReservationDepositPolicyCriteriaTypeToJSON(value?: ReservationDepositPolicyCriteriaType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amountDue': CurrencyAmountTypeToJSON(value.amountDue),
        'amountPaid': CurrencyAmountTypeToJSON(value.amountPaid),
        'comments': value.comments,
        'hotelId': value.hotelId,
        'policy': DepositPolicyTypeToJSON(value.policy),
        'policyId': UniqueIDTypeToJSON(value.policyId),
        'reservationId': ReservationIdToJSON(value.reservationId),
        'revenueType': DepositCancelRevenueTypeToJSON(value.revenueType),
    };
}

