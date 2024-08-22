/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
import type { RoutingInfoType } from './RoutingInfoType';
import {
    RoutingInfoTypeFromJSON,
    RoutingInfoTypeFromJSONTyped,
    RoutingInfoTypeToJSON,
} from './RoutingInfoType';

/**
 * This is used when changing block reservations in bulk.
 * @export
 * @interface ReservationSnapshotType
 */
export interface ReservationSnapshotType {
    /**
     * 
     * @type {HotelReservationType}
     * @memberof ReservationSnapshotType
     */
    hotelReservation?: HotelReservationType;
    /**
     * A routing info object can either be of type Folio OR of type Room with its corresponding instructions.
     * @type {Array<RoutingInfoType>}
     * @memberof ReservationSnapshotType
     */
    routingInstructions?: Array<RoutingInfoType>;
}

/**
 * Check if a given object implements the ReservationSnapshotType interface.
 */
export function instanceOfReservationSnapshotType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReservationSnapshotTypeFromJSON(json: any): ReservationSnapshotType {
    return ReservationSnapshotTypeFromJSONTyped(json, false);
}

export function ReservationSnapshotTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationSnapshotType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hotelReservation': !exists(json, 'hotelReservation') ? undefined : HotelReservationTypeFromJSON(json['hotelReservation']),
        'routingInstructions': !exists(json, 'routingInstructions') ? undefined : ((json['routingInstructions'] as Array<any>).map(RoutingInfoTypeFromJSON)),
    };
}

export function ReservationSnapshotTypeToJSON(value?: ReservationSnapshotType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hotelReservation': HotelReservationTypeToJSON(value.hotelReservation),
        'routingInstructions': value.routingInstructions === undefined ? undefined : ((value.routingInstructions as Array<any>).map(RoutingInfoTypeToJSON)),
    };
}

