/*
OPERA Cloud Channel Configuration API

APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package chl

import (
	"encoding/json"
)

// checks if the RegionalParityRateType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RegionalParityRateType{}

// RegionalParityRateType Rate on specific arrival date.
type RegionalParityRateType struct {
	// Arrival Date.
	ArrivalDate *string `json:"arrivalDate,omitempty"`
	CurrencyCode *string `json:"currencyCode,omitempty"`
	MaximumRate *float32 `json:"maximumRate,omitempty"`
	MinimumRate *float32 `json:"minimumRate,omitempty"`
	// Status Code related to functionality.
	StatusCode *string `json:"statusCode,omitempty"`
	// Description of Status Code.
	StatusDescription *string `json:"statusDescription,omitempty"`
	WeekendDay *bool `json:"weekendDay,omitempty"`
}

// NewRegionalParityRateType instantiates a new RegionalParityRateType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRegionalParityRateType() *RegionalParityRateType {
	this := RegionalParityRateType{}
	return &this
}

// NewRegionalParityRateTypeWithDefaults instantiates a new RegionalParityRateType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRegionalParityRateTypeWithDefaults() *RegionalParityRateType {
	this := RegionalParityRateType{}
	return &this
}

// GetArrivalDate returns the ArrivalDate field value if set, zero value otherwise.
func (o *RegionalParityRateType) GetArrivalDate() string {
	if o == nil || IsNil(o.ArrivalDate) {
		var ret string
		return ret
	}
	return *o.ArrivalDate
}

// GetArrivalDateOk returns a tuple with the ArrivalDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RegionalParityRateType) GetArrivalDateOk() (*string, bool) {
	if o == nil || IsNil(o.ArrivalDate) {
		return nil, false
	}
	return o.ArrivalDate, true
}

// HasArrivalDate returns a boolean if a field has been set.
func (o *RegionalParityRateType) HasArrivalDate() bool {
	if o != nil && !IsNil(o.ArrivalDate) {
		return true
	}

	return false
}

// SetArrivalDate gets a reference to the given string and assigns it to the ArrivalDate field.
func (o *RegionalParityRateType) SetArrivalDate(v string) {
	o.ArrivalDate = &v
}

// GetCurrencyCode returns the CurrencyCode field value if set, zero value otherwise.
func (o *RegionalParityRateType) GetCurrencyCode() string {
	if o == nil || IsNil(o.CurrencyCode) {
		var ret string
		return ret
	}
	return *o.CurrencyCode
}

// GetCurrencyCodeOk returns a tuple with the CurrencyCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RegionalParityRateType) GetCurrencyCodeOk() (*string, bool) {
	if o == nil || IsNil(o.CurrencyCode) {
		return nil, false
	}
	return o.CurrencyCode, true
}

// HasCurrencyCode returns a boolean if a field has been set.
func (o *RegionalParityRateType) HasCurrencyCode() bool {
	if o != nil && !IsNil(o.CurrencyCode) {
		return true
	}

	return false
}

// SetCurrencyCode gets a reference to the given string and assigns it to the CurrencyCode field.
func (o *RegionalParityRateType) SetCurrencyCode(v string) {
	o.CurrencyCode = &v
}

// GetMaximumRate returns the MaximumRate field value if set, zero value otherwise.
func (o *RegionalParityRateType) GetMaximumRate() float32 {
	if o == nil || IsNil(o.MaximumRate) {
		var ret float32
		return ret
	}
	return *o.MaximumRate
}

// GetMaximumRateOk returns a tuple with the MaximumRate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RegionalParityRateType) GetMaximumRateOk() (*float32, bool) {
	if o == nil || IsNil(o.MaximumRate) {
		return nil, false
	}
	return o.MaximumRate, true
}

// HasMaximumRate returns a boolean if a field has been set.
func (o *RegionalParityRateType) HasMaximumRate() bool {
	if o != nil && !IsNil(o.MaximumRate) {
		return true
	}

	return false
}

// SetMaximumRate gets a reference to the given float32 and assigns it to the MaximumRate field.
func (o *RegionalParityRateType) SetMaximumRate(v float32) {
	o.MaximumRate = &v
}

// GetMinimumRate returns the MinimumRate field value if set, zero value otherwise.
func (o *RegionalParityRateType) GetMinimumRate() float32 {
	if o == nil || IsNil(o.MinimumRate) {
		var ret float32
		return ret
	}
	return *o.MinimumRate
}

// GetMinimumRateOk returns a tuple with the MinimumRate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RegionalParityRateType) GetMinimumRateOk() (*float32, bool) {
	if o == nil || IsNil(o.MinimumRate) {
		return nil, false
	}
	return o.MinimumRate, true
}

// HasMinimumRate returns a boolean if a field has been set.
func (o *RegionalParityRateType) HasMinimumRate() bool {
	if o != nil && !IsNil(o.MinimumRate) {
		return true
	}

	return false
}

// SetMinimumRate gets a reference to the given float32 and assigns it to the MinimumRate field.
func (o *RegionalParityRateType) SetMinimumRate(v float32) {
	o.MinimumRate = &v
}

// GetStatusCode returns the StatusCode field value if set, zero value otherwise.
func (o *RegionalParityRateType) GetStatusCode() string {
	if o == nil || IsNil(o.StatusCode) {
		var ret string
		return ret
	}
	return *o.StatusCode
}

// GetStatusCodeOk returns a tuple with the StatusCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RegionalParityRateType) GetStatusCodeOk() (*string, bool) {
	if o == nil || IsNil(o.StatusCode) {
		return nil, false
	}
	return o.StatusCode, true
}

// HasStatusCode returns a boolean if a field has been set.
func (o *RegionalParityRateType) HasStatusCode() bool {
	if o != nil && !IsNil(o.StatusCode) {
		return true
	}

	return false
}

// SetStatusCode gets a reference to the given string and assigns it to the StatusCode field.
func (o *RegionalParityRateType) SetStatusCode(v string) {
	o.StatusCode = &v
}

// GetStatusDescription returns the StatusDescription field value if set, zero value otherwise.
func (o *RegionalParityRateType) GetStatusDescription() string {
	if o == nil || IsNil(o.StatusDescription) {
		var ret string
		return ret
	}
	return *o.StatusDescription
}

// GetStatusDescriptionOk returns a tuple with the StatusDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RegionalParityRateType) GetStatusDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.StatusDescription) {
		return nil, false
	}
	return o.StatusDescription, true
}

// HasStatusDescription returns a boolean if a field has been set.
func (o *RegionalParityRateType) HasStatusDescription() bool {
	if o != nil && !IsNil(o.StatusDescription) {
		return true
	}

	return false
}

// SetStatusDescription gets a reference to the given string and assigns it to the StatusDescription field.
func (o *RegionalParityRateType) SetStatusDescription(v string) {
	o.StatusDescription = &v
}

// GetWeekendDay returns the WeekendDay field value if set, zero value otherwise.
func (o *RegionalParityRateType) GetWeekendDay() bool {
	if o == nil || IsNil(o.WeekendDay) {
		var ret bool
		return ret
	}
	return *o.WeekendDay
}

// GetWeekendDayOk returns a tuple with the WeekendDay field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RegionalParityRateType) GetWeekendDayOk() (*bool, bool) {
	if o == nil || IsNil(o.WeekendDay) {
		return nil, false
	}
	return o.WeekendDay, true
}

// HasWeekendDay returns a boolean if a field has been set.
func (o *RegionalParityRateType) HasWeekendDay() bool {
	if o != nil && !IsNil(o.WeekendDay) {
		return true
	}

	return false
}

// SetWeekendDay gets a reference to the given bool and assigns it to the WeekendDay field.
func (o *RegionalParityRateType) SetWeekendDay(v bool) {
	o.WeekendDay = &v
}

func (o RegionalParityRateType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RegionalParityRateType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ArrivalDate) {
		toSerialize["arrivalDate"] = o.ArrivalDate
	}
	if !IsNil(o.CurrencyCode) {
		toSerialize["currencyCode"] = o.CurrencyCode
	}
	if !IsNil(o.MaximumRate) {
		toSerialize["maximumRate"] = o.MaximumRate
	}
	if !IsNil(o.MinimumRate) {
		toSerialize["minimumRate"] = o.MinimumRate
	}
	if !IsNil(o.StatusCode) {
		toSerialize["statusCode"] = o.StatusCode
	}
	if !IsNil(o.StatusDescription) {
		toSerialize["statusDescription"] = o.StatusDescription
	}
	if !IsNil(o.WeekendDay) {
		toSerialize["weekendDay"] = o.WeekendDay
	}
	return toSerialize, nil
}

type NullableRegionalParityRateType struct {
	value *RegionalParityRateType
	isSet bool
}

func (v NullableRegionalParityRateType) Get() *RegionalParityRateType {
	return v.value
}

func (v *NullableRegionalParityRateType) Set(val *RegionalParityRateType) {
	v.value = val
	v.isSet = true
}

func (v NullableRegionalParityRateType) IsSet() bool {
	return v.isSet
}

func (v *NullableRegionalParityRateType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRegionalParityRateType(val *RegionalParityRateType) *NullableRegionalParityRateType {
	return &NullableRegionalParityRateType{value: val, isSet: true}
}

func (v NullableRegionalParityRateType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRegionalParityRateType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

