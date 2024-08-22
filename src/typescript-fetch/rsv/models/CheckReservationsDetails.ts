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
import type { CheckReservationType } from './CheckReservationType';
import {
    CheckReservationTypeFromJSON,
    CheckReservationTypeFromJSONTyped,
    CheckReservationTypeToJSON,
} from './CheckReservationType';
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
 * Response for checking allowed actions, existence of attached records, or indicators of a reservation.
 * @export
 * @interface CheckReservationsDetails
 */
export interface CheckReservationsDetails {
    /**
     * Collection of reservations and the status of its allowed actions, attached records, and indicators.
     * @type {Array<CheckReservationType>}
     * @memberof CheckReservationsDetails
     */
    checkReservations?: Array<CheckReservationType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof CheckReservationsDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof CheckReservationsDetails
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the CheckReservationsDetails interface.
 */
export function instanceOfCheckReservationsDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CheckReservationsDetailsFromJSON(json: any): CheckReservationsDetails {
    return CheckReservationsDetailsFromJSONTyped(json, false);
}

export function CheckReservationsDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CheckReservationsDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'checkReservations': !exists(json, 'checkReservations') ? undefined : ((json['checkReservations'] as Array<any>).map(CheckReservationTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function CheckReservationsDetailsToJSON(value?: CheckReservationsDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'checkReservations': value.checkReservations === undefined ? undefined : ((value.checkReservations as Array<any>).map(CheckReservationTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

