/*
OPERA Cloud Housekeeping Service API

APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package hsk

import (
	"encoding/json"
)

// checks if the HousekeepingBoardHousekeepingRoomInfo type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HousekeepingBoardHousekeepingRoomInfo{}

// HousekeepingBoardHousekeepingRoomInfo Collection of Housekeeping Rooms and their information as well as paging attributes.
type HousekeepingBoardHousekeepingRoomInfo struct {
	// Total number of rows returned
	Count *int32 `json:"count,omitempty"`
	// Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
	HasMore *bool `json:"hasMore,omitempty"`
	HousekeepingRooms *HotelRoomsType `json:"housekeepingRooms,omitempty"`
	// Indicates maximum number of records a Web Service should return.
	Limit *int32 `json:"limit,omitempty"`
	// Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
	Offset *int32 `json:"offset,omitempty"`
	// Evaluated total page count based on the requested max fetch count.
	TotalPages *int32 `json:"totalPages,omitempty"`
	// Total number of rows queried
	TotalResults *int32 `json:"totalResults,omitempty"`
}

// NewHousekeepingBoardHousekeepingRoomInfo instantiates a new HousekeepingBoardHousekeepingRoomInfo object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHousekeepingBoardHousekeepingRoomInfo() *HousekeepingBoardHousekeepingRoomInfo {
	this := HousekeepingBoardHousekeepingRoomInfo{}
	return &this
}

// NewHousekeepingBoardHousekeepingRoomInfoWithDefaults instantiates a new HousekeepingBoardHousekeepingRoomInfo object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHousekeepingBoardHousekeepingRoomInfoWithDefaults() *HousekeepingBoardHousekeepingRoomInfo {
	this := HousekeepingBoardHousekeepingRoomInfo{}
	return &this
}

// GetCount returns the Count field value if set, zero value otherwise.
func (o *HousekeepingBoardHousekeepingRoomInfo) GetCount() int32 {
	if o == nil || IsNil(o.Count) {
		var ret int32
		return ret
	}
	return *o.Count
}

// GetCountOk returns a tuple with the Count field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingBoardHousekeepingRoomInfo) GetCountOk() (*int32, bool) {
	if o == nil || IsNil(o.Count) {
		return nil, false
	}
	return o.Count, true
}

// HasCount returns a boolean if a field has been set.
func (o *HousekeepingBoardHousekeepingRoomInfo) HasCount() bool {
	if o != nil && !IsNil(o.Count) {
		return true
	}

	return false
}

// SetCount gets a reference to the given int32 and assigns it to the Count field.
func (o *HousekeepingBoardHousekeepingRoomInfo) SetCount(v int32) {
	o.Count = &v
}

// GetHasMore returns the HasMore field value if set, zero value otherwise.
func (o *HousekeepingBoardHousekeepingRoomInfo) GetHasMore() bool {
	if o == nil || IsNil(o.HasMore) {
		var ret bool
		return ret
	}
	return *o.HasMore
}

// GetHasMoreOk returns a tuple with the HasMore field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingBoardHousekeepingRoomInfo) GetHasMoreOk() (*bool, bool) {
	if o == nil || IsNil(o.HasMore) {
		return nil, false
	}
	return o.HasMore, true
}

// HasHasMore returns a boolean if a field has been set.
func (o *HousekeepingBoardHousekeepingRoomInfo) HasHasMore() bool {
	if o != nil && !IsNil(o.HasMore) {
		return true
	}

	return false
}

// SetHasMore gets a reference to the given bool and assigns it to the HasMore field.
func (o *HousekeepingBoardHousekeepingRoomInfo) SetHasMore(v bool) {
	o.HasMore = &v
}

// GetHousekeepingRooms returns the HousekeepingRooms field value if set, zero value otherwise.
func (o *HousekeepingBoardHousekeepingRoomInfo) GetHousekeepingRooms() HotelRoomsType {
	if o == nil || IsNil(o.HousekeepingRooms) {
		var ret HotelRoomsType
		return ret
	}
	return *o.HousekeepingRooms
}

// GetHousekeepingRoomsOk returns a tuple with the HousekeepingRooms field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingBoardHousekeepingRoomInfo) GetHousekeepingRoomsOk() (*HotelRoomsType, bool) {
	if o == nil || IsNil(o.HousekeepingRooms) {
		return nil, false
	}
	return o.HousekeepingRooms, true
}

// HasHousekeepingRooms returns a boolean if a field has been set.
func (o *HousekeepingBoardHousekeepingRoomInfo) HasHousekeepingRooms() bool {
	if o != nil && !IsNil(o.HousekeepingRooms) {
		return true
	}

	return false
}

// SetHousekeepingRooms gets a reference to the given HotelRoomsType and assigns it to the HousekeepingRooms field.
func (o *HousekeepingBoardHousekeepingRoomInfo) SetHousekeepingRooms(v HotelRoomsType) {
	o.HousekeepingRooms = &v
}

// GetLimit returns the Limit field value if set, zero value otherwise.
func (o *HousekeepingBoardHousekeepingRoomInfo) GetLimit() int32 {
	if o == nil || IsNil(o.Limit) {
		var ret int32
		return ret
	}
	return *o.Limit
}

// GetLimitOk returns a tuple with the Limit field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingBoardHousekeepingRoomInfo) GetLimitOk() (*int32, bool) {
	if o == nil || IsNil(o.Limit) {
		return nil, false
	}
	return o.Limit, true
}

// HasLimit returns a boolean if a field has been set.
func (o *HousekeepingBoardHousekeepingRoomInfo) HasLimit() bool {
	if o != nil && !IsNil(o.Limit) {
		return true
	}

	return false
}

// SetLimit gets a reference to the given int32 and assigns it to the Limit field.
func (o *HousekeepingBoardHousekeepingRoomInfo) SetLimit(v int32) {
	o.Limit = &v
}

// GetOffset returns the Offset field value if set, zero value otherwise.
func (o *HousekeepingBoardHousekeepingRoomInfo) GetOffset() int32 {
	if o == nil || IsNil(o.Offset) {
		var ret int32
		return ret
	}
	return *o.Offset
}

// GetOffsetOk returns a tuple with the Offset field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingBoardHousekeepingRoomInfo) GetOffsetOk() (*int32, bool) {
	if o == nil || IsNil(o.Offset) {
		return nil, false
	}
	return o.Offset, true
}

// HasOffset returns a boolean if a field has been set.
func (o *HousekeepingBoardHousekeepingRoomInfo) HasOffset() bool {
	if o != nil && !IsNil(o.Offset) {
		return true
	}

	return false
}

// SetOffset gets a reference to the given int32 and assigns it to the Offset field.
func (o *HousekeepingBoardHousekeepingRoomInfo) SetOffset(v int32) {
	o.Offset = &v
}

// GetTotalPages returns the TotalPages field value if set, zero value otherwise.
func (o *HousekeepingBoardHousekeepingRoomInfo) GetTotalPages() int32 {
	if o == nil || IsNil(o.TotalPages) {
		var ret int32
		return ret
	}
	return *o.TotalPages
}

// GetTotalPagesOk returns a tuple with the TotalPages field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingBoardHousekeepingRoomInfo) GetTotalPagesOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalPages) {
		return nil, false
	}
	return o.TotalPages, true
}

// HasTotalPages returns a boolean if a field has been set.
func (o *HousekeepingBoardHousekeepingRoomInfo) HasTotalPages() bool {
	if o != nil && !IsNil(o.TotalPages) {
		return true
	}

	return false
}

// SetTotalPages gets a reference to the given int32 and assigns it to the TotalPages field.
func (o *HousekeepingBoardHousekeepingRoomInfo) SetTotalPages(v int32) {
	o.TotalPages = &v
}

// GetTotalResults returns the TotalResults field value if set, zero value otherwise.
func (o *HousekeepingBoardHousekeepingRoomInfo) GetTotalResults() int32 {
	if o == nil || IsNil(o.TotalResults) {
		var ret int32
		return ret
	}
	return *o.TotalResults
}

// GetTotalResultsOk returns a tuple with the TotalResults field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingBoardHousekeepingRoomInfo) GetTotalResultsOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalResults) {
		return nil, false
	}
	return o.TotalResults, true
}

// HasTotalResults returns a boolean if a field has been set.
func (o *HousekeepingBoardHousekeepingRoomInfo) HasTotalResults() bool {
	if o != nil && !IsNil(o.TotalResults) {
		return true
	}

	return false
}

// SetTotalResults gets a reference to the given int32 and assigns it to the TotalResults field.
func (o *HousekeepingBoardHousekeepingRoomInfo) SetTotalResults(v int32) {
	o.TotalResults = &v
}

func (o HousekeepingBoardHousekeepingRoomInfo) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HousekeepingBoardHousekeepingRoomInfo) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Count) {
		toSerialize["count"] = o.Count
	}
	if !IsNil(o.HasMore) {
		toSerialize["hasMore"] = o.HasMore
	}
	if !IsNil(o.HousekeepingRooms) {
		toSerialize["housekeepingRooms"] = o.HousekeepingRooms
	}
	if !IsNil(o.Limit) {
		toSerialize["limit"] = o.Limit
	}
	if !IsNil(o.Offset) {
		toSerialize["offset"] = o.Offset
	}
	if !IsNil(o.TotalPages) {
		toSerialize["totalPages"] = o.TotalPages
	}
	if !IsNil(o.TotalResults) {
		toSerialize["totalResults"] = o.TotalResults
	}
	return toSerialize, nil
}

type NullableHousekeepingBoardHousekeepingRoomInfo struct {
	value *HousekeepingBoardHousekeepingRoomInfo
	isSet bool
}

func (v NullableHousekeepingBoardHousekeepingRoomInfo) Get() *HousekeepingBoardHousekeepingRoomInfo {
	return v.value
}

func (v *NullableHousekeepingBoardHousekeepingRoomInfo) Set(val *HousekeepingBoardHousekeepingRoomInfo) {
	v.value = val
	v.isSet = true
}

func (v NullableHousekeepingBoardHousekeepingRoomInfo) IsSet() bool {
	return v.isSet
}

func (v *NullableHousekeepingBoardHousekeepingRoomInfo) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHousekeepingBoardHousekeepingRoomInfo(val *HousekeepingBoardHousekeepingRoomInfo) *NullableHousekeepingBoardHousekeepingRoomInfo {
	return &NullableHousekeepingBoardHousekeepingRoomInfo{value: val, isSet: true}
}

func (v NullableHousekeepingBoardHousekeepingRoomInfo) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHousekeepingBoardHousekeepingRoomInfo) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


