/*
OPERA Cloud Front Desk Configuration API

APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fofcfg

import (
	"encoding/json"
)

// checks if the TrackItTypesDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TrackItTypesDetails{}

// TrackItTypesDetails Response object for fetching Track it Types.
type TrackItTypesDetails struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Track It Type Collection element.
	TrackItTypes []TrackItTypeConfigType `json:"trackItTypes,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewTrackItTypesDetails instantiates a new TrackItTypesDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTrackItTypesDetails() *TrackItTypesDetails {
	this := TrackItTypesDetails{}
	return &this
}

// NewTrackItTypesDetailsWithDefaults instantiates a new TrackItTypesDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTrackItTypesDetailsWithDefaults() *TrackItTypesDetails {
	this := TrackItTypesDetails{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *TrackItTypesDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrackItTypesDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *TrackItTypesDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *TrackItTypesDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetTrackItTypes returns the TrackItTypes field value if set, zero value otherwise.
func (o *TrackItTypesDetails) GetTrackItTypes() []TrackItTypeConfigType {
	if o == nil || IsNil(o.TrackItTypes) {
		var ret []TrackItTypeConfigType
		return ret
	}
	return o.TrackItTypes
}

// GetTrackItTypesOk returns a tuple with the TrackItTypes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrackItTypesDetails) GetTrackItTypesOk() ([]TrackItTypeConfigType, bool) {
	if o == nil || IsNil(o.TrackItTypes) {
		return nil, false
	}
	return o.TrackItTypes, true
}

// HasTrackItTypes returns a boolean if a field has been set.
func (o *TrackItTypesDetails) HasTrackItTypes() bool {
	if o != nil && !IsNil(o.TrackItTypes) {
		return true
	}

	return false
}

// SetTrackItTypes gets a reference to the given []TrackItTypeConfigType and assigns it to the TrackItTypes field.
func (o *TrackItTypesDetails) SetTrackItTypes(v []TrackItTypeConfigType) {
	o.TrackItTypes = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *TrackItTypesDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrackItTypesDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *TrackItTypesDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *TrackItTypesDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o TrackItTypesDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TrackItTypesDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.TrackItTypes) {
		toSerialize["trackItTypes"] = o.TrackItTypes
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableTrackItTypesDetails struct {
	value *TrackItTypesDetails
	isSet bool
}

func (v NullableTrackItTypesDetails) Get() *TrackItTypesDetails {
	return v.value
}

func (v *NullableTrackItTypesDetails) Set(val *TrackItTypesDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableTrackItTypesDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableTrackItTypesDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTrackItTypesDetails(val *TrackItTypesDetails) *NullableTrackItTypesDetails {
	return &NullableTrackItTypesDetails{value: val, isSet: true}
}

func (v NullableTrackItTypesDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTrackItTypesDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


