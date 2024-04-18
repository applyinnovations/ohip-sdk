/* tslint:disable */
/* eslint-disable */
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
import type {
  BlockReservationStatistics,
  ExceptionDetailType,
  ReservationPace,
  ReservationStatistics,
} from '../models/index';
import {
    BlockReservationStatisticsFromJSON,
    BlockReservationStatisticsToJSON,
    ExceptionDetailTypeFromJSON,
    ExceptionDetailTypeToJSON,
    ReservationPaceFromJSON,
    ReservationPaceToJSON,
    ReservationStatisticsFromJSON,
    ReservationStatisticsToJSON,
} from '../models/index';

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
export class RSVStatsApi extends runtime.BaseAPI {

    /**
     * Get block Reservation statistics by date and room pool <p><strong>OperationId:</strong>getBlockReservationStatisticsByDateAndRoomPool</p>
     * Get block Reservation Statistics
     */
    async getBlockReservationStatisticsByDateAndRoomPoolRaw(requestParameters: GetBlockReservationStatisticsByDateAndRoomPoolRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BlockReservationStatistics>> {
        const queryParameters: any = {};

        if (requestParameters.excludeBlocksWithoutQuoteID !== undefined) {
            queryParameters['excludeBlocksWithoutQuoteID'] = requestParameters.excludeBlocksWithoutQuoteID;
        }

        if (requestParameters.startDate !== undefined) {
            queryParameters['startDate'] = requestParameters.startDate;
        }

        if (requestParameters.endDate !== undefined) {
            queryParameters['endDate'] = requestParameters.endDate;
        }

        if (requestParameters.duration !== undefined) {
            queryParameters['duration'] = requestParameters.duration;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['authorization'] = String(requestParameters.authorization);
        }

        if (requestParameters.xAppKey !== undefined && requestParameters.xAppKey !== null) {
            headerParameters['x-app-key'] = String(requestParameters.xAppKey);
        }

        if (requestParameters.xHotelid !== undefined && requestParameters.xHotelid !== null) {
            headerParameters['x-hotelid'] = String(requestParameters.xHotelid);
        }

        if (requestParameters.xExternalsystem !== undefined && requestParameters.xExternalsystem !== null) {
            headerParameters['x-externalsystem'] = String(requestParameters.xExternalsystem);
        }

        if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
            headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
        }

        const response = await this.request({
            path: `/blockReservationStatisticsByDateAndRoomPool`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BlockReservationStatisticsFromJSON(jsonValue));
    }

    /**
     * Get block Reservation statistics by date and room pool <p><strong>OperationId:</strong>getBlockReservationStatisticsByDateAndRoomPool</p>
     * Get block Reservation Statistics
     */
    async getBlockReservationStatisticsByDateAndRoomPool(requestParameters: GetBlockReservationStatisticsByDateAndRoomPoolRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BlockReservationStatistics> {
        const response = await this.getBlockReservationStatisticsByDateAndRoomPoolRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Use this API to get Reservation pace. <p><strong>OperationId:</strong>getReservationPace</p>
     * Get Reservation pace
     */
    async getReservationPaceRaw(requestParameters: GetReservationPaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ReservationPace>> {
        const queryParameters: any = {};

        if (requestParameters.hotelId !== undefined) {
            queryParameters['hotelId'] = requestParameters.hotelId;
        }

        if (requestParameters.stayDate !== undefined) {
            queryParameters['stayDate'] = requestParameters.stayDate;
        }

        if (requestParameters.leadDays !== undefined) {
            queryParameters['leadDays'] = requestParameters.leadDays;
        }

        if (requestParameters.channels !== undefined) {
            queryParameters['channels'] = requestParameters.channels;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['authorization'] = String(requestParameters.authorization);
        }

        if (requestParameters.xAppKey !== undefined && requestParameters.xAppKey !== null) {
            headerParameters['x-app-key'] = String(requestParameters.xAppKey);
        }

        if (requestParameters.xHotelid !== undefined && requestParameters.xHotelid !== null) {
            headerParameters['x-hotelid'] = String(requestParameters.xHotelid);
        }

        if (requestParameters.xExternalsystem !== undefined && requestParameters.xExternalsystem !== null) {
            headerParameters['x-externalsystem'] = String(requestParameters.xExternalsystem);
        }

        if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
            headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
        }

        const response = await this.request({
            path: `/reservations/pace`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ReservationPaceFromJSON(jsonValue));
    }

    /**
     * Use this API to get Reservation pace. <p><strong>OperationId:</strong>getReservationPace</p>
     * Get Reservation pace
     */
    async getReservationPace(requestParameters: GetReservationPaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ReservationPace> {
        const response = await this.getReservationPaceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Use this API to get a statistical breakdown of reservations such as inventory and revenue data.<p><strong>OperationId:</strong>getReservationStatistics</p>
     * Get reservation statistics
     */
    async getReservationStatisticsRaw(requestParameters: GetReservationStatisticsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ReservationStatistics>> {
        const queryParameters: any = {};

        if (requestParameters.chainName) {
            queryParameters['chainName'] = requestParameters.chainName;
        }

        if (requestParameters.hotelCityCode) {
            queryParameters['hotelCityCode'] = requestParameters.hotelCityCode;
        }

        if (requestParameters.hotelId) {
            queryParameters['hotelId'] = requestParameters.hotelId;
        }

        if (requestParameters.hotelCodeContext) {
            queryParameters['hotelCodeContext'] = requestParameters.hotelCodeContext;
        }

        if (requestParameters.hotelName) {
            queryParameters['hotelName'] = requestParameters.hotelName;
        }

        if (requestParameters.requestedReportsTypeEndDate) {
            queryParameters['requestedReportsTypeEndDate'] = requestParameters.requestedReportsTypeEndDate;
        }

        if (requestParameters.fiscalDate) {
            queryParameters['fiscalDate'] = requestParameters.fiscalDate;
        }

        if (requestParameters.reportCode) {
            queryParameters['reportCode'] = requestParameters.reportCode;
        }

        if (requestParameters.requestedReportsTypeStartDate) {
            queryParameters['requestedReportsTypeStartDate'] = requestParameters.requestedReportsTypeStartDate;
        }

        if (requestParameters.requestedReportsTypeParameterName) {
            queryParameters['requestedReportsTypeParameterName'] = requestParameters.requestedReportsTypeParameterName;
        }

        if (requestParameters.requestedReportsTypeParameterValue) {
            queryParameters['requestedReportsTypeParameterValue'] = requestParameters.requestedReportsTypeParameterValue;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['authorization'] = String(requestParameters.authorization);
        }

        if (requestParameters.xAppKey !== undefined && requestParameters.xAppKey !== null) {
            headerParameters['x-app-key'] = String(requestParameters.xAppKey);
        }

        if (requestParameters.xHotelid !== undefined && requestParameters.xHotelid !== null) {
            headerParameters['x-hotelid'] = String(requestParameters.xHotelid);
        }

        if (requestParameters.xExternalsystem !== undefined && requestParameters.xExternalsystem !== null) {
            headerParameters['x-externalsystem'] = String(requestParameters.xExternalsystem);
        }

        if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
            headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
        }

        const response = await this.request({
            path: `/reservations/statistics`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ReservationStatisticsFromJSON(jsonValue));
    }

    /**
     * Use this API to get a statistical breakdown of reservations such as inventory and revenue data.<p><strong>OperationId:</strong>getReservationStatistics</p>
     * Get reservation statistics
     */
    async getReservationStatistics(requestParameters: GetReservationStatisticsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ReservationStatistics> {
        const response = await this.getReservationStatisticsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetReservationStatisticsReportCodeEnum = {
    ChannelMonitorSummary: 'ChannelMonitorSummary',
    ReservationAndRevenueSummary: 'ReservationAndRevenueSummary'
} as const;
export type GetReservationStatisticsReportCodeEnum = typeof GetReservationStatisticsReportCodeEnum[keyof typeof GetReservationStatisticsReportCodeEnum];