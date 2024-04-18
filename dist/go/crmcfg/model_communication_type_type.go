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

// checks if the CommunicationTypeType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CommunicationTypeType{}

// CommunicationTypeType Communication Type details.
type CommunicationTypeType struct {
	Role *CommunicationRoleType `json:"role,omitempty"`
	// Communication Type description.
	Description *string `json:"description,omitempty"`
	// Communication Type SMS Text Message enabled.
	TextEnabled *bool `json:"textEnabled,omitempty"`
	// Communication Type sequence.
	Sequence *int32 `json:"sequence,omitempty"`
	// Unique Communication Type Code.
	Code *string `json:"code,omitempty"`
}

// NewCommunicationTypeType instantiates a new CommunicationTypeType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCommunicationTypeType() *CommunicationTypeType {
	this := CommunicationTypeType{}
	return &this
}

// NewCommunicationTypeTypeWithDefaults instantiates a new CommunicationTypeType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCommunicationTypeTypeWithDefaults() *CommunicationTypeType {
	this := CommunicationTypeType{}
	return &this
}

// GetRole returns the Role field value if set, zero value otherwise.
func (o *CommunicationTypeType) GetRole() CommunicationRoleType {
	if o == nil || IsNil(o.Role) {
		var ret CommunicationRoleType
		return ret
	}
	return *o.Role
}

// GetRoleOk returns a tuple with the Role field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CommunicationTypeType) GetRoleOk() (*CommunicationRoleType, bool) {
	if o == nil || IsNil(o.Role) {
		return nil, false
	}
	return o.Role, true
}

// HasRole returns a boolean if a field has been set.
func (o *CommunicationTypeType) HasRole() bool {
	if o != nil && !IsNil(o.Role) {
		return true
	}

	return false
}

// SetRole gets a reference to the given CommunicationRoleType and assigns it to the Role field.
func (o *CommunicationTypeType) SetRole(v CommunicationRoleType) {
	o.Role = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *CommunicationTypeType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CommunicationTypeType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *CommunicationTypeType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *CommunicationTypeType) SetDescription(v string) {
	o.Description = &v
}

// GetTextEnabled returns the TextEnabled field value if set, zero value otherwise.
func (o *CommunicationTypeType) GetTextEnabled() bool {
	if o == nil || IsNil(o.TextEnabled) {
		var ret bool
		return ret
	}
	return *o.TextEnabled
}

// GetTextEnabledOk returns a tuple with the TextEnabled field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CommunicationTypeType) GetTextEnabledOk() (*bool, bool) {
	if o == nil || IsNil(o.TextEnabled) {
		return nil, false
	}
	return o.TextEnabled, true
}

// HasTextEnabled returns a boolean if a field has been set.
func (o *CommunicationTypeType) HasTextEnabled() bool {
	if o != nil && !IsNil(o.TextEnabled) {
		return true
	}

	return false
}

// SetTextEnabled gets a reference to the given bool and assigns it to the TextEnabled field.
func (o *CommunicationTypeType) SetTextEnabled(v bool) {
	o.TextEnabled = &v
}

// GetSequence returns the Sequence field value if set, zero value otherwise.
func (o *CommunicationTypeType) GetSequence() int32 {
	if o == nil || IsNil(o.Sequence) {
		var ret int32
		return ret
	}
	return *o.Sequence
}

// GetSequenceOk returns a tuple with the Sequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CommunicationTypeType) GetSequenceOk() (*int32, bool) {
	if o == nil || IsNil(o.Sequence) {
		return nil, false
	}
	return o.Sequence, true
}

// HasSequence returns a boolean if a field has been set.
func (o *CommunicationTypeType) HasSequence() bool {
	if o != nil && !IsNil(o.Sequence) {
		return true
	}

	return false
}

// SetSequence gets a reference to the given int32 and assigns it to the Sequence field.
func (o *CommunicationTypeType) SetSequence(v int32) {
	o.Sequence = &v
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *CommunicationTypeType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CommunicationTypeType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *CommunicationTypeType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *CommunicationTypeType) SetCode(v string) {
	o.Code = &v
}

func (o CommunicationTypeType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CommunicationTypeType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Role) {
		toSerialize["role"] = o.Role
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.TextEnabled) {
		toSerialize["textEnabled"] = o.TextEnabled
	}
	if !IsNil(o.Sequence) {
		toSerialize["sequence"] = o.Sequence
	}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	return toSerialize, nil
}

type NullableCommunicationTypeType struct {
	value *CommunicationTypeType
	isSet bool
}

func (v NullableCommunicationTypeType) Get() *CommunicationTypeType {
	return v.value
}

func (v *NullableCommunicationTypeType) Set(val *CommunicationTypeType) {
	v.value = val
	v.isSet = true
}

func (v NullableCommunicationTypeType) IsSet() bool {
	return v.isSet
}

func (v *NullableCommunicationTypeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCommunicationTypeType(val *CommunicationTypeType) *NullableCommunicationTypeType {
	return &NullableCommunicationTypeType{value: val, isSet: true}
}

func (v NullableCommunicationTypeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCommunicationTypeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

