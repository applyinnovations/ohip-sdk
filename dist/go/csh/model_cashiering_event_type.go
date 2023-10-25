/*
OPERA Cloud Cashiering API

APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package csh

import (
	"encoding/json"
	"fmt"
)

// CashieringEventType Event being generated by a Supplemental Folio.
type CashieringEventType string

// List of cashieringEventType
const (
	CASHIERINGEVENTTYPE_CHECK_OUT CashieringEventType = "CheckOut"
	CASHIERINGEVENTTYPE_EARLY_DEPARTURE CashieringEventType = "EarlyDeparture"
	CASHIERINGEVENTTYPE_ADVANCE_BILL CashieringEventType = "AdvanceBill"
	CASHIERINGEVENTTYPE_INTERIM_BILL CashieringEventType = "InterimBill"
	CASHIERINGEVENTTYPE_PASSER_BY CashieringEventType = "PasserBy"
	CASHIERINGEVENTTYPE_POST_IT CashieringEventType = "PostIt"
	CASHIERINGEVENTTYPE_CREDIT_BILL CashieringEventType = "CreditBill"
	CASHIERINGEVENTTYPE_DEPOSIT CashieringEventType = "Deposit"
	CASHIERINGEVENTTYPE_DEPOSIT_REFUND CashieringEventType = "DepositRefund"
	CASHIERINGEVENTTYPE_AUTO_FOLIO CashieringEventType = "AutoFolio"
	CASHIERINGEVENTTYPE_PREPAID_CARD CashieringEventType = "PrepaidCard"
	CASHIERINGEVENTTYPE_AUTO_SETTLEMENT CashieringEventType = "AutoSettlement"
	CASHIERINGEVENTTYPE_INFORMATION_FOLIO CashieringEventType = "InformationFolio"
	CASHIERINGEVENTTYPE_SUPPLEMENTAL_FOLIO CashieringEventType = "SupplementalFolio"
)

// All allowed values of CashieringEventType enum
var AllowedCashieringEventTypeEnumValues = []CashieringEventType{
	"CheckOut",
	"EarlyDeparture",
	"AdvanceBill",
	"InterimBill",
	"PasserBy",
	"PostIt",
	"CreditBill",
	"Deposit",
	"DepositRefund",
	"AutoFolio",
	"PrepaidCard",
	"AutoSettlement",
	"InformationFolio",
	"SupplementalFolio",
}

func (v *CashieringEventType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := CashieringEventType(value)
	for _, existing := range AllowedCashieringEventTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid CashieringEventType", value)
}

// NewCashieringEventTypeFromValue returns a pointer to a valid CashieringEventType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewCashieringEventTypeFromValue(v string) (*CashieringEventType, error) {
	ev := CashieringEventType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for CashieringEventType: valid values are %v", v, AllowedCashieringEventTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v CashieringEventType) IsValid() bool {
	for _, existing := range AllowedCashieringEventTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to cashieringEventType value
func (v CashieringEventType) Ptr() *CashieringEventType {
	return &v
}

type NullableCashieringEventType struct {
	value *CashieringEventType
	isSet bool
}

func (v NullableCashieringEventType) Get() *CashieringEventType {
	return v.value
}

func (v *NullableCashieringEventType) Set(val *CashieringEventType) {
	v.value = val
	v.isSet = true
}

func (v NullableCashieringEventType) IsSet() bool {
	return v.isSet
}

func (v *NullableCashieringEventType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCashieringEventType(val *CashieringEventType) *NullableCashieringEventType {
	return &NullableCashieringEventType{value: val, isSet: true}
}

func (v NullableCashieringEventType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCashieringEventType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

