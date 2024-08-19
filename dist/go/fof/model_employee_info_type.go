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

// checks if the EmployeeInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &EmployeeInfoType{}

// EmployeeInfoType struct for EmployeeInfoType
type EmployeeInfoType struct {
	AddressInfo *AddressInfoType `json:"addressInfo,omitempty"`
	// Indicates the date of birth as indicated in the document, in ISO 8601 prescribed format.
	BirthDate *string `json:"birthDate,omitempty"`
	// Indicates the date of birth as masked.
	BirthDateMasked *string `json:"birthDateMasked,omitempty"`
	Department *CodeDescriptionType `json:"department,omitempty"`
	EmailInfo *EmailInfoType `json:"emailInfo,omitempty"`
	// Identifies the profile gender code selected from Gender types List of values. Gender types LOV provides the values configured at gender configuration.
	Gender *string `json:"gender,omitempty"`
	PersonName *PersonNameType `json:"personName,omitempty"`
	PhoneInfo *TelephoneInfoType `json:"phoneInfo,omitempty"`
	ProfileId *UniqueIDType `json:"profileId,omitempty"`
}

// NewEmployeeInfoType instantiates a new EmployeeInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewEmployeeInfoType() *EmployeeInfoType {
	this := EmployeeInfoType{}
	return &this
}

// NewEmployeeInfoTypeWithDefaults instantiates a new EmployeeInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewEmployeeInfoTypeWithDefaults() *EmployeeInfoType {
	this := EmployeeInfoType{}
	return &this
}

// GetAddressInfo returns the AddressInfo field value if set, zero value otherwise.
func (o *EmployeeInfoType) GetAddressInfo() AddressInfoType {
	if o == nil || IsNil(o.AddressInfo) {
		var ret AddressInfoType
		return ret
	}
	return *o.AddressInfo
}

// GetAddressInfoOk returns a tuple with the AddressInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EmployeeInfoType) GetAddressInfoOk() (*AddressInfoType, bool) {
	if o == nil || IsNil(o.AddressInfo) {
		return nil, false
	}
	return o.AddressInfo, true
}

// HasAddressInfo returns a boolean if a field has been set.
func (o *EmployeeInfoType) HasAddressInfo() bool {
	if o != nil && !IsNil(o.AddressInfo) {
		return true
	}

	return false
}

// SetAddressInfo gets a reference to the given AddressInfoType and assigns it to the AddressInfo field.
func (o *EmployeeInfoType) SetAddressInfo(v AddressInfoType) {
	o.AddressInfo = &v
}

// GetBirthDate returns the BirthDate field value if set, zero value otherwise.
func (o *EmployeeInfoType) GetBirthDate() string {
	if o == nil || IsNil(o.BirthDate) {
		var ret string
		return ret
	}
	return *o.BirthDate
}

// GetBirthDateOk returns a tuple with the BirthDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EmployeeInfoType) GetBirthDateOk() (*string, bool) {
	if o == nil || IsNil(o.BirthDate) {
		return nil, false
	}
	return o.BirthDate, true
}

// HasBirthDate returns a boolean if a field has been set.
func (o *EmployeeInfoType) HasBirthDate() bool {
	if o != nil && !IsNil(o.BirthDate) {
		return true
	}

	return false
}

// SetBirthDate gets a reference to the given string and assigns it to the BirthDate field.
func (o *EmployeeInfoType) SetBirthDate(v string) {
	o.BirthDate = &v
}

// GetBirthDateMasked returns the BirthDateMasked field value if set, zero value otherwise.
func (o *EmployeeInfoType) GetBirthDateMasked() string {
	if o == nil || IsNil(o.BirthDateMasked) {
		var ret string
		return ret
	}
	return *o.BirthDateMasked
}

// GetBirthDateMaskedOk returns a tuple with the BirthDateMasked field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EmployeeInfoType) GetBirthDateMaskedOk() (*string, bool) {
	if o == nil || IsNil(o.BirthDateMasked) {
		return nil, false
	}
	return o.BirthDateMasked, true
}

