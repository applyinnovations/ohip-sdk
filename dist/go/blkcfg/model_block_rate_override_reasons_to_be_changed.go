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

// checks if the BlockRateOverrideReasonsToBeChanged type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BlockRateOverrideReasonsToBeChanged{}

// BlockRateOverrideReasonsToBeChanged Request object for changing Block Rate Override Reasons.
type BlockRateOverrideReasonsToBeChanged struct {
	// List of Block Rate Override Reasons.
	BlockRateOverrideReasons []BlockRateOverrideReasonType `json:"blockRateOverrideReasons,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewBlockRateOverrideReasonsToBeChanged instantiates a new BlockRateOverrideReasonsToBeChanged object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBlockRateOverrideReasonsToBeChanged() *BlockRateOverrideReasonsToBeChanged {
	this := BlockRateOverrideReasonsToBeChanged{}
	return &this
}

// NewBlockRateOverrideReasonsToBeChangedWithDefaults instantiates a new BlockRateOverrideReasonsToBeChanged object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBlockRateOverrideReasonsToBeChangedWithDefaults() *BlockRateOverrideReasonsToBeChanged {
	this := BlockRateOverrideReasonsToBeChanged{}
	return &this
}

// GetBlockRateOverrideReasons returns the BlockRateOverrideReasons field value if set, zero value otherwise.
func (o *BlockRateOverrideReasonsToBeChanged) GetBlockRateOverrideReasons() []BlockRateOverrideReasonType {
	if o == nil || IsNil(o.BlockRateOverrideReasons) {
		var ret []BlockRateOverrideReasonType
		return ret
	}
	return o.BlockRateOverrideReasons
}

// GetBlockRateOverrideReasonsOk returns a tuple with the BlockRateOverrideReasons field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockRateOverrideReasonsToBeChanged) GetBlockRateOverrideReasonsOk() ([]BlockRateOverrideReasonType, bool) {
	if o == nil || IsNil(o.BlockRateOverrideReasons) {
		return nil, false
	}
	return o.BlockRateOverrideReasons, true
}

// HasBlockRateOverrideReasons returns a boolean if a field has been set.
func (o *BlockRateOverrideReasonsToBeChanged) HasBlockRateOverrideReasons() bool {
	if o != nil && !IsNil(o.BlockRateOverrideReasons) {
		return true
	}

	return false
}

// SetBlockRateOverrideReasons gets a reference to the given []BlockRateOverrideReasonType and assigns it to the BlockRateOverrideReasons field.
func (o *BlockRateOverrideReasonsToBeChanged) SetBlockRateOverrideReasons(v []BlockRateOverrideReasonType) {
	o.BlockRateOverrideReasons = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *BlockRateOverrideReasonsToBeChanged) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockRateOverrideReasonsToBeChanged) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *BlockRateOverrideReasonsToBeChanged) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *BlockRateOverrideReasonsToBeChanged) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *BlockRateOverrideReasonsToBeChanged) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockRateOverrideReasonsToBeChanged) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *BlockRateOverrideReasonsToBeChanged) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *BlockRateOverrideReasonsToBeChanged) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o BlockRateOverrideReasonsToBeChanged) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BlockRateOverrideReasonsToBeChanged) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BlockRateOverrideReasons) {
		toSerialize["blockRateOverrideReasons"] = o.BlockRateOverrideReasons
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableBlockRateOverrideReasonsToBeChanged struct {
	value *BlockRateOverrideReasonsToBeChanged
	isSet bool
}

func (v NullableBlockRateOverrideReasonsToBeChanged) Get() *BlockRateOverrideReasonsToBeChanged {
	return v.value
}

func (v *NullableBlockRateOverrideReasonsToBeChanged) Set(val *BlockRateOverrideReasonsToBeChanged) {
	v.value = val
	v.isSet = true
}

func (v NullableBlockRateOverrideReasonsToBeChanged) IsSet() bool {
	return v.isSet
}

func (v *NullableBlockRateOverrideReasonsToBeChanged) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBlockRateOverrideReasonsToBeChanged(val *BlockRateOverrideReasonsToBeChanged) *NullableBlockRateOverrideReasonsToBeChanged {
	return &NullableBlockRateOverrideReasonsToBeChanged{value: val, isSet: true}
}

func (v NullableBlockRateOverrideReasonsToBeChanged) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBlockRateOverrideReasonsToBeChanged) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

