/*
OPERA Cloud API for Customer Management Service

This API deals with the different aspect of the CustomerManagement.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package cms

import (
	"encoding/json"
)

// checks if the CalendarTaskCountType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CalendarTaskCountType{}

// CalendarTaskCountType Defines summary count of calendar tasks that belongs to specific classification.
type CalendarTaskCountType struct {
	Class *CalendarTaskClassType `json:"class,omitempty"`
	// Total number of outstanding calendar tasks under specific classification.
	OutstandingCount *int32 `json:"outstandingCount,omitempty"`
	// Owner code of the person to whom the calendar task is assigned.
	TaskOwner *string `json:"taskOwner,omitempty"`
}

// NewCalendarTaskCountType instantiates a new CalendarTaskCountType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCalendarTaskCountType() *CalendarTaskCountType {
	this := CalendarTaskCountType{}
	return &this
}

// NewCalendarTaskCountTypeWithDefaults instantiates a new CalendarTaskCountType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCalendarTaskCountTypeWithDefaults() *CalendarTaskCountType {
	this := CalendarTaskCountType{}
	return &this
}

// GetClass returns the Class field value if set, zero value otherwise.
func (o *CalendarTaskCountType) GetClass() CalendarTaskClassType {
	if o == nil || IsNil(o.Class) {
		var ret CalendarTaskClassType
		return ret
	}
	return *o.Class
}

// GetClassOk returns a tuple with the Class field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CalendarTaskCountType) GetClassOk() (*CalendarTaskClassType, bool) {
	if o == nil || IsNil(o.Class) {
		return nil, false
	}
	return o.Class, true
}

// HasClass returns a boolean if a field has been set.
func (o *CalendarTaskCountType) HasClass() bool {
	if o != nil && !IsNil(o.Class) {
		return true
	}

	return false
}

// SetClass gets a reference to the given CalendarTaskClassType and assigns it to the Class field.
func (o *CalendarTaskCountType) SetClass(v CalendarTaskClassType) {
	o.Class = &v
}

// GetOutstandingCount returns the OutstandingCount field value if set, zero value otherwise.
func (o *CalendarTaskCountType) GetOutstandingCount() int32 {
	if o == nil || IsNil(o.OutstandingCount) {
		var ret int32
		return ret
	}
	return *o.OutstandingCount
}

// GetOutstandingCountOk returns a tuple with the OutstandingCount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CalendarTaskCountType) GetOutstandingCountOk() (*int32, bool) {
	if o == nil || IsNil(o.OutstandingCount) {
		return nil, false
	}
	return o.OutstandingCount, true
}

// HasOutstandingCount returns a boolean if a field has been set.
func (o *CalendarTaskCountType) HasOutstandingCount() bool {
	if o != nil && !IsNil(o.OutstandingCount) {
		return true
	}

	return false
}

// SetOutstandingCount gets a reference to the given int32 and assigns it to the OutstandingCount field.
func (o *CalendarTaskCountType) SetOutstandingCount(v int32) {
	o.OutstandingCount = &v
}

// GetTaskOwner returns the TaskOwner field value if set, zero value otherwise.
func (o *CalendarTaskCountType) GetTaskOwner() string {
	if o == nil || IsNil(o.TaskOwner) {
		var ret string
		return ret
	}
	return *o.TaskOwner
}

// GetTaskOwnerOk returns a tuple with the TaskOwner field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CalendarTaskCountType) GetTaskOwnerOk() (*string, bool) {
	if o == nil || IsNil(o.TaskOwner) {
		return nil, false
	}
	return o.TaskOwner, true
}

// HasTaskOwner returns a boolean if a field has been set.
func (o *CalendarTaskCountType) HasTaskOwner() bool {
	if o != nil && !IsNil(o.TaskOwner) {
		return true
	}

	return false
}

// SetTaskOwner gets a reference to the given string and assigns it to the TaskOwner field.
func (o *CalendarTaskCountType) SetTaskOwner(v string) {
	o.TaskOwner = &v
}

func (o CalendarTaskCountType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CalendarTaskCountType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Class) {
		toSerialize["class"] = o.Class
	}
	if !IsNil(o.OutstandingCount) {
		toSerialize["outstandingCount"] = o.OutstandingCount
	}
	if !IsNil(o.TaskOwner) {
		toSerialize["taskOwner"] = o.TaskOwner
	}
	return toSerialize, nil
}

type NullableCalendarTaskCountType struct {
	value *CalendarTaskCountType
	isSet bool
}

func (v NullableCalendarTaskCountType) Get() *CalendarTaskCountType {
	return v.value
}

func (v *NullableCalendarTaskCountType) Set(val *CalendarTaskCountType) {
	v.value = val
	v.isSet = true
}

func (v NullableCalendarTaskCountType) IsSet() bool {
	return v.isSet
}

func (v *NullableCalendarTaskCountType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCalendarTaskCountType(val *CalendarTaskCountType) *NullableCalendarTaskCountType {
	return &NullableCalendarTaskCountType{value: val, isSet: true}
}

func (v NullableCalendarTaskCountType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCalendarTaskCountType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


