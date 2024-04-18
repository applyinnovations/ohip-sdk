/*
OPERA Cloud Customer Relationship Management API

APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crm

import (
	"encoding/json"
)

// checks if the CheckProfileType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CheckProfileType{}

// CheckProfileType Profile and the status of its allowed actions, attached records, and indicators.
type CheckProfileType struct {
	ProfileId *ProfileId `json:"profileId,omitempty"`
	// Collection of status of allowed actions, attached records, and indicators of the profile.
	Results []CheckProfileResultType `json:"results,omitempty"`
}

// NewCheckProfileType instantiates a new CheckProfileType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCheckProfileType() *CheckProfileType {
	this := CheckProfileType{}
	return &this
}

// NewCheckProfileTypeWithDefaults instantiates a new CheckProfileType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCheckProfileTypeWithDefaults() *CheckProfileType {
	this := CheckProfileType{}
	return &this
}

// GetProfileId returns the ProfileId field value if set, zero value otherwise.
func (o *CheckProfileType) GetProfileId() ProfileId {
	if o == nil || IsNil(o.ProfileId) {
		var ret ProfileId
		return ret
	}
	return *o.ProfileId
}

// GetProfileIdOk returns a tuple with the ProfileId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CheckProfileType) GetProfileIdOk() (*ProfileId, bool) {
	if o == nil || IsNil(o.ProfileId) {
		return nil, false
	}
	return o.ProfileId, true
}

// HasProfileId returns a boolean if a field has been set.
func (o *CheckProfileType) HasProfileId() bool {
	if o != nil && !IsNil(o.ProfileId) {
		return true
	}

	return false
}

// SetProfileId gets a reference to the given ProfileId and assigns it to the ProfileId field.
func (o *CheckProfileType) SetProfileId(v ProfileId) {
	o.ProfileId = &v
}

// GetResults returns the Results field value if set, zero value otherwise.
func (o *CheckProfileType) GetResults() []CheckProfileResultType {
	if o == nil || IsNil(o.Results) {
		var ret []CheckProfileResultType
		return ret
	}
	return o.Results
}

// GetResultsOk returns a tuple with the Results field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CheckProfileType) GetResultsOk() ([]CheckProfileResultType, bool) {
	if o == nil || IsNil(o.Results) {
		return nil, false
	}
	return o.Results, true
}

// HasResults returns a boolean if a field has been set.
func (o *CheckProfileType) HasResults() bool {
	if o != nil && !IsNil(o.Results) {
		return true
	}

	return false
}

// SetResults gets a reference to the given []CheckProfileResultType and assigns it to the Results field.
func (o *CheckProfileType) SetResults(v []CheckProfileResultType) {
	o.Results = v
}

func (o CheckProfileType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CheckProfileType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ProfileId) {
		toSerialize["profileId"] = o.ProfileId
	}
	if !IsNil(o.Results) {
		toSerialize["results"] = o.Results
	}
	return toSerialize, nil
}

type NullableCheckProfileType struct {
	value *CheckProfileType
	isSet bool
}

func (v NullableCheckProfileType) Get() *CheckProfileType {
	return v.value
}

func (v *NullableCheckProfileType) Set(val *CheckProfileType) {
	v.value = val
	v.isSet = true
}

func (v NullableCheckProfileType) IsSet() bool {
	return v.isSet
}

func (v *NullableCheckProfileType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCheckProfileType(val *CheckProfileType) *NullableCheckProfileType {
	return &NullableCheckProfileType{value: val, isSet: true}
}

func (v NullableCheckProfileType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCheckProfileType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

