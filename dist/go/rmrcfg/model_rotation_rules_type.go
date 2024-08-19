/*
OPERA Cloud Room Rotation Configuration Service API

APIs to cater for Room Rotation Configuration functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rmrcfg

import (
	"encoding/json"
)

// checks if the RotationRulesType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RotationRulesType{}

// RotationRulesType Collection of Room Rotation Setup Rules elements.
type RotationRulesType struct {
	// Hotel code for Room Rotation Setup Rules.
	HotelId *string `json:"hotelId,omitempty"`
	// Description of the Room Rotation Setup Rule.
	Rule []RotationRuleType `json:"rule,omitempty"`
	SetupType *RotationRuleSetupType `json:"setupType,omitempty"`
}

// NewRotationRulesType instantiates a new RotationRulesType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRotationRulesType() *RotationRulesType {
	this := RotationRulesType{}
	return &this
}

// NewRotationRulesTypeWithDefaults instantiates a new RotationRulesType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRotationRulesTypeWithDefaults() *RotationRulesType {
	this := RotationRulesType{}
	return &this
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *RotationRulesType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RotationRulesType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *RotationRulesType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *RotationRulesType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetRule returns the Rule field value if set, zero value otherwise.
func (o *RotationRulesType) GetRule() []RotationRuleType {
	if o == nil || IsNil(o.Rule) {
		var ret []RotationRuleType
		return ret
	}
	return o.Rule
}

// GetRuleOk returns a tuple with the Rule field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RotationRulesType) GetRuleOk() ([]RotationRuleType, bool) {
	if o == nil || IsNil(o.Rule) {
		return nil, false
	}
	return o.Rule, true
}

// HasRule returns a boolean if a field has been set.
func (o *RotationRulesType) HasRule() bool {
	if o != nil && !IsNil(o.Rule) {
		return true
	}

	return false
}

// SetRule gets a reference to the given []RotationRuleType and assigns it to the Rule field.
func (o *RotationRulesType) SetRule(v []RotationRuleType) {
	o.Rule = v
}

// GetSetupType returns the SetupType field value if set, zero value otherwise.
func (o *RotationRulesType) GetSetupType() RotationRuleSetupType {
	if o == nil || IsNil(o.SetupType) {
		var ret RotationRuleSetupType
		return ret
	}
	return *o.SetupType
}

// GetSetupTypeOk returns a tuple with the SetupType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RotationRulesType) GetSetupTypeOk() (*RotationRuleSetupType, bool) {
	if o == nil || IsNil(o.SetupType) {
		return nil, false
	}
	return o.SetupType, true
}

// HasSetupType returns a boolean if a field has been set.
func (o *RotationRulesType) HasSetupType() bool {
	if o != nil && !IsNil(o.SetupType) {
		return true
	}

	return false
}

// SetSetupType gets a reference to the given RotationRuleSetupType and assigns it to the SetupType field.
func (o *RotationRulesType) SetSetupType(v RotationRuleSetupType) {
	o.SetupType = &v
}

func (o RotationRulesType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RotationRulesType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.Rule) {
		toSerialize["rule"] = o.Rule
	}
	if !IsNil(o.SetupType) {
		toSerialize["setupType"] = o.SetupType
	}
	return toSerialize, nil
}

type NullableRotationRulesType struct {
	value *RotationRulesType
	isSet bool
}

func (v NullableRotationRulesType) Get() *RotationRulesType {
	return v.value
}

func (v *NullableRotationRulesType) Set(val *RotationRulesType) {
	v.value = val
	v.isSet = true
}

func (v NullableRotationRulesType) IsSet() bool {
	return v.isSet
}

func (v *NullableRotationRulesType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRotationRulesType(val *RotationRulesType) *NullableRotationRulesType {
	return &NullableRotationRulesType{value: val, isSet: true}
}

func (v NullableRotationRulesType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRotationRulesType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


