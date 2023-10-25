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

// checks if the DistinctIDType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &DistinctIDType{}

// DistinctIDType Unique identifiers for both internal and external systems Eg: ReservationId, ConfirmationNumber, CancellationNumber, ExternalReferenceNumber etc
type DistinctIDType struct {
	// A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
	Id *string `json:"id,omitempty"`
	// Additional identifying value assigned by the creating system. Eg: ConfirmationLegNumber, ExternalLegNumber
	IdExtension *int32 `json:"idExtension,omitempty"`
	// A reference to the type of object defined by the UniqueID element. Eg: Reservation, Confirmation, Cancellation, ExternalReference etc
	Type *string `json:"type,omitempty"`
}

// NewDistinctIDType instantiates a new DistinctIDType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewDistinctIDType() *DistinctIDType {
	this := DistinctIDType{}
	return &this
}

// NewDistinctIDTypeWithDefaults instantiates a new DistinctIDType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewDistinctIDTypeWithDefaults() *DistinctIDType {
	this := DistinctIDType{}
	return &this
}

// GetId returns the Id field value if set, zero value otherwise.
func (o *DistinctIDType) GetId() string {
	if o == nil || IsNil(o.Id) {
		var ret string
		return ret
	}
	return *o.Id
}

// GetIdOk returns a tuple with the Id field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DistinctIDType) GetIdOk() (*string, bool) {
	if o == nil || IsNil(o.Id) {
		return nil, false
	}
	return o.Id, true
}

// HasId returns a boolean if a field has been set.
func (o *DistinctIDType) HasId() bool {
	if o != nil && !IsNil(o.Id) {
		return true
	}

	return false
}

// SetId gets a reference to the given string and assigns it to the Id field.
func (o *DistinctIDType) SetId(v string) {
	o.Id = &v
}

// GetIdExtension returns the IdExtension field value if set, zero value otherwise.
func (o *DistinctIDType) GetIdExtension() int32 {
	if o == nil || IsNil(o.IdExtension) {
		var ret int32
		return ret
	}
	return *o.IdExtension
}

// GetIdExtensionOk returns a tuple with the IdExtension field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DistinctIDType) GetIdExtensionOk() (*int32, bool) {
	if o == nil || IsNil(o.IdExtension) {
		return nil, false
	}
	return o.IdExtension, true
}

// HasIdExtension returns a boolean if a field has been set.
func (o *DistinctIDType) HasIdExtension() bool {
	if o != nil && !IsNil(o.IdExtension) {
		return true
	}

	return false
}

// SetIdExtension gets a reference to the given int32 and assigns it to the IdExtension field.
func (o *DistinctIDType) SetIdExtension(v int32) {
	o.IdExtension = &v
}

// GetType returns the Type field value if set, zero value otherwise.
func (o *DistinctIDType) GetType() string {
	if o == nil || IsNil(o.Type) {
		var ret string
		return ret
	}
	return *o.Type
}

// GetTypeOk returns a tuple with the Type field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DistinctIDType) GetTypeOk() (*string, bool) {
	if o == nil || IsNil(o.Type) {
		return nil, false
	}
	return o.Type, true
}

// HasType returns a boolean if a field has been set.
func (o *DistinctIDType) HasType() bool {
	if o != nil && !IsNil(o.Type) {
		return true
	}

	return false
}

// SetType gets a reference to the given string and assigns it to the Type field.
func (o *DistinctIDType) SetType(v string) {
	o.Type = &v
}

func (o DistinctIDType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o DistinctIDType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Id) {
		toSerialize["id"] = o.Id
	}
	if !IsNil(o.IdExtension) {
		toSerialize["idExtension"] = o.IdExtension
	}
	if !IsNil(o.Type) {
		toSerialize["type"] = o.Type
	}
	return toSerialize, nil
}

type NullableDistinctIDType struct {
	value *DistinctIDType
	isSet bool
}

func (v NullableDistinctIDType) Get() *DistinctIDType {
	return v.value
}

func (v *NullableDistinctIDType) Set(val *DistinctIDType) {
	v.value = val
	v.isSet = true
}

func (v NullableDistinctIDType) IsSet() bool {
	return v.isSet
}

func (v *NullableDistinctIDType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableDistinctIDType(val *DistinctIDType) *NullableDistinctIDType {
	return &NullableDistinctIDType{value: val, isSet: true}
}

func (v NullableDistinctIDType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableDistinctIDType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


