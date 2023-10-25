/*
OPERA Cloud Front Desk Configuration API

APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fofcfg

import (
	"encoding/json"
)

// checks if the AuthorizerGroupType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AuthorizerGroupType{}

// AuthorizerGroupType A representation of the information contained by a Authorizer Group.
type AuthorizerGroupType struct {
	// Authorizer Group code.
	Code *string `json:"code,omitempty"`
	// Description of the Authorizer Group.
	Description *string `json:"description,omitempty"`
	// Hotel Code to which the Authorizer Group belongs to.
	HotelId *string `json:"hotelId,omitempty"`
	// Rate Code of the Authorizer Group.
	RateCode *string `json:"rateCode,omitempty"`
	// Set of Transaction Limit configured for the Authorizer Group.
	TransactionLimits []AuthorizerTrxLimitType `json:"transactionLimits,omitempty"`
}

// NewAuthorizerGroupType instantiates a new AuthorizerGroupType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAuthorizerGroupType() *AuthorizerGroupType {
	this := AuthorizerGroupType{}
	return &this
}

// NewAuthorizerGroupTypeWithDefaults instantiates a new AuthorizerGroupType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAuthorizerGroupTypeWithDefaults() *AuthorizerGroupType {
	this := AuthorizerGroupType{}
	return &this
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *AuthorizerGroupType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AuthorizerGroupType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *AuthorizerGroupType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *AuthorizerGroupType) SetCode(v string) {
	o.Code = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *AuthorizerGroupType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AuthorizerGroupType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *AuthorizerGroupType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *AuthorizerGroupType) SetDescription(v string) {
	o.Description = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *AuthorizerGroupType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AuthorizerGroupType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *AuthorizerGroupType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *AuthorizerGroupType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetRateCode returns the RateCode field value if set, zero value otherwise.
func (o *AuthorizerGroupType) GetRateCode() string {
	if o == nil || IsNil(o.RateCode) {
		var ret string
		return ret
	}
	return *o.RateCode
}

// GetRateCodeOk returns a tuple with the RateCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AuthorizerGroupType) GetRateCodeOk() (*string, bool) {
	if o == nil || IsNil(o.RateCode) {
		return nil, false
	}
	return o.RateCode, true
}

// HasRateCode returns a boolean if a field has been set.
func (o *AuthorizerGroupType) HasRateCode() bool {
	if o != nil && !IsNil(o.RateCode) {
		return true
	}

	return false
}

// SetRateCode gets a reference to the given string and assigns it to the RateCode field.
func (o *AuthorizerGroupType) SetRateCode(v string) {
	o.RateCode = &v
}

// GetTransactionLimits returns the TransactionLimits field value if set, zero value otherwise.
func (o *AuthorizerGroupType) GetTransactionLimits() []AuthorizerTrxLimitType {
	if o == nil || IsNil(o.TransactionLimits) {
		var ret []AuthorizerTrxLimitType
		return ret
	}
	return o.TransactionLimits
}

// GetTransactionLimitsOk returns a tuple with the TransactionLimits field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AuthorizerGroupType) GetTransactionLimitsOk() ([]AuthorizerTrxLimitType, bool) {
	if o == nil || IsNil(o.TransactionLimits) {
		return nil, false
	}
	return o.TransactionLimits, true
}

// HasTransactionLimits returns a boolean if a field has been set.
func (o *AuthorizerGroupType) HasTransactionLimits() bool {
	if o != nil && !IsNil(o.TransactionLimits) {
		return true
	}

	return false
}

// SetTransactionLimits gets a reference to the given []AuthorizerTrxLimitType and assigns it to the TransactionLimits field.
func (o *AuthorizerGroupType) SetTransactionLimits(v []AuthorizerTrxLimitType) {
	o.TransactionLimits = v
}

func (o AuthorizerGroupType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AuthorizerGroupType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.RateCode) {
		toSerialize["rateCode"] = o.RateCode
	}
	if !IsNil(o.TransactionLimits) {
		toSerialize["transactionLimits"] = o.TransactionLimits
	}
	return toSerialize, nil
}

type NullableAuthorizerGroupType struct {
	value *AuthorizerGroupType
	isSet bool
}

func (v NullableAuthorizerGroupType) Get() *AuthorizerGroupType {
	return v.value
}

func (v *NullableAuthorizerGroupType) Set(val *AuthorizerGroupType) {
	v.value = val
	v.isSet = true
}

func (v NullableAuthorizerGroupType) IsSet() bool {
	return v.isSet
}

func (v *NullableAuthorizerGroupType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAuthorizerGroupType(val *AuthorizerGroupType) *NullableAuthorizerGroupType {
	return &NullableAuthorizerGroupType{value: val, isSet: true}
}

func (v NullableAuthorizerGroupType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAuthorizerGroupType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


