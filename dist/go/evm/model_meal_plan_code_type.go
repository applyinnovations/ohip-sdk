/*
OPERA Cloud Sales Event Management API

APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evm

import (
	"encoding/json"
)

// checks if the MealPlanCodeType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &MealPlanCodeType{}

// MealPlanCodeType Meal plan codes associated with the rate codes.
type MealPlanCodeType struct {
	// Represents if the meal plan code is available for breakfast or not.
	BreakfastIncluded *bool `json:"breakfastIncluded,omitempty"`
	// Meal plan code.
	Code *string `json:"code,omitempty"`
	// Represents if the meal plan code is available for dinner or not.
	DinnerIncluded *bool `json:"dinnerIncluded,omitempty"`
	// Represents if the meal plan code is included in rate code or not.
	Included *bool `json:"included,omitempty"`
	// Represents if the meal plan code is available for lunch or not.
	LunchIncluded *bool `json:"lunchIncluded,omitempty"`
}

// NewMealPlanCodeType instantiates a new MealPlanCodeType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMealPlanCodeType() *MealPlanCodeType {
	this := MealPlanCodeType{}
	return &this
}

// NewMealPlanCodeTypeWithDefaults instantiates a new MealPlanCodeType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMealPlanCodeTypeWithDefaults() *MealPlanCodeType {
	this := MealPlanCodeType{}
	return &this
}

// GetBreakfastIncluded returns the BreakfastIncluded field value if set, zero value otherwise.
func (o *MealPlanCodeType) GetBreakfastIncluded() bool {
	if o == nil || IsNil(o.BreakfastIncluded) {
		var ret bool
		return ret
	}
	return *o.BreakfastIncluded
}

// GetBreakfastIncludedOk returns a tuple with the BreakfastIncluded field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MealPlanCodeType) GetBreakfastIncludedOk() (*bool, bool) {
	if o == nil || IsNil(o.BreakfastIncluded) {
		return nil, false
	}
	return o.BreakfastIncluded, true
}

// HasBreakfastIncluded returns a boolean if a field has been set.
func (o *MealPlanCodeType) HasBreakfastIncluded() bool {
	if o != nil && !IsNil(o.BreakfastIncluded) {
		return true
	}

	return false
}

// SetBreakfastIncluded gets a reference to the given bool and assigns it to the BreakfastIncluded field.
func (o *MealPlanCodeType) SetBreakfastIncluded(v bool) {
	o.BreakfastIncluded = &v
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *MealPlanCodeType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MealPlanCodeType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *MealPlanCodeType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *MealPlanCodeType) SetCode(v string) {
	o.Code = &v
}

// GetDinnerIncluded returns the DinnerIncluded field value if set, zero value otherwise.
func (o *MealPlanCodeType) GetDinnerIncluded() bool {
	if o == nil || IsNil(o.DinnerIncluded) {
		var ret bool
		return ret
	}
	return *o.DinnerIncluded
}

// GetDinnerIncludedOk returns a tuple with the DinnerIncluded field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MealPlanCodeType) GetDinnerIncludedOk() (*bool, bool) {
	if o == nil || IsNil(o.DinnerIncluded) {
		return nil, false
	}
	return o.DinnerIncluded, true
}

// HasDinnerIncluded returns a boolean if a field has been set.
func (o *MealPlanCodeType) HasDinnerIncluded() bool {
	if o != nil && !IsNil(o.DinnerIncluded) {
		return true
	}

	return false
}

// SetDinnerIncluded gets a reference to the given bool and assigns it to the DinnerIncluded field.
func (o *MealPlanCodeType) SetDinnerIncluded(v bool) {
	o.DinnerIncluded = &v
}

// GetIncluded returns the Included field value if set, zero value otherwise.
func (o *MealPlanCodeType) GetIncluded() bool {
	if o == nil || IsNil(o.Included) {
		var ret bool
		return ret
	}
	return *o.Included
}

// GetIncludedOk returns a tuple with the Included field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MealPlanCodeType) GetIncludedOk() (*bool, bool) {
	if o == nil || IsNil(o.Included) {
		return nil, false
	}
	return o.Included, true
}

// HasIncluded returns a boolean if a field has been set.
func (o *MealPlanCodeType) HasIncluded() bool {
	if o != nil && !IsNil(o.Included) {
		return true
	}

	return false
}

// SetIncluded gets a reference to the given bool and assigns it to the Included field.
func (o *MealPlanCodeType) SetIncluded(v bool) {
	o.Included = &v
}

// GetLunchIncluded returns the LunchIncluded field value if set, zero value otherwise.
func (o *MealPlanCodeType) GetLunchIncluded() bool {
	if o == nil || IsNil(o.LunchIncluded) {
		var ret bool
		return ret
	}
	return *o.LunchIncluded
}

// GetLunchIncludedOk returns a tuple with the LunchIncluded field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MealPlanCodeType) GetLunchIncludedOk() (*bool, bool) {
	if o == nil || IsNil(o.LunchIncluded) {
		return nil, false
	}
	return o.LunchIncluded, true
}

// HasLunchIncluded returns a boolean if a field has been set.
func (o *MealPlanCodeType) HasLunchIncluded() bool {
	if o != nil && !IsNil(o.LunchIncluded) {
		return true
	}

	return false
}

// SetLunchIncluded gets a reference to the given bool and assigns it to the LunchIncluded field.
func (o *MealPlanCodeType) SetLunchIncluded(v bool) {
	o.LunchIncluded = &v
}

func (o MealPlanCodeType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o MealPlanCodeType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BreakfastIncluded) {
		toSerialize["breakfastIncluded"] = o.BreakfastIncluded
	}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.DinnerIncluded) {
		toSerialize["dinnerIncluded"] = o.DinnerIncluded
	}
	if !IsNil(o.Included) {
		toSerialize["included"] = o.Included
	}
	if !IsNil(o.LunchIncluded) {
		toSerialize["lunchIncluded"] = o.LunchIncluded
	}
	return toSerialize, nil
}

type NullableMealPlanCodeType struct {
	value *MealPlanCodeType
	isSet bool
}

func (v NullableMealPlanCodeType) Get() *MealPlanCodeType {
	return v.value
}

func (v *NullableMealPlanCodeType) Set(val *MealPlanCodeType) {
	v.value = val
	v.isSet = true
}

func (v NullableMealPlanCodeType) IsSet() bool {
	return v.isSet
}

func (v *NullableMealPlanCodeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMealPlanCodeType(val *MealPlanCodeType) *NullableMealPlanCodeType {
	return &NullableMealPlanCodeType{value: val, isSet: true}
}

func (v NullableMealPlanCodeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMealPlanCodeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


