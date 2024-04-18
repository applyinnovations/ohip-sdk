/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
)

// checks if the SellLimitGridByDateRangeType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &SellLimitGridByDateRangeType{}

// SellLimitGridByDateRangeType Indicates the sell limits for a date range. This will be rooms.
type SellLimitGridByDateRangeType struct {
	// The ending value of the date range.
	End *string `json:"end,omitempty"`
	Friday *bool `json:"friday,omitempty"`
	Monday *bool `json:"monday,omitempty"`
	Saturday *bool `json:"saturday,omitempty"`
	// Indicates the sell limit for the date range.
	SellLimit *int32 `json:"sellLimit,omitempty"`
	// The starting value of the date range.
	Start *string `json:"start,omitempty"`
	Sunday *bool `json:"sunday,omitempty"`
	Thursday *bool `json:"thursday,omitempty"`
	Tuesday *bool `json:"tuesday,omitempty"`
	Wednesday *bool `json:"wednesday,omitempty"`
}

// NewSellLimitGridByDateRangeType instantiates a new SellLimitGridByDateRangeType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewSellLimitGridByDateRangeType() *SellLimitGridByDateRangeType {
	this := SellLimitGridByDateRangeType{}
	return &this
}

// NewSellLimitGridByDateRangeTypeWithDefaults instantiates a new SellLimitGridByDateRangeType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewSellLimitGridByDateRangeTypeWithDefaults() *SellLimitGridByDateRangeType {
	this := SellLimitGridByDateRangeType{}
	return &this
}

// GetEnd returns the End field value if set, zero value otherwise.
func (o *SellLimitGridByDateRangeType) GetEnd() string {
	if o == nil || IsNil(o.End) {
		var ret string
		return ret
	}
	return *o.End
}

// GetEndOk returns a tuple with the End field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SellLimitGridByDateRangeType) GetEndOk() (*string, bool) {
	if o == nil || IsNil(o.End) {
		return nil, false
	}
	return o.End, true
}

// HasEnd returns a boolean if a field has been set.
func (o *SellLimitGridByDateRangeType) HasEnd() bool {
	if o != nil && !IsNil(o.End) {
		return true
	}

	return false
}

// SetEnd gets a reference to the given string and assigns it to the End field.
func (o *SellLimitGridByDateRangeType) SetEnd(v string) {
	o.End = &v
}

// GetFriday returns the Friday field value if set, zero value otherwise.
func (o *SellLimitGridByDateRangeType) GetFriday() bool {
	if o == nil || IsNil(o.Friday) {
		var ret bool
		return ret
	}
	return *o.Friday
}

// GetFridayOk returns a tuple with the Friday field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SellLimitGridByDateRangeType) GetFridayOk() (*bool, bool) {
	if o == nil || IsNil(o.Friday) {
		return nil, false
	}
	return o.Friday, true
}

// HasFriday returns a boolean if a field has been set.
func (o *SellLimitGridByDateRangeType) HasFriday() bool {
	if o != nil && !IsNil(o.Friday) {
		return true
	}

	return false
}

// SetFriday gets a reference to the given bool and assigns it to the Friday field.
func (o *SellLimitGridByDateRangeType) SetFriday(v bool) {
	o.Friday = &v
}

// GetMonday returns the Monday field value if set, zero value otherwise.
func (o *SellLimitGridByDateRangeType) GetMonday() bool {
	if o == nil || IsNil(o.Monday) {
		var ret bool
		return ret
	}
	return *o.Monday
}

// GetMondayOk returns a tuple with the Monday field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SellLimitGridByDateRangeType) GetMondayOk() (*bool, bool) {
	if o == nil || IsNil(o.Monday) {
		return nil, false
	}
	return o.Monday, true
}

// HasMonday returns a boolean if a field has been set.
func (o *SellLimitGridByDateRangeType) HasMonday() bool {
	if o != nil && !IsNil(o.Monday) {
		return true
	}

	return false
}

