/*
OPERA Cloud Reservation Master Data Management API

APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsvcfg

import (
	"encoding/json"
)

// checks if the MarketCodeType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &MarketCodeType{}

// MarketCodeType Common code type for code, description, seq and inactive
type MarketCodeType struct {
	// Code for the code type.
	Code *string `json:"code,omitempty"`
	Description *TranslationTextType50 `json:"description,omitempty"`
	DisplayColor *MarketCodeColorsType `json:"displayColor,omitempty"`
	// Group code to which this code type belongs.
	GroupCode *string `json:"groupCode,omitempty"`
	// Hotel code for the code type.
	HotelId *string `json:"hotelId,omitempty"`
	// Indicates the code type is inactive or not.
	Inactive *bool `json:"inactive,omitempty"`
	PrintGroup *MarketCodePrintGroupType `json:"printGroup,omitempty"`
	// Display sequence for the code type.
	Sequence *int32 `json:"sequence,omitempty"`
	// Transaction code to map Market Code.
	TransactionCode *string `json:"transactionCode,omitempty"`
}

// NewMarketCodeType instantiates a new MarketCodeType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMarketCodeType() *MarketCodeType {
	this := MarketCodeType{}
	return &this
}

// NewMarketCodeTypeWithDefaults instantiates a new MarketCodeType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMarketCodeTypeWithDefaults() *MarketCodeType {
	this := MarketCodeType{}
	return &this
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *MarketCodeType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MarketCodeType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *MarketCodeType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *MarketCodeType) SetCode(v string) {
	o.Code = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *MarketCodeType) GetDescription() TranslationTextType50 {
	if o == nil || IsNil(o.Description) {
		var ret TranslationTextType50
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MarketCodeType) GetDescriptionOk() (*TranslationTextType50, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *MarketCodeType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given TranslationTextType50 and assigns it to the Description field.
func (o *MarketCodeType) SetDescription(v TranslationTextType50) {
	o.Description = &v
}

// GetDisplayColor returns the DisplayColor field value if set, zero value otherwise.
func (o *MarketCodeType) GetDisplayColor() MarketCodeColorsType {
	if o == nil || IsNil(o.DisplayColor) {
		var ret MarketCodeColorsType
		return ret
	}
	return *o.DisplayColor
}

// GetDisplayColorOk returns a tuple with the DisplayColor field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MarketCodeType) GetDisplayColorOk() (*MarketCodeColorsType, bool) {
	if o == nil || IsNil(o.DisplayColor) {
		return nil, false
	}
	return o.DisplayColor, true
}

// HasDisplayColor returns a boolean if a field has been set.
func (o *MarketCodeType) HasDisplayColor() bool {
	if o != nil && !IsNil(o.DisplayColor) {
		return true
	}

	return false
}

// SetDisplayColor gets a reference to the given MarketCodeColorsType and assigns it to the DisplayColor field.
func (o *MarketCodeType) SetDisplayColor(v MarketCodeColorsType) {
	o.DisplayColor = &v
}

// GetGroupCode returns the GroupCode field value if set, zero value otherwise.
func (o *MarketCodeType) GetGroupCode() string {
	if o == nil || IsNil(o.GroupCode) {
		var ret string
		return ret
	}
	return *o.GroupCode
}

// GetGroupCodeOk returns a tuple with the GroupCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MarketCodeType) GetGroupCodeOk() (*string, bool) {
	if o == nil || IsNil(o.GroupCode) {
		return nil, false
	}
	return o.GroupCode, true
}

// HasGroupCode returns a boolean if a field has been set.
func (o *MarketCodeType) HasGroupCode() bool {
	if o != nil && !IsNil(o.GroupCode) {
		return true
	}

	return false
}

// SetGroupCode gets a reference to the given string and assigns it to the GroupCode field.
func (o *MarketCodeType) SetGroupCode(v string) {
	o.GroupCode = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *MarketCodeType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MarketCodeType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *MarketCodeType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *MarketCodeType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetInactive returns the Inactive field value if set, zero value otherwise.
func (o *MarketCodeType) GetInactive() bool {
	if o == nil || IsNil(o.Inactive) {
		var ret bool
		return ret
	}
	return *o.Inactive
}

// GetInactiveOk returns a tuple with the Inactive field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MarketCodeType) GetInactiveOk() (*bool, bool) {
	if o == nil || IsNil(o.Inactive) {
		return nil, false
	}
	return o.Inactive, true
}

// HasInactive returns a boolean if a field has been set.
func (o *MarketCodeType) HasInactive() bool {
	if o != nil && !IsNil(o.Inactive) {
		return true
	}

	return false
}

// SetInactive gets a reference to the given bool and assigns it to the Inactive field.
func (o *MarketCodeType) SetInactive(v bool) {
	o.Inactive = &v
}

// GetPrintGroup returns the PrintGroup field value if set, zero value otherwise.
func (o *MarketCodeType) GetPrintGroup() MarketCodePrintGroupType {
	if o == nil || IsNil(o.PrintGroup) {
		var ret MarketCodePrintGroupType
		return ret
	}
	return *o.PrintGroup
}

// GetPrintGroupOk returns a tuple with the PrintGroup field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MarketCodeType) GetPrintGroupOk() (*MarketCodePrintGroupType, bool) {
	if o == nil || IsNil(o.PrintGroup) {
		return nil, false
	}
	return o.PrintGroup, true
}

// HasPrintGroup returns a boolean if a field has been set.
func (o *MarketCodeType) HasPrintGroup() bool {
	if o != nil && !IsNil(o.PrintGroup) {
		return true
	}

	return false
}

// SetPrintGroup gets a reference to the given MarketCodePrintGroupType and assigns it to the PrintGroup field.
func (o *MarketCodeType) SetPrintGroup(v MarketCodePrintGroupType) {
	o.PrintGroup = &v
}

// GetSequence returns the Sequence field value if set, zero value otherwise.
func (o *MarketCodeType) GetSequence() int32 {
	if o == nil || IsNil(o.Sequence) {
		var ret int32
		return ret
	}
	return *o.Sequence
}

// GetSequenceOk returns a tuple with the Sequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MarketCodeType) GetSequenceOk() (*int32, bool) {
	if o == nil || IsNil(o.Sequence) {
		return nil, false
	}
	return o.Sequence, true
}

// HasSequence returns a boolean if a field has been set.
func (o *MarketCodeType) HasSequence() bool {
	if o != nil && !IsNil(o.Sequence) {
		return true
	}

	return false
}

// SetSequence gets a reference to the given int32 and assigns it to the Sequence field.
func (o *MarketCodeType) SetSequence(v int32) {
	o.Sequence = &v
}

// GetTransactionCode returns the TransactionCode field value if set, zero value otherwise.
func (o *MarketCodeType) GetTransactionCode() string {
	if o == nil || IsNil(o.TransactionCode) {
		var ret string
		return ret
	}
	return *o.TransactionCode
}

// GetTransactionCodeOk returns a tuple with the TransactionCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MarketCodeType) GetTransactionCodeOk() (*string, bool) {
	if o == nil || IsNil(o.TransactionCode) {
		return nil, false
	}
	return o.TransactionCode, true
}

// HasTransactionCode returns a boolean if a field has been set.
func (o *MarketCodeType) HasTransactionCode() bool {
	if o != nil && !IsNil(o.TransactionCode) {
		return true
	}

	return false
}

// SetTransactionCode gets a reference to the given string and assigns it to the TransactionCode field.
func (o *MarketCodeType) SetTransactionCode(v string) {
	o.TransactionCode = &v
}

func (o MarketCodeType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o MarketCodeType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
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
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.Inactive) {
		toSerialize["inactive"] = o.Inactive
	}
	if !IsNil(o.PrintGroup) {
		toSerialize["printGroup"] = o.PrintGroup
	}
	if !IsNil(o.Sequence) {
		toSerialize["sequence"] = o.Sequence
	}
	if !IsNil(o.TransactionCode) {
		toSerialize["transactionCode"] = o.TransactionCode
	}
	return toSerialize, nil
}

type NullableMarketCodeType struct {
	value *MarketCodeType
	isSet bool
}

func (v NullableMarketCodeType) Get() *MarketCodeType {
	return v.value
}

func (v *NullableMarketCodeType) Set(val *MarketCodeType) {
	v.value = val
	v.isSet = true
}

func (v NullableMarketCodeType) IsSet() bool {
	return v.isSet
}

func (v *NullableMarketCodeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMarketCodeType(val *MarketCodeType) *NullableMarketCodeType {
	return &NullableMarketCodeType{value: val, isSet: true}
}

func (v NullableMarketCodeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMarketCodeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


