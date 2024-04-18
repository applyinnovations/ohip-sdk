/*
OPERA Cloud Housekeeping Service API

APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package hsk

import (
	"encoding/json"
)

// checks if the ForecastTotalsQuantityType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ForecastTotalsQuantityType{}

// ForecastTotalsQuantityType Quatity data for a single day.
type ForecastTotalsQuantityType struct {
	// Date of the statistic.
	Date *string `json:"date,omitempty"`
	// Indicates whether the day is a weekend day or not.
	IsWeekend *bool `json:"isWeekend,omitempty"`
	// The actual quantity
	Quantity *int32 `json:"quantity,omitempty"`
	// This is a break-down of the different room types and their tasks count on a date.
	RoomTypeBreakDown []RoomTypeTaskType `json:"roomTypeBreakDown,omitempty"`
	// Total Credits on the specified date.
	TotalCredits *int32 `json:"totalCredits,omitempty"`
}

// NewForecastTotalsQuantityType instantiates a new ForecastTotalsQuantityType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewForecastTotalsQuantityType() *ForecastTotalsQuantityType {
	this := ForecastTotalsQuantityType{}
	return &this
}

// NewForecastTotalsQuantityTypeWithDefaults instantiates a new ForecastTotalsQuantityType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewForecastTotalsQuantityTypeWithDefaults() *ForecastTotalsQuantityType {
	this := ForecastTotalsQuantityType{}
	return &this
}

// GetDate returns the Date field value if set, zero value otherwise.
func (o *ForecastTotalsQuantityType) GetDate() string {
	if o == nil || IsNil(o.Date) {
		var ret string
		return ret
	}
	return *o.Date
}

// GetDateOk returns a tuple with the Date field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ForecastTotalsQuantityType) GetDateOk() (*string, bool) {
	if o == nil || IsNil(o.Date) {
		return nil, false
	}
	return o.Date, true
}

// HasDate returns a boolean if a field has been set.
func (o *ForecastTotalsQuantityType) HasDate() bool {
	if o != nil && !IsNil(o.Date) {
		return true
	}

	return false
}

// SetDate gets a reference to the given string and assigns it to the Date field.
func (o *ForecastTotalsQuantityType) SetDate(v string) {
	o.Date = &v
}

// GetIsWeekend returns the IsWeekend field value if set, zero value otherwise.
func (o *ForecastTotalsQuantityType) GetIsWeekend() bool {
	if o == nil || IsNil(o.IsWeekend) {
		var ret bool
		return ret
	}
	return *o.IsWeekend
}

// GetIsWeekendOk returns a tuple with the IsWeekend field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ForecastTotalsQuantityType) GetIsWeekendOk() (*bool, bool) {
	if o == nil || IsNil(o.IsWeekend) {
		return nil, false
	}
	return o.IsWeekend, true
}

// HasIsWeekend returns a boolean if a field has been set.
func (o *ForecastTotalsQuantityType) HasIsWeekend() bool {
	if o != nil && !IsNil(o.IsWeekend) {
		return true
	}

	return false
}

// SetIsWeekend gets a reference to the given bool and assigns it to the IsWeekend field.
func (o *ForecastTotalsQuantityType) SetIsWeekend(v bool) {
	o.IsWeekend = &v
}

// GetQuantity returns the Quantity field value if set, zero value otherwise.
func (o *ForecastTotalsQuantityType) GetQuantity() int32 {
	if o == nil || IsNil(o.Quantity) {
		var ret int32
		return ret
	}
	return *o.Quantity
}

// GetQuantityOk returns a tuple with the Quantity field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ForecastTotalsQuantityType) GetQuantityOk() (*int32, bool) {
	if o == nil || IsNil(o.Quantity) {
		return nil, false
	}
	return o.Quantity, true
}

// HasQuantity returns a boolean if a field has been set.
func (o *ForecastTotalsQuantityType) HasQuantity() bool {
	if o != nil && !IsNil(o.Quantity) {
		return true
	}

	return false
}

// SetQuantity gets a reference to the given int32 and assigns it to the Quantity field.
func (o *ForecastTotalsQuantityType) SetQuantity(v int32) {
	o.Quantity = &v
}

// GetRoomTypeBreakDown returns the RoomTypeBreakDown field value if set, zero value otherwise.
func (o *ForecastTotalsQuantityType) GetRoomTypeBreakDown() []RoomTypeTaskType {
	if o == nil || IsNil(o.RoomTypeBreakDown) {
		var ret []RoomTypeTaskType
		return ret
	}
	return o.RoomTypeBreakDown
}

// GetRoomTypeBreakDownOk returns a tuple with the RoomTypeBreakDown field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ForecastTotalsQuantityType) GetRoomTypeBreakDownOk() ([]RoomTypeTaskType, bool) {
	if o == nil || IsNil(o.RoomTypeBreakDown) {
		return nil, false
	}
	return o.RoomTypeBreakDown, true
}

// HasRoomTypeBreakDown returns a boolean if a field has been set.
func (o *ForecastTotalsQuantityType) HasRoomTypeBreakDown() bool {
	if o != nil && !IsNil(o.RoomTypeBreakDown) {
		return true
	}

	return false
}

// SetRoomTypeBreakDown gets a reference to the given []RoomTypeTaskType and assigns it to the RoomTypeBreakDown field.
func (o *ForecastTotalsQuantityType) SetRoomTypeBreakDown(v []RoomTypeTaskType) {
	o.RoomTypeBreakDown = v
}

// GetTotalCredits returns the TotalCredits field value if set, zero value otherwise.
func (o *ForecastTotalsQuantityType) GetTotalCredits() int32 {
	if o == nil || IsNil(o.TotalCredits) {
		var ret int32
		return ret
	}
	return *o.TotalCredits
}

// GetTotalCreditsOk returns a tuple with the TotalCredits field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ForecastTotalsQuantityType) GetTotalCreditsOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalCredits) {
		return nil, false
	}
	return o.TotalCredits, true
}

// HasTotalCredits returns a boolean if a field has been set.
func (o *ForecastTotalsQuantityType) HasTotalCredits() bool {
	if o != nil && !IsNil(o.TotalCredits) {
		return true
	}

	return false
}

// SetTotalCredits gets a reference to the given int32 and assigns it to the TotalCredits field.
func (o *ForecastTotalsQuantityType) SetTotalCredits(v int32) {
	o.TotalCredits = &v
}

func (o ForecastTotalsQuantityType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ForecastTotalsQuantityType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Date) {
		toSerialize["date"] = o.Date
	}
	if !IsNil(o.IsWeekend) {
		toSerialize["isWeekend"] = o.IsWeekend
	}
	if !IsNil(o.Quantity) {
		toSerialize["quantity"] = o.Quantity
	}
	if !IsNil(o.RoomTypeBreakDown) {
		toSerialize["roomTypeBreakDown"] = o.RoomTypeBreakDown
	}
	if !IsNil(o.TotalCredits) {
		toSerialize["totalCredits"] = o.TotalCredits
	}
	return toSerialize, nil
}

type NullableForecastTotalsQuantityType struct {
	value *ForecastTotalsQuantityType
	isSet bool
}

func (v NullableForecastTotalsQuantityType) Get() *ForecastTotalsQuantityType {
	return v.value
}

func (v *NullableForecastTotalsQuantityType) Set(val *ForecastTotalsQuantityType) {
	v.value = val
	v.isSet = true
}

func (v NullableForecastTotalsQuantityType) IsSet() bool {
	return v.isSet
}

func (v *NullableForecastTotalsQuantityType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableForecastTotalsQuantityType(val *ForecastTotalsQuantityType) *NullableForecastTotalsQuantityType {
	return &NullableForecastTotalsQuantityType{value: val, isSet: true}
}

func (v NullableForecastTotalsQuantityType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableForecastTotalsQuantityType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

