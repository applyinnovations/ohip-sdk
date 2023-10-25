/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { RestrictionInfoType } from './RestrictionInfoType';
import {
    RestrictionInfoTypeFromJSON,
    RestrictionInfoTypeFromJSONTyped,
    RestrictionInfoTypeToJSON,
} from './RestrictionInfoType';

/**
 * Inventory statistic and restriction information for a given date.
 * @export
 * @interface ChannelSnapshotType
 */
export interface ChannelSnapshotType {
    /**
     * Number of available rooms.
     * @type {number}
     * @memberof ChannelSnapshotType
     */
    availableRooms?: number;
    /**
     * Date of the statistics and restrictions.
     * @type {Date}
     * @memberof ChannelSnapshotType
     */
    date?: Date;
    /**
     * Number of rooms in inventory.
     * @type {number}
     * @memberof ChannelSnapshotType
     */
    inventoryRooms?: number;
    /**
     * Provides the basic Restriction type details, specifically used in snapshot operations for efficiency.
     * @type {Array<RestrictionInfoType>}
     * @memberof ChannelSnapshotType
     */
    restrictionsInfo?: Array<RestrictionInfoType>;
    /**
     * Number of rooms sold.
     * @type {number}
     * @memberof ChannelSnapshotType
     */
    roomsSold?: number;
    /**
     * Number of overbooking rooms allowed.
     * @type {number}
     * @memberof ChannelSnapshotType
     */
    sellLimit?: number;
    /**
     * Number of tentative rooms sold - does not include definite reservations.
     * @type {number}
     * @memberof ChannelSnapshotType
     */
    tentativeRoomsSold?: number;
}

/**
 * Check if a given object implements the ChannelSnapshotType interface.
 */
export function instanceOfChannelSnapshotType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChannelSnapshotTypeFromJSON(json: any): ChannelSnapshotType {
    return ChannelSnapshotTypeFromJSONTyped(json, false);
}

export function ChannelSnapshotTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelSnapshotType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'availableRooms': !exists(json, 'availableRooms') ? undefined : json['availableRooms'],
        'date': !exists(json, 'date') ? undefined : (new Date(json['date'])),
        'inventoryRooms': !exists(json, 'inventoryRooms') ? undefined : json['inventoryRooms'],
        'restrictionsInfo': !exists(json, 'restrictionsInfo') ? undefined : ((json['restrictionsInfo'] as Array<any>).map(RestrictionInfoTypeFromJSON)),
        'roomsSold': !exists(json, 'roomsSold') ? undefined : json['roomsSold'],
        'sellLimit': !exists(json, 'sellLimit') ? undefined : json['sellLimit'],
        'tentativeRoomsSold': !exists(json, 'tentativeRoomsSold') ? undefined : json['tentativeRoomsSold'],
    };
}

export function ChannelSnapshotTypeToJSON(value?: ChannelSnapshotType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'availableRooms': value.availableRooms,
        'date': value.date === undefined ? undefined : (value.date.toISOString().substr(0,10)),
        'inventoryRooms': value.inventoryRooms,
        'restrictionsInfo': value.restrictionsInfo === undefined ? undefined : ((value.restrictionsInfo as Array<any>).map(RestrictionInfoTypeToJSON)),
        'roomsSold': value.roomsSold,
        'sellLimit': value.sellLimit,
        'tentativeRoomsSold': value.tentativeRoomsSold,
    };
}

