/*
OPERA Cloud Price Availability Rate API

APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package par

import (
	"encoding/json"
)

// checks if the FetchRestrictionsByDateRangeRSType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &FetchRestrictionsByDateRangeRSType{}

// FetchRestrictionsByDateRangeRSType Response object for searching restrictions by date range.
type FetchRestrictionsByDateRangeRSType struct {
	RestrictionsByDateRange *RestrictionsByDateRangeType `json:"restrictionsByDateRange,omitempty"`
}

// NewFetchRestrictionsByDateRangeRSType instantiates a new FetchRestrictionsByDateRangeRSType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewFetchRestrictionsByDateRangeRSType() *FetchRestrictionsByDateRangeRSType {
	this := FetchRestrictionsByDateRangeRSType{}
	return &this
}

// NewFetchRestrictionsByDateRangeRSTypeWithDefaults instantiates a new FetchRestrictionsByDateRangeRSType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewFetchRestrictionsByDateRangeRSTypeWithDefaults() *FetchRestrictionsByDateRangeRSType {
	this := FetchRestrictionsByDateRangeRSType{}
	return &this
}

// GetRestrictionsByDateRange returns the RestrictionsByDateRange field value if set, zero value otherwise.
func (o *FetchRestrictionsByDateRangeRSType) GetRestrictionsByDateRange() RestrictionsByDateRangeType {
	if o == nil || IsNil(o.RestrictionsByDateRange) {
		var ret RestrictionsByDateRangeType
		return ret
	}
	return *o.RestrictionsByDateRange
}

// GetRestrictionsByDateRangeOk returns a tuple with the RestrictionsByDateRange field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FetchRestrictionsByDateRangeRSType) GetRestrictionsByDateRangeOk() (*RestrictionsByDateRangeType, bool) {
	if o == nil || IsNil(o.RestrictionsByDateRange) {
		return nil, false
	}
	return o.RestrictionsByDateRange, true
}

// HasRestrictionsByDateRange returns a boolean if a field has been set.
func (o *FetchRestrictionsByDateRangeRSType) HasRestrictionsByDateRange() bool {
	if o != nil && !IsNil(o.RestrictionsByDateRange) {
		return true
	}

	return false
}

// SetRestrictionsByDateRange gets a reference to the given RestrictionsByDateRangeType and assigns it to the RestrictionsByDateRange field.
func (o *FetchRestrictionsByDateRangeRSType) SetRestrictionsByDateRange(v RestrictionsByDateRangeType) {
	o.RestrictionsByDateRange = &v
}

func (o FetchRestrictionsByDateRangeRSType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o FetchRestrictionsByDateRangeRSType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.RestrictionsByDateRange) {
		toSerialize["restrictionsByDateRange"] = o.RestrictionsByDateRange
	}
	return toSerialize, nil
}

type NullableFetchRestrictionsByDateRangeRSType struct {
	value *FetchRestrictionsByDateRangeRSType
	isSet bool
}

func (v NullableFetchRestrictionsByDateRangeRSType) Get() *FetchRestrictionsByDateRangeRSType {
	return v.value
}

func (v *NullableFetchRestrictionsByDateRangeRSType) Set(val *FetchRestrictionsByDateRangeRSType) {
	v.value = val
	v.isSet = true
}

func (v NullableFetchRestrictionsByDateRangeRSType) IsSet() bool {
	return v.isSet
}

func (v *NullableFetchRestrictionsByDateRangeRSType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableFetchRestrictionsByDateRangeRSType(val *FetchRestrictionsByDateRangeRSType) *NullableFetchRestrictionsByDateRangeRSType {
	return &NullableFetchRestrictionsByDateRangeRSType{value: val, isSet: true}
}

func (v NullableFetchRestrictionsByDateRangeRSType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableFetchRestrictionsByDateRangeRSType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


