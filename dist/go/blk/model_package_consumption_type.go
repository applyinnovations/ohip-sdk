/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
)

// checks if the PackageConsumptionType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PackageConsumptionType{}

// PackageConsumptionType Package Consumption Information. Includes information on quantity of the package used, allowance consumption etc.
type PackageConsumptionType struct {
	// Indicates if Allowance(for POS packages) has been consumed/posted for today.
	AllowanceConsumed *bool `json:"allowanceConsumed,omitempty"`
	// The default quantity attached in the package.
	DefaultQuantity *int32 `json:"defaultQuantity,omitempty"`
	// The quantity which has been excluded in the package.
	ExcludedQuantity *int32 `json:"excludedQuantity,omitempty"`
	// The total quantity of the package, calculated based on the calculation rule as defined in the PackageHeaderType.
	TotalQuantity *int32 `json:"totalQuantity,omitempty"`
}

// NewPackageConsumptionType instantiates a new PackageConsumptionType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPackageConsumptionType() *PackageConsumptionType {
	this := PackageConsumptionType{}
	return &this
}

// NewPackageConsumptionTypeWithDefaults instantiates a new PackageConsumptionType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPackageConsumptionTypeWithDefaults() *PackageConsumptionType {
	this := PackageConsumptionType{}
	return &this
}

// GetAllowanceConsumed returns the AllowanceConsumed field value if set, zero value otherwise.
func (o *PackageConsumptionType) GetAllowanceConsumed() bool {
	if o == nil || IsNil(o.AllowanceConsumed) {
		var ret bool
		return ret
	}
	return *o.AllowanceConsumed
}

// GetAllowanceConsumedOk returns a tuple with the AllowanceConsumed field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackageConsumptionType) GetAllowanceConsumedOk() (*bool, bool) {
	if o == nil || IsNil(o.AllowanceConsumed) {
		return nil, false
	}
	return o.AllowanceConsumed, true
}

// HasAllowanceConsumed returns a boolean if a field has been set.
func (o *PackageConsumptionType) HasAllowanceConsumed() bool {
	if o != nil && !IsNil(o.AllowanceConsumed) {
		return true
	}

	return false
}

// SetAllowanceConsumed gets a reference to the given bool and assigns it to the AllowanceConsumed field.
func (o *PackageConsumptionType) SetAllowanceConsumed(v bool) {
	o.AllowanceConsumed = &v
}

// GetDefaultQuantity returns the DefaultQuantity field value if set, zero value otherwise.
func (o *PackageConsumptionType) GetDefaultQuantity() int32 {
	if o == nil || IsNil(o.DefaultQuantity) {
		var ret int32
		return ret
	}
	return *o.DefaultQuantity
}

// GetDefaultQuantityOk returns a tuple with the DefaultQuantity field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackageConsumptionType) GetDefaultQuantityOk() (*int32, bool) {
	if o == nil || IsNil(o.DefaultQuantity) {
		return nil, false
	}
	return o.DefaultQuantity, true
}

// HasDefaultQuantity returns a boolean if a field has been set.
func (o *PackageConsumptionType) HasDefaultQuantity() bool {
	if o != nil && !IsNil(o.DefaultQuantity) {
		return true
	}

	return false
}

// SetDefaultQuantity gets a reference to the given int32 and assigns it to the DefaultQuantity field.
func (o *PackageConsumptionType) SetDefaultQuantity(v int32) {
	o.DefaultQuantity = &v
}

// GetExcludedQuantity returns the ExcludedQuantity field value if set, zero value otherwise.
func (o *PackageConsumptionType) GetExcludedQuantity() int32 {
	if o == nil || IsNil(o.ExcludedQuantity) {
		var ret int32
		return ret
	}
	return *o.ExcludedQuantity
}

// GetExcludedQuantityOk returns a tuple with the ExcludedQuantity field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackageConsumptionType) GetExcludedQuantityOk() (*int32, bool) {
	if o == nil || IsNil(o.ExcludedQuantity) {
		return nil, false
	}
	return o.ExcludedQuantity, true
}

// HasExcludedQuantity returns a boolean if a field has been set.
func (o *PackageConsumptionType) HasExcludedQuantity() bool {
	if o != nil && !IsNil(o.ExcludedQuantity) {
		return true
	}

	return false
}

// SetExcludedQuantity gets a reference to the given int32 and assigns it to the ExcludedQuantity field.
func (o *PackageConsumptionType) SetExcludedQuantity(v int32) {
	o.ExcludedQuantity = &v
}

// GetTotalQuantity returns the TotalQuantity field value if set, zero value otherwise.
func (o *PackageConsumptionType) GetTotalQuantity() int32 {
	if o == nil || IsNil(o.TotalQuantity) {
		var ret int32
		return ret
	}
	return *o.TotalQuantity
}

// GetTotalQuantityOk returns a tuple with the TotalQuantity field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackageConsumptionType) GetTotalQuantityOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalQuantity) {
		return nil, false
	}
	return o.TotalQuantity, true
}

// HasTotalQuantity returns a boolean if a field has been set.
func (o *PackageConsumptionType) HasTotalQuantity() bool {
	if o != nil && !IsNil(o.TotalQuantity) {
		return true
	}

	return false
}

// SetTotalQuantity gets a reference to the given int32 and assigns it to the TotalQuantity field.
func (o *PackageConsumptionType) SetTotalQuantity(v int32) {
	o.TotalQuantity = &v
}

func (o PackageConsumptionType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PackageConsumptionType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AllowanceConsumed) {
		toSerialize["allowanceConsumed"] = o.AllowanceConsumed
	}
	if !IsNil(o.DefaultQuantity) {
		toSerialize["defaultQuantity"] = o.DefaultQuantity
	}
	if !IsNil(o.ExcludedQuantity) {
		toSerialize["excludedQuantity"] = o.ExcludedQuantity
	}
	if !IsNil(o.TotalQuantity) {
		toSerialize["totalQuantity"] = o.TotalQuantity
	}
	return toSerialize, nil
}

type NullablePackageConsumptionType struct {
	value *PackageConsumptionType
	isSet bool
}

func (v NullablePackageConsumptionType) Get() *PackageConsumptionType {
	return v.value
}

func (v *NullablePackageConsumptionType) Set(val *PackageConsumptionType) {
	v.value = val
	v.isSet = true
}

func (v NullablePackageConsumptionType) IsSet() bool {
	return v.isSet
}

func (v *NullablePackageConsumptionType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePackageConsumptionType(val *PackageConsumptionType) *NullablePackageConsumptionType {
	return &NullablePackageConsumptionType{value: val, isSet: true}
}

func (v NullablePackageConsumptionType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePackageConsumptionType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


