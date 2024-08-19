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

// checks if the RoomKeyGuest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomKeyGuest{}

// RoomKeyGuest Information about the guest for whom a key can be created.
type RoomKeyGuest struct {
	// First Name of the guest.
	FirstName *string `json:"firstName,omitempty"`
	GuestKeyOptions *string `json:"guestKeyOptions,omitempty"`
	GuestNameId *UniqueIDType `json:"guestNameId,omitempty"`
	// Flag to indicate wheter the guest is an Adult or a child.
	IsAdult *bool `json:"isAdult,omitempty"`
	// Flag to indicate wheter the guest is an Adult or a child.
	IsInactive *bool `json:"isInactive,omitempty"`
	// Key Number of the card.
	KeyNumber *float32 `json:"keyNumber,omitempty"`
	// Last Name of the guest.
	LastName *string `json:"lastName,omitempty"`
	// Original Balance on the Key card.
	OriginalBalance *float32 `json:"originalBalance,omitempty"`
	// Remaining Balance on the Key card.
	RemainingBalance *float32 `json:"remainingBalance,omitempty"`
}

// NewRoomKeyGuest instantiates a new RoomKeyGuest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomKeyGuest() *RoomKeyGuest {
	this := RoomKeyGuest{}
	return &this
}

// NewRoomKeyGuestWithDefaults instantiates a new RoomKeyGuest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomKeyGuestWithDefaults() *RoomKeyGuest {
	this := RoomKeyGuest{}
	return &this
}

// GetFirstName returns the FirstName field value if set, zero value otherwise.
func (o *RoomKeyGuest) GetFirstName() string {
	if o == nil || IsNil(o.FirstName) {
		var ret string
		return ret
	}
	return *o.FirstName
}

// GetFirstNameOk returns a tuple with the FirstName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomKeyGuest) GetFirstNameOk() (*string, bool) {
	if o == nil || IsNil(o.FirstName) {
		return nil, false
	}
	return o.FirstName, true
}

// HasFirstName returns a boolean if a field has been set.
func (o *RoomKeyGuest) HasFirstName() bool {
	if o != nil && !IsNil(o.FirstName) {
		return true
	}

	return false
}

// SetFirstName gets a reference to the given string and assigns it to the FirstName field.
func (o *RoomKeyGuest) SetFirstName(v string) {
	o.FirstName = &v
}

// GetGuestKeyOptions returns the GuestKeyOptions field value if set, zero value otherwise.
func (o *RoomKeyGuest) GetGuestKeyOptions() string {
	if o == nil || IsNil(o.GuestKeyOptions) {
		var ret string
		return ret
	}
	return *o.GuestKeyOptions
}

// GetGuestKeyOptionsOk returns a tuple with the GuestKeyOptions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomKeyGuest) GetGuestKeyOptionsOk() (*string, bool) {
	if o == nil || IsNil(o.GuestKeyOptions) {
		return nil, false
	}
	return o.GuestKeyOptions, true
}

// HasGuestKeyOptions returns a boolean if a field has been set.
func (o *RoomKeyGuest) HasGuestKeyOptions() bool {
	if o != nil && !IsNil(o.GuestKeyOptions) {
		return true
	}

	return false
}

// SetGuestKeyOptions gets a reference to the given string and assigns it to the GuestKeyOptions field.
func (o *RoomKeyGuest) SetGuestKeyOptions(v string) {
	o.GuestKeyOptions = &v
}

// GetGuestNameId returns the GuestNameId field value if set, zero value otherwise.
func (o *RoomKeyGuest) GetGuestNameId() UniqueIDType {
	if o == nil || IsNil(o.GuestNameId) {
		var ret UniqueIDType
		return ret
	}
	return *o.GuestNameId
}

// GetGuestNameIdOk returns a tuple with the GuestNameId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomKeyGuest) GetGuestNameIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.GuestNameId) {
		return nil, false
	}
	return o.GuestNameId, true
}

