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

// checks if the HurdleRateEditType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HurdleRateEditType{}

// HurdleRateEditType Unique identifier for hurdle rate.
type HurdleRateEditType struct {
	// Hotel code for which the hurdle rate belongs to.
	HotelId *string `json:"hotelId,omitempty"`
	// Hurdle date for which the hurdle rate is scheduled.
	HurdleDate *string `json:"hurdleDate,omitempty"`
	// Length of stay for which the hurdle rate applies to.
	LengthOfStay *float32 `json:"lengthOfStay,omitempty"`
	NewHurdleRate *HurdleRateType `json:"newHurdleRate,omitempty"`
	// Internal room category of the room type for which the hurdle rate applies to.
	RoomCategory *string `json:"roomCategory,omitempty"`
	// Room type for which the hurdle rate applies to.
	RoomType *string `json:"roomType,omitempty"`
	// Yield category for which the hurdle rate applies to.
	YieldCategory *string `json:"yieldCategory,omitempty"`
	// Yield market code for which the hurdle rate applies to.
	YieldMarketCode *string `json:"yieldMarketCode,omitempty"`
}

// NewHurdleRateEditType instantiates a new HurdleRateEditType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHurdleRateEditType() *HurdleRateEditType {
	this := HurdleRateEditType{}
	return &this
}

// NewHurdleRateEditTypeWithDefaults instantiates a new HurdleRateEditType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHurdleRateEditTypeWithDefaults() *HurdleRateEditType {
	this := HurdleRateEditType{}
	return &this
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *HurdleRateEditType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HurdleRateEditType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *HurdleRateEditType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *HurdleRateEditType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetHurdleDate returns the HurdleDate field value if set, zero value otherwise.
func (o *HurdleRateEditType) GetHurdleDate() string {
	if o == nil || IsNil(o.HurdleDate) {
		var ret string
		return ret
	}
	return *o.HurdleDate
}

// GetHurdleDateOk returns a tuple with the HurdleDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HurdleRateEditType) GetHurdleDateOk() (*string, bool) {
	if o == nil || IsNil(o.HurdleDate) {
		return nil, false
	}
	return o.HurdleDate, true
}

// HasHurdleDate returns a boolean if a field has been set.
func (o *HurdleRateEditType) HasHurdleDate() bool {
	if o != nil && !IsNil(o.HurdleDate) {
		return true
	}

	return false
}

// SetHurdleDate gets a reference to the given string and assigns it to the HurdleDate field.
func (o *HurdleRateEditType) SetHurdleDate(v string) {
	o.HurdleDate = &v
}

// GetLengthOfStay returns the LengthOfStay field value if set, zero value otherwise.
func (o *HurdleRateEditType) GetLengthOfStay() float32 {
	if o == nil || IsNil(o.LengthOfStay) {
		var ret float32
		return ret
	}
	return *o.LengthOfStay
}

// GetLengthOfStayOk returns a tuple with the LengthOfStay field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HurdleRateEditType) GetLengthOfStayOk() (*float32, bool) {
	if o == nil || IsNil(o.LengthOfStay) {
		return nil, false
	}
	return o.LengthOfStay, true
}

// HasLengthOfStay returns a boolean if a field has been set.
func (o *HurdleRateEditType) HasLengthOfStay() bool {
	if o != nil && !IsNil(o.LengthOfStay) {
		return true
	}

	return false
}

// SetLengthOfStay gets a reference to the given float32 and assigns it to the LengthOfStay field.
func (o *HurdleRateEditType) SetLengthOfStay(v float32) {
	o.LengthOfStay = &v
}

// GetNewHurdleRate returns the NewHurdleRate field value if set, zero value otherwise.
func (o *HurdleRateEditType) GetNewHurdleRate() HurdleRateType {
	if o == nil || IsNil(o.NewHurdleRate) {
		var ret HurdleRateType
		return ret
	}
	return *o.NewHurdleRate
}

// GetNewHurdleRateOk returns a tuple with the NewHurdleRate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HurdleRateEditType) GetNewHurdleRateOk() (*HurdleRateType, bool) {
	if o == nil || IsNil(o.NewHurdleRate) {
		return nil, false
	}
	return o.NewHurdleRate, true
}

// HasNewHurdleRate returns a boolean if a field has been set.
func (o *HurdleRateEditType) HasNewHurdleRate() bool {
	if o != nil && !IsNil(o.NewHurdleRate) {
		return true
	}

	return false
}

// SetNewHurdleRate gets a reference to the given HurdleRateType and assigns it to the NewHurdleRate field.
func (o *HurdleRateEditType) SetNewHurdleRate(v HurdleRateType) {
	o.NewHurdleRate = &v
}

// GetRoomCategory returns the RoomCategory field value if set, zero value otherwise.
func (o *HurdleRateEditType) GetRoomCategory() string {
	if o == nil || IsNil(o.RoomCategory) {
		var ret string
		return ret
	}
	return *o.RoomCategory
}

