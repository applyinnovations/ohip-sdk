/*
OPERA Cloud Event Configuration API

This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evmcfg

import (
	"encoding/json"
)

// checks if the CopyMenuItemClassesType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CopyMenuItemClassesType{}

// CopyMenuItemClassesType struct for CopyMenuItemClassesType
type CopyMenuItemClassesType struct {
	CopyInstructions *CopyMenuItemClassesTypeCopyInstructions `json:"copyInstructions,omitempty"`
	// Unique Id that references an object uniquely in the system.
	ItemClasses []UniqueIDType `json:"itemClasses,omitempty"`
	// Source Hotel code from where menu item classes needs to be copied
	SourceHotelCode *string `json:"sourceHotelCode,omitempty"`
	TargetHotelCodes []string `json:"targetHotelCodes,omitempty"`
}

// NewCopyMenuItemClassesType instantiates a new CopyMenuItemClassesType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCopyMenuItemClassesType() *CopyMenuItemClassesType {
	this := CopyMenuItemClassesType{}
	return &this
}

// NewCopyMenuItemClassesTypeWithDefaults instantiates a new CopyMenuItemClassesType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCopyMenuItemClassesTypeWithDefaults() *CopyMenuItemClassesType {
	this := CopyMenuItemClassesType{}
	return &this
}

// GetCopyInstructions returns the CopyInstructions field value if set, zero value otherwise.
func (o *CopyMenuItemClassesType) GetCopyInstructions() CopyMenuItemClassesTypeCopyInstructions {
	if o == nil || IsNil(o.CopyInstructions) {
		var ret CopyMenuItemClassesTypeCopyInstructions
		return ret
	}
	return *o.CopyInstructions
}

// GetCopyInstructionsOk returns a tuple with the CopyInstructions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyMenuItemClassesType) GetCopyInstructionsOk() (*CopyMenuItemClassesTypeCopyInstructions, bool) {
	if o == nil || IsNil(o.CopyInstructions) {
		return nil, false
	}
	return o.CopyInstructions, true
}

// HasCopyInstructions returns a boolean if a field has been set.
func (o *CopyMenuItemClassesType) HasCopyInstructions() bool {
	if o != nil && !IsNil(o.CopyInstructions) {
		return true
	}

	return false
}

// SetCopyInstructions gets a reference to the given CopyMenuItemClassesTypeCopyInstructions and assigns it to the CopyInstructions field.
func (o *CopyMenuItemClassesType) SetCopyInstructions(v CopyMenuItemClassesTypeCopyInstructions) {
	o.CopyInstructions = &v
}

// GetItemClasses returns the ItemClasses field value if set, zero value otherwise.
func (o *CopyMenuItemClassesType) GetItemClasses() []UniqueIDType {
	if o == nil || IsNil(o.ItemClasses) {
		var ret []UniqueIDType
		return ret
	}
	return o.ItemClasses
}

// GetItemClassesOk returns a tuple with the ItemClasses field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyMenuItemClassesType) GetItemClassesOk() ([]UniqueIDType, bool) {
	if o == nil || IsNil(o.ItemClasses) {
		return nil, false
	}
	return o.ItemClasses, true
}

// HasItemClasses returns a boolean if a field has been set.
func (o *CopyMenuItemClassesType) HasItemClasses() bool {
	if o != nil && !IsNil(o.ItemClasses) {
		return true
	}

	return false
}

// SetItemClasses gets a reference to the given []UniqueIDType and assigns it to the ItemClasses field.
func (o *CopyMenuItemClassesType) SetItemClasses(v []UniqueIDType) {
	o.ItemClasses = v
}

// GetSourceHotelCode returns the SourceHotelCode field value if set, zero value otherwise.
func (o *CopyMenuItemClassesType) GetSourceHotelCode() string {
	if o == nil || IsNil(o.SourceHotelCode) {
		var ret string
		return ret
	}
	return *o.SourceHotelCode
}

// GetSourceHotelCodeOk returns a tuple with the SourceHotelCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyMenuItemClassesType) GetSourceHotelCodeOk() (*string, bool) {
	if o == nil || IsNil(o.SourceHotelCode) {
		return nil, false
	}
	return o.SourceHotelCode, true
}

// HasSourceHotelCode returns a boolean if a field has been set.
func (o *CopyMenuItemClassesType) HasSourceHotelCode() bool {
	if o != nil && !IsNil(o.SourceHotelCode) {
		return true
	}

	return false
}

// SetSourceHotelCode gets a reference to the given string and assigns it to the SourceHotelCode field.
func (o *CopyMenuItemClassesType) SetSourceHotelCode(v string) {
	o.SourceHotelCode = &v
}

// GetTargetHotelCodes returns the TargetHotelCodes field value if set, zero value otherwise.
func (o *CopyMenuItemClassesType) GetTargetHotelCodes() []string {
	if o == nil || IsNil(o.TargetHotelCodes) {
		var ret []string
		return ret
	}
	return o.TargetHotelCodes
}

// GetTargetHotelCodesOk returns a tuple with the TargetHotelCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyMenuItemClassesType) GetTargetHotelCodesOk() ([]string, bool) {
	if o == nil || IsNil(o.TargetHotelCodes) {
		return nil, false
	}
	return o.TargetHotelCodes, true
}

// HasTargetHotelCodes returns a boolean if a field has been set.
func (o *CopyMenuItemClassesType) HasTargetHotelCodes() bool {
	if o != nil && !IsNil(o.TargetHotelCodes) {
		return true
	}

	return false
}

// SetTargetHotelCodes gets a reference to the given []string and assigns it to the TargetHotelCodes field.
func (o *CopyMenuItemClassesType) SetTargetHotelCodes(v []string) {
	o.TargetHotelCodes = v
}

func (o CopyMenuItemClassesType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CopyMenuItemClassesType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CopyInstructions) {
		toSerialize["copyInstructions"] = o.CopyInstructions
	}
	if !IsNil(o.ItemClasses) {
		toSerialize["itemClasses"] = o.ItemClasses
	}
	if !IsNil(o.SourceHotelCode) {
		toSerialize["sourceHotelCode"] = o.SourceHotelCode
	}
	if !IsNil(o.TargetHotelCodes) {
		toSerialize["targetHotelCodes"] = o.TargetHotelCodes
	}
	return toSerialize, nil
}

type NullableCopyMenuItemClassesType struct {
	value *CopyMenuItemClassesType
	isSet bool
}

func (v NullableCopyMenuItemClassesType) Get() *CopyMenuItemClassesType {
	return v.value
}

func (v *NullableCopyMenuItemClassesType) Set(val *CopyMenuItemClassesType) {
	v.value = val
	v.isSet = true
}

func (v NullableCopyMenuItemClassesType) IsSet() bool {
	return v.isSet
}

func (v *NullableCopyMenuItemClassesType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCopyMenuItemClassesType(val *CopyMenuItemClassesType) *NullableCopyMenuItemClassesType {
	return &NullableCopyMenuItemClassesType{value: val, isSet: true}
}

func (v NullableCopyMenuItemClassesType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCopyMenuItemClassesType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

