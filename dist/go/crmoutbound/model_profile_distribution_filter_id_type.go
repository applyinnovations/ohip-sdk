/*
OPERA Cloud Customer Relationship Management Outbound API

APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 20.99.99.99
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crmoutbound

import (
	"encoding/json"
)

// checks if the ProfileDistributionFilterIDType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ProfileDistributionFilterIDType{}

// ProfileDistributionFilterIDType Unique identifier of a Profile Distribution Filter.
type ProfileDistributionFilterIDType struct {
	// Unique ID of the Query.
	QueryId *float32 `json:"queryId,omitempty"`
}

// NewProfileDistributionFilterIDType instantiates a new ProfileDistributionFilterIDType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewProfileDistributionFilterIDType() *ProfileDistributionFilterIDType {
	this := ProfileDistributionFilterIDType{}
	return &this
}

// NewProfileDistributionFilterIDTypeWithDefaults instantiates a new ProfileDistributionFilterIDType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewProfileDistributionFilterIDTypeWithDefaults() *ProfileDistributionFilterIDType {
	this := ProfileDistributionFilterIDType{}
	return &this
}

// GetQueryId returns the QueryId field value if set, zero value otherwise.
func (o *ProfileDistributionFilterIDType) GetQueryId() float32 {
	if o == nil || IsNil(o.QueryId) {
		var ret float32
		return ret
	}
	return *o.QueryId
}

// GetQueryIdOk returns a tuple with the QueryId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileDistributionFilterIDType) GetQueryIdOk() (*float32, bool) {
	if o == nil || IsNil(o.QueryId) {
		return nil, false
	}
	return o.QueryId, true
}

// HasQueryId returns a boolean if a field has been set.
func (o *ProfileDistributionFilterIDType) HasQueryId() bool {
	if o != nil && !IsNil(o.QueryId) {
		return true
	}

	return false
}

// SetQueryId gets a reference to the given float32 and assigns it to the QueryId field.
func (o *ProfileDistributionFilterIDType) SetQueryId(v float32) {
	o.QueryId = &v
}

func (o ProfileDistributionFilterIDType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ProfileDistributionFilterIDType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.QueryId) {
		toSerialize["queryId"] = o.QueryId
	}
	return toSerialize, nil
}

type NullableProfileDistributionFilterIDType struct {
	value *ProfileDistributionFilterIDType
	isSet bool
}

func (v NullableProfileDistributionFilterIDType) Get() *ProfileDistributionFilterIDType {
	return v.value
}

func (v *NullableProfileDistributionFilterIDType) Set(val *ProfileDistributionFilterIDType) {
	v.value = val
	v.isSet = true
}

func (v NullableProfileDistributionFilterIDType) IsSet() bool {
	return v.isSet
}

func (v *NullableProfileDistributionFilterIDType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableProfileDistributionFilterIDType(val *ProfileDistributionFilterIDType) *NullableProfileDistributionFilterIDType {
	return &NullableProfileDistributionFilterIDType{value: val, isSet: true}
}

func (v NullableProfileDistributionFilterIDType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableProfileDistributionFilterIDType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


