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
import type { GenericGlobalDescriptionType } from './GenericGlobalDescriptionType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Request object to create new Global Descriptions of the GDS Channels
 * @export
 * @interface ChannelGlobalDescriptions
 */
export interface ChannelGlobalDescriptions {
    /**
     * Collection of GDS channel Global description types
     * @type {Array<GenericGlobalDescriptionType>}
     * @memberof ChannelGlobalDescriptions
     */
    channelGlobalDescriptions?: Array<GenericGlobalDescriptionType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof ChannelGlobalDescriptions
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ChannelGlobalDescriptions
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the ChannelGlobalDescriptions interface.
 */
export declare function instanceOfChannelGlobalDescriptions(value: object): boolean;
export declare function ChannelGlobalDescriptionsFromJSON(json: any): ChannelGlobalDescriptions;
export declare function ChannelGlobalDescriptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelGlobalDescriptions;
export declare function ChannelGlobalDescriptionsToJSON(value?: ChannelGlobalDescriptions | null): any;
