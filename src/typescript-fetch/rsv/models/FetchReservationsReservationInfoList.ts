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
import type { ReservationInfoType } from './ReservationInfoType';
import {
    ReservationInfoTypeFromJSON,
    ReservationInfoTypeFromJSONTyped,
    ReservationInfoTypeToJSON,
} from './ReservationInfoType';

/**
 * List of reservations which can be shared.
 * @export
 * @interface FetchReservationsReservationInfoList
 */
export interface FetchReservationsReservationInfoList {
    /**
     * Information of the reservation which can be shared.
     * @type {Array<ReservationInfoType>}
     * @memberof FetchReservationsReservationInfoList
     */
    reservationInfo?: Array<ReservationInfoType>;
}

/**
 * Check if a given object implements the FetchReservationsReservationInfoList interface.
 */
export function instanceOfFetchReservationsReservationInfoList(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FetchReservationsReservationInfoListFromJSON(json: any): FetchReservationsReservationInfoList {
    return FetchReservationsReservationInfoListFromJSONTyped(json, false);
}

export function FetchReservationsReservationInfoListFromJSONTyped(json: any, ignoreDiscriminator: boolean): FetchReservationsReservationInfoList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'reservationInfo': !exists(json, 'reservationInfo') ? undefined : ((json['reservationInfo'] as Array<any>).map(ReservationInfoTypeFromJSON)),
    };
}

export function FetchReservationsReservationInfoListToJSON(value?: FetchReservationsReservationInfoList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'reservationInfo': value.reservationInfo === undefined ? undefined : ((value.reservationInfo as Array<any>).map(ReservationInfoTypeToJSON)),
    };
}
