/*
OPERA Cloud Sales Event Management API

APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evm

import (
	"encoding/json"
)

// checks if the FunctionSpaceAvailabilityDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &FunctionSpaceAvailabilityDetails{}

// FunctionSpaceAvailabilityDetails Response object for retrieving availability for catering function spaces.
type FunctionSpaceAvailabilityDetails struct {
	// Collection of available Function Spaces.
	FunctionSpacesAvailability []FunctionSpaceAvailabilityType `json:"functionSpacesAvailability,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success elementSpace to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewFunctionSpaceAvailabilityDetails instantiates a new FunctionSpaceAvailabilityDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewFunctionSpaceAvailabilityDetails() *FunctionSpaceAvailabilityDetails {
	this := FunctionSpaceAvailabilityDetails{}
	return &this
}

// NewFunctionSpaceAvailabilityDetailsWithDefaults instantiates a new FunctionSpaceAvailabilityDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewFunctionSpaceAvailabilityDetailsWithDefaults() *FunctionSpaceAvailabilityDetails {
	this := FunctionSpaceAvailabilityDetails{}
	return &this
}

// GetFunctionSpacesAvailability returns the FunctionSpacesAvailability field value if set, zero value otherwise.
func (o *FunctionSpaceAvailabilityDetails) GetFunctionSpacesAvailability() []FunctionSpaceAvailabilityType {
	if o == nil || IsNil(o.FunctionSpacesAvailability) {
		var ret []FunctionSpaceAvailabilityType
		return ret
	}
	return o.FunctionSpacesAvailability
}

// GetFunctionSpacesAvailabilityOk returns a tuple with the FunctionSpacesAvailability field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceAvailabilityDetails) GetFunctionSpacesAvailabilityOk() ([]FunctionSpaceAvailabilityType, bool) {
	if o == nil || IsNil(o.FunctionSpacesAvailability) {
		return nil, false
	}
	return o.FunctionSpacesAvailability, true
}

// HasFunctionSpacesAvailability returns a boolean if a field has been set.
func (o *FunctionSpaceAvailabilityDetails) HasFunctionSpacesAvailability() bool {
	if o != nil && !IsNil(o.FunctionSpacesAvailability) {
		return true
	}

	return false
}

// SetFunctionSpacesAvailability gets a reference to the given []FunctionSpaceAvailabilityType and assigns it to the FunctionSpacesAvailability field.
func (o *FunctionSpaceAvailabilityDetails) SetFunctionSpacesAvailability(v []FunctionSpaceAvailabilityType) {
	o.FunctionSpacesAvailability = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *FunctionSpaceAvailabilityDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceAvailabilityDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *FunctionSpaceAvailabilityDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *FunctionSpaceAvailabilityDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *FunctionSpaceAvailabilityDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceAvailabilityDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *FunctionSpaceAvailabilityDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *FunctionSpaceAvailabilityDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o FunctionSpaceAvailabilityDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o FunctionSpaceAvailabilityDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.FunctionSpacesAvailability) {
		toSerialize["functionSpacesAvailability"] = o.FunctionSpacesAvailability
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableFunctionSpaceAvailabilityDetails struct {
	value *FunctionSpaceAvailabilityDetails
	isSet bool
}

func (v NullableFunctionSpaceAvailabilityDetails) Get() *FunctionSpaceAvailabilityDetails {
	return v.value
}

func (v *NullableFunctionSpaceAvailabilityDetails) Set(val *FunctionSpaceAvailabilityDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableFunctionSpaceAvailabilityDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableFunctionSpaceAvailabilityDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableFunctionSpaceAvailabilityDetails(val *FunctionSpaceAvailabilityDetails) *NullableFunctionSpaceAvailabilityDetails {
	return &NullableFunctionSpaceAvailabilityDetails{value: val, isSet: true}
}

func (v NullableFunctionSpaceAvailabilityDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableFunctionSpaceAvailabilityDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


