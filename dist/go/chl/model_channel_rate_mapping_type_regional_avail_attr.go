/*
OPERA Cloud Channel Configuration API

APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package chl

import (
	"encoding/json"
)

// checks if the ChannelRateMappingTypeRegionalAvailAttr type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ChannelRateMappingTypeRegionalAvailAttr{}

// ChannelRateMappingTypeRegionalAvailAttr Indicates if rate participates in Regional Availability.
type ChannelRateMappingTypeRegionalAvailAttr struct {
	AllowRegionalAvail *bool `json:"allowRegionalAvail,omitempty"`
	InclInRegionalAvail *bool `json:"inclInRegionalAvail,omitempty"`
}

// NewChannelRateMappingTypeRegionalAvailAttr instantiates a new ChannelRateMappingTypeRegionalAvailAttr object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChannelRateMappingTypeRegionalAvailAttr() *ChannelRateMappingTypeRegionalAvailAttr {
	this := ChannelRateMappingTypeRegionalAvailAttr{}
	return &this
}

// NewChannelRateMappingTypeRegionalAvailAttrWithDefaults instantiates a new ChannelRateMappingTypeRegionalAvailAttr object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChannelRateMappingTypeRegionalAvailAttrWithDefaults() *ChannelRateMappingTypeRegionalAvailAttr {
	this := ChannelRateMappingTypeRegionalAvailAttr{}
	return &this
}

// GetAllowRegionalAvail returns the AllowRegionalAvail field value if set, zero value otherwise.
func (o *ChannelRateMappingTypeRegionalAvailAttr) GetAllowRegionalAvail() bool {
	if o == nil || IsNil(o.AllowRegionalAvail) {
		var ret bool
		return ret
	}
	return *o.AllowRegionalAvail
}

// GetAllowRegionalAvailOk returns a tuple with the AllowRegionalAvail field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelRateMappingTypeRegionalAvailAttr) GetAllowRegionalAvailOk() (*bool, bool) {
	if o == nil || IsNil(o.AllowRegionalAvail) {
		return nil, false
	}
	return o.AllowRegionalAvail, true
}

// HasAllowRegionalAvail returns a boolean if a field has been set.
func (o *ChannelRateMappingTypeRegionalAvailAttr) HasAllowRegionalAvail() bool {
	if o != nil && !IsNil(o.AllowRegionalAvail) {
		return true
	}

	return false
}

// SetAllowRegionalAvail gets a reference to the given bool and assigns it to the AllowRegionalAvail field.
func (o *ChannelRateMappingTypeRegionalAvailAttr) SetAllowRegionalAvail(v bool) {
	o.AllowRegionalAvail = &v
}

// GetInclInRegionalAvail returns the InclInRegionalAvail field value if set, zero value otherwise.
func (o *ChannelRateMappingTypeRegionalAvailAttr) GetInclInRegionalAvail() bool {
	if o == nil || IsNil(o.InclInRegionalAvail) {
		var ret bool
		return ret
	}
	return *o.InclInRegionalAvail
}

// GetInclInRegionalAvailOk returns a tuple with the InclInRegionalAvail field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelRateMappingTypeRegionalAvailAttr) GetInclInRegionalAvailOk() (*bool, bool) {
	if o == nil || IsNil(o.InclInRegionalAvail) {
		return nil, false
	}
	return o.InclInRegionalAvail, true
}

// HasInclInRegionalAvail returns a boolean if a field has been set.
func (o *ChannelRateMappingTypeRegionalAvailAttr) HasInclInRegionalAvail() bool {
	if o != nil && !IsNil(o.InclInRegionalAvail) {
		return true
	}

	return false
}

// SetInclInRegionalAvail gets a reference to the given bool and assigns it to the InclInRegionalAvail field.
func (o *ChannelRateMappingTypeRegionalAvailAttr) SetInclInRegionalAvail(v bool) {
	o.InclInRegionalAvail = &v
}

func (o ChannelRateMappingTypeRegionalAvailAttr) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ChannelRateMappingTypeRegionalAvailAttr) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AllowRegionalAvail) {
		toSerialize["allowRegionalAvail"] = o.AllowRegionalAvail
	}
	if !IsNil(o.InclInRegionalAvail) {
		toSerialize["inclInRegionalAvail"] = o.InclInRegionalAvail
	}
	return toSerialize, nil
}

type NullableChannelRateMappingTypeRegionalAvailAttr struct {
	value *ChannelRateMappingTypeRegionalAvailAttr
	isSet bool
}

func (v NullableChannelRateMappingTypeRegionalAvailAttr) Get() *ChannelRateMappingTypeRegionalAvailAttr {
	return v.value
}

func (v *NullableChannelRateMappingTypeRegionalAvailAttr) Set(val *ChannelRateMappingTypeRegionalAvailAttr) {
	v.value = val
	v.isSet = true
}

func (v NullableChannelRateMappingTypeRegionalAvailAttr) IsSet() bool {
	return v.isSet
}

func (v *NullableChannelRateMappingTypeRegionalAvailAttr) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChannelRateMappingTypeRegionalAvailAttr(val *ChannelRateMappingTypeRegionalAvailAttr) *NullableChannelRateMappingTypeRegionalAvailAttr {
	return &NullableChannelRateMappingTypeRegionalAvailAttr{value: val, isSet: true}
}

func (v NullableChannelRateMappingTypeRegionalAvailAttr) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChannelRateMappingTypeRegionalAvailAttr) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


