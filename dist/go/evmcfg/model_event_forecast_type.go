/*
OPERA Cloud Event Configuration API

This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evmcfg

import (
	"encoding/json"
)

// checks if the EventForecastType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &EventForecastType{}

// EventForecastType Type used for managing forecast for any event.
type EventForecastType struct {
	ForecastId *UniqueIDType `json:"forecastId,omitempty"`
	// Provides information about the event forecast.
	ForecastInfo []EventForecastInfoType `json:"forecastInfo,omitempty"`
	// Hotel Code to which the Event Forecast belongs to.
	HotelId *string `json:"hotelId,omitempty"`
	// Collection of Event Forecast Revenue Details.
	RevenueDetails []EventForecastRevDetailType `json:"revenueDetails,omitempty"`
}

// NewEventForecastType instantiates a new EventForecastType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewEventForecastType() *EventForecastType {
	this := EventForecastType{}
	return &this
}

// NewEventForecastTypeWithDefaults instantiates a new EventForecastType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewEventForecastTypeWithDefaults() *EventForecastType {
	this := EventForecastType{}
	return &this
}

// GetForecastId returns the ForecastId field value if set, zero value otherwise.
func (o *EventForecastType) GetForecastId() UniqueIDType {
	if o == nil || IsNil(o.ForecastId) {
		var ret UniqueIDType
		return ret
	}
	return *o.ForecastId
}

// GetForecastIdOk returns a tuple with the ForecastId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventForecastType) GetForecastIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.ForecastId) {
		return nil, false
	}
	return o.ForecastId, true
}

// HasForecastId returns a boolean if a field has been set.
func (o *EventForecastType) HasForecastId() bool {
	if o != nil && !IsNil(o.ForecastId) {
		return true
	}

	return false
}

// SetForecastId gets a reference to the given UniqueIDType and assigns it to the ForecastId field.
func (o *EventForecastType) SetForecastId(v UniqueIDType) {
	o.ForecastId = &v
}

// GetForecastInfo returns the ForecastInfo field value if set, zero value otherwise.
func (o *EventForecastType) GetForecastInfo() []EventForecastInfoType {
	if o == nil || IsNil(o.ForecastInfo) {
		var ret []EventForecastInfoType
		return ret
	}
	return o.ForecastInfo
}

// GetForecastInfoOk returns a tuple with the ForecastInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventForecastType) GetForecastInfoOk() ([]EventForecastInfoType, bool) {
	if o == nil || IsNil(o.ForecastInfo) {
		return nil, false
	}
	return o.ForecastInfo, true
}

// HasForecastInfo returns a boolean if a field has been set.
func (o *EventForecastType) HasForecastInfo() bool {
	if o != nil && !IsNil(o.ForecastInfo) {
		return true
	}

	return false
}

// SetForecastInfo gets a reference to the given []EventForecastInfoType and assigns it to the ForecastInfo field.
func (o *EventForecastType) SetForecastInfo(v []EventForecastInfoType) {
	o.ForecastInfo = v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *EventForecastType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventForecastType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *EventForecastType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *EventForecastType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetRevenueDetails returns the RevenueDetails field value if set, zero value otherwise.
func (o *EventForecastType) GetRevenueDetails() []EventForecastRevDetailType {
	if o == nil || IsNil(o.RevenueDetails) {
		var ret []EventForecastRevDetailType
		return ret
	}
	return o.RevenueDetails
}

// GetRevenueDetailsOk returns a tuple with the RevenueDetails field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventForecastType) GetRevenueDetailsOk() ([]EventForecastRevDetailType, bool) {
	if o == nil || IsNil(o.RevenueDetails) {
		return nil, false
	}
	return o.RevenueDetails, true
}

// HasRevenueDetails returns a boolean if a field has been set.
func (o *EventForecastType) HasRevenueDetails() bool {
	if o != nil && !IsNil(o.RevenueDetails) {
		return true
	}

	return false
}

// SetRevenueDetails gets a reference to the given []EventForecastRevDetailType and assigns it to the RevenueDetails field.
func (o *EventForecastType) SetRevenueDetails(v []EventForecastRevDetailType) {
	o.RevenueDetails = v
}

func (o EventForecastType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o EventForecastType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ForecastId) {
		toSerialize["forecastId"] = o.ForecastId
	}
	if !IsNil(o.ForecastInfo) {
		toSerialize["forecastInfo"] = o.ForecastInfo
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.RevenueDetails) {
		toSerialize["revenueDetails"] = o.RevenueDetails
	}
	return toSerialize, nil
}

type NullableEventForecastType struct {
	value *EventForecastType
	isSet bool
}

func (v NullableEventForecastType) Get() *EventForecastType {
	return v.value
}

func (v *NullableEventForecastType) Set(val *EventForecastType) {
	v.value = val
	v.isSet = true
}

func (v NullableEventForecastType) IsSet() bool {
	return v.isSet
}

func (v *NullableEventForecastType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableEventForecastType(val *EventForecastType) *NullableEventForecastType {
	return &NullableEventForecastType{value: val, isSet: true}
}

func (v NullableEventForecastType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableEventForecastType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