// GetRoomCategoryOk returns a tuple with the RoomCategory field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HurdleRateEditType) GetRoomCategoryOk() (*string, bool) {
	if o == nil || IsNil(o.RoomCategory) {
		return nil, false
	}
	return o.RoomCategory, true
}

// HasRoomCategory returns a boolean if a field has been set.
func (o *HurdleRateEditType) HasRoomCategory() bool {
	if o != nil && !IsNil(o.RoomCategory) {
		return true
	}

	return false
}

// SetRoomCategory gets a reference to the given string and assigns it to the RoomCategory field.
func (o *HurdleRateEditType) SetRoomCategory(v string) {
	o.RoomCategory = &v
}

// GetRoomType returns the RoomType field value if set, zero value otherwise.
func (o *HurdleRateEditType) GetRoomType() string {
	if o == nil || IsNil(o.RoomType) {
		var ret string
		return ret
	}
	return *o.RoomType
}

// GetRoomTypeOk returns a tuple with the RoomType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HurdleRateEditType) GetRoomTypeOk() (*string, bool) {
	if o == nil || IsNil(o.RoomType) {
		return nil, false
	}
	return o.RoomType, true
}

// HasRoomType returns a boolean if a field has been set.
func (o *HurdleRateEditType) HasRoomType() bool {
	if o != nil && !IsNil(o.RoomType) {
		return true
	}

	return false
}

// SetRoomType gets a reference to the given string and assigns it to the RoomType field.
func (o *HurdleRateEditType) SetRoomType(v string) {
	o.RoomType = &v
}

// GetYieldCategory returns the YieldCategory field value if set, zero value otherwise.
func (o *HurdleRateEditType) GetYieldCategory() string {
	if o == nil || IsNil(o.YieldCategory) {
		var ret string
		return ret
	}
	return *o.YieldCategory
}

// GetYieldCategoryOk returns a tuple with the YieldCategory field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HurdleRateEditType) GetYieldCategoryOk() (*string, bool) {
	if o == nil || IsNil(o.YieldCategory) {
		return nil, false
	}
	return o.YieldCategory, true
}

// HasYieldCategory returns a boolean if a field has been set.
func (o *HurdleRateEditType) HasYieldCategory() bool {
	if o != nil && !IsNil(o.YieldCategory) {
		return true
	}

	return false
}

// SetYieldCategory gets a reference to the given string and assigns it to the YieldCategory field.
func (o *HurdleRateEditType) SetYieldCategory(v string) {
	o.YieldCategory = &v
}

// GetYieldMarketCode returns the YieldMarketCode field value if set, zero value otherwise.
func (o *HurdleRateEditType) GetYieldMarketCode() string {
	if o == nil || IsNil(o.YieldMarketCode) {
		var ret string
		return ret
	}
	return *o.YieldMarketCode
}

// GetYieldMarketCodeOk returns a tuple with the YieldMarketCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HurdleRateEditType) GetYieldMarketCodeOk() (*string, bool) {
	if o == nil || IsNil(o.YieldMarketCode) {
		return nil, false
	}
	return o.YieldMarketCode, true
}

// HasYieldMarketCode returns a boolean if a field has been set.
func (o *HurdleRateEditType) HasYieldMarketCode() bool {
	if o != nil && !IsNil(o.YieldMarketCode) {
		return true
	}

	return false
}

// SetYieldMarketCode gets a reference to the given string and assigns it to the YieldMarketCode field.
func (o *HurdleRateEditType) SetYieldMarketCode(v string) {
	o.YieldMarketCode = &v
}

func (o HurdleRateEditType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HurdleRateEditType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.HurdleDate) {
		toSerialize["hurdleDate"] = o.HurdleDate
	}
	if !IsNil(o.LengthOfStay) {
		toSerialize["lengthOfStay"] = o.LengthOfStay
	}
	if !IsNil(o.NewHurdleRate) {
		toSerialize["newHurdleRate"] = o.NewHurdleRate
	}
	if !IsNil(o.RoomCategory) {
		toSerialize["roomCategory"] = o.RoomCategory
	}
	if !IsNil(o.RoomType) {
		toSerialize["roomType"] = o.RoomType
	}
	if !IsNil(o.YieldCategory) {
		toSerialize["yieldCategory"] = o.YieldCategory
	}
	if !IsNil(o.YieldMarketCode) {
		toSerialize["yieldMarketCode"] = o.YieldMarketCode
	}
	return toSerialize, nil
}

type NullableHurdleRateEditType struct {
	value *HurdleRateEditType
	isSet bool
}

func (v NullableHurdleRateEditType) Get() *HurdleRateEditType {
	return v.value
}

func (v *NullableHurdleRateEditType) Set(val *HurdleRateEditType) {
	v.value = val
	v.isSet = true
}

func (v NullableHurdleRateEditType) IsSet() bool {
	return v.isSet
}

func (v *NullableHurdleRateEditType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHurdleRateEditType(val *HurdleRateEditType) *NullableHurdleRateEditType {
	return &NullableHurdleRateEditType{value: val, isSet: true}
}

func (v NullableHurdleRateEditType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHurdleRateEditType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


