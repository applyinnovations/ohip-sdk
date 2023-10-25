/*
OPERA Cloud Enterprise Configuration API

APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package entcfg

import (
	"encoding/json"
)

// checks if the AirportsToBeChanged type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AirportsToBeChanged{}

// AirportsToBeChanged Request object for modifying airports for hotels.
type AirportsToBeChanged struct {
	// Airport details for a hotel.
	Airports []AirportType `json:"airports,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewAirportsToBeChanged instantiates a new AirportsToBeChanged object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAirportsToBeChanged() *AirportsToBeChanged {
	this := AirportsToBeChanged{}
	return &this
}

// NewAirportsToBeChangedWithDefaults instantiates a new AirportsToBeChanged object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAirportsToBeChangedWithDefaults() *AirportsToBeChanged {
	this := AirportsToBeChanged{}
	return &this
}

// GetAirports returns the Airports field value if set, zero value otherwise.
func (o *AirportsToBeChanged) GetAirports() []AirportType {
	if o == nil || IsNil(o.Airports) {
		var ret []AirportType
		return ret
	}
	return o.Airports
}

// GetAirportsOk returns a tuple with the Airports field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AirportsToBeChanged) GetAirportsOk() ([]AirportType, bool) {
	if o == nil || IsNil(o.Airports) {
		return nil, false
	}
	return o.Airports, true
}

// HasAirports returns a boolean if a field has been set.
func (o *AirportsToBeChanged) HasAirports() bool {
	if o != nil && !IsNil(o.Airports) {
		return true
	}

	return false
}

// SetAirports gets a reference to the given []AirportType and assigns it to the Airports field.
func (o *AirportsToBeChanged) SetAirports(v []AirportType) {
	o.Airports = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *AirportsToBeChanged) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AirportsToBeChanged) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *AirportsToBeChanged) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *AirportsToBeChanged) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *AirportsToBeChanged) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AirportsToBeChanged) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *AirportsToBeChanged) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *AirportsToBeChanged) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o AirportsToBeChanged) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AirportsToBeChanged) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Airports) {
		toSerialize["airports"] = o.Airports
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableAirportsToBeChanged struct {
	value *AirportsToBeChanged
	isSet bool
}

func (v NullableAirportsToBeChanged) Get() *AirportsToBeChanged {
	return v.value
}

func (v *NullableAirportsToBeChanged) Set(val *AirportsToBeChanged) {
	v.value = val
	v.isSet = true
}

func (v NullableAirportsToBeChanged) IsSet() bool {
	return v.isSet
}

func (v *NullableAirportsToBeChanged) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAirportsToBeChanged(val *AirportsToBeChanged) *NullableAirportsToBeChanged {
	return &NullableAirportsToBeChanged{value: val, isSet: true}
}

func (v NullableAirportsToBeChanged) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAirportsToBeChanged) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


