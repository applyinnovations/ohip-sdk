/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { QueueTextInfoType } from './QueueTextInfoType';
import {
    QueueTextInfoTypeFromJSON,
    QueueTextInfoTypeFromJSONTyped,
    QueueTextInfoTypeToJSON,
} from './QueueTextInfoType';
import type { ReservationQueueInformationTypeTimeSpan } from './ReservationQueueInformationTypeTimeSpan';
import {
    ReservationQueueInformationTypeTimeSpanFromJSON,
    ReservationQueueInformationTypeTimeSpanFromJSONTyped,
    ReservationQueueInformationTypeTimeSpanToJSON,
} from './ReservationQueueInformationTypeTimeSpan';

/**
 * Information regarding the Date, Duration and Priority of the reservation on Queue for Check in.
 * @export
 * @interface ReservationQueueInformationType
 */
export interface ReservationQueueInformationType {
    /**
     * The average time, in seconds, of the reservations currently in queue.
     * @type {number}
     * @memberof ReservationQueueInformationType
     */
    averageQueueTimeCurrentReservations?: number;
    /**
     * The average time, in seconds, a reservation was on queue prior to Check-In.
     * @type {number}
     * @memberof ReservationQueueInformationType
     */
    averageQueueTimeToCheckIn?: number;
    /**
     * 
     * @type {QueueTextInfoType}
     * @memberof ReservationQueueInformationType
     */
    guestTextInfo?: QueueTextInfoType;
    /**
     * The Queue Priority given to this reservation.
     * @type {number}
     * @memberof ReservationQueueInformationType
     */
    priority?: number;
    /**
     * The Business date on which the reservation was due to arrive and is currently placed on Queue for Check In.
     * @type {Date}
     * @memberof ReservationQueueInformationType
     */
    queueDate?: Date;
    /**
     * 
     * @type {ReservationQueueInformationTypeTimeSpan}
     * @memberof ReservationQueueInformationType
     */
    timeSpan?: ReservationQueueInformationTypeTimeSpan;
}

/**
 * Check if a given object implements the ReservationQueueInformationType interface.
 */
export function instanceOfReservationQueueInformationType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReservationQueueInformationTypeFromJSON(json: any): ReservationQueueInformationType {
    return ReservationQueueInformationTypeFromJSONTyped(json, false);
}

export function ReservationQueueInformationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationQueueInformationType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'averageQueueTimeCurrentReservations': !exists(json, 'averageQueueTimeCurrentReservations') ? undefined : json['averageQueueTimeCurrentReservations'],
        'averageQueueTimeToCheckIn': !exists(json, 'averageQueueTimeToCheckIn') ? undefined : json['averageQueueTimeToCheckIn'],
        'guestTextInfo': !exists(json, 'guestTextInfo') ? undefined : QueueTextInfoTypeFromJSON(json['guestTextInfo']),
        'priority': !exists(json, 'priority') ? undefined : json['priority'],
        'queueDate': !exists(json, 'queueDate') ? undefined : (new Date(json['queueDate'])),
        'timeSpan': !exists(json, 'timeSpan') ? undefined : ReservationQueueInformationTypeTimeSpanFromJSON(json['timeSpan']),
    };
}

export function ReservationQueueInformationTypeToJSON(value?: ReservationQueueInformationType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'averageQueueTimeCurrentReservations': value.averageQueueTimeCurrentReservations,
        'averageQueueTimeToCheckIn': value.averageQueueTimeToCheckIn,
        'guestTextInfo': QueueTextInfoTypeToJSON(value.guestTextInfo),
        'priority': value.priority,
        'queueDate': value.queueDate === undefined ? undefined : (value.queueDate.toISOString().substr(0,10)),
        'timeSpan': ReservationQueueInformationTypeTimeSpanToJSON(value.timeSpan),
    };
}

