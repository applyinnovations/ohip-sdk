/*
OPERA Cloud Rate API

APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rtp

import (
	"bytes"
	"context"
	"io"
	"net/http"
	"net/url"
	"strings"
	"reflect"
)


// ChainConfigAPIService ChainConfigAPI service
type ChainConfigAPIService service

type ChainConfigAPIDeleteDisplaySetsRequest struct {
	ctx context.Context
	ApiService *ChainConfigAPIService
	displaySetsId string
	authorization *string
	xAppKey *string
	xHotelid *string
	xExternalsystem *string
	acceptLanguage *string
}

// Bearer token that needs to be passed which is generated post user authentication
func (r ChainConfigAPIDeleteDisplaySetsRequest) Authorization(authorization string) ChainConfigAPIDeleteDisplaySetsRequest {
	r.authorization = &authorization
	return r
}

// Client or Partner&#39;s Application Key
func (r ChainConfigAPIDeleteDisplaySetsRequest) XAppKey(xAppKey string) ChainConfigAPIDeleteDisplaySetsRequest {
	r.xAppKey = &xAppKey
	return r
}

// Mandatory parameter to identify the hotel code where the end user is logged in
func (r ChainConfigAPIDeleteDisplaySetsRequest) XHotelid(xHotelid string) ChainConfigAPIDeleteDisplaySetsRequest {
	r.xHotelid = &xHotelid
	return r
}

// External system code.
func (r ChainConfigAPIDeleteDisplaySetsRequest) XExternalsystem(xExternalsystem string) ChainConfigAPIDeleteDisplaySetsRequest {
	r.xExternalsystem = &xExternalsystem
	return r
}

// Language code
func (r ChainConfigAPIDeleteDisplaySetsRequest) AcceptLanguage(acceptLanguage string) ChainConfigAPIDeleteDisplaySetsRequest {
	r.acceptLanguage = &acceptLanguage
	return r
}

func (r ChainConfigAPIDeleteDisplaySetsRequest) Execute() (*Status, *http.Response, error) {
	return r.ApiService.DeleteDisplaySetsExecute(r)
}

/*
DeleteDisplaySets Delete Display Sets

Use this API to delete Display Sets. <p><strong>OperationId:</strong>deleteDisplaySets</p>

 @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @param displaySetsId Unique ID of Display Sets.
 @return ChainConfigAPIDeleteDisplaySetsRequest
*/
func (a *ChainConfigAPIService) DeleteDisplaySets(ctx context.Context, displaySetsId string) ChainConfigAPIDeleteDisplaySetsRequest {
	return ChainConfigAPIDeleteDisplaySetsRequest{
		ApiService: a,
		ctx: ctx,
		displaySetsId: displaySetsId,
	}
}

