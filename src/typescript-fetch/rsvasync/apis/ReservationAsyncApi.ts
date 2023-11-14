/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Asynchronous API
 * APIs to cater for Reservation Asynchronous functionality in OPERA Cloud. This includes viewing reservation data along with its revenue. <p>This API follows an async pattern where</p><ul><li>You make an initial request, which returns a Location header</li><li>You poll HEAD on the Location header returned to obtain the status of the process</li><li>Once the process completes HEAD will return in the Location header the URL that must be called to obtain the results of the process</li><li>You call the URL to obtain the results of the process</li></ul><br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
  Criteria,
  ExceptionDetailType,
  ReservationsDailySummaryDetails,
} from '../models/index';
import {
    CriteriaFromJSON,
    CriteriaToJSON,
    ExceptionDetailTypeFromJSON,
    ExceptionDetailTypeToJSON,
    ReservationsDailySummaryDetailsFromJSON,
    ReservationsDailySummaryDetailsToJSON,
} from '../models/index';

export interface GetReservationsDailySummaryRequest {
    summaryId?: string;
    extSystemCode?: string;
    hotelId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    acceptLanguage?: string;
}

export interface GetReservationsProcessStatusRequest {
    summaryId?: string;
    extSystemCode?: string;
    hotelId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    acceptLanguage?: string;
}

export interface StartReservationsDailySummaryProcessRequest {
    extSystemCode?: string;
    hotelId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    criteria?: Criteria;
    acceptLanguage?: string;
}

/**
 * 
 */
export class ReservationAsyncApi extends runtime.BaseAPI {

