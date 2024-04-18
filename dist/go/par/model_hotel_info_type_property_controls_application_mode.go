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

// checks if the HotelInfoTypePropertyControlsApplicationMode type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HotelInfoTypePropertyControlsApplicationMode{}

// HotelInfoTypePropertyControlsApplicationMode Application Mode information configuration of the hotel.
type HotelInfoTypePropertyControlsApplicationMode struct {
	// The hotel's configuration mode if applicable.
	ConfigurationMode *string `json:"configurationMode,omitempty"`
	// The hotel's country code.
	CountryMode *string `json:"countryMode,omitempty"`
	// Hotel Code used for third party exports.
	ExpHotelCode *string `json:"expHotelCode,omitempty"`
	// Indicates if the hotel uses MBS (Marriott Business Services).
	MBSSupported *bool `json:"mBSSupported,omitempty"`
	// The Tourist Number of the hotel.
	TouristNumber *string `json:"touristNumber,omitempty"`
}

// NewHotelInfoTypePropertyControlsApplicationMode instantiates a new HotelInfoTypePropertyControlsApplicationMode object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHotelInfoTypePropertyControlsApplicationMode() *HotelInfoTypePropertyControlsApplicationMode {
	this := HotelInfoTypePropertyControlsApplicationMode{}
	return &this
}

// NewHotelInfoTypePropertyControlsApplicationModeWithDefaults instantiates a new HotelInfoTypePropertyControlsApplicationMode object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHotelInfoTypePropertyControlsApplicationModeWithDefaults() *HotelInfoTypePropertyControlsApplicationMode {
	this := HotelInfoTypePropertyControlsApplicationMode{}
	return &this
}

// GetConfigurationMode returns the ConfigurationMode field value if set, zero value otherwise.
func (o *HotelInfoTypePropertyControlsApplicationMode) GetConfigurationMode() string {
	if o == nil || IsNil(o.ConfigurationMode) {
		var ret string
		return ret
	}
	return *o.ConfigurationMode
}

// GetConfigurationModeOk returns a tuple with the ConfigurationMode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelInfoTypePropertyControlsApplicationMode) GetConfigurationModeOk() (*string, bool) {
	if o == nil || IsNil(o.ConfigurationMode) {
		return nil, false
	}
	return o.ConfigurationMode, true
}

// HasConfigurationMode returns a boolean if a field has been set.
func (o *HotelInfoTypePropertyControlsApplicationMode) HasConfigurationMode() bool {
	if o != nil && !IsNil(o.ConfigurationMode) {
		return true
	}

	return false
}

// SetConfigurationMode gets a reference to the given string and assigns it to the ConfigurationMode field.
func (o *HotelInfoTypePropertyControlsApplicationMode) SetConfigurationMode(v string) {
	o.ConfigurationMode = &v
}

// GetCountryMode returns the CountryMode field value if set, zero value otherwise.
func (o *HotelInfoTypePropertyControlsApplicationMode) GetCountryMode() string {
	if o == nil || IsNil(o.CountryMode) {
		var ret string
		return ret
	}
	return *o.CountryMode
}

// GetCountryModeOk returns a tuple with the CountryMode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelInfoTypePropertyControlsApplicationMode) GetCountryModeOk() (*string, bool) {
	if o == nil || IsNil(o.CountryMode) {
		return nil, false
	}
	return o.CountryMode, true
}

// HasCountryMode returns a boolean if a field has been set.
func (o *HotelInfoTypePropertyControlsApplicationMode) HasCountryMode() bool {
	if o != nil && !IsNil(o.CountryMode) {
		return true
	}

	return false
}

// SetCountryMode gets a reference to the given string and assigns it to the CountryMode field.
func (o *HotelInfoTypePropertyControlsApplicationMode) SetCountryMode(v string) {
	o.CountryMode = &v
}

// GetExpHotelCode returns the ExpHotelCode field value if set, zero value otherwise.
func (o *HotelInfoTypePropertyControlsApplicationMode) GetExpHotelCode() string {
	if o == nil || IsNil(o.ExpHotelCode) {
		var ret string
		return ret
	}
	return *o.ExpHotelCode
}

// GetExpHotelCodeOk returns a tuple with the ExpHotelCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelInfoTypePropertyControlsApplicationMode) GetExpHotelCodeOk() (*string, bool) {
	if o == nil || IsNil(o.ExpHotelCode) {
		return nil, false
	}
	return o.ExpHotelCode, true
}

