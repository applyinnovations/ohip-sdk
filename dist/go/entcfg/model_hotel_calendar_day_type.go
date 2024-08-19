/*
OPERA Cloud Enterprise Configuration API

APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package entcfg

import (
	"encoding/json"
)

// checks if the HotelCalendarDayType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HotelCalendarDayType{}

// HotelCalendarDayType Details of calendar entries for a specific day for a specific hotel.
type HotelCalendarDayType struct {
	DayType *HotelCalendarDayTypeType `json:"dayType,omitempty"`
	// Details of hotel events
	Events []HotelCalendarEventType `json:"events,omitempty"`
	// Indicates a specific hotel for which the calendar is being represented.
	Date *string `json:"date,omitempty"`
}

// NewHotelCalendarDayType instantiates a new HotelCalendarDayType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHotelCalendarDayType() *HotelCalendarDayType {
	this := HotelCalendarDayType{}
	return &this
}

// NewHotelCalendarDayTypeWithDefaults instantiates a new HotelCalendarDayType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHotelCalendarDayTypeWithDefaults() *HotelCalendarDayType {
	this := HotelCalendarDayType{}
	return &this
}

// GetDayType returns the DayType field value if set, zero value otherwise.
func (o *HotelCalendarDayType) GetDayType() HotelCalendarDayTypeType {
	if o == nil || IsNil(o.DayType) {
		var ret HotelCalendarDayTypeType
		return ret
	}
	return *o.DayType
}

// GetDayTypeOk returns a tuple with the DayType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelCalendarDayType) GetDayTypeOk() (*HotelCalendarDayTypeType, bool) {
	if o == nil || IsNil(o.DayType) {
		return nil, false
	}
	return o.DayType, true
}

// HasDayType returns a boolean if a field has been set.
func (o *HotelCalendarDayType) HasDayType() bool {
	if o != nil && !IsNil(o.DayType) {
		return true
	}

	return false
}

// SetDayType gets a reference to the given HotelCalendarDayTypeType and assigns it to the DayType field.
func (o *HotelCalendarDayType) SetDayType(v HotelCalendarDayTypeType) {
	o.DayType = &v
}

// GetEvents returns the Events field value if set, zero value otherwise.
func (o *HotelCalendarDayType) GetEvents() []HotelCalendarEventType {
	if o == nil || IsNil(o.Events) {
		var ret []HotelCalendarEventType
		return ret
	}
	return o.Events
}

// GetEventsOk returns a tuple with the Events field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelCalendarDayType) GetEventsOk() ([]HotelCalendarEventType, bool) {
	if o == nil || IsNil(o.Events) {
		return nil, false
	}
	return o.Events, true
}

// HasEvents returns a boolean if a field has been set.
func (o *HotelCalendarDayType) HasEvents() bool {
	if o != nil && !IsNil(o.Events) {
		return true
	}

	return false
}

// SetEvents gets a reference to the given []HotelCalendarEventType and assigns it to the Events field.
func (o *HotelCalendarDayType) SetEvents(v []HotelCalendarEventType) {
	o.Events = v
}

// GetDate returns the Date field value if set, zero value otherwise.
func (o *HotelCalendarDayType) GetDate() string {
	if o == nil || IsNil(o.Date) {
		var ret string
		return ret
	}
	return *o.Date
}

// GetDateOk returns a tuple with the Date field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelCalendarDayType) GetDateOk() (*string, bool) {
	if o == nil || IsNil(o.Date) {
		return nil, false
	}
	return o.Date, true
}

// HasDate returns a boolean if a field has been set.
func (o *HotelCalendarDayType) HasDate() bool {
	if o != nil && !IsNil(o.Date) {
		return true
	}

	return false
}

// SetDate gets a reference to the given string and assigns it to the Date field.
func (o *HotelCalendarDayType) SetDate(v string) {
	o.Date = &v
}

func (o HotelCalendarDayType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HotelCalendarDayType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.DayType) {
		toSerialize["dayType"] = o.DayType
	}
	if !IsNil(o.Events) {
		toSerialize["events"] = o.Events
	}
	if !IsNil(o.Date) {
		toSerialize["date"] = o.Date
	}
	return toSerialize, nil
}

type NullableHotelCalendarDayType struct {
	value *HotelCalendarDayType
	isSet bool
}

func (v NullableHotelCalendarDayType) Get() *HotelCalendarDayType {
	return v.value
}

func (v *NullableHotelCalendarDayType) Set(val *HotelCalendarDayType) {
	v.value = val
	v.isSet = true
}

func (v NullableHotelCalendarDayType) IsSet() bool {
	return v.isSet
}

func (v *NullableHotelCalendarDayType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHotelCalendarDayType(val *HotelCalendarDayType) *NullableHotelCalendarDayType {
	return &NullableHotelCalendarDayType{value: val, isSet: true}
}

func (v NullableHotelCalendarDayType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHotelCalendarDayType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


