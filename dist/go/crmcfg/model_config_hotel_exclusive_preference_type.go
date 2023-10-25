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

// checks if the ConfigHotelExclusivePreferenceType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ConfigHotelExclusivePreferenceType{}

// ConfigHotelExclusivePreferenceType Base details common between both template and property level Exclusive preference ids.
type ConfigHotelExclusivePreferenceType struct {
	// Specifies the Exclusive preference code.
	Code *string `json:"code,omitempty"`
	// Specifies the hotel code for which the Exclusive preference is specified.
	HotelId *string `json:"hotelId,omitempty"`
	// Display Order sequence.
	OrderSequence *float32 `json:"orderSequence,omitempty"`
	// Specifies the preference code and its description mapped to the exclusive preference.
	PreferenceCodes []CodeDescriptionType `json:"preferenceCodes,omitempty"`
	// Specifies the preference group the Exclusive preference belongs to.
	PreferenceGroup *string `json:"preferenceGroup,omitempty"`
}

// NewConfigHotelExclusivePreferenceType instantiates a new ConfigHotelExclusivePreferenceType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewConfigHotelExclusivePreferenceType() *ConfigHotelExclusivePreferenceType {
	this := ConfigHotelExclusivePreferenceType{}
	return &this
}

// NewConfigHotelExclusivePreferenceTypeWithDefaults instantiates a new ConfigHotelExclusivePreferenceType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewConfigHotelExclusivePreferenceTypeWithDefaults() *ConfigHotelExclusivePreferenceType {
	this := ConfigHotelExclusivePreferenceType{}
	return &this
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *ConfigHotelExclusivePreferenceType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigHotelExclusivePreferenceType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *ConfigHotelExclusivePreferenceType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *ConfigHotelExclusivePreferenceType) SetCode(v string) {
	o.Code = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *ConfigHotelExclusivePreferenceType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigHotelExclusivePreferenceType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *ConfigHotelExclusivePreferenceType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *ConfigHotelExclusivePreferenceType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetOrderSequence returns the OrderSequence field value if set, zero value otherwise.
func (o *ConfigHotelExclusivePreferenceType) GetOrderSequence() float32 {
	if o == nil || IsNil(o.OrderSequence) {
		var ret float32
		return ret
	}
	return *o.OrderSequence
}

// GetOrderSequenceOk returns a tuple with the OrderSequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigHotelExclusivePreferenceType) GetOrderSequenceOk() (*float32, bool) {
	if o == nil || IsNil(o.OrderSequence) {
		return nil, false
	}
	return o.OrderSequence, true
}

// HasOrderSequence returns a boolean if a field has been set.
func (o *ConfigHotelExclusivePreferenceType) HasOrderSequence() bool {
	if o != nil && !IsNil(o.OrderSequence) {
		return true
	}

	return false
}

// SetOrderSequence gets a reference to the given float32 and assigns it to the OrderSequence field.
func (o *ConfigHotelExclusivePreferenceType) SetOrderSequence(v float32) {
	o.OrderSequence = &v
}

// GetPreferenceCodes returns the PreferenceCodes field value if set, zero value otherwise.
func (o *ConfigHotelExclusivePreferenceType) GetPreferenceCodes() []CodeDescriptionType {
	if o == nil || IsNil(o.PreferenceCodes) {
		var ret []CodeDescriptionType
		return ret
	}
	return o.PreferenceCodes
}

// GetPreferenceCodesOk returns a tuple with the PreferenceCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigHotelExclusivePreferenceType) GetPreferenceCodesOk() ([]CodeDescriptionType, bool) {
	if o == nil || IsNil(o.PreferenceCodes) {
		return nil, false
	}
	return o.PreferenceCodes, true
}

// HasPreferenceCodes returns a boolean if a field has been set.
func (o *ConfigHotelExclusivePreferenceType) HasPreferenceCodes() bool {
	if o != nil && !IsNil(o.PreferenceCodes) {
		return true
	}

	return false
}

// SetPreferenceCodes gets a reference to the given []CodeDescriptionType and assigns it to the PreferenceCodes field.
func (o *ConfigHotelExclusivePreferenceType) SetPreferenceCodes(v []CodeDescriptionType) {
	o.PreferenceCodes = v
}

// GetPreferenceGroup returns the PreferenceGroup field value if set, zero value otherwise.
func (o *ConfigHotelExclusivePreferenceType) GetPreferenceGroup() string {
	if o == nil || IsNil(o.PreferenceGroup) {
		var ret string
		return ret
	}
	return *o.PreferenceGroup
}

// GetPreferenceGroupOk returns a tuple with the PreferenceGroup field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigHotelExclusivePreferenceType) GetPreferenceGroupOk() (*string, bool) {
	if o == nil || IsNil(o.PreferenceGroup) {
		return nil, false
	}
	return o.PreferenceGroup, true
}

// HasPreferenceGroup returns a boolean if a field has been set.
func (o *ConfigHotelExclusivePreferenceType) HasPreferenceGroup() bool {
	if o != nil && !IsNil(o.PreferenceGroup) {
		return true
	}

	return false
}

// SetPreferenceGroup gets a reference to the given string and assigns it to the PreferenceGroup field.
func (o *ConfigHotelExclusivePreferenceType) SetPreferenceGroup(v string) {
	o.PreferenceGroup = &v
}

func (o ConfigHotelExclusivePreferenceType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ConfigHotelExclusivePreferenceType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.OrderSequence) {
		toSerialize["orderSequence"] = o.OrderSequence
	}
	if !IsNil(o.PreferenceCodes) {
		toSerialize["preferenceCodes"] = o.PreferenceCodes
	}
	if !IsNil(o.PreferenceGroup) {
		toSerialize["preferenceGroup"] = o.PreferenceGroup
	}
	return toSerialize, nil
}

type NullableConfigHotelExclusivePreferenceType struct {
	value *ConfigHotelExclusivePreferenceType
	isSet bool
}

func (v NullableConfigHotelExclusivePreferenceType) Get() *ConfigHotelExclusivePreferenceType {
	return v.value
}

func (v *NullableConfigHotelExclusivePreferenceType) Set(val *ConfigHotelExclusivePreferenceType) {
	v.value = val
	v.isSet = true
}

func (v NullableConfigHotelExclusivePreferenceType) IsSet() bool {
	return v.isSet
}

func (v *NullableConfigHotelExclusivePreferenceType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableConfigHotelExclusivePreferenceType(val *ConfigHotelExclusivePreferenceType) *NullableConfigHotelExclusivePreferenceType {
	return &NullableConfigHotelExclusivePreferenceType{value: val, isSet: true}
}

func (v NullableConfigHotelExclusivePreferenceType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableConfigHotelExclusivePreferenceType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


