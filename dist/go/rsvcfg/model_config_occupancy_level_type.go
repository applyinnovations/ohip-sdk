/*
OPERA Cloud Reservation Master Data Management API

APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsvcfg

import (
	"encoding/json"
)

// checks if the ConfigOccupancyLevelType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ConfigOccupancyLevelType{}

// ConfigOccupancyLevelType This type holds the upsell amount by occupancy levels. This is used when upsell rule is being set bu occupancy levels
type ConfigOccupancyLevelType struct {
	// Used to specify the occupancy level id.
	Level *int32 `json:"level,omitempty"`
	// Used to specify the occupancy level description.
	LevelDescription *string `json:"levelDescription,omitempty"`
	// Used to specify the occupancy level upsell amount.
	LevelUpsellAmount *float32 `json:"levelUpsellAmount,omitempty"`
}

// NewConfigOccupancyLevelType instantiates a new ConfigOccupancyLevelType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewConfigOccupancyLevelType() *ConfigOccupancyLevelType {
	this := ConfigOccupancyLevelType{}
	return &this
}

// NewConfigOccupancyLevelTypeWithDefaults instantiates a new ConfigOccupancyLevelType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewConfigOccupancyLevelTypeWithDefaults() *ConfigOccupancyLevelType {
	this := ConfigOccupancyLevelType{}
	return &this
}

// GetLevel returns the Level field value if set, zero value otherwise.
func (o *ConfigOccupancyLevelType) GetLevel() int32 {
	if o == nil || IsNil(o.Level) {
		var ret int32
		return ret
	}
	return *o.Level
}

// GetLevelOk returns a tuple with the Level field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigOccupancyLevelType) GetLevelOk() (*int32, bool) {
	if o == nil || IsNil(o.Level) {
		return nil, false
	}
	return o.Level, true
}

// HasLevel returns a boolean if a field has been set.
func (o *ConfigOccupancyLevelType) HasLevel() bool {
	if o != nil && !IsNil(o.Level) {
		return true
	}

	return false
}

// SetLevel gets a reference to the given int32 and assigns it to the Level field.
func (o *ConfigOccupancyLevelType) SetLevel(v int32) {
	o.Level = &v
}

// GetLevelDescription returns the LevelDescription field value if set, zero value otherwise.
func (o *ConfigOccupancyLevelType) GetLevelDescription() string {
	if o == nil || IsNil(o.LevelDescription) {
		var ret string
		return ret
	}
	return *o.LevelDescription
}

// GetLevelDescriptionOk returns a tuple with the LevelDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigOccupancyLevelType) GetLevelDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.LevelDescription) {
		return nil, false
	}
	return o.LevelDescription, true
}

// HasLevelDescription returns a boolean if a field has been set.
func (o *ConfigOccupancyLevelType) HasLevelDescription() bool {
	if o != nil && !IsNil(o.LevelDescription) {
		return true
	}

	return false
}

// SetLevelDescription gets a reference to the given string and assigns it to the LevelDescription field.
func (o *ConfigOccupancyLevelType) SetLevelDescription(v string) {
	o.LevelDescription = &v
}

// GetLevelUpsellAmount returns the LevelUpsellAmount field value if set, zero value otherwise.
func (o *ConfigOccupancyLevelType) GetLevelUpsellAmount() float32 {
	if o == nil || IsNil(o.LevelUpsellAmount) {
		var ret float32
		return ret
	}
	return *o.LevelUpsellAmount
}

// GetLevelUpsellAmountOk returns a tuple with the LevelUpsellAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigOccupancyLevelType) GetLevelUpsellAmountOk() (*float32, bool) {
	if o == nil || IsNil(o.LevelUpsellAmount) {
		return nil, false
	}
	return o.LevelUpsellAmount, true
}

// HasLevelUpsellAmount returns a boolean if a field has been set.
func (o *ConfigOccupancyLevelType) HasLevelUpsellAmount() bool {
	if o != nil && !IsNil(o.LevelUpsellAmount) {
		return true
	}

	return false
}

// SetLevelUpsellAmount gets a reference to the given float32 and assigns it to the LevelUpsellAmount field.
func (o *ConfigOccupancyLevelType) SetLevelUpsellAmount(v float32) {
	o.LevelUpsellAmount = &v
}

func (o ConfigOccupancyLevelType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ConfigOccupancyLevelType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Level) {
		toSerialize["level"] = o.Level
	}
	if !IsNil(o.LevelDescription) {
		toSerialize["levelDescription"] = o.LevelDescription
	}
	if !IsNil(o.LevelUpsellAmount) {
		toSerialize["levelUpsellAmount"] = o.LevelUpsellAmount
	}
	return toSerialize, nil
}

type NullableConfigOccupancyLevelType struct {
	value *ConfigOccupancyLevelType
	isSet bool
}

func (v NullableConfigOccupancyLevelType) Get() *ConfigOccupancyLevelType {
	return v.value
}

func (v *NullableConfigOccupancyLevelType) Set(val *ConfigOccupancyLevelType) {
	v.value = val
	v.isSet = true
}

func (v NullableConfigOccupancyLevelType) IsSet() bool {
	return v.isSet
}

func (v *NullableConfigOccupancyLevelType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableConfigOccupancyLevelType(val *ConfigOccupancyLevelType) *NullableConfigOccupancyLevelType {
	return &NullableConfigOccupancyLevelType{value: val, isSet: true}
}

func (v NullableConfigOccupancyLevelType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableConfigOccupancyLevelType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

