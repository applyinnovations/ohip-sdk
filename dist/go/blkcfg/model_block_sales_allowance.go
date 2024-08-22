/*
OPERA Cloud Block Configuration API

APIs for Block configuration, such as creating, updating, fetching and removing codes related to blocks. <br />< This might include fetching the block cancellation reasons, or creating new block refused reasons.  Wash schedules can be create, or new reservation methods could be added for a property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blkcfg

import (
	"encoding/json"
)

// checks if the BlockSalesAllowance type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BlockSalesAllowance{}

// BlockSalesAllowance Response object for FetchBlockSalesAllowance operation which will contain all the information of sales allowance.
type BlockSalesAllowance struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Block's sales allowance information.
	SalesAllowances []BlockSalesAllowanceType `json:"salesAllowances,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewBlockSalesAllowance instantiates a new BlockSalesAllowance object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBlockSalesAllowance() *BlockSalesAllowance {
	this := BlockSalesAllowance{}
	return &this
}

// NewBlockSalesAllowanceWithDefaults instantiates a new BlockSalesAllowance object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBlockSalesAllowanceWithDefaults() *BlockSalesAllowance {
	this := BlockSalesAllowance{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *BlockSalesAllowance) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockSalesAllowance) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *BlockSalesAllowance) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *BlockSalesAllowance) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetSalesAllowances returns the SalesAllowances field value if set, zero value otherwise.
func (o *BlockSalesAllowance) GetSalesAllowances() []BlockSalesAllowanceType {
	if o == nil || IsNil(o.SalesAllowances) {
		var ret []BlockSalesAllowanceType
		return ret
	}
	return o.SalesAllowances
}

// GetSalesAllowancesOk returns a tuple with the SalesAllowances field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockSalesAllowance) GetSalesAllowancesOk() ([]BlockSalesAllowanceType, bool) {
	if o == nil || IsNil(o.SalesAllowances) {
		return nil, false
	}
	return o.SalesAllowances, true
}

// HasSalesAllowances returns a boolean if a field has been set.
func (o *BlockSalesAllowance) HasSalesAllowances() bool {
	if o != nil && !IsNil(o.SalesAllowances) {
		return true
	}

	return false
}

// SetSalesAllowances gets a reference to the given []BlockSalesAllowanceType and assigns it to the SalesAllowances field.
func (o *BlockSalesAllowance) SetSalesAllowances(v []BlockSalesAllowanceType) {
	o.SalesAllowances = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *BlockSalesAllowance) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockSalesAllowance) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *BlockSalesAllowance) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *BlockSalesAllowance) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o BlockSalesAllowance) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BlockSalesAllowance) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.SalesAllowances) {
		toSerialize["salesAllowances"] = o.SalesAllowances
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableBlockSalesAllowance struct {
	value *BlockSalesAllowance
	isSet bool
}

func (v NullableBlockSalesAllowance) Get() *BlockSalesAllowance {
	return v.value
}

func (v *NullableBlockSalesAllowance) Set(val *BlockSalesAllowance) {
	v.value = val
	v.isSet = true
}

func (v NullableBlockSalesAllowance) IsSet() bool {
	return v.isSet
}

func (v *NullableBlockSalesAllowance) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBlockSalesAllowance(val *BlockSalesAllowance) *NullableBlockSalesAllowance {
	return &NullableBlockSalesAllowance{value: val, isSet: true}
}

func (v NullableBlockSalesAllowance) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBlockSalesAllowance) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


