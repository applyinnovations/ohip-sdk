/*
OPERA Cloud Front Desk Configuration API

APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fofcfg

import (
	"encoding/json"
)

// checks if the InterfaceCommunicationInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &InterfaceCommunicationInfoType{}

// InterfaceCommunicationInfoType struct for InterfaceCommunicationInfoType
type InterfaceCommunicationInfoType struct {
	SerialPortConfig *SerialPortConfigType `json:"serialPortConfig,omitempty"`
	TCPConfig *TCPConfigType `json:"tCPConfig,omitempty"`
}

// NewInterfaceCommunicationInfoType instantiates a new InterfaceCommunicationInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewInterfaceCommunicationInfoType() *InterfaceCommunicationInfoType {
	this := InterfaceCommunicationInfoType{}
	return &this
}

// NewInterfaceCommunicationInfoTypeWithDefaults instantiates a new InterfaceCommunicationInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewInterfaceCommunicationInfoTypeWithDefaults() *InterfaceCommunicationInfoType {
	this := InterfaceCommunicationInfoType{}
	return &this
}

// GetSerialPortConfig returns the SerialPortConfig field value if set, zero value otherwise.
func (o *InterfaceCommunicationInfoType) GetSerialPortConfig() SerialPortConfigType {
	if o == nil || IsNil(o.SerialPortConfig) {
		var ret SerialPortConfigType
		return ret
	}
	return *o.SerialPortConfig
}

// GetSerialPortConfigOk returns a tuple with the SerialPortConfig field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InterfaceCommunicationInfoType) GetSerialPortConfigOk() (*SerialPortConfigType, bool) {
	if o == nil || IsNil(o.SerialPortConfig) {
		return nil, false
	}
	return o.SerialPortConfig, true
}

// HasSerialPortConfig returns a boolean if a field has been set.
func (o *InterfaceCommunicationInfoType) HasSerialPortConfig() bool {
	if o != nil && !IsNil(o.SerialPortConfig) {
		return true
	}

	return false
}

// SetSerialPortConfig gets a reference to the given SerialPortConfigType and assigns it to the SerialPortConfig field.
func (o *InterfaceCommunicationInfoType) SetSerialPortConfig(v SerialPortConfigType) {
	o.SerialPortConfig = &v
}

// GetTCPConfig returns the TCPConfig field value if set, zero value otherwise.
func (o *InterfaceCommunicationInfoType) GetTCPConfig() TCPConfigType {
	if o == nil || IsNil(o.TCPConfig) {
		var ret TCPConfigType
		return ret
	}
	return *o.TCPConfig
}

// GetTCPConfigOk returns a tuple with the TCPConfig field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InterfaceCommunicationInfoType) GetTCPConfigOk() (*TCPConfigType, bool) {
	if o == nil || IsNil(o.TCPConfig) {
		return nil, false
	}
	return o.TCPConfig, true
}

// HasTCPConfig returns a boolean if a field has been set.
func (o *InterfaceCommunicationInfoType) HasTCPConfig() bool {
	if o != nil && !IsNil(o.TCPConfig) {
		return true
	}

	return false
}

// SetTCPConfig gets a reference to the given TCPConfigType and assigns it to the TCPConfig field.
func (o *InterfaceCommunicationInfoType) SetTCPConfig(v TCPConfigType) {
	o.TCPConfig = &v
}

func (o InterfaceCommunicationInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o InterfaceCommunicationInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.SerialPortConfig) {
		toSerialize["serialPortConfig"] = o.SerialPortConfig
	}
	if !IsNil(o.TCPConfig) {
		toSerialize["tCPConfig"] = o.TCPConfig
	}
	return toSerialize, nil
}

type NullableInterfaceCommunicationInfoType struct {
	value *InterfaceCommunicationInfoType
	isSet bool
}

func (v NullableInterfaceCommunicationInfoType) Get() *InterfaceCommunicationInfoType {
	return v.value
}

func (v *NullableInterfaceCommunicationInfoType) Set(val *InterfaceCommunicationInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableInterfaceCommunicationInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableInterfaceCommunicationInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableInterfaceCommunicationInfoType(val *InterfaceCommunicationInfoType) *NullableInterfaceCommunicationInfoType {
	return &NullableInterfaceCommunicationInfoType{value: val, isSet: true}
}

func (v NullableInterfaceCommunicationInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableInterfaceCommunicationInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

