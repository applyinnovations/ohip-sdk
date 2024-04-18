/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInner } from './ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInner';
import {
    ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInnerFromJSON,
    ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInnerFromJSONTyped,
    ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInnerToJSON,
} from './ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInner';

/**
 * 
 * @export
 * @interface ChannelInventorySnapshotMasterInfoTypeBookingChannelInner
 */
export interface ChannelInventorySnapshotMasterInfoTypeBookingChannelInner {
    /**
     * The type of channel. I.E. GDS, ADS, ODS, WEB.
     * @type {string}
     * @memberof ChannelInventorySnapshotMasterInfoTypeBookingChannelInner
     */
    bookingChannelType?: string;
    /**
     * Flag to indicate if the channel and hotel combination have the Channel Inventory parameter active. This parameter allows sell limits to be set for the channel or channel room type.
     * @type {boolean}
     * @memberof ChannelInventorySnapshotMasterInfoTypeBookingChannelInner
     */
    channelInventoryActive?: boolean;
    /**
     * Details about a specific channel room type.
     * @type {Array<ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInner>}
     * @memberof ChannelInventorySnapshotMasterInfoTypeBookingChannelInner
     */
    channelRoomTypes?: Array<ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInner>;
    /**
     * The booking channel's identifying code.
     * @type {string}
     * @memberof ChannelInventorySnapshotMasterInfoTypeBookingChannelInner
     */
    code?: string;
    /**
     * The name or description of the booking channel.
     * @type {string}
     * @memberof ChannelInventorySnapshotMasterInfoTypeBookingChannelInner
     */
    description?: string;
}

/**
 * Check if a given object implements the ChannelInventorySnapshotMasterInfoTypeBookingChannelInner interface.
 */
export function instanceOfChannelInventorySnapshotMasterInfoTypeBookingChannelInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerFromJSON(json: any): ChannelInventorySnapshotMasterInfoTypeBookingChannelInner {
    return ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerFromJSONTyped(json, false);
}

export function ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelInventorySnapshotMasterInfoTypeBookingChannelInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bookingChannelType': !exists(json, 'bookingChannelType') ? undefined : json['bookingChannelType'],
        'channelInventoryActive': !exists(json, 'channelInventoryActive') ? undefined : json['channelInventoryActive'],
        'channelRoomTypes': !exists(json, 'channelRoomTypes') ? undefined : ((json['channelRoomTypes'] as Array<any>).map(ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInnerFromJSON)),
        'code': !exists(json, 'code') ? undefined : json['code'],
        'description': !exists(json, 'description') ? undefined : json['description'],
    };
}

export function ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerToJSON(value?: ChannelInventorySnapshotMasterInfoTypeBookingChannelInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bookingChannelType': value.bookingChannelType,
        'channelInventoryActive': value.channelInventoryActive,
        'channelRoomTypes': value.channelRoomTypes === undefined ? undefined : ((value.channelRoomTypes as Array<any>).map(ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInnerToJSON)),
        'code': value.code,
        'description': value.description,
    };
}
