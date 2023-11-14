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
import type { RoomsHoldsType } from './RoomsHoldsType';
import {
    RoomsHoldsTypeFromJSON,
    RoomsHoldsTypeFromJSONTyped,
    RoomsHoldsTypeToJSON,
} from './RoomsHoldsType';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * Request to place rooms on hold.
 * @export
 * @interface HoldRooms
 */
export interface HoldRooms {
    /**
     * 
     * @type {RoomsHoldsType}
     * @memberof HoldRooms
     */
    holdRoomsDetails?: RoomsHoldsType;
    /**
     * 
     * @type {Links}
     * @memberof HoldRooms
     */
    links?: Links;
    /**
     * If trying to hold a room, which is held by a different user, then this flag will allow the current request to override that hold.
     * @type {boolean}
     * @memberof HoldRooms
     */
    overrideRoomHold?: boolean;
    /**
     * 
     * @type {WarningsType}
     * @memberof HoldRooms
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the HoldRooms interface.
 */
export function instanceOfHoldRooms(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HoldRoomsFromJSON(json: any): HoldRooms {
    return HoldRoomsFromJSONTyped(json, false);
}

export function HoldRoomsFromJSONTyped(json: any, ignoreDiscriminator: boolean): HoldRooms {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'holdRoomsDetails': !exists(json, 'holdRoomsDetails') ? undefined : RoomsHoldsTypeFromJSON(json['holdRoomsDetails']),
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'overrideRoomHold': !exists(json, 'overrideRoomHold') ? undefined : json['overrideRoomHold'],
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function HoldRoomsToJSON(value?: HoldRooms | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'holdRoomsDetails': RoomsHoldsTypeToJSON(value.holdRoomsDetails),
        'links': LinksToJSON(value.links),
        'overrideRoomHold': value.overrideRoomHold,
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
