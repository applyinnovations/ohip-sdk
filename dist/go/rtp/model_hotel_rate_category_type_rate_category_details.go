/*
OPERA Cloud Rate API

APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rtp

import (
	"encoding/json"
)

// checks if the HotelRateCategoryTypeRateCategoryDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HotelRateCategoryTypeRateCategoryDetails{}

// HotelRateCategoryTypeRateCategoryDetails Begin date for the rate category.
type HotelRateCategoryTypeRateCategoryDetails struct {
	// Begin date for the rate category.
	BeginDate *string `json:"beginDate,omitempty"`
	// Description of rate category.
	Description *string `json:"description,omitempty"`
	// End date for the rate category.
	EndDate *string `json:"endDate,omitempty"`
	// Active date of the room category.
	RateClass *string `json:"rateClass,omitempty"`
	// Indicates rate category sell sequence.
	SellSequence *float32 `json:"sellSequence,omitempty"`
}

// NewHotelRateCategoryTypeRateCategoryDetails instantiates a new HotelRateCategoryTypeRateCategoryDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHotelRateCategoryTypeRateCategoryDetails() *HotelRateCategoryTypeRateCategoryDetails {
	this := HotelRateCategoryTypeRateCategoryDetails{}
	return &this
}

// NewHotelRateCategoryTypeRateCategoryDetailsWithDefaults instantiates a new HotelRateCategoryTypeRateCategoryDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHotelRateCategoryTypeRateCategoryDetailsWithDefaults() *HotelRateCategoryTypeRateCategoryDetails {
	this := HotelRateCategoryTypeRateCategoryDetails{}
	return &this
}

// GetBeginDate returns the BeginDate field value if set, zero value otherwise.
func (o *HotelRateCategoryTypeRateCategoryDetails) GetBeginDate() string {
	if o == nil || IsNil(o.BeginDate) {
		var ret string
		return ret
	}
	return *o.BeginDate
}

// GetBeginDateOk returns a tuple with the BeginDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelRateCategoryTypeRateCategoryDetails) GetBeginDateOk() (*string, bool) {
	if o == nil || IsNil(o.BeginDate) {
		return nil, false
	}
	return o.BeginDate, true
}

// HasBeginDate returns a boolean if a field has been set.
func (o *HotelRateCategoryTypeRateCategoryDetails) HasBeginDate() bool {
	if o != nil && !IsNil(o.BeginDate) {
		return true
	}

	return false
}

// SetBeginDate gets a reference to the given string and assigns it to the BeginDate field.
func (o *HotelRateCategoryTypeRateCategoryDetails) SetBeginDate(v string) {
	o.BeginDate = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *HotelRateCategoryTypeRateCategoryDetails) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelRateCategoryTypeRateCategoryDetails) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *HotelRateCategoryTypeRateCategoryDetails) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *HotelRateCategoryTypeRateCategoryDetails) SetDescription(v string) {
	o.Description = &v
}

// GetEndDate returns the EndDate field value if set, zero value otherwise.
func (o *HotelRateCategoryTypeRateCategoryDetails) GetEndDate() string {
	if o == nil || IsNil(o.EndDate) {
		var ret string
		return ret
	}
	return *o.EndDate
}

// GetEndDateOk returns a tuple with the EndDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelRateCategoryTypeRateCategoryDetails) GetEndDateOk() (*string, bool) {
	if o == nil || IsNil(o.EndDate) {
		return nil, false
	}
	return o.EndDate, true
}

// HasEndDate returns a boolean if a field has been set.
func (o *HotelRateCategoryTypeRateCategoryDetails) HasEndDate() bool {
	if o != nil && !IsNil(o.EndDate) {
		return true
	}

	return false
}

// SetEndDate gets a reference to the given string and assigns it to the EndDate field.
func (o *HotelRateCategoryTypeRateCategoryDetails) SetEndDate(v string) {
	o.EndDate = &v
}

// GetRateClass returns the RateClass field value if set, zero value otherwise.
func (o *HotelRateCategoryTypeRateCategoryDetails) GetRateClass() string {
	if o == nil || IsNil(o.RateClass) {
		var ret string
		return ret
	}
	return *o.RateClass
}

// GetRateClassOk returns a tuple with the RateClass field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelRateCategoryTypeRateCategoryDetails) GetRateClassOk() (*string, bool) {
	if o == nil || IsNil(o.RateClass) {
		return nil, false
	}
	return o.RateClass, true
}

// HasRateClass returns a boolean if a field has been set.
func (o *HotelRateCategoryTypeRateCategoryDetails) HasRateClass() bool {
	if o != nil && !IsNil(o.RateClass) {
		return true
	}

	return false
}

// SetRateClass gets a reference to the given string and assigns it to the RateClass field.
func (o *HotelRateCategoryTypeRateCategoryDetails) SetRateClass(v string) {
	o.RateClass = &v
}

// GetSellSequence returns the SellSequence field value if set, zero value otherwise.
func (o *HotelRateCategoryTypeRateCategoryDetails) GetSellSequence() float32 {
	if o == nil || IsNil(o.SellSequence) {
		var ret float32
		return ret
	}
	return *o.SellSequence
}

// GetSellSequenceOk returns a tuple with the SellSequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelRateCategoryTypeRateCategoryDetails) GetSellSequenceOk() (*float32, bool) {
	if o == nil || IsNil(o.SellSequence) {
		return nil, false
	}
	return o.SellSequence, true
}

// HasSellSequence returns a boolean if a field has been set.
func (o *HotelRateCategoryTypeRateCategoryDetails) HasSellSequence() bool {
	if o != nil && !IsNil(o.SellSequence) {
		return true
	}

	return false
}

// SetSellSequence gets a reference to the given float32 and assigns it to the SellSequence field.
func (o *HotelRateCategoryTypeRateCategoryDetails) SetSellSequence(v float32) {
	o.SellSequence = &v
}

func (o HotelRateCategoryTypeRateCategoryDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HotelRateCategoryTypeRateCategoryDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BeginDate) {
		toSerialize["beginDate"] = o.BeginDate
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.EndDate) {
		toSerialize["endDate"] = o.EndDate
	}
	if !IsNil(o.RateClass) {
		toSerialize["rateClass"] = o.RateClass
	}
	if !IsNil(o.SellSequence) {
		toSerialize["sellSequence"] = o.SellSequence
	}
	return toSerialize, nil
}

type NullableHotelRateCategoryTypeRateCategoryDetails struct {
	value *HotelRateCategoryTypeRateCategoryDetails
	isSet bool
}

func (v NullableHotelRateCategoryTypeRateCategoryDetails) Get() *HotelRateCategoryTypeRateCategoryDetails {
	return v.value
}

func (v *NullableHotelRateCategoryTypeRateCategoryDetails) Set(val *HotelRateCategoryTypeRateCategoryDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableHotelRateCategoryTypeRateCategoryDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableHotelRateCategoryTypeRateCategoryDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHotelRateCategoryTypeRateCategoryDetails(val *HotelRateCategoryTypeRateCategoryDetails) *NullableHotelRateCategoryTypeRateCategoryDetails {
	return &NullableHotelRateCategoryTypeRateCategoryDetails{value: val, isSet: true}
}

func (v NullableHotelRateCategoryTypeRateCategoryDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHotelRateCategoryTypeRateCategoryDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


