/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
)

// checks if the SubAllocation type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &SubAllocation{}

// SubAllocation Request object for creation of Sub Allocation. This object contains sub allocation details with unique identifiers for each sub allocation along with Master Allocation information. The standard optional Opera Context element is also included.
type SubAllocation struct {
	// The instruction to determine the block information to be returned in a successful create operation.
	FetchInstructions []BlockDetailInstructionType `json:"fetchInstructions,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	SubAllocations *SubAllocationsType `json:"subAllocations,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewSubAllocation instantiates a new SubAllocation object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewSubAllocation() *SubAllocation {
	this := SubAllocation{}
	return &this
}

// NewSubAllocationWithDefaults instantiates a new SubAllocation object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewSubAllocationWithDefaults() *SubAllocation {
	this := SubAllocation{}
	return &this
}

// GetFetchInstructions returns the FetchInstructions field value if set, zero value otherwise.
func (o *SubAllocation) GetFetchInstructions() []BlockDetailInstructionType {
	if o == nil || IsNil(o.FetchInstructions) {
		var ret []BlockDetailInstructionType
		return ret
	}
	return o.FetchInstructions
}

// GetFetchInstructionsOk returns a tuple with the FetchInstructions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SubAllocation) GetFetchInstructionsOk() ([]BlockDetailInstructionType, bool) {
	if o == nil || IsNil(o.FetchInstructions) {
		return nil, false
	}
	return o.FetchInstructions, true
}

// HasFetchInstructions returns a boolean if a field has been set.
func (o *SubAllocation) HasFetchInstructions() bool {
	if o != nil && !IsNil(o.FetchInstructions) {
		return true
	}

	return false
}

// SetFetchInstructions gets a reference to the given []BlockDetailInstructionType and assigns it to the FetchInstructions field.
func (o *SubAllocation) SetFetchInstructions(v []BlockDetailInstructionType) {
	o.FetchInstructions = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *SubAllocation) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SubAllocation) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *SubAllocation) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *SubAllocation) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetSubAllocations returns the SubAllocations field value if set, zero value otherwise.
func (o *SubAllocation) GetSubAllocations() SubAllocationsType {
	if o == nil || IsNil(o.SubAllocations) {
		var ret SubAllocationsType
		return ret
	}
	return *o.SubAllocations
}

// GetSubAllocationsOk returns a tuple with the SubAllocations field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SubAllocation) GetSubAllocationsOk() (*SubAllocationsType, bool) {
	if o == nil || IsNil(o.SubAllocations) {
		return nil, false
	}
	return o.SubAllocations, true
}

// HasSubAllocations returns a boolean if a field has been set.
func (o *SubAllocation) HasSubAllocations() bool {
	if o != nil && !IsNil(o.SubAllocations) {
		return true
	}

	return false
}

// SetSubAllocations gets a reference to the given SubAllocationsType and assigns it to the SubAllocations field.
func (o *SubAllocation) SetSubAllocations(v SubAllocationsType) {
	o.SubAllocations = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *SubAllocation) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SubAllocation) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *SubAllocation) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *SubAllocation) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o SubAllocation) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o SubAllocation) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.FetchInstructions) {
		toSerialize["fetchInstructions"] = o.FetchInstructions
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.SubAllocations) {
		toSerialize["subAllocations"] = o.SubAllocations
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableSubAllocation struct {
	value *SubAllocation
	isSet bool
}

func (v NullableSubAllocation) Get() *SubAllocation {
	return v.value
}

func (v *NullableSubAllocation) Set(val *SubAllocation) {
	v.value = val
	v.isSet = true
}

func (v NullableSubAllocation) IsSet() bool {
	return v.isSet
}

func (v *NullableSubAllocation) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSubAllocation(val *SubAllocation) *NullableSubAllocation {
	return &NullableSubAllocation{value: val, isSet: true}
}

func (v NullableSubAllocation) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSubAllocation) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

