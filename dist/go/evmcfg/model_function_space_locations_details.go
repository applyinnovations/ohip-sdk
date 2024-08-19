/*
OPERA Cloud Event Configuration API

This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evmcfg

import (
	"encoding/json"
)

// checks if the FunctionSpaceLocationsDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &FunctionSpaceLocationsDetails{}

// FunctionSpaceLocationsDetails Response object for fetching function space locations.
type FunctionSpaceLocationsDetails struct {
	Links []InstanceLink `json:"links,omitempty"`
	// List of the function space locations to be configured or fetched
	Locations []FunctionSpaceLocationType `json:"locations,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewFunctionSpaceLocationsDetails instantiates a new FunctionSpaceLocationsDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewFunctionSpaceLocationsDetails() *FunctionSpaceLocationsDetails {
	this := FunctionSpaceLocationsDetails{}
	return &this
}

// NewFunctionSpaceLocationsDetailsWithDefaults instantiates a new FunctionSpaceLocationsDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewFunctionSpaceLocationsDetailsWithDefaults() *FunctionSpaceLocationsDetails {
	this := FunctionSpaceLocationsDetails{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *FunctionSpaceLocationsDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceLocationsDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *FunctionSpaceLocationsDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *FunctionSpaceLocationsDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetLocations returns the Locations field value if set, zero value otherwise.
func (o *FunctionSpaceLocationsDetails) GetLocations() []FunctionSpaceLocationType {
	if o == nil || IsNil(o.Locations) {
		var ret []FunctionSpaceLocationType
		return ret
	}
	return o.Locations
}

// GetLocationsOk returns a tuple with the Locations field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceLocationsDetails) GetLocationsOk() ([]FunctionSpaceLocationType, bool) {
	if o == nil || IsNil(o.Locations) {
		return nil, false
	}
	return o.Locations, true
}

// HasLocations returns a boolean if a field has been set.
func (o *FunctionSpaceLocationsDetails) HasLocations() bool {
	if o != nil && !IsNil(o.Locations) {
		return true
	}

	return false
}

// SetLocations gets a reference to the given []FunctionSpaceLocationType and assigns it to the Locations field.
func (o *FunctionSpaceLocationsDetails) SetLocations(v []FunctionSpaceLocationType) {
	o.Locations = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *FunctionSpaceLocationsDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceLocationsDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *FunctionSpaceLocationsDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *FunctionSpaceLocationsDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o FunctionSpaceLocationsDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o FunctionSpaceLocationsDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Locations) {
		toSerialize["locations"] = o.Locations
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableFunctionSpaceLocationsDetails struct {
	value *FunctionSpaceLocationsDetails
	isSet bool
}

func (v NullableFunctionSpaceLocationsDetails) Get() *FunctionSpaceLocationsDetails {
	return v.value
}

func (v *NullableFunctionSpaceLocationsDetails) Set(val *FunctionSpaceLocationsDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableFunctionSpaceLocationsDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableFunctionSpaceLocationsDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableFunctionSpaceLocationsDetails(val *FunctionSpaceLocationsDetails) *NullableFunctionSpaceLocationsDetails {
	return &NullableFunctionSpaceLocationsDetails{value: val, isSet: true}
}

func (v NullableFunctionSpaceLocationsDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableFunctionSpaceLocationsDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


