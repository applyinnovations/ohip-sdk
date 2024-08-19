/*
OPERA Cloud Rate API

APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rtp

import (
	"encoding/json"
)

// checks if the BestAvailableRateType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BestAvailableRateType{}

// BestAvailableRateType The list of best availabe rates for rates code(s).
type BestAvailableRateType struct {
	// Best available rate date available
	Date *string `json:"date,omitempty"`
	// Best available rate length of stay
	LengthOfStay *int32 `json:"lengthOfStay,omitempty"`
	RateCode []string `json:"rateCode,omitempty"`
}

// NewBestAvailableRateType instantiates a new BestAvailableRateType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBestAvailableRateType() *BestAvailableRateType {
	this := BestAvailableRateType{}
	return &this
}

// NewBestAvailableRateTypeWithDefaults instantiates a new BestAvailableRateType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBestAvailableRateTypeWithDefaults() *BestAvailableRateType {
	this := BestAvailableRateType{}
	return &this
}

// GetDate returns the Date field value if set, zero value otherwise.
func (o *BestAvailableRateType) GetDate() string {
	if o == nil || IsNil(o.Date) {
		var ret string
		return ret
	}
	return *o.Date
}

// GetDateOk returns a tuple with the Date field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BestAvailableRateType) GetDateOk() (*string, bool) {
	if o == nil || IsNil(o.Date) {
		return nil, false
	}
	return o.Date, true
}

// HasDate returns a boolean if a field has been set.
func (o *BestAvailableRateType) HasDate() bool {
	if o != nil && !IsNil(o.Date) {
		return true
	}

	return false
}

// SetDate gets a reference to the given string and assigns it to the Date field.
func (o *BestAvailableRateType) SetDate(v string) {
	o.Date = &v
}

// GetLengthOfStay returns the LengthOfStay field value if set, zero value otherwise.
func (o *BestAvailableRateType) GetLengthOfStay() int32 {
	if o == nil || IsNil(o.LengthOfStay) {
		var ret int32
		return ret
	}
	return *o.LengthOfStay
}

// GetLengthOfStayOk returns a tuple with the LengthOfStay field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BestAvailableRateType) GetLengthOfStayOk() (*int32, bool) {
	if o == nil || IsNil(o.LengthOfStay) {
		return nil, false
	}
	return o.LengthOfStay, true
}

// HasLengthOfStay returns a boolean if a field has been set.
func (o *BestAvailableRateType) HasLengthOfStay() bool {
	if o != nil && !IsNil(o.LengthOfStay) {
		return true
	}

	return false
}

// SetLengthOfStay gets a reference to the given int32 and assigns it to the LengthOfStay field.
func (o *BestAvailableRateType) SetLengthOfStay(v int32) {
	o.LengthOfStay = &v
}

// GetRateCode returns the RateCode field value if set, zero value otherwise.
func (o *BestAvailableRateType) GetRateCode() []string {
	if o == nil || IsNil(o.RateCode) {
		var ret []string
		return ret
	}
	return o.RateCode
}

// GetRateCodeOk returns a tuple with the RateCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BestAvailableRateType) GetRateCodeOk() ([]string, bool) {
	if o == nil || IsNil(o.RateCode) {
		return nil, false
	}
	return o.RateCode, true
}

// HasRateCode returns a boolean if a field has been set.
func (o *BestAvailableRateType) HasRateCode() bool {
	if o != nil && !IsNil(o.RateCode) {
		return true
	}

	return false
}

// SetRateCode gets a reference to the given []string and assigns it to the RateCode field.
func (o *BestAvailableRateType) SetRateCode(v []string) {
	o.RateCode = v
}

func (o BestAvailableRateType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BestAvailableRateType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Date) {
		toSerialize["date"] = o.Date
	}
	if !IsNil(o.LengthOfStay) {
		toSerialize["lengthOfStay"] = o.LengthOfStay
	}
	if !IsNil(o.RateCode) {
		toSerialize["rateCode"] = o.RateCode
	}
	return toSerialize, nil
}

type NullableBestAvailableRateType struct {
	value *BestAvailableRateType
	isSet bool
}

func (v NullableBestAvailableRateType) Get() *BestAvailableRateType {
	return v.value
}

func (v *NullableBestAvailableRateType) Set(val *BestAvailableRateType) {
	v.value = val
	v.isSet = true
}

func (v NullableBestAvailableRateType) IsSet() bool {
	return v.isSet
}

func (v *NullableBestAvailableRateType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBestAvailableRateType(val *BestAvailableRateType) *NullableBestAvailableRateType {
	return &NullableBestAvailableRateType{value: val, isSet: true}
}

func (v NullableBestAvailableRateType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBestAvailableRateType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


