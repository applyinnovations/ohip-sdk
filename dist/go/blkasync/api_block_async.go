/*
OPERA Cloud Block Reservation Asynchronous API

APIs to cater Block Reservation related asynchronous functionality in OPERA.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blkasync

import (
	"bytes"
	"context"
	"io"
	"net/http"
	"net/url"
	"strings"
)


// BlockAsyncAPIService BlockAsyncAPI service
type BlockAsyncAPIService service

type BlockAsyncAPIGetBlockAllocationSummaryRequest struct {
	ctx context.Context
	ApiService *BlockAsyncAPIService
	requestId string
	hotelId string
	extSystemCode string
	authorization *string
	xAppKey *string
	xHotelid *string
	acceptLanguage *string
}

// Bearer token that needs to be passed which is generated post user authentication
func (r BlockAsyncAPIGetBlockAllocationSummaryRequest) Authorization(authorization string) BlockAsyncAPIGetBlockAllocationSummaryRequest {
	r.authorization = &authorization
	return r
}

// Client or Partner&#39;s Application Key
func (r BlockAsyncAPIGetBlockAllocationSummaryRequest) XAppKey(xAppKey string) BlockAsyncAPIGetBlockAllocationSummaryRequest {
	r.xAppKey = &xAppKey
	return r
}

// Mandatory parameter to identify the hotel code where the end user is logged in
func (r BlockAsyncAPIGetBlockAllocationSummaryRequest) XHotelid(xHotelid string) BlockAsyncAPIGetBlockAllocationSummaryRequest {
	r.xHotelid = &xHotelid
	return r
}

// Language code
func (r BlockAsyncAPIGetBlockAllocationSummaryRequest) AcceptLanguage(acceptLanguage string) BlockAsyncAPIGetBlockAllocationSummaryRequest {
	r.acceptLanguage = &acceptLanguage
	return r
}

func (r BlockAsyncAPIGetBlockAllocationSummaryRequest) Execute() ([]BlockAllocationSummaryType, *http.Response, error) {
	return r.ApiService.GetBlockAllocationSummaryExecute(r)
}

/*
GetBlockAllocationSummary This API returns a hotel's block allocation summary for a scheduled process.

This API will fetch Block allocation information for a hotel, and specified date range.  The block allocated inventory, rates and room type statistics are returned as part of the response. <p><strong>OperationId:</strong>getBlockAllocationSummary</p>

 @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @param requestId
 @param hotelId
 @param extSystemCode
 @return BlockAsyncAPIGetBlockAllocationSummaryRequest
*/
func (a *BlockAsyncAPIService) GetBlockAllocationSummary(ctx context.Context, requestId string, hotelId string, extSystemCode string) BlockAsyncAPIGetBlockAllocationSummaryRequest {
	return BlockAsyncAPIGetBlockAllocationSummaryRequest{
		ApiService: a,
		ctx: ctx,
		requestId: requestId,
		hotelId: hotelId,
		extSystemCode: extSystemCode,
	}
}

