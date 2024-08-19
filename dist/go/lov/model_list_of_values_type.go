/*
OPERA Cloud List of Values Management API

APIs to cater for List of Value functionality in OPERA Cloud. A List of Values in the OPERA Application can be configured by a property.  Then by using these APIs you can retrieve all configured codes.  As an example, Titles is a configurable ListOfValues.  A hotel can specify what titles they wish to use, and thus fetching the LOV for title, you can view the codes that are configured for a property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package lov

import (
	"encoding/json"
)

// checks if the ListOfValuesType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ListOfValuesType{}

// ListOfValuesType struct for ListOfValuesType
type ListOfValuesType struct {
	Description *string `json:"description,omitempty"`
	ItemCount *int32 `json:"itemCount,omitempty"`
	Items []ItemType `json:"items,omitempty"`
	// List of Values name.
	LovName *string `json:"lovName,omitempty"`
}

// NewListOfValuesType instantiates a new ListOfValuesType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewListOfValuesType() *ListOfValuesType {
	this := ListOfValuesType{}
	return &this
}

// NewListOfValuesTypeWithDefaults instantiates a new ListOfValuesType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewListOfValuesTypeWithDefaults() *ListOfValuesType {
	this := ListOfValuesType{}
	return &this
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *ListOfValuesType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ListOfValuesType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *ListOfValuesType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *ListOfValuesType) SetDescription(v string) {
	o.Description = &v
}

// GetItemCount returns the ItemCount field value if set, zero value otherwise.
func (o *ListOfValuesType) GetItemCount() int32 {
	if o == nil || IsNil(o.ItemCount) {
		var ret int32
		return ret
	}
	return *o.ItemCount
}

// GetItemCountOk returns a tuple with the ItemCount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ListOfValuesType) GetItemCountOk() (*int32, bool) {
	if o == nil || IsNil(o.ItemCount) {
		return nil, false
	}
	return o.ItemCount, true
}

// HasItemCount returns a boolean if a field has been set.
func (o *ListOfValuesType) HasItemCount() bool {
	if o != nil && !IsNil(o.ItemCount) {
		return true
	}

	return false
}

// SetItemCount gets a reference to the given int32 and assigns it to the ItemCount field.
func (o *ListOfValuesType) SetItemCount(v int32) {
	o.ItemCount = &v
}

// GetItems returns the Items field value if set, zero value otherwise.
func (o *ListOfValuesType) GetItems() []ItemType {
	if o == nil || IsNil(o.Items) {
		var ret []ItemType
		return ret
	}
	return o.Items
}

// GetItemsOk returns a tuple with the Items field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ListOfValuesType) GetItemsOk() ([]ItemType, bool) {
	if o == nil || IsNil(o.Items) {
		return nil, false
	}
	return o.Items, true
}

// HasItems returns a boolean if a field has been set.
func (o *ListOfValuesType) HasItems() bool {
	if o != nil && !IsNil(o.Items) {
		return true
	}

	return false
}

// SetItems gets a reference to the given []ItemType and assigns it to the Items field.
func (o *ListOfValuesType) SetItems(v []ItemType) {
	o.Items = v
}

// GetLovName returns the LovName field value if set, zero value otherwise.
func (o *ListOfValuesType) GetLovName() string {
	if o == nil || IsNil(o.LovName) {
		var ret string
		return ret
	}
	return *o.LovName
}

// GetLovNameOk returns a tuple with the LovName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ListOfValuesType) GetLovNameOk() (*string, bool) {
	if o == nil || IsNil(o.LovName) {
		return nil, false
	}
	return o.LovName, true
}

// HasLovName returns a boolean if a field has been set.
func (o *ListOfValuesType) HasLovName() bool {
	if o != nil && !IsNil(o.LovName) {
		return true
	}

	return false
}

// SetLovName gets a reference to the given string and assigns it to the LovName field.
func (o *ListOfValuesType) SetLovName(v string) {
	o.LovName = &v
}

func (o ListOfValuesType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ListOfValuesType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.ItemCount) {
		toSerialize["itemCount"] = o.ItemCount
	}
	if !IsNil(o.Items) {
		toSerialize["items"] = o.Items
	}
	if !IsNil(o.LovName) {
		toSerialize["lovName"] = o.LovName
	}
	return toSerialize, nil
}

type NullableListOfValuesType struct {
	value *ListOfValuesType
	isSet bool
}

func (v NullableListOfValuesType) Get() *ListOfValuesType {
	return v.value
}

func (v *NullableListOfValuesType) Set(val *ListOfValuesType) {
	v.value = val
	v.isSet = true
}

func (v NullableListOfValuesType) IsSet() bool {
	return v.isSet
}

func (v *NullableListOfValuesType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableListOfValuesType(val *ListOfValuesType) *NullableListOfValuesType {
	return &NullableListOfValuesType{value: val, isSet: true}
}

func (v NullableListOfValuesType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableListOfValuesType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


