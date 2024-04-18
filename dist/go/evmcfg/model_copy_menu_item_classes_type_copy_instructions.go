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

// checks if the CopyMenuItemClassesTypeCopyInstructions type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CopyMenuItemClassesTypeCopyInstructions{}

// CopyMenuItemClassesTypeCopyInstructions Instructions which will be considered when copying from the template. If this element is not sent, all the flags will be ignored.
type CopyMenuItemClassesTypeCopyInstructions struct {
	// When true, this will copy the source block's room allocation counts to the new block.
	AssociatedItems *bool `json:"associatedItems,omitempty"`
}

// NewCopyMenuItemClassesTypeCopyInstructions instantiates a new CopyMenuItemClassesTypeCopyInstructions object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCopyMenuItemClassesTypeCopyInstructions() *CopyMenuItemClassesTypeCopyInstructions {
	this := CopyMenuItemClassesTypeCopyInstructions{}
	return &this
}

// NewCopyMenuItemClassesTypeCopyInstructionsWithDefaults instantiates a new CopyMenuItemClassesTypeCopyInstructions object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCopyMenuItemClassesTypeCopyInstructionsWithDefaults() *CopyMenuItemClassesTypeCopyInstructions {
	this := CopyMenuItemClassesTypeCopyInstructions{}
	return &this
}

// GetAssociatedItems returns the AssociatedItems field value if set, zero value otherwise.
func (o *CopyMenuItemClassesTypeCopyInstructions) GetAssociatedItems() bool {
	if o == nil || IsNil(o.AssociatedItems) {
		var ret bool
		return ret
	}
	return *o.AssociatedItems
}

// GetAssociatedItemsOk returns a tuple with the AssociatedItems field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyMenuItemClassesTypeCopyInstructions) GetAssociatedItemsOk() (*bool, bool) {
	if o == nil || IsNil(o.AssociatedItems) {
		return nil, false
	}
	return o.AssociatedItems, true
}

// HasAssociatedItems returns a boolean if a field has been set.
func (o *CopyMenuItemClassesTypeCopyInstructions) HasAssociatedItems() bool {
	if o != nil && !IsNil(o.AssociatedItems) {
		return true
	}

	return false
}

// SetAssociatedItems gets a reference to the given bool and assigns it to the AssociatedItems field.
func (o *CopyMenuItemClassesTypeCopyInstructions) SetAssociatedItems(v bool) {
	o.AssociatedItems = &v
}

func (o CopyMenuItemClassesTypeCopyInstructions) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CopyMenuItemClassesTypeCopyInstructions) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AssociatedItems) {
		toSerialize["associatedItems"] = o.AssociatedItems
	}
	return toSerialize, nil
}

type NullableCopyMenuItemClassesTypeCopyInstructions struct {
	value *CopyMenuItemClassesTypeCopyInstructions
	isSet bool
}

func (v NullableCopyMenuItemClassesTypeCopyInstructions) Get() *CopyMenuItemClassesTypeCopyInstructions {
	return v.value
}

func (v *NullableCopyMenuItemClassesTypeCopyInstructions) Set(val *CopyMenuItemClassesTypeCopyInstructions) {
	v.value = val
	v.isSet = true
}

func (v NullableCopyMenuItemClassesTypeCopyInstructions) IsSet() bool {
	return v.isSet
}

func (v *NullableCopyMenuItemClassesTypeCopyInstructions) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCopyMenuItemClassesTypeCopyInstructions(val *CopyMenuItemClassesTypeCopyInstructions) *NullableCopyMenuItemClassesTypeCopyInstructions {
	return &NullableCopyMenuItemClassesTypeCopyInstructions{value: val, isSet: true}
}

func (v NullableCopyMenuItemClassesTypeCopyInstructions) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCopyMenuItemClassesTypeCopyInstructions) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

