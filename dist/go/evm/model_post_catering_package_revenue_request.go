/*
OPERA Cloud Sales Event Management API

APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evm

import (
	"encoding/json"
)

// checks if the PostCateringPackageRevenueRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PostCateringPackageRevenueRequest{}

// PostCateringPackageRevenueRequest struct for PostCateringPackageRevenueRequest
type PostCateringPackageRevenueRequest struct {
	CateringPackageRevenueDetails *BlockCateringPackageRevenueBaseType `json:"cateringPackageRevenueDetails,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success elementSpace to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPostCateringPackageRevenueRequest instantiates a new PostCateringPackageRevenueRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPostCateringPackageRevenueRequest() *PostCateringPackageRevenueRequest {
	this := PostCateringPackageRevenueRequest{}
	return &this
}

// NewPostCateringPackageRevenueRequestWithDefaults instantiates a new PostCateringPackageRevenueRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPostCateringPackageRevenueRequestWithDefaults() *PostCateringPackageRevenueRequest {
	this := PostCateringPackageRevenueRequest{}
	return &this
}

// GetCateringPackageRevenueDetails returns the CateringPackageRevenueDetails field value if set, zero value otherwise.
func (o *PostCateringPackageRevenueRequest) GetCateringPackageRevenueDetails() BlockCateringPackageRevenueBaseType {
	if o == nil || IsNil(o.CateringPackageRevenueDetails) {
		var ret BlockCateringPackageRevenueBaseType
		return ret
	}
	return *o.CateringPackageRevenueDetails
}

// GetCateringPackageRevenueDetailsOk returns a tuple with the CateringPackageRevenueDetails field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostCateringPackageRevenueRequest) GetCateringPackageRevenueDetailsOk() (*BlockCateringPackageRevenueBaseType, bool) {
	if o == nil || IsNil(o.CateringPackageRevenueDetails) {
		return nil, false
	}
	return o.CateringPackageRevenueDetails, true
}

// HasCateringPackageRevenueDetails returns a boolean if a field has been set.
func (o *PostCateringPackageRevenueRequest) HasCateringPackageRevenueDetails() bool {
	if o != nil && !IsNil(o.CateringPackageRevenueDetails) {
		return true
	}

	return false
}

// SetCateringPackageRevenueDetails gets a reference to the given BlockCateringPackageRevenueBaseType and assigns it to the CateringPackageRevenueDetails field.
func (o *PostCateringPackageRevenueRequest) SetCateringPackageRevenueDetails(v BlockCateringPackageRevenueBaseType) {
	o.CateringPackageRevenueDetails = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PostCateringPackageRevenueRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostCateringPackageRevenueRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PostCateringPackageRevenueRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PostCateringPackageRevenueRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PostCateringPackageRevenueRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostCateringPackageRevenueRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PostCateringPackageRevenueRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PostCateringPackageRevenueRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PostCateringPackageRevenueRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PostCateringPackageRevenueRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CateringPackageRevenueDetails) {
		toSerialize["cateringPackageRevenueDetails"] = o.CateringPackageRevenueDetails
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePostCateringPackageRevenueRequest struct {
	value *PostCateringPackageRevenueRequest
	isSet bool
}

func (v NullablePostCateringPackageRevenueRequest) Get() *PostCateringPackageRevenueRequest {
	return v.value
}

func (v *NullablePostCateringPackageRevenueRequest) Set(val *PostCateringPackageRevenueRequest) {
	v.value = val
	v.isSet = true
}

func (v NullablePostCateringPackageRevenueRequest) IsSet() bool {
	return v.isSet
}

func (v *NullablePostCateringPackageRevenueRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePostCateringPackageRevenueRequest(val *PostCateringPackageRevenueRequest) *NullablePostCateringPackageRevenueRequest {
	return &NullablePostCateringPackageRevenueRequest{value: val, isSet: true}
}

func (v NullablePostCateringPackageRevenueRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePostCateringPackageRevenueRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


