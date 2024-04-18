/*
OPERA Cloud Front Desk Configuration API

APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fofcfg

import (
	"encoding/json"
)

// checks if the CreditCardTypeValidationStatus type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CreditCardTypeValidationStatus{}

// CreditCardTypeValidationStatus struct for CreditCardTypeValidationStatus
type CreditCardTypeValidationStatus struct {
	Links []InstanceLink `json:"links,omitempty"`
	// A flag indicating whether the credit card number meets its vendor's format requirements
	Valid *bool `json:"valid,omitempty"`
	ValidatedPaymentMethod *ReservationPaymentMethodType `json:"validatedPaymentMethod,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewCreditCardTypeValidationStatus instantiates a new CreditCardTypeValidationStatus object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCreditCardTypeValidationStatus() *CreditCardTypeValidationStatus {
	this := CreditCardTypeValidationStatus{}
	return &this
}

// NewCreditCardTypeValidationStatusWithDefaults instantiates a new CreditCardTypeValidationStatus object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCreditCardTypeValidationStatusWithDefaults() *CreditCardTypeValidationStatus {
	this := CreditCardTypeValidationStatus{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *CreditCardTypeValidationStatus) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreditCardTypeValidationStatus) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *CreditCardTypeValidationStatus) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *CreditCardTypeValidationStatus) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetValid returns the Valid field value if set, zero value otherwise.
func (o *CreditCardTypeValidationStatus) GetValid() bool {
	if o == nil || IsNil(o.Valid) {
		var ret bool
		return ret
	}
	return *o.Valid
}

// GetValidOk returns a tuple with the Valid field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreditCardTypeValidationStatus) GetValidOk() (*bool, bool) {
	if o == nil || IsNil(o.Valid) {
		return nil, false
	}
	return o.Valid, true
}

// HasValid returns a boolean if a field has been set.
func (o *CreditCardTypeValidationStatus) HasValid() bool {
	if o != nil && !IsNil(o.Valid) {
		return true
	}

	return false
}

// SetValid gets a reference to the given bool and assigns it to the Valid field.
func (o *CreditCardTypeValidationStatus) SetValid(v bool) {
	o.Valid = &v
}

// GetValidatedPaymentMethod returns the ValidatedPaymentMethod field value if set, zero value otherwise.
func (o *CreditCardTypeValidationStatus) GetValidatedPaymentMethod() ReservationPaymentMethodType {
	if o == nil || IsNil(o.ValidatedPaymentMethod) {
		var ret ReservationPaymentMethodType
		return ret
	}
	return *o.ValidatedPaymentMethod
}

// GetValidatedPaymentMethodOk returns a tuple with the ValidatedPaymentMethod field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreditCardTypeValidationStatus) GetValidatedPaymentMethodOk() (*ReservationPaymentMethodType, bool) {
	if o == nil || IsNil(o.ValidatedPaymentMethod) {
		return nil, false
	}
	return o.ValidatedPaymentMethod, true
}

// HasValidatedPaymentMethod returns a boolean if a field has been set.
func (o *CreditCardTypeValidationStatus) HasValidatedPaymentMethod() bool {
	if o != nil && !IsNil(o.ValidatedPaymentMethod) {
		return true
	}

	return false
}

// SetValidatedPaymentMethod gets a reference to the given ReservationPaymentMethodType and assigns it to the ValidatedPaymentMethod field.
func (o *CreditCardTypeValidationStatus) SetValidatedPaymentMethod(v ReservationPaymentMethodType) {
	o.ValidatedPaymentMethod = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *CreditCardTypeValidationStatus) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreditCardTypeValidationStatus) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *CreditCardTypeValidationStatus) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *CreditCardTypeValidationStatus) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o CreditCardTypeValidationStatus) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CreditCardTypeValidationStatus) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Valid) {
		toSerialize["valid"] = o.Valid
	}
	if !IsNil(o.ValidatedPaymentMethod) {
		toSerialize["validatedPaymentMethod"] = o.ValidatedPaymentMethod
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableCreditCardTypeValidationStatus struct {
	value *CreditCardTypeValidationStatus
	isSet bool
}

func (v NullableCreditCardTypeValidationStatus) Get() *CreditCardTypeValidationStatus {
	return v.value
}

func (v *NullableCreditCardTypeValidationStatus) Set(val *CreditCardTypeValidationStatus) {
	v.value = val
	v.isSet = true
}

func (v NullableCreditCardTypeValidationStatus) IsSet() bool {
	return v.isSet
}

func (v *NullableCreditCardTypeValidationStatus) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCreditCardTypeValidationStatus(val *CreditCardTypeValidationStatus) *NullableCreditCardTypeValidationStatus {
	return &NullableCreditCardTypeValidationStatus{value: val, isSet: true}
}

func (v NullableCreditCardTypeValidationStatus) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCreditCardTypeValidationStatus) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

