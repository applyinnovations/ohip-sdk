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

// checks if the CreateActivityBooking type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CreateActivityBooking{}

// CreateActivityBooking struct for CreateActivityBooking
type CreateActivityBooking struct {
	ActivityBooking *ActivityBookingRQType `json:"activityBooking,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewCreateActivityBooking instantiates a new CreateActivityBooking object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCreateActivityBooking() *CreateActivityBooking {
	this := CreateActivityBooking{}
	return &this
}

// NewCreateActivityBookingWithDefaults instantiates a new CreateActivityBooking object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCreateActivityBookingWithDefaults() *CreateActivityBooking {
	this := CreateActivityBooking{}
	return &this
}

// GetActivityBooking returns the ActivityBooking field value if set, zero value otherwise.
func (o *CreateActivityBooking) GetActivityBooking() ActivityBookingRQType {
	if o == nil || IsNil(o.ActivityBooking) {
		var ret ActivityBookingRQType
		return ret
	}
	return *o.ActivityBooking
}

// GetActivityBookingOk returns a tuple with the ActivityBooking field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreateActivityBooking) GetActivityBookingOk() (*ActivityBookingRQType, bool) {
	if o == nil || IsNil(o.ActivityBooking) {
		return nil, false
	}
	return o.ActivityBooking, true
}

// HasActivityBooking returns a boolean if a field has been set.
func (o *CreateActivityBooking) HasActivityBooking() bool {
	if o != nil && !IsNil(o.ActivityBooking) {
		return true
	}

	return false
}

// SetActivityBooking gets a reference to the given ActivityBookingRQType and assigns it to the ActivityBooking field.
func (o *CreateActivityBooking) SetActivityBooking(v ActivityBookingRQType) {
	o.ActivityBooking = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *CreateActivityBooking) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreateActivityBooking) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *CreateActivityBooking) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *CreateActivityBooking) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *CreateActivityBooking) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreateActivityBooking) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *CreateActivityBooking) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *CreateActivityBooking) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o CreateActivityBooking) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CreateActivityBooking) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ActivityBooking) {
		toSerialize["activityBooking"] = o.ActivityBooking
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableCreateActivityBooking struct {
	value *CreateActivityBooking
	isSet bool
}

func (v NullableCreateActivityBooking) Get() *CreateActivityBooking {
	return v.value
}

func (v *NullableCreateActivityBooking) Set(val *CreateActivityBooking) {
	v.value = val
	v.isSet = true
}

func (v NullableCreateActivityBooking) IsSet() bool {
	return v.isSet
}

func (v *NullableCreateActivityBooking) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCreateActivityBooking(val *CreateActivityBooking) *NullableCreateActivityBooking {
	return &NullableCreateActivityBooking{value: val, isSet: true}
}

func (v NullableCreateActivityBooking) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCreateActivityBooking) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