    /**
     * Use this API to retrieve a property&apos;s reservation daily summary within the dates given in the startReservationsDailySummaryProcess API request. You can get the value of the summaryId from the Location header returned by the getReservationsProcessStatus operation after the process is completed.  <p><strong>OperationId:</strong>getReservationsDailySummary</p>
     * Get results of Reservations Daily Summary
     */
    async getReservationsDailySummaryRaw(requestParameters: GetReservationsDailySummaryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ReservationsDailySummaryDetails>> {
        if (requestParameters.summaryId === null || requestParameters.summaryId === undefined) {
            throw new runtime.RequiredError('summaryId','Required parameter requestParameters.summaryId was null or undefined when calling getReservationsDailySummary.');
        }

        if (requestParameters.extSystemCode === null || requestParameters.extSystemCode === undefined) {
            throw new runtime.RequiredError('extSystemCode','Required parameter requestParameters.extSystemCode was null or undefined when calling getReservationsDailySummary.');
        }

        if (requestParameters.hotelId === null || requestParameters.hotelId === undefined) {
            throw new runtime.RequiredError('hotelId','Required parameter requestParameters.hotelId was null or undefined when calling getReservationsDailySummary.');
        }

        if (requestParameters.authorization === null || requestParameters.authorization === undefined) {
            throw new runtime.RequiredError('authorization','Required parameter requestParameters.authorization was null or undefined when calling getReservationsDailySummary.');
        }

        if (requestParameters.xAppKey === null || requestParameters.xAppKey === undefined) {
            throw new runtime.RequiredError('xAppKey','Required parameter requestParameters.xAppKey was null or undefined when calling getReservationsDailySummary.');
        }

        if (requestParameters.xHotelid === null || requestParameters.xHotelid === undefined) {
            throw new runtime.RequiredError('xHotelid','Required parameter requestParameters.xHotelid was null or undefined when calling getReservationsDailySummary.');
        }

        const queryParameters: any = {};

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

        if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
            headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
        }

        const response = await this.request({
            path: `/externalSystems/{extSystemCode}/hotels/{hotelId}/reservations/dailySummary/{summaryId}`.replace(`{${"summaryId"}}`, encodeURIComponent(String(requestParameters.summaryId))).replace(`{${"extSystemCode"}}`, encodeURIComponent(String(requestParameters.extSystemCode))).replace(`{${"hotelId"}}`, encodeURIComponent(String(requestParameters.hotelId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ReservationsDailySummaryDetailsFromJSON(jsonValue));
    }

    /**
     * Use this API to retrieve a property&apos;s reservation daily summary within the dates given in the startReservationsDailySummaryProcess API request. You can get the value of the summaryId from the Location header returned by the getReservationsProcessStatus operation after the process is completed.  <p><strong>OperationId:</strong>getReservationsDailySummary</p>
     * Get results of Reservations Daily Summary
     */
    async getReservationsDailySummary(requestParameters: GetReservationsDailySummaryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ReservationsDailySummaryDetails> {
        const response = await this.getReservationsDailySummaryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Use this to check whether the process to generate reservations daily summaries is complete. You can get value of summaryId from the Location header returned by the startReservationsDailySummaryProcess operation. <p><strong>OperationId:</strong>getReservationsProcessStatus</p>
     * Check status of Reservation Daily Summary process
     */
    async getReservationsProcessStatusRaw(requestParameters: GetReservationsProcessStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.summaryId === null || requestParameters.summaryId === undefined) {
            throw new runtime.RequiredError('summaryId','Required parameter requestParameters.summaryId was null or undefined when calling getReservationsProcessStatus.');
        }

        if (requestParameters.extSystemCode === null || requestParameters.extSystemCode === undefined) {
            throw new runtime.RequiredError('extSystemCode','Required parameter requestParameters.extSystemCode was null or undefined when calling getReservationsProcessStatus.');
        }

        if (requestParameters.hotelId === null || requestParameters.hotelId === undefined) {
            throw new runtime.RequiredError('hotelId','Required parameter requestParameters.hotelId was null or undefined when calling getReservationsProcessStatus.');
        }

        if (requestParameters.authorization === null || requestParameters.authorization === undefined) {
            throw new runtime.RequiredError('authorization','Required parameter requestParameters.authorization was null or undefined when calling getReservationsProcessStatus.');
        }

        if (requestParameters.xAppKey === null || requestParameters.xAppKey === undefined) {
            throw new runtime.RequiredError('xAppKey','Required parameter requestParameters.xAppKey was null or undefined when calling getReservationsProcessStatus.');
        }

        if (requestParameters.xHotelid === null || requestParameters.xHotelid === undefined) {
            throw new runtime.RequiredError('xHotelid','Required parameter requestParameters.xHotelid was null or undefined when calling getReservationsProcessStatus.');
        }

        const queryParameters: any = {};

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

        if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
            headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
        }

        const response = await this.request({
            path: `/externalSystems/{extSystemCode}/hotels/{hotelId}/reservations/dailySummary/{summaryId}`.replace(`{${"summaryId"}}`, encodeURIComponent(String(requestParameters.summaryId))).replace(`{${"extSystemCode"}}`, encodeURIComponent(String(requestParameters.extSystemCode))).replace(`{${"hotelId"}}`, encodeURIComponent(String(requestParameters.hotelId))),
            method: 'HEAD',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Use this to check whether the process to generate reservations daily summaries is complete. You can get value of summaryId from the Location header returned by the startReservationsDailySummaryProcess operation. <p><strong>OperationId:</strong>getReservationsProcessStatus</p>
     * Check status of Reservation Daily Summary process
     */
    async getReservationsProcessStatus(requestParameters: GetReservationsProcessStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.getReservationsProcessStatusRaw(requestParameters, initOverrides);
    }

    /**
     * Use this API to get a reservation daily summary for a property within a given date range. Maximum limit of date range is 94 days, but the recommendation is to use a date range proportionate to the size of the hotel. Returns a header parameter Location that can be used in the getReservationsProcessStatus operation.  Use event driven APIs (see https://docs.oracle.com/cd/F29336_01/doc.201/f27480/c_business_events.htm#OHIPU-BusinessEvents-F0AC1F1C) to get real time reservation updates.  <p><strong>OperationId:</strong>startReservationsDailySummaryProcess</p>
     * Fetch past, present and future Reservations Daily Summary
     */
    async startReservationsDailySummaryProcessRaw(requestParameters: StartReservationsDailySummaryProcessRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.extSystemCode === null || requestParameters.extSystemCode === undefined) {
            throw new runtime.RequiredError('extSystemCode','Required parameter requestParameters.extSystemCode was null or undefined when calling startReservationsDailySummaryProcess.');
        }

        if (requestParameters.hotelId === null || requestParameters.hotelId === undefined) {
            throw new runtime.RequiredError('hotelId','Required parameter requestParameters.hotelId was null or undefined when calling startReservationsDailySummaryProcess.');
        }

        if (requestParameters.authorization === null || requestParameters.authorization === undefined) {
            throw new runtime.RequiredError('authorization','Required parameter requestParameters.authorization was null or undefined when calling startReservationsDailySummaryProcess.');
        }

        if (requestParameters.xAppKey === null || requestParameters.xAppKey === undefined) {
            throw new runtime.RequiredError('xAppKey','Required parameter requestParameters.xAppKey was null or undefined when calling startReservationsDailySummaryProcess.');
        }

        if (requestParameters.xHotelid === null || requestParameters.xHotelid === undefined) {
            throw new runtime.RequiredError('xHotelid','Required parameter requestParameters.xHotelid was null or undefined when calling startReservationsDailySummaryProcess.');
        }

        if (requestParameters.criteria === null || requestParameters.criteria === undefined) {
            throw new runtime.RequiredError('criteria','Required parameter requestParameters.criteria was null or undefined when calling startReservationsDailySummaryProcess.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json;charset=UTF-8';

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['authorization'] = String(requestParameters.authorization);
        }

        if (requestParameters.xAppKey !== undefined && requestParameters.xAppKey !== null) {
            headerParameters['x-app-key'] = String(requestParameters.xAppKey);
        }

        if (requestParameters.xHotelid !== undefined && requestParameters.xHotelid !== null) {
            headerParameters['x-hotelid'] = String(requestParameters.xHotelid);
        }

        if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
            headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
        }

        const response = await this.request({
            path: `/externalSystems/{extSystemCode}/hotels/{hotelId}/reservations/dailySummary`.replace(`{${"extSystemCode"}}`, encodeURIComponent(String(requestParameters.extSystemCode))).replace(`{${"hotelId"}}`, encodeURIComponent(String(requestParameters.hotelId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CriteriaToJSON(requestParameters.criteria),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Use this API to get a reservation daily summary for a property within a given date range. Maximum limit of date range is 94 days, but the recommendation is to use a date range proportionate to the size of the hotel. Returns a header parameter Location that can be used in the getReservationsProcessStatus operation.  Use event driven APIs (see https://docs.oracle.com/cd/F29336_01/doc.201/f27480/c_business_events.htm#OHIPU-BusinessEvents-F0AC1F1C) to get real time reservation updates.  <p><strong>OperationId:</strong>startReservationsDailySummaryProcess</p>
     * Fetch past, present and future Reservations Daily Summary
     */
    async startReservationsDailySummaryProcess(requestParameters: StartReservationsDailySummaryProcessRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.startReservationsDailySummaryProcessRaw(requestParameters, initOverrides);
    }

}
