/*
OPERA Cloud Sales Event Management API

APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evm

import (
	"encoding/json"
)

// checks if the QuickInsertResourceType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &QuickInsertResourceType{}

// QuickInsertResourceType Quick insert resource type.
type QuickInsertResourceType struct {
	// Flag to indicate if menu, item or item template is part of a package.
	IncludeInPackage *bool `json:"includeInPackage,omitempty"`
	// Quantity of the menu, item or item template.
	Quantity *float32 `json:"quantity,omitempty"`
	// Text that represents quick insert number of menu, item or item template name.
	QuickInsertText *string `json:"quickInsertText,omitempty"`
}

// NewQuickInsertResourceType instantiates a new QuickInsertResourceType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewQuickInsertResourceType() *QuickInsertResourceType {
	this := QuickInsertResourceType{}
	return &this
}

// NewQuickInsertResourceTypeWithDefaults instantiates a new QuickInsertResourceType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewQuickInsertResourceTypeWithDefaults() *QuickInsertResourceType {
	this := QuickInsertResourceType{}
	return &this
}

// GetIncludeInPackage returns the IncludeInPackage field value if set, zero value otherwise.
func (o *QuickInsertResourceType) GetIncludeInPackage() bool {
	if o == nil || IsNil(o.IncludeInPackage) {
		var ret bool
		return ret
	}
	return *o.IncludeInPackage
}

// GetIncludeInPackageOk returns a tuple with the IncludeInPackage field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *QuickInsertResourceType) GetIncludeInPackageOk() (*bool, bool) {
	if o == nil || IsNil(o.IncludeInPackage) {
		return nil, false
	}
	return o.IncludeInPackage, true
}

// HasIncludeInPackage returns a boolean if a field has been set.
func (o *QuickInsertResourceType) HasIncludeInPackage() bool {
	if o != nil && !IsNil(o.IncludeInPackage) {
		return true
	}

	return false
}

// SetIncludeInPackage gets a reference to the given bool and assigns it to the IncludeInPackage field.
func (o *QuickInsertResourceType) SetIncludeInPackage(v bool) {
	o.IncludeInPackage = &v
}

// GetQuantity returns the Quantity field value if set, zero value otherwise.
func (o *QuickInsertResourceType) GetQuantity() float32 {
	if o == nil || IsNil(o.Quantity) {
		var ret float32
		return ret
	}
	return *o.Quantity
}

// GetQuantityOk returns a tuple with the Quantity field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *QuickInsertResourceType) GetQuantityOk() (*float32, bool) {
	if o == nil || IsNil(o.Quantity) {
		return nil, false
	}
	return o.Quantity, true
}

// HasQuantity returns a boolean if a field has been set.
func (o *QuickInsertResourceType) HasQuantity() bool {
	if o != nil && !IsNil(o.Quantity) {
		return true
	}

	return false
}

// SetQuantity gets a reference to the given float32 and assigns it to the Quantity field.
func (o *QuickInsertResourceType) SetQuantity(v float32) {
	o.Quantity = &v
}

// GetQuickInsertText returns the QuickInsertText field value if set, zero value otherwise.
func (o *QuickInsertResourceType) GetQuickInsertText() string {
	if o == nil || IsNil(o.QuickInsertText) {
		var ret string
		return ret
	}
	return *o.QuickInsertText
}

// GetQuickInsertTextOk returns a tuple with the QuickInsertText field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *QuickInsertResourceType) GetQuickInsertTextOk() (*string, bool) {
	if o == nil || IsNil(o.QuickInsertText) {
		return nil, false
	}
	return o.QuickInsertText, true
}

// HasQuickInsertText returns a boolean if a field has been set.
func (o *QuickInsertResourceType) HasQuickInsertText() bool {
	if o != nil && !IsNil(o.QuickInsertText) {
		return true
	}

	return false
}

// SetQuickInsertText gets a reference to the given string and assigns it to the QuickInsertText field.
func (o *QuickInsertResourceType) SetQuickInsertText(v string) {
	o.QuickInsertText = &v
}

func (o QuickInsertResourceType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o QuickInsertResourceType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.IncludeInPackage) {
		toSerialize["includeInPackage"] = o.IncludeInPackage
	}
	if !IsNil(o.Quantity) {
		toSerialize["quantity"] = o.Quantity
	}
	if !IsNil(o.QuickInsertText) {
		toSerialize["quickInsertText"] = o.QuickInsertText
	}
	return toSerialize, nil
}

type NullableQuickInsertResourceType struct {
	value *QuickInsertResourceType
	isSet bool
}

func (v NullableQuickInsertResourceType) Get() *QuickInsertResourceType {
	return v.value
}

func (v *NullableQuickInsertResourceType) Set(val *QuickInsertResourceType) {
	v.value = val
	v.isSet = true
}

func (v NullableQuickInsertResourceType) IsSet() bool {
	return v.isSet
}

func (v *NullableQuickInsertResourceType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableQuickInsertResourceType(val *QuickInsertResourceType) *NullableQuickInsertResourceType {
	return &NullableQuickInsertResourceType{value: val, isSet: true}
}

func (v NullableQuickInsertResourceType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableQuickInsertResourceType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


