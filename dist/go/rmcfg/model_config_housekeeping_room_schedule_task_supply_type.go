/*
OPERA Cloud Room Configuration API

APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rmcfg

import (
	"encoding/json"
)

// checks if the ConfigHousekeepingRoomScheduleTaskSupplyType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ConfigHousekeepingRoomScheduleTaskSupplyType{}

// ConfigHousekeepingRoomScheduleTaskSupplyType Facility Housekeeping Code, its description and quantity.
type ConfigHousekeepingRoomScheduleTaskSupplyType struct {
	// Facility code value.
	Code *string `json:"code,omitempty"`
	// Facility Code.
	Description *string `json:"description,omitempty"`
	// Specifies the hotel code that the room type belongs to.
	HotelId *string `json:"hotelId,omitempty"`
	// Specifies the housekeeping room schedule code.
	HousekeepingRoomScheduleCode *string `json:"housekeepingRoomScheduleCode,omitempty"`
	// Signifies the quantity.
	Quantity *int32 `json:"quantity,omitempty"`
	RoomType *CodeDescriptionType `json:"roomType,omitempty"`
	// Used to store the housekeeping room schedule sequence.
	Sequence *int32 `json:"sequence,omitempty"`
}

// NewConfigHousekeepingRoomScheduleTaskSupplyType instantiates a new ConfigHousekeepingRoomScheduleTaskSupplyType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewConfigHousekeepingRoomScheduleTaskSupplyType() *ConfigHousekeepingRoomScheduleTaskSupplyType {
	this := ConfigHousekeepingRoomScheduleTaskSupplyType{}
	return &this
}

// NewConfigHousekeepingRoomScheduleTaskSupplyTypeWithDefaults instantiates a new ConfigHousekeepingRoomScheduleTaskSupplyType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewConfigHousekeepingRoomScheduleTaskSupplyTypeWithDefaults() *ConfigHousekeepingRoomScheduleTaskSupplyType {
	this := ConfigHousekeepingRoomScheduleTaskSupplyType{}
	return &this
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) SetCode(v string) {
	o.Code = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) SetDescription(v string) {
	o.Description = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetHousekeepingRoomScheduleCode returns the HousekeepingRoomScheduleCode field value if set, zero value otherwise.
func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) GetHousekeepingRoomScheduleCode() string {
	if o == nil || IsNil(o.HousekeepingRoomScheduleCode) {
		var ret string
		return ret
	}
	return *o.HousekeepingRoomScheduleCode
}

// GetHousekeepingRoomScheduleCodeOk returns a tuple with the HousekeepingRoomScheduleCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) GetHousekeepingRoomScheduleCodeOk() (*string, bool) {
	if o == nil || IsNil(o.HousekeepingRoomScheduleCode) {
		return nil, false
	}
	return o.HousekeepingRoomScheduleCode, true
}

// HasHousekeepingRoomScheduleCode returns a boolean if a field has been set.
func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) HasHousekeepingRoomScheduleCode() bool {
	if o != nil && !IsNil(o.HousekeepingRoomScheduleCode) {
		return true
	}

	return false
}

// SetHousekeepingRoomScheduleCode gets a reference to the given string and assigns it to the HousekeepingRoomScheduleCode field.
func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) SetHousekeepingRoomScheduleCode(v string) {
	o.HousekeepingRoomScheduleCode = &v
}

// GetQuantity returns the Quantity field value if set, zero value otherwise.
func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) GetQuantity() int32 {
	if o == nil || IsNil(o.Quantity) {
		var ret int32
		return ret
	}
	return *o.Quantity
}

// GetQuantityOk returns a tuple with the Quantity field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) GetQuantityOk() (*int32, bool) {
	if o == nil || IsNil(o.Quantity) {
		return nil, false
	}
	return o.Quantity, true
}

// HasQuantity returns a boolean if a field has been set.
func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) HasQuantity() bool {
	if o != nil && !IsNil(o.Quantity) {
		return true
	}

	return false
}

// SetQuantity gets a reference to the given int32 and assigns it to the Quantity field.
func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) SetQuantity(v int32) {
	o.Quantity = &v
}

// GetRoomType returns the RoomType field value if set, zero value otherwise.
func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) GetRoomType() CodeDescriptionType {
	if o == nil || IsNil(o.RoomType) {
		var ret CodeDescriptionType
		return ret
	}
	return *o.RoomType
}

// GetRoomTypeOk returns a tuple with the RoomType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) GetRoomTypeOk() (*CodeDescriptionType, bool) {
	if o == nil || IsNil(o.RoomType) {
		return nil, false
	}
	return o.RoomType, true
}

// HasRoomType returns a boolean if a field has been set.
func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) HasRoomType() bool {
	if o != nil && !IsNil(o.RoomType) {
		return true
	}

	return false
}

// SetRoomType gets a reference to the given CodeDescriptionType and assigns it to the RoomType field.
func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) SetRoomType(v CodeDescriptionType) {
	o.RoomType = &v
}

// GetSequence returns the Sequence field value if set, zero value otherwise.
func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) GetSequence() int32 {
	if o == nil || IsNil(o.Sequence) {
		var ret int32
		return ret
	}
	return *o.Sequence
}

// GetSequenceOk returns a tuple with the Sequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) GetSequenceOk() (*int32, bool) {
	if o == nil || IsNil(o.Sequence) {
		return nil, false
	}
	return o.Sequence, true
}

// HasSequence returns a boolean if a field has been set.
func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) HasSequence() bool {
	if o != nil && !IsNil(o.Sequence) {
		return true
	}

	return false
}

// SetSequence gets a reference to the given int32 and assigns it to the Sequence field.
func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) SetSequence(v int32) {
	o.Sequence = &v
}

func (o ConfigHousekeepingRoomScheduleTaskSupplyType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ConfigHousekeepingRoomScheduleTaskSupplyType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.HousekeepingRoomScheduleCode) {
		toSerialize["housekeepingRoomScheduleCode"] = o.HousekeepingRoomScheduleCode
	}
	if !IsNil(o.Quantity) {
		toSerialize["quantity"] = o.Quantity
	}
	if !IsNil(o.RoomType) {
		toSerialize["roomType"] = o.RoomType
	}
	if !IsNil(o.Sequence) {
		toSerialize["sequence"] = o.Sequence
	}
	return toSerialize, nil
}

type NullableConfigHousekeepingRoomScheduleTaskSupplyType struct {
	value *ConfigHousekeepingRoomScheduleTaskSupplyType
	isSet bool
}

func (v NullableConfigHousekeepingRoomScheduleTaskSupplyType) Get() *ConfigHousekeepingRoomScheduleTaskSupplyType {
	return v.value
}

func (v *NullableConfigHousekeepingRoomScheduleTaskSupplyType) Set(val *ConfigHousekeepingRoomScheduleTaskSupplyType) {
	v.value = val
	v.isSet = true
}

func (v NullableConfigHousekeepingRoomScheduleTaskSupplyType) IsSet() bool {
	return v.isSet
}

func (v *NullableConfigHousekeepingRoomScheduleTaskSupplyType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableConfigHousekeepingRoomScheduleTaskSupplyType(val *ConfigHousekeepingRoomScheduleTaskSupplyType) *NullableConfigHousekeepingRoomScheduleTaskSupplyType {
	return &NullableConfigHousekeepingRoomScheduleTaskSupplyType{value: val, isSet: true}
}

func (v NullableConfigHousekeepingRoomScheduleTaskSupplyType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableConfigHousekeepingRoomScheduleTaskSupplyType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

