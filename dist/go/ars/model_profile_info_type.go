/*
OPERA Cloud Accounts Receivables API

APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package ars

import (
	"encoding/json"
)

// checks if the ProfileInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ProfileInfoType{}

// ProfileInfoType Provides information about attached profiles to the block.
type ProfileInfoType struct {
	// City for the profile attached to the block.
	City *string `json:"city,omitempty"`
	// Name for the profile attached to the block.
	Name *string `json:"name,omitempty"`
	// Phone for the profile attached to the block.
	Phone *string `json:"phone,omitempty"`
	ProfileId *UniqueIDType `json:"profileId,omitempty"`
	// Defines the type of Linked profiles for a block.
	Type *string `json:"type,omitempty"`
}

// NewProfileInfoType instantiates a new ProfileInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewProfileInfoType() *ProfileInfoType {
	this := ProfileInfoType{}
	return &this
}

// NewProfileInfoTypeWithDefaults instantiates a new ProfileInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewProfileInfoTypeWithDefaults() *ProfileInfoType {
	this := ProfileInfoType{}
	return &this
}

// GetCity returns the City field value if set, zero value otherwise.
func (o *ProfileInfoType) GetCity() string {
	if o == nil || IsNil(o.City) {
		var ret string
		return ret
	}
	return *o.City
}

// GetCityOk returns a tuple with the City field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileInfoType) GetCityOk() (*string, bool) {
	if o == nil || IsNil(o.City) {
		return nil, false
	}
	return o.City, true
}

// HasCity returns a boolean if a field has been set.
func (o *ProfileInfoType) HasCity() bool {
	if o != nil && !IsNil(o.City) {
		return true
	}

	return false
}

// SetCity gets a reference to the given string and assigns it to the City field.
func (o *ProfileInfoType) SetCity(v string) {
	o.City = &v
}

// GetName returns the Name field value if set, zero value otherwise.
func (o *ProfileInfoType) GetName() string {
	if o == nil || IsNil(o.Name) {
		var ret string
		return ret
	}
	return *o.Name
}

// GetNameOk returns a tuple with the Name field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileInfoType) GetNameOk() (*string, bool) {
	if o == nil || IsNil(o.Name) {
		return nil, false
	}
	return o.Name, true
}

// HasName returns a boolean if a field has been set.
func (o *ProfileInfoType) HasName() bool {
	if o != nil && !IsNil(o.Name) {
		return true
	}

	return false
}

// SetName gets a reference to the given string and assigns it to the Name field.
func (o *ProfileInfoType) SetName(v string) {
	o.Name = &v
}

// GetPhone returns the Phone field value if set, zero value otherwise.
func (o *ProfileInfoType) GetPhone() string {
	if o == nil || IsNil(o.Phone) {
		var ret string
		return ret
	}
	return *o.Phone
}

// GetPhoneOk returns a tuple with the Phone field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileInfoType) GetPhoneOk() (*string, bool) {
	if o == nil || IsNil(o.Phone) {
		return nil, false
	}
	return o.Phone, true
}

// HasPhone returns a boolean if a field has been set.
func (o *ProfileInfoType) HasPhone() bool {
	if o != nil && !IsNil(o.Phone) {
		return true
	}

	return false
}

// SetPhone gets a reference to the given string and assigns it to the Phone field.
func (o *ProfileInfoType) SetPhone(v string) {
	o.Phone = &v
}

// GetProfileId returns the ProfileId field value if set, zero value otherwise.
func (o *ProfileInfoType) GetProfileId() UniqueIDType {
	if o == nil || IsNil(o.ProfileId) {
		var ret UniqueIDType
		return ret
	}
	return *o.ProfileId
}

// GetProfileIdOk returns a tuple with the ProfileId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileInfoType) GetProfileIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.ProfileId) {
		return nil, false
	}
	return o.ProfileId, true
}

// HasProfileId returns a boolean if a field has been set.
func (o *ProfileInfoType) HasProfileId() bool {
	if o != nil && !IsNil(o.ProfileId) {
		return true
	}

	return false
}

// SetProfileId gets a reference to the given UniqueIDType and assigns it to the ProfileId field.
func (o *ProfileInfoType) SetProfileId(v UniqueIDType) {
	o.ProfileId = &v
}

// GetType returns the Type field value if set, zero value otherwise.
func (o *ProfileInfoType) GetType() string {
	if o == nil || IsNil(o.Type) {
		var ret string
		return ret
	}
	return *o.Type
}

// GetTypeOk returns a tuple with the Type field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileInfoType) GetTypeOk() (*string, bool) {
	if o == nil || IsNil(o.Type) {
		return nil, false
	}
	return o.Type, true
}

// HasType returns a boolean if a field has been set.
func (o *ProfileInfoType) HasType() bool {
	if o != nil && !IsNil(o.Type) {
		return true
	}

	return false
}

// SetType gets a reference to the given string and assigns it to the Type field.
func (o *ProfileInfoType) SetType(v string) {
	o.Type = &v
}

func (o ProfileInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ProfileInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.City) {
		toSerialize["city"] = o.City
	}
	if !IsNil(o.Name) {
		toSerialize["name"] = o.Name
	}
	if !IsNil(o.Phone) {
		toSerialize["phone"] = o.Phone
	}
	if !IsNil(o.ProfileId) {
		toSerialize["profileId"] = o.ProfileId
	}
	if !IsNil(o.Type) {
		toSerialize["type"] = o.Type
	}
	return toSerialize, nil
}

type NullableProfileInfoType struct {
	value *ProfileInfoType
	isSet bool
}

func (v NullableProfileInfoType) Get() *ProfileInfoType {
	return v.value
}

func (v *NullableProfileInfoType) Set(val *ProfileInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableProfileInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableProfileInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableProfileInfoType(val *ProfileInfoType) *NullableProfileInfoType {
	return &NullableProfileInfoType{value: val, isSet: true}
}

func (v NullableProfileInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableProfileInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


