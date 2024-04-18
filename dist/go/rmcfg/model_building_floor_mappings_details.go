/*
OPERA Cloud Room Configuration API

APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rmcfg

import (
	"encoding/json"
)

// checks if the BuildingFloorMappingsDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BuildingFloorMappingsDetails{}

// BuildingFloorMappingsDetails Response object for fetching floor mappings to buildings.
type BuildingFloorMappingsDetails struct {
	// Collection of Floor to Building mapping details.
	BuildingFloorMappings []BuildingFloorMappingType `json:"buildingFloorMappings,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewBuildingFloorMappingsDetails instantiates a new BuildingFloorMappingsDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBuildingFloorMappingsDetails() *BuildingFloorMappingsDetails {
	this := BuildingFloorMappingsDetails{}
	return &this
}

// NewBuildingFloorMappingsDetailsWithDefaults instantiates a new BuildingFloorMappingsDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBuildingFloorMappingsDetailsWithDefaults() *BuildingFloorMappingsDetails {
	this := BuildingFloorMappingsDetails{}
	return &this
}

// GetBuildingFloorMappings returns the BuildingFloorMappings field value if set, zero value otherwise.
func (o *BuildingFloorMappingsDetails) GetBuildingFloorMappings() []BuildingFloorMappingType {
	if o == nil || IsNil(o.BuildingFloorMappings) {
		var ret []BuildingFloorMappingType
		return ret
	}
	return o.BuildingFloorMappings
}

// GetBuildingFloorMappingsOk returns a tuple with the BuildingFloorMappings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BuildingFloorMappingsDetails) GetBuildingFloorMappingsOk() ([]BuildingFloorMappingType, bool) {
	if o == nil || IsNil(o.BuildingFloorMappings) {
		return nil, false
	}
	return o.BuildingFloorMappings, true
}

// HasBuildingFloorMappings returns a boolean if a field has been set.
func (o *BuildingFloorMappingsDetails) HasBuildingFloorMappings() bool {
	if o != nil && !IsNil(o.BuildingFloorMappings) {
		return true
	}

	return false
}

// SetBuildingFloorMappings gets a reference to the given []BuildingFloorMappingType and assigns it to the BuildingFloorMappings field.
func (o *BuildingFloorMappingsDetails) SetBuildingFloorMappings(v []BuildingFloorMappingType) {
	o.BuildingFloorMappings = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *BuildingFloorMappingsDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BuildingFloorMappingsDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *BuildingFloorMappingsDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *BuildingFloorMappingsDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *BuildingFloorMappingsDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BuildingFloorMappingsDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *BuildingFloorMappingsDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *BuildingFloorMappingsDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o BuildingFloorMappingsDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BuildingFloorMappingsDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BuildingFloorMappings) {
		toSerialize["buildingFloorMappings"] = o.BuildingFloorMappings
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableBuildingFloorMappingsDetails struct {
	value *BuildingFloorMappingsDetails
	isSet bool
}

func (v NullableBuildingFloorMappingsDetails) Get() *BuildingFloorMappingsDetails {
	return v.value
}

func (v *NullableBuildingFloorMappingsDetails) Set(val *BuildingFloorMappingsDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableBuildingFloorMappingsDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableBuildingFloorMappingsDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBuildingFloorMappingsDetails(val *BuildingFloorMappingsDetails) *NullableBuildingFloorMappingsDetails {
	return &NullableBuildingFloorMappingsDetails{value: val, isSet: true}
}

func (v NullableBuildingFloorMappingsDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBuildingFloorMappingsDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

