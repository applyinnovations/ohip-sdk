/*
OPERA Cloud Front Desk Operations Service

APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fof

import (
	"encoding/json"
)

// checks if the PackagePostingRhythmTypeCustomStaySchedule type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PackagePostingRhythmTypeCustomStaySchedule{}

// PackagePostingRhythmTypeCustomStaySchedule This user defined schedule lets you enter a posting rhythm over a 14-day period, starting with the arrival date, by assigning the day (number) within a guest stay for posting this package price.
type PackagePostingRhythmTypeCustomStaySchedule struct {
	// Night 1 indicator.
	Night1 *bool `json:"night1,omitempty"`
	// Night 10 indicator.
	Night10 *bool `json:"night10,omitempty"`
	// Night 11 indicator.
	Night11 *bool `json:"night11,omitempty"`
	// Night 12 indicator.
	Night12 *bool `json:"night12,omitempty"`
	// Night 13 indicator.
	Night13 *bool `json:"night13,omitempty"`
	// Night 14 indicator.
	Night14 *bool `json:"night14,omitempty"`
	// Night 2 indicator.
	Night2 *bool `json:"night2,omitempty"`
	// Night 3 indicator.
	Night3 *bool `json:"night3,omitempty"`
	// Night 4 indicator.
	Night4 *bool `json:"night4,omitempty"`
	// Night 5 indicator.
	Night5 *bool `json:"night5,omitempty"`
	// Night 6 indicator.
	Night6 *bool `json:"night6,omitempty"`
	// Night 7 indicator.
	Night7 *bool `json:"night7,omitempty"`
	// Night 8 indicator.
	Night8 *bool `json:"night8,omitempty"`
	// Night 9 indicator.
	Night9 *bool `json:"night9,omitempty"`
}

// NewPackagePostingRhythmTypeCustomStaySchedule instantiates a new PackagePostingRhythmTypeCustomStaySchedule object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPackagePostingRhythmTypeCustomStaySchedule() *PackagePostingRhythmTypeCustomStaySchedule {
	this := PackagePostingRhythmTypeCustomStaySchedule{}
	return &this
}

// NewPackagePostingRhythmTypeCustomStayScheduleWithDefaults instantiates a new PackagePostingRhythmTypeCustomStaySchedule object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPackagePostingRhythmTypeCustomStayScheduleWithDefaults() *PackagePostingRhythmTypeCustomStaySchedule {
	this := PackagePostingRhythmTypeCustomStaySchedule{}
	return &this
}

// GetNight1 returns the Night1 field value if set, zero value otherwise.
func (o *PackagePostingRhythmTypeCustomStaySchedule) GetNight1() bool {
	if o == nil || IsNil(o.Night1) {
		var ret bool
		return ret
	}
	return *o.Night1
}

// GetNight1Ok returns a tuple with the Night1 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackagePostingRhythmTypeCustomStaySchedule) GetNight1Ok() (*bool, bool) {
	if o == nil || IsNil(o.Night1) {
		return nil, false
	}
	return o.Night1, true
}

// HasNight1 returns a boolean if a field has been set.
func (o *PackagePostingRhythmTypeCustomStaySchedule) HasNight1() bool {
	if o != nil && !IsNil(o.Night1) {
		return true
	}

	return false
}

// SetNight1 gets a reference to the given bool and assigns it to the Night1 field.
func (o *PackagePostingRhythmTypeCustomStaySchedule) SetNight1(v bool) {
	o.Night1 = &v
}

// GetNight10 returns the Night10 field value if set, zero value otherwise.
func (o *PackagePostingRhythmTypeCustomStaySchedule) GetNight10() bool {
	if o == nil || IsNil(o.Night10) {
		var ret bool
		return ret
	}
	return *o.Night10
}

// GetNight10Ok returns a tuple with the Night10 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackagePostingRhythmTypeCustomStaySchedule) GetNight10Ok() (*bool, bool) {
	if o == nil || IsNil(o.Night10) {
		return nil, false
	}
	return o.Night10, true
}

// HasNight10 returns a boolean if a field has been set.
func (o *PackagePostingRhythmTypeCustomStaySchedule) HasNight10() bool {
	if o != nil && !IsNil(o.Night10) {
		return true
	}

	return false
}

// SetNight10 gets a reference to the given bool and assigns it to the Night10 field.
func (o *PackagePostingRhythmTypeCustomStaySchedule) SetNight10(v bool) {
	o.Night10 = &v
}

// GetNight11 returns the Night11 field value if set, zero value otherwise.
func (o *PackagePostingRhythmTypeCustomStaySchedule) GetNight11() bool {
	if o == nil || IsNil(o.Night11) {
		var ret bool
		return ret
	}
	return *o.Night11
}

// GetNight11Ok returns a tuple with the Night11 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackagePostingRhythmTypeCustomStaySchedule) GetNight11Ok() (*bool, bool) {
	if o == nil || IsNil(o.Night11) {
		return nil, false
	}
	return o.Night11, true
}

// HasNight11 returns a boolean if a field has been set.
func (o *PackagePostingRhythmTypeCustomStaySchedule) HasNight11() bool {
	if o != nil && !IsNil(o.Night11) {
		return true
	}

	return false
}

// SetNight11 gets a reference to the given bool and assigns it to the Night11 field.
func (o *PackagePostingRhythmTypeCustomStaySchedule) SetNight11(v bool) {
	o.Night11 = &v
}

// GetNight12 returns the Night12 field value if set, zero value otherwise.
func (o *PackagePostingRhythmTypeCustomStaySchedule) GetNight12() bool {
	if o == nil || IsNil(o.Night12) {
		var ret bool
		return ret
	}
	return *o.Night12
}

// GetNight12Ok returns a tuple with the Night12 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackagePostingRhythmTypeCustomStaySchedule) GetNight12Ok() (*bool, bool) {
	if o == nil || IsNil(o.Night12) {
		return nil, false
	}
	return o.Night12, true
}

// HasNight12 returns a boolean if a field has been set.
func (o *PackagePostingRhythmTypeCustomStaySchedule) HasNight12() bool {
	if o != nil && !IsNil(o.Night12) {
		return true
	}

	return false
}

// SetNight12 gets a reference to the given bool and assigns it to the Night12 field.
func (o *PackagePostingRhythmTypeCustomStaySchedule) SetNight12(v bool) {
	o.Night12 = &v
}

// GetNight13 returns the Night13 field value if set, zero value otherwise.
func (o *PackagePostingRhythmTypeCustomStaySchedule) GetNight13() bool {
	if o == nil || IsNil(o.Night13) {
		var ret bool
		return ret
	}
	return *o.Night13
}

// GetNight13Ok returns a tuple with the Night13 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackagePostingRhythmTypeCustomStaySchedule) GetNight13Ok() (*bool, bool) {
	if o == nil || IsNil(o.Night13) {
		return nil, false
	}
	return o.Night13, true
}

// HasNight13 returns a boolean if a field has been set.
func (o *PackagePostingRhythmTypeCustomStaySchedule) HasNight13() bool {
	if o != nil && !IsNil(o.Night13) {
		return true
	}

	return false
}

// SetNight13 gets a reference to the given bool and assigns it to the Night13 field.
func (o *PackagePostingRhythmTypeCustomStaySchedule) SetNight13(v bool) {
	o.Night13 = &v
}

// GetNight14 returns the Night14 field value if set, zero value otherwise.
func (o *PackagePostingRhythmTypeCustomStaySchedule) GetNight14() bool {
	if o == nil || IsNil(o.Night14) {
		var ret bool
		return ret
	}
	return *o.Night14
}

// GetNight14Ok returns a tuple with the Night14 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackagePostingRhythmTypeCustomStaySchedule) GetNight14Ok() (*bool, bool) {
	if o == nil || IsNil(o.Night14) {
		return nil, false
	}
	return o.Night14, true
}

// HasNight14 returns a boolean if a field has been set.
func (o *PackagePostingRhythmTypeCustomStaySchedule) HasNight14() bool {
	if o != nil && !IsNil(o.Night14) {
		return true
	}

	return false
}

// SetNight14 gets a reference to the given bool and assigns it to the Night14 field.
func (o *PackagePostingRhythmTypeCustomStaySchedule) SetNight14(v bool) {
	o.Night14 = &v
}

// GetNight2 returns the Night2 field value if set, zero value otherwise.
func (o *PackagePostingRhythmTypeCustomStaySchedule) GetNight2() bool {
	if o == nil || IsNil(o.Night2) {
		var ret bool
		return ret
	}
	return *o.Night2
}

// GetNight2Ok returns a tuple with the Night2 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackagePostingRhythmTypeCustomStaySchedule) GetNight2Ok() (*bool, bool) {
	if o == nil || IsNil(o.Night2) {
		return nil, false
	}
	return o.Night2, true
}

// HasNight2 returns a boolean if a field has been set.
func (o *PackagePostingRhythmTypeCustomStaySchedule) HasNight2() bool {
	if o != nil && !IsNil(o.Night2) {
		return true
	}

	return false
}

// SetNight2 gets a reference to the given bool and assigns it to the Night2 field.
func (o *PackagePostingRhythmTypeCustomStaySchedule) SetNight2(v bool) {
	o.Night2 = &v
}

// GetNight3 returns the Night3 field value if set, zero value otherwise.
func (o *PackagePostingRhythmTypeCustomStaySchedule) GetNight3() bool {
	if o == nil || IsNil(o.Night3) {
		var ret bool
		return ret
	}
	return *o.Night3
}

// GetNight3Ok returns a tuple with the Night3 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackagePostingRhythmTypeCustomStaySchedule) GetNight3Ok() (*bool, bool) {
	if o == nil || IsNil(o.Night3) {
		return nil, false
	}
	return o.Night3, true
}

// HasNight3 returns a boolean if a field has been set.
func (o *PackagePostingRhythmTypeCustomStaySchedule) HasNight3() bool {
	if o != nil && !IsNil(o.Night3) {
		return true
	}

	return false
}

// SetNight3 gets a reference to the given bool and assigns it to the Night3 field.
func (o *PackagePostingRhythmTypeCustomStaySchedule) SetNight3(v bool) {
	o.Night3 = &v
}

// GetNight4 returns the Night4 field value if set, zero value otherwise.
func (o *PackagePostingRhythmTypeCustomStaySchedule) GetNight4() bool {
	if o == nil || IsNil(o.Night4) {
		var ret bool
		return ret
	}
	return *o.Night4
}

// GetNight4Ok returns a tuple with the Night4 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackagePostingRhythmTypeCustomStaySchedule) GetNight4Ok() (*bool, bool) {
	if o == nil || IsNil(o.Night4) {
		return nil, false
	}
	return o.Night4, true
}

// HasNight4 returns a boolean if a field has been set.
func (o *PackagePostingRhythmTypeCustomStaySchedule) HasNight4() bool {
	if o != nil && !IsNil(o.Night4) {
		return true
	}

	return false
}

// SetNight4 gets a reference to the given bool and assigns it to the Night4 field.
func (o *PackagePostingRhythmTypeCustomStaySchedule) SetNight4(v bool) {
	o.Night4 = &v
}

// GetNight5 returns the Night5 field value if set, zero value otherwise.
func (o *PackagePostingRhythmTypeCustomStaySchedule) GetNight5() bool {
	if o == nil || IsNil(o.Night5) {
		var ret bool
		return ret
	}
	return *o.Night5
}

// GetNight5Ok returns a tuple with the Night5 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackagePostingRhythmTypeCustomStaySchedule) GetNight5Ok() (*bool, bool) {
	if o == nil || IsNil(o.Night5) {
		return nil, false
	}
	return o.Night5, true
}

// HasNight5 returns a boolean if a field has been set.
func (o *PackagePostingRhythmTypeCustomStaySchedule) HasNight5() bool {
	if o != nil && !IsNil(o.Night5) {
		return true
	}

	return false
}

// SetNight5 gets a reference to the given bool and assigns it to the Night5 field.
func (o *PackagePostingRhythmTypeCustomStaySchedule) SetNight5(v bool) {
	o.Night5 = &v
}

// GetNight6 returns the Night6 field value if set, zero value otherwise.
func (o *PackagePostingRhythmTypeCustomStaySchedule) GetNight6() bool {
	if o == nil || IsNil(o.Night6) {
		var ret bool
		return ret
	}
	return *o.Night6
}

// GetNight6Ok returns a tuple with the Night6 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackagePostingRhythmTypeCustomStaySchedule) GetNight6Ok() (*bool, bool) {
	if o == nil || IsNil(o.Night6) {
		return nil, false
	}
	return o.Night6, true
}

// HasNight6 returns a boolean if a field has been set.
func (o *PackagePostingRhythmTypeCustomStaySchedule) HasNight6() bool {
	if o != nil && !IsNil(o.Night6) {
		return true
	}

	return false
}

// SetNight6 gets a reference to the given bool and assigns it to the Night6 field.
func (o *PackagePostingRhythmTypeCustomStaySchedule) SetNight6(v bool) {
	o.Night6 = &v
}

// GetNight7 returns the Night7 field value if set, zero value otherwise.
func (o *PackagePostingRhythmTypeCustomStaySchedule) GetNight7() bool {
	if o == nil || IsNil(o.Night7) {
		var ret bool
		return ret
	}
	return *o.Night7
}

// GetNight7Ok returns a tuple with the Night7 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackagePostingRhythmTypeCustomStaySchedule) GetNight7Ok() (*bool, bool) {
	if o == nil || IsNil(o.Night7) {
		return nil, false
	}
	return o.Night7, true
}

// HasNight7 returns a boolean if a field has been set.
func (o *PackagePostingRhythmTypeCustomStaySchedule) HasNight7() bool {
	if o != nil && !IsNil(o.Night7) {
		return true
	}

	return false
}

// SetNight7 gets a reference to the given bool and assigns it to the Night7 field.
func (o *PackagePostingRhythmTypeCustomStaySchedule) SetNight7(v bool) {
	o.Night7 = &v
}

// GetNight8 returns the Night8 field value if set, zero value otherwise.
func (o *PackagePostingRhythmTypeCustomStaySchedule) GetNight8() bool {
	if o == nil || IsNil(o.Night8) {
		var ret bool
		return ret
	}
	return *o.Night8
}

// GetNight8Ok returns a tuple with the Night8 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackagePostingRhythmTypeCustomStaySchedule) GetNight8Ok() (*bool, bool) {
	if o == nil || IsNil(o.Night8) {
		return nil, false
	}
	return o.Night8, true
}

// HasNight8 returns a boolean if a field has been set.
func (o *PackagePostingRhythmTypeCustomStaySchedule) HasNight8() bool {
	if o != nil && !IsNil(o.Night8) {
		return true
	}

	return false
}

// SetNight8 gets a reference to the given bool and assigns it to the Night8 field.
func (o *PackagePostingRhythmTypeCustomStaySchedule) SetNight8(v bool) {
	o.Night8 = &v
}

// GetNight9 returns the Night9 field value if set, zero value otherwise.
func (o *PackagePostingRhythmTypeCustomStaySchedule) GetNight9() bool {
	if o == nil || IsNil(o.Night9) {
		var ret bool
		return ret
	}
	return *o.Night9
}

// GetNight9Ok returns a tuple with the Night9 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackagePostingRhythmTypeCustomStaySchedule) GetNight9Ok() (*bool, bool) {
	if o == nil || IsNil(o.Night9) {
		return nil, false
	}
	return o.Night9, true
}

// HasNight9 returns a boolean if a field has been set.
func (o *PackagePostingRhythmTypeCustomStaySchedule) HasNight9() bool {
	if o != nil && !IsNil(o.Night9) {
		return true
	}

	return false
}

// SetNight9 gets a reference to the given bool and assigns it to the Night9 field.
func (o *PackagePostingRhythmTypeCustomStaySchedule) SetNight9(v bool) {
	o.Night9 = &v
}

func (o PackagePostingRhythmTypeCustomStaySchedule) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PackagePostingRhythmTypeCustomStaySchedule) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Night1) {
		toSerialize["night1"] = o.Night1
	}
	if !IsNil(o.Night10) {
		toSerialize["night10"] = o.Night10
	}
	if !IsNil(o.Night11) {
		toSerialize["night11"] = o.Night11
	}
	if !IsNil(o.Night12) {
		toSerialize["night12"] = o.Night12
	}
	if !IsNil(o.Night13) {
		toSerialize["night13"] = o.Night13
	}
	if !IsNil(o.Night14) {
		toSerialize["night14"] = o.Night14
	}
	if !IsNil(o.Night2) {
		toSerialize["night2"] = o.Night2
	}
	if !IsNil(o.Night3) {
		toSerialize["night3"] = o.Night3
	}
	if !IsNil(o.Night4) {
		toSerialize["night4"] = o.Night4
	}
	if !IsNil(o.Night5) {
		toSerialize["night5"] = o.Night5
	}
	if !IsNil(o.Night6) {
		toSerialize["night6"] = o.Night6
	}
	if !IsNil(o.Night7) {
		toSerialize["night7"] = o.Night7
	}
	if !IsNil(o.Night8) {
		toSerialize["night8"] = o.Night8
	}
	if !IsNil(o.Night9) {
		toSerialize["night9"] = o.Night9
	}
	return toSerialize, nil
}

type NullablePackagePostingRhythmTypeCustomStaySchedule struct {
	value *PackagePostingRhythmTypeCustomStaySchedule
	isSet bool
}

func (v NullablePackagePostingRhythmTypeCustomStaySchedule) Get() *PackagePostingRhythmTypeCustomStaySchedule {
	return v.value
}

func (v *NullablePackagePostingRhythmTypeCustomStaySchedule) Set(val *PackagePostingRhythmTypeCustomStaySchedule) {
	v.value = val
	v.isSet = true
}

func (v NullablePackagePostingRhythmTypeCustomStaySchedule) IsSet() bool {
	return v.isSet
}

func (v *NullablePackagePostingRhythmTypeCustomStaySchedule) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePackagePostingRhythmTypeCustomStaySchedule(val *PackagePostingRhythmTypeCustomStaySchedule) *NullablePackagePostingRhythmTypeCustomStaySchedule {
	return &NullablePackagePostingRhythmTypeCustomStaySchedule{value: val, isSet: true}
}

func (v NullablePackagePostingRhythmTypeCustomStaySchedule) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePackagePostingRhythmTypeCustomStaySchedule) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


