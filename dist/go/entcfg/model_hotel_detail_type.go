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

// checks if the HotelDetailType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HotelDetailType{}

// HotelDetailType Base details used for storing information about a hotel detail.
type HotelDetailType struct {
	// Specifies the hotel detail code.
	Code *string `json:"code,omitempty"`
	// Specifies the hotel detail description.
	Description *string `json:"description,omitempty"`
	// Specifies the hotel detail category.
	Category *string `json:"category,omitempty"`
	// Specifies the sorting sequence number for the hotel detail.
	Sequence *int32 `json:"sequence,omitempty"`
	// Specifies the hotel code of the hotel detail.
	HotelId *string `json:"hotelId,omitempty"`
	// Collection of property level hotel detail values.
	HotelDetailValues []HotelDetailValueType `json:"hotelDetailValues,omitempty"`
}

// NewHotelDetailType instantiates a new HotelDetailType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHotelDetailType() *HotelDetailType {
	this := HotelDetailType{}
	return &this
}

// NewHotelDetailTypeWithDefaults instantiates a new HotelDetailType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHotelDetailTypeWithDefaults() *HotelDetailType {
	this := HotelDetailType{}
	return &this
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *HotelDetailType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelDetailType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *HotelDetailType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *HotelDetailType) SetCode(v string) {
	o.Code = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *HotelDetailType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelDetailType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *HotelDetailType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *HotelDetailType) SetDescription(v string) {
	o.Description = &v
}

// GetCategory returns the Category field value if set, zero value otherwise.
func (o *HotelDetailType) GetCategory() string {
	if o == nil || IsNil(o.Category) {
		var ret string
		return ret
	}
	return *o.Category
}

// GetCategoryOk returns a tuple with the Category field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelDetailType) GetCategoryOk() (*string, bool) {
	if o == nil || IsNil(o.Category) {
		return nil, false
	}
	return o.Category, true
}

// HasCategory returns a boolean if a field has been set.
func (o *HotelDetailType) HasCategory() bool {
	if o != nil && !IsNil(o.Category) {
		return true
	}

	return false
}

// SetCategory gets a reference to the given string and assigns it to the Category field.
func (o *HotelDetailType) SetCategory(v string) {
	o.Category = &v
}

// GetSequence returns the Sequence field value if set, zero value otherwise.
func (o *HotelDetailType) GetSequence() int32 {
	if o == nil || IsNil(o.Sequence) {
		var ret int32
		return ret
	}
	return *o.Sequence
}

// GetSequenceOk returns a tuple with the Sequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelDetailType) GetSequenceOk() (*int32, bool) {
	if o == nil || IsNil(o.Sequence) {
		return nil, false
	}
	return o.Sequence, true
}

// HasSequence returns a boolean if a field has been set.
func (o *HotelDetailType) HasSequence() bool {
	if o != nil && !IsNil(o.Sequence) {
		return true
	}

	return false
}

// SetSequence gets a reference to the given int32 and assigns it to the Sequence field.
func (o *HotelDetailType) SetSequence(v int32) {
	o.Sequence = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *HotelDetailType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelDetailType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *HotelDetailType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *HotelDetailType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetHotelDetailValues returns the HotelDetailValues field value if set, zero value otherwise.
func (o *HotelDetailType) GetHotelDetailValues() []HotelDetailValueType {
	if o == nil || IsNil(o.HotelDetailValues) {
		var ret []HotelDetailValueType
		return ret
	}
	return o.HotelDetailValues
}

// GetHotelDetailValuesOk returns a tuple with the HotelDetailValues field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelDetailType) GetHotelDetailValuesOk() ([]HotelDetailValueType, bool) {
	if o == nil || IsNil(o.HotelDetailValues) {
		return nil, false
	}
	return o.HotelDetailValues, true
}

// HasHotelDetailValues returns a boolean if a field has been set.
func (o *HotelDetailType) HasHotelDetailValues() bool {
	if o != nil && !IsNil(o.HotelDetailValues) {
		return true
	}

	return false
}

// SetHotelDetailValues gets a reference to the given []HotelDetailValueType and assigns it to the HotelDetailValues field.
func (o *HotelDetailType) SetHotelDetailValues(v []HotelDetailValueType) {
	o.HotelDetailValues = v
}

func (o HotelDetailType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HotelDetailType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.Category) {
		toSerialize["category"] = o.Category
	}
	if !IsNil(o.Sequence) {
		toSerialize["sequence"] = o.Sequence
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.HotelDetailValues) {
		toSerialize["hotelDetailValues"] = o.HotelDetailValues
	}
	return toSerialize, nil
}

type NullableHotelDetailType struct {
	value *HotelDetailType
	isSet bool
}

func (v NullableHotelDetailType) Get() *HotelDetailType {
	return v.value
}

func (v *NullableHotelDetailType) Set(val *HotelDetailType) {
	v.value = val
	v.isSet = true
}

func (v NullableHotelDetailType) IsSet() bool {
	return v.isSet
}

func (v *NullableHotelDetailType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHotelDetailType(val *HotelDetailType) *NullableHotelDetailType {
	return &NullableHotelDetailType{value: val, isSet: true}
}

func (v NullableHotelDetailType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHotelDetailType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

