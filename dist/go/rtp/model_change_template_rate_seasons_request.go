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

// checks if the ChangeTemplateRateSeasonsRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ChangeTemplateRateSeasonsRequest{}

// ChangeTemplateRateSeasonsRequest struct for ChangeTemplateRateSeasonsRequest
type ChangeTemplateRateSeasonsRequest struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Hotel rate season details.
	TemplateRateSeasons []TemplateRateSeasonType `json:"templateRateSeasons,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewChangeTemplateRateSeasonsRequest instantiates a new ChangeTemplateRateSeasonsRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChangeTemplateRateSeasonsRequest() *ChangeTemplateRateSeasonsRequest {
	this := ChangeTemplateRateSeasonsRequest{}
	return &this
}

// NewChangeTemplateRateSeasonsRequestWithDefaults instantiates a new ChangeTemplateRateSeasonsRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChangeTemplateRateSeasonsRequestWithDefaults() *ChangeTemplateRateSeasonsRequest {
	this := ChangeTemplateRateSeasonsRequest{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ChangeTemplateRateSeasonsRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeTemplateRateSeasonsRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ChangeTemplateRateSeasonsRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ChangeTemplateRateSeasonsRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetTemplateRateSeasons returns the TemplateRateSeasons field value if set, zero value otherwise.
func (o *ChangeTemplateRateSeasonsRequest) GetTemplateRateSeasons() []TemplateRateSeasonType {
	if o == nil || IsNil(o.TemplateRateSeasons) {
		var ret []TemplateRateSeasonType
		return ret
	}
	return o.TemplateRateSeasons
}

// GetTemplateRateSeasonsOk returns a tuple with the TemplateRateSeasons field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeTemplateRateSeasonsRequest) GetTemplateRateSeasonsOk() ([]TemplateRateSeasonType, bool) {
	if o == nil || IsNil(o.TemplateRateSeasons) {
		return nil, false
	}
	return o.TemplateRateSeasons, true
}

// HasTemplateRateSeasons returns a boolean if a field has been set.
func (o *ChangeTemplateRateSeasonsRequest) HasTemplateRateSeasons() bool {
	if o != nil && !IsNil(o.TemplateRateSeasons) {
		return true
	}

	return false
}

// SetTemplateRateSeasons gets a reference to the given []TemplateRateSeasonType and assigns it to the TemplateRateSeasons field.
func (o *ChangeTemplateRateSeasonsRequest) SetTemplateRateSeasons(v []TemplateRateSeasonType) {
	o.TemplateRateSeasons = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ChangeTemplateRateSeasonsRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeTemplateRateSeasonsRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ChangeTemplateRateSeasonsRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ChangeTemplateRateSeasonsRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ChangeTemplateRateSeasonsRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ChangeTemplateRateSeasonsRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.TemplateRateSeasons) {
		toSerialize["templateRateSeasons"] = o.TemplateRateSeasons
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableChangeTemplateRateSeasonsRequest struct {
	value *ChangeTemplateRateSeasonsRequest
	isSet bool
}

func (v NullableChangeTemplateRateSeasonsRequest) Get() *ChangeTemplateRateSeasonsRequest {
	return v.value
}

func (v *NullableChangeTemplateRateSeasonsRequest) Set(val *ChangeTemplateRateSeasonsRequest) {
	v.value = val
	v.isSet = true
}

func (v NullableChangeTemplateRateSeasonsRequest) IsSet() bool {
	return v.isSet
}

func (v *NullableChangeTemplateRateSeasonsRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChangeTemplateRateSeasonsRequest(val *ChangeTemplateRateSeasonsRequest) *NullableChangeTemplateRateSeasonsRequest {
	return &NullableChangeTemplateRateSeasonsRequest{value: val, isSet: true}
}

func (v NullableChangeTemplateRateSeasonsRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChangeTemplateRateSeasonsRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


