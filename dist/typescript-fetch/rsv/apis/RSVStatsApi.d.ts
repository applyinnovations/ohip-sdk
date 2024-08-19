/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import * as runtime from '../runtime';
import type { BlockReservationStatistics, ReservationPace, ReservationStatistics } from '../models/index';
export interface GetBlockReservationStatisticsByDateAndRoomPoolRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    excludeBlocksWithoutQuoteID?: boolean;
    startDate?: string;
    endDate?: string;
    duration?: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface GetReservationPaceRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    hotelId?: string;
    stayDate?: string;
    leadDays?: number;
    channels?: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface GetReservationStatisticsRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    chainName?: Array<string>;
    hotelCityCode?: Array<string>;
    hotelId?: Array<string>;
    hotelCodeContext?: Array<string>;
    hotelName?: Array<string>;
    requestedReportsTypeEndDate?: Array<string>;
    fiscalDate?: Array<string>;
    reportCode?: Array<GetReservationStatisticsReportCodeEnum>;
    requestedReportsTypeStartDate?: Array<string>;
    requestedReportsTypeParameterName?: Array<string>;
    requestedReportsTypeParameterValue?: Array<string>;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
/**
 *
 */
export declare class RSVStatsApi extends runtime.BaseAPI {
    /**
     * Get block Reservation statistics by date and room pool <p><strong>OperationId:</strong>getBlockReservationStatisticsByDateAndRoomPool</p>
     * Get block Reservation Statistics
     */
    getBlockReservationStatisticsByDateAndRoomPoolRaw(requestParameters: GetBlockReservationStatisticsByDateAndRoomPoolRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BlockReservationStatistics>>;
    /**
     * Get block Reservation statistics by date and room pool <p><strong>OperationId:</strong>getBlockReservationStatisticsByDateAndRoomPool</p>
     * Get block Reservation Statistics
     */
    getBlockReservationStatisticsByDateAndRoomPool(requestParameters: GetBlockReservationStatisticsByDateAndRoomPoolRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BlockReservationStatistics>;
    /**
     * Use this API to get Reservation pace. <p><strong>OperationId:</strong>getReservationPace</p>
     * Get Reservation pace
     */
    getReservationPaceRaw(requestParameters: GetReservationPaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ReservationPace>>;
    /**
     * Use this API to get Reservation pace. <p><strong>OperationId:</strong>getReservationPace</p>
     * Get Reservation pace
     */
    getReservationPace(requestParameters: GetReservationPaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ReservationPace>;
    /**
     * Use this API to get a statistical breakdown of reservations such as inventory and revenue data.<p><strong>OperationId:</strong>getReservationStatistics</p>
     * Get reservation statistics
     */
    getReservationStatisticsRaw(requestParameters: GetReservationStatisticsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ReservationStatistics>>;
    /**
     * Use this API to get a statistical breakdown of reservations such as inventory and revenue data.<p><strong>OperationId:</strong>getReservationStatistics</p>
     * Get reservation statistics
     */
    getReservationStatistics(requestParameters: GetReservationStatisticsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ReservationStatistics>;
}
/**
 * @export
 */
export declare const GetReservationStatisticsReportCodeEnum: {
    readonly ChannelMonitorSummary: "ChannelMonitorSummary";
    readonly ReservationAndRevenueSummary: "ReservationAndRevenueSummary";
};
export type GetReservationStatisticsReportCodeEnum = typeof GetReservationStatisticsReportCodeEnum[keyof typeof GetReservationStatisticsReportCodeEnum];
