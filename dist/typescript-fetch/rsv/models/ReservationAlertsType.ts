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
import type { AlertType } from './AlertType';
import {
    AlertTypeFromJSON,
    AlertTypeFromJSONTyped,
    AlertTypeToJSON,
} from './AlertType';
import type { ReservationId } from './ReservationId';
import {
    ReservationIdFromJSON,
    ReservationIdFromJSONTyped,
    ReservationIdToJSON,
} from './ReservationId';

/**
 * Hold the multiple alerts for a single reservation which is identified by a unique identifier.
 * @export
 * @interface ReservationAlertsType
 */
export interface ReservationAlertsType {
    /**
     * List of alerts.
     * @type {Array<AlertType>}
     * @memberof ReservationAlertsType
     */
    alert?: Array<AlertType>;
    /**
     * Property code where the reservation belongs to.
     * @type {string}
     * @memberof ReservationAlertsType
     */
    hotelId?: string;
    /**
     * 
     * @type {ReservationId}
     * @memberof ReservationAlertsType
     */
    reservationId?: ReservationId;
}

/**
 * Check if a given object implements the ReservationAlertsType interface.
 */
export function instanceOfReservationAlertsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReservationAlertsTypeFromJSON(json: any): ReservationAlertsType {
    return ReservationAlertsTypeFromJSONTyped(json, false);
}

export function ReservationAlertsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationAlertsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'alert': !exists(json, 'alert') ? undefined : ((json['alert'] as Array<any>).map(AlertTypeFromJSON)),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'reservationId': !exists(json, 'reservationId') ? undefined : ReservationIdFromJSON(json['reservationId']),
    };
}

export function ReservationAlertsTypeToJSON(value?: ReservationAlertsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'alert': value.alert === undefined ? undefined : ((value.alert as Array<any>).map(AlertTypeToJSON)),
        'hotelId': value.hotelId,
        'reservationId': ReservationIdToJSON(value.reservationId),
    };
}

