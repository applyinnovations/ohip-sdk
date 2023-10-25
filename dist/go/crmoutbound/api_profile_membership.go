/*
OPERA Cloud Customer Relationship Management Outbound API

APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 20.99.99.99
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crmoutbound

import (
	"bytes"
	"context"
	"io"
	"net/http"
	"net/url"
	"strings"
	"reflect"
)


// ProfileMembershipApiService ProfileMembershipApi service
type ProfileMembershipApiService service

type ProfileMembershipApiGetMembershipDetailsRequest struct {
	ctx context.Context
	ApiService *ProfileMembershipApiService
	extSystemCode string
	externalProfileId string
	authorization *string
	xAppKey *string
	operaProfileId *[]string
	membershipType *string
	membershipId *string
	hotelId *string
	startDate *string
	endDate *string
	mode *string
	xTransactionId *string
	acceptLanguage *string
}

// Bearer token that needs to be passed which is generated post user authentication
func (r ProfileMembershipApiGetMembershipDetailsRequest) Authorization(authorization string) ProfileMembershipApiGetMembershipDetailsRequest {
	r.authorization = &authorization
	return r
}

// Client or Partner&#39;s Application Key
func (r ProfileMembershipApiGetMembershipDetailsRequest) XAppKey(xAppKey string) ProfileMembershipApiGetMembershipDetailsRequest {
	r.xAppKey = &xAppKey
	return r
}

// A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
func (r ProfileMembershipApiGetMembershipDetailsRequest) OperaProfileId(operaProfileId []string) ProfileMembershipApiGetMembershipDetailsRequest {
	r.operaProfileId = &operaProfileId
	return r
}

// The type of the membership.
func (r ProfileMembershipApiGetMembershipDetailsRequest) MembershipType(membershipType string) ProfileMembershipApiGetMembershipDetailsRequest {
	r.membershipType = &membershipType
	return r
}

// The card number associated with this membership.
func (r ProfileMembershipApiGetMembershipDetailsRequest) MembershipId(membershipId string) ProfileMembershipApiGetMembershipDetailsRequest {
	r.membershipId = &membershipId
	return r
}

// Property from which the membership stay information was received.
func (r ProfileMembershipApiGetMembershipDetailsRequest) HotelId(hotelId string) ProfileMembershipApiGetMembershipDetailsRequest {
	r.hotelId = &hotelId
	return r
}

func (r ProfileMembershipApiGetMembershipDetailsRequest) StartDate(startDate string) ProfileMembershipApiGetMembershipDetailsRequest {
	r.startDate = &startDate
	return r
}

func (r ProfileMembershipApiGetMembershipDetailsRequest) EndDate(endDate string) ProfileMembershipApiGetMembershipDetailsRequest {
	r.endDate = &endDate
	return r
}

// Whether member info search will pertain to transaction dates/ stay dates/ points credit dates.
func (r ProfileMembershipApiGetMembershipDetailsRequest) Mode(mode string) ProfileMembershipApiGetMembershipDetailsRequest {
	r.mode = &mode
	return r
}

// Transaction Id
func (r ProfileMembershipApiGetMembershipDetailsRequest) XTransactionId(xTransactionId string) ProfileMembershipApiGetMembershipDetailsRequest {
	r.xTransactionId = &xTransactionId
	return r
}

// Language code
func (r ProfileMembershipApiGetMembershipDetailsRequest) AcceptLanguage(acceptLanguage string) ProfileMembershipApiGetMembershipDetailsRequest {
	r.acceptLanguage = &acceptLanguage
	return r
}

func (r ProfileMembershipApiGetMembershipDetailsRequest) Execute() (*MemberInformation, *http.Response, error) {
	return r.ApiService.GetMembershipDetailsExecute(r)
}

/*
GetMembershipDetails Get membership information on a profile

Use this API to retrieve membership details on a profile. <p><strong>OperationId:</strong>getMembershipDetails</p>

 @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @param extSystemCode Profile will be downloaded from this External System.
 @param externalProfileId
 @return ProfileMembershipApiGetMembershipDetailsRequest
*/
func (a *ProfileMembershipApiService) GetMembershipDetails(ctx context.Context, extSystemCode string, externalProfileId string) ProfileMembershipApiGetMembershipDetailsRequest {
	return ProfileMembershipApiGetMembershipDetailsRequest{
		ApiService: a,
		ctx: ctx,
		extSystemCode: extSystemCode,
		externalProfileId: externalProfileId,
	}
}

