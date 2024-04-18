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
import type { HotelCodeMappingInfoType } from './HotelCodeMappingInfoType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
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
export declare function instanceOfChannelHotelCodeMapping(value: object): boolean;
export declare function ChannelHotelCodeMappingFromJSON(json: any): ChannelHotelCodeMapping;
export declare function ChannelHotelCodeMappingFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelHotelCodeMapping;
export declare function ChannelHotelCodeMappingToJSON(value?: ChannelHotelCodeMapping | null): any;