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
/**
 * 
 * @export
 * @interface ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInner
 */
export interface ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInner {
    /**
     * The channel room type's identifying code.
     * @type {string}
     * @memberof ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInner
     */
    channelRoomTypeCode?: string;
    /**
     * If the ENHANCED_ROOM_RATE_DESCRIPTION function is off, this element will contain the simple channel room type description.
     * @type {string}
     * @memberof ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInner
     */
    description?: string;
    /**
     * If the ENHANCED_ROOM_RATE_DESCRIPTION function is on, this element will contain the first line of the enhanced channel room type description.
     * @type {string}
     * @memberof ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInner
     */
    roomDescriptionLine1?: string;
    /**
     * If the ENHANCED_ROOM_RATE_DESCRIPTION function is on, this element will contain the second line of the enhanced channel room type description.
     * @type {string}
     * @memberof ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInner
     */
    roomDescriptionLine2?: string;
    /**
     * If the ENHANCED_ROOM_RATE_DESCRIPTION function is on, this element will contain the third line of the enhanced channel room type description.
     * @type {string}
     * @memberof ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInner
     */
    roomDescriptionLine3?: string;
    /**
     * The internal room type label which is mapped to the channel room type.
     * @type {string}
     * @memberof ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInner
     */
    roomTypeCode?: string;
    /**
     * The order in which the channel room type is to be displayed.
     * @type {number}
     * @memberof ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInner
     */
    sellSequence?: number;
}

/**
 * Check if a given object implements the ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInner interface.
 */
export function instanceOfChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInnerFromJSON(json: any): ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInner {
    return ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInnerFromJSONTyped(json, false);
}

export function ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'channelRoomTypeCode': !exists(json, 'channelRoomTypeCode') ? undefined : json['channelRoomTypeCode'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'roomDescriptionLine1': !exists(json, 'roomDescriptionLine1') ? undefined : json['roomDescriptionLine1'],
        'roomDescriptionLine2': !exists(json, 'roomDescriptionLine2') ? undefined : json['roomDescriptionLine2'],
        'roomDescriptionLine3': !exists(json, 'roomDescriptionLine3') ? undefined : json['roomDescriptionLine3'],
        'roomTypeCode': !exists(json, 'roomTypeCode') ? undefined : json['roomTypeCode'],
        'sellSequence': !exists(json, 'sellSequence') ? undefined : json['sellSequence'],
    };
}

export function ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInnerToJSON(value?: ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'channelRoomTypeCode': value.channelRoomTypeCode,
        'description': value.description,
        'roomDescriptionLine1': value.roomDescriptionLine1,
        'roomDescriptionLine2': value.roomDescriptionLine2,
        'roomDescriptionLine3': value.roomDescriptionLine3,
        'roomTypeCode': value.roomTypeCode,
        'sellSequence': value.sellSequence,
    };
}

