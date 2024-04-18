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

// checks if the BlockInstructionTypeRoomAllocations type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BlockInstructionTypeRoomAllocations{}

// BlockInstructionTypeRoomAllocations Room Allocations for the Block.
type BlockInstructionTypeRoomAllocations struct {
	// Total number of rows returned
	Count *int32 `json:"count,omitempty"`
	// Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
	HasMore *bool `json:"hasMore,omitempty"`
	MasterInfo *RoomAllocationMasterInfoType `json:"masterInfo,omitempty"`
	NumberOfDays *float32 `json:"numberOfDays,omitempty"`
	RoomAllocationType []RoomAllocationTypeType `json:"roomAllocationType,omitempty"`
	StartDate *string `json:"startDate,omitempty"`
	// Total number of rows queried
	TotalResults *int32 `json:"totalResults,omitempty"`
}

// NewBlockInstructionTypeRoomAllocations instantiates a new BlockInstructionTypeRoomAllocations object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBlockInstructionTypeRoomAllocations() *BlockInstructionTypeRoomAllocations {
	this := BlockInstructionTypeRoomAllocations{}
	return &this
}

// NewBlockInstructionTypeRoomAllocationsWithDefaults instantiates a new BlockInstructionTypeRoomAllocations object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBlockInstructionTypeRoomAllocationsWithDefaults() *BlockInstructionTypeRoomAllocations {
	this := BlockInstructionTypeRoomAllocations{}
	return &this
}

// GetCount returns the Count field value if set, zero value otherwise.
func (o *BlockInstructionTypeRoomAllocations) GetCount() int32 {
	if o == nil || IsNil(o.Count) {
		var ret int32
		return ret
	}
	return *o.Count
}

// GetCountOk returns a tuple with the Count field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockInstructionTypeRoomAllocations) GetCountOk() (*int32, bool) {
	if o == nil || IsNil(o.Count) {
		return nil, false
	}
	return o.Count, true
}

// HasCount returns a boolean if a field has been set.
func (o *BlockInstructionTypeRoomAllocations) HasCount() bool {
	if o != nil && !IsNil(o.Count) {
		return true
	}

	return false
}

// SetCount gets a reference to the given int32 and assigns it to the Count field.
func (o *BlockInstructionTypeRoomAllocations) SetCount(v int32) {
	o.Count = &v
}

// GetHasMore returns the HasMore field value if set, zero value otherwise.
func (o *BlockInstructionTypeRoomAllocations) GetHasMore() bool {
	if o == nil || IsNil(o.HasMore) {
		var ret bool
		return ret
	}
	return *o.HasMore
}

// GetHasMoreOk returns a tuple with the HasMore field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockInstructionTypeRoomAllocations) GetHasMoreOk() (*bool, bool) {
	if o == nil || IsNil(o.HasMore) {
		return nil, false
	}
	return o.HasMore, true
}

// HasHasMore returns a boolean if a field has been set.
func (o *BlockInstructionTypeRoomAllocations) HasHasMore() bool {
	if o != nil && !IsNil(o.HasMore) {
		return true
	}

	return false
}

// SetHasMore gets a reference to the given bool and assigns it to the HasMore field.
func (o *BlockInstructionTypeRoomAllocations) SetHasMore(v bool) {
	o.HasMore = &v
}

// GetMasterInfo returns the MasterInfo field value if set, zero value otherwise.
func (o *BlockInstructionTypeRoomAllocations) GetMasterInfo() RoomAllocationMasterInfoType {
	if o == nil || IsNil(o.MasterInfo) {
		var ret RoomAllocationMasterInfoType
		return ret
	}
	return *o.MasterInfo
}

// GetMasterInfoOk returns a tuple with the MasterInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockInstructionTypeRoomAllocations) GetMasterInfoOk() (*RoomAllocationMasterInfoType, bool) {
	if o == nil || IsNil(o.MasterInfo) {
		return nil, false
	}
	return o.MasterInfo, true
}

// HasMasterInfo returns a boolean if a field has been set.
func (o *BlockInstructionTypeRoomAllocations) HasMasterInfo() bool {
	if o != nil && !IsNil(o.MasterInfo) {
		return true
	}

	return false
}

// SetMasterInfo gets a reference to the given RoomAllocationMasterInfoType and assigns it to the MasterInfo field.
func (o *BlockInstructionTypeRoomAllocations) SetMasterInfo(v RoomAllocationMasterInfoType) {
	o.MasterInfo = &v
}

// GetNumberOfDays returns the NumberOfDays field value if set, zero value otherwise.
func (o *BlockInstructionTypeRoomAllocations) GetNumberOfDays() float32 {
	if o == nil || IsNil(o.NumberOfDays) {
		var ret float32
		return ret
	}
	return *o.NumberOfDays
}

// GetNumberOfDaysOk returns a tuple with the NumberOfDays field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockInstructionTypeRoomAllocations) GetNumberOfDaysOk() (*float32, bool) {
	if o == nil || IsNil(o.NumberOfDays) {
		return nil, false
	}
	return o.NumberOfDays, true
}

// HasNumberOfDays returns a boolean if a field has been set.
func (o *BlockInstructionTypeRoomAllocations) HasNumberOfDays() bool {
	if o != nil && !IsNil(o.NumberOfDays) {
		return true
	}

	return false
}

