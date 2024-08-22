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
import type { HotelReservationType } from './HotelReservationType';
import {
    HotelReservationTypeFromJSON,
    HotelReservationTypeFromJSONTyped,
    HotelReservationTypeToJSON,
} from './HotelReservationType';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * 
 * @export
 * @interface VerifiedCheckinReservation
 */
export interface VerifiedCheckinReservation {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof VerifiedCheckinReservation
     */
    links?: Array<InstanceLink>;
    /**
     * Reservation record showing the current state of the reservation.
     * @type {Array<HotelReservationType>}
     * @memberof VerifiedCheckinReservation
     */
    reservation?: Array<HotelReservationType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof VerifiedCheckinReservation
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the VerifiedCheckinReservation interface.
 */
export function instanceOfVerifiedCheckinReservation(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function VerifiedCheckinReservationFromJSON(json: any): VerifiedCheckinReservation {
    return VerifiedCheckinReservationFromJSONTyped(json, false);
}

export function VerifiedCheckinReservationFromJSONTyped(json: any, ignoreDiscriminator: boolean): VerifiedCheckinReservation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'reservation': !exists(json, 'reservation') ? undefined : ((json['reservation'] as Array<any>).map(HotelReservationTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function VerifiedCheckinReservationToJSON(value?: VerifiedCheckinReservation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'reservation': value.reservation === undefined ? undefined : ((value.reservation as Array<any>).map(HotelReservationTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

