/*
OPERA Cloud CRM Configuration API

APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crmcfg

import (
	"encoding/json"
)

// checks if the VIPLevelType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &VIPLevelType{}

// VIPLevelType Contains Common Master configuration detail.
type VIPLevelType struct {
	// Common Master unique code.
	Code *string `json:"code,omitempty"`
	Description *TranslationTextType2000 `json:"description,omitempty"`
	// Common Master record sequence number.
	DisplayOrder *float32 `json:"displayOrder,omitempty"`
	DisplayColor *CommonMasterColorType `json:"displayColor,omitempty"`
	// AI priority order of this code.
	Ranking *int32 `json:"ranking,omitempty"`
}

// NewVIPLevelType instantiates a new VIPLevelType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewVIPLevelType() *VIPLevelType {
	this := VIPLevelType{}
	return &this
}

// NewVIPLevelTypeWithDefaults instantiates a new VIPLevelType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewVIPLevelTypeWithDefaults() *VIPLevelType {
	this := VIPLevelType{}
	return &this
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *VIPLevelType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *VIPLevelType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *VIPLevelType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *VIPLevelType) SetCode(v string) {
	o.Code = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *VIPLevelType) GetDescription() TranslationTextType2000 {
	if o == nil || IsNil(o.Description) {
		var ret TranslationTextType2000
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *VIPLevelType) GetDescriptionOk() (*TranslationTextType2000, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *VIPLevelType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given TranslationTextType2000 and assigns it to the Description field.
func (o *VIPLevelType) SetDescription(v TranslationTextType2000) {
	o.Description = &v
}

// GetDisplayOrder returns the DisplayOrder field value if set, zero value otherwise.
func (o *VIPLevelType) GetDisplayOrder() float32 {
	if o == nil || IsNil(o.DisplayOrder) {
		var ret float32
		return ret
	}
	return *o.DisplayOrder
}

// GetDisplayOrderOk returns a tuple with the DisplayOrder field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *VIPLevelType) GetDisplayOrderOk() (*float32, bool) {
	if o == nil || IsNil(o.DisplayOrder) {
		return nil, false
	}
	return o.DisplayOrder, true
}

// HasDisplayOrder returns a boolean if a field has been set.
func (o *VIPLevelType) HasDisplayOrder() bool {
	if o != nil && !IsNil(o.DisplayOrder) {
		return true
	}

	return false
}

// SetDisplayOrder gets a reference to the given float32 and assigns it to the DisplayOrder field.
func (o *VIPLevelType) SetDisplayOrder(v float32) {
	o.DisplayOrder = &v
}

// GetDisplayColor returns the DisplayColor field value if set, zero value otherwise.
func (o *VIPLevelType) GetDisplayColor() CommonMasterColorType {
	if o == nil || IsNil(o.DisplayColor) {
		var ret CommonMasterColorType
		return ret
	}
	return *o.DisplayColor
}

// GetDisplayColorOk returns a tuple with the DisplayColor field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *VIPLevelType) GetDisplayColorOk() (*CommonMasterColorType, bool) {
	if o == nil || IsNil(o.DisplayColor) {
		return nil, false
	}
	return o.DisplayColor, true
}

// HasDisplayColor returns a boolean if a field has been set.
func (o *VIPLevelType) HasDisplayColor() bool {
	if o != nil && !IsNil(o.DisplayColor) {
		return true
	}

	return false
}

// SetDisplayColor gets a reference to the given CommonMasterColorType and assigns it to the DisplayColor field.
func (o *VIPLevelType) SetDisplayColor(v CommonMasterColorType) {
	o.DisplayColor = &v
}

// GetRanking returns the Ranking field value if set, zero value otherwise.
func (o *VIPLevelType) GetRanking() int32 {
	if o == nil || IsNil(o.Ranking) {
		var ret int32
		return ret
	}
	return *o.Ranking
}

// GetRankingOk returns a tuple with the Ranking field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *VIPLevelType) GetRankingOk() (*int32, bool) {
	if o == nil || IsNil(o.Ranking) {
		return nil, false
	}
	return o.Ranking, true
}

// HasRanking returns a boolean if a field has been set.
func (o *VIPLevelType) HasRanking() bool {
	if o != nil && !IsNil(o.Ranking) {
		return true
	}

	return false
}

// SetRanking gets a reference to the given int32 and assigns it to the Ranking field.
func (o *VIPLevelType) SetRanking(v int32) {
	o.Ranking = &v
}

func (o VIPLevelType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o VIPLevelType) ToMap() (map[string]interface{}, error) {
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
	if !IsNil(o.DisplayColor) {
		toSerialize["displayColor"] = o.DisplayColor
	}
	if !IsNil(o.Ranking) {
		toSerialize["ranking"] = o.Ranking
	}
	return toSerialize, nil
}

type NullableVIPLevelType struct {
	value *VIPLevelType
	isSet bool
}

func (v NullableVIPLevelType) Get() *VIPLevelType {
	return v.value
}

func (v *NullableVIPLevelType) Set(val *VIPLevelType) {
	v.value = val
	v.isSet = true
}

func (v NullableVIPLevelType) IsSet() bool {
	return v.isSet
}

func (v *NullableVIPLevelType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableVIPLevelType(val *VIPLevelType) *NullableVIPLevelType {
	return &NullableVIPLevelType{value: val, isSet: true}
}

func (v NullableVIPLevelType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableVIPLevelType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


