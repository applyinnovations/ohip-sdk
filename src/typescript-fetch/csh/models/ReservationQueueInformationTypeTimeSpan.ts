/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Allows for a choice in description of the amount of time spanned by this type. EndDate specifies a specific date, while Duration provides a measure of time to add to the StartDate to yield end date.
 * @export
 * @interface ReservationQueueInformationTypeTimeSpan
 */
export interface ReservationQueueInformationTypeTimeSpan {
    /**
     * 
     * @type {string}
     * @memberof ReservationQueueInformationTypeTimeSpan
     */
    duration?: string;
    /**
     * The total duration, in seconds, the reservation is on Queue.
     * @type {number}
     * @memberof ReservationQueueInformationTypeTimeSpan
     */
    durationInSeconds?: number;
    /**
     * 
     * @type {string}
     * @memberof ReservationQueueInformationTypeTimeSpan
     */
    endDate?: string;
    /**
     * 
     * @type {string}
     * @memberof ReservationQueueInformationTypeTimeSpan
     */
    startDate?: string;
}

/**
 * Check if a given object implements the ReservationQueueInformationTypeTimeSpan interface.
 */
export function instanceOfReservationQueueInformationTypeTimeSpan(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReservationQueueInformationTypeTimeSpanFromJSON(json: any): ReservationQueueInformationTypeTimeSpan {
    return ReservationQueueInformationTypeTimeSpanFromJSONTyped(json, false);
}

export function ReservationQueueInformationTypeTimeSpanFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationQueueInformationTypeTimeSpan {
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

export function ReservationQueueInformationTypeTimeSpanToJSON(value?: ReservationQueueInformationTypeTimeSpan | null): any {
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

