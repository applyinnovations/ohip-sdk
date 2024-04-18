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

// checks if the NextBlockStatusCodeDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &NextBlockStatusCodeDetails{}

// NextBlockStatusCodeDetails Response object for fetching next block status codes.
type NextBlockStatusCodeDetails struct {
	// Block status code information.
	BlockStatusCodeMasterList []BlockStatusCodeType `json:"blockStatusCodeMasterList,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Block status code with its next configured and/or available status codes.
	NextBlockStatusCodeList []NextBlockStatusCodeType `json:"nextBlockStatusCodeList,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewNextBlockStatusCodeDetails instantiates a new NextBlockStatusCodeDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewNextBlockStatusCodeDetails() *NextBlockStatusCodeDetails {
	this := NextBlockStatusCodeDetails{}
	return &this
}

// NewNextBlockStatusCodeDetailsWithDefaults instantiates a new NextBlockStatusCodeDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewNextBlockStatusCodeDetailsWithDefaults() *NextBlockStatusCodeDetails {
	this := NextBlockStatusCodeDetails{}
	return &this
}

// GetBlockStatusCodeMasterList returns the BlockStatusCodeMasterList field value if set, zero value otherwise.
func (o *NextBlockStatusCodeDetails) GetBlockStatusCodeMasterList() []BlockStatusCodeType {
	if o == nil || IsNil(o.BlockStatusCodeMasterList) {
		var ret []BlockStatusCodeType
		return ret
	}
	return o.BlockStatusCodeMasterList
}

// GetBlockStatusCodeMasterListOk returns a tuple with the BlockStatusCodeMasterList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *NextBlockStatusCodeDetails) GetBlockStatusCodeMasterListOk() ([]BlockStatusCodeType, bool) {
	if o == nil || IsNil(o.BlockStatusCodeMasterList) {
		return nil, false
	}
	return o.BlockStatusCodeMasterList, true
}

// HasBlockStatusCodeMasterList returns a boolean if a field has been set.
func (o *NextBlockStatusCodeDetails) HasBlockStatusCodeMasterList() bool {
	if o != nil && !IsNil(o.BlockStatusCodeMasterList) {
		return true
	}

	return false
}

// SetBlockStatusCodeMasterList gets a reference to the given []BlockStatusCodeType and assigns it to the BlockStatusCodeMasterList field.
func (o *NextBlockStatusCodeDetails) SetBlockStatusCodeMasterList(v []BlockStatusCodeType) {
	o.BlockStatusCodeMasterList = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *NextBlockStatusCodeDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *NextBlockStatusCodeDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *NextBlockStatusCodeDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *NextBlockStatusCodeDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetNextBlockStatusCodeList returns the NextBlockStatusCodeList field value if set, zero value otherwise.
func (o *NextBlockStatusCodeDetails) GetNextBlockStatusCodeList() []NextBlockStatusCodeType {
	if o == nil || IsNil(o.NextBlockStatusCodeList) {
		var ret []NextBlockStatusCodeType
		return ret
	}
	return o.NextBlockStatusCodeList
}

// GetNextBlockStatusCodeListOk returns a tuple with the NextBlockStatusCodeList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *NextBlockStatusCodeDetails) GetNextBlockStatusCodeListOk() ([]NextBlockStatusCodeType, bool) {
	if o == nil || IsNil(o.NextBlockStatusCodeList) {
		return nil, false
	}
	return o.NextBlockStatusCodeList, true
}

// HasNextBlockStatusCodeList returns a boolean if a field has been set.
func (o *NextBlockStatusCodeDetails) HasNextBlockStatusCodeList() bool {
	if o != nil && !IsNil(o.NextBlockStatusCodeList) {
		return true
	}

	return false
}

// SetNextBlockStatusCodeList gets a reference to the given []NextBlockStatusCodeType and assigns it to the NextBlockStatusCodeList field.
func (o *NextBlockStatusCodeDetails) SetNextBlockStatusCodeList(v []NextBlockStatusCodeType) {
	o.NextBlockStatusCodeList = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *NextBlockStatusCodeDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *NextBlockStatusCodeDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *NextBlockStatusCodeDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *NextBlockStatusCodeDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o NextBlockStatusCodeDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o NextBlockStatusCodeDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BlockStatusCodeMasterList) {
		toSerialize["blockStatusCodeMasterList"] = o.BlockStatusCodeMasterList
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.NextBlockStatusCodeList) {
		toSerialize["nextBlockStatusCodeList"] = o.NextBlockStatusCodeList
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableNextBlockStatusCodeDetails struct {
	value *NextBlockStatusCodeDetails
	isSet bool
}

func (v NullableNextBlockStatusCodeDetails) Get() *NextBlockStatusCodeDetails {
	return v.value
}

func (v *NullableNextBlockStatusCodeDetails) Set(val *NextBlockStatusCodeDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableNextBlockStatusCodeDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableNextBlockStatusCodeDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableNextBlockStatusCodeDetails(val *NextBlockStatusCodeDetails) *NullableNextBlockStatusCodeDetails {
	return &NullableNextBlockStatusCodeDetails{value: val, isSet: true}
}

func (v NullableNextBlockStatusCodeDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableNextBlockStatusCodeDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

