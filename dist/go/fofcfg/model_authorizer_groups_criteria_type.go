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

// checks if the AuthorizerGroupsCriteriaType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AuthorizerGroupsCriteriaType{}

// AuthorizerGroupsCriteriaType Criteria to change authorizer group.
type AuthorizerGroupsCriteriaType struct {
	// Authorizer Group
	AuthorizerGroups []AuthorizerGroupType `json:"authorizerGroups,omitempty"`
	// If true, updates all authorizers in the group.
	UpdateAuthorizers *bool `json:"updateAuthorizers,omitempty"`
}

// NewAuthorizerGroupsCriteriaType instantiates a new AuthorizerGroupsCriteriaType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAuthorizerGroupsCriteriaType() *AuthorizerGroupsCriteriaType {
	this := AuthorizerGroupsCriteriaType{}
	return &this
}

// NewAuthorizerGroupsCriteriaTypeWithDefaults instantiates a new AuthorizerGroupsCriteriaType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAuthorizerGroupsCriteriaTypeWithDefaults() *AuthorizerGroupsCriteriaType {
	this := AuthorizerGroupsCriteriaType{}
	return &this
}

// GetAuthorizerGroups returns the AuthorizerGroups field value if set, zero value otherwise.
func (o *AuthorizerGroupsCriteriaType) GetAuthorizerGroups() []AuthorizerGroupType {
	if o == nil || IsNil(o.AuthorizerGroups) {
		var ret []AuthorizerGroupType
		return ret
	}
	return o.AuthorizerGroups
}

// GetAuthorizerGroupsOk returns a tuple with the AuthorizerGroups field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AuthorizerGroupsCriteriaType) GetAuthorizerGroupsOk() ([]AuthorizerGroupType, bool) {
	if o == nil || IsNil(o.AuthorizerGroups) {
		return nil, false
	}
	return o.AuthorizerGroups, true
}

// HasAuthorizerGroups returns a boolean if a field has been set.
func (o *AuthorizerGroupsCriteriaType) HasAuthorizerGroups() bool {
	if o != nil && !IsNil(o.AuthorizerGroups) {
		return true
	}

	return false
}

// SetAuthorizerGroups gets a reference to the given []AuthorizerGroupType and assigns it to the AuthorizerGroups field.
func (o *AuthorizerGroupsCriteriaType) SetAuthorizerGroups(v []AuthorizerGroupType) {
	o.AuthorizerGroups = v
}

// GetUpdateAuthorizers returns the UpdateAuthorizers field value if set, zero value otherwise.
func (o *AuthorizerGroupsCriteriaType) GetUpdateAuthorizers() bool {
	if o == nil || IsNil(o.UpdateAuthorizers) {
		var ret bool
		return ret
	}
	return *o.UpdateAuthorizers
}

// GetUpdateAuthorizersOk returns a tuple with the UpdateAuthorizers field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AuthorizerGroupsCriteriaType) GetUpdateAuthorizersOk() (*bool, bool) {
	if o == nil || IsNil(o.UpdateAuthorizers) {
		return nil, false
	}
	return o.UpdateAuthorizers, true
}

// HasUpdateAuthorizers returns a boolean if a field has been set.
func (o *AuthorizerGroupsCriteriaType) HasUpdateAuthorizers() bool {
	if o != nil && !IsNil(o.UpdateAuthorizers) {
		return true
	}

	return false
}

// SetUpdateAuthorizers gets a reference to the given bool and assigns it to the UpdateAuthorizers field.
func (o *AuthorizerGroupsCriteriaType) SetUpdateAuthorizers(v bool) {
	o.UpdateAuthorizers = &v
}

func (o AuthorizerGroupsCriteriaType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AuthorizerGroupsCriteriaType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AuthorizerGroups) {
		toSerialize["authorizerGroups"] = o.AuthorizerGroups
	}
	if !IsNil(o.UpdateAuthorizers) {
		toSerialize["updateAuthorizers"] = o.UpdateAuthorizers
	}
	return toSerialize, nil
}

type NullableAuthorizerGroupsCriteriaType struct {
	value *AuthorizerGroupsCriteriaType
	isSet bool
}

func (v NullableAuthorizerGroupsCriteriaType) Get() *AuthorizerGroupsCriteriaType {
	return v.value
}

func (v *NullableAuthorizerGroupsCriteriaType) Set(val *AuthorizerGroupsCriteriaType) {
	v.value = val
	v.isSet = true
}

func (v NullableAuthorizerGroupsCriteriaType) IsSet() bool {
	return v.isSet
}

func (v *NullableAuthorizerGroupsCriteriaType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAuthorizerGroupsCriteriaType(val *AuthorizerGroupsCriteriaType) *NullableAuthorizerGroupsCriteriaType {
	return &NullableAuthorizerGroupsCriteriaType{value: val, isSet: true}
}

func (v NullableAuthorizerGroupsCriteriaType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAuthorizerGroupsCriteriaType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

