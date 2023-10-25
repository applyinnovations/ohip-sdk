/*
OPERA Cloud Sales Event Management API

APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evm

import (
	"encoding/json"
)

// checks if the RevenueSummaryType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RevenueSummaryType{}

// RevenueSummaryType Summary information pertaining to revenue like Room, Food and Beverage, Catering, Other, Catering Other and Total Revenue.
type RevenueSummaryType struct {
	CateringOtherRevenue *float32 `json:"cateringOtherRevenue,omitempty"`
	CateringRevenue *float32 `json:"cateringRevenue,omitempty"`
	FoodAndBeverageRevenue *float32 `json:"foodAndBeverageRevenue,omitempty"`
	NonRevenue *float32 `json:"nonRevenue,omitempty"`
	OtherRevenue *float32 `json:"otherRevenue,omitempty"`
	RoomRevenue *float32 `json:"roomRevenue,omitempty"`
	TotalRevenue *float32 `json:"totalRevenue,omitempty"`
}

// NewRevenueSummaryType instantiates a new RevenueSummaryType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRevenueSummaryType() *RevenueSummaryType {
	this := RevenueSummaryType{}
	return &this
}

// NewRevenueSummaryTypeWithDefaults instantiates a new RevenueSummaryType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRevenueSummaryTypeWithDefaults() *RevenueSummaryType {
	this := RevenueSummaryType{}
	return &this
}

// GetCateringOtherRevenue returns the CateringOtherRevenue field value if set, zero value otherwise.
func (o *RevenueSummaryType) GetCateringOtherRevenue() float32 {
	if o == nil || IsNil(o.CateringOtherRevenue) {
		var ret float32
		return ret
	}
	return *o.CateringOtherRevenue
}

// GetCateringOtherRevenueOk returns a tuple with the CateringOtherRevenue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RevenueSummaryType) GetCateringOtherRevenueOk() (*float32, bool) {
	if o == nil || IsNil(o.CateringOtherRevenue) {
		return nil, false
	}
	return o.CateringOtherRevenue, true
}

// HasCateringOtherRevenue returns a boolean if a field has been set.
func (o *RevenueSummaryType) HasCateringOtherRevenue() bool {
	if o != nil && !IsNil(o.CateringOtherRevenue) {
		return true
	}

	return false
}

// SetCateringOtherRevenue gets a reference to the given float32 and assigns it to the CateringOtherRevenue field.
func (o *RevenueSummaryType) SetCateringOtherRevenue(v float32) {
	o.CateringOtherRevenue = &v
}

// GetCateringRevenue returns the CateringRevenue field value if set, zero value otherwise.
func (o *RevenueSummaryType) GetCateringRevenue() float32 {
	if o == nil || IsNil(o.CateringRevenue) {
		var ret float32
		return ret
	}
	return *o.CateringRevenue
}

// GetCateringRevenueOk returns a tuple with the CateringRevenue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RevenueSummaryType) GetCateringRevenueOk() (*float32, bool) {
	if o == nil || IsNil(o.CateringRevenue) {
		return nil, false
	}
	return o.CateringRevenue, true
}

// HasCateringRevenue returns a boolean if a field has been set.
func (o *RevenueSummaryType) HasCateringRevenue() bool {
	if o != nil && !IsNil(o.CateringRevenue) {
		return true
	}

	return false
}

// SetCateringRevenue gets a reference to the given float32 and assigns it to the CateringRevenue field.
func (o *RevenueSummaryType) SetCateringRevenue(v float32) {
	o.CateringRevenue = &v
}

// GetFoodAndBeverageRevenue returns the FoodAndBeverageRevenue field value if set, zero value otherwise.
func (o *RevenueSummaryType) GetFoodAndBeverageRevenue() float32 {
	if o == nil || IsNil(o.FoodAndBeverageRevenue) {
		var ret float32
		return ret
	}
	return *o.FoodAndBeverageRevenue
}

// GetFoodAndBeverageRevenueOk returns a tuple with the FoodAndBeverageRevenue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RevenueSummaryType) GetFoodAndBeverageRevenueOk() (*float32, bool) {
	if o == nil || IsNil(o.FoodAndBeverageRevenue) {
		return nil, false
	}
	return o.FoodAndBeverageRevenue, true
}

// HasFoodAndBeverageRevenue returns a boolean if a field has been set.
func (o *RevenueSummaryType) HasFoodAndBeverageRevenue() bool {
	if o != nil && !IsNil(o.FoodAndBeverageRevenue) {
		return true
	}

	return false
}

// SetFoodAndBeverageRevenue gets a reference to the given float32 and assigns it to the FoodAndBeverageRevenue field.
func (o *RevenueSummaryType) SetFoodAndBeverageRevenue(v float32) {
	o.FoodAndBeverageRevenue = &v
}

// GetNonRevenue returns the NonRevenue field value if set, zero value otherwise.
func (o *RevenueSummaryType) GetNonRevenue() float32 {
	if o == nil || IsNil(o.NonRevenue) {
		var ret float32
		return ret
	}
	return *o.NonRevenue
}

// GetNonRevenueOk returns a tuple with the NonRevenue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RevenueSummaryType) GetNonRevenueOk() (*float32, bool) {
	if o == nil || IsNil(o.NonRevenue) {
		return nil, false
	}
	return o.NonRevenue, true
}

// HasNonRevenue returns a boolean if a field has been set.
func (o *RevenueSummaryType) HasNonRevenue() bool {
	if o != nil && !IsNil(o.NonRevenue) {
		return true
	}

	return false
}

// SetNonRevenue gets a reference to the given float32 and assigns it to the NonRevenue field.
func (o *RevenueSummaryType) SetNonRevenue(v float32) {
	o.NonRevenue = &v
}

// GetOtherRevenue returns the OtherRevenue field value if set, zero value otherwise.
func (o *RevenueSummaryType) GetOtherRevenue() float32 {
	if o == nil || IsNil(o.OtherRevenue) {
		var ret float32
		return ret
	}
	return *o.OtherRevenue
}

// GetOtherRevenueOk returns a tuple with the OtherRevenue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RevenueSummaryType) GetOtherRevenueOk() (*float32, bool) {
	if o == nil || IsNil(o.OtherRevenue) {
		return nil, false
	}
	return o.OtherRevenue, true
}

// HasOtherRevenue returns a boolean if a field has been set.
func (o *RevenueSummaryType) HasOtherRevenue() bool {
	if o != nil && !IsNil(o.OtherRevenue) {
		return true
	}

	return false
}

// SetOtherRevenue gets a reference to the given float32 and assigns it to the OtherRevenue field.
func (o *RevenueSummaryType) SetOtherRevenue(v float32) {
	o.OtherRevenue = &v
}

// GetRoomRevenue returns the RoomRevenue field value if set, zero value otherwise.
func (o *RevenueSummaryType) GetRoomRevenue() float32 {
	if o == nil || IsNil(o.RoomRevenue) {
		var ret float32
		return ret
	}
	return *o.RoomRevenue
}

// GetRoomRevenueOk returns a tuple with the RoomRevenue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RevenueSummaryType) GetRoomRevenueOk() (*float32, bool) {
	if o == nil || IsNil(o.RoomRevenue) {
		return nil, false
	}
	return o.RoomRevenue, true
}

// HasRoomRevenue returns a boolean if a field has been set.
func (o *RevenueSummaryType) HasRoomRevenue() bool {
	if o != nil && !IsNil(o.RoomRevenue) {
		return true
	}

	return false
}

// SetRoomRevenue gets a reference to the given float32 and assigns it to the RoomRevenue field.
func (o *RevenueSummaryType) SetRoomRevenue(v float32) {
	o.RoomRevenue = &v
}

// GetTotalRevenue returns the TotalRevenue field value if set, zero value otherwise.
func (o *RevenueSummaryType) GetTotalRevenue() float32 {
	if o == nil || IsNil(o.TotalRevenue) {
		var ret float32
		return ret
	}
	return *o.TotalRevenue
}

// GetTotalRevenueOk returns a tuple with the TotalRevenue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RevenueSummaryType) GetTotalRevenueOk() (*float32, bool) {
	if o == nil || IsNil(o.TotalRevenue) {
		return nil, false
	}
	return o.TotalRevenue, true
}

// HasTotalRevenue returns a boolean if a field has been set.
func (o *RevenueSummaryType) HasTotalRevenue() bool {
	if o != nil && !IsNil(o.TotalRevenue) {
		return true
	}

	return false
}

// SetTotalRevenue gets a reference to the given float32 and assigns it to the TotalRevenue field.
func (o *RevenueSummaryType) SetTotalRevenue(v float32) {
	o.TotalRevenue = &v
}

func (o RevenueSummaryType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RevenueSummaryType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CateringOtherRevenue) {
		toSerialize["cateringOtherRevenue"] = o.CateringOtherRevenue
	}
	if !IsNil(o.CateringRevenue) {
		toSerialize["cateringRevenue"] = o.CateringRevenue
	}
	if !IsNil(o.FoodAndBeverageRevenue) {
		toSerialize["foodAndBeverageRevenue"] = o.FoodAndBeverageRevenue
	}
	if !IsNil(o.NonRevenue) {
		toSerialize["nonRevenue"] = o.NonRevenue
	}
	if !IsNil(o.OtherRevenue) {
		toSerialize["otherRevenue"] = o.OtherRevenue
	}
	if !IsNil(o.RoomRevenue) {
		toSerialize["roomRevenue"] = o.RoomRevenue
	}
	if !IsNil(o.TotalRevenue) {
		toSerialize["totalRevenue"] = o.TotalRevenue
	}
	return toSerialize, nil
}

type NullableRevenueSummaryType struct {
	value *RevenueSummaryType
	isSet bool
}

func (v NullableRevenueSummaryType) Get() *RevenueSummaryType {
	return v.value
}

func (v *NullableRevenueSummaryType) Set(val *RevenueSummaryType) {
	v.value = val
	v.isSet = true
}

func (v NullableRevenueSummaryType) IsSet() bool {
	return v.isSet
}

func (v *NullableRevenueSummaryType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRevenueSummaryType(val *RevenueSummaryType) *NullableRevenueSummaryType {
	return &NullableRevenueSummaryType{value: val, isSet: true}
}

func (v NullableRevenueSummaryType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRevenueSummaryType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


