/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
)

// checks if the CustomChargeExemptionType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CustomChargeExemptionType{}

// CustomChargeExemptionType Contains custom charges exemption information.
type CustomChargeExemptionType struct {
	// Contains List of Custom Charge Exemption information for a day.
	CustomChargeDates []CustomChargeExemptionDateType `json:"customChargeDates,omitempty"`
	CustomChargeQuantity *CustomChargeQuantityType `json:"customChargeQuantity,omitempty"`
	CustomChargesExemption *CodeDescriptionType `json:"customChargesExemption,omitempty"`
	// Contains list of dates which are valid for custom charge exemptions.
	ExcludedDates []ExcludedDateType `json:"excludedDates,omitempty"`
	// Exemption Percentage
	Percentage *float32 `json:"percentage,omitempty"`
	// Flag specifying if custom charge exemptions is property level or not.
	PropertyExemption *bool `json:"propertyExemption,omitempty"`
}

// NewCustomChargeExemptionType instantiates a new CustomChargeExemptionType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCustomChargeExemptionType() *CustomChargeExemptionType {
	this := CustomChargeExemptionType{}
	return &this
}

// NewCustomChargeExemptionTypeWithDefaults instantiates a new CustomChargeExemptionType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCustomChargeExemptionTypeWithDefaults() *CustomChargeExemptionType {
	this := CustomChargeExemptionType{}
	return &this
}

// GetCustomChargeDates returns the CustomChargeDates field value if set, zero value otherwise.
func (o *CustomChargeExemptionType) GetCustomChargeDates() []CustomChargeExemptionDateType {
	if o == nil || IsNil(o.CustomChargeDates) {
		var ret []CustomChargeExemptionDateType
		return ret
	}
	return o.CustomChargeDates
}

// GetCustomChargeDatesOk returns a tuple with the CustomChargeDates field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomChargeExemptionType) GetCustomChargeDatesOk() ([]CustomChargeExemptionDateType, bool) {
	if o == nil || IsNil(o.CustomChargeDates) {
		return nil, false
	}
	return o.CustomChargeDates, true
}

// HasCustomChargeDates returns a boolean if a field has been set.
func (o *CustomChargeExemptionType) HasCustomChargeDates() bool {
	if o != nil && !IsNil(o.CustomChargeDates) {
		return true
	}

	return false
}

// SetCustomChargeDates gets a reference to the given []CustomChargeExemptionDateType and assigns it to the CustomChargeDates field.
func (o *CustomChargeExemptionType) SetCustomChargeDates(v []CustomChargeExemptionDateType) {
	o.CustomChargeDates = v
}

// GetCustomChargeQuantity returns the CustomChargeQuantity field value if set, zero value otherwise.
func (o *CustomChargeExemptionType) GetCustomChargeQuantity() CustomChargeQuantityType {
	if o == nil || IsNil(o.CustomChargeQuantity) {
		var ret CustomChargeQuantityType
		return ret
	}
	return *o.CustomChargeQuantity
}

// GetCustomChargeQuantityOk returns a tuple with the CustomChargeQuantity field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomChargeExemptionType) GetCustomChargeQuantityOk() (*CustomChargeQuantityType, bool) {
	if o == nil || IsNil(o.CustomChargeQuantity) {
		return nil, false
	}
	return o.CustomChargeQuantity, true
}

// HasCustomChargeQuantity returns a boolean if a field has been set.
func (o *CustomChargeExemptionType) HasCustomChargeQuantity() bool {
	if o != nil && !IsNil(o.CustomChargeQuantity) {
		return true
	}

	return false
}

// SetCustomChargeQuantity gets a reference to the given CustomChargeQuantityType and assigns it to the CustomChargeQuantity field.
func (o *CustomChargeExemptionType) SetCustomChargeQuantity(v CustomChargeQuantityType) {
	o.CustomChargeQuantity = &v
}

// GetCustomChargesExemption returns the CustomChargesExemption field value if set, zero value otherwise.
func (o *CustomChargeExemptionType) GetCustomChargesExemption() CodeDescriptionType {
	if o == nil || IsNil(o.CustomChargesExemption) {
		var ret CodeDescriptionType
		return ret
	}
	return *o.CustomChargesExemption
}

// GetCustomChargesExemptionOk returns a tuple with the CustomChargesExemption field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomChargeExemptionType) GetCustomChargesExemptionOk() (*CodeDescriptionType, bool) {
	if o == nil || IsNil(o.CustomChargesExemption) {
		return nil, false
	}
	return o.CustomChargesExemption, true
}

// HasCustomChargesExemption returns a boolean if a field has been set.
func (o *CustomChargeExemptionType) HasCustomChargesExemption() bool {
	if o != nil && !IsNil(o.CustomChargesExemption) {
		return true
	}

	return false
}

