/*
OPERA Cloud Room Rotation Configuration Service API

APIs to cater for Room Rotation Configuration functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rmrcfg

import (
	"encoding/json"
)

// checks if the RotationPeriodType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RotationPeriodType{}

// RotationPeriodType Rotation Period Frequency and Start Date Details for a Property
type RotationPeriodType struct {
	// Represents if Rotation points/rules recalculation job should be re-triggered.
	ForceRecalculate *bool `json:"forceRecalculate,omitempty"`
	// Hotel code for Room Rotation Period.
	HotelId *string `json:"hotelId,omitempty"`
	PeriodFrequency *RotationPeriodFrequencyType `json:"periodFrequency,omitempty"`
	// Represents Effective start date for the Room Rotation Period Setup.
	StartDate *string `json:"startDate,omitempty"`
}

// NewRotationPeriodType instantiates a new RotationPeriodType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRotationPeriodType() *RotationPeriodType {
	this := RotationPeriodType{}
	var forceRecalculate bool = false
	this.ForceRecalculate = &forceRecalculate
	return &this
}

// NewRotationPeriodTypeWithDefaults instantiates a new RotationPeriodType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRotationPeriodTypeWithDefaults() *RotationPeriodType {
	this := RotationPeriodType{}
	var forceRecalculate bool = false
	this.ForceRecalculate = &forceRecalculate
	return &this
}

// GetForceRecalculate returns the ForceRecalculate field value if set, zero value otherwise.
func (o *RotationPeriodType) GetForceRecalculate() bool {
	if o == nil || IsNil(o.ForceRecalculate) {
		var ret bool
		return ret
	}
	return *o.ForceRecalculate
}

// GetForceRecalculateOk returns a tuple with the ForceRecalculate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RotationPeriodType) GetForceRecalculateOk() (*bool, bool) {
	if o == nil || IsNil(o.ForceRecalculate) {
		return nil, false
	}
	return o.ForceRecalculate, true
}

// HasForceRecalculate returns a boolean if a field has been set.
func (o *RotationPeriodType) HasForceRecalculate() bool {
	if o != nil && !IsNil(o.ForceRecalculate) {
		return true
	}

	return false
}

// SetForceRecalculate gets a reference to the given bool and assigns it to the ForceRecalculate field.
func (o *RotationPeriodType) SetForceRecalculate(v bool) {
	o.ForceRecalculate = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *RotationPeriodType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RotationPeriodType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *RotationPeriodType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *RotationPeriodType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetPeriodFrequency returns the PeriodFrequency field value if set, zero value otherwise.
func (o *RotationPeriodType) GetPeriodFrequency() RotationPeriodFrequencyType {
	if o == nil || IsNil(o.PeriodFrequency) {
		var ret RotationPeriodFrequencyType
		return ret
	}
	return *o.PeriodFrequency
}

// GetPeriodFrequencyOk returns a tuple with the PeriodFrequency field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RotationPeriodType) GetPeriodFrequencyOk() (*RotationPeriodFrequencyType, bool) {
	if o == nil || IsNil(o.PeriodFrequency) {
		return nil, false
	}
	return o.PeriodFrequency, true
}

// HasPeriodFrequency returns a boolean if a field has been set.
func (o *RotationPeriodType) HasPeriodFrequency() bool {
	if o != nil && !IsNil(o.PeriodFrequency) {
		return true
	}

	return false
}

// SetPeriodFrequency gets a reference to the given RotationPeriodFrequencyType and assigns it to the PeriodFrequency field.
func (o *RotationPeriodType) SetPeriodFrequency(v RotationPeriodFrequencyType) {
	o.PeriodFrequency = &v
}

// GetStartDate returns the StartDate field value if set, zero value otherwise.
func (o *RotationPeriodType) GetStartDate() string {
	if o == nil || IsNil(o.StartDate) {
		var ret string
		return ret
	}
	return *o.StartDate
}

// GetStartDateOk returns a tuple with the StartDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RotationPeriodType) GetStartDateOk() (*string, bool) {
	if o == nil || IsNil(o.StartDate) {
		return nil, false
	}
	return o.StartDate, true
}

// HasStartDate returns a boolean if a field has been set.
func (o *RotationPeriodType) HasStartDate() bool {
	if o != nil && !IsNil(o.StartDate) {
		return true
	}

	return false
}

// SetStartDate gets a reference to the given string and assigns it to the StartDate field.
func (o *RotationPeriodType) SetStartDate(v string) {
	o.StartDate = &v
}

func (o RotationPeriodType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RotationPeriodType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ForceRecalculate) {
		toSerialize["forceRecalculate"] = o.ForceRecalculate
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.PeriodFrequency) {
		toSerialize["periodFrequency"] = o.PeriodFrequency
	}
	if !IsNil(o.StartDate) {
		toSerialize["startDate"] = o.StartDate
	}
	return toSerialize, nil
}

type NullableRotationPeriodType struct {
	value *RotationPeriodType
	isSet bool
}

func (v NullableRotationPeriodType) Get() *RotationPeriodType {
	return v.value
}

func (v *NullableRotationPeriodType) Set(val *RotationPeriodType) {
	v.value = val
	v.isSet = true
}

func (v NullableRotationPeriodType) IsSet() bool {
	return v.isSet
}

func (v *NullableRotationPeriodType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRotationPeriodType(val *RotationPeriodType) *NullableRotationPeriodType {
	return &NullableRotationPeriodType{value: val, isSet: true}
}

func (v NullableRotationPeriodType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRotationPeriodType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


