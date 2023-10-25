/*
OPERA Cloud Reservation API

APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsv

import (
	"encoding/json"
)

// checks if the FetchActivityBookingsType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &FetchActivityBookingsType{}

// FetchActivityBookingsType Used in the request message to describe the \"filtering Criteria\" when executing an activity lookup.
type FetchActivityBookingsType struct {
	// A collection of Activity objects.
	Activities []ActivityListInner `json:"activities,omitempty"`
	Address *AddressType `json:"address,omitempty"`
	// Hotel Code, It is used to filter hotel specific children to this specific hotel code.
	HotelId *string `json:"hotelId,omitempty"`
	PersonName *PersonNameType `json:"personName,omitempty"`
	// Unique Id that references an object uniquely in the system.
	ProfileId []UniqueIDType `json:"profileId,omitempty"`
}

// NewFetchActivityBookingsType instantiates a new FetchActivityBookingsType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewFetchActivityBookingsType() *FetchActivityBookingsType {
	this := FetchActivityBookingsType{}
	return &this
}

// NewFetchActivityBookingsTypeWithDefaults instantiates a new FetchActivityBookingsType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewFetchActivityBookingsTypeWithDefaults() *FetchActivityBookingsType {
	this := FetchActivityBookingsType{}
	return &this
}

// GetActivities returns the Activities field value if set, zero value otherwise.
func (o *FetchActivityBookingsType) GetActivities() []ActivityListInner {
	if o == nil || IsNil(o.Activities) {
		var ret []ActivityListInner
		return ret
	}
	return o.Activities
}

// GetActivitiesOk returns a tuple with the Activities field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FetchActivityBookingsType) GetActivitiesOk() ([]ActivityListInner, bool) {
	if o == nil || IsNil(o.Activities) {
		return nil, false
	}
	return o.Activities, true
}

// HasActivities returns a boolean if a field has been set.
func (o *FetchActivityBookingsType) HasActivities() bool {
	if o != nil && !IsNil(o.Activities) {
		return true
	}

	return false
}

// SetActivities gets a reference to the given []ActivityListInner and assigns it to the Activities field.
func (o *FetchActivityBookingsType) SetActivities(v []ActivityListInner) {
	o.Activities = v
}

// GetAddress returns the Address field value if set, zero value otherwise.
func (o *FetchActivityBookingsType) GetAddress() AddressType {
	if o == nil || IsNil(o.Address) {
		var ret AddressType
		return ret
	}
	return *o.Address
}

// GetAddressOk returns a tuple with the Address field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FetchActivityBookingsType) GetAddressOk() (*AddressType, bool) {
	if o == nil || IsNil(o.Address) {
		return nil, false
	}
	return o.Address, true
}

// HasAddress returns a boolean if a field has been set.
func (o *FetchActivityBookingsType) HasAddress() bool {
	if o != nil && !IsNil(o.Address) {
		return true
	}

	return false
}

// SetAddress gets a reference to the given AddressType and assigns it to the Address field.
func (o *FetchActivityBookingsType) SetAddress(v AddressType) {
	o.Address = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *FetchActivityBookingsType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FetchActivityBookingsType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *FetchActivityBookingsType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *FetchActivityBookingsType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetPersonName returns the PersonName field value if set, zero value otherwise.
func (o *FetchActivityBookingsType) GetPersonName() PersonNameType {
	if o == nil || IsNil(o.PersonName) {
		var ret PersonNameType
		return ret
	}
	return *o.PersonName
}

// GetPersonNameOk returns a tuple with the PersonName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FetchActivityBookingsType) GetPersonNameOk() (*PersonNameType, bool) {
	if o == nil || IsNil(o.PersonName) {
		return nil, false
	}
	return o.PersonName, true
}

// HasPersonName returns a boolean if a field has been set.
func (o *FetchActivityBookingsType) HasPersonName() bool {
	if o != nil && !IsNil(o.PersonName) {
		return true
	}

	return false
}

// SetPersonName gets a reference to the given PersonNameType and assigns it to the PersonName field.
func (o *FetchActivityBookingsType) SetPersonName(v PersonNameType) {
	o.PersonName = &v
}

// GetProfileId returns the ProfileId field value if set, zero value otherwise.
func (o *FetchActivityBookingsType) GetProfileId() []UniqueIDType {
	if o == nil || IsNil(o.ProfileId) {
		var ret []UniqueIDType
		return ret
	}
	return o.ProfileId
}

// GetProfileIdOk returns a tuple with the ProfileId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FetchActivityBookingsType) GetProfileIdOk() ([]UniqueIDType, bool) {
	if o == nil || IsNil(o.ProfileId) {
		return nil, false
	}
	return o.ProfileId, true
}

// HasProfileId returns a boolean if a field has been set.
func (o *FetchActivityBookingsType) HasProfileId() bool {
	if o != nil && !IsNil(o.ProfileId) {
		return true
	}

	return false
}

// SetProfileId gets a reference to the given []UniqueIDType and assigns it to the ProfileId field.
func (o *FetchActivityBookingsType) SetProfileId(v []UniqueIDType) {
	o.ProfileId = v
}

func (o FetchActivityBookingsType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o FetchActivityBookingsType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Activities) {
		toSerialize["activities"] = o.Activities
	}
	if !IsNil(o.Address) {
		toSerialize["address"] = o.Address
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.PersonName) {
		toSerialize["personName"] = o.PersonName
	}
	if !IsNil(o.ProfileId) {
		toSerialize["profileId"] = o.ProfileId
	}
	return toSerialize, nil
}

type NullableFetchActivityBookingsType struct {
	value *FetchActivityBookingsType
	isSet bool
}

func (v NullableFetchActivityBookingsType) Get() *FetchActivityBookingsType {
	return v.value
}

func (v *NullableFetchActivityBookingsType) Set(val *FetchActivityBookingsType) {
	v.value = val
	v.isSet = true
}

func (v NullableFetchActivityBookingsType) IsSet() bool {
	return v.isSet
}

func (v *NullableFetchActivityBookingsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableFetchActivityBookingsType(val *FetchActivityBookingsType) *NullableFetchActivityBookingsType {
	return &NullableFetchActivityBookingsType{value: val, isSet: true}
}

func (v NullableFetchActivityBookingsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableFetchActivityBookingsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


