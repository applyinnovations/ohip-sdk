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
import type { ReservationPackageType } from './ReservationPackageType';
import {
    ReservationPackageTypeFromJSON,
    ReservationPackageTypeFromJSONTyped,
    ReservationPackageTypeToJSON,
} from './ReservationPackageType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request method to attach a package to an existing reservation.
 * @export
 * @interface ReservationPackagesInfo
 */
export interface ReservationPackagesInfo {
    /**
     * Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
     * @type {string}
     * @memberof ReservationPackagesInfo
     */
    hotelId?: string;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof ReservationPackagesInfo
     */
    links?: Array<InstanceLink>;
    /**
     * 
     * @type {ReservationId}
     * @memberof ReservationPackagesInfo
     */
    reservationId?: ReservationId;
    /**
     * A Service object represents a package provided to guests. Service packages may have associated inventory and charges.
     * @type {Array<ReservationPackageType>}
     * @memberof ReservationPackagesInfo
     */
    reservationPackages?: Array<ReservationPackageType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ReservationPackagesInfo
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the ReservationPackagesInfo interface.
 */
export function instanceOfReservationPackagesInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReservationPackagesInfoFromJSON(json: any): ReservationPackagesInfo {
    return ReservationPackagesInfoFromJSONTyped(json, false);
}

export function ReservationPackagesInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationPackagesInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'reservationId': !exists(json, 'reservationId') ? undefined : ReservationIdFromJSON(json['reservationId']),
        'reservationPackages': !exists(json, 'reservationPackages') ? undefined : ((json['reservationPackages'] as Array<any>).map(ReservationPackageTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function ReservationPackagesInfoToJSON(value?: ReservationPackagesInfo | null): any {
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
        'reservationPackages': value.reservationPackages === undefined ? undefined : ((value.reservationPackages as Array<any>).map(ReservationPackageTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

