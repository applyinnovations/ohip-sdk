/*
OPERA Cloud Enterprise Configuration API

APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package entcfg

import (
	"encoding/json"
)

// checks if the ARAccountShortInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ARAccountShortInfoType{}

// ARAccountShortInfoType Accounts Receivabales Account details type charged for batched posting.
type ARAccountShortInfoType struct {
	// Name of the AR Account.
	AccountName *string `json:"accountName,omitempty"`
	AccountId *UniqueIDType `json:"accountId,omitempty"`
	// The Account Number for the Account.
	AccountNo *string `json:"accountNo,omitempty"`
	Status *ARAccountStatusType `json:"status,omitempty"`
}

// NewARAccountShortInfoType instantiates a new ARAccountShortInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewARAccountShortInfoType() *ARAccountShortInfoType {
	this := ARAccountShortInfoType{}
	return &this
}

// NewARAccountShortInfoTypeWithDefaults instantiates a new ARAccountShortInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewARAccountShortInfoTypeWithDefaults() *ARAccountShortInfoType {
	this := ARAccountShortInfoType{}
	return &this
}

// GetAccountName returns the AccountName field value if set, zero value otherwise.
func (o *ARAccountShortInfoType) GetAccountName() string {
	if o == nil || IsNil(o.AccountName) {
		var ret string
		return ret
	}
	return *o.AccountName
}

// GetAccountNameOk returns a tuple with the AccountName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ARAccountShortInfoType) GetAccountNameOk() (*string, bool) {
	if o == nil || IsNil(o.AccountName) {
		return nil, false
	}
	return o.AccountName, true
}

// HasAccountName returns a boolean if a field has been set.
func (o *ARAccountShortInfoType) HasAccountName() bool {
	if o != nil && !IsNil(o.AccountName) {
		return true
	}

	return false
}

// SetAccountName gets a reference to the given string and assigns it to the AccountName field.
func (o *ARAccountShortInfoType) SetAccountName(v string) {
	o.AccountName = &v
}

// GetAccountId returns the AccountId field value if set, zero value otherwise.
func (o *ARAccountShortInfoType) GetAccountId() UniqueIDType {
	if o == nil || IsNil(o.AccountId) {
		var ret UniqueIDType
		return ret
	}
	return *o.AccountId
}

// GetAccountIdOk returns a tuple with the AccountId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ARAccountShortInfoType) GetAccountIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.AccountId) {
		return nil, false
	}
	return o.AccountId, true
}

// HasAccountId returns a boolean if a field has been set.
func (o *ARAccountShortInfoType) HasAccountId() bool {
	if o != nil && !IsNil(o.AccountId) {
		return true
	}

	return false
}

// SetAccountId gets a reference to the given UniqueIDType and assigns it to the AccountId field.
func (o *ARAccountShortInfoType) SetAccountId(v UniqueIDType) {
	o.AccountId = &v
}

// GetAccountNo returns the AccountNo field value if set, zero value otherwise.
func (o *ARAccountShortInfoType) GetAccountNo() string {
	if o == nil || IsNil(o.AccountNo) {
		var ret string
		return ret
	}
	return *o.AccountNo
}

// GetAccountNoOk returns a tuple with the AccountNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ARAccountShortInfoType) GetAccountNoOk() (*string, bool) {
	if o == nil || IsNil(o.AccountNo) {
		return nil, false
	}
	return o.AccountNo, true
}

// HasAccountNo returns a boolean if a field has been set.
func (o *ARAccountShortInfoType) HasAccountNo() bool {
	if o != nil && !IsNil(o.AccountNo) {
		return true
	}

	return false
}

// SetAccountNo gets a reference to the given string and assigns it to the AccountNo field.
func (o *ARAccountShortInfoType) SetAccountNo(v string) {
	o.AccountNo = &v
}

// GetStatus returns the Status field value if set, zero value otherwise.
func (o *ARAccountShortInfoType) GetStatus() ARAccountStatusType {
	if o == nil || IsNil(o.Status) {
		var ret ARAccountStatusType
		return ret
	}
	return *o.Status
}

// GetStatusOk returns a tuple with the Status field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ARAccountShortInfoType) GetStatusOk() (*ARAccountStatusType, bool) {
	if o == nil || IsNil(o.Status) {
		return nil, false
	}
	return o.Status, true
}

// HasStatus returns a boolean if a field has been set.
func (o *ARAccountShortInfoType) HasStatus() bool {
	if o != nil && !IsNil(o.Status) {
		return true
	}

	return false
}

// SetStatus gets a reference to the given ARAccountStatusType and assigns it to the Status field.
func (o *ARAccountShortInfoType) SetStatus(v ARAccountStatusType) {
	o.Status = &v
}

func (o ARAccountShortInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ARAccountShortInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AccountName) {
		toSerialize["accountName"] = o.AccountName
	}
	if !IsNil(o.AccountId) {
		toSerialize["accountId"] = o.AccountId
	}
	if !IsNil(o.AccountNo) {
		toSerialize["accountNo"] = o.AccountNo
	}
	if !IsNil(o.Status) {
		toSerialize["status"] = o.Status
	}
	return toSerialize, nil
}

type NullableARAccountShortInfoType struct {
	value *ARAccountShortInfoType
	isSet bool
}

func (v NullableARAccountShortInfoType) Get() *ARAccountShortInfoType {
	return v.value
}

func (v *NullableARAccountShortInfoType) Set(val *ARAccountShortInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableARAccountShortInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableARAccountShortInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableARAccountShortInfoType(val *ARAccountShortInfoType) *NullableARAccountShortInfoType {
	return &NullableARAccountShortInfoType{value: val, isSet: true}
}

func (v NullableARAccountShortInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableARAccountShortInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


