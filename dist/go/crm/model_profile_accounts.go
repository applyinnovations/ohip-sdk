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

// checks if the ProfileAccounts type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ProfileAccounts{}

// ProfileAccounts Response of profile accounts.
type ProfileAccounts struct {
	// Information regarding the AR Account.
	Accounts []ARAccountType `json:"accounts,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewProfileAccounts instantiates a new ProfileAccounts object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewProfileAccounts() *ProfileAccounts {
	this := ProfileAccounts{}
	return &this
}

// NewProfileAccountsWithDefaults instantiates a new ProfileAccounts object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewProfileAccountsWithDefaults() *ProfileAccounts {
	this := ProfileAccounts{}
	return &this
}

// GetAccounts returns the Accounts field value if set, zero value otherwise.
func (o *ProfileAccounts) GetAccounts() []ARAccountType {
	if o == nil || IsNil(o.Accounts) {
		var ret []ARAccountType
		return ret
	}
	return o.Accounts
}

// GetAccountsOk returns a tuple with the Accounts field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileAccounts) GetAccountsOk() ([]ARAccountType, bool) {
	if o == nil || IsNil(o.Accounts) {
		return nil, false
	}
	return o.Accounts, true
}

// HasAccounts returns a boolean if a field has been set.
func (o *ProfileAccounts) HasAccounts() bool {
	if o != nil && !IsNil(o.Accounts) {
		return true
	}

	return false
}

// SetAccounts gets a reference to the given []ARAccountType and assigns it to the Accounts field.
func (o *ProfileAccounts) SetAccounts(v []ARAccountType) {
	o.Accounts = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ProfileAccounts) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileAccounts) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ProfileAccounts) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ProfileAccounts) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ProfileAccounts) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileAccounts) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ProfileAccounts) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ProfileAccounts) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ProfileAccounts) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ProfileAccounts) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Accounts) {
		toSerialize["accounts"] = o.Accounts
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableProfileAccounts struct {
	value *ProfileAccounts
	isSet bool
}

func (v NullableProfileAccounts) Get() *ProfileAccounts {
	return v.value
}

func (v *NullableProfileAccounts) Set(val *ProfileAccounts) {
	v.value = val
	v.isSet = true
}

func (v NullableProfileAccounts) IsSet() bool {
	return v.isSet
}

func (v *NullableProfileAccounts) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableProfileAccounts(val *ProfileAccounts) *NullableProfileAccounts {
	return &NullableProfileAccounts{value: val, isSet: true}
}

func (v NullableProfileAccounts) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableProfileAccounts) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


