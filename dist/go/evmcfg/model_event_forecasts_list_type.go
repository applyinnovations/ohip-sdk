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

// checks if the EventForecastsListType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &EventForecastsListType{}

// EventForecastsListType Collection of Event Forecast details that needs to be copied.
type EventForecastsListType struct {
	// Copy Booking Type as.
	CopyBookingTypeAs *string `json:"copyBookingTypeAs,omitempty"`
	CopyDateRangeAs *DateRangeType `json:"copyDateRangeAs,omitempty"`
	// Event Type will be copied From.
	CopyEventTypeAs *string `json:"copyEventTypeAs,omitempty"`
	// Copy Market code as.
	CopyMarketCodeAs *string `json:"copyMarketCodeAs,omitempty"`
	// Source Event Type from which code is to be copied from.
	SourceEventType *string `json:"sourceEventType,omitempty"`
	SourceForecastId *UniqueIDType `json:"sourceForecastId,omitempty"`
	// Property from which Code is to be copied.
	SourceHotelCode *string `json:"sourceHotelCode,omitempty"`
	// Property to which configuration code type to be copied to.
	TargetHotelCode *string `json:"targetHotelCode,omitempty"`
}

// NewEventForecastsListType instantiates a new EventForecastsListType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewEventForecastsListType() *EventForecastsListType {
	this := EventForecastsListType{}
	return &this
}

// NewEventForecastsListTypeWithDefaults instantiates a new EventForecastsListType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewEventForecastsListTypeWithDefaults() *EventForecastsListType {
	this := EventForecastsListType{}
	return &this
}

// GetCopyBookingTypeAs returns the CopyBookingTypeAs field value if set, zero value otherwise.
func (o *EventForecastsListType) GetCopyBookingTypeAs() string {
	if o == nil || IsNil(o.CopyBookingTypeAs) {
		var ret string
		return ret
	}
	return *o.CopyBookingTypeAs
}

// GetCopyBookingTypeAsOk returns a tuple with the CopyBookingTypeAs field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventForecastsListType) GetCopyBookingTypeAsOk() (*string, bool) {
	if o == nil || IsNil(o.CopyBookingTypeAs) {
		return nil, false
	}
	return o.CopyBookingTypeAs, true
}

// HasCopyBookingTypeAs returns a boolean if a field has been set.
func (o *EventForecastsListType) HasCopyBookingTypeAs() bool {
	if o != nil && !IsNil(o.CopyBookingTypeAs) {
		return true
	}

	return false
}

// SetCopyBookingTypeAs gets a reference to the given string and assigns it to the CopyBookingTypeAs field.
func (o *EventForecastsListType) SetCopyBookingTypeAs(v string) {
	o.CopyBookingTypeAs = &v
}

// GetCopyDateRangeAs returns the CopyDateRangeAs field value if set, zero value otherwise.
func (o *EventForecastsListType) GetCopyDateRangeAs() DateRangeType {
	if o == nil || IsNil(o.CopyDateRangeAs) {
		var ret DateRangeType
		return ret
	}
	return *o.CopyDateRangeAs
}

// GetCopyDateRangeAsOk returns a tuple with the CopyDateRangeAs field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventForecastsListType) GetCopyDateRangeAsOk() (*DateRangeType, bool) {
	if o == nil || IsNil(o.CopyDateRangeAs) {
		return nil, false
	}
	return o.CopyDateRangeAs, true
}

// HasCopyDateRangeAs returns a boolean if a field has been set.
func (o *EventForecastsListType) HasCopyDateRangeAs() bool {
	if o != nil && !IsNil(o.CopyDateRangeAs) {
		return true
	}

	return false
}

// SetCopyDateRangeAs gets a reference to the given DateRangeType and assigns it to the CopyDateRangeAs field.
func (o *EventForecastsListType) SetCopyDateRangeAs(v DateRangeType) {
	o.CopyDateRangeAs = &v
}

