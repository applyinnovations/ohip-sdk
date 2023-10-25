/*
OPERA Cloud Front Desk Operations Service

APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fof

import (
	"encoding/json"
)

// checks if the ConfigPackageUsageDetailType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ConfigPackageUsageDetailType{}

// ConfigPackageUsageDetailType A Config Package Usage Detail type.
type ConfigPackageUsageDetailType struct {
	Source *ProductSourceType `json:"source,omitempty"`
	// Indicates if any checked in reservations are using this product.
	UsedInHouseReservations *bool `json:"usedInHouseReservations,omitempty"`
	// Indicates if the package is used in any rate code.
	UsedInRates *bool `json:"usedInRates,omitempty"`
	// Indicates if the package is used in, reserved or prospect reservations.
	UsedInReservations *bool `json:"usedInReservations,omitempty"`
}

// NewConfigPackageUsageDetailType instantiates a new ConfigPackageUsageDetailType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewConfigPackageUsageDetailType() *ConfigPackageUsageDetailType {
	this := ConfigPackageUsageDetailType{}
	return &this
}

// NewConfigPackageUsageDetailTypeWithDefaults instantiates a new ConfigPackageUsageDetailType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewConfigPackageUsageDetailTypeWithDefaults() *ConfigPackageUsageDetailType {
	this := ConfigPackageUsageDetailType{}
	return &this
}

// GetSource returns the Source field value if set, zero value otherwise.
func (o *ConfigPackageUsageDetailType) GetSource() ProductSourceType {
	if o == nil || IsNil(o.Source) {
		var ret ProductSourceType
		return ret
	}
	return *o.Source
}

// GetSourceOk returns a tuple with the Source field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigPackageUsageDetailType) GetSourceOk() (*ProductSourceType, bool) {
	if o == nil || IsNil(o.Source) {
		return nil, false
	}
	return o.Source, true
}

// HasSource returns a boolean if a field has been set.
func (o *ConfigPackageUsageDetailType) HasSource() bool {
	if o != nil && !IsNil(o.Source) {
		return true
	}

	return false
}

// SetSource gets a reference to the given ProductSourceType and assigns it to the Source field.
func (o *ConfigPackageUsageDetailType) SetSource(v ProductSourceType) {
	o.Source = &v
}

// GetUsedInHouseReservations returns the UsedInHouseReservations field value if set, zero value otherwise.
func (o *ConfigPackageUsageDetailType) GetUsedInHouseReservations() bool {
	if o == nil || IsNil(o.UsedInHouseReservations) {
		var ret bool
		return ret
	}
	return *o.UsedInHouseReservations
}

// GetUsedInHouseReservationsOk returns a tuple with the UsedInHouseReservations field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigPackageUsageDetailType) GetUsedInHouseReservationsOk() (*bool, bool) {
	if o == nil || IsNil(o.UsedInHouseReservations) {
		return nil, false
	}
	return o.UsedInHouseReservations, true
}

// HasUsedInHouseReservations returns a boolean if a field has been set.
func (o *ConfigPackageUsageDetailType) HasUsedInHouseReservations() bool {
	if o != nil && !IsNil(o.UsedInHouseReservations) {
		return true
	}

	return false
}

// SetUsedInHouseReservations gets a reference to the given bool and assigns it to the UsedInHouseReservations field.
func (o *ConfigPackageUsageDetailType) SetUsedInHouseReservations(v bool) {
	o.UsedInHouseReservations = &v
}

// GetUsedInRates returns the UsedInRates field value if set, zero value otherwise.
func (o *ConfigPackageUsageDetailType) GetUsedInRates() bool {
	if o == nil || IsNil(o.UsedInRates) {
		var ret bool
		return ret
	}
	return *o.UsedInRates
}

// GetUsedInRatesOk returns a tuple with the UsedInRates field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigPackageUsageDetailType) GetUsedInRatesOk() (*bool, bool) {
	if o == nil || IsNil(o.UsedInRates) {
		return nil, false
	}
	return o.UsedInRates, true
}

// HasUsedInRates returns a boolean if a field has been set.
func (o *ConfigPackageUsageDetailType) HasUsedInRates() bool {
	if o != nil && !IsNil(o.UsedInRates) {
		return true
	}

	return false
}

// SetUsedInRates gets a reference to the given bool and assigns it to the UsedInRates field.
func (o *ConfigPackageUsageDetailType) SetUsedInRates(v bool) {
	o.UsedInRates = &v
}

// GetUsedInReservations returns the UsedInReservations field value if set, zero value otherwise.
func (o *ConfigPackageUsageDetailType) GetUsedInReservations() bool {
	if o == nil || IsNil(o.UsedInReservations) {
		var ret bool
		return ret
	}
	return *o.UsedInReservations
}

// GetUsedInReservationsOk returns a tuple with the UsedInReservations field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigPackageUsageDetailType) GetUsedInReservationsOk() (*bool, bool) {
	if o == nil || IsNil(o.UsedInReservations) {
		return nil, false
	}
	return o.UsedInReservations, true
}

// HasUsedInReservations returns a boolean if a field has been set.
func (o *ConfigPackageUsageDetailType) HasUsedInReservations() bool {
	if o != nil && !IsNil(o.UsedInReservations) {
		return true
	}

	return false
}

// SetUsedInReservations gets a reference to the given bool and assigns it to the UsedInReservations field.
func (o *ConfigPackageUsageDetailType) SetUsedInReservations(v bool) {
	o.UsedInReservations = &v
}

func (o ConfigPackageUsageDetailType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ConfigPackageUsageDetailType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Source) {
		toSerialize["source"] = o.Source
	}
	if !IsNil(o.UsedInHouseReservations) {
		toSerialize["usedInHouseReservations"] = o.UsedInHouseReservations
	}
	if !IsNil(o.UsedInRates) {
		toSerialize["usedInRates"] = o.UsedInRates
	}
	if !IsNil(o.UsedInReservations) {
		toSerialize["usedInReservations"] = o.UsedInReservations
	}
	return toSerialize, nil
}

type NullableConfigPackageUsageDetailType struct {
	value *ConfigPackageUsageDetailType
	isSet bool
}

func (v NullableConfigPackageUsageDetailType) Get() *ConfigPackageUsageDetailType {
	return v.value
}

func (v *NullableConfigPackageUsageDetailType) Set(val *ConfigPackageUsageDetailType) {
	v.value = val
	v.isSet = true
}

func (v NullableConfigPackageUsageDetailType) IsSet() bool {
	return v.isSet
}

func (v *NullableConfigPackageUsageDetailType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableConfigPackageUsageDetailType(val *ConfigPackageUsageDetailType) *NullableConfigPackageUsageDetailType {
	return &NullableConfigPackageUsageDetailType{value: val, isSet: true}
}

func (v NullableConfigPackageUsageDetailType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableConfigPackageUsageDetailType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


