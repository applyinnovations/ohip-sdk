/*
OPERA Cloud Enterprise Configuration API

APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package entcfg

import (
	"encoding/json"
)

// checks if the ApplicationSettingSimpleType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ApplicationSettingSimpleType{}

// ApplicationSettingSimpleType Internal settings that is mainly used to get a quick information on the type.
type ApplicationSettingSimpleType struct {
	// This element is used for additional items (Key-Value-Pair) that has relevance to the operation.
	Configurations []ApplicationSettingSimpleType `json:"configurations,omitempty"`
	LevelCode *string `json:"levelCode,omitempty"`
	LevelType *ApplicationSettingLevelType `json:"levelType,omitempty"`
	Name *string `json:"name,omitempty"`
	Value *string `json:"value,omitempty"`
}

// NewApplicationSettingSimpleType instantiates a new ApplicationSettingSimpleType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewApplicationSettingSimpleType() *ApplicationSettingSimpleType {
	this := ApplicationSettingSimpleType{}
	return &this
}

// NewApplicationSettingSimpleTypeWithDefaults instantiates a new ApplicationSettingSimpleType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewApplicationSettingSimpleTypeWithDefaults() *ApplicationSettingSimpleType {
	this := ApplicationSettingSimpleType{}
	return &this
}

// GetConfigurations returns the Configurations field value if set, zero value otherwise.
func (o *ApplicationSettingSimpleType) GetConfigurations() []ApplicationSettingSimpleType {
	if o == nil || IsNil(o.Configurations) {
		var ret []ApplicationSettingSimpleType
		return ret
	}
	return o.Configurations
}

// GetConfigurationsOk returns a tuple with the Configurations field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ApplicationSettingSimpleType) GetConfigurationsOk() ([]ApplicationSettingSimpleType, bool) {
	if o == nil || IsNil(o.Configurations) {
		return nil, false
	}
	return o.Configurations, true
}

// HasConfigurations returns a boolean if a field has been set.
func (o *ApplicationSettingSimpleType) HasConfigurations() bool {
	if o != nil && !IsNil(o.Configurations) {
		return true
	}

	return false
}

// SetConfigurations gets a reference to the given []ApplicationSettingSimpleType and assigns it to the Configurations field.
func (o *ApplicationSettingSimpleType) SetConfigurations(v []ApplicationSettingSimpleType) {
	o.Configurations = v
}

// GetLevelCode returns the LevelCode field value if set, zero value otherwise.
func (o *ApplicationSettingSimpleType) GetLevelCode() string {
	if o == nil || IsNil(o.LevelCode) {
		var ret string
		return ret
	}
	return *o.LevelCode
}

// GetLevelCodeOk returns a tuple with the LevelCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ApplicationSettingSimpleType) GetLevelCodeOk() (*string, bool) {
	if o == nil || IsNil(o.LevelCode) {
		return nil, false
	}
	return o.LevelCode, true
}

// HasLevelCode returns a boolean if a field has been set.
func (o *ApplicationSettingSimpleType) HasLevelCode() bool {
	if o != nil && !IsNil(o.LevelCode) {
		return true
	}

	return false
}

// SetLevelCode gets a reference to the given string and assigns it to the LevelCode field.
func (o *ApplicationSettingSimpleType) SetLevelCode(v string) {
	o.LevelCode = &v
}

// GetLevelType returns the LevelType field value if set, zero value otherwise.
func (o *ApplicationSettingSimpleType) GetLevelType() ApplicationSettingLevelType {
	if o == nil || IsNil(o.LevelType) {
		var ret ApplicationSettingLevelType
		return ret
	}
	return *o.LevelType
}

// GetLevelTypeOk returns a tuple with the LevelType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ApplicationSettingSimpleType) GetLevelTypeOk() (*ApplicationSettingLevelType, bool) {
	if o == nil || IsNil(o.LevelType) {
		return nil, false
	}
	return o.LevelType, true
}

// HasLevelType returns a boolean if a field has been set.
func (o *ApplicationSettingSimpleType) HasLevelType() bool {
	if o != nil && !IsNil(o.LevelType) {
		return true
	}

	return false
}

// SetLevelType gets a reference to the given ApplicationSettingLevelType and assigns it to the LevelType field.
func (o *ApplicationSettingSimpleType) SetLevelType(v ApplicationSettingLevelType) {
	o.LevelType = &v
}

// GetName returns the Name field value if set, zero value otherwise.
func (o *ApplicationSettingSimpleType) GetName() string {
	if o == nil || IsNil(o.Name) {
		var ret string
		return ret
	}
	return *o.Name
}

// GetNameOk returns a tuple with the Name field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ApplicationSettingSimpleType) GetNameOk() (*string, bool) {
	if o == nil || IsNil(o.Name) {
		return nil, false
	}
	return o.Name, true
}

// HasName returns a boolean if a field has been set.
func (o *ApplicationSettingSimpleType) HasName() bool {
	if o != nil && !IsNil(o.Name) {
		return true
	}

	return false
}

// SetName gets a reference to the given string and assigns it to the Name field.
func (o *ApplicationSettingSimpleType) SetName(v string) {
	o.Name = &v
}

// GetValue returns the Value field value if set, zero value otherwise.
func (o *ApplicationSettingSimpleType) GetValue() string {
	if o == nil || IsNil(o.Value) {
		var ret string
		return ret
	}
	return *o.Value
}

// GetValueOk returns a tuple with the Value field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ApplicationSettingSimpleType) GetValueOk() (*string, bool) {
	if o == nil || IsNil(o.Value) {
		return nil, false
	}
	return o.Value, true
}

// HasValue returns a boolean if a field has been set.
func (o *ApplicationSettingSimpleType) HasValue() bool {
	if o != nil && !IsNil(o.Value) {
		return true
	}

	return false
}

// SetValue gets a reference to the given string and assigns it to the Value field.
func (o *ApplicationSettingSimpleType) SetValue(v string) {
	o.Value = &v
}

func (o ApplicationSettingSimpleType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ApplicationSettingSimpleType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Configurations) {
		toSerialize["configurations"] = o.Configurations
	}
	if !IsNil(o.LevelCode) {
		toSerialize["levelCode"] = o.LevelCode
	}
	if !IsNil(o.LevelType) {
		toSerialize["levelType"] = o.LevelType
	}
	if !IsNil(o.Name) {
		toSerialize["name"] = o.Name
	}
	if !IsNil(o.Value) {
		toSerialize["value"] = o.Value
	}
	return toSerialize, nil
}

type NullableApplicationSettingSimpleType struct {
	value *ApplicationSettingSimpleType
	isSet bool
}

func (v NullableApplicationSettingSimpleType) Get() *ApplicationSettingSimpleType {
	return v.value
}

func (v *NullableApplicationSettingSimpleType) Set(val *ApplicationSettingSimpleType) {
	v.value = val
	v.isSet = true
}

func (v NullableApplicationSettingSimpleType) IsSet() bool {
	return v.isSet
}

func (v *NullableApplicationSettingSimpleType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableApplicationSettingSimpleType(val *ApplicationSettingSimpleType) *NullableApplicationSettingSimpleType {
	return &NullableApplicationSettingSimpleType{value: val, isSet: true}
}

func (v NullableApplicationSettingSimpleType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableApplicationSettingSimpleType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


