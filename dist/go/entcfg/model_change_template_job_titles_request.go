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

// checks if the ChangeTemplateJobTitlesRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ChangeTemplateJobTitlesRequest{}

// ChangeTemplateJobTitlesRequest struct for ChangeTemplateJobTitlesRequest
type ChangeTemplateJobTitlesRequest struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Template job title details.
	TemplateJobTitles []TemplateJobTitleType `json:"templateJobTitles,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewChangeTemplateJobTitlesRequest instantiates a new ChangeTemplateJobTitlesRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChangeTemplateJobTitlesRequest() *ChangeTemplateJobTitlesRequest {
	this := ChangeTemplateJobTitlesRequest{}
	return &this
}

// NewChangeTemplateJobTitlesRequestWithDefaults instantiates a new ChangeTemplateJobTitlesRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChangeTemplateJobTitlesRequestWithDefaults() *ChangeTemplateJobTitlesRequest {
	this := ChangeTemplateJobTitlesRequest{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ChangeTemplateJobTitlesRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeTemplateJobTitlesRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ChangeTemplateJobTitlesRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ChangeTemplateJobTitlesRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetTemplateJobTitles returns the TemplateJobTitles field value if set, zero value otherwise.
func (o *ChangeTemplateJobTitlesRequest) GetTemplateJobTitles() []TemplateJobTitleType {
	if o == nil || IsNil(o.TemplateJobTitles) {
		var ret []TemplateJobTitleType
		return ret
	}
	return o.TemplateJobTitles
}

// GetTemplateJobTitlesOk returns a tuple with the TemplateJobTitles field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeTemplateJobTitlesRequest) GetTemplateJobTitlesOk() ([]TemplateJobTitleType, bool) {
	if o == nil || IsNil(o.TemplateJobTitles) {
		return nil, false
	}
	return o.TemplateJobTitles, true
}

// HasTemplateJobTitles returns a boolean if a field has been set.
func (o *ChangeTemplateJobTitlesRequest) HasTemplateJobTitles() bool {
	if o != nil && !IsNil(o.TemplateJobTitles) {
		return true
	}

	return false
}

// SetTemplateJobTitles gets a reference to the given []TemplateJobTitleType and assigns it to the TemplateJobTitles field.
func (o *ChangeTemplateJobTitlesRequest) SetTemplateJobTitles(v []TemplateJobTitleType) {
	o.TemplateJobTitles = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ChangeTemplateJobTitlesRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeTemplateJobTitlesRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ChangeTemplateJobTitlesRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ChangeTemplateJobTitlesRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ChangeTemplateJobTitlesRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ChangeTemplateJobTitlesRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.TemplateJobTitles) {
		toSerialize["templateJobTitles"] = o.TemplateJobTitles
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableChangeTemplateJobTitlesRequest struct {
	value *ChangeTemplateJobTitlesRequest
	isSet bool
}

func (v NullableChangeTemplateJobTitlesRequest) Get() *ChangeTemplateJobTitlesRequest {
	return v.value
}

func (v *NullableChangeTemplateJobTitlesRequest) Set(val *ChangeTemplateJobTitlesRequest) {
	v.value = val
	v.isSet = true
}

func (v NullableChangeTemplateJobTitlesRequest) IsSet() bool {
	return v.isSet
}

func (v *NullableChangeTemplateJobTitlesRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChangeTemplateJobTitlesRequest(val *ChangeTemplateJobTitlesRequest) *NullableChangeTemplateJobTitlesRequest {
	return &NullableChangeTemplateJobTitlesRequest{value: val, isSet: true}
}

func (v NullableChangeTemplateJobTitlesRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChangeTemplateJobTitlesRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