// HasExpHotelCode returns a boolean if a field has been set.
func (o *HotelInfoTypePropertyControlsApplicationMode) HasExpHotelCode() bool {
	if o != nil && !IsNil(o.ExpHotelCode) {
		return true
	}

	return false
}

// SetExpHotelCode gets a reference to the given string and assigns it to the ExpHotelCode field.
func (o *HotelInfoTypePropertyControlsApplicationMode) SetExpHotelCode(v string) {
	o.ExpHotelCode = &v
}

// GetMBSSupported returns the MBSSupported field value if set, zero value otherwise.
func (o *HotelInfoTypePropertyControlsApplicationMode) GetMBSSupported() bool {
	if o == nil || IsNil(o.MBSSupported) {
		var ret bool
		return ret
	}
	return *o.MBSSupported
}

// GetMBSSupportedOk returns a tuple with the MBSSupported field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelInfoTypePropertyControlsApplicationMode) GetMBSSupportedOk() (*bool, bool) {
	if o == nil || IsNil(o.MBSSupported) {
		return nil, false
	}
	return o.MBSSupported, true
}

// HasMBSSupported returns a boolean if a field has been set.
func (o *HotelInfoTypePropertyControlsApplicationMode) HasMBSSupported() bool {
	if o != nil && !IsNil(o.MBSSupported) {
		return true
	}

	return false
}

// SetMBSSupported gets a reference to the given bool and assigns it to the MBSSupported field.
func (o *HotelInfoTypePropertyControlsApplicationMode) SetMBSSupported(v bool) {
	o.MBSSupported = &v
}

// GetTouristNumber returns the TouristNumber field value if set, zero value otherwise.
func (o *HotelInfoTypePropertyControlsApplicationMode) GetTouristNumber() string {
	if o == nil || IsNil(o.TouristNumber) {
		var ret string
		return ret
	}
	return *o.TouristNumber
}

// GetTouristNumberOk returns a tuple with the TouristNumber field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelInfoTypePropertyControlsApplicationMode) GetTouristNumberOk() (*string, bool) {
	if o == nil || IsNil(o.TouristNumber) {
		return nil, false
	}
	return o.TouristNumber, true
}

// HasTouristNumber returns a boolean if a field has been set.
func (o *HotelInfoTypePropertyControlsApplicationMode) HasTouristNumber() bool {
	if o != nil && !IsNil(o.TouristNumber) {
		return true
	}

	return false
}

// SetTouristNumber gets a reference to the given string and assigns it to the TouristNumber field.
func (o *HotelInfoTypePropertyControlsApplicationMode) SetTouristNumber(v string) {
	o.TouristNumber = &v
}

func (o HotelInfoTypePropertyControlsApplicationMode) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HotelInfoTypePropertyControlsApplicationMode) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ConfigurationMode) {
		toSerialize["configurationMode"] = o.ConfigurationMode
	}
	if !IsNil(o.CountryMode) {
		toSerialize["countryMode"] = o.CountryMode
	}
	if !IsNil(o.ExpHotelCode) {
		toSerialize["expHotelCode"] = o.ExpHotelCode
	}
	if !IsNil(o.MBSSupported) {
		toSerialize["mBSSupported"] = o.MBSSupported
	}
	if !IsNil(o.TouristNumber) {
		toSerialize["touristNumber"] = o.TouristNumber
	}
	return toSerialize, nil
}

type NullableHotelInfoTypePropertyControlsApplicationMode struct {
	value *HotelInfoTypePropertyControlsApplicationMode
	isSet bool
}

func (v NullableHotelInfoTypePropertyControlsApplicationMode) Get() *HotelInfoTypePropertyControlsApplicationMode {
	return v.value
}

func (v *NullableHotelInfoTypePropertyControlsApplicationMode) Set(val *HotelInfoTypePropertyControlsApplicationMode) {
	v.value = val
	v.isSet = true
}

func (v NullableHotelInfoTypePropertyControlsApplicationMode) IsSet() bool {
	return v.isSet
}

func (v *NullableHotelInfoTypePropertyControlsApplicationMode) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHotelInfoTypePropertyControlsApplicationMode(val *HotelInfoTypePropertyControlsApplicationMode) *NullableHotelInfoTypePropertyControlsApplicationMode {
	return &NullableHotelInfoTypePropertyControlsApplicationMode{value: val, isSet: true}
}

func (v NullableHotelInfoTypePropertyControlsApplicationMode) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHotelInfoTypePropertyControlsApplicationMode) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

