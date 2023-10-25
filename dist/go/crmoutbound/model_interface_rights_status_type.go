/*
OPERA Cloud Customer Relationship Management Outbound API

APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 20.99.99.99
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crmoutbound

import (
	"encoding/json"
)

// checks if the InterfaceRightsStatusType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &InterfaceRightsStatusType{}

// InterfaceRightsStatusType struct for InterfaceRightsStatusType
type InterfaceRightsStatusType struct {
	// Internal code for each allowed right of a Hotel Interface record.
	Right *int32 `json:"right,omitempty"`
	// User defined code for an Interface Right.
	StatusCode *string `json:"statusCode,omitempty"`
	// User defined description for an Interface Right.
	Description *string `json:"description,omitempty"`
	// Category code of this interface right.
	Category *string `json:"category,omitempty"`
}

// NewInterfaceRightsStatusType instantiates a new InterfaceRightsStatusType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewInterfaceRightsStatusType() *InterfaceRightsStatusType {
	this := InterfaceRightsStatusType{}
	return &this
}

// NewInterfaceRightsStatusTypeWithDefaults instantiates a new InterfaceRightsStatusType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewInterfaceRightsStatusTypeWithDefaults() *InterfaceRightsStatusType {
	this := InterfaceRightsStatusType{}
	return &this
}

// GetRight returns the Right field value if set, zero value otherwise.
func (o *InterfaceRightsStatusType) GetRight() int32 {
	if o == nil || IsNil(o.Right) {
		var ret int32
		return ret
	}
	return *o.Right
}

// GetRightOk returns a tuple with the Right field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InterfaceRightsStatusType) GetRightOk() (*int32, bool) {
	if o == nil || IsNil(o.Right) {
		return nil, false
	}
	return o.Right, true
}

// HasRight returns a boolean if a field has been set.
func (o *InterfaceRightsStatusType) HasRight() bool {
	if o != nil && !IsNil(o.Right) {
		return true
	}

	return false
}

// SetRight gets a reference to the given int32 and assigns it to the Right field.
func (o *InterfaceRightsStatusType) SetRight(v int32) {
	o.Right = &v
}

// GetStatusCode returns the StatusCode field value if set, zero value otherwise.
func (o *InterfaceRightsStatusType) GetStatusCode() string {
	if o == nil || IsNil(o.StatusCode) {
		var ret string
		return ret
	}
	return *o.StatusCode
}

// GetStatusCodeOk returns a tuple with the StatusCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InterfaceRightsStatusType) GetStatusCodeOk() (*string, bool) {
	if o == nil || IsNil(o.StatusCode) {
		return nil, false
	}
	return o.StatusCode, true
}

// HasStatusCode returns a boolean if a field has been set.
func (o *InterfaceRightsStatusType) HasStatusCode() bool {
	if o != nil && !IsNil(o.StatusCode) {
		return true
	}

	return false
}

// SetStatusCode gets a reference to the given string and assigns it to the StatusCode field.
func (o *InterfaceRightsStatusType) SetStatusCode(v string) {
	o.StatusCode = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *InterfaceRightsStatusType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InterfaceRightsStatusType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *InterfaceRightsStatusType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *InterfaceRightsStatusType) SetDescription(v string) {
	o.Description = &v
}

// GetCategory returns the Category field value if set, zero value otherwise.
func (o *InterfaceRightsStatusType) GetCategory() string {
	if o == nil || IsNil(o.Category) {
		var ret string
		return ret
	}
	return *o.Category
}

// GetCategoryOk returns a tuple with the Category field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InterfaceRightsStatusType) GetCategoryOk() (*string, bool) {
	if o == nil || IsNil(o.Category) {
		return nil, false
	}
	return o.Category, true
}

// HasCategory returns a boolean if a field has been set.
func (o *InterfaceRightsStatusType) HasCategory() bool {
	if o != nil && !IsNil(o.Category) {
		return true
	}

	return false
}

// SetCategory gets a reference to the given string and assigns it to the Category field.
func (o *InterfaceRightsStatusType) SetCategory(v string) {
	o.Category = &v
}

func (o InterfaceRightsStatusType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o InterfaceRightsStatusType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Right) {
		toSerialize["right"] = o.Right
	}
	if !IsNil(o.StatusCode) {
		toSerialize["statusCode"] = o.StatusCode
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.Category) {
		toSerialize["category"] = o.Category
	}
	return toSerialize, nil
}

type NullableInterfaceRightsStatusType struct {
	value *InterfaceRightsStatusType
	isSet bool
}

func (v NullableInterfaceRightsStatusType) Get() *InterfaceRightsStatusType {
	return v.value
}

func (v *NullableInterfaceRightsStatusType) Set(val *InterfaceRightsStatusType) {
	v.value = val
	v.isSet = true
}

func (v NullableInterfaceRightsStatusType) IsSet() bool {
	return v.isSet
}

func (v *NullableInterfaceRightsStatusType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableInterfaceRightsStatusType(val *InterfaceRightsStatusType) *NullableInterfaceRightsStatusType {
	return &NullableInterfaceRightsStatusType{value: val, isSet: true}
}

func (v NullableInterfaceRightsStatusType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableInterfaceRightsStatusType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


