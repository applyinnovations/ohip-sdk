/*
OPERA Cloud Reservation Asynchronous API

APIs to cater for Reservation Asynchronous functionality in OPERA Cloud. This includes viewing reservation data along with its revenue. <p>This API follows an async pattern where</p><ul><li>You make an initial request, which returns a Location header</li><li>You poll HEAD on the Location header returned to obtain the status of the process</li><li>Once the process completes HEAD will return in the Location header the URL that must be called to obtain the results of the process</li><li>You call the URL to obtain the results of the process</li></ul><br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsvasync

import (
	"bytes"
	"context"
	"io"
	"net/http"
	"net/url"
	"strings"
)


// ReservationAsyncAPIService ReservationAsyncAPI service
type ReservationAsyncAPIService service

type ReservationAsyncAPIGetReservationsDailySummaryRequest struct {
	ctx context.Context
	ApiService *ReservationAsyncAPIService
	summaryId string
	extSystemCode string
	hotelId string
	authorization *string
	xAppKey *string
	xHotelid *string
	acceptLanguage *string
}

// Bearer token that needs to be passed which is generated post user authentication
func (r ReservationAsyncAPIGetReservationsDailySummaryRequest) Authorization(authorization string) ReservationAsyncAPIGetReservationsDailySummaryRequest {
	r.authorization = &authorization
	return r
}

// Client or Partner&#39;s Application Key
func (r ReservationAsyncAPIGetReservationsDailySummaryRequest) XAppKey(xAppKey string) ReservationAsyncAPIGetReservationsDailySummaryRequest {
	r.xAppKey = &xAppKey
	return r
}

// Mandatory parameter to identify the hotel code where the end user is logged in
func (r ReservationAsyncAPIGetReservationsDailySummaryRequest) XHotelid(xHotelid string) ReservationAsyncAPIGetReservationsDailySummaryRequest {
	r.xHotelid = &xHotelid
	return r
}

// Language code
func (r ReservationAsyncAPIGetReservationsDailySummaryRequest) AcceptLanguage(acceptLanguage string) ReservationAsyncAPIGetReservationsDailySummaryRequest {
	r.acceptLanguage = &acceptLanguage
	return r
}

func (r ReservationAsyncAPIGetReservationsDailySummaryRequest) Execute() (*ReservationsDailySummaryDetails, *http.Response, error) {
	return r.ApiService.GetReservationsDailySummaryExecute(r)
}

/*
GetReservationsDailySummary Get results of Reservations Daily Summary

Use this API to retrieve a property&apos;s reservation daily summary within the dates given in the startReservationsDailySummaryProcess API request. You can get the value of the summaryId from the Location header returned by the getReservationsProcessStatus operation after the process is completed.  <p><strong>OperationId:</strong>getReservationsDailySummary</p>

 @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @param summaryId
 @param extSystemCode
 @param hotelId
 @return ReservationAsyncAPIGetReservationsDailySummaryRequest
*/
func (a *ReservationAsyncAPIService) GetReservationsDailySummary(ctx context.Context, summaryId string, extSystemCode string, hotelId string) ReservationAsyncAPIGetReservationsDailySummaryRequest {
	return ReservationAsyncAPIGetReservationsDailySummaryRequest{
		ApiService: a,
		ctx: ctx,
		summaryId: summaryId,
		extSystemCode: extSystemCode,
		hotelId: hotelId,
	}
}

