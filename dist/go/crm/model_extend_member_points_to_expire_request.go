/*
OPERA Cloud Customer Relationship Management API

APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crm

import (
	"encoding/json"
)

// checks if the ExtendMemberPointsToExpireRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ExtendMemberPointsToExpireRequest{}

// ExtendMemberPointsToExpireRequest struct for ExtendMemberPointsToExpireRequest
type ExtendMemberPointsToExpireRequest struct {
	// Expiration date to be extended.
	ExpirationDate *string `json:"expirationDate,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Unique Membership ID.
	MembershipId *float32 `json:"membershipId,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewExtendMemberPointsToExpireRequest instantiates a new ExtendMemberPointsToExpireRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewExtendMemberPointsToExpireRequest() *ExtendMemberPointsToExpireRequest {
	this := ExtendMemberPointsToExpireRequest{}
	return &this
}

// NewExtendMemberPointsToExpireRequestWithDefaults instantiates a new ExtendMemberPointsToExpireRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewExtendMemberPointsToExpireRequestWithDefaults() *ExtendMemberPointsToExpireRequest {
	this := ExtendMemberPointsToExpireRequest{}
	return &this
}

// GetExpirationDate returns the ExpirationDate field value if set, zero value otherwise.
func (o *ExtendMemberPointsToExpireRequest) GetExpirationDate() string {
	if o == nil || IsNil(o.ExpirationDate) {
		var ret string
		return ret
	}
	return *o.ExpirationDate
}

// GetExpirationDateOk returns a tuple with the ExpirationDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExtendMemberPointsToExpireRequest) GetExpirationDateOk() (*string, bool) {
	if o == nil || IsNil(o.ExpirationDate) {
		return nil, false
	}
	return o.ExpirationDate, true
}

// HasExpirationDate returns a boolean if a field has been set.
func (o *ExtendMemberPointsToExpireRequest) HasExpirationDate() bool {
	if o != nil && !IsNil(o.ExpirationDate) {
		return true
	}

	return false
}

// SetExpirationDate gets a reference to the given string and assigns it to the ExpirationDate field.
func (o *ExtendMemberPointsToExpireRequest) SetExpirationDate(v string) {
	o.ExpirationDate = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ExtendMemberPointsToExpireRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExtendMemberPointsToExpireRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ExtendMemberPointsToExpireRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ExtendMemberPointsToExpireRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetMembershipId returns the MembershipId field value if set, zero value otherwise.
func (o *ExtendMemberPointsToExpireRequest) GetMembershipId() float32 {
	if o == nil || IsNil(o.MembershipId) {
		var ret float32
		return ret
	}
	return *o.MembershipId
}

// GetMembershipIdOk returns a tuple with the MembershipId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExtendMemberPointsToExpireRequest) GetMembershipIdOk() (*float32, bool) {
	if o == nil || IsNil(o.MembershipId) {
		return nil, false
	}
	return o.MembershipId, true
}

// HasMembershipId returns a boolean if a field has been set.
func (o *ExtendMemberPointsToExpireRequest) HasMembershipId() bool {
	if o != nil && !IsNil(o.MembershipId) {
		return true
	}

	return false
}

// SetMembershipId gets a reference to the given float32 and assigns it to the MembershipId field.
func (o *ExtendMemberPointsToExpireRequest) SetMembershipId(v float32) {
	o.MembershipId = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ExtendMemberPointsToExpireRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExtendMemberPointsToExpireRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ExtendMemberPointsToExpireRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ExtendMemberPointsToExpireRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ExtendMemberPointsToExpireRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ExtendMemberPointsToExpireRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ExpirationDate) {
		toSerialize["expirationDate"] = o.ExpirationDate
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.MembershipId) {
		toSerialize["membershipId"] = o.MembershipId
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableExtendMemberPointsToExpireRequest struct {
	value *ExtendMemberPointsToExpireRequest
	isSet bool
}

func (v NullableExtendMemberPointsToExpireRequest) Get() *ExtendMemberPointsToExpireRequest {
	return v.value
}

func (v *NullableExtendMemberPointsToExpireRequest) Set(val *ExtendMemberPointsToExpireRequest) {
	v.value = val
	v.isSet = true
}

func (v NullableExtendMemberPointsToExpireRequest) IsSet() bool {
	return v.isSet
}

func (v *NullableExtendMemberPointsToExpireRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableExtendMemberPointsToExpireRequest(val *ExtendMemberPointsToExpireRequest) *NullableExtendMemberPointsToExpireRequest {
	return &NullableExtendMemberPointsToExpireRequest{value: val, isSet: true}
}

func (v NullableExtendMemberPointsToExpireRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableExtendMemberPointsToExpireRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


