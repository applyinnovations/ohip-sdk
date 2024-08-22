/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
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
     * @type {string}
     * @memberof ReservationQueueInformationType
     */
    queueDate?: string;
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
