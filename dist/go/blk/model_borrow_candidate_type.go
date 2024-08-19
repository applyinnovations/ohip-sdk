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

// checks if the BorrowCandidateType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BorrowCandidateType{}

// BorrowCandidateType This contains a collection of all dates and required rooms. It also contains the borrow candidates which could be room types or house.
type BorrowCandidateType struct {
	BlockId *BlockId `json:"blockId,omitempty"`
	// The date on which rooms need to be borrowed for the block.
	BorrowDate *string `json:"borrowDate,omitempty"`
	// Holds the information about a borrowable room type and available rooms for each borrow date.
	BorrowableInventoryList []BorrowableInventoryType `json:"borrowableInventoryList,omitempty"`
	ExistingReservationId *UniqueIDType `json:"existingReservationId,omitempty"`
	// Specifies the hotel that the block belongs to.
	HotelId *string `json:"hotelId,omitempty"`
	// The number of rooms that need to be borrowed.
	RequiredRooms *int32 `json:"requiredRooms,omitempty"`
}

// NewBorrowCandidateType instantiates a new BorrowCandidateType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBorrowCandidateType() *BorrowCandidateType {
	this := BorrowCandidateType{}
	return &this
}

// NewBorrowCandidateTypeWithDefaults instantiates a new BorrowCandidateType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBorrowCandidateTypeWithDefaults() *BorrowCandidateType {
	this := BorrowCandidateType{}
	return &this
}

// GetBlockId returns the BlockId field value if set, zero value otherwise.
func (o *BorrowCandidateType) GetBlockId() BlockId {
	if o == nil || IsNil(o.BlockId) {
		var ret BlockId
		return ret
	}
	return *o.BlockId
}

// GetBlockIdOk returns a tuple with the BlockId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BorrowCandidateType) GetBlockIdOk() (*BlockId, bool) {
	if o == nil || IsNil(o.BlockId) {
		return nil, false
	}
	return o.BlockId, true
}

// HasBlockId returns a boolean if a field has been set.
func (o *BorrowCandidateType) HasBlockId() bool {
	if o != nil && !IsNil(o.BlockId) {
		return true
	}

	return false
}

// SetBlockId gets a reference to the given BlockId and assigns it to the BlockId field.
func (o *BorrowCandidateType) SetBlockId(v BlockId) {
	o.BlockId = &v
}

// GetBorrowDate returns the BorrowDate field value if set, zero value otherwise.
func (o *BorrowCandidateType) GetBorrowDate() string {
	if o == nil || IsNil(o.BorrowDate) {
		var ret string
		return ret
	}
	return *o.BorrowDate
}

// GetBorrowDateOk returns a tuple with the BorrowDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BorrowCandidateType) GetBorrowDateOk() (*string, bool) {
	if o == nil || IsNil(o.BorrowDate) {
		return nil, false
	}
	return o.BorrowDate, true
}

// HasBorrowDate returns a boolean if a field has been set.
func (o *BorrowCandidateType) HasBorrowDate() bool {
	if o != nil && !IsNil(o.BorrowDate) {
		return true
	}

	return false
}

// SetBorrowDate gets a reference to the given string and assigns it to the BorrowDate field.
func (o *BorrowCandidateType) SetBorrowDate(v string) {
	o.BorrowDate = &v
}

// GetBorrowableInventoryList returns the BorrowableInventoryList field value if set, zero value otherwise.
func (o *BorrowCandidateType) GetBorrowableInventoryList() []BorrowableInventoryType {
	if o == nil || IsNil(o.BorrowableInventoryList) {
		var ret []BorrowableInventoryType
		return ret
	}
	return o.BorrowableInventoryList
}

// GetBorrowableInventoryListOk returns a tuple with the BorrowableInventoryList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BorrowCandidateType) GetBorrowableInventoryListOk() ([]BorrowableInventoryType, bool) {
	if o == nil || IsNil(o.BorrowableInventoryList) {
		return nil, false
	}
	return o.BorrowableInventoryList, true
}

