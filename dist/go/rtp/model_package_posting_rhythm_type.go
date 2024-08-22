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

// checks if the PackagePostingRhythmType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PackagePostingRhythmType{}

// PackagePostingRhythmType Package Posting rhythm type.
type PackagePostingRhythmType struct {
	CertainNightsOfTheWeek *PackagePostingRhythmTypeCertainNightsOfTheWeek `json:"certainNightsOfTheWeek,omitempty"`
	CustomNightSchedule *PackagePostingRhythmTypeCustomNightSchedule `json:"customNightSchedule,omitempty"`
	CustomStaySchedule *PackagePostingRhythmTypeCustomStaySchedule `json:"customStaySchedule,omitempty"`
	EveryXNightsStartingNightY *PackagePostingRhythmTypeEveryXNightsStartingNightY `json:"everyXNightsStartingNightY,omitempty"`
	Type *PostingRhythmType `json:"type,omitempty"`
}

// NewPackagePostingRhythmType instantiates a new PackagePostingRhythmType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPackagePostingRhythmType() *PackagePostingRhythmType {
	this := PackagePostingRhythmType{}
	return &this
}

// NewPackagePostingRhythmTypeWithDefaults instantiates a new PackagePostingRhythmType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPackagePostingRhythmTypeWithDefaults() *PackagePostingRhythmType {
	this := PackagePostingRhythmType{}
	return &this
}

// GetCertainNightsOfTheWeek returns the CertainNightsOfTheWeek field value if set, zero value otherwise.
func (o *PackagePostingRhythmType) GetCertainNightsOfTheWeek() PackagePostingRhythmTypeCertainNightsOfTheWeek {
	if o == nil || IsNil(o.CertainNightsOfTheWeek) {
		var ret PackagePostingRhythmTypeCertainNightsOfTheWeek
		return ret
	}
	return *o.CertainNightsOfTheWeek
}

// GetCertainNightsOfTheWeekOk returns a tuple with the CertainNightsOfTheWeek field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackagePostingRhythmType) GetCertainNightsOfTheWeekOk() (*PackagePostingRhythmTypeCertainNightsOfTheWeek, bool) {
	if o == nil || IsNil(o.CertainNightsOfTheWeek) {
		return nil, false
	}
	return o.CertainNightsOfTheWeek, true
}

// HasCertainNightsOfTheWeek returns a boolean if a field has been set.
func (o *PackagePostingRhythmType) HasCertainNightsOfTheWeek() bool {
	if o != nil && !IsNil(o.CertainNightsOfTheWeek) {
		return true
	}

	return false
}

// SetCertainNightsOfTheWeek gets a reference to the given PackagePostingRhythmTypeCertainNightsOfTheWeek and assigns it to the CertainNightsOfTheWeek field.
func (o *PackagePostingRhythmType) SetCertainNightsOfTheWeek(v PackagePostingRhythmTypeCertainNightsOfTheWeek) {
	o.CertainNightsOfTheWeek = &v
}

// GetCustomNightSchedule returns the CustomNightSchedule field value if set, zero value otherwise.
func (o *PackagePostingRhythmType) GetCustomNightSchedule() PackagePostingRhythmTypeCustomNightSchedule {
	if o == nil || IsNil(o.CustomNightSchedule) {
		var ret PackagePostingRhythmTypeCustomNightSchedule
		return ret
	}
	return *o.CustomNightSchedule
}

// GetCustomNightScheduleOk returns a tuple with the CustomNightSchedule field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackagePostingRhythmType) GetCustomNightScheduleOk() (*PackagePostingRhythmTypeCustomNightSchedule, bool) {
	if o == nil || IsNil(o.CustomNightSchedule) {
		return nil, false
	}
	return o.CustomNightSchedule, true
}

// HasCustomNightSchedule returns a boolean if a field has been set.
func (o *PackagePostingRhythmType) HasCustomNightSchedule() bool {
	if o != nil && !IsNil(o.CustomNightSchedule) {
		return true
	}

	return false
}

// SetCustomNightSchedule gets a reference to the given PackagePostingRhythmTypeCustomNightSchedule and assigns it to the CustomNightSchedule field.
func (o *PackagePostingRhythmType) SetCustomNightSchedule(v PackagePostingRhythmTypeCustomNightSchedule) {
	o.CustomNightSchedule = &v
}

// GetCustomStaySchedule returns the CustomStaySchedule field value if set, zero value otherwise.
func (o *PackagePostingRhythmType) GetCustomStaySchedule() PackagePostingRhythmTypeCustomStaySchedule {
	if o == nil || IsNil(o.CustomStaySchedule) {
		var ret PackagePostingRhythmTypeCustomStaySchedule
		return ret
	}
	return *o.CustomStaySchedule
}

