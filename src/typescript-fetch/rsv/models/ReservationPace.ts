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
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';
import type { ReservationPaceRSType } from './ReservationPaceRSType';
import {
    ReservationPaceRSTypeFromJSON,
    ReservationPaceRSTypeFromJSONTyped,
    ReservationPaceRSTypeToJSON,
} from './ReservationPaceRSType';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * FetchReservationPace response.
 * @export
 * @interface ReservationPace
 */
export interface ReservationPace {
    /**
     * 
     * @type {Links}
     * @memberof ReservationPace
     */
    links?: Links;
    /**
     * 
     * @type {ReservationPaceRSType}
     * @memberof ReservationPace
     */
    reservationPace?: ReservationPaceRSType;
    /**
     * 
     * @type {WarningsType}
     * @memberof ReservationPace
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the ReservationPace interface.
 */
export function instanceOfReservationPace(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReservationPaceFromJSON(json: any): ReservationPace {
    return ReservationPaceFromJSONTyped(json, false);
}

export function ReservationPaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationPace {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'reservationPace': !exists(json, 'reservationPace') ? undefined : ReservationPaceRSTypeFromJSON(json['reservationPace']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function ReservationPaceToJSON(value?: ReservationPace | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': LinksToJSON(value.links),
        'reservationPace': ReservationPaceRSTypeToJSON(value.reservationPace),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
