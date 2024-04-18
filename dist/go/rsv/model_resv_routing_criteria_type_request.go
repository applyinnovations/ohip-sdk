/*
OPERA Cloud Reservation API

APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsv

import (
	"encoding/json"
)

// checks if the ResvRoutingCriteriaTypeRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ResvRoutingCriteriaTypeRequest{}

// ResvRoutingCriteriaTypeRequest Comp Accounting Request routing
type ResvRoutingCriteriaTypeRequest struct {
	CompRequestInfo *CompRoutingRequestType `json:"compRequestInfo,omitempty"`
	// Set of routing instructions associated to this routing type.
	Instructions []RoutingInstructionType `json:"instructions,omitempty"`
}

// NewResvRoutingCriteriaTypeRequest instantiates a new ResvRoutingCriteriaTypeRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewResvRoutingCriteriaTypeRequest() *ResvRoutingCriteriaTypeRequest {
	this := ResvRoutingCriteriaTypeRequest{}
	return &this
}

// NewResvRoutingCriteriaTypeRequestWithDefaults instantiates a new ResvRoutingCriteriaTypeRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewResvRoutingCriteriaTypeRequestWithDefaults() *ResvRoutingCriteriaTypeRequest {
	this := ResvRoutingCriteriaTypeRequest{}
	return &this
}

// GetCompRequestInfo returns the CompRequestInfo field value if set, zero value otherwise.
func (o *ResvRoutingCriteriaTypeRequest) GetCompRequestInfo() CompRoutingRequestType {
	if o == nil || IsNil(o.CompRequestInfo) {
		var ret CompRoutingRequestType
		return ret
	}
	return *o.CompRequestInfo
}

// GetCompRequestInfoOk returns a tuple with the CompRequestInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResvRoutingCriteriaTypeRequest) GetCompRequestInfoOk() (*CompRoutingRequestType, bool) {
	if o == nil || IsNil(o.CompRequestInfo) {
		return nil, false
	}
	return o.CompRequestInfo, true
}

// HasCompRequestInfo returns a boolean if a field has been set.
func (o *ResvRoutingCriteriaTypeRequest) HasCompRequestInfo() bool {
	if o != nil && !IsNil(o.CompRequestInfo) {
		return true
	}

	return false
}

// SetCompRequestInfo gets a reference to the given CompRoutingRequestType and assigns it to the CompRequestInfo field.
func (o *ResvRoutingCriteriaTypeRequest) SetCompRequestInfo(v CompRoutingRequestType) {
	o.CompRequestInfo = &v
}

// GetInstructions returns the Instructions field value if set, zero value otherwise.
func (o *ResvRoutingCriteriaTypeRequest) GetInstructions() []RoutingInstructionType {
	if o == nil || IsNil(o.Instructions) {
		var ret []RoutingInstructionType
		return ret
	}
	return o.Instructions
}

// GetInstructionsOk returns a tuple with the Instructions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResvRoutingCriteriaTypeRequest) GetInstructionsOk() ([]RoutingInstructionType, bool) {
	if o == nil || IsNil(o.Instructions) {
		return nil, false
	}
	return o.Instructions, true
}

// HasInstructions returns a boolean if a field has been set.
func (o *ResvRoutingCriteriaTypeRequest) HasInstructions() bool {
	if o != nil && !IsNil(o.Instructions) {
		return true
	}

	return false
}

// SetInstructions gets a reference to the given []RoutingInstructionType and assigns it to the Instructions field.
func (o *ResvRoutingCriteriaTypeRequest) SetInstructions(v []RoutingInstructionType) {
	o.Instructions = v
}

func (o ResvRoutingCriteriaTypeRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ResvRoutingCriteriaTypeRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CompRequestInfo) {
		toSerialize["compRequestInfo"] = o.CompRequestInfo
	}
	if !IsNil(o.Instructions) {
		toSerialize["instructions"] = o.Instructions
	}
	return toSerialize, nil
}

type NullableResvRoutingCriteriaTypeRequest struct {
	value *ResvRoutingCriteriaTypeRequest
	isSet bool
}

func (v NullableResvRoutingCriteriaTypeRequest) Get() *ResvRoutingCriteriaTypeRequest {
	return v.value
}

func (v *NullableResvRoutingCriteriaTypeRequest) Set(val *ResvRoutingCriteriaTypeRequest) {
	v.value = val
	v.isSet = true
}

func (v NullableResvRoutingCriteriaTypeRequest) IsSet() bool {
	return v.isSet
}

func (v *NullableResvRoutingCriteriaTypeRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableResvRoutingCriteriaTypeRequest(val *ResvRoutingCriteriaTypeRequest) *NullableResvRoutingCriteriaTypeRequest {
	return &NullableResvRoutingCriteriaTypeRequest{value: val, isSet: true}
}

func (v NullableResvRoutingCriteriaTypeRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableResvRoutingCriteriaTypeRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

