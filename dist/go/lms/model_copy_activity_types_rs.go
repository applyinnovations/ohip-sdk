/*
OPERA Cloud Leisure Management API

APIs to cater for external Leisure Management functionality integrated with OPERA Cloud.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package lms

import (
	"encoding/json"
)

// checks if the CopyActivityTypesRS type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CopyActivityTypesRS{}

// CopyActivityTypesRS Existing Operations Responses will eventually be modified to be extended from this type.
type CopyActivityTypesRS struct {
	// Allow end-to-end correlation of log messages with the corresponding Web service message throughout the processing of the Web service message.
	CorrelationId *string `json:"correlationId,omitempty"`
	// A reference for additional message identification, assigned by the requesting host system. When a request message includes an echo token the corresponding response message MUST include an echo token with an identical value.
	EchoToken *string `json:"echoToken,omitempty"`
	// Indicates if the operation supports the ability to force the retry request through OPERA services in the case where the external system continues to fail.
	EnforceAllowed *bool `json:"enforceAllowed,omitempty"`
	// An error that occurred during the processing of a message.
	Errors []ErrorType `json:"errors,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Indicates if the operation supports the ability to retry the request.
	RetryAllowed *bool `json:"retryAllowed,omitempty"`
	// Returning an empty element of this type indicates the successful processing of an message. This is used in conjunction with the Warning Type to report any warnings or business errors.
	Success map[string]interface{} `json:"success,omitempty"`
	// Indicates the creation date and time of the message in UTC using the following format specified by ISO 8601; YYYY-MM-DDThh:mm:ssZ with time values using the 24 hour clock (e.g. 20 November 2003, 1:59:38 pm UTC becomes 2003-11-20T13:59:38Z).
	TimeStamp *string `json:"timeStamp,omitempty"`
	// This attribute carries the user selected confirmation value on confirmation popup.
	UseLocalAllowed *bool `json:"useLocalAllowed,omitempty"`
	// For all Opera versioned messages, the version of the message is indicated by a Opera Version value.
	Version *string `json:"version,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewCopyActivityTypesRS instantiates a new CopyActivityTypesRS object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCopyActivityTypesRS() *CopyActivityTypesRS {
	this := CopyActivityTypesRS{}
	return &this
}

// NewCopyActivityTypesRSWithDefaults instantiates a new CopyActivityTypesRS object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCopyActivityTypesRSWithDefaults() *CopyActivityTypesRS {
	this := CopyActivityTypesRS{}
	return &this
}

// GetCorrelationId returns the CorrelationId field value if set, zero value otherwise.
func (o *CopyActivityTypesRS) GetCorrelationId() string {
	if o == nil || IsNil(o.CorrelationId) {
		var ret string
		return ret
	}
	return *o.CorrelationId
}

// GetCorrelationIdOk returns a tuple with the CorrelationId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyActivityTypesRS) GetCorrelationIdOk() (*string, bool) {
	if o == nil || IsNil(o.CorrelationId) {
		return nil, false
	}
	return o.CorrelationId, true
}

// HasCorrelationId returns a boolean if a field has been set.
func (o *CopyActivityTypesRS) HasCorrelationId() bool {
	if o != nil && !IsNil(o.CorrelationId) {
		return true
	}

	return false
}

// SetCorrelationId gets a reference to the given string and assigns it to the CorrelationId field.
func (o *CopyActivityTypesRS) SetCorrelationId(v string) {
	o.CorrelationId = &v
}

// GetEchoToken returns the EchoToken field value if set, zero value otherwise.
func (o *CopyActivityTypesRS) GetEchoToken() string {
	if o == nil || IsNil(o.EchoToken) {
		var ret string
		return ret
	}
	return *o.EchoToken
}

// GetEchoTokenOk returns a tuple with the EchoToken field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyActivityTypesRS) GetEchoTokenOk() (*string, bool) {
	if o == nil || IsNil(o.EchoToken) {
		return nil, false
	}
	return o.EchoToken, true
}

// HasEchoToken returns a boolean if a field has been set.
func (o *CopyActivityTypesRS) HasEchoToken() bool {
	if o != nil && !IsNil(o.EchoToken) {
		return true
	}

	return false
}

// SetEchoToken gets a reference to the given string and assigns it to the EchoToken field.
func (o *CopyActivityTypesRS) SetEchoToken(v string) {
	o.EchoToken = &v
}

// GetEnforceAllowed returns the EnforceAllowed field value if set, zero value otherwise.
func (o *CopyActivityTypesRS) GetEnforceAllowed() bool {
	if o == nil || IsNil(o.EnforceAllowed) {
		var ret bool
		return ret
	}
	return *o.EnforceAllowed
}

// GetEnforceAllowedOk returns a tuple with the EnforceAllowed field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyActivityTypesRS) GetEnforceAllowedOk() (*bool, bool) {
	if o == nil || IsNil(o.EnforceAllowed) {
		return nil, false
	}
	return o.EnforceAllowed, true
}

// HasEnforceAllowed returns a boolean if a field has been set.
func (o *CopyActivityTypesRS) HasEnforceAllowed() bool {
	if o != nil && !IsNil(o.EnforceAllowed) {
		return true
	}

	return false
}

// SetEnforceAllowed gets a reference to the given bool and assigns it to the EnforceAllowed field.
func (o *CopyActivityTypesRS) SetEnforceAllowed(v bool) {
	o.EnforceAllowed = &v
}

// GetErrors returns the Errors field value if set, zero value otherwise.
func (o *CopyActivityTypesRS) GetErrors() []ErrorType {
	if o == nil || IsNil(o.Errors) {
		var ret []ErrorType
		return ret
	}
	return o.Errors
}

// GetErrorsOk returns a tuple with the Errors field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyActivityTypesRS) GetErrorsOk() ([]ErrorType, bool) {
	if o == nil || IsNil(o.Errors) {
		return nil, false
	}
	return o.Errors, true
}

// HasErrors returns a boolean if a field has been set.
func (o *CopyActivityTypesRS) HasErrors() bool {
	if o != nil && !IsNil(o.Errors) {
		return true
	}

	return false
}

// SetErrors gets a reference to the given []ErrorType and assigns it to the Errors field.
func (o *CopyActivityTypesRS) SetErrors(v []ErrorType) {
	o.Errors = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *CopyActivityTypesRS) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyActivityTypesRS) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *CopyActivityTypesRS) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *CopyActivityTypesRS) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetRetryAllowed returns the RetryAllowed field value if set, zero value otherwise.
func (o *CopyActivityTypesRS) GetRetryAllowed() bool {
	if o == nil || IsNil(o.RetryAllowed) {
		var ret bool
		return ret
	}
	return *o.RetryAllowed
}

// GetRetryAllowedOk returns a tuple with the RetryAllowed field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyActivityTypesRS) GetRetryAllowedOk() (*bool, bool) {
	if o == nil || IsNil(o.RetryAllowed) {
		return nil, false
	}
	return o.RetryAllowed, true
}

// HasRetryAllowed returns a boolean if a field has been set.
func (o *CopyActivityTypesRS) HasRetryAllowed() bool {
	if o != nil && !IsNil(o.RetryAllowed) {
		return true
	}

	return false
}

// SetRetryAllowed gets a reference to the given bool and assigns it to the RetryAllowed field.
func (o *CopyActivityTypesRS) SetRetryAllowed(v bool) {
	o.RetryAllowed = &v
}

// GetSuccess returns the Success field value if set, zero value otherwise.
func (o *CopyActivityTypesRS) GetSuccess() map[string]interface{} {
	if o == nil || IsNil(o.Success) {
		var ret map[string]interface{}
		return ret
	}
	return o.Success
}

// GetSuccessOk returns a tuple with the Success field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyActivityTypesRS) GetSuccessOk() (map[string]interface{}, bool) {
	if o == nil || IsNil(o.Success) {
		return map[string]interface{}{}, false
	}
	return o.Success, true
}

// HasSuccess returns a boolean if a field has been set.
func (o *CopyActivityTypesRS) HasSuccess() bool {
	if o != nil && !IsNil(o.Success) {
		return true
	}

	return false
}

// SetSuccess gets a reference to the given map[string]interface{} and assigns it to the Success field.
func (o *CopyActivityTypesRS) SetSuccess(v map[string]interface{}) {
	o.Success = v
}

// GetTimeStamp returns the TimeStamp field value if set, zero value otherwise.
func (o *CopyActivityTypesRS) GetTimeStamp() string {
	if o == nil || IsNil(o.TimeStamp) {
		var ret string
		return ret
	}
	return *o.TimeStamp
}

// GetTimeStampOk returns a tuple with the TimeStamp field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyActivityTypesRS) GetTimeStampOk() (*string, bool) {
	if o == nil || IsNil(o.TimeStamp) {
		return nil, false
	}
	return o.TimeStamp, true
}

// HasTimeStamp returns a boolean if a field has been set.
func (o *CopyActivityTypesRS) HasTimeStamp() bool {
	if o != nil && !IsNil(o.TimeStamp) {
		return true
	}

	return false
}

// SetTimeStamp gets a reference to the given string and assigns it to the TimeStamp field.
func (o *CopyActivityTypesRS) SetTimeStamp(v string) {
	o.TimeStamp = &v
}

// GetUseLocalAllowed returns the UseLocalAllowed field value if set, zero value otherwise.
func (o *CopyActivityTypesRS) GetUseLocalAllowed() bool {
	if o == nil || IsNil(o.UseLocalAllowed) {
		var ret bool
		return ret
	}
	return *o.UseLocalAllowed
}

// GetUseLocalAllowedOk returns a tuple with the UseLocalAllowed field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyActivityTypesRS) GetUseLocalAllowedOk() (*bool, bool) {
	if o == nil || IsNil(o.UseLocalAllowed) {
		return nil, false
	}
	return o.UseLocalAllowed, true
}

// HasUseLocalAllowed returns a boolean if a field has been set.
func (o *CopyActivityTypesRS) HasUseLocalAllowed() bool {
	if o != nil && !IsNil(o.UseLocalAllowed) {
		return true
	}

	return false
}

// SetUseLocalAllowed gets a reference to the given bool and assigns it to the UseLocalAllowed field.
func (o *CopyActivityTypesRS) SetUseLocalAllowed(v bool) {
	o.UseLocalAllowed = &v
}

// GetVersion returns the Version field value if set, zero value otherwise.
func (o *CopyActivityTypesRS) GetVersion() string {
	if o == nil || IsNil(o.Version) {
		var ret string
		return ret
	}
	return *o.Version
}

// GetVersionOk returns a tuple with the Version field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyActivityTypesRS) GetVersionOk() (*string, bool) {
	if o == nil || IsNil(o.Version) {
		return nil, false
	}
	return o.Version, true
}

// HasVersion returns a boolean if a field has been set.
func (o *CopyActivityTypesRS) HasVersion() bool {
	if o != nil && !IsNil(o.Version) {
		return true
	}

	return false
}

// SetVersion gets a reference to the given string and assigns it to the Version field.
func (o *CopyActivityTypesRS) SetVersion(v string) {
	o.Version = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *CopyActivityTypesRS) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyActivityTypesRS) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *CopyActivityTypesRS) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *CopyActivityTypesRS) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o CopyActivityTypesRS) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CopyActivityTypesRS) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CorrelationId) {
		toSerialize["correlationId"] = o.CorrelationId
	}
	if !IsNil(o.EchoToken) {
		toSerialize["echoToken"] = o.EchoToken
	}
	if !IsNil(o.EnforceAllowed) {
		toSerialize["enforceAllowed"] = o.EnforceAllowed
	}
	if !IsNil(o.Errors) {
		toSerialize["errors"] = o.Errors
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.RetryAllowed) {
		toSerialize["retryAllowed"] = o.RetryAllowed
	}
	if !IsNil(o.Success) {
		toSerialize["success"] = o.Success
	}
	if !IsNil(o.TimeStamp) {
		toSerialize["timeStamp"] = o.TimeStamp
	}
	if !IsNil(o.UseLocalAllowed) {
		toSerialize["useLocalAllowed"] = o.UseLocalAllowed
	}
	if !IsNil(o.Version) {
		toSerialize["version"] = o.Version
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableCopyActivityTypesRS struct {
	value *CopyActivityTypesRS
	isSet bool
}

func (v NullableCopyActivityTypesRS) Get() *CopyActivityTypesRS {
	return v.value
}

func (v *NullableCopyActivityTypesRS) Set(val *CopyActivityTypesRS) {
	v.value = val
	v.isSet = true
}

func (v NullableCopyActivityTypesRS) IsSet() bool {
	return v.isSet
}

func (v *NullableCopyActivityTypesRS) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCopyActivityTypesRS(val *CopyActivityTypesRS) *NullableCopyActivityTypesRS {
	return &NullableCopyActivityTypesRS{value: val, isSet: true}
}

func (v NullableCopyActivityTypesRS) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCopyActivityTypesRS) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


