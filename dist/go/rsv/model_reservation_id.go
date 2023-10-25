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

// checks if the ReservationId type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ReservationId{}

// ReservationId An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote).
type ReservationId struct {
	// A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
	Id *string `json:"id,omitempty"`
	// The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated.
	Instance *string `json:"instance,omitempty"`
	// A reference to the type of object defined by the UniqueID element.
	Type *string `json:"type,omitempty"`
	// URL that identifies the location associated with the record identified by the UniqueID.
	Url *string `json:"url,omitempty"`
}

// NewReservationId instantiates a new ReservationId object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewReservationId() *ReservationId {
	this := ReservationId{}
	return &this
}

// NewReservationIdWithDefaults instantiates a new ReservationId object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewReservationIdWithDefaults() *ReservationId {
	this := ReservationId{}
	return &this
}

// GetId returns the Id field value if set, zero value otherwise.
func (o *ReservationId) GetId() string {
	if o == nil || IsNil(o.Id) {
		var ret string
		return ret
	}
	return *o.Id
}

// GetIdOk returns a tuple with the Id field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationId) GetIdOk() (*string, bool) {
	if o == nil || IsNil(o.Id) {
		return nil, false
	}
	return o.Id, true
}

// HasId returns a boolean if a field has been set.
func (o *ReservationId) HasId() bool {
	if o != nil && !IsNil(o.Id) {
		return true
	}

	return false
}

// SetId gets a reference to the given string and assigns it to the Id field.
func (o *ReservationId) SetId(v string) {
	o.Id = &v
}

// GetInstance returns the Instance field value if set, zero value otherwise.
func (o *ReservationId) GetInstance() string {
	if o == nil || IsNil(o.Instance) {
		var ret string
		return ret
	}
	return *o.Instance
}

// GetInstanceOk returns a tuple with the Instance field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationId) GetInstanceOk() (*string, bool) {
	if o == nil || IsNil(o.Instance) {
		return nil, false
	}
	return o.Instance, true
}

// HasInstance returns a boolean if a field has been set.
func (o *ReservationId) HasInstance() bool {
	if o != nil && !IsNil(o.Instance) {
		return true
	}

	return false
}

// SetInstance gets a reference to the given string and assigns it to the Instance field.
func (o *ReservationId) SetInstance(v string) {
	o.Instance = &v
}

// GetType returns the Type field value if set, zero value otherwise.
func (o *ReservationId) GetType() string {
	if o == nil || IsNil(o.Type) {
		var ret string
		return ret
	}
	return *o.Type
}

// GetTypeOk returns a tuple with the Type field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationId) GetTypeOk() (*string, bool) {
	if o == nil || IsNil(o.Type) {
		return nil, false
	}
	return o.Type, true
}

// HasType returns a boolean if a field has been set.
func (o *ReservationId) HasType() bool {
	if o != nil && !IsNil(o.Type) {
		return true
	}

	return false
}

// SetType gets a reference to the given string and assigns it to the Type field.
func (o *ReservationId) SetType(v string) {
	o.Type = &v
}

// GetUrl returns the Url field value if set, zero value otherwise.
func (o *ReservationId) GetUrl() string {
	if o == nil || IsNil(o.Url) {
		var ret string
		return ret
	}
	return *o.Url
}

// GetUrlOk returns a tuple with the Url field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationId) GetUrlOk() (*string, bool) {
	if o == nil || IsNil(o.Url) {
		return nil, false
	}
	return o.Url, true
}

// HasUrl returns a boolean if a field has been set.
func (o *ReservationId) HasUrl() bool {
	if o != nil && !IsNil(o.Url) {
		return true
	}

	return false
}

// SetUrl gets a reference to the given string and assigns it to the Url field.
func (o *ReservationId) SetUrl(v string) {
	o.Url = &v
}

func (o ReservationId) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ReservationId) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Id) {
		toSerialize["id"] = o.Id
	}
	if !IsNil(o.Instance) {
		toSerialize["instance"] = o.Instance
	}
	if !IsNil(o.Type) {
		toSerialize["type"] = o.Type
	}
	if !IsNil(o.Url) {
		toSerialize["url"] = o.Url
	}
	return toSerialize, nil
}

type NullableReservationId struct {
	value *ReservationId
	isSet bool
}

func (v NullableReservationId) Get() *ReservationId {
	return v.value
}

func (v *NullableReservationId) Set(val *ReservationId) {
	v.value = val
	v.isSet = true
}

func (v NullableReservationId) IsSet() bool {
	return v.isSet
}

func (v *NullableReservationId) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableReservationId(val *ReservationId) *NullableReservationId {
	return &NullableReservationId{value: val, isSet: true}
}

func (v NullableReservationId) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableReservationId) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


