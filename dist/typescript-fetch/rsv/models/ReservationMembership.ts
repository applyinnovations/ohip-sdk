/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { ReservationId } from './ReservationId';
import {
    ReservationIdFromJSON,
    ReservationIdFromJSONTyped,
    ReservationIdToJSON,
} from './ReservationId';
import type { ReservationMembershipType } from './ReservationMembershipType';
import {
    ReservationMembershipTypeFromJSON,
    ReservationMembershipTypeFromJSONTyped,
    ReservationMembershipTypeToJSON,
} from './ReservationMembershipType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Method to create a reservation membership on an existing reservation.
 * @export
 * @interface ReservationMembership
 */
export interface ReservationMembership {
    /**
     * Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
     * @type {string}
     * @memberof ReservationMembership
     */
    hotelId?: string;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof ReservationMembership
     */
    links?: Array<InstanceLink>;
    /**
     * 
     * @type {ReservationId}
     * @memberof ReservationMembership
     */
    reservationId?: ReservationId;
    /**
     * Membership information for the membership card which has to be attached to the reservation.
     * @type {Array<ReservationMembershipType>}
     * @memberof ReservationMembership
     */
    reservationMemberships?: Array<ReservationMembershipType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ReservationMembership
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the ReservationMembership interface.
 */
export function instanceOfReservationMembership(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReservationMembershipFromJSON(json: any): ReservationMembership {
    return ReservationMembershipFromJSONTyped(json, false);
}

export function ReservationMembershipFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationMembership {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'reservationId': !exists(json, 'reservationId') ? undefined : ReservationIdFromJSON(json['reservationId']),
        'reservationMemberships': !exists(json, 'reservationMemberships') ? undefined : ((json['reservationMemberships'] as Array<any>).map(ReservationMembershipTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function ReservationMembershipToJSON(value?: ReservationMembership | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hotelId': value.hotelId,
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'reservationId': ReservationIdToJSON(value.reservationId),
        'reservationMemberships': value.reservationMemberships === undefined ? undefined : ((value.reservationMemberships as Array<any>).map(ReservationMembershipTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

