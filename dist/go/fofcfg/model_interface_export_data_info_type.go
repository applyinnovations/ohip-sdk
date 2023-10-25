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

// checks if the InterfaceExportDataInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &InterfaceExportDataInfoType{}

// InterfaceExportDataInfoType This type holds the export data of a hotel interface.
type InterfaceExportDataInfoType struct {
	// Collection of export data details of a hotel interface.
	InterfaceExportDataDetails []InterfaceExportDataDetailType `json:"interfaceExportDataDetails,omitempty"`
	// Collection of export data details of a hotel interface.
	InterfaceExportDataMandatoryDetails []InterfaceExportDataDetailType `json:"interfaceExportDataMandatoryDetails,omitempty"`
}

// NewInterfaceExportDataInfoType instantiates a new InterfaceExportDataInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewInterfaceExportDataInfoType() *InterfaceExportDataInfoType {
	this := InterfaceExportDataInfoType{}
	return &this
}

// NewInterfaceExportDataInfoTypeWithDefaults instantiates a new InterfaceExportDataInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewInterfaceExportDataInfoTypeWithDefaults() *InterfaceExportDataInfoType {
	this := InterfaceExportDataInfoType{}
	return &this
}

// GetInterfaceExportDataDetails returns the InterfaceExportDataDetails field value if set, zero value otherwise.
func (o *InterfaceExportDataInfoType) GetInterfaceExportDataDetails() []InterfaceExportDataDetailType {
	if o == nil || IsNil(o.InterfaceExportDataDetails) {
		var ret []InterfaceExportDataDetailType
		return ret
	}
	return o.InterfaceExportDataDetails
}

// GetInterfaceExportDataDetailsOk returns a tuple with the InterfaceExportDataDetails field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InterfaceExportDataInfoType) GetInterfaceExportDataDetailsOk() ([]InterfaceExportDataDetailType, bool) {
	if o == nil || IsNil(o.InterfaceExportDataDetails) {
		return nil, false
	}
	return o.InterfaceExportDataDetails, true
}

// HasInterfaceExportDataDetails returns a boolean if a field has been set.
func (o *InterfaceExportDataInfoType) HasInterfaceExportDataDetails() bool {
	if o != nil && !IsNil(o.InterfaceExportDataDetails) {
		return true
	}

	return false
}

// SetInterfaceExportDataDetails gets a reference to the given []InterfaceExportDataDetailType and assigns it to the InterfaceExportDataDetails field.
func (o *InterfaceExportDataInfoType) SetInterfaceExportDataDetails(v []InterfaceExportDataDetailType) {
	o.InterfaceExportDataDetails = v
}

// GetInterfaceExportDataMandatoryDetails returns the InterfaceExportDataMandatoryDetails field value if set, zero value otherwise.
func (o *InterfaceExportDataInfoType) GetInterfaceExportDataMandatoryDetails() []InterfaceExportDataDetailType {
	if o == nil || IsNil(o.InterfaceExportDataMandatoryDetails) {
		var ret []InterfaceExportDataDetailType
		return ret
	}
	return o.InterfaceExportDataMandatoryDetails
}

// GetInterfaceExportDataMandatoryDetailsOk returns a tuple with the InterfaceExportDataMandatoryDetails field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InterfaceExportDataInfoType) GetInterfaceExportDataMandatoryDetailsOk() ([]InterfaceExportDataDetailType, bool) {
	if o == nil || IsNil(o.InterfaceExportDataMandatoryDetails) {
		return nil, false
	}
	return o.InterfaceExportDataMandatoryDetails, true
}

// HasInterfaceExportDataMandatoryDetails returns a boolean if a field has been set.
func (o *InterfaceExportDataInfoType) HasInterfaceExportDataMandatoryDetails() bool {
	if o != nil && !IsNil(o.InterfaceExportDataMandatoryDetails) {
		return true
	}

	return false
}

// SetInterfaceExportDataMandatoryDetails gets a reference to the given []InterfaceExportDataDetailType and assigns it to the InterfaceExportDataMandatoryDetails field.
func (o *InterfaceExportDataInfoType) SetInterfaceExportDataMandatoryDetails(v []InterfaceExportDataDetailType) {
	o.InterfaceExportDataMandatoryDetails = v
}

func (o InterfaceExportDataInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o InterfaceExportDataInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.InterfaceExportDataDetails) {
		toSerialize["interfaceExportDataDetails"] = o.InterfaceExportDataDetails
	}
	if !IsNil(o.InterfaceExportDataMandatoryDetails) {
		toSerialize["interfaceExportDataMandatoryDetails"] = o.InterfaceExportDataMandatoryDetails
	}
	return toSerialize, nil
}

type NullableInterfaceExportDataInfoType struct {
	value *InterfaceExportDataInfoType
	isSet bool
}

func (v NullableInterfaceExportDataInfoType) Get() *InterfaceExportDataInfoType {
	return v.value
}

func (v *NullableInterfaceExportDataInfoType) Set(val *InterfaceExportDataInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableInterfaceExportDataInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableInterfaceExportDataInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableInterfaceExportDataInfoType(val *InterfaceExportDataInfoType) *NullableInterfaceExportDataInfoType {
	return &NullableInterfaceExportDataInfoType{value: val, isSet: true}
}

func (v NullableInterfaceExportDataInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableInterfaceExportDataInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