// HasGuestNameId returns a boolean if a field has been set.
func (o *RoomKeyGuest) HasGuestNameId() bool {
	if o != nil && !IsNil(o.GuestNameId) {
		return true
	}

	return false
}

// SetGuestNameId gets a reference to the given UniqueIDType and assigns it to the GuestNameId field.
func (o *RoomKeyGuest) SetGuestNameId(v UniqueIDType) {
	o.GuestNameId = &v
}

// GetIsAdult returns the IsAdult field value if set, zero value otherwise.
func (o *RoomKeyGuest) GetIsAdult() bool {
	if o == nil || IsNil(o.IsAdult) {
		var ret bool
		return ret
	}
	return *o.IsAdult
}

// GetIsAdultOk returns a tuple with the IsAdult field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomKeyGuest) GetIsAdultOk() (*bool, bool) {
	if o == nil || IsNil(o.IsAdult) {
		return nil, false
	}
	return o.IsAdult, true
}

// HasIsAdult returns a boolean if a field has been set.
func (o *RoomKeyGuest) HasIsAdult() bool {
	if o != nil && !IsNil(o.IsAdult) {
		return true
	}

	return false
}

// SetIsAdult gets a reference to the given bool and assigns it to the IsAdult field.
func (o *RoomKeyGuest) SetIsAdult(v bool) {
	o.IsAdult = &v
}

// GetIsInactive returns the IsInactive field value if set, zero value otherwise.
func (o *RoomKeyGuest) GetIsInactive() bool {
	if o == nil || IsNil(o.IsInactive) {
		var ret bool
		return ret
	}
	return *o.IsInactive
}

// GetIsInactiveOk returns a tuple with the IsInactive field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomKeyGuest) GetIsInactiveOk() (*bool, bool) {
	if o == nil || IsNil(o.IsInactive) {
		return nil, false
	}
	return o.IsInactive, true
}

// HasIsInactive returns a boolean if a field has been set.
func (o *RoomKeyGuest) HasIsInactive() bool {
	if o != nil && !IsNil(o.IsInactive) {
		return true
	}

	return false
}

// SetIsInactive gets a reference to the given bool and assigns it to the IsInactive field.
func (o *RoomKeyGuest) SetIsInactive(v bool) {
	o.IsInactive = &v
}

// GetKeyNumber returns the KeyNumber field value if set, zero value otherwise.
func (o *RoomKeyGuest) GetKeyNumber() float32 {
	if o == nil || IsNil(o.KeyNumber) {
		var ret float32
		return ret
	}
	return *o.KeyNumber
}

// GetKeyNumberOk returns a tuple with the KeyNumber field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomKeyGuest) GetKeyNumberOk() (*float32, bool) {
	if o == nil || IsNil(o.KeyNumber) {
		return nil, false
	}
	return o.KeyNumber, true
}

// HasKeyNumber returns a boolean if a field has been set.
func (o *RoomKeyGuest) HasKeyNumber() bool {
	if o != nil && !IsNil(o.KeyNumber) {
		return true
	}

	return false
}

// SetKeyNumber gets a reference to the given float32 and assigns it to the KeyNumber field.
func (o *RoomKeyGuest) SetKeyNumber(v float32) {
	o.KeyNumber = &v
}

// GetLastName returns the LastName field value if set, zero value otherwise.
func (o *RoomKeyGuest) GetLastName() string {
	if o == nil || IsNil(o.LastName) {
		var ret string
		return ret
	}
	return *o.LastName
}

// GetLastNameOk returns a tuple with the LastName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomKeyGuest) GetLastNameOk() (*string, bool) {
	if o == nil || IsNil(o.LastName) {
		return nil, false
	}
	return o.LastName, true
}

// HasLastName returns a boolean if a field has been set.
func (o *RoomKeyGuest) HasLastName() bool {
	if o != nil && !IsNil(o.LastName) {
		return true
	}

	return false
}