// HasBorrowableInventoryList returns a boolean if a field has been set.
func (o *BorrowCandidateType) HasBorrowableInventoryList() bool {
	if o != nil && !IsNil(o.BorrowableInventoryList) {
		return true
	}

	return false
}

// SetBorrowableInventoryList gets a reference to the given []BorrowableInventoryType and assigns it to the BorrowableInventoryList field.
func (o *BorrowCandidateType) SetBorrowableInventoryList(v []BorrowableInventoryType) {
	o.BorrowableInventoryList = v
}

// GetExistingReservationId returns the ExistingReservationId field value if set, zero value otherwise.
func (o *BorrowCandidateType) GetExistingReservationId() UniqueIDType {
	if o == nil || IsNil(o.ExistingReservationId) {
		var ret UniqueIDType
		return ret
	}
	return *o.ExistingReservationId
}

// GetExistingReservationIdOk returns a tuple with the ExistingReservationId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BorrowCandidateType) GetExistingReservationIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.ExistingReservationId) {
		return nil, false
	}
	return o.ExistingReservationId, true
}

// HasExistingReservationId returns a boolean if a field has been set.
func (o *BorrowCandidateType) HasExistingReservationId() bool {
	if o != nil && !IsNil(o.ExistingReservationId) {
		return true
	}

	return false
}

// SetExistingReservationId gets a reference to the given UniqueIDType and assigns it to the ExistingReservationId field.
func (o *BorrowCandidateType) SetExistingReservationId(v UniqueIDType) {
	o.ExistingReservationId = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *BorrowCandidateType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BorrowCandidateType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *BorrowCandidateType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *BorrowCandidateType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetRequiredRooms returns the RequiredRooms field value if set, zero value otherwise.
func (o *BorrowCandidateType) GetRequiredRooms() int32 {
	if o == nil || IsNil(o.RequiredRooms) {
		var ret int32
		return ret
	}
	return *o.RequiredRooms
}

// GetRequiredRoomsOk returns a tuple with the RequiredRooms field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BorrowCandidateType) GetRequiredRoomsOk() (*int32, bool) {
	if o == nil || IsNil(o.RequiredRooms) {
		return nil, false
	}
	return o.RequiredRooms, true
}

// HasRequiredRooms returns a boolean if a field has been set.
func (o *BorrowCandidateType) HasRequiredRooms() bool {
	if o != nil && !IsNil(o.RequiredRooms) {
		return true
	}

	return false
}

// SetRequiredRooms gets a reference to the given int32 and assigns it to the RequiredRooms field.
func (o *BorrowCandidateType) SetRequiredRooms(v int32) {
	o.RequiredRooms = &v
}

func (o BorrowCandidateType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BorrowCandidateType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BlockId) {
		toSerialize["blockId"] = o.BlockId
	}
	if !IsNil(o.BorrowDate) {
		toSerialize["borrowDate"] = o.BorrowDate
	}
	if !IsNil(o.BorrowableInventoryList) {
		toSerialize["borrowableInventoryList"] = o.BorrowableInventoryList
	}
	if !IsNil(o.ExistingReservationId) {
		toSerialize["existingReservationId"] = o.ExistingReservationId
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.RequiredRooms) {
		toSerialize["requiredRooms"] = o.RequiredRooms
	}
	return toSerialize, nil
}

type NullableBorrowCandidateType struct {
	value *BorrowCandidateType
	isSet bool
}

func (v NullableBorrowCandidateType) Get() *BorrowCandidateType {
	return v.value
}

func (v *NullableBorrowCandidateType) Set(val *BorrowCandidateType) {
	v.value = val
	v.isSet = true
}

func (v NullableBorrowCandidateType) IsSet() bool {
	return v.isSet
}

func (v *NullableBorrowCandidateType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBorrowCandidateType(val *BorrowCandidateType) *NullableBorrowCandidateType {
	return &NullableBorrowCandidateType{value: val, isSet: true}
}

func (v NullableBorrowCandidateType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBorrowCandidateType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