// Execute executes the request
//  @return ReservationsDailySummaryDetails
func (a *ReservationAsyncAPIService) GetReservationsDailySummaryExecute(r ReservationAsyncAPIGetReservationsDailySummaryRequest) (*ReservationsDailySummaryDetails, *http.Response, error) {
	var (
		localVarHTTPMethod   = http.MethodGet
		localVarPostBody     interface{}
		formFiles            []formFile
		localVarReturnValue  *ReservationsDailySummaryDetails
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "ReservationAsyncAPIService.GetReservationsDailySummary")
	if err != nil {
		return localVarReturnValue, nil, &GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/externalSystems/{extSystemCode}/hotels/{hotelId}/reservations/dailySummary/{summaryId}"
	localVarPath = strings.Replace(localVarPath, "{"+"summaryId"+"}", url.PathEscape(parameterValueToString(r.summaryId, "summaryId")), -1)
	localVarPath = strings.Replace(localVarPath, "{"+"extSystemCode"+"}", url.PathEscape(parameterValueToString(r.extSystemCode, "extSystemCode")), -1)
	localVarPath = strings.Replace(localVarPath, "{"+"hotelId"+"}", url.PathEscape(parameterValueToString(r.hotelId, "hotelId")), -1)

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := url.Values{}
	localVarFormParams := url.Values{}
	if strlen(r.summaryId) < 1 {
		return localVarReturnValue, nil, reportError("summaryId must have at least 1 elements")
	}
	if strlen(r.summaryId) > 2000 {
		return localVarReturnValue, nil, reportError("summaryId must have less than 2000 elements")
	}
	if strlen(r.extSystemCode) < 1 {
		return localVarReturnValue, nil, reportError("extSystemCode must have at least 1 elements")
	}
	if strlen(r.extSystemCode) > 2000 {
		return localVarReturnValue, nil, reportError("extSystemCode must have less than 2000 elements")
	}
	if strlen(r.hotelId) < 1 {
		return localVarReturnValue, nil, reportError("hotelId must have at least 1 elements")
	}
	if strlen(r.hotelId) > 2000 {
		return localVarReturnValue, nil, reportError("hotelId must have less than 2000 elements")
	}

	// to determine the Content-Type header
	localVarHTTPContentTypes := []string{}

	// set Content-Type header
	localVarHTTPContentType := selectHeaderContentType(localVarHTTPContentTypes)
	if localVarHTTPContentType != "" {
		localVarHeaderParams["Content-Type"] = localVarHTTPContentType
	}

	// to determine the Accept header
	localVarHTTPHeaderAccepts := []string{"application/json;charset=UTF-8"}

	// set Accept header
	localVarHTTPHeaderAccept := selectHeaderAccept(localVarHTTPHeaderAccepts)
	if localVarHTTPHeaderAccept != "" {
		localVarHeaderParams["Accept"] = localVarHTTPHeaderAccept
	}
	if r.acceptLanguage != nil {
		parameterAddToHeaderOrQuery(localVarHeaderParams, "Accept-Language", r.acceptLanguage, "")
	}
	req, err := a.client.prepareRequest(r.ctx, localVarPath, localVarHTTPMethod, localVarPostBody, localVarHeaderParams, localVarQueryParams, localVarFormParams, formFiles)
	if err != nil {
		return localVarReturnValue, nil, err
	}

	localVarHTTPResponse, err := a.client.callAPI(req)
	if err != nil || localVarHTTPResponse == nil {
		return localVarReturnValue, localVarHTTPResponse, err
	}

	localVarBody, err := io.ReadAll(localVarHTTPResponse.Body)
	localVarHTTPResponse.Body.Close()
	localVarHTTPResponse.Body = io.NopCloser(bytes.NewBuffer(localVarBody))
	if err != nil {
		return localVarReturnValue, localVarHTTPResponse, err
	}

	if a.client.cfg.ResponseMiddleware != nil {
		err = a.client.cfg.ResponseMiddleware(localVarHTTPResponse, localVarBody)
		if err != nil {
			return localVarReturnValue, localVarHTTPResponse, err
		}
	}

	if localVarHTTPResponse.StatusCode >= 300 {
		newErr := &GenericOpenAPIError{
			body:  localVarBody,
			error: localVarHTTPResponse.Status,
		}
		if localVarHTTPResponse.StatusCode == 400 {
			var v ExceptionDetailType
			err = a.client.decode(&v, localVarBody, localVarHTTPResponse.Header.Get("Content-Type"))
			if err != nil {
				newErr.error = err.Error()
				return localVarReturnValue, localVarHTTPResponse, newErr
			}
					newErr.error = formatErrorMessage(localVarHTTPResponse.Status, &v)
					newErr.model = v
			return localVarReturnValue, localVarHTTPResponse, newErr
		}
		if localVarHTTPResponse.StatusCode == 404 {
			var v ExceptionDetailType
			err = a.client.decode(&v, localVarBody, localVarHTTPResponse.Header.Get("Content-Type"))
			if err != nil {
				newErr.error = err.Error()
				return localVarReturnValue, localVarHTTPResponse, newErr
			}
					newErr.error = formatErrorMessage(localVarHTTPResponse.Status, &v)
					newErr.model = v
			return localVarReturnValue, localVarHTTPResponse, newErr
		}
		if localVarHTTPResponse.StatusCode == 500 {
			var v ExceptionDetailType
			err = a.client.decode(&v, localVarBody, localVarHTTPResponse.Header.Get("Content-Type"))
			if err != nil {
				newErr.error = err.Error()
				return localVarReturnValue, localVarHTTPResponse, newErr
			}
					newErr.error = formatErrorMessage(localVarHTTPResponse.Status, &v)
					newErr.model = v
			return localVarReturnValue, localVarHTTPResponse, newErr
		}
		return localVarReturnValue, localVarHTTPResponse, newErr
	}

	err = a.client.decode(&localVarReturnValue, localVarBody, localVarHTTPResponse.Header.Get("Content-Type"))
	if err != nil {
		newErr := &GenericOpenAPIError{
			body:  localVarBody,
			error: err.Error(),
		}
		return localVarReturnValue, localVarHTTPResponse, newErr
	}

	return localVarReturnValue, localVarHTTPResponse, nil
}

type ReservationAsyncAPIGetReservationsProcessStatusRequest struct {
	ctx context.Context
	ApiService *ReservationAsyncAPIService
	summaryId string
	extSystemCode string
	hotelId string
	authorization *string
	xAppKey *string
	xHotelid *string
	acceptLanguage *string
}

// Bearer token that needs to be passed which is generated post user authentication
func (r ReservationAsyncAPIGetReservationsProcessStatusRequest) Authorization(authorization string) ReservationAsyncAPIGetReservationsProcessStatusRequest {
	r.authorization = &authorization
	return r
}

// Client or Partner&#39;s Application Key
func (r ReservationAsyncAPIGetReservationsProcessStatusRequest) XAppKey(xAppKey string) ReservationAsyncAPIGetReservationsProcessStatusRequest {
	r.xAppKey = &xAppKey
	return r
}

// Mandatory parameter to identify the hotel code where the end user is logged in
func (r ReservationAsyncAPIGetReservationsProcessStatusRequest) XHotelid(xHotelid string) ReservationAsyncAPIGetReservationsProcessStatusRequest {
	r.xHotelid = &xHotelid
	return r
}

// Language code
func (r ReservationAsyncAPIGetReservationsProcessStatusRequest) AcceptLanguage(acceptLanguage string) ReservationAsyncAPIGetReservationsProcessStatusRequest {
	r.acceptLanguage = &acceptLanguage
	return r
}

func (r ReservationAsyncAPIGetReservationsProcessStatusRequest) Execute() (*http.Response, error) {
	return r.ApiService.GetReservationsProcessStatusExecute(r)
}

/*
GetReservationsProcessStatus Check status of Reservation Daily Summary process

Use this to check whether the process to generate reservations daily summaries is complete. You can get value of summaryId from the Location header returned by the startReservationsDailySummaryProcess operation. <p><strong>OperationId:</strong>getReservationsProcessStatus</p>

 @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @param summaryId
 @param extSystemCode
 @param hotelId
 @return ReservationAsyncAPIGetReservationsProcessStatusRequest
*/
func (a *ReservationAsyncAPIService) GetReservationsProcessStatus(ctx context.Context, summaryId string, extSystemCode string, hotelId string) ReservationAsyncAPIGetReservationsProcessStatusRequest {
	return ReservationAsyncAPIGetReservationsProcessStatusRequest{
		ApiService: a,
		ctx: ctx,
		summaryId: summaryId,
		extSystemCode: extSystemCode,
		hotelId: hotelId,
	}
}

// Execute executes the request
func (a *ReservationAsyncAPIService) GetReservationsProcessStatusExecute(r ReservationAsyncAPIGetReservationsProcessStatusRequest) (*http.Response, error) {
	var (
		localVarHTTPMethod   = http.MethodHead
		localVarPostBody     interface{}
		formFiles            []formFile
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "ReservationAsyncAPIService.GetReservationsProcessStatus")
	if err != nil {
		return nil, &GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/externalSystems/{extSystemCode}/hotels/{hotelId}/reservations/dailySummary/{summaryId}"
	localVarPath = strings.Replace(localVarPath, "{"+"summaryId"+"}", url.PathEscape(parameterValueToString(r.summaryId, "summaryId")), -1)
	localVarPath = strings.Replace(localVarPath, "{"+"extSystemCode"+"}", url.PathEscape(parameterValueToString(r.extSystemCode, "extSystemCode")), -1)
	localVarPath = strings.Replace(localVarPath, "{"+"hotelId"+"}", url.PathEscape(parameterValueToString(r.hotelId, "hotelId")), -1)

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := url.Values{}
	localVarFormParams := url.Values{}
	if strlen(r.summaryId) < 1 {
		return nil, reportError("summaryId must have at least 1 elements")
	}
	if strlen(r.summaryId) > 2000 {
		return nil, reportError("summaryId must have less than 2000 elements")
	}
	if strlen(r.extSystemCode) < 1 {
		return nil, reportError("extSystemCode must have at least 1 elements")
	}
	if strlen(r.extSystemCode) > 2000 {
		return nil, reportError("extSystemCode must have less than 2000 elements")
	}
	if strlen(r.hotelId) < 1 {
		return nil, reportError("hotelId must have at least 1 elements")
	}
	if strlen(r.hotelId) > 2000 {
		return nil, reportError("hotelId must have less than 2000 elements")
	}

	// to determine the Content-Type header
	localVarHTTPContentTypes := []string{}

	// set Content-Type header
	localVarHTTPContentType := selectHeaderContentType(localVarHTTPContentTypes)
	if localVarHTTPContentType != "" {
		localVarHeaderParams["Content-Type"] = localVarHTTPContentType
	}

	// to determine the Accept header
	localVarHTTPHeaderAccepts := []string{}

	// set Accept header
	localVarHTTPHeaderAccept := selectHeaderAccept(localVarHTTPHeaderAccepts)
	if localVarHTTPHeaderAccept != "" {
		localVarHeaderParams["Accept"] = localVarHTTPHeaderAccept
	}
	if r.acceptLanguage != nil {
		parameterAddToHeaderOrQuery(localVarHeaderParams, "Accept-Language", r.acceptLanguage, "")
	}
	req, err := a.client.prepareRequest(r.ctx, localVarPath, localVarHTTPMethod, localVarPostBody, localVarHeaderParams, localVarQueryParams, localVarFormParams, formFiles)
	if err != nil {
		return nil, err
	}

	localVarHTTPResponse, err := a.client.callAPI(req)
	if err != nil || localVarHTTPResponse == nil {
		return localVarHTTPResponse, err
	}

	localVarBody, err := io.ReadAll(localVarHTTPResponse.Body)
	localVarHTTPResponse.Body.Close()
	localVarHTTPResponse.Body = io.NopCloser(bytes.NewBuffer(localVarBody))
	if err != nil {
		return localVarHTTPResponse, err
	}

	if a.client.cfg.ResponseMiddleware != nil {
		err = a.client.cfg.ResponseMiddleware(localVarHTTPResponse, localVarBody)
		if err != nil {
			return localVarHTTPResponse, err
		}
	}

	if localVarHTTPResponse.StatusCode >= 300 {
		newErr := &GenericOpenAPIError{
			body:  localVarBody,
			error: localVarHTTPResponse.Status,
		}
		return localVarHTTPResponse, newErr
	}

	return localVarHTTPResponse, nil
}

type ReservationAsyncAPIStartReservationsDailySummaryProcessRequest struct {
	ctx context.Context
	ApiService *ReservationAsyncAPIService
	extSystemCode string
	hotelId string
	authorization *string
	xAppKey *string
	xHotelid *string
	criteria *Criteria
	acceptLanguage *string
}

// Bearer token that needs to be passed which is generated post user authentication
func (r ReservationAsyncAPIStartReservationsDailySummaryProcessRequest) Authorization(authorization string) ReservationAsyncAPIStartReservationsDailySummaryProcessRequest {
	r.authorization = &authorization
	return r
}

// Client or Partner&#39;s Application Key
func (r ReservationAsyncAPIStartReservationsDailySummaryProcessRequest) XAppKey(xAppKey string) ReservationAsyncAPIStartReservationsDailySummaryProcessRequest {
	r.xAppKey = &xAppKey
	return r
}

// Mandatory parameter to identify the hotel code where the end user is logged in
func (r ReservationAsyncAPIStartReservationsDailySummaryProcessRequest) XHotelid(xHotelid string) ReservationAsyncAPIStartReservationsDailySummaryProcessRequest {
	r.xHotelid = &xHotelid
	return r
}

// Request object for fetching future reservations asynchronously.
func (r ReservationAsyncAPIStartReservationsDailySummaryProcessRequest) Criteria(criteria Criteria) ReservationAsyncAPIStartReservationsDailySummaryProcessRequest {
	r.criteria = &criteria
	return r
}

// Language code
func (r ReservationAsyncAPIStartReservationsDailySummaryProcessRequest) AcceptLanguage(acceptLanguage string) ReservationAsyncAPIStartReservationsDailySummaryProcessRequest {
	r.acceptLanguage = &acceptLanguage
	return r
}

func (r ReservationAsyncAPIStartReservationsDailySummaryProcessRequest) Execute() (*http.Response, error) {
	return r.ApiService.StartReservationsDailySummaryProcessExecute(r)
}

/*
StartReservationsDailySummaryProcess Fetch past, present and future Reservations Daily Summary

Use this API to get a reservation daily summary for a property within a given date range. Maximum limit of date range is 94 days, but the recommendation is to use a date range proportionate to the size of the hotel. Returns a header parameter Location that can be used in the getReservationsProcessStatus operation.  Use event driven APIs (see https://docs.oracle.com/cd/F29336_01/doc.201/f27480/c_business_events.htm#OHIPU-BusinessEvents-F0AC1F1C) to get real time reservation updates.  <p><strong>OperationId:</strong>startReservationsDailySummaryProcess</p>

 @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @param extSystemCode
 @param hotelId
 @return ReservationAsyncAPIStartReservationsDailySummaryProcessRequest
*/
func (a *ReservationAsyncAPIService) StartReservationsDailySummaryProcess(ctx context.Context, extSystemCode string, hotelId string) ReservationAsyncAPIStartReservationsDailySummaryProcessRequest {
	return ReservationAsyncAPIStartReservationsDailySummaryProcessRequest{
		ApiService: a,
		ctx: ctx,
		extSystemCode: extSystemCode,
		hotelId: hotelId,
	}
}

// Execute executes the request
func (a *ReservationAsyncAPIService) StartReservationsDailySummaryProcessExecute(r ReservationAsyncAPIStartReservationsDailySummaryProcessRequest) (*http.Response, error) {
	var (
		localVarHTTPMethod   = http.MethodPost
		localVarPostBody     interface{}
		formFiles            []formFile
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "ReservationAsyncAPIService.StartReservationsDailySummaryProcess")
	if err != nil {
		return nil, &GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/externalSystems/{extSystemCode}/hotels/{hotelId}/reservations/dailySummary"
	localVarPath = strings.Replace(localVarPath, "{"+"extSystemCode"+"}", url.PathEscape(parameterValueToString(r.extSystemCode, "extSystemCode")), -1)
	localVarPath = strings.Replace(localVarPath, "{"+"hotelId"+"}", url.PathEscape(parameterValueToString(r.hotelId, "hotelId")), -1)

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := url.Values{}
	localVarFormParams := url.Values{}
	if strlen(r.extSystemCode) < 1 {
		return nil, reportError("extSystemCode must have at least 1 elements")
	}
	if strlen(r.extSystemCode) > 2000 {
		return nil, reportError("extSystemCode must have less than 2000 elements")
	}
	if strlen(r.hotelId) < 1 {
		return nil, reportError("hotelId must have at least 1 elements")
	}
	if strlen(r.hotelId) > 2000 {
		return nil, reportError("hotelId must have less than 2000 elements")
	}

	// to determine the Content-Type header
	localVarHTTPContentTypes := []string{"application/json;charset=UTF-8"}

	// set Content-Type header
	localVarHTTPContentType := selectHeaderContentType(localVarHTTPContentTypes)
	if localVarHTTPContentType != "" {
		localVarHeaderParams["Content-Type"] = localVarHTTPContentType
	}

	// to determine the Accept header
	localVarHTTPHeaderAccepts := []string{"application/json;charset=UTF-8"}

	// set Accept header
	localVarHTTPHeaderAccept := selectHeaderAccept(localVarHTTPHeaderAccepts)
	if localVarHTTPHeaderAccept != "" {
		localVarHeaderParams["Accept"] = localVarHTTPHeaderAccept
	}
	if r.acceptLanguage != nil {
		parameterAddToHeaderOrQuery(localVarHeaderParams, "Accept-Language", r.acceptLanguage, "")
	}
	// body params
	localVarPostBody = r.criteria
	req, err := a.client.prepareRequest(r.ctx, localVarPath, localVarHTTPMethod, localVarPostBody, localVarHeaderParams, localVarQueryParams, localVarFormParams, formFiles)
	if err != nil {
		return nil, err
	}

	localVarHTTPResponse, err := a.client.callAPI(req)
	if err != nil || localVarHTTPResponse == nil {
		return localVarHTTPResponse, err
	}

	localVarBody, err := io.ReadAll(localVarHTTPResponse.Body)
	localVarHTTPResponse.Body.Close()
	localVarHTTPResponse.Body = io.NopCloser(bytes.NewBuffer(localVarBody))
	if err != nil {
		return localVarHTTPResponse, err
	}

	if a.client.cfg.ResponseMiddleware != nil {
		err = a.client.cfg.ResponseMiddleware(localVarHTTPResponse, localVarBody)
		if err != nil {
			return localVarHTTPResponse, err
		}
	}

	if localVarHTTPResponse.StatusCode >= 300 {
		newErr := &GenericOpenAPIError{
			body:  localVarBody,
			error: localVarHTTPResponse.Status,
		}
		if localVarHTTPResponse.StatusCode == 400 {
			var v ExceptionDetailType
			err = a.client.decode(&v, localVarBody, localVarHTTPResponse.Header.Get("Content-Type"))
			if err != nil {
				newErr.error = err.Error()
				return localVarHTTPResponse, newErr
			}
					newErr.error = formatErrorMessage(localVarHTTPResponse.Status, &v)
					newErr.model = v
			return localVarHTTPResponse, newErr
		}
		if localVarHTTPResponse.StatusCode == 500 {
			var v ExceptionDetailType
			err = a.client.decode(&v, localVarBody, localVarHTTPResponse.Header.Get("Content-Type"))
			if err != nil {
				newErr.error = err.Error()
				return localVarHTTPResponse, newErr
			}
					newErr.error = formatErrorMessage(localVarHTTPResponse.Status, &v)
					newErr.model = v
			return localVarHTTPResponse, newErr
		}
		return localVarHTTPResponse, newErr
	}

	return localVarHTTPResponse, nil
}