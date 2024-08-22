/*
OPERA Cloud Customer Relationship Management API

APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crm

import (
	"encoding/json"
)

// checks if the MembershipAwardRecipientInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &MembershipAwardRecipientInfoType{}

// MembershipAwardRecipientInfoType Type holds details of member.
type MembershipAwardRecipientInfoType struct {
	AddressInfo *AddressInfoType `json:"addressInfo,omitempty"`
	// It returns a Company Name,If the member is associated with a company.
	CompanyName *string `json:"companyName,omitempty"`
	MemberInfo *ProfileNameType `json:"memberInfo,omitempty"`
	// Phone number
	PhoneNumber *string `json:"phoneNumber,omitempty"`
}

// NewMembershipAwardRecipientInfoType instantiates a new MembershipAwardRecipientInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMembershipAwardRecipientInfoType() *MembershipAwardRecipientInfoType {
	this := MembershipAwardRecipientInfoType{}
	return &this
}

// NewMembershipAwardRecipientInfoTypeWithDefaults instantiates a new MembershipAwardRecipientInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMembershipAwardRecipientInfoTypeWithDefaults() *MembershipAwardRecipientInfoType {
	this := MembershipAwardRecipientInfoType{}
	return &this
}

// GetAddressInfo returns the AddressInfo field value if set, zero value otherwise.
func (o *MembershipAwardRecipientInfoType) GetAddressInfo() AddressInfoType {
	if o == nil || IsNil(o.AddressInfo) {
		var ret AddressInfoType
		return ret
	}
	return *o.AddressInfo
}

// GetAddressInfoOk returns a tuple with the AddressInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipAwardRecipientInfoType) GetAddressInfoOk() (*AddressInfoType, bool) {
	if o == nil || IsNil(o.AddressInfo) {
		return nil, false
	}
	return o.AddressInfo, true
}

// HasAddressInfo returns a boolean if a field has been set.
func (o *MembershipAwardRecipientInfoType) HasAddressInfo() bool {
	if o != nil && !IsNil(o.AddressInfo) {
		return true
	}

	return false
}

// SetAddressInfo gets a reference to the given AddressInfoType and assigns it to the AddressInfo field.
func (o *MembershipAwardRecipientInfoType) SetAddressInfo(v AddressInfoType) {
	o.AddressInfo = &v
}

// GetCompanyName returns the CompanyName field value if set, zero value otherwise.
func (o *MembershipAwardRecipientInfoType) GetCompanyName() string {
	if o == nil || IsNil(o.CompanyName) {
		var ret string
		return ret
	}
	return *o.CompanyName
}

// GetCompanyNameOk returns a tuple with the CompanyName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipAwardRecipientInfoType) GetCompanyNameOk() (*string, bool) {
	if o == nil || IsNil(o.CompanyName) {
		return nil, false
	}
	return o.CompanyName, true
}

// HasCompanyName returns a boolean if a field has been set.
func (o *MembershipAwardRecipientInfoType) HasCompanyName() bool {
	if o != nil && !IsNil(o.CompanyName) {
		return true
	}

	return false
}

// SetCompanyName gets a reference to the given string and assigns it to the CompanyName field.
func (o *MembershipAwardRecipientInfoType) SetCompanyName(v string) {
	o.CompanyName = &v
}

// GetMemberInfo returns the MemberInfo field value if set, zero value otherwise.
func (o *MembershipAwardRecipientInfoType) GetMemberInfo() ProfileNameType {
	if o == nil || IsNil(o.MemberInfo) {
		var ret ProfileNameType
		return ret
	}
	return *o.MemberInfo
}

// GetMemberInfoOk returns a tuple with the MemberInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipAwardRecipientInfoType) GetMemberInfoOk() (*ProfileNameType, bool) {
	if o == nil || IsNil(o.MemberInfo) {
		return nil, false
	}
	return o.MemberInfo, true
}

// HasMemberInfo returns a boolean if a field has been set.
func (o *MembershipAwardRecipientInfoType) HasMemberInfo() bool {
	if o != nil && !IsNil(o.MemberInfo) {
		return true
	}

	return false
}

// SetMemberInfo gets a reference to the given ProfileNameType and assigns it to the MemberInfo field.
func (o *MembershipAwardRecipientInfoType) SetMemberInfo(v ProfileNameType) {
	o.MemberInfo = &v
}

// GetPhoneNumber returns the PhoneNumber field value if set, zero value otherwise.
func (o *MembershipAwardRecipientInfoType) GetPhoneNumber() string {
	if o == nil || IsNil(o.PhoneNumber) {
		var ret string
		return ret
	}
	return *o.PhoneNumber
}

// GetPhoneNumberOk returns a tuple with the PhoneNumber field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipAwardRecipientInfoType) GetPhoneNumberOk() (*string, bool) {
	if o == nil || IsNil(o.PhoneNumber) {
		return nil, false
	}
	return o.PhoneNumber, true
}

// HasPhoneNumber returns a boolean if a field has been set.
func (o *MembershipAwardRecipientInfoType) HasPhoneNumber() bool {
	if o != nil && !IsNil(o.PhoneNumber) {
		return true
	}

	return false
}

// SetPhoneNumber gets a reference to the given string and assigns it to the PhoneNumber field.
func (o *MembershipAwardRecipientInfoType) SetPhoneNumber(v string) {
	o.PhoneNumber = &v
}

func (o MembershipAwardRecipientInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o MembershipAwardRecipientInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AddressInfo) {
		toSerialize["addressInfo"] = o.AddressInfo
	}
	if !IsNil(o.CompanyName) {
		toSerialize["companyName"] = o.CompanyName
	}
	if !IsNil(o.MemberInfo) {
		toSerialize["memberInfo"] = o.MemberInfo
	}
	if !IsNil(o.PhoneNumber) {
		toSerialize["phoneNumber"] = o.PhoneNumber
	}
	return toSerialize, nil
}

type NullableMembershipAwardRecipientInfoType struct {
	value *MembershipAwardRecipientInfoType
	isSet bool
}

func (v NullableMembershipAwardRecipientInfoType) Get() *MembershipAwardRecipientInfoType {
	return v.value
}

func (v *NullableMembershipAwardRecipientInfoType) Set(val *MembershipAwardRecipientInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableMembershipAwardRecipientInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableMembershipAwardRecipientInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMembershipAwardRecipientInfoType(val *MembershipAwardRecipientInfoType) *NullableMembershipAwardRecipientInfoType {
	return &NullableMembershipAwardRecipientInfoType{value: val, isSet: true}
}

func (v NullableMembershipAwardRecipientInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMembershipAwardRecipientInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


