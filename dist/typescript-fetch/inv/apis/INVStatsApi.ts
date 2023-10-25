/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Inventory API
 * APIs to cater for Inventory functionality in OPERA Cloud. This includes sell limits for date ranges, viewing and updating the property&apos;s inventory, as well as item inventory (such as rollaways, microwaves etc.).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  BlockInventoryStatistic,
  ExceptionDetailType,
  StatisticType,
} from '../models';
import {
    BlockInventoryStatisticFromJSON,
    BlockInventoryStatisticToJSON,
    ExceptionDetailTypeFromJSON,
    ExceptionDetailTypeToJSON,
    StatisticTypeFromJSON,
    StatisticTypeToJSON,
} from '../models';

export interface GetBlockInventoryStatisticsRequest {
    hotelId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    includeBlocksWithNoRoom?: boolean;
    includeOverbooking?: boolean;
    includeOpportunities?: boolean;
    includeTentativeInventory?: boolean;
    limit?: number;
    offset?: number;
    endDateRange?: Date;
    startDateRange?: Date;
    blockStatusCodes?: Array<string>;
    originCodes?: Array<string>;
    roomOwnerCodes?: Array<string>;
    blockOwners?: Array<string>;
    summarySortByCode?: GetBlockInventoryStatisticsSummarySortByCodeEnum;
    detailSortByCode?: GetBlockInventoryStatisticsDetailSortByCodeEnum;
    friday?: boolean;
    monday?: boolean;
    saturday?: boolean;
    sunday?: boolean;
    thursday?: boolean;
    tuesday?: boolean;
    wednesday?: boolean;
    fetchInstructions?: Set<GetBlockInventoryStatisticsFetchInstructionsEnum>;
    xExternalsystem?: string;
    acceptLanguage?: string;
}

export interface GetBlockInventoryStatisticsMultipleHotelIdsRequest {
    hotelIds?: Array<string>;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    includeBlocksWithNoRoom?: boolean;
    includeOverbooking?: boolean;
    includeOpportunities?: boolean;
    includeTentativeInventory?: boolean;
    limit?: number;
    offset?: number;
    endDateRange?: Date;
    startDateRange?: Date;
    blockStatusCodes?: Array<string>;
    originCodes?: Array<string>;
    roomOwnerCodes?: Array<string>;
    blockOwners?: Array<string>;
    summarySortByCode?: GetBlockInventoryStatisticsMultipleHotelIdsSummarySortByCodeEnum;
    detailSortByCode?: GetBlockInventoryStatisticsMultipleHotelIdsDetailSortByCodeEnum;
    sunday?: boolean;
    monday?: boolean;
    tuesday?: boolean;
    wednesday?: boolean;
    thursday?: boolean;
    friday?: boolean;
    saturday?: boolean;
    fetchInstructions?: Set<GetBlockInventoryStatisticsMultipleHotelIdsFetchInstructionsEnum>;
    xExternalsystem?: string;
    acceptLanguage?: string;
}

export interface GetInventoryStatisticsRequest {
    hotelId?: string;
    dateRangeEnd?: Date;
    reportCode?: GetInventoryStatisticsReportCodeEnum;
    dateRangeStart?: Date;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    parameterName?: Array<GetInventoryStatisticsParameterNameEnum>;
    parameterValue?: Array<string>;
    xExternalsystem?: string;
    acceptLanguage?: string;
}

/**
 * 
 */
export class INVStatsApi extends runtime.BaseAPI {

