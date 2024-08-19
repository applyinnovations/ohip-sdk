/*
OPERA Cloud Sales Event Management API

APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evm

import (
	"encoding/json"
)

// checks if the ResCancellationPolicyType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ResCancellationPolicyType{}

// ResCancellationPolicyType A cancellation policy attached with the reservation.
type ResCancellationPolicyType struct {
	// Comments attached with the reservation cancellation.
	Comments *string `json:"comments,omitempty"`
	// The percentage amount due for reservation cancellation.
	PercentageDue *float32 `json:"percentageDue,omitempty"`
	Policy *ResCancelPenaltyType `json:"policy,omitempty"`
	PolicyId *UniqueIDType `json:"policyId,omitempty"`
	RevenueType *DepositCancelRevenueType `json:"revenueType,omitempty"`
}

// NewResCancellationPolicyType instantiates a new ResCancellationPolicyType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewResCancellationPolicyType() *ResCancellationPolicyType {
	this := ResCancellationPolicyType{}
	return &this
}

// NewResCancellationPolicyTypeWithDefaults instantiates a new ResCancellationPolicyType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewResCancellationPolicyTypeWithDefaults() *ResCancellationPolicyType {
	this := ResCancellationPolicyType{}
	return &this
}

// GetComments returns the Comments field value if set, zero value otherwise.
func (o *ResCancellationPolicyType) GetComments() string {
	if o == nil || IsNil(o.Comments) {
		var ret string
		return ret
	}
	return *o.Comments
}

// GetCommentsOk returns a tuple with the Comments field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResCancellationPolicyType) GetCommentsOk() (*string, bool) {
	if o == nil || IsNil(o.Comments) {
		return nil, false
	}
	return o.Comments, true
}

// HasComments returns a boolean if a field has been set.
func (o *ResCancellationPolicyType) HasComments() bool {
	if o != nil && !IsNil(o.Comments) {
		return true
	}

	return false
}

// SetComments gets a reference to the given string and assigns it to the Comments field.
func (o *ResCancellationPolicyType) SetComments(v string) {
	o.Comments = &v
}

// GetPercentageDue returns the PercentageDue field value if set, zero value otherwise.
func (o *ResCancellationPolicyType) GetPercentageDue() float32 {
	if o == nil || IsNil(o.PercentageDue) {
		var ret float32
		return ret
	}
	return *o.PercentageDue
}

// GetPercentageDueOk returns a tuple with the PercentageDue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResCancellationPolicyType) GetPercentageDueOk() (*float32, bool) {
	if o == nil || IsNil(o.PercentageDue) {
		return nil, false
	}
	return o.PercentageDue, true
}

// HasPercentageDue returns a boolean if a field has been set.
func (o *ResCancellationPolicyType) HasPercentageDue() bool {
	if o != nil && !IsNil(o.PercentageDue) {
		return true
	}

	return false
}

// SetPercentageDue gets a reference to the given float32 and assigns it to the PercentageDue field.
func (o *ResCancellationPolicyType) SetPercentageDue(v float32) {
	o.PercentageDue = &v
}

// GetPolicy returns the Policy field value if set, zero value otherwise.
func (o *ResCancellationPolicyType) GetPolicy() ResCancelPenaltyType {
	if o == nil || IsNil(o.Policy) {
		var ret ResCancelPenaltyType
		return ret
	}
	return *o.Policy
}

// GetPolicyOk returns a tuple with the Policy field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResCancellationPolicyType) GetPolicyOk() (*ResCancelPenaltyType, bool) {
	if o == nil || IsNil(o.Policy) {
		return nil, false
	}
	return o.Policy, true
}

// HasPolicy returns a boolean if a field has been set.
func (o *ResCancellationPolicyType) HasPolicy() bool {
	if o != nil && !IsNil(o.Policy) {
		return true
	}

	return false
}

// SetPolicy gets a reference to the given ResCancelPenaltyType and assigns it to the Policy field.
func (o *ResCancellationPolicyType) SetPolicy(v ResCancelPenaltyType) {
	o.Policy = &v
}

// GetPolicyId returns the PolicyId field value if set, zero value otherwise.
func (o *ResCancellationPolicyType) GetPolicyId() UniqueIDType {
	if o == nil || IsNil(o.PolicyId) {
		var ret UniqueIDType
		return ret
	}
	return *o.PolicyId
}

// GetPolicyIdOk returns a tuple with the PolicyId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResCancellationPolicyType) GetPolicyIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.PolicyId) {
		return nil, false
	}
	return o.PolicyId, true
}

// HasPolicyId returns a boolean if a field has been set.
func (o *ResCancellationPolicyType) HasPolicyId() bool {
	if o != nil && !IsNil(o.PolicyId) {
		return true
	}

	return false
}

// SetPolicyId gets a reference to the given UniqueIDType and assigns it to the PolicyId field.
func (o *ResCancellationPolicyType) SetPolicyId(v UniqueIDType) {
	o.PolicyId = &v
}

// GetRevenueType returns the RevenueType field value if set, zero value otherwise.
func (o *ResCancellationPolicyType) GetRevenueType() DepositCancelRevenueType {
	if o == nil || IsNil(o.RevenueType) {
		var ret DepositCancelRevenueType
		return ret
	}
	return *o.RevenueType
}

// GetRevenueTypeOk returns a tuple with the RevenueType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResCancellationPolicyType) GetRevenueTypeOk() (*DepositCancelRevenueType, bool) {
	if o == nil || IsNil(o.RevenueType) {
		return nil, false
	}
	return o.RevenueType, true
}

// HasRevenueType returns a boolean if a field has been set.
func (o *ResCancellationPolicyType) HasRevenueType() bool {
	if o != nil && !IsNil(o.RevenueType) {
		return true
	}

	return false
}

// SetRevenueType gets a reference to the given DepositCancelRevenueType and assigns it to the RevenueType field.
func (o *ResCancellationPolicyType) SetRevenueType(v DepositCancelRevenueType) {
	o.RevenueType = &v
}

func (o ResCancellationPolicyType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ResCancellationPolicyType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Comments) {
		toSerialize["comments"] = o.Comments
	}
	if !IsNil(o.PercentageDue) {
		toSerialize["percentageDue"] = o.PercentageDue
	}
	if !IsNil(o.Policy) {
		toSerialize["policy"] = o.Policy
	}
	if !IsNil(o.PolicyId) {
		toSerialize["policyId"] = o.PolicyId
	}
	if !IsNil(o.RevenueType) {
		toSerialize["revenueType"] = o.RevenueType
	}
	return toSerialize, nil
}

type NullableResCancellationPolicyType struct {
	value *ResCancellationPolicyType
	isSet bool
}

func (v NullableResCancellationPolicyType) Get() *ResCancellationPolicyType {
	return v.value
}

func (v *NullableResCancellationPolicyType) Set(val *ResCancellationPolicyType) {
	v.value = val
	v.isSet = true
}

func (v NullableResCancellationPolicyType) IsSet() bool {
	return v.isSet
}

func (v *NullableResCancellationPolicyType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableResCancellationPolicyType(val *ResCancellationPolicyType) *NullableResCancellationPolicyType {
	return &NullableResCancellationPolicyType{value: val, isSet: true}
}

func (v NullableResCancellationPolicyType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableResCancellationPolicyType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


