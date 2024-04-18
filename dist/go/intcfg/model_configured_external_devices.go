/*
OPERA Cloud Integration Configuration API

APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package intcfg

import (
	"encoding/json"
)

// checks if the ConfiguredExternalDevices type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ConfiguredExternalDevices{}

// ConfiguredExternalDevices Collection of hotels and the external devices that were configured for the hotel.
type ConfiguredExternalDevices struct {
	DeviceType *DeviceType `json:"deviceType,omitempty"`
	SupportedExternalDevices []HotelExternalDevicesType `json:"supportedExternalDevices,omitempty"`
}

// NewConfiguredExternalDevices instantiates a new ConfiguredExternalDevices object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewConfiguredExternalDevices() *ConfiguredExternalDevices {
	this := ConfiguredExternalDevices{}
	return &this
}

// NewConfiguredExternalDevicesWithDefaults instantiates a new ConfiguredExternalDevices object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewConfiguredExternalDevicesWithDefaults() *ConfiguredExternalDevices {
	this := ConfiguredExternalDevices{}
	return &this
}

// GetDeviceType returns the DeviceType field value if set, zero value otherwise.
func (o *ConfiguredExternalDevices) GetDeviceType() DeviceType {
	if o == nil || IsNil(o.DeviceType) {
		var ret DeviceType
		return ret
	}
	return *o.DeviceType
}

// GetDeviceTypeOk returns a tuple with the DeviceType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfiguredExternalDevices) GetDeviceTypeOk() (*DeviceType, bool) {
	if o == nil || IsNil(o.DeviceType) {
		return nil, false
	}
	return o.DeviceType, true
}

// HasDeviceType returns a boolean if a field has been set.
func (o *ConfiguredExternalDevices) HasDeviceType() bool {
	if o != nil && !IsNil(o.DeviceType) {
		return true
	}

	return false
}

// SetDeviceType gets a reference to the given DeviceType and assigns it to the DeviceType field.
func (o *ConfiguredExternalDevices) SetDeviceType(v DeviceType) {
	o.DeviceType = &v
}

// GetSupportedExternalDevices returns the SupportedExternalDevices field value if set, zero value otherwise.
func (o *ConfiguredExternalDevices) GetSupportedExternalDevices() []HotelExternalDevicesType {
	if o == nil || IsNil(o.SupportedExternalDevices) {
		var ret []HotelExternalDevicesType
		return ret
	}
	return o.SupportedExternalDevices
}

// GetSupportedExternalDevicesOk returns a tuple with the SupportedExternalDevices field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfiguredExternalDevices) GetSupportedExternalDevicesOk() ([]HotelExternalDevicesType, bool) {
	if o == nil || IsNil(o.SupportedExternalDevices) {
		return nil, false
	}
	return o.SupportedExternalDevices, true
}

// HasSupportedExternalDevices returns a boolean if a field has been set.
func (o *ConfiguredExternalDevices) HasSupportedExternalDevices() bool {
	if o != nil && !IsNil(o.SupportedExternalDevices) {
		return true
	}

	return false
}

// SetSupportedExternalDevices gets a reference to the given []HotelExternalDevicesType and assigns it to the SupportedExternalDevices field.
func (o *ConfiguredExternalDevices) SetSupportedExternalDevices(v []HotelExternalDevicesType) {
	o.SupportedExternalDevices = v
}

func (o ConfiguredExternalDevices) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ConfiguredExternalDevices) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.DeviceType) {
		toSerialize["deviceType"] = o.DeviceType
	}
	if !IsNil(o.SupportedExternalDevices) {
		toSerialize["supportedExternalDevices"] = o.SupportedExternalDevices
	}
	return toSerialize, nil
}

type NullableConfiguredExternalDevices struct {
	value *ConfiguredExternalDevices
	isSet bool
}

func (v NullableConfiguredExternalDevices) Get() *ConfiguredExternalDevices {
	return v.value
}

func (v *NullableConfiguredExternalDevices) Set(val *ConfiguredExternalDevices) {
	v.value = val
	v.isSet = true
}

func (v NullableConfiguredExternalDevices) IsSet() bool {
	return v.isSet
}

func (v *NullableConfiguredExternalDevices) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableConfiguredExternalDevices(val *ConfiguredExternalDevices) *NullableConfiguredExternalDevices {
	return &NullableConfiguredExternalDevices{value: val, isSet: true}
}

func (v NullableConfiguredExternalDevices) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableConfiguredExternalDevices) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

