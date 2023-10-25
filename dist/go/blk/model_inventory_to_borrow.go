/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
)

// checks if the InventoryToBorrow type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &InventoryToBorrow{}

// InventoryToBorrow The standard optional Opera Context element is also included.
type InventoryToBorrow struct {
	// The number of adults that are expected to stay in a room.
	AdultCount *int32 `json:"adultCount,omitempty"`
	BlockId *BlockId `json:"blockId,omitempty"`
	// The date and number of rooms to borrow from either room type or House.
	BorrowInventoryList []BorrowInventoryType `json:"borrowInventoryList,omitempty"`
	ExistingReservationId *UniqueIDType `json:"existingReservationId,omitempty"`
	// Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
	HotelId *string `json:"hotelId,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Indicates whether to overbook the Sales Allowance in case there are no rooms left at the Generic Sales Allowance level.
	OverbookSalesAllowance *bool `json:"overbookSalesAllowance,omitempty"`
	// Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
	RoomType *string `json:"roomType,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewInventoryToBorrow instantiates a new InventoryToBorrow object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewInventoryToBorrow() *InventoryToBorrow {
	this := InventoryToBorrow{}
	return &this
}

// NewInventoryToBorrowWithDefaults instantiates a new InventoryToBorrow object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewInventoryToBorrowWithDefaults() *InventoryToBorrow {
	this := InventoryToBorrow{}
	return &this
}

// GetAdultCount returns the AdultCount field value if set, zero value otherwise.
func (o *InventoryToBorrow) GetAdultCount() int32 {
	if o == nil || IsNil(o.AdultCount) {
		var ret int32
		return ret
	}
	return *o.AdultCount
}

// GetAdultCountOk returns a tuple with the AdultCount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InventoryToBorrow) GetAdultCountOk() (*int32, bool) {
	if o == nil || IsNil(o.AdultCount) {
		return nil, false
	}
	return o.AdultCount, true
}

// HasAdultCount returns a boolean if a field has been set.
func (o *InventoryToBorrow) HasAdultCount() bool {
	if o != nil && !IsNil(o.AdultCount) {
		return true
	}

	return false
}

// SetAdultCount gets a reference to the given int32 and assigns it to the AdultCount field.
func (o *InventoryToBorrow) SetAdultCount(v int32) {
	o.AdultCount = &v
}

// GetBlockId returns the BlockId field value if set, zero value otherwise.
func (o *InventoryToBorrow) GetBlockId() BlockId {
	if o == nil || IsNil(o.BlockId) {
		var ret BlockId
		return ret
	}
	return *o.BlockId
}

// GetBlockIdOk returns a tuple with the BlockId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InventoryToBorrow) GetBlockIdOk() (*BlockId, bool) {
	if o == nil || IsNil(o.BlockId) {
		return nil, false
	}
	return o.BlockId, true
}

// HasBlockId returns a boolean if a field has been set.
func (o *InventoryToBorrow) HasBlockId() bool {
	if o != nil && !IsNil(o.BlockId) {
		return true
	}

	return false
}

// SetBlockId gets a reference to the given BlockId and assigns it to the BlockId field.
func (o *InventoryToBorrow) SetBlockId(v BlockId) {
	o.BlockId = &v
}

// GetBorrowInventoryList returns the BorrowInventoryList field value if set, zero value otherwise.
func (o *InventoryToBorrow) GetBorrowInventoryList() []BorrowInventoryType {
	if o == nil || IsNil(o.BorrowInventoryList) {
		var ret []BorrowInventoryType
		return ret
	}
	return o.BorrowInventoryList
}

// GetBorrowInventoryListOk returns a tuple with the BorrowInventoryList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InventoryToBorrow) GetBorrowInventoryListOk() ([]BorrowInventoryType, bool) {
	if o == nil || IsNil(o.BorrowInventoryList) {
		return nil, false
	}
	return o.BorrowInventoryList, true
}

// HasBorrowInventoryList returns a boolean if a field has been set.
func (o *InventoryToBorrow) HasBorrowInventoryList() bool {
	if o != nil && !IsNil(o.BorrowInventoryList) {
		return true
	}

	return false
}

// SetBorrowInventoryList gets a reference to the given []BorrowInventoryType and assigns it to the BorrowInventoryList field.
func (o *InventoryToBorrow) SetBorrowInventoryList(v []BorrowInventoryType) {
	o.BorrowInventoryList = v
}

// GetExistingReservationId returns the ExistingReservationId field value if set, zero value otherwise.
func (o *InventoryToBorrow) GetExistingReservationId() UniqueIDType {
	if o == nil || IsNil(o.ExistingReservationId) {
		var ret UniqueIDType
		return ret
	}
	return *o.ExistingReservationId
}

