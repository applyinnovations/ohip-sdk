/*
OPERA Cloud Export Configuration API

APIs catering to the managing export master data configuration. The exports feature in OPERA Cloud provides the ability to create and export data files, such as back office data, to third-party interfaces and receiving systems.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package expcfg

import (
	"encoding/json"
)

// checks if the ExportScheduleFrequencyEODType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ExportScheduleFrequencyEODType{}

// ExportScheduleFrequencyEODType If specified then export is scheduled to run during end of day
type ExportScheduleFrequencyEODType struct {
	Friday *bool `json:"friday,omitempty"`
	Monday *bool `json:"monday,omitempty"`
	RepeatInterval *ExportScheduleEODRepeatIntervalType `json:"repeatInterval,omitempty"`
	Saturday *bool `json:"saturday,omitempty"`
	Sunday *bool `json:"sunday,omitempty"`
	Thursday *bool `json:"thursday,omitempty"`
	Tuesday *bool `json:"tuesday,omitempty"`
	Wednesday *bool `json:"wednesday,omitempty"`
}

// NewExportScheduleFrequencyEODType instantiates a new ExportScheduleFrequencyEODType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewExportScheduleFrequencyEODType() *ExportScheduleFrequencyEODType {
	this := ExportScheduleFrequencyEODType{}
	return &this
}

// NewExportScheduleFrequencyEODTypeWithDefaults instantiates a new ExportScheduleFrequencyEODType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewExportScheduleFrequencyEODTypeWithDefaults() *ExportScheduleFrequencyEODType {
	this := ExportScheduleFrequencyEODType{}
	return &this
}

// GetFriday returns the Friday field value if set, zero value otherwise.
func (o *ExportScheduleFrequencyEODType) GetFriday() bool {
	if o == nil || IsNil(o.Friday) {
		var ret bool
		return ret
	}
	return *o.Friday
}

// GetFridayOk returns a tuple with the Friday field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExportScheduleFrequencyEODType) GetFridayOk() (*bool, bool) {
	if o == nil || IsNil(o.Friday) {
		return nil, false
	}
	return o.Friday, true
}

// HasFriday returns a boolean if a field has been set.
func (o *ExportScheduleFrequencyEODType) HasFriday() bool {
	if o != nil && !IsNil(o.Friday) {
		return true
	}

	return false
}

// SetFriday gets a reference to the given bool and assigns it to the Friday field.
func (o *ExportScheduleFrequencyEODType) SetFriday(v bool) {
	o.Friday = &v
}

// GetMonday returns the Monday field value if set, zero value otherwise.
func (o *ExportScheduleFrequencyEODType) GetMonday() bool {
	if o == nil || IsNil(o.Monday) {
		var ret bool
		return ret
	}
	return *o.Monday
}

// GetMondayOk returns a tuple with the Monday field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExportScheduleFrequencyEODType) GetMondayOk() (*bool, bool) {
	if o == nil || IsNil(o.Monday) {
		return nil, false
	}
	return o.Monday, true
}

// HasMonday returns a boolean if a field has been set.
func (o *ExportScheduleFrequencyEODType) HasMonday() bool {
	if o != nil && !IsNil(o.Monday) {
		return true
	}

	return false
}

// SetMonday gets a reference to the given bool and assigns it to the Monday field.
func (o *ExportScheduleFrequencyEODType) SetMonday(v bool) {
	o.Monday = &v
}

// GetRepeatInterval returns the RepeatInterval field value if set, zero value otherwise.
func (o *ExportScheduleFrequencyEODType) GetRepeatInterval() ExportScheduleEODRepeatIntervalType {
	if o == nil || IsNil(o.RepeatInterval) {
		var ret ExportScheduleEODRepeatIntervalType
		return ret
	}
	return *o.RepeatInterval
}

// GetRepeatIntervalOk returns a tuple with the RepeatInterval field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExportScheduleFrequencyEODType) GetRepeatIntervalOk() (*ExportScheduleEODRepeatIntervalType, bool) {
	if o == nil || IsNil(o.RepeatInterval) {
		return nil, false
	}
	return o.RepeatInterval, true
}

// HasRepeatInterval returns a boolean if a field has been set.
func (o *ExportScheduleFrequencyEODType) HasRepeatInterval() bool {
	if o != nil && !IsNil(o.RepeatInterval) {
		return true
	}

	return false
}

// SetRepeatInterval gets a reference to the given ExportScheduleEODRepeatIntervalType and assigns it to the RepeatInterval field.
func (o *ExportScheduleFrequencyEODType) SetRepeatInterval(v ExportScheduleEODRepeatIntervalType) {
	o.RepeatInterval = &v
}

// GetSaturday returns the Saturday field value if set, zero value otherwise.
func (o *ExportScheduleFrequencyEODType) GetSaturday() bool {
	if o == nil || IsNil(o.Saturday) {
		var ret bool
		return ret
	}
	return *o.Saturday
}

// GetSaturdayOk returns a tuple with the Saturday field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExportScheduleFrequencyEODType) GetSaturdayOk() (*bool, bool) {
	if o == nil || IsNil(o.Saturday) {
		return nil, false
	}
	return o.Saturday, true
}

// HasSaturday returns a boolean if a field has been set.
func (o *ExportScheduleFrequencyEODType) HasSaturday() bool {
	if o != nil && !IsNil(o.Saturday) {
		return true
	}

	return false
}

// SetSaturday gets a reference to the given bool and assigns it to the Saturday field.
func (o *ExportScheduleFrequencyEODType) SetSaturday(v bool) {
	o.Saturday = &v
}

// GetSunday returns the Sunday field value if set, zero value otherwise.
func (o *ExportScheduleFrequencyEODType) GetSunday() bool {
	if o == nil || IsNil(o.Sunday) {
		var ret bool
		return ret
	}
	return *o.Sunday
}

// GetSundayOk returns a tuple with the Sunday field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExportScheduleFrequencyEODType) GetSundayOk() (*bool, bool) {
	if o == nil || IsNil(o.Sunday) {
		return nil, false
	}
	return o.Sunday, true
}

// HasSunday returns a boolean if a field has been set.
func (o *ExportScheduleFrequencyEODType) HasSunday() bool {
	if o != nil && !IsNil(o.Sunday) {
		return true
	}

	return false
}

// SetSunday gets a reference to the given bool and assigns it to the Sunday field.
func (o *ExportScheduleFrequencyEODType) SetSunday(v bool) {
	o.Sunday = &v
}

// GetThursday returns the Thursday field value if set, zero value otherwise.
func (o *ExportScheduleFrequencyEODType) GetThursday() bool {
	if o == nil || IsNil(o.Thursday) {
		var ret bool
		return ret
	}
	return *o.Thursday
}

// GetThursdayOk returns a tuple with the Thursday field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExportScheduleFrequencyEODType) GetThursdayOk() (*bool, bool) {
	if o == nil || IsNil(o.Thursday) {
		return nil, false
	}
	return o.Thursday, true
}

// HasThursday returns a boolean if a field has been set.
func (o *ExportScheduleFrequencyEODType) HasThursday() bool {
	if o != nil && !IsNil(o.Thursday) {
		return true
	}

	return false
}

// SetThursday gets a reference to the given bool and assigns it to the Thursday field.
func (o *ExportScheduleFrequencyEODType) SetThursday(v bool) {
	o.Thursday = &v
}

// GetTuesday returns the Tuesday field value if set, zero value otherwise.
func (o *ExportScheduleFrequencyEODType) GetTuesday() bool {
	if o == nil || IsNil(o.Tuesday) {
		var ret bool
		return ret
	}
	return *o.Tuesday
}

// GetTuesdayOk returns a tuple with the Tuesday field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExportScheduleFrequencyEODType) GetTuesdayOk() (*bool, bool) {
	if o == nil || IsNil(o.Tuesday) {
		return nil, false
	}
	return o.Tuesday, true
}

// HasTuesday returns a boolean if a field has been set.
func (o *ExportScheduleFrequencyEODType) HasTuesday() bool {
	if o != nil && !IsNil(o.Tuesday) {
		return true
	}

	return false
}

// SetTuesday gets a reference to the given bool and assigns it to the Tuesday field.
func (o *ExportScheduleFrequencyEODType) SetTuesday(v bool) {
	o.Tuesday = &v
}

// GetWednesday returns the Wednesday field value if set, zero value otherwise.
func (o *ExportScheduleFrequencyEODType) GetWednesday() bool {
	if o == nil || IsNil(o.Wednesday) {
		var ret bool
		return ret
	}
	return *o.Wednesday
}

// GetWednesdayOk returns a tuple with the Wednesday field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExportScheduleFrequencyEODType) GetWednesdayOk() (*bool, bool) {
	if o == nil || IsNil(o.Wednesday) {
		return nil, false
	}
	return o.Wednesday, true
}

// HasWednesday returns a boolean if a field has been set.
func (o *ExportScheduleFrequencyEODType) HasWednesday() bool {
	if o != nil && !IsNil(o.Wednesday) {
		return true
	}

	return false
}

// SetWednesday gets a reference to the given bool and assigns it to the Wednesday field.
func (o *ExportScheduleFrequencyEODType) SetWednesday(v bool) {
	o.Wednesday = &v
}

func (o ExportScheduleFrequencyEODType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ExportScheduleFrequencyEODType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Friday) {
		toSerialize["friday"] = o.Friday
	}
	if !IsNil(o.Monday) {
		toSerialize["monday"] = o.Monday
	}
	if !IsNil(o.RepeatInterval) {
		toSerialize["repeatInterval"] = o.RepeatInterval
	}
	if !IsNil(o.Saturday) {
		toSerialize["saturday"] = o.Saturday
	}
	if !IsNil(o.Sunday) {
		toSerialize["sunday"] = o.Sunday
	}
	if !IsNil(o.Thursday) {
		toSerialize["thursday"] = o.Thursday
	}
	if !IsNil(o.Tuesday) {
		toSerialize["tuesday"] = o.Tuesday
	}
	if !IsNil(o.Wednesday) {
		toSerialize["wednesday"] = o.Wednesday
	}
	return toSerialize, nil
}

type NullableExportScheduleFrequencyEODType struct {
	value *ExportScheduleFrequencyEODType
	isSet bool
}

func (v NullableExportScheduleFrequencyEODType) Get() *ExportScheduleFrequencyEODType {
	return v.value
}

func (v *NullableExportScheduleFrequencyEODType) Set(val *ExportScheduleFrequencyEODType) {
	v.value = val
	v.isSet = true
}

func (v NullableExportScheduleFrequencyEODType) IsSet() bool {
	return v.isSet
}

func (v *NullableExportScheduleFrequencyEODType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableExportScheduleFrequencyEODType(val *ExportScheduleFrequencyEODType) *NullableExportScheduleFrequencyEODType {
	return &NullableExportScheduleFrequencyEODType{value: val, isSet: true}
}

func (v NullableExportScheduleFrequencyEODType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableExportScheduleFrequencyEODType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


