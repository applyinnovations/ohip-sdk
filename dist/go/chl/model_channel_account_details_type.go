/*
OPERA Cloud Channel Configuration API

APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package chl

import (
	"encoding/json"
)

// checks if the ChannelAccountDetailsType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ChannelAccountDetailsType{}

// ChannelAccountDetailsType To hold channel account detailed information.
type ChannelAccountDetailsType struct {
	// Holds Account code for which details are fetched.
	AccountCode *string `json:"accountCode,omitempty"`
	// Holds Account Name for which details are fetched.
	AccountName *string `json:"accountName,omitempty"`
	AccountType *ChannelAccountTypeType `json:"accountType,omitempty"`
	// Account contact name information.
	ContactName *string `json:"contactName,omitempty"`
	// Holds ECU No alias AR_No.
	ECUNo *string `json:"eCUNo,omitempty"`
	// Holds Template Account code on which current account is based on.
	TemplateAccountCode *string `json:"templateAccountCode,omitempty"`
}

// NewChannelAccountDetailsType instantiates a new ChannelAccountDetailsType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChannelAccountDetailsType() *ChannelAccountDetailsType {
	this := ChannelAccountDetailsType{}
	return &this
}

// NewChannelAccountDetailsTypeWithDefaults instantiates a new ChannelAccountDetailsType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChannelAccountDetailsTypeWithDefaults() *ChannelAccountDetailsType {
	this := ChannelAccountDetailsType{}
	return &this
}

// GetAccountCode returns the AccountCode field value if set, zero value otherwise.
func (o *ChannelAccountDetailsType) GetAccountCode() string {
	if o == nil || IsNil(o.AccountCode) {
		var ret string
		return ret
	}
	return *o.AccountCode
}

// GetAccountCodeOk returns a tuple with the AccountCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelAccountDetailsType) GetAccountCodeOk() (*string, bool) {
	if o == nil || IsNil(o.AccountCode) {
		return nil, false
	}
	return o.AccountCode, true
}

// HasAccountCode returns a boolean if a field has been set.
func (o *ChannelAccountDetailsType) HasAccountCode() bool {
	if o != nil && !IsNil(o.AccountCode) {
		return true
	}

	return false
}

// SetAccountCode gets a reference to the given string and assigns it to the AccountCode field.
func (o *ChannelAccountDetailsType) SetAccountCode(v string) {
	o.AccountCode = &v
}

// GetAccountName returns the AccountName field value if set, zero value otherwise.
func (o *ChannelAccountDetailsType) GetAccountName() string {
	if o == nil || IsNil(o.AccountName) {
		var ret string
		return ret
	}
	return *o.AccountName
}

// GetAccountNameOk returns a tuple with the AccountName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelAccountDetailsType) GetAccountNameOk() (*string, bool) {
	if o == nil || IsNil(o.AccountName) {
		return nil, false
	}
	return o.AccountName, true
}

// HasAccountName returns a boolean if a field has been set.
func (o *ChannelAccountDetailsType) HasAccountName() bool {
	if o != nil && !IsNil(o.AccountName) {
		return true
	}

	return false
}

// SetAccountName gets a reference to the given string and assigns it to the AccountName field.
func (o *ChannelAccountDetailsType) SetAccountName(v string) {
	o.AccountName = &v
}

// GetAccountType returns the AccountType field value if set, zero value otherwise.
func (o *ChannelAccountDetailsType) GetAccountType() ChannelAccountTypeType {
	if o == nil || IsNil(o.AccountType) {
		var ret ChannelAccountTypeType
		return ret
	}
	return *o.AccountType
}

// GetAccountTypeOk returns a tuple with the AccountType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelAccountDetailsType) GetAccountTypeOk() (*ChannelAccountTypeType, bool) {
	if o == nil || IsNil(o.AccountType) {
		return nil, false
	}
	return o.AccountType, true
}

// HasAccountType returns a boolean if a field has been set.
func (o *ChannelAccountDetailsType) HasAccountType() bool {
	if o != nil && !IsNil(o.AccountType) {
		return true
	}

	return false
}

// SetAccountType gets a reference to the given ChannelAccountTypeType and assigns it to the AccountType field.
func (o *ChannelAccountDetailsType) SetAccountType(v ChannelAccountTypeType) {
	o.AccountType = &v
}

// GetContactName returns the ContactName field value if set, zero value otherwise.
func (o *ChannelAccountDetailsType) GetContactName() string {
	if o == nil || IsNil(o.ContactName) {
		var ret string
		return ret
	}
	return *o.ContactName
}

// GetContactNameOk returns a tuple with the ContactName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelAccountDetailsType) GetContactNameOk() (*string, bool) {
	if o == nil || IsNil(o.ContactName) {
		return nil, false
	}
	return o.ContactName, true
}

// HasContactName returns a boolean if a field has been set.
func (o *ChannelAccountDetailsType) HasContactName() bool {
	if o != nil && !IsNil(o.ContactName) {
		return true
	}

	return false
}

// SetContactName gets a reference to the given string and assigns it to the ContactName field.
func (o *ChannelAccountDetailsType) SetContactName(v string) {
	o.ContactName = &v
}

// GetECUNo returns the ECUNo field value if set, zero value otherwise.
func (o *ChannelAccountDetailsType) GetECUNo() string {
	if o == nil || IsNil(o.ECUNo) {
		var ret string
		return ret
	}
	return *o.ECUNo
}

// GetECUNoOk returns a tuple with the ECUNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelAccountDetailsType) GetECUNoOk() (*string, bool) {
	if o == nil || IsNil(o.ECUNo) {
		return nil, false
	}
	return o.ECUNo, true
}

// HasECUNo returns a boolean if a field has been set.
func (o *ChannelAccountDetailsType) HasECUNo() bool {
	if o != nil && !IsNil(o.ECUNo) {
		return true
	}

	return false
}

// SetECUNo gets a reference to the given string and assigns it to the ECUNo field.
func (o *ChannelAccountDetailsType) SetECUNo(v string) {
	o.ECUNo = &v
}

// GetTemplateAccountCode returns the TemplateAccountCode field value if set, zero value otherwise.
func (o *ChannelAccountDetailsType) GetTemplateAccountCode() string {
	if o == nil || IsNil(o.TemplateAccountCode) {
		var ret string
		return ret
	}
	return *o.TemplateAccountCode
}

// GetTemplateAccountCodeOk returns a tuple with the TemplateAccountCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelAccountDetailsType) GetTemplateAccountCodeOk() (*string, bool) {
	if o == nil || IsNil(o.TemplateAccountCode) {
		return nil, false
	}
	return o.TemplateAccountCode, true
}

// HasTemplateAccountCode returns a boolean if a field has been set.
func (o *ChannelAccountDetailsType) HasTemplateAccountCode() bool {
	if o != nil && !IsNil(o.TemplateAccountCode) {
		return true
	}

	return false
}

// SetTemplateAccountCode gets a reference to the given string and assigns it to the TemplateAccountCode field.
func (o *ChannelAccountDetailsType) SetTemplateAccountCode(v string) {
	o.TemplateAccountCode = &v
}

func (o ChannelAccountDetailsType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ChannelAccountDetailsType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AccountCode) {
		toSerialize["accountCode"] = o.AccountCode
	}
	if !IsNil(o.AccountName) {
		toSerialize["accountName"] = o.AccountName
	}
	if !IsNil(o.AccountType) {
		toSerialize["accountType"] = o.AccountType
	}
	if !IsNil(o.ContactName) {
		toSerialize["contactName"] = o.ContactName
	}
	if !IsNil(o.ECUNo) {
		toSerialize["eCUNo"] = o.ECUNo
	}
	if !IsNil(o.TemplateAccountCode) {
		toSerialize["templateAccountCode"] = o.TemplateAccountCode
	}
	return toSerialize, nil
}

type NullableChannelAccountDetailsType struct {
	value *ChannelAccountDetailsType
	isSet bool
}

func (v NullableChannelAccountDetailsType) Get() *ChannelAccountDetailsType {
	return v.value
}

func (v *NullableChannelAccountDetailsType) Set(val *ChannelAccountDetailsType) {
	v.value = val
	v.isSet = true
}

func (v NullableChannelAccountDetailsType) IsSet() bool {
	return v.isSet
}

func (v *NullableChannelAccountDetailsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChannelAccountDetailsType(val *ChannelAccountDetailsType) *NullableChannelAccountDetailsType {
	return &NullableChannelAccountDetailsType{value: val, isSet: true}
}

func (v NullableChannelAccountDetailsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChannelAccountDetailsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