// Execute executes the request
//  @return []BlockAllocationSummaryType
func (a *BlockAsyncAPIService) GetBlockAllocationSummaryExecute(r BlockAsyncAPIGetBlockAllocationSummaryRequest) ([]BlockAllocationSummaryType, *http.Response, error) {
	var (
		localVarHTTPMethod   = http.MethodGet
		localVarPostBody     interface{}
		formFiles            []formFile
		localVarReturnValue  []BlockAllocationSummaryType
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "BlockAsyncAPIService.GetBlockAllocationSummary")
	if err != nil {
		return localVarReturnValue, nil, &GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/externalSystems/{extSystemCode}/hotels/{hotelId}/blocks/allocationSummary/{requestId}"
	localVarPath = strings.Replace(localVarPath, "{"+"requestId"+"}", url.PathEscape(parameterValueToString(r.requestId, "requestId")), -1)
	localVarPath = strings.Replace(localVarPath, "{"+"hotelId"+"}", url.PathEscape(parameterValueToString(r.hotelId, "hotelId")), -1)
	localVarPath = strings.Replace(localVarPath, "{"+"extSystemCode"+"}", url.PathEscape(parameterValueToString(r.extSystemCode, "extSystemCode")), -1)

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := url.Values{}
	localVarFormParams := url.Values{}
	if strlen(r.requestId) < 1 {
		return localVarReturnValue, nil, reportError("requestId must have at least 1 elements")
	}
	if strlen(r.requestId) > 2000 {
		return localVarReturnValue, nil, reportError("requestId must have less than 2000 elements")
	}
	if strlen(r.hotelId) < 1 {
		return localVarReturnValue, nil, reportError("hotelId must have at least 1 elements")
	}
	if strlen(r.hotelId) > 2000 {
		return localVarReturnValue, nil, reportError("hotelId must have less than 2000 elements")
	}
	if strlen(r.extSystemCode) < 1 {
		return localVarReturnValue, nil, reportError("extSystemCode must have at least 1 elements")
	}
	if strlen(r.extSystemCode) > 2000 {
		return localVarReturnValue, nil, reportError("extSystemCode must have less than 2000 elements")
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

type BlockAsyncAPIGetBlockAllocationSummaryProcessStatusRequest struct {
	ctx context.Context
	ApiService *BlockAsyncAPIService
	requestId string
	extSystemCode string
	hotelId string
	authorization *string
	xAppKey *string
	xHotelid *string
	acceptLanguage *string
}

// Bearer token that needs to be passed which is generated post user authentication
func (r BlockAsyncAPIGetBlockAllocationSummaryProcessStatusRequest) Authorization(authorization string) BlockAsyncAPIGetBlockAllocationSummaryProcessStatusRequest {
	r.authorization = &authorization
	return r
}

// Client or Partner&#39;s Application Key
func (r BlockAsyncAPIGetBlockAllocationSummaryProcessStatusRequest) XAppKey(xAppKey string) BlockAsyncAPIGetBlockAllocationSummaryProcessStatusRequest {
	r.xAppKey = &xAppKey
	return r
}

// Mandatory parameter to identify the hotel code where the end user is logged in
func (r BlockAsyncAPIGetBlockAllocationSummaryProcessStatusRequest) XHotelid(xHotelid string) BlockAsyncAPIGetBlockAllocationSummaryProcessStatusRequest {
	r.xHotelid = &xHotelid
	return r
}

// Language code
func (r BlockAsyncAPIGetBlockAllocationSummaryProcessStatusRequest) AcceptLanguage(acceptLanguage string) BlockAsyncAPIGetBlockAllocationSummaryProcessStatusRequest {
	r.acceptLanguage = &acceptLanguage
	return r
}

func (r BlockAsyncAPIGetBlockAllocationSummaryProcessStatusRequest) Execute() (*http.Response, error) {
	return r.ApiService.GetBlockAllocationSummaryProcessStatusExecute(r)
}

/*
GetBlockAllocationSummaryProcessStatus This API returns the status of asynchronous process scheduled for given id.

 <p><strong>OperationId:</strong>getBlockAllocationSummaryProcessStatus</p>

 @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @param requestId
 @param extSystemCode
 @param hotelId
 @return BlockAsyncAPIGetBlockAllocationSummaryProcessStatusRequest
*/
func (a *BlockAsyncAPIService) GetBlockAllocationSummaryProcessStatus(ctx context.Context, requestId string, extSystemCode string, hotelId string) BlockAsyncAPIGetBlockAllocationSummaryProcessStatusRequest {
	return BlockAsyncAPIGetBlockAllocationSummaryProcessStatusRequest{
		ApiService: a,
		ctx: ctx,
		requestId: requestId,
		extSystemCode: extSystemCode,
		hotelId: hotelId,
	}
}

// Execute executes the request
func (a *BlockAsyncAPIService) GetBlockAllocationSummaryProcessStatusExecute(r BlockAsyncAPIGetBlockAllocationSummaryProcessStatusRequest) (*http.Response, error) {
	var (
		localVarHTTPMethod   = http.MethodHead
		localVarPostBody     interface{}
		formFiles            []formFile
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "BlockAsyncAPIService.GetBlockAllocationSummaryProcessStatus")
	if err != nil {
		return nil, &GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/externalSystems/{extSystemCode}/hotels/{hotelId}/blocks/allocationSummary/{requestId}"
	localVarPath = strings.Replace(localVarPath, "{"+"requestId"+"}", url.PathEscape(parameterValueToString(r.requestId, "requestId")), -1)
	localVarPath = strings.Replace(localVarPath, "{"+"extSystemCode"+"}", url.PathEscape(parameterValueToString(r.extSystemCode, "extSystemCode")), -1)
	localVarPath = strings.Replace(localVarPath, "{"+"hotelId"+"}", url.PathEscape(parameterValueToString(r.hotelId, "hotelId")), -1)

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := url.Values{}
	localVarFormParams := url.Values{}
	if strlen(r.requestId) < 1 {
		return nil, reportError("requestId must have at least 1 elements")
	}
	if strlen(r.requestId) > 2000 {
		return nil, reportError("requestId must have less than 2000 elements")
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

type BlockAsyncAPIStartBlockAllocationSummaryProcessRequest struct {
	ctx context.Context
	ApiService *BlockAsyncAPIService
	hotelId string
	extSystemCode string
	authorization *string
	xAppKey *string
	xHotelid *string
	criteria *Criteria
	acceptLanguage *string
}

// Bearer token that needs to be passed which is generated post user authentication
func (r BlockAsyncAPIStartBlockAllocationSummaryProcessRequest) Authorization(authorization string) BlockAsyncAPIStartBlockAllocationSummaryProcessRequest {
	r.authorization = &authorization
	return r
}

// Client or Partner&#39;s Application Key
func (r BlockAsyncAPIStartBlockAllocationSummaryProcessRequest) XAppKey(xAppKey string) BlockAsyncAPIStartBlockAllocationSummaryProcessRequest {
	r.xAppKey = &xAppKey
	return r
}

// Mandatory parameter to identify the hotel code where the end user is logged in
func (r BlockAsyncAPIStartBlockAllocationSummaryProcessRequest) XHotelid(xHotelid string) BlockAsyncAPIStartBlockAllocationSummaryProcessRequest {
	r.xHotelid = &xHotelid
	return r
}

// Request object for fetching block allocation summary asynchronously.
func (r BlockAsyncAPIStartBlockAllocationSummaryProcessRequest) Criteria(criteria Criteria) BlockAsyncAPIStartBlockAllocationSummaryProcessRequest {
	r.criteria = &criteria
	return r
}

// Language code
func (r BlockAsyncAPIStartBlockAllocationSummaryProcessRequest) AcceptLanguage(acceptLanguage string) BlockAsyncAPIStartBlockAllocationSummaryProcessRequest {
	r.acceptLanguage = &acceptLanguage
	return r
}

func (r BlockAsyncAPIStartBlockAllocationSummaryProcessRequest) Execute() (*http.Response, error) {
	return r.ApiService.StartBlockAllocationSummaryProcessExecute(r)
}

/*
StartBlockAllocationSummaryProcess This API facilitates fetching block allocation summary for a Hotel.

This API will fetch Block allocation information for a hotel, and specified date range.  The block allocated inventory, rates and room type statistics are returned as part of the response. <p><strong>OperationId:</strong>startBlockAllocationSummaryProcess</p>

 @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @param hotelId
 @param extSystemCode
 @return BlockAsyncAPIStartBlockAllocationSummaryProcessRequest
*/
func (a *BlockAsyncAPIService) StartBlockAllocationSummaryProcess(ctx context.Context, hotelId string, extSystemCode string) BlockAsyncAPIStartBlockAllocationSummaryProcessRequest {
	return BlockAsyncAPIStartBlockAllocationSummaryProcessRequest{
		ApiService: a,
		ctx: ctx,
		hotelId: hotelId,
		extSystemCode: extSystemCode,
	}
}

// Execute executes the request
func (a *BlockAsyncAPIService) StartBlockAllocationSummaryProcessExecute(r BlockAsyncAPIStartBlockAllocationSummaryProcessRequest) (*http.Response, error) {
	var (
		localVarHTTPMethod   = http.MethodPost
		localVarPostBody     interface{}
		formFiles            []formFile
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "BlockAsyncAPIService.StartBlockAllocationSummaryProcess")
	if err != nil {
		return nil, &GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/externalSystems/{extSystemCode}/hotels/{hotelId}/blocks/allocationSummary"
	localVarPath = strings.Replace(localVarPath, "{"+"hotelId"+"}", url.PathEscape(parameterValueToString(r.hotelId, "hotelId")), -1)
	localVarPath = strings.Replace(localVarPath, "{"+"extSystemCode"+"}", url.PathEscape(parameterValueToString(r.extSystemCode, "extSystemCode")), -1)

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := url.Values{}
	localVarFormParams := url.Values{}
	if strlen(r.hotelId) < 1 {
		return nil, reportError("hotelId must have at least 1 elements")
	}
	if strlen(r.hotelId) > 2000 {
		return nil, reportError("hotelId must have less than 2000 elements")
	}
	if strlen(r.extSystemCode) < 1 {
		return nil, reportError("extSystemCode must have at least 1 elements")
	}
	if strlen(r.extSystemCode) > 2000 {
		return nil, reportError("extSystemCode must have less than 2000 elements")
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