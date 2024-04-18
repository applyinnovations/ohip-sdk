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
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Block Information for create rooming list operation.
 * @export
 * @interface RoomingListBlockInfoType
 */
export interface RoomingListBlockInfoType {
    /**
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof RoomingListBlockInfoType
     */
    blockIdList?: Array<UniqueIDType>;
    /**
     * Hotel code for the block
     * @type {string}
     * @memberof RoomingListBlockInfoType
     */
    hotelId?: string;
}

/**
 * Check if a given object implements the RoomingListBlockInfoType interface.
 */
export function instanceOfRoomingListBlockInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoomingListBlockInfoTypeFromJSON(json: any): RoomingListBlockInfoType {
    return RoomingListBlockInfoTypeFromJSONTyped(json, false);
}

export function RoomingListBlockInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomingListBlockInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blockIdList': !exists(json, 'blockIdList') ? undefined : ((json['blockIdList'] as Array<any>).map(UniqueIDTypeFromJSON)),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
    };
}

export function RoomingListBlockInfoTypeToJSON(value?: RoomingListBlockInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blockIdList': value.blockIdList === undefined ? undefined : ((value.blockIdList as Array<any>).map(UniqueIDTypeToJSON)),
        'hotelId': value.hotelId,
    };
}
