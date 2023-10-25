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
import type { ShareDistributionInstructionType } from './ShareDistributionInstructionType';
import {
    ShareDistributionInstructionTypeFromJSON,
    ShareDistributionInstructionTypeFromJSONTyped,
    ShareDistributionInstructionTypeToJSON,
} from './ShareDistributionInstructionType';
import type { TimeSpanType } from './TimeSpanType';
import {
    TimeSpanTypeFromJSON,
    TimeSpanTypeFromJSONTyped,
    TimeSpanTypeToJSON,
} from './TimeSpanType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Contains the rooming list reservation that is to be shared and the information about the share type of this reservation.
 * @export
 * @interface RoomingListShareReservationType
 */
export interface RoomingListShareReservationType {
    /**
     * Indicates if this reservation is a primary sharer.
     * @type {boolean}
     * @memberof RoomingListShareReservationType
     */
    primaryShare?: boolean;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof RoomingListShareReservationType
     */
    reservationId?: UniqueIDType;
    /**
     * 
     * @type {TimeSpanType}
     * @memberof RoomingListShareReservationType
     */
    timeSpan?: TimeSpanType;
    /**
     * 
     * @type {ShareDistributionInstructionType}
     * @memberof RoomingListShareReservationType
     */
    typeOfRateAmount?: ShareDistributionInstructionType;
}

/**
 * Check if a given object implements the RoomingListShareReservationType interface.
 */
export function instanceOfRoomingListShareReservationType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoomingListShareReservationTypeFromJSON(json: any): RoomingListShareReservationType {
    return RoomingListShareReservationTypeFromJSONTyped(json, false);
}

export function RoomingListShareReservationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomingListShareReservationType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'primaryShare': !exists(json, 'primaryShare') ? undefined : json['primaryShare'],
        'reservationId': !exists(json, 'reservationId') ? undefined : UniqueIDTypeFromJSON(json['reservationId']),
        'timeSpan': !exists(json, 'timeSpan') ? undefined : TimeSpanTypeFromJSON(json['timeSpan']),
        'typeOfRateAmount': !exists(json, 'typeOfRateAmount') ? undefined : ShareDistributionInstructionTypeFromJSON(json['typeOfRateAmount']),
    };
}

export function RoomingListShareReservationTypeToJSON(value?: RoomingListShareReservationType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'primaryShare': value.primaryShare,
        'reservationId': UniqueIDTypeToJSON(value.reservationId),
        'timeSpan': TimeSpanTypeToJSON(value.timeSpan),
        'typeOfRateAmount': ShareDistributionInstructionTypeToJSON(value.typeOfRateAmount),
    };
}