// GetCopyEventTypeAs returns the CopyEventTypeAs field value if set, zero value otherwise.
func (o *EventForecastsListType) GetCopyEventTypeAs() string {
	if o == nil || IsNil(o.CopyEventTypeAs) {
		var ret string
		return ret
	}
	return *o.CopyEventTypeAs
}

// GetCopyEventTypeAsOk returns a tuple with the CopyEventTypeAs field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventForecastsListType) GetCopyEventTypeAsOk() (*string, bool) {
	if o == nil || IsNil(o.CopyEventTypeAs) {
		return nil, false
	}
	return o.CopyEventTypeAs, true
}

// HasCopyEventTypeAs returns a boolean if a field has been set.
func (o *EventForecastsListType) HasCopyEventTypeAs() bool {
	if o != nil && !IsNil(o.CopyEventTypeAs) {
		return true
	}

	return false
}

// SetCopyEventTypeAs gets a reference to the given string and assigns it to the CopyEventTypeAs field.
func (o *EventForecastsListType) SetCopyEventTypeAs(v string) {
	o.CopyEventTypeAs = &v
}

// GetCopyMarketCodeAs returns the CopyMarketCodeAs field value if set, zero value otherwise.
func (o *EventForecastsListType) GetCopyMarketCodeAs() string {
	if o == nil || IsNil(o.CopyMarketCodeAs) {
		var ret string
		return ret
	}
	return *o.CopyMarketCodeAs
}

// GetCopyMarketCodeAsOk returns a tuple with the CopyMarketCodeAs field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventForecastsListType) GetCopyMarketCodeAsOk() (*string, bool) {
	if o == nil || IsNil(o.CopyMarketCodeAs) {
		return nil, false
	}
	return o.CopyMarketCodeAs, true
}

// HasCopyMarketCodeAs returns a boolean if a field has been set.
func (o *EventForecastsListType) HasCopyMarketCodeAs() bool {
	if o != nil && !IsNil(o.CopyMarketCodeAs) {
		return true
	}

	return false
}

// SetCopyMarketCodeAs gets a reference to the given string and assigns it to the CopyMarketCodeAs field.
func (o *EventForecastsListType) SetCopyMarketCodeAs(v string) {
	o.CopyMarketCodeAs = &v
}

// GetSourceEventType returns the SourceEventType field value if set, zero value otherwise.
func (o *EventForecastsListType) GetSourceEventType() string {
	if o == nil || IsNil(o.SourceEventType) {
		var ret string
		return ret
	}
	return *o.SourceEventType
}

// GetSourceEventTypeOk returns a tuple with the SourceEventType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventForecastsListType) GetSourceEventTypeOk() (*string, bool) {
	if o == nil || IsNil(o.SourceEventType) {
		return nil, false
	}
	return o.SourceEventType, true
}

// HasSourceEventType returns a boolean if a field has been set.
func (o *EventForecastsListType) HasSourceEventType() bool {
	if o != nil && !IsNil(o.SourceEventType) {
		return true
	}

	return false
}

// SetSourceEventType gets a reference to the given string and assigns it to the SourceEventType field.
func (o *EventForecastsListType) SetSourceEventType(v string) {
	o.SourceEventType = &v
}

// GetSourceForecastId returns the SourceForecastId field value if set, zero value otherwise.
func (o *EventForecastsListType) GetSourceForecastId() UniqueIDType {
	if o == nil || IsNil(o.SourceForecastId) {
		var ret UniqueIDType
		return ret
	}
	return *o.SourceForecastId
}

// GetSourceForecastIdOk returns a tuple with the SourceForecastId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventForecastsListType) GetSourceForecastIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.SourceForecastId) {
		return nil, false
	}
	return o.SourceForecastId, true
}

// HasSourceForecastId returns a boolean if a field has been set.
func (o *EventForecastsListType) HasSourceForecastId() bool {
	if o != nil && !IsNil(o.SourceForecastId) {
		return true
	}

	return false
}

// SetSourceForecastId gets a reference to the given UniqueIDType and assigns it to the SourceForecastId field.
func (o *EventForecastsListType) SetSourceForecastId(v UniqueIDType) {
	o.SourceForecastId = &v
}

