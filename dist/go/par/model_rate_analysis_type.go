/*
OPERA Cloud Price Availability Rate API

APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package par

import (
	"encoding/json"
)

// checks if the RateAnalysisType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RateAnalysisType{}

// RateAnalysisType Analysis type which would be returned by the Analysis procedure.
type RateAnalysisType struct {
	Code *RateAnalysisCodeType `json:"code,omitempty"`
	// The date of the analysis.
	Date *string `json:"date,omitempty"`
	// The description of the restriction which was analyzed.
	Description *string `json:"description,omitempty"`
}

// NewRateAnalysisType instantiates a new RateAnalysisType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRateAnalysisType() *RateAnalysisType {
	this := RateAnalysisType{}
	return &this
}

// NewRateAnalysisTypeWithDefaults instantiates a new RateAnalysisType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRateAnalysisTypeWithDefaults() *RateAnalysisType {
	this := RateAnalysisType{}
	return &this
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *RateAnalysisType) GetCode() RateAnalysisCodeType {
	if o == nil || IsNil(o.Code) {
		var ret RateAnalysisCodeType
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RateAnalysisType) GetCodeOk() (*RateAnalysisCodeType, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *RateAnalysisType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given RateAnalysisCodeType and assigns it to the Code field.
func (o *RateAnalysisType) SetCode(v RateAnalysisCodeType) {
	o.Code = &v
}

// GetDate returns the Date field value if set, zero value otherwise.
func (o *RateAnalysisType) GetDate() string {
	if o == nil || IsNil(o.Date) {
		var ret string
		return ret
	}
	return *o.Date
}

// GetDateOk returns a tuple with the Date field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RateAnalysisType) GetDateOk() (*string, bool) {
	if o == nil || IsNil(o.Date) {
		return nil, false
	}
	return o.Date, true
}

// HasDate returns a boolean if a field has been set.
func (o *RateAnalysisType) HasDate() bool {
	if o != nil && !IsNil(o.Date) {
		return true
	}

	return false
}

// SetDate gets a reference to the given string and assigns it to the Date field.
func (o *RateAnalysisType) SetDate(v string) {
	o.Date = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *RateAnalysisType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RateAnalysisType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *RateAnalysisType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *RateAnalysisType) SetDescription(v string) {
	o.Description = &v
}

func (o RateAnalysisType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RateAnalysisType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.Date) {
		toSerialize["date"] = o.Date
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	return toSerialize, nil
}

type NullableRateAnalysisType struct {
	value *RateAnalysisType
	isSet bool
}

func (v NullableRateAnalysisType) Get() *RateAnalysisType {
	return v.value
}

func (v *NullableRateAnalysisType) Set(val *RateAnalysisType) {
	v.value = val
	v.isSet = true
}

func (v NullableRateAnalysisType) IsSet() bool {
	return v.isSet
}

func (v *NullableRateAnalysisType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRateAnalysisType(val *RateAnalysisType) *NullableRateAnalysisType {
	return &NullableRateAnalysisType{value: val, isSet: true}
}

func (v NullableRateAnalysisType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRateAnalysisType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


