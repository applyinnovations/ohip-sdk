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
import type { PMSResStatusType } from './PMSResStatusType';
import {
    PMSResStatusTypeFromJSON,
    PMSResStatusTypeFromJSONTyped,
    PMSResStatusTypeToJSON,
} from './PMSResStatusType';
import type { TimeSpanType } from './TimeSpanType';
import {
    TimeSpanTypeFromJSON,
    TimeSpanTypeFromJSONTyped,
    TimeSpanTypeToJSON,
} from './TimeSpanType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * A recently used reservation record.
 * @export
 * @interface RecentlyAccessedReservationType
 */
export interface RecentlyAccessedReservationType {
    /**
     * The date the record was accessed.
     * @type {string}
     * @memberof RecentlyAccessedReservationType
     */
    accessDate?: string;
    /**
     * Given name, first name or names
     * @type {string}
     * @memberof RecentlyAccessedReservationType
     */
    guestFirstName?: string;
    /**
     * Family name, last name.
     * @type {string}
     * @memberof RecentlyAccessedReservationType
     */
    guestLastName?: string;
    /**
     * The resort of the reservation.
     * @type {string}
     * @memberof RecentlyAccessedReservationType
     */
    hotelId?: string;
    /**
     * A text field used to communicate the proper name of the hotel.
     * @type {string}
     * @memberof RecentlyAccessedReservationType
     */
    hotelName?: string;
    /**
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof RecentlyAccessedReservationType
     */
    reservationIdList?: Array<UniqueIDType>;
    /**
     * 
     * @type {PMSResStatusType}
     * @memberof RecentlyAccessedReservationType
     */
    reservationStatus?: PMSResStatusType;
    /**
     * 
     * @type {TimeSpanType}
     * @memberof RecentlyAccessedReservationType
     */
    timeSpan?: TimeSpanType;
}

/**
 * Check if a given object implements the RecentlyAccessedReservationType interface.
 */
export function instanceOfRecentlyAccessedReservationType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RecentlyAccessedReservationTypeFromJSON(json: any): RecentlyAccessedReservationType {
    return RecentlyAccessedReservationTypeFromJSONTyped(json, false);
}

export function RecentlyAccessedReservationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecentlyAccessedReservationType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accessDate': !exists(json, 'accessDate') ? undefined : json['accessDate'],
        'guestFirstName': !exists(json, 'guestFirstName') ? undefined : json['guestFirstName'],
        'guestLastName': !exists(json, 'guestLastName') ? undefined : json['guestLastName'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'hotelName': !exists(json, 'hotelName') ? undefined : json['hotelName'],
        'reservationIdList': !exists(json, 'reservationIdList') ? undefined : ((json['reservationIdList'] as Array<any>).map(UniqueIDTypeFromJSON)),
        'reservationStatus': !exists(json, 'reservationStatus') ? undefined : PMSResStatusTypeFromJSON(json['reservationStatus']),
        'timeSpan': !exists(json, 'timeSpan') ? undefined : TimeSpanTypeFromJSON(json['timeSpan']),
    };
}

export function RecentlyAccessedReservationTypeToJSON(value?: RecentlyAccessedReservationType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accessDate': value.accessDate,
        'guestFirstName': value.guestFirstName,
        'guestLastName': value.guestLastName,
        'hotelId': value.hotelId,
        'hotelName': value.hotelName,
        'reservationIdList': value.reservationIdList === undefined ? undefined : ((value.reservationIdList as Array<any>).map(UniqueIDTypeToJSON)),
        'reservationStatus': PMSResStatusTypeToJSON(value.reservationStatus),
        'timeSpan': TimeSpanTypeToJSON(value.timeSpan),
    };
}

