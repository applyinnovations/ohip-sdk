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
import type { MassCheckInCriteriaTypeAdditionalCriteria } from './MassCheckInCriteriaTypeAdditionalCriteria';
import {
    MassCheckInCriteriaTypeAdditionalCriteriaFromJSON,
    MassCheckInCriteriaTypeAdditionalCriteriaFromJSONTyped,
    MassCheckInCriteriaTypeAdditionalCriteriaToJSON,
} from './MassCheckInCriteriaTypeAdditionalCriteria';
import type { ReservationIdList } from './ReservationIdList';
import {
    ReservationIdListFromJSON,
    ReservationIdListFromJSONTyped,
    ReservationIdListToJSON,
} from './ReservationIdList';

/**
 * This will have details of reservations and advance criteria for performing Mass Checkin of Reservations
 * @export
 * @interface MassCheckInCriteriaType
 */
export interface MassCheckInCriteriaType {
    /**
     * 
     * @type {MassCheckInCriteriaTypeAdditionalCriteria}
     * @memberof MassCheckInCriteriaType
     */
    additionalCriteria?: MassCheckInCriteriaTypeAdditionalCriteria;
    /**
     * Resort to which the Reservation belongs.
     * @type {string}
     * @memberof MassCheckInCriteriaType
     */
    hotelId?: string;
    /**
     * 
     * @type {ReservationIdList}
     * @memberof MassCheckInCriteriaType
     */
    reservationIdList?: ReservationIdList;
}

/**
 * Check if a given object implements the MassCheckInCriteriaType interface.
 */
export function instanceOfMassCheckInCriteriaType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MassCheckInCriteriaTypeFromJSON(json: any): MassCheckInCriteriaType {
    return MassCheckInCriteriaTypeFromJSONTyped(json, false);
}

export function MassCheckInCriteriaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MassCheckInCriteriaType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'additionalCriteria': !exists(json, 'additionalCriteria') ? undefined : MassCheckInCriteriaTypeAdditionalCriteriaFromJSON(json['additionalCriteria']),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'reservationIdList': !exists(json, 'reservationIdList') ? undefined : ReservationIdListFromJSON(json['reservationIdList']),
    };
}

export function MassCheckInCriteriaTypeToJSON(value?: MassCheckInCriteriaType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'additionalCriteria': MassCheckInCriteriaTypeAdditionalCriteriaToJSON(value.additionalCriteria),
        'hotelId': value.hotelId,
        'reservationIdList': ReservationIdListToJSON(value.reservationIdList),
    };
}
