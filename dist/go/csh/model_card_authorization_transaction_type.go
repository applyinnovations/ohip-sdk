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

// CardAuthorizationTransactionType Currently supported transaction type categories used for credit card authorization.
type CardAuthorizationTransactionType string

// List of cardAuthorizationTransactionType
const (
	CARDAUTHORIZATIONTRANSACTIONTYPE_ADDITIONAL CardAuthorizationTransactionType = "Additional"
	CARDAUTHORIZATIONTRANSACTIONTYPE_AR_PAYMENT CardAuthorizationTransactionType = "ArPayment"
	CARDAUTHORIZATIONTRANSACTIONTYPE_BATCH CardAuthorizationTransactionType = "Batch"
	CARDAUTHORIZATIONTRANSACTIONTYPE_BATCH_DEPOSIT CardAuthorizationTransactionType = "BatchDeposit"
	CARDAUTHORIZATIONTRANSACTIONTYPE_BATCH_DEPOSIT_REFUND CardAuthorizationTransactionType = "BatchDepositRefund"
	CARDAUTHORIZATIONTRANSACTIONTYPE_BILLING CardAuthorizationTransactionType = "Billing"
	CARDAUTHORIZATIONTRANSACTIONTYPE_CHECK_IN CardAuthorizationTransactionType = "CheckIn"
	CARDAUTHORIZATIONTRANSACTIONTYPE_CHECK_IN_MANUAL_AUTH CardAuthorizationTransactionType = "CheckInManualAuth"
	CARDAUTHORIZATIONTRANSACTIONTYPE_DEPOSIT CardAuthorizationTransactionType = "Deposit"
	CARDAUTHORIZATIONTRANSACTIONTYPE_END_OF_DAY CardAuthorizationTransactionType = "EndOfDay"
	CARDAUTHORIZATIONTRANSACTIONTYPE_END_OF_DAY_DEPOSIT CardAuthorizationTransactionType = "EndOfDayDeposit"
	CARDAUTHORIZATIONTRANSACTIONTYPE_MANUAL CardAuthorizationTransactionType = "Manual"
	CARDAUTHORIZATIONTRANSACTIONTYPE_OTHER CardAuthorizationTransactionType = "Other"
	CARDAUTHORIZATIONTRANSACTIONTYPE_PASSER_BY CardAuthorizationTransactionType = "PasserBy"
	CARDAUTHORIZATIONTRANSACTIONTYPE_POST_IT CardAuthorizationTransactionType = "PostIt"
	CARDAUTHORIZATIONTRANSACTIONTYPE_PRE_CHECK_IN CardAuthorizationTransactionType = "PreCheckIn"
	CARDAUTHORIZATIONTRANSACTIONTYPE_REFUND CardAuthorizationTransactionType = "Refund"
	CARDAUTHORIZATIONTRANSACTIONTYPE_SCHEDULED CardAuthorizationTransactionType = "Scheduled"
)

// All allowed values of CardAuthorizationTransactionType enum
var AllowedCardAuthorizationTransactionTypeEnumValues = []CardAuthorizationTransactionType{
	"Additional",
	"ArPayment",
	"Batch",
	"BatchDeposit",
	"BatchDepositRefund",
	"Billing",
	"CheckIn",
	"CheckInManualAuth",
	"Deposit",
	"EndOfDay",
	"EndOfDayDeposit",
	"Manual",
	"Other",
	"PasserBy",
	"PostIt",
	"PreCheckIn",
	"Refund",
	"Scheduled",
}

func (v *CardAuthorizationTransactionType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := CardAuthorizationTransactionType(value)
	for _, existing := range AllowedCardAuthorizationTransactionTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid CardAuthorizationTransactionType", value)
}

// NewCardAuthorizationTransactionTypeFromValue returns a pointer to a valid CardAuthorizationTransactionType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewCardAuthorizationTransactionTypeFromValue(v string) (*CardAuthorizationTransactionType, error) {
	ev := CardAuthorizationTransactionType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for CardAuthorizationTransactionType: valid values are %v", v, AllowedCardAuthorizationTransactionTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v CardAuthorizationTransactionType) IsValid() bool {
	for _, existing := range AllowedCardAuthorizationTransactionTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to cardAuthorizationTransactionType value
func (v CardAuthorizationTransactionType) Ptr() *CardAuthorizationTransactionType {
	return &v
}

type NullableCardAuthorizationTransactionType struct {
	value *CardAuthorizationTransactionType
	isSet bool
}

func (v NullableCardAuthorizationTransactionType) Get() *CardAuthorizationTransactionType {
	return v.value
}

func (v *NullableCardAuthorizationTransactionType) Set(val *CardAuthorizationTransactionType) {
	v.value = val
	v.isSet = true
}

func (v NullableCardAuthorizationTransactionType) IsSet() bool {
	return v.isSet
}

func (v *NullableCardAuthorizationTransactionType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCardAuthorizationTransactionType(val *CardAuthorizationTransactionType) *NullableCardAuthorizationTransactionType {
	return &NullableCardAuthorizationTransactionType{value: val, isSet: true}
}

func (v NullableCardAuthorizationTransactionType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCardAuthorizationTransactionType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}
