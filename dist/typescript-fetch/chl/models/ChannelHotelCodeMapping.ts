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
import type { HotelCodeMappingInfoType } from './HotelCodeMappingInfoType';
import {
    HotelCodeMappingInfoTypeFromJSON,
    HotelCodeMappingInfoTypeFromJSONTyped,
    HotelCodeMappingInfoTypeToJSON,
} from './HotelCodeMappingInfoType';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response giving OPERA hotel code mapped to channel hotel code for a booking channel and vice versa.
 * @export
 * @interface ChannelHotelCodeMapping
 */
export interface ChannelHotelCodeMapping {
    /**
     * Channel code for which the hotel code mapping information is needed.
     * @type {string}
     * @memberof ChannelHotelCodeMapping
     */
    channelCode?: string;
    /**
     * 
     * @type {HotelCodeMappingInfoType}
     * @memberof ChannelHotelCodeMapping
     */
    hotelInfo?: HotelCodeMappingInfoType;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof ChannelHotelCodeMapping
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ChannelHotelCodeMapping
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the ChannelHotelCodeMapping interface.
 */
export function instanceOfChannelHotelCodeMapping(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChannelHotelCodeMappingFromJSON(json: any): ChannelHotelCodeMapping {
    return ChannelHotelCodeMappingFromJSONTyped(json, false);
}

export function ChannelHotelCodeMappingFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelHotelCodeMapping {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'channelCode': !exists(json, 'channelCode') ? undefined : json['channelCode'],
        'hotelInfo': !exists(json, 'hotelInfo') ? undefined : HotelCodeMappingInfoTypeFromJSON(json['hotelInfo']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function ChannelHotelCodeMappingToJSON(value?: ChannelHotelCodeMapping | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'channelCode': value.channelCode,
        'hotelInfo': HotelCodeMappingInfoTypeToJSON(value.hotelInfo),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

