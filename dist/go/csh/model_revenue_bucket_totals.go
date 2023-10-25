/*
OPERA Cloud Cashiering API

APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package csh

import (
	"encoding/json"
)

// checks if the RevenueBucketTotals type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RevenueBucketTotals{}

// RevenueBucketTotals Response object for revenue bucket totals for a reservation.
type RevenueBucketTotals struct {
	Links []InstanceLink `json:"links,omitempty"`
	// List of revenue bucket total details
	RevenueBucketsInfo []RevenueBucketTotalType `json:"revenueBucketsInfo,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewRevenueBucketTotals instantiates a new RevenueBucketTotals object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRevenueBucketTotals() *RevenueBucketTotals {
	this := RevenueBucketTotals{}
	return &this
}

// NewRevenueBucketTotalsWithDefaults instantiates a new RevenueBucketTotals object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRevenueBucketTotalsWithDefaults() *RevenueBucketTotals {
	this := RevenueBucketTotals{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *RevenueBucketTotals) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RevenueBucketTotals) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *RevenueBucketTotals) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *RevenueBucketTotals) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetRevenueBucketsInfo returns the RevenueBucketsInfo field value if set, zero value otherwise.
func (o *RevenueBucketTotals) GetRevenueBucketsInfo() []RevenueBucketTotalType {
	if o == nil || IsNil(o.RevenueBucketsInfo) {
		var ret []RevenueBucketTotalType
		return ret
	}
	return o.RevenueBucketsInfo
}

// GetRevenueBucketsInfoOk returns a tuple with the RevenueBucketsInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RevenueBucketTotals) GetRevenueBucketsInfoOk() ([]RevenueBucketTotalType, bool) {
	if o == nil || IsNil(o.RevenueBucketsInfo) {
		return nil, false
	}
	return o.RevenueBucketsInfo, true
}

// HasRevenueBucketsInfo returns a boolean if a field has been set.
func (o *RevenueBucketTotals) HasRevenueBucketsInfo() bool {
	if o != nil && !IsNil(o.RevenueBucketsInfo) {
		return true
	}

	return false
}

// SetRevenueBucketsInfo gets a reference to the given []RevenueBucketTotalType and assigns it to the RevenueBucketsInfo field.
func (o *RevenueBucketTotals) SetRevenueBucketsInfo(v []RevenueBucketTotalType) {
	o.RevenueBucketsInfo = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *RevenueBucketTotals) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RevenueBucketTotals) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *RevenueBucketTotals) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *RevenueBucketTotals) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o RevenueBucketTotals) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RevenueBucketTotals) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.RevenueBucketsInfo) {
		toSerialize["revenueBucketsInfo"] = o.RevenueBucketsInfo
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableRevenueBucketTotals struct {
	value *RevenueBucketTotals
	isSet bool
}

func (v NullableRevenueBucketTotals) Get() *RevenueBucketTotals {
	return v.value
}

func (v *NullableRevenueBucketTotals) Set(val *RevenueBucketTotals) {
	v.value = val
	v.isSet = true
}

func (v NullableRevenueBucketTotals) IsSet() bool {
	return v.isSet
}

func (v *NullableRevenueBucketTotals) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRevenueBucketTotals(val *RevenueBucketTotals) *NullableRevenueBucketTotals {
	return &NullableRevenueBucketTotals{value: val, isSet: true}
}

func (v NullableRevenueBucketTotals) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRevenueBucketTotals) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


