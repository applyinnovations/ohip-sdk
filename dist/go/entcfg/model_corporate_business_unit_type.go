/*
OPERA Cloud Enterprise Configuration API

APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package entcfg

import (
	"encoding/json"
)

// checks if the CorporateBusinessUnitType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CorporateBusinessUnitType{}

// CorporateBusinessUnitType Contains Common Master configuration detail.
type CorporateBusinessUnitType struct {
	// Common Master unique code.
	Code *string `json:"code,omitempty"`
	Description *TranslationTextType2000 `json:"description,omitempty"`
	// Common Master record sequence number.
	DisplayOrder *float32 `json:"displayOrder,omitempty"`
}

// NewCorporateBusinessUnitType instantiates a new CorporateBusinessUnitType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCorporateBusinessUnitType() *CorporateBusinessUnitType {
	this := CorporateBusinessUnitType{}
	return &this
}

// NewCorporateBusinessUnitTypeWithDefaults instantiates a new CorporateBusinessUnitType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCorporateBusinessUnitTypeWithDefaults() *CorporateBusinessUnitType {
	this := CorporateBusinessUnitType{}
	return &this
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *CorporateBusinessUnitType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CorporateBusinessUnitType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *CorporateBusinessUnitType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *CorporateBusinessUnitType) SetCode(v string) {
	o.Code = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *CorporateBusinessUnitType) GetDescription() TranslationTextType2000 {
	if o == nil || IsNil(o.Description) {
		var ret TranslationTextType2000
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CorporateBusinessUnitType) GetDescriptionOk() (*TranslationTextType2000, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *CorporateBusinessUnitType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given TranslationTextType2000 and assigns it to the Description field.
func (o *CorporateBusinessUnitType) SetDescription(v TranslationTextType2000) {
	o.Description = &v
}

// GetDisplayOrder returns the DisplayOrder field value if set, zero value otherwise.
func (o *CorporateBusinessUnitType) GetDisplayOrder() float32 {
	if o == nil || IsNil(o.DisplayOrder) {
		var ret float32
		return ret
	}
	return *o.DisplayOrder
}

// GetDisplayOrderOk returns a tuple with the DisplayOrder field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CorporateBusinessUnitType) GetDisplayOrderOk() (*float32, bool) {
	if o == nil || IsNil(o.DisplayOrder) {
		return nil, false
	}
	return o.DisplayOrder, true
}

// HasDisplayOrder returns a boolean if a field has been set.
func (o *CorporateBusinessUnitType) HasDisplayOrder() bool {
	if o != nil && !IsNil(o.DisplayOrder) {
		return true
	}

	return false
}

// SetDisplayOrder gets a reference to the given float32 and assigns it to the DisplayOrder field.
func (o *CorporateBusinessUnitType) SetDisplayOrder(v float32) {
	o.DisplayOrder = &v
}

func (o CorporateBusinessUnitType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CorporateBusinessUnitType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.DisplayOrder) {
		toSerialize["displayOrder"] = o.DisplayOrder
	}
	return toSerialize, nil
}

type NullableCorporateBusinessUnitType struct {
	value *CorporateBusinessUnitType
	isSet bool
}

func (v NullableCorporateBusinessUnitType) Get() *CorporateBusinessUnitType {
	return v.value
}

func (v *NullableCorporateBusinessUnitType) Set(val *CorporateBusinessUnitType) {
	v.value = val
	v.isSet = true
}

func (v NullableCorporateBusinessUnitType) IsSet() bool {
	return v.isSet
}

func (v *NullableCorporateBusinessUnitType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCorporateBusinessUnitType(val *CorporateBusinessUnitType) *NullableCorporateBusinessUnitType {
	return &NullableCorporateBusinessUnitType{value: val, isSet: true}
}

func (v NullableCorporateBusinessUnitType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCorporateBusinessUnitType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


