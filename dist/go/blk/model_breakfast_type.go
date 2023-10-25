/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
)

// checks if the BreakfastType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BreakfastType{}

// BreakfastType Information about breakfast charges.
type BreakfastType struct {
	// Indicates if the room rate quoted includes the breakfast cost.
	BreakfastIncluded *bool `json:"breakfastIncluded,omitempty"`
	// The exact breakfast method for this business block that is included or offered as an extra.
	Description *string `json:"description,omitempty"`
	Price *CurrencyAmountType `json:"price,omitempty"`
}

// NewBreakfastType instantiates a new BreakfastType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBreakfastType() *BreakfastType {
	this := BreakfastType{}
	return &this
}

// NewBreakfastTypeWithDefaults instantiates a new BreakfastType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBreakfastTypeWithDefaults() *BreakfastType {
	this := BreakfastType{}
	return &this
}

// GetBreakfastIncluded returns the BreakfastIncluded field value if set, zero value otherwise.
func (o *BreakfastType) GetBreakfastIncluded() bool {
	if o == nil || IsNil(o.BreakfastIncluded) {
		var ret bool
		return ret
	}
	return *o.BreakfastIncluded
}

// GetBreakfastIncludedOk returns a tuple with the BreakfastIncluded field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BreakfastType) GetBreakfastIncludedOk() (*bool, bool) {
	if o == nil || IsNil(o.BreakfastIncluded) {
		return nil, false
	}
	return o.BreakfastIncluded, true
}

// HasBreakfastIncluded returns a boolean if a field has been set.
func (o *BreakfastType) HasBreakfastIncluded() bool {
	if o != nil && !IsNil(o.BreakfastIncluded) {
		return true
	}

	return false
}

// SetBreakfastIncluded gets a reference to the given bool and assigns it to the BreakfastIncluded field.
func (o *BreakfastType) SetBreakfastIncluded(v bool) {
	o.BreakfastIncluded = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *BreakfastType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BreakfastType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *BreakfastType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *BreakfastType) SetDescription(v string) {
	o.Description = &v
}

// GetPrice returns the Price field value if set, zero value otherwise.
func (o *BreakfastType) GetPrice() CurrencyAmountType {
	if o == nil || IsNil(o.Price) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.Price
}

// GetPriceOk returns a tuple with the Price field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BreakfastType) GetPriceOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.Price) {
		return nil, false
	}
	return o.Price, true
}

// HasPrice returns a boolean if a field has been set.
func (o *BreakfastType) HasPrice() bool {
	if o != nil && !IsNil(o.Price) {
		return true
	}

	return false
}

// SetPrice gets a reference to the given CurrencyAmountType and assigns it to the Price field.
func (o *BreakfastType) SetPrice(v CurrencyAmountType) {
	o.Price = &v
}

func (o BreakfastType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BreakfastType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BreakfastIncluded) {
		toSerialize["breakfastIncluded"] = o.BreakfastIncluded
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.Price) {
		toSerialize["price"] = o.Price
	}
	return toSerialize, nil
}

type NullableBreakfastType struct {
	value *BreakfastType
	isSet bool
}

func (v NullableBreakfastType) Get() *BreakfastType {
	return v.value
}

func (v *NullableBreakfastType) Set(val *BreakfastType) {
	v.value = val
	v.isSet = true
}

func (v NullableBreakfastType) IsSet() bool {
	return v.isSet
}

func (v *NullableBreakfastType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBreakfastType(val *BreakfastType) *NullableBreakfastType {
	return &NullableBreakfastType{value: val, isSet: true}
}

func (v NullableBreakfastType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBreakfastType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


