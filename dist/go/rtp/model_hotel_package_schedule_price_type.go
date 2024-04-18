/*
OPERA Cloud Rate API

APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rtp

import (
	"encoding/json"
)

// checks if the HotelPackageSchedulePriceType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HotelPackageSchedulePriceType{}

// HotelPackageSchedulePriceType A Hotel Package Schedule Pricing.
type HotelPackageSchedulePriceType struct {
	Bucket *PackageChildBuckets `json:"bucket,omitempty"`
	// The allowance per unit of the package.
	UnitAllowance *float32 `json:"unitAllowance,omitempty"`
	// Number of points per unit of the package
	UnitPoints *float32 `json:"unitPoints,omitempty"`
	// The price per unit of the package.
	UnitPrice *float32 `json:"unitPrice,omitempty"`
}

// NewHotelPackageSchedulePriceType instantiates a new HotelPackageSchedulePriceType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHotelPackageSchedulePriceType() *HotelPackageSchedulePriceType {
	this := HotelPackageSchedulePriceType{}
	return &this
}

// NewHotelPackageSchedulePriceTypeWithDefaults instantiates a new HotelPackageSchedulePriceType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHotelPackageSchedulePriceTypeWithDefaults() *HotelPackageSchedulePriceType {
	this := HotelPackageSchedulePriceType{}
	return &this
}

// GetBucket returns the Bucket field value if set, zero value otherwise.
func (o *HotelPackageSchedulePriceType) GetBucket() PackageChildBuckets {
	if o == nil || IsNil(o.Bucket) {
		var ret PackageChildBuckets
		return ret
	}
	return *o.Bucket
}

// GetBucketOk returns a tuple with the Bucket field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelPackageSchedulePriceType) GetBucketOk() (*PackageChildBuckets, bool) {
	if o == nil || IsNil(o.Bucket) {
		return nil, false
	}
	return o.Bucket, true
}

// HasBucket returns a boolean if a field has been set.
func (o *HotelPackageSchedulePriceType) HasBucket() bool {
	if o != nil && !IsNil(o.Bucket) {
		return true
	}

	return false
}

// SetBucket gets a reference to the given PackageChildBuckets and assigns it to the Bucket field.
func (o *HotelPackageSchedulePriceType) SetBucket(v PackageChildBuckets) {
	o.Bucket = &v
}

// GetUnitAllowance returns the UnitAllowance field value if set, zero value otherwise.
func (o *HotelPackageSchedulePriceType) GetUnitAllowance() float32 {
	if o == nil || IsNil(o.UnitAllowance) {
		var ret float32
		return ret
	}
	return *o.UnitAllowance
}

// GetUnitAllowanceOk returns a tuple with the UnitAllowance field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelPackageSchedulePriceType) GetUnitAllowanceOk() (*float32, bool) {
	if o == nil || IsNil(o.UnitAllowance) {
		return nil, false
	}
	return o.UnitAllowance, true
}

// HasUnitAllowance returns a boolean if a field has been set.
func (o *HotelPackageSchedulePriceType) HasUnitAllowance() bool {
	if o != nil && !IsNil(o.UnitAllowance) {
		return true
	}

	return false
}

// SetUnitAllowance gets a reference to the given float32 and assigns it to the UnitAllowance field.
func (o *HotelPackageSchedulePriceType) SetUnitAllowance(v float32) {
	o.UnitAllowance = &v
}

// GetUnitPoints returns the UnitPoints field value if set, zero value otherwise.
func (o *HotelPackageSchedulePriceType) GetUnitPoints() float32 {
	if o == nil || IsNil(o.UnitPoints) {
		var ret float32
		return ret
	}
	return *o.UnitPoints
}

// GetUnitPointsOk returns a tuple with the UnitPoints field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelPackageSchedulePriceType) GetUnitPointsOk() (*float32, bool) {
	if o == nil || IsNil(o.UnitPoints) {
		return nil, false
	}
	return o.UnitPoints, true
}

// HasUnitPoints returns a boolean if a field has been set.
func (o *HotelPackageSchedulePriceType) HasUnitPoints() bool {
	if o != nil && !IsNil(o.UnitPoints) {
		return true
	}

	return false
}

// SetUnitPoints gets a reference to the given float32 and assigns it to the UnitPoints field.
func (o *HotelPackageSchedulePriceType) SetUnitPoints(v float32) {
	o.UnitPoints = &v
}

// GetUnitPrice returns the UnitPrice field value if set, zero value otherwise.
func (o *HotelPackageSchedulePriceType) GetUnitPrice() float32 {
	if o == nil || IsNil(o.UnitPrice) {
		var ret float32
		return ret
	}
	return *o.UnitPrice
}

// GetUnitPriceOk returns a tuple with the UnitPrice field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelPackageSchedulePriceType) GetUnitPriceOk() (*float32, bool) {
	if o == nil || IsNil(o.UnitPrice) {
		return nil, false
	}
	return o.UnitPrice, true
}

// HasUnitPrice returns a boolean if a field has been set.
func (o *HotelPackageSchedulePriceType) HasUnitPrice() bool {
	if o != nil && !IsNil(o.UnitPrice) {
		return true
	}

	return false
}

// SetUnitPrice gets a reference to the given float32 and assigns it to the UnitPrice field.
func (o *HotelPackageSchedulePriceType) SetUnitPrice(v float32) {
	o.UnitPrice = &v
}

func (o HotelPackageSchedulePriceType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HotelPackageSchedulePriceType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Bucket) {
		toSerialize["bucket"] = o.Bucket
	}
	if !IsNil(o.UnitAllowance) {
		toSerialize["unitAllowance"] = o.UnitAllowance
	}
	if !IsNil(o.UnitPoints) {
		toSerialize["unitPoints"] = o.UnitPoints
	}
	if !IsNil(o.UnitPrice) {
		toSerialize["unitPrice"] = o.UnitPrice
	}
	return toSerialize, nil
}

type NullableHotelPackageSchedulePriceType struct {
	value *HotelPackageSchedulePriceType
	isSet bool
}

func (v NullableHotelPackageSchedulePriceType) Get() *HotelPackageSchedulePriceType {
	return v.value
}

func (v *NullableHotelPackageSchedulePriceType) Set(val *HotelPackageSchedulePriceType) {
	v.value = val
	v.isSet = true
}

func (v NullableHotelPackageSchedulePriceType) IsSet() bool {
	return v.isSet
}

func (v *NullableHotelPackageSchedulePriceType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHotelPackageSchedulePriceType(val *HotelPackageSchedulePriceType) *NullableHotelPackageSchedulePriceType {
	return &NullableHotelPackageSchedulePriceType{value: val, isSet: true}
}

func (v NullableHotelPackageSchedulePriceType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHotelPackageSchedulePriceType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

