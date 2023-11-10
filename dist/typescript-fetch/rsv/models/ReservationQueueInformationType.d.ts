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
import type { QueueTextInfoType } from './QueueTextInfoType';
import type { ReservationQueueInformationTypeTimeSpan } from './ReservationQueueInformationTypeTimeSpan';
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
export declare function instanceOfReservationQueueInformationType(value: object): boolean;
export declare function ReservationQueueInformationTypeFromJSON(json: any): ReservationQueueInformationType;
export declare function ReservationQueueInformationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationQueueInformationType;
export declare function ReservationQueueInformationTypeToJSON(value?: ReservationQueueInformationType | null): any;
