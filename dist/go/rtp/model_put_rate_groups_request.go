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

// checks if the PutRateGroupsRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PutRateGroupsRequest{}

// PutRateGroupsRequest struct for PutRateGroupsRequest
type PutRateGroupsRequest struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Collection of Rate Groups.
	RateGroups []RateGroupType `json:"rateGroups,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPutRateGroupsRequest instantiates a new PutRateGroupsRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPutRateGroupsRequest() *PutRateGroupsRequest {
	this := PutRateGroupsRequest{}
	return &this
}

// NewPutRateGroupsRequestWithDefaults instantiates a new PutRateGroupsRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPutRateGroupsRequestWithDefaults() *PutRateGroupsRequest {
	this := PutRateGroupsRequest{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PutRateGroupsRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutRateGroupsRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PutRateGroupsRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PutRateGroupsRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetRateGroups returns the RateGroups field value if set, zero value otherwise.
func (o *PutRateGroupsRequest) GetRateGroups() []RateGroupType {
	if o == nil || IsNil(o.RateGroups) {
		var ret []RateGroupType
		return ret
	}
	return o.RateGroups
}

// GetRateGroupsOk returns a tuple with the RateGroups field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutRateGroupsRequest) GetRateGroupsOk() ([]RateGroupType, bool) {
	if o == nil || IsNil(o.RateGroups) {
		return nil, false
	}
	return o.RateGroups, true
}

// HasRateGroups returns a boolean if a field has been set.
func (o *PutRateGroupsRequest) HasRateGroups() bool {
	if o != nil && !IsNil(o.RateGroups) {
		return true
	}

	return false
}

// SetRateGroups gets a reference to the given []RateGroupType and assigns it to the RateGroups field.
func (o *PutRateGroupsRequest) SetRateGroups(v []RateGroupType) {
	o.RateGroups = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PutRateGroupsRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutRateGroupsRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PutRateGroupsRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PutRateGroupsRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PutRateGroupsRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PutRateGroupsRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.RateGroups) {
		toSerialize["rateGroups"] = o.RateGroups
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePutRateGroupsRequest struct {
	value *PutRateGroupsRequest
	isSet bool
}

func (v NullablePutRateGroupsRequest) Get() *PutRateGroupsRequest {
	return v.value
}

func (v *NullablePutRateGroupsRequest) Set(val *PutRateGroupsRequest) {
	v.value = val
	v.isSet = true
}

func (v NullablePutRateGroupsRequest) IsSet() bool {
	return v.isSet
}

func (v *NullablePutRateGroupsRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePutRateGroupsRequest(val *PutRateGroupsRequest) *NullablePutRateGroupsRequest {
	return &NullablePutRateGroupsRequest{value: val, isSet: true}
}

func (v NullablePutRateGroupsRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePutRateGroupsRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


