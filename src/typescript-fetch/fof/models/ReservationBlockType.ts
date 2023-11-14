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
import type { BlockIdList } from './BlockIdList';
import {
    BlockIdListFromJSON,
    BlockIdListFromJSONTyped,
    BlockIdListToJSON,
} from './BlockIdList';

/**
 * Key information about the block for a reservation.
 * @export
 * @interface ReservationBlockType
 */
export interface ReservationBlockType {
    /**
     * 
     * @type {BlockIdList}
     * @memberof ReservationBlockType
     */
    blockIdList?: BlockIdList;
    /**
     * The Name of the block that is attached to the reservation.
     * @type {string}
     * @memberof ReservationBlockType
     */
    blockName?: string;
    /**
     * This is the HotelCode of the Block.
     * @type {string}
     * @memberof ReservationBlockType
     */
    hotelId?: string;
}

/**
 * Check if a given object implements the ReservationBlockType interface.
 */
export function instanceOfReservationBlockType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReservationBlockTypeFromJSON(json: any): ReservationBlockType {
    return ReservationBlockTypeFromJSONTyped(json, false);
}

export function ReservationBlockTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationBlockType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blockIdList': !exists(json, 'blockIdList') ? undefined : BlockIdListFromJSON(json['blockIdList']),
        'blockName': !exists(json, 'blockName') ? undefined : json['blockName'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
    };
}

export function ReservationBlockTypeToJSON(value?: ReservationBlockType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blockIdList': BlockIdListToJSON(value.blockIdList),
        'blockName': value.blockName,
        'hotelId': value.hotelId,
    };
}
