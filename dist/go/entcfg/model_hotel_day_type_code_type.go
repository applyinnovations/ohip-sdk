/*
OPERA Cloud Enterprise Configuration API

APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package entcfg

import (
	"encoding/json"
)

// checks if the HotelDayTypeCodeType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HotelDayTypeCodeType{}

// HotelDayTypeCodeType Base structure for Day Type Code at both template and hotel levels.
type HotelDayTypeCodeType struct {
	// Value that will be added to rate on a day.
	Adder *float32 `json:"adder,omitempty"`
	// Code of a Day Type.
	Code *string `json:"code,omitempty"`
	Color *ColorType `json:"color,omitempty"`
	// Description of a Day Type.
	Description *string `json:"description,omitempty"`
	// Hotel code to which the Day Type is associated.
	Hotel *string `json:"hotel,omitempty"`
	// Value by which the rates will be multiplied on a day.
	Multiplier *float32 `json:"multiplier,omitempty"`
	// Sell sequence for a Day Type.
	SellSequence *float32 `json:"sellSequence,omitempty"`
}

// NewHotelDayTypeCodeType instantiates a new HotelDayTypeCodeType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHotelDayTypeCodeType() *HotelDayTypeCodeType {
	this := HotelDayTypeCodeType{}
	return &this
}

// NewHotelDayTypeCodeTypeWithDefaults instantiates a new HotelDayTypeCodeType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHotelDayTypeCodeTypeWithDefaults() *HotelDayTypeCodeType {
	this := HotelDayTypeCodeType{}
	return &this
}

// GetAdder returns the Adder field value if set, zero value otherwise.
func (o *HotelDayTypeCodeType) GetAdder() float32 {
	if o == nil || IsNil(o.Adder) {
		var ret float32
		return ret
	}
	return *o.Adder
}

// GetAdderOk returns a tuple with the Adder field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelDayTypeCodeType) GetAdderOk() (*float32, bool) {
	if o == nil || IsNil(o.Adder) {
		return nil, false
	}
	return o.Adder, true
}

// HasAdder returns a boolean if a field has been set.
func (o *HotelDayTypeCodeType) HasAdder() bool {
	if o != nil && !IsNil(o.Adder) {
		return true
	}

	return false
}

// SetAdder gets a reference to the given float32 and assigns it to the Adder field.
func (o *HotelDayTypeCodeType) SetAdder(v float32) {
	o.Adder = &v
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *HotelDayTypeCodeType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelDayTypeCodeType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *HotelDayTypeCodeType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *HotelDayTypeCodeType) SetCode(v string) {
	o.Code = &v
}

// GetColor returns the Color field value if set, zero value otherwise.
func (o *HotelDayTypeCodeType) GetColor() ColorType {
	if o == nil || IsNil(o.Color) {
		var ret ColorType
		return ret
	}
	return *o.Color
}

// GetColorOk returns a tuple with the Color field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelDayTypeCodeType) GetColorOk() (*ColorType, bool) {
	if o == nil || IsNil(o.Color) {
		return nil, false
	}
	return o.Color, true
}

// HasColor returns a boolean if a field has been set.
func (o *HotelDayTypeCodeType) HasColor() bool {
	if o != nil && !IsNil(o.Color) {
		return true
	}

	return false
}

// SetColor gets a reference to the given ColorType and assigns it to the Color field.
func (o *HotelDayTypeCodeType) SetColor(v ColorType) {
	o.Color = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *HotelDayTypeCodeType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelDayTypeCodeType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *HotelDayTypeCodeType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *HotelDayTypeCodeType) SetDescription(v string) {
	o.Description = &v
}

// GetHotel returns the Hotel field value if set, zero value otherwise.
func (o *HotelDayTypeCodeType) GetHotel() string {
	if o == nil || IsNil(o.Hotel) {
		var ret string
		return ret
	}
	return *o.Hotel
}

// GetHotelOk returns a tuple with the Hotel field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelDayTypeCodeType) GetHotelOk() (*string, bool) {
	if o == nil || IsNil(o.Hotel) {
		return nil, false
	}
	return o.Hotel, true
}

// HasHotel returns a boolean if a field has been set.
func (o *HotelDayTypeCodeType) HasHotel() bool {
	if o != nil && !IsNil(o.Hotel) {
		return true
	}

	return false
}

// SetHotel gets a reference to the given string and assigns it to the Hotel field.
func (o *HotelDayTypeCodeType) SetHotel(v string) {
	o.Hotel = &v
}

// GetMultiplier returns the Multiplier field value if set, zero value otherwise.
func (o *HotelDayTypeCodeType) GetMultiplier() float32 {
	if o == nil || IsNil(o.Multiplier) {
		var ret float32
		return ret
	}
	return *o.Multiplier
}

// GetMultiplierOk returns a tuple with the Multiplier field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelDayTypeCodeType) GetMultiplierOk() (*float32, bool) {
	if o == nil || IsNil(o.Multiplier) {
		return nil, false
	}
	return o.Multiplier, true
}

// HasMultiplier returns a boolean if a field has been set.
func (o *HotelDayTypeCodeType) HasMultiplier() bool {
	if o != nil && !IsNil(o.Multiplier) {
		return true
	}

	return false
}

// SetMultiplier gets a reference to the given float32 and assigns it to the Multiplier field.
func (o *HotelDayTypeCodeType) SetMultiplier(v float32) {
	o.Multiplier = &v
}

// GetSellSequence returns the SellSequence field value if set, zero value otherwise.
func (o *HotelDayTypeCodeType) GetSellSequence() float32 {
	if o == nil || IsNil(o.SellSequence) {
		var ret float32
		return ret
	}
	return *o.SellSequence
}

// GetSellSequenceOk returns a tuple with the SellSequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelDayTypeCodeType) GetSellSequenceOk() (*float32, bool) {
	if o == nil || IsNil(o.SellSequence) {
		return nil, false
	}
	return o.SellSequence, true
}

// HasSellSequence returns a boolean if a field has been set.
func (o *HotelDayTypeCodeType) HasSellSequence() bool {
	if o != nil && !IsNil(o.SellSequence) {
		return true
	}

	return false
}

// SetSellSequence gets a reference to the given float32 and assigns it to the SellSequence field.
func (o *HotelDayTypeCodeType) SetSellSequence(v float32) {
	o.SellSequence = &v
}

func (o HotelDayTypeCodeType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HotelDayTypeCodeType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Adder) {
		toSerialize["adder"] = o.Adder
	}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.Color) {
		toSerialize["color"] = o.Color
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.Hotel) {
		toSerialize["hotel"] = o.Hotel
	}
	if !IsNil(o.Multiplier) {
		toSerialize["multiplier"] = o.Multiplier
	}
	if !IsNil(o.SellSequence) {
		toSerialize["sellSequence"] = o.SellSequence
	}
	return toSerialize, nil
}

type NullableHotelDayTypeCodeType struct {
	value *HotelDayTypeCodeType
	isSet bool
}

func (v NullableHotelDayTypeCodeType) Get() *HotelDayTypeCodeType {
	return v.value
}

func (v *NullableHotelDayTypeCodeType) Set(val *HotelDayTypeCodeType) {
	v.value = val
	v.isSet = true
}

func (v NullableHotelDayTypeCodeType) IsSet() bool {
	return v.isSet
}

func (v *NullableHotelDayTypeCodeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHotelDayTypeCodeType(val *HotelDayTypeCodeType) *NullableHotelDayTypeCodeType {
	return &NullableHotelDayTypeCodeType{value: val, isSet: true}
}

func (v NullableHotelDayTypeCodeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHotelDayTypeCodeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


