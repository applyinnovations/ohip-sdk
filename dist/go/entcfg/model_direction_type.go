/*
OPERA Cloud Enterprise Configuration API

APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package entcfg

import (
	"encoding/json"
)

// checks if the DirectionType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &DirectionType{}

// DirectionType Direction details to get into Hotel.
type DirectionType struct {
	// Description about the Hotel direction.
	Description *string `json:"description,omitempty"`
	// Title of Hotel direction.
	Title *string `json:"title,omitempty"`
}

// NewDirectionType instantiates a new DirectionType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewDirectionType() *DirectionType {
	this := DirectionType{}
	return &this
}

// NewDirectionTypeWithDefaults instantiates a new DirectionType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewDirectionTypeWithDefaults() *DirectionType {
	this := DirectionType{}
	return &this
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *DirectionType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DirectionType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *DirectionType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *DirectionType) SetDescription(v string) {
	o.Description = &v
}

// GetTitle returns the Title field value if set, zero value otherwise.
func (o *DirectionType) GetTitle() string {
	if o == nil || IsNil(o.Title) {
		var ret string
		return ret
	}
	return *o.Title
}

// GetTitleOk returns a tuple with the Title field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DirectionType) GetTitleOk() (*string, bool) {
	if o == nil || IsNil(o.Title) {
		return nil, false
	}
	return o.Title, true
}

// HasTitle returns a boolean if a field has been set.
func (o *DirectionType) HasTitle() bool {
	if o != nil && !IsNil(o.Title) {
		return true
	}

	return false
}

// SetTitle gets a reference to the given string and assigns it to the Title field.
func (o *DirectionType) SetTitle(v string) {
	o.Title = &v
}

func (o DirectionType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o DirectionType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.Title) {
		toSerialize["title"] = o.Title
	}
	return toSerialize, nil
}

type NullableDirectionType struct {
	value *DirectionType
	isSet bool
}

func (v NullableDirectionType) Get() *DirectionType {
	return v.value
}

func (v *NullableDirectionType) Set(val *DirectionType) {
	v.value = val
	v.isSet = true
}

func (v NullableDirectionType) IsSet() bool {
	return v.isSet
}

func (v *NullableDirectionType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableDirectionType(val *DirectionType) *NullableDirectionType {
	return &NullableDirectionType{value: val, isSet: true}
}

func (v NullableDirectionType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableDirectionType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


