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

// checks if the HotelRoomMaintenanceReasonType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HotelRoomMaintenanceReasonType{}

// HotelRoomMaintenanceReasonType Base common structure for Room Maintenance at both hotel and template levels.
type HotelRoomMaintenanceReasonType struct {
	// Identification code for a particular room maintenance reason.
	Code *string `json:"code,omitempty"`
	// Description of a particular room maintenance reason.
	Description *string `json:"description,omitempty"`
	// Hotel code that a particular room maintenance reason belongs to.
	HotelId *string `json:"hotelId,omitempty"`
	// Inactive flag for a particular room maintenance reason.
	Inactive *bool `json:"inactive,omitempty"`
	// Indicates the sell sequence for a particular room maintenance reason.
	SellSequence *float32 `json:"sellSequence,omitempty"`
}

// NewHotelRoomMaintenanceReasonType instantiates a new HotelRoomMaintenanceReasonType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHotelRoomMaintenanceReasonType() *HotelRoomMaintenanceReasonType {
	this := HotelRoomMaintenanceReasonType{}
	return &this
}

// NewHotelRoomMaintenanceReasonTypeWithDefaults instantiates a new HotelRoomMaintenanceReasonType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHotelRoomMaintenanceReasonTypeWithDefaults() *HotelRoomMaintenanceReasonType {
	this := HotelRoomMaintenanceReasonType{}
	return &this
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *HotelRoomMaintenanceReasonType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelRoomMaintenanceReasonType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *HotelRoomMaintenanceReasonType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *HotelRoomMaintenanceReasonType) SetCode(v string) {
	o.Code = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *HotelRoomMaintenanceReasonType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelRoomMaintenanceReasonType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *HotelRoomMaintenanceReasonType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *HotelRoomMaintenanceReasonType) SetDescription(v string) {
	o.Description = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *HotelRoomMaintenanceReasonType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelRoomMaintenanceReasonType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *HotelRoomMaintenanceReasonType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *HotelRoomMaintenanceReasonType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetInactive returns the Inactive field value if set, zero value otherwise.
func (o *HotelRoomMaintenanceReasonType) GetInactive() bool {
	if o == nil || IsNil(o.Inactive) {
		var ret bool
		return ret
	}
	return *o.Inactive
}

// GetInactiveOk returns a tuple with the Inactive field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelRoomMaintenanceReasonType) GetInactiveOk() (*bool, bool) {
	if o == nil || IsNil(o.Inactive) {
		return nil, false
	}
	return o.Inactive, true
}

// HasInactive returns a boolean if a field has been set.
func (o *HotelRoomMaintenanceReasonType) HasInactive() bool {
	if o != nil && !IsNil(o.Inactive) {
		return true
	}

	return false
}

// SetInactive gets a reference to the given bool and assigns it to the Inactive field.
func (o *HotelRoomMaintenanceReasonType) SetInactive(v bool) {
	o.Inactive = &v
}

// GetSellSequence returns the SellSequence field value if set, zero value otherwise.
func (o *HotelRoomMaintenanceReasonType) GetSellSequence() float32 {
	if o == nil || IsNil(o.SellSequence) {
		var ret float32
		return ret
	}
	return *o.SellSequence
}

// GetSellSequenceOk returns a tuple with the SellSequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelRoomMaintenanceReasonType) GetSellSequenceOk() (*float32, bool) {
	if o == nil || IsNil(o.SellSequence) {
		return nil, false
	}
	return o.SellSequence, true
}

// HasSellSequence returns a boolean if a field has been set.
func (o *HotelRoomMaintenanceReasonType) HasSellSequence() bool {
	if o != nil && !IsNil(o.SellSequence) {
		return true
	}

	return false
}

// SetSellSequence gets a reference to the given float32 and assigns it to the SellSequence field.
func (o *HotelRoomMaintenanceReasonType) SetSellSequence(v float32) {
	o.SellSequence = &v
}

func (o HotelRoomMaintenanceReasonType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HotelRoomMaintenanceReasonType) ToMap() (map[string]interface{}, error) {
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
	if !IsNil(o.Inactive) {
		toSerialize["inactive"] = o.Inactive
	}
	if !IsNil(o.SellSequence) {
		toSerialize["sellSequence"] = o.SellSequence
	}
	return toSerialize, nil
}

type NullableHotelRoomMaintenanceReasonType struct {
	value *HotelRoomMaintenanceReasonType
	isSet bool
}

func (v NullableHotelRoomMaintenanceReasonType) Get() *HotelRoomMaintenanceReasonType {
	return v.value
}

func (v *NullableHotelRoomMaintenanceReasonType) Set(val *HotelRoomMaintenanceReasonType) {
	v.value = val
	v.isSet = true
}

func (v NullableHotelRoomMaintenanceReasonType) IsSet() bool {
	return v.isSet
}

func (v *NullableHotelRoomMaintenanceReasonType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHotelRoomMaintenanceReasonType(val *HotelRoomMaintenanceReasonType) *NullableHotelRoomMaintenanceReasonType {
	return &NullableHotelRoomMaintenanceReasonType{value: val, isSet: true}
}

func (v NullableHotelRoomMaintenanceReasonType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHotelRoomMaintenanceReasonType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

