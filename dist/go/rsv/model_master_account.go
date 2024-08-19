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

// checks if the MasterAccount type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &MasterAccount{}

// MasterAccount Request for CreateMasterAccount operation.
type MasterAccount struct {
	Links []InstanceLink `json:"links,omitempty"`
	MasterAccount *MasterAccountType `json:"masterAccount,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewMasterAccount instantiates a new MasterAccount object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMasterAccount() *MasterAccount {
	this := MasterAccount{}
	return &this
}

// NewMasterAccountWithDefaults instantiates a new MasterAccount object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMasterAccountWithDefaults() *MasterAccount {
	this := MasterAccount{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *MasterAccount) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MasterAccount) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *MasterAccount) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *MasterAccount) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetMasterAccount returns the MasterAccount field value if set, zero value otherwise.
func (o *MasterAccount) GetMasterAccount() MasterAccountType {
	if o == nil || IsNil(o.MasterAccount) {
		var ret MasterAccountType
		return ret
	}
	return *o.MasterAccount
}

// GetMasterAccountOk returns a tuple with the MasterAccount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MasterAccount) GetMasterAccountOk() (*MasterAccountType, bool) {
	if o == nil || IsNil(o.MasterAccount) {
		return nil, false
	}
	return o.MasterAccount, true
}

// HasMasterAccount returns a boolean if a field has been set.
func (o *MasterAccount) HasMasterAccount() bool {
	if o != nil && !IsNil(o.MasterAccount) {
		return true
	}

	return false
}

// SetMasterAccount gets a reference to the given MasterAccountType and assigns it to the MasterAccount field.
func (o *MasterAccount) SetMasterAccount(v MasterAccountType) {
	o.MasterAccount = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *MasterAccount) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MasterAccount) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *MasterAccount) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *MasterAccount) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o MasterAccount) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o MasterAccount) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.MasterAccount) {
		toSerialize["masterAccount"] = o.MasterAccount
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableMasterAccount struct {
	value *MasterAccount
	isSet bool
}

func (v NullableMasterAccount) Get() *MasterAccount {
	return v.value
}

func (v *NullableMasterAccount) Set(val *MasterAccount) {
	v.value = val
	v.isSet = true
}

func (v NullableMasterAccount) IsSet() bool {
	return v.isSet
}

func (v *NullableMasterAccount) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMasterAccount(val *MasterAccount) *NullableMasterAccount {
	return &NullableMasterAccount{value: val, isSet: true}
}

func (v NullableMasterAccount) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMasterAccount) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


