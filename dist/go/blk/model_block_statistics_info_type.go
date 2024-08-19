/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
)

// checks if the BlockStatisticsInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BlockStatisticsInfoType{}

// BlockStatisticsInfoType Information about availability, rate and allotment statistics.
type BlockStatisticsInfoType struct {
	AverageRate *float32 `json:"averageRate,omitempty"`
	Inventory *int32 `json:"inventory,omitempty"`
	Persons *int32 `json:"persons,omitempty"`
	Rate *BlockStatisticsInfoTypeRate `json:"rate,omitempty"`
	Revenue *float32 `json:"revenue,omitempty"`
}

// NewBlockStatisticsInfoType instantiates a new BlockStatisticsInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBlockStatisticsInfoType() *BlockStatisticsInfoType {
	this := BlockStatisticsInfoType{}
	return &this
}

// NewBlockStatisticsInfoTypeWithDefaults instantiates a new BlockStatisticsInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBlockStatisticsInfoTypeWithDefaults() *BlockStatisticsInfoType {
	this := BlockStatisticsInfoType{}
	return &this
}

// GetAverageRate returns the AverageRate field value if set, zero value otherwise.
func (o *BlockStatisticsInfoType) GetAverageRate() float32 {
	if o == nil || IsNil(o.AverageRate) {
		var ret float32
		return ret
	}
	return *o.AverageRate
}

// GetAverageRateOk returns a tuple with the AverageRate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockStatisticsInfoType) GetAverageRateOk() (*float32, bool) {
	if o == nil || IsNil(o.AverageRate) {
		return nil, false
	}
	return o.AverageRate, true
}

// HasAverageRate returns a boolean if a field has been set.
func (o *BlockStatisticsInfoType) HasAverageRate() bool {
	if o != nil && !IsNil(o.AverageRate) {
		return true
	}

	return false
}

// SetAverageRate gets a reference to the given float32 and assigns it to the AverageRate field.
func (o *BlockStatisticsInfoType) SetAverageRate(v float32) {
	o.AverageRate = &v
}

// GetInventory returns the Inventory field value if set, zero value otherwise.
func (o *BlockStatisticsInfoType) GetInventory() int32 {
	if o == nil || IsNil(o.Inventory) {
		var ret int32
		return ret
	}
	return *o.Inventory
}

// GetInventoryOk returns a tuple with the Inventory field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockStatisticsInfoType) GetInventoryOk() (*int32, bool) {
	if o == nil || IsNil(o.Inventory) {
		return nil, false
	}
	return o.Inventory, true
}

// HasInventory returns a boolean if a field has been set.
func (o *BlockStatisticsInfoType) HasInventory() bool {
	if o != nil && !IsNil(o.Inventory) {
		return true
	}

	return false
}

// SetInventory gets a reference to the given int32 and assigns it to the Inventory field.
func (o *BlockStatisticsInfoType) SetInventory(v int32) {
	o.Inventory = &v
}

// GetPersons returns the Persons field value if set, zero value otherwise.
func (o *BlockStatisticsInfoType) GetPersons() int32 {
	if o == nil || IsNil(o.Persons) {
		var ret int32
		return ret
	}
	return *o.Persons
}

// GetPersonsOk returns a tuple with the Persons field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockStatisticsInfoType) GetPersonsOk() (*int32, bool) {
	if o == nil || IsNil(o.Persons) {
		return nil, false
	}
	return o.Persons, true
}

// HasPersons returns a boolean if a field has been set.
func (o *BlockStatisticsInfoType) HasPersons() bool {
	if o != nil && !IsNil(o.Persons) {
		return true
	}

	return false
}

// SetPersons gets a reference to the given int32 and assigns it to the Persons field.
func (o *BlockStatisticsInfoType) SetPersons(v int32) {
	o.Persons = &v
}

// GetRate returns the Rate field value if set, zero value otherwise.
func (o *BlockStatisticsInfoType) GetRate() BlockStatisticsInfoTypeRate {
	if o == nil || IsNil(o.Rate) {
		var ret BlockStatisticsInfoTypeRate
		return ret
	}
	return *o.Rate
}

// GetRateOk returns a tuple with the Rate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockStatisticsInfoType) GetRateOk() (*BlockStatisticsInfoTypeRate, bool) {
	if o == nil || IsNil(o.Rate) {
		return nil, false
	}
	return o.Rate, true
}

// HasRate returns a boolean if a field has been set.
func (o *BlockStatisticsInfoType) HasRate() bool {
	if o != nil && !IsNil(o.Rate) {
		return true
	}

	return false
}

// SetRate gets a reference to the given BlockStatisticsInfoTypeRate and assigns it to the Rate field.
func (o *BlockStatisticsInfoType) SetRate(v BlockStatisticsInfoTypeRate) {
	o.Rate = &v
}

// GetRevenue returns the Revenue field value if set, zero value otherwise.
func (o *BlockStatisticsInfoType) GetRevenue() float32 {
	if o == nil || IsNil(o.Revenue) {
		var ret float32
		return ret
	}
	return *o.Revenue
}

// GetRevenueOk returns a tuple with the Revenue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockStatisticsInfoType) GetRevenueOk() (*float32, bool) {
	if o == nil || IsNil(o.Revenue) {
		return nil, false
	}
	return o.Revenue, true
}

// HasRevenue returns a boolean if a field has been set.
func (o *BlockStatisticsInfoType) HasRevenue() bool {
	if o != nil && !IsNil(o.Revenue) {
		return true
	}

	return false
}

// SetRevenue gets a reference to the given float32 and assigns it to the Revenue field.
func (o *BlockStatisticsInfoType) SetRevenue(v float32) {
	o.Revenue = &v
}

func (o BlockStatisticsInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BlockStatisticsInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AverageRate) {
		toSerialize["averageRate"] = o.AverageRate
	}
	if !IsNil(o.Inventory) {
		toSerialize["inventory"] = o.Inventory
	}
	if !IsNil(o.Persons) {
		toSerialize["persons"] = o.Persons
	}
	if !IsNil(o.Rate) {
		toSerialize["rate"] = o.Rate
	}
	if !IsNil(o.Revenue) {
		toSerialize["revenue"] = o.Revenue
	}
	return toSerialize, nil
}

type NullableBlockStatisticsInfoType struct {
	value *BlockStatisticsInfoType
	isSet bool
}

func (v NullableBlockStatisticsInfoType) Get() *BlockStatisticsInfoType {
	return v.value
}

func (v *NullableBlockStatisticsInfoType) Set(val *BlockStatisticsInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableBlockStatisticsInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableBlockStatisticsInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBlockStatisticsInfoType(val *BlockStatisticsInfoType) *NullableBlockStatisticsInfoType {
	return &NullableBlockStatisticsInfoType{value: val, isSet: true}
}

func (v NullableBlockStatisticsInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBlockStatisticsInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


