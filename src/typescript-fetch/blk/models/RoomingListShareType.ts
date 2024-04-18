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
import type { EffectiveRateType } from './EffectiveRateType';
import {
    EffectiveRateTypeFromJSON,
    EffectiveRateTypeFromJSONTyped,
    EffectiveRateTypeToJSON,
} from './EffectiveRateType';
import type { RoomingListShareReservationType } from './RoomingListShareReservationType';
import {
    RoomingListShareReservationTypeFromJSON,
    RoomingListShareReservationTypeFromJSONTyped,
    RoomingListShareReservationTypeToJSON,
} from './RoomingListShareReservationType';
import type { TimeSpanType } from './TimeSpanType';
import {
    TimeSpanTypeFromJSON,
    TimeSpanTypeFromJSONTyped,
    TimeSpanTypeToJSON,
} from './TimeSpanType';

/**
 * Specifies a group of two or more rooming list reservations that need to be created as shared reservations.
 * @export
 * @interface RoomingListShareType
 */
export interface RoomingListShareType {
    /**
     * Collection of effective rate amount per guest on specific dates.
     * @type {Array<EffectiveRateType>}
     * @memberof RoomingListShareType
     */
    effectiveRates?: Array<EffectiveRateType>;
    /**
     * Contains information about the rooming list reservation that is to be shared and specifies the type of share that is to be created.
     * @type {Array<RoomingListShareReservationType>}
     * @memberof RoomingListShareType
     */
    reservation?: Array<RoomingListShareReservationType>;
    /**
     * 
     * @type {TimeSpanType}
     * @memberof RoomingListShareType
     */
    timeSpan?: TimeSpanType;
}

/**
 * Check if a given object implements the RoomingListShareType interface.
 */
export function instanceOfRoomingListShareType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoomingListShareTypeFromJSON(json: any): RoomingListShareType {
    return RoomingListShareTypeFromJSONTyped(json, false);
}

export function RoomingListShareTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomingListShareType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'effectiveRates': !exists(json, 'effectiveRates') ? undefined : ((json['effectiveRates'] as Array<any>).map(EffectiveRateTypeFromJSON)),
        'reservation': !exists(json, 'reservation') ? undefined : ((json['reservation'] as Array<any>).map(RoomingListShareReservationTypeFromJSON)),
        'timeSpan': !exists(json, 'timeSpan') ? undefined : TimeSpanTypeFromJSON(json['timeSpan']),
    };
}

export function RoomingListShareTypeToJSON(value?: RoomingListShareType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'effectiveRates': value.effectiveRates === undefined ? undefined : ((value.effectiveRates as Array<any>).map(EffectiveRateTypeToJSON)),
        'reservation': value.reservation === undefined ? undefined : ((value.reservation as Array<any>).map(RoomingListShareReservationTypeToJSON)),
        'timeSpan': TimeSpanTypeToJSON(value.timeSpan),
    };
}
