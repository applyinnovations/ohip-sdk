/*
OPERA Cloud Customer Relationship Management API

APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crm

import (
	"encoding/json"
)

// checks if the CommissionPaymentMethodType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CommissionPaymentMethodType{}

// CommissionPaymentMethodType This contains a generic code and description information.
type CommissionPaymentMethodType struct {
	// Code.
	Code *string `json:"code,omitempty"`
	// description.
	Description *string `json:"description,omitempty"`
	// Payment format if the payment method is EFT.
	Format *string `json:"format,omitempty"`
}

// NewCommissionPaymentMethodType instantiates a new CommissionPaymentMethodType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCommissionPaymentMethodType() *CommissionPaymentMethodType {
	this := CommissionPaymentMethodType{}
	return &this
}

// NewCommissionPaymentMethodTypeWithDefaults instantiates a new CommissionPaymentMethodType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCommissionPaymentMethodTypeWithDefaults() *CommissionPaymentMethodType {
	this := CommissionPaymentMethodType{}
	return &this
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *CommissionPaymentMethodType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CommissionPaymentMethodType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *CommissionPaymentMethodType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *CommissionPaymentMethodType) SetCode(v string) {
	o.Code = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *CommissionPaymentMethodType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CommissionPaymentMethodType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *CommissionPaymentMethodType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *CommissionPaymentMethodType) SetDescription(v string) {
	o.Description = &v
}

// GetFormat returns the Format field value if set, zero value otherwise.
func (o *CommissionPaymentMethodType) GetFormat() string {
	if o == nil || IsNil(o.Format) {
		var ret string
		return ret
	}
	return *o.Format
}

// GetFormatOk returns a tuple with the Format field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CommissionPaymentMethodType) GetFormatOk() (*string, bool) {
	if o == nil || IsNil(o.Format) {
		return nil, false
	}
	return o.Format, true
}

// HasFormat returns a boolean if a field has been set.
func (o *CommissionPaymentMethodType) HasFormat() bool {
	if o != nil && !IsNil(o.Format) {
		return true
	}

	return false
}

// SetFormat gets a reference to the given string and assigns it to the Format field.
func (o *CommissionPaymentMethodType) SetFormat(v string) {
	o.Format = &v
}

func (o CommissionPaymentMethodType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CommissionPaymentMethodType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.Format) {
		toSerialize["format"] = o.Format
	}
	return toSerialize, nil
}

type NullableCommissionPaymentMethodType struct {
	value *CommissionPaymentMethodType
	isSet bool
}

func (v NullableCommissionPaymentMethodType) Get() *CommissionPaymentMethodType {
	return v.value
}

func (v *NullableCommissionPaymentMethodType) Set(val *CommissionPaymentMethodType) {
	v.value = val
	v.isSet = true
}

func (v NullableCommissionPaymentMethodType) IsSet() bool {
	return v.isSet
}

func (v *NullableCommissionPaymentMethodType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCommissionPaymentMethodType(val *CommissionPaymentMethodType) *NullableCommissionPaymentMethodType {
	return &NullableCommissionPaymentMethodType{value: val, isSet: true}
}

func (v NullableCommissionPaymentMethodType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCommissionPaymentMethodType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


