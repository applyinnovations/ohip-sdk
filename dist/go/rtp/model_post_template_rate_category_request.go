/*
OPERA Cloud Rate API

APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rtp

import (
	"encoding/json"
)

// checks if the PostTemplateRateCategoryRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PostTemplateRateCategoryRequest{}

// PostTemplateRateCategoryRequest struct for PostTemplateRateCategoryRequest
type PostTemplateRateCategoryRequest struct {
	Links []InstanceLink `json:"links,omitempty"`
	TemplateRateCategory *TemplateRateCategoryType `json:"templateRateCategory,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPostTemplateRateCategoryRequest instantiates a new PostTemplateRateCategoryRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPostTemplateRateCategoryRequest() *PostTemplateRateCategoryRequest {
	this := PostTemplateRateCategoryRequest{}
	return &this
}

// NewPostTemplateRateCategoryRequestWithDefaults instantiates a new PostTemplateRateCategoryRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPostTemplateRateCategoryRequestWithDefaults() *PostTemplateRateCategoryRequest {
	this := PostTemplateRateCategoryRequest{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PostTemplateRateCategoryRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostTemplateRateCategoryRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PostTemplateRateCategoryRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PostTemplateRateCategoryRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetTemplateRateCategory returns the TemplateRateCategory field value if set, zero value otherwise.
func (o *PostTemplateRateCategoryRequest) GetTemplateRateCategory() TemplateRateCategoryType {
	if o == nil || IsNil(o.TemplateRateCategory) {
		var ret TemplateRateCategoryType
		return ret
	}
	return *o.TemplateRateCategory
}

// GetTemplateRateCategoryOk returns a tuple with the TemplateRateCategory field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostTemplateRateCategoryRequest) GetTemplateRateCategoryOk() (*TemplateRateCategoryType, bool) {
	if o == nil || IsNil(o.TemplateRateCategory) {
		return nil, false
	}
	return o.TemplateRateCategory, true
}

// HasTemplateRateCategory returns a boolean if a field has been set.
func (o *PostTemplateRateCategoryRequest) HasTemplateRateCategory() bool {
	if o != nil && !IsNil(o.TemplateRateCategory) {
		return true
	}

	return false
}

// SetTemplateRateCategory gets a reference to the given TemplateRateCategoryType and assigns it to the TemplateRateCategory field.
func (o *PostTemplateRateCategoryRequest) SetTemplateRateCategory(v TemplateRateCategoryType) {
	o.TemplateRateCategory = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PostTemplateRateCategoryRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostTemplateRateCategoryRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PostTemplateRateCategoryRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PostTemplateRateCategoryRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PostTemplateRateCategoryRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PostTemplateRateCategoryRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.TemplateRateCategory) {
		toSerialize["templateRateCategory"] = o.TemplateRateCategory
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePostTemplateRateCategoryRequest struct {
	value *PostTemplateRateCategoryRequest
	isSet bool
}

func (v NullablePostTemplateRateCategoryRequest) Get() *PostTemplateRateCategoryRequest {
	return v.value
}

func (v *NullablePostTemplateRateCategoryRequest) Set(val *PostTemplateRateCategoryRequest) {
	v.value = val
	v.isSet = true
}

func (v NullablePostTemplateRateCategoryRequest) IsSet() bool {
	return v.isSet
}

func (v *NullablePostTemplateRateCategoryRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePostTemplateRateCategoryRequest(val *PostTemplateRateCategoryRequest) *NullablePostTemplateRateCategoryRequest {
	return &NullablePostTemplateRateCategoryRequest{value: val, isSet: true}
}

func (v NullablePostTemplateRateCategoryRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePostTemplateRateCategoryRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


