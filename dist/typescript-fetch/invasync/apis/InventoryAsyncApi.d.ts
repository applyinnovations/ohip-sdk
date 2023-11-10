/**
 * Opera Cloud Inventory Asynchronous API
 * APIs to cater for Inventory related asynchronous functionality in OPERA Cloud. This includes viewing inventory data along with its revenue and updating inventory&apos;s sell limits for date ranges. <p>This API follows an async pattern where</p><ul><li>You make an initial request, which returns a Location header</li><li>You poll HEAD on the Location header returned to obtain the status of the process</li><li>Once the process completes HEAD will return in the Location header the URL that must be called to obtain the results of the process</li><li>You call the URL to obtain the results of the process</li></ul><br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import * as runtime from '../runtime';
import type { RevenueInventoryStatisticsDetails, RevenueInventoryStatisticsSearchType, SellLimitByDateStatus, SellLimitsByDate } from '../models';
export interface GetRevenueInventoryStatisticsRequest {
    requestId?: string;
    extSystemCode?: string;
    hotelId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    acceptLanguage?: string;
}
export interface GetRevenueInventoryStatisticsProcessStatusRequest {
    requestId?: string;
    extSystemCode?: string;
    hotelId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    acceptLanguage?: string;
}
export interface GetSellLimitsRequest {
    requestId?: string;
    hotelId?: string;
    extSystemCode?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    acceptLanguage?: string;
}
export interface GetSellLimitsProcessStatusRequest {
    requestId?: string;
    extSystemCode?: string;
    hotelId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    acceptLanguage?: string;
}
export interface PostSellLimitsProcessRequest {
    hotelId?: string;
    extSystemCode?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    sellLimitsByDate?: SellLimitsByDate;
    acceptLanguage?: string;
}
export interface StartRevenueInventoryStatisticsProcessRequest {
    extSystemCode?: string;
    hotelId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    criteria?: RevenueInventoryStatisticsSearchType;
    acceptLanguage?: string;
}
/**
 *
 */
export declare class InventoryAsyncApi extends runtime.BaseAPI {
    /**
     * This API returns inventory revenue&apos;s statistics for a hotel within dates given in the startRevenueInventoryStatisticsProcess API request. You can get the value of the summaryId from the Location header returned by the getRevenueInventoryStatisticsProcessStatus operation after the process is completed.<p><strong>OperationId:</strong>getRevenueInventoryStatistics</p>
     * Get results of a revenue inventory statistics process
     */
    getRevenueInventoryStatisticsRaw(requestParameters: GetRevenueInventoryStatisticsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RevenueInventoryStatisticsDetails>>;
    /**
     * This API returns inventory revenue&apos;s statistics for a hotel within dates given in the startRevenueInventoryStatisticsProcess API request. You can get the value of the summaryId from the Location header returned by the getRevenueInventoryStatisticsProcessStatus operation after the process is completed.<p><strong>OperationId:</strong>getRevenueInventoryStatistics</p>
     * Get results of a revenue inventory statistics process
     */
    getRevenueInventoryStatistics(requestParameters: GetRevenueInventoryStatisticsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RevenueInventoryStatisticsDetails>;
    /**
     * Use this API to check whether the process to collate inventory revenue statistics is complete. You can get value of summaryId from the Location header returned by the startRevenueInventoryStatisticsProcess operation.<p><strong>OperationId:</strong>getRevenueInventoryStatisticsProcessStatus</p>
     * Check status of Inventory Revenue Statistic process
     */
    getRevenueInventoryStatisticsProcessStatusRaw(requestParameters: GetRevenueInventoryStatisticsProcessStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Use this API to check whether the process to collate inventory revenue statistics is complete. You can get value of summaryId from the Location header returned by the startRevenueInventoryStatisticsProcess operation.<p><strong>OperationId:</strong>getRevenueInventoryStatisticsProcessStatus</p>
     * Check status of Inventory Revenue Statistic process
     */
    getRevenueInventoryStatisticsProcessStatus(requestParameters: GetRevenueInventoryStatisticsProcessStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * This API returns the status log if any of sell limit data creation is failed. You can get the value of summaryId with the getSellLimitsProcessStatus API response (under header location). <p><strong>OperationId:</strong>getSellLimits</p>
     * Get status for sell limits for a property.
     */
    getSellLimitsRaw(requestParameters: GetSellLimitsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SellLimitByDateStatus>>;
    /**
     * This API returns the status log if any of sell limit data creation is failed. You can get the value of summaryId with the getSellLimitsProcessStatus API response (under header location). <p><strong>OperationId:</strong>getSellLimits</p>
     * Get status for sell limits for a property.
     */
    getSellLimits(requestParameters: GetSellLimitsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SellLimitByDateStatus>;
    /**
     * Use this API to check whether the sell limit data creation is completed yet. You can get the value of the summaryId with the postSellLimitsProcess API response (under header location). <p><strong>OperationId:</strong>getSellLimitsProcessStatus</p>
     * Get the status for sell limits asynchronous process
     */
    getSellLimitsProcessStatusRaw(requestParameters: GetSellLimitsProcessStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Use this API to check whether the sell limit data creation is completed yet. You can get the value of the summaryId with the postSellLimitsProcess API response (under header location). <p><strong>OperationId:</strong>getSellLimitsProcessStatus</p>
     * Get the status for sell limits asynchronous process
     */
    getSellLimitsProcessStatus(requestParameters: GetSellLimitsProcessStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * You can use this API to create sell limits in OPERA by date. <p><strong>OperationId:</strong>postSellLimitsProcess</p>
     * Create sell limit by date.
     */
    postSellLimitsProcessRaw(requestParameters: PostSellLimitsProcessRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * You can use this API to create sell limits in OPERA by date. <p><strong>OperationId:</strong>postSellLimitsProcess</p>
     * Create sell limit by date.
     */
    postSellLimitsProcess(requestParameters: PostSellLimitsProcessRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Use this API to start the process to get a hotel inventory&apos;s revenue statistics for a given date range. Maximum limit of the date range is 94 days with a single request, but the recommendation is to use a date range proportionate to the size of the hotel. Returns a header parameter Location that can be used in the getRevenueInventoryStatisticsProcessStatus operation.  Use event driven APIs (see https://docs.oracle.com/cd/F29336_01/doc.201/f27480/c_business_events.htm#OHIPU-BusinessEvents-F0AC1F1C) to get real time inventory updates.<p><strong>OperationId:</strong>startRevenueInventoryStatisticsProcess</p>
     * Start process to get hotel inventory revenue statistics
     */
    startRevenueInventoryStatisticsProcessRaw(requestParameters: StartRevenueInventoryStatisticsProcessRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Use this API to start the process to get a hotel inventory&apos;s revenue statistics for a given date range. Maximum limit of the date range is 94 days with a single request, but the recommendation is to use a date range proportionate to the size of the hotel. Returns a header parameter Location that can be used in the getRevenueInventoryStatisticsProcessStatus operation.  Use event driven APIs (see https://docs.oracle.com/cd/F29336_01/doc.201/f27480/c_business_events.htm#OHIPU-BusinessEvents-F0AC1F1C) to get real time inventory updates.<p><strong>OperationId:</strong>startRevenueInventoryStatisticsProcess</p>
     * Start process to get hotel inventory revenue statistics
     */
    startRevenueInventoryStatisticsProcess(requestParameters: StartRevenueInventoryStatisticsProcessRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
}
