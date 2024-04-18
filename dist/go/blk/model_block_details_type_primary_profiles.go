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

// checks if the BlockDetailsTypePrimaryProfiles type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BlockDetailsTypePrimaryProfiles{}

// BlockDetailsTypePrimaryProfiles Primary account and contact for the block.
type BlockDetailsTypePrimaryProfiles struct {
	Account *BlockProfilesType `json:"account,omitempty"`
	Contact *BlockProfilesType `json:"contact,omitempty"`
	Image *ImageSetType `json:"image,omitempty"`
}

// NewBlockDetailsTypePrimaryProfiles instantiates a new BlockDetailsTypePrimaryProfiles object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBlockDetailsTypePrimaryProfiles() *BlockDetailsTypePrimaryProfiles {
	this := BlockDetailsTypePrimaryProfiles{}
	return &this
}

// NewBlockDetailsTypePrimaryProfilesWithDefaults instantiates a new BlockDetailsTypePrimaryProfiles object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBlockDetailsTypePrimaryProfilesWithDefaults() *BlockDetailsTypePrimaryProfiles {
	this := BlockDetailsTypePrimaryProfiles{}
	return &this
}

// GetAccount returns the Account field value if set, zero value otherwise.
func (o *BlockDetailsTypePrimaryProfiles) GetAccount() BlockProfilesType {
	if o == nil || IsNil(o.Account) {
		var ret BlockProfilesType
		return ret
	}
	return *o.Account
}

// GetAccountOk returns a tuple with the Account field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockDetailsTypePrimaryProfiles) GetAccountOk() (*BlockProfilesType, bool) {
	if o == nil || IsNil(o.Account) {
		return nil, false
	}
	return o.Account, true
}

// HasAccount returns a boolean if a field has been set.
func (o *BlockDetailsTypePrimaryProfiles) HasAccount() bool {
	if o != nil && !IsNil(o.Account) {
		return true
	}

	return false
}

// SetAccount gets a reference to the given BlockProfilesType and assigns it to the Account field.
func (o *BlockDetailsTypePrimaryProfiles) SetAccount(v BlockProfilesType) {
	o.Account = &v
}

// GetContact returns the Contact field value if set, zero value otherwise.
func (o *BlockDetailsTypePrimaryProfiles) GetContact() BlockProfilesType {
	if o == nil || IsNil(o.Contact) {
		var ret BlockProfilesType
		return ret
	}
	return *o.Contact
}

// GetContactOk returns a tuple with the Contact field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockDetailsTypePrimaryProfiles) GetContactOk() (*BlockProfilesType, bool) {
	if o == nil || IsNil(o.Contact) {
		return nil, false
	}
	return o.Contact, true
}

// HasContact returns a boolean if a field has been set.
func (o *BlockDetailsTypePrimaryProfiles) HasContact() bool {
	if o != nil && !IsNil(o.Contact) {
		return true
	}

	return false
}

// SetContact gets a reference to the given BlockProfilesType and assigns it to the Contact field.
func (o *BlockDetailsTypePrimaryProfiles) SetContact(v BlockProfilesType) {
	o.Contact = &v
}

// GetImage returns the Image field value if set, zero value otherwise.
func (o *BlockDetailsTypePrimaryProfiles) GetImage() ImageSetType {
	if o == nil || IsNil(o.Image) {
		var ret ImageSetType
		return ret
	}
	return *o.Image
}

// GetImageOk returns a tuple with the Image field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockDetailsTypePrimaryProfiles) GetImageOk() (*ImageSetType, bool) {
	if o == nil || IsNil(o.Image) {
		return nil, false
	}
	return o.Image, true
}

// HasImage returns a boolean if a field has been set.
func (o *BlockDetailsTypePrimaryProfiles) HasImage() bool {
	if o != nil && !IsNil(o.Image) {
		return true
	}

	return false
}

// SetImage gets a reference to the given ImageSetType and assigns it to the Image field.
func (o *BlockDetailsTypePrimaryProfiles) SetImage(v ImageSetType) {
	o.Image = &v
}

func (o BlockDetailsTypePrimaryProfiles) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BlockDetailsTypePrimaryProfiles) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Account) {
		toSerialize["account"] = o.Account
	}
	if !IsNil(o.Contact) {
		toSerialize["contact"] = o.Contact
	}
	if !IsNil(o.Image) {
		toSerialize["image"] = o.Image
	}
	return toSerialize, nil
}

type NullableBlockDetailsTypePrimaryProfiles struct {
	value *BlockDetailsTypePrimaryProfiles
	isSet bool
}

func (v NullableBlockDetailsTypePrimaryProfiles) Get() *BlockDetailsTypePrimaryProfiles {
	return v.value
}

func (v *NullableBlockDetailsTypePrimaryProfiles) Set(val *BlockDetailsTypePrimaryProfiles) {
	v.value = val
	v.isSet = true
}

func (v NullableBlockDetailsTypePrimaryProfiles) IsSet() bool {
	return v.isSet
}

func (v *NullableBlockDetailsTypePrimaryProfiles) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBlockDetailsTypePrimaryProfiles(val *BlockDetailsTypePrimaryProfiles) *NullableBlockDetailsTypePrimaryProfiles {
	return &NullableBlockDetailsTypePrimaryProfiles{value: val, isSet: true}
}

func (v NullableBlockDetailsTypePrimaryProfiles) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBlockDetailsTypePrimaryProfiles) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

