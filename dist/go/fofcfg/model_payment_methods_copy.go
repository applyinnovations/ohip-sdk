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

// checks if the PaymentMethodsCopy type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PaymentMethodsCopy{}

// PaymentMethodsCopy struct for PaymentMethodsCopy
type PaymentMethodsCopy struct {
	Links []InstanceLink `json:"links,omitempty"`
	// List of payment methods to be copied.
	PaymentMethods []CopyConfigurationCodeType `json:"paymentMethods,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPaymentMethodsCopy instantiates a new PaymentMethodsCopy object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPaymentMethodsCopy() *PaymentMethodsCopy {
	this := PaymentMethodsCopy{}
	return &this
}

// NewPaymentMethodsCopyWithDefaults instantiates a new PaymentMethodsCopy object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPaymentMethodsCopyWithDefaults() *PaymentMethodsCopy {
	this := PaymentMethodsCopy{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PaymentMethodsCopy) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PaymentMethodsCopy) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PaymentMethodsCopy) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PaymentMethodsCopy) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetPaymentMethods returns the PaymentMethods field value if set, zero value otherwise.
func (o *PaymentMethodsCopy) GetPaymentMethods() []CopyConfigurationCodeType {
	if o == nil || IsNil(o.PaymentMethods) {
		var ret []CopyConfigurationCodeType
		return ret
	}
	return o.PaymentMethods
}

// GetPaymentMethodsOk returns a tuple with the PaymentMethods field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PaymentMethodsCopy) GetPaymentMethodsOk() ([]CopyConfigurationCodeType, bool) {
	if o == nil || IsNil(o.PaymentMethods) {
		return nil, false
	}
	return o.PaymentMethods, true
}

// HasPaymentMethods returns a boolean if a field has been set.
func (o *PaymentMethodsCopy) HasPaymentMethods() bool {
	if o != nil && !IsNil(o.PaymentMethods) {
		return true
	}

	return false
}

// SetPaymentMethods gets a reference to the given []CopyConfigurationCodeType and assigns it to the PaymentMethods field.
func (o *PaymentMethodsCopy) SetPaymentMethods(v []CopyConfigurationCodeType) {
	o.PaymentMethods = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PaymentMethodsCopy) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PaymentMethodsCopy) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PaymentMethodsCopy) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PaymentMethodsCopy) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PaymentMethodsCopy) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PaymentMethodsCopy) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.PaymentMethods) {
		toSerialize["paymentMethods"] = o.PaymentMethods
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePaymentMethodsCopy struct {
	value *PaymentMethodsCopy
	isSet bool
}

func (v NullablePaymentMethodsCopy) Get() *PaymentMethodsCopy {
	return v.value
}

func (v *NullablePaymentMethodsCopy) Set(val *PaymentMethodsCopy) {
	v.value = val
	v.isSet = true
}

func (v NullablePaymentMethodsCopy) IsSet() bool {
	return v.isSet
}

func (v *NullablePaymentMethodsCopy) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePaymentMethodsCopy(val *PaymentMethodsCopy) *NullablePaymentMethodsCopy {
	return &NullablePaymentMethodsCopy{value: val, isSet: true}
}

func (v NullablePaymentMethodsCopy) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePaymentMethodsCopy) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


