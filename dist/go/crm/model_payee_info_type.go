/*
OPERA Cloud Customer Relationship Management API

APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crm

import (
	"encoding/json"
)

// checks if the PayeeInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PayeeInfoType{}

// PayeeInfoType Payee information.
type PayeeInfoType struct {
	PayeeAccountInfo *ARAccountShortInfoType `json:"payeeAccountInfo,omitempty"`
	PayeeAddress *AddressInfoType `json:"payeeAddress,omitempty"`
	// Payee multiple address count.
	PayeeAddressCount *int32 `json:"payeeAddressCount,omitempty"`
	PayeeId *UniqueIDType `json:"payeeId,omitempty"`
	// Name of the payee.
	PayeeName *string `json:"payeeName,omitempty"`
	// Reference currency of the payee.
	PayeeReferenceCurrency *string `json:"payeeReferenceCurrency,omitempty"`
	// The tax number of the payee.
	PayeeTaxNumber *string `json:"payeeTaxNumber,omitempty"`
}

// NewPayeeInfoType instantiates a new PayeeInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPayeeInfoType() *PayeeInfoType {
	this := PayeeInfoType{}
	return &this
}

// NewPayeeInfoTypeWithDefaults instantiates a new PayeeInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPayeeInfoTypeWithDefaults() *PayeeInfoType {
	this := PayeeInfoType{}
	return &this
}

// GetPayeeAccountInfo returns the PayeeAccountInfo field value if set, zero value otherwise.
func (o *PayeeInfoType) GetPayeeAccountInfo() ARAccountShortInfoType {
	if o == nil || IsNil(o.PayeeAccountInfo) {
		var ret ARAccountShortInfoType
		return ret
	}
	return *o.PayeeAccountInfo
}

// GetPayeeAccountInfoOk returns a tuple with the PayeeAccountInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PayeeInfoType) GetPayeeAccountInfoOk() (*ARAccountShortInfoType, bool) {
	if o == nil || IsNil(o.PayeeAccountInfo) {
		return nil, false
	}
	return o.PayeeAccountInfo, true
}

// HasPayeeAccountInfo returns a boolean if a field has been set.
func (o *PayeeInfoType) HasPayeeAccountInfo() bool {
	if o != nil && !IsNil(o.PayeeAccountInfo) {
		return true
	}

	return false
}

// SetPayeeAccountInfo gets a reference to the given ARAccountShortInfoType and assigns it to the PayeeAccountInfo field.
func (o *PayeeInfoType) SetPayeeAccountInfo(v ARAccountShortInfoType) {
	o.PayeeAccountInfo = &v
}

// GetPayeeAddress returns the PayeeAddress field value if set, zero value otherwise.
func (o *PayeeInfoType) GetPayeeAddress() AddressInfoType {
	if o == nil || IsNil(o.PayeeAddress) {
		var ret AddressInfoType
		return ret
	}
	return *o.PayeeAddress
}

// GetPayeeAddressOk returns a tuple with the PayeeAddress field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PayeeInfoType) GetPayeeAddressOk() (*AddressInfoType, bool) {
	if o == nil || IsNil(o.PayeeAddress) {
		return nil, false
	}
	return o.PayeeAddress, true
}

// HasPayeeAddress returns a boolean if a field has been set.
func (o *PayeeInfoType) HasPayeeAddress() bool {
	if o != nil && !IsNil(o.PayeeAddress) {
		return true
	}

	return false
}

// SetPayeeAddress gets a reference to the given AddressInfoType and assigns it to the PayeeAddress field.
func (o *PayeeInfoType) SetPayeeAddress(v AddressInfoType) {
	o.PayeeAddress = &v
}

// GetPayeeAddressCount returns the PayeeAddressCount field value if set, zero value otherwise.
func (o *PayeeInfoType) GetPayeeAddressCount() int32 {
	if o == nil || IsNil(o.PayeeAddressCount) {
		var ret int32
		return ret
	}
	return *o.PayeeAddressCount
}

// GetPayeeAddressCountOk returns a tuple with the PayeeAddressCount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PayeeInfoType) GetPayeeAddressCountOk() (*int32, bool) {
	if o == nil || IsNil(o.PayeeAddressCount) {
		return nil, false
	}
	return o.PayeeAddressCount, true
}

// HasPayeeAddressCount returns a boolean if a field has been set.
func (o *PayeeInfoType) HasPayeeAddressCount() bool {
	if o != nil && !IsNil(o.PayeeAddressCount) {
		return true
	}

	return false
}

// SetPayeeAddressCount gets a reference to the given int32 and assigns it to the PayeeAddressCount field.
func (o *PayeeInfoType) SetPayeeAddressCount(v int32) {
	o.PayeeAddressCount = &v
}

// GetPayeeId returns the PayeeId field value if set, zero value otherwise.
func (o *PayeeInfoType) GetPayeeId() UniqueIDType {
	if o == nil || IsNil(o.PayeeId) {
		var ret UniqueIDType
		return ret
	}
	return *o.PayeeId
}

// GetPayeeIdOk returns a tuple with the PayeeId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PayeeInfoType) GetPayeeIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.PayeeId) {
		return nil, false
	}
	return o.PayeeId, true
}

// HasPayeeId returns a boolean if a field has been set.
func (o *PayeeInfoType) HasPayeeId() bool {
	if o != nil && !IsNil(o.PayeeId) {
		return true
	}

	return false
}

// SetPayeeId gets a reference to the given UniqueIDType and assigns it to the PayeeId field.
func (o *PayeeInfoType) SetPayeeId(v UniqueIDType) {
	o.PayeeId = &v
}

// GetPayeeName returns the PayeeName field value if set, zero value otherwise.
func (o *PayeeInfoType) GetPayeeName() string {
	if o == nil || IsNil(o.PayeeName) {
		var ret string
		return ret
	}
	return *o.PayeeName
}

// GetPayeeNameOk returns a tuple with the PayeeName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PayeeInfoType) GetPayeeNameOk() (*string, bool) {
	if o == nil || IsNil(o.PayeeName) {
		return nil, false
	}
	return o.PayeeName, true
}

// HasPayeeName returns a boolean if a field has been set.
func (o *PayeeInfoType) HasPayeeName() bool {
	if o != nil && !IsNil(o.PayeeName) {
		return true
	}

	return false
}

// SetPayeeName gets a reference to the given string and assigns it to the PayeeName field.
func (o *PayeeInfoType) SetPayeeName(v string) {
	o.PayeeName = &v
}

// GetPayeeReferenceCurrency returns the PayeeReferenceCurrency field value if set, zero value otherwise.
func (o *PayeeInfoType) GetPayeeReferenceCurrency() string {
	if o == nil || IsNil(o.PayeeReferenceCurrency) {
		var ret string
		return ret
	}
	return *o.PayeeReferenceCurrency
}

// GetPayeeReferenceCurrencyOk returns a tuple with the PayeeReferenceCurrency field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PayeeInfoType) GetPayeeReferenceCurrencyOk() (*string, bool) {
	if o == nil || IsNil(o.PayeeReferenceCurrency) {
		return nil, false
	}
	return o.PayeeReferenceCurrency, true
}

// HasPayeeReferenceCurrency returns a boolean if a field has been set.
func (o *PayeeInfoType) HasPayeeReferenceCurrency() bool {
	if o != nil && !IsNil(o.PayeeReferenceCurrency) {
		return true
	}

	return false
}

// SetPayeeReferenceCurrency gets a reference to the given string and assigns it to the PayeeReferenceCurrency field.
func (o *PayeeInfoType) SetPayeeReferenceCurrency(v string) {
	o.PayeeReferenceCurrency = &v
}

// GetPayeeTaxNumber returns the PayeeTaxNumber field value if set, zero value otherwise.
func (o *PayeeInfoType) GetPayeeTaxNumber() string {
	if o == nil || IsNil(o.PayeeTaxNumber) {
		var ret string
		return ret
	}
	return *o.PayeeTaxNumber
}

// GetPayeeTaxNumberOk returns a tuple with the PayeeTaxNumber field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PayeeInfoType) GetPayeeTaxNumberOk() (*string, bool) {
	if o == nil || IsNil(o.PayeeTaxNumber) {
		return nil, false
	}
	return o.PayeeTaxNumber, true
}

// HasPayeeTaxNumber returns a boolean if a field has been set.
func (o *PayeeInfoType) HasPayeeTaxNumber() bool {
	if o != nil && !IsNil(o.PayeeTaxNumber) {
		return true
	}

	return false
}

// SetPayeeTaxNumber gets a reference to the given string and assigns it to the PayeeTaxNumber field.
func (o *PayeeInfoType) SetPayeeTaxNumber(v string) {
	o.PayeeTaxNumber = &v
}

func (o PayeeInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PayeeInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.PayeeAccountInfo) {
		toSerialize["payeeAccountInfo"] = o.PayeeAccountInfo
	}
	if !IsNil(o.PayeeAddress) {
		toSerialize["payeeAddress"] = o.PayeeAddress
	}
	if !IsNil(o.PayeeAddressCount) {
		toSerialize["payeeAddressCount"] = o.PayeeAddressCount
	}
	if !IsNil(o.PayeeId) {
		toSerialize["payeeId"] = o.PayeeId
	}
	if !IsNil(o.PayeeName) {
		toSerialize["payeeName"] = o.PayeeName
	}
	if !IsNil(o.PayeeReferenceCurrency) {
		toSerialize["payeeReferenceCurrency"] = o.PayeeReferenceCurrency
	}
	if !IsNil(o.PayeeTaxNumber) {
		toSerialize["payeeTaxNumber"] = o.PayeeTaxNumber
	}
	return toSerialize, nil
}

type NullablePayeeInfoType struct {
	value *PayeeInfoType
	isSet bool
}

func (v NullablePayeeInfoType) Get() *PayeeInfoType {
	return v.value
}

func (v *NullablePayeeInfoType) Set(val *PayeeInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullablePayeeInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullablePayeeInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePayeeInfoType(val *PayeeInfoType) *NullablePayeeInfoType {
	return &NullablePayeeInfoType{value: val, isSet: true}
}

func (v NullablePayeeInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePayeeInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


