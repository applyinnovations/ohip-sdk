/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Rotation Service API
 * APIs to facilitate Room Rotation functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ReservationRotationPointsDetailsType } from './ReservationRotationPointsDetailsType';
import {
    ReservationRotationPointsDetailsTypeFromJSON,
    ReservationRotationPointsDetailsTypeFromJSONTyped,
    ReservationRotationPointsDetailsTypeToJSON,
} from './ReservationRotationPointsDetailsType';

/**
 * Reservation Rotation points details with total points.
 * @export
 * @interface ReservationRotationPointsDetailsListType
 */
export interface ReservationRotationPointsDetailsListType {
    /**
     * Collection of reservation rotation points details.
     * @type {Array<ReservationRotationPointsDetailsType>}
     * @memberof ReservationRotationPointsDetailsListType
     */
    reservationRotationPointsDetails?: Array<ReservationRotationPointsDetailsType>;
    /**
     * Total points including any applied adjustments.
     * @type {number}
     * @memberof ReservationRotationPointsDetailsListType
     */
    totalReservationPoints?: number;
}

/**
 * Check if a given object implements the ReservationRotationPointsDetailsListType interface.
 */
export function instanceOfReservationRotationPointsDetailsListType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReservationRotationPointsDetailsListTypeFromJSON(json: any): ReservationRotationPointsDetailsListType {
    return ReservationRotationPointsDetailsListTypeFromJSONTyped(json, false);
}

export function ReservationRotationPointsDetailsListTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationRotationPointsDetailsListType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'reservationRotationPointsDetails': !exists(json, 'reservationRotationPointsDetails') ? undefined : ((json['reservationRotationPointsDetails'] as Array<any>).map(ReservationRotationPointsDetailsTypeFromJSON)),
        'totalReservationPoints': !exists(json, 'totalReservationPoints') ? undefined : json['totalReservationPoints'],
    };
}

export function ReservationRotationPointsDetailsListTypeToJSON(value?: ReservationRotationPointsDetailsListType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'reservationRotationPointsDetails': value.reservationRotationPointsDetails === undefined ? undefined : ((value.reservationRotationPointsDetails as Array<any>).map(ReservationRotationPointsDetailsTypeToJSON)),
        'totalReservationPoints': value.totalReservationPoints,
    };
}

