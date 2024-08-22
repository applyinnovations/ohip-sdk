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

// checks if the RatePlanScheduleListType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RatePlanScheduleListType{}

// RatePlanScheduleListType struct for RatePlanScheduleListType
type RatePlanScheduleListType struct {
	// Total number of rows returned
	Count *int32 `json:"count,omitempty"`
	// Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
	HasMore *bool `json:"hasMore,omitempty"`
	// Hotel code.
	HotelId *string `json:"hotelId,omitempty"`
	// Rate plan Code.
	RatePlanCode *string `json:"ratePlanCode,omitempty"`
	// Rate plan schedule list.
	RatePlanSchedule []RatePlanSchedulesType `json:"ratePlanSchedule,omitempty"`
	// Total number of rows queried
	TotalResults *int32 `json:"totalResults,omitempty"`
}

// NewRatePlanScheduleListType instantiates a new RatePlanScheduleListType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRatePlanScheduleListType() *RatePlanScheduleListType {
	this := RatePlanScheduleListType{}
	return &this
}

// NewRatePlanScheduleListTypeWithDefaults instantiates a new RatePlanScheduleListType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRatePlanScheduleListTypeWithDefaults() *RatePlanScheduleListType {
	this := RatePlanScheduleListType{}
	return &this
}

// GetCount returns the Count field value if set, zero value otherwise.
func (o *RatePlanScheduleListType) GetCount() int32 {
	if o == nil || IsNil(o.Count) {
		var ret int32
		return ret
	}
	return *o.Count
}

// GetCountOk returns a tuple with the Count field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanScheduleListType) GetCountOk() (*int32, bool) {
	if o == nil || IsNil(o.Count) {
		return nil, false
	}
	return o.Count, true
}

// HasCount returns a boolean if a field has been set.
func (o *RatePlanScheduleListType) HasCount() bool {
	if o != nil && !IsNil(o.Count) {
		return true
	}

	return false
}

// SetCount gets a reference to the given int32 and assigns it to the Count field.
func (o *RatePlanScheduleListType) SetCount(v int32) {
	o.Count = &v
}

// GetHasMore returns the HasMore field value if set, zero value otherwise.
func (o *RatePlanScheduleListType) GetHasMore() bool {
	if o == nil || IsNil(o.HasMore) {
		var ret bool
		return ret
	}
	return *o.HasMore
}

// GetHasMoreOk returns a tuple with the HasMore field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanScheduleListType) GetHasMoreOk() (*bool, bool) {
	if o == nil || IsNil(o.HasMore) {
		return nil, false
	}
	return o.HasMore, true
}

// HasHasMore returns a boolean if a field has been set.
func (o *RatePlanScheduleListType) HasHasMore() bool {
	if o != nil && !IsNil(o.HasMore) {
		return true
	}

	return false
}

// SetHasMore gets a reference to the given bool and assigns it to the HasMore field.
func (o *RatePlanScheduleListType) SetHasMore(v bool) {
	o.HasMore = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *RatePlanScheduleListType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanScheduleListType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *RatePlanScheduleListType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *RatePlanScheduleListType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetRatePlanCode returns the RatePlanCode field value if set, zero value otherwise.
func (o *RatePlanScheduleListType) GetRatePlanCode() string {
	if o == nil || IsNil(o.RatePlanCode) {
		var ret string
		return ret
	}
	return *o.RatePlanCode
}

// GetRatePlanCodeOk returns a tuple with the RatePlanCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanScheduleListType) GetRatePlanCodeOk() (*string, bool) {
	if o == nil || IsNil(o.RatePlanCode) {
		return nil, false
	}
	return o.RatePlanCode, true
}

// HasRatePlanCode returns a boolean if a field has been set.
func (o *RatePlanScheduleListType) HasRatePlanCode() bool {
	if o != nil && !IsNil(o.RatePlanCode) {
		return true
	}

	return false
}

// SetRatePlanCode gets a reference to the given string and assigns it to the RatePlanCode field.
func (o *RatePlanScheduleListType) SetRatePlanCode(v string) {
	o.RatePlanCode = &v
}

// GetRatePlanSchedule returns the RatePlanSchedule field value if set, zero value otherwise.
func (o *RatePlanScheduleListType) GetRatePlanSchedule() []RatePlanSchedulesType {
	if o == nil || IsNil(o.RatePlanSchedule) {
		var ret []RatePlanSchedulesType
		return ret
	}
	return o.RatePlanSchedule
}

// GetRatePlanScheduleOk returns a tuple with the RatePlanSchedule field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanScheduleListType) GetRatePlanScheduleOk() ([]RatePlanSchedulesType, bool) {
	if o == nil || IsNil(o.RatePlanSchedule) {
		return nil, false
	}
	return o.RatePlanSchedule, true
}

// HasRatePlanSchedule returns a boolean if a field has been set.
func (o *RatePlanScheduleListType) HasRatePlanSchedule() bool {
	if o != nil && !IsNil(o.RatePlanSchedule) {
		return true
	}

	return false
}

// SetRatePlanSchedule gets a reference to the given []RatePlanSchedulesType and assigns it to the RatePlanSchedule field.
func (o *RatePlanScheduleListType) SetRatePlanSchedule(v []RatePlanSchedulesType) {
	o.RatePlanSchedule = v
}

// GetTotalResults returns the TotalResults field value if set, zero value otherwise.
func (o *RatePlanScheduleListType) GetTotalResults() int32 {
	if o == nil || IsNil(o.TotalResults) {
		var ret int32
		return ret
	}
	return *o.TotalResults
}

// GetTotalResultsOk returns a tuple with the TotalResults field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanScheduleListType) GetTotalResultsOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalResults) {
		return nil, false
	}
	return o.TotalResults, true
}

// HasTotalResults returns a boolean if a field has been set.
func (o *RatePlanScheduleListType) HasTotalResults() bool {
	if o != nil && !IsNil(o.TotalResults) {
		return true
	}

	return false
}

// SetTotalResults gets a reference to the given int32 and assigns it to the TotalResults field.
func (o *RatePlanScheduleListType) SetTotalResults(v int32) {
	o.TotalResults = &v
}

func (o RatePlanScheduleListType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RatePlanScheduleListType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Count) {
		toSerialize["count"] = o.Count
	}
	if !IsNil(o.HasMore) {
		toSerialize["hasMore"] = o.HasMore
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.RatePlanCode) {
		toSerialize["ratePlanCode"] = o.RatePlanCode
	}
	if !IsNil(o.RatePlanSchedule) {
		toSerialize["ratePlanSchedule"] = o.RatePlanSchedule
	}
	if !IsNil(o.TotalResults) {
		toSerialize["totalResults"] = o.TotalResults
	}
	return toSerialize, nil
}

type NullableRatePlanScheduleListType struct {
	value *RatePlanScheduleListType
	isSet bool
}

func (v NullableRatePlanScheduleListType) Get() *RatePlanScheduleListType {
	return v.value
}

func (v *NullableRatePlanScheduleListType) Set(val *RatePlanScheduleListType) {
	v.value = val
	v.isSet = true
}

func (v NullableRatePlanScheduleListType) IsSet() bool {
	return v.isSet
}

func (v *NullableRatePlanScheduleListType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRatePlanScheduleListType(val *RatePlanScheduleListType) *NullableRatePlanScheduleListType {
	return &NullableRatePlanScheduleListType{value: val, isSet: true}
}

func (v NullableRatePlanScheduleListType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRatePlanScheduleListType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


