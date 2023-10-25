/*
OPERA Cloud Customer Relationship Management Outbound API

APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 20.99.99.99
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crmoutbound

import (
	"encoding/json"
)

// checks if the MembershipDetailsType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &MembershipDetailsType{}

// MembershipDetailsType Details about a membership like ProfileID, Card Number, Type, Level, etc.
type MembershipDetailsType struct {
	ProfileId *ProfileId `json:"profileId,omitempty"`
	// The profile name associated with this membership.
	Name *string `json:"name,omitempty"`
	MembershipId *UniqueIDType `json:"membershipId,omitempty"`
	// The card number associated with this membership.
	MembershipCardNo *string `json:"membershipCardNo,omitempty"`
	MembershipType *CodeDescriptionType `json:"membershipType,omitempty"`
	// The current level of the membership.
	MembershipLevel *string `json:"membershipLevel,omitempty"`
	// Date when the member enrolled for the membership.
	JoinedDate *string `json:"joinedDate,omitempty"`
	// Membership card expiration date.
	CardExpirationDate *string `json:"cardExpirationDate,omitempty"`
}

// NewMembershipDetailsType instantiates a new MembershipDetailsType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMembershipDetailsType() *MembershipDetailsType {
	this := MembershipDetailsType{}
	return &this
}

// NewMembershipDetailsTypeWithDefaults instantiates a new MembershipDetailsType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMembershipDetailsTypeWithDefaults() *MembershipDetailsType {
	this := MembershipDetailsType{}
	return &this
}

// GetProfileId returns the ProfileId field value if set, zero value otherwise.
func (o *MembershipDetailsType) GetProfileId() ProfileId {
	if o == nil || IsNil(o.ProfileId) {
		var ret ProfileId
		return ret
	}
	return *o.ProfileId
}

// GetProfileIdOk returns a tuple with the ProfileId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipDetailsType) GetProfileIdOk() (*ProfileId, bool) {
	if o == nil || IsNil(o.ProfileId) {
		return nil, false
	}
	return o.ProfileId, true
}

// HasProfileId returns a boolean if a field has been set.
func (o *MembershipDetailsType) HasProfileId() bool {
	if o != nil && !IsNil(o.ProfileId) {
		return true
	}

	return false
}

// SetProfileId gets a reference to the given ProfileId and assigns it to the ProfileId field.
func (o *MembershipDetailsType) SetProfileId(v ProfileId) {
	o.ProfileId = &v
}

// GetName returns the Name field value if set, zero value otherwise.
func (o *MembershipDetailsType) GetName() string {
	if o == nil || IsNil(o.Name) {
		var ret string
		return ret
	}
	return *o.Name
}

// GetNameOk returns a tuple with the Name field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipDetailsType) GetNameOk() (*string, bool) {
	if o == nil || IsNil(o.Name) {
		return nil, false
	}
	return o.Name, true
}

// HasName returns a boolean if a field has been set.
func (o *MembershipDetailsType) HasName() bool {
	if o != nil && !IsNil(o.Name) {
		return true
	}

	return false
}

// SetName gets a reference to the given string and assigns it to the Name field.
func (o *MembershipDetailsType) SetName(v string) {
	o.Name = &v
}

// GetMembershipId returns the MembershipId field value if set, zero value otherwise.
func (o *MembershipDetailsType) GetMembershipId() UniqueIDType {
	if o == nil || IsNil(o.MembershipId) {
		var ret UniqueIDType
		return ret
	}
	return *o.MembershipId
}

// GetMembershipIdOk returns a tuple with the MembershipId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipDetailsType) GetMembershipIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.MembershipId) {
		return nil, false
	}
	return o.MembershipId, true
}

// HasMembershipId returns a boolean if a field has been set.
func (o *MembershipDetailsType) HasMembershipId() bool {
	if o != nil && !IsNil(o.MembershipId) {
		return true
	}

	return false
}

// SetMembershipId gets a reference to the given UniqueIDType and assigns it to the MembershipId field.
func (o *MembershipDetailsType) SetMembershipId(v UniqueIDType) {
	o.MembershipId = &v
}

// GetMembershipCardNo returns the MembershipCardNo field value if set, zero value otherwise.
func (o *MembershipDetailsType) GetMembershipCardNo() string {
	if o == nil || IsNil(o.MembershipCardNo) {
		var ret string
		return ret
	}
	return *o.MembershipCardNo
}

// GetMembershipCardNoOk returns a tuple with the MembershipCardNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipDetailsType) GetMembershipCardNoOk() (*string, bool) {
	if o == nil || IsNil(o.MembershipCardNo) {
		return nil, false
	}
	return o.MembershipCardNo, true
}

// HasMembershipCardNo returns a boolean if a field has been set.
func (o *MembershipDetailsType) HasMembershipCardNo() bool {
	if o != nil && !IsNil(o.MembershipCardNo) {
		return true
	}

	return false
}

// SetMembershipCardNo gets a reference to the given string and assigns it to the MembershipCardNo field.
func (o *MembershipDetailsType) SetMembershipCardNo(v string) {
	o.MembershipCardNo = &v
}

// GetMembershipType returns the MembershipType field value if set, zero value otherwise.
func (o *MembershipDetailsType) GetMembershipType() CodeDescriptionType {
	if o == nil || IsNil(o.MembershipType) {
		var ret CodeDescriptionType
		return ret
	}
	return *o.MembershipType
}

// GetMembershipTypeOk returns a tuple with the MembershipType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipDetailsType) GetMembershipTypeOk() (*CodeDescriptionType, bool) {
	if o == nil || IsNil(o.MembershipType) {
		return nil, false
	}
	return o.MembershipType, true
}

// HasMembershipType returns a boolean if a field has been set.
func (o *MembershipDetailsType) HasMembershipType() bool {
	if o != nil && !IsNil(o.MembershipType) {
		return true
	}

	return false
}

// SetMembershipType gets a reference to the given CodeDescriptionType and assigns it to the MembershipType field.
func (o *MembershipDetailsType) SetMembershipType(v CodeDescriptionType) {
	o.MembershipType = &v
}

// GetMembershipLevel returns the MembershipLevel field value if set, zero value otherwise.
func (o *MembershipDetailsType) GetMembershipLevel() string {
	if o == nil || IsNil(o.MembershipLevel) {
		var ret string
		return ret
	}
	return *o.MembershipLevel
}

// GetMembershipLevelOk returns a tuple with the MembershipLevel field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipDetailsType) GetMembershipLevelOk() (*string, bool) {
	if o == nil || IsNil(o.MembershipLevel) {
		return nil, false
	}
	return o.MembershipLevel, true
}

// HasMembershipLevel returns a boolean if a field has been set.
func (o *MembershipDetailsType) HasMembershipLevel() bool {
	if o != nil && !IsNil(o.MembershipLevel) {
		return true
	}

	return false
}

// SetMembershipLevel gets a reference to the given string and assigns it to the MembershipLevel field.
func (o *MembershipDetailsType) SetMembershipLevel(v string) {
	o.MembershipLevel = &v
}

// GetJoinedDate returns the JoinedDate field value if set, zero value otherwise.
func (o *MembershipDetailsType) GetJoinedDate() string {
	if o == nil || IsNil(o.JoinedDate) {
		var ret string
		return ret
	}
	return *o.JoinedDate
}

// GetJoinedDateOk returns a tuple with the JoinedDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipDetailsType) GetJoinedDateOk() (*string, bool) {
	if o == nil || IsNil(o.JoinedDate) {
		return nil, false
	}
	return o.JoinedDate, true
}

// HasJoinedDate returns a boolean if a field has been set.
func (o *MembershipDetailsType) HasJoinedDate() bool {
	if o != nil && !IsNil(o.JoinedDate) {
		return true
	}

	return false
}

// SetJoinedDate gets a reference to the given string and assigns it to the JoinedDate field.
func (o *MembershipDetailsType) SetJoinedDate(v string) {
	o.JoinedDate = &v
}

// GetCardExpirationDate returns the CardExpirationDate field value if set, zero value otherwise.
func (o *MembershipDetailsType) GetCardExpirationDate() string {
	if o == nil || IsNil(o.CardExpirationDate) {
		var ret string
		return ret
	}
	return *o.CardExpirationDate
}

// GetCardExpirationDateOk returns a tuple with the CardExpirationDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipDetailsType) GetCardExpirationDateOk() (*string, bool) {
	if o == nil || IsNil(o.CardExpirationDate) {
		return nil, false
	}
	return o.CardExpirationDate, true
}

// HasCardExpirationDate returns a boolean if a field has been set.
func (o *MembershipDetailsType) HasCardExpirationDate() bool {
	if o != nil && !IsNil(o.CardExpirationDate) {
		return true
	}

	return false
}

// SetCardExpirationDate gets a reference to the given string and assigns it to the CardExpirationDate field.
func (o *MembershipDetailsType) SetCardExpirationDate(v string) {
	o.CardExpirationDate = &v
}

func (o MembershipDetailsType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o MembershipDetailsType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ProfileId) {
		toSerialize["profileId"] = o.ProfileId
	}
	if !IsNil(o.Name) {
		toSerialize["name"] = o.Name
	}
	if !IsNil(o.MembershipId) {
		toSerialize["membershipId"] = o.MembershipId
	}
	if !IsNil(o.MembershipCardNo) {
		toSerialize["membershipCardNo"] = o.MembershipCardNo
	}
	if !IsNil(o.MembershipType) {
		toSerialize["membershipType"] = o.MembershipType
	}
	if !IsNil(o.MembershipLevel) {
		toSerialize["membershipLevel"] = o.MembershipLevel
	}
	if !IsNil(o.JoinedDate) {
		toSerialize["joinedDate"] = o.JoinedDate
	}
	if !IsNil(o.CardExpirationDate) {
		toSerialize["cardExpirationDate"] = o.CardExpirationDate
	}
	return toSerialize, nil
}

type NullableMembershipDetailsType struct {
	value *MembershipDetailsType
	isSet bool
}

func (v NullableMembershipDetailsType) Get() *MembershipDetailsType {
	return v.value
}

func (v *NullableMembershipDetailsType) Set(val *MembershipDetailsType) {
	v.value = val
	v.isSet = true
}

func (v NullableMembershipDetailsType) IsSet() bool {
	return v.isSet
}

func (v *NullableMembershipDetailsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMembershipDetailsType(val *MembershipDetailsType) *NullableMembershipDetailsType {
	return &NullableMembershipDetailsType{value: val, isSet: true}
}

func (v NullableMembershipDetailsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMembershipDetailsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


