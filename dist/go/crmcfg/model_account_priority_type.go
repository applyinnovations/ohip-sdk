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

// checks if the AccountPriorityType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AccountPriorityType{}

// AccountPriorityType Contains Common Master configuration detail.
type AccountPriorityType struct {
	// Common Master unique code.
	Code *string `json:"code,omitempty"`
	Description *TranslationTextType2000 `json:"description,omitempty"`
	// Common Master record sequence number.
	DisplayOrder *float32 `json:"displayOrder,omitempty"`
	// Determines whether this code is inactive or not.
	Inactive *bool `json:"inactive,omitempty"`
}

// NewAccountPriorityType instantiates a new AccountPriorityType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAccountPriorityType() *AccountPriorityType {
	this := AccountPriorityType{}
	return &this
}

// NewAccountPriorityTypeWithDefaults instantiates a new AccountPriorityType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAccountPriorityTypeWithDefaults() *AccountPriorityType {
	this := AccountPriorityType{}
	return &this
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *AccountPriorityType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AccountPriorityType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *AccountPriorityType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *AccountPriorityType) SetCode(v string) {
	o.Code = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *AccountPriorityType) GetDescription() TranslationTextType2000 {
	if o == nil || IsNil(o.Description) {
		var ret TranslationTextType2000
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AccountPriorityType) GetDescriptionOk() (*TranslationTextType2000, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *AccountPriorityType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given TranslationTextType2000 and assigns it to the Description field.
func (o *AccountPriorityType) SetDescription(v TranslationTextType2000) {
	o.Description = &v
}

// GetDisplayOrder returns the DisplayOrder field value if set, zero value otherwise.
func (o *AccountPriorityType) GetDisplayOrder() float32 {
	if o == nil || IsNil(o.DisplayOrder) {
		var ret float32
		return ret
	}
	return *o.DisplayOrder
}

// GetDisplayOrderOk returns a tuple with the DisplayOrder field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AccountPriorityType) GetDisplayOrderOk() (*float32, bool) {
	if o == nil || IsNil(o.DisplayOrder) {
		return nil, false
	}
	return o.DisplayOrder, true
}

// HasDisplayOrder returns a boolean if a field has been set.
func (o *AccountPriorityType) HasDisplayOrder() bool {
	if o != nil && !IsNil(o.DisplayOrder) {
		return true
	}

	return false
}

// SetDisplayOrder gets a reference to the given float32 and assigns it to the DisplayOrder field.
func (o *AccountPriorityType) SetDisplayOrder(v float32) {
	o.DisplayOrder = &v
}

// GetInactive returns the Inactive field value if set, zero value otherwise.
func (o *AccountPriorityType) GetInactive() bool {
	if o == nil || IsNil(o.Inactive) {
		var ret bool
		return ret
	}
	return *o.Inactive
}

// GetInactiveOk returns a tuple with the Inactive field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AccountPriorityType) GetInactiveOk() (*bool, bool) {
	if o == nil || IsNil(o.Inactive) {
		return nil, false
	}
	return o.Inactive, true
}

// HasInactive returns a boolean if a field has been set.
func (o *AccountPriorityType) HasInactive() bool {
	if o != nil && !IsNil(o.Inactive) {
		return true
	}

	return false
}

// SetInactive gets a reference to the given bool and assigns it to the Inactive field.
func (o *AccountPriorityType) SetInactive(v bool) {
	o.Inactive = &v
}

func (o AccountPriorityType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AccountPriorityType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.DisplayOrder) {
		toSerialize["displayOrder"] = o.DisplayOrder
	}
	if !IsNil(o.Inactive) {
		toSerialize["inactive"] = o.Inactive
	}
	return toSerialize, nil
}

type NullableAccountPriorityType struct {
	value *AccountPriorityType
	isSet bool
}

func (v NullableAccountPriorityType) Get() *AccountPriorityType {
	return v.value
}

func (v *NullableAccountPriorityType) Set(val *AccountPriorityType) {
	v.value = val
	v.isSet = true
}

func (v NullableAccountPriorityType) IsSet() bool {
	return v.isSet
}

func (v *NullableAccountPriorityType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAccountPriorityType(val *AccountPriorityType) *NullableAccountPriorityType {
	return &NullableAccountPriorityType{value: val, isSet: true}
}

func (v NullableAccountPriorityType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAccountPriorityType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


