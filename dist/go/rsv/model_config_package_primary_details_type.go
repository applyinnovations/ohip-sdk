/*
OPERA Cloud Reservation API

APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsv

import (
	"encoding/json"
)

// checks if the ConfigPackagePrimaryDetailsType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ConfigPackagePrimaryDetailsType{}

// ConfigPackagePrimaryDetailsType A Config Package Info type.
type ConfigPackagePrimaryDetailsType struct {
	// Arrangement Code.
	ArrangementCode *string `json:"arrangementCode,omitempty"`
	// Indicates the begin sell date of the package.
	BeginSellDate *string `json:"beginSellDate,omitempty"`
	// The description of the package.
	Description *string `json:"description,omitempty"`
	// Indicates the end sell date of the package.
	EndSellDate *string `json:"endSellDate,omitempty"`
	// The Forecast group package belongs to.
	ForecastGroup *string `json:"forecastGroup,omitempty"`
	// The short description of the package.
	ShortDescription *string `json:"shortDescription,omitempty"`
}

// NewConfigPackagePrimaryDetailsType instantiates a new ConfigPackagePrimaryDetailsType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewConfigPackagePrimaryDetailsType() *ConfigPackagePrimaryDetailsType {
	this := ConfigPackagePrimaryDetailsType{}
	return &this
}

// NewConfigPackagePrimaryDetailsTypeWithDefaults instantiates a new ConfigPackagePrimaryDetailsType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewConfigPackagePrimaryDetailsTypeWithDefaults() *ConfigPackagePrimaryDetailsType {
	this := ConfigPackagePrimaryDetailsType{}
	return &this
}

// GetArrangementCode returns the ArrangementCode field value if set, zero value otherwise.
func (o *ConfigPackagePrimaryDetailsType) GetArrangementCode() string {
	if o == nil || IsNil(o.ArrangementCode) {
		var ret string
		return ret
	}
	return *o.ArrangementCode
}

// GetArrangementCodeOk returns a tuple with the ArrangementCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigPackagePrimaryDetailsType) GetArrangementCodeOk() (*string, bool) {
	if o == nil || IsNil(o.ArrangementCode) {
		return nil, false
	}
	return o.ArrangementCode, true
}

// HasArrangementCode returns a boolean if a field has been set.
func (o *ConfigPackagePrimaryDetailsType) HasArrangementCode() bool {
	if o != nil && !IsNil(o.ArrangementCode) {
		return true
	}

	return false
}

// SetArrangementCode gets a reference to the given string and assigns it to the ArrangementCode field.
func (o *ConfigPackagePrimaryDetailsType) SetArrangementCode(v string) {
	o.ArrangementCode = &v
}

// GetBeginSellDate returns the BeginSellDate field value if set, zero value otherwise.
func (o *ConfigPackagePrimaryDetailsType) GetBeginSellDate() string {
	if o == nil || IsNil(o.BeginSellDate) {
		var ret string
		return ret
	}
	return *o.BeginSellDate
}

// GetBeginSellDateOk returns a tuple with the BeginSellDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigPackagePrimaryDetailsType) GetBeginSellDateOk() (*string, bool) {
	if o == nil || IsNil(o.BeginSellDate) {
		return nil, false
	}
	return o.BeginSellDate, true
}

// HasBeginSellDate returns a boolean if a field has been set.
func (o *ConfigPackagePrimaryDetailsType) HasBeginSellDate() bool {
	if o != nil && !IsNil(o.BeginSellDate) {
		return true
	}

	return false
}

// SetBeginSellDate gets a reference to the given string and assigns it to the BeginSellDate field.
func (o *ConfigPackagePrimaryDetailsType) SetBeginSellDate(v string) {
	o.BeginSellDate = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *ConfigPackagePrimaryDetailsType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigPackagePrimaryDetailsType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *ConfigPackagePrimaryDetailsType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *ConfigPackagePrimaryDetailsType) SetDescription(v string) {
	o.Description = &v
}

// GetEndSellDate returns the EndSellDate field value if set, zero value otherwise.
func (o *ConfigPackagePrimaryDetailsType) GetEndSellDate() string {
	if o == nil || IsNil(o.EndSellDate) {
		var ret string
		return ret
	}
	return *o.EndSellDate
}

// GetEndSellDateOk returns a tuple with the EndSellDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigPackagePrimaryDetailsType) GetEndSellDateOk() (*string, bool) {
	if o == nil || IsNil(o.EndSellDate) {
		return nil, false
	}
	return o.EndSellDate, true
}

// HasEndSellDate returns a boolean if a field has been set.
func (o *ConfigPackagePrimaryDetailsType) HasEndSellDate() bool {
	if o != nil && !IsNil(o.EndSellDate) {
		return true
	}

	return false
}

// SetEndSellDate gets a reference to the given string and assigns it to the EndSellDate field.
func (o *ConfigPackagePrimaryDetailsType) SetEndSellDate(v string) {
	o.EndSellDate = &v
}

// GetForecastGroup returns the ForecastGroup field value if set, zero value otherwise.
func (o *ConfigPackagePrimaryDetailsType) GetForecastGroup() string {
	if o == nil || IsNil(o.ForecastGroup) {
		var ret string
		return ret
	}
	return *o.ForecastGroup
}

// GetForecastGroupOk returns a tuple with the ForecastGroup field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigPackagePrimaryDetailsType) GetForecastGroupOk() (*string, bool) {
	if o == nil || IsNil(o.ForecastGroup) {
		return nil, false
	}
	return o.ForecastGroup, true
}

// HasForecastGroup returns a boolean if a field has been set.
func (o *ConfigPackagePrimaryDetailsType) HasForecastGroup() bool {
	if o != nil && !IsNil(o.ForecastGroup) {
		return true
	}

	return false
}

// SetForecastGroup gets a reference to the given string and assigns it to the ForecastGroup field.
func (o *ConfigPackagePrimaryDetailsType) SetForecastGroup(v string) {
	o.ForecastGroup = &v
}

// GetShortDescription returns the ShortDescription field value if set, zero value otherwise.
func (o *ConfigPackagePrimaryDetailsType) GetShortDescription() string {
	if o == nil || IsNil(o.ShortDescription) {
		var ret string
		return ret
	}
	return *o.ShortDescription
}

// GetShortDescriptionOk returns a tuple with the ShortDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigPackagePrimaryDetailsType) GetShortDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.ShortDescription) {
		return nil, false
	}
	return o.ShortDescription, true
}

// HasShortDescription returns a boolean if a field has been set.
func (o *ConfigPackagePrimaryDetailsType) HasShortDescription() bool {
	if o != nil && !IsNil(o.ShortDescription) {
		return true
	}

	return false
}

// SetShortDescription gets a reference to the given string and assigns it to the ShortDescription field.
func (o *ConfigPackagePrimaryDetailsType) SetShortDescription(v string) {
	o.ShortDescription = &v
}

func (o ConfigPackagePrimaryDetailsType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ConfigPackagePrimaryDetailsType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ArrangementCode) {
		toSerialize["arrangementCode"] = o.ArrangementCode
	}
	if !IsNil(o.BeginSellDate) {
		toSerialize["beginSellDate"] = o.BeginSellDate
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.EndSellDate) {
		toSerialize["endSellDate"] = o.EndSellDate
	}
	if !IsNil(o.ForecastGroup) {
		toSerialize["forecastGroup"] = o.ForecastGroup
	}
	if !IsNil(o.ShortDescription) {
		toSerialize["shortDescription"] = o.ShortDescription
	}
	return toSerialize, nil
}

type NullableConfigPackagePrimaryDetailsType struct {
	value *ConfigPackagePrimaryDetailsType
	isSet bool
}

func (v NullableConfigPackagePrimaryDetailsType) Get() *ConfigPackagePrimaryDetailsType {
	return v.value
}

func (v *NullableConfigPackagePrimaryDetailsType) Set(val *ConfigPackagePrimaryDetailsType) {
	v.value = val
	v.isSet = true
}

func (v NullableConfigPackagePrimaryDetailsType) IsSet() bool {
	return v.isSet
}

func (v *NullableConfigPackagePrimaryDetailsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableConfigPackagePrimaryDetailsType(val *ConfigPackagePrimaryDetailsType) *NullableConfigPackagePrimaryDetailsType {
	return &NullableConfigPackagePrimaryDetailsType{value: val, isSet: true}
}

func (v NullableConfigPackagePrimaryDetailsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableConfigPackagePrimaryDetailsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


