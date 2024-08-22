/*
OPERA Cloud Reservation Master Data Management API

APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsvcfg

import (
	"encoding/json"
)

// checks if the TemplateMarketCodeType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TemplateMarketCodeType{}

// TemplateMarketCodeType Common code type for code, description, seq and inactive
type TemplateMarketCodeType struct {
	// Chain code for the code type.
	ChainCode *string `json:"chainCode,omitempty"`
	// Code for the code type.
	Code *string `json:"code,omitempty"`
	Description *TranslationTextType50 `json:"description,omitempty"`
	DisplayColor *MarketCodeColorsType `json:"displayColor,omitempty"`
	// Group code to which this code type belongs.
	GroupCode *string `json:"groupCode,omitempty"`
	// Indicates the code type is inactive or not.
	Inactive *bool `json:"inactive,omitempty"`
	// Display sequence for the code type.
	Sequence *int32 `json:"sequence,omitempty"`
}

// NewTemplateMarketCodeType instantiates a new TemplateMarketCodeType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTemplateMarketCodeType() *TemplateMarketCodeType {
	this := TemplateMarketCodeType{}
	return &this
}

// NewTemplateMarketCodeTypeWithDefaults instantiates a new TemplateMarketCodeType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTemplateMarketCodeTypeWithDefaults() *TemplateMarketCodeType {
	this := TemplateMarketCodeType{}
	return &this
}

// GetChainCode returns the ChainCode field value if set, zero value otherwise.
func (o *TemplateMarketCodeType) GetChainCode() string {
	if o == nil || IsNil(o.ChainCode) {
		var ret string
		return ret
	}
	return *o.ChainCode
}

// GetChainCodeOk returns a tuple with the ChainCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateMarketCodeType) GetChainCodeOk() (*string, bool) {
	if o == nil || IsNil(o.ChainCode) {
		return nil, false
	}
	return o.ChainCode, true
}

// HasChainCode returns a boolean if a field has been set.
func (o *TemplateMarketCodeType) HasChainCode() bool {
	if o != nil && !IsNil(o.ChainCode) {
		return true
	}

	return false
}

// SetChainCode gets a reference to the given string and assigns it to the ChainCode field.
func (o *TemplateMarketCodeType) SetChainCode(v string) {
	o.ChainCode = &v
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *TemplateMarketCodeType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateMarketCodeType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *TemplateMarketCodeType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *TemplateMarketCodeType) SetCode(v string) {
	o.Code = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *TemplateMarketCodeType) GetDescription() TranslationTextType50 {
	if o == nil || IsNil(o.Description) {
		var ret TranslationTextType50
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateMarketCodeType) GetDescriptionOk() (*TranslationTextType50, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *TemplateMarketCodeType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given TranslationTextType50 and assigns it to the Description field.
func (o *TemplateMarketCodeType) SetDescription(v TranslationTextType50) {
	o.Description = &v
}

// GetDisplayColor returns the DisplayColor field value if set, zero value otherwise.
func (o *TemplateMarketCodeType) GetDisplayColor() MarketCodeColorsType {
	if o == nil || IsNil(o.DisplayColor) {
		var ret MarketCodeColorsType
		return ret
	}
	return *o.DisplayColor
}

// GetDisplayColorOk returns a tuple with the DisplayColor field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateMarketCodeType) GetDisplayColorOk() (*MarketCodeColorsType, bool) {
	if o == nil || IsNil(o.DisplayColor) {
		return nil, false
	}
	return o.DisplayColor, true
}

// HasDisplayColor returns a boolean if a field has been set.
func (o *TemplateMarketCodeType) HasDisplayColor() bool {
	if o != nil && !IsNil(o.DisplayColor) {
		return true
	}

	return false
}

// SetDisplayColor gets a reference to the given MarketCodeColorsType and assigns it to the DisplayColor field.
func (o *TemplateMarketCodeType) SetDisplayColor(v MarketCodeColorsType) {
	o.DisplayColor = &v
}

// GetGroupCode returns the GroupCode field value if set, zero value otherwise.
func (o *TemplateMarketCodeType) GetGroupCode() string {
	if o == nil || IsNil(o.GroupCode) {
		var ret string
		return ret
	}
	return *o.GroupCode
}

// GetGroupCodeOk returns a tuple with the GroupCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateMarketCodeType) GetGroupCodeOk() (*string, bool) {
	if o == nil || IsNil(o.GroupCode) {
		return nil, false
	}
	return o.GroupCode, true
}

// HasGroupCode returns a boolean if a field has been set.
func (o *TemplateMarketCodeType) HasGroupCode() bool {
	if o != nil && !IsNil(o.GroupCode) {
		return true
	}

	return false
}

// SetGroupCode gets a reference to the given string and assigns it to the GroupCode field.
func (o *TemplateMarketCodeType) SetGroupCode(v string) {
	o.GroupCode = &v
}

// GetInactive returns the Inactive field value if set, zero value otherwise.
func (o *TemplateMarketCodeType) GetInactive() bool {
	if o == nil || IsNil(o.Inactive) {
		var ret bool
		return ret
	}
	return *o.Inactive
}

// GetInactiveOk returns a tuple with the Inactive field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateMarketCodeType) GetInactiveOk() (*bool, bool) {
	if o == nil || IsNil(o.Inactive) {
		return nil, false
	}
	return o.Inactive, true
}

// HasInactive returns a boolean if a field has been set.
func (o *TemplateMarketCodeType) HasInactive() bool {
	if o != nil && !IsNil(o.Inactive) {
		return true
	}

	return false
}

// SetInactive gets a reference to the given bool and assigns it to the Inactive field.
func (o *TemplateMarketCodeType) SetInactive(v bool) {
	o.Inactive = &v
}

// GetSequence returns the Sequence field value if set, zero value otherwise.
func (o *TemplateMarketCodeType) GetSequence() int32 {
	if o == nil || IsNil(o.Sequence) {
		var ret int32
		return ret
	}
	return *o.Sequence
}

// GetSequenceOk returns a tuple with the Sequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateMarketCodeType) GetSequenceOk() (*int32, bool) {
	if o == nil || IsNil(o.Sequence) {
		return nil, false
	}
	return o.Sequence, true
}

// HasSequence returns a boolean if a field has been set.
func (o *TemplateMarketCodeType) HasSequence() bool {
	if o != nil && !IsNil(o.Sequence) {
		return true
	}

	return false
}

// SetSequence gets a reference to the given int32 and assigns it to the Sequence field.
func (o *TemplateMarketCodeType) SetSequence(v int32) {
	o.Sequence = &v
}

func (o TemplateMarketCodeType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TemplateMarketCodeType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ChainCode) {
		toSerialize["chainCode"] = o.ChainCode
	}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.DisplayColor) {
		toSerialize["displayColor"] = o.DisplayColor
	}
	if !IsNil(o.GroupCode) {
		toSerialize["groupCode"] = o.GroupCode
	}
	if !IsNil(o.Inactive) {
		toSerialize["inactive"] = o.Inactive
	}
	if !IsNil(o.Sequence) {
		toSerialize["sequence"] = o.Sequence
	}
	return toSerialize, nil
}

type NullableTemplateMarketCodeType struct {
	value *TemplateMarketCodeType
	isSet bool
}

func (v NullableTemplateMarketCodeType) Get() *TemplateMarketCodeType {
	return v.value
}

func (v *NullableTemplateMarketCodeType) Set(val *TemplateMarketCodeType) {
	v.value = val
	v.isSet = true
}

func (v NullableTemplateMarketCodeType) IsSet() bool {
	return v.isSet
}

func (v *NullableTemplateMarketCodeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTemplateMarketCodeType(val *TemplateMarketCodeType) *NullableTemplateMarketCodeType {
	return &NullableTemplateMarketCodeType{value: val, isSet: true}
}

func (v NullableTemplateMarketCodeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTemplateMarketCodeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


