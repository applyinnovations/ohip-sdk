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
import type { ChannelRateMappingType } from './ChannelRateMappingType';
/**
 * Information about the Rate mapping to be updated.
 * @export
 * @interface ChannelRateMappingChannelRateMappings
 */
export interface ChannelRateMappingChannelRateMappings {
    /**
     * Information about the Rate mapping to be updated.
     * @type {Array<ChannelRateMappingType>}
     * @memberof ChannelRateMappingChannelRateMappings
     */
    channelRateMapping?: Array<ChannelRateMappingType>;
    /**
     * 'Y' if warnings like "Channel Rate Code already exists in Channel" should be ignored and should proceed with creating a new mapping; otherwise, value is 'N'
     * @type {boolean}
     * @memberof ChannelRateMappingChannelRateMappings
     */
    ignoreChannelRateWarning?: boolean;
}
/**
 * Check if a given object implements the ChannelRateMappingChannelRateMappings interface.
 */
export declare function instanceOfChannelRateMappingChannelRateMappings(value: object): boolean;
export declare function ChannelRateMappingChannelRateMappingsFromJSON(json: any): ChannelRateMappingChannelRateMappings;
export declare function ChannelRateMappingChannelRateMappingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelRateMappingChannelRateMappings;
export declare function ChannelRateMappingChannelRateMappingsToJSON(value?: ChannelRateMappingChannelRateMappings | null): any;