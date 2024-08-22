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
import type { ReservationId } from './ReservationId';
import {
    ReservationIdFromJSON,
    ReservationIdFromJSONTyped,
    ReservationIdToJSON,
} from './ReservationId';
import type { ResvRoutingCriteriaTypeComp } from './ResvRoutingCriteriaTypeComp';
import {
    ResvRoutingCriteriaTypeCompFromJSON,
    ResvRoutingCriteriaTypeCompFromJSONTyped,
    ResvRoutingCriteriaTypeCompToJSON,
} from './ResvRoutingCriteriaTypeComp';
import type { ResvRoutingCriteriaTypeFolio } from './ResvRoutingCriteriaTypeFolio';
import {
    ResvRoutingCriteriaTypeFolioFromJSON,
    ResvRoutingCriteriaTypeFolioFromJSONTyped,
    ResvRoutingCriteriaTypeFolioToJSON,
} from './ResvRoutingCriteriaTypeFolio';
import type { ResvRoutingCriteriaTypeRequest } from './ResvRoutingCriteriaTypeRequest';
import {
    ResvRoutingCriteriaTypeRequestFromJSON,
    ResvRoutingCriteriaTypeRequestFromJSONTyped,
    ResvRoutingCriteriaTypeRequestToJSON,
} from './ResvRoutingCriteriaTypeRequest';
import type { ResvRoutingCriteriaTypeRoom } from './ResvRoutingCriteriaTypeRoom';
import {
    ResvRoutingCriteriaTypeRoomFromJSON,
    ResvRoutingCriteriaTypeRoomFromJSONTyped,
    ResvRoutingCriteriaTypeRoomToJSON,
} from './ResvRoutingCriteriaTypeRoom';

/**
 * A routing info object can either be of type Folio OR of type Room with its corresponding object.
 * @export
 * @interface ResvRoutingCriteriaType
 */
export interface ResvRoutingCriteriaType {
    /**
     * 
     * @type {ResvRoutingCriteriaTypeComp}
     * @memberof ResvRoutingCriteriaType
     */
    comp?: ResvRoutingCriteriaTypeComp;
    /**
     * 
     * @type {ResvRoutingCriteriaTypeFolio}
     * @memberof ResvRoutingCriteriaType
     */
    folio?: ResvRoutingCriteriaTypeFolio;
    /**
     * Hotel context of the reservation.
     * @type {string}
     * @memberof ResvRoutingCriteriaType
     */
    hotelId?: string;
    /**
     * On a successful update, the transactions that are already posted in the guest's folio will be re-organized based on the configured instructions.
     * @type {boolean}
     * @memberof ResvRoutingCriteriaType
     */
    refreshFolio?: boolean;
    /**
     * 
     * @type {ResvRoutingCriteriaTypeRequest}
     * @memberof ResvRoutingCriteriaType
     */
    request?: ResvRoutingCriteriaTypeRequest;
    /**
     * 
     * @type {ReservationId}
     * @memberof ResvRoutingCriteriaType
     */
    reservationId?: ReservationId;
    /**
     * This flag indicates if postings that can be refreshed need to be part of the response when a routing instruction is created, updated or deleted.
     * @type {boolean}
     * @memberof ResvRoutingCriteriaType
     */
    retrievePostingsForRoomRouting?: boolean;
    /**
     * 
     * @type {ResvRoutingCriteriaTypeRoom}
     * @memberof ResvRoutingCriteriaType
     */
    room?: ResvRoutingCriteriaTypeRoom;
}

/**
 * Check if a given object implements the ResvRoutingCriteriaType interface.
 */
export function instanceOfResvRoutingCriteriaType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ResvRoutingCriteriaTypeFromJSON(json: any): ResvRoutingCriteriaType {
    return ResvRoutingCriteriaTypeFromJSONTyped(json, false);
}

export function ResvRoutingCriteriaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResvRoutingCriteriaType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'comp': !exists(json, 'comp') ? undefined : ResvRoutingCriteriaTypeCompFromJSON(json['comp']),
        'folio': !exists(json, 'folio') ? undefined : ResvRoutingCriteriaTypeFolioFromJSON(json['folio']),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'refreshFolio': !exists(json, 'refreshFolio') ? undefined : json['refreshFolio'],
        'request': !exists(json, 'request') ? undefined : ResvRoutingCriteriaTypeRequestFromJSON(json['request']),
        'reservationId': !exists(json, 'reservationId') ? undefined : ReservationIdFromJSON(json['reservationId']),
        'retrievePostingsForRoomRouting': !exists(json, 'retrievePostingsForRoomRouting') ? undefined : json['retrievePostingsForRoomRouting'],
        'room': !exists(json, 'room') ? undefined : ResvRoutingCriteriaTypeRoomFromJSON(json['room']),
    };
}

export function ResvRoutingCriteriaTypeToJSON(value?: ResvRoutingCriteriaType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'comp': ResvRoutingCriteriaTypeCompToJSON(value.comp),
        'folio': ResvRoutingCriteriaTypeFolioToJSON(value.folio),
        'hotelId': value.hotelId,
        'refreshFolio': value.refreshFolio,
        'request': ResvRoutingCriteriaTypeRequestToJSON(value.request),
        'reservationId': ReservationIdToJSON(value.reservationId),
        'retrievePostingsForRoomRouting': value.retrievePostingsForRoomRouting,
        'room': ResvRoutingCriteriaTypeRoomToJSON(value.room),
    };
}

