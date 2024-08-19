/*
OPERA Cloud Channel Configuration API

APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package chl

import (
	"bytes"
	"context"
	"io"
	"net/http"
	"net/url"
	"strings"
)


// InventoryAPIService InventoryAPI service
type InventoryAPIService service

type InventoryAPIChangeChannelSellLimitsByDateRequest struct {
	ctx context.Context
	ApiService *InventoryAPIService
	hotelId string
	authorization *string
	xAppKey *string
	xHotelid *string
	channelSellLimitsByDate *ChannelSellLimitsByDate
	xExternalsystem *string
	acceptLanguage *string
}

// Bearer token that needs to be passed which is generated post user authentication
func (r InventoryAPIChangeChannelSellLimitsByDateRequest) Authorization(authorization string) InventoryAPIChangeChannelSellLimitsByDateRequest {
	r.authorization = &authorization
	return r
}

// Client or Partner&#39;s Application Key
func (r InventoryAPIChangeChannelSellLimitsByDateRequest) XAppKey(xAppKey string) InventoryAPIChangeChannelSellLimitsByDateRequest {
	r.xAppKey = &xAppKey
	return r
}

// Mandatory parameter to identify the hotel code where the end user is logged in
func (r InventoryAPIChangeChannelSellLimitsByDateRequest) XHotelid(xHotelid string) InventoryAPIChangeChannelSellLimitsByDateRequest {
	r.xHotelid = &xHotelid
	return r
}

// Request object to create or update sell limits for the channel or channel room type by day. Advanced logic is implemented to combine consecutive blocks of sell limits into a single schedule which have the same limits configured. Existing schedules can also be split as needed to account for overlapping schedules.
func (r InventoryAPIChangeChannelSellLimitsByDateRequest) ChannelSellLimitsByDate(channelSellLimitsByDate ChannelSellLimitsByDate) InventoryAPIChangeChannelSellLimitsByDateRequest {
	r.channelSellLimitsByDate = &channelSellLimitsByDate
	return r
}

// External system code.
func (r InventoryAPIChangeChannelSellLimitsByDateRequest) XExternalsystem(xExternalsystem string) InventoryAPIChangeChannelSellLimitsByDateRequest {
	r.xExternalsystem = &xExternalsystem
	return r
}

// Language code
func (r InventoryAPIChangeChannelSellLimitsByDateRequest) AcceptLanguage(acceptLanguage string) InventoryAPIChangeChannelSellLimitsByDateRequest {
	r.acceptLanguage = &acceptLanguage
	return r
}

func (r InventoryAPIChangeChannelSellLimitsByDateRequest) Execute() (*Status, *http.Response, error) {
	return r.ApiService.ChangeChannelSellLimitsByDateExecute(r)
}

/*
ChangeChannelSellLimitsByDate Updates channel sell limits by date

Use this API to update channel property sell limit mapping by given dates. <p><strong>OperationId:</strong>changeChannelSellLimitsByDate</p>

 @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @param hotelId Unique ID of the hotel where channel sell limits are updated by date.
 @return InventoryAPIChangeChannelSellLimitsByDateRequest
*/
func (a *InventoryAPIService) ChangeChannelSellLimitsByDate(ctx context.Context, hotelId string) InventoryAPIChangeChannelSellLimitsByDateRequest {
	return InventoryAPIChangeChannelSellLimitsByDateRequest{
		ApiService: a,
		ctx: ctx,
		hotelId: hotelId,
	}
}

