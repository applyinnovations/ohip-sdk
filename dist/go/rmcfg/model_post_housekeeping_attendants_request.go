/*
OPERA Cloud Room Configuration API

APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rmcfg

import (
	"encoding/json"
)

// checks if the PostHousekeepingAttendantsRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PostHousekeepingAttendantsRequest{}

// PostHousekeepingAttendantsRequest struct for PostHousekeepingAttendantsRequest
type PostHousekeepingAttendantsRequest struct {
	// Housekeeping Attendant Information.
	Attendants []HousekeepingAttendantType `json:"attendants,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPostHousekeepingAttendantsRequest instantiates a new PostHousekeepingAttendantsRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPostHousekeepingAttendantsRequest() *PostHousekeepingAttendantsRequest {
	this := PostHousekeepingAttendantsRequest{}
	return &this
}

// NewPostHousekeepingAttendantsRequestWithDefaults instantiates a new PostHousekeepingAttendantsRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPostHousekeepingAttendantsRequestWithDefaults() *PostHousekeepingAttendantsRequest {
	this := PostHousekeepingAttendantsRequest{}
	return &this
}

// GetAttendants returns the Attendants field value if set, zero value otherwise.
func (o *PostHousekeepingAttendantsRequest) GetAttendants() []HousekeepingAttendantType {
	if o == nil || IsNil(o.Attendants) {
		var ret []HousekeepingAttendantType
		return ret
	}
	return o.Attendants
}

// GetAttendantsOk returns a tuple with the Attendants field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostHousekeepingAttendantsRequest) GetAttendantsOk() ([]HousekeepingAttendantType, bool) {
	if o == nil || IsNil(o.Attendants) {
		return nil, false
	}
	return o.Attendants, true
}

// HasAttendants returns a boolean if a field has been set.
func (o *PostHousekeepingAttendantsRequest) HasAttendants() bool {
	if o != nil && !IsNil(o.Attendants) {
		return true
	}

	return false
}

// SetAttendants gets a reference to the given []HousekeepingAttendantType and assigns it to the Attendants field.
func (o *PostHousekeepingAttendantsRequest) SetAttendants(v []HousekeepingAttendantType) {
	o.Attendants = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PostHousekeepingAttendantsRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostHousekeepingAttendantsRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PostHousekeepingAttendantsRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PostHousekeepingAttendantsRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PostHousekeepingAttendantsRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostHousekeepingAttendantsRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PostHousekeepingAttendantsRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PostHousekeepingAttendantsRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PostHousekeepingAttendantsRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PostHousekeepingAttendantsRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Attendants) {
		toSerialize["attendants"] = o.Attendants
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePostHousekeepingAttendantsRequest struct {
	value *PostHousekeepingAttendantsRequest
	isSet bool
}

func (v NullablePostHousekeepingAttendantsRequest) Get() *PostHousekeepingAttendantsRequest {
	return v.value
}

func (v *NullablePostHousekeepingAttendantsRequest) Set(val *PostHousekeepingAttendantsRequest) {
	v.value = val
	v.isSet = true
}

func (v NullablePostHousekeepingAttendantsRequest) IsSet() bool {
	return v.isSet
}

func (v *NullablePostHousekeepingAttendantsRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePostHousekeepingAttendantsRequest(val *PostHousekeepingAttendantsRequest) *NullablePostHousekeepingAttendantsRequest {
	return &NullablePostHousekeepingAttendantsRequest{value: val, isSet: true}
}

func (v NullablePostHousekeepingAttendantsRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePostHousekeepingAttendantsRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


