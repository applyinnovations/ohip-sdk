/*
OPERA Cloud Room Rotation Service API

APIs to facilitate Room Rotation functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rmr

import (
	"encoding/json"
)

// checks if the GetReservationRotationPoints type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &GetReservationRotationPoints{}

// GetReservationRotationPoints Provides Pagination Information for the REST API.
type GetReservationRotationPoints struct {
	// Collection of reservation and associated rotation points details.
	ReservationRotationPoints []ReservationRotationPointsType `json:"reservationRotationPoints,omitempty"`
	// Indicates number of records the API has returned actually as per the API request criteria.
	Count *int32 `json:"count,omitempty"`
	// Indicates whether there are more records available to be returned as per the API request criteria or not.
	HasMore *bool `json:"hasMore,omitempty"`
	// Indicates number of records the API can return as per the API request limit sent. A maximum of 200 records can be only returned at a time.
	Limit *int32 `json:"limit,omitempty"`
	// Indicates the index of the next applicable set(page).
	Offset *int32 `json:"offset,omitempty"`
	// Indicates total number of records available that can be returned as per the API request criteria.
	TotalResults *int32 `json:"totalResults,omitempty"`
}

// NewGetReservationRotationPoints instantiates a new GetReservationRotationPoints object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGetReservationRotationPoints() *GetReservationRotationPoints {
	this := GetReservationRotationPoints{}
	return &this
}

// NewGetReservationRotationPointsWithDefaults instantiates a new GetReservationRotationPoints object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGetReservationRotationPointsWithDefaults() *GetReservationRotationPoints {
	this := GetReservationRotationPoints{}
	return &this
}

// GetReservationRotationPoints returns the ReservationRotationPoints field value if set, zero value otherwise.
func (o *GetReservationRotationPoints) GetReservationRotationPoints() []ReservationRotationPointsType {
	if o == nil || IsNil(o.ReservationRotationPoints) {
		var ret []ReservationRotationPointsType
		return ret
	}
	return o.ReservationRotationPoints
}

// GetReservationRotationPointsOk returns a tuple with the ReservationRotationPoints field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetReservationRotationPoints) GetReservationRotationPointsOk() ([]ReservationRotationPointsType, bool) {
	if o == nil || IsNil(o.ReservationRotationPoints) {
		return nil, false
	}
	return o.ReservationRotationPoints, true
}

// HasReservationRotationPoints returns a boolean if a field has been set.
func (o *GetReservationRotationPoints) HasReservationRotationPoints() bool {
	if o != nil && !IsNil(o.ReservationRotationPoints) {
		return true
	}

	return false
}

// SetReservationRotationPoints gets a reference to the given []ReservationRotationPointsType and assigns it to the ReservationRotationPoints field.
func (o *GetReservationRotationPoints) SetReservationRotationPoints(v []ReservationRotationPointsType) {
	o.ReservationRotationPoints = v
}

// GetCount returns the Count field value if set, zero value otherwise.
func (o *GetReservationRotationPoints) GetCount() int32 {
	if o == nil || IsNil(o.Count) {
		var ret int32
		return ret
	}
	return *o.Count
}

// GetCountOk returns a tuple with the Count field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetReservationRotationPoints) GetCountOk() (*int32, bool) {
	if o == nil || IsNil(o.Count) {
		return nil, false
	}
	return o.Count, true
}

// HasCount returns a boolean if a field has been set.
func (o *GetReservationRotationPoints) HasCount() bool {
	if o != nil && !IsNil(o.Count) {
		return true
	}

	return false
}

// SetCount gets a reference to the given int32 and assigns it to the Count field.
func (o *GetReservationRotationPoints) SetCount(v int32) {
	o.Count = &v
}

// GetHasMore returns the HasMore field value if set, zero value otherwise.
func (o *GetReservationRotationPoints) GetHasMore() bool {
	if o == nil || IsNil(o.HasMore) {
		var ret bool
		return ret
	}
	return *o.HasMore
}

// GetHasMoreOk returns a tuple with the HasMore field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetReservationRotationPoints) GetHasMoreOk() (*bool, bool) {
	if o == nil || IsNil(o.HasMore) {
		return nil, false
	}
	return o.HasMore, true
}

// HasHasMore returns a boolean if a field has been set.
func (o *GetReservationRotationPoints) HasHasMore() bool {
	if o != nil && !IsNil(o.HasMore) {
		return true
	}

	return false
}

// SetHasMore gets a reference to the given bool and assigns it to the HasMore field.
func (o *GetReservationRotationPoints) SetHasMore(v bool) {
	o.HasMore = &v
}

// GetLimit returns the Limit field value if set, zero value otherwise.
func (o *GetReservationRotationPoints) GetLimit() int32 {
	if o == nil || IsNil(o.Limit) {
		var ret int32
		return ret
	}
	return *o.Limit
}

// GetLimitOk returns a tuple with the Limit field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetReservationRotationPoints) GetLimitOk() (*int32, bool) {
	if o == nil || IsNil(o.Limit) {
		return nil, false
	}
	return o.Limit, true
}

// HasLimit returns a boolean if a field has been set.
func (o *GetReservationRotationPoints) HasLimit() bool {
	if o != nil && !IsNil(o.Limit) {
		return true
	}

	return false
}

// SetLimit gets a reference to the given int32 and assigns it to the Limit field.
func (o *GetReservationRotationPoints) SetLimit(v int32) {
	o.Limit = &v
}

// GetOffset returns the Offset field value if set, zero value otherwise.
func (o *GetReservationRotationPoints) GetOffset() int32 {
	if o == nil || IsNil(o.Offset) {
		var ret int32
		return ret
	}
	return *o.Offset
}

// GetOffsetOk returns a tuple with the Offset field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetReservationRotationPoints) GetOffsetOk() (*int32, bool) {
	if o == nil || IsNil(o.Offset) {
		return nil, false
	}
	return o.Offset, true
}

// HasOffset returns a boolean if a field has been set.
func (o *GetReservationRotationPoints) HasOffset() bool {
	if o != nil && !IsNil(o.Offset) {
		return true
	}

	return false
}

// SetOffset gets a reference to the given int32 and assigns it to the Offset field.
func (o *GetReservationRotationPoints) SetOffset(v int32) {
	o.Offset = &v
}

// GetTotalResults returns the TotalResults field value if set, zero value otherwise.
func (o *GetReservationRotationPoints) GetTotalResults() int32 {
	if o == nil || IsNil(o.TotalResults) {
		var ret int32
		return ret
	}
	return *o.TotalResults
}

// GetTotalResultsOk returns a tuple with the TotalResults field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetReservationRotationPoints) GetTotalResultsOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalResults) {
		return nil, false
	}
	return o.TotalResults, true
}

// HasTotalResults returns a boolean if a field has been set.
func (o *GetReservationRotationPoints) HasTotalResults() bool {
	if o != nil && !IsNil(o.TotalResults) {
		return true
	}

	return false
}

// SetTotalResults gets a reference to the given int32 and assigns it to the TotalResults field.
func (o *GetReservationRotationPoints) SetTotalResults(v int32) {
	o.TotalResults = &v
}

func (o GetReservationRotationPoints) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o GetReservationRotationPoints) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ReservationRotationPoints) {
		toSerialize["reservationRotationPoints"] = o.ReservationRotationPoints
	}
	if !IsNil(o.Count) {
		toSerialize["count"] = o.Count
	}
	if !IsNil(o.HasMore) {
		toSerialize["hasMore"] = o.HasMore
	}
	if !IsNil(o.Limit) {
		toSerialize["limit"] = o.Limit
	}
	if !IsNil(o.Offset) {
		toSerialize["offset"] = o.Offset
	}
	if !IsNil(o.TotalResults) {
		toSerialize["totalResults"] = o.TotalResults
	}
	return toSerialize, nil
}

type NullableGetReservationRotationPoints struct {
	value *GetReservationRotationPoints
	isSet bool
}

func (v NullableGetReservationRotationPoints) Get() *GetReservationRotationPoints {
	return v.value
}

func (v *NullableGetReservationRotationPoints) Set(val *GetReservationRotationPoints) {
	v.value = val
	v.isSet = true
}

func (v NullableGetReservationRotationPoints) IsSet() bool {
	return v.isSet
}

func (v *NullableGetReservationRotationPoints) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGetReservationRotationPoints(val *GetReservationRotationPoints) *NullableGetReservationRotationPoints {
	return &NullableGetReservationRotationPoints{value: val, isSet: true}
}

func (v NullableGetReservationRotationPoints) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGetReservationRotationPoints) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


