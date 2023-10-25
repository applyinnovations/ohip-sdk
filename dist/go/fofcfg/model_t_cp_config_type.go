/*
OPERA Cloud Front Desk Configuration API

APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fofcfg

import (
	"encoding/json"
)

// checks if the TCPConfigType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TCPConfigType{}

// TCPConfigType struct for TCPConfigType
type TCPConfigType struct {
	// IP address of the interface server
	IPAddress *string `json:"iPAddress,omitempty"`
	// Logical Port assignment
	PortNumber *string `json:"portNumber,omitempty"`
}

// NewTCPConfigType instantiates a new TCPConfigType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTCPConfigType() *TCPConfigType {
	this := TCPConfigType{}
	return &this
}

// NewTCPConfigTypeWithDefaults instantiates a new TCPConfigType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTCPConfigTypeWithDefaults() *TCPConfigType {
	this := TCPConfigType{}
	return &this
}

// GetIPAddress returns the IPAddress field value if set, zero value otherwise.
func (o *TCPConfigType) GetIPAddress() string {
	if o == nil || IsNil(o.IPAddress) {
		var ret string
		return ret
	}
	return *o.IPAddress
}

// GetIPAddressOk returns a tuple with the IPAddress field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TCPConfigType) GetIPAddressOk() (*string, bool) {
	if o == nil || IsNil(o.IPAddress) {
		return nil, false
	}
	return o.IPAddress, true
}

// HasIPAddress returns a boolean if a field has been set.
func (o *TCPConfigType) HasIPAddress() bool {
	if o != nil && !IsNil(o.IPAddress) {
		return true
	}

	return false
}

// SetIPAddress gets a reference to the given string and assigns it to the IPAddress field.
func (o *TCPConfigType) SetIPAddress(v string) {
	o.IPAddress = &v
}

// GetPortNumber returns the PortNumber field value if set, zero value otherwise.
func (o *TCPConfigType) GetPortNumber() string {
	if o == nil || IsNil(o.PortNumber) {
		var ret string
		return ret
	}
	return *o.PortNumber
}

// GetPortNumberOk returns a tuple with the PortNumber field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TCPConfigType) GetPortNumberOk() (*string, bool) {
	if o == nil || IsNil(o.PortNumber) {
		return nil, false
	}
	return o.PortNumber, true
}

// HasPortNumber returns a boolean if a field has been set.
func (o *TCPConfigType) HasPortNumber() bool {
	if o != nil && !IsNil(o.PortNumber) {
		return true
	}

	return false
}

// SetPortNumber gets a reference to the given string and assigns it to the PortNumber field.
func (o *TCPConfigType) SetPortNumber(v string) {
	o.PortNumber = &v
}

func (o TCPConfigType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TCPConfigType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.IPAddress) {
		toSerialize["iPAddress"] = o.IPAddress
	}
	if !IsNil(o.PortNumber) {
		toSerialize["portNumber"] = o.PortNumber
	}
	return toSerialize, nil
}

type NullableTCPConfigType struct {
	value *TCPConfigType
	isSet bool
}

func (v NullableTCPConfigType) Get() *TCPConfigType {
	return v.value
}

func (v *NullableTCPConfigType) Set(val *TCPConfigType) {
	v.value = val
	v.isSet = true
}

func (v NullableTCPConfigType) IsSet() bool {
	return v.isSet
}

func (v *NullableTCPConfigType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTCPConfigType(val *TCPConfigType) *NullableTCPConfigType {
	return &NullableTCPConfigType{value: val, isSet: true}
}

func (v NullableTCPConfigType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTCPConfigType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


