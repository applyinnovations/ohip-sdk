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

// checks if the TemplateRateSeasonsDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TemplateRateSeasonsDetails{}

// TemplateRateSeasonsDetails Response object for fetching template rate seasons.
type TemplateRateSeasonsDetails struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Hotel rate season details.
	TemplateRateSeasons []TemplateRateSeasonType `json:"templateRateSeasons,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewTemplateRateSeasonsDetails instantiates a new TemplateRateSeasonsDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTemplateRateSeasonsDetails() *TemplateRateSeasonsDetails {
	this := TemplateRateSeasonsDetails{}
	return &this
}

// NewTemplateRateSeasonsDetailsWithDefaults instantiates a new TemplateRateSeasonsDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTemplateRateSeasonsDetailsWithDefaults() *TemplateRateSeasonsDetails {
	this := TemplateRateSeasonsDetails{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *TemplateRateSeasonsDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateRateSeasonsDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *TemplateRateSeasonsDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *TemplateRateSeasonsDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetTemplateRateSeasons returns the TemplateRateSeasons field value if set, zero value otherwise.
func (o *TemplateRateSeasonsDetails) GetTemplateRateSeasons() []TemplateRateSeasonType {
	if o == nil || IsNil(o.TemplateRateSeasons) {
		var ret []TemplateRateSeasonType
		return ret
	}
	return o.TemplateRateSeasons
}

// GetTemplateRateSeasonsOk returns a tuple with the TemplateRateSeasons field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateRateSeasonsDetails) GetTemplateRateSeasonsOk() ([]TemplateRateSeasonType, bool) {
	if o == nil || IsNil(o.TemplateRateSeasons) {
		return nil, false
	}
	return o.TemplateRateSeasons, true
}

// HasTemplateRateSeasons returns a boolean if a field has been set.
func (o *TemplateRateSeasonsDetails) HasTemplateRateSeasons() bool {
	if o != nil && !IsNil(o.TemplateRateSeasons) {
		return true
	}

	return false
}

// SetTemplateRateSeasons gets a reference to the given []TemplateRateSeasonType and assigns it to the TemplateRateSeasons field.
func (o *TemplateRateSeasonsDetails) SetTemplateRateSeasons(v []TemplateRateSeasonType) {
	o.TemplateRateSeasons = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *TemplateRateSeasonsDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateRateSeasonsDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *TemplateRateSeasonsDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *TemplateRateSeasonsDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o TemplateRateSeasonsDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TemplateRateSeasonsDetails) ToMap() (map[string]interface{}, error) {
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

type NullableTemplateRateSeasonsDetails struct {
	value *TemplateRateSeasonsDetails
	isSet bool
}

func (v NullableTemplateRateSeasonsDetails) Get() *TemplateRateSeasonsDetails {
	return v.value
}

func (v *NullableTemplateRateSeasonsDetails) Set(val *TemplateRateSeasonsDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableTemplateRateSeasonsDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableTemplateRateSeasonsDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTemplateRateSeasonsDetails(val *TemplateRateSeasonsDetails) *NullableTemplateRateSeasonsDetails {
	return &NullableTemplateRateSeasonsDetails{value: val, isSet: true}
}

func (v NullableTemplateRateSeasonsDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTemplateRateSeasonsDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


