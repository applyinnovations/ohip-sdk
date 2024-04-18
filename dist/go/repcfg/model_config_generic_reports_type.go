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

// checks if the ConfigGenericReportsType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ConfigGenericReportsType{}

// ConfigGenericReportsType It contains collection of reports.
type ConfigGenericReportsType struct {
	// A generic report.
	Report []ConfigGenericReportType `json:"report,omitempty"`
	// Hotel code in which reports to be set up belong to.
	HotelId *string `json:"hotelId,omitempty"`
	// Chain code in which reports to be set up belong to.
	ChainCode *string `json:"chainCode,omitempty"`
}

// NewConfigGenericReportsType instantiates a new ConfigGenericReportsType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewConfigGenericReportsType() *ConfigGenericReportsType {
	this := ConfigGenericReportsType{}
	return &this
}

// NewConfigGenericReportsTypeWithDefaults instantiates a new ConfigGenericReportsType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewConfigGenericReportsTypeWithDefaults() *ConfigGenericReportsType {
	this := ConfigGenericReportsType{}
	return &this
}

// GetReport returns the Report field value if set, zero value otherwise.
func (o *ConfigGenericReportsType) GetReport() []ConfigGenericReportType {
	if o == nil || IsNil(o.Report) {
		var ret []ConfigGenericReportType
		return ret
	}
	return o.Report
}

// GetReportOk returns a tuple with the Report field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigGenericReportsType) GetReportOk() ([]ConfigGenericReportType, bool) {
	if o == nil || IsNil(o.Report) {
		return nil, false
	}
	return o.Report, true
}

// HasReport returns a boolean if a field has been set.
func (o *ConfigGenericReportsType) HasReport() bool {
	if o != nil && !IsNil(o.Report) {
		return true
	}

	return false
}

// SetReport gets a reference to the given []ConfigGenericReportType and assigns it to the Report field.
func (o *ConfigGenericReportsType) SetReport(v []ConfigGenericReportType) {
	o.Report = v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *ConfigGenericReportsType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigGenericReportsType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *ConfigGenericReportsType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *ConfigGenericReportsType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetChainCode returns the ChainCode field value if set, zero value otherwise.
func (o *ConfigGenericReportsType) GetChainCode() string {
	if o == nil || IsNil(o.ChainCode) {
		var ret string
		return ret
	}
	return *o.ChainCode
}

// GetChainCodeOk returns a tuple with the ChainCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigGenericReportsType) GetChainCodeOk() (*string, bool) {
	if o == nil || IsNil(o.ChainCode) {
		return nil, false
	}
	return o.ChainCode, true
}

// HasChainCode returns a boolean if a field has been set.
func (o *ConfigGenericReportsType) HasChainCode() bool {
	if o != nil && !IsNil(o.ChainCode) {
		return true
	}

	return false
}

// SetChainCode gets a reference to the given string and assigns it to the ChainCode field.
func (o *ConfigGenericReportsType) SetChainCode(v string) {
	o.ChainCode = &v
}

func (o ConfigGenericReportsType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ConfigGenericReportsType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Report) {
		toSerialize["report"] = o.Report
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.ChainCode) {
		toSerialize["chainCode"] = o.ChainCode
	}
	return toSerialize, nil
}

type NullableConfigGenericReportsType struct {
	value *ConfigGenericReportsType
	isSet bool
}

func (v NullableConfigGenericReportsType) Get() *ConfigGenericReportsType {
	return v.value
}

func (v *NullableConfigGenericReportsType) Set(val *ConfigGenericReportsType) {
	v.value = val
	v.isSet = true
}

func (v NullableConfigGenericReportsType) IsSet() bool {
	return v.isSet
}

func (v *NullableConfigGenericReportsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableConfigGenericReportsType(val *ConfigGenericReportsType) *NullableConfigGenericReportsType {
	return &NullableConfigGenericReportsType{value: val, isSet: true}
}

func (v NullableConfigGenericReportsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableConfigGenericReportsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