// GetCustomStayScheduleOk returns a tuple with the CustomStaySchedule field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackagePostingRhythmType) GetCustomStayScheduleOk() (*PackagePostingRhythmTypeCustomStaySchedule, bool) {
	if o == nil || IsNil(o.CustomStaySchedule) {
		return nil, false
	}
	return o.CustomStaySchedule, true
}

// HasCustomStaySchedule returns a boolean if a field has been set.
func (o *PackagePostingRhythmType) HasCustomStaySchedule() bool {
	if o != nil && !IsNil(o.CustomStaySchedule) {
		return true
	}

	return false
}

// SetCustomStaySchedule gets a reference to the given PackagePostingRhythmTypeCustomStaySchedule and assigns it to the CustomStaySchedule field.
func (o *PackagePostingRhythmType) SetCustomStaySchedule(v PackagePostingRhythmTypeCustomStaySchedule) {
	o.CustomStaySchedule = &v
}

// GetEveryXNightsStartingNightY returns the EveryXNightsStartingNightY field value if set, zero value otherwise.
func (o *PackagePostingRhythmType) GetEveryXNightsStartingNightY() PackagePostingRhythmTypeEveryXNightsStartingNightY {
	if o == nil || IsNil(o.EveryXNightsStartingNightY) {
		var ret PackagePostingRhythmTypeEveryXNightsStartingNightY
		return ret
	}
	return *o.EveryXNightsStartingNightY
}

// GetEveryXNightsStartingNightYOk returns a tuple with the EveryXNightsStartingNightY field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackagePostingRhythmType) GetEveryXNightsStartingNightYOk() (*PackagePostingRhythmTypeEveryXNightsStartingNightY, bool) {
	if o == nil || IsNil(o.EveryXNightsStartingNightY) {
		return nil, false
	}
	return o.EveryXNightsStartingNightY, true
}

// HasEveryXNightsStartingNightY returns a boolean if a field has been set.
func (o *PackagePostingRhythmType) HasEveryXNightsStartingNightY() bool {
	if o != nil && !IsNil(o.EveryXNightsStartingNightY) {
		return true
	}

	return false
}

// SetEveryXNightsStartingNightY gets a reference to the given PackagePostingRhythmTypeEveryXNightsStartingNightY and assigns it to the EveryXNightsStartingNightY field.
func (o *PackagePostingRhythmType) SetEveryXNightsStartingNightY(v PackagePostingRhythmTypeEveryXNightsStartingNightY) {
	o.EveryXNightsStartingNightY = &v
}

// GetType returns the Type field value if set, zero value otherwise.
func (o *PackagePostingRhythmType) GetType() PostingRhythmType {
	if o == nil || IsNil(o.Type) {
		var ret PostingRhythmType
		return ret
	}
	return *o.Type
}

// GetTypeOk returns a tuple with the Type field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackagePostingRhythmType) GetTypeOk() (*PostingRhythmType, bool) {
	if o == nil || IsNil(o.Type) {
		return nil, false
	}
	return o.Type, true
}

// HasType returns a boolean if a field has been set.
func (o *PackagePostingRhythmType) HasType() bool {
	if o != nil && !IsNil(o.Type) {
		return true
	}

	return false
}

// SetType gets a reference to the given PostingRhythmType and assigns it to the Type field.
func (o *PackagePostingRhythmType) SetType(v PostingRhythmType) {
	o.Type = &v
}

func (o PackagePostingRhythmType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PackagePostingRhythmType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CertainNightsOfTheWeek) {
		toSerialize["certainNightsOfTheWeek"] = o.CertainNightsOfTheWeek
	}
	if !IsNil(o.CustomNightSchedule) {
		toSerialize["customNightSchedule"] = o.CustomNightSchedule
	}
	if !IsNil(o.CustomStaySchedule) {
		toSerialize["customStaySchedule"] = o.CustomStaySchedule
	}
	if !IsNil(o.EveryXNightsStartingNightY) {
		toSerialize["everyXNightsStartingNightY"] = o.EveryXNightsStartingNightY
	}
	if !IsNil(o.Type) {
		toSerialize["type"] = o.Type
	}
	return toSerialize, nil
}

type NullablePackagePostingRhythmType struct {
	value *PackagePostingRhythmType
	isSet bool
}

func (v NullablePackagePostingRhythmType) Get() *PackagePostingRhythmType {
	return v.value
}

func (v *NullablePackagePostingRhythmType) Set(val *PackagePostingRhythmType) {
	v.value = val
	v.isSet = true
}

func (v NullablePackagePostingRhythmType) IsSet() bool {
	return v.isSet
}

func (v *NullablePackagePostingRhythmType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePackagePostingRhythmType(val *PackagePostingRhythmType) *NullablePackagePostingRhythmType {
	return &NullablePackagePostingRhythmType{value: val, isSet: true}
}

func (v NullablePackagePostingRhythmType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePackagePostingRhythmType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


