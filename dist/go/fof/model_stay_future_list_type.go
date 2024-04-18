/*
OPERA Cloud Front Desk Operations Service

APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fof

import (
	"encoding/json"
)

// checks if the StayFutureListType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &StayFutureListType{}

// StayFutureListType A collection of reservation history details attached to Profiles.
type StayFutureListType struct {
	// Total number of rows returned
	Count *int32 `json:"count,omitempty"`
	// Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
	HasMore *bool `json:"hasMore,omitempty"`
	// Additional reservation information attached to the profile . Eg : Future reservation details
	ReservationInfo []StayReservationInfoType `json:"reservationInfo,omitempty"`
	// Total number of rows queried
	TotalResults *int32 `json:"totalResults,omitempty"`
}

// NewStayFutureListType instantiates a new StayFutureListType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewStayFutureListType() *StayFutureListType {
	this := StayFutureListType{}
	return &this
}

// NewStayFutureListTypeWithDefaults instantiates a new StayFutureListType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewStayFutureListTypeWithDefaults() *StayFutureListType {
	this := StayFutureListType{}
	return &this
}

// GetCount returns the Count field value if set, zero value otherwise.
func (o *StayFutureListType) GetCount() int32 {
	if o == nil || IsNil(o.Count) {
		var ret int32
		return ret
	}
	return *o.Count
}

// GetCountOk returns a tuple with the Count field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StayFutureListType) GetCountOk() (*int32, bool) {
	if o == nil || IsNil(o.Count) {
		return nil, false
	}
	return o.Count, true
}

// HasCount returns a boolean if a field has been set.
func (o *StayFutureListType) HasCount() bool {
	if o != nil && !IsNil(o.Count) {
		return true
	}

	return false
}

// SetCount gets a reference to the given int32 and assigns it to the Count field.
func (o *StayFutureListType) SetCount(v int32) {
	o.Count = &v
}

// GetHasMore returns the HasMore field value if set, zero value otherwise.
func (o *StayFutureListType) GetHasMore() bool {
	if o == nil || IsNil(o.HasMore) {
		var ret bool
		return ret
	}
	return *o.HasMore
}

// GetHasMoreOk returns a tuple with the HasMore field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StayFutureListType) GetHasMoreOk() (*bool, bool) {
	if o == nil || IsNil(o.HasMore) {
		return nil, false
	}
	return o.HasMore, true
}

// HasHasMore returns a boolean if a field has been set.
func (o *StayFutureListType) HasHasMore() bool {
	if o != nil && !IsNil(o.HasMore) {
		return true
	}

	return false
}

// SetHasMore gets a reference to the given bool and assigns it to the HasMore field.
func (o *StayFutureListType) SetHasMore(v bool) {
	o.HasMore = &v
}

// GetReservationInfo returns the ReservationInfo field value if set, zero value otherwise.
func (o *StayFutureListType) GetReservationInfo() []StayReservationInfoType {
	if o == nil || IsNil(o.ReservationInfo) {
		var ret []StayReservationInfoType
		return ret
	}
	return o.ReservationInfo
}

// GetReservationInfoOk returns a tuple with the ReservationInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StayFutureListType) GetReservationInfoOk() ([]StayReservationInfoType, bool) {
	if o == nil || IsNil(o.ReservationInfo) {
		return nil, false
	}
	return o.ReservationInfo, true
}

// HasReservationInfo returns a boolean if a field has been set.
func (o *StayFutureListType) HasReservationInfo() bool {
	if o != nil && !IsNil(o.ReservationInfo) {
		return true
	}

	return false
}

// SetReservationInfo gets a reference to the given []StayReservationInfoType and assigns it to the ReservationInfo field.
func (o *StayFutureListType) SetReservationInfo(v []StayReservationInfoType) {
	o.ReservationInfo = v
}

// GetTotalResults returns the TotalResults field value if set, zero value otherwise.
func (o *StayFutureListType) GetTotalResults() int32 {
	if o == nil || IsNil(o.TotalResults) {
		var ret int32
		return ret
	}
	return *o.TotalResults
}

// GetTotalResultsOk returns a tuple with the TotalResults field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StayFutureListType) GetTotalResultsOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalResults) {
		return nil, false
	}
	return o.TotalResults, true
}

// HasTotalResults returns a boolean if a field has been set.
func (o *StayFutureListType) HasTotalResults() bool {
	if o != nil && !IsNil(o.TotalResults) {
		return true
	}

	return false
}

// SetTotalResults gets a reference to the given int32 and assigns it to the TotalResults field.
func (o *StayFutureListType) SetTotalResults(v int32) {
	o.TotalResults = &v
}

func (o StayFutureListType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o StayFutureListType) ToMap() (map[string]interface{}, error) {
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

type NullableStayFutureListType struct {
	value *StayFutureListType
	isSet bool
}

func (v NullableStayFutureListType) Get() *StayFutureListType {
	return v.value
}

func (v *NullableStayFutureListType) Set(val *StayFutureListType) {
	v.value = val
	v.isSet = true
}

func (v NullableStayFutureListType) IsSet() bool {
	return v.isSet
}

func (v *NullableStayFutureListType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableStayFutureListType(val *StayFutureListType) *NullableStayFutureListType {
	return &NullableStayFutureListType{value: val, isSet: true}
}

func (v NullableStayFutureListType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableStayFutureListType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

