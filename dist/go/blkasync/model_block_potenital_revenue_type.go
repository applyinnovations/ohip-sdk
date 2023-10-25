/*
OPERA Cloud Block Reservation Asynchronous API

APIs to cater Block Reservation related asynchronous functionality in OPERA.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blkasync

import (
	"encoding/json"
)

// checks if the BlockPotenitalRevenueType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BlockPotenitalRevenueType{}

// BlockPotenitalRevenueType Indicates the sum of revenue breakup per room type per block per allocation date for the reservations. Applicable for business date or future dates.
type BlockPotenitalRevenueType struct {
	// Currency code to reflect the currency in which an amount may be expressed.
	Currency *string `json:"currency,omitempty"`
	// Indicates food revenue amount.
	FoodRevenue *float32 `json:"foodRevenue,omitempty"`
	// Indicates food revenue tax amount.
	FoodRevenueTax *float32 `json:"foodRevenueTax,omitempty"`
	// Indicates non revenue amount.
	NonRevenue *float32 `json:"nonRevenue,omitempty"`
	// Indicates non revenue tax amount.
	NonRevenueTax *float32 `json:"nonRevenueTax,omitempty"`
	// Indicates other revenue amount.
	OtherRevenue *float32 `json:"otherRevenue,omitempty"`
	// Indicates other revenue tax amount.
	OtherRevenueTax *float32 `json:"otherRevenueTax,omitempty"`
	// Indicates room revenue amount.
	RoomRevenue *float32 `json:"roomRevenue,omitempty"`
	// Indicates room revenue tax amount.
	RoomRevenueTax *float32 `json:"roomRevenueTax,omitempty"`
	// Indicates total revenue amount.
	TotalRevenue *float32 `json:"totalRevenue,omitempty"`
	// Indicates total revenue tax amount.
	TotalRevenueTax *float32 `json:"totalRevenueTax,omitempty"`
}

// NewBlockPotenitalRevenueType instantiates a new BlockPotenitalRevenueType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBlockPotenitalRevenueType() *BlockPotenitalRevenueType {
	this := BlockPotenitalRevenueType{}
	return &this
}

// NewBlockPotenitalRevenueTypeWithDefaults instantiates a new BlockPotenitalRevenueType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBlockPotenitalRevenueTypeWithDefaults() *BlockPotenitalRevenueType {
	this := BlockPotenitalRevenueType{}
	return &this
}

// GetCurrency returns the Currency field value if set, zero value otherwise.
func (o *BlockPotenitalRevenueType) GetCurrency() string {
	if o == nil || IsNil(o.Currency) {
		var ret string
		return ret
	}
	return *o.Currency
}

// GetCurrencyOk returns a tuple with the Currency field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockPotenitalRevenueType) GetCurrencyOk() (*string, bool) {
	if o == nil || IsNil(o.Currency) {
		return nil, false
	}
	return o.Currency, true
}

// HasCurrency returns a boolean if a field has been set.
func (o *BlockPotenitalRevenueType) HasCurrency() bool {
	if o != nil && !IsNil(o.Currency) {
		return true
	}

	return false
}

// SetCurrency gets a reference to the given string and assigns it to the Currency field.
func (o *BlockPotenitalRevenueType) SetCurrency(v string) {
	o.Currency = &v
}

// GetFoodRevenue returns the FoodRevenue field value if set, zero value otherwise.
func (o *BlockPotenitalRevenueType) GetFoodRevenue() float32 {
	if o == nil || IsNil(o.FoodRevenue) {
		var ret float32
		return ret
	}
	return *o.FoodRevenue
}

// GetFoodRevenueOk returns a tuple with the FoodRevenue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockPotenitalRevenueType) GetFoodRevenueOk() (*float32, bool) {
	if o == nil || IsNil(o.FoodRevenue) {
		return nil, false
	}
	return o.FoodRevenue, true
}

// HasFoodRevenue returns a boolean if a field has been set.
func (o *BlockPotenitalRevenueType) HasFoodRevenue() bool {
	if o != nil && !IsNil(o.FoodRevenue) {
		return true
	}

	return false
}

// SetFoodRevenue gets a reference to the given float32 and assigns it to the FoodRevenue field.
func (o *BlockPotenitalRevenueType) SetFoodRevenue(v float32) {
	o.FoodRevenue = &v
}

// GetFoodRevenueTax returns the FoodRevenueTax field value if set, zero value otherwise.
func (o *BlockPotenitalRevenueType) GetFoodRevenueTax() float32 {
	if o == nil || IsNil(o.FoodRevenueTax) {
		var ret float32
		return ret
	}
	return *o.FoodRevenueTax
}

// GetFoodRevenueTaxOk returns a tuple with the FoodRevenueTax field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockPotenitalRevenueType) GetFoodRevenueTaxOk() (*float32, bool) {
	if o == nil || IsNil(o.FoodRevenueTax) {
		return nil, false
	}
	return o.FoodRevenueTax, true
}

// HasFoodRevenueTax returns a boolean if a field has been set.
func (o *BlockPotenitalRevenueType) HasFoodRevenueTax() bool {
	if o != nil && !IsNil(o.FoodRevenueTax) {
		return true
	}

	return false
}

// SetFoodRevenueTax gets a reference to the given float32 and assigns it to the FoodRevenueTax field.
func (o *BlockPotenitalRevenueType) SetFoodRevenueTax(v float32) {
	o.FoodRevenueTax = &v
}

// GetNonRevenue returns the NonRevenue field value if set, zero value otherwise.
func (o *BlockPotenitalRevenueType) GetNonRevenue() float32 {
	if o == nil || IsNil(o.NonRevenue) {
		var ret float32
		return ret
	}
	return *o.NonRevenue
}

// GetNonRevenueOk returns a tuple with the NonRevenue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockPotenitalRevenueType) GetNonRevenueOk() (*float32, bool) {
	if o == nil || IsNil(o.NonRevenue) {
		return nil, false
	}
	return o.NonRevenue, true
}

// HasNonRevenue returns a boolean if a field has been set.
func (o *BlockPotenitalRevenueType) HasNonRevenue() bool {
	if o != nil && !IsNil(o.NonRevenue) {
		return true
	}

	return false
}

// SetNonRevenue gets a reference to the given float32 and assigns it to the NonRevenue field.
func (o *BlockPotenitalRevenueType) SetNonRevenue(v float32) {
	o.NonRevenue = &v
}

// GetNonRevenueTax returns the NonRevenueTax field value if set, zero value otherwise.
func (o *BlockPotenitalRevenueType) GetNonRevenueTax() float32 {
	if o == nil || IsNil(o.NonRevenueTax) {
		var ret float32
		return ret
	}
	return *o.NonRevenueTax
}

// GetNonRevenueTaxOk returns a tuple with the NonRevenueTax field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockPotenitalRevenueType) GetNonRevenueTaxOk() (*float32, bool) {
	if o == nil || IsNil(o.NonRevenueTax) {
		return nil, false
	}
	return o.NonRevenueTax, true
}

// HasNonRevenueTax returns a boolean if a field has been set.
func (o *BlockPotenitalRevenueType) HasNonRevenueTax() bool {
	if o != nil && !IsNil(o.NonRevenueTax) {
		return true
	}

	return false
}

// SetNonRevenueTax gets a reference to the given float32 and assigns it to the NonRevenueTax field.
func (o *BlockPotenitalRevenueType) SetNonRevenueTax(v float32) {
	o.NonRevenueTax = &v
}

// GetOtherRevenue returns the OtherRevenue field value if set, zero value otherwise.
func (o *BlockPotenitalRevenueType) GetOtherRevenue() float32 {
	if o == nil || IsNil(o.OtherRevenue) {
		var ret float32
		return ret
	}
	return *o.OtherRevenue
}

// GetOtherRevenueOk returns a tuple with the OtherRevenue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockPotenitalRevenueType) GetOtherRevenueOk() (*float32, bool) {
	if o == nil || IsNil(o.OtherRevenue) {
		return nil, false
	}
	return o.OtherRevenue, true
}

// HasOtherRevenue returns a boolean if a field has been set.
func (o *BlockPotenitalRevenueType) HasOtherRevenue() bool {
	if o != nil && !IsNil(o.OtherRevenue) {
		return true
	}

	return false
}

// SetOtherRevenue gets a reference to the given float32 and assigns it to the OtherRevenue field.
func (o *BlockPotenitalRevenueType) SetOtherRevenue(v float32) {
	o.OtherRevenue = &v
}

// GetOtherRevenueTax returns the OtherRevenueTax field value if set, zero value otherwise.
func (o *BlockPotenitalRevenueType) GetOtherRevenueTax() float32 {
	if o == nil || IsNil(o.OtherRevenueTax) {
		var ret float32
		return ret
	}
	return *o.OtherRevenueTax
}

// GetOtherRevenueTaxOk returns a tuple with the OtherRevenueTax field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockPotenitalRevenueType) GetOtherRevenueTaxOk() (*float32, bool) {
	if o == nil || IsNil(o.OtherRevenueTax) {
		return nil, false
	}
	return o.OtherRevenueTax, true
}

// HasOtherRevenueTax returns a boolean if a field has been set.
func (o *BlockPotenitalRevenueType) HasOtherRevenueTax() bool {
	if o != nil && !IsNil(o.OtherRevenueTax) {
		return true
	}

	return false
}

// SetOtherRevenueTax gets a reference to the given float32 and assigns it to the OtherRevenueTax field.
func (o *BlockPotenitalRevenueType) SetOtherRevenueTax(v float32) {
	o.OtherRevenueTax = &v
}

// GetRoomRevenue returns the RoomRevenue field value if set, zero value otherwise.
func (o *BlockPotenitalRevenueType) GetRoomRevenue() float32 {
	if o == nil || IsNil(o.RoomRevenue) {
		var ret float32
		return ret
	}
	return *o.RoomRevenue
}

// GetRoomRevenueOk returns a tuple with the RoomRevenue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockPotenitalRevenueType) GetRoomRevenueOk() (*float32, bool) {
	if o == nil || IsNil(o.RoomRevenue) {
		return nil, false
	}
	return o.RoomRevenue, true
}

// HasRoomRevenue returns a boolean if a field has been set.
func (o *BlockPotenitalRevenueType) HasRoomRevenue() bool {
	if o != nil && !IsNil(o.RoomRevenue) {
		return true
	}

	return false
}

// SetRoomRevenue gets a reference to the given float32 and assigns it to the RoomRevenue field.
func (o *BlockPotenitalRevenueType) SetRoomRevenue(v float32) {
	o.RoomRevenue = &v
}

// GetRoomRevenueTax returns the RoomRevenueTax field value if set, zero value otherwise.
func (o *BlockPotenitalRevenueType) GetRoomRevenueTax() float32 {
	if o == nil || IsNil(o.RoomRevenueTax) {
		var ret float32
		return ret
	}
	return *o.RoomRevenueTax
}

// GetRoomRevenueTaxOk returns a tuple with the RoomRevenueTax field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockPotenitalRevenueType) GetRoomRevenueTaxOk() (*float32, bool) {
	if o == nil || IsNil(o.RoomRevenueTax) {
		return nil, false
	}
	return o.RoomRevenueTax, true
}

// HasRoomRevenueTax returns a boolean if a field has been set.
func (o *BlockPotenitalRevenueType) HasRoomRevenueTax() bool {
	if o != nil && !IsNil(o.RoomRevenueTax) {
		return true
	}

	return false
}

// SetRoomRevenueTax gets a reference to the given float32 and assigns it to the RoomRevenueTax field.
func (o *BlockPotenitalRevenueType) SetRoomRevenueTax(v float32) {
	o.RoomRevenueTax = &v
}

// GetTotalRevenue returns the TotalRevenue field value if set, zero value otherwise.
func (o *BlockPotenitalRevenueType) GetTotalRevenue() float32 {
	if o == nil || IsNil(o.TotalRevenue) {
		var ret float32
		return ret
	}
	return *o.TotalRevenue
}

// GetTotalRevenueOk returns a tuple with the TotalRevenue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockPotenitalRevenueType) GetTotalRevenueOk() (*float32, bool) {
	if o == nil || IsNil(o.TotalRevenue) {
		return nil, false
	}
	return o.TotalRevenue, true
}

// HasTotalRevenue returns a boolean if a field has been set.
func (o *BlockPotenitalRevenueType) HasTotalRevenue() bool {
	if o != nil && !IsNil(o.TotalRevenue) {
		return true
	}

	return false
}

// SetTotalRevenue gets a reference to the given float32 and assigns it to the TotalRevenue field.
func (o *BlockPotenitalRevenueType) SetTotalRevenue(v float32) {
	o.TotalRevenue = &v
}

// GetTotalRevenueTax returns the TotalRevenueTax field value if set, zero value otherwise.
func (o *BlockPotenitalRevenueType) GetTotalRevenueTax() float32 {
	if o == nil || IsNil(o.TotalRevenueTax) {
		var ret float32
		return ret
	}
	return *o.TotalRevenueTax
}

// GetTotalRevenueTaxOk returns a tuple with the TotalRevenueTax field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockPotenitalRevenueType) GetTotalRevenueTaxOk() (*float32, bool) {
	if o == nil || IsNil(o.TotalRevenueTax) {
		return nil, false
	}
	return o.TotalRevenueTax, true
}

// HasTotalRevenueTax returns a boolean if a field has been set.
func (o *BlockPotenitalRevenueType) HasTotalRevenueTax() bool {
	if o != nil && !IsNil(o.TotalRevenueTax) {
		return true
	}

	return false
}

// SetTotalRevenueTax gets a reference to the given float32 and assigns it to the TotalRevenueTax field.
func (o *BlockPotenitalRevenueType) SetTotalRevenueTax(v float32) {
	o.TotalRevenueTax = &v
}

func (o BlockPotenitalRevenueType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BlockPotenitalRevenueType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Currency) {
		toSerialize["currency"] = o.Currency
	}
	if !IsNil(o.FoodRevenue) {
		toSerialize["foodRevenue"] = o.FoodRevenue
	}
	if !IsNil(o.FoodRevenueTax) {
		toSerialize["foodRevenueTax"] = o.FoodRevenueTax
	}
	if !IsNil(o.NonRevenue) {
		toSerialize["nonRevenue"] = o.NonRevenue
	}
	if !IsNil(o.NonRevenueTax) {
		toSerialize["nonRevenueTax"] = o.NonRevenueTax
	}
	if !IsNil(o.OtherRevenue) {
		toSerialize["otherRevenue"] = o.OtherRevenue
	}
	if !IsNil(o.OtherRevenueTax) {
		toSerialize["otherRevenueTax"] = o.OtherRevenueTax
	}
	if !IsNil(o.RoomRevenue) {
		toSerialize["roomRevenue"] = o.RoomRevenue
	}
	if !IsNil(o.RoomRevenueTax) {
		toSerialize["roomRevenueTax"] = o.RoomRevenueTax
	}
	if !IsNil(o.TotalRevenue) {
		toSerialize["totalRevenue"] = o.TotalRevenue
	}
	if !IsNil(o.TotalRevenueTax) {
		toSerialize["totalRevenueTax"] = o.TotalRevenueTax
	}
	return toSerialize, nil
}

type NullableBlockPotenitalRevenueType struct {
	value *BlockPotenitalRevenueType
	isSet bool
}

func (v NullableBlockPotenitalRevenueType) Get() *BlockPotenitalRevenueType {
	return v.value
}

func (v *NullableBlockPotenitalRevenueType) Set(val *BlockPotenitalRevenueType) {
	v.value = val
	v.isSet = true
}

func (v NullableBlockPotenitalRevenueType) IsSet() bool {
	return v.isSet
}

func (v *NullableBlockPotenitalRevenueType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBlockPotenitalRevenueType(val *BlockPotenitalRevenueType) *NullableBlockPotenitalRevenueType {
	return &NullableBlockPotenitalRevenueType{value: val, isSet: true}
}

func (v NullableBlockPotenitalRevenueType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBlockPotenitalRevenueType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


