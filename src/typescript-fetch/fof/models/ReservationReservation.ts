/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Criteria element to check-in a reservation
 * @export
 * @interface ReservationReservation
 */
export interface ReservationReservation {
    /**
     * Request to update the checkout time.
     * @type {string}
     * @memberof ReservationReservation
     */
    checkOutTime?: string;
    /**
     * Represents the time the user compeletes the check in process.
     * @type {string}
     * @memberof ReservationReservation
     */
    endCheckInProcessTime?: string;
    /**
     * Dictates whether to ignore warnings ( e.g. room availability ) before check in.
     * @type {boolean}
     * @memberof ReservationReservation
     */
    ignoreWarnings?: boolean;
    /**
     * An id representing the record lock for this reservation. When passed, update operation will verify that this lock is still valid.
     * @type {number}
     * @memberof ReservationReservation
     */
    lockHandle?: number;
    /**
     * Flag to override advance payment validation.
     * @type {boolean}
     * @memberof ReservationReservation
     */
    overrideAdvancePaymentValidation?: boolean;
    /**
     * Flag for Print Registration Card
     * @type {boolean}
     * @memberof ReservationReservation
     */
    printRegistration?: boolean;
    /**
     * Dictates whether Profile privacy stop in check in is prompted.
     * @type {boolean}
     * @memberof ReservationReservation
     */
    profilePrivacyPrompted?: boolean;
    /**
     * Expected room no. If this attribute is included, then Opera will check if the currently configured room no in the database matches this value.
     * @type {string}
     * @memberof ReservationReservation
     */
    roomId?: string;
    /**
     * Represents the time the user starts the check in process.
     * @type {string}
     * @memberof ReservationReservation
     */
    startCheckInProcessTime?: string;
    /**
     * Indicates the Stop Check In reservation Global Alert flag.
     * @type {boolean}
     * @memberof ReservationReservation
     */
    stopCheckin?: boolean;
}

/**
 * Check if a given object implements the ReservationReservation interface.
 */
export function instanceOfReservationReservation(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReservationReservationFromJSON(json: any): ReservationReservation {
    return ReservationReservationFromJSONTyped(json, false);
}

export function ReservationReservationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationReservation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'checkOutTime': !exists(json, 'checkOutTime') ? undefined : json['checkOutTime'],
        'endCheckInProcessTime': !exists(json, 'endCheckInProcessTime') ? undefined : json['endCheckInProcessTime'],
        'ignoreWarnings': !exists(json, 'ignoreWarnings') ? undefined : json['ignoreWarnings'],
        'lockHandle': !exists(json, 'lockHandle') ? undefined : json['lockHandle'],
        'overrideAdvancePaymentValidation': !exists(json, 'overrideAdvancePaymentValidation') ? undefined : json['overrideAdvancePaymentValidation'],
        'printRegistration': !exists(json, 'printRegistration') ? undefined : json['printRegistration'],
        'profilePrivacyPrompted': !exists(json, 'profilePrivacyPrompted') ? undefined : json['profilePrivacyPrompted'],
        'roomId': !exists(json, 'roomId') ? undefined : json['roomId'],
        'startCheckInProcessTime': !exists(json, 'startCheckInProcessTime') ? undefined : json['startCheckInProcessTime'],
        'stopCheckin': !exists(json, 'stopCheckin') ? undefined : json['stopCheckin'],
    };
}

export function ReservationReservationToJSON(value?: ReservationReservation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'checkOutTime': value.checkOutTime,
        'endCheckInProcessTime': value.endCheckInProcessTime,
        'ignoreWarnings': value.ignoreWarnings,
        'lockHandle': value.lockHandle,
        'overrideAdvancePaymentValidation': value.overrideAdvancePaymentValidation,
        'printRegistration': value.printRegistration,
        'profilePrivacyPrompted': value.profilePrivacyPrompted,
        'roomId': value.roomId,
        'startCheckInProcessTime': value.startCheckInProcessTime,
        'stopCheckin': value.stopCheckin,
    };
}

