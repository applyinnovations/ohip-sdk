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

// checks if the MarketGroupType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &MarketGroupType{}

// MarketGroupType Common code type for code, description, seq and inactive
type MarketGroupType struct {
	// Code for the code type.
	Code *string `json:"code,omitempty"`
	Description *TranslationTextType50 `json:"description,omitempty"`
	// Hotel code for the code type.
	HotelId *string `json:"hotelId,omitempty"`
	// Indicates the code type is inactive or not.
	Inactive *bool `json:"inactive,omitempty"`
	// Collection of Market Codes.
	MarketCodes []MarketCodeType `json:"marketCodes,omitempty"`
	Ranking *int32 `json:"ranking,omitempty"`
	// Display sequence for the code type.
	Sequence *int32 `json:"sequence,omitempty"`
	// Defines if the Market Group is eligible for auto upgrade for Room Assignment Optimization
	Upgradable *bool `json:"upgradable,omitempty"`
}

// NewMarketGroupType instantiates a new MarketGroupType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMarketGroupType() *MarketGroupType {
	this := MarketGroupType{}
	return &this
}

// NewMarketGroupTypeWithDefaults instantiates a new MarketGroupType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMarketGroupTypeWithDefaults() *MarketGroupType {
	this := MarketGroupType{}
	return &this
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *MarketGroupType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MarketGroupType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *MarketGroupType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *MarketGroupType) SetCode(v string) {
	o.Code = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *MarketGroupType) GetDescription() TranslationTextType50 {
	if o == nil || IsNil(o.Description) {
		var ret TranslationTextType50
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MarketGroupType) GetDescriptionOk() (*TranslationTextType50, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *MarketGroupType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given TranslationTextType50 and assigns it to the Description field.
func (o *MarketGroupType) SetDescription(v TranslationTextType50) {
	o.Description = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *MarketGroupType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MarketGroupType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *MarketGroupType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *MarketGroupType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetInactive returns the Inactive field value if set, zero value otherwise.
func (o *MarketGroupType) GetInactive() bool {
	if o == nil || IsNil(o.Inactive) {
		var ret bool
		return ret
	}
	return *o.Inactive
}

// GetInactiveOk returns a tuple with the Inactive field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MarketGroupType) GetInactiveOk() (*bool, bool) {
	if o == nil || IsNil(o.Inactive) {
		return nil, false
	}
	return o.Inactive, true
}

// HasInactive returns a boolean if a field has been set.
func (o *MarketGroupType) HasInactive() bool {
	if o != nil && !IsNil(o.Inactive) {
		return true
	}

	return false
}

// SetInactive gets a reference to the given bool and assigns it to the Inactive field.
func (o *MarketGroupType) SetInactive(v bool) {
	o.Inactive = &v
}

// GetMarketCodes returns the MarketCodes field value if set, zero value otherwise.
func (o *MarketGroupType) GetMarketCodes() []MarketCodeType {
	if o == nil || IsNil(o.MarketCodes) {
		var ret []MarketCodeType
		return ret
	}
	return o.MarketCodes
}

// GetMarketCodesOk returns a tuple with the MarketCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MarketGroupType) GetMarketCodesOk() ([]MarketCodeType, bool) {
	if o == nil || IsNil(o.MarketCodes) {
		return nil, false
	}
	return o.MarketCodes, true
}

// HasMarketCodes returns a boolean if a field has been set.
func (o *MarketGroupType) HasMarketCodes() bool {
	if o != nil && !IsNil(o.MarketCodes) {
		return true
	}

	return false
}

// SetMarketCodes gets a reference to the given []MarketCodeType and assigns it to the MarketCodes field.
func (o *MarketGroupType) SetMarketCodes(v []MarketCodeType) {
	o.MarketCodes = v
}

// GetRanking returns the Ranking field value if set, zero value otherwise.
func (o *MarketGroupType) GetRanking() int32 {
	if o == nil || IsNil(o.Ranking) {
		var ret int32
		return ret
	}
	return *o.Ranking
}

// GetRankingOk returns a tuple with the Ranking field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MarketGroupType) GetRankingOk() (*int32, bool) {
	if o == nil || IsNil(o.Ranking) {
		return nil, false
	}
	return o.Ranking, true
}

// HasRanking returns a boolean if a field has been set.
func (o *MarketGroupType) HasRanking() bool {
	if o != nil && !IsNil(o.Ranking) {
		return true
	}

	return false
}

// SetRanking gets a reference to the given int32 and assigns it to the Ranking field.
func (o *MarketGroupType) SetRanking(v int32) {
	o.Ranking = &v
}

// GetSequence returns the Sequence field value if set, zero value otherwise.
func (o *MarketGroupType) GetSequence() int32 {
	if o == nil || IsNil(o.Sequence) {
		var ret int32
		return ret
	}
	return *o.Sequence
}

// GetSequenceOk returns a tuple with the Sequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MarketGroupType) GetSequenceOk() (*int32, bool) {
	if o == nil || IsNil(o.Sequence) {
		return nil, false
	}
	return o.Sequence, true
}

// HasSequence returns a boolean if a field has been set.
func (o *MarketGroupType) HasSequence() bool {
	if o != nil && !IsNil(o.Sequence) {
		return true
	}

	return false
}

// SetSequence gets a reference to the given int32 and assigns it to the Sequence field.
func (o *MarketGroupType) SetSequence(v int32) {
	o.Sequence = &v
}

// GetUpgradable returns the Upgradable field value if set, zero value otherwise.
func (o *MarketGroupType) GetUpgradable() bool {
	if o == nil || IsNil(o.Upgradable) {
		var ret bool
		return ret
	}
	return *o.Upgradable
}

// GetUpgradableOk returns a tuple with the Upgradable field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MarketGroupType) GetUpgradableOk() (*bool, bool) {
	if o == nil || IsNil(o.Upgradable) {
		return nil, false
	}
	return o.Upgradable, true
}

// HasUpgradable returns a boolean if a field has been set.
func (o *MarketGroupType) HasUpgradable() bool {
	if o != nil && !IsNil(o.Upgradable) {
		return true
	}

	return false
}

// SetUpgradable gets a reference to the given bool and assigns it to the Upgradable field.
func (o *MarketGroupType) SetUpgradable(v bool) {
	o.Upgradable = &v
}

func (o MarketGroupType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o MarketGroupType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.Inactive) {
		toSerialize["inactive"] = o.Inactive
	}
	if !IsNil(o.MarketCodes) {
		toSerialize["marketCodes"] = o.MarketCodes
	}
	if !IsNil(o.Ranking) {
		toSerialize["ranking"] = o.Ranking
	}
	if !IsNil(o.Sequence) {
		toSerialize["sequence"] = o.Sequence
	}
	if !IsNil(o.Upgradable) {
		toSerialize["upgradable"] = o.Upgradable
	}
	return toSerialize, nil
}

type NullableMarketGroupType struct {
	value *MarketGroupType
	isSet bool
}

func (v NullableMarketGroupType) Get() *MarketGroupType {
	return v.value
}

func (v *NullableMarketGroupType) Set(val *MarketGroupType) {
	v.value = val
	v.isSet = true
}

func (v NullableMarketGroupType) IsSet() bool {
	return v.isSet
}

func (v *NullableMarketGroupType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMarketGroupType(val *MarketGroupType) *NullableMarketGroupType {
	return &NullableMarketGroupType{value: val, isSet: true}
}

func (v NullableMarketGroupType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMarketGroupType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


