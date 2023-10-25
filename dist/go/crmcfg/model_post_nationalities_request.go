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

// checks if the PostNationalitiesRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PostNationalitiesRequest{}

// PostNationalitiesRequest struct for PostNationalitiesRequest
type PostNationalitiesRequest struct {
	Links []InstanceLink `json:"links,omitempty"`
	// List of Nationalities.
	Nationalities []NationalityType `json:"nationalities,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPostNationalitiesRequest instantiates a new PostNationalitiesRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPostNationalitiesRequest() *PostNationalitiesRequest {
	this := PostNationalitiesRequest{}
	return &this
}

// NewPostNationalitiesRequestWithDefaults instantiates a new PostNationalitiesRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPostNationalitiesRequestWithDefaults() *PostNationalitiesRequest {
	this := PostNationalitiesRequest{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PostNationalitiesRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostNationalitiesRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PostNationalitiesRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PostNationalitiesRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetNationalities returns the Nationalities field value if set, zero value otherwise.
func (o *PostNationalitiesRequest) GetNationalities() []NationalityType {
	if o == nil || IsNil(o.Nationalities) {
		var ret []NationalityType
		return ret
	}
	return o.Nationalities
}

// GetNationalitiesOk returns a tuple with the Nationalities field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostNationalitiesRequest) GetNationalitiesOk() ([]NationalityType, bool) {
	if o == nil || IsNil(o.Nationalities) {
		return nil, false
	}
	return o.Nationalities, true
}

// HasNationalities returns a boolean if a field has been set.
func (o *PostNationalitiesRequest) HasNationalities() bool {
	if o != nil && !IsNil(o.Nationalities) {
		return true
	}

	return false
}

// SetNationalities gets a reference to the given []NationalityType and assigns it to the Nationalities field.
func (o *PostNationalitiesRequest) SetNationalities(v []NationalityType) {
	o.Nationalities = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PostNationalitiesRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostNationalitiesRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PostNationalitiesRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PostNationalitiesRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PostNationalitiesRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PostNationalitiesRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Nationalities) {
		toSerialize["nationalities"] = o.Nationalities
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePostNationalitiesRequest struct {
	value *PostNationalitiesRequest
	isSet bool
}

func (v NullablePostNationalitiesRequest) Get() *PostNationalitiesRequest {
	return v.value
}

func (v *NullablePostNationalitiesRequest) Set(val *PostNationalitiesRequest) {
	v.value = val
	v.isSet = true
}

func (v NullablePostNationalitiesRequest) IsSet() bool {
	return v.isSet
}

func (v *NullablePostNationalitiesRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePostNationalitiesRequest(val *PostNationalitiesRequest) *NullablePostNationalitiesRequest {
	return &NullablePostNationalitiesRequest{value: val, isSet: true}
}

func (v NullablePostNationalitiesRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePostNationalitiesRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


