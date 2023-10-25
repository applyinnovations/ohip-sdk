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
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Key information about the block for a reservation.
 * @export
 * @interface ReservationBlockType
 */
export interface ReservationBlockType {
    /**
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof ReservationBlockType
     */
    blockIdList?: Array<UniqueIDType>;
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
        
        'blockIdList': !exists(json, 'blockIdList') ? undefined : ((json['blockIdList'] as Array<any>).map(UniqueIDTypeFromJSON)),
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
        
        'blockIdList': value.blockIdList === undefined ? undefined : ((value.blockIdList as Array<any>).map(UniqueIDTypeToJSON)),
        'blockName': value.blockName,
        'hotelId': value.hotelId,
    };
}

