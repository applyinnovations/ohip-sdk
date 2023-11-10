/**
 * Opera Cloud Rate Plan Asynchronous Service API
 * APIs catering to the Rate Plan asynchronous related functionality in a hotel.  This includes adding/updating daily rates&apos; pricing schedules and best available rates by day or length of stay. <p>This API follows an async pattern where</p><ul><li>You make an initial request, which returns a Location header</li><li>You poll HEAD on the Location header returned to obtain the status of the process</li><li>Once the process completes HEAD will return in the Location header the URL that must be called to obtain the results of the process</li><li>You call the URL to obtain the results of the process</li></ul><br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import * as runtime from '../runtime';
import type { BestAvailableRatePlans, BestAvailableRatePlansStatus, DailyRatePlanSchedules, DailyRatePlanSchedulesStatus, HurdleRates, HurdleRatesStatus, StartSetRatePlansHeadersProcessRequest } from '../models';
export interface GetBestAvailableRatePlansRequest {
    requestId?: string;
    hotelId?: string;
    extSystemCode?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    acceptLanguage?: string;
}
export interface GetBestAvailableRatePlansProcessStatusRequest {
    requestId?: string;
    extSystemCode?: string;
    hotelId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    acceptLanguage?: string;
}
export interface GetDailyRatePlanSchedulesRequest {
    requestId?: string;
    hotelId?: string;
    extSystemCode?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    acceptLanguage?: string;
}
export interface GetDailyRatePlanSchedulesProcessStatusRequest {
    requestId?: string;
    extSystemCode?: string;
    hotelId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    acceptLanguage?: string;
}
export interface GetHurdleRatesRequest {
    hotelId?: string;
    extSystemCode?: string;
    requestId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    acceptLanguage?: string;
}
export interface GetHurdleRatesProcessStatusRequest {
    requestId?: string;
    extSystemCode?: string;
    hotelId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    acceptLanguage?: string;
}
export interface GetRatePlansHeadersRequest {
    hotelId?: string;
    extSystemCode?: string;
    requestId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    acceptLanguage?: string;
}
export interface GetRatePlansHeadersProcessStatusRequest {
    requestId?: string;
    extSystemCode?: string;
    hotelId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    acceptLanguage?: string;
}
export interface StartHurdleRatesProcessRequest {
    hotelId?: string;
    extSystemCode?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    hurdleRates?: HurdleRates;
    acceptLanguage?: string;
}
export interface StartSetBestAvailableRatePlansProcessRequest {
    hotelId?: string;
    extSystemCode?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    bestAvailableRatePlans?: BestAvailableRatePlans;
    acceptLanguage?: string;
}
export interface StartSetDailyRatePlanSchedulesProcessRequest {
    hotelId?: string;
    extSystemCode?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    dailyRatePlanSchedules?: DailyRatePlanSchedules;
    acceptLanguage?: string;
}
export interface StartSetRatePlansHeadersProcessOperationRequest {
    hotelId?: string;
    extSystemCode?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    ratePlan?: StartSetRatePlansHeadersProcessRequest;
    acceptLanguage?: string;
}
/**
 *
 */
