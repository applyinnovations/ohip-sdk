/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
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
 * Collection of Reservations and their information.
 * @export
 * @interface ReservationsInfoReservationInfoList
 */
export interface ReservationsInfoReservationInfoList {
    /**
     * Contains details of the reservation.
     * @type {Array<ReservationInfoType>}
     * @memberof ReservationsInfoReservationInfoList
     */
    reservationInfo?: Array<ReservationInfoType>;
}

/**
 * Check if a given object implements the ReservationsInfoReservationInfoList interface.
 */
export function instanceOfReservationsInfoReservationInfoList(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReservationsInfoReservationInfoListFromJSON(json: any): ReservationsInfoReservationInfoList {
    return ReservationsInfoReservationInfoListFromJSONTyped(json, false);
}

export function ReservationsInfoReservationInfoListFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationsInfoReservationInfoList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'reservationInfo': !exists(json, 'reservationInfo') ? undefined : ((json['reservationInfo'] as Array<any>).map(ReservationInfoTypeFromJSON)),
    };
}

export function ReservationsInfoReservationInfoListToJSON(value?: ReservationsInfoReservationInfoList | null): any {
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

