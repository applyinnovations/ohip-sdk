/*
OPERA Cloud Sales Event Management API

APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evm

import (
	"encoding/json"
)

// checks if the EventRevenuesInformationType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &EventRevenuesInformationType{}

// EventRevenuesInformationType Collection of revenue information about a catering event.
type EventRevenuesInformationType struct {
	// Currency code when base currency of the property is different than the catering currency.
	CurrencyCode *string `json:"currencyCode,omitempty"`
	// Flag that indicates if actual revenue can be manually edited.
	EventLevelRevenueActualization *bool `json:"eventLevelRevenueActualization,omitempty"`
	// Revenue information about a catering event.
	EventRevenueInformation []EventRevenueInformationType `json:"eventRevenueInformation,omitempty"`
	// Flag to indicate if the event revenue should be excluded from the forecast.
	ExcludeFromForecast *bool `json:"excludeFromForecast,omitempty"`
	// Flag to indicate whether to only use the forecasted values when reporting, regardless of whether resources are booked on an event.
	UseForecastRevenue *bool `json:"useForecastRevenue,omitempty"`
}

// NewEventRevenuesInformationType instantiates a new EventRevenuesInformationType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewEventRevenuesInformationType() *EventRevenuesInformationType {
	this := EventRevenuesInformationType{}
	return &this
}

// NewEventRevenuesInformationTypeWithDefaults instantiates a new EventRevenuesInformationType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewEventRevenuesInformationTypeWithDefaults() *EventRevenuesInformationType {
	this := EventRevenuesInformationType{}
	return &this
}

// GetCurrencyCode returns the CurrencyCode field value if set, zero value otherwise.
func (o *EventRevenuesInformationType) GetCurrencyCode() string {
	if o == nil || IsNil(o.CurrencyCode) {
		var ret string
		return ret
	}
	return *o.CurrencyCode
}

// GetCurrencyCodeOk returns a tuple with the CurrencyCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventRevenuesInformationType) GetCurrencyCodeOk() (*string, bool) {
	if o == nil || IsNil(o.CurrencyCode) {
		return nil, false
	}
	return o.CurrencyCode, true
}

// HasCurrencyCode returns a boolean if a field has been set.
func (o *EventRevenuesInformationType) HasCurrencyCode() bool {
	if o != nil && !IsNil(o.CurrencyCode) {
		return true
	}

	return false
}

// SetCurrencyCode gets a reference to the given string and assigns it to the CurrencyCode field.
func (o *EventRevenuesInformationType) SetCurrencyCode(v string) {
	o.CurrencyCode = &v
}

// GetEventLevelRevenueActualization returns the EventLevelRevenueActualization field value if set, zero value otherwise.
func (o *EventRevenuesInformationType) GetEventLevelRevenueActualization() bool {
	if o == nil || IsNil(o.EventLevelRevenueActualization) {
		var ret bool
		return ret
	}
	return *o.EventLevelRevenueActualization
}

// GetEventLevelRevenueActualizationOk returns a tuple with the EventLevelRevenueActualization field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventRevenuesInformationType) GetEventLevelRevenueActualizationOk() (*bool, bool) {
	if o == nil || IsNil(o.EventLevelRevenueActualization) {
		return nil, false
	}
	return o.EventLevelRevenueActualization, true
}

// HasEventLevelRevenueActualization returns a boolean if a field has been set.
func (o *EventRevenuesInformationType) HasEventLevelRevenueActualization() bool {
	if o != nil && !IsNil(o.EventLevelRevenueActualization) {
		return true
	}

	return false
}

// SetEventLevelRevenueActualization gets a reference to the given bool and assigns it to the EventLevelRevenueActualization field.
func (o *EventRevenuesInformationType) SetEventLevelRevenueActualization(v bool) {
	o.EventLevelRevenueActualization = &v
}

// GetEventRevenueInformation returns the EventRevenueInformation field value if set, zero value otherwise.
func (o *EventRevenuesInformationType) GetEventRevenueInformation() []EventRevenueInformationType {
	if o == nil || IsNil(o.EventRevenueInformation) {
		var ret []EventRevenueInformationType
		return ret
	}
	return o.EventRevenueInformation
}

// GetEventRevenueInformationOk returns a tuple with the EventRevenueInformation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventRevenuesInformationType) GetEventRevenueInformationOk() ([]EventRevenueInformationType, bool) {
	if o == nil || IsNil(o.EventRevenueInformation) {
		return nil, false
	}
	return o.EventRevenueInformation, true
}

// HasEventRevenueInformation returns a boolean if a field has been set.
func (o *EventRevenuesInformationType) HasEventRevenueInformation() bool {
	if o != nil && !IsNil(o.EventRevenueInformation) {
		return true
	}

	return false
}

// SetEventRevenueInformation gets a reference to the given []EventRevenueInformationType and assigns it to the EventRevenueInformation field.
func (o *EventRevenuesInformationType) SetEventRevenueInformation(v []EventRevenueInformationType) {
	o.EventRevenueInformation = v
}

// GetExcludeFromForecast returns the ExcludeFromForecast field value if set, zero value otherwise.
func (o *EventRevenuesInformationType) GetExcludeFromForecast() bool {
	if o == nil || IsNil(o.ExcludeFromForecast) {
		var ret bool
		return ret
	}
	return *o.ExcludeFromForecast
}

// GetExcludeFromForecastOk returns a tuple with the ExcludeFromForecast field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventRevenuesInformationType) GetExcludeFromForecastOk() (*bool, bool) {
	if o == nil || IsNil(o.ExcludeFromForecast) {
		return nil, false
	}
	return o.ExcludeFromForecast, true
}

// HasExcludeFromForecast returns a boolean if a field has been set.
func (o *EventRevenuesInformationType) HasExcludeFromForecast() bool {
	if o != nil && !IsNil(o.ExcludeFromForecast) {
		return true
	}

	return false
}

// SetExcludeFromForecast gets a reference to the given bool and assigns it to the ExcludeFromForecast field.
func (o *EventRevenuesInformationType) SetExcludeFromForecast(v bool) {
	o.ExcludeFromForecast = &v
}

// GetUseForecastRevenue returns the UseForecastRevenue field value if set, zero value otherwise.
func (o *EventRevenuesInformationType) GetUseForecastRevenue() bool {
	if o == nil || IsNil(o.UseForecastRevenue) {
		var ret bool
		return ret
	}
	return *o.UseForecastRevenue
}

// GetUseForecastRevenueOk returns a tuple with the UseForecastRevenue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventRevenuesInformationType) GetUseForecastRevenueOk() (*bool, bool) {
	if o == nil || IsNil(o.UseForecastRevenue) {
		return nil, false
	}
	return o.UseForecastRevenue, true
}

// HasUseForecastRevenue returns a boolean if a field has been set.
func (o *EventRevenuesInformationType) HasUseForecastRevenue() bool {
	if o != nil && !IsNil(o.UseForecastRevenue) {
		return true
	}

	return false
}

// SetUseForecastRevenue gets a reference to the given bool and assigns it to the UseForecastRevenue field.
func (o *EventRevenuesInformationType) SetUseForecastRevenue(v bool) {
	o.UseForecastRevenue = &v
}

func (o EventRevenuesInformationType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o EventRevenuesInformationType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CurrencyCode) {
		toSerialize["currencyCode"] = o.CurrencyCode
	}
	if !IsNil(o.EventLevelRevenueActualization) {
		toSerialize["eventLevelRevenueActualization"] = o.EventLevelRevenueActualization
	}
	if !IsNil(o.EventRevenueInformation) {
		toSerialize["eventRevenueInformation"] = o.EventRevenueInformation
	}
	if !IsNil(o.ExcludeFromForecast) {
		toSerialize["excludeFromForecast"] = o.ExcludeFromForecast
	}
	if !IsNil(o.UseForecastRevenue) {
		toSerialize["useForecastRevenue"] = o.UseForecastRevenue
	}
	return toSerialize, nil
}

type NullableEventRevenuesInformationType struct {
	value *EventRevenuesInformationType
	isSet bool
}

func (v NullableEventRevenuesInformationType) Get() *EventRevenuesInformationType {
	return v.value
}

func (v *NullableEventRevenuesInformationType) Set(val *EventRevenuesInformationType) {
	v.value = val
	v.isSet = true
}

func (v NullableEventRevenuesInformationType) IsSet() bool {
	return v.isSet
}

func (v *NullableEventRevenuesInformationType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableEventRevenuesInformationType(val *EventRevenuesInformationType) *NullableEventRevenuesInformationType {
	return &NullableEventRevenuesInformationType{value: val, isSet: true}
}

func (v NullableEventRevenuesInformationType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableEventRevenuesInformationType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

