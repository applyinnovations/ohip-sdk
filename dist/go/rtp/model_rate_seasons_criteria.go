/*
OPERA Cloud Rate API

APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rtp

import (
	"encoding/json"
)

// checks if the RateSeasonsCriteria type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RateSeasonsCriteria{}

// RateSeasonsCriteria Request object for creating new rate seasons for a hotel.
type RateSeasonsCriteria struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Hotel rate season details.
	RateSeasons []RateSeasonType `json:"rateSeasons,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewRateSeasonsCriteria instantiates a new RateSeasonsCriteria object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRateSeasonsCriteria() *RateSeasonsCriteria {
	this := RateSeasonsCriteria{}
	return &this
}

// NewRateSeasonsCriteriaWithDefaults instantiates a new RateSeasonsCriteria object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRateSeasonsCriteriaWithDefaults() *RateSeasonsCriteria {
	this := RateSeasonsCriteria{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *RateSeasonsCriteria) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RateSeasonsCriteria) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *RateSeasonsCriteria) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *RateSeasonsCriteria) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetRateSeasons returns the RateSeasons field value if set, zero value otherwise.
func (o *RateSeasonsCriteria) GetRateSeasons() []RateSeasonType {
	if o == nil || IsNil(o.RateSeasons) {
		var ret []RateSeasonType
		return ret
	}
	return o.RateSeasons
}

// GetRateSeasonsOk returns a tuple with the RateSeasons field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RateSeasonsCriteria) GetRateSeasonsOk() ([]RateSeasonType, bool) {
	if o == nil || IsNil(o.RateSeasons) {
		return nil, false
	}
	return o.RateSeasons, true
}

// HasRateSeasons returns a boolean if a field has been set.
func (o *RateSeasonsCriteria) HasRateSeasons() bool {
	if o != nil && !IsNil(o.RateSeasons) {
		return true
	}

	return false
}

// SetRateSeasons gets a reference to the given []RateSeasonType and assigns it to the RateSeasons field.
func (o *RateSeasonsCriteria) SetRateSeasons(v []RateSeasonType) {
	o.RateSeasons = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *RateSeasonsCriteria) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RateSeasonsCriteria) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *RateSeasonsCriteria) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *RateSeasonsCriteria) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o RateSeasonsCriteria) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RateSeasonsCriteria) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.RateSeasons) {
		toSerialize["rateSeasons"] = o.RateSeasons
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableRateSeasonsCriteria struct {
	value *RateSeasonsCriteria
	isSet bool
}

func (v NullableRateSeasonsCriteria) Get() *RateSeasonsCriteria {
	return v.value
}

func (v *NullableRateSeasonsCriteria) Set(val *RateSeasonsCriteria) {
	v.value = val
	v.isSet = true
}

func (v NullableRateSeasonsCriteria) IsSet() bool {
	return v.isSet
}

func (v *NullableRateSeasonsCriteria) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRateSeasonsCriteria(val *RateSeasonsCriteria) *NullableRateSeasonsCriteria {
	return &NullableRateSeasonsCriteria{value: val, isSet: true}
}

func (v NullableRateSeasonsCriteria) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRateSeasonsCriteria) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


