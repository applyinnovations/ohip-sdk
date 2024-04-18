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

// checks if the BlockLostBookingCodesCriteria type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BlockLostBookingCodesCriteria{}

// BlockLostBookingCodesCriteria Request object for creating Block Lost Booking Codes.
type BlockLostBookingCodesCriteria struct {
	// List of Block Lost Booking Codes.
	BlockLostBookingCodes []BlockLostBookingCodeType `json:"blockLostBookingCodes,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewBlockLostBookingCodesCriteria instantiates a new BlockLostBookingCodesCriteria object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBlockLostBookingCodesCriteria() *BlockLostBookingCodesCriteria {
	this := BlockLostBookingCodesCriteria{}
	return &this
}

// NewBlockLostBookingCodesCriteriaWithDefaults instantiates a new BlockLostBookingCodesCriteria object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBlockLostBookingCodesCriteriaWithDefaults() *BlockLostBookingCodesCriteria {
	this := BlockLostBookingCodesCriteria{}
	return &this
}

// GetBlockLostBookingCodes returns the BlockLostBookingCodes field value if set, zero value otherwise.
func (o *BlockLostBookingCodesCriteria) GetBlockLostBookingCodes() []BlockLostBookingCodeType {
	if o == nil || IsNil(o.BlockLostBookingCodes) {
		var ret []BlockLostBookingCodeType
		return ret
	}
	return o.BlockLostBookingCodes
}

// GetBlockLostBookingCodesOk returns a tuple with the BlockLostBookingCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockLostBookingCodesCriteria) GetBlockLostBookingCodesOk() ([]BlockLostBookingCodeType, bool) {
	if o == nil || IsNil(o.BlockLostBookingCodes) {
		return nil, false
	}
	return o.BlockLostBookingCodes, true
}

// HasBlockLostBookingCodes returns a boolean if a field has been set.
func (o *BlockLostBookingCodesCriteria) HasBlockLostBookingCodes() bool {
	if o != nil && !IsNil(o.BlockLostBookingCodes) {
		return true
	}

	return false
}

// SetBlockLostBookingCodes gets a reference to the given []BlockLostBookingCodeType and assigns it to the BlockLostBookingCodes field.
func (o *BlockLostBookingCodesCriteria) SetBlockLostBookingCodes(v []BlockLostBookingCodeType) {
	o.BlockLostBookingCodes = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *BlockLostBookingCodesCriteria) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockLostBookingCodesCriteria) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *BlockLostBookingCodesCriteria) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *BlockLostBookingCodesCriteria) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *BlockLostBookingCodesCriteria) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockLostBookingCodesCriteria) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *BlockLostBookingCodesCriteria) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *BlockLostBookingCodesCriteria) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o BlockLostBookingCodesCriteria) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BlockLostBookingCodesCriteria) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BlockLostBookingCodes) {
		toSerialize["blockLostBookingCodes"] = o.BlockLostBookingCodes
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableBlockLostBookingCodesCriteria struct {
	value *BlockLostBookingCodesCriteria
	isSet bool
}

func (v NullableBlockLostBookingCodesCriteria) Get() *BlockLostBookingCodesCriteria {
	return v.value
}

func (v *NullableBlockLostBookingCodesCriteria) Set(val *BlockLostBookingCodesCriteria) {
	v.value = val
	v.isSet = true
}

func (v NullableBlockLostBookingCodesCriteria) IsSet() bool {
	return v.isSet
}

func (v *NullableBlockLostBookingCodesCriteria) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBlockLostBookingCodesCriteria(val *BlockLostBookingCodesCriteria) *NullableBlockLostBookingCodesCriteria {
	return &NullableBlockLostBookingCodesCriteria{value: val, isSet: true}
}

func (v NullableBlockLostBookingCodesCriteria) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBlockLostBookingCodesCriteria) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

