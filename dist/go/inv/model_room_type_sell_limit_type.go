/*
OPERA Cloud Inventory API

APIs to cater for Inventory functionality in OPERA Cloud. This includes sell limits for date ranges, viewing and updating the property&apos;s inventory, as well as item inventory (such as rollaways, microwaves etc.).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package inv

import (
	"encoding/json"
)

// checks if the RoomTypeSellLimitType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomTypeSellLimitType{}

// RoomTypeSellLimitType struct for RoomTypeSellLimitType
type RoomTypeSellLimitType struct {
	Amount *float32 `json:"amount,omitempty"`
	Date *string `json:"date,omitempty"`
	FlatOrPercentage *string `json:"flatOrPercentage,omitempty"`
	RoomType *string `json:"roomType,omitempty"`
}

// NewRoomTypeSellLimitType instantiates a new RoomTypeSellLimitType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomTypeSellLimitType() *RoomTypeSellLimitType {
	this := RoomTypeSellLimitType{}
	return &this
}

// NewRoomTypeSellLimitTypeWithDefaults instantiates a new RoomTypeSellLimitType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomTypeSellLimitTypeWithDefaults() *RoomTypeSellLimitType {
	this := RoomTypeSellLimitType{}
	return &this
}

// GetAmount returns the Amount field value if set, zero value otherwise.
func (o *RoomTypeSellLimitType) GetAmount() float32 {
	if o == nil || IsNil(o.Amount) {
		var ret float32
		return ret
	}
	return *o.Amount
}

// GetAmountOk returns a tuple with the Amount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeSellLimitType) GetAmountOk() (*float32, bool) {
	if o == nil || IsNil(o.Amount) {
		return nil, false
	}
	return o.Amount, true
}

// HasAmount returns a boolean if a field has been set.
func (o *RoomTypeSellLimitType) HasAmount() bool {
	if o != nil && !IsNil(o.Amount) {
		return true
	}

	return false
}

// SetAmount gets a reference to the given float32 and assigns it to the Amount field.
func (o *RoomTypeSellLimitType) SetAmount(v float32) {
	o.Amount = &v
}

// GetDate returns the Date field value if set, zero value otherwise.
func (o *RoomTypeSellLimitType) GetDate() string {
	if o == nil || IsNil(o.Date) {
		var ret string
		return ret
	}
	return *o.Date
}

// GetDateOk returns a tuple with the Date field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeSellLimitType) GetDateOk() (*string, bool) {
	if o == nil || IsNil(o.Date) {
		return nil, false
	}
	return o.Date, true
}

// HasDate returns a boolean if a field has been set.
func (o *RoomTypeSellLimitType) HasDate() bool {
	if o != nil && !IsNil(o.Date) {
		return true
	}

	return false
}

// SetDate gets a reference to the given string and assigns it to the Date field.
func (o *RoomTypeSellLimitType) SetDate(v string) {
	o.Date = &v
}

// GetFlatOrPercentage returns the FlatOrPercentage field value if set, zero value otherwise.
func (o *RoomTypeSellLimitType) GetFlatOrPercentage() string {
	if o == nil || IsNil(o.FlatOrPercentage) {
		var ret string
		return ret
	}
	return *o.FlatOrPercentage
}

// GetFlatOrPercentageOk returns a tuple with the FlatOrPercentage field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeSellLimitType) GetFlatOrPercentageOk() (*string, bool) {
	if o == nil || IsNil(o.FlatOrPercentage) {
		return nil, false
	}
	return o.FlatOrPercentage, true
}

// HasFlatOrPercentage returns a boolean if a field has been set.
func (o *RoomTypeSellLimitType) HasFlatOrPercentage() bool {
	if o != nil && !IsNil(o.FlatOrPercentage) {
		return true
	}

	return false
}

// SetFlatOrPercentage gets a reference to the given string and assigns it to the FlatOrPercentage field.
func (o *RoomTypeSellLimitType) SetFlatOrPercentage(v string) {
	o.FlatOrPercentage = &v
}

// GetRoomType returns the RoomType field value if set, zero value otherwise.
func (o *RoomTypeSellLimitType) GetRoomType() string {
	if o == nil || IsNil(o.RoomType) {
		var ret string
		return ret
	}
	return *o.RoomType
}

// GetRoomTypeOk returns a tuple with the RoomType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomTypeSellLimitType) GetRoomTypeOk() (*string, bool) {
	if o == nil || IsNil(o.RoomType) {
		return nil, false
	}
	return o.RoomType, true
}

// HasRoomType returns a boolean if a field has been set.
func (o *RoomTypeSellLimitType) HasRoomType() bool {
	if o != nil && !IsNil(o.RoomType) {
		return true
	}

	return false
}

// SetRoomType gets a reference to the given string and assigns it to the RoomType field.
func (o *RoomTypeSellLimitType) SetRoomType(v string) {
	o.RoomType = &v
}

func (o RoomTypeSellLimitType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomTypeSellLimitType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Amount) {
		toSerialize["amount"] = o.Amount
	}
	if !IsNil(o.Date) {
		toSerialize["date"] = o.Date
	}
	if !IsNil(o.FlatOrPercentage) {
		toSerialize["flatOrPercentage"] = o.FlatOrPercentage
	}
	if !IsNil(o.RoomType) {
		toSerialize["roomType"] = o.RoomType
	}
	return toSerialize, nil
}

type NullableRoomTypeSellLimitType struct {
	value *RoomTypeSellLimitType
	isSet bool
}

func (v NullableRoomTypeSellLimitType) Get() *RoomTypeSellLimitType {
	return v.value
}

func (v *NullableRoomTypeSellLimitType) Set(val *RoomTypeSellLimitType) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomTypeSellLimitType) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomTypeSellLimitType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomTypeSellLimitType(val *RoomTypeSellLimitType) *NullableRoomTypeSellLimitType {
	return &NullableRoomTypeSellLimitType{value: val, isSet: true}
}

func (v NullableRoomTypeSellLimitType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomTypeSellLimitType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


