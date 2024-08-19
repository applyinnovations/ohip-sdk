/*
OPERA Cloud Rate API

APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rtp

import (
	"encoding/json"
)

// checks if the RatePlanScheduleToSplit type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RatePlanScheduleToSplit{}

// RatePlanScheduleToSplit Request object to split rate plan schedule.
type RatePlanScheduleToSplit struct {
	Links []InstanceLink `json:"links,omitempty"`
	RatePlanSchedule *RatePlanScheduleToSplitRatePlanSchedule `json:"ratePlanSchedule,omitempty"`
	SplitDetails *BaseRatePlanScheduleDetailType `json:"splitDetails,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewRatePlanScheduleToSplit instantiates a new RatePlanScheduleToSplit object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRatePlanScheduleToSplit() *RatePlanScheduleToSplit {
	this := RatePlanScheduleToSplit{}
	return &this
}

// NewRatePlanScheduleToSplitWithDefaults instantiates a new RatePlanScheduleToSplit object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRatePlanScheduleToSplitWithDefaults() *RatePlanScheduleToSplit {
	this := RatePlanScheduleToSplit{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *RatePlanScheduleToSplit) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanScheduleToSplit) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *RatePlanScheduleToSplit) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *RatePlanScheduleToSplit) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetRatePlanSchedule returns the RatePlanSchedule field value if set, zero value otherwise.
func (o *RatePlanScheduleToSplit) GetRatePlanSchedule() RatePlanScheduleToSplitRatePlanSchedule {
	if o == nil || IsNil(o.RatePlanSchedule) {
		var ret RatePlanScheduleToSplitRatePlanSchedule
		return ret
	}
	return *o.RatePlanSchedule
}

// GetRatePlanScheduleOk returns a tuple with the RatePlanSchedule field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanScheduleToSplit) GetRatePlanScheduleOk() (*RatePlanScheduleToSplitRatePlanSchedule, bool) {
	if o == nil || IsNil(o.RatePlanSchedule) {
		return nil, false
	}
	return o.RatePlanSchedule, true
}

// HasRatePlanSchedule returns a boolean if a field has been set.
func (o *RatePlanScheduleToSplit) HasRatePlanSchedule() bool {
	if o != nil && !IsNil(o.RatePlanSchedule) {
		return true
	}

	return false
}

// SetRatePlanSchedule gets a reference to the given RatePlanScheduleToSplitRatePlanSchedule and assigns it to the RatePlanSchedule field.
func (o *RatePlanScheduleToSplit) SetRatePlanSchedule(v RatePlanScheduleToSplitRatePlanSchedule) {
	o.RatePlanSchedule = &v
}

// GetSplitDetails returns the SplitDetails field value if set, zero value otherwise.
func (o *RatePlanScheduleToSplit) GetSplitDetails() BaseRatePlanScheduleDetailType {
	if o == nil || IsNil(o.SplitDetails) {
		var ret BaseRatePlanScheduleDetailType
		return ret
	}
	return *o.SplitDetails
}

// GetSplitDetailsOk returns a tuple with the SplitDetails field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanScheduleToSplit) GetSplitDetailsOk() (*BaseRatePlanScheduleDetailType, bool) {
	if o == nil || IsNil(o.SplitDetails) {
		return nil, false
	}
	return o.SplitDetails, true
}

// HasSplitDetails returns a boolean if a field has been set.
func (o *RatePlanScheduleToSplit) HasSplitDetails() bool {
	if o != nil && !IsNil(o.SplitDetails) {
		return true
	}

	return false
}

// SetSplitDetails gets a reference to the given BaseRatePlanScheduleDetailType and assigns it to the SplitDetails field.
func (o *RatePlanScheduleToSplit) SetSplitDetails(v BaseRatePlanScheduleDetailType) {
	o.SplitDetails = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *RatePlanScheduleToSplit) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanScheduleToSplit) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *RatePlanScheduleToSplit) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *RatePlanScheduleToSplit) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o RatePlanScheduleToSplit) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RatePlanScheduleToSplit) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.RatePlanSchedule) {
		toSerialize["ratePlanSchedule"] = o.RatePlanSchedule
	}
	if !IsNil(o.SplitDetails) {
		toSerialize["splitDetails"] = o.SplitDetails
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableRatePlanScheduleToSplit struct {
	value *RatePlanScheduleToSplit
	isSet bool
}

func (v NullableRatePlanScheduleToSplit) Get() *RatePlanScheduleToSplit {
	return v.value
}

func (v *NullableRatePlanScheduleToSplit) Set(val *RatePlanScheduleToSplit) {
	v.value = val
	v.isSet = true
}

func (v NullableRatePlanScheduleToSplit) IsSet() bool {
	return v.isSet
}

func (v *NullableRatePlanScheduleToSplit) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRatePlanScheduleToSplit(val *RatePlanScheduleToSplit) *NullableRatePlanScheduleToSplit {
	return &NullableRatePlanScheduleToSplit{value: val, isSet: true}
}

func (v NullableRatePlanScheduleToSplit) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRatePlanScheduleToSplit) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


