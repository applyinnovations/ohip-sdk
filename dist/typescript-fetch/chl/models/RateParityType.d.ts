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
import type { ParityGroupType } from './ParityGroupType';
/**
 * Information on Room Rate Parity among Channels/Property
 * @export
 * @interface RateParityType
 */
export interface RateParityType {
    /**
     *
     * @type {Array<BookingChannelInfoType>}
     * @memberof RateParityType
     */
    bookingChannelsInfo?: Array<BookingChannelInfoType>;
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof RateParityType
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof RateParityType
     */
    hasMore?: boolean;
    /**
     *
     * @type {Array<HotelChannelInfoType>}
     * @memberof RateParityType
     */
    hotelsInfo?: Array<HotelChannelInfoType>;
    /**
     * Channels and Property combination.
     * @type {Array<ParityGroupType>}
     * @memberof RateParityType
     */
    parityGroups?: Array<ParityGroupType>;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof RateParityType
     */
    totalResults?: number;
}
/**
 * Check if a given object implements the RateParityType interface.
 */
export declare function instanceOfRateParityType(value: object): boolean;
export declare function RateParityTypeFromJSON(json: any): RateParityType;
export declare function RateParityTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RateParityType;
export declare function RateParityTypeToJSON(value?: RateParityType | null): any;
