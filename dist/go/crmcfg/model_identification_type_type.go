/*
OPERA Cloud CRM Configuration API

APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crmcfg

import (
	"encoding/json"
)

// checks if the IdentificationTypeType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &IdentificationTypeType{}

// IdentificationTypeType Contains Common Master configuration detail.
type IdentificationTypeType struct {
	// Common Master unique code.
	Code *string `json:"code,omitempty"`
	Description *TranslationTextType2000 `json:"description,omitempty"`
	// Common Master record sequence number.
	DisplayOrder *float32 `json:"displayOrder,omitempty"`
	IdentificationRole *IdentificationRoleType `json:"identificationRole,omitempty"`
}

// NewIdentificationTypeType instantiates a new IdentificationTypeType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewIdentificationTypeType() *IdentificationTypeType {
	this := IdentificationTypeType{}
	return &this
}

// NewIdentificationTypeTypeWithDefaults instantiates a new IdentificationTypeType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewIdentificationTypeTypeWithDefaults() *IdentificationTypeType {
	this := IdentificationTypeType{}
	return &this
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *IdentificationTypeType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *IdentificationTypeType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *IdentificationTypeType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *IdentificationTypeType) SetCode(v string) {
	o.Code = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *IdentificationTypeType) GetDescription() TranslationTextType2000 {
	if o == nil || IsNil(o.Description) {
		var ret TranslationTextType2000
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *IdentificationTypeType) GetDescriptionOk() (*TranslationTextType2000, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *IdentificationTypeType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given TranslationTextType2000 and assigns it to the Description field.
func (o *IdentificationTypeType) SetDescription(v TranslationTextType2000) {
	o.Description = &v
}

// GetDisplayOrder returns the DisplayOrder field value if set, zero value otherwise.
func (o *IdentificationTypeType) GetDisplayOrder() float32 {
	if o == nil || IsNil(o.DisplayOrder) {
		var ret float32
		return ret
	}
	return *o.DisplayOrder
}

// GetDisplayOrderOk returns a tuple with the DisplayOrder field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *IdentificationTypeType) GetDisplayOrderOk() (*float32, bool) {
	if o == nil || IsNil(o.DisplayOrder) {
		return nil, false
	}
	return o.DisplayOrder, true
}

// HasDisplayOrder returns a boolean if a field has been set.
func (o *IdentificationTypeType) HasDisplayOrder() bool {
	if o != nil && !IsNil(o.DisplayOrder) {
		return true
	}

	return false
}

// SetDisplayOrder gets a reference to the given float32 and assigns it to the DisplayOrder field.
func (o *IdentificationTypeType) SetDisplayOrder(v float32) {
	o.DisplayOrder = &v
}

// GetIdentificationRole returns the IdentificationRole field value if set, zero value otherwise.
func (o *IdentificationTypeType) GetIdentificationRole() IdentificationRoleType {
	if o == nil || IsNil(o.IdentificationRole) {
		var ret IdentificationRoleType
		return ret
	}
	return *o.IdentificationRole
}

// GetIdentificationRoleOk returns a tuple with the IdentificationRole field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *IdentificationTypeType) GetIdentificationRoleOk() (*IdentificationRoleType, bool) {
	if o == nil || IsNil(o.IdentificationRole) {
		return nil, false
	}
	return o.IdentificationRole, true
}

// HasIdentificationRole returns a boolean if a field has been set.
func (o *IdentificationTypeType) HasIdentificationRole() bool {
	if o != nil && !IsNil(o.IdentificationRole) {
		return true
	}

	return false
}

// SetIdentificationRole gets a reference to the given IdentificationRoleType and assigns it to the IdentificationRole field.
func (o *IdentificationTypeType) SetIdentificationRole(v IdentificationRoleType) {
	o.IdentificationRole = &v
}

func (o IdentificationTypeType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o IdentificationTypeType) ToMap() (map[string]interface{}, error) {
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
	if !IsNil(o.IdentificationRole) {
		toSerialize["identificationRole"] = o.IdentificationRole
	}
	return toSerialize, nil
}

type NullableIdentificationTypeType struct {
	value *IdentificationTypeType
	isSet bool
}

func (v NullableIdentificationTypeType) Get() *IdentificationTypeType {
	return v.value
}

func (v *NullableIdentificationTypeType) Set(val *IdentificationTypeType) {
	v.value = val
	v.isSet = true
}

func (v NullableIdentificationTypeType) IsSet() bool {
	return v.isSet
}

func (v *NullableIdentificationTypeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableIdentificationTypeType(val *IdentificationTypeType) *NullableIdentificationTypeType {
	return &NullableIdentificationTypeType{value: val, isSet: true}
}

func (v NullableIdentificationTypeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableIdentificationTypeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


