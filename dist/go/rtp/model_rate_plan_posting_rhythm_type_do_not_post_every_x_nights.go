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

// checks if the RatePlanPostingRhythmTypeDoNotPostEveryXNights type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RatePlanPostingRhythmTypeDoNotPostEveryXNights{}

// RatePlanPostingRhythmTypeDoNotPostEveryXNights Do not Post the Rate Code every X nights. This can be used to offer free nights after staying certain number of nights on the rate plan.
type RatePlanPostingRhythmTypeDoNotPostEveryXNights struct {
	// Post the packages on free nights if the packages posting rhythm falls on the night rate plan is not getting posted.
	PostPackages *bool `json:"postPackages,omitempty"`
	// The night the rate plan is not supposed to be posted.
	XNight *int32 `json:"xNight,omitempty"`
}

// NewRatePlanPostingRhythmTypeDoNotPostEveryXNights instantiates a new RatePlanPostingRhythmTypeDoNotPostEveryXNights object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRatePlanPostingRhythmTypeDoNotPostEveryXNights() *RatePlanPostingRhythmTypeDoNotPostEveryXNights {
	this := RatePlanPostingRhythmTypeDoNotPostEveryXNights{}
	return &this
}

// NewRatePlanPostingRhythmTypeDoNotPostEveryXNightsWithDefaults instantiates a new RatePlanPostingRhythmTypeDoNotPostEveryXNights object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRatePlanPostingRhythmTypeDoNotPostEveryXNightsWithDefaults() *RatePlanPostingRhythmTypeDoNotPostEveryXNights {
	this := RatePlanPostingRhythmTypeDoNotPostEveryXNights{}
	return &this
}

// GetPostPackages returns the PostPackages field value if set, zero value otherwise.
func (o *RatePlanPostingRhythmTypeDoNotPostEveryXNights) GetPostPackages() bool {
	if o == nil || IsNil(o.PostPackages) {
		var ret bool
		return ret
	}
	return *o.PostPackages
}

// GetPostPackagesOk returns a tuple with the PostPackages field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanPostingRhythmTypeDoNotPostEveryXNights) GetPostPackagesOk() (*bool, bool) {
	if o == nil || IsNil(o.PostPackages) {
		return nil, false
	}
	return o.PostPackages, true
}

// HasPostPackages returns a boolean if a field has been set.
func (o *RatePlanPostingRhythmTypeDoNotPostEveryXNights) HasPostPackages() bool {
	if o != nil && !IsNil(o.PostPackages) {
		return true
	}

	return false
}

// SetPostPackages gets a reference to the given bool and assigns it to the PostPackages field.
func (o *RatePlanPostingRhythmTypeDoNotPostEveryXNights) SetPostPackages(v bool) {
	o.PostPackages = &v
}

// GetXNight returns the XNight field value if set, zero value otherwise.
func (o *RatePlanPostingRhythmTypeDoNotPostEveryXNights) GetXNight() int32 {
	if o == nil || IsNil(o.XNight) {
		var ret int32
		return ret
	}
	return *o.XNight
}

// GetXNightOk returns a tuple with the XNight field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanPostingRhythmTypeDoNotPostEveryXNights) GetXNightOk() (*int32, bool) {
	if o == nil || IsNil(o.XNight) {
		return nil, false
	}
	return o.XNight, true
}

// HasXNight returns a boolean if a field has been set.
func (o *RatePlanPostingRhythmTypeDoNotPostEveryXNights) HasXNight() bool {
	if o != nil && !IsNil(o.XNight) {
		return true
	}

	return false
}

// SetXNight gets a reference to the given int32 and assigns it to the XNight field.
func (o *RatePlanPostingRhythmTypeDoNotPostEveryXNights) SetXNight(v int32) {
	o.XNight = &v
}

func (o RatePlanPostingRhythmTypeDoNotPostEveryXNights) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RatePlanPostingRhythmTypeDoNotPostEveryXNights) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.PostPackages) {
		toSerialize["postPackages"] = o.PostPackages
	}
	if !IsNil(o.XNight) {
		toSerialize["xNight"] = o.XNight
	}
	return toSerialize, nil
}

type NullableRatePlanPostingRhythmTypeDoNotPostEveryXNights struct {
	value *RatePlanPostingRhythmTypeDoNotPostEveryXNights
	isSet bool
}

func (v NullableRatePlanPostingRhythmTypeDoNotPostEveryXNights) Get() *RatePlanPostingRhythmTypeDoNotPostEveryXNights {
	return v.value
}

func (v *NullableRatePlanPostingRhythmTypeDoNotPostEveryXNights) Set(val *RatePlanPostingRhythmTypeDoNotPostEveryXNights) {
	v.value = val
	v.isSet = true
}

func (v NullableRatePlanPostingRhythmTypeDoNotPostEveryXNights) IsSet() bool {
	return v.isSet
}

func (v *NullableRatePlanPostingRhythmTypeDoNotPostEveryXNights) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRatePlanPostingRhythmTypeDoNotPostEveryXNights(val *RatePlanPostingRhythmTypeDoNotPostEveryXNights) *NullableRatePlanPostingRhythmTypeDoNotPostEveryXNights {
	return &NullableRatePlanPostingRhythmTypeDoNotPostEveryXNights{value: val, isSet: true}
}

func (v NullableRatePlanPostingRhythmTypeDoNotPostEveryXNights) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRatePlanPostingRhythmTypeDoNotPostEveryXNights) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


