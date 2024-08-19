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

// checks if the RoomClassSellLimitType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomClassSellLimitType{}

// RoomClassSellLimitType struct for RoomClassSellLimitType
type RoomClassSellLimitType struct {
	Amount *float32 `json:"amount,omitempty"`
	Date *string `json:"date,omitempty"`
	FlatOrPercentage *string `json:"flatOrPercentage,omitempty"`
	RoomClass *string `json:"roomClass,omitempty"`
}

// NewRoomClassSellLimitType instantiates a new RoomClassSellLimitType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomClassSellLimitType() *RoomClassSellLimitType {
	this := RoomClassSellLimitType{}
	return &this
}

// NewRoomClassSellLimitTypeWithDefaults instantiates a new RoomClassSellLimitType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomClassSellLimitTypeWithDefaults() *RoomClassSellLimitType {
	this := RoomClassSellLimitType{}
	return &this
}

// GetAmount returns the Amount field value if set, zero value otherwise.
func (o *RoomClassSellLimitType) GetAmount() float32 {
	if o == nil || IsNil(o.Amount) {
		var ret float32
		return ret
	}
	return *o.Amount
}

// GetAmountOk returns a tuple with the Amount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomClassSellLimitType) GetAmountOk() (*float32, bool) {
	if o == nil || IsNil(o.Amount) {
		return nil, false
	}
	return o.Amount, true
}

// HasAmount returns a boolean if a field has been set.
func (o *RoomClassSellLimitType) HasAmount() bool {
	if o != nil && !IsNil(o.Amount) {
		return true
	}

	return false
}

// SetAmount gets a reference to the given float32 and assigns it to the Amount field.
func (o *RoomClassSellLimitType) SetAmount(v float32) {
	o.Amount = &v
}

// GetDate returns the Date field value if set, zero value otherwise.
func (o *RoomClassSellLimitType) GetDate() string {
	if o == nil || IsNil(o.Date) {
		var ret string
		return ret
	}
	return *o.Date
}

// GetDateOk returns a tuple with the Date field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomClassSellLimitType) GetDateOk() (*string, bool) {
	if o == nil || IsNil(o.Date) {
		return nil, false
	}
	return o.Date, true
}

// HasDate returns a boolean if a field has been set.
func (o *RoomClassSellLimitType) HasDate() bool {
	if o != nil && !IsNil(o.Date) {
		return true
	}

	return false
}

// SetDate gets a reference to the given string and assigns it to the Date field.
func (o *RoomClassSellLimitType) SetDate(v string) {
	o.Date = &v
}

// GetFlatOrPercentage returns the FlatOrPercentage field value if set, zero value otherwise.
func (o *RoomClassSellLimitType) GetFlatOrPercentage() string {
	if o == nil || IsNil(o.FlatOrPercentage) {
		var ret string
		return ret
	}
	return *o.FlatOrPercentage
}

// GetFlatOrPercentageOk returns a tuple with the FlatOrPercentage field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomClassSellLimitType) GetFlatOrPercentageOk() (*string, bool) {
	if o == nil || IsNil(o.FlatOrPercentage) {
		return nil, false
	}
	return o.FlatOrPercentage, true
}

// HasFlatOrPercentage returns a boolean if a field has been set.
func (o *RoomClassSellLimitType) HasFlatOrPercentage() bool {
	if o != nil && !IsNil(o.FlatOrPercentage) {
		return true
	}

	return false
}

// SetFlatOrPercentage gets a reference to the given string and assigns it to the FlatOrPercentage field.
func (o *RoomClassSellLimitType) SetFlatOrPercentage(v string) {
	o.FlatOrPercentage = &v
}

// GetRoomClass returns the RoomClass field value if set, zero value otherwise.
func (o *RoomClassSellLimitType) GetRoomClass() string {
	if o == nil || IsNil(o.RoomClass) {
		var ret string
		return ret
	}
	return *o.RoomClass
}

// GetRoomClassOk returns a tuple with the RoomClass field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomClassSellLimitType) GetRoomClassOk() (*string, bool) {
	if o == nil || IsNil(o.RoomClass) {
		return nil, false
	}
	return o.RoomClass, true
}

// HasRoomClass returns a boolean if a field has been set.
func (o *RoomClassSellLimitType) HasRoomClass() bool {
	if o != nil && !IsNil(o.RoomClass) {
		return true
	}

	return false
}

// SetRoomClass gets a reference to the given string and assigns it to the RoomClass field.
func (o *RoomClassSellLimitType) SetRoomClass(v string) {
	o.RoomClass = &v
}

func (o RoomClassSellLimitType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomClassSellLimitType) ToMap() (map[string]interface{}, error) {
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
	if !IsNil(o.RoomClass) {
		toSerialize["roomClass"] = o.RoomClass
	}
	return toSerialize, nil
}

type NullableRoomClassSellLimitType struct {
	value *RoomClassSellLimitType
	isSet bool
}

func (v NullableRoomClassSellLimitType) Get() *RoomClassSellLimitType {
	return v.value
}

func (v *NullableRoomClassSellLimitType) Set(val *RoomClassSellLimitType) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomClassSellLimitType) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomClassSellLimitType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomClassSellLimitType(val *RoomClassSellLimitType) *NullableRoomClassSellLimitType {
	return &NullableRoomClassSellLimitType{value: val, isSet: true}
}

func (v NullableRoomClassSellLimitType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomClassSellLimitType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


