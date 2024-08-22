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

// checks if the TelephoneCategoryType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TelephoneCategoryType{}

// TelephoneCategoryType This type definition of Telephone Category Type.
type TelephoneCategoryType struct {
	HotelId *string `json:"hotelId,omitempty"`
	Code *string `json:"code,omitempty"`
	Description *string `json:"description,omitempty"`
	OrderBy *int32 `json:"orderBy,omitempty"`
	Generic *bool `json:"generic,omitempty"`
}

// NewTelephoneCategoryType instantiates a new TelephoneCategoryType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTelephoneCategoryType() *TelephoneCategoryType {
	this := TelephoneCategoryType{}
	return &this
}

// NewTelephoneCategoryTypeWithDefaults instantiates a new TelephoneCategoryType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTelephoneCategoryTypeWithDefaults() *TelephoneCategoryType {
	this := TelephoneCategoryType{}
	return &this
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *TelephoneCategoryType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TelephoneCategoryType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *TelephoneCategoryType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *TelephoneCategoryType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *TelephoneCategoryType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TelephoneCategoryType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *TelephoneCategoryType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *TelephoneCategoryType) SetCode(v string) {
	o.Code = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *TelephoneCategoryType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TelephoneCategoryType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *TelephoneCategoryType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *TelephoneCategoryType) SetDescription(v string) {
	o.Description = &v
}

// GetOrderBy returns the OrderBy field value if set, zero value otherwise.
func (o *TelephoneCategoryType) GetOrderBy() int32 {
	if o == nil || IsNil(o.OrderBy) {
		var ret int32
		return ret
	}
	return *o.OrderBy
}

// GetOrderByOk returns a tuple with the OrderBy field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TelephoneCategoryType) GetOrderByOk() (*int32, bool) {
	if o == nil || IsNil(o.OrderBy) {
		return nil, false
	}
	return o.OrderBy, true
}

// HasOrderBy returns a boolean if a field has been set.
func (o *TelephoneCategoryType) HasOrderBy() bool {
	if o != nil && !IsNil(o.OrderBy) {
		return true
	}

	return false
}

// SetOrderBy gets a reference to the given int32 and assigns it to the OrderBy field.
func (o *TelephoneCategoryType) SetOrderBy(v int32) {
	o.OrderBy = &v
}

// GetGeneric returns the Generic field value if set, zero value otherwise.
func (o *TelephoneCategoryType) GetGeneric() bool {
	if o == nil || IsNil(o.Generic) {
		var ret bool
		return ret
	}
	return *o.Generic
}

// GetGenericOk returns a tuple with the Generic field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TelephoneCategoryType) GetGenericOk() (*bool, bool) {
	if o == nil || IsNil(o.Generic) {
		return nil, false
	}
	return o.Generic, true
}

// HasGeneric returns a boolean if a field has been set.
func (o *TelephoneCategoryType) HasGeneric() bool {
	if o != nil && !IsNil(o.Generic) {
		return true
	}

	return false
}

// SetGeneric gets a reference to the given bool and assigns it to the Generic field.
func (o *TelephoneCategoryType) SetGeneric(v bool) {
	o.Generic = &v
}

func (o TelephoneCategoryType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TelephoneCategoryType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.OrderBy) {
		toSerialize["orderBy"] = o.OrderBy
	}
	if !IsNil(o.Generic) {
		toSerialize["generic"] = o.Generic
	}
	return toSerialize, nil
}

type NullableTelephoneCategoryType struct {
	value *TelephoneCategoryType
	isSet bool
}

func (v NullableTelephoneCategoryType) Get() *TelephoneCategoryType {
	return v.value
}

func (v *NullableTelephoneCategoryType) Set(val *TelephoneCategoryType) {
	v.value = val
	v.isSet = true
}

func (v NullableTelephoneCategoryType) IsSet() bool {
	return v.isSet
}

func (v *NullableTelephoneCategoryType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTelephoneCategoryType(val *TelephoneCategoryType) *NullableTelephoneCategoryType {
	return &NullableTelephoneCategoryType{value: val, isSet: true}
}

func (v NullableTelephoneCategoryType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTelephoneCategoryType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


