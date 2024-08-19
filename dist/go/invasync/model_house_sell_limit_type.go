/*
Opera Cloud Inventory Asynchronous API

APIs to cater for Inventory related asynchronous functionality in OPERA Cloud. This includes viewing inventory data along with its revenue and updating inventory&apos;s sell limits for date ranges. <p>This API follows an async pattern where</p><ul><li>You make an initial request, which returns a Location header</li><li>You poll HEAD on the Location header returned to obtain the status of the process</li><li>Once the process completes HEAD will return in the Location header the URL that must be called to obtain the results of the process</li><li>You call the URL to obtain the results of the process</li></ul><br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package invasync

import (
	"encoding/json"
)

// checks if the HouseSellLimitType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HouseSellLimitType{}

// HouseSellLimitType struct for HouseSellLimitType
type HouseSellLimitType struct {
	Amount *float32 `json:"amount,omitempty"`
	Date *string `json:"date,omitempty"`
	// Indicates if sell limit is flat or percentage.
	FlatOrPercentage *string `json:"flatOrPercentage,omitempty"`
}

// NewHouseSellLimitType instantiates a new HouseSellLimitType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHouseSellLimitType() *HouseSellLimitType {
	this := HouseSellLimitType{}
	return &this
}

// NewHouseSellLimitTypeWithDefaults instantiates a new HouseSellLimitType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHouseSellLimitTypeWithDefaults() *HouseSellLimitType {
	this := HouseSellLimitType{}
	return &this
}

// GetAmount returns the Amount field value if set, zero value otherwise.
func (o *HouseSellLimitType) GetAmount() float32 {
	if o == nil || IsNil(o.Amount) {
		var ret float32
		return ret
	}
	return *o.Amount
}

// GetAmountOk returns a tuple with the Amount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HouseSellLimitType) GetAmountOk() (*float32, bool) {
	if o == nil || IsNil(o.Amount) {
		return nil, false
	}
	return o.Amount, true
}

// HasAmount returns a boolean if a field has been set.
func (o *HouseSellLimitType) HasAmount() bool {
	if o != nil && !IsNil(o.Amount) {
		return true
	}

	return false
}

// SetAmount gets a reference to the given float32 and assigns it to the Amount field.
func (o *HouseSellLimitType) SetAmount(v float32) {
	o.Amount = &v
}

// GetDate returns the Date field value if set, zero value otherwise.
func (o *HouseSellLimitType) GetDate() string {
	if o == nil || IsNil(o.Date) {
		var ret string
		return ret
	}
	return *o.Date
}

// GetDateOk returns a tuple with the Date field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HouseSellLimitType) GetDateOk() (*string, bool) {
	if o == nil || IsNil(o.Date) {
		return nil, false
	}
	return o.Date, true
}

// HasDate returns a boolean if a field has been set.
func (o *HouseSellLimitType) HasDate() bool {
	if o != nil && !IsNil(o.Date) {
		return true
	}

	return false
}

// SetDate gets a reference to the given string and assigns it to the Date field.
func (o *HouseSellLimitType) SetDate(v string) {
	o.Date = &v
}

// GetFlatOrPercentage returns the FlatOrPercentage field value if set, zero value otherwise.
func (o *HouseSellLimitType) GetFlatOrPercentage() string {
	if o == nil || IsNil(o.FlatOrPercentage) {
		var ret string
		return ret
	}
	return *o.FlatOrPercentage
}

// GetFlatOrPercentageOk returns a tuple with the FlatOrPercentage field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HouseSellLimitType) GetFlatOrPercentageOk() (*string, bool) {
	if o == nil || IsNil(o.FlatOrPercentage) {
		return nil, false
	}
	return o.FlatOrPercentage, true
}

// HasFlatOrPercentage returns a boolean if a field has been set.
func (o *HouseSellLimitType) HasFlatOrPercentage() bool {
	if o != nil && !IsNil(o.FlatOrPercentage) {
		return true
	}

	return false
}

// SetFlatOrPercentage gets a reference to the given string and assigns it to the FlatOrPercentage field.
func (o *HouseSellLimitType) SetFlatOrPercentage(v string) {
	o.FlatOrPercentage = &v
}

func (o HouseSellLimitType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HouseSellLimitType) ToMap() (map[string]interface{}, error) {
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
	return toSerialize, nil
}

type NullableHouseSellLimitType struct {
	value *HouseSellLimitType
	isSet bool
}

func (v NullableHouseSellLimitType) Get() *HouseSellLimitType {
	return v.value
}

func (v *NullableHouseSellLimitType) Set(val *HouseSellLimitType) {
	v.value = val
	v.isSet = true
}

func (v NullableHouseSellLimitType) IsSet() bool {
	return v.isSet
}

func (v *NullableHouseSellLimitType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHouseSellLimitType(val *HouseSellLimitType) *NullableHouseSellLimitType {
	return &NullableHouseSellLimitType{value: val, isSet: true}
}

func (v NullableHouseSellLimitType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHouseSellLimitType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


