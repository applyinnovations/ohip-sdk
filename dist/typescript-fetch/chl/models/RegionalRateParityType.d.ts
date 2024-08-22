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
import type { BookingChannelInfoType } from './BookingChannelInfoType';
import type { HotelChannelInfoType } from './HotelChannelInfoType';
import type { RegionalParityGroupType } from './RegionalParityGroupType';
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
export declare function instanceOfRegionalRateParityType(value: object): boolean;
export declare function RegionalRateParityTypeFromJSON(json: any): RegionalRateParityType;
export declare function RegionalRateParityTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegionalRateParityType;
export declare function RegionalRateParityTypeToJSON(value?: RegionalRateParityType | null): any;
