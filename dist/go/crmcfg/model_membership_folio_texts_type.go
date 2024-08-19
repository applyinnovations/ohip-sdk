/*
OPERA Cloud CRM Configuration API

APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crmcfg

import (
	"encoding/json"
)

// checks if the MembershipFolioTextsType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &MembershipFolioTextsType{}

// MembershipFolioTextsType A type which is used to insert Membership FolioTexts.
type MembershipFolioTextsType struct {
	// Membership Type code.
	MembershipType *string `json:"membershipType,omitempty"`
	// Membership Level code.
	MembershipLevel *string `json:"membershipLevel,omitempty"`
	// Folio Texts.
	FolioTexts [][]HotelFolioTextType `json:"folioTexts,omitempty"`
}

// NewMembershipFolioTextsType instantiates a new MembershipFolioTextsType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMembershipFolioTextsType() *MembershipFolioTextsType {
	this := MembershipFolioTextsType{}
	return &this
}

// NewMembershipFolioTextsTypeWithDefaults instantiates a new MembershipFolioTextsType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMembershipFolioTextsTypeWithDefaults() *MembershipFolioTextsType {
	this := MembershipFolioTextsType{}
	return &this
}

// GetMembershipType returns the MembershipType field value if set, zero value otherwise.
func (o *MembershipFolioTextsType) GetMembershipType() string {
	if o == nil || IsNil(o.MembershipType) {
		var ret string
		return ret
	}
	return *o.MembershipType
}

// GetMembershipTypeOk returns a tuple with the MembershipType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipFolioTextsType) GetMembershipTypeOk() (*string, bool) {
	if o == nil || IsNil(o.MembershipType) {
		return nil, false
	}
	return o.MembershipType, true
}

// HasMembershipType returns a boolean if a field has been set.
func (o *MembershipFolioTextsType) HasMembershipType() bool {
	if o != nil && !IsNil(o.MembershipType) {
		return true
	}

	return false
}

// SetMembershipType gets a reference to the given string and assigns it to the MembershipType field.
func (o *MembershipFolioTextsType) SetMembershipType(v string) {
	o.MembershipType = &v
}

// GetMembershipLevel returns the MembershipLevel field value if set, zero value otherwise.
func (o *MembershipFolioTextsType) GetMembershipLevel() string {
	if o == nil || IsNil(o.MembershipLevel) {
		var ret string
		return ret
	}
	return *o.MembershipLevel
}

// GetMembershipLevelOk returns a tuple with the MembershipLevel field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipFolioTextsType) GetMembershipLevelOk() (*string, bool) {
	if o == nil || IsNil(o.MembershipLevel) {
		return nil, false
	}
	return o.MembershipLevel, true
}

// HasMembershipLevel returns a boolean if a field has been set.
func (o *MembershipFolioTextsType) HasMembershipLevel() bool {
	if o != nil && !IsNil(o.MembershipLevel) {
		return true
	}

	return false
}

// SetMembershipLevel gets a reference to the given string and assigns it to the MembershipLevel field.
func (o *MembershipFolioTextsType) SetMembershipLevel(v string) {
	o.MembershipLevel = &v
}

// GetFolioTexts returns the FolioTexts field value if set, zero value otherwise.
func (o *MembershipFolioTextsType) GetFolioTexts() [][]HotelFolioTextType {
	if o == nil || IsNil(o.FolioTexts) {
		var ret [][]HotelFolioTextType
		return ret
	}
	return o.FolioTexts
}

// GetFolioTextsOk returns a tuple with the FolioTexts field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipFolioTextsType) GetFolioTextsOk() ([][]HotelFolioTextType, bool) {
	if o == nil || IsNil(o.FolioTexts) {
		return nil, false
	}
	return o.FolioTexts, true
}

// HasFolioTexts returns a boolean if a field has been set.
func (o *MembershipFolioTextsType) HasFolioTexts() bool {
	if o != nil && !IsNil(o.FolioTexts) {
		return true
	}

	return false
}

// SetFolioTexts gets a reference to the given [][]HotelFolioTextType and assigns it to the FolioTexts field.
func (o *MembershipFolioTextsType) SetFolioTexts(v [][]HotelFolioTextType) {
	o.FolioTexts = v
}

func (o MembershipFolioTextsType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o MembershipFolioTextsType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.MembershipType) {
		toSerialize["membershipType"] = o.MembershipType
	}
	if !IsNil(o.MembershipLevel) {
		toSerialize["membershipLevel"] = o.MembershipLevel
	}
	if !IsNil(o.FolioTexts) {
		toSerialize["folioTexts"] = o.FolioTexts
	}
	return toSerialize, nil
}

type NullableMembershipFolioTextsType struct {
	value *MembershipFolioTextsType
	isSet bool
}

func (v NullableMembershipFolioTextsType) Get() *MembershipFolioTextsType {
	return v.value
}

func (v *NullableMembershipFolioTextsType) Set(val *MembershipFolioTextsType) {
	v.value = val
	v.isSet = true
}

func (v NullableMembershipFolioTextsType) IsSet() bool {
	return v.isSet
}

func (v *NullableMembershipFolioTextsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMembershipFolioTextsType(val *MembershipFolioTextsType) *NullableMembershipFolioTextsType {
	return &NullableMembershipFolioTextsType{value: val, isSet: true}
}

func (v NullableMembershipFolioTextsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMembershipFolioTextsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


