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
import type { ChannelCardTypeMappingType } from './ChannelCardTypeMappingType';
/**
 * Paging information and collection of channel-hotel card type mappings.
 * @export
 * @interface ChannelCardTypeMappingDetailsChannelCardTypeMappings
 */
export interface ChannelCardTypeMappingDetailsChannelCardTypeMappings {
    /**
     * Channel-hotel card type mapping and its details.
     * @type {Array<ChannelCardTypeMappingType>}
     * @memberof ChannelCardTypeMappingDetailsChannelCardTypeMappings
     */
    channelCardTypeMapping?: Array<ChannelCardTypeMappingType>;
}
/**
 * Check if a given object implements the ChannelCardTypeMappingDetailsChannelCardTypeMappings interface.
 */
export declare function instanceOfChannelCardTypeMappingDetailsChannelCardTypeMappings(value: object): boolean;
export declare function ChannelCardTypeMappingDetailsChannelCardTypeMappingsFromJSON(json: any): ChannelCardTypeMappingDetailsChannelCardTypeMappings;
export declare function ChannelCardTypeMappingDetailsChannelCardTypeMappingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelCardTypeMappingDetailsChannelCardTypeMappings;
export declare function ChannelCardTypeMappingDetailsChannelCardTypeMappingsToJSON(value?: ChannelCardTypeMappingDetailsChannelCardTypeMappings | null): any;