// SetCustomChargesExemption gets a reference to the given CodeDescriptionType and assigns it to the CustomChargesExemption field.
func (o *CustomChargeExemptionType) SetCustomChargesExemption(v CodeDescriptionType) {
	o.CustomChargesExemption = &v
}

// GetExcludedDates returns the ExcludedDates field value if set, zero value otherwise.
func (o *CustomChargeExemptionType) GetExcludedDates() []ExcludedDateType {
	if o == nil || IsNil(o.ExcludedDates) {
		var ret []ExcludedDateType
		return ret
	}
	return o.ExcludedDates
}

// GetExcludedDatesOk returns a tuple with the ExcludedDates field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomChargeExemptionType) GetExcludedDatesOk() ([]ExcludedDateType, bool) {
	if o == nil || IsNil(o.ExcludedDates) {
		return nil, false
	}
	return o.ExcludedDates, true
}

// HasExcludedDates returns a boolean if a field has been set.
func (o *CustomChargeExemptionType) HasExcludedDates() bool {
	if o != nil && !IsNil(o.ExcludedDates) {
		return true
	}

	return false
}

// SetExcludedDates gets a reference to the given []ExcludedDateType and assigns it to the ExcludedDates field.
func (o *CustomChargeExemptionType) SetExcludedDates(v []ExcludedDateType) {
	o.ExcludedDates = v
}

// GetPercentage returns the Percentage field value if set, zero value otherwise.
func (o *CustomChargeExemptionType) GetPercentage() float32 {
	if o == nil || IsNil(o.Percentage) {
		var ret float32
		return ret
	}
	return *o.Percentage
}

// GetPercentageOk returns a tuple with the Percentage field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomChargeExemptionType) GetPercentageOk() (*float32, bool) {
	if o == nil || IsNil(o.Percentage) {
		return nil, false
	}
	return o.Percentage, true
}

// HasPercentage returns a boolean if a field has been set.
func (o *CustomChargeExemptionType) HasPercentage() bool {
	if o != nil && !IsNil(o.Percentage) {
		return true
	}

	return false
}

// SetPercentage gets a reference to the given float32 and assigns it to the Percentage field.
func (o *CustomChargeExemptionType) SetPercentage(v float32) {
	o.Percentage = &v
}

// GetPropertyExemption returns the PropertyExemption field value if set, zero value otherwise.
func (o *CustomChargeExemptionType) GetPropertyExemption() bool {
	if o == nil || IsNil(o.PropertyExemption) {
		var ret bool
		return ret
	}
	return *o.PropertyExemption
}

// GetPropertyExemptionOk returns a tuple with the PropertyExemption field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomChargeExemptionType) GetPropertyExemptionOk() (*bool, bool) {
	if o == nil || IsNil(o.PropertyExemption) {
		return nil, false
	}
	return o.PropertyExemption, true
}

// HasPropertyExemption returns a boolean if a field has been set.
func (o *CustomChargeExemptionType) HasPropertyExemption() bool {
	if o != nil && !IsNil(o.PropertyExemption) {
		return true
	}

	return false
}

// SetPropertyExemption gets a reference to the given bool and assigns it to the PropertyExemption field.
func (o *CustomChargeExemptionType) SetPropertyExemption(v bool) {
	o.PropertyExemption = &v
}

func (o CustomChargeExemptionType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CustomChargeExemptionType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CustomChargeDates) {
		toSerialize["customChargeDates"] = o.CustomChargeDates
	}
	if !IsNil(o.CustomChargeQuantity) {
		toSerialize["customChargeQuantity"] = o.CustomChargeQuantity
	}
	if !IsNil(o.CustomChargesExemption) {
		toSerialize["customChargesExemption"] = o.CustomChargesExemption
	}
	if !IsNil(o.ExcludedDates) {
		toSerialize["excludedDates"] = o.ExcludedDates
	}
	if !IsNil(o.Percentage) {
		toSerialize["percentage"] = o.Percentage
	}
	if !IsNil(o.PropertyExemption) {
		toSerialize["propertyExemption"] = o.PropertyExemption
	}
	return toSerialize, nil
}

type NullableCustomChargeExemptionType struct {
	value *CustomChargeExemptionType
	isSet bool
}

func (v NullableCustomChargeExemptionType) Get() *CustomChargeExemptionType {
	return v.value
}

func (v *NullableCustomChargeExemptionType) Set(val *CustomChargeExemptionType) {
	v.value = val
	v.isSet = true
}

func (v NullableCustomChargeExemptionType) IsSet() bool {
	return v.isSet
}

func (v *NullableCustomChargeExemptionType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCustomChargeExemptionType(val *CustomChargeExemptionType) *NullableCustomChargeExemptionType {
	return &NullableCustomChargeExemptionType{value: val, isSet: true}
}

func (v NullableCustomChargeExemptionType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCustomChargeExemptionType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


