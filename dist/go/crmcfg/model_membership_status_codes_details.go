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

// checks if the MembershipStatusCodesDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &MembershipStatusCodesDetails{}

// MembershipStatusCodesDetails Response object for fetching Membership Status Codes.
type MembershipStatusCodesDetails struct {
	// List of Membership Status Codes.
	MembershipStatusCodes []MembershipStatusCodeType `json:"membershipStatusCodes,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewMembershipStatusCodesDetails instantiates a new MembershipStatusCodesDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMembershipStatusCodesDetails() *MembershipStatusCodesDetails {
	this := MembershipStatusCodesDetails{}
	return &this
}

// NewMembershipStatusCodesDetailsWithDefaults instantiates a new MembershipStatusCodesDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMembershipStatusCodesDetailsWithDefaults() *MembershipStatusCodesDetails {
	this := MembershipStatusCodesDetails{}
	return &this
}

// GetMembershipStatusCodes returns the MembershipStatusCodes field value if set, zero value otherwise.
func (o *MembershipStatusCodesDetails) GetMembershipStatusCodes() []MembershipStatusCodeType {
	if o == nil || IsNil(o.MembershipStatusCodes) {
		var ret []MembershipStatusCodeType
		return ret
	}
	return o.MembershipStatusCodes
}

// GetMembershipStatusCodesOk returns a tuple with the MembershipStatusCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipStatusCodesDetails) GetMembershipStatusCodesOk() ([]MembershipStatusCodeType, bool) {
	if o == nil || IsNil(o.MembershipStatusCodes) {
		return nil, false
	}
	return o.MembershipStatusCodes, true
}

// HasMembershipStatusCodes returns a boolean if a field has been set.
func (o *MembershipStatusCodesDetails) HasMembershipStatusCodes() bool {
	if o != nil && !IsNil(o.MembershipStatusCodes) {
		return true
	}

	return false
}

// SetMembershipStatusCodes gets a reference to the given []MembershipStatusCodeType and assigns it to the MembershipStatusCodes field.
func (o *MembershipStatusCodesDetails) SetMembershipStatusCodes(v []MembershipStatusCodeType) {
	o.MembershipStatusCodes = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *MembershipStatusCodesDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipStatusCodesDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *MembershipStatusCodesDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *MembershipStatusCodesDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *MembershipStatusCodesDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipStatusCodesDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *MembershipStatusCodesDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *MembershipStatusCodesDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o MembershipStatusCodesDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o MembershipStatusCodesDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.MembershipStatusCodes) {
		toSerialize["membershipStatusCodes"] = o.MembershipStatusCodes
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableMembershipStatusCodesDetails struct {
	value *MembershipStatusCodesDetails
	isSet bool
}

func (v NullableMembershipStatusCodesDetails) Get() *MembershipStatusCodesDetails {
	return v.value
}

func (v *NullableMembershipStatusCodesDetails) Set(val *MembershipStatusCodesDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableMembershipStatusCodesDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableMembershipStatusCodesDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMembershipStatusCodesDetails(val *MembershipStatusCodesDetails) *NullableMembershipStatusCodesDetails {
	return &NullableMembershipStatusCodesDetails{value: val, isSet: true}
}

func (v NullableMembershipStatusCodesDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMembershipStatusCodesDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

