/*
OPERA Cloud Integration Configuration API

APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package intcfg

import (
	"encoding/json"
)

// checks if the ChangedInterfaceAccount type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ChangedInterfaceAccount{}

// ChangedInterfaceAccount Existing Operations Responses will eventually be modified to be extended from this type.
type ChangedInterfaceAccount struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewChangedInterfaceAccount instantiates a new ChangedInterfaceAccount object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChangedInterfaceAccount() *ChangedInterfaceAccount {
	this := ChangedInterfaceAccount{}
	return &this
}

// NewChangedInterfaceAccountWithDefaults instantiates a new ChangedInterfaceAccount object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChangedInterfaceAccountWithDefaults() *ChangedInterfaceAccount {
	this := ChangedInterfaceAccount{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ChangedInterfaceAccount) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangedInterfaceAccount) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ChangedInterfaceAccount) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ChangedInterfaceAccount) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ChangedInterfaceAccount) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangedInterfaceAccount) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ChangedInterfaceAccount) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ChangedInterfaceAccount) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ChangedInterfaceAccount) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ChangedInterfaceAccount) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableChangedInterfaceAccount struct {
	value *ChangedInterfaceAccount
	isSet bool
}

func (v NullableChangedInterfaceAccount) Get() *ChangedInterfaceAccount {
	return v.value
}

func (v *NullableChangedInterfaceAccount) Set(val *ChangedInterfaceAccount) {
	v.value = val
	v.isSet = true
}

func (v NullableChangedInterfaceAccount) IsSet() bool {
	return v.isSet
}

func (v *NullableChangedInterfaceAccount) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChangedInterfaceAccount(val *ChangedInterfaceAccount) *NullableChangedInterfaceAccount {
	return &NullableChangedInterfaceAccount{value: val, isSet: true}
}

func (v NullableChangedInterfaceAccount) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChangedInterfaceAccount) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