// HasBirthDateMasked returns a boolean if a field has been set.
func (o *EmployeeInfoType) HasBirthDateMasked() bool {
	if o != nil && !IsNil(o.BirthDateMasked) {
		return true
	}

	return false
}

// SetBirthDateMasked gets a reference to the given string and assigns it to the BirthDateMasked field.
func (o *EmployeeInfoType) SetBirthDateMasked(v string) {
	o.BirthDateMasked = &v
}

// GetDepartment returns the Department field value if set, zero value otherwise.
func (o *EmployeeInfoType) GetDepartment() CodeDescriptionType {
	if o == nil || IsNil(o.Department) {
		var ret CodeDescriptionType
		return ret
	}
	return *o.Department
}

// GetDepartmentOk returns a tuple with the Department field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EmployeeInfoType) GetDepartmentOk() (*CodeDescriptionType, bool) {
	if o == nil || IsNil(o.Department) {
		return nil, false
	}
	return o.Department, true
}

// HasDepartment returns a boolean if a field has been set.
func (o *EmployeeInfoType) HasDepartment() bool {
	if o != nil && !IsNil(o.Department) {
		return true
	}

	return false
}

// SetDepartment gets a reference to the given CodeDescriptionType and assigns it to the Department field.
func (o *EmployeeInfoType) SetDepartment(v CodeDescriptionType) {
	o.Department = &v
}

// GetEmailInfo returns the EmailInfo field value if set, zero value otherwise.
func (o *EmployeeInfoType) GetEmailInfo() EmailInfoType {
	if o == nil || IsNil(o.EmailInfo) {
		var ret EmailInfoType
		return ret
	}
	return *o.EmailInfo
}

// GetEmailInfoOk returns a tuple with the EmailInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EmployeeInfoType) GetEmailInfoOk() (*EmailInfoType, bool) {
	if o == nil || IsNil(o.EmailInfo) {
		return nil, false
	}
	return o.EmailInfo, true
}

// HasEmailInfo returns a boolean if a field has been set.
func (o *EmployeeInfoType) HasEmailInfo() bool {
	if o != nil && !IsNil(o.EmailInfo) {
		return true
	}

	return false
}

// SetEmailInfo gets a reference to the given EmailInfoType and assigns it to the EmailInfo field.
func (o *EmployeeInfoType) SetEmailInfo(v EmailInfoType) {
	o.EmailInfo = &v
}

// GetGender returns the Gender field value if set, zero value otherwise.
func (o *EmployeeInfoType) GetGender() string {
	if o == nil || IsNil(o.Gender) {
		var ret string
		return ret
	}
	return *o.Gender
}

// GetGenderOk returns a tuple with the Gender field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EmployeeInfoType) GetGenderOk() (*string, bool) {
	if o == nil || IsNil(o.Gender) {
		return nil, false
	}
	return o.Gender, true
}

// HasGender returns a boolean if a field has been set.
func (o *EmployeeInfoType) HasGender() bool {
	if o != nil && !IsNil(o.Gender) {
		return true
	}

	return false
}

// SetGender gets a reference to the given string and assigns it to the Gender field.
func (o *EmployeeInfoType) SetGender(v string) {
	o.Gender = &v
}

// GetPersonName returns the PersonName field value if set, zero value otherwise.
func (o *EmployeeInfoType) GetPersonName() PersonNameType {
	if o == nil || IsNil(o.PersonName) {
		var ret PersonNameType
		return ret
	}
	return *o.PersonName
}

// GetPersonNameOk returns a tuple with the PersonName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EmployeeInfoType) GetPersonNameOk() (*PersonNameType, bool) {
	if o == nil || IsNil(o.PersonName) {
		return nil, false
	}
	return o.PersonName, true
}