export declare class RatePlanAsyncApi extends runtime.BaseAPI {
    /**
     * Use this API to get the result of the process to set best available rate plans, which will include details of any data that has been failed to process. You can get the value of the summaryId from the Location header returned by the getBestAvailableRatePlansProcessStatus operation after the process is completed. <p><strong>OperationId:</strong>getBestAvailableRatePlans</p>
     * Get results of a daily rate plan schedule process
     */
    getBestAvailableRatePlansRaw(requestParameters: GetBestAvailableRatePlansRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BestAvailableRatePlansStatus>>;
    /**
     * Use this API to get the result of the process to set best available rate plans, which will include details of any data that has been failed to process. You can get the value of the summaryId from the Location header returned by the getBestAvailableRatePlansProcessStatus operation after the process is completed. <p><strong>OperationId:</strong>getBestAvailableRatePlans</p>
     * Get results of a daily rate plan schedule process
     */
    getBestAvailableRatePlans(requestParameters: GetBestAvailableRatePlansRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BestAvailableRatePlansStatus>;
    /**
     * Use this API to check whether the setting of best available rate plans process is completed. You can get value of summaryId from the Location header returned by the startSetBestAvailableRatePlansProcess operation.<p><strong>OperationId:</strong>getBestAvailableRatePlansProcessStatus</p>
     * Check status of setting best available rate plans process
     */
    getBestAvailableRatePlansProcessStatusRaw(requestParameters: GetBestAvailableRatePlansProcessStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Use this API to check whether the setting of best available rate plans process is completed. You can get value of summaryId from the Location header returned by the startSetBestAvailableRatePlansProcess operation.<p><strong>OperationId:</strong>getBestAvailableRatePlansProcessStatus</p>
     * Check status of setting best available rate plans process
     */
    getBestAvailableRatePlansProcessStatus(requestParameters: GetBestAvailableRatePlansProcessStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Use this API to get the result of the daily rate plans schedule process, which will include details of any data that has failed to process. You can get the value of the summaryId from the Location header returned by the getDailyRatePlanSchedulesProcessStatus operation after the process is completed. <p><strong>OperationId:</strong>getDailyRatePlanSchedules</p>
     * Get results of a daily rate plan schedule process
     */
    getDailyRatePlanSchedulesRaw(requestParameters: GetDailyRatePlanSchedulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DailyRatePlanSchedulesStatus>>;
    /**
     * Use this API to get the result of the daily rate plans schedule process, which will include details of any data that has failed to process. You can get the value of the summaryId from the Location header returned by the getDailyRatePlanSchedulesProcessStatus operation after the process is completed. <p><strong>OperationId:</strong>getDailyRatePlanSchedules</p>
     * Get results of a daily rate plan schedule process
     */
    getDailyRatePlanSchedules(requestParameters: GetDailyRatePlanSchedulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DailyRatePlanSchedulesStatus>;
    /**
     * Use this API to check whether the rate plan pricing schedule process is completed. You can get value of summaryId from the Location header returned by the startSetDailyRatePlanSchedulesProcess operation.<p><strong>OperationId:</strong>getDailyRatePlanSchedulesProcessStatus</p>
     * Check status of setting daily rate plan schedule process
     */
    getDailyRatePlanSchedulesProcessStatusRaw(requestParameters: GetDailyRatePlanSchedulesProcessStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Use this API to check whether the rate plan pricing schedule process is completed. You can get value of summaryId from the Location header returned by the startSetDailyRatePlanSchedulesProcess operation.<p><strong>OperationId:</strong>getDailyRatePlanSchedulesProcessStatus</p>
     * Check status of setting daily rate plan schedule process
     */
    getDailyRatePlanSchedulesProcessStatus(requestParameters: GetDailyRatePlanSchedulesProcessStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     *  <p><strong>OperationId:</strong>getHurdleRates</p>
     * This API facilitates fetching of status for configured hurdle rates.
     */
    getHurdleRatesRaw(requestParameters: GetHurdleRatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<HurdleRatesStatus>>;
    /**
     *  <p><strong>OperationId:</strong>getHurdleRates</p>
     * This API facilitates fetching of status for configured hurdle rates.
     */
    getHurdleRates(requestParameters: GetHurdleRatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<HurdleRatesStatus>;
    /**
     *  <p><strong>OperationId:</strong>getHurdleRatesProcessStatus</p>
     * This API returns the status of asynchronous process scheduled for given id.
     */
    getHurdleRatesProcessStatusRaw(requestParameters: GetHurdleRatesProcessStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     *  <p><strong>OperationId:</strong>getHurdleRatesProcessStatus</p>
     * This API returns the status of asynchronous process scheduled for given id.
     */
    getHurdleRatesProcessStatus(requestParameters: GetHurdleRatesProcessStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     *  <p><strong>OperationId:</strong>getRatePlansHeaders</p>
     * This API facilitates fetching of status for configured rate plans.
     */
    getRatePlansHeadersRaw(requestParameters: GetRatePlansHeadersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<HurdleRatesStatus>>;
    /**
     *  <p><strong>OperationId:</strong>getRatePlansHeaders</p>
     * This API facilitates fetching of status for configured rate plans.
     */
    getRatePlansHeaders(requestParameters: GetRatePlansHeadersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<HurdleRatesStatus>;
    /**
     *  <p><strong>OperationId:</strong>getRatePlansHeadersProcessStatus</p>
     * This API returns the status of asynchronous process scheduled for given id.
     */
    getRatePlansHeadersProcessStatusRaw(requestParameters: GetRatePlansHeadersProcessStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     *  <p><strong>OperationId:</strong>getRatePlansHeadersProcessStatus</p>
     * This API returns the status of asynchronous process scheduled for given id.
     */
    getRatePlansHeadersProcessStatus(requestParameters: GetRatePlansHeadersProcessStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     *  <p><strong>OperationId:</strong>startHurdleRatesProcess</p>
     * Operation to configure hurdle rates.
     */
    startHurdleRatesProcessRaw(requestParameters: StartHurdleRatesProcessRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     *  <p><strong>OperationId:</strong>startHurdleRatesProcess</p>
     * Operation to configure hurdle rates.
     */
    startHurdleRatesProcess(requestParameters: StartHurdleRatesProcessRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Use this API to start the process of adding and updating best available rate plans by day or by length of stay. Returns a header parameter Location that can be used in the getBestAvailableRatePlansProcessStatus operation. <p><strong>OperationId:</strong>startSetBestAvailableRatePlansProcess</p>
     * API to initiate setting best available rate plans process.
     */
    startSetBestAvailableRatePlansProcessRaw(requestParameters: StartSetBestAvailableRatePlansProcessRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Use this API to start the process of adding and updating best available rate plans by day or by length of stay. Returns a header parameter Location that can be used in the getBestAvailableRatePlansProcessStatus operation. <p><strong>OperationId:</strong>startSetBestAvailableRatePlansProcess</p>
     * API to initiate setting best available rate plans process.
     */
    startSetBestAvailableRatePlansProcess(requestParameters: StartSetBestAvailableRatePlansProcessRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Use this API to start the process to add and update daily rate plans&apos; pricing schedule. Returns a header parameter Location that can be used in the getDailyRatePlanSchedulesProcessStatus operation. <p><strong>OperationId:</strong>startSetDailyRatePlanSchedulesProcess</p>
     * API to initiate rate plans&apos; price update process
     */
    startSetDailyRatePlanSchedulesProcessRaw(requestParameters: StartSetDailyRatePlanSchedulesProcessRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Use this API to start the process to add and update daily rate plans&apos; pricing schedule. Returns a header parameter Location that can be used in the getDailyRatePlanSchedulesProcessStatus operation. <p><strong>OperationId:</strong>startSetDailyRatePlanSchedulesProcess</p>
     * API to initiate rate plans&apos; price update process
     */
    startSetDailyRatePlanSchedulesProcess(requestParameters: StartSetDailyRatePlanSchedulesProcessRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     *  <p><strong>OperationId:</strong>startSetRatePlansHeadersProcess</p>
     * Operation to start the update of rate header flags. Recommendation is not to exceed 250 rate codes in one request.
     */
    startSetRatePlansHeadersProcessRaw(requestParameters: StartSetRatePlansHeadersProcessOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     *  <p><strong>OperationId:</strong>startSetRatePlansHeadersProcess</p>
     * Operation to start the update of rate header flags. Recommendation is not to exceed 250 rate codes in one request.
     */
    startSetRatePlansHeadersProcess(requestParameters: StartSetRatePlansHeadersProcessOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
}
