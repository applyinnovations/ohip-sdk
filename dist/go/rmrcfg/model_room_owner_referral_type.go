/*
OPERA Cloud Room Rotation Configuration Service API

APIs to cater for Room Rotation Configuration functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rmrcfg

import (
	"encoding/json"
)

// checks if the RoomOwnerReferralType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomOwnerReferralType{}

// RoomOwnerReferralType Define the search criteria for retrieving Room Owner Referral records
type RoomOwnerReferralType struct {
	// End Date of the Room Owner Referral record.
	EndDate *string `json:"endDate,omitempty"`
	// Hotel Code of Room Owner Referral record.
	HotelId *string `json:"hotelId,omitempty"`
	// Status of the Room Owner Referral record.
	Inactive *bool `json:"inactive,omitempty"`
	// Date in which the room owner referral record was marked as inactive.
	InactiveDate *string `json:"inactiveDate,omitempty"`
	ProfileAddress *AddressType `json:"profileAddress,omitempty"`
	ProfileId *UniqueIDType `json:"profileId,omitempty"`
	ProfileName *ProfileNameType `json:"profileName,omitempty"`
	Referral *ReferralType `json:"referral,omitempty"`
	// Room Id of Room Owner Referral record.
	RoomId *string `json:"roomId,omitempty"`
	// Unique Id for Room Ownership record.
	RoomOwnerId *float32 `json:"roomOwnerId,omitempty"`
	// Unique Id for Room Owner Referral record.
	RoomOwnerReferralId *float32 `json:"roomOwnerReferralId,omitempty"`
	// Start Date of the Room Owner Referral record.
	StartDate *string `json:"startDate,omitempty"`
}

// NewRoomOwnerReferralType instantiates a new RoomOwnerReferralType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomOwnerReferralType() *RoomOwnerReferralType {
	this := RoomOwnerReferralType{}
	return &this
}

// NewRoomOwnerReferralTypeWithDefaults instantiates a new RoomOwnerReferralType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomOwnerReferralTypeWithDefaults() *RoomOwnerReferralType {
	this := RoomOwnerReferralType{}
	return &this
}

// GetEndDate returns the EndDate field value if set, zero value otherwise.
func (o *RoomOwnerReferralType) GetEndDate() string {
	if o == nil || IsNil(o.EndDate) {
		var ret string
		return ret
	}
	return *o.EndDate
}

// GetEndDateOk returns a tuple with the EndDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomOwnerReferralType) GetEndDateOk() (*string, bool) {
	if o == nil || IsNil(o.EndDate) {
		return nil, false
	}
	return o.EndDate, true
}

// HasEndDate returns a boolean if a field has been set.
func (o *RoomOwnerReferralType) HasEndDate() bool {
	if o != nil && !IsNil(o.EndDate) {
		return true
	}

	return false
}

// SetEndDate gets a reference to the given string and assigns it to the EndDate field.
func (o *RoomOwnerReferralType) SetEndDate(v string) {
	o.EndDate = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *RoomOwnerReferralType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomOwnerReferralType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *RoomOwnerReferralType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *RoomOwnerReferralType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetInactive returns the Inactive field value if set, zero value otherwise.
func (o *RoomOwnerReferralType) GetInactive() bool {
	if o == nil || IsNil(o.Inactive) {
		var ret bool
		return ret
	}
	return *o.Inactive
}

// GetInactiveOk returns a tuple with the Inactive field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomOwnerReferralType) GetInactiveOk() (*bool, bool) {
	if o == nil || IsNil(o.Inactive) {
		return nil, false
	}
	return o.Inactive, true
}

// HasInactive returns a boolean if a field has been set.
func (o *RoomOwnerReferralType) HasInactive() bool {
	if o != nil && !IsNil(o.Inactive) {
		return true
	}

	return false
}

// SetInactive gets a reference to the given bool and assigns it to the Inactive field.
func (o *RoomOwnerReferralType) SetInactive(v bool) {
	o.Inactive = &v
}

// GetInactiveDate returns the InactiveDate field value if set, zero value otherwise.
func (o *RoomOwnerReferralType) GetInactiveDate() string {
	if o == nil || IsNil(o.InactiveDate) {
		var ret string
		return ret
	}
	return *o.InactiveDate
}

// GetInactiveDateOk returns a tuple with the InactiveDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomOwnerReferralType) GetInactiveDateOk() (*string, bool) {
	if o == nil || IsNil(o.InactiveDate) {
		return nil, false
	}
	return o.InactiveDate, true
}

// HasInactiveDate returns a boolean if a field has been set.
func (o *RoomOwnerReferralType) HasInactiveDate() bool {
	if o != nil && !IsNil(o.InactiveDate) {
		return true
	}

	return false
}

// SetInactiveDate gets a reference to the given string and assigns it to the InactiveDate field.
func (o *RoomOwnerReferralType) SetInactiveDate(v string) {
	o.InactiveDate = &v
}

// GetProfileAddress returns the ProfileAddress field value if set, zero value otherwise.
func (o *RoomOwnerReferralType) GetProfileAddress() AddressType {
	if o == nil || IsNil(o.ProfileAddress) {
		var ret AddressType
		return ret
	}
	return *o.ProfileAddress
}

// GetProfileAddressOk returns a tuple with the ProfileAddress field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomOwnerReferralType) GetProfileAddressOk() (*AddressType, bool) {
	if o == nil || IsNil(o.ProfileAddress) {
		return nil, false
	}
	return o.ProfileAddress, true
}

// HasProfileAddress returns a boolean if a field has been set.
func (o *RoomOwnerReferralType) HasProfileAddress() bool {
	if o != nil && !IsNil(o.ProfileAddress) {
		return true
	}

	return false
}

// SetProfileAddress gets a reference to the given AddressType and assigns it to the ProfileAddress field.
func (o *RoomOwnerReferralType) SetProfileAddress(v AddressType) {
	o.ProfileAddress = &v
}

// GetProfileId returns the ProfileId field value if set, zero value otherwise.
func (o *RoomOwnerReferralType) GetProfileId() UniqueIDType {
	if o == nil || IsNil(o.ProfileId) {
		var ret UniqueIDType
		return ret
	}
	return *o.ProfileId
}

// GetProfileIdOk returns a tuple with the ProfileId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomOwnerReferralType) GetProfileIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.ProfileId) {
		return nil, false
	}
	return o.ProfileId, true
}

// HasProfileId returns a boolean if a field has been set.
func (o *RoomOwnerReferralType) HasProfileId() bool {
	if o != nil && !IsNil(o.ProfileId) {
		return true
	}

	return false
}

// SetProfileId gets a reference to the given UniqueIDType and assigns it to the ProfileId field.
func (o *RoomOwnerReferralType) SetProfileId(v UniqueIDType) {
	o.ProfileId = &v
}

// GetProfileName returns the ProfileName field value if set, zero value otherwise.
func (o *RoomOwnerReferralType) GetProfileName() ProfileNameType {
	if o == nil || IsNil(o.ProfileName) {
		var ret ProfileNameType
		return ret
	}
	return *o.ProfileName
}

// GetProfileNameOk returns a tuple with the ProfileName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomOwnerReferralType) GetProfileNameOk() (*ProfileNameType, bool) {
	if o == nil || IsNil(o.ProfileName) {
		return nil, false
	}
	return o.ProfileName, true
}

// HasProfileName returns a boolean if a field has been set.
func (o *RoomOwnerReferralType) HasProfileName() bool {
	if o != nil && !IsNil(o.ProfileName) {
		return true
	}

	return false
}

// SetProfileName gets a reference to the given ProfileNameType and assigns it to the ProfileName field.
func (o *RoomOwnerReferralType) SetProfileName(v ProfileNameType) {
	o.ProfileName = &v
}

// GetReferral returns the Referral field value if set, zero value otherwise.
func (o *RoomOwnerReferralType) GetReferral() ReferralType {
	if o == nil || IsNil(o.Referral) {
		var ret ReferralType
		return ret
	}
	return *o.Referral
}

// GetReferralOk returns a tuple with the Referral field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomOwnerReferralType) GetReferralOk() (*ReferralType, bool) {
	if o == nil || IsNil(o.Referral) {
		return nil, false
	}
	return o.Referral, true
}

// HasReferral returns a boolean if a field has been set.
func (o *RoomOwnerReferralType) HasReferral() bool {
	if o != nil && !IsNil(o.Referral) {
		return true
	}

	return false
}

// SetReferral gets a reference to the given ReferralType and assigns it to the Referral field.
func (o *RoomOwnerReferralType) SetReferral(v ReferralType) {
	o.Referral = &v
}

// GetRoomId returns the RoomId field value if set, zero value otherwise.
func (o *RoomOwnerReferralType) GetRoomId() string {
	if o == nil || IsNil(o.RoomId) {
		var ret string
		return ret
	}
	return *o.RoomId
}

// GetRoomIdOk returns a tuple with the RoomId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomOwnerReferralType) GetRoomIdOk() (*string, bool) {
	if o == nil || IsNil(o.RoomId) {
		return nil, false
	}
	return o.RoomId, true
}

// HasRoomId returns a boolean if a field has been set.
func (o *RoomOwnerReferralType) HasRoomId() bool {
	if o != nil && !IsNil(o.RoomId) {
		return true
	}

	return false
}

// SetRoomId gets a reference to the given string and assigns it to the RoomId field.
func (o *RoomOwnerReferralType) SetRoomId(v string) {
	o.RoomId = &v
}

// GetRoomOwnerId returns the RoomOwnerId field value if set, zero value otherwise.
func (o *RoomOwnerReferralType) GetRoomOwnerId() float32 {
	if o == nil || IsNil(o.RoomOwnerId) {
		var ret float32
		return ret
	}
	return *o.RoomOwnerId
}

// GetRoomOwnerIdOk returns a tuple with the RoomOwnerId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomOwnerReferralType) GetRoomOwnerIdOk() (*float32, bool) {
	if o == nil || IsNil(o.RoomOwnerId) {
		return nil, false
	}
	return o.RoomOwnerId, true
}

// HasRoomOwnerId returns a boolean if a field has been set.
func (o *RoomOwnerReferralType) HasRoomOwnerId() bool {
	if o != nil && !IsNil(o.RoomOwnerId) {
		return true
	}

	return false
}

// SetRoomOwnerId gets a reference to the given float32 and assigns it to the RoomOwnerId field.
func (o *RoomOwnerReferralType) SetRoomOwnerId(v float32) {
	o.RoomOwnerId = &v
}

// GetRoomOwnerReferralId returns the RoomOwnerReferralId field value if set, zero value otherwise.
func (o *RoomOwnerReferralType) GetRoomOwnerReferralId() float32 {
	if o == nil || IsNil(o.RoomOwnerReferralId) {
		var ret float32
		return ret
	}
	return *o.RoomOwnerReferralId
}

// GetRoomOwnerReferralIdOk returns a tuple with the RoomOwnerReferralId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomOwnerReferralType) GetRoomOwnerReferralIdOk() (*float32, bool) {
	if o == nil || IsNil(o.RoomOwnerReferralId) {
		return nil, false
	}
	return o.RoomOwnerReferralId, true
}

// HasRoomOwnerReferralId returns a boolean if a field has been set.
func (o *RoomOwnerReferralType) HasRoomOwnerReferralId() bool {
	if o != nil && !IsNil(o.RoomOwnerReferralId) {
		return true
	}

	return false
}

// SetRoomOwnerReferralId gets a reference to the given float32 and assigns it to the RoomOwnerReferralId field.
func (o *RoomOwnerReferralType) SetRoomOwnerReferralId(v float32) {
	o.RoomOwnerReferralId = &v
}

// GetStartDate returns the StartDate field value if set, zero value otherwise.
func (o *RoomOwnerReferralType) GetStartDate() string {
	if o == nil || IsNil(o.StartDate) {
		var ret string
		return ret
	}
	return *o.StartDate
}

// GetStartDateOk returns a tuple with the StartDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomOwnerReferralType) GetStartDateOk() (*string, bool) {
	if o == nil || IsNil(o.StartDate) {
		return nil, false
	}
	return o.StartDate, true
}

// HasStartDate returns a boolean if a field has been set.
func (o *RoomOwnerReferralType) HasStartDate() bool {
	if o != nil && !IsNil(o.StartDate) {
		return true
	}

	return false
}

// SetStartDate gets a reference to the given string and assigns it to the StartDate field.
func (o *RoomOwnerReferralType) SetStartDate(v string) {
	o.StartDate = &v
}

func (o RoomOwnerReferralType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomOwnerReferralType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.EndDate) {
		toSerialize["endDate"] = o.EndDate
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.Inactive) {
		toSerialize["inactive"] = o.Inactive
	}
	if !IsNil(o.InactiveDate) {
		toSerialize["inactiveDate"] = o.InactiveDate
	}
	if !IsNil(o.ProfileAddress) {
		toSerialize["profileAddress"] = o.ProfileAddress
	}
	if !IsNil(o.ProfileId) {
		toSerialize["profileId"] = o.ProfileId
	}
	if !IsNil(o.ProfileName) {
		toSerialize["profileName"] = o.ProfileName
	}
	if !IsNil(o.Referral) {
		toSerialize["referral"] = o.Referral
	}
	if !IsNil(o.RoomId) {
		toSerialize["roomId"] = o.RoomId
	}
	if !IsNil(o.RoomOwnerId) {
		toSerialize["roomOwnerId"] = o.RoomOwnerId
	}
	if !IsNil(o.RoomOwnerReferralId) {
		toSerialize["roomOwnerReferralId"] = o.RoomOwnerReferralId
	}
	if !IsNil(o.StartDate) {
		toSerialize["startDate"] = o.StartDate
	}
	return toSerialize, nil
}

type NullableRoomOwnerReferralType struct {
	value *RoomOwnerReferralType
	isSet bool
}

func (v NullableRoomOwnerReferralType) Get() *RoomOwnerReferralType {
	return v.value
}

func (v *NullableRoomOwnerReferralType) Set(val *RoomOwnerReferralType) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomOwnerReferralType) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomOwnerReferralType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomOwnerReferralType(val *RoomOwnerReferralType) *NullableRoomOwnerReferralType {
	return &NullableRoomOwnerReferralType{value: val, isSet: true}
}

func (v NullableRoomOwnerReferralType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomOwnerReferralType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

