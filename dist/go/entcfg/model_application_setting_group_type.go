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

// checks if the ApplicationSettingGroupType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ApplicationSettingGroupType{}

// ApplicationSettingGroupType This element simply groups the different Application Functions.
type ApplicationSettingGroupType struct {
	AppSettings []ApplicationSettingType `json:"appSettings,omitempty"`
	GroupDisplayName *string `json:"groupDisplayName,omitempty"`
	GroupName *string `json:"groupName,omitempty"`
}

// NewApplicationSettingGroupType instantiates a new ApplicationSettingGroupType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewApplicationSettingGroupType() *ApplicationSettingGroupType {
	this := ApplicationSettingGroupType{}
	return &this
}

// NewApplicationSettingGroupTypeWithDefaults instantiates a new ApplicationSettingGroupType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewApplicationSettingGroupTypeWithDefaults() *ApplicationSettingGroupType {
	this := ApplicationSettingGroupType{}
	return &this
}

// GetAppSettings returns the AppSettings field value if set, zero value otherwise.
func (o *ApplicationSettingGroupType) GetAppSettings() []ApplicationSettingType {
	if o == nil || IsNil(o.AppSettings) {
		var ret []ApplicationSettingType
		return ret
	}
	return o.AppSettings
}

// GetAppSettingsOk returns a tuple with the AppSettings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ApplicationSettingGroupType) GetAppSettingsOk() ([]ApplicationSettingType, bool) {
	if o == nil || IsNil(o.AppSettings) {
		return nil, false
	}
	return o.AppSettings, true
}

// HasAppSettings returns a boolean if a field has been set.
func (o *ApplicationSettingGroupType) HasAppSettings() bool {
	if o != nil && !IsNil(o.AppSettings) {
		return true
	}

	return false
}

// SetAppSettings gets a reference to the given []ApplicationSettingType and assigns it to the AppSettings field.
func (o *ApplicationSettingGroupType) SetAppSettings(v []ApplicationSettingType) {
	o.AppSettings = v
}

// GetGroupDisplayName returns the GroupDisplayName field value if set, zero value otherwise.
func (o *ApplicationSettingGroupType) GetGroupDisplayName() string {
	if o == nil || IsNil(o.GroupDisplayName) {
		var ret string
		return ret
	}
	return *o.GroupDisplayName
}

// GetGroupDisplayNameOk returns a tuple with the GroupDisplayName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ApplicationSettingGroupType) GetGroupDisplayNameOk() (*string, bool) {
	if o == nil || IsNil(o.GroupDisplayName) {
		return nil, false
	}
	return o.GroupDisplayName, true
}

// HasGroupDisplayName returns a boolean if a field has been set.
func (o *ApplicationSettingGroupType) HasGroupDisplayName() bool {
	if o != nil && !IsNil(o.GroupDisplayName) {
		return true
	}

	return false
}

// SetGroupDisplayName gets a reference to the given string and assigns it to the GroupDisplayName field.
func (o *ApplicationSettingGroupType) SetGroupDisplayName(v string) {
	o.GroupDisplayName = &v
}

// GetGroupName returns the GroupName field value if set, zero value otherwise.
func (o *ApplicationSettingGroupType) GetGroupName() string {
	if o == nil || IsNil(o.GroupName) {
		var ret string
		return ret
	}
	return *o.GroupName
}

// GetGroupNameOk returns a tuple with the GroupName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ApplicationSettingGroupType) GetGroupNameOk() (*string, bool) {
	if o == nil || IsNil(o.GroupName) {
		return nil, false
	}
	return o.GroupName, true
}

// HasGroupName returns a boolean if a field has been set.
func (o *ApplicationSettingGroupType) HasGroupName() bool {
	if o != nil && !IsNil(o.GroupName) {
		return true
	}

	return false
}

// SetGroupName gets a reference to the given string and assigns it to the GroupName field.
func (o *ApplicationSettingGroupType) SetGroupName(v string) {
	o.GroupName = &v
}

func (o ApplicationSettingGroupType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ApplicationSettingGroupType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AppSettings) {
		toSerialize["appSettings"] = o.AppSettings
	}
	if !IsNil(o.GroupDisplayName) {
		toSerialize["groupDisplayName"] = o.GroupDisplayName
	}
	if !IsNil(o.GroupName) {
		toSerialize["groupName"] = o.GroupName
	}
	return toSerialize, nil
}

type NullableApplicationSettingGroupType struct {
	value *ApplicationSettingGroupType
	isSet bool
}

func (v NullableApplicationSettingGroupType) Get() *ApplicationSettingGroupType {
	return v.value
}

func (v *NullableApplicationSettingGroupType) Set(val *ApplicationSettingGroupType) {
	v.value = val
	v.isSet = true
}

func (v NullableApplicationSettingGroupType) IsSet() bool {
	return v.isSet
}

func (v *NullableApplicationSettingGroupType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableApplicationSettingGroupType(val *ApplicationSettingGroupType) *NullableApplicationSettingGroupType {
	return &NullableApplicationSettingGroupType{value: val, isSet: true}
}

func (v NullableApplicationSettingGroupType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableApplicationSettingGroupType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


