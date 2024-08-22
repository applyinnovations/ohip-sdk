/*
OPERA Cloud Event Configuration API

This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evmcfg

import (
	"encoding/json"
)

// checks if the CopyEventForecastsCriteriaType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CopyEventForecastsCriteriaType{}

// CopyEventForecastsCriteriaType Copy event forecasts criteria type to copy multiple event forecasts from one Hotel to another Hotel.
type CopyEventForecastsCriteriaType struct {
	// Provides Event Forecast details that needs to be copied.
	EventForecastsList []EventForecastsListType `json:"eventForecastsList,omitempty"`
	// include Revenue Types for the event forecasts?
	IncludeRevenueType *bool `json:"includeRevenueType,omitempty"`
}

// NewCopyEventForecastsCriteriaType instantiates a new CopyEventForecastsCriteriaType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCopyEventForecastsCriteriaType() *CopyEventForecastsCriteriaType {
	this := CopyEventForecastsCriteriaType{}
	return &this
}

// NewCopyEventForecastsCriteriaTypeWithDefaults instantiates a new CopyEventForecastsCriteriaType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCopyEventForecastsCriteriaTypeWithDefaults() *CopyEventForecastsCriteriaType {
	this := CopyEventForecastsCriteriaType{}
	return &this
}

// GetEventForecastsList returns the EventForecastsList field value if set, zero value otherwise.
func (o *CopyEventForecastsCriteriaType) GetEventForecastsList() []EventForecastsListType {
	if o == nil || IsNil(o.EventForecastsList) {
		var ret []EventForecastsListType
		return ret
	}
	return o.EventForecastsList
}

// GetEventForecastsListOk returns a tuple with the EventForecastsList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyEventForecastsCriteriaType) GetEventForecastsListOk() ([]EventForecastsListType, bool) {
	if o == nil || IsNil(o.EventForecastsList) {
		return nil, false
	}
	return o.EventForecastsList, true
}

// HasEventForecastsList returns a boolean if a field has been set.
func (o *CopyEventForecastsCriteriaType) HasEventForecastsList() bool {
	if o != nil && !IsNil(o.EventForecastsList) {
		return true
	}

	return false
}

// SetEventForecastsList gets a reference to the given []EventForecastsListType and assigns it to the EventForecastsList field.
func (o *CopyEventForecastsCriteriaType) SetEventForecastsList(v []EventForecastsListType) {
	o.EventForecastsList = v
}

// GetIncludeRevenueType returns the IncludeRevenueType field value if set, zero value otherwise.
func (o *CopyEventForecastsCriteriaType) GetIncludeRevenueType() bool {
	if o == nil || IsNil(o.IncludeRevenueType) {
		var ret bool
		return ret
	}
	return *o.IncludeRevenueType
}

// GetIncludeRevenueTypeOk returns a tuple with the IncludeRevenueType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyEventForecastsCriteriaType) GetIncludeRevenueTypeOk() (*bool, bool) {
	if o == nil || IsNil(o.IncludeRevenueType) {
		return nil, false
	}
	return o.IncludeRevenueType, true
}

// HasIncludeRevenueType returns a boolean if a field has been set.
func (o *CopyEventForecastsCriteriaType) HasIncludeRevenueType() bool {
	if o != nil && !IsNil(o.IncludeRevenueType) {
		return true
	}

	return false
}

// SetIncludeRevenueType gets a reference to the given bool and assigns it to the IncludeRevenueType field.
func (o *CopyEventForecastsCriteriaType) SetIncludeRevenueType(v bool) {
	o.IncludeRevenueType = &v
}

func (o CopyEventForecastsCriteriaType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CopyEventForecastsCriteriaType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.EventForecastsList) {
		toSerialize["eventForecastsList"] = o.EventForecastsList
	}
	if !IsNil(o.IncludeRevenueType) {
		toSerialize["includeRevenueType"] = o.IncludeRevenueType
	}
	return toSerialize, nil
}

type NullableCopyEventForecastsCriteriaType struct {
	value *CopyEventForecastsCriteriaType
	isSet bool
}

func (v NullableCopyEventForecastsCriteriaType) Get() *CopyEventForecastsCriteriaType {
	return v.value
}

func (v *NullableCopyEventForecastsCriteriaType) Set(val *CopyEventForecastsCriteriaType) {
	v.value = val
	v.isSet = true
}

func (v NullableCopyEventForecastsCriteriaType) IsSet() bool {
	return v.isSet
}

func (v *NullableCopyEventForecastsCriteriaType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCopyEventForecastsCriteriaType(val *CopyEventForecastsCriteriaType) *NullableCopyEventForecastsCriteriaType {
	return &NullableCopyEventForecastsCriteriaType{value: val, isSet: true}
}

func (v NullableCopyEventForecastsCriteriaType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCopyEventForecastsCriteriaType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


