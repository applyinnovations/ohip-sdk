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
import type { ChannelNegProfileType } from './ChannelNegProfileType';
import type { DistributeChannelRateMappingType } from './DistributeChannelRateMappingType';
/**
 * Information about rate codes to be distributed to a channel.
 * @export
 * @interface DistributeChannelRateType
 */
export interface DistributeChannelRateType {
    /**
     * Channel.
     * @type {string}
     * @memberof DistributeChannelRateType
     */
    bookingChannelCode?: string;
    /**
     * Channel Rate Code.
     * @type {string}
     * @memberof DistributeChannelRateType
     */
    channelRatePlanCode?: string;
    /**
     * Information about rate codes to be distributed to a channel.
     * @type {Array<DistributeChannelRateMappingType>}
     * @memberof DistributeChannelRateType
     */
    distributeChannelRateMappings?: Array<DistributeChannelRateMappingType>;
    /**
     * Negotiated channel rate details to be modified.
     * @type {Array<ChannelNegProfileType>}
     * @memberof DistributeChannelRateType
     */
    negotiatedProfiles?: Array<ChannelNegProfileType>;
}
/**
 * Check if a given object implements the DistributeChannelRateType interface.
 */
export declare function instanceOfDistributeChannelRateType(value: object): boolean;
export declare function DistributeChannelRateTypeFromJSON(json: any): DistributeChannelRateType;
export declare function DistributeChannelRateTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DistributeChannelRateType;
export declare function DistributeChannelRateTypeToJSON(value?: DistributeChannelRateType | null): any;
