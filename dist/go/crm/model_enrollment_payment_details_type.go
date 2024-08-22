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

// checks if the EnrollmentPaymentDetailsType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &EnrollmentPaymentDetailsType{}

// EnrollmentPaymentDetailsType Payment details to enrolll profile to the membership program.
type EnrollmentPaymentDetailsType struct {
	// Amount/Fee to enroll to membership Program.
	Amount *float32 `json:"amount,omitempty"`
	AmountCode *CodeDescriptionType `json:"amountCode,omitempty"`
	// Payment Comments.
	Comments *string `json:"comments,omitempty"`
	// The date of Payment for enrollment to membership program.
	PaymentDate *string `json:"paymentDate,omitempty"`
	PaymentMethod *CodeDescriptionType `json:"paymentMethod,omitempty"`
}

// NewEnrollmentPaymentDetailsType instantiates a new EnrollmentPaymentDetailsType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewEnrollmentPaymentDetailsType() *EnrollmentPaymentDetailsType {
	this := EnrollmentPaymentDetailsType{}
	return &this
}

// NewEnrollmentPaymentDetailsTypeWithDefaults instantiates a new EnrollmentPaymentDetailsType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewEnrollmentPaymentDetailsTypeWithDefaults() *EnrollmentPaymentDetailsType {
	this := EnrollmentPaymentDetailsType{}
	return &this
}

// GetAmount returns the Amount field value if set, zero value otherwise.
func (o *EnrollmentPaymentDetailsType) GetAmount() float32 {
	if o == nil || IsNil(o.Amount) {
		var ret float32
		return ret
	}
	return *o.Amount
}

// GetAmountOk returns a tuple with the Amount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EnrollmentPaymentDetailsType) GetAmountOk() (*float32, bool) {
	if o == nil || IsNil(o.Amount) {
		return nil, false
	}
	return o.Amount, true
}

// HasAmount returns a boolean if a field has been set.
func (o *EnrollmentPaymentDetailsType) HasAmount() bool {
	if o != nil && !IsNil(o.Amount) {
		return true
	}

	return false
}

// SetAmount gets a reference to the given float32 and assigns it to the Amount field.
func (o *EnrollmentPaymentDetailsType) SetAmount(v float32) {
	o.Amount = &v
}

// GetAmountCode returns the AmountCode field value if set, zero value otherwise.
func (o *EnrollmentPaymentDetailsType) GetAmountCode() CodeDescriptionType {
	if o == nil || IsNil(o.AmountCode) {
		var ret CodeDescriptionType
		return ret
	}
	return *o.AmountCode
}

// GetAmountCodeOk returns a tuple with the AmountCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EnrollmentPaymentDetailsType) GetAmountCodeOk() (*CodeDescriptionType, bool) {
	if o == nil || IsNil(o.AmountCode) {
		return nil, false
	}
	return o.AmountCode, true
}

// HasAmountCode returns a boolean if a field has been set.
func (o *EnrollmentPaymentDetailsType) HasAmountCode() bool {
	if o != nil && !IsNil(o.AmountCode) {
		return true
	}

	return false
}

// SetAmountCode gets a reference to the given CodeDescriptionType and assigns it to the AmountCode field.
func (o *EnrollmentPaymentDetailsType) SetAmountCode(v CodeDescriptionType) {
	o.AmountCode = &v
}

// GetComments returns the Comments field value if set, zero value otherwise.
func (o *EnrollmentPaymentDetailsType) GetComments() string {
	if o == nil || IsNil(o.Comments) {
		var ret string
		return ret
	}
	return *o.Comments
}

// GetCommentsOk returns a tuple with the Comments field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EnrollmentPaymentDetailsType) GetCommentsOk() (*string, bool) {
	if o == nil || IsNil(o.Comments) {
		return nil, false
	}
	return o.Comments, true
}

// HasComments returns a boolean if a field has been set.
func (o *EnrollmentPaymentDetailsType) HasComments() bool {
	if o != nil && !IsNil(o.Comments) {
		return true
	}

	return false
}

