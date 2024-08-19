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
import type { BookingChannelInfoType } from './BookingChannelInfoType';
import {
    BookingChannelInfoTypeFromJSON,
    BookingChannelInfoTypeFromJSONTyped,
    BookingChannelInfoTypeToJSON,
} from './BookingChannelInfoType';
import type { HotelChannelInfoType } from './HotelChannelInfoType';
import {
    HotelChannelInfoTypeFromJSON,
    HotelChannelInfoTypeFromJSONTyped,
    HotelChannelInfoTypeToJSON,
} from './HotelChannelInfoType';
import type { RegionalParityGroupType } from './RegionalParityGroupType';
import {
    RegionalParityGroupTypeFromJSON,
    RegionalParityGroupTypeFromJSONTyped,
    RegionalParityGroupTypeToJSON,
} from './RegionalParityGroupType';

/**
 * Information on Room Rate Parity among Channels/Property
 * @export
 * @interface RegionalRateParityType
 */
export interface RegionalRateParityType {
    /**
     * 
     * @type {Array<BookingChannelInfoType>}
     * @memberof RegionalRateParityType
     */
    bookingChannelsInfo?: Array<BookingChannelInfoType>;
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof RegionalRateParityType
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof RegionalRateParityType
     */
    hasMore?: boolean;
    /**
     * 
     * @type {Array<HotelChannelInfoType>}
     * @memberof RegionalRateParityType
     */
    hotelsInfo?: Array<HotelChannelInfoType>;
    /**
     * Channels and Property combination.
     * @type {Array<RegionalParityGroupType>}
     * @memberof RegionalRateParityType
     */
    regionalParityGroups?: Array<RegionalParityGroupType>;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof RegionalRateParityType
     */
    totalResults?: number;
}

/**
 * Check if a given object implements the RegionalRateParityType interface.
 */
export function instanceOfRegionalRateParityType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RegionalRateParityTypeFromJSON(json: any): RegionalRateParityType {
    return RegionalRateParityTypeFromJSONTyped(json, false);
}

export function RegionalRateParityTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegionalRateParityType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bookingChannelsInfo': !exists(json, 'bookingChannelsInfo') ? undefined : ((json['bookingChannelsInfo'] as Array<any>).map(BookingChannelInfoTypeFromJSON)),
        'count': !exists(json, 'count') ? undefined : json['count'],
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'hotelsInfo': !exists(json, 'hotelsInfo') ? undefined : ((json['hotelsInfo'] as Array<any>).map(HotelChannelInfoTypeFromJSON)),
        'regionalParityGroups': !exists(json, 'regionalParityGroups') ? undefined : ((json['regionalParityGroups'] as Array<any>).map(RegionalParityGroupTypeFromJSON)),
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
    };
}

export function RegionalRateParityTypeToJSON(value?: RegionalRateParityType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bookingChannelsInfo': value.bookingChannelsInfo === undefined ? undefined : ((value.bookingChannelsInfo as Array<any>).map(BookingChannelInfoTypeToJSON)),
        'count': value.count,
        'hasMore': value.hasMore,
        'hotelsInfo': value.hotelsInfo === undefined ? undefined : ((value.hotelsInfo as Array<any>).map(HotelChannelInfoTypeToJSON)),
        'regionalParityGroups': value.regionalParityGroups === undefined ? undefined : ((value.regionalParityGroups as Array<any>).map(RegionalParityGroupTypeToJSON)),
        'totalResults': value.totalResults,
    };
}

