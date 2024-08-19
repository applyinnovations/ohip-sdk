/*
OPERA Cloud Accounts Receivables API

APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package ars

import (
	"encoding/json"
	"fmt"
)

// StatementType The Types of Statements that can be used on an Account Type.
type StatementType string

// List of statementType
const (
	STATEMENTTYPE_BALANCE_FORWARD StatementType = "BalanceForward"
	STATEMENTTYPE_INDIVIDUAL_OPEN_ITEMS StatementType = "IndividualOpenItems"
)

// All allowed values of StatementType enum
var AllowedStatementTypeEnumValues = []StatementType{
	"BalanceForward",
	"IndividualOpenItems",
}

func (v *StatementType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := StatementType(value)
	for _, existing := range AllowedStatementTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid StatementType", value)
}

// NewStatementTypeFromValue returns a pointer to a valid StatementType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewStatementTypeFromValue(v string) (*StatementType, error) {
	ev := StatementType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for StatementType: valid values are %v", v, AllowedStatementTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v StatementType) IsValid() bool {
	for _, existing := range AllowedStatementTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to statementType value
func (v StatementType) Ptr() *StatementType {
	return &v
}

type NullableStatementType struct {
	value *StatementType
	isSet bool
}

func (v NullableStatementType) Get() *StatementType {
	return v.value
}

func (v *NullableStatementType) Set(val *StatementType) {
	v.value = val
	v.isSet = true
}

func (v NullableStatementType) IsSet() bool {
	return v.isSet
}

func (v *NullableStatementType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableStatementType(val *StatementType) *NullableStatementType {
	return &NullableStatementType{value: val, isSet: true}
}

func (v NullableStatementType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableStatementType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

