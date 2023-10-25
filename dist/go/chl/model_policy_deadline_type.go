/*
OPERA Cloud Channel Configuration API

APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package chl

import (
	"encoding/json"
)

// checks if the PolicyDeadlineType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PolicyDeadlineType{}

// PolicyDeadlineType Cancellation deadline, absolute or relative.
type PolicyDeadlineType struct {
	// Defines the absolute deadline. Either this or the offset attributes may be used.
	AbsoluteDeadline *string `json:"absoluteDeadline,omitempty"`
	// Time on offset day the cancellation penalties applies.
	OffsetDropTime *string `json:"offsetDropTime,omitempty"`
	// The number of days before arrival that allows cancellation without penalties.
	OffsetFromArrival *int32 `json:"offsetFromArrival,omitempty"`
	// The number of days after booking deposit must be paid.
	OffsetFromBookingDate *int32 `json:"offsetFromBookingDate,omitempty"`
}

// NewPolicyDeadlineType instantiates a new PolicyDeadlineType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPolicyDeadlineType() *PolicyDeadlineType {
	this := PolicyDeadlineType{}
	return &this
}

// NewPolicyDeadlineTypeWithDefaults instantiates a new PolicyDeadlineType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPolicyDeadlineTypeWithDefaults() *PolicyDeadlineType {
	this := PolicyDeadlineType{}
	return &this
}

// GetAbsoluteDeadline returns the AbsoluteDeadline field value if set, zero value otherwise.
func (o *PolicyDeadlineType) GetAbsoluteDeadline() string {
	if o == nil || IsNil(o.AbsoluteDeadline) {
		var ret string
		return ret
	}
	return *o.AbsoluteDeadline
}

// GetAbsoluteDeadlineOk returns a tuple with the AbsoluteDeadline field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PolicyDeadlineType) GetAbsoluteDeadlineOk() (*string, bool) {
	if o == nil || IsNil(o.AbsoluteDeadline) {
		return nil, false
	}
	return o.AbsoluteDeadline, true
}

// HasAbsoluteDeadline returns a boolean if a field has been set.
func (o *PolicyDeadlineType) HasAbsoluteDeadline() bool {
	if o != nil && !IsNil(o.AbsoluteDeadline) {
		return true
	}

	return false
}

// SetAbsoluteDeadline gets a reference to the given string and assigns it to the AbsoluteDeadline field.
func (o *PolicyDeadlineType) SetAbsoluteDeadline(v string) {
	o.AbsoluteDeadline = &v
}

// GetOffsetDropTime returns the OffsetDropTime field value if set, zero value otherwise.
func (o *PolicyDeadlineType) GetOffsetDropTime() string {
	if o == nil || IsNil(o.OffsetDropTime) {
		var ret string
		return ret
	}
	return *o.OffsetDropTime
}

// GetOffsetDropTimeOk returns a tuple with the OffsetDropTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PolicyDeadlineType) GetOffsetDropTimeOk() (*string, bool) {
	if o == nil || IsNil(o.OffsetDropTime) {
		return nil, false
	}
	return o.OffsetDropTime, true
}

// HasOffsetDropTime returns a boolean if a field has been set.
func (o *PolicyDeadlineType) HasOffsetDropTime() bool {
	if o != nil && !IsNil(o.OffsetDropTime) {
		return true
	}

	return false
}

// SetOffsetDropTime gets a reference to the given string and assigns it to the OffsetDropTime field.
func (o *PolicyDeadlineType) SetOffsetDropTime(v string) {
	o.OffsetDropTime = &v
}

// GetOffsetFromArrival returns the OffsetFromArrival field value if set, zero value otherwise.
func (o *PolicyDeadlineType) GetOffsetFromArrival() int32 {
	if o == nil || IsNil(o.OffsetFromArrival) {
		var ret int32
		return ret
	}
	return *o.OffsetFromArrival
}

// GetOffsetFromArrivalOk returns a tuple with the OffsetFromArrival field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PolicyDeadlineType) GetOffsetFromArrivalOk() (*int32, bool) {
	if o == nil || IsNil(o.OffsetFromArrival) {
		return nil, false
	}
	return o.OffsetFromArrival, true
}

// HasOffsetFromArrival returns a boolean if a field has been set.
func (o *PolicyDeadlineType) HasOffsetFromArrival() bool {
	if o != nil && !IsNil(o.OffsetFromArrival) {
		return true
	}

	return false
}

// SetOffsetFromArrival gets a reference to the given int32 and assigns it to the OffsetFromArrival field.
func (o *PolicyDeadlineType) SetOffsetFromArrival(v int32) {
	o.OffsetFromArrival = &v
}

// GetOffsetFromBookingDate returns the OffsetFromBookingDate field value if set, zero value otherwise.
func (o *PolicyDeadlineType) GetOffsetFromBookingDate() int32 {
	if o == nil || IsNil(o.OffsetFromBookingDate) {
		var ret int32
		return ret
	}
	return *o.OffsetFromBookingDate
}

// GetOffsetFromBookingDateOk returns a tuple with the OffsetFromBookingDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PolicyDeadlineType) GetOffsetFromBookingDateOk() (*int32, bool) {
	if o == nil || IsNil(o.OffsetFromBookingDate) {
		return nil, false
	}
	return o.OffsetFromBookingDate, true
}

// HasOffsetFromBookingDate returns a boolean if a field has been set.
func (o *PolicyDeadlineType) HasOffsetFromBookingDate() bool {
	if o != nil && !IsNil(o.OffsetFromBookingDate) {
		return true
	}

	return false
}

// SetOffsetFromBookingDate gets a reference to the given int32 and assigns it to the OffsetFromBookingDate field.
func (o *PolicyDeadlineType) SetOffsetFromBookingDate(v int32) {
	o.OffsetFromBookingDate = &v
}

func (o PolicyDeadlineType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PolicyDeadlineType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AbsoluteDeadline) {
		toSerialize["absoluteDeadline"] = o.AbsoluteDeadline
	}
	if !IsNil(o.OffsetDropTime) {
		toSerialize["offsetDropTime"] = o.OffsetDropTime
	}
	if !IsNil(o.OffsetFromArrival) {
		toSerialize["offsetFromArrival"] = o.OffsetFromArrival
	}
	if !IsNil(o.OffsetFromBookingDate) {
		toSerialize["offsetFromBookingDate"] = o.OffsetFromBookingDate
	}
	return toSerialize, nil
}

type NullablePolicyDeadlineType struct {
	value *PolicyDeadlineType
	isSet bool
}

func (v NullablePolicyDeadlineType) Get() *PolicyDeadlineType {
	return v.value
}

func (v *NullablePolicyDeadlineType) Set(val *PolicyDeadlineType) {
	v.value = val
	v.isSet = true
}

func (v NullablePolicyDeadlineType) IsSet() bool {
	return v.isSet
}

func (v *NullablePolicyDeadlineType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePolicyDeadlineType(val *PolicyDeadlineType) *NullablePolicyDeadlineType {
	return &NullablePolicyDeadlineType{value: val, isSet: true}
}

func (v NullablePolicyDeadlineType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePolicyDeadlineType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


