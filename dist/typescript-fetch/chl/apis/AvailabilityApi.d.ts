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
import * as runtime from '../runtime';
import type { ChannelInventorySnapshot, GeneralAvailabilitySimulator, RateParity, RegionalRateParity } from '../models';
export interface GetChannelInventorySnapshotRequest {
    hotelId?: string;
    fromDate?: Date;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    friday?: boolean;
    monday?: boolean;
    saturday?: boolean;
    sunday?: boolean;
    thursday?: boolean;
    tuesday?: boolean;
    wednesday?: boolean;
    endDate?: Date;
    duration?: string;
    bookingChannelCodes?: Array<string>;
    channelRoomTypes?: Array<string>;
    snapshotLevel?: GetChannelInventorySnapshotSnapshotLevelEnum;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface GetChannelInventorySnapshotByRoomTypeRequest {
    roomTypeCode?: string;
    channelCode?: string;
    hotelId?: string;
    fromDate?: Date;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    friday?: boolean;
    monday?: boolean;
    saturday?: boolean;
    sunday?: boolean;
    thursday?: boolean;
    tuesday?: boolean;
    wednesday?: boolean;
    endDate?: Date;
    duration?: string;
    snapshotLevel?: GetChannelInventorySnapshotByRoomTypeSnapshotLevelEnum;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface GetGeneralAvailabilitySimulatorRequest {
    hotelId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    limit?: number;
    bookingChannelCode?: string;
    arrival?: Date;
    adults?: number;
    nights?: number;
    children?: number;
    noOfRooms?: number;
    channelRatePlanCode?: Array<string>;
    rateAccessCode?: string;
    corpIdIATA?: string;
    inventoryBlockCode?: string;
    promotionCode?: string;
    currencyCode?: string;
    language?: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface GetRateParityRequest {
    hotelId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    comparisonType?: string;
    language?: string;
    limit?: number;
    numberOfDays?: number;
    channelCode?: Array<string>;
    roomType?: Array<string>;
    ratePlanCode?: Array<string>;
    channelRoomType?: Array<string>;
    channelRatePlanCode?: Array<string>;
    chainCode?: Array<string>;
    rateAccessCode?: string;
    inventoryBlockCode?: string;
    promotionCode?: string;
    qualifyingProfileCategory?: string;
    qualifyingProfileId?: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface GetRegionalRateParityRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    language?: string;
    limit?: number;
    numberOfDays?: number;
    hotelIds?: Array<string>;
    channelCode?: Array<string>;
    ratePlanCode?: Array<string>;
    channelRatePlanCode?: Array<string>;
    chainCode?: string;
    rateAccessCode?: string;
    qualifyingProfileCategory?: string;
    qualifyingProfileId?: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
/**
 *
 */
export declare class AvailabilityApi extends runtime.BaseAPI {
    /**
     * Operation to fetch the room availability and restrictions for a given property in relation to channels. <p><strong>OperationId:</strong>getChannelInventorySnapshot</p>
     * Gets hotel\'s rooms and restrictions channel availability
     */
    getChannelInventorySnapshotRaw(requestParameters: GetChannelInventorySnapshotRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChannelInventorySnapshot>>;
    /**
     * Operation to fetch the room availability and restrictions for a given property in relation to channels. <p><strong>OperationId:</strong>getChannelInventorySnapshot</p>
     * Gets hotel\'s rooms and restrictions channel availability
     */
    getChannelInventorySnapshot(requestParameters: GetChannelInventorySnapshotRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChannelInventorySnapshot>;
    /**
     * Operation to fetch the room availability and restrictions for a given property and room type in relation to channels. <p><strong>OperationId:</strong>getChannelInventorySnapshotByRoomType</p>
     * Gets hotel room\'s restrictions and channel availability
     */
    getChannelInventorySnapshotByRoomTypeRaw(requestParameters: GetChannelInventorySnapshotByRoomTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChannelInventorySnapshot>>;
    /**
     * Operation to fetch the room availability and restrictions for a given property and room type in relation to channels. <p><strong>OperationId:</strong>getChannelInventorySnapshotByRoomType</p>
     * Gets hotel room\'s restrictions and channel availability
     */
    getChannelInventorySnapshotByRoomType(requestParameters: GetChannelInventorySnapshotByRoomTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChannelInventorySnapshot>;
    /**
     * Use this API to fetch the General Availability Simulator. <p><strong>OperationId:</strong>getGeneralAvailabilitySimulator</p>
     * Gets the General Availability
     */
    getGeneralAvailabilitySimulatorRaw(requestParameters: GetGeneralAvailabilitySimulatorRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GeneralAvailabilitySimulator>>;
    /**
     * Use this API to fetch the General Availability Simulator. <p><strong>OperationId:</strong>getGeneralAvailabilitySimulator</p>
     * Gets the General Availability
     */
    getGeneralAvailabilitySimulator(requestParameters: GetGeneralAvailabilitySimulatorRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GeneralAvailabilitySimulator>;
    /**
     * Operation to Fetch the Rate Parity. The rate parity search criteria can include room types, rate plans, promotion code, rate access code or chain codes. <p><strong>OperationId:</strong>getRateParity</p>
     * Gets channel\'s rate configuration
     */
    getRateParityRaw(requestParameters: GetRateParityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RateParity>>;
    /**
     * Operation to Fetch the Rate Parity. The rate parity search criteria can include room types, rate plans, promotion code, rate access code or chain codes. <p><strong>OperationId:</strong>getRateParity</p>
     * Gets channel\'s rate configuration
     */
    getRateParity(requestParameters: GetRateParityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RateParity>;
    /**
     * Operation to Fetch the Regional Rate Parity. <p><strong>OperationId:</strong>getRegionalRateParity</p>
     * Gets the regional rate parity
     */
    getRegionalRateParityRaw(requestParameters: GetRegionalRateParityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RegionalRateParity>>;
    /**
     * Operation to Fetch the Regional Rate Parity. <p><strong>OperationId:</strong>getRegionalRateParity</p>
     * Gets the regional rate parity
     */
    getRegionalRateParity(requestParameters: GetRegionalRateParityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RegionalRateParity>;
}
/**
 * @export
 */
export declare const GetChannelInventorySnapshotSnapshotLevelEnum: {
    readonly BookingChannel: "BookingChannel";
    readonly ChannelRoomType: "ChannelRoomType";
};
export type GetChannelInventorySnapshotSnapshotLevelEnum = typeof GetChannelInventorySnapshotSnapshotLevelEnum[keyof typeof GetChannelInventorySnapshotSnapshotLevelEnum];
/**
 * @export
 */
export declare const GetChannelInventorySnapshotByRoomTypeSnapshotLevelEnum: {
    readonly BookingChannel: "BookingChannel";
    readonly ChannelRoomType: "ChannelRoomType";
};
export type GetChannelInventorySnapshotByRoomTypeSnapshotLevelEnum = typeof GetChannelInventorySnapshotByRoomTypeSnapshotLevelEnum[keyof typeof GetChannelInventorySnapshotByRoomTypeSnapshotLevelEnum];
