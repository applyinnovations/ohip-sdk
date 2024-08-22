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
	"fmt"
)

// TransactionDiscountCodeType The code type on which the transaction discount is based.
type TransactionDiscountCodeType string

// List of transactionDiscountCodeType
const (
	TRANSACTIONDISCOUNTCODETYPE_ARTICLE TransactionDiscountCodeType = "Article"
	TRANSACTIONDISCOUNTCODETYPE_TRANSACTION TransactionDiscountCodeType = "Transaction"
)

// All allowed values of TransactionDiscountCodeType enum
var AllowedTransactionDiscountCodeTypeEnumValues = []TransactionDiscountCodeType{
	"Article",
	"Transaction",
}

func (v *TransactionDiscountCodeType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := TransactionDiscountCodeType(value)
	for _, existing := range AllowedTransactionDiscountCodeTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid TransactionDiscountCodeType", value)
}

// NewTransactionDiscountCodeTypeFromValue returns a pointer to a valid TransactionDiscountCodeType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewTransactionDiscountCodeTypeFromValue(v string) (*TransactionDiscountCodeType, error) {
	ev := TransactionDiscountCodeType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for TransactionDiscountCodeType: valid values are %v", v, AllowedTransactionDiscountCodeTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v TransactionDiscountCodeType) IsValid() bool {
	for _, existing := range AllowedTransactionDiscountCodeTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to transactionDiscountCodeType value
func (v TransactionDiscountCodeType) Ptr() *TransactionDiscountCodeType {
	return &v
}

type NullableTransactionDiscountCodeType struct {
	value *TransactionDiscountCodeType
	isSet bool
}

func (v NullableTransactionDiscountCodeType) Get() *TransactionDiscountCodeType {
	return v.value
}

func (v *NullableTransactionDiscountCodeType) Set(val *TransactionDiscountCodeType) {
	v.value = val
	v.isSet = true
}

func (v NullableTransactionDiscountCodeType) IsSet() bool {
	return v.isSet
}

func (v *NullableTransactionDiscountCodeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTransactionDiscountCodeType(val *TransactionDiscountCodeType) *NullableTransactionDiscountCodeType {
	return &NullableTransactionDiscountCodeType{value: val, isSet: true}
}

func (v NullableTransactionDiscountCodeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTransactionDiscountCodeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

