/*
OPERA Cloud Channel Configuration API

APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package chl

import (
	"encoding/json"
)

// checks if the GeneralAvailabilitySimulator type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &GeneralAvailabilitySimulator{}

// GeneralAvailabilitySimulator Response object to simulate general availability.
type GeneralAvailabilitySimulator struct {
	GeneralAvailability *GeneralAvailSimulatorType `json:"generalAvailability,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewGeneralAvailabilitySimulator instantiates a new GeneralAvailabilitySimulator object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGeneralAvailabilitySimulator() *GeneralAvailabilitySimulator {
	this := GeneralAvailabilitySimulator{}
	return &this
}

// NewGeneralAvailabilitySimulatorWithDefaults instantiates a new GeneralAvailabilitySimulator object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGeneralAvailabilitySimulatorWithDefaults() *GeneralAvailabilitySimulator {
	this := GeneralAvailabilitySimulator{}
	return &this
}

// GetGeneralAvailability returns the GeneralAvailability field value if set, zero value otherwise.
func (o *GeneralAvailabilitySimulator) GetGeneralAvailability() GeneralAvailSimulatorType {
	if o == nil || IsNil(o.GeneralAvailability) {
		var ret GeneralAvailSimulatorType
		return ret
	}
	return *o.GeneralAvailability
}

// GetGeneralAvailabilityOk returns a tuple with the GeneralAvailability field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GeneralAvailabilitySimulator) GetGeneralAvailabilityOk() (*GeneralAvailSimulatorType, bool) {
	if o == nil || IsNil(o.GeneralAvailability) {
		return nil, false
	}
	return o.GeneralAvailability, true
}

// HasGeneralAvailability returns a boolean if a field has been set.
func (o *GeneralAvailabilitySimulator) HasGeneralAvailability() bool {
	if o != nil && !IsNil(o.GeneralAvailability) {
		return true
	}

	return false
}

// SetGeneralAvailability gets a reference to the given GeneralAvailSimulatorType and assigns it to the GeneralAvailability field.
func (o *GeneralAvailabilitySimulator) SetGeneralAvailability(v GeneralAvailSimulatorType) {
	o.GeneralAvailability = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *GeneralAvailabilitySimulator) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GeneralAvailabilitySimulator) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *GeneralAvailabilitySimulator) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *GeneralAvailabilitySimulator) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *GeneralAvailabilitySimulator) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GeneralAvailabilitySimulator) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *GeneralAvailabilitySimulator) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *GeneralAvailabilitySimulator) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o GeneralAvailabilitySimulator) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o GeneralAvailabilitySimulator) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.GeneralAvailability) {
		toSerialize["generalAvailability"] = o.GeneralAvailability
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableGeneralAvailabilitySimulator struct {
	value *GeneralAvailabilitySimulator
	isSet bool
}

func (v NullableGeneralAvailabilitySimulator) Get() *GeneralAvailabilitySimulator {
	return v.value
}

func (v *NullableGeneralAvailabilitySimulator) Set(val *GeneralAvailabilitySimulator) {
	v.value = val
	v.isSet = true
}

func (v NullableGeneralAvailabilitySimulator) IsSet() bool {
	return v.isSet
}

func (v *NullableGeneralAvailabilitySimulator) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGeneralAvailabilitySimulator(val *GeneralAvailabilitySimulator) *NullableGeneralAvailabilitySimulator {
	return &NullableGeneralAvailabilitySimulator{value: val, isSet: true}
}

func (v NullableGeneralAvailabilitySimulator) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGeneralAvailabilitySimulator) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


