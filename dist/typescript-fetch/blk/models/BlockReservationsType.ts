/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { HotelReservationsType } from './HotelReservationsType';
import {
    HotelReservationsTypeFromJSON,
    HotelReservationsTypeFromJSONTyped,
    HotelReservationsTypeToJSON,
} from './HotelReservationsType';
import type { RoomingListShareType } from './RoomingListShareType';
import {
    RoomingListShareTypeFromJSON,
    RoomingListShareTypeFromJSONTyped,
    RoomingListShareTypeToJSON,
} from './RoomingListShareType';

/**
 * Collection of block reservations.
 * @export
 * @interface BlockReservationsType
 */
export interface BlockReservationsType {
    /**
     * 
     * @type {HotelReservationsType}
     * @memberof BlockReservationsType
     */
    reservations?: HotelReservationsType;
    /**
     * Contains a set of rooming list reservations that need to be shared.
     * @type {Array<RoomingListShareType>}
     * @memberof BlockReservationsType
     */
    shares?: Array<RoomingListShareType>;
}

/**
 * Check if a given object implements the BlockReservationsType interface.
 */
export function instanceOfBlockReservationsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlockReservationsTypeFromJSON(json: any): BlockReservationsType {
    return BlockReservationsTypeFromJSONTyped(json, false);
}

export function BlockReservationsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockReservationsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'reservations': !exists(json, 'reservations') ? undefined : HotelReservationsTypeFromJSON(json['reservations']),
        'shares': !exists(json, 'shares') ? undefined : ((json['shares'] as Array<any>).map(RoomingListShareTypeFromJSON)),
    };
}

export function BlockReservationsTypeToJSON(value?: BlockReservationsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'reservations': HotelReservationsTypeToJSON(value.reservations),
        'shares': value.shares === undefined ? undefined : ((value.shares as Array<any>).map(RoomingListShareTypeToJSON)),
    };
}

