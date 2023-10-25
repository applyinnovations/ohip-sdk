/*
OPERA Cloud Reservation API

APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsv

import (
	"encoding/json"
)

// checks if the ChildBucketsType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ChildBucketsType{}

// ChildBucketsType Defines children counts with Age Qualifying Group(Child Bucket) classification.
type ChildBucketsType struct {
	// Number of children classified under the first Age Qualifying Group(Child Bucket#1).
	Bucket1Count *int32 `json:"bucket1Count,omitempty"`
	// Number of children classified under the second Age Qualifying Group(Child Bucket#2).
	Bucket2Count *int32 `json:"bucket2Count,omitempty"`
	// Number of children classified under the third Age Qualifying Group(Child Bucket#3).
	Bucket3Count *int32 `json:"bucket3Count,omitempty"`
	// Number of children classified under the fourth Age Qualifying Group(Child Bucket#4).
	Bucket4Count *int32 `json:"bucket4Count,omitempty"`
	// Number of children classified under the fifth Age Qualifying Group(Child Bucket#5).
	Bucket5Count *int32 `json:"bucket5Count,omitempty"`
}

// NewChildBucketsType instantiates a new ChildBucketsType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChildBucketsType() *ChildBucketsType {
	this := ChildBucketsType{}
	return &this
}

// NewChildBucketsTypeWithDefaults instantiates a new ChildBucketsType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChildBucketsTypeWithDefaults() *ChildBucketsType {
	this := ChildBucketsType{}
	return &this
}

// GetBucket1Count returns the Bucket1Count field value if set, zero value otherwise.
func (o *ChildBucketsType) GetBucket1Count() int32 {
	if o == nil || IsNil(o.Bucket1Count) {
		var ret int32
		return ret
	}
	return *o.Bucket1Count
}

// GetBucket1CountOk returns a tuple with the Bucket1Count field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChildBucketsType) GetBucket1CountOk() (*int32, bool) {
	if o == nil || IsNil(o.Bucket1Count) {
		return nil, false
	}
	return o.Bucket1Count, true
}

// HasBucket1Count returns a boolean if a field has been set.
func (o *ChildBucketsType) HasBucket1Count() bool {
	if o != nil && !IsNil(o.Bucket1Count) {
		return true
	}

	return false
}

// SetBucket1Count gets a reference to the given int32 and assigns it to the Bucket1Count field.
func (o *ChildBucketsType) SetBucket1Count(v int32) {
	o.Bucket1Count = &v
}

// GetBucket2Count returns the Bucket2Count field value if set, zero value otherwise.
func (o *ChildBucketsType) GetBucket2Count() int32 {
	if o == nil || IsNil(o.Bucket2Count) {
		var ret int32
		return ret
	}
	return *o.Bucket2Count
}

// GetBucket2CountOk returns a tuple with the Bucket2Count field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChildBucketsType) GetBucket2CountOk() (*int32, bool) {
	if o == nil || IsNil(o.Bucket2Count) {
		return nil, false
	}
	return o.Bucket2Count, true
}

// HasBucket2Count returns a boolean if a field has been set.
func (o *ChildBucketsType) HasBucket2Count() bool {
	if o != nil && !IsNil(o.Bucket2Count) {
		return true
	}

	return false
}

// SetBucket2Count gets a reference to the given int32 and assigns it to the Bucket2Count field.
func (o *ChildBucketsType) SetBucket2Count(v int32) {
	o.Bucket2Count = &v
}

// GetBucket3Count returns the Bucket3Count field value if set, zero value otherwise.
func (o *ChildBucketsType) GetBucket3Count() int32 {
	if o == nil || IsNil(o.Bucket3Count) {
		var ret int32
		return ret
	}
	return *o.Bucket3Count
}

// GetBucket3CountOk returns a tuple with the Bucket3Count field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChildBucketsType) GetBucket3CountOk() (*int32, bool) {
	if o == nil || IsNil(o.Bucket3Count) {
		return nil, false
	}
	return o.Bucket3Count, true
}

// HasBucket3Count returns a boolean if a field has been set.
func (o *ChildBucketsType) HasBucket3Count() bool {
	if o != nil && !IsNil(o.Bucket3Count) {
		return true
	}

	return false
}

// SetBucket3Count gets a reference to the given int32 and assigns it to the Bucket3Count field.
func (o *ChildBucketsType) SetBucket3Count(v int32) {
	o.Bucket3Count = &v
}

// GetBucket4Count returns the Bucket4Count field value if set, zero value otherwise.
func (o *ChildBucketsType) GetBucket4Count() int32 {
	if o == nil || IsNil(o.Bucket4Count) {
		var ret int32
		return ret
	}
	return *o.Bucket4Count
}

// GetBucket4CountOk returns a tuple with the Bucket4Count field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChildBucketsType) GetBucket4CountOk() (*int32, bool) {
	if o == nil || IsNil(o.Bucket4Count) {
		return nil, false
	}
	return o.Bucket4Count, true
}

// HasBucket4Count returns a boolean if a field has been set.
func (o *ChildBucketsType) HasBucket4Count() bool {
	if o != nil && !IsNil(o.Bucket4Count) {
		return true
	}

	return false
}

// SetBucket4Count gets a reference to the given int32 and assigns it to the Bucket4Count field.
func (o *ChildBucketsType) SetBucket4Count(v int32) {
	o.Bucket4Count = &v
}

// GetBucket5Count returns the Bucket5Count field value if set, zero value otherwise.
func (o *ChildBucketsType) GetBucket5Count() int32 {
	if o == nil || IsNil(o.Bucket5Count) {
		var ret int32
		return ret
	}
	return *o.Bucket5Count
}

// GetBucket5CountOk returns a tuple with the Bucket5Count field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChildBucketsType) GetBucket5CountOk() (*int32, bool) {
	if o == nil || IsNil(o.Bucket5Count) {
		return nil, false
	}
	return o.Bucket5Count, true
}

// HasBucket5Count returns a boolean if a field has been set.
func (o *ChildBucketsType) HasBucket5Count() bool {
	if o != nil && !IsNil(o.Bucket5Count) {
		return true
	}

	return false
}

// SetBucket5Count gets a reference to the given int32 and assigns it to the Bucket5Count field.
func (o *ChildBucketsType) SetBucket5Count(v int32) {
	o.Bucket5Count = &v
}

func (o ChildBucketsType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ChildBucketsType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Bucket1Count) {
		toSerialize["bucket1Count"] = o.Bucket1Count
	}
	if !IsNil(o.Bucket2Count) {
		toSerialize["bucket2Count"] = o.Bucket2Count
	}
	if !IsNil(o.Bucket3Count) {
		toSerialize["bucket3Count"] = o.Bucket3Count
	}
	if !IsNil(o.Bucket4Count) {
		toSerialize["bucket4Count"] = o.Bucket4Count
	}
	if !IsNil(o.Bucket5Count) {
		toSerialize["bucket5Count"] = o.Bucket5Count
	}
	return toSerialize, nil
}

type NullableChildBucketsType struct {
	value *ChildBucketsType
	isSet bool
}

func (v NullableChildBucketsType) Get() *ChildBucketsType {
	return v.value
}

func (v *NullableChildBucketsType) Set(val *ChildBucketsType) {
	v.value = val
	v.isSet = true
}

func (v NullableChildBucketsType) IsSet() bool {
	return v.isSet
}

func (v *NullableChildBucketsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChildBucketsType(val *ChildBucketsType) *NullableChildBucketsType {
	return &NullableChildBucketsType{value: val, isSet: true}
}

func (v NullableChildBucketsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChildBucketsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


