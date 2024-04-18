/*
OPERA Cloud Leisure Management API

APIs to cater for external Leisure Management functionality integrated with OPERA Cloud.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package lms

import (
	"encoding/json"
)

// checks if the ActivityBookingRSType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ActivityBookingRSType{}

// ActivityBookingRSType Generic self-contained response object that is used when inserting/ updating/ canceling activities.
type ActivityBookingRSType struct {
	// A collection of Activity objects.
	Activities []ActivityListInner `json:"activities,omitempty"`
}

// NewActivityBookingRSType instantiates a new ActivityBookingRSType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewActivityBookingRSType() *ActivityBookingRSType {
	this := ActivityBookingRSType{}
	return &this
}

// NewActivityBookingRSTypeWithDefaults instantiates a new ActivityBookingRSType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewActivityBookingRSTypeWithDefaults() *ActivityBookingRSType {
	this := ActivityBookingRSType{}
	return &this
}

// GetActivities returns the Activities field value if set, zero value otherwise.
func (o *ActivityBookingRSType) GetActivities() []ActivityListInner {
	if o == nil || IsNil(o.Activities) {
		var ret []ActivityListInner
		return ret
	}
	return o.Activities
}

// GetActivitiesOk returns a tuple with the Activities field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivityBookingRSType) GetActivitiesOk() ([]ActivityListInner, bool) {
	if o == nil || IsNil(o.Activities) {
		return nil, false
	}
	return o.Activities, true
}

// HasActivities returns a boolean if a field has been set.
func (o *ActivityBookingRSType) HasActivities() bool {
	if o != nil && !IsNil(o.Activities) {
		return true
	}

	return false
}

// SetActivities gets a reference to the given []ActivityListInner and assigns it to the Activities field.
func (o *ActivityBookingRSType) SetActivities(v []ActivityListInner) {
	o.Activities = v
}

func (o ActivityBookingRSType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ActivityBookingRSType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Activities) {
		toSerialize["activities"] = o.Activities
	}
	return toSerialize, nil
}

type NullableActivityBookingRSType struct {
	value *ActivityBookingRSType
	isSet bool
}

func (v NullableActivityBookingRSType) Get() *ActivityBookingRSType {
	return v.value
}

func (v *NullableActivityBookingRSType) Set(val *ActivityBookingRSType) {
	v.value = val
	v.isSet = true
}

func (v NullableActivityBookingRSType) IsSet() bool {
	return v.isSet
}

func (v *NullableActivityBookingRSType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableActivityBookingRSType(val *ActivityBookingRSType) *NullableActivityBookingRSType {
	return &NullableActivityBookingRSType{value: val, isSet: true}
}

func (v NullableActivityBookingRSType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableActivityBookingRSType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

