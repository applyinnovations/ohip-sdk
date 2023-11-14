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
import type { ChannelSnapshotType } from './ChannelSnapshotType';
/**
 * Inventory statistics and restrictions. This can have no code (House level), BookingChannelCode, or ChannelRoomType to represent the different levels.
 * @export
 * @interface ChannelInventoryType
 */
export interface ChannelInventoryType {
    /**
     * Booking channel code that the snapshot belongs to.
     * @type {string}
     * @memberof ChannelInventoryType
     */
    bookingChannelCode?: string;
    /**
     * Booking channel room type that the snapshot belongs to.
     * @type {string}
     * @memberof ChannelInventoryType
     */
    channelRoomType?: string;
    /**
     * Inventory statistics and restriction details.
     * @type {Array<ChannelSnapshotType>}
     * @memberof ChannelInventoryType
     */
    snapshot?: Array<ChannelSnapshotType>;
}
/**
 * Check if a given object implements the ChannelInventoryType interface.
 */
export declare function instanceOfChannelInventoryType(value: object): boolean;
export declare function ChannelInventoryTypeFromJSON(json: any): ChannelInventoryType;
export declare function ChannelInventoryTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelInventoryType;
export declare function ChannelInventoryTypeToJSON(value?: ChannelInventoryType | null): any;