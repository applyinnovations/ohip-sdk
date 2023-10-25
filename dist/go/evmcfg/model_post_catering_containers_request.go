/*
OPERA Cloud Event Configuration API

This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evmcfg

import (
	"encoding/json"
)

// checks if the PostCateringContainersRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PostCateringContainersRequest{}

// PostCateringContainersRequest struct for PostCateringContainersRequest
type PostCateringContainersRequest struct {
	// Catering Code details.
	Containers []CateringCodeType `json:"containers,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPostCateringContainersRequest instantiates a new PostCateringContainersRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPostCateringContainersRequest() *PostCateringContainersRequest {
	this := PostCateringContainersRequest{}
	return &this
}

// NewPostCateringContainersRequestWithDefaults instantiates a new PostCateringContainersRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPostCateringContainersRequestWithDefaults() *PostCateringContainersRequest {
	this := PostCateringContainersRequest{}
	return &this
}

// GetContainers returns the Containers field value if set, zero value otherwise.
func (o *PostCateringContainersRequest) GetContainers() []CateringCodeType {
	if o == nil || IsNil(o.Containers) {
		var ret []CateringCodeType
		return ret
	}
	return o.Containers
}

// GetContainersOk returns a tuple with the Containers field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostCateringContainersRequest) GetContainersOk() ([]CateringCodeType, bool) {
	if o == nil || IsNil(o.Containers) {
		return nil, false
	}
	return o.Containers, true
}

// HasContainers returns a boolean if a field has been set.
func (o *PostCateringContainersRequest) HasContainers() bool {
	if o != nil && !IsNil(o.Containers) {
		return true
	}

	return false
}

// SetContainers gets a reference to the given []CateringCodeType and assigns it to the Containers field.
func (o *PostCateringContainersRequest) SetContainers(v []CateringCodeType) {
	o.Containers = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PostCateringContainersRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostCateringContainersRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PostCateringContainersRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PostCateringContainersRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PostCateringContainersRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostCateringContainersRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PostCateringContainersRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PostCateringContainersRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PostCateringContainersRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PostCateringContainersRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Containers) {
		toSerialize["containers"] = o.Containers
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePostCateringContainersRequest struct {
	value *PostCateringContainersRequest
	isSet bool
}

func (v NullablePostCateringContainersRequest) Get() *PostCateringContainersRequest {
	return v.value
}

func (v *NullablePostCateringContainersRequest) Set(val *PostCateringContainersRequest) {
	v.value = val
	v.isSet = true
}

func (v NullablePostCateringContainersRequest) IsSet() bool {
	return v.isSet
}

func (v *NullablePostCateringContainersRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePostCateringContainersRequest(val *PostCateringContainersRequest) *NullablePostCateringContainersRequest {
	return &NullablePostCateringContainersRequest{value: val, isSet: true}
}

func (v NullablePostCateringContainersRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePostCateringContainersRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


