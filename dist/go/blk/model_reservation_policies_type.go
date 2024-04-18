/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
)

// checks if the ReservationPoliciesType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ReservationPoliciesType{}

// ReservationPoliciesType A collection of reservation deposit and cancellation policies.
type ReservationPoliciesType struct {
	// A list of reservation cancellation policies.
	CancellationPolicies []ResCancellationPolicyType `json:"cancellationPolicies,omitempty"`
	// A list of deposit policies attached with the reservation.
	DepositPolicies []ResDepositPolicyType `json:"depositPolicies,omitempty"`
	// Name identifier for the reservation.
	Name *string `json:"name,omitempty"`
	// Unique Id that references an object uniquely in the system.
	ReservationIdList []UniqueIDType `json:"reservationIdList,omitempty"`
}

// NewReservationPoliciesType instantiates a new ReservationPoliciesType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewReservationPoliciesType() *ReservationPoliciesType {
	this := ReservationPoliciesType{}
	return &this
}

// NewReservationPoliciesTypeWithDefaults instantiates a new ReservationPoliciesType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewReservationPoliciesTypeWithDefaults() *ReservationPoliciesType {
	this := ReservationPoliciesType{}
	return &this
}

// GetCancellationPolicies returns the CancellationPolicies field value if set, zero value otherwise.
func (o *ReservationPoliciesType) GetCancellationPolicies() []ResCancellationPolicyType {
	if o == nil || IsNil(o.CancellationPolicies) {
		var ret []ResCancellationPolicyType
		return ret
	}
	return o.CancellationPolicies
}

// GetCancellationPoliciesOk returns a tuple with the CancellationPolicies field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationPoliciesType) GetCancellationPoliciesOk() ([]ResCancellationPolicyType, bool) {
	if o == nil || IsNil(o.CancellationPolicies) {
		return nil, false
	}
	return o.CancellationPolicies, true
}

// HasCancellationPolicies returns a boolean if a field has been set.
func (o *ReservationPoliciesType) HasCancellationPolicies() bool {
	if o != nil && !IsNil(o.CancellationPolicies) {
		return true
	}

	return false
}

// SetCancellationPolicies gets a reference to the given []ResCancellationPolicyType and assigns it to the CancellationPolicies field.
func (o *ReservationPoliciesType) SetCancellationPolicies(v []ResCancellationPolicyType) {
	o.CancellationPolicies = v
}

// GetDepositPolicies returns the DepositPolicies field value if set, zero value otherwise.
func (o *ReservationPoliciesType) GetDepositPolicies() []ResDepositPolicyType {
	if o == nil || IsNil(o.DepositPolicies) {
		var ret []ResDepositPolicyType
		return ret
	}
	return o.DepositPolicies
}

// GetDepositPoliciesOk returns a tuple with the DepositPolicies field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationPoliciesType) GetDepositPoliciesOk() ([]ResDepositPolicyType, bool) {
	if o == nil || IsNil(o.DepositPolicies) {
		return nil, false
	}
	return o.DepositPolicies, true
}

// HasDepositPolicies returns a boolean if a field has been set.
func (o *ReservationPoliciesType) HasDepositPolicies() bool {
	if o != nil && !IsNil(o.DepositPolicies) {
		return true
	}

	return false
}

// SetDepositPolicies gets a reference to the given []ResDepositPolicyType and assigns it to the DepositPolicies field.
func (o *ReservationPoliciesType) SetDepositPolicies(v []ResDepositPolicyType) {
	o.DepositPolicies = v
}

// GetName returns the Name field value if set, zero value otherwise.
func (o *ReservationPoliciesType) GetName() string {
	if o == nil || IsNil(o.Name) {
		var ret string
		return ret
	}
	return *o.Name
}

// GetNameOk returns a tuple with the Name field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationPoliciesType) GetNameOk() (*string, bool) {
	if o == nil || IsNil(o.Name) {
		return nil, false
	}
	return o.Name, true
}

// HasName returns a boolean if a field has been set.
func (o *ReservationPoliciesType) HasName() bool {
	if o != nil && !IsNil(o.Name) {
		return true
	}

	return false
}

// SetName gets a reference to the given string and assigns it to the Name field.
func (o *ReservationPoliciesType) SetName(v string) {
	o.Name = &v
}

// GetReservationIdList returns the ReservationIdList field value if set, zero value otherwise.
func (o *ReservationPoliciesType) GetReservationIdList() []UniqueIDType {
	if o == nil || IsNil(o.ReservationIdList) {
		var ret []UniqueIDType
		return ret
	}
	return o.ReservationIdList
}

// GetReservationIdListOk returns a tuple with the ReservationIdList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationPoliciesType) GetReservationIdListOk() ([]UniqueIDType, bool) {
	if o == nil || IsNil(o.ReservationIdList) {
		return nil, false
	}
	return o.ReservationIdList, true
}

// HasReservationIdList returns a boolean if a field has been set.
func (o *ReservationPoliciesType) HasReservationIdList() bool {
	if o != nil && !IsNil(o.ReservationIdList) {
		return true
	}

	return false
}

// SetReservationIdList gets a reference to the given []UniqueIDType and assigns it to the ReservationIdList field.
func (o *ReservationPoliciesType) SetReservationIdList(v []UniqueIDType) {
	o.ReservationIdList = v
}

func (o ReservationPoliciesType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ReservationPoliciesType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CancellationPolicies) {
		toSerialize["cancellationPolicies"] = o.CancellationPolicies
	}
	if !IsNil(o.DepositPolicies) {
		toSerialize["depositPolicies"] = o.DepositPolicies
	}
	if !IsNil(o.Name) {
		toSerialize["name"] = o.Name
	}
	if !IsNil(o.ReservationIdList) {
		toSerialize["reservationIdList"] = o.ReservationIdList
	}
	return toSerialize, nil
}

type NullableReservationPoliciesType struct {
	value *ReservationPoliciesType
	isSet bool
}

func (v NullableReservationPoliciesType) Get() *ReservationPoliciesType {
	return v.value
}

func (v *NullableReservationPoliciesType) Set(val *ReservationPoliciesType) {
	v.value = val
	v.isSet = true
}

func (v NullableReservationPoliciesType) IsSet() bool {
	return v.isSet
}

func (v *NullableReservationPoliciesType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableReservationPoliciesType(val *ReservationPoliciesType) *NullableReservationPoliciesType {
	return &NullableReservationPoliciesType{value: val, isSet: true}
}

func (v NullableReservationPoliciesType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableReservationPoliciesType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