// GetSourceHotelCode returns the SourceHotelCode field value if set, zero value otherwise.
func (o *EventForecastsListType) GetSourceHotelCode() string {
	if o == nil || IsNil(o.SourceHotelCode) {
		var ret string
		return ret
	}
	return *o.SourceHotelCode
}

// GetSourceHotelCodeOk returns a tuple with the SourceHotelCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventForecastsListType) GetSourceHotelCodeOk() (*string, bool) {
	if o == nil || IsNil(o.SourceHotelCode) {
		return nil, false
	}
	return o.SourceHotelCode, true
}

// HasSourceHotelCode returns a boolean if a field has been set.
func (o *EventForecastsListType) HasSourceHotelCode() bool {
	if o != nil && !IsNil(o.SourceHotelCode) {
		return true
	}

	return false
}

// SetSourceHotelCode gets a reference to the given string and assigns it to the SourceHotelCode field.
func (o *EventForecastsListType) SetSourceHotelCode(v string) {
	o.SourceHotelCode = &v
}

// GetTargetHotelCode returns the TargetHotelCode field value if set, zero value otherwise.
func (o *EventForecastsListType) GetTargetHotelCode() string {
	if o == nil || IsNil(o.TargetHotelCode) {
		var ret string
		return ret
	}
	return *o.TargetHotelCode
}

// GetTargetHotelCodeOk returns a tuple with the TargetHotelCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventForecastsListType) GetTargetHotelCodeOk() (*string, bool) {
	if o == nil || IsNil(o.TargetHotelCode) {
		return nil, false
	}
	return o.TargetHotelCode, true
}

// HasTargetHotelCode returns a boolean if a field has been set.
func (o *EventForecastsListType) HasTargetHotelCode() bool {
	if o != nil && !IsNil(o.TargetHotelCode) {
		return true
	}

	return false
}

// SetTargetHotelCode gets a reference to the given string and assigns it to the TargetHotelCode field.
func (o *EventForecastsListType) SetTargetHotelCode(v string) {
	o.TargetHotelCode = &v
}

func (o EventForecastsListType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o EventForecastsListType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CopyBookingTypeAs) {
		toSerialize["copyBookingTypeAs"] = o.CopyBookingTypeAs
	}
	if !IsNil(o.CopyDateRangeAs) {
		toSerialize["copyDateRangeAs"] = o.CopyDateRangeAs
	}
	if !IsNil(o.CopyEventTypeAs) {
		toSerialize["copyEventTypeAs"] = o.CopyEventTypeAs
	}
	if !IsNil(o.CopyMarketCodeAs) {
		toSerialize["copyMarketCodeAs"] = o.CopyMarketCodeAs
	}
	if !IsNil(o.SourceEventType) {
		toSerialize["sourceEventType"] = o.SourceEventType
	}
	if !IsNil(o.SourceForecastId) {
		toSerialize["sourceForecastId"] = o.SourceForecastId
	}
	if !IsNil(o.SourceHotelCode) {
		toSerialize["sourceHotelCode"] = o.SourceHotelCode
	}
	if !IsNil(o.TargetHotelCode) {
		toSerialize["targetHotelCode"] = o.TargetHotelCode
	}
	return toSerialize, nil
}

type NullableEventForecastsListType struct {
	value *EventForecastsListType
	isSet bool
}

func (v NullableEventForecastsListType) Get() *EventForecastsListType {
	return v.value
}

func (v *NullableEventForecastsListType) Set(val *EventForecastsListType) {
	v.value = val
	v.isSet = true
}

func (v NullableEventForecastsListType) IsSet() bool {
	return v.isSet
}

func (v *NullableEventForecastsListType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableEventForecastsListType(val *EventForecastsListType) *NullableEventForecastsListType {
	return &NullableEventForecastsListType{value: val, isSet: true}
}

func (v NullableEventForecastsListType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableEventForecastsListType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

