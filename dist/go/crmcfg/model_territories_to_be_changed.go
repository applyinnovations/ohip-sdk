/*
OPERA Cloud CRM Configuration API

APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crmcfg

import (
	"encoding/json"
)

// checks if the TerritoriesToBeChanged type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TerritoriesToBeChanged{}

// TerritoriesToBeChanged Request object for changing Territories.
type TerritoriesToBeChanged struct {
	// List of Territories.
	Territories []TerritoryType `json:"territories,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewTerritoriesToBeChanged instantiates a new TerritoriesToBeChanged object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTerritoriesToBeChanged() *TerritoriesToBeChanged {
	this := TerritoriesToBeChanged{}
	return &this
}

// NewTerritoriesToBeChangedWithDefaults instantiates a new TerritoriesToBeChanged object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTerritoriesToBeChangedWithDefaults() *TerritoriesToBeChanged {
	this := TerritoriesToBeChanged{}
	return &this
}

// GetTerritories returns the Territories field value if set, zero value otherwise.
func (o *TerritoriesToBeChanged) GetTerritories() []TerritoryType {
	if o == nil || IsNil(o.Territories) {
		var ret []TerritoryType
		return ret
	}
	return o.Territories
}

// GetTerritoriesOk returns a tuple with the Territories field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TerritoriesToBeChanged) GetTerritoriesOk() ([]TerritoryType, bool) {
	if o == nil || IsNil(o.Territories) {
		return nil, false
	}
	return o.Territories, true
}

// HasTerritories returns a boolean if a field has been set.
func (o *TerritoriesToBeChanged) HasTerritories() bool {
	if o != nil && !IsNil(o.Territories) {
		return true
	}

	return false
}

// SetTerritories gets a reference to the given []TerritoryType and assigns it to the Territories field.
func (o *TerritoriesToBeChanged) SetTerritories(v []TerritoryType) {
	o.Territories = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *TerritoriesToBeChanged) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TerritoriesToBeChanged) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *TerritoriesToBeChanged) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *TerritoriesToBeChanged) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *TerritoriesToBeChanged) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TerritoriesToBeChanged) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *TerritoriesToBeChanged) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *TerritoriesToBeChanged) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o TerritoriesToBeChanged) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TerritoriesToBeChanged) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Territories) {
		toSerialize["territories"] = o.Territories
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableTerritoriesToBeChanged struct {
	value *TerritoriesToBeChanged
	isSet bool
}

func (v NullableTerritoriesToBeChanged) Get() *TerritoriesToBeChanged {
	return v.value
}

func (v *NullableTerritoriesToBeChanged) Set(val *TerritoriesToBeChanged) {
	v.value = val
	v.isSet = true
}

func (v NullableTerritoriesToBeChanged) IsSet() bool {
	return v.isSet
}

func (v *NullableTerritoriesToBeChanged) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTerritoriesToBeChanged(val *TerritoriesToBeChanged) *NullableTerritoriesToBeChanged {
	return &NullableTerritoriesToBeChanged{value: val, isSet: true}
}

func (v NullableTerritoriesToBeChanged) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTerritoriesToBeChanged) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


