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

// checks if the ListOfValuesMatchType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ListOfValuesMatchType{}

// ListOfValuesMatchType This is a prototype element for the LOV validation.
type ListOfValuesMatchType struct {
	CloseMatchingItems []ItemType `json:"closeMatchingItems,omitempty"`
	Description *string `json:"description,omitempty"`
	// List of Values name.
	LovName *string `json:"lovName,omitempty"`
	MatchingItems []ItemType `json:"matchingItems,omitempty"`
	NonMatchingItems []ItemType `json:"nonMatchingItems,omitempty"`
}

// NewListOfValuesMatchType instantiates a new ListOfValuesMatchType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewListOfValuesMatchType() *ListOfValuesMatchType {
	this := ListOfValuesMatchType{}
	return &this
}

// NewListOfValuesMatchTypeWithDefaults instantiates a new ListOfValuesMatchType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewListOfValuesMatchTypeWithDefaults() *ListOfValuesMatchType {
	this := ListOfValuesMatchType{}
	return &this
}

// GetCloseMatchingItems returns the CloseMatchingItems field value if set, zero value otherwise.
func (o *ListOfValuesMatchType) GetCloseMatchingItems() []ItemType {
	if o == nil || IsNil(o.CloseMatchingItems) {
		var ret []ItemType
		return ret
	}
	return o.CloseMatchingItems
}

// GetCloseMatchingItemsOk returns a tuple with the CloseMatchingItems field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ListOfValuesMatchType) GetCloseMatchingItemsOk() ([]ItemType, bool) {
	if o == nil || IsNil(o.CloseMatchingItems) {
		return nil, false
	}
	return o.CloseMatchingItems, true
}

// HasCloseMatchingItems returns a boolean if a field has been set.
func (o *ListOfValuesMatchType) HasCloseMatchingItems() bool {
	if o != nil && !IsNil(o.CloseMatchingItems) {
		return true
	}

	return false
}

// SetCloseMatchingItems gets a reference to the given []ItemType and assigns it to the CloseMatchingItems field.
func (o *ListOfValuesMatchType) SetCloseMatchingItems(v []ItemType) {
	o.CloseMatchingItems = v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *ListOfValuesMatchType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ListOfValuesMatchType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *ListOfValuesMatchType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *ListOfValuesMatchType) SetDescription(v string) {
	o.Description = &v
}

// GetLovName returns the LovName field value if set, zero value otherwise.
func (o *ListOfValuesMatchType) GetLovName() string {
	if o == nil || IsNil(o.LovName) {
		var ret string
		return ret
	}
	return *o.LovName
}

// GetLovNameOk returns a tuple with the LovName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ListOfValuesMatchType) GetLovNameOk() (*string, bool) {
	if o == nil || IsNil(o.LovName) {
		return nil, false
	}
	return o.LovName, true
}

// HasLovName returns a boolean if a field has been set.
func (o *ListOfValuesMatchType) HasLovName() bool {
	if o != nil && !IsNil(o.LovName) {
		return true
	}

	return false
}

// SetLovName gets a reference to the given string and assigns it to the LovName field.
func (o *ListOfValuesMatchType) SetLovName(v string) {
	o.LovName = &v
}

// GetMatchingItems returns the MatchingItems field value if set, zero value otherwise.
func (o *ListOfValuesMatchType) GetMatchingItems() []ItemType {
	if o == nil || IsNil(o.MatchingItems) {
		var ret []ItemType
		return ret
	}
	return o.MatchingItems
}

// GetMatchingItemsOk returns a tuple with the MatchingItems field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ListOfValuesMatchType) GetMatchingItemsOk() ([]ItemType, bool) {
	if o == nil || IsNil(o.MatchingItems) {
		return nil, false
	}
	return o.MatchingItems, true
}

// HasMatchingItems returns a boolean if a field has been set.
func (o *ListOfValuesMatchType) HasMatchingItems() bool {
	if o != nil && !IsNil(o.MatchingItems) {
		return true
	}

	return false
}

// SetMatchingItems gets a reference to the given []ItemType and assigns it to the MatchingItems field.
func (o *ListOfValuesMatchType) SetMatchingItems(v []ItemType) {
	o.MatchingItems = v
}

// GetNonMatchingItems returns the NonMatchingItems field value if set, zero value otherwise.
func (o *ListOfValuesMatchType) GetNonMatchingItems() []ItemType {
	if o == nil || IsNil(o.NonMatchingItems) {
		var ret []ItemType
		return ret
	}
	return o.NonMatchingItems
}

// GetNonMatchingItemsOk returns a tuple with the NonMatchingItems field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ListOfValuesMatchType) GetNonMatchingItemsOk() ([]ItemType, bool) {
	if o == nil || IsNil(o.NonMatchingItems) {
		return nil, false
	}
	return o.NonMatchingItems, true
}

// HasNonMatchingItems returns a boolean if a field has been set.
func (o *ListOfValuesMatchType) HasNonMatchingItems() bool {
	if o != nil && !IsNil(o.NonMatchingItems) {
		return true
	}

	return false
}

// SetNonMatchingItems gets a reference to the given []ItemType and assigns it to the NonMatchingItems field.
func (o *ListOfValuesMatchType) SetNonMatchingItems(v []ItemType) {
	o.NonMatchingItems = v
}

func (o ListOfValuesMatchType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ListOfValuesMatchType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CloseMatchingItems) {
		toSerialize["closeMatchingItems"] = o.CloseMatchingItems
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.LovName) {
		toSerialize["lovName"] = o.LovName
	}
	if !IsNil(o.MatchingItems) {
		toSerialize["matchingItems"] = o.MatchingItems
	}
	if !IsNil(o.NonMatchingItems) {
		toSerialize["nonMatchingItems"] = o.NonMatchingItems
	}
	return toSerialize, nil
}

type NullableListOfValuesMatchType struct {
	value *ListOfValuesMatchType
	isSet bool
}

func (v NullableListOfValuesMatchType) Get() *ListOfValuesMatchType {
	return v.value
}

func (v *NullableListOfValuesMatchType) Set(val *ListOfValuesMatchType) {
	v.value = val
	v.isSet = true
}

func (v NullableListOfValuesMatchType) IsSet() bool {
	return v.isSet
}

func (v *NullableListOfValuesMatchType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableListOfValuesMatchType(val *ListOfValuesMatchType) *NullableListOfValuesMatchType {
	return &NullableListOfValuesMatchType{value: val, isSet: true}
}

func (v NullableListOfValuesMatchType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableListOfValuesMatchType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


