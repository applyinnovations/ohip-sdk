/*
OPERA Cloud Enterprise Configuration API

APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package entcfg

import (
	"encoding/json"
)

// checks if the PostCountryGuestTypesRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PostCountryGuestTypesRequest{}

// PostCountryGuestTypesRequest struct for PostCountryGuestTypesRequest
type PostCountryGuestTypesRequest struct {
	// List of Philippines Country specific Guest Types.
	CountryGuestTypes []CountryGuestTypeType `json:"countryGuestTypes,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPostCountryGuestTypesRequest instantiates a new PostCountryGuestTypesRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPostCountryGuestTypesRequest() *PostCountryGuestTypesRequest {
	this := PostCountryGuestTypesRequest{}
	return &this
}

// NewPostCountryGuestTypesRequestWithDefaults instantiates a new PostCountryGuestTypesRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPostCountryGuestTypesRequestWithDefaults() *PostCountryGuestTypesRequest {
	this := PostCountryGuestTypesRequest{}
	return &this
}

// GetCountryGuestTypes returns the CountryGuestTypes field value if set, zero value otherwise.
func (o *PostCountryGuestTypesRequest) GetCountryGuestTypes() []CountryGuestTypeType {
	if o == nil || IsNil(o.CountryGuestTypes) {
		var ret []CountryGuestTypeType
		return ret
	}
	return o.CountryGuestTypes
}

// GetCountryGuestTypesOk returns a tuple with the CountryGuestTypes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostCountryGuestTypesRequest) GetCountryGuestTypesOk() ([]CountryGuestTypeType, bool) {
	if o == nil || IsNil(o.CountryGuestTypes) {
		return nil, false
	}
	return o.CountryGuestTypes, true
}

// HasCountryGuestTypes returns a boolean if a field has been set.
func (o *PostCountryGuestTypesRequest) HasCountryGuestTypes() bool {
	if o != nil && !IsNil(o.CountryGuestTypes) {
		return true
	}

	return false
}

// SetCountryGuestTypes gets a reference to the given []CountryGuestTypeType and assigns it to the CountryGuestTypes field.
func (o *PostCountryGuestTypesRequest) SetCountryGuestTypes(v []CountryGuestTypeType) {
	o.CountryGuestTypes = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PostCountryGuestTypesRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostCountryGuestTypesRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PostCountryGuestTypesRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PostCountryGuestTypesRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PostCountryGuestTypesRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostCountryGuestTypesRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PostCountryGuestTypesRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PostCountryGuestTypesRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PostCountryGuestTypesRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PostCountryGuestTypesRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CountryGuestTypes) {
		toSerialize["countryGuestTypes"] = o.CountryGuestTypes
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePostCountryGuestTypesRequest struct {
	value *PostCountryGuestTypesRequest
	isSet bool
}

func (v NullablePostCountryGuestTypesRequest) Get() *PostCountryGuestTypesRequest {
	return v.value
}

func (v *NullablePostCountryGuestTypesRequest) Set(val *PostCountryGuestTypesRequest) {
	v.value = val
	v.isSet = true
}

func (v NullablePostCountryGuestTypesRequest) IsSet() bool {
	return v.isSet
}

func (v *NullablePostCountryGuestTypesRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePostCountryGuestTypesRequest(val *PostCountryGuestTypesRequest) *NullablePostCountryGuestTypesRequest {
	return &NullablePostCountryGuestTypesRequest{value: val, isSet: true}
}

func (v NullablePostCountryGuestTypesRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePostCountryGuestTypesRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


