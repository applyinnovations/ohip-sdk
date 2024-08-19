/*
OPERA Cloud Report Master Data Management API

APIs catering to the managing export master data configuration in a hotel.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package repcfg

import (
	"encoding/json"
)

// checks if the ExternalUrlInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ExternalUrlInfoType{}

// ExternalUrlInfoType Contains all the information of External Urls.
type ExternalUrlInfoType struct {
	// Report Url from external source.
	ExternalReportUrl *string `json:"externalReportUrl,omitempty"`
	// Indicates if the Url is dynamic
	IsUrlDynamic *bool `json:"isUrlDynamic,omitempty"`
}

// NewExternalUrlInfoType instantiates a new ExternalUrlInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewExternalUrlInfoType() *ExternalUrlInfoType {
	this := ExternalUrlInfoType{}
	return &this
}

// NewExternalUrlInfoTypeWithDefaults instantiates a new ExternalUrlInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewExternalUrlInfoTypeWithDefaults() *ExternalUrlInfoType {
	this := ExternalUrlInfoType{}
	return &this
}

// GetExternalReportUrl returns the ExternalReportUrl field value if set, zero value otherwise.
func (o *ExternalUrlInfoType) GetExternalReportUrl() string {
	if o == nil || IsNil(o.ExternalReportUrl) {
		var ret string
		return ret
	}
	return *o.ExternalReportUrl
}

// GetExternalReportUrlOk returns a tuple with the ExternalReportUrl field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExternalUrlInfoType) GetExternalReportUrlOk() (*string, bool) {
	if o == nil || IsNil(o.ExternalReportUrl) {
		return nil, false
	}
	return o.ExternalReportUrl, true
}

// HasExternalReportUrl returns a boolean if a field has been set.
func (o *ExternalUrlInfoType) HasExternalReportUrl() bool {
	if o != nil && !IsNil(o.ExternalReportUrl) {
		return true
	}

	return false
}

// SetExternalReportUrl gets a reference to the given string and assigns it to the ExternalReportUrl field.
func (o *ExternalUrlInfoType) SetExternalReportUrl(v string) {
	o.ExternalReportUrl = &v
}

// GetIsUrlDynamic returns the IsUrlDynamic field value if set, zero value otherwise.
func (o *ExternalUrlInfoType) GetIsUrlDynamic() bool {
	if o == nil || IsNil(o.IsUrlDynamic) {
		var ret bool
		return ret
	}
	return *o.IsUrlDynamic
}

// GetIsUrlDynamicOk returns a tuple with the IsUrlDynamic field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExternalUrlInfoType) GetIsUrlDynamicOk() (*bool, bool) {
	if o == nil || IsNil(o.IsUrlDynamic) {
		return nil, false
	}
	return o.IsUrlDynamic, true
}

// HasIsUrlDynamic returns a boolean if a field has been set.
func (o *ExternalUrlInfoType) HasIsUrlDynamic() bool {
	if o != nil && !IsNil(o.IsUrlDynamic) {
		return true
	}

	return false
}

// SetIsUrlDynamic gets a reference to the given bool and assigns it to the IsUrlDynamic field.
func (o *ExternalUrlInfoType) SetIsUrlDynamic(v bool) {
	o.IsUrlDynamic = &v
}

func (o ExternalUrlInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ExternalUrlInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ExternalReportUrl) {
		toSerialize["externalReportUrl"] = o.ExternalReportUrl
	}
	if !IsNil(o.IsUrlDynamic) {
		toSerialize["isUrlDynamic"] = o.IsUrlDynamic
	}
	return toSerialize, nil
}

type NullableExternalUrlInfoType struct {
	value *ExternalUrlInfoType
	isSet bool
}

func (v NullableExternalUrlInfoType) Get() *ExternalUrlInfoType {
	return v.value
}

func (v *NullableExternalUrlInfoType) Set(val *ExternalUrlInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableExternalUrlInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableExternalUrlInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableExternalUrlInfoType(val *ExternalUrlInfoType) *NullableExternalUrlInfoType {
	return &NullableExternalUrlInfoType{value: val, isSet: true}
}

func (v NullableExternalUrlInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableExternalUrlInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


