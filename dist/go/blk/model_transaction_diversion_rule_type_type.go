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

// TransactionDiversionRuleTypeType The rule type on which the Transaction Diversion Rule is based. If a reservation has any of the following code, Transaction Diversion rule gets active for that reservation
type TransactionDiversionRuleTypeType string

// List of transactionDiversionRuleTypeType
const (
	TRANSACTIONDIVERSIONRULETYPETYPE_VIP TransactionDiversionRuleTypeType = "Vip"
	TRANSACTIONDIVERSIONRULETYPETYPE_MEMBERSHIP TransactionDiversionRuleTypeType = "Membership"
)

// All allowed values of TransactionDiversionRuleTypeType enum
var AllowedTransactionDiversionRuleTypeTypeEnumValues = []TransactionDiversionRuleTypeType{
	"Vip",
	"Membership",
}

func (v *TransactionDiversionRuleTypeType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := TransactionDiversionRuleTypeType(value)
	for _, existing := range AllowedTransactionDiversionRuleTypeTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid TransactionDiversionRuleTypeType", value)
}

// NewTransactionDiversionRuleTypeTypeFromValue returns a pointer to a valid TransactionDiversionRuleTypeType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewTransactionDiversionRuleTypeTypeFromValue(v string) (*TransactionDiversionRuleTypeType, error) {
	ev := TransactionDiversionRuleTypeType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for TransactionDiversionRuleTypeType: valid values are %v", v, AllowedTransactionDiversionRuleTypeTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v TransactionDiversionRuleTypeType) IsValid() bool {
	for _, existing := range AllowedTransactionDiversionRuleTypeTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to transactionDiversionRuleTypeType value
func (v TransactionDiversionRuleTypeType) Ptr() *TransactionDiversionRuleTypeType {
	return &v
}

type NullableTransactionDiversionRuleTypeType struct {
	value *TransactionDiversionRuleTypeType
	isSet bool
}

func (v NullableTransactionDiversionRuleTypeType) Get() *TransactionDiversionRuleTypeType {
	return v.value
}

func (v *NullableTransactionDiversionRuleTypeType) Set(val *TransactionDiversionRuleTypeType) {
	v.value = val
	v.isSet = true
}

func (v NullableTransactionDiversionRuleTypeType) IsSet() bool {
	return v.isSet
}

func (v *NullableTransactionDiversionRuleTypeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTransactionDiversionRuleTypeType(val *TransactionDiversionRuleTypeType) *NullableTransactionDiversionRuleTypeType {
	return &NullableTransactionDiversionRuleTypeType{value: val, isSet: true}
}

func (v NullableTransactionDiversionRuleTypeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTransactionDiversionRuleTypeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