// SetNumberOfDays gets a reference to the given float32 and assigns it to the NumberOfDays field.
func (o *BlockInstructionTypeRoomAllocations) SetNumberOfDays(v float32) {
	o.NumberOfDays = &v
}

// GetRoomAllocationType returns the RoomAllocationType field value if set, zero value otherwise.
func (o *BlockInstructionTypeRoomAllocations) GetRoomAllocationType() []RoomAllocationTypeType {
	if o == nil || IsNil(o.RoomAllocationType) {
		var ret []RoomAllocationTypeType
		return ret
	}
	return o.RoomAllocationType
}

// GetRoomAllocationTypeOk returns a tuple with the RoomAllocationType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockInstructionTypeRoomAllocations) GetRoomAllocationTypeOk() ([]RoomAllocationTypeType, bool) {
	if o == nil || IsNil(o.RoomAllocationType) {
		return nil, false
	}
	return o.RoomAllocationType, true
}

// HasRoomAllocationType returns a boolean if a field has been set.
func (o *BlockInstructionTypeRoomAllocations) HasRoomAllocationType() bool {
	if o != nil && !IsNil(o.RoomAllocationType) {
		return true
	}

	return false
}

// SetRoomAllocationType gets a reference to the given []RoomAllocationTypeType and assigns it to the RoomAllocationType field.
func (o *BlockInstructionTypeRoomAllocations) SetRoomAllocationType(v []RoomAllocationTypeType) {
	o.RoomAllocationType = v
}

// GetStartDate returns the StartDate field value if set, zero value otherwise.
func (o *BlockInstructionTypeRoomAllocations) GetStartDate() string {
	if o == nil || IsNil(o.StartDate) {
		var ret string
		return ret
	}
	return *o.StartDate
}

// GetStartDateOk returns a tuple with the StartDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockInstructionTypeRoomAllocations) GetStartDateOk() (*string, bool) {
	if o == nil || IsNil(o.StartDate) {
		return nil, false
	}
	return o.StartDate, true
}

// HasStartDate returns a boolean if a field has been set.
func (o *BlockInstructionTypeRoomAllocations) HasStartDate() bool {
	if o != nil && !IsNil(o.StartDate) {
		return true
	}

	return false
}

// SetStartDate gets a reference to the given string and assigns it to the StartDate field.
func (o *BlockInstructionTypeRoomAllocations) SetStartDate(v string) {
	o.StartDate = &v
}

// GetTotalResults returns the TotalResults field value if set, zero value otherwise.
func (o *BlockInstructionTypeRoomAllocations) GetTotalResults() int32 {
	if o == nil || IsNil(o.TotalResults) {
		var ret int32
		return ret
	}
	return *o.TotalResults
}

// GetTotalResultsOk returns a tuple with the TotalResults field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockInstructionTypeRoomAllocations) GetTotalResultsOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalResults) {
		return nil, false
	}
	return o.TotalResults, true
}

// HasTotalResults returns a boolean if a field has been set.
func (o *BlockInstructionTypeRoomAllocations) HasTotalResults() bool {
	if o != nil && !IsNil(o.TotalResults) {
		return true
	}

	return false
}

// SetTotalResults gets a reference to the given int32 and assigns it to the TotalResults field.
func (o *BlockInstructionTypeRoomAllocations) SetTotalResults(v int32) {
	o.TotalResults = &v
}

func (o BlockInstructionTypeRoomAllocations) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BlockInstructionTypeRoomAllocations) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Count) {
		toSerialize["count"] = o.Count
	}
	if !IsNil(o.HasMore) {
		toSerialize["hasMore"] = o.HasMore
	}
	if !IsNil(o.MasterInfo) {
		toSerialize["masterInfo"] = o.MasterInfo
	}
	if !IsNil(o.NumberOfDays) {
		toSerialize["numberOfDays"] = o.NumberOfDays
	}
	if !IsNil(o.RoomAllocationType) {
		toSerialize["roomAllocationType"] = o.RoomAllocationType
	}
	if !IsNil(o.StartDate) {
		toSerialize["startDate"] = o.StartDate
	}
	if !IsNil(o.TotalResults) {
		toSerialize["totalResults"] = o.TotalResults
	}
	return toSerialize, nil
}

type NullableBlockInstructionTypeRoomAllocations struct {
	value *BlockInstructionTypeRoomAllocations
	isSet bool
}

func (v NullableBlockInstructionTypeRoomAllocations) Get() *BlockInstructionTypeRoomAllocations {
	return v.value
}

func (v *NullableBlockInstructionTypeRoomAllocations) Set(val *BlockInstructionTypeRoomAllocations) {
	v.value = val
	v.isSet = true
}

func (v NullableBlockInstructionTypeRoomAllocations) IsSet() bool {
	return v.isSet
}

func (v *NullableBlockInstructionTypeRoomAllocations) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBlockInstructionTypeRoomAllocations(val *BlockInstructionTypeRoomAllocations) *NullableBlockInstructionTypeRoomAllocations {
	return &NullableBlockInstructionTypeRoomAllocations{value: val, isSet: true}
}

func (v NullableBlockInstructionTypeRoomAllocations) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBlockInstructionTypeRoomAllocations) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