// SetComments gets a reference to the given string and assigns it to the Comments field.
func (o *EnrollmentPaymentDetailsType) SetComments(v string) {
	o.Comments = &v
}

// GetPaymentDate returns the PaymentDate field value if set, zero value otherwise.
func (o *EnrollmentPaymentDetailsType) GetPaymentDate() string {
	if o == nil || IsNil(o.PaymentDate) {
		var ret string
		return ret
	}
	return *o.PaymentDate
}

// GetPaymentDateOk returns a tuple with the PaymentDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EnrollmentPaymentDetailsType) GetPaymentDateOk() (*string, bool) {
	if o == nil || IsNil(o.PaymentDate) {
		return nil, false
	}
	return o.PaymentDate, true
}

// HasPaymentDate returns a boolean if a field has been set.
func (o *EnrollmentPaymentDetailsType) HasPaymentDate() bool {
	if o != nil && !IsNil(o.PaymentDate) {
		return true
	}

	return false
}

// SetPaymentDate gets a reference to the given string and assigns it to the PaymentDate field.
func (o *EnrollmentPaymentDetailsType) SetPaymentDate(v string) {
	o.PaymentDate = &v
}

// GetPaymentMethod returns the PaymentMethod field value if set, zero value otherwise.
func (o *EnrollmentPaymentDetailsType) GetPaymentMethod() CodeDescriptionType {
	if o == nil || IsNil(o.PaymentMethod) {
		var ret CodeDescriptionType
		return ret
	}
	return *o.PaymentMethod
}

// GetPaymentMethodOk returns a tuple with the PaymentMethod field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EnrollmentPaymentDetailsType) GetPaymentMethodOk() (*CodeDescriptionType, bool) {
	if o == nil || IsNil(o.PaymentMethod) {
		return nil, false
	}
	return o.PaymentMethod, true
}

// HasPaymentMethod returns a boolean if a field has been set.
func (o *EnrollmentPaymentDetailsType) HasPaymentMethod() bool {
	if o != nil && !IsNil(o.PaymentMethod) {
		return true
	}

	return false
}

// SetPaymentMethod gets a reference to the given CodeDescriptionType and assigns it to the PaymentMethod field.
func (o *EnrollmentPaymentDetailsType) SetPaymentMethod(v CodeDescriptionType) {
	o.PaymentMethod = &v
}

func (o EnrollmentPaymentDetailsType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o EnrollmentPaymentDetailsType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Amount) {
		toSerialize["amount"] = o.Amount
	}
	if !IsNil(o.AmountCode) {
		toSerialize["amountCode"] = o.AmountCode
	}
	if !IsNil(o.Comments) {
		toSerialize["comments"] = o.Comments
	}
	if !IsNil(o.PaymentDate) {
		toSerialize["paymentDate"] = o.PaymentDate
	}
	if !IsNil(o.PaymentMethod) {
		toSerialize["paymentMethod"] = o.PaymentMethod
	}
	return toSerialize, nil
}

type NullableEnrollmentPaymentDetailsType struct {
	value *EnrollmentPaymentDetailsType
	isSet bool
}

func (v NullableEnrollmentPaymentDetailsType) Get() *EnrollmentPaymentDetailsType {
	return v.value
}

func (v *NullableEnrollmentPaymentDetailsType) Set(val *EnrollmentPaymentDetailsType) {
	v.value = val
	v.isSet = true
}

func (v NullableEnrollmentPaymentDetailsType) IsSet() bool {
	return v.isSet
}

func (v *NullableEnrollmentPaymentDetailsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableEnrollmentPaymentDetailsType(val *EnrollmentPaymentDetailsType) *NullableEnrollmentPaymentDetailsType {
	return &NullableEnrollmentPaymentDetailsType{value: val, isSet: true}
}

func (v NullableEnrollmentPaymentDetailsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableEnrollmentPaymentDetailsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


