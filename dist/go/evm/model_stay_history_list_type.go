/*
OPERA Cloud Sales Event Management API

APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evm

import (
	"encoding/json"
)

// checks if the StayHistoryListType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &StayHistoryListType{}

// StayHistoryListType A collection of reservation history details attached to Profiles.
type StayHistoryListType struct {
	// Total number of rows returned
	Count *int32 `json:"count,omitempty"`
	// Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
	HasMore *bool `json:"hasMore,omitempty"`
	// Additional reservation information attached to the profile . Eg : History reservation details
	ReservationInfo []StayReservationInfoType `json:"reservationInfo,omitempty"`
	// Total number of rows queried
	TotalResults *int32 `json:"totalResults,omitempty"`
}

// NewStayHistoryListType instantiates a new StayHistoryListType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewStayHistoryListType() *StayHistoryListType {
	this := StayHistoryListType{}
	return &this
}

// NewStayHistoryListTypeWithDefaults instantiates a new StayHistoryListType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewStayHistoryListTypeWithDefaults() *StayHistoryListType {
	this := StayHistoryListType{}
	return &this
}

// GetCount returns the Count field value if set, zero value otherwise.
func (o *StayHistoryListType) GetCount() int32 {
	if o == nil || IsNil(o.Count) {
		var ret int32
		return ret
	}
	return *o.Count
}

// GetCountOk returns a tuple with the Count field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StayHistoryListType) GetCountOk() (*int32, bool) {
	if o == nil || IsNil(o.Count) {
		return nil, false
	}
	return o.Count, true
}

// HasCount returns a boolean if a field has been set.
func (o *StayHistoryListType) HasCount() bool {
	if o != nil && !IsNil(o.Count) {
		return true
	}

	return false
}

// SetCount gets a reference to the given int32 and assigns it to the Count field.
func (o *StayHistoryListType) SetCount(v int32) {
	o.Count = &v
}

// GetHasMore returns the HasMore field value if set, zero value otherwise.
func (o *StayHistoryListType) GetHasMore() bool {
	if o == nil || IsNil(o.HasMore) {
		var ret bool
		return ret
	}
	return *o.HasMore
}

// GetHasMoreOk returns a tuple with the HasMore field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StayHistoryListType) GetHasMoreOk() (*bool, bool) {
	if o == nil || IsNil(o.HasMore) {
		return nil, false
	}
	return o.HasMore, true
}

// HasHasMore returns a boolean if a field has been set.
func (o *StayHistoryListType) HasHasMore() bool {
	if o != nil && !IsNil(o.HasMore) {
		return true
	}

	return false
}

// SetHasMore gets a reference to the given bool and assigns it to the HasMore field.
func (o *StayHistoryListType) SetHasMore(v bool) {
	o.HasMore = &v
}

// GetReservationInfo returns the ReservationInfo field value if set, zero value otherwise.
func (o *StayHistoryListType) GetReservationInfo() []StayReservationInfoType {
	if o == nil || IsNil(o.ReservationInfo) {
		var ret []StayReservationInfoType
		return ret
	}
	return o.ReservationInfo
}

// GetReservationInfoOk returns a tuple with the ReservationInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StayHistoryListType) GetReservationInfoOk() ([]StayReservationInfoType, bool) {
	if o == nil || IsNil(o.ReservationInfo) {
		return nil, false
	}
	return o.ReservationInfo, true
}

// HasReservationInfo returns a boolean if a field has been set.
func (o *StayHistoryListType) HasReservationInfo() bool {
	if o != nil && !IsNil(o.ReservationInfo) {
		return true
	}

	return false
}

// SetReservationInfo gets a reference to the given []StayReservationInfoType and assigns it to the ReservationInfo field.
func (o *StayHistoryListType) SetReservationInfo(v []StayReservationInfoType) {
	o.ReservationInfo = v
}

// GetTotalResults returns the TotalResults field value if set, zero value otherwise.
func (o *StayHistoryListType) GetTotalResults() int32 {
	if o == nil || IsNil(o.TotalResults) {
		var ret int32
		return ret
	}
	return *o.TotalResults
}

// GetTotalResultsOk returns a tuple with the TotalResults field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StayHistoryListType) GetTotalResultsOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalResults) {
		return nil, false
	}
	return o.TotalResults, true
}

// HasTotalResults returns a boolean if a field has been set.
func (o *StayHistoryListType) HasTotalResults() bool {
	if o != nil && !IsNil(o.TotalResults) {
		return true
	}

	return false
}

// SetTotalResults gets a reference to the given int32 and assigns it to the TotalResults field.
func (o *StayHistoryListType) SetTotalResults(v int32) {
	o.TotalResults = &v
}

func (o StayHistoryListType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o StayHistoryListType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Count) {
		toSerialize["count"] = o.Count
	}
	if !IsNil(o.HasMore) {
		toSerialize["hasMore"] = o.HasMore
	}
	if !IsNil(o.ReservationInfo) {
		toSerialize["reservationInfo"] = o.ReservationInfo
	}
	if !IsNil(o.TotalResults) {
		toSerialize["totalResults"] = o.TotalResults
	}
	return toSerialize, nil
}

type NullableStayHistoryListType struct {
	value *StayHistoryListType
	isSet bool
}

func (v NullableStayHistoryListType) Get() *StayHistoryListType {
	return v.value
}

func (v *NullableStayHistoryListType) Set(val *StayHistoryListType) {
	v.value = val
	v.isSet = true
}

func (v NullableStayHistoryListType) IsSet() bool {
	return v.isSet
}

func (v *NullableStayHistoryListType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableStayHistoryListType(val *StayHistoryListType) *NullableStayHistoryListType {
	return &NullableStayHistoryListType{value: val, isSet: true}
}

func (v NullableStayHistoryListType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableStayHistoryListType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


