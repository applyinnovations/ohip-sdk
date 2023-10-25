/*
OPERA Cloud Cashiering Outbound API

APIs to cater for Cashiering related external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package cshoutbound

import (
	"encoding/json"
)

// checks if the ApproveCompPostingsRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ApproveCompPostingsRequest{}

// ApproveCompPostingsRequest struct for ApproveCompPostingsRequest
type ApproveCompPostingsRequest struct {
	// List of transactions to be submitted to the vendor.
	CompPostings []CompTransactionType `json:"compPostings,omitempty"`
}

// NewApproveCompPostingsRequest instantiates a new ApproveCompPostingsRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewApproveCompPostingsRequest() *ApproveCompPostingsRequest {
	this := ApproveCompPostingsRequest{}
	return &this
}

// NewApproveCompPostingsRequestWithDefaults instantiates a new ApproveCompPostingsRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewApproveCompPostingsRequestWithDefaults() *ApproveCompPostingsRequest {
	this := ApproveCompPostingsRequest{}
	return &this
}

// GetCompPostings returns the CompPostings field value if set, zero value otherwise.
func (o *ApproveCompPostingsRequest) GetCompPostings() []CompTransactionType {
	if o == nil || IsNil(o.CompPostings) {
		var ret []CompTransactionType
		return ret
	}
	return o.CompPostings
}

// GetCompPostingsOk returns a tuple with the CompPostings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ApproveCompPostingsRequest) GetCompPostingsOk() ([]CompTransactionType, bool) {
	if o == nil || IsNil(o.CompPostings) {
		return nil, false
	}
	return o.CompPostings, true
}

// HasCompPostings returns a boolean if a field has been set.
func (o *ApproveCompPostingsRequest) HasCompPostings() bool {
	if o != nil && !IsNil(o.CompPostings) {
		return true
	}

	return false
}

// SetCompPostings gets a reference to the given []CompTransactionType and assigns it to the CompPostings field.
func (o *ApproveCompPostingsRequest) SetCompPostings(v []CompTransactionType) {
	o.CompPostings = v
}

func (o ApproveCompPostingsRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ApproveCompPostingsRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CompPostings) {
		toSerialize["compPostings"] = o.CompPostings
	}
	return toSerialize, nil
}

type NullableApproveCompPostingsRequest struct {
	value *ApproveCompPostingsRequest
	isSet bool
}

func (v NullableApproveCompPostingsRequest) Get() *ApproveCompPostingsRequest {
	return v.value
}

func (v *NullableApproveCompPostingsRequest) Set(val *ApproveCompPostingsRequest) {
	v.value = val
	v.isSet = true
}

func (v NullableApproveCompPostingsRequest) IsSet() bool {
	return v.isSet
}

func (v *NullableApproveCompPostingsRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableApproveCompPostingsRequest(val *ApproveCompPostingsRequest) *NullableApproveCompPostingsRequest {
	return &NullableApproveCompPostingsRequest{value: val, isSet: true}
}

func (v NullableApproveCompPostingsRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableApproveCompPostingsRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


