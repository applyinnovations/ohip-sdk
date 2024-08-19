/*
OPERA Cloud Sales Event Management API

APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evm

import (
	"encoding/json"
	"fmt"
)

// PrepaidCardTrxTypeType Reload transaction.
type PrepaidCardTrxTypeType string

// List of prepaidCardTrxTypeType
const (
	PREPAIDCARDTRXTYPETYPE_ACTIVATE PrepaidCardTrxTypeType = "Activate"
	PREPAIDCARDTRXTYPETYPE_CANCEL PrepaidCardTrxTypeType = "Cancel"
	PREPAIDCARDTRXTYPETYPE_CASHOUT PrepaidCardTrxTypeType = "Cashout"
	PREPAIDCARDTRXTYPETYPE_INQUIRY PrepaidCardTrxTypeType = "Inquiry"
	PREPAIDCARDTRXTYPETYPE_ISSUE PrepaidCardTrxTypeType = "Issue"
	PREPAIDCARDTRXTYPETYPE_REDEEM PrepaidCardTrxTypeType = "Redeem"
	PREPAIDCARDTRXTYPETYPE_RELOAD PrepaidCardTrxTypeType = "Reload"
)

// All allowed values of PrepaidCardTrxTypeType enum
var AllowedPrepaidCardTrxTypeTypeEnumValues = []PrepaidCardTrxTypeType{
	"Activate",
	"Cancel",
	"Cashout",
	"Inquiry",
	"Issue",
	"Redeem",
	"Reload",
}

func (v *PrepaidCardTrxTypeType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := PrepaidCardTrxTypeType(value)
	for _, existing := range AllowedPrepaidCardTrxTypeTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid PrepaidCardTrxTypeType", value)
}

// NewPrepaidCardTrxTypeTypeFromValue returns a pointer to a valid PrepaidCardTrxTypeType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewPrepaidCardTrxTypeTypeFromValue(v string) (*PrepaidCardTrxTypeType, error) {
	ev := PrepaidCardTrxTypeType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for PrepaidCardTrxTypeType: valid values are %v", v, AllowedPrepaidCardTrxTypeTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v PrepaidCardTrxTypeType) IsValid() bool {
	for _, existing := range AllowedPrepaidCardTrxTypeTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to prepaidCardTrxTypeType value
func (v PrepaidCardTrxTypeType) Ptr() *PrepaidCardTrxTypeType {
	return &v
}

type NullablePrepaidCardTrxTypeType struct {
	value *PrepaidCardTrxTypeType
	isSet bool
}

func (v NullablePrepaidCardTrxTypeType) Get() *PrepaidCardTrxTypeType {
	return v.value
}

func (v *NullablePrepaidCardTrxTypeType) Set(val *PrepaidCardTrxTypeType) {
	v.value = val
	v.isSet = true
}

func (v NullablePrepaidCardTrxTypeType) IsSet() bool {
	return v.isSet
}

func (v *NullablePrepaidCardTrxTypeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePrepaidCardTrxTypeType(val *PrepaidCardTrxTypeType) *NullablePrepaidCardTrxTypeType {
	return &NullablePrepaidCardTrxTypeType{value: val, isSet: true}
}

func (v NullablePrepaidCardTrxTypeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePrepaidCardTrxTypeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

