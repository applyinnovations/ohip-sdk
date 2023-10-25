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

// checks if the ChangeMembershipStatusCodesRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ChangeMembershipStatusCodesRequest{}

// ChangeMembershipStatusCodesRequest struct for ChangeMembershipStatusCodesRequest
type ChangeMembershipStatusCodesRequest struct {
	Links []InstanceLink `json:"links,omitempty"`
	// List of Membership Status Codes.
	MembershipStatusCodes []MembershipStatusCodeType `json:"membershipStatusCodes,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewChangeMembershipStatusCodesRequest instantiates a new ChangeMembershipStatusCodesRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChangeMembershipStatusCodesRequest() *ChangeMembershipStatusCodesRequest {
	this := ChangeMembershipStatusCodesRequest{}
	return &this
}

// NewChangeMembershipStatusCodesRequestWithDefaults instantiates a new ChangeMembershipStatusCodesRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChangeMembershipStatusCodesRequestWithDefaults() *ChangeMembershipStatusCodesRequest {
	this := ChangeMembershipStatusCodesRequest{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ChangeMembershipStatusCodesRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeMembershipStatusCodesRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ChangeMembershipStatusCodesRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ChangeMembershipStatusCodesRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetMembershipStatusCodes returns the MembershipStatusCodes field value if set, zero value otherwise.
func (o *ChangeMembershipStatusCodesRequest) GetMembershipStatusCodes() []MembershipStatusCodeType {
	if o == nil || IsNil(o.MembershipStatusCodes) {
		var ret []MembershipStatusCodeType
		return ret
	}
	return o.MembershipStatusCodes
}

// GetMembershipStatusCodesOk returns a tuple with the MembershipStatusCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeMembershipStatusCodesRequest) GetMembershipStatusCodesOk() ([]MembershipStatusCodeType, bool) {
	if o == nil || IsNil(o.MembershipStatusCodes) {
		return nil, false
	}
	return o.MembershipStatusCodes, true
}

// HasMembershipStatusCodes returns a boolean if a field has been set.
func (o *ChangeMembershipStatusCodesRequest) HasMembershipStatusCodes() bool {
	if o != nil && !IsNil(o.MembershipStatusCodes) {
		return true
	}

	return false
}

// SetMembershipStatusCodes gets a reference to the given []MembershipStatusCodeType and assigns it to the MembershipStatusCodes field.
func (o *ChangeMembershipStatusCodesRequest) SetMembershipStatusCodes(v []MembershipStatusCodeType) {
	o.MembershipStatusCodes = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ChangeMembershipStatusCodesRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeMembershipStatusCodesRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ChangeMembershipStatusCodesRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ChangeMembershipStatusCodesRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ChangeMembershipStatusCodesRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ChangeMembershipStatusCodesRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.MembershipStatusCodes) {
		toSerialize["membershipStatusCodes"] = o.MembershipStatusCodes
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableChangeMembershipStatusCodesRequest struct {
	value *ChangeMembershipStatusCodesRequest
	isSet bool
}

func (v NullableChangeMembershipStatusCodesRequest) Get() *ChangeMembershipStatusCodesRequest {
	return v.value
}

func (v *NullableChangeMembershipStatusCodesRequest) Set(val *ChangeMembershipStatusCodesRequest) {
	v.value = val
	v.isSet = true
}

func (v NullableChangeMembershipStatusCodesRequest) IsSet() bool {
	return v.isSet
}

func (v *NullableChangeMembershipStatusCodesRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChangeMembershipStatusCodesRequest(val *ChangeMembershipStatusCodesRequest) *NullableChangeMembershipStatusCodesRequest {
	return &NullableChangeMembershipStatusCodesRequest{value: val, isSet: true}
}

func (v NullableChangeMembershipStatusCodesRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChangeMembershipStatusCodesRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


