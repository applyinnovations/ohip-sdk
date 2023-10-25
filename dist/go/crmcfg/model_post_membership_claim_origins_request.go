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

// checks if the PostMembershipClaimOriginsRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PostMembershipClaimOriginsRequest{}

// PostMembershipClaimOriginsRequest struct for PostMembershipClaimOriginsRequest
type PostMembershipClaimOriginsRequest struct {
	Links []InstanceLink `json:"links,omitempty"`
	// List of Membership Claim Origins.
	MembershipClaimOrigins []MembershipClaimOriginType `json:"membershipClaimOrigins,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPostMembershipClaimOriginsRequest instantiates a new PostMembershipClaimOriginsRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPostMembershipClaimOriginsRequest() *PostMembershipClaimOriginsRequest {
	this := PostMembershipClaimOriginsRequest{}
	return &this
}

// NewPostMembershipClaimOriginsRequestWithDefaults instantiates a new PostMembershipClaimOriginsRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPostMembershipClaimOriginsRequestWithDefaults() *PostMembershipClaimOriginsRequest {
	this := PostMembershipClaimOriginsRequest{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PostMembershipClaimOriginsRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostMembershipClaimOriginsRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PostMembershipClaimOriginsRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PostMembershipClaimOriginsRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetMembershipClaimOrigins returns the MembershipClaimOrigins field value if set, zero value otherwise.
func (o *PostMembershipClaimOriginsRequest) GetMembershipClaimOrigins() []MembershipClaimOriginType {
	if o == nil || IsNil(o.MembershipClaimOrigins) {
		var ret []MembershipClaimOriginType
		return ret
	}
	return o.MembershipClaimOrigins
}

// GetMembershipClaimOriginsOk returns a tuple with the MembershipClaimOrigins field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostMembershipClaimOriginsRequest) GetMembershipClaimOriginsOk() ([]MembershipClaimOriginType, bool) {
	if o == nil || IsNil(o.MembershipClaimOrigins) {
		return nil, false
	}
	return o.MembershipClaimOrigins, true
}

// HasMembershipClaimOrigins returns a boolean if a field has been set.
func (o *PostMembershipClaimOriginsRequest) HasMembershipClaimOrigins() bool {
	if o != nil && !IsNil(o.MembershipClaimOrigins) {
		return true
	}

	return false
}

// SetMembershipClaimOrigins gets a reference to the given []MembershipClaimOriginType and assigns it to the MembershipClaimOrigins field.
func (o *PostMembershipClaimOriginsRequest) SetMembershipClaimOrigins(v []MembershipClaimOriginType) {
	o.MembershipClaimOrigins = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PostMembershipClaimOriginsRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostMembershipClaimOriginsRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PostMembershipClaimOriginsRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PostMembershipClaimOriginsRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PostMembershipClaimOriginsRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PostMembershipClaimOriginsRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.MembershipClaimOrigins) {
		toSerialize["membershipClaimOrigins"] = o.MembershipClaimOrigins
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePostMembershipClaimOriginsRequest struct {
	value *PostMembershipClaimOriginsRequest
	isSet bool
}

func (v NullablePostMembershipClaimOriginsRequest) Get() *PostMembershipClaimOriginsRequest {
	return v.value
}

func (v *NullablePostMembershipClaimOriginsRequest) Set(val *PostMembershipClaimOriginsRequest) {
	v.value = val
	v.isSet = true
}

func (v NullablePostMembershipClaimOriginsRequest) IsSet() bool {
	return v.isSet
}

func (v *NullablePostMembershipClaimOriginsRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePostMembershipClaimOriginsRequest(val *PostMembershipClaimOriginsRequest) *NullablePostMembershipClaimOriginsRequest {
	return &NullablePostMembershipClaimOriginsRequest{value: val, isSet: true}
}

func (v NullablePostMembershipClaimOriginsRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePostMembershipClaimOriginsRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


