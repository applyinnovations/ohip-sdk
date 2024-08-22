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
import type { ChannelRateRoomListType } from './ChannelRateRoomListType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Request object for changing sequence for channel rate rooms.
 * @export
 * @interface ChannelRateRoomSequence
 */
export interface ChannelRateRoomSequence {
    /**
     *
     * @type {ChannelRateRoomListType}
     * @memberof ChannelRateRoomSequence
     */
    channelRateRoomList?: ChannelRateRoomListType;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof ChannelRateRoomSequence
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ChannelRateRoomSequence
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the ChannelRateRoomSequence interface.
 */
export declare function instanceOfChannelRateRoomSequence(value: object): boolean;
export declare function ChannelRateRoomSequenceFromJSON(json: any): ChannelRateRoomSequence;
export declare function ChannelRateRoomSequenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelRateRoomSequence;
export declare function ChannelRateRoomSequenceToJSON(value?: ChannelRateRoomSequence | null): any;
