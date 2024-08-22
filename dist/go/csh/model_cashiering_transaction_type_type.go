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
	"fmt"
)

// CashieringTransactionTypeType Wrapper Transaction Type.
type CashieringTransactionTypeType string

// List of cashieringTransactionTypeType
const (
	CASHIERINGTRANSACTIONTYPETYPE_REVENUE CashieringTransactionTypeType = "Revenue"
	CASHIERINGTRANSACTIONTYPETYPE_PAYMENT CashieringTransactionTypeType = "Payment"
	CASHIERINGTRANSACTIONTYPETYPE_WRAPPER CashieringTransactionTypeType = "Wrapper"
)

// All allowed values of CashieringTransactionTypeType enum
var AllowedCashieringTransactionTypeTypeEnumValues = []CashieringTransactionTypeType{
	"Revenue",
	"Payment",
	"Wrapper",
}

func (v *CashieringTransactionTypeType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := CashieringTransactionTypeType(value)
	for _, existing := range AllowedCashieringTransactionTypeTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid CashieringTransactionTypeType", value)
}

// NewCashieringTransactionTypeTypeFromValue returns a pointer to a valid CashieringTransactionTypeType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewCashieringTransactionTypeTypeFromValue(v string) (*CashieringTransactionTypeType, error) {
	ev := CashieringTransactionTypeType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for CashieringTransactionTypeType: valid values are %v", v, AllowedCashieringTransactionTypeTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v CashieringTransactionTypeType) IsValid() bool {
	for _, existing := range AllowedCashieringTransactionTypeTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to cashieringTransactionTypeType value
func (v CashieringTransactionTypeType) Ptr() *CashieringTransactionTypeType {
	return &v
}

type NullableCashieringTransactionTypeType struct {
	value *CashieringTransactionTypeType
	isSet bool
}

func (v NullableCashieringTransactionTypeType) Get() *CashieringTransactionTypeType {
	return v.value
}

func (v *NullableCashieringTransactionTypeType) Set(val *CashieringTransactionTypeType) {
	v.value = val
	v.isSet = true
}

func (v NullableCashieringTransactionTypeType) IsSet() bool {
	return v.isSet
}

func (v *NullableCashieringTransactionTypeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCashieringTransactionTypeType(val *CashieringTransactionTypeType) *NullableCashieringTransactionTypeType {
	return &NullableCashieringTransactionTypeType{value: val, isSet: true}
}

func (v NullableCashieringTransactionTypeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCashieringTransactionTypeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

