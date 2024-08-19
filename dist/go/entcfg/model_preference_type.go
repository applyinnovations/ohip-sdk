/*
OPERA Cloud Enterprise Configuration API

APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package entcfg

import (
	"encoding/json"
)

// checks if the PreferenceType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PreferenceType{}

// PreferenceType Guest Preference details for the profile.
type PreferenceType struct {
	// Preference value for display purposes.
	PreferenceValue *string `json:"preferenceValue,omitempty"`
	// Preference Description for display purposes.
	Description *string `json:"description,omitempty"`
	// Whether this preference is property specific or not.
	Global *bool `json:"global,omitempty"`
	// Source of the preference.
	Source *string `json:"source,omitempty"`
	// If specified preference belongs to the Hotels listed, otherwise it is a global preference.
	Hotels []string `json:"hotels,omitempty"`
	PreferenceId *string `json:"preferenceId,omitempty"`
	// Specifies the count of preferences excluded for the attached reservation preference.
	ExcludedPreferencesCount *int32 `json:"excludedPreferencesCount,omitempty"`
}

// NewPreferenceType instantiates a new PreferenceType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPreferenceType() *PreferenceType {
	this := PreferenceType{}
	return &this
}

// NewPreferenceTypeWithDefaults instantiates a new PreferenceType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPreferenceTypeWithDefaults() *PreferenceType {
	this := PreferenceType{}
	return &this
}

// GetPreferenceValue returns the PreferenceValue field value if set, zero value otherwise.
func (o *PreferenceType) GetPreferenceValue() string {
	if o == nil || IsNil(o.PreferenceValue) {
		var ret string
		return ret
	}
	return *o.PreferenceValue
}

// GetPreferenceValueOk returns a tuple with the PreferenceValue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PreferenceType) GetPreferenceValueOk() (*string, bool) {
	if o == nil || IsNil(o.PreferenceValue) {
		return nil, false
	}
	return o.PreferenceValue, true
}

// HasPreferenceValue returns a boolean if a field has been set.
func (o *PreferenceType) HasPreferenceValue() bool {
	if o != nil && !IsNil(o.PreferenceValue) {
		return true
	}

	return false
}

// SetPreferenceValue gets a reference to the given string and assigns it to the PreferenceValue field.
func (o *PreferenceType) SetPreferenceValue(v string) {
	o.PreferenceValue = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *PreferenceType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PreferenceType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *PreferenceType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *PreferenceType) SetDescription(v string) {
	o.Description = &v
}

// GetGlobal returns the Global field value if set, zero value otherwise.
func (o *PreferenceType) GetGlobal() bool {
	if o == nil || IsNil(o.Global) {
		var ret bool
		return ret
	}
	return *o.Global
}

// GetGlobalOk returns a tuple with the Global field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PreferenceType) GetGlobalOk() (*bool, bool) {
	if o == nil || IsNil(o.Global) {
		return nil, false
	}
	return o.Global, true
}

// HasGlobal returns a boolean if a field has been set.
func (o *PreferenceType) HasGlobal() bool {
	if o != nil && !IsNil(o.Global) {
		return true
	}

	return false
}

// SetGlobal gets a reference to the given bool and assigns it to the Global field.
func (o *PreferenceType) SetGlobal(v bool) {
	o.Global = &v
}

// GetSource returns the Source field value if set, zero value otherwise.
func (o *PreferenceType) GetSource() string {
	if o == nil || IsNil(o.Source) {
		var ret string
		return ret
	}
	return *o.Source
}

// GetSourceOk returns a tuple with the Source field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PreferenceType) GetSourceOk() (*string, bool) {
	if o == nil || IsNil(o.Source) {
		return nil, false
	}
	return o.Source, true
}

// HasSource returns a boolean if a field has been set.
func (o *PreferenceType) HasSource() bool {
	if o != nil && !IsNil(o.Source) {
		return true
	}

	return false
}

// SetSource gets a reference to the given string and assigns it to the Source field.
func (o *PreferenceType) SetSource(v string) {
	o.Source = &v
}

// GetHotels returns the Hotels field value if set, zero value otherwise.
func (o *PreferenceType) GetHotels() []string {
	if o == nil || IsNil(o.Hotels) {
		var ret []string
		return ret
	}
	return o.Hotels
}

// GetHotelsOk returns a tuple with the Hotels field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PreferenceType) GetHotelsOk() ([]string, bool) {
	if o == nil || IsNil(o.Hotels) {
		return nil, false
	}
	return o.Hotels, true
}

// HasHotels returns a boolean if a field has been set.
func (o *PreferenceType) HasHotels() bool {
	if o != nil && !IsNil(o.Hotels) {
		return true
	}

	return false
}

// SetHotels gets a reference to the given []string and assigns it to the Hotels field.
func (o *PreferenceType) SetHotels(v []string) {
	o.Hotels = v
}

// GetPreferenceId returns the PreferenceId field value if set, zero value otherwise.
func (o *PreferenceType) GetPreferenceId() string {
	if o == nil || IsNil(o.PreferenceId) {
		var ret string
		return ret
	}
	return *o.PreferenceId
}

// GetPreferenceIdOk returns a tuple with the PreferenceId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PreferenceType) GetPreferenceIdOk() (*string, bool) {
	if o == nil || IsNil(o.PreferenceId) {
		return nil, false
	}
	return o.PreferenceId, true
}

// HasPreferenceId returns a boolean if a field has been set.
func (o *PreferenceType) HasPreferenceId() bool {
	if o != nil && !IsNil(o.PreferenceId) {
		return true
	}

	return false
}

// SetPreferenceId gets a reference to the given string and assigns it to the PreferenceId field.
func (o *PreferenceType) SetPreferenceId(v string) {
	o.PreferenceId = &v
}

// GetExcludedPreferencesCount returns the ExcludedPreferencesCount field value if set, zero value otherwise.
func (o *PreferenceType) GetExcludedPreferencesCount() int32 {
	if o == nil || IsNil(o.ExcludedPreferencesCount) {
		var ret int32
		return ret
	}
	return *o.ExcludedPreferencesCount
}

// GetExcludedPreferencesCountOk returns a tuple with the ExcludedPreferencesCount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PreferenceType) GetExcludedPreferencesCountOk() (*int32, bool) {
	if o == nil || IsNil(o.ExcludedPreferencesCount) {
		return nil, false
	}
	return o.ExcludedPreferencesCount, true
}

// HasExcludedPreferencesCount returns a boolean if a field has been set.
func (o *PreferenceType) HasExcludedPreferencesCount() bool {
	if o != nil && !IsNil(o.ExcludedPreferencesCount) {
		return true
	}

	return false
}

// SetExcludedPreferencesCount gets a reference to the given int32 and assigns it to the ExcludedPreferencesCount field.
func (o *PreferenceType) SetExcludedPreferencesCount(v int32) {
	o.ExcludedPreferencesCount = &v
}

func (o PreferenceType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PreferenceType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.PreferenceValue) {
		toSerialize["preferenceValue"] = o.PreferenceValue
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.Global) {
		toSerialize["global"] = o.Global
	}
	if !IsNil(o.Source) {
		toSerialize["source"] = o.Source
	}
	if !IsNil(o.Hotels) {
		toSerialize["hotels"] = o.Hotels
	}
	if !IsNil(o.PreferenceId) {
		toSerialize["preferenceId"] = o.PreferenceId
	}
	if !IsNil(o.ExcludedPreferencesCount) {
		toSerialize["excludedPreferencesCount"] = o.ExcludedPreferencesCount
	}
	return toSerialize, nil
}

type NullablePreferenceType struct {
	value *PreferenceType
	isSet bool
}

func (v NullablePreferenceType) Get() *PreferenceType {
	return v.value
}

func (v *NullablePreferenceType) Set(val *PreferenceType) {
	v.value = val
	v.isSet = true
}

func (v NullablePreferenceType) IsSet() bool {
	return v.isSet
}

func (v *NullablePreferenceType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePreferenceType(val *PreferenceType) *NullablePreferenceType {
	return &NullablePreferenceType{value: val, isSet: true}
}

func (v NullablePreferenceType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePreferenceType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