// Execute executes the request
//  @return MemberInformation
func (a *ProfileMembershipApiService) GetMembershipDetailsExecute(r ProfileMembershipApiGetMembershipDetailsRequest) (*MemberInformation, *http.Response, error) {
	var (
		localVarHTTPMethod   = http.MethodGet
		localVarPostBody     interface{}
		formFiles            []formFile
		localVarReturnValue  *MemberInformation
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "ProfileMembershipApiService.GetMembershipDetails")
	if err != nil {
		return localVarReturnValue, nil, &GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/externalSystems/{extSystemCode}/profiles/{externalProfileId}/memberships"
	localVarPath = strings.Replace(localVarPath, "{"+"extSystemCode"+"}", url.PathEscape(parameterValueToString(r.extSystemCode, "extSystemCode")), -1)
	localVarPath = strings.Replace(localVarPath, "{"+"externalProfileId"+"}", url.PathEscape(parameterValueToString(r.externalProfileId, "externalProfileId")), -1)

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := url.Values{}
	localVarFormParams := url.Values{}
	if strlen(r.extSystemCode) < 1 {
		return localVarReturnValue, nil, reportError("extSystemCode must have at least 1 elements")
	}
	if strlen(r.extSystemCode) > 2000 {
		return localVarReturnValue, nil, reportError("extSystemCode must have less than 2000 elements")
	}
	if strlen(r.externalProfileId) < 1 {
		return localVarReturnValue, nil, reportError("externalProfileId must have at least 1 elements")
	}
	if strlen(r.externalProfileId) > 2000 {
		return localVarReturnValue, nil, reportError("externalProfileId must have less than 2000 elements")
	}

	if r.operaProfileId != nil {
		t := *r.operaProfileId
		if reflect.TypeOf(t).Kind() == reflect.Slice {
			s := reflect.ValueOf(t)
			for i := 0; i < s.Len(); i++ {
				parameterAddToHeaderOrQuery(localVarQueryParams, "operaProfileId", s.Index(i).Interface(), "multi")
			}
		} else {
			parameterAddToHeaderOrQuery(localVarQueryParams, "operaProfileId", t, "multi")
		}
	}
	if r.membershipType != nil {
		parameterAddToHeaderOrQuery(localVarQueryParams, "membershipType", r.membershipType, "")
	}
	if r.membershipId != nil {
		parameterAddToHeaderOrQuery(localVarQueryParams, "membershipId", r.membershipId, "")
	}
	if r.hotelId != nil {
		parameterAddToHeaderOrQuery(localVarQueryParams, "hotelId", r.hotelId, "")
	}
	if r.startDate != nil {
		parameterAddToHeaderOrQuery(localVarQueryParams, "startDate", r.startDate, "")
	}
	if r.endDate != nil {
		parameterAddToHeaderOrQuery(localVarQueryParams, "endDate", r.endDate, "")
	}
	if r.mode != nil {
		parameterAddToHeaderOrQuery(localVarQueryParams, "mode", r.mode, "")
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
	if r.xTransactionId != nil {
		parameterAddToHeaderOrQuery(localVarHeaderParams, "x-transactionId", r.xTransactionId, "")
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

type ProfileMembershipApiPostEnrollmentRequest struct {
	ctx context.Context
	ApiService *ProfileMembershipApiService
	extSystemCode string
	chainCode string
	authorization *string
	xAppKey *string
	enrollment *PostEnrollmentRequest
	xTransactionId *string
	acceptLanguage *string
}

// Bearer token that needs to be passed which is generated post user authentication
func (r ProfileMembershipApiPostEnrollmentRequest) Authorization(authorization string) ProfileMembershipApiPostEnrollmentRequest {
	r.authorization = &authorization
	return r
}

// Client or Partner&#39;s Application Key
func (r ProfileMembershipApiPostEnrollmentRequest) XAppKey(xAppKey string) ProfileMembershipApiPostEnrollmentRequest {
	r.xAppKey = &xAppKey
	return r
}

// Request object to create profile enrollment.
func (r ProfileMembershipApiPostEnrollmentRequest) Enrollment(enrollment PostEnrollmentRequest) ProfileMembershipApiPostEnrollmentRequest {
	r.enrollment = &enrollment
	return r
}

// Transaction Id
func (r ProfileMembershipApiPostEnrollmentRequest) XTransactionId(xTransactionId string) ProfileMembershipApiPostEnrollmentRequest {
	r.xTransactionId = &xTransactionId
	return r
}

// Language code
func (r ProfileMembershipApiPostEnrollmentRequest) AcceptLanguage(acceptLanguage string) ProfileMembershipApiPostEnrollmentRequest {
	r.acceptLanguage = &acceptLanguage
	return r
}

func (r ProfileMembershipApiPostEnrollmentRequest) Execute() (*Enrollment, *http.Response, error) {
	return r.ApiService.PostEnrollmentExecute(r)
}

/*
PostEnrollment Create an Enrollment

Use this API when you have a guest profile and you want to enroll that guest profile into a membership program in an external system. <p><strong>OperationId:</strong>postEnrollment</p>

 @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @param extSystemCode Profile will be downloaded from this External System.
 @param chainCode Chain code from which the External Profiles will be downloaded.
 @return ProfileMembershipApiPostEnrollmentRequest
*/
func (a *ProfileMembershipApiService) PostEnrollment(ctx context.Context, extSystemCode string, chainCode string) ProfileMembershipApiPostEnrollmentRequest {
	return ProfileMembershipApiPostEnrollmentRequest{
		ApiService: a,
		ctx: ctx,
		extSystemCode: extSystemCode,
		chainCode: chainCode,
	}
}

// Execute executes the request
//  @return Enrollment
func (a *ProfileMembershipApiService) PostEnrollmentExecute(r ProfileMembershipApiPostEnrollmentRequest) (*Enrollment, *http.Response, error) {
	var (
		localVarHTTPMethod   = http.MethodPost
		localVarPostBody     interface{}
		formFiles            []formFile
		localVarReturnValue  *Enrollment
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "ProfileMembershipApiService.PostEnrollment")
	if err != nil {
		return localVarReturnValue, nil, &GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/externalSystems/{extSystemCode}/chains/{chainCode}/enrollments"
	localVarPath = strings.Replace(localVarPath, "{"+"extSystemCode"+"}", url.PathEscape(parameterValueToString(r.extSystemCode, "extSystemCode")), -1)
	localVarPath = strings.Replace(localVarPath, "{"+"chainCode"+"}", url.PathEscape(parameterValueToString(r.chainCode, "chainCode")), -1)

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := url.Values{}
	localVarFormParams := url.Values{}
	if strlen(r.extSystemCode) < 1 {
		return localVarReturnValue, nil, reportError("extSystemCode must have at least 1 elements")
	}
	if strlen(r.extSystemCode) > 2000 {
		return localVarReturnValue, nil, reportError("extSystemCode must have less than 2000 elements")
	}
	if strlen(r.chainCode) < 1 {
		return localVarReturnValue, nil, reportError("chainCode must have at least 1 elements")
	}
	if strlen(r.chainCode) > 2000 {
		return localVarReturnValue, nil, reportError("chainCode must have less than 2000 elements")
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
	if r.xTransactionId != nil {
		parameterAddToHeaderOrQuery(localVarHeaderParams, "x-transactionId", r.xTransactionId, "")
	}
	if r.acceptLanguage != nil {
		parameterAddToHeaderOrQuery(localVarHeaderParams, "Accept-Language", r.acceptLanguage, "")
	}
	// body params
	localVarPostBody = r.enrollment
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

type ProfileMembershipApiRedeemAwardRequest struct {
	ctx context.Context
	ApiService *ProfileMembershipApiService
	extSystemCode string
	externalProfileId string
	authorization *string
	xAppKey *string
	award *RedeemAwardRequest
	xTransactionId *string
	acceptLanguage *string
}

// Bearer token that needs to be passed which is generated post user authentication
func (r ProfileMembershipApiRedeemAwardRequest) Authorization(authorization string) ProfileMembershipApiRedeemAwardRequest {
	r.authorization = &authorization
	return r
}

// Client or Partner&#39;s Application Key
func (r ProfileMembershipApiRedeemAwardRequest) XAppKey(xAppKey string) ProfileMembershipApiRedeemAwardRequest {
	r.xAppKey = &xAppKey
	return r
}

// Request object to redeem award.
func (r ProfileMembershipApiRedeemAwardRequest) Award(award RedeemAwardRequest) ProfileMembershipApiRedeemAwardRequest {
	r.award = &award
	return r
}

// Transaction Id
func (r ProfileMembershipApiRedeemAwardRequest) XTransactionId(xTransactionId string) ProfileMembershipApiRedeemAwardRequest {
	r.xTransactionId = &xTransactionId
	return r
}

// Language code
func (r ProfileMembershipApiRedeemAwardRequest) AcceptLanguage(acceptLanguage string) ProfileMembershipApiRedeemAwardRequest {
	r.acceptLanguage = &acceptLanguage
	return r
}

func (r ProfileMembershipApiRedeemAwardRequest) Execute() (*Award, *http.Response, error) {
	return r.ApiService.RedeemAwardExecute(r)
}

/*
RedeemAward Redeem an award

Redeem an award that exists on a profile. <p><strong>OperationId:</strong>redeemAward</p>

 @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @param extSystemCode Profile will be downloaded from this External System.
 @param externalProfileId
 @return ProfileMembershipApiRedeemAwardRequest
*/
func (a *ProfileMembershipApiService) RedeemAward(ctx context.Context, extSystemCode string, externalProfileId string) ProfileMembershipApiRedeemAwardRequest {
	return ProfileMembershipApiRedeemAwardRequest{
		ApiService: a,
		ctx: ctx,
		extSystemCode: extSystemCode,
		externalProfileId: externalProfileId,
	}
}

// Execute executes the request
//  @return Award
func (a *ProfileMembershipApiService) RedeemAwardExecute(r ProfileMembershipApiRedeemAwardRequest) (*Award, *http.Response, error) {
	var (
		localVarHTTPMethod   = http.MethodPut
		localVarPostBody     interface{}
		formFiles            []formFile
		localVarReturnValue  *Award
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "ProfileMembershipApiService.RedeemAward")
	if err != nil {
		return localVarReturnValue, nil, &GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/externalSystems/{extSystemCode}/profiles/{externalProfileId}/profileAwards"
	localVarPath = strings.Replace(localVarPath, "{"+"extSystemCode"+"}", url.PathEscape(parameterValueToString(r.extSystemCode, "extSystemCode")), -1)
	localVarPath = strings.Replace(localVarPath, "{"+"externalProfileId"+"}", url.PathEscape(parameterValueToString(r.externalProfileId, "externalProfileId")), -1)

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := url.Values{}
	localVarFormParams := url.Values{}
	if strlen(r.extSystemCode) < 1 {
		return localVarReturnValue, nil, reportError("extSystemCode must have at least 1 elements")
	}
	if strlen(r.extSystemCode) > 2000 {
		return localVarReturnValue, nil, reportError("extSystemCode must have less than 2000 elements")
	}
	if strlen(r.externalProfileId) < 1 {
		return localVarReturnValue, nil, reportError("externalProfileId must have at least 1 elements")
	}
	if strlen(r.externalProfileId) > 2000 {
		return localVarReturnValue, nil, reportError("externalProfileId must have less than 2000 elements")
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
	if r.xTransactionId != nil {
		parameterAddToHeaderOrQuery(localVarHeaderParams, "x-transactionId", r.xTransactionId, "")
	}
	if r.acceptLanguage != nil {
		parameterAddToHeaderOrQuery(localVarHeaderParams, "Accept-Language", r.acceptLanguage, "")
	}
	// body params
	localVarPostBody = r.award
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
