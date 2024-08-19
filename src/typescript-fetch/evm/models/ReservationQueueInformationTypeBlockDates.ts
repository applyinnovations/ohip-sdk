/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Allows for a choice in description of the amount of time spanned by this type. EndDate specifies a specific date, while Duration provides a measure of time to add to the StartDate to yield eventEndDate date.
 * @export
 * @interface ReservationQueueInformationTypeBlockDates
 */
export interface ReservationQueueInformationTypeBlockDates {
    /**
     * 
     * @type {string}
     * @memberof ReservationQueueInformationTypeBlockDates
     */
    duration?: string;
    /**
     * The total duration, in seconds, the reservation is on Queue.
     * @type {number}
     * @memberof ReservationQueueInformationTypeBlockDates
     */
    durationInSeconds?: number;
    /**
     * 
     * @type {string}
     * @memberof ReservationQueueInformationTypeBlockDates
     */
    endDate?: string;
    /**
     * 
     * @type {string}
     * @memberof ReservationQueueInformationTypeBlockDates
     */
    startDate?: string;
}

/**
 * Check if a given object implements the ReservationQueueInformationTypeBlockDates interface.
 */
export function instanceOfReservationQueueInformationTypeBlockDates(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReservationQueueInformationTypeBlockDatesFromJSON(json: any): ReservationQueueInformationTypeBlockDates {
    return ReservationQueueInformationTypeBlockDatesFromJSONTyped(json, false);
}

export function ReservationQueueInformationTypeBlockDatesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationQueueInformationTypeBlockDates {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'duration': !exists(json, 'duration') ? undefined : json['duration'],
        'durationInSeconds': !exists(json, 'durationInSeconds') ? undefined : json['durationInSeconds'],
        'endDate': !exists(json, 'endDate') ? undefined : json['endDate'],
        'startDate': !exists(json, 'startDate') ? undefined : json['startDate'],
    };
}

export function ReservationQueueInformationTypeBlockDatesToJSON(value?: ReservationQueueInformationTypeBlockDates | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'duration': value.duration,
        'durationInSeconds': value.durationInSeconds,
        'endDate': value.endDate,
        'startDate': value.startDate,
    };
}

