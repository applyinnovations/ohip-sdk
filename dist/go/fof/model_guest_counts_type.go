/*
OPERA Cloud Front Desk Operations Service

APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fof

import (
	"encoding/json"
)

// checks if the GuestCountsType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &GuestCountsType{}

// GuestCountsType A collection of GuestCount by age group.
type GuestCountsType struct {
	// Defines the number of Adults.
	Adults *int32 `json:"adults,omitempty"`
	// Age of a child in years.
	ChildAges []ChildAgeType `json:"childAges,omitempty"`
	ChildBuckets *ChildBucketsType `json:"childBuckets,omitempty"`
	// Defines the number of Children.
	Children *int32 `json:"children,omitempty"`
}

// NewGuestCountsType instantiates a new GuestCountsType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGuestCountsType() *GuestCountsType {
	this := GuestCountsType{}
	return &this
}

// NewGuestCountsTypeWithDefaults instantiates a new GuestCountsType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGuestCountsTypeWithDefaults() *GuestCountsType {
	this := GuestCountsType{}
	return &this
}

// GetAdults returns the Adults field value if set, zero value otherwise.
func (o *GuestCountsType) GetAdults() int32 {
	if o == nil || IsNil(o.Adults) {
		var ret int32
		return ret
	}
	return *o.Adults
}

// GetAdultsOk returns a tuple with the Adults field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuestCountsType) GetAdultsOk() (*int32, bool) {
	if o == nil || IsNil(o.Adults) {
		return nil, false
	}
	return o.Adults, true
}

// HasAdults returns a boolean if a field has been set.
func (o *GuestCountsType) HasAdults() bool {
	if o != nil && !IsNil(o.Adults) {
		return true
	}

	return false
}

// SetAdults gets a reference to the given int32 and assigns it to the Adults field.
func (o *GuestCountsType) SetAdults(v int32) {
	o.Adults = &v
}

// GetChildAges returns the ChildAges field value if set, zero value otherwise.
func (o *GuestCountsType) GetChildAges() []ChildAgeType {
	if o == nil || IsNil(o.ChildAges) {
		var ret []ChildAgeType
		return ret
	}
	return o.ChildAges
}

// GetChildAgesOk returns a tuple with the ChildAges field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuestCountsType) GetChildAgesOk() ([]ChildAgeType, bool) {
	if o == nil || IsNil(o.ChildAges) {
		return nil, false
	}
	return o.ChildAges, true
}

// HasChildAges returns a boolean if a field has been set.
func (o *GuestCountsType) HasChildAges() bool {
	if o != nil && !IsNil(o.ChildAges) {
		return true
	}

	return false
}

// SetChildAges gets a reference to the given []ChildAgeType and assigns it to the ChildAges field.
func (o *GuestCountsType) SetChildAges(v []ChildAgeType) {
	o.ChildAges = v
}

// GetChildBuckets returns the ChildBuckets field value if set, zero value otherwise.
func (o *GuestCountsType) GetChildBuckets() ChildBucketsType {
	if o == nil || IsNil(o.ChildBuckets) {
		var ret ChildBucketsType
		return ret
	}
	return *o.ChildBuckets
}

// GetChildBucketsOk returns a tuple with the ChildBuckets field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuestCountsType) GetChildBucketsOk() (*ChildBucketsType, bool) {
	if o == nil || IsNil(o.ChildBuckets) {
		return nil, false
	}
	return o.ChildBuckets, true
}

// HasChildBuckets returns a boolean if a field has been set.
func (o *GuestCountsType) HasChildBuckets() bool {
	if o != nil && !IsNil(o.ChildBuckets) {
		return true
	}

	return false
}

// SetChildBuckets gets a reference to the given ChildBucketsType and assigns it to the ChildBuckets field.
func (o *GuestCountsType) SetChildBuckets(v ChildBucketsType) {
	o.ChildBuckets = &v
}

// GetChildren returns the Children field value if set, zero value otherwise.
func (o *GuestCountsType) GetChildren() int32 {
	if o == nil || IsNil(o.Children) {
		var ret int32
		return ret
	}
	return *o.Children
}

// GetChildrenOk returns a tuple with the Children field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuestCountsType) GetChildrenOk() (*int32, bool) {
	if o == nil || IsNil(o.Children) {
		return nil, false
	}
	return o.Children, true
}

// HasChildren returns a boolean if a field has been set.
func (o *GuestCountsType) HasChildren() bool {
	if o != nil && !IsNil(o.Children) {
		return true
	}

	return false
}

// SetChildren gets a reference to the given int32 and assigns it to the Children field.
func (o *GuestCountsType) SetChildren(v int32) {
	o.Children = &v
}

func (o GuestCountsType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o GuestCountsType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Adults) {
		toSerialize["adults"] = o.Adults
	}
	if !IsNil(o.ChildAges) {
		toSerialize["childAges"] = o.ChildAges
	}
	if !IsNil(o.ChildBuckets) {
		toSerialize["childBuckets"] = o.ChildBuckets
	}
	if !IsNil(o.Children) {
		toSerialize["children"] = o.Children
	}
	return toSerialize, nil
}

type NullableGuestCountsType struct {
	value *GuestCountsType
	isSet bool
}

func (v NullableGuestCountsType) Get() *GuestCountsType {
	return v.value
}

func (v *NullableGuestCountsType) Set(val *GuestCountsType) {
	v.value = val
	v.isSet = true
}

func (v NullableGuestCountsType) IsSet() bool {
	return v.isSet
}

func (v *NullableGuestCountsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGuestCountsType(val *GuestCountsType) *NullableGuestCountsType {
	return &NullableGuestCountsType{value: val, isSet: true}
}

func (v NullableGuestCountsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGuestCountsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