    /**
     * Use this API to get block statistics on a per-day basis across a specified date range. The result includes a summary section of rooms booked by status by date, details on deduct and non-deduct rooms booked per day, and Sales Allowance and House Availability figures per day. The details section of the results include block details such as name, block, code, start and end date, owner, and more. It also shows a breakdown of blocked picked-up and available rooms per day per block. The result set is used to feed the GRC (Group Rooms Control) page in the OPERA UI. <p><strong>OperationId:</strong>getBlockInventoryStatistics</p>
     * Get block inventory statistics
     */
    async getBlockInventoryStatisticsRaw(requestParameters: GetBlockInventoryStatisticsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BlockInventoryStatistic>> {
        const queryParameters: any = {};

        if (requestParameters.includeBlocksWithNoRoom !== undefined) {
            queryParameters['includeBlocksWithNoRoom'] = requestParameters.includeBlocksWithNoRoom;
        }

        if (requestParameters.includeOverbooking !== undefined) {
            queryParameters['includeOverbooking'] = requestParameters.includeOverbooking;
        }

        if (requestParameters.includeOpportunities !== undefined) {
            queryParameters['includeOpportunities'] = requestParameters.includeOpportunities;
        }

        if (requestParameters.includeTentativeInventory !== undefined) {
            queryParameters['includeTentativeInventory'] = requestParameters.includeTentativeInventory;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.endDateRange !== undefined) {
            queryParameters['endDateRange'] = (requestParameters.endDateRange as any).toISOString().substr(0,10);
        }

        if (requestParameters.startDateRange !== undefined) {
            queryParameters['startDateRange'] = (requestParameters.startDateRange as any).toISOString().substr(0,10);
        }

        if (requestParameters.blockStatusCodes) {
            queryParameters['blockStatusCodes'] = requestParameters.blockStatusCodes;
        }

        if (requestParameters.originCodes) {
            queryParameters['originCodes'] = requestParameters.originCodes;
        }

        if (requestParameters.roomOwnerCodes) {
            queryParameters['roomOwnerCodes'] = requestParameters.roomOwnerCodes;
        }

        if (requestParameters.blockOwners) {
            queryParameters['blockOwners'] = requestParameters.blockOwners;
        }

        if (requestParameters.summarySortByCode !== undefined) {
            queryParameters['summarySortByCode'] = requestParameters.summarySortByCode;
        }

        if (requestParameters.detailSortByCode !== undefined) {
            queryParameters['detailSortByCode'] = requestParameters.detailSortByCode;
        }

        if (requestParameters.friday !== undefined) {
            queryParameters['friday'] = requestParameters.friday;
        }

        if (requestParameters.monday !== undefined) {
            queryParameters['monday'] = requestParameters.monday;
        }

        if (requestParameters.saturday !== undefined) {
            queryParameters['saturday'] = requestParameters.saturday;
        }

        if (requestParameters.sunday !== undefined) {
            queryParameters['sunday'] = requestParameters.sunday;
        }

        if (requestParameters.thursday !== undefined) {
            queryParameters['thursday'] = requestParameters.thursday;
        }

        if (requestParameters.tuesday !== undefined) {
            queryParameters['tuesday'] = requestParameters.tuesday;
        }

        if (requestParameters.wednesday !== undefined) {
            queryParameters['wednesday'] = requestParameters.wednesday;
        }

        if (requestParameters.fetchInstructions) {
            queryParameters['fetchInstructions'] = requestParameters.fetchInstructions;
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
            path: `/hotels/{hotelId}/blockInventoryStatistics`.replace(`{${"hotelId"}}`, encodeURIComponent(String(requestParameters.hotelId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BlockInventoryStatisticFromJSON(jsonValue));
    }

    /**
     * Use this API to get block statistics on a per-day basis across a specified date range. The result includes a summary section of rooms booked by status by date, details on deduct and non-deduct rooms booked per day, and Sales Allowance and House Availability figures per day. The details section of the results include block details such as name, block, code, start and end date, owner, and more. It also shows a breakdown of blocked picked-up and available rooms per day per block. The result set is used to feed the GRC (Group Rooms Control) page in the OPERA UI. <p><strong>OperationId:</strong>getBlockInventoryStatistics</p>
     * Get block inventory statistics
     */
    async getBlockInventoryStatistics(requestParameters: GetBlockInventoryStatisticsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BlockInventoryStatistic> {
        const response = await this.getBlockInventoryStatisticsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * You can use this API to retrieve Block inventory for multiple hotel codes. Narrow down your results using the query parameters available. <p><strong>OperationId:</strong>getBlockInventoryStatisticsMultipleHotelIds</p>
     * Get block inventory statistics for multiple hotel Ids
     */
    async getBlockInventoryStatisticsMultipleHotelIdsRaw(requestParameters: GetBlockInventoryStatisticsMultipleHotelIdsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BlockInventoryStatistic>> {
        const queryParameters: any = {};

        if (requestParameters.hotelIds) {
            queryParameters['hotelIds'] = requestParameters.hotelIds;
        }

        if (requestParameters.includeBlocksWithNoRoom !== undefined) {
            queryParameters['includeBlocksWithNoRoom'] = requestParameters.includeBlocksWithNoRoom;
        }

        if (requestParameters.includeOverbooking !== undefined) {
            queryParameters['includeOverbooking'] = requestParameters.includeOverbooking;
        }

        if (requestParameters.includeOpportunities !== undefined) {
            queryParameters['includeOpportunities'] = requestParameters.includeOpportunities;
        }

        if (requestParameters.includeTentativeInventory !== undefined) {
            queryParameters['includeTentativeInventory'] = requestParameters.includeTentativeInventory;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.endDateRange !== undefined) {
            queryParameters['endDateRange'] = (requestParameters.endDateRange as any).toISOString().substr(0,10);
        }

        if (requestParameters.startDateRange !== undefined) {
            queryParameters['startDateRange'] = (requestParameters.startDateRange as any).toISOString().substr(0,10);
        }

        if (requestParameters.blockStatusCodes) {
            queryParameters['blockStatusCodes'] = requestParameters.blockStatusCodes;
        }

        if (requestParameters.originCodes) {
            queryParameters['originCodes'] = requestParameters.originCodes;
        }

        if (requestParameters.roomOwnerCodes) {
            queryParameters['roomOwnerCodes'] = requestParameters.roomOwnerCodes;
        }

        if (requestParameters.blockOwners) {
            queryParameters['blockOwners'] = requestParameters.blockOwners;
        }

        if (requestParameters.summarySortByCode !== undefined) {
            queryParameters['summarySortByCode'] = requestParameters.summarySortByCode;
        }

        if (requestParameters.detailSortByCode !== undefined) {
            queryParameters['detailSortByCode'] = requestParameters.detailSortByCode;
        }

        if (requestParameters.sunday !== undefined) {
            queryParameters['sunday'] = requestParameters.sunday;
        }

        if (requestParameters.monday !== undefined) {
            queryParameters['monday'] = requestParameters.monday;
        }

        if (requestParameters.tuesday !== undefined) {
            queryParameters['tuesday'] = requestParameters.tuesday;
        }

        if (requestParameters.wednesday !== undefined) {
            queryParameters['wednesday'] = requestParameters.wednesday;
        }

        if (requestParameters.thursday !== undefined) {
            queryParameters['thursday'] = requestParameters.thursday;
        }

        if (requestParameters.friday !== undefined) {
            queryParameters['friday'] = requestParameters.friday;
        }

        if (requestParameters.saturday !== undefined) {
            queryParameters['saturday'] = requestParameters.saturday;
        }

        if (requestParameters.fetchInstructions) {
            queryParameters['fetchInstructions'] = requestParameters.fetchInstructions;
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
            path: `/blockInventoryStatistics`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BlockInventoryStatisticFromJSON(jsonValue));
    }

    /**
     * You can use this API to retrieve Block inventory for multiple hotel codes. Narrow down your results using the query parameters available. <p><strong>OperationId:</strong>getBlockInventoryStatisticsMultipleHotelIds</p>
     * Get block inventory statistics for multiple hotel Ids
     */
    async getBlockInventoryStatisticsMultipleHotelIds(requestParameters: GetBlockInventoryStatisticsMultipleHotelIdsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BlockInventoryStatistic> {
        const response = await this.getBlockInventoryStatisticsMultipleHotelIdsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Use this API to retrieve the inventory data for a specified hotel. Narrow down your results using the query parameters such as a date range, room type, room class, and/or tentative inventory included. Maximum days limit with a single request is 30 days.<p><strong>OperationId:</strong>getInventoryStatistics</p>
     * Get hotel inventory
     */
    async getInventoryStatisticsRaw(requestParameters: GetInventoryStatisticsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<StatisticType>>> {
        const queryParameters: any = {};

        if (requestParameters.dateRangeEnd !== undefined) {
            queryParameters['dateRangeEnd'] = (requestParameters.dateRangeEnd as any).toISOString().substr(0,10);
        }

        if (requestParameters.reportCode !== undefined) {
            queryParameters['reportCode'] = requestParameters.reportCode;
        }

        if (requestParameters.dateRangeStart !== undefined) {
            queryParameters['dateRangeStart'] = (requestParameters.dateRangeStart as any).toISOString().substr(0,10);
        }

        if (requestParameters.parameterName) {
            queryParameters['parameterName'] = requestParameters.parameterName;
        }

        if (requestParameters.parameterValue) {
            queryParameters['parameterValue'] = requestParameters.parameterValue;
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
            path: `/hotels/{hotelId}/inventoryStatistics`.replace(`{${"hotelId"}}`, encodeURIComponent(String(requestParameters.hotelId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(StatisticTypeFromJSON));
    }

    /**
     * Use this API to retrieve the inventory data for a specified hotel. Narrow down your results using the query parameters such as a date range, room type, room class, and/or tentative inventory included. Maximum days limit with a single request is 30 days.<p><strong>OperationId:</strong>getInventoryStatistics</p>
     * Get hotel inventory
     */
    async getInventoryStatistics(requestParameters: GetInventoryStatisticsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<StatisticType>> {
        const response = await this.getInventoryStatisticsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetBlockInventoryStatisticsSummarySortByCodeEnum = {
    Status: 'Status',
    StatusDescending: 'StatusDescending',
    ArrivalDate: 'ArrivalDate',
    BlockAccount: 'BlockAccount',
    Revenue: 'Revenue',
    RoomsOwner: 'RoomsOwner'
} as const;
export type GetBlockInventoryStatisticsSummarySortByCodeEnum = typeof GetBlockInventoryStatisticsSummarySortByCodeEnum[keyof typeof GetBlockInventoryStatisticsSummarySortByCodeEnum];
/**
 * @export
 */
export const GetBlockInventoryStatisticsDetailSortByCodeEnum = {
    Status: 'Status',
    StatusDescending: 'StatusDescending',
    ArrivalDate: 'ArrivalDate',
    BlockAccount: 'BlockAccount',
    Revenue: 'Revenue',
    RoomsOwner: 'RoomsOwner'
} as const;
export type GetBlockInventoryStatisticsDetailSortByCodeEnum = typeof GetBlockInventoryStatisticsDetailSortByCodeEnum[keyof typeof GetBlockInventoryStatisticsDetailSortByCodeEnum];
/**
 * @export
 */
export const GetBlockInventoryStatisticsFetchInstructionsEnum = {
    StatusSummary: 'StatusSummary',
    BookingSummary: 'BookingSummary',
    ForecastSummary: 'ForecastSummary',
    DetailSummary: 'DetailSummary',
    RoomSummary: 'RoomSummary'
} as const;
export type GetBlockInventoryStatisticsFetchInstructionsEnum = typeof GetBlockInventoryStatisticsFetchInstructionsEnum[keyof typeof GetBlockInventoryStatisticsFetchInstructionsEnum];
/**
 * @export
 */
export const GetBlockInventoryStatisticsMultipleHotelIdsSummarySortByCodeEnum = {
    Status: 'Status',
    StatusDescending: 'StatusDescending'
} as const;
export type GetBlockInventoryStatisticsMultipleHotelIdsSummarySortByCodeEnum = typeof GetBlockInventoryStatisticsMultipleHotelIdsSummarySortByCodeEnum[keyof typeof GetBlockInventoryStatisticsMultipleHotelIdsSummarySortByCodeEnum];
/**
 * @export
 */
export const GetBlockInventoryStatisticsMultipleHotelIdsDetailSortByCodeEnum = {
    Status: 'Status',
    StatusDescending: 'StatusDescending',
    ArrivalDate: 'ArrivalDate',
    BlockAccount: 'BlockAccount',
    Revenue: 'Revenue',
    RoomsOwner: 'RoomsOwner'
} as const;
export type GetBlockInventoryStatisticsMultipleHotelIdsDetailSortByCodeEnum = typeof GetBlockInventoryStatisticsMultipleHotelIdsDetailSortByCodeEnum[keyof typeof GetBlockInventoryStatisticsMultipleHotelIdsDetailSortByCodeEnum];
/**
 * @export
 */
export const GetBlockInventoryStatisticsMultipleHotelIdsFetchInstructionsEnum = {
    StatusSummary: 'StatusSummary',
    BookingSummary: 'BookingSummary',
    ForecastSummary: 'ForecastSummary',
    DetailSummary: 'DetailSummary',
    RoomSummary: 'RoomSummary'
} as const;
export type GetBlockInventoryStatisticsMultipleHotelIdsFetchInstructionsEnum = typeof GetBlockInventoryStatisticsMultipleHotelIdsFetchInstructionsEnum[keyof typeof GetBlockInventoryStatisticsMultipleHotelIdsFetchInstructionsEnum];
/**
 * @export
 */
export const GetInventoryStatisticsReportCodeEnum = {
    DetailedAvailabiltySummary: 'DetailedAvailabiltySummary',
    RoomCalendarStatistics: 'RoomCalendarStatistics',
    SellLimitSummary: 'SellLimitSummary',
    RoomsAvailabilitySummary: 'RoomsAvailabilitySummary'
} as const;
export type GetInventoryStatisticsReportCodeEnum = typeof GetInventoryStatisticsReportCodeEnum[keyof typeof GetInventoryStatisticsReportCodeEnum];
/**
 * @export
 */
export const GetInventoryStatisticsParameterNameEnum = {
    CancelledYn: 'CancelledYN',
    Channel: 'Channel',
    DeductRoomsYn: 'DeductRoomsYN',
    GroupBy: 'GroupBy',
    HouseArrPersonsYn: 'HouseArrPersonsYN',
    HouseArrRoomsYn: 'HouseArrRoomsYN',
    HouseAvailPercYn: 'HouseAvailPercYN',
    HouseAvailRoomsExcludingOverbookingYn: 'HouseAvailRoomsExcludingOverbookingYN',
    HouseAvailRoomsYn: 'HouseAvailRoomsYN',
    HouseAvailTenPercYn: 'HouseAvailTenPercYN',
    HouseBlkDeductNpuYn: 'HouseBlkDeductNpuYN',
    HouseBlkDeductPuYn: 'HouseBlkDeductPuYN',
    HouseBlkTentNpuYn: 'HouseBlkTentNpuYN',
    HouseBlkTentPuYn: 'HouseBlkTentPuYN',
    HouseDayUsePersonYn: 'HouseDayUsePersonYN',
    HouseDayUseRoomYn: 'HouseDayUseRoomYN',
    HouseDepPersonsYn: 'HouseDepPersonsYN',
    HouseDepRoomsYn: 'HouseDepRoomsYN',
    HouseInventoryRoomsYn: 'HouseInventoryRoomsYN',
    HouseMaxAvailabilityExcludingOverbookingYn: 'HouseMaxAvailabilityExcludingOverbookingYN',
    HouseMaxAvailabilityYn: 'HouseMaxAvailabilityYN',
    HouseMaxOccupancyYn: 'HouseMaxOccupancyYN',
    HouseMinAvailabilityExcludingOverbookingYn: 'HouseMinAvailabilityExcludingOverbookingYN',
    HouseMinAvailabilityYn: 'HouseMinAvailabilityYN',
    HouseOccPercYn: 'HouseOccPercYN',
    HouseOccTenPercYn: 'HouseOccTenPercYN',
    HouseOccupancyYn: 'HouseOccupancyYN',
    HouseOooyn: 'HouseOOOYN',
    HouseOosRoomsYn: 'HouseOOSRoomsYN',
    HouseOverBookingYn: 'HouseOverBookingYN',
    HousePeopleInHouseYn: 'HousePeopleInHouseYN',
    HousePhysicalRoomsYn: 'HousePhysicalRoomsYN',
    HouseRoomsSoldYn: 'HouseRoomsSoldYN',
    HouseSellLimitYn: 'HouseSellLimitYN',
    HouseTentRoomsExcludingOverbookingYn: 'HouseTentRoomsExcludingOverbookingYN',
    HouseTentRoomsSoldYn: 'HouseTentRoomsSoldYN',
    HouseTentRoomsYn: 'HouseTentRoomsYN',
    NonOwnerExclusiveYn: 'NonOwnerExclusiveYN',
    OutOfOrderRoomsYn: 'OutOfOrderRoomsYN',
    OwnerExclusiveYn: 'OwnerExclusiveYN',
    RestrictionsYn: 'RestrictionsYN',
    RoomArrPersonsYn: 'RoomArrPersonsYN',
    RoomArrRoomsYn: 'RoomArrRoomsYN',
    RoomAvailRoomsExcludingOverbookingYn: 'RoomAvailRoomsExcludingOverbookingYN',
    RoomAvailRoomsYn: 'RoomAvailRoomsYN',
    RoomBlkDeductNpuYn: 'RoomBlkDeductNpuYN',
    RoomBlkDeductPuYn: 'RoomBlkDeductPuYN',
    RoomBlkTentNpuYn: 'RoomBlkTentNpuYN',
    RoomBlkTentPuYn: 'RoomBlkTentPuYN',
    RoomCancelledYn: 'RoomCancelledYN',
    RoomClassList: 'RoomClassList',
    RoomDayUsePersonYn: 'RoomDayUsePersonYN',
    RoomDayUseRoomYn: 'RoomDayUseRoomYN',
    RoomDepPersonsYn: 'RoomDepPersonsYN',
    RoomDepRoomsYn: 'RoomDepRoomsYN',
    RoomInventoryRoomsYn: 'RoomInventoryRoomsYN',
    RoomMaxAvailabilityExcludingOverbookingYn: 'RoomMaxAvailabilityExcludingOverbookingYN',
    RoomMaxAvailabilityYn: 'RoomMaxAvailabilityYN',
    RoomMaxOccupancyYn: 'RoomMaxOccupancyYN',
    RoomMinAvailabilityExcludingOverbookingYn: 'RoomMinAvailabilityExcludingOverbookingYN',
    RoomMinAvailabilityYn: 'RoomMinAvailabilityYN',
    RoomOccupancyYn: 'RoomOccupancyYN',
    RoomOooyn: 'RoomOOOYN',
    RoomOosRoomsYn: 'RoomOOSRoomsYN',
    RoomOverBookingYn: 'RoomOverBookingYN',
    RoomPeopleInHouseYn: 'RoomPeopleInHouseYN',
    RoomPhysicalRoomsYn: 'RoomPhysicalRoomsYN',
    RoomRestrictionsYn: 'RoomRestrictionsYN',
    RoomRoomsSoldYn: 'RoomRoomsSoldYN',
    RoomSellLimitYn: 'RoomSellLimitYN',
    RoomTentRoomsExcludingOverbookingYn: 'RoomTentRoomsExcludingOverbookingYN',
    RoomTentRoomsYn: 'RoomTentRoomsYN',
    RoomTentYn: 'RoomTentYN',
    RoomTypeWildCardList: 'RoomTypeWildCardList'
} as const;
export type GetInventoryStatisticsParameterNameEnum = typeof GetInventoryStatisticsParameterNameEnum[keyof typeof GetInventoryStatisticsParameterNameEnum];