// GetExistingReservationIdOk returns a tuple with the ExistingReservationId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InventoryToBorrow) GetExistingReservationIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.ExistingReservationId) {
		return nil, false
	}
	return o.ExistingReservationId, true
}

// HasExistingReservationId returns a boolean if a field has been set.
func (o *InventoryToBorrow) HasExistingReservationId() bool {
	if o != nil && !IsNil(o.ExistingReservationId) {
		return true
	}

	return false
}

// SetExistingReservationId gets a reference to the given UniqueIDType and assigns it to the ExistingReservationId field.
func (o *InventoryToBorrow) SetExistingReservationId(v UniqueIDType) {
	o.ExistingReservationId = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *InventoryToBorrow) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InventoryToBorrow) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *InventoryToBorrow) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *InventoryToBorrow) SetHotelId(v string) {
	o.HotelId = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *InventoryToBorrow) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InventoryToBorrow) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *InventoryToBorrow) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *InventoryToBorrow) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetOverbookSalesAllowance returns the OverbookSalesAllowance field value if set, zero value otherwise.
func (o *InventoryToBorrow) GetOverbookSalesAllowance() bool {
	if o == nil || IsNil(o.OverbookSalesAllowance) {
		var ret bool
		return ret
	}
	return *o.OverbookSalesAllowance
}

// GetOverbookSalesAllowanceOk returns a tuple with the OverbookSalesAllowance field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InventoryToBorrow) GetOverbookSalesAllowanceOk() (*bool, bool) {
	if o == nil || IsNil(o.OverbookSalesAllowance) {
		return nil, false
	}
	return o.OverbookSalesAllowance, true
}

// HasOverbookSalesAllowance returns a boolean if a field has been set.
func (o *InventoryToBorrow) HasOverbookSalesAllowance() bool {
	if o != nil && !IsNil(o.OverbookSalesAllowance) {
		return true
	}

	return false
}

// SetOverbookSalesAllowance gets a reference to the given bool and assigns it to the OverbookSalesAllowance field.
func (o *InventoryToBorrow) SetOverbookSalesAllowance(v bool) {
	o.OverbookSalesAllowance = &v
}

// GetRoomType returns the RoomType field value if set, zero value otherwise.
func (o *InventoryToBorrow) GetRoomType() string {
	if o == nil || IsNil(o.RoomType) {
		var ret string
		return ret
	}
	return *o.RoomType
}

// GetRoomTypeOk returns a tuple with the RoomType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InventoryToBorrow) GetRoomTypeOk() (*string, bool) {
	if o == nil || IsNil(o.RoomType) {
		return nil, false
	}
	return o.RoomType, true
}

// HasRoomType returns a boolean if a field has been set.
func (o *InventoryToBorrow) HasRoomType() bool {
	if o != nil && !IsNil(o.RoomType) {
		return true
	}

	return false
}

// SetRoomType gets a reference to the given string and assigns it to the RoomType field.
func (o *InventoryToBorrow) SetRoomType(v string) {
	o.RoomType = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *InventoryToBorrow) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InventoryToBorrow) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *InventoryToBorrow) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *InventoryToBorrow) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o InventoryToBorrow) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o InventoryToBorrow) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AdultCount) {
		toSerialize["adultCount"] = o.AdultCount
	}
	if !IsNil(o.BlockId) {
		toSerialize["blockId"] = o.BlockId
	}
	if !IsNil(o.BorrowInventoryList) {
		toSerialize["borrowInventoryList"] = o.BorrowInventoryList
	}
	if !IsNil(o.ExistingReservationId) {
		toSerialize["existingReservationId"] = o.ExistingReservationId
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.OverbookSalesAllowance) {
		toSerialize["overbookSalesAllowance"] = o.OverbookSalesAllowance
	}
	if !IsNil(o.RoomType) {
		toSerialize["roomType"] = o.RoomType
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableInventoryToBorrow struct {
	value *InventoryToBorrow
	isSet bool
}

func (v NullableInventoryToBorrow) Get() *InventoryToBorrow {
	return v.value
}

func (v *NullableInventoryToBorrow) Set(val *InventoryToBorrow) {
	v.value = val
	v.isSet = true
}

func (v NullableInventoryToBorrow) IsSet() bool {
	return v.isSet
}

func (v *NullableInventoryToBorrow) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableInventoryToBorrow(val *InventoryToBorrow) *NullableInventoryToBorrow {
	return &NullableInventoryToBorrow{value: val, isSet: true}
}

func (v NullableInventoryToBorrow) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableInventoryToBorrow) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


