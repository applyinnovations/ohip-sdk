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
import type { BookingChannelsInfoType } from './BookingChannelsInfoType';
import {
    BookingChannelsInfoTypeFromJSON,
    BookingChannelsInfoTypeFromJSONTyped,
    BookingChannelsInfoTypeToJSON,
} from './BookingChannelsInfoType';
import type { ChannelRoomMappingsSourceDescriptionsType } from './ChannelRoomMappingsSourceDescriptionsType';
import {
    ChannelRoomMappingsSourceDescriptionsTypeFromJSON,
    ChannelRoomMappingsSourceDescriptionsTypeFromJSONTyped,
    ChannelRoomMappingsSourceDescriptionsTypeToJSON,
} from './ChannelRoomMappingsSourceDescriptionsType';

/**
 * Additional details about the booking channels and source descriptions for a hotel room type referenced within the fetched results.
 * @export
 * @interface ChannelRoomMappingMasterInfoType
 */
export interface ChannelRoomMappingMasterInfoType {
    /**
     * 
     * @type {BookingChannelsInfoType}
     * @memberof ChannelRoomMappingMasterInfoType
     */
    bookingChannelsInfo?: BookingChannelsInfoType;
    /**
     * 
     * @type {ChannelRoomMappingsSourceDescriptionsType}
     * @memberof ChannelRoomMappingMasterInfoType
     */
    sourceDescriptions?: ChannelRoomMappingsSourceDescriptionsType;
}

/**
 * Check if a given object implements the ChannelRoomMappingMasterInfoType interface.
 */
export function instanceOfChannelRoomMappingMasterInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChannelRoomMappingMasterInfoTypeFromJSON(json: any): ChannelRoomMappingMasterInfoType {
    return ChannelRoomMappingMasterInfoTypeFromJSONTyped(json, false);
}

export function ChannelRoomMappingMasterInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelRoomMappingMasterInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bookingChannelsInfo': !exists(json, 'bookingChannelsInfo') ? undefined : BookingChannelsInfoTypeFromJSON(json['bookingChannelsInfo']),
        'sourceDescriptions': !exists(json, 'sourceDescriptions') ? undefined : ChannelRoomMappingsSourceDescriptionsTypeFromJSON(json['sourceDescriptions']),
    };
}

export function ChannelRoomMappingMasterInfoTypeToJSON(value?: ChannelRoomMappingMasterInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bookingChannelsInfo': BookingChannelsInfoTypeToJSON(value.bookingChannelsInfo),
        'sourceDescriptions': ChannelRoomMappingsSourceDescriptionsTypeToJSON(value.sourceDescriptions),
    };
}
