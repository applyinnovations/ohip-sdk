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

// checks if the ProfileNameValidationEditType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ProfileNameValidationEditType{}

// ProfileNameValidationEditType Provides information about the Profile Names.
type ProfileNameValidationEditType struct {
	Type *ProfileNameValidationTypeType `json:"type,omitempty"`
	// Name of the Profile.
	Name *string `json:"name,omitempty"`
	NewProfileName *ProfileNameValidationType `json:"newProfileName,omitempty"`
}

// NewProfileNameValidationEditType instantiates a new ProfileNameValidationEditType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewProfileNameValidationEditType() *ProfileNameValidationEditType {
	this := ProfileNameValidationEditType{}
	return &this
}

// NewProfileNameValidationEditTypeWithDefaults instantiates a new ProfileNameValidationEditType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewProfileNameValidationEditTypeWithDefaults() *ProfileNameValidationEditType {
	this := ProfileNameValidationEditType{}
	return &this
}

// GetType returns the Type field value if set, zero value otherwise.
func (o *ProfileNameValidationEditType) GetType() ProfileNameValidationTypeType {
	if o == nil || IsNil(o.Type) {
		var ret ProfileNameValidationTypeType
		return ret
	}
	return *o.Type
}

// GetTypeOk returns a tuple with the Type field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileNameValidationEditType) GetTypeOk() (*ProfileNameValidationTypeType, bool) {
	if o == nil || IsNil(o.Type) {
		return nil, false
	}
	return o.Type, true
}

// HasType returns a boolean if a field has been set.
func (o *ProfileNameValidationEditType) HasType() bool {
	if o != nil && !IsNil(o.Type) {
		return true
	}

	return false
}

// SetType gets a reference to the given ProfileNameValidationTypeType and assigns it to the Type field.
func (o *ProfileNameValidationEditType) SetType(v ProfileNameValidationTypeType) {
	o.Type = &v
}

// GetName returns the Name field value if set, zero value otherwise.
func (o *ProfileNameValidationEditType) GetName() string {
	if o == nil || IsNil(o.Name) {
		var ret string
		return ret
	}
	return *o.Name
}

// GetNameOk returns a tuple with the Name field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileNameValidationEditType) GetNameOk() (*string, bool) {
	if o == nil || IsNil(o.Name) {
		return nil, false
	}
	return o.Name, true
}

// HasName returns a boolean if a field has been set.
func (o *ProfileNameValidationEditType) HasName() bool {
	if o != nil && !IsNil(o.Name) {
		return true
	}

	return false
}

// SetName gets a reference to the given string and assigns it to the Name field.
func (o *ProfileNameValidationEditType) SetName(v string) {
	o.Name = &v
}

// GetNewProfileName returns the NewProfileName field value if set, zero value otherwise.
func (o *ProfileNameValidationEditType) GetNewProfileName() ProfileNameValidationType {
	if o == nil || IsNil(o.NewProfileName) {
		var ret ProfileNameValidationType
		return ret
	}
	return *o.NewProfileName
}

// GetNewProfileNameOk returns a tuple with the NewProfileName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileNameValidationEditType) GetNewProfileNameOk() (*ProfileNameValidationType, bool) {
	if o == nil || IsNil(o.NewProfileName) {
		return nil, false
	}
	return o.NewProfileName, true
}

// HasNewProfileName returns a boolean if a field has been set.
func (o *ProfileNameValidationEditType) HasNewProfileName() bool {
	if o != nil && !IsNil(o.NewProfileName) {
		return true
	}

	return false
}

// SetNewProfileName gets a reference to the given ProfileNameValidationType and assigns it to the NewProfileName field.
func (o *ProfileNameValidationEditType) SetNewProfileName(v ProfileNameValidationType) {
	o.NewProfileName = &v
}

func (o ProfileNameValidationEditType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ProfileNameValidationEditType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Type) {
		toSerialize["type"] = o.Type
	}
	if !IsNil(o.Name) {
		toSerialize["name"] = o.Name
	}
	if !IsNil(o.NewProfileName) {
		toSerialize["newProfileName"] = o.NewProfileName
	}
	return toSerialize, nil
}

type NullableProfileNameValidationEditType struct {
	value *ProfileNameValidationEditType
	isSet bool
}

func (v NullableProfileNameValidationEditType) Get() *ProfileNameValidationEditType {
	return v.value
}

func (v *NullableProfileNameValidationEditType) Set(val *ProfileNameValidationEditType) {
	v.value = val
	v.isSet = true
}

func (v NullableProfileNameValidationEditType) IsSet() bool {
	return v.isSet
}

func (v *NullableProfileNameValidationEditType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableProfileNameValidationEditType(val *ProfileNameValidationEditType) *NullableProfileNameValidationEditType {
	return &NullableProfileNameValidationEditType{value: val, isSet: true}
}

func (v NullableProfileNameValidationEditType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableProfileNameValidationEditType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


