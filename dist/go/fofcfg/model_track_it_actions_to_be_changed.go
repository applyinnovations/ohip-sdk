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

// checks if the TrackItActionsToBeChanged type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TrackItActionsToBeChanged{}

// TrackItActionsToBeChanged Request object for changing existing Track it Actions.
type TrackItActionsToBeChanged struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Track It Action Collection element.
	TrackItActions []TrackItActionConfigType `json:"trackItActions,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewTrackItActionsToBeChanged instantiates a new TrackItActionsToBeChanged object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTrackItActionsToBeChanged() *TrackItActionsToBeChanged {
	this := TrackItActionsToBeChanged{}
	return &this
}

// NewTrackItActionsToBeChangedWithDefaults instantiates a new TrackItActionsToBeChanged object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTrackItActionsToBeChangedWithDefaults() *TrackItActionsToBeChanged {
	this := TrackItActionsToBeChanged{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *TrackItActionsToBeChanged) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrackItActionsToBeChanged) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *TrackItActionsToBeChanged) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *TrackItActionsToBeChanged) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetTrackItActions returns the TrackItActions field value if set, zero value otherwise.
func (o *TrackItActionsToBeChanged) GetTrackItActions() []TrackItActionConfigType {
	if o == nil || IsNil(o.TrackItActions) {
		var ret []TrackItActionConfigType
		return ret
	}
	return o.TrackItActions
}

// GetTrackItActionsOk returns a tuple with the TrackItActions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrackItActionsToBeChanged) GetTrackItActionsOk() ([]TrackItActionConfigType, bool) {
	if o == nil || IsNil(o.TrackItActions) {
		return nil, false
	}
	return o.TrackItActions, true
}

// HasTrackItActions returns a boolean if a field has been set.
func (o *TrackItActionsToBeChanged) HasTrackItActions() bool {
	if o != nil && !IsNil(o.TrackItActions) {
		return true
	}

	return false
}

// SetTrackItActions gets a reference to the given []TrackItActionConfigType and assigns it to the TrackItActions field.
func (o *TrackItActionsToBeChanged) SetTrackItActions(v []TrackItActionConfigType) {
	o.TrackItActions = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *TrackItActionsToBeChanged) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrackItActionsToBeChanged) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *TrackItActionsToBeChanged) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *TrackItActionsToBeChanged) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o TrackItActionsToBeChanged) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TrackItActionsToBeChanged) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.TrackItActions) {
		toSerialize["trackItActions"] = o.TrackItActions
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableTrackItActionsToBeChanged struct {
	value *TrackItActionsToBeChanged
	isSet bool
}

func (v NullableTrackItActionsToBeChanged) Get() *TrackItActionsToBeChanged {
	return v.value
}

func (v *NullableTrackItActionsToBeChanged) Set(val *TrackItActionsToBeChanged) {
	v.value = val
	v.isSet = true
}

func (v NullableTrackItActionsToBeChanged) IsSet() bool {
	return v.isSet
}

func (v *NullableTrackItActionsToBeChanged) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTrackItActionsToBeChanged(val *TrackItActionsToBeChanged) *NullableTrackItActionsToBeChanged {
	return &NullableTrackItActionsToBeChanged{value: val, isSet: true}
}

func (v NullableTrackItActionsToBeChanged) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTrackItActionsToBeChanged) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


