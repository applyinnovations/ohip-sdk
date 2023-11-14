/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
import type { StayRoominfo } from './StayRoominfo';
import {
    StayRoominfoFromJSON,
    StayRoominfoFromJSONTyped,
    StayRoominfoToJSON,
} from './StayRoominfo';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * To quickly shift rooms for two reservations that are for the same arrival date and room type
 * @export
 * @interface ShiftRooms
 */
export interface ShiftRooms {
    /**
     * 
     * @type {Links}
     * @memberof ShiftRooms
     */
    links?: Links;
    /**
     * 
     * @type {StayRoominfo}
     * @memberof ShiftRooms
     */
    sourceRoom?: StayRoominfo;
    /**
     * 
     * @type {StayRoominfo}
     * @memberof ShiftRooms
     */
    targetRoom?: StayRoominfo;
    /**
     * 
     * @type {WarningsType}
     * @memberof ShiftRooms
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the ShiftRooms interface.
 */
export function instanceOfShiftRooms(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ShiftRoomsFromJSON(json: any): ShiftRooms {
    return ShiftRoomsFromJSONTyped(json, false);
}

export function ShiftRoomsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShiftRooms {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'sourceRoom': !exists(json, 'sourceRoom') ? undefined : StayRoominfoFromJSON(json['sourceRoom']),
        'targetRoom': !exists(json, 'targetRoom') ? undefined : StayRoominfoFromJSON(json['targetRoom']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function ShiftRoomsToJSON(value?: ShiftRooms | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': LinksToJSON(value.links),
        'sourceRoom': StayRoominfoToJSON(value.sourceRoom),
        'targetRoom': StayRoominfoToJSON(value.targetRoom),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