// SetMonday gets a reference to the given bool and assigns it to the Monday field.
func (o *SellLimitGridByDateRangeType) SetMonday(v bool) {
	o.Monday = &v
}

// GetSaturday returns the Saturday field value if set, zero value otherwise.
func (o *SellLimitGridByDateRangeType) GetSaturday() bool {
	if o == nil || IsNil(o.Saturday) {
		var ret bool
		return ret
	}
	return *o.Saturday
}

// GetSaturdayOk returns a tuple with the Saturday field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SellLimitGridByDateRangeType) GetSaturdayOk() (*bool, bool) {
	if o == nil || IsNil(o.Saturday) {
		return nil, false
	}
	return o.Saturday, true
}

// HasSaturday returns a boolean if a field has been set.
func (o *SellLimitGridByDateRangeType) HasSaturday() bool {
	if o != nil && !IsNil(o.Saturday) {
		return true
	}

	return false
}

// SetSaturday gets a reference to the given bool and assigns it to the Saturday field.
func (o *SellLimitGridByDateRangeType) SetSaturday(v bool) {
	o.Saturday = &v
}

// GetSellLimit returns the SellLimit field value if set, zero value otherwise.
func (o *SellLimitGridByDateRangeType) GetSellLimit() int32 {
	if o == nil || IsNil(o.SellLimit) {
		var ret int32
		return ret
	}
	return *o.SellLimit
}

// GetSellLimitOk returns a tuple with the SellLimit field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SellLimitGridByDateRangeType) GetSellLimitOk() (*int32, bool) {
	if o == nil || IsNil(o.SellLimit) {
		return nil, false
	}
	return o.SellLimit, true
}

// HasSellLimit returns a boolean if a field has been set.
func (o *SellLimitGridByDateRangeType) HasSellLimit() bool {
	if o != nil && !IsNil(o.SellLimit) {
		return true
	}

	return false
}

// SetSellLimit gets a reference to the given int32 and assigns it to the SellLimit field.
func (o *SellLimitGridByDateRangeType) SetSellLimit(v int32) {
	o.SellLimit = &v
}

// GetStart returns the Start field value if set, zero value otherwise.
func (o *SellLimitGridByDateRangeType) GetStart() string {
	if o == nil || IsNil(o.Start) {
		var ret string
		return ret
	}
	return *o.Start
}

// GetStartOk returns a tuple with the Start field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SellLimitGridByDateRangeType) GetStartOk() (*string, bool) {
	if o == nil || IsNil(o.Start) {
		return nil, false
	}
	return o.Start, true
}

// HasStart returns a boolean if a field has been set.
func (o *SellLimitGridByDateRangeType) HasStart() bool {
	if o != nil && !IsNil(o.Start) {
		return true
	}

	return false
}

// SetStart gets a reference to the given string and assigns it to the Start field.
func (o *SellLimitGridByDateRangeType) SetStart(v string) {
	o.Start = &v
}

// GetSunday returns the Sunday field value if set, zero value otherwise.
func (o *SellLimitGridByDateRangeType) GetSunday() bool {
	if o == nil || IsNil(o.Sunday) {
		var ret bool
		return ret
	}
	return *o.Sunday
}

// GetSundayOk returns a tuple with the Sunday field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SellLimitGridByDateRangeType) GetSundayOk() (*bool, bool) {
	if o == nil || IsNil(o.Sunday) {
		return nil, false
	}
	return o.Sunday, true
}

// HasSunday returns a boolean if a field has been set.
func (o *SellLimitGridByDateRangeType) HasSunday() bool {
	if o != nil && !IsNil(o.Sunday) {
		return true
	}

	return false
}

// SetSunday gets a reference to the given bool and assigns it to the Sunday field.
func (o *SellLimitGridByDateRangeType) SetSunday(v bool) {
	o.Sunday = &v
}

// GetThursday returns the Thursday field value if set, zero value otherwise.
func (o *SellLimitGridByDateRangeType) GetThursday() bool {
	if o == nil || IsNil(o.Thursday) {
		var ret bool
		return ret
	}
	return *o.Thursday
}

