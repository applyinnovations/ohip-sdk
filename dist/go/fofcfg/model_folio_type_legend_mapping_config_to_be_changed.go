/*
OPERA Cloud Front Desk Configuration API

APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fofcfg

import (
	"encoding/json"
)

// checks if the FolioTypeLegendMappingConfigToBeChanged type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &FolioTypeLegendMappingConfigToBeChanged{}

// FolioTypeLegendMappingConfigToBeChanged Request object to edit folio type legend mapping information.
type FolioTypeLegendMappingConfigToBeChanged struct {
	Criteria *FolioTypeLegendMappingConfigType `json:"criteria,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewFolioTypeLegendMappingConfigToBeChanged instantiates a new FolioTypeLegendMappingConfigToBeChanged object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewFolioTypeLegendMappingConfigToBeChanged() *FolioTypeLegendMappingConfigToBeChanged {
	this := FolioTypeLegendMappingConfigToBeChanged{}
	return &this
}

// NewFolioTypeLegendMappingConfigToBeChangedWithDefaults instantiates a new FolioTypeLegendMappingConfigToBeChanged object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewFolioTypeLegendMappingConfigToBeChangedWithDefaults() *FolioTypeLegendMappingConfigToBeChanged {
	this := FolioTypeLegendMappingConfigToBeChanged{}
	return &this
}

// GetCriteria returns the Criteria field value if set, zero value otherwise.
func (o *FolioTypeLegendMappingConfigToBeChanged) GetCriteria() FolioTypeLegendMappingConfigType {
	if o == nil || IsNil(o.Criteria) {
		var ret FolioTypeLegendMappingConfigType
		return ret
	}
	return *o.Criteria
}

// GetCriteriaOk returns a tuple with the Criteria field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioTypeLegendMappingConfigToBeChanged) GetCriteriaOk() (*FolioTypeLegendMappingConfigType, bool) {
	if o == nil || IsNil(o.Criteria) {
		return nil, false
	}
	return o.Criteria, true
}

// HasCriteria returns a boolean if a field has been set.
func (o *FolioTypeLegendMappingConfigToBeChanged) HasCriteria() bool {
	if o != nil && !IsNil(o.Criteria) {
		return true
	}

	return false
}

// SetCriteria gets a reference to the given FolioTypeLegendMappingConfigType and assigns it to the Criteria field.
func (o *FolioTypeLegendMappingConfigToBeChanged) SetCriteria(v FolioTypeLegendMappingConfigType) {
	o.Criteria = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *FolioTypeLegendMappingConfigToBeChanged) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioTypeLegendMappingConfigToBeChanged) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *FolioTypeLegendMappingConfigToBeChanged) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *FolioTypeLegendMappingConfigToBeChanged) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *FolioTypeLegendMappingConfigToBeChanged) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioTypeLegendMappingConfigToBeChanged) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *FolioTypeLegendMappingConfigToBeChanged) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *FolioTypeLegendMappingConfigToBeChanged) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o FolioTypeLegendMappingConfigToBeChanged) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o FolioTypeLegendMappingConfigToBeChanged) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Criteria) {
		toSerialize["criteria"] = o.Criteria
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableFolioTypeLegendMappingConfigToBeChanged struct {
	value *FolioTypeLegendMappingConfigToBeChanged
	isSet bool
}

func (v NullableFolioTypeLegendMappingConfigToBeChanged) Get() *FolioTypeLegendMappingConfigToBeChanged {
	return v.value
}

func (v *NullableFolioTypeLegendMappingConfigToBeChanged) Set(val *FolioTypeLegendMappingConfigToBeChanged) {
	v.value = val
	v.isSet = true
}

func (v NullableFolioTypeLegendMappingConfigToBeChanged) IsSet() bool {
	return v.isSet
}

func (v *NullableFolioTypeLegendMappingConfigToBeChanged) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableFolioTypeLegendMappingConfigToBeChanged(val *FolioTypeLegendMappingConfigToBeChanged) *NullableFolioTypeLegendMappingConfigToBeChanged {
	return &NullableFolioTypeLegendMappingConfigToBeChanged{value: val, isSet: true}
}

func (v NullableFolioTypeLegendMappingConfigToBeChanged) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableFolioTypeLegendMappingConfigToBeChanged) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

