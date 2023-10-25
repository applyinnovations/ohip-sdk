/*
OPERA Cloud Housekeeping Service API

APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package hsk

import (
	"encoding/json"
)

// checks if the FacilityTaskForecastType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &FacilityTaskForecastType{}

// FacilityTaskForecastType A facility task and its forecast.
type FacilityTaskForecastType struct {
	// Collection of facility codes with their forecasts.
	FacilityCodes []FacilityCodeForecastType `json:"facilityCodes,omitempty"`
	Task *CodeDescriptionType `json:"task,omitempty"`
	// Collection of dates and their quantities.
	TaskForecast []ForecastQuantityType `json:"taskForecast,omitempty"`
}

// NewFacilityTaskForecastType instantiates a new FacilityTaskForecastType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewFacilityTaskForecastType() *FacilityTaskForecastType {
	this := FacilityTaskForecastType{}
	return &this
}

// NewFacilityTaskForecastTypeWithDefaults instantiates a new FacilityTaskForecastType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewFacilityTaskForecastTypeWithDefaults() *FacilityTaskForecastType {
	this := FacilityTaskForecastType{}
	return &this
}

// GetFacilityCodes returns the FacilityCodes field value if set, zero value otherwise.
func (o *FacilityTaskForecastType) GetFacilityCodes() []FacilityCodeForecastType {
	if o == nil || IsNil(o.FacilityCodes) {
		var ret []FacilityCodeForecastType
		return ret
	}
	return o.FacilityCodes
}

// GetFacilityCodesOk returns a tuple with the FacilityCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FacilityTaskForecastType) GetFacilityCodesOk() ([]FacilityCodeForecastType, bool) {
	if o == nil || IsNil(o.FacilityCodes) {
		return nil, false
	}
	return o.FacilityCodes, true
}

// HasFacilityCodes returns a boolean if a field has been set.
func (o *FacilityTaskForecastType) HasFacilityCodes() bool {
	if o != nil && !IsNil(o.FacilityCodes) {
		return true
	}

	return false
}

// SetFacilityCodes gets a reference to the given []FacilityCodeForecastType and assigns it to the FacilityCodes field.
func (o *FacilityTaskForecastType) SetFacilityCodes(v []FacilityCodeForecastType) {
	o.FacilityCodes = v
}

// GetTask returns the Task field value if set, zero value otherwise.
func (o *FacilityTaskForecastType) GetTask() CodeDescriptionType {
	if o == nil || IsNil(o.Task) {
		var ret CodeDescriptionType
		return ret
	}
	return *o.Task
}

// GetTaskOk returns a tuple with the Task field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FacilityTaskForecastType) GetTaskOk() (*CodeDescriptionType, bool) {
	if o == nil || IsNil(o.Task) {
		return nil, false
	}
	return o.Task, true
}

// HasTask returns a boolean if a field has been set.
func (o *FacilityTaskForecastType) HasTask() bool {
	if o != nil && !IsNil(o.Task) {
		return true
	}

	return false
}

// SetTask gets a reference to the given CodeDescriptionType and assigns it to the Task field.
func (o *FacilityTaskForecastType) SetTask(v CodeDescriptionType) {
	o.Task = &v
}

// GetTaskForecast returns the TaskForecast field value if set, zero value otherwise.
func (o *FacilityTaskForecastType) GetTaskForecast() []ForecastQuantityType {
	if o == nil || IsNil(o.TaskForecast) {
		var ret []ForecastQuantityType
		return ret
	}
	return o.TaskForecast
}

// GetTaskForecastOk returns a tuple with the TaskForecast field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FacilityTaskForecastType) GetTaskForecastOk() ([]ForecastQuantityType, bool) {
	if o == nil || IsNil(o.TaskForecast) {
		return nil, false
	}
	return o.TaskForecast, true
}

// HasTaskForecast returns a boolean if a field has been set.
func (o *FacilityTaskForecastType) HasTaskForecast() bool {
	if o != nil && !IsNil(o.TaskForecast) {
		return true
	}

	return false
}

// SetTaskForecast gets a reference to the given []ForecastQuantityType and assigns it to the TaskForecast field.
func (o *FacilityTaskForecastType) SetTaskForecast(v []ForecastQuantityType) {
	o.TaskForecast = v
}

func (o FacilityTaskForecastType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o FacilityTaskForecastType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.FacilityCodes) {
		toSerialize["facilityCodes"] = o.FacilityCodes
	}
	if !IsNil(o.Task) {
		toSerialize["task"] = o.Task
	}
	if !IsNil(o.TaskForecast) {
		toSerialize["taskForecast"] = o.TaskForecast
	}
	return toSerialize, nil
}

type NullableFacilityTaskForecastType struct {
	value *FacilityTaskForecastType
	isSet bool
}

func (v NullableFacilityTaskForecastType) Get() *FacilityTaskForecastType {
	return v.value
}

func (v *NullableFacilityTaskForecastType) Set(val *FacilityTaskForecastType) {
	v.value = val
	v.isSet = true
}

func (v NullableFacilityTaskForecastType) IsSet() bool {
	return v.isSet
}

func (v *NullableFacilityTaskForecastType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableFacilityTaskForecastType(val *FacilityTaskForecastType) *NullableFacilityTaskForecastType {
	return &NullableFacilityTaskForecastType{value: val, isSet: true}
}

func (v NullableFacilityTaskForecastType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableFacilityTaskForecastType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


