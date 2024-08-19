/*
OPERA Cloud Price Availability Rate API

APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package par

import (
	"encoding/json"
)

// checks if the HurdleRateType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HurdleRateType{}

// HurdleRateType Unique identifier for hurdle rate.
type HurdleRateType struct {
	// Maximum number of rooms to sell for which the delta is applicable to be aded to hurdle rate.
	Ceiling *float32 `json:"ceiling,omitempty"`
	// Defines the amount to be added to hurdle rate for each additional rooms sold up to the ceiling.
	Delta *float32 `json:"delta,omitempty"`
	// Hotel code for which the hurdle rate belongs to.
	HotelId *string `json:"hotelId,omitempty"`
	// Defines the amount to be reached before rate code or room type is made available.
	Hurdle *float32 `json:"hurdle,omitempty"`
	// Hurdle date for which the hurdle rate is scheduled.
	HurdleDate *string `json:"hurdleDate,omitempty"`
	// Length of stay for which the hurdle rate applies to.
	LengthOfStay *float32 `json:"lengthOfStay,omitempty"`
	// Maximum number of rooms to sell.
	MaxSolds *float32 `json:"maxSolds,omitempty"`
	// Specifies whether to override hurdle rate or not.
	Override *bool `json:"override,omitempty"`
	// Internal room category of the room type for which the hurdle rate applies to.
	RoomCategory *string `json:"roomCategory,omitempty"`
	// Room type for which the hurdle rate applies to.
	RoomType *string `json:"roomType,omitempty"`
	// Defines the actual number of rooms sold.
	RoomsSold *float32 `json:"roomsSold,omitempty"`
	// Yield category for which the hurdle rate applies to.
	YieldCategory *string `json:"yieldCategory,omitempty"`
	// Yield market code for which the hurdle rate applies to.
	YieldMarketCode *string `json:"yieldMarketCode,omitempty"`
}

// NewHurdleRateType instantiates a new HurdleRateType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHurdleRateType() *HurdleRateType {
	this := HurdleRateType{}
	return &this
}

// NewHurdleRateTypeWithDefaults instantiates a new HurdleRateType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHurdleRateTypeWithDefaults() *HurdleRateType {
	this := HurdleRateType{}
	return &this
}

// GetCeiling returns the Ceiling field value if set, zero value otherwise.
func (o *HurdleRateType) GetCeiling() float32 {
	if o == nil || IsNil(o.Ceiling) {
		var ret float32
		return ret
	}
	return *o.Ceiling
}

// GetCeilingOk returns a tuple with the Ceiling field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HurdleRateType) GetCeilingOk() (*float32, bool) {
	if o == nil || IsNil(o.Ceiling) {
		return nil, false
	}
	return o.Ceiling, true
}

// HasCeiling returns a boolean if a field has been set.
func (o *HurdleRateType) HasCeiling() bool {
	if o != nil && !IsNil(o.Ceiling) {
		return true
	}

	return false
}

// SetCeiling gets a reference to the given float32 and assigns it to the Ceiling field.
func (o *HurdleRateType) SetCeiling(v float32) {
	o.Ceiling = &v
}

// GetDelta returns the Delta field value if set, zero value otherwise.
func (o *HurdleRateType) GetDelta() float32 {
	if o == nil || IsNil(o.Delta) {
		var ret float32
		return ret
	}
	return *o.Delta
}

// GetDeltaOk returns a tuple with the Delta field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HurdleRateType) GetDeltaOk() (*float32, bool) {
	if o == nil || IsNil(o.Delta) {
		return nil, false
	}
	return o.Delta, true
}

// HasDelta returns a boolean if a field has been set.
func (o *HurdleRateType) HasDelta() bool {
	if o != nil && !IsNil(o.Delta) {
		return true
	}

	return false
}

// SetDelta gets a reference to the given float32 and assigns it to the Delta field.
func (o *HurdleRateType) SetDelta(v float32) {
	o.Delta = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *HurdleRateType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HurdleRateType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *HurdleRateType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *HurdleRateType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetHurdle returns the Hurdle field value if set, zero value otherwise.
func (o *HurdleRateType) GetHurdle() float32 {
	if o == nil || IsNil(o.Hurdle) {
		var ret float32
		return ret
	}
	return *o.Hurdle
}

// GetHurdleOk returns a tuple with the Hurdle field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HurdleRateType) GetHurdleOk() (*float32, bool) {
	if o == nil || IsNil(o.Hurdle) {
		return nil, false
	}
	return o.Hurdle, true
}

// HasHurdle returns a boolean if a field has been set.
func (o *HurdleRateType) HasHurdle() bool {
	if o != nil && !IsNil(o.Hurdle) {
		return true
	}

	return false
}

// SetHurdle gets a reference to the given float32 and assigns it to the Hurdle field.
func (o *HurdleRateType) SetHurdle(v float32) {
	o.Hurdle = &v
}

// GetHurdleDate returns the HurdleDate field value if set, zero value otherwise.
func (o *HurdleRateType) GetHurdleDate() string {
	if o == nil || IsNil(o.HurdleDate) {
		var ret string
		return ret
	}
	return *o.HurdleDate
}

// GetHurdleDateOk returns a tuple with the HurdleDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HurdleRateType) GetHurdleDateOk() (*string, bool) {
	if o == nil || IsNil(o.HurdleDate) {
		return nil, false
	}
	return o.HurdleDate, true
}

// HasHurdleDate returns a boolean if a field has been set.
func (o *HurdleRateType) HasHurdleDate() bool {
	if o != nil && !IsNil(o.HurdleDate) {
		return true
	}

	return false
}

// SetHurdleDate gets a reference to the given string and assigns it to the HurdleDate field.
func (o *HurdleRateType) SetHurdleDate(v string) {
	o.HurdleDate = &v
}

// GetLengthOfStay returns the LengthOfStay field value if set, zero value otherwise.
func (o *HurdleRateType) GetLengthOfStay() float32 {
	if o == nil || IsNil(o.LengthOfStay) {
		var ret float32
		return ret
	}
	return *o.LengthOfStay
}

// GetLengthOfStayOk returns a tuple with the LengthOfStay field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HurdleRateType) GetLengthOfStayOk() (*float32, bool) {
	if o == nil || IsNil(o.LengthOfStay) {
		return nil, false
	}
	return o.LengthOfStay, true
}

// HasLengthOfStay returns a boolean if a field has been set.
func (o *HurdleRateType) HasLengthOfStay() bool {
	if o != nil && !IsNil(o.LengthOfStay) {
		return true
	}

	return false
}

// SetLengthOfStay gets a reference to the given float32 and assigns it to the LengthOfStay field.
func (o *HurdleRateType) SetLengthOfStay(v float32) {
	o.LengthOfStay = &v
}

// GetMaxSolds returns the MaxSolds field value if set, zero value otherwise.
func (o *HurdleRateType) GetMaxSolds() float32 {
	if o == nil || IsNil(o.MaxSolds) {
		var ret float32
		return ret
	}
	return *o.MaxSolds
}

// GetMaxSoldsOk returns a tuple with the MaxSolds field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HurdleRateType) GetMaxSoldsOk() (*float32, bool) {
	if o == nil || IsNil(o.MaxSolds) {
		return nil, false
	}
	return o.MaxSolds, true
}

// HasMaxSolds returns a boolean if a field has been set.
func (o *HurdleRateType) HasMaxSolds() bool {
	if o != nil && !IsNil(o.MaxSolds) {
		return true
	}

	return false
}

// SetMaxSolds gets a reference to the given float32 and assigns it to the MaxSolds field.
func (o *HurdleRateType) SetMaxSolds(v float32) {
	o.MaxSolds = &v
}

// GetOverride returns the Override field value if set, zero value otherwise.
func (o *HurdleRateType) GetOverride() bool {
	if o == nil || IsNil(o.Override) {
		var ret bool
		return ret
	}
	return *o.Override
}

// GetOverrideOk returns a tuple with the Override field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HurdleRateType) GetOverrideOk() (*bool, bool) {
	if o == nil || IsNil(o.Override) {
		return nil, false
	}
	return o.Override, true
}

// HasOverride returns a boolean if a field has been set.
func (o *HurdleRateType) HasOverride() bool {
	if o != nil && !IsNil(o.Override) {
		return true
	}

	return false
}

// SetOverride gets a reference to the given bool and assigns it to the Override field.
func (o *HurdleRateType) SetOverride(v bool) {
	o.Override = &v
}

// GetRoomCategory returns the RoomCategory field value if set, zero value otherwise.
func (o *HurdleRateType) GetRoomCategory() string {
	if o == nil || IsNil(o.RoomCategory) {
		var ret string
		return ret
	}
	return *o.RoomCategory
}

// GetRoomCategoryOk returns a tuple with the RoomCategory field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HurdleRateType) GetRoomCategoryOk() (*string, bool) {
	if o == nil || IsNil(o.RoomCategory) {
		return nil, false
	}
	return o.RoomCategory, true
}

// HasRoomCategory returns a boolean if a field has been set.
func (o *HurdleRateType) HasRoomCategory() bool {
	if o != nil && !IsNil(o.RoomCategory) {
		return true
	}

	return false
}

// SetRoomCategory gets a reference to the given string and assigns it to the RoomCategory field.
func (o *HurdleRateType) SetRoomCategory(v string) {
	o.RoomCategory = &v
}

// GetRoomType returns the RoomType field value if set, zero value otherwise.
func (o *HurdleRateType) GetRoomType() string {
	if o == nil || IsNil(o.RoomType) {
		var ret string
		return ret
	}
	return *o.RoomType
}

// GetRoomTypeOk returns a tuple with the RoomType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HurdleRateType) GetRoomTypeOk() (*string, bool) {
	if o == nil || IsNil(o.RoomType) {
		return nil, false
	}
	return o.RoomType, true
}

// HasRoomType returns a boolean if a field has been set.
func (o *HurdleRateType) HasRoomType() bool {
	if o != nil && !IsNil(o.RoomType) {
		return true
	}

	return false
}

// SetRoomType gets a reference to the given string and assigns it to the RoomType field.
func (o *HurdleRateType) SetRoomType(v string) {
	o.RoomType = &v
}

// GetRoomsSold returns the RoomsSold field value if set, zero value otherwise.
func (o *HurdleRateType) GetRoomsSold() float32 {
	if o == nil || IsNil(o.RoomsSold) {
		var ret float32
		return ret
	}
	return *o.RoomsSold
}

// GetRoomsSoldOk returns a tuple with the RoomsSold field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HurdleRateType) GetRoomsSoldOk() (*float32, bool) {
	if o == nil || IsNil(o.RoomsSold) {
		return nil, false
	}
	return o.RoomsSold, true
}

// HasRoomsSold returns a boolean if a field has been set.
func (o *HurdleRateType) HasRoomsSold() bool {
	if o != nil && !IsNil(o.RoomsSold) {
		return true
	}

	return false
}

// SetRoomsSold gets a reference to the given float32 and assigns it to the RoomsSold field.
func (o *HurdleRateType) SetRoomsSold(v float32) {
	o.RoomsSold = &v
}

// GetYieldCategory returns the YieldCategory field value if set, zero value otherwise.
func (o *HurdleRateType) GetYieldCategory() string {
	if o == nil || IsNil(o.YieldCategory) {
		var ret string
		return ret
	}
	return *o.YieldCategory
}

// GetYieldCategoryOk returns a tuple with the YieldCategory field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HurdleRateType) GetYieldCategoryOk() (*string, bool) {
	if o == nil || IsNil(o.YieldCategory) {
		return nil, false
	}
	return o.YieldCategory, true
}

// HasYieldCategory returns a boolean if a field has been set.
func (o *HurdleRateType) HasYieldCategory() bool {
	if o != nil && !IsNil(o.YieldCategory) {
		return true
	}

	return false
}

// SetYieldCategory gets a reference to the given string and assigns it to the YieldCategory field.
func (o *HurdleRateType) SetYieldCategory(v string) {
	o.YieldCategory = &v
}

// GetYieldMarketCode returns the YieldMarketCode field value if set, zero value otherwise.
func (o *HurdleRateType) GetYieldMarketCode() string {
	if o == nil || IsNil(o.YieldMarketCode) {
		var ret string
		return ret
	}
	return *o.YieldMarketCode
}

// GetYieldMarketCodeOk returns a tuple with the YieldMarketCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HurdleRateType) GetYieldMarketCodeOk() (*string, bool) {
	if o == nil || IsNil(o.YieldMarketCode) {
		return nil, false
	}
	return o.YieldMarketCode, true
}

// HasYieldMarketCode returns a boolean if a field has been set.
func (o *HurdleRateType) HasYieldMarketCode() bool {
	if o != nil && !IsNil(o.YieldMarketCode) {
		return true
	}

	return false
}

// SetYieldMarketCode gets a reference to the given string and assigns it to the YieldMarketCode field.
func (o *HurdleRateType) SetYieldMarketCode(v string) {
	o.YieldMarketCode = &v
}

func (o HurdleRateType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HurdleRateType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Ceiling) {
		toSerialize["ceiling"] = o.Ceiling
	}
	if !IsNil(o.Delta) {
		toSerialize["delta"] = o.Delta
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.Hurdle) {
		toSerialize["hurdle"] = o.Hurdle
	}
	if !IsNil(o.HurdleDate) {
		toSerialize["hurdleDate"] = o.HurdleDate
	}
	if !IsNil(o.LengthOfStay) {
		toSerialize["lengthOfStay"] = o.LengthOfStay
	}
	if !IsNil(o.MaxSolds) {
		toSerialize["maxSolds"] = o.MaxSolds
	}
	if !IsNil(o.Override) {
		toSerialize["override"] = o.Override
	}
	if !IsNil(o.RoomCategory) {
		toSerialize["roomCategory"] = o.RoomCategory
	}
	if !IsNil(o.RoomType) {
		toSerialize["roomType"] = o.RoomType
	}
	if !IsNil(o.RoomsSold) {
		toSerialize["roomsSold"] = o.RoomsSold
	}
	if !IsNil(o.YieldCategory) {
		toSerialize["yieldCategory"] = o.YieldCategory
	}
	if !IsNil(o.YieldMarketCode) {
		toSerialize["yieldMarketCode"] = o.YieldMarketCode
	}
	return toSerialize, nil
}

type NullableHurdleRateType struct {
	value *HurdleRateType
	isSet bool
}

func (v NullableHurdleRateType) Get() *HurdleRateType {
	return v.value
}

func (v *NullableHurdleRateType) Set(val *HurdleRateType) {
	v.value = val
	v.isSet = true
}

func (v NullableHurdleRateType) IsSet() bool {
	return v.isSet
}

func (v *NullableHurdleRateType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHurdleRateType(val *HurdleRateType) *NullableHurdleRateType {
	return &NullableHurdleRateType{value: val, isSet: true}
}

func (v NullableHurdleRateType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHurdleRateType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


