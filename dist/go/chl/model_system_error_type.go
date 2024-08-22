/*
OPERA Cloud Channel Configuration API

APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package chl

import (
	"encoding/json"
)

// checks if the SystemErrorType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &SystemErrorType{}

// SystemErrorType Identify error details of external system.
type SystemErrorType struct {
	BookingResponse *SystemErrorBookingResponseType `json:"bookingResponse,omitempty"`
	DateRange *TimeSpanType `json:"dateRange,omitempty"`
	// Code and description of error.
	ErrorCode *string `json:"errorCode,omitempty"`
	// description of error.
	ErrorDescription *string `json:"errorDescription,omitempty"`
	// Prefix of system error code.
	ErrorPrefix *string `json:"errorPrefix,omitempty"`
	// Suffix of system error code.
	ErrorSuffix *string `json:"errorSuffix,omitempty"`
	// Indicates whether system error code is manual process or not
	ManualProcess *bool `json:"manualProcess,omitempty"`
}

// NewSystemErrorType instantiates a new SystemErrorType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewSystemErrorType() *SystemErrorType {
	this := SystemErrorType{}
	return &this
}

// NewSystemErrorTypeWithDefaults instantiates a new SystemErrorType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewSystemErrorTypeWithDefaults() *SystemErrorType {
	this := SystemErrorType{}
	return &this
}

// GetBookingResponse returns the BookingResponse field value if set, zero value otherwise.
func (o *SystemErrorType) GetBookingResponse() SystemErrorBookingResponseType {
	if o == nil || IsNil(o.BookingResponse) {
		var ret SystemErrorBookingResponseType
		return ret
	}
	return *o.BookingResponse
}

// GetBookingResponseOk returns a tuple with the BookingResponse field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SystemErrorType) GetBookingResponseOk() (*SystemErrorBookingResponseType, bool) {
	if o == nil || IsNil(o.BookingResponse) {
		return nil, false
	}
	return o.BookingResponse, true
}

// HasBookingResponse returns a boolean if a field has been set.
func (o *SystemErrorType) HasBookingResponse() bool {
	if o != nil && !IsNil(o.BookingResponse) {
		return true
	}

	return false
}

// SetBookingResponse gets a reference to the given SystemErrorBookingResponseType and assigns it to the BookingResponse field.
func (o *SystemErrorType) SetBookingResponse(v SystemErrorBookingResponseType) {
	o.BookingResponse = &v
}

// GetDateRange returns the DateRange field value if set, zero value otherwise.
func (o *SystemErrorType) GetDateRange() TimeSpanType {
	if o == nil || IsNil(o.DateRange) {
		var ret TimeSpanType
		return ret
	}
	return *o.DateRange
}

// GetDateRangeOk returns a tuple with the DateRange field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SystemErrorType) GetDateRangeOk() (*TimeSpanType, bool) {
	if o == nil || IsNil(o.DateRange) {
		return nil, false
	}
	return o.DateRange, true
}

// HasDateRange returns a boolean if a field has been set.
func (o *SystemErrorType) HasDateRange() bool {
	if o != nil && !IsNil(o.DateRange) {
		return true
	}

	return false
}

// SetDateRange gets a reference to the given TimeSpanType and assigns it to the DateRange field.
func (o *SystemErrorType) SetDateRange(v TimeSpanType) {
	o.DateRange = &v
}

// GetErrorCode returns the ErrorCode field value if set, zero value otherwise.
func (o *SystemErrorType) GetErrorCode() string {
	if o == nil || IsNil(o.ErrorCode) {
		var ret string
		return ret
	}
	return *o.ErrorCode
}

// GetErrorCodeOk returns a tuple with the ErrorCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SystemErrorType) GetErrorCodeOk() (*string, bool) {
	if o == nil || IsNil(o.ErrorCode) {
		return nil, false
	}
	return o.ErrorCode, true
}

// HasErrorCode returns a boolean if a field has been set.
func (o *SystemErrorType) HasErrorCode() bool {
	if o != nil && !IsNil(o.ErrorCode) {
		return true
	}

	return false
}

// SetErrorCode gets a reference to the given string and assigns it to the ErrorCode field.
func (o *SystemErrorType) SetErrorCode(v string) {
	o.ErrorCode = &v
}

// GetErrorDescription returns the ErrorDescription field value if set, zero value otherwise.
func (o *SystemErrorType) GetErrorDescription() string {
	if o == nil || IsNil(o.ErrorDescription) {
		var ret string
		return ret
	}
	return *o.ErrorDescription
}

// GetErrorDescriptionOk returns a tuple with the ErrorDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SystemErrorType) GetErrorDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.ErrorDescription) {
		return nil, false
	}
	return o.ErrorDescription, true
}

// HasErrorDescription returns a boolean if a field has been set.
func (o *SystemErrorType) HasErrorDescription() bool {
	if o != nil && !IsNil(o.ErrorDescription) {
		return true
	}

	return false
}

// SetErrorDescription gets a reference to the given string and assigns it to the ErrorDescription field.
func (o *SystemErrorType) SetErrorDescription(v string) {
	o.ErrorDescription = &v
}

// GetErrorPrefix returns the ErrorPrefix field value if set, zero value otherwise.
func (o *SystemErrorType) GetErrorPrefix() string {
	if o == nil || IsNil(o.ErrorPrefix) {
		var ret string
		return ret
	}
	return *o.ErrorPrefix
}

// GetErrorPrefixOk returns a tuple with the ErrorPrefix field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SystemErrorType) GetErrorPrefixOk() (*string, bool) {
	if o == nil || IsNil(o.ErrorPrefix) {
		return nil, false
	}
	return o.ErrorPrefix, true
}

// HasErrorPrefix returns a boolean if a field has been set.
func (o *SystemErrorType) HasErrorPrefix() bool {
	if o != nil && !IsNil(o.ErrorPrefix) {
		return true
	}

	return false
}

// SetErrorPrefix gets a reference to the given string and assigns it to the ErrorPrefix field.
func (o *SystemErrorType) SetErrorPrefix(v string) {
	o.ErrorPrefix = &v
}

// GetErrorSuffix returns the ErrorSuffix field value if set, zero value otherwise.
func (o *SystemErrorType) GetErrorSuffix() string {
	if o == nil || IsNil(o.ErrorSuffix) {
		var ret string
		return ret
	}
	return *o.ErrorSuffix
}

// GetErrorSuffixOk returns a tuple with the ErrorSuffix field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SystemErrorType) GetErrorSuffixOk() (*string, bool) {
	if o == nil || IsNil(o.ErrorSuffix) {
		return nil, false
	}
	return o.ErrorSuffix, true
}

// HasErrorSuffix returns a boolean if a field has been set.
func (o *SystemErrorType) HasErrorSuffix() bool {
	if o != nil && !IsNil(o.ErrorSuffix) {
		return true
	}

	return false
}

// SetErrorSuffix gets a reference to the given string and assigns it to the ErrorSuffix field.
func (o *SystemErrorType) SetErrorSuffix(v string) {
	o.ErrorSuffix = &v
}

// GetManualProcess returns the ManualProcess field value if set, zero value otherwise.
func (o *SystemErrorType) GetManualProcess() bool {
	if o == nil || IsNil(o.ManualProcess) {
		var ret bool
		return ret
	}
	return *o.ManualProcess
}

// GetManualProcessOk returns a tuple with the ManualProcess field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SystemErrorType) GetManualProcessOk() (*bool, bool) {
	if o == nil || IsNil(o.ManualProcess) {
		return nil, false
	}
	return o.ManualProcess, true
}

// HasManualProcess returns a boolean if a field has been set.
func (o *SystemErrorType) HasManualProcess() bool {
	if o != nil && !IsNil(o.ManualProcess) {
		return true
	}

	return false
}

// SetManualProcess gets a reference to the given bool and assigns it to the ManualProcess field.
func (o *SystemErrorType) SetManualProcess(v bool) {
	o.ManualProcess = &v
}

func (o SystemErrorType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o SystemErrorType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BookingResponse) {
		toSerialize["bookingResponse"] = o.BookingResponse
	}
	if !IsNil(o.DateRange) {
		toSerialize["dateRange"] = o.DateRange
	}
	if !IsNil(o.ErrorCode) {
		toSerialize["errorCode"] = o.ErrorCode
	}
	if !IsNil(o.ErrorDescription) {
		toSerialize["errorDescription"] = o.ErrorDescription
	}
	if !IsNil(o.ErrorPrefix) {
		toSerialize["errorPrefix"] = o.ErrorPrefix
	}
	if !IsNil(o.ErrorSuffix) {
		toSerialize["errorSuffix"] = o.ErrorSuffix
	}
	if !IsNil(o.ManualProcess) {
		toSerialize["manualProcess"] = o.ManualProcess
	}
	return toSerialize, nil
}

type NullableSystemErrorType struct {
	value *SystemErrorType
	isSet bool
}

func (v NullableSystemErrorType) Get() *SystemErrorType {
	return v.value
}

func (v *NullableSystemErrorType) Set(val *SystemErrorType) {
	v.value = val
	v.isSet = true
}

func (v NullableSystemErrorType) IsSet() bool {
	return v.isSet
}

func (v *NullableSystemErrorType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSystemErrorType(val *SystemErrorType) *NullableSystemErrorType {
	return &NullableSystemErrorType{value: val, isSet: true}
}

func (v NullableSystemErrorType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSystemErrorType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


