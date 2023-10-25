/*
OPERA Cloud CRM Configuration API

APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crmcfg

import (
	"encoding/json"
)

// checks if the ConfigCopyExclusivePreferencesType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ConfigCopyExclusivePreferencesType{}

// ConfigCopyExclusivePreferencesType Copy instructions for copying template Exclusive preferences to hotel(s)
type ConfigCopyExclusivePreferencesType struct {
	HotelCodes []string `json:"hotelCodes,omitempty"`
	// Template Exclusive preference to be copied to the hotel(s).
	TemplateExclusivePreference []ConfigExclusivePrefCodeAndGroupType `json:"templateExclusivePreference,omitempty"`
}

// NewConfigCopyExclusivePreferencesType instantiates a new ConfigCopyExclusivePreferencesType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewConfigCopyExclusivePreferencesType() *ConfigCopyExclusivePreferencesType {
	this := ConfigCopyExclusivePreferencesType{}
	return &this
}

// NewConfigCopyExclusivePreferencesTypeWithDefaults instantiates a new ConfigCopyExclusivePreferencesType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewConfigCopyExclusivePreferencesTypeWithDefaults() *ConfigCopyExclusivePreferencesType {
	this := ConfigCopyExclusivePreferencesType{}
	return &this
}

// GetHotelCodes returns the HotelCodes field value if set, zero value otherwise.
func (o *ConfigCopyExclusivePreferencesType) GetHotelCodes() []string {
	if o == nil || IsNil(o.HotelCodes) {
		var ret []string
		return ret
	}
	return o.HotelCodes
}

// GetHotelCodesOk returns a tuple with the HotelCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigCopyExclusivePreferencesType) GetHotelCodesOk() ([]string, bool) {
	if o == nil || IsNil(o.HotelCodes) {
		return nil, false
	}
	return o.HotelCodes, true
}

// HasHotelCodes returns a boolean if a field has been set.
func (o *ConfigCopyExclusivePreferencesType) HasHotelCodes() bool {
	if o != nil && !IsNil(o.HotelCodes) {
		return true
	}

	return false
}

// SetHotelCodes gets a reference to the given []string and assigns it to the HotelCodes field.
func (o *ConfigCopyExclusivePreferencesType) SetHotelCodes(v []string) {
	o.HotelCodes = v
}

// GetTemplateExclusivePreference returns the TemplateExclusivePreference field value if set, zero value otherwise.
func (o *ConfigCopyExclusivePreferencesType) GetTemplateExclusivePreference() []ConfigExclusivePrefCodeAndGroupType {
	if o == nil || IsNil(o.TemplateExclusivePreference) {
		var ret []ConfigExclusivePrefCodeAndGroupType
		return ret
	}
	return o.TemplateExclusivePreference
}

// GetTemplateExclusivePreferenceOk returns a tuple with the TemplateExclusivePreference field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigCopyExclusivePreferencesType) GetTemplateExclusivePreferenceOk() ([]ConfigExclusivePrefCodeAndGroupType, bool) {
	if o == nil || IsNil(o.TemplateExclusivePreference) {
		return nil, false
	}
	return o.TemplateExclusivePreference, true
}

// HasTemplateExclusivePreference returns a boolean if a field has been set.
func (o *ConfigCopyExclusivePreferencesType) HasTemplateExclusivePreference() bool {
	if o != nil && !IsNil(o.TemplateExclusivePreference) {
		return true
	}

	return false
}

// SetTemplateExclusivePreference gets a reference to the given []ConfigExclusivePrefCodeAndGroupType and assigns it to the TemplateExclusivePreference field.
func (o *ConfigCopyExclusivePreferencesType) SetTemplateExclusivePreference(v []ConfigExclusivePrefCodeAndGroupType) {
	o.TemplateExclusivePreference = v
}

func (o ConfigCopyExclusivePreferencesType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ConfigCopyExclusivePreferencesType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HotelCodes) {
		toSerialize["hotelCodes"] = o.HotelCodes
	}
	if !IsNil(o.TemplateExclusivePreference) {
		toSerialize["templateExclusivePreference"] = o.TemplateExclusivePreference
	}
	return toSerialize, nil
}

type NullableConfigCopyExclusivePreferencesType struct {
	value *ConfigCopyExclusivePreferencesType
	isSet bool
}

func (v NullableConfigCopyExclusivePreferencesType) Get() *ConfigCopyExclusivePreferencesType {
	return v.value
}

func (v *NullableConfigCopyExclusivePreferencesType) Set(val *ConfigCopyExclusivePreferencesType) {
	v.value = val
	v.isSet = true
}

func (v NullableConfigCopyExclusivePreferencesType) IsSet() bool {
	return v.isSet
}

func (v *NullableConfigCopyExclusivePreferencesType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableConfigCopyExclusivePreferencesType(val *ConfigCopyExclusivePreferencesType) *NullableConfigCopyExclusivePreferencesType {
	return &NullableConfigCopyExclusivePreferencesType{value: val, isSet: true}
}

func (v NullableConfigCopyExclusivePreferencesType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableConfigCopyExclusivePreferencesType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