// SetLastName gets a reference to the given string and assigns it to the LastName field.
func (o *RoomKeyGuest) SetLastName(v string) {
	o.LastName = &v
}

// GetOriginalBalance returns the OriginalBalance field value if set, zero value otherwise.
func (o *RoomKeyGuest) GetOriginalBalance() float32 {
	if o == nil || IsNil(o.OriginalBalance) {
		var ret float32
		return ret
	}
	return *o.OriginalBalance
}

// GetOriginalBalanceOk returns a tuple with the OriginalBalance field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomKeyGuest) GetOriginalBalanceOk() (*float32, bool) {
	if o == nil || IsNil(o.OriginalBalance) {
		return nil, false
	}
	return o.OriginalBalance, true
}

// HasOriginalBalance returns a boolean if a field has been set.
func (o *RoomKeyGuest) HasOriginalBalance() bool {
	if o != nil && !IsNil(o.OriginalBalance) {
		return true
	}

	return false
}

// SetOriginalBalance gets a reference to the given float32 and assigns it to the OriginalBalance field.
func (o *RoomKeyGuest) SetOriginalBalance(v float32) {
	o.OriginalBalance = &v
}

// GetRemainingBalance returns the RemainingBalance field value if set, zero value otherwise.
func (o *RoomKeyGuest) GetRemainingBalance() float32 {
	if o == nil || IsNil(o.RemainingBalance) {
		var ret float32
		return ret
	}
	return *o.RemainingBalance
}

// GetRemainingBalanceOk returns a tuple with the RemainingBalance field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomKeyGuest) GetRemainingBalanceOk() (*float32, bool) {
	if o == nil || IsNil(o.RemainingBalance) {
		return nil, false
	}
	return o.RemainingBalance, true
}

// HasRemainingBalance returns a boolean if a field has been set.
func (o *RoomKeyGuest) HasRemainingBalance() bool {
	if o != nil && !IsNil(o.RemainingBalance) {
		return true
	}

	return false
}

// SetRemainingBalance gets a reference to the given float32 and assigns it to the RemainingBalance field.
func (o *RoomKeyGuest) SetRemainingBalance(v float32) {
	o.RemainingBalance = &v
}

func (o RoomKeyGuest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomKeyGuest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.FirstName) {
		toSerialize["firstName"] = o.FirstName
	}
	if !IsNil(o.GuestKeyOptions) {
		toSerialize["guestKeyOptions"] = o.GuestKeyOptions
	}
	if !IsNil(o.GuestNameId) {
		toSerialize["guestNameId"] = o.GuestNameId
	}
	if !IsNil(o.IsAdult) {
		toSerialize["isAdult"] = o.IsAdult
	}
	if !IsNil(o.IsInactive) {
		toSerialize["isInactive"] = o.IsInactive
	}
	if !IsNil(o.KeyNumber) {
		toSerialize["keyNumber"] = o.KeyNumber
	}
	if !IsNil(o.LastName) {
		toSerialize["lastName"] = o.LastName
	}
	if !IsNil(o.OriginalBalance) {
		toSerialize["originalBalance"] = o.OriginalBalance
	}
	if !IsNil(o.RemainingBalance) {
		toSerialize["remainingBalance"] = o.RemainingBalance
	}
	return toSerialize, nil
}

type NullableRoomKeyGuest struct {
	value *RoomKeyGuest
	isSet bool
}

func (v NullableRoomKeyGuest) Get() *RoomKeyGuest {
	return v.value
}

func (v *NullableRoomKeyGuest) Set(val *RoomKeyGuest) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomKeyGuest) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomKeyGuest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomKeyGuest(val *RoomKeyGuest) *NullableRoomKeyGuest {
	return &NullableRoomKeyGuest{value: val, isSet: true}
}

func (v NullableRoomKeyGuest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomKeyGuest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


