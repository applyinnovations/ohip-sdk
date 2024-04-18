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

// checks if the EventForecasts type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &EventForecasts{}

// EventForecasts struct for EventForecasts
type EventForecasts struct {
	// Collection of multiple Event Forecasts.
	EventForecasts []EventForecastType `json:"eventForecasts,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewEventForecasts instantiates a new EventForecasts object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewEventForecasts() *EventForecasts {
	this := EventForecasts{}
	return &this
}

// NewEventForecastsWithDefaults instantiates a new EventForecasts object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewEventForecastsWithDefaults() *EventForecasts {
	this := EventForecasts{}
	return &this
}

// GetEventForecasts returns the EventForecasts field value if set, zero value otherwise.
func (o *EventForecasts) GetEventForecasts() []EventForecastType {
	if o == nil || IsNil(o.EventForecasts) {
		var ret []EventForecastType
		return ret
	}
	return o.EventForecasts
}

// GetEventForecastsOk returns a tuple with the EventForecasts field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventForecasts) GetEventForecastsOk() ([]EventForecastType, bool) {
	if o == nil || IsNil(o.EventForecasts) {
		return nil, false
	}
	return o.EventForecasts, true
}

// HasEventForecasts returns a boolean if a field has been set.
func (o *EventForecasts) HasEventForecasts() bool {
	if o != nil && !IsNil(o.EventForecasts) {
		return true
	}

	return false
}

// SetEventForecasts gets a reference to the given []EventForecastType and assigns it to the EventForecasts field.
func (o *EventForecasts) SetEventForecasts(v []EventForecastType) {
	o.EventForecasts = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *EventForecasts) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventForecasts) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *EventForecasts) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *EventForecasts) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *EventForecasts) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventForecasts) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *EventForecasts) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *EventForecasts) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o EventForecasts) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o EventForecasts) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.EventForecasts) {
		toSerialize["eventForecasts"] = o.EventForecasts
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableEventForecasts struct {
	value *EventForecasts
	isSet bool
}

func (v NullableEventForecasts) Get() *EventForecasts {
	return v.value
}

func (v *NullableEventForecasts) Set(val *EventForecasts) {
	v.value = val
	v.isSet = true
}

func (v NullableEventForecasts) IsSet() bool {
	return v.isSet
}

func (v *NullableEventForecasts) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableEventForecasts(val *EventForecasts) *NullableEventForecasts {
	return &NullableEventForecasts{value: val, isSet: true}
}

func (v NullableEventForecasts) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableEventForecasts) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

