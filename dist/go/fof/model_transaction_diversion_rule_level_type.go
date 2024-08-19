/*
OPERA Cloud Front Desk Operations Service

APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fof

import (
	"encoding/json"
	"fmt"
)

// TransactionDiversionRuleLevelType Reservation level.
type TransactionDiversionRuleLevelType string

// List of transactionDiversionRuleLevelType
const (
	TRANSACTIONDIVERSIONRULELEVELTYPE_PROPERTY TransactionDiversionRuleLevelType = "Property"
	TRANSACTIONDIVERSIONRULELEVELTYPE_RESERVATION TransactionDiversionRuleLevelType = "Reservation"
)

// All allowed values of TransactionDiversionRuleLevelType enum
var AllowedTransactionDiversionRuleLevelTypeEnumValues = []TransactionDiversionRuleLevelType{
	"Property",
	"Reservation",
}

func (v *TransactionDiversionRuleLevelType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := TransactionDiversionRuleLevelType(value)
	for _, existing := range AllowedTransactionDiversionRuleLevelTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid TransactionDiversionRuleLevelType", value)
}

// NewTransactionDiversionRuleLevelTypeFromValue returns a pointer to a valid TransactionDiversionRuleLevelType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewTransactionDiversionRuleLevelTypeFromValue(v string) (*TransactionDiversionRuleLevelType, error) {
	ev := TransactionDiversionRuleLevelType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for TransactionDiversionRuleLevelType: valid values are %v", v, AllowedTransactionDiversionRuleLevelTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v TransactionDiversionRuleLevelType) IsValid() bool {
	for _, existing := range AllowedTransactionDiversionRuleLevelTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to transactionDiversionRuleLevelType value
func (v TransactionDiversionRuleLevelType) Ptr() *TransactionDiversionRuleLevelType {
	return &v
}

type NullableTransactionDiversionRuleLevelType struct {
	value *TransactionDiversionRuleLevelType
	isSet bool
}

func (v NullableTransactionDiversionRuleLevelType) Get() *TransactionDiversionRuleLevelType {
	return v.value
}

func (v *NullableTransactionDiversionRuleLevelType) Set(val *TransactionDiversionRuleLevelType) {
	v.value = val
	v.isSet = true
}

func (v NullableTransactionDiversionRuleLevelType) IsSet() bool {
	return v.isSet
}

func (v *NullableTransactionDiversionRuleLevelType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTransactionDiversionRuleLevelType(val *TransactionDiversionRuleLevelType) *NullableTransactionDiversionRuleLevelType {
	return &NullableTransactionDiversionRuleLevelType{value: val, isSet: true}
}

func (v NullableTransactionDiversionRuleLevelType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTransactionDiversionRuleLevelType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

