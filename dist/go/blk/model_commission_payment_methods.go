/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
	"fmt"
)

// CommissionPaymentMethods Check
type CommissionPaymentMethods string

// List of commissionPaymentMethods
const (
	COMMISSIONPAYMENTMETHODS_CENT CommissionPaymentMethods = "Cent"
	COMMISSIONPAYMENTMETHODS_EFT CommissionPaymentMethods = "Eft"
	COMMISSIONPAYMENTMETHODS_CHK CommissionPaymentMethods = "Chk"
)

// All allowed values of CommissionPaymentMethods enum
var AllowedCommissionPaymentMethodsEnumValues = []CommissionPaymentMethods{
	"Cent",
	"Eft",
	"Chk",
}

func (v *CommissionPaymentMethods) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := CommissionPaymentMethods(value)
	for _, existing := range AllowedCommissionPaymentMethodsEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid CommissionPaymentMethods", value)
}

// NewCommissionPaymentMethodsFromValue returns a pointer to a valid CommissionPaymentMethods
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewCommissionPaymentMethodsFromValue(v string) (*CommissionPaymentMethods, error) {
	ev := CommissionPaymentMethods(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for CommissionPaymentMethods: valid values are %v", v, AllowedCommissionPaymentMethodsEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v CommissionPaymentMethods) IsValid() bool {
	for _, existing := range AllowedCommissionPaymentMethodsEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to commissionPaymentMethods value
func (v CommissionPaymentMethods) Ptr() *CommissionPaymentMethods {
	return &v
}

type NullableCommissionPaymentMethods struct {
	value *CommissionPaymentMethods
	isSet bool
}

func (v NullableCommissionPaymentMethods) Get() *CommissionPaymentMethods {
	return v.value
}

func (v *NullableCommissionPaymentMethods) Set(val *CommissionPaymentMethods) {
	v.value = val
	v.isSet = true
}

func (v NullableCommissionPaymentMethods) IsSet() bool {
	return v.isSet
}

func (v *NullableCommissionPaymentMethods) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCommissionPaymentMethods(val *CommissionPaymentMethods) *NullableCommissionPaymentMethods {
	return &NullableCommissionPaymentMethods{value: val, isSet: true}
}

func (v NullableCommissionPaymentMethods) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCommissionPaymentMethods) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