// Execute executes the request
//  @return Status
func (a *ChainConfigAPIService) DeleteDisplaySetsExecute(r ChainConfigAPIDeleteDisplaySetsRequest) (*Status, *http.Response, error) {
	var (
		localVarHTTPMethod   = http.MethodDelete
		localVarPostBody     interface{}
		formFiles            []formFile
		localVarReturnValue  *Status
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "ChainConfigAPIService.DeleteDisplaySets")
	if err != nil {
		return localVarReturnValue, nil, &GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/displaySets/{displaySetsId}"
	localVarPath = strings.Replace(localVarPath, "{"+"displaySetsId"+"}", url.PathEscape(parameterValueToString(r.displaySetsId, "displaySetsId")), -1)

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := url.Values{}
	localVarFormParams := url.Values{}
	if strlen(r.displaySetsId) < 1 {
		return localVarReturnValue, nil, reportError("displaySetsId must have at least 1 elements")
	}
	if strlen(r.displaySetsId) > 2000 {
		return localVarReturnValue, nil, reportError("displaySetsId must have less than 2000 elements")
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

type ChainConfigAPIGetDisplaySetsRequest struct {
	ctx context.Context
	ApiService *ChainConfigAPIService
	authorization *string
	xAppKey *string
	xHotelid *string
	fetchInactive *bool
	codes *[]string
	wildCard *string
	description *string
	xExternalsystem *string
	acceptLanguage *string
}

// Bearer token that needs to be passed which is generated post user authentication
func (r ChainConfigAPIGetDisplaySetsRequest) Authorization(authorization string) ChainConfigAPIGetDisplaySetsRequest {
	r.authorization = &authorization
	return r
}

// Client or Partner&#39;s Application Key
func (r ChainConfigAPIGetDisplaySetsRequest) XAppKey(xAppKey string) ChainConfigAPIGetDisplaySetsRequest {
	r.xAppKey = &xAppKey
	return r
}

// Mandatory parameter to identify the hotel code where the end user is logged in
func (r ChainConfigAPIGetDisplaySetsRequest) XHotelid(xHotelid string) ChainConfigAPIGetDisplaySetsRequest {
	r.xHotelid = &xHotelid
	return r
}

// Determines wether to fetch inactive records or not.
func (r ChainConfigAPIGetDisplaySetsRequest) FetchInactive(fetchInactive bool) ChainConfigAPIGetDisplaySetsRequest {
	r.fetchInactive = &fetchInactive
	return r
}

// Codes to be searched.
func (r ChainConfigAPIGetDisplaySetsRequest) Codes(codes []string) ChainConfigAPIGetDisplaySetsRequest {
	r.codes = &codes
	return r
}

// Wildcard search on the code.
func (r ChainConfigAPIGetDisplaySetsRequest) WildCard(wildCard string) ChainConfigAPIGetDisplaySetsRequest {
	r.wildCard = &wildCard
	return r
}

// Description of the code.
func (r ChainConfigAPIGetDisplaySetsRequest) Description(description string) ChainConfigAPIGetDisplaySetsRequest {
	r.description = &description
	return r
}

// External system code.
func (r ChainConfigAPIGetDisplaySetsRequest) XExternalsystem(xExternalsystem string) ChainConfigAPIGetDisplaySetsRequest {
	r.xExternalsystem = &xExternalsystem
	return r
}

// Language code
func (r ChainConfigAPIGetDisplaySetsRequest) AcceptLanguage(acceptLanguage string) ChainConfigAPIGetDisplaySetsRequest {
	r.acceptLanguage = &acceptLanguage
	return r
}

func (r ChainConfigAPIGetDisplaySetsRequest) Execute() (*DisplaySetsDetails, *http.Response, error) {
	return r.ApiService.GetDisplaySetsExecute(r)
}

/*
GetDisplaySets Get Display Sets

Use this API to get Display Sets. <p><strong>OperationId:</strong>getDisplaySets</p>

 @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @return ChainConfigAPIGetDisplaySetsRequest
*/
func (a *ChainConfigAPIService) GetDisplaySets(ctx context.Context) ChainConfigAPIGetDisplaySetsRequest {
	return ChainConfigAPIGetDisplaySetsRequest{
		ApiService: a,
		ctx: ctx,
	}
}

// Execute executes the request
//  @return DisplaySetsDetails
func (a *ChainConfigAPIService) GetDisplaySetsExecute(r ChainConfigAPIGetDisplaySetsRequest) (*DisplaySetsDetails, *http.Response, error) {
	var (
		localVarHTTPMethod   = http.MethodGet
		localVarPostBody     interface{}
		formFiles            []formFile
		localVarReturnValue  *DisplaySetsDetails
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "ChainConfigAPIService.GetDisplaySets")
	if err != nil {
		return localVarReturnValue, nil, &GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/displaySets"

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := url.Values{}
	localVarFormParams := url.Values{}

	if r.fetchInactive != nil {
		parameterAddToHeaderOrQuery(localVarQueryParams, "fetchInactive", r.fetchInactive, "")
  }
	if r.codes != nil {
		t := *r.codes
		if reflect.TypeOf(t).Kind() == reflect.Slice {
			s := reflect.ValueOf(t)
			for i := 0; i < s.Len(); i++ {
				parameterAddToHeaderOrQuery(localVarQueryParams, "codes", s.Index(i).Interface(), "multi")
			}
		} else {
			parameterAddToHeaderOrQuery(localVarQueryParams, "codes", t, "multi")
		}
  }
	if r.wildCard != nil {
		parameterAddToHeaderOrQuery(localVarQueryParams, "wildCard", r.wildCard, "")
  }
	if r.description != nil {
		parameterAddToHeaderOrQuery(localVarQueryParams, "description", r.description, "")
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

type ChainConfigAPIPostDisplaySetsRequest struct {
	ctx context.Context
	ApiService *ChainConfigAPIService
	authorization *string
	xAppKey *string
	xHotelid *string
	displaySetsCriteria *DisplaySetsCriteria
	xExternalsystem *string
	acceptLanguage *string
}

// Bearer token that needs to be passed which is generated post user authentication
func (r ChainConfigAPIPostDisplaySetsRequest) Authorization(authorization string) ChainConfigAPIPostDisplaySetsRequest {
	r.authorization = &authorization
	return r
}

// Client or Partner&#39;s Application Key
func (r ChainConfigAPIPostDisplaySetsRequest) XAppKey(xAppKey string) ChainConfigAPIPostDisplaySetsRequest {
	r.xAppKey = &xAppKey
	return r
}

// Mandatory parameter to identify the hotel code where the end user is logged in
func (r ChainConfigAPIPostDisplaySetsRequest) XHotelid(xHotelid string) ChainConfigAPIPostDisplaySetsRequest {
	r.xHotelid = &xHotelid
	return r
}

// Request object for creating Display Sets.
func (r ChainConfigAPIPostDisplaySetsRequest) DisplaySetsCriteria(displaySetsCriteria DisplaySetsCriteria) ChainConfigAPIPostDisplaySetsRequest {
	r.displaySetsCriteria = &displaySetsCriteria
	return r
}

// External system code.
func (r ChainConfigAPIPostDisplaySetsRequest) XExternalsystem(xExternalsystem string) ChainConfigAPIPostDisplaySetsRequest {
	r.xExternalsystem = &xExternalsystem
	return r
}

// Language code
func (r ChainConfigAPIPostDisplaySetsRequest) AcceptLanguage(acceptLanguage string) ChainConfigAPIPostDisplaySetsRequest {
	r.acceptLanguage = &acceptLanguage
	return r
}

func (r ChainConfigAPIPostDisplaySetsRequest) Execute() (*Status, *http.Response, error) {
	return r.ApiService.PostDisplaySetsExecute(r)
}

/*
PostDisplaySets Create Display Sets

Use this API to create Display Sets. <p><strong>OperationId:</strong>postDisplaySets</p>

 @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @return ChainConfigAPIPostDisplaySetsRequest
*/
func (a *ChainConfigAPIService) PostDisplaySets(ctx context.Context) ChainConfigAPIPostDisplaySetsRequest {
	return ChainConfigAPIPostDisplaySetsRequest{
		ApiService: a,
		ctx: ctx,
	}
}

// Execute executes the request
//  @return Status
func (a *ChainConfigAPIService) PostDisplaySetsExecute(r ChainConfigAPIPostDisplaySetsRequest) (*Status, *http.Response, error) {
	var (
		localVarHTTPMethod   = http.MethodPost
		localVarPostBody     interface{}
		formFiles            []formFile
		localVarReturnValue  *Status
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "ChainConfigAPIService.PostDisplaySets")
	if err != nil {
		return localVarReturnValue, nil, &GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/displaySets"

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := url.Values{}
	localVarFormParams := url.Values{}

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
	localVarPostBody = r.displaySetsCriteria
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

type ChainConfigAPIPutDisplaySetsRequest struct {
	ctx context.Context
	ApiService *ChainConfigAPIService
	displaySetsId string
	authorization *string
	xAppKey *string
	xHotelid *string
	displaySetsToBeChanged *DisplaySetsToBeChanged
	xExternalsystem *string
	acceptLanguage *string
}

// Bearer token that needs to be passed which is generated post user authentication
func (r ChainConfigAPIPutDisplaySetsRequest) Authorization(authorization string) ChainConfigAPIPutDisplaySetsRequest {
	r.authorization = &authorization
	return r
}

// Client or Partner&#39;s Application Key
func (r ChainConfigAPIPutDisplaySetsRequest) XAppKey(xAppKey string) ChainConfigAPIPutDisplaySetsRequest {
	r.xAppKey = &xAppKey
	return r
}

// Mandatory parameter to identify the hotel code where the end user is logged in
func (r ChainConfigAPIPutDisplaySetsRequest) XHotelid(xHotelid string) ChainConfigAPIPutDisplaySetsRequest {
	r.xHotelid = &xHotelid
	return r
}

// Request object for changing Display Sets.
func (r ChainConfigAPIPutDisplaySetsRequest) DisplaySetsToBeChanged(displaySetsToBeChanged DisplaySetsToBeChanged) ChainConfigAPIPutDisplaySetsRequest {
	r.displaySetsToBeChanged = &displaySetsToBeChanged
	return r
}

// External system code.
func (r ChainConfigAPIPutDisplaySetsRequest) XExternalsystem(xExternalsystem string) ChainConfigAPIPutDisplaySetsRequest {
	r.xExternalsystem = &xExternalsystem
	return r
}

// Language code
func (r ChainConfigAPIPutDisplaySetsRequest) AcceptLanguage(acceptLanguage string) ChainConfigAPIPutDisplaySetsRequest {
	r.acceptLanguage = &acceptLanguage
	return r
}

func (r ChainConfigAPIPutDisplaySetsRequest) Execute() (*Status, *http.Response, error) {
	return r.ApiService.PutDisplaySetsExecute(r)
}

/*
PutDisplaySets Change Display Sets

Use this API to update Display Sets. <p><strong>OperationId:</strong>putDisplaySets</p>

 @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @param displaySetsId Unique ID of Display Sets.
 @return ChainConfigAPIPutDisplaySetsRequest
*/
func (a *ChainConfigAPIService) PutDisplaySets(ctx context.Context, displaySetsId string) ChainConfigAPIPutDisplaySetsRequest {
	return ChainConfigAPIPutDisplaySetsRequest{
		ApiService: a,
		ctx: ctx,
		displaySetsId: displaySetsId,
	}
}

// Execute executes the request
//  @return Status
func (a *ChainConfigAPIService) PutDisplaySetsExecute(r ChainConfigAPIPutDisplaySetsRequest) (*Status, *http.Response, error) {
	var (
		localVarHTTPMethod   = http.MethodPut
		localVarPostBody     interface{}
		formFiles            []formFile
		localVarReturnValue  *Status
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "ChainConfigAPIService.PutDisplaySets")
	if err != nil {
		return localVarReturnValue, nil, &GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/displaySets/{displaySetsId}"
	localVarPath = strings.Replace(localVarPath, "{"+"displaySetsId"+"}", url.PathEscape(parameterValueToString(r.displaySetsId, "displaySetsId")), -1)

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := url.Values{}
	localVarFormParams := url.Values{}
	if strlen(r.displaySetsId) < 1 {
		return localVarReturnValue, nil, reportError("displaySetsId must have at least 1 elements")
	}
	if strlen(r.displaySetsId) > 2000 {
		return localVarReturnValue, nil, reportError("displaySetsId must have less than 2000 elements")
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
	localVarPostBody = r.displaySetsToBeChanged
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