// Execute executes the request
//  @return Status
func (a *InventoryAPIService) ChangeChannelSellLimitsByDateExecute(r InventoryAPIChangeChannelSellLimitsByDateRequest) (*Status, *http.Response, error) {
	var (
		localVarHTTPMethod   = http.MethodPut
		localVarPostBody     interface{}
		formFiles            []formFile
		localVarReturnValue  *Status
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "InventoryAPIService.ChangeChannelSellLimitsByDate")
	if err != nil {
		return localVarReturnValue, nil, &GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/hotels/{hotelId}/channelSellLimits"
	localVarPath = strings.Replace(localVarPath, "{"+"hotelId"+"}", url.PathEscape(parameterValueToString(r.hotelId, "hotelId")), -1)

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := url.Values{}
	localVarFormParams := url.Values{}
	if strlen(r.hotelId) < 1 {
		return localVarReturnValue, nil, reportError("hotelId must have at least 1 elements")
	}
	if strlen(r.hotelId) > 2000 {
		return localVarReturnValue, nil, reportError("hotelId must have less than 2000 elements")
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
	if r.authorization != nil {
		parameterAddToHeaderOrQuery(localVarHeaderParams, "authorization", r.authorization, "")
	}
	if r.xAppKey != nil {
		parameterAddToHeaderOrQuery(localVarHeaderParams, "x-app-key", r.xAppKey, "")
	}
	if r.xHotelid != nil {
		parameterAddToHeaderOrQuery(localVarHeaderParams, "x-hotelid", r.xHotelid, "")
	}
	if r.xExternalsystem != nil {
		parameterAddToHeaderOrQuery(localVarHeaderParams, "x-externalsystem", r.xExternalsystem, "")
	}
	if r.acceptLanguage != nil {
		parameterAddToHeaderOrQuery(localVarHeaderParams, "Accept-Language", r.acceptLanguage, "")
	}
	// body params
	localVarPostBody = r.channelSellLimitsByDate
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

type InventoryAPIChangeChannelSellLimitsByDateRangeRequest struct {
	ctx context.Context
	ApiService *InventoryAPIService
	channelId string
	hotelId string
	authorization *string
	xAppKey *string
	xHotelid *string
	channelSellLimitsByDateRange *ChannelSellLimitsByDateRange
	xExternalsystem *string
	acceptLanguage *string
}

// Bearer token that needs to be passed which is generated post user authentication
func (r InventoryAPIChangeChannelSellLimitsByDateRangeRequest) Authorization(authorization string) InventoryAPIChangeChannelSellLimitsByDateRangeRequest {
	r.authorization = &authorization
	return r
}

// Client or Partner&#39;s Application Key
func (r InventoryAPIChangeChannelSellLimitsByDateRangeRequest) XAppKey(xAppKey string) InventoryAPIChangeChannelSellLimitsByDateRangeRequest {
	r.xAppKey = &xAppKey
	return r
}

// Mandatory parameter to identify the hotel code where the end user is logged in
func (r InventoryAPIChangeChannelSellLimitsByDateRangeRequest) XHotelid(xHotelid string) InventoryAPIChangeChannelSellLimitsByDateRangeRequest {
	r.xHotelid = &xHotelid
	return r
}

// Request object to create or update sell limit schedules for the channel or channel room type within a date range. Existing schedules can be split as needed to account for overlapping schedules.
func (r InventoryAPIChangeChannelSellLimitsByDateRangeRequest) ChannelSellLimitsByDateRange(channelSellLimitsByDateRange ChannelSellLimitsByDateRange) InventoryAPIChangeChannelSellLimitsByDateRangeRequest {
	r.channelSellLimitsByDateRange = &channelSellLimitsByDateRange
	return r
}

// External system code.
func (r InventoryAPIChangeChannelSellLimitsByDateRangeRequest) XExternalsystem(xExternalsystem string) InventoryAPIChangeChannelSellLimitsByDateRangeRequest {
	r.xExternalsystem = &xExternalsystem
	return r
}

// Language code
func (r InventoryAPIChangeChannelSellLimitsByDateRangeRequest) AcceptLanguage(acceptLanguage string) InventoryAPIChangeChannelSellLimitsByDateRangeRequest {
	r.acceptLanguage = &acceptLanguage
	return r
}

func (r InventoryAPIChangeChannelSellLimitsByDateRangeRequest) Execute() (*Status, *http.Response, error) {
	return r.ApiService.ChangeChannelSellLimitsByDateRangeExecute(r)
}

/*
ChangeChannelSellLimitsByDateRange Updates channel sell limits by daterange

Use this API to update channel property sell limit mapping by given date range. <p><strong>OperationId:</strong>changeChannelSellLimitsByDateRange</p>

 @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @param channelId Unique ID of the channel for which sell limits are updated by date range.
 @param hotelId Unique ID of the hotel where channel sell limits are updated by date range.
 @return InventoryAPIChangeChannelSellLimitsByDateRangeRequest
*/
func (a *InventoryAPIService) ChangeChannelSellLimitsByDateRange(ctx context.Context, channelId string, hotelId string) InventoryAPIChangeChannelSellLimitsByDateRangeRequest {
	return InventoryAPIChangeChannelSellLimitsByDateRangeRequest{
		ApiService: a,
		ctx: ctx,
		channelId: channelId,
		hotelId: hotelId,
	}
}

// Execute executes the request
//  @return Status
func (a *InventoryAPIService) ChangeChannelSellLimitsByDateRangeExecute(r InventoryAPIChangeChannelSellLimitsByDateRangeRequest) (*Status, *http.Response, error) {
	var (
		localVarHTTPMethod   = http.MethodPut
		localVarPostBody     interface{}
		formFiles            []formFile
		localVarReturnValue  *Status
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "InventoryAPIService.ChangeChannelSellLimitsByDateRange")
	if err != nil {
		return localVarReturnValue, nil, &GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/hotels/{hotelId}/channels/{channelId}/channelSellLimitsByDateRange"
	localVarPath = strings.Replace(localVarPath, "{"+"channelId"+"}", url.PathEscape(parameterValueToString(r.channelId, "channelId")), -1)
	localVarPath = strings.Replace(localVarPath, "{"+"hotelId"+"}", url.PathEscape(parameterValueToString(r.hotelId, "hotelId")), -1)

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := url.Values{}
	localVarFormParams := url.Values{}
	if strlen(r.channelId) < 1 {
		return localVarReturnValue, nil, reportError("channelId must have at least 1 elements")
	}
	if strlen(r.channelId) > 2000 {
		return localVarReturnValue, nil, reportError("channelId must have less than 2000 elements")
	}
	if strlen(r.hotelId) < 1 {
		return localVarReturnValue, nil, reportError("hotelId must have at least 1 elements")
	}
	if strlen(r.hotelId) > 2000 {
		return localVarReturnValue, nil, reportError("hotelId must have less than 2000 elements")
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
	if r.authorization != nil {
		parameterAddToHeaderOrQuery(localVarHeaderParams, "authorization", r.authorization, "")
	}
	if r.xAppKey != nil {
		parameterAddToHeaderOrQuery(localVarHeaderParams, "x-app-key", r.xAppKey, "")
	}
	if r.xHotelid != nil {
		parameterAddToHeaderOrQuery(localVarHeaderParams, "x-hotelid", r.xHotelid, "")
	}
	if r.xExternalsystem != nil {
		parameterAddToHeaderOrQuery(localVarHeaderParams, "x-externalsystem", r.xExternalsystem, "")
	}
	if r.acceptLanguage != nil {
		parameterAddToHeaderOrQuery(localVarHeaderParams, "Accept-Language", r.acceptLanguage, "")
	}
	// body params
	localVarPostBody = r.channelSellLimitsByDateRange
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

type InventoryAPIDeleteChannelSellLimitsRequest struct {
	ctx context.Context
	ApiService *InventoryAPIService
	id string
	hotelId string
	authorization *string
	xAppKey *string
	xHotelid *string
	xExternalsystem *string
	acceptLanguage *string
}

// Bearer token that needs to be passed which is generated post user authentication
func (r InventoryAPIDeleteChannelSellLimitsRequest) Authorization(authorization string) InventoryAPIDeleteChannelSellLimitsRequest {
	r.authorization = &authorization
	return r
}

// Client or Partner&#39;s Application Key
func (r InventoryAPIDeleteChannelSellLimitsRequest) XAppKey(xAppKey string) InventoryAPIDeleteChannelSellLimitsRequest {
	r.xAppKey = &xAppKey
	return r
}

// Mandatory parameter to identify the hotel code where the end user is logged in
func (r InventoryAPIDeleteChannelSellLimitsRequest) XHotelid(xHotelid string) InventoryAPIDeleteChannelSellLimitsRequest {
	r.xHotelid = &xHotelid
	return r
}

// External system code.
func (r InventoryAPIDeleteChannelSellLimitsRequest) XExternalsystem(xExternalsystem string) InventoryAPIDeleteChannelSellLimitsRequest {
	r.xExternalsystem = &xExternalsystem
	return r
}

// Language code
func (r InventoryAPIDeleteChannelSellLimitsRequest) AcceptLanguage(acceptLanguage string) InventoryAPIDeleteChannelSellLimitsRequest {
	r.acceptLanguage = &acceptLanguage
	return r
}

func (r InventoryAPIDeleteChannelSellLimitsRequest) Execute() (*Status, *http.Response, error) {
	return r.ApiService.DeleteChannelSellLimitsExecute(r)
}

/*
DeleteChannelSellLimits Deletes channel sell limits

Use this API to delete channel property sell limit mapping. <p><strong>OperationId:</strong>deleteChannelSellLimits</p>

 @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @param id Unique ID of the channel sell limit to be deleted.
 @param hotelId Unique ID of the hotel where channel sell limits is deleted.
 @return InventoryAPIDeleteChannelSellLimitsRequest
*/
func (a *InventoryAPIService) DeleteChannelSellLimits(ctx context.Context, id string, hotelId string) InventoryAPIDeleteChannelSellLimitsRequest {
	return InventoryAPIDeleteChannelSellLimitsRequest{
		ApiService: a,
		ctx: ctx,
		id: id,
		hotelId: hotelId,
	}
}

// Execute executes the request
//  @return Status
func (a *InventoryAPIService) DeleteChannelSellLimitsExecute(r InventoryAPIDeleteChannelSellLimitsRequest) (*Status, *http.Response, error) {
	var (
		localVarHTTPMethod   = http.MethodDelete
		localVarPostBody     interface{}
		formFiles            []formFile
		localVarReturnValue  *Status
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "InventoryAPIService.DeleteChannelSellLimits")
	if err != nil {
		return localVarReturnValue, nil, &GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/hotels/{hotelId}/channelSellLimits/{Id}"
	localVarPath = strings.Replace(localVarPath, "{"+"Id"+"}", url.PathEscape(parameterValueToString(r.id, "id")), -1)
	localVarPath = strings.Replace(localVarPath, "{"+"hotelId"+"}", url.PathEscape(parameterValueToString(r.hotelId, "hotelId")), -1)

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := url.Values{}
	localVarFormParams := url.Values{}
	if strlen(r.id) < 1 {
		return localVarReturnValue, nil, reportError("id must have at least 1 elements")
	}
	if strlen(r.id) > 2000 {
		return localVarReturnValue, nil, reportError("id must have less than 2000 elements")
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
	if r.authorization != nil {
		parameterAddToHeaderOrQuery(localVarHeaderParams, "authorization", r.authorization, "")
	}
	if r.xAppKey != nil {
		parameterAddToHeaderOrQuery(localVarHeaderParams, "x-app-key", r.xAppKey, "")
	}
	if r.xHotelid != nil {
		parameterAddToHeaderOrQuery(localVarHeaderParams, "x-hotelid", r.xHotelid, "")
	}
	if r.xExternalsystem != nil {
		parameterAddToHeaderOrQuery(localVarHeaderParams, "x-externalsystem", r.xExternalsystem, "")
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

type InventoryAPIGetChannelSellLimitsRequest struct {
	ctx context.Context
	ApiService *InventoryAPIService
	hotelId string
	fromDate *string
	authorization *string
	xAppKey *string
	xHotelid *string
	bookingChannelCode *string
	channelRoomType *string
	xExternalsystem *string
	acceptLanguage *string
}

// Sell limits which exist at or beyond this date will be fetched.
func (r InventoryAPIGetChannelSellLimitsRequest) FromDate(fromDate string) InventoryAPIGetChannelSellLimitsRequest {
	r.fromDate = &fromDate
	return r
}

// Bearer token that needs to be passed which is generated post user authentication
func (r InventoryAPIGetChannelSellLimitsRequest) Authorization(authorization string) InventoryAPIGetChannelSellLimitsRequest {
	r.authorization = &authorization
	return r
}

// Client or Partner&#39;s Application Key
func (r InventoryAPIGetChannelSellLimitsRequest) XAppKey(xAppKey string) InventoryAPIGetChannelSellLimitsRequest {
	r.xAppKey = &xAppKey
	return r
}

// Mandatory parameter to identify the hotel code where the end user is logged in
func (r InventoryAPIGetChannelSellLimitsRequest) XHotelid(xHotelid string) InventoryAPIGetChannelSellLimitsRequest {
	r.xHotelid = &xHotelid
	return r
}

// Channel for which the sell limits are to be fetched.
func (r InventoryAPIGetChannelSellLimitsRequest) BookingChannelCode(bookingChannelCode string) InventoryAPIGetChannelSellLimitsRequest {
	r.bookingChannelCode = &bookingChannelCode
	return r
}

// Channel room type for which the sell limits are to be fetched.
func (r InventoryAPIGetChannelSellLimitsRequest) ChannelRoomType(channelRoomType string) InventoryAPIGetChannelSellLimitsRequest {
	r.channelRoomType = &channelRoomType
	return r
}

// External system code.
func (r InventoryAPIGetChannelSellLimitsRequest) XExternalsystem(xExternalsystem string) InventoryAPIGetChannelSellLimitsRequest {
	r.xExternalsystem = &xExternalsystem
	return r
}

// Language code
func (r InventoryAPIGetChannelSellLimitsRequest) AcceptLanguage(acceptLanguage string) InventoryAPIGetChannelSellLimitsRequest {
	r.acceptLanguage = &acceptLanguage
	return r
}

func (r InventoryAPIGetChannelSellLimitsRequest) Execute() (*ChannelSellLimits, *http.Response, error) {
	return r.ApiService.GetChannelSellLimitsExecute(r)
}

/*
GetChannelSellLimits Gets sell limit detail for a given channel hotel combination

Use this API to retrieve channel sell limit detail to get or review daily sell limits for a given hotel-channel combination. <p><strong>OperationId:</strong>getChannelSellLimits</p>

 @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @param hotelId Unique ID of the hotel where channel sell limits is searched.
 @return InventoryAPIGetChannelSellLimitsRequest
*/
func (a *InventoryAPIService) GetChannelSellLimits(ctx context.Context, hotelId string) InventoryAPIGetChannelSellLimitsRequest {
	return InventoryAPIGetChannelSellLimitsRequest{
		ApiService: a,
		ctx: ctx,
		hotelId: hotelId,
	}
}

// Execute executes the request
//  @return ChannelSellLimits
func (a *InventoryAPIService) GetChannelSellLimitsExecute(r InventoryAPIGetChannelSellLimitsRequest) (*ChannelSellLimits, *http.Response, error) {
	var (
		localVarHTTPMethod   = http.MethodGet
		localVarPostBody     interface{}
		formFiles            []formFile
		localVarReturnValue  *ChannelSellLimits
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "InventoryAPIService.GetChannelSellLimits")
	if err != nil {
		return localVarReturnValue, nil, &GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/hotels/{hotelId}/channel/sellLimits"
	localVarPath = strings.Replace(localVarPath, "{"+"hotelId"+"}", url.PathEscape(parameterValueToString(r.hotelId, "hotelId")), -1)

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := url.Values{}
	localVarFormParams := url.Values{}
	if strlen(r.hotelId) < 1 {
		return localVarReturnValue, nil, reportError("hotelId must have at least 1 elements")
	}
	if strlen(r.hotelId) > 2000 {
		return localVarReturnValue, nil, reportError("hotelId must have less than 2000 elements")
	}

	parameterAddToHeaderOrQuery(localVarQueryParams, "fromDate", r.fromDate, "")
	if r.bookingChannelCode != nil {
		parameterAddToHeaderOrQuery(localVarQueryParams, "bookingChannelCode", r.bookingChannelCode, "")
  }
	if r.channelRoomType != nil {
		parameterAddToHeaderOrQuery(localVarQueryParams, "channelRoomType", r.channelRoomType, "")
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
	if r.authorization != nil {
		parameterAddToHeaderOrQuery(localVarHeaderParams, "authorization", r.authorization, "")
	}
	if r.xAppKey != nil {
		parameterAddToHeaderOrQuery(localVarHeaderParams, "x-app-key", r.xAppKey, "")
	}
	if r.xHotelid != nil {
		parameterAddToHeaderOrQuery(localVarHeaderParams, "x-hotelid", r.xHotelid, "")
	}
	if r.xExternalsystem != nil {
		parameterAddToHeaderOrQuery(localVarHeaderParams, "x-externalsystem", r.xExternalsystem, "")
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
