/*
OPERA Cloud Price Availability Rate API

APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package par

import (
	"encoding/json"
)

// checks if the GdsNegotiatedInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &GdsNegotiatedInfoType{}

// GdsNegotiatedInfoType This provides information for a channel negotiated rate.
type GdsNegotiatedInfoType struct {
	// The GDS negotiated rate code.
	AccessCode *string `json:"accessCode,omitempty"`
	// The ending value of the date range.
	End *string `json:"end,omitempty"`
	// The GDS Negotiated Rate is inactive or not
	Inactive *bool `json:"inactive,omitempty"`
	// The sell order.
	Order *int32 `json:"order,omitempty"`
	// The starting value of the date range.
	Start *string `json:"start,omitempty"`
}

// NewGdsNegotiatedInfoType instantiates a new GdsNegotiatedInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGdsNegotiatedInfoType() *GdsNegotiatedInfoType {
	this := GdsNegotiatedInfoType{}
	return &this
}

// NewGdsNegotiatedInfoTypeWithDefaults instantiates a new GdsNegotiatedInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGdsNegotiatedInfoTypeWithDefaults() *GdsNegotiatedInfoType {
	this := GdsNegotiatedInfoType{}
	return &this
}

// GetAccessCode returns the AccessCode field value if set, zero value otherwise.
func (o *GdsNegotiatedInfoType) GetAccessCode() string {
	if o == nil || IsNil(o.AccessCode) {
		var ret string
		return ret
	}
	return *o.AccessCode
}

// GetAccessCodeOk returns a tuple with the AccessCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GdsNegotiatedInfoType) GetAccessCodeOk() (*string, bool) {
	if o == nil || IsNil(o.AccessCode) {
		return nil, false
	}
	return o.AccessCode, true
}

// HasAccessCode returns a boolean if a field has been set.
func (o *GdsNegotiatedInfoType) HasAccessCode() bool {
	if o != nil && !IsNil(o.AccessCode) {
		return true
	}

	return false
}

// SetAccessCode gets a reference to the given string and assigns it to the AccessCode field.
func (o *GdsNegotiatedInfoType) SetAccessCode(v string) {
	o.AccessCode = &v
}

// GetEnd returns the End field value if set, zero value otherwise.
func (o *GdsNegotiatedInfoType) GetEnd() string {
	if o == nil || IsNil(o.End) {
		var ret string
		return ret
	}
	return *o.End
}

// GetEndOk returns a tuple with the End field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GdsNegotiatedInfoType) GetEndOk() (*string, bool) {
	if o == nil || IsNil(o.End) {
		return nil, false
	}
	return o.End, true
}

// HasEnd returns a boolean if a field has been set.
func (o *GdsNegotiatedInfoType) HasEnd() bool {
	if o != nil && !IsNil(o.End) {
		return true
	}

	return false
}

// SetEnd gets a reference to the given string and assigns it to the End field.
func (o *GdsNegotiatedInfoType) SetEnd(v string) {
	o.End = &v
}

// GetInactive returns the Inactive field value if set, zero value otherwise.
func (o *GdsNegotiatedInfoType) GetInactive() bool {
	if o == nil || IsNil(o.Inactive) {
		var ret bool
		return ret
	}
	return *o.Inactive
}

// GetInactiveOk returns a tuple with the Inactive field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GdsNegotiatedInfoType) GetInactiveOk() (*bool, bool) {
	if o == nil || IsNil(o.Inactive) {
		return nil, false
	}
	return o.Inactive, true
}

// HasInactive returns a boolean if a field has been set.
func (o *GdsNegotiatedInfoType) HasInactive() bool {
	if o != nil && !IsNil(o.Inactive) {
		return true
	}

	return false
}

// SetInactive gets a reference to the given bool and assigns it to the Inactive field.
func (o *GdsNegotiatedInfoType) SetInactive(v bool) {
	o.Inactive = &v
}

// GetOrder returns the Order field value if set, zero value otherwise.
func (o *GdsNegotiatedInfoType) GetOrder() int32 {
	if o == nil || IsNil(o.Order) {
		var ret int32
		return ret
	}
	return *o.Order
}

// GetOrderOk returns a tuple with the Order field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GdsNegotiatedInfoType) GetOrderOk() (*int32, bool) {
	if o == nil || IsNil(o.Order) {
		return nil, false
	}
	return o.Order, true
}

// HasOrder returns a boolean if a field has been set.
func (o *GdsNegotiatedInfoType) HasOrder() bool {
	if o != nil && !IsNil(o.Order) {
		return true
	}

	return false
}

// SetOrder gets a reference to the given int32 and assigns it to the Order field.
func (o *GdsNegotiatedInfoType) SetOrder(v int32) {
	o.Order = &v
}

// GetStart returns the Start field value if set, zero value otherwise.
func (o *GdsNegotiatedInfoType) GetStart() string {
	if o == nil || IsNil(o.Start) {
		var ret string
		return ret
	}
	return *o.Start
}

// GetStartOk returns a tuple with the Start field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GdsNegotiatedInfoType) GetStartOk() (*string, bool) {
	if o == nil || IsNil(o.Start) {
		return nil, false
	}
	return o.Start, true
}

// HasStart returns a boolean if a field has been set.
func (o *GdsNegotiatedInfoType) HasStart() bool {
	if o != nil && !IsNil(o.Start) {
		return true
	}

	return false
}

// SetStart gets a reference to the given string and assigns it to the Start field.
func (o *GdsNegotiatedInfoType) SetStart(v string) {
	o.Start = &v
}

func (o GdsNegotiatedInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o GdsNegotiatedInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AccessCode) {
		toSerialize["accessCode"] = o.AccessCode
	}
	if !IsNil(o.End) {
		toSerialize["end"] = o.End
	}
	if !IsNil(o.Inactive) {
		toSerialize["inactive"] = o.Inactive
	}
	if !IsNil(o.Order) {
		toSerialize["order"] = o.Order
	}
	if !IsNil(o.Start) {
		toSerialize["start"] = o.Start
	}
	return toSerialize, nil
}

type NullableGdsNegotiatedInfoType struct {
	value *GdsNegotiatedInfoType
	isSet bool
}

func (v NullableGdsNegotiatedInfoType) Get() *GdsNegotiatedInfoType {
	return v.value
}

func (v *NullableGdsNegotiatedInfoType) Set(val *GdsNegotiatedInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableGdsNegotiatedInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableGdsNegotiatedInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGdsNegotiatedInfoType(val *GdsNegotiatedInfoType) *NullableGdsNegotiatedInfoType {
	return &NullableGdsNegotiatedInfoType{value: val, isSet: true}
}

func (v NullableGdsNegotiatedInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGdsNegotiatedInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


