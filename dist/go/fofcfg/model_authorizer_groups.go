/*
OPERA Cloud Front Desk Configuration API

APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fofcfg

import (
	"encoding/json"
)

// checks if the AuthorizerGroups type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AuthorizerGroups{}

// AuthorizerGroups struct for AuthorizerGroups
type AuthorizerGroups struct {
	// Authorizer Group
	AuthorizerGroups []AuthorizerGroupType `json:"authorizerGroups,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewAuthorizerGroups instantiates a new AuthorizerGroups object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAuthorizerGroups() *AuthorizerGroups {
	this := AuthorizerGroups{}
	return &this
}

// NewAuthorizerGroupsWithDefaults instantiates a new AuthorizerGroups object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAuthorizerGroupsWithDefaults() *AuthorizerGroups {
	this := AuthorizerGroups{}
	return &this
}

// GetAuthorizerGroups returns the AuthorizerGroups field value if set, zero value otherwise.
func (o *AuthorizerGroups) GetAuthorizerGroups() []AuthorizerGroupType {
	if o == nil || IsNil(o.AuthorizerGroups) {
		var ret []AuthorizerGroupType
		return ret
	}
	return o.AuthorizerGroups
}

// GetAuthorizerGroupsOk returns a tuple with the AuthorizerGroups field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AuthorizerGroups) GetAuthorizerGroupsOk() ([]AuthorizerGroupType, bool) {
	if o == nil || IsNil(o.AuthorizerGroups) {
		return nil, false
	}
	return o.AuthorizerGroups, true
}

// HasAuthorizerGroups returns a boolean if a field has been set.
func (o *AuthorizerGroups) HasAuthorizerGroups() bool {
	if o != nil && !IsNil(o.AuthorizerGroups) {
		return true
	}

	return false
}

// SetAuthorizerGroups gets a reference to the given []AuthorizerGroupType and assigns it to the AuthorizerGroups field.
func (o *AuthorizerGroups) SetAuthorizerGroups(v []AuthorizerGroupType) {
	o.AuthorizerGroups = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *AuthorizerGroups) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AuthorizerGroups) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *AuthorizerGroups) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *AuthorizerGroups) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *AuthorizerGroups) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AuthorizerGroups) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *AuthorizerGroups) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *AuthorizerGroups) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o AuthorizerGroups) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AuthorizerGroups) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AuthorizerGroups) {
		toSerialize["authorizerGroups"] = o.AuthorizerGroups
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableAuthorizerGroups struct {
	value *AuthorizerGroups
	isSet bool
}

func (v NullableAuthorizerGroups) Get() *AuthorizerGroups {
	return v.value
}

func (v *NullableAuthorizerGroups) Set(val *AuthorizerGroups) {
	v.value = val
	v.isSet = true
}

func (v NullableAuthorizerGroups) IsSet() bool {
	return v.isSet
}

func (v *NullableAuthorizerGroups) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAuthorizerGroups(val *AuthorizerGroups) *NullableAuthorizerGroups {
	return &NullableAuthorizerGroups{value: val, isSet: true}
}

func (v NullableAuthorizerGroups) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAuthorizerGroups) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