// HasPersonName returns a boolean if a field has been set.
func (o *EmployeeInfoType) HasPersonName() bool {
	if o != nil && !IsNil(o.PersonName) {
		return true
	}

	return false
}

// SetPersonName gets a reference to the given PersonNameType and assigns it to the PersonName field.
func (o *EmployeeInfoType) SetPersonName(v PersonNameType) {
	o.PersonName = &v
}

// GetPhoneInfo returns the PhoneInfo field value if set, zero value otherwise.
func (o *EmployeeInfoType) GetPhoneInfo() TelephoneInfoType {
	if o == nil || IsNil(o.PhoneInfo) {
		var ret TelephoneInfoType
		return ret
	}
	return *o.PhoneInfo
}

// GetPhoneInfoOk returns a tuple with the PhoneInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EmployeeInfoType) GetPhoneInfoOk() (*TelephoneInfoType, bool) {
	if o == nil || IsNil(o.PhoneInfo) {
		return nil, false
	}
	return o.PhoneInfo, true
}

// HasPhoneInfo returns a boolean if a field has been set.
func (o *EmployeeInfoType) HasPhoneInfo() bool {
	if o != nil && !IsNil(o.PhoneInfo) {
		return true
	}

	return false
}

// SetPhoneInfo gets a reference to the given TelephoneInfoType and assigns it to the PhoneInfo field.
func (o *EmployeeInfoType) SetPhoneInfo(v TelephoneInfoType) {
	o.PhoneInfo = &v
}

// GetProfileId returns the ProfileId field value if set, zero value otherwise.
func (o *EmployeeInfoType) GetProfileId() UniqueIDType {
	if o == nil || IsNil(o.ProfileId) {
		var ret UniqueIDType
		return ret
	}
	return *o.ProfileId
}

// GetProfileIdOk returns a tuple with the ProfileId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EmployeeInfoType) GetProfileIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.ProfileId) {
		return nil, false
	}
	return o.ProfileId, true
}

// HasProfileId returns a boolean if a field has been set.
func (o *EmployeeInfoType) HasProfileId() bool {
	if o != nil && !IsNil(o.ProfileId) {
		return true
	}

	return false
}

// SetProfileId gets a reference to the given UniqueIDType and assigns it to the ProfileId field.
func (o *EmployeeInfoType) SetProfileId(v UniqueIDType) {
	o.ProfileId = &v
}

func (o EmployeeInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o EmployeeInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AddressInfo) {
		toSerialize["addressInfo"] = o.AddressInfo
	}
	if !IsNil(o.BirthDate) {
		toSerialize["birthDate"] = o.BirthDate
	}
	if !IsNil(o.BirthDateMasked) {
		toSerialize["birthDateMasked"] = o.BirthDateMasked
	}
	if !IsNil(o.Department) {
		toSerialize["department"] = o.Department
	}
	if !IsNil(o.EmailInfo) {
		toSerialize["emailInfo"] = o.EmailInfo
	}
	if !IsNil(o.Gender) {
		toSerialize["gender"] = o.Gender
	}
	if !IsNil(o.PersonName) {
		toSerialize["personName"] = o.PersonName
	}
	if !IsNil(o.PhoneInfo) {
		toSerialize["phoneInfo"] = o.PhoneInfo
	}
	if !IsNil(o.ProfileId) {
		toSerialize["profileId"] = o.ProfileId
	}
	return toSerialize, nil
}

type NullableEmployeeInfoType struct {
	value *EmployeeInfoType
	isSet bool
}

func (v NullableEmployeeInfoType) Get() *EmployeeInfoType {
	return v.value
}

func (v *NullableEmployeeInfoType) Set(val *EmployeeInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableEmployeeInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableEmployeeInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableEmployeeInfoType(val *EmployeeInfoType) *NullableEmployeeInfoType {
	return &NullableEmployeeInfoType{value: val, isSet: true}
}

func (v NullableEmployeeInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableEmployeeInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


