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

// checks if the PostCityPostalCodesRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PostCityPostalCodesRequest{}

// PostCityPostalCodesRequest struct for PostCityPostalCodesRequest
type PostCityPostalCodesRequest struct {
	// Lists of City and Postal Codes.
	CityPostalCodes []CityPostalCodeType `json:"cityPostalCodes,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPostCityPostalCodesRequest instantiates a new PostCityPostalCodesRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPostCityPostalCodesRequest() *PostCityPostalCodesRequest {
	this := PostCityPostalCodesRequest{}
	return &this
}

// NewPostCityPostalCodesRequestWithDefaults instantiates a new PostCityPostalCodesRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPostCityPostalCodesRequestWithDefaults() *PostCityPostalCodesRequest {
	this := PostCityPostalCodesRequest{}
	return &this
}

// GetCityPostalCodes returns the CityPostalCodes field value if set, zero value otherwise.
func (o *PostCityPostalCodesRequest) GetCityPostalCodes() []CityPostalCodeType {
	if o == nil || IsNil(o.CityPostalCodes) {
		var ret []CityPostalCodeType
		return ret
	}
	return o.CityPostalCodes
}

// GetCityPostalCodesOk returns a tuple with the CityPostalCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostCityPostalCodesRequest) GetCityPostalCodesOk() ([]CityPostalCodeType, bool) {
	if o == nil || IsNil(o.CityPostalCodes) {
		return nil, false
	}
	return o.CityPostalCodes, true
}

// HasCityPostalCodes returns a boolean if a field has been set.
func (o *PostCityPostalCodesRequest) HasCityPostalCodes() bool {
	if o != nil && !IsNil(o.CityPostalCodes) {
		return true
	}

	return false
}

// SetCityPostalCodes gets a reference to the given []CityPostalCodeType and assigns it to the CityPostalCodes field.
func (o *PostCityPostalCodesRequest) SetCityPostalCodes(v []CityPostalCodeType) {
	o.CityPostalCodes = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PostCityPostalCodesRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostCityPostalCodesRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PostCityPostalCodesRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PostCityPostalCodesRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PostCityPostalCodesRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostCityPostalCodesRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PostCityPostalCodesRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PostCityPostalCodesRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PostCityPostalCodesRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PostCityPostalCodesRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CityPostalCodes) {
		toSerialize["cityPostalCodes"] = o.CityPostalCodes
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePostCityPostalCodesRequest struct {
	value *PostCityPostalCodesRequest
	isSet bool
}

func (v NullablePostCityPostalCodesRequest) Get() *PostCityPostalCodesRequest {
	return v.value
}

func (v *NullablePostCityPostalCodesRequest) Set(val *PostCityPostalCodesRequest) {
	v.value = val
	v.isSet = true
}

func (v NullablePostCityPostalCodesRequest) IsSet() bool {
	return v.isSet
}

func (v *NullablePostCityPostalCodesRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePostCityPostalCodesRequest(val *PostCityPostalCodesRequest) *NullablePostCityPostalCodesRequest {
	return &NullablePostCityPostalCodesRequest{value: val, isSet: true}
}

func (v NullablePostCityPostalCodesRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePostCityPostalCodesRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