// GetThursdayOk returns a tuple with the Thursday field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SellLimitGridByDateRangeType) GetThursdayOk() (*bool, bool) {
	if o == nil || IsNil(o.Thursday) {
		return nil, false
	}
	return o.Thursday, true
}

// HasThursday returns a boolean if a field has been set.
func (o *SellLimitGridByDateRangeType) HasThursday() bool {
	if o != nil && !IsNil(o.Thursday) {
		return true
	}

	return false
}

// SetThursday gets a reference to the given bool and assigns it to the Thursday field.
func (o *SellLimitGridByDateRangeType) SetThursday(v bool) {
	o.Thursday = &v
}

// GetTuesday returns the Tuesday field value if set, zero value otherwise.
func (o *SellLimitGridByDateRangeType) GetTuesday() bool {
	if o == nil || IsNil(o.Tuesday) {
		var ret bool
		return ret
	}
	return *o.Tuesday
}

// GetTuesdayOk returns a tuple with the Tuesday field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SellLimitGridByDateRangeType) GetTuesdayOk() (*bool, bool) {
	if o == nil || IsNil(o.Tuesday) {
		return nil, false
	}
	return o.Tuesday, true
}

// HasTuesday returns a boolean if a field has been set.
func (o *SellLimitGridByDateRangeType) HasTuesday() bool {
	if o != nil && !IsNil(o.Tuesday) {
		return true
	}

	return false
}

// SetTuesday gets a reference to the given bool and assigns it to the Tuesday field.
func (o *SellLimitGridByDateRangeType) SetTuesday(v bool) {
	o.Tuesday = &v
}

// GetWednesday returns the Wednesday field value if set, zero value otherwise.
func (o *SellLimitGridByDateRangeType) GetWednesday() bool {
	if o == nil || IsNil(o.Wednesday) {
		var ret bool
		return ret
	}
	return *o.Wednesday
}

// GetWednesdayOk returns a tuple with the Wednesday field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SellLimitGridByDateRangeType) GetWednesdayOk() (*bool, bool) {
	if o == nil || IsNil(o.Wednesday) {
		return nil, false
	}
	return o.Wednesday, true
}

// HasWednesday returns a boolean if a field has been set.
func (o *SellLimitGridByDateRangeType) HasWednesday() bool {
	if o != nil && !IsNil(o.Wednesday) {
		return true
	}

	return false
}

// SetWednesday gets a reference to the given bool and assigns it to the Wednesday field.
func (o *SellLimitGridByDateRangeType) SetWednesday(v bool) {
	o.Wednesday = &v
}

func (o SellLimitGridByDateRangeType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o SellLimitGridByDateRangeType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.End) {
		toSerialize["end"] = o.End
	}
	if !IsNil(o.Friday) {
		toSerialize["friday"] = o.Friday
	}
	if !IsNil(o.Monday) {
		toSerialize["monday"] = o.Monday
	}
	if !IsNil(o.Saturday) {
		toSerialize["saturday"] = o.Saturday
	}
	if !IsNil(o.SellLimit) {
		toSerialize["sellLimit"] = o.SellLimit
	}
	if !IsNil(o.Start) {
		toSerialize["start"] = o.Start
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

type NullableSellLimitGridByDateRangeType struct {
	value *SellLimitGridByDateRangeType
	isSet bool
}

func (v NullableSellLimitGridByDateRangeType) Get() *SellLimitGridByDateRangeType {
	return v.value
}

func (v *NullableSellLimitGridByDateRangeType) Set(val *SellLimitGridByDateRangeType) {
	v.value = val
	v.isSet = true
}

func (v NullableSellLimitGridByDateRangeType) IsSet() bool {
	return v.isSet
}

func (v *NullableSellLimitGridByDateRangeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSellLimitGridByDateRangeType(val *SellLimitGridByDateRangeType) *NullableSellLimitGridByDateRangeType {
	return &NullableSellLimitGridByDateRangeType{value: val, isSet: true}
}

func (v NullableSellLimitGridByDateRangeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSellLimitGridByDateRangeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

