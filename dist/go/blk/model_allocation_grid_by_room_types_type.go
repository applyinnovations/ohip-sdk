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

// checks if the AllocationGridByRoomTypesType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AllocationGridByRoomTypesType{}

// AllocationGridByRoomTypesType A collection of Allocation objects for a block defined by room type.
type AllocationGridByRoomTypesType struct {
	// Allocation objects of a block grouped by room types.
	AllocationRoomTypes []AllocationGridByRoomTypeType `json:"allocationRoomTypes,omitempty"`
	BlockId *BlockId `json:"blockId,omitempty"`
	// Indicates if the Allocation objects refer to Generic Room Types (Room Pools).
	GenericRoomType *bool `json:"genericRoomType,omitempty"`
	// Opera Hotel code for the Set Allocation Grid request.
	HotelId *string `json:"hotelId,omitempty"`
}

// NewAllocationGridByRoomTypesType instantiates a new AllocationGridByRoomTypesType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAllocationGridByRoomTypesType() *AllocationGridByRoomTypesType {
	this := AllocationGridByRoomTypesType{}
	return &this
}

// NewAllocationGridByRoomTypesTypeWithDefaults instantiates a new AllocationGridByRoomTypesType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAllocationGridByRoomTypesTypeWithDefaults() *AllocationGridByRoomTypesType {
	this := AllocationGridByRoomTypesType{}
	return &this
}

// GetAllocationRoomTypes returns the AllocationRoomTypes field value if set, zero value otherwise.
func (o *AllocationGridByRoomTypesType) GetAllocationRoomTypes() []AllocationGridByRoomTypeType {
	if o == nil || IsNil(o.AllocationRoomTypes) {
		var ret []AllocationGridByRoomTypeType
		return ret
	}
	return o.AllocationRoomTypes
}

// GetAllocationRoomTypesOk returns a tuple with the AllocationRoomTypes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AllocationGridByRoomTypesType) GetAllocationRoomTypesOk() ([]AllocationGridByRoomTypeType, bool) {
	if o == nil || IsNil(o.AllocationRoomTypes) {
		return nil, false
	}
	return o.AllocationRoomTypes, true
}

// HasAllocationRoomTypes returns a boolean if a field has been set.
func (o *AllocationGridByRoomTypesType) HasAllocationRoomTypes() bool {
	if o != nil && !IsNil(o.AllocationRoomTypes) {
		return true
	}

	return false
}

// SetAllocationRoomTypes gets a reference to the given []AllocationGridByRoomTypeType and assigns it to the AllocationRoomTypes field.
func (o *AllocationGridByRoomTypesType) SetAllocationRoomTypes(v []AllocationGridByRoomTypeType) {
	o.AllocationRoomTypes = v
}

// GetBlockId returns the BlockId field value if set, zero value otherwise.
func (o *AllocationGridByRoomTypesType) GetBlockId() BlockId {
	if o == nil || IsNil(o.BlockId) {
		var ret BlockId
		return ret
	}
	return *o.BlockId
}

// GetBlockIdOk returns a tuple with the BlockId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AllocationGridByRoomTypesType) GetBlockIdOk() (*BlockId, bool) {
	if o == nil || IsNil(o.BlockId) {
		return nil, false
	}
	return o.BlockId, true
}

// HasBlockId returns a boolean if a field has been set.
func (o *AllocationGridByRoomTypesType) HasBlockId() bool {
	if o != nil && !IsNil(o.BlockId) {
		return true
	}

	return false
}

// SetBlockId gets a reference to the given BlockId and assigns it to the BlockId field.
func (o *AllocationGridByRoomTypesType) SetBlockId(v BlockId) {
	o.BlockId = &v
}

// GetGenericRoomType returns the GenericRoomType field value if set, zero value otherwise.
func (o *AllocationGridByRoomTypesType) GetGenericRoomType() bool {
	if o == nil || IsNil(o.GenericRoomType) {
		var ret bool
		return ret
	}
	return *o.GenericRoomType
}

// GetGenericRoomTypeOk returns a tuple with the GenericRoomType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AllocationGridByRoomTypesType) GetGenericRoomTypeOk() (*bool, bool) {
	if o == nil || IsNil(o.GenericRoomType) {
		return nil, false
	}
	return o.GenericRoomType, true
}

// HasGenericRoomType returns a boolean if a field has been set.
func (o *AllocationGridByRoomTypesType) HasGenericRoomType() bool {
	if o != nil && !IsNil(o.GenericRoomType) {
		return true
	}

	return false
}

// SetGenericRoomType gets a reference to the given bool and assigns it to the GenericRoomType field.
func (o *AllocationGridByRoomTypesType) SetGenericRoomType(v bool) {
	o.GenericRoomType = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *AllocationGridByRoomTypesType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AllocationGridByRoomTypesType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *AllocationGridByRoomTypesType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *AllocationGridByRoomTypesType) SetHotelId(v string) {
	o.HotelId = &v
}

func (o AllocationGridByRoomTypesType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AllocationGridByRoomTypesType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AllocationRoomTypes) {
		toSerialize["allocationRoomTypes"] = o.AllocationRoomTypes
	}
	if !IsNil(o.BlockId) {
		toSerialize["blockId"] = o.BlockId
	}
	if !IsNil(o.GenericRoomType) {
		toSerialize["genericRoomType"] = o.GenericRoomType
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	return toSerialize, nil
}

type NullableAllocationGridByRoomTypesType struct {
	value *AllocationGridByRoomTypesType
	isSet bool
}

func (v NullableAllocationGridByRoomTypesType) Get() *AllocationGridByRoomTypesType {
	return v.value
}

func (v *NullableAllocationGridByRoomTypesType) Set(val *AllocationGridByRoomTypesType) {
	v.value = val
	v.isSet = true
}

func (v NullableAllocationGridByRoomTypesType) IsSet() bool {
	return v.isSet
}

func (v *NullableAllocationGridByRoomTypesType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAllocationGridByRoomTypesType(val *AllocationGridByRoomTypesType) *NullableAllocationGridByRoomTypesType {
	return &NullableAllocationGridByRoomTypesType{value: val, isSet: true}
}

func (v NullableAllocationGridByRoomTypesType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAllocationGridByRoomTypesType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


