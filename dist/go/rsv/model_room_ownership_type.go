/*
OPERA Cloud Reservation API

APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsv

import (
	"encoding/json"
)

// checks if the RoomOwnershipType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomOwnershipType{}

// RoomOwnershipType Define the search criteria for retrieving room ownership records
type RoomOwnershipType struct {
	// Contract number for room owner.
	ContractNumber *string `json:"contractNumber,omitempty"`
	// End Date of the room ownership record.
	EndDate *string `json:"endDate,omitempty"`
	ProfileId *UniqueIDType `json:"profileId,omitempty"`
	// Room Category of the room ownership record.
	RoomCategory *string `json:"roomCategory,omitempty"`
	// Room Id of room owner.
	RoomId *string `json:"roomId,omitempty"`
	// Unique Id for Room Owner record.
	RoomOwnershipId *int32 `json:"roomOwnershipId,omitempty"`
	// Room Type of the room ownership record.
	RoomType *string `json:"roomType,omitempty"`
	// Start Date of the room ownership record.
	StartDate *string `json:"startDate,omitempty"`
	// Status of the room ownership record.
	Status *string `json:"status,omitempty"`
}

// NewRoomOwnershipType instantiates a new RoomOwnershipType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomOwnershipType() *RoomOwnershipType {
	this := RoomOwnershipType{}
	return &this
}

// NewRoomOwnershipTypeWithDefaults instantiates a new RoomOwnershipType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomOwnershipTypeWithDefaults() *RoomOwnershipType {
	this := RoomOwnershipType{}
	return &this
}

// GetContractNumber returns the ContractNumber field value if set, zero value otherwise.
func (o *RoomOwnershipType) GetContractNumber() string {
	if o == nil || IsNil(o.ContractNumber) {
		var ret string
		return ret
	}
	return *o.ContractNumber
}

// GetContractNumberOk returns a tuple with the ContractNumber field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomOwnershipType) GetContractNumberOk() (*string, bool) {
	if o == nil || IsNil(o.ContractNumber) {
		return nil, false
	}
	return o.ContractNumber, true
}

// HasContractNumber returns a boolean if a field has been set.
func (o *RoomOwnershipType) HasContractNumber() bool {
	if o != nil && !IsNil(o.ContractNumber) {
		return true
	}

	return false
}

// SetContractNumber gets a reference to the given string and assigns it to the ContractNumber field.
func (o *RoomOwnershipType) SetContractNumber(v string) {
	o.ContractNumber = &v
}

// GetEndDate returns the EndDate field value if set, zero value otherwise.
func (o *RoomOwnershipType) GetEndDate() string {
	if o == nil || IsNil(o.EndDate) {
		var ret string
		return ret
	}
	return *o.EndDate
}

// GetEndDateOk returns a tuple with the EndDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomOwnershipType) GetEndDateOk() (*string, bool) {
	if o == nil || IsNil(o.EndDate) {
		return nil, false
	}
	return o.EndDate, true
}

// HasEndDate returns a boolean if a field has been set.
func (o *RoomOwnershipType) HasEndDate() bool {
	if o != nil && !IsNil(o.EndDate) {
		return true
	}

	return false
}

// SetEndDate gets a reference to the given string and assigns it to the EndDate field.
func (o *RoomOwnershipType) SetEndDate(v string) {
	o.EndDate = &v
}

// GetProfileId returns the ProfileId field value if set, zero value otherwise.
func (o *RoomOwnershipType) GetProfileId() UniqueIDType {
	if o == nil || IsNil(o.ProfileId) {
		var ret UniqueIDType
		return ret
	}
	return *o.ProfileId
}

// GetProfileIdOk returns a tuple with the ProfileId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomOwnershipType) GetProfileIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.ProfileId) {
		return nil, false
	}
	return o.ProfileId, true
}

// HasProfileId returns a boolean if a field has been set.
func (o *RoomOwnershipType) HasProfileId() bool {
	if o != nil && !IsNil(o.ProfileId) {
		return true
	}

	return false
}

// SetProfileId gets a reference to the given UniqueIDType and assigns it to the ProfileId field.
func (o *RoomOwnershipType) SetProfileId(v UniqueIDType) {
	o.ProfileId = &v
}

// GetRoomCategory returns the RoomCategory field value if set, zero value otherwise.
func (o *RoomOwnershipType) GetRoomCategory() string {
	if o == nil || IsNil(o.RoomCategory) {
		var ret string
		return ret
	}
	return *o.RoomCategory
}

// GetRoomCategoryOk returns a tuple with the RoomCategory field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomOwnershipType) GetRoomCategoryOk() (*string, bool) {
	if o == nil || IsNil(o.RoomCategory) {
		return nil, false
	}
	return o.RoomCategory, true
}

// HasRoomCategory returns a boolean if a field has been set.
func (o *RoomOwnershipType) HasRoomCategory() bool {
	if o != nil && !IsNil(o.RoomCategory) {
		return true
	}

	return false
}

// SetRoomCategory gets a reference to the given string and assigns it to the RoomCategory field.
func (o *RoomOwnershipType) SetRoomCategory(v string) {
	o.RoomCategory = &v
}

// GetRoomId returns the RoomId field value if set, zero value otherwise.
func (o *RoomOwnershipType) GetRoomId() string {
	if o == nil || IsNil(o.RoomId) {
		var ret string
		return ret
	}
	return *o.RoomId
}

// GetRoomIdOk returns a tuple with the RoomId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomOwnershipType) GetRoomIdOk() (*string, bool) {
	if o == nil || IsNil(o.RoomId) {
		return nil, false
	}
	return o.RoomId, true
}

// HasRoomId returns a boolean if a field has been set.
func (o *RoomOwnershipType) HasRoomId() bool {
	if o != nil && !IsNil(o.RoomId) {
		return true
	}

	return false
}

// SetRoomId gets a reference to the given string and assigns it to the RoomId field.
func (o *RoomOwnershipType) SetRoomId(v string) {
	o.RoomId = &v
}

// GetRoomOwnershipId returns the RoomOwnershipId field value if set, zero value otherwise.
func (o *RoomOwnershipType) GetRoomOwnershipId() int32 {
	if o == nil || IsNil(o.RoomOwnershipId) {
		var ret int32
		return ret
	}
	return *o.RoomOwnershipId
}

// GetRoomOwnershipIdOk returns a tuple with the RoomOwnershipId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomOwnershipType) GetRoomOwnershipIdOk() (*int32, bool) {
	if o == nil || IsNil(o.RoomOwnershipId) {
		return nil, false
	}
	return o.RoomOwnershipId, true
}

// HasRoomOwnershipId returns a boolean if a field has been set.
func (o *RoomOwnershipType) HasRoomOwnershipId() bool {
	if o != nil && !IsNil(o.RoomOwnershipId) {
		return true
	}

	return false
}

// SetRoomOwnershipId gets a reference to the given int32 and assigns it to the RoomOwnershipId field.
func (o *RoomOwnershipType) SetRoomOwnershipId(v int32) {
	o.RoomOwnershipId = &v
}

// GetRoomType returns the RoomType field value if set, zero value otherwise.
func (o *RoomOwnershipType) GetRoomType() string {
	if o == nil || IsNil(o.RoomType) {
		var ret string
		return ret
	}
	return *o.RoomType
}

// GetRoomTypeOk returns a tuple with the RoomType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomOwnershipType) GetRoomTypeOk() (*string, bool) {
	if o == nil || IsNil(o.RoomType) {
		return nil, false
	}
	return o.RoomType, true
}

// HasRoomType returns a boolean if a field has been set.
func (o *RoomOwnershipType) HasRoomType() bool {
	if o != nil && !IsNil(o.RoomType) {
		return true
	}

	return false
}

// SetRoomType gets a reference to the given string and assigns it to the RoomType field.
func (o *RoomOwnershipType) SetRoomType(v string) {
	o.RoomType = &v
}

// GetStartDate returns the StartDate field value if set, zero value otherwise.
func (o *RoomOwnershipType) GetStartDate() string {
	if o == nil || IsNil(o.StartDate) {
		var ret string
		return ret
	}
	return *o.StartDate
}

// GetStartDateOk returns a tuple with the StartDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomOwnershipType) GetStartDateOk() (*string, bool) {
	if o == nil || IsNil(o.StartDate) {
		return nil, false
	}
	return o.StartDate, true
}

// HasStartDate returns a boolean if a field has been set.
func (o *RoomOwnershipType) HasStartDate() bool {
	if o != nil && !IsNil(o.StartDate) {
		return true
	}

	return false
}

// SetStartDate gets a reference to the given string and assigns it to the StartDate field.
func (o *RoomOwnershipType) SetStartDate(v string) {
	o.StartDate = &v
}

// GetStatus returns the Status field value if set, zero value otherwise.
func (o *RoomOwnershipType) GetStatus() string {
	if o == nil || IsNil(o.Status) {
		var ret string
		return ret
	}
	return *o.Status
}

// GetStatusOk returns a tuple with the Status field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomOwnershipType) GetStatusOk() (*string, bool) {
	if o == nil || IsNil(o.Status) {
		return nil, false
	}
	return o.Status, true
}

// HasStatus returns a boolean if a field has been set.
func (o *RoomOwnershipType) HasStatus() bool {
	if o != nil && !IsNil(o.Status) {
		return true
	}

	return false
}

// SetStatus gets a reference to the given string and assigns it to the Status field.
func (o *RoomOwnershipType) SetStatus(v string) {
	o.Status = &v
}

func (o RoomOwnershipType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomOwnershipType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ContractNumber) {
		toSerialize["contractNumber"] = o.ContractNumber
	}
	if !IsNil(o.EndDate) {
		toSerialize["endDate"] = o.EndDate
	}
	if !IsNil(o.ProfileId) {
		toSerialize["profileId"] = o.ProfileId
	}
	if !IsNil(o.RoomCategory) {
		toSerialize["roomCategory"] = o.RoomCategory
	}
	if !IsNil(o.RoomId) {
		toSerialize["roomId"] = o.RoomId
	}
	if !IsNil(o.RoomOwnershipId) {
		toSerialize["roomOwnershipId"] = o.RoomOwnershipId
	}
	if !IsNil(o.RoomType) {
		toSerialize["roomType"] = o.RoomType
	}
	if !IsNil(o.StartDate) {
		toSerialize["startDate"] = o.StartDate
	}
	if !IsNil(o.Status) {
		toSerialize["status"] = o.Status
	}
	return toSerialize, nil
}

type NullableRoomOwnershipType struct {
	value *RoomOwnershipType
	isSet bool
}

func (v NullableRoomOwnershipType) Get() *RoomOwnershipType {
	return v.value
}

func (v *NullableRoomOwnershipType) Set(val *RoomOwnershipType) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomOwnershipType) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomOwnershipType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomOwnershipType(val *RoomOwnershipType) *NullableRoomOwnershipType {
	return &NullableRoomOwnershipType{value: val, isSet: true}
}

func (v NullableRoomOwnershipType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomOwnershipType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


