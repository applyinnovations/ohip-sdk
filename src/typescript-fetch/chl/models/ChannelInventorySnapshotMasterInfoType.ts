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
import type { ChannelInventorySnapshotMasterInfoTypeBookingChannelInner } from './ChannelInventorySnapshotMasterInfoTypeBookingChannelInner';
import {
    ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerFromJSON,
    ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerFromJSONTyped,
    ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerToJSON,
} from './ChannelInventorySnapshotMasterInfoTypeBookingChannelInner';

/**
 * Details about the booking channels and room types contained in the channel inventory snapshot.
 * @export
 * @interface ChannelInventorySnapshotMasterInfoType
 */
export interface ChannelInventorySnapshotMasterInfoType {
    /**
     * Collection of booking channels returned in the channel inventory snapshot and the details about those channels.
     * @type {Array<ChannelInventorySnapshotMasterInfoTypeBookingChannelInner>}
     * @memberof ChannelInventorySnapshotMasterInfoType
     */
    bookingChannel?: Array<ChannelInventorySnapshotMasterInfoTypeBookingChannelInner>;
    /**
     * The internal hotel code that the given booking channel info is mapped under.
     * @type {string}
     * @memberof ChannelInventorySnapshotMasterInfoType
     */
    hotelId?: string;
}

/**
 * Check if a given object implements the ChannelInventorySnapshotMasterInfoType interface.
 */
export function instanceOfChannelInventorySnapshotMasterInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChannelInventorySnapshotMasterInfoTypeFromJSON(json: any): ChannelInventorySnapshotMasterInfoType {
    return ChannelInventorySnapshotMasterInfoTypeFromJSONTyped(json, false);
}

export function ChannelInventorySnapshotMasterInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelInventorySnapshotMasterInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bookingChannel': !exists(json, 'bookingChannel') ? undefined : ((json['bookingChannel'] as Array<any>).map(ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerFromJSON)),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
    };
}

export function ChannelInventorySnapshotMasterInfoTypeToJSON(value?: ChannelInventorySnapshotMasterInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bookingChannel': value.bookingChannel === undefined ? undefined : ((value.bookingChannel as Array<any>).map(ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerToJSON)),
        'hotelId': value.hotelId,
    };
}

