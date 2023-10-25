/*
OPERA Cloud Rate API

APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rtp

import (
	"encoding/json"
)

// checks if the SplitRatePlanScheduleRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &SplitRatePlanScheduleRequest{}

// SplitRatePlanScheduleRequest struct for SplitRatePlanScheduleRequest
type SplitRatePlanScheduleRequest struct {
	Links []InstanceLink `json:"links,omitempty"`
	RatePlanSchedule *RatePlanScheduleToSplitRatePlanSchedule `json:"ratePlanSchedule,omitempty"`
	SplitDetails *BaseRatePlanScheduleDetailType `json:"splitDetails,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewSplitRatePlanScheduleRequest instantiates a new SplitRatePlanScheduleRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewSplitRatePlanScheduleRequest() *SplitRatePlanScheduleRequest {
	this := SplitRatePlanScheduleRequest{}
	return &this
}

// NewSplitRatePlanScheduleRequestWithDefaults instantiates a new SplitRatePlanScheduleRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewSplitRatePlanScheduleRequestWithDefaults() *SplitRatePlanScheduleRequest {
	this := SplitRatePlanScheduleRequest{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *SplitRatePlanScheduleRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SplitRatePlanScheduleRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *SplitRatePlanScheduleRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *SplitRatePlanScheduleRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetRatePlanSchedule returns the RatePlanSchedule field value if set, zero value otherwise.
func (o *SplitRatePlanScheduleRequest) GetRatePlanSchedule() RatePlanScheduleToSplitRatePlanSchedule {
	if o == nil || IsNil(o.RatePlanSchedule) {
		var ret RatePlanScheduleToSplitRatePlanSchedule
		return ret
	}
	return *o.RatePlanSchedule
}

// GetRatePlanScheduleOk returns a tuple with the RatePlanSchedule field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SplitRatePlanScheduleRequest) GetRatePlanScheduleOk() (*RatePlanScheduleToSplitRatePlanSchedule, bool) {
	if o == nil || IsNil(o.RatePlanSchedule) {
		return nil, false
	}
	return o.RatePlanSchedule, true
}

// HasRatePlanSchedule returns a boolean if a field has been set.
func (o *SplitRatePlanScheduleRequest) HasRatePlanSchedule() bool {
	if o != nil && !IsNil(o.RatePlanSchedule) {
		return true
	}

	return false
}

// SetRatePlanSchedule gets a reference to the given RatePlanScheduleToSplitRatePlanSchedule and assigns it to the RatePlanSchedule field.
func (o *SplitRatePlanScheduleRequest) SetRatePlanSchedule(v RatePlanScheduleToSplitRatePlanSchedule) {
	o.RatePlanSchedule = &v
}

// GetSplitDetails returns the SplitDetails field value if set, zero value otherwise.
func (o *SplitRatePlanScheduleRequest) GetSplitDetails() BaseRatePlanScheduleDetailType {
	if o == nil || IsNil(o.SplitDetails) {
		var ret BaseRatePlanScheduleDetailType
		return ret
	}
	return *o.SplitDetails
}

// GetSplitDetailsOk returns a tuple with the SplitDetails field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SplitRatePlanScheduleRequest) GetSplitDetailsOk() (*BaseRatePlanScheduleDetailType, bool) {
	if o == nil || IsNil(o.SplitDetails) {
		return nil, false
	}
	return o.SplitDetails, true
}

// HasSplitDetails returns a boolean if a field has been set.
func (o *SplitRatePlanScheduleRequest) HasSplitDetails() bool {
	if o != nil && !IsNil(o.SplitDetails) {
		return true
	}

	return false
}

// SetSplitDetails gets a reference to the given BaseRatePlanScheduleDetailType and assigns it to the SplitDetails field.
func (o *SplitRatePlanScheduleRequest) SetSplitDetails(v BaseRatePlanScheduleDetailType) {
	o.SplitDetails = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *SplitRatePlanScheduleRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SplitRatePlanScheduleRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *SplitRatePlanScheduleRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *SplitRatePlanScheduleRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o SplitRatePlanScheduleRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o SplitRatePlanScheduleRequest) ToMap() (map[string]interface{}, error) {
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

type NullableSplitRatePlanScheduleRequest struct {
	value *SplitRatePlanScheduleRequest
	isSet bool
}

func (v NullableSplitRatePlanScheduleRequest) Get() *SplitRatePlanScheduleRequest {
	return v.value
}

func (v *NullableSplitRatePlanScheduleRequest) Set(val *SplitRatePlanScheduleRequest) {
	v.value = val
	v.isSet = true
}

func (v NullableSplitRatePlanScheduleRequest) IsSet() bool {
	return v.isSet
}

func (v *NullableSplitRatePlanScheduleRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSplitRatePlanScheduleRequest(val *SplitRatePlanScheduleRequest) *NullableSplitRatePlanScheduleRequest {
	return &NullableSplitRatePlanScheduleRequest{value: val, isSet: true}
}

func (v NullableSplitRatePlanScheduleRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSplitRatePlanScheduleRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


