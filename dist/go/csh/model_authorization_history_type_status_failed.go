/*
OPERA Cloud Cashiering API

APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package csh

import (
	"encoding/json"
)

// checks if the AuthorizationHistoryTypeStatusFailed type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AuthorizationHistoryTypeStatusFailed{}

// AuthorizationHistoryTypeStatusFailed An indicator that the authorization failed.
type AuthorizationHistoryTypeStatusFailed struct {
	// The reason for the authorization failure.
	Reason *string `json:"reason,omitempty"`
}

// NewAuthorizationHistoryTypeStatusFailed instantiates a new AuthorizationHistoryTypeStatusFailed object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAuthorizationHistoryTypeStatusFailed() *AuthorizationHistoryTypeStatusFailed {
	this := AuthorizationHistoryTypeStatusFailed{}
	return &this
}

// NewAuthorizationHistoryTypeStatusFailedWithDefaults instantiates a new AuthorizationHistoryTypeStatusFailed object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAuthorizationHistoryTypeStatusFailedWithDefaults() *AuthorizationHistoryTypeStatusFailed {
	this := AuthorizationHistoryTypeStatusFailed{}
	return &this
}

// GetReason returns the Reason field value if set, zero value otherwise.
func (o *AuthorizationHistoryTypeStatusFailed) GetReason() string {
	if o == nil || IsNil(o.Reason) {
		var ret string
		return ret
	}
	return *o.Reason
}

// GetReasonOk returns a tuple with the Reason field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AuthorizationHistoryTypeStatusFailed) GetReasonOk() (*string, bool) {
	if o == nil || IsNil(o.Reason) {
		return nil, false
	}
	return o.Reason, true
}

// HasReason returns a boolean if a field has been set.
func (o *AuthorizationHistoryTypeStatusFailed) HasReason() bool {
	if o != nil && !IsNil(o.Reason) {
		return true
	}

	return false
}

// SetReason gets a reference to the given string and assigns it to the Reason field.
func (o *AuthorizationHistoryTypeStatusFailed) SetReason(v string) {
	o.Reason = &v
}

func (o AuthorizationHistoryTypeStatusFailed) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AuthorizationHistoryTypeStatusFailed) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Reason) {
		toSerialize["reason"] = o.Reason
	}
	return toSerialize, nil
}

type NullableAuthorizationHistoryTypeStatusFailed struct {
	value *AuthorizationHistoryTypeStatusFailed
	isSet bool
}

func (v NullableAuthorizationHistoryTypeStatusFailed) Get() *AuthorizationHistoryTypeStatusFailed {
	return v.value
}

func (v *NullableAuthorizationHistoryTypeStatusFailed) Set(val *AuthorizationHistoryTypeStatusFailed) {
	v.value = val
	v.isSet = true
}

func (v NullableAuthorizationHistoryTypeStatusFailed) IsSet() bool {
	return v.isSet
}

func (v *NullableAuthorizationHistoryTypeStatusFailed) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAuthorizationHistoryTypeStatusFailed(val *AuthorizationHistoryTypeStatusFailed) *NullableAuthorizationHistoryTypeStatusFailed {
	return &NullableAuthorizationHistoryTypeStatusFailed{value: val, isSet: true}
}

func (v NullableAuthorizationHistoryTypeStatusFailed) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAuthorizationHistoryTypeStatusFailed) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

